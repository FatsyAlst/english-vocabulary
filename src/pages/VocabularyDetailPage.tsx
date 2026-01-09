import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getVocabularyByWord, getMediaById } from "../lib/vocabularyData";
import { useState, useEffect, useCallback } from "react";
import { getMediaColors } from "../lib/colors";

// Animation variants for staggered fade-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const VocabularyDetailPage = () => {
  const { mediaId, wordId } = useParams<{ mediaId: string; wordId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const fromRandom = (location.state as { fromRandom?: boolean })?.fromRandom;
  const word = wordId ? getVocabularyByWord(wordId) : undefined;
  const media = mediaId ? getMediaById(mediaId) : undefined;
  const [showTranslation, setShowTranslation] = useState(false);
  const colors = mediaId ? getMediaColors(mediaId) : getMediaColors("default");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Get current word index and adjacent words for keyboard navigation
  const wordsList = media?.words || [];
  const currentIndex = wordId ? wordsList.indexOf(wordId) : -1;
  const prevWord = currentIndex > 0 ? wordsList[currentIndex - 1] : null;
  const nextWord = currentIndex < wordsList.length - 1 ? wordsList[currentIndex + 1] : null;

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!mediaId) return;
      if (e.key === "ArrowLeft" && prevWord) {
        navigate(`/media/${mediaId}/word/${prevWord}`);
      } else if (e.key === "ArrowRight" && nextWord) {
        navigate(`/media/${mediaId}/word/${nextWord}`);
      }
    },
    [mediaId, prevWord, nextWord, navigate]
  );

  // Listen for keyboard events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Track mouse position for floating bubble (corner anchor - subtle movement)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Load voices when available
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    // Chrome loads voices asynchronously
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Web Speech API pronunciation with better voice selection
  const speak = (accent: "en-US" | "en-GB") => {
    if (!word || !("speechSynthesis" in window)) return;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = accent;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // Find the best matching voice for the accent
    // Priority: exact lang match with "natural/premium" name > exact lang match > partial match
    const findBestVoice = () => {
      const langCode = accent.toLowerCase();
      
      // Premium/natural voice keywords (these usually sound better)
      const premiumKeywords = ["natural", "premium", "enhanced", "neural", "wavenet"];
      
      // First try: exact language match with premium voice
      const premiumVoice = voices.find((v) => {
        const vLang = v.lang.toLowerCase().replace("_", "-");
        const vName = v.name.toLowerCase();
        return vLang === langCode && premiumKeywords.some(k => vName.includes(k));
      });
      if (premiumVoice) return premiumVoice;
      
      // Second try: exact language match
      const exactMatch = voices.find((v) => {
        const vLang = v.lang.toLowerCase().replace("_", "-");
        return vLang === langCode;
      });
      if (exactMatch) return exactMatch;
      
      // Third try: match by name keywords
      const keywordMatch = voices.find((v) => {
        const vName = v.name.toLowerCase();
        if (accent === "en-US") {
          return vName.includes("united states") || vName.includes("american") || 
                 (vName.includes("us") && v.lang.startsWith("en"));
        } else {
          return vName.includes("united kingdom") || vName.includes("british") || 
                 vName.includes("uk") || vName.includes("england");
        }
      });
      if (keywordMatch) return keywordMatch;
      
      // Fallback: any English voice
      return voices.find((v) => v.lang.startsWith("en"));
    };
    
    const targetVoice = findBestVoice();
    if (targetVoice) {
      utterance.voice = targetVoice;
    }
    
    speechSynthesis.speak(utterance);
  };

  if (!word) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-300 mb-4">Word Not Found</h1>
          <Link
            to={mediaId ? `/media/${mediaId}` : "/"}
            className={`${colors.text} hover:opacity-80 transition-colors`}
          >
            ← Back to {media?.title || "Gallery"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 relative">
      {/* Floating Bubble - corner anchor with subtle cursor influence */}
      {word?.mediaImage && (
        <motion.div
          className="fixed w-24 h-24 rounded-full overflow-hidden pointer-events-none z-50 hidden md:block"
          animate={{
            // Corner anchor (bottom-right) with subtle cursor influence
            x: window.innerWidth - 140 + (mousePos.x - window.innerWidth / 2) * 0.05,
            y: window.innerHeight - 140 + (mousePos.y - window.innerHeight / 2) * 0.05,
            opacity: Math.max(0.2, 1 - scrollY / 400), // Fade on scroll
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 80,
            mass: 1.2,
          }}
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/5 z-10 pointer-events-none" />
          <motion.img
            src={word.mediaImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            to={fromRandom ? "/" : (mediaId ? `/media/${mediaId}` : "/")}
            className="inline-flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to {fromRandom ? "Gallery" : (media?.title || "Gallery")}
          </Link>

          {/* Keyboard navigation arrows */}
          <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm">
            {prevWord ? (
              <Link
                to={`/media/${mediaId}/word/${prevWord}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                title="Previous word (←)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-xs">Prev</span>
              </Link>
            ) : (
              <span className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-600 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            )}
            <span className="text-zinc-600 text-xs">{currentIndex + 1}/{wordsList.length}</span>
            {nextWord ? (
              <Link
                to={`/media/${mediaId}/word/${nextWord}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                title="Next word (→)"
              >
                <span className="text-xs">Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <span className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-600 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header with word and pronunciation */}
          <motion.header variants={itemVariants} className="mb-10">
            <div className="flex items-start gap-4 flex-wrap">
              <h1 className="text-5xl md:text-7xl font-black text-white capitalize">
                {word.word}
              </h1>
              
              {/* Audio buttons */}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => speak("en-US")}
                  className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all hover:scale-105 focus:outline-none"
                  aria-label="Pronounce in American English"
                  title="US pronunciation"
                >
                  <span className="text-lg">🇺🇸</span>
                </button>
                <button
                  onClick={() => speak("en-GB")}
                  className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all hover:scale-105 focus:outline-none"
                  aria-label="Pronounce in British English"
                  title="UK pronunciation"
                >
                  <span className="text-lg">🇬🇧</span>
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-xl text-zinc-400">
                {word.pronunciation}
              </span>
              <span className="text-zinc-500">
                ({word.simplePronunciation})
              </span>
            </div>
          </motion.header>

          {/* Word Type - only show for single-meaning words */}
          {!word.senses && (
            <motion.section variants={itemVariants} className="mb-8">
              <span className={`inline-block px-4 py-2 ${colors.gradient} rounded-full text-white font-medium`}>
                {word.type}
              </span>
              {word.frequency && (
                <span className="ml-3 text-zinc-500 italic">{word.frequency}</span>
              )}
              {word.contextLabel && (
                <span className="ml-2 text-zinc-600">({word.contextLabel})</span>
              )}
            </motion.section>
          )}

          {/* Single Definition */}
          {word.definition && !word.senses && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">
                Definition
              </h2>
              <p className="text-xl text-zinc-200 leading-relaxed">
                {word.definition}
              </p>
            </motion.section>
          )}

          {/* Single Examples */}
          {word.examples && !word.senses && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                Examples
              </h2>
              <ul className="space-y-3">
                {word.examples.map((example, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className={`${colors.text} mt-1`}>•</span>
                    <span className="italic">{example}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Multiple Senses/Definitions */}
          {word.senses && word.senses.map((sense) => (
            <motion.section
              key={sense.number}
              variants={itemVariants}
              className="mb-10 p-6 bg-zinc-800/30 rounded-2xl border border-zinc-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center justify-center w-8 h-8 ${colors.gradient} rounded-full text-white font-bold text-sm`}>
                  {sense.number}
                </span>
                <span className="text-zinc-300 font-medium">{sense.type}</span>
                <span className="text-zinc-500 italic">- {sense.frequency}</span>
                {sense.contextLabel && (
                  <span className="text-zinc-600">({sense.contextLabel})</span>
                )}
              </div>
              <p className="text-xl text-zinc-200 leading-relaxed mb-4">
                {sense.definition}
              </p>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">
                Examples
              </h3>
              <ul className="space-y-2">
                {sense.examples.map((example, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className={`${colors.text} mt-1`}>•</span>
                    <span className="italic">{example}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}

          {/* Root Word */}
          {word.rootWord && (
            <motion.section
              variants={itemVariants}
              className="mb-10 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700"
            >
              <h2 className={`text-sm font-bold ${colors.text} uppercase tracking-wider mb-4`}>
                🔹 Root Word: {word.rootWord.word}
              </h2>
              
              {word.rootWord.definitions.map((def, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-zinc-300">As a {def.type}</span>
                    <span className="text-zinc-600">- {def.frequency}</span>
                  </div>
                  <p className="text-zinc-300 mb-2">{def.definition}</p>
                  <ul className="space-y-1">
                    {def.examples.map((ex, i) => (
                      <li key={i} className="text-zinc-500 text-sm italic">
                        • {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>
          )}

          {/* Word Family */}
          {word.wordFamily && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className={`text-sm font-bold ${colors.text} uppercase tracking-wider mb-4`}>
                🔹 Word Family
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {word.wordFamily.noun && (
                  <div className="p-4 bg-zinc-800/30 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase">Noun</span>
                    <p className="text-zinc-300 mt-1">{word.wordFamily.noun.join(", ")}</p>
                  </div>
                )}
                {word.wordFamily.verb && (
                  <div className="p-4 bg-zinc-800/30 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase">Verb</span>
                    <p className="text-zinc-300 mt-1">{word.wordFamily.verb.join(", ")}</p>
                  </div>
                )}
                {word.wordFamily.adjective && (
                  <div className="p-4 bg-zinc-800/30 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase">Adjective</span>
                    <p className="text-zinc-300 mt-1">{word.wordFamily.adjective.join(", ")}</p>
                  </div>
                )}
                {word.wordFamily.adverb && (
                  <div className="p-4 bg-zinc-800/30 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase">Adverb</span>
                    <p className="text-zinc-300 mt-1">{word.wordFamily.adverb.join(", ")}</p>
                  </div>
                )}
                {word.wordFamily.related && (
                  <div className="p-4 bg-zinc-800/30 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase">Related</span>
                    <p className="text-zinc-300 mt-1">{word.wordFamily.related.join(", ")}</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Etymology */}
          {word.etymology && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className={`text-sm font-bold ${colors.text} uppercase tracking-wider mb-3`}>
                🔹 Etymology
              </h2>
              <p className="text-zinc-400 italic">{word.etymology}</p>
            </motion.section>
          )}

          {/* Collocations */}
          {word.collocations && word.collocations.length > 0 && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className={`text-sm font-bold ${colors.text} uppercase tracking-wider mb-4`}>
                🔹 Common Collocations
              </h2>
              <div className="flex flex-wrap gap-2">
                {word.collocations.map((collocation, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300"
                  >
                    {collocation}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Usage Notes */}
          {word.usageNotes && word.usageNotes.length > 0 && (
            <motion.section variants={itemVariants} className="mb-10">
              <h2 className={`text-sm font-bold ${colors.text} uppercase tracking-wider mb-4`}>
                🔹 Usage Notes
              </h2>
              <ul className="space-y-3">
                {word.usageNotes.map((note, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-400"
                  >
                    <span className="text-amber-500 mt-1">⚠️</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Translation (Portuguese) */}
          {word.translation && (
            <motion.section variants={itemVariants} className="mb-10">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="flex items-center gap-3 text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4 hover:text-zinc-300 transition-colors"
              >
                <span className="text-lg">🇧🇷</span>
                Portuguese Translation
                <span className="text-xs normal-case font-normal">
                  ({showTranslation ? "Hide" : "Show"})
                </span>
              </button>
              
              {showTranslation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🇧🇷</span>
                    <span className="text-xl font-bold text-green-300">
                      {word.translation.text}
                    </span>
                  </div>
                  
                  <h3 className="text-xs text-green-600 uppercase mb-3">
                    Bilingual Examples
                  </h3>
                  <ul className="space-y-4">
                    {word.translation.examples.map((ex, index) => (
                      <li key={index} className="space-y-1">
                        <p className="text-zinc-300 italic">• {ex.english}</p>
                        <p className="text-green-400/80 text-sm ml-4">
                          → {ex.translated}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.section>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VocabularyDetailPage;

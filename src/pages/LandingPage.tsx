import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ScenePreview } from "../components/AnimePreview";
import { MediaTitleText } from "../components/AnimeTitleText";
import { useMobileWarning } from "../hooks/useMobileWarning";
import { useMousePosition } from "../hooks/useMousePosition";
import { MEDIA_TITLES } from "../lib/constant";
import { sceneData, getRandomVocabulary, searchVocabulary } from "../lib/vocabularyData";
import { SceneEntry, VocabularyWord } from "../lib/types";
import { Toaster } from "sonner";

const LandingPage = () => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ word: VocabularyWord; mediaId: string }[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const mousePosition = useMousePosition();
  const navigate = useNavigate();
  useMobileWarning();

  // Preload all GIFs on page startup with high priority
  useEffect(() => {
    Object.values(sceneData).forEach((scenes) => {
      scenes.forEach((scene) => {
        // Create link preload for browser-level priority
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = scene.src;
        document.head.appendChild(link);
        
        // Also create Image object to start loading immediately
        const img = new Image();
        img.src = scene.src;
      });
    });
  }, []);

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length >= 2) {
      setSearchResults(searchVocabulary(query).slice(0, 8)); // Limit to 8 results
    } else {
      setSearchResults([]);
    }
  };

  // Navigate to random word
  const goToRandomWord = () => {
    const random = getRandomVocabulary();
    if (random) {
      navigate(`/media/${random.mediaId}/word/${random.word.id}`, { state: { fromRandom: true } });
    }
  };

  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Toaster />
      
      {/* Page header */}
      <header className="absolute top-8 left-8 z-10">
        <h1 className="text-xl font-bold text-zinc-400">
          📚 Vocabulary Tracker
        </h1>
      </header>

      {/* Search bar and Random button */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-3">
        {/* Search bar */}
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search words..."
              className="w-48 md:w-64 px-4 py-2 pl-10 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Search results dropdown */}
          <AnimatePresence>
            {isSearchFocused && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-full bg-zinc-800/95 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden shadow-xl"
              >
                {searchResults.map(({ word, mediaId }) => (
                  <Link
                    key={`${mediaId}-${word.id}`}
                    to={`/media/${mediaId}/word/${word.id}`}
                    className="block px-4 py-3 hover:bg-zinc-700/50 transition-colors border-b border-zinc-700/50 last:border-b-0"
                  >
                    <div className="font-semibold text-zinc-200 text-sm">{word.word}</div>
                    <div className="text-xs text-zinc-500 truncate">
                      {word.definition || word.senses?.[0]?.definition}
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No results message */}
          <AnimatePresence>
            {isSearchFocused && searchQuery.length >= 2 && searchResults.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-full bg-zinc-800/95 backdrop-blur-sm border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-500"
              >
                No words found
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Random word button */}
        <button
          onClick={goToRandomWord}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 transition-all"
          title="Go to a random word"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="hidden md:inline">Random</span>
        </button>
      </div>

      {/* Media titles list */}
      <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-5xl font-black uppercase text-zinc-300 *:cursor-default md:text-7xl">
        {MEDIA_TITLES.map((title) => (
          <MediaTitleText
            key={title.id}
            title={title}
            onHover={setHoveredText}
            onHoverEnd={() => setHoveredText(null)}
            isHovered={hoveredText === title.id}
          />
        ))}
      </div>

      {/* Scene previews on hover */}
      <AnimatePresence>
        {hoveredText &&
          sceneData[hoveredText]?.map((item: SceneEntry, index: number) => (
            <ScenePreview
              key={index}
              hoveredText={hoveredText}
              item={item}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;

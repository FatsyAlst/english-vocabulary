import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VocabularyWord } from "../lib/types";
import { getMediaColors } from "../lib/colors";

type VocabularyCardProps = {
  word: VocabularyWord;
  mediaId: string;
};

export const VocabularyCard = ({ word, mediaId }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = getMediaColors(mediaId);

  return (
    <Link 
      to={`/media/${mediaId}/word/${word.id}`}
      className="block perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.4,
          ease: [0.68, -0.55, 0.265, 1.55], // cubic-bezier for snappy feel
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-2 capitalize">
              {word.word}
            </h3>
            
            {/* Type badge */}
            <span className={`mt-3 px-3 py-1 ${colors.gradient} rounded-full text-xs text-white font-medium`}>
              {word.type.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden bg-gradient-to-br ${colors.from} ${colors.to}`}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            <p className="text-lg text-white/90 italic leading-relaxed">
              "{word.examples[0]}"
            </p>
            
            {/* Click hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-white/70 text-xs font-medium">
                Click for full definition →
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

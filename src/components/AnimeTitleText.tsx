import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ANIMATION_CONFIG } from "../lib/constant";
import { MediaTitle } from "../lib/types";
import { getMediaColors } from "../lib/colors";

type MediaTitleTextProps = {
  title: MediaTitle;
  onHover: (text: string) => void;
  onHoverEnd: () => void;
  isHovered: boolean;
};

export const MediaTitleText = ({
  title,
  onHover,
  onHoverEnd,
  isHovered,
}: MediaTitleTextProps) => {
  const colors = getMediaColors(title.id);
  
  return (
    <div className="relative">
      <Link to={`/media/${title.id}`}>
        <motion.span
          data-text={title.id}
          className="transition-colors duration-300 hover:text-zinc-500"
          animate={ANIMATION_CONFIG.initial}
          whileHover={ANIMATION_CONFIG.hover}
          transition={ANIMATION_CONFIG.transition}
          onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
          onMouseMove={(e) => onHover(e.currentTarget.dataset.text!)}
          onMouseLeave={onHoverEnd}
        >
          {title.displayName}
        </motion.span>
      </Link>
      
      {/* Vocabulary count badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute -right-24 top-1/2 -translate-y-1/2 z-50 ${colors.gradient} text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg pointer-events-none whitespace-nowrap`}
          >
            {title.vocabularyCount} vocabularies
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

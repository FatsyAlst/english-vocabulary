import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ScenePreview } from "../components/AnimePreview";
import { MediaTitleText } from "../components/AnimeTitleText";
import { useMobileWarning } from "../hooks/useMobileWarning";
import { useMousePosition } from "../hooks/useMousePosition";
import { MEDIA_TITLES } from "../lib/constant";
import { sceneData } from "../lib/vocabularyData";
import { SceneEntry } from "../lib/types";
import { Toaster } from "sonner";

const LandingPage = () => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const mousePosition = useMousePosition();
  useMobileWarning();

  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Toaster />
      
      {/* Page header */}
      <header className="absolute top-8 left-8 z-10">
        <h1 className="text-xl font-bold text-zinc-400">
          📚 Vocabulary Tracker
        </h1>
      </header>

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

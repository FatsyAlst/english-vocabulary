import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VocabularyWord } from "../lib/types";
import { getMediaColors, MediaColors } from "../lib/colors";

type VocabularyCardProps = {
  word: VocabularyWord;
  mediaId: string;
};

/**
 * GlareCardBack - Faithful Aceternity GlareCard implementation
 * Holographic foil effect with mouse-tracking glare
 */
const GlareCardBack = ({ 
  colors, 
  children,
  isActive,
}: { 
  colors: MediaColors;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  // Create a very dark version of the theme color for the background
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };
  const rgb = hexToRgb(colors.hex);
  // Very dark version (15% brightness) of the theme color
  const darkBg = `rgb(${Math.round(rgb.r * 0.12)}, ${Math.round(rgb.g * 0.12)}, ${Math.round(rgb.b * 0.12)})`;
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const updateStyles = useCallback(() => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current.style.setProperty("--bg-y", `${background.y}%`);
    }
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    const rotateFactor = 0.4;
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y,
    };
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
    };

    const { background, rotate, glare } = state.current;
    background.x = 50 + percentage.x / 4 - 12.5;
    background.y = 50 + percentage.y / 3 - 16.67;
    rotate.x = -(delta.x / 3.5);
    rotate.y = delta.y / 2;
    rotate.x *= rotateFactor;
    rotate.y *= rotateFactor;
    glare.x = percentage.x;
    glare.y = percentage.y;

    updateStyles();
  }, [updateStyles]);

  const handlePointerEnter = useCallback(() => {
    isPointerInside.current = true;
    if (refElement.current) {
      setTimeout(() => {
        if (isPointerInside.current) {
          refElement.current?.style.setProperty("--duration", "0s");
        }
      }, 300);
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    isPointerInside.current = false;
    if (refElement.current) {
      refElement.current.style.removeProperty("--duration");
      refElement.current.style.setProperty("--r-x", "0deg");
      refElement.current.style.setProperty("--r-y", "0deg");
    }
  }, []);

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "16px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as React.CSSProperties;

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow": `repeating-linear-gradient(
      0deg,
      rgb(255,119,115) calc(var(--step) * 1),
      rgba(255,237,95,1) calc(var(--step) * 2),
      rgba(168,255,95,1) calc(var(--step) * 3),
      rgba(131,255,247,1) calc(var(--step) * 4),
      rgba(120,148,255,1) calc(var(--step) * 5),
      rgb(216,117,255) calc(var(--step) * 6),
      rgb(255,119,115) calc(var(--step) * 7)
    ) 0% var(--bg-y)/200% 700% no-repeat`,
    "--diagonal": `repeating-linear-gradient(
      128deg,
      #0e152e 0%,
      hsl(180,10%,60%) 3.8%,
      hsl(180,10%,60%) 4.5%,
      hsl(180,10%,60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ) var(--bg-x) var(--bg-y)/300% no-repeat`,
    "--shade": `radial-gradient(
      farthest-corner circle at var(--m-x) var(--m-y),
      rgba(255,255,255,0.1) 12%,
      rgba(255,255,255,0.15) 20%,
      rgba(255,255,255,0.25) 120%
    ) var(--bg-x) var(--bg-y)/300% no-repeat`,
    backgroundBlendMode: "hue, hue, hue, overlay",
  } as React.CSSProperties;

  return (
    <div
      ref={refElement}
      style={containerStyle}
      className="absolute inset-0 w-full h-full isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] will-change-transform"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div 
        className={`h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden ${isActive ? '[--opacity:0.6]' : ''}`}
      >
        {/* Base content layer - dark version of theme color */}
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div 
            className="h-full w-full"
            style={{ backgroundColor: darkBg }}
          >
            {children}
          </div>
        </div>
        
        {/* Glare spotlight */}
        <div 
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] will-change-[background]"
          style={{
            background: `radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)`,
          }}
        />
        
        {/* Holographic foil layer */}
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-[background] transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:[grid-area:inherit] after:[background-repeat:inherit] after:[background-attachment:inherit] after:[background-origin:inherit] after:[background-clip:inherit] after:[background-image:inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
          style={backgroundStyle}
        />
      </div>
    </div>
  );
};

export const VocabularyCard = ({ word, mediaId }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const colors = getMediaColors(mediaId);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

  // Track mouse position for scroll-based hover detection
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      if (!lastMousePos.current || !cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const { x, y } = lastMousePos.current;
      
      const isInside = 
        x >= rect.left && 
        x <= rect.right && 
        y >= rect.top && 
        y <= rect.bottom;

      if (isInside && !isHovered) {
        setIsFlipped(true);
        setIsHovered(true);
      } else if (!isInside && isHovered) {
        setIsFlipped(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isHovered]);

  return (
    <Link 
      ref={cardRef}
      to={`/media/${mediaId}/word/${word.id}`}
      className="block perspective-1000"
      onMouseEnter={() => {
        setIsFlipped(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsFlipped(true);
        setIsHovered(true);
      }}
      onBlur={() => {
        setIsFlipped(false);
        setIsHovered(false);
      }}
    >
      {/* Card container with lift effect */}
      <div 
        className="relative w-full h-64 rounded-2xl transition-transform duration-300"
        style={{
          transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full cursor-pointer rounded-2xl"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            rotateY: {
              duration: 0.4,
              ease: [0.68, -0.55, 0.265, 1.55],
            },
          }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900"
            style={{ 
              backfaceVisibility: "hidden",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isHovered ? colors.hex : "rgba(63, 63, 70, 0.5)",
            }}
          >
            {/* Subtle top accent line */}
            <div 
              className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
              style={{ backgroundColor: colors.hex }}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-3xl font-bold text-white mb-2 capitalize">
                {word.word}
              </h3>
              
              {/* Type badge with thematic background */}
              <span 
                className="mt-3 px-3 py-1 rounded-full text-xs text-white font-medium"
                style={{ backgroundColor: `${colors.hex}cc` }}
              >
                {word.type.split(" ")[0]}
              </span>
            </div>
          </div>

          {/* Back of card - with Glare Effect */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <GlareCardBack colors={colors} isActive={isHovered}>
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <p className="text-lg text-white font-medium italic leading-relaxed drop-shadow-md">
                  "{word.examples?.[0] || word.senses?.[0]?.examples?.[0] || ''}"
                </p>
                
                {/* Click hint */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-white/90 text-xs font-medium drop-shadow-sm">
                    Click for full definition →
                  </span>
                </div>
              </div>
            </GlareCardBack>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

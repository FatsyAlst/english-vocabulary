import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
  /** The color of the beam gradient - defaults to theme color */
  beamColor?: string;
}

/**
 * TracingBeam - A vertical beam that follows scroll progress
 * Inspired by Aceternity UI's implementation
 * Creates an elegant visual indicator of reading progress
 */
export const TracingBeam = ({
  children,
  className = "",
  beamColor = "#f97316", // Orange for DBZ theme
}: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Track scroll progress within the content area
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for the beam
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  // Update SVG height when content changes
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Re-calculate on window resize and after initial render
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    // Delay to ensure content is rendered
    const timer = setTimeout(updateHeight, 100);
    
    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
    >
      {/* Beam container - positioned inside a max-width wrapper */}
      <div className="max-w-3xl mx-auto relative">
        {/* The tracing beam line */}
        <div className="absolute left-0 top-3 -ml-4 md:-ml-12 lg:-ml-20 hidden md:block">
          {/* Dot at the top */}
          <motion.div
            className="relative z-10 h-4 w-4 rounded-full border border-zinc-600 shadow-sm flex items-center justify-center bg-zinc-900"
            style={{
              boxShadow: `0 0 10px 2px ${beamColor}40`,
            }}
          >
            <motion.div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: beamColor,
                boxShadow: `0 0 8px ${beamColor}`,
              }}
            />
          </motion.div>

          {/* SVG Path with gradient beam */}
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="block -ml-[2px]"
            aria-hidden="true"
          >
            {/* Background path (static line) */}
            <path
              d={`M 10 0 V ${svgHeight}`}
              fill="none"
              stroke="#3f3f46"
              strokeWidth="1"
            />
            {/* Animated gradient beam */}
            <motion.path
              d={`M 10 0 V ${svgHeight}`}
              fill="none"
              stroke={`url(#beam-gradient-${beamColor.replace('#', '')})`}
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id={`beam-gradient-${beamColor.replace('#', '')}`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor={beamColor} stopOpacity="0" />
                <stop stopColor={beamColor} stopOpacity="1" />
                <stop offset="0.5" stopColor={beamColor} stopOpacity="1" />
                <stop offset="1" stopColor={beamColor} stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default TracingBeam;

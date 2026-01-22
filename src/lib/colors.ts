// Media-specific color themes
// Each media has its own gradient colors based on its aesthetic

export type MediaColors = {
  from: string;
  to: string;
  text: string;
  accent: string;
  gradient: string;
  hex: string;      // Primary hex color for CSS custom properties
  hexLight: string; // Lighter variant for glows
};

export const MEDIA_COLORS: Record<string, MediaColors> = {
  dragonBall: {
    from: "from-orange-600",
    to: "to-amber-600",
    text: "text-orange-400",
    accent: "text-orange-300",
    gradient: "bg-gradient-to-r from-orange-600 to-amber-600",
    hex: "#ea580c",
    hexLight: "#fb923c",
  },
  f1: {
    from: "from-red-600",
    to: "to-rose-500",
    text: "text-red-400",
    accent: "text-red-300",
    gradient: "bg-gradient-to-r from-red-600 to-rose-500",
    hex: "#dc2626",
    hexLight: "#f87171",
  },
  peakyBlinders: {
    from: "from-slate-700",
    to: "to-slate-500",
    text: "text-slate-400",
    accent: "text-slate-300",
    gradient: "bg-gradient-to-r from-slate-700 to-slate-500",
    hex: "#334155",
    hexLight: "#64748b",
  },
  // Default fallback
  default: {
    from: "from-violet-600",
    to: "to-indigo-600",
    text: "text-violet-400",
    accent: "text-violet-300",
    gradient: "bg-gradient-to-r from-violet-600 to-indigo-600",
    hex: "#7c3aed",
    hexLight: "#a78bfa",
  },
};

export function getMediaColors(mediaId: string): MediaColors {
  return MEDIA_COLORS[mediaId] || MEDIA_COLORS.default;
}

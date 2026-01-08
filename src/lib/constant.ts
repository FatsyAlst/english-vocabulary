import { MediaTitle } from "./types";

export const ANIMATION_CONFIG = {
  initial: {
    scaleY: 1.15,
  },
  hover: {
    scaleY: 1.3,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const MEDIA_TITLES: MediaTitle[] = [
  { id: "dragonBall", displayName: "dragon ball z", vocabularyCount: 3 },
  { id: "f1", displayName: "f1", vocabularyCount: 0 },
  { id: "peakyBlinders", displayName: "peaky blinders", vocabularyCount: 0 },
];
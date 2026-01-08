export type MousePosition = {
  x: number;
  y: number;
};

export type MediaTitle = {
  id: string;
  displayName: string;
  coverImage?: string;
  vocabularyCount: number;
};

export type SceneEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
};

export type VocabularyWord = {
  id: string;
  word: string;
  type: string;
  pronunciation: string;
  simplePronunciation: string;
  frequency?: string;
  contextLabel?: string;
  definition: string;
  examples: string[];
  rootWord?: {
    word: string;
    pronunciation: string;
    definitions: {
      type: string;
      frequency: string;
      definition: string;
      examples: string[];
    }[];
  };
  wordFamily?: {
    noun?: string[];
    verb?: string[];
    adjective?: string[];
    adverb?: string[];
    related?: string[];
  };
  etymology?: string;
  collocations?: string[];
  usageNotes?: string[];
  translation?: {
    language: string;
    text: string;
    examples: {
      english: string;
      translated: string;
    }[];
  };
  mediaImage?: string;
};

export type MediaData = {
  id: string;
  title: string;
  coverImage?: string;
  vocabularyCount: number;
  words: string[];
  scenes: SceneEntry[];
};
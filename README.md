# 📚 English Vocabulary Tracker

A personal vocabulary learning tracker built with React and Framer Motion. Track vocabulary words learned from your favorite media (anime, movies, series) with beautiful animations and organized definitions.

## ✨ Features

- **Landing Gallery** - Browse media titles with parallax hover effects
- **Search Bar** - Quickly find any word across all media (searches in definitions, examples, and word names)
- **Random Word** - Click to jump to a random vocabulary word for quick review
- **Vocabulary Cards** - Flip cards to reveal example sentences
- **Detailed Definitions** - Full word explanations following Oxford dictionary format
- **Keyboard Navigation** - Use ← → arrow keys to navigate between words in vocabulary detail view
- **Audio Pronunciation** - Web Speech API for US/UK pronunciation with premium voice selection
- **Portuguese Translations** - Toggle bilingual examples for learners
- **Floating Bubble Animation** - Custom media images appear with smooth parallax effects on specific words

## 🛠️ Technologies

- `React 18` + `TypeScript`
- `Framer Motion` - Smooth animations
- `Tailwind CSS` - Styling
- `React Router` - Navigation
- `Vite` - Build tool
- `Web Speech API` - Pronunciation

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AnimeTitleText.tsx    # Media title with hover effects
│   ├── AnimePreview.tsx      # Scene preview images
│   └── VocabularyCard.tsx    # Flip card component
├── pages/               # Page components
│   ├── LandingPage.tsx       # Home gallery
│   ├── MediaDetailPage.tsx   # Vocabulary grid
│   └── VocabularyDetailPage.tsx  # Word details
├── lib/                 # Data and types
│   ├── types.ts              # TypeScript types
│   ├── constant.ts           # Animation config
│   └── vocabularyData.ts     # Mock data (edit this!)
└── hooks/               # Custom React hooks
```

## 📝 Adding New Vocabulary

Edit `src/lib/vocabularyData.ts`:

### 1. Add a new media title
```typescript
export const MEDIA_TITLES: MediaTitle[] = [
  // ... existing titles
  { id: "yourMedia", displayName: "your media name", vocabularyCount: 2 },
];
```

### 2. Add scene images for hover preview
```typescript
export const sceneData: Record<string, SceneEntry[]> = {
  // ... existing scenes
  yourMedia: [
    { src: "/your-image.gif", offsetX: -460, offsetY: -190, rotate: -8 },
    // ... add 2-3 scenes
  ],
};
```

### 3. Link media to vocabulary words
```typescript
export const mediaData: Record<string, MediaData> = {
  // ... existing media
  yourMedia: {
    id: "yourMedia",
    title: "Your Media Title",
    vocabularyCount: 2,
    words: ["word1", "word2"],
    scenes: sceneData.yourMedia,
  },
};
```

### 4. Add vocabulary definitions
```typescript
export const vocabularyData: Record<string, VocabularyWord> = {
  // ... existing words
  word1: {
    id: "word1",
    word: "Word",
    type: "Noun",
    pronunciation: "[wɜːrd]",
    simplePronunciation: "WURD",
    frequency: "Common",
    definition: "Your definition here...",
    examples: [
      "Example sentence 1.",
      "Example sentence 2.",
      "Example sentence 3.",
    ],
    // Optional fields:
    rootWord: { /* ... */ },
    wordFamily: { noun: [], verb: [], adjective: [] },
    etymology: "Word origin...",
    collocations: ["common phrase 1", "common phrase 2"],
    usageNotes: ["Usage tip 1", "Usage tip 2"],
    translation: {
      language: "pt-BR",
      text: "Tradução",
      examples: [
        { english: "English example", translated: "Exemplo traduzido" }
      ]
    },
    mediaImage: "/your-image.gif", // Background for card
  },
};
```

## 🎨 Design Reference

Based on [Anime-Scene-Gallery](https://github.com/mirayatech/Anime-Scene-Gallery) with modifications for vocabulary learning.

## 📜 License

MIT - Feel free to use for your own learning projects!


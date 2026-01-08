# Vocabulary Learning Workflow

This file defines how to add new vocabulary to this project during learning sessions.

---

## � RESEARCH SOURCES

**Always verify definitions by checking online sources**, especially:
- **Oxford Dictionary** (primary source): https://www.oxfordlearnersdictionaries.com/
- Cambridge Dictionary: https://dictionary.cambridge.org/
- Merriam-Webster (for American English): https://www.merriam-webster.com/

This ensures accuracy in definitions, pronunciations, collocations, and usage examples.

---

## �🎯 WORKFLOW

1. **User provides a word/phrase** + which media it belongs to (Dragon Ball Z, F1, or Peaky Blinders)
2. **AI explains it** using ETAPA 1 format (see below)
3. **User confirms** it's correct
4. **AI adds it to the project** in `src/lib/vocabularyData.ts` + updates counts in `constant.ts`
5. **User refreshes browser** to see the new word

---

## 📖 ETAPA 1: OXFORD-STYLE EXPLANATION (ENGLISH)

### Structure Identification (PRIORITY ORDER):
- **Complex structures FIRST**: idiom, phrasal verb, collocation, compound noun, expression, proverb
- **Then basic types**: noun, verb, adjective, adverb, etc.
- **Examples**: "give up" → Phrasal Verb | "break the ice" → Idiom | "make a decision" → Collocation

### Single Meaning Format:
```
Word: [word]
Type: [type]
Pronunciation: [IPA] (simplified)
Definition: [clear definition]
Examples: [2-3 examples]
```

### Multiple Meanings Format:
- If SAME pronunciation: show once at top, then numbered definitions
- If DIFFERENT pronunciations: show pronunciation per definition
- Order by frequency: *Most Common* → *Common* → *Less Common* → *Rare*
- Add context labels when relevant: (informal), (British), (sports), etc.

### Complementary Sections (when applicable):
- 🔹 ROOT WORD: Base form with its meanings
- 🔹 WORD FAMILY: noun/verb/adjective/adverb forms
- 🔹 ETYMOLOGY: Brief origin (if interesting)
- 🔹 COMMON COLLOCATIONS: 3-5 natural pairings
- 🔹 USAGE NOTES: Common errors, similar words, register, nuances

---

## 📝 ETAPA 2: PORTUGUESE TRANSLATION (WHEN REQUESTED)

Only provide if:
- User explicitly asks, OR
- Word is particularly challenging and benefits from PT-BR context

Format:
```
Tradução para o Português: [translation]

Exemplos Bilíngues:
• [English example]
  [Portuguese translation]
```

---

## 💾 DATA FORMAT IN vocabularyData.ts

### Single-Meaning Word:
```typescript
"word-id": {
  id: "word-id",
  word: "Word Display Name",
  type: "Noun / Verb / Idiom / etc.",
  pronunciation: "[IPA]",
  simplePronunciation: "sim-pli-fied",
  frequency: "Common",
  definition: "Clear definition in English.",
  examples: [
    "Example sentence one.",
    "Example sentence two.",
  ],
  // Optional fields below...
},
```

### Multi-Meaning Word (use `senses` array instead of `definition`/`examples`):
```typescript
"word-id": {
  id: "word-id",
  word: "Word Display Name",
  type: "Verb / Noun / etc.", // general type
  pronunciation: "[IPA]",
  simplePronunciation: "sim-pli-fied",
  senses: [
    {
      number: 1,
      type: "verb",
      frequency: "Most Common",
      contextLabel: "optional label", // e.g., "informal", "British", etc.
      definition: "First meaning definition.",
      examples: ["Example 1.", "Example 2."],
    },
    {
      number: 2,
      type: "verb",
      frequency: "Common",
      definition: "Second meaning definition.",
      examples: ["Example 1.", "Example 2."],
    },
  ],
  // Optional fields below...
},
```

### Optional Fields (for both formats):
```typescript
  wordFamily: {
    noun: ["form1"],
    verb: ["form1", "form2"],
    adjective: ["form1"],
  },
  etymology: "Brief origin if interesting.",
  collocations: ["collocation one", "collocation two"],
  usageNotes: ["Note about usage."],
  rootWord: {
    word: "Root",
    pronunciation: "[IPA]",
    definitions: [{ type: "verb", frequency: "Common", definition: "...", examples: ["..."] }],
  },
  translation: {
    language: "pt-BR",
    text: "Tradução",
    examples: [{ english: "English.", translated: "Português." }],
  },
  mediaImage: dbz1, // or f1_1, peaky1, etc.
```

---

## 📊 REMEMBER TO UPDATE COUNTS

When adding a word to a media:
1. Add word ID to `mediaData[mediaId].words` array
2. Update `mediaData[mediaId].vocabularyCount`
3. Update `MEDIA_TITLES` in both `vocabularyData.ts` and `constant.ts`

---

## 🎬 CURRENT MEDIA

| ID | Display Name | Image Variables |
|----|--------------|-----------------|
| dragonBall | Dragon Ball Z | dbz1, dbz2, dbz3 |
| f1 | F1 | f1_1, f1_2, f1_3 |
| peakyBlinders | Peaky Blinders | peaky1, peaky2, peaky3 |

---

## ✅ QUALITY CHECKLIST

Before adding a word:
- [ ] Definition is clear and accurate
- [ ] Examples show real-world usage
- [ ] Collocations are natural/common
- [ ] Usage notes help avoid mistakes
- [ ] Translation is accurate (if included)
- [ ] Word ID is lowercase with hyphens (no spaces)

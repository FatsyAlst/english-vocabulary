import { VocabularyWord, MediaData, MediaTitle, SceneEntry } from "./types";

// Import GIFs from public folder
import dbz1 from "/dbz-1.gif";
import dbz2 from "/dbz-2.gif";
import dbz3 from "/dbz-3.gif";
import f1_1 from "/f1-1.gif";
import f1_2 from "/f1-2.gif";
import f1_3 from "/f1-3.gif";
import peaky1 from "/peaky-1.gif";
import peaky2 from "/peaky-2.gif";
import peaky3 from "/peaky-3.gif";

// Import banners from public folder (landscape images for media detail pages)
import dbzBanner from "/dbz-banner.jpg";
import f1Banner from "/f1-banner.jpg";
import peakyBanner from "/peaky-banner.jpg";

// Import vocabulary images
import gohanPampered from "/gohan-pampered-kid.jpg";

// ═══════════════════════════════════════════════════════════════════════
// MEDIA TITLES - Shown on landing page
// ═══════════════════════════════════════════════════════════════════════
export const MEDIA_TITLES: MediaTitle[] = [
  { id: "dragonBall", displayName: "dragon ball z", vocabularyCount: 68 },
  { id: "f1", displayName: "f1", vocabularyCount: 1 },
  { id: "peakyBlinders", displayName: "peaky blinders", vocabularyCount: 4 },
];

// ═══════════════════════════════════════════════════════════════════════
// SCENE DATA - Images shown on hover (landing page)
// ═══════════════════════════════════════════════════════════════════════
export const sceneData: Record<string, SceneEntry[]> = {
  dragonBall: [
    { src: dbz1, offsetX: -500, offsetY: -100, rotate: 3 },
    { src: dbz2, offsetX: -10, offsetY: -270, rotate: -4 },
    { src: dbz3, offsetX: 400, offsetY: -70, rotate: -2 },
  ],
  f1: [
    { src: f1_1, offsetX: -460, offsetY: -190, rotate: -8 },
    { src: f1_2, offsetX: -10, offsetY: -300, rotate: 2 },
    { src: f1_3, offsetX: 430, offsetY: -100, rotate: -4 },
  ],
  peakyBlinders: [
    { src: peaky1, offsetX: -420, offsetY: -110, rotate: -5 },
    { src: peaky2, offsetX: 50, offsetY: -200, rotate: 4 },
    { src: peaky3, offsetX: 450, offsetY: 20, rotate: 10 },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// BANNERS - Landscape images for media detail pages
// ═══════════════════════════════════════════════════════════════════════
export const banners: Record<string, string> = {
  dragonBall: dbzBanner,
  f1: f1Banner,
  peakyBlinders: peakyBanner,
};

// ═══════════════════════════════════════════════════════════════════════
// MEDIA DATA - Links media to vocabulary words
// ═══════════════════════════════════════════════════════════════════════
export const mediaData: Record<string, MediaData> = {
  dragonBall: {
    id: "dragonBall",
    title: "Dragon Ball Z",
    vocabularyCount: 71,
    words: ["scum", "safe-and-sound", "hideous", "scatter", "fierce", "grip", "threshold", "eager", "uptight", "bustling", "lucky-break", "cunning", "thereby", "unquenchable", "fiendish", "savory", "grin", "grievous", "uncanny", "nuisance", "twisted-mind", "halt", "sass", "canopy", "seized", "mischievous", "foreboding", "dicey", "tossed", "loom", "sicken", "insidious", "ensued", "diaper", "wayside", "brazen", "ruffled", "dizzy", "preposterous", "hasten", "boggling", "sluggish", "ambush", "lurk", "shrewd", "defiant", "grudge", "acquainted", "ample", "outrageous", "divert", "ponder", "stunt", "sucker", "ominous", "pester", "feistiest", "resemblance", "outstanding", "foe", "knack", "ridge", "search-your-feelings", "half-baked", "negate", "meddling", "jeopardize", "withstand", "pampered", "pay-through-the-nose", "stubborn"],
    scenes: sceneData.dragonBall,
  },
  f1: {
    id: "f1",
    title: "F1",
    vocabularyCount: 1,
    words: ["steer"],
    scenes: sceneData.f1,
  },
  peakyBlinders: {
    id: "peakyBlinders",
    title: "Peaky Blinders",
    vocabularyCount: 4,
    words: [
      "turn-a-blind-eye-to",
      "sell-someone-to-someone",
      "parley",
      "on-the-back-foot",
    ],
    scenes: sceneData.peakyBlinders,
  },
};

// ═══════════════════════════════════════════════════════════════════════
// VOCABULARY DATA - Full word definitions
// To add a new word: copy an existing entry and modify all fields
// ═══════════════════════════════════════════════════════════════════════
export const vocabularyData: Record<string, VocabularyWord> = {
  sicken: {
    id: "sicken",
    word: "Sicken",
    type: "Verb",
    pronunciation: "/ˈsɪkən/",
    simplePronunciation: "SIK-ən",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "To make someone feel very shocked, angry, and almost ill because something is so unpleasant. Synonym: disgust.",
        examples: [
          "Reading the report of the attack sickened him.",
          "The public is becoming sickened by these pictures of violence.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Less Common",
        definition: "(old-fashioned, intransitive) To become ill or get sick.",
        examples: [
          "The baby sickened and died before his first birthday.",
        ],
      },
    ],
    etymology: "c.1200: *sikenen* 'to become ill,' from *sick* (adj.) + suffix *-en* ('cause to become'). Transitive 'make sick' from 1610s. 'Affect with loathing' from 1825.",
    wordFamily: {
      verb: ["sicken", "sickens", "sickened", "sickening"],
      adjective: ["sickening"],
      related: ["sickness"],
    },
    collocations: [
      "Sicken somebody to see/hear/read…",
      "The sight/idea made him sicken",
      "Sicken with disgust/revulsion",
    ],
    usageNotes: [
      "Strong emotion: disgust + anger/shock (violence, cruelty, injustice).",
      "Modern: sicken somebody (transitive); 'become ill' archaic.",
      "Similar: disgust, nauseate, revolt.",
    ],
    translation: {
      language: "pt-BR",
      text: "Enjoar, revoltar, causar repulsa, nojo (disgust); adoecer, ficar doente (become ill, archaic)",
      examples: [
        {
          english: "Reading the report of the attack sickened him.",
          translated: "Ler o relatório do ataque o revoltou/enjoou.",
        },
        {
          english: "The public is becoming sickened by these pictures.",
          translated: "O público está ficando revoltado com essas imagens.",
        },
        {
          english: "The baby sickened and died.",
          translated: "O bebê adoeceu e morreu.",
        },
      ],
    },
  },

  insidious: {
    id: "insidious",
    word: "Insidious",
    type: "Adjective",
    pronunciation: "/ɪnˈsɪdiəs/",
    simplePronunciation: "in-SID-ee-əs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Spreading gradually or without being noticed, but causing serious harm; subtle, stealthy, treacherous.",
        examples: [
          "The insidious effects of polluted water supplies.",
          "Cancer is an insidious disease (develops slowly, unnoticed).",
          "The insidious pressures of modern life.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "Crafty, deceitful, lying in wait to entrap.",
        examples: [
          "An insidious enemy.",
          "Insidious drugs (harmful but seductive).",
        ],
      },
    ],
    etymology: "Mid-16th century: from Latin *insidiosus* 'cunning, deceitful,' from *insidiae* 'ambush, trick,' from *insidere* 'lie in wait for' (*in-* 'on' + *sedere* 'sit').",
    wordFamily: {
      adjective: ["insidious"],
      adverb: ["insidiously"],
      noun: ["insidiousness"],
      related: ["insidiate"],
    },
    collocations: [
      "Insidious effects/impact/influence",
      "Insidious disease/threat/form",
      "Insidious process",
    ],
    usageNotes: [
      "Disapproving/formal: emphasizes hidden danger that creeps up slowly.",
      "Often for diseases, influences, or changes (pollution, propaganda).",
      "Synonyms: subtle, stealthy, pernicious, treacherous; antonyms: obvious, harmless.",
    ],
    translation: {
      language: "pt-BR",
      text: "Insidioso, traiçoeiro, sorrateiro, perigoso de forma sutil, dissimulado",
      examples: [
        {
          english: "The insidious effects of polluted water.",
          translated: "Os efeitos insidiosos/sorrateiros da água contaminada.",
        },
        {
          english: "Cancer is an insidious disease.",
          translated: "O câncer é uma doença insidiosa/traiçoeira.",
        },
        {
          english: "The insidious pressures of modern life.",
          translated: "As pressões insidiosas/perigosamente sutis da vida moderna.",
        },
      ],
    },
  },

  ensued: {
    id: "ensued",
    word: "Ensued",
    type: "Verb (past tense/past participle)",
    pronunciation: "/ɪnˈsjuːd/",
    simplePronunciation: "in-SYOOD",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "Past tense/past participle of **ensue**: To happen or come after something else, especially as a result or consequence; synonym: follow.",
        examples: [
          "An argument ensued.",
          "The riot police swooped in and chaos ensued.",
          "He was arrested and a scuffle ensued.",
        ],
      },
    ],
    etymology: "Late Middle English: from Old French *ensuivre* ('follow close upon'), from Latin *insequi* (*in-* 'upon' + *sequi* 'follow'). Originally 'pursue/follow'; by 15th c., 'happen afterwards.'",
    wordFamily: {
      verb: ["ensue", "ensues", "ensued", "ensuing"],
    },
    collocations: [
      "Chaos / fighting / discussion / confusion ensued",
      "A heated debate / argument / struggle ensued",
    ],
    usageNotes: [
      "Formal/literary; implies logical consequence (not just sequence).",
      "Often negative/unpleasant outcomes (chaos, arguments, fights).",
      "Intransitive: no object needed.",
      "Everyday alternatives: followed, happened next, broke out.",
      "Often used in news/reports.",
    ],
    translation: {
      language: "pt-BR",
      text: "Seguir-se, resultar, decorrer, acontecer em seguida (especialmente como consequência)",
      examples: [
        {
          english: "An argument ensued.",
          translated: "Uma discussão se seguiu.",
        },
        {
          english: "The riot police swooped in and chaos ensued.",
          translated: "A polícia antidistúrbios interveio e o caos se seguiu.",
        },
        {
          english: "A scuffle ensued after the arrest.",
          translated: "Uma briga resultou/decorreu após a prisão.",
        },
      ],
    },
  },

  diaper: {
    id: "diaper",
    word: "Diaper",
    type: "Noun",
    pronunciation: "/ˈdaɪəpər/",
    simplePronunciation: "DYE-ə-pər",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Very Common",
        definition: "(AmE/Canadian) A piece of soft cloth or thick material folded around a baby's bottom and between its legs to absorb and hold body waste.",
        examples: [
          "The baby needs his diaper changed.",
          "Disposable diapers are very convenient.",
          "She packed a diaper bag for the trip.",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Less Common",
        definition: "(historical) A patterned fabric (linen or cotton with diamond pattern); the baby garment was originally made from this material.",
        examples: [],
      },
    ],
    etymology: "Middle English: from Old French *diapre*, Medieval Latin *diasprum*, Medieval Greek *diaspros* 'white throughout' (*dia* 'across' + *aspros* 'white'). Originally a decorative fabric with diamond pattern used for towels/napkins; by late 16th century, specifically for baby cloths.",
    wordFamily: {
      noun: ["diaper", "diapers"],
      verb: ["diaper"],
      related: ["diaper rash"],
    },
    collocations: [
      "Change a diaper",
      "Disposable/cloth diaper",
      "Diaper rash / diaper bag / diaper pin",
      "Wet diaper",
    ],
    usageNotes: [
      "Everyday word in AmE; **nappy** in BrE/Aus/NZ.",
      "Modern: mostly disposable absorbent pads.",
      "Regional note: AmE/Canadian = diaper; BrE/Aus/NZ = nappy (same thing).",
    ],
    translation: {
      language: "pt-BR",
      text: "Fralda (BrE: nappy = fralda)",
      examples: [
        {
          english: "The baby needs his diaper changed.",
          translated: "O bebê precisa trocar a fralda.",
        },
        {
          english: "Disposable diapers are very convenient.",
          translated: "Fraldas descartáveis são muito práticas.",
        },
        {
          english: "She packed a diaper bag for the trip.",
          translated: "Ela preparou uma bolsa de fraldas para a viagem.",
        },
      ],
    },
  },

  wayside: {
    id: "wayside",
    word: "Wayside",
    type: "Noun",
    pronunciation: "/ˈweɪsaɪd/",
    simplePronunciation: "WAY-side",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Common",
        definition: "The land/area at the side of a road or path; the roadside or verge.",
        examples: [
          "Wild flowers grew by the wayside.",
          "They stopped at a little wayside inn.",
        ],
      },
      {
        number: 2,
        type: "idiom",
        frequency: "Very Common",
        definition: "Fall by the wayside: To fail or be unable to continue; to stop doing something because it is too difficult, or you cannot keep up.",
        examples: [
          "Many restaurants fall by the wayside for financial reasons.",
          "At first 25 students enrolled, but several fell by the wayside and only 12 finished.",
        ],
      },
      {
        number: 3,
        type: "idiom",
        frequency: "Common",
        definition: "Fall by the wayside: To be neglected, discarded, or no longer considered/used (lose importance, be set aside).",
        examples: [
          "The plan for reform has largely fallen by the wayside.",
        ],
      },
      {
        number: 4,
        type: "adjective",
        frequency: "Less Common",
        definition: "Used before nouns to mean 'by the side of a road or path.'",
        examples: [
          "A wayside cross/shrine.",
          "A wayside café.",
        ],
      },
    ],
    etymology: "From Middle English *way-side* = *way* (road, path) + *side* (edge).",
    wordFamily: {
      noun: ["wayside", "waysides"],
      adjective: ["wayside"],
    },
    collocations: [
      "Wayside inn / café / shrine / cross",
      "Wildflowers by the wayside",
      "Fall by the wayside / left by the wayside",
    ],
    usageNotes: [
      "The idiom 'fall by the wayside' is very frequent and comes from the biblical Parable of the Sower.",
      "Can be used as both noun and adjective (before nouns).",
    ],
    translation: {
      language: "pt-BR",
      text: "Beira da estrada, beira do caminho, margem da estrada (literal); ficar pelo meio do caminho, ser deixado de lado, ser abandonado (idiom)",
      examples: [
        {
          english: "Wild flowers grew by the wayside.",
          translated: "Flores silvestres cresciam à beira do caminho / à beira da estrada.",
        },
        {
          english: "Many clubs fall by the wayside for financial reasons.",
          translated: "Muitos clubes ficam pelo meio do caminho / acabam sendo fechados por motivos financeiros.",
        },
        {
          english: "Plans for the project have fallen by the wayside.",
          translated: "Os planos para o projeto foram deixados de lado / acabaram caindo no esquecimento.",
        },
      ],
    },
  },

  brazen: {
    id: "brazen",
    word: "Brazen",
    type: "Adjective",
    pronunciation: "/ˈbreɪzn/",
    simplePronunciation: "BRAY-zən",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        contextLabel: "disapproving",
        definition: "Open, shocking behaviour done without any shame or attempt to hide it; shameless, impudent, barefaced.",
        examples: [
          "She had become brazen about the whole affair.",
          "They showed a brazen disregard for the law.",
          "His brazen admission that he had lied shocked everyone.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        contextLabel: "literal",
        definition: "Made of, or the colour of, brass; brass-like in appearance.",
        examples: [
          "A brazen shield hung over the gate.",
          "A brazen statue stood in the square.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Less Common",
        definition: "To face a difficult, embarrassing, or shameful situation in a bold, defiant way, without showing shame; to 'push through' with shameless confidence.",
        examples: [
          "Despite the criticism, she decided to brazen it out.",
          "He tried to brazen out the scandal.",
        ],
      },
    ],
    etymology: "From Old English *bræsen* 'made of brass,' from *bræs* 'brass' + suffix *-en* ('made of'). Because brass is hard and shiny, the word shifted from physical 'of brass' to figurative 'hard-faced, shameless, bold in a shocking way.'",
    wordFamily: {
      adjective: ["brazen"],
      adverb: ["brazenly"],
      noun: ["brazenness"],
      verb: ["brazen"],
    },
    collocations: [
      "Brazen lie / cheating / crime",
      "Brazen disregard / contempt (for the law, rules)",
      "Brazen attempt / display",
      "Brazen it out",
    ],
    usageNotes: [
      "Strongly negative; criticises behaviour as shameless, shocking, without respect.",
      "Very common in news or criticism: 'brazen attack,' 'brazen corruption,' 'brazen hypocrisy.'",
      "The verb 'brazen it out' is idiomatic and fairly common in formal/informal contexts.",
    ],
    translation: {
      language: "pt-BR",
      text: "Descarado, cara-de-pau, sem vergonha, ousado de forma chocante (behaviour); de latão, de bronze (literal); enfrentar com ousadia, segurar a pose, bancar o cara-de-pau (verb)",
      examples: [
        {
          english: "They showed a brazen disregard for the law.",
          translated: "Eles demonstraram um desprezo descarado/cara-de-pau pela lei.",
        },
        {
          english: "His brazen admission that he had lied shocked everyone.",
          translated: "A sua admissão descarada de que havia mentido chocou a todos.",
        },
        {
          english: "Despite the bad publicity, the candidate decided to brazen it out.",
          translated: "Apesar da má publicidade, o candidato decidiu enfrentar a situação com cara-de-pau / segurar a pose.",
        },
      ],
    },
  },

  ruffled: {
    id: "ruffled",
    word: "Ruffled",
    type: "Adjective",
    pronunciation: "/ˈrʌfəld/",
    simplePronunciation: "RUF-uhld",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        contextLabel: "clothing/design",
        definition: "Decorated with ruffles (strips of fabric gathered or pleated at one edge for decoration). Synonym: frilled.",
        examples: [
          "A ruffled blouse.",
          "Ruffled curtains.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Disturbed, irritated, or unsettled (figurative: feathers ruffled = upset).",
        examples: [
          "She was ruffled by the criticism.",
          "He tried not to look ruffled.",
        ],
      },
      {
        number: 3,
        type: "adjective",
        frequency: "Common",
        definition: "Disordered, messy, or wrinkled (hair, feathers, clothes).",
        examples: [
          "Ruffled hair.",
          "The bird's ruffled feathers.",
        ],
      },
    ],
    etymology: "From *ruffle* (v.) early 14th c. 'to disturb the smoothness of,' obscure origin (possibly Scandinavian *ruffelen* 'to wrinkle, curl'). Sense 'annoy' from 1650s; decorative sense from 1707.",
    wordFamily: {
      verb: ["ruffle", "ruffles", "ruffled", "ruffling"],
      noun: ["ruffle", "ruff"],
      adjective: ["ruffled", "unruffled"],
    },
    collocations: [
      "Ruffled blouse / collar / hem / skirt",
      "Get one's feathers ruffled (idiom: get upset)",
      "Ruffled hair / feathers / pages",
    ],
    usageNotes: [
      "Design sense: feminine, decorative (clothing).",
      "Emotional: 'ruffle feathers' = annoy someone.",
      "Opposite: unruffled = calm, undisturbed.",
    ],
    translation: {
      language: "pt-BR",
      text: "Babado, franzido, de volantes, enrugado (clothing); aborrecido, irritado, perturbado (upset); despenteado, desgrenhado, amarrotado (disarranged)",
      examples: [
        {
          english: "A ruffled blouse.",
          translated: "Uma blusa de babados / com volantes.",
        },
        {
          english: "She was ruffled by the criticism.",
          translated: "Ela ficou irritada/aborrecida com a crítica.",
        },
        {
          english: "The bird's ruffled feathers.",
          translated: "As penas desgrenhadas/arrepiadas do pássaro.",
        },
      ],
    },
  },

  dizzy: {
    id: "dizzy",
    word: "Dizzy",
    type: "Adjective",
    pronunciation: "/ˈdɪzi/",
    simplePronunciation: "DIZ-ee",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        contextLabel: "physical",
        definition: "Feeling as if everything is spinning around you and that you are not able to balance; synonym: giddy.",
        examples: [
          "Climbing so high made me feel dizzy.",
          "She had a dizzy spell and had to sit down.",
          "I felt dizzy after spinning around.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Making you feel dizzy or overwhelmed; changing very fast.",
        examples: [
          "The dizzy descent from the summit.",
          "The dizzy pace of life in Hong Kong.",
        ],
      },
      {
        number: 3,
        type: "adjective",
        frequency: "Less Common",
        contextLabel: "informal, NAmE",
        definition: "Silly or stupid; synonym: giddy.",
        examples: [
          "A dizzy blonde.",
        ],
      },
    ],
    etymology: "Old English *dysig* 'foolish, stupid'; related to Low German *dusig* 'giddy' and Old High German *tusic* 'foolish, weak.' Sense 'whirling sensation' from c.1400, merging 'foolish' with physical unsteadiness.",
    wordFamily: {
      adjective: ["dizzy", "dizzier", "dizziest"],
      adverb: ["dizzily"],
      noun: ["dizziness"],
      verb: ["dizzy"],
    },
    collocations: [
      "Feel dizzy / have a dizzy spell",
      "Dizzy with excitement/fatigue",
      "Dizzy heights (figurative: very high position)",
      "Dizzy pace/speed",
    ],
    usageNotes: [
      "Physical sense most common; 'dizzy heights' = impressive/high status; informal for 'silly' mainly US.",
    ],
    translation: {
      language: "pt-BR",
      text: "Tonto, vertiginoso, zonzo (physical); espantoso, vertiginoso (causing dizziness); bobo, tonto (silly)",
      examples: [
        {
          english: "Climbing so high made me feel dizzy.",
          translated: "Subir tão alto me deixou tonto/vertiginoso.",
        },
        {
          english: "She had a dizzy spell and had to sit down.",
          translated: "Ela teve um ataque de tontura e precisou sentar.",
        },
        {
          english: "The dizzy pace of life in Hong Kong.",
          translated: "O ritmo vertiginoso/espantoso da vida em Hong Kong.",
        },
      ],
    },
  },

  preposterous: {
    id: "preposterous",
    word: "Preposterous",
    type: "Adjective",
    pronunciation: "/prɪˈpɒstərəs/",
    simplePronunciation: "pri-POS-tə-rəs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        contextLabel: "formal",
        definition: "Completely unreasonable or ridiculous, especially in a way that shocks or annoys; absurd, outrageous.",
        examples: [
          "These claims are absolutely preposterous!",
          "It's preposterous to suggest that everything was her fault.",
          "The whole idea sounds quite preposterous.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        contextLabel: "formal",
        definition: "Unusual in a silly or shocking way (often about clothes, behaviour, prices, etc.).",
        examples: [
          "The band were famous for their preposterous clothes and haircuts.",
          "Ticket prices are absolutely preposterous.",
        ],
      },
    ],
    etymology: "Mid-16th century, from Latin *praeposterus* 'reversed, absurd' (*prae* 'before' + *post(er)us* 'coming after'), originally 'with the order reversed, back-to-front' (like 'putting the cart before the horse'), then generalized to 'absurd, ridiculous.'",
    wordFamily: {
      adjective: ["preposterous"],
      adverb: ["preposterously"],
      noun: ["preposterousness"],
    },
    collocations: [
      "Absolutely/completely/utterly preposterous",
      "Preposterous idea/claim/plan/suggestion/price",
      "Sounds/seems preposterous",
    ],
    usageNotes: [
      "Strong, emphatic word; often used to reject something as totally absurd or beyond reason, not just 'a bit silly.'",
      "Common in spoken reactions ('That's preposterous!').",
      "Similar: absurd, ridiculous, ludicrous; opposite: reasonable, sensible, logical.",
    ],
    translation: {
      language: "pt-BR",
      text: "Absurdo, ridículo, disparatado, despropositado, grotesco",
      examples: [
        {
          english: "The very idea is preposterous!",
          translated: "A ideia em si é absurda/totalmente disparatada!",
        },
        {
          english: "These claims are absolutely preposterous.",
          translated: "Essas alegações são absolutamente absurdas/ridículas.",
        },
        {
          english: "It's preposterous to suggest that everything was her fault.",
          translated: "É absurdo/despropositado sugerir que tudo foi culpa dela.",
        },
      ],
    },
  },

  hasten: {
    id: "hasten",
    word: "Hasten",
    type: "Verb",
    pronunciation: "/ˈheɪsn/",
    simplePronunciation: "HAY-sən",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        contextLabel: "formal",
        definition: "To do or say something quickly, without delay (often to clarify, correct, or add something important).",
        examples: [
          "She saw his frown and hastened to explain.",
          "He has been described as a 'charmless bore'—not by me, I hasten to add.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        contextLabel: "formal",
        definition: "To cause something (often unpleasant) to happen earlier or more quickly; to accelerate.",
        examples: [
          "The treatment she received may, in fact, have hastened her death.",
          "News of the scandal certainly hastened his departure from office.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Less Common",
        contextLabel: "literary",
        definition: "To go or move somewhere quickly; synonym: hurry.",
        examples: [
          "We hastened back to Rome.",
          "She hastened down the corridor to meet them.",
        ],
      },
    ],
    rootWord: {
      word: "Haste",
      pronunciation: "/heɪst/",
      definitions: [
        {
          type: "noun",
          frequency: "common",
          definition: "Excessive speed or urgency of movement or action; hurry.",
          examples: [
            "More haste, less speed.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["haste"],
      verb: ["hasten", "hastens", "hastened", "hastening"],
      adjective: ["hasty"],
      adverb: ["hastily"],
    },
    etymology: "Mid-16th century: extended form of the verb *haste* (from Old French *haste* 'haste, urgency'), following the pattern of verbs ending in **-en** (like 'shorten', 'widen').",
    collocations: [
      "Hasten to add/say/explain",
      "Hasten someone's death/end/decline",
      "Hasten the process/decision/end",
      "Hastened back/home/away",
    ],
    usageNotes: [
      "Register: formal/literary; in everyday speech, speakers often use 'speed up, hurry (up), rush'.",
      "'I hasten to add' is a very common fixed phrase used to soften or clarify a statement immediately.",
    ],
    translation: {
      language: "pt-BR",
      text: "Apressar-se para fazer algo; acelerar/apressar algo (especialmente ruim); voltar/apressar-se rapidamente",
      examples: [
        {
          english: "She saw his frown and hastened to explain.",
          translated: "Ela viu o cenho franzido dele e se apressou a explicar.",
        },
        {
          english: "The treatment may have hastened her death.",
          translated: "O tratamento pode ter apressado/precipitado a morte dela.",
        },
        {
          english: "We hastened back to Rome.",
          translated: "Nós nos apressamos/voltamos correndo para Roma.",
        },
      ],
    },
  },

  pester: {
    id: "pester",
    word: "Pester",
    type: "Verb",
    pronunciation: "/ˈpɛstər/",
    simplePronunciation: "PES-ter",
    frequency: "Common",
    contextLabel: "informal",
    definition:
      "To annoy or bother someone persistently, especially by repeated requests, questions, or actions; to nag or harass mildly but continually.",
    examples: [
      "The kids kept pestering their mom to buy ice cream.",
      "Journalists pestered him for an autograph all day.",
      "Stop pestering me with the same question!",
    ],
    etymology:
      'Mid-16th century: from French empestrer "encumber/impede," influenced by "pest" (vermin); originally "overcrowd/infested," extended to nagging irritation.',
    collocations: [
      "pester somebody for something",
      "pester somebody to do something",
      "keep pestering",
      "constantly pester",
      "pester with questions/calls",
    ],
    usageNotes: [
      "Informal; implies mild, repetitive annoyance (not severe harassment).",
      "Synonyms: nag, badger, bug.",
      "Often by children/animals.",
    ],
    translation: {
      language: "pt-BR",
      text: "Importunar / Incomodar / Encher o saco",
      examples: [
        {
          english: "The kids kept pestering their mom to buy ice cream.",
          translated:
            "As crianças ficaram importunando a mãe para comprar sorvete.",
        },
        {
          english: "Stop pestering me with the same question!",
          translated: "Pare de me encher com a mesma pergunta!",
        },
      ],
    },
  },

  feistiest: {
    id: "feistiest",
    word: "Feistiest",
    type: "Adjective (superlative)",
    pronunciation: "/ˈfaɪs.ti.ɪst/",
    simplePronunciation: "FY-stee-ist",
    frequency: "Common",
    definition:
      "Most feisty; superlative form describing the boldest, most spirited, quarrelsome, or energetic person/animal, often with pluck despite size/small stature.",
    examples: [
      "She's the feistiest debater in the club, never backing down.",
      "The feistiest puppy barked loudest at the big dogs.",
      "He was the feistiest candidate, full of fiery retorts.",
    ],
    rootWord: {
      word: "Feisty",
      pronunciation: "/ˈfaɪs.ti/",
      definitions: [
        {
          type: "adjective",
          frequency: "Most Common",
          definition:
            "Spirited, lively, full of determination/courage (positive).",
          examples: [
            "The feisty heroine fought against all odds.",
          ],
        },
        {
          type: "adjective",
          frequency: "Common",
          definition:
            "Touchy, quarrelsome, aggressive (negative).",
          examples: [
            "Don't provoke that feisty old man.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["feistiness"],
      adjective: ["feisty", "feistier", "feistiest"],
      adverb: ["feistily"],
      other: ["feist (small dog, archaic)"],
    },
    etymology:
      'From "feist" (small yappy dog, 18th c. U.S.), variant of "fist" (break wind, small dog); from Middle English "fysten" (fart). Evolved to spirited/aggressive.',
    collocations: [
      "feisty challenger/spirit",
      "feistiest fighter/dog",
      "get feisty",
      "feisty attitude",
    ],
    usageNotes: [
      "Mostly positive (courageous underdog); can be negative (irritable).",
      "Informal, U.S. origin.",
      "Synonyms: spirited/plucky (pos.), scrappy/testy (neg.).",
    ],
    translation: {
      language: "pt-BR",
      text: "Mais corajoso(a) / Mais aguerrido(a) / Mais brigão/brigona",
      examples: [
        {
          english: "She's the feistiest debater in the club, never backing down.",
          translated:
            "Ela é a debatedora mais aguerrida do clube, nunca recua.",
        },
        {
          english: "The feistiest puppy barked loudest at the big dogs.",
          translated:
            "O filhote mais corajoso latiu mais alto para os cães grandes.",
        },
      ],
    },
  },

  resemblance: {
    id: "resemblance",
    word: "Resemblance",
    type: "Noun",
    pronunciation: "/rɪˈzɛmbləns/",
    simplePronunciation: "rih-ZEM-bluhnce",
    frequency: "Common",
    definition:
      "The state or quality of looking like, being similar to, or sharing features with someone/something; a likeness, especially in appearance or superficial traits.",
    examples: [
      "The twins share a striking resemblance to each other.",
      "She bears a strong family resemblance to her grandmother.",
      "The new building bears little resemblance to the original design.",
    ],
    etymology:
      'Middle English from Anglo-Norman French resembla(u)nce, from resembler "to be like," based on Latin similis "like."',
    collocations: [
      "bear a resemblance (close/striking/strong/uncanny)",
      "family resemblance",
      "striking/close resemblance",
      "little/no/passing resemblance",
      "resemblance between/to A and B",
    ],
    usageNotes: [
      "Countable (points of resemblance) or uncountable (general similarity).",
      "Often visual; 'uncanny' adds eerie note.",
      "Synonyms: similarity, likeness.",
    ],
    translation: {
      language: "pt-BR",
      text: "Semelhança / Parecença",
      examples: [
        {
          english: "The twins share a striking resemblance to each other.",
          translated: "Os gêmeos compartilham uma semelhança marcante um com o outro.",
        },
        {
          english: "She bears a strong family resemblance to her grandmother.",
          translated: "Ela tem uma forte semelhança familiar com sua avó.",
        },
      ],
    },
  },

  outstanding: {
    id: "outstanding",
    word: "Outstanding",
    type: "Adjective",
    pronunciation: "/aʊtˈstændɪŋ/",
    simplePronunciation: "owt-STAN-ding",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        definition:
          "Extremely good, excellent, or superior; standing out above others in quality or achievement.",
        examples: [
          "She received an award for her outstanding performance.",
          "The restaurant serves outstanding Italian cuisine.",
          "He is an outstanding student with perfect grades.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition:
          "Still to be done, paid, solved, or dealt with; remaining unsettled.",
        examples: [
          "There are several outstanding bills on the account.",
          "Two tasks remain outstanding before deadline.",
          "Outstanding issues delayed the project launch.",
        ],
      },
      {
        number: 3,
        type: "adjective",
        frequency: "Less Common",
        definition:
          "Very noticeable or prominent due to importance.",
        examples: [
          "The outstanding features include modern amenities.",
          "An outstanding example of Gothic architecture.",
        ],
      },
    ],
    etymology:
      'From "out-stand" (protrude/remain erect), Middle English; literal "standing out," figurative "excellent" by 1600s.',
    collocations: [
      "outstanding achievement/performance/job",
      "outstanding debt/bills/issues",
      "outstanding example/player/student",
      "still outstanding",
      "truly outstanding",
    ],
    usageNotes: [
      "Context determines meaning (praise vs. pending).",
      "Positive for excellence; neutral for unpaid.",
      "Synonyms: excellent/superb (1), unpaid/pending (2).",
    ],
    translation: {
      language: "pt-BR",
      text: "Excepcional / Pendente",
      examples: [
        {
          english: "She received an award for her outstanding performance.",
          translated: "Ela recebeu um prêmio por seu desempenho excepcional.",
        },
        {
          english: "There are several outstanding bills on the account.",
          translated: "Existem várias contas pendentes na conta.",
        },
      ],
    },
  },

  foe: {
    id: "foe",
    word: "Foe",
    type: "Noun",
    pronunciation: "/foʊ/",
    simplePronunciation: "FOH",
    frequency: "Common",
    contextLabel: "literary/formal",
    definition:
      "An enemy or opponent, often personal or ideological; one who harbors enmity or opposes actively.",
    examples: [
      "The hero vanquished his greatest foe in battle.",
      "Friend or foe, everyone respected her leadership.",
      "The two nations united against a common foe.",
    ],
    etymology:
      'Old English fāh "hostile" and gefā "enemy," from West Germanic; related to "feud." Used since Middle English for foes in literature/war.',
    collocations: [
      "bitter/mortal foe",
      "common foe",
      "friend or foe",
      "greatest foe",
      "vanquish/defeat a foe",
    ],
    usageNotes: [
      "Archaic/literary in modern speech (use 'enemy' instead); poetic in fantasy/books.",
      "Can be humorous (e.g., 'chocolate is my foe' on diet).",
      "No BrE/AmE split.",
    ],
    translation: {
      language: "pt-BR",
      text: "Inimigo / Adversário",
      examples: [
        {
          english: "The hero vanquished his greatest foe in battle.",
          translated: "O herói venceu seu maior inimigo na batalha.",
        },
        {
          english: "The two nations united against a common foe.",
          translated: "As duas nações se uniram contra um inimigo comum.",
        },
      ],
    },
  },

  knack: {
    id: "knack",
    word: "Knack",
    type: "Noun",
    pronunciation: "/næk/",
    simplePronunciation: "NAK",
    frequency: "Common",
    contextLabel: "informal",
    definition:
      "A special skill, talent, or aptitude, often innate and hard to teach; a clever way of doing something.",
    examples: [
      "She has a knack for solving puzzles quickly.",
      "He's got a real knack for making friends everywhere.",
      "It takes a knack to open this jar properly.",
    ],
    etymology:
      'Late Middle English: from obsolete "knack" meaning a sharp blow/sound (imitative, like Dutch "knak" crack/snap); evolved to "trick/skill."',
    collocations: [
      "knack for (doing) something",
      "have/get a knack",
      "real/uncanny/unhappy knack",
      "knack of doing something",
    ],
    usageNotes: [
      "Always singular; positive for natural talents, can be ironic (e.g., 'unhappy knack' for bad habits).",
      "Synonyms: talent, flair, gift.",
      "Informal, no BrE/AmE split.",
    ],
    translation: {
      language: "pt-BR",
      text: "Jeito / Talento / Dom",
      examples: [
        {
          english: "She has a knack for solving puzzles quickly.",
          translated: "Ela tem um jeito para resolver quebra-cabeças rapidamente.",
        },
        {
          english: "He's got a real knack for making friends everywhere.",
          translated: "Ele tem um verdadeiro talento para fazer amigos em todos os lugares.",
        },
      ],
    },
  },

  ridge: {
    id: "ridge",
    word: "Ridge",
    type: "Noun / Verb",
    pronunciation: "/rɪdʒ/",
    simplePronunciation: "RIJ",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition:
          "A long, narrow elevated area of land, such as the top of a hill or mountain chain.",
        examples: [
          "We hiked along the windy ridge for stunning views.",
          "The Blue Ridge Mountains form a famous ridge system.",
          "They followed the mountain ridge to the summit.",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition:
          "A raised line or strip on a surface, like on skin, a roof, or plowed ground.",
        examples: [
          "The ridges on the boot soles prevent slipping.",
          "Water flowed along the ridge of the roof.",
          "Fingerprints have unique ridges and whorls.",
        ],
      },
      {
        number: 3,
        type: "noun",
        frequency: "Less Common",
        contextLabel: "geography/meteorology",
        definition:
          "An elongated elevation underwater (mid-ocean ridge) or a high-pressure zone in weather.",
        examples: [
          "The Mid-Atlantic Ridge is an undersea mountain ridge.",
          "A ridge of high pressure brought clear skies.",
        ],
      },
      {
        number: 4,
        type: "verb",
        frequency: "Common",
        definition:
          "To form or cover with ridges; to rise into one.",
        examples: [
          "Farmers ridge the fields for better drainage.",
          "The sand ridged up after the windstorm.",
        ],
      },
    ],
    etymology:
      'From Old English hrycg "back, spine, crest," related to Dutch rug and German Rücken "back."',
    collocations: [
      "mountain/hill ridge",
      "roof ridge",
      "mid-ocean ridge",
      "ridge of high pressure",
      "along the ridge",
    ],
    usageNotes: [
      "Primarily noun; verb less common.",
      "No major BrE/AmE differences.",
      "Synonyms: crest, peak (land); furrow (opposite).",
    ],
    translation: {
      language: "pt-BR",
      text: "Cume / Crista / Cumeeira",
      examples: [
        {
          english: "We hiked along the windy ridge for stunning views.",
          translated:
            "Caminhamos ao longo do cume ventoso para vistas deslumbrantes.",
        },
        {
          english: "The ridges on the boot soles prevent slipping.",
          translated:
            "As cristas nas solas das botas evitam escorregar.",
        },
      ],
    },
  },

  "search-your-feelings": {
    id: "search-your-feelings",
    word: "Search your feelings",
    type: "Expression (iconic movie quote)",
    pronunciation: "/sɜːrtʃ jɔːr ˈfiːlɪŋz/",
    simplePronunciation: "SURCH yor FEE-lingz",
    frequency: "Common (in pop culture)",
    definition:
      "To examine your emotions or intuition deeply, especially to accept a difficult reality sensed subconsciously.",
    examples: [
      "You're denying it, but search your feelings—you know he's lying.",
      "Search your feelings; deep down, you want to take the job.",
      "Like Vader said, search your feelings before deciding.",
    ],
    etymology:
      'Origin: Darth Vader says "Search your feelings, you know it to be true" during the "I am your father" revelation on Cloud City in Star Wars: Episode V - The Empire Strikes Back (1980).',
    usageNotes: [
      "Urges introspection to recognize an inner truth, often despite denial.",
      "Frequently memed, GIF'd, or referenced in debates about emotions.",
      "Not a traditional idiom but evokes self-reflection in pop culture.",
    ],
    translation: {
      language: "pt-BR",
      text: "Examine seus sentimentos / Busque em seus sentimentos",
      examples: [
        {
          english:
            "You're denying it, but search your feelings—you know he's lying.",
          translated:
            "Você está negando, mas examine seus sentimentos—você sabe que ele está mentindo.",
        },
        {
          english: "Search your feelings; deep down, you want to take the job.",
          translated:
            "Busque em seus sentimentos; no fundo, você quer aceitar o emprego.",
        },
      ],
    },
  },

  "half-baked": {
    id: "half-baked",
    word: "Half-Baked / Fully Baked",
    type: "Idiom",
    pronunciation: "/hæf beɪkt/ / /ˈfʊli beɪkt/",
    simplePronunciation: "HALF-BAYKT / FULL-ee BAYKT",
    senses: [
      {
        number: 1,
        type: "idiom (adjective phrase)",
        frequency: "Common",
        definition:
          "Imperfectly planned or developed; lacking thoroughness, often foolish or rushed—like undercooked bread.",
        examples: [
          "Your startup idea sounds half-baked; you haven't considered the costs.",
          "That's a half-baked scheme—let's refine it first.",
          "The policy proposal was half-baked and got rejected.",
        ],
      },
      {
        number: 2,
        type: "idiom (adjective phrase)",
        frequency: "Less Common",
        contextLabel: "informal/slang extension",
        definition:
          "Fully developed, mature, and ready to implement; opposite of half-baked, implying completeness like perfectly cooked goods.",
        examples: [
          "Once the plan is fully baked, we'll launch next week.",
          "Is your proposal fully baked, or still half-baked?",
          "Great, the software is fully baked and bug-free now.",
        ],
      },
    ],
    etymology:
      'From baking metaphors; "half-baked" originated in the 1600s literally for undercooked food, figurative use by 1800s.',
    usageNotes: [
      'Use "half-baked" disapprovingly for incomplete or poorly thought out ideas.',
      '"Fully baked" is common in tech/business contexts to indicate readiness.',
      "No major BrE/AmE differences.",
    ],
    translation: {
      language: "pt-BR",
      text: "Mal planejado / Totalmente desenvolvido",
      examples: [
        {
          english:
            "Your startup idea sounds half-baked; you haven't considered the costs.",
          translated:
            "Sua ideia de startup parece mal planejada; você não considerou os custos.",
        },
        {
          english: "Once the plan is fully baked, we'll launch next week.",
          translated:
            "Assim que o plano estiver totalmente desenvolvido, lançaremos na próxima semana.",
        },
      ],
    },
  },

  negate: {
    id: "negate",
    word: "Negate",
    type: "Verb",
    pronunciation: "/nɪˈɡeɪt/",
    simplePronunciation: "ni-GAYT",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        contextLabel: "formal",
        definition:
          "To deny the existence, truth, or validity of something.",
        examples: [
          "The evidence negates his alibi completely.",
          "Her testimony negated the prosecution's claims.",
          "They tried to negate the rumors with facts.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition:
          "To make something ineffective, invalid, or have no effect.",
        examples: [
          "Alcohol can negate the effects of some medicines.",
          "The new discovery negated years of previous research.",
          "Poor planning negated all their hard work.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Less Common",
        contextLabel: "grammar/technical",
        definition:
          "To make a word, phrase, or statement negative.",
        examples: [
          'In logic, "not" negates the proposition.',
          'The prefix "un-" negates the adjective.',
        ],
      },
    ],
    wordFamily: {
      noun: ["negation", "negator"],
      verb: ["negate", "negates", "negated", "negating"],
      adjective: ["negative (related)"],
      adverb: ["negatively"],
    },
    etymology:
      'From Latin negatus, past participle of negare "to deny," from neg- "not" + the root of aiere "to say." Entered English in the 17th century.',
    collocations: [
      "negate the effects",
      "completely negate",
      "negate a claim/alibi/argument",
      "negate progress/research",
      "evidence negates",
    ],
    usageNotes: [
      "Formal word; synonyms include deny, nullify, invalidate.",
      "In grammar/logic contexts, it's technical.",
      "No major BrE/AmE differences.",
      'Avoid in casual speech—use "cancel out" instead.',
    ],
    translation: {
      language: "pt-BR",
      text: "Negar / Anular",
      examples: [
        {
          english: "The evidence negates his alibi completely.",
          translated: "A evidência nega completamente seu álibi.",
        },
        {
          english: "Alcohol can negate the effects of some medicines.",
          translated: "O álcool pode anular os efeitos de alguns medicamentos.",
        },
      ],
    },
  },

  meddling: {
    id: "meddling",
    word: "Meddling",
    type: "Noun / Adjective",
    pronunciation: "/ˈmɛd.lɪŋ/",
    simplePronunciation: "MED-ling",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition:
          "The act of interfering or becoming involved in situations that are not your business, often in an annoying or harmful way.",
        examples: [
          "The bill has great potential for unnecessary bureaucratic meddling.",
          "He warned against outside meddling in domestic affairs.",
          "She was irritated by his incessant meddling.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        contextLabel: "disapproving, informal",
        definition:
          "Describing a person who interferes unwanted in others' affairs.",
        examples: [
          "He's such a meddling neighbor, always prying into everyone's business.",
          "The meddling politician tried to influence the local vote.",
          "Avoid that meddling relative during family gatherings.",
        ],
      },
    ],
    rootWord: {
      word: "Meddle",
      pronunciation: "/ˈmɛd.əl/",
      definitions: [
        {
          type: "verb",
          frequency: "Common",
          definition:
            "To interfere in or busy oneself unduly with something not involving oneself.",
          examples: [
            "Don't meddle with my plans.",
            "Politicians accused of meddling in foreign elections.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["meddle (rare)", "meddling", "meddler"],
      verb: ["meddle", "meddles", "meddled", "meddling"],
      adjective: ["meddling"],
      adverb: ["meddlingly (rare)"],
    },
    etymology:
      'From Middle English medlen "to mix, mingle," from Old French medler, ultimately from Latin miscere "to mix." Sense of unwanted interference evolved in the 16th century.',
    collocations: [
      "bureaucratic meddling",
      "constant meddling",
      "foreign meddling",
      "meddling in affairs",
      "meddling neighbor/relative",
    ],
    usageNotes: [
      'Often disapproving; "meddlesome" is a synonym adjective.',
      "Noun form is uncountable.",
      "No major BrE/AmE differences.",
      'Avoid confusing with "medal" (award).',
    ],
    translation: {
      language: "pt-BR",
      text: "Intromissão / Intrometido(a)",
      examples: [
        {
          english:
            "The bill has great potential for unnecessary bureaucratic meddling.",
          translated:
            "O projeto tem grande potencial para intromissão burocrática desnecessária.",
        },
        {
          english:
            "He's such a meddling neighbor, always prying into everyone's business.",
          translated:
            "Ele é um vizinho tão intrometido, sempre bisbilhotando os assuntos de todos.",
        },
      ],
    },
  },

  jeopardize: {
    id: "jeopardize",
    word: "Jeopardize",
    type: "Verb",
    pronunciation: "/ˈdʒɛpədaɪz/",
    simplePronunciation: "JEP-ur-dyze",
    frequency: "Common",
    definition:
      "To put something or someone in a dangerous or difficult situation, especially by taking risks or making mistakes; to endanger or threaten.",
    examples: [
      "Reckless spending could jeopardize the company's future.",
      "His careless comments jeopardized the delicate negotiations.",
      "Don't jeopardize your health by skipping meals.",
    ],
    wordFamily: {
      verb: ["jeopardize", "jeopardizes", "jeopardized", "jeopardizing"],
      noun: ["jeopardy"],
      adjective: ["jeopardous (archaic)"],
    },
    collocations: [
      "jeopardize someone's safety",
      "jeopardize the future",
      "jeopardize your health",
      "jeopardize a deal",
      "jeopardize negotiations",
    ],
    usageNotes: [
      "British spelling: 'jeopardise' (with an 's').",
      "Related noun 'jeopardy' means 'danger of loss, harm, or failure'.",
    ],
    translation: {
      language: "pt-BR",
      text: "Colocar em risco / Comprometer / Perigar",
      examples: [
        {
          english: "Reckless spending could jeopardize the company's future.",
          translated: "Gastos imprudentes poderiam comprometer o futuro da empresa.",
        },
        {
          english: "Don't jeopardize your health by skipping meals.",
          translated: "Não coloque sua saúde em risco pulando refeições.",
        },
      ],
    },
  },

  withstand: {
    id: "withstand",
    word: "Withstand",
    type: "Verb (irregular)",
    pronunciation: "[wɪðˈstænd]",
    simplePronunciation: "with-STAND",
    frequency: "Common",
    definition:
      "To remain undamaged or unaffected by; to resist or endure successfully.",
    examples: [
      "The building was designed to withstand earthquakes.",
      "She managed to withstand the pressure from her competitors.",
      "The soldiers withstood the enemy attack for three days.",
    ],
    wordFamily: {
      verb: ["withstand", "withstands", "withstood", "withstanding"],
      noun: ["withstander (rare)"],
    },
    etymology:
      'From Old English "withstandan" - "with" (against) + "standan" (to stand). Literally "to stand against."',
    collocations: [
      "withstand pressure",
      "withstand the test of time",
      "withstand scrutiny",
      "withstand an attack",
      "designed to withstand",
    ],
    usageNotes: [
      'Past tense is "withstood" (irregular), not "withstanded."',
      'Similar to "endure" and "resist" but implies more active opposition or structural strength.',
    ],
    translation: {
      language: "pt-BR",
      text: "Resistir / Suportar / Aguentar",
      examples: [
        {
          english: "The building was designed to withstand earthquakes.",
          translated: "O prédio foi projetado para resistir a terremotos.",
        },
        {
          english:
            "She managed to withstand the pressure from her competitors.",
          translated:
            "Ela conseguiu suportar a pressão de seus concorrentes.",
        },
      ],
    },
  },

  resilient: {
    id: "resilient",
    word: "Resilient",
    type: "Adjective",
    pronunciation: "[rɪˈzɪliənt]",
    simplePronunciation: "ri-ZIL-ee-ent",
    frequency: "Common",
    definition:
      "Able to recover quickly from difficulties; tough and adaptable. Also: able to spring back into shape after being bent or stretched.",
    examples: [
      "Children are often more resilient than adults give them credit for.",
      "The economy proved surprisingly resilient during the crisis.",
      "Rubber is a resilient material that bounces back to its original shape.",
    ],
    wordFamily: {
      noun: ["resilience", "resiliency"],
      adjective: ["resilient"],
      adverb: ["resiliently"],
    },
    etymology:
      'From Latin "resilire" meaning "to leap back, rebound." Originally used in physics for materials that spring back.',
    collocations: [
      "emotionally resilient",
      "resilient economy",
      "resilient to change",
      "prove resilient",
      "remarkably resilient",
    ],
    translation: {
      language: "pt-BR",
      text: "Resiliente",
      examples: [
        {
          english:
            "Children are often more resilient than adults give them credit for.",
          translated:
            "As crianças são frequentemente mais resilientes do que os adultos reconhecem.",
        },
      ],
    },
  },

  pampered: {
    id: "pampered",
    word: "Pampered",
    type: "Adjective / Past Participle (derived from verb 'pamper')",
    pronunciation: "[ˈpæmpərd]",
    simplePronunciation: "PAM-perd",
    frequency: "Common",
    definition:
      "Treated with too much care and attention; indulged, often in a way that makes someone less independent.",
    examples: [
      "He’s a pampered kid who never had to do chores.",
      "The guests were pampered with great food and constant service.",
      "After the marathon, she pampered herself with a hot bath.",
    ],
    rootWord: {
      word: "Pamper",
      pronunciation: "[ˈpæmpə(r)]",
      definitions: [
        {
          type: "verb",
          frequency: "Common",
          definition:
            "To treat someone with excessive care, attention, or luxury; to spoil or indulge them.",
          examples: [
            "They pampered the baby all day.",
            "He likes to pamper his dog with treats.",
          ],
        },
      ],
    },
    wordFamily: {
      verb: ["pamper", "pampers", "pampered", "pampering"],
      adjective: ["pampered", "pampering"],
      noun: ["pampering"],
    },
    collocations: [
      "pampered kid/child",
      "pampered lifestyle",
      "pampered pet",
      "pamper yourself",
      "pamper someone with",
    ],
    usageNotes: [
      '"Pampered" is often negative when it implies someone is spoiled or not used to responsibility.',
      'It can also be positive/neutral when talking about comfort or self-care ("pamper yourself").',
    ],
    translation: {
      language: "pt-BR",
      text: "Mimado / Paparicado",
      examples: [
        {
          english: "He’s a pampered kid who never had to do chores.",
          translated: "Ele é um garoto mimado que nunca precisou fazer tarefas de casa.",
        },
        {
          english: "After the marathon, she pampered herself with a hot bath.",
          translated: "Depois da maratona, ela se paparicou com um banho quente.",
        },
      ],
    },
    mediaImage: gohanPampered,
  },

  relentless: {
    id: "relentless",
    word: "Relentless",
    type: "Adjective",
    pronunciation: "[rɪˈlentləs]",
    simplePronunciation: "ri-LENT-less",
    frequency: "Common",
    definition:
      "Oppressively constant; incessant. Also: showing no letting up of severity, intensity, or strength; unremitting.",
    examples: [
      "The relentless rain continued for days without stopping.",
      "She faced relentless criticism from the media.",
      "His relentless pursuit of excellence made him a champion.",
    ],
    wordFamily: {
      verb: ["relent"],
      adjective: ["relentless", "unrelenting"],
      adverb: ["relentlessly"],
      noun: ["relentlessness"],
    },
    etymology:
      'From "relent" (to soften, give way) + "-less" (without). Someone who is relentless does not relent or give up.',
    collocations: [
      "relentless pursuit",
      "relentless pressure",
      "relentless attack",
      "relentless pace",
      "relentless determination",
    ],
    usageNotes: [
      'Can have both positive (determined, persistent) and negative (harsh, oppressive) connotations depending on context.',
      '"Unrelenting" is a synonym with similar meaning.',
    ],
    translation: {
      language: "pt-BR",
      text: "Implacável / Incansável / Incessante",
      examples: [
        {
          english: "His relentless pursuit of excellence made him a champion.",
          translated:
            "Sua busca incansável pela excelência o tornou um campeão.",
        },
      ],
    },
  },

  unwavering: {
    id: "unwavering",
    word: "Unwavering",
    type: "Adjective",
    pronunciation: "[ʌnˈweɪvərɪŋ]",
    simplePronunciation: "un-WAY-ver-ing",
    frequency: "Common",
    definition:
      "Steady or resolute; not wavering or fluctuating. Showing firm determination or fixed purpose.",
    examples: [
      "She showed unwavering loyalty to her team.",
      "His unwavering commitment to justice inspired many.",
      "Despite the setbacks, her unwavering optimism kept everyone motivated.",
    ],
    wordFamily: {
      verb: ["waver"],
      adjective: ["unwavering", "wavering"],
      adverb: ["unwaveringly"],
    },
    collocations: [
      "unwavering support",
      "unwavering commitment",
      "unwavering loyalty",
      "unwavering dedication",
      "unwavering faith",
    ],
    translation: {
      language: "pt-BR",
      text: "Inabalável / Firme / Constante",
      examples: [
        {
          english: "She showed unwavering loyalty to her team.",
          translated: "Ela demonstrou lealdade inabalável à sua equipe.",
        },
      ],
    },
  },

  futile: {
    id: "futile",
    word: "Futile",
    type: "Adjective",
    pronunciation: "[ˈfjuːtaɪl]",
    simplePronunciation: "FYOO-tile",
    frequency: "Common",
    definition:
      "Incapable of producing any useful result; pointless or ineffective.",
    examples: [
      "It was futile to argue with someone so stubborn.",
      "Their attempts to escape proved futile.",
      "Resistance is futile when facing overwhelming odds.",
    ],
    wordFamily: {
      noun: ["futility"],
      adjective: ["futile"],
      adverb: ["futilely"],
    },
    etymology:
      'From Latin "futilis" meaning "leaky, worthless" - like a vessel that cannot hold water.',
    collocations: [
      "futile attempt",
      "futile effort",
      "prove futile",
      "seem futile",
      "utterly futile",
    ],
    usageNotes: [
      'Often used in the phrase "resistance is futile" (popularized by Star Trek).',
      '"Futile" emphasizes the impossibility of success, while "useless" is more general.',
    ],
    translation: {
      language: "pt-BR",
      text: "Fútil / Inútil / Vão",
      examples: [
        {
          english: "Their attempts to escape proved futile.",
          translated: "Suas tentativas de escapar se provaram inúteis.",
        },
      ],
    },
  },

  devastation: {
    id: "devastation",
    word: "Devastation",
    type: "Noun",
    pronunciation: "[ˌdevəˈsteɪʃən]",
    simplePronunciation: "dev-uh-STAY-shun",
    frequency: "Common",
    definition:
      "Great destruction or damage; severe and overwhelming shock or grief.",
    examples: [
      "The earthquake caused widespread devastation across the region.",
      "She couldn't hide her devastation at the news.",
      "The devastation left by the war took decades to rebuild.",
    ],
    wordFamily: {
      verb: ["devastate"],
      noun: ["devastation", "devastator"],
      adjective: ["devastating", "devastated"],
      adverb: ["devastatingly"],
    },
    collocations: [
      "widespread devastation",
      "total/complete devastation",
      "emotional devastation",
      "cause devastation",
      "scenes of devastation",
    ],
    translation: {
      language: "pt-BR",
      text: "Devastação",
      examples: [
        {
          english:
            "The earthquake caused widespread devastation across the region.",
          translated:
            "O terremoto causou devastação generalizada por toda a região.",
        },
      ],
    },
  },

  ethereal: {
    id: "ethereal",
    word: "Ethereal",
    type: "Adjective",
    pronunciation: "[ɪˈθɪəriəl]",
    simplePronunciation: "ih-THEER-ee-ul",
    frequency: "Less Common",
    contextLabel: "literary",
    definition:
      "Extremely delicate and light in a way that seems too perfect for this world; heavenly or spiritual.",
    examples: [
      "The ethereal beauty of the northern lights took our breath away.",
      "She had an ethereal quality that made her seem almost otherworldly.",
      "The music created an ethereal atmosphere in the concert hall.",
    ],
    wordFamily: {
      noun: ["ether", "etherealness"],
      adjective: ["ethereal"],
      adverb: ["ethereally"],
    },
    etymology:
      'From Greek "aither" meaning "upper air" - the pure, bright air breathed by the gods in Greek mythology.',
    collocations: [
      "ethereal beauty",
      "ethereal quality",
      "ethereal music",
      "ethereal light",
      "ethereal presence",
    ],
    usageNotes: [
      "Often used to describe something that seems too beautiful or delicate to be real.",
      "Common in describing music, art, and natural phenomena.",
    ],
    translation: {
      language: "pt-BR",
      text: "Etéreo / Celestial",
      examples: [
        {
          english:
            "The ethereal beauty of the northern lights took our breath away.",
          translated:
            "A beleza etérea da aurora boreal nos deixou sem fôlego.",
        },
      ],
    },
  },

  enigmatic: {
    id: "enigmatic",
    word: "Enigmatic",
    type: "Adjective",
    pronunciation: "[ˌenɪɡˈmætɪk]",
    simplePronunciation: "en-ig-MAT-ik",
    frequency: "Common",
    definition:
      "Difficult to interpret or understand; mysterious or puzzling.",
    examples: [
      "The Mona Lisa is famous for her enigmatic smile.",
      "He remained an enigmatic figure throughout his career.",
      "Her enigmatic response left everyone confused about her true intentions.",
    ],
    wordFamily: {
      noun: ["enigma"],
      adjective: ["enigmatic", "enigmatical"],
      adverb: ["enigmatically"],
    },
    etymology:
      'From Greek "ainigma" meaning "riddle" - something that puzzles or is hard to understand.',
    collocations: [
      "enigmatic smile",
      "enigmatic figure",
      "enigmatic character",
      "remain enigmatic",
      "enigmatic personality",
    ],
    translation: {
      language: "pt-BR",
      text: "Enigmático / Misterioso",
      examples: [
        {
          english: "The Mona Lisa is famous for her enigmatic smile.",
          translated: "A Mona Lisa é famosa por seu sorriso enigmático.",
        },
      ],
    },
  },

  "pay-through-the-nose": {
    id: "pay-through-the-nose",
    word: "Pay through the nose",
    type: "Idiom (verb phrase)",
    pronunciation: "[peɪ θruː ðə nəʊz]",
    simplePronunciation: "pay through thuh NOHZ",
    frequency: "Common",
    definition: "To pay an excessively high price for something; to overpay.",
    examples: [
      "We paid through the nose for last-minute tickets.",
      "If you buy it at the airport, you’ll pay through the nose.",
      "He didn’t shop around, so he paid through the nose.",
    ],
    collocations: [
      "pay through the nose for",
      "make someone pay through the nose",
      "pay through the nose to",
    ],
    usageNotes: [
      "Meaning: it’s about price, not physical pain.",
      "Often used in casual speech to complain about being overcharged.",
      "DBZ note: In the Funimation English dub of the DBZ movie Dead Zone, a character says ‘pay through the eyes’ — a misheard/altered twist on this idiom. In context it’s delivered as a threat, so it carries a vengeful ‘you’ll suffer / you’ll pay dearly’ tone rather than a literal ‘you’ll overpay.’",
      "Origin note: The idiom is recorded in English for centuries, but the exact origin is uncertain.",
    ],
    translation: {
      language: "pt-BR",
      text: "Pagar caro demais / Pagar os olhos da cara",
      examples: [
        {
          english: "We paid through the nose for last-minute tickets.",
          translated: "Pagamos caro demais por ingressos de última hora.",
        },
        {
          english: "If you buy it at the airport, you’ll pay through the nose.",
          translated: "Se você comprar no aeroporto, vai pagar os olhos da cara.",
        },
      ],
    },

  },

  steer: {
    id: "steer",
    word: "Steer",
    type: "Verb",
    pronunciation: "[stɪə(r)]",
    simplePronunciation: "steer",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        definition: "To control the direction in which a vehicle, boat, or aircraft moves.",
        examples: [
          "She steered the car carefully through traffic.",
          "The captain steered the ship into port.",
          "He steered his bike around the corner.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To guide or direct someone/something towards a particular course of action or direction.",
        examples: [
          "She steered the conversation away from politics.",
          "He steered me towards a career in tech.",
          "The teacher steered the students through the project.",
        ],
      },
    ],
    wordFamily: {
      verb: ["steer", "steers", "steered", "steering"],
      noun: ["steering"],
    },
    collocations: [
      "steer a car",
      "steer a boat",
      "steer the conversation",
      "steer towards",
      "steer clear of",
      "steering wheel",
    ],
    usageNotes: [
      "Common idiom: 'steer clear of' = avoid something or someone.",
    ],
    translation: {
      language: "pt-BR",
      text: "1. Guiar / Dirigir / Conduzir | 2. Direcionar / Orientar",
      examples: [
        {
          english: "She steered the car carefully through traffic.",
          translated: "Ela guiou o carro cuidadosamente pelo trânsito.",
        },
        {
          english: "He steered me towards a career in tech.",
          translated: "Ele me direcionou para uma carreira em tecnologia.",
        },
      ],
    },
  },

  stubborn: {
    id: "stubborn",
    word: "Stubborn",
    type: "Adjective",
    pronunciation: "[ˈstʌbən]",
    simplePronunciation: "STUB-ern",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        contextLabel: "often disapproving",
        definition: "Determined not to change your opinion or attitude; refusing to do what other people want.",
        examples: [
          "He was too stubborn to admit that he was wrong.",
          "She can be as stubborn as a mule.",
          "His stubborn refusal to listen caused problems.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Difficult to get rid of, remove, or deal with.",
        examples: [
          "That's a stubborn stain — it won't come out.",
          "She has a stubborn cough that won't go away.",
          "It's a stubborn problem with no easy solution.",
        ],
      },
    ],
    wordFamily: {
      adjective: ["stubborn"],
      adverb: ["stubbornly"],
      noun: ["stubbornness"],
    },
    collocations: [
      "stubborn refusal",
      "stubborn resistance",
      "stubborn streak",
      "stubborn stain",
      "as stubborn as a mule",
    ],
    usageNotes: [
      "Synonym: obstinate (more formal).",
    ],
    translation: {
      language: "pt-BR",
      text: "1. Teimoso / Obstinado / Cabeça-dura | 2. Persistente / Difícil de remover",
      examples: [
        {
          english: "He was too stubborn to admit that he was wrong.",
          translated: "Ele era teimoso demais para admitir que estava errado.",
        },
        {
          english: "That's a stubborn stain — it won't come out.",
          translated: "Essa é uma mancha persistente — não sai.",
        },
      ],
    },
  },

  boggling: {
    id: "boggling",
    word: "Boggling",
    type: "Adjective",
    pronunciation: "/ˈbɒɡ.lɪŋ/",
    simplePronunciation: "BOG-ling",
    frequency: "Most Common",
    definition: "Causing great surprise, astonishment, or bewilderment; overwhelming or astounding (often in 'mind-boggling').",
    examples: [
      "The mind-boggling complexity of the universe.",
      "The cost of the project is boggling.",
      "It's boggling to think how fast time flies.",
    ],
    rootWord: {
      word: "Boggle",
      pronunciation: "/ˈbɒɡ.əl/",
      definitions: [
        {
          type: "verb",
          frequency: "archaic",
          definition: "To hesitate or be astonished; to shy away in fear.",
          examples: [
            "The old verb boggle meant to hesitate in astonishment.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["boggle", "boggler"],
      verb: ["boggle", "boggles", "boggled", "boggling"],
      adjective: ["boggling"],
    },
    etymology: "Verb 'boggle' from late 16th century Scots, probably from *bogle* 'hobgoblin, spectre' (Middle English *bugge* 'bugbear,' possibly Scandinavian). 'Mind-boggling' coined mid-20th century for 'astounding'.",
    collocations: [
      "Mind-boggling (complexity/speed/cost/sums)",
      "Absolutely/completely boggling",
      "Boggling the mind/imagination",
    ],
    usageNotes: [
      "Mostly in 'mind-boggling' (informal, emphatic for incredible).",
      "Implies overwhelming scale/effect.",
      "Positive/neutral for amazement.",
      "Synonyms: astounding, staggering.",
    ],
    translation: {
      language: "pt-BR",
      text: "Espantoso, atordoante, assombroso, alucinante (especialmente mind-boggling); desconcertante",
      examples: [
        {
          english: "The mind-boggling complexity of the universe.",
          translated: "A complexidade alucinante/espantosa do universo.",
        },
        {
          english: "The cost of the project is boggling.",
          translated: "O custo do projeto é atordoante.",
        },
        {
          english: "It's boggling to think how fast time flies.",
          translated: "É assombroso pensar o quão rápido o tempo passa.",
        },
      ],
    },
  },

  sluggish: {
    id: "sluggish",
    word: "Sluggish",
    type: "Adjective",
    pronunciation: "/ˈslʌɡ.ɪʃ/",
    simplePronunciation: "SLUG-ish",
    frequency: "Most Common",
    definition: "Moving, reacting, or working more slowly than normal and in a way that seems lazy; lacking energy or speed.",
    examples: [
      "He felt very heavy and sluggish after the meal.",
      "The growth of the export market has helped to compensate for sluggish demand at home.",
      "The sluggish black waters of the canal.",
    ],
    rootWord: {
      word: "Slug",
      pronunciation: "/slʌɡ/",
      definitions: [
        {
          type: "noun",
          frequency: "archaic",
          definition: "A lazy person.",
          examples: [
            "The old word slug referred to someone lazy or slow-moving.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["sluggishness"],
      adjective: ["sluggish", "sluggisher", "sluggishest"],
      adverb: ["sluggishly"],
    },
    etymology: "Late Middle English: From the noun *slug* (lazy person) or verb *slug* (see sluggard) + *-ish*. Originally implied laziness/slothfulness, extended to slow motion by association with slugs.",
    collocations: [
      "Sluggish economy/growth/demand/sales",
      "Sluggish traffic/movement",
      "Feel sluggish",
      "Sluggish response/start",
    ],
    usageNotes: [
      "Applies to people (lethargic), economy (slow growth), machines/liquids (slow-moving).",
      "Negative connotation of underperformance.",
      "Synonyms: lethargic, slow, inactive; antonyms: brisk, lively.",
      "Often temporary (e.g., after eating).",
    ],
    translation: {
      language: "pt-BR",
      text: "Lento, vagaroso, lerdo, preguiçoso, lento (economy); apático, letárgico",
      examples: [
        {
          english: "He felt very heavy and sluggish after the meal.",
          translated: "Ele se sentiu muito pesado e lerdo/preguiçoso após a refeição.",
        },
        {
          english: "Sales were sluggish.",
          translated: "As vendas estavam lentas/vagarosas.",
        },
        {
          english: "The sluggish black waters of the canal.",
          translated: "As águas pretas lentas/vagarosas do canal.",
        },
      ],
    },
  },

  ambush: {
    id: "ambush",
    word: "Ambush",
    type: "Noun / Verb",
    pronunciation: "/ˈæm.bʊʃ/",
    simplePronunciation: "AM-boosh",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition: "The act of hiding and waiting for somebody and then making a surprise attack on them.",
        examples: [
          "Two soldiers were killed in a terrorist ambush.",
          "They were lying in ambush, waiting for the aid convoy.",
          "We ran into an ambush in the valley.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To make a surprise attack on somebody from a hidden position; to attack somebody unexpectedly.",
        examples: [
          "The guerrillas ambushed them near the bridge.",
          "She was ambushed by reporters.",
        ],
      },
    ],
    rootWord: {
      word: "Busc/hus",
      pronunciation: "/bʊsk/",
      definitions: [
        {
          type: "noun",
          frequency: "archaic",
          definition: "Wood, bush (place of hiding).",
          examples: [
            "The Latin busc referred to a place of concealment in woods.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["ambush", "ambusher"],
      verb: ["ambush", "ambushes", "ambushed", "ambushing"],
      adjective: ["ambushed"],
    },
    etymology: "Middle English: From Old French *embusche* (noun) 'position of troops in hiding,' *embuschier* (verb) 'place in a wood,' from late Latin *imboscare* 'place in a bush/wood' (related to *busk* 'bush').",
    collocations: [
      "Lie in/wait in ambush",
      "Lay/set up/prepare an ambush",
      "Terrorist/enemy ambush",
      "Ambush patrol/convoy",
      "Deadly ambush",
    ],
    usageNotes: [
      "Military core use; figurative for surprise (journalists ambushing celebs).",
      "Noun countable/uncountable.",
      "Verb transitive.",
      "Synonyms: trap, snare.",
    ],
    translation: {
      language: "pt-BR",
      text: "Emboscada, armadilha, cilada (noun); Embuscar, emboscar, surpreender/atacar de surpresa (verb)",
      examples: [
        {
          english: "Two soldiers were killed in a terrorist ambush.",
          translated: "Dois soldados foram mortos em uma emboscada terrorista.",
        },
        {
          english: "They were lying in ambush, waiting for the aid convoy.",
          translated: "Eles estavam de emboscada, esperando o comboio de ajuda.",
        },
        {
          english: "The guerrillas ambushed them near the bridge.",
          translated: "Os guerrilheiros os emboscaram perto da ponte.",
        },
      ],
    },
  },

  lurk: {
    id: "lurk",
    word: "Lurk",
    type: "Verb",
    pronunciation: "/lɜːk/",
    simplePronunciation: "lurk",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        definition: "To wait somewhere secretly, especially because you are going to do something bad or illegal.",
        examples: [
          "Why are you lurking around outside my house?",
          "A crocodile was lurking just below the surface.",
          "I saw a man lurking in the shadows.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "When something unpleasant or dangerous lurks, it is present but not in an obvious way.",
        examples: [
          "At night, danger lurks in these streets.",
          "The darker emotions that lurk beneath the surface.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Common",
        contextLabel: "computing",
        definition: "To read a discussion in a chat room, etc. on the internet, without taking part in it yourself.",
        examples: [
          "Many people lurk on forums without posting.",
        ],
      },
    ],
    rootWord: {
      word: "Lour/Lurk",
      pronunciation: "/laʊər/",
      definitions: [
        {
          type: "verb",
          frequency: "obsolete",
          definition: "To frown or look menacing.",
          examples: [
            "The old word lour meant to frown threateningly.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["lurk", "lurker"],
      verb: ["lurk", "lurks", "lurked", "lurking"],
    },
    etymology: "Middle English (c.1300): *Lurken* 'to hide, lie hidden,' probably from Scandinavian (Norwegian *lurka* 'sneak away,' Swedish *lurka* 'be slow'); or related to *luren* 'to frown, lurk' (from Middle Low German *luren*). Frequentative suffix *-k* as in 'talk.'",
    collocations: [
      "Lurk around/in the shadows/corners",
      "Lurk behind/underneath/below the surface",
      "Danger/threats lurk",
      "Lurk about",
    ],
    usageNotes: [
      "Implies stealthy, often sinister concealment or persistence.",
      "For people: sneaky/menacing intent.",
      "For abstract: latent threat.",
      "Online slang: passive reading.",
      "Synonyms: skulk (more furtive), prowl (animal-like).",
    ],
    translation: {
      language: "pt-BR",
      text: "Merodear, espreitar, rondar, esconder-se (secretly); emboscar, à espreita (ambush); espiar (online)",
      examples: [
        {
          english: "Why are you lurking around outside my house?",
          translated: "Por que você está merodeando ao redor da minha casa?",
        },
        {
          english: "A crocodile was lurking just below the surface.",
          translated: "Um crocodilo estava espreitando logo abaixo da superfície.",
        },
        {
          english: "Someone was lurking in the shadows.",
          translated: "Alguém estava à espreita nas sombras.",
        },
      ],
    },
  },

  shrewd: {
    id: "shrewd",
    word: "Shrewd",
    type: "Adjective",
    pronunciation: "/ʃruːd/",
    simplePronunciation: "shrood",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        definition: "Clever at understanding and making judgements about a situation; having or showing good judgement.",
        examples: [
          "A shrewd businessman.",
          "She is a shrewd judge of character.",
          "Paul was too shrewd to be taken in by this argument.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Showing good judgement and likely to be right.",
        examples: [
          "A shrewd move.",
          "I have a shrewd idea who the mystery caller was.",
        ],
      },
    ],
    rootWord: {
      word: "Shrew",
      pronunciation: "/ʃruː/",
      definitions: [
        {
          type: "verb",
          frequency: "obsolete",
          definition: "To curse; (noun) evil/mischievous person.",
          examples: [
            "The old word shrew meant an evil or mischievous person.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["shrewdness"],
      adjective: ["shrewd", "shrewder", "shrewdest"],
      adverb: ["shrewdly"],
    },
    etymology: "Middle English (originally 'evil in nature or character'): From *shrew* ('evil person/thing') or past participle of obsolete *shrew* 'to curse.' Evolved to 'cunning' (negative), gaining positive 'astute' sense during the 17th century.",
    collocations: [
      "Shrewd businessman/judge",
      "Shrewd move/decision/observation/guess",
      "Shrewd eyes/look",
      "Financially/politically shrewd",
      "Far from shrewd",
    ],
    usageNotes: [
      "Positive connotation of practical intelligence/prudence (business, politics).",
      "Less positive if implying cunning (vs. 'cunning' = deceitful).",
      "Formal-ish; synonyms: astute, canny, sharp.",
    ],
    translation: {
      language: "pt-BR",
      text: "Astuto, sagaz, esperto (no bom sentido), perspicaz, esperto nos negócios",
      examples: [
        {
          english: "A shrewd businessman.",
          translated: "Um empresário astuto.",
        },
        {
          english: "She is a shrewd judge of character.",
          translated: "Ela é uma boa juíza de caráter astuta/sagaz.",
        },
        {
          english: "A shrewd move.",
          translated: "Uma jogada astuta.",
        },
      ],
    },
  },

  defiant: {
    id: "defiant",
    word: "Defiant",
    type: "Adjective",
    pronunciation: "/dɪˈfaɪənt/",
    simplePronunciation: "dih-FYE-uhnt",
    frequency: "Most Common",
    definition: "Openly refusing to obey somebody/something, sometimes in an aggressive way; boldly resisting authority or opposition.",
    examples: [
      "She had suddenly turned into a defiant teenager.",
      "The terrorists sent a defiant message to the government.",
      "Sylvia tossed back her dark hair in a gesture that was openly defiant.",
    ],
    rootWord: {
      word: "Defy",
      pronunciation: "/dɪˈfaɪ/",
      definitions: [
        {
          type: "verb",
          frequency: "common",
          definition: "To resist openly or boldly; to challenge.",
          examples: [
            "He defied the court's orders.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["defiance"],
      adjective: ["defiant"],
      adverb: ["defiantly"],
      verb: ["defy", "defies", "defied"],
    },
    etymology: "Late 16th century: From French *défiant* or directly from *defiance* (from Latin *disfidare* 'renounce faith,' related to *fides* 'faith'). Implies breaking trust through bold resistance.",
    collocations: [
      "Defiant mood/attitude/air/gesture",
      "Defiant teenager/child/attitude",
      "Remain/stay defiant",
      "Slightly/openly defiant",
      "Look/appear defiant",
    ],
    usageNotes: [
      "Connotes bold, often aggressive disobedience (e.g., vs. authority).",
      "Positive in resistance contexts (e.g., civil rights); negative for rebellion.",
      "Similar to 'insubordinate/bold/rebellious.'",
      "Often with body language (gesture, stare).",
    ],
    translation: {
      language: "pt-BR",
      text: "Desafiante, desafiador, rebelde, insolente, provocante",
      examples: [
        {
          english: "She had suddenly turned into a defiant teenager.",
          translated: "Ela de repente se transformou em uma adolescente desafiante.",
        },
        {
          english: "The terrorists sent a defiant message to the government.",
          translated: "Os terroristas enviaram uma mensagem desafiante ao governo.",
        },
        {
          english: "Sylvia tossed back her dark hair in a gesture that was openly defiant.",
          translated: "Sylvia jogou o cabelo escuro para trás em um gesto abertamente desafiante.",
        },
      ],
    },
  },

  grudge: {
    id: "grudge",
    word: "Grudge",
    type: "Noun / Verb",
    pronunciation: "/ɡrʌdʒ/",
    simplePronunciation: "gruj",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition: "A feeling of anger or dislike towards somebody because of something bad they have done to you in the past, often lasting a long time.",
        examples: [
          "I bear him no grudge.",
          "He has a grudge against the world.",
          "She has harboured a grudge against me for years.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To do or give something unwillingly; grudge doing something / grudge somebody something.",
        examples: [
          "I grudge having to pay so much tax.",
          "He grudges the time he spends travelling to work.",
          "You surely don't grudge her her success?",
        ],
      },
    ],
    rootWord: {
      word: "Grutch",
      pronunciation: "/ɡrʌtʃ/",
      definitions: [
        {
          type: "verb",
          frequency: "obsolete",
          definition: "To complain, murmur, or grumble.",
          examples: [
            "The old word grutch meant to complain bitterly.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["grudge", "grudger"],
      verb: ["grudge", "grudges", "grudged", "grudging"],
      adjective: ["grudging"],
      adverb: ["grudgingly"],
    },
    etymology: "Late Middle English: Variant of obsolete *grutch* 'complain, murmur, grumble,' from Old French *grouchier* (unknown origin). Compare *grouch*. Noun sense (ill will) from c.1500; verb 'begrudge' from mid-15c.",
    collocations: [
      "Bear/hold/harbour/nurse a grudge (against somebody)",
      "Have a grudge (against somebody)",
      "Long-standing/old/personal grudge",
      "Grudge match",
      "Grudge doing something / grudge somebody something",
    ],
    usageNotes: [
      "Noun implies persistent resentment; verb expresses reluctance (formal, rare in casual speech).",
      "'Bear no grudge' = forgive.",
      "'Grudging' (adj.) means reluctant/unwilling (e.g., grudging respect).",
      "Not synonymous with 'grievance' (complaint).",
    ],
    translation: {
      language: "pt-BR",
      text: "Rancor, ressentimento, mágoa, inimizade, ojeriza (noun); Invejar, guardar rancor, fazer com má vontade, poupar (verb)",
      examples: [
        {
          english: "I bear him no grudge.",
          translated: "Eu não guardo rancor dele.",
        },
        {
          english: "She has harboured a grudge against me for years.",
          translated: "Ela nutre um rancor contra mim há anos.",
        },
        {
          english: "I grudge having to pay so much tax.",
          translated: "Eu lamento / faço com má vontade ter que pagar tanto imposto.",
        },
      ],
    },
  },

  acquainted: {
    id: "acquainted",
    word: "Acquainted",
    type: "Adjective",
    pronunciation: "/əˈkweɪn.tɪd/",
    simplePronunciation: "uh-KWAYN-tid",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        contextLabel: "formal",
        definition: "Familiar with something because you have read, seen, or experienced it.",
        examples: [
          "The students are already acquainted with the work of Shakespeare.",
          "Employees should be fully acquainted with emergency procedures.",
          "I am well acquainted with the facts of the case.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Having met someone a few times but not being close friends; having some knowledge of a person.",
        examples: [
          "We got acquainted at the conference.",
          "I am not personally acquainted with her.",
          "I am well acquainted with her family.",
        ],
      },
    ],
    rootWord: {
      word: "Acquaint",
      pronunciation: "/əˈkweɪnt/",
      definitions: [
        {
          type: "verb",
          frequency: "common",
          definition: "To make someone familiar with or aware of something.",
          examples: [
            "Let me acquaint you with the new procedures.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["acquaintance"],
      adjective: ["acquainted", "unacquainted"],
      verb: ["acquaint", "acquaints", "acquainted", "acquainting"],
    },
    etymology: "Early 13th century, 'personally known,' from past participle of *acquaint* (v.), which comes from Old French *acointer/acointier* 'make known, inform,' from Latin *accognitare* 'to make known,' related to *cognoscere* 'to know.'",
    collocations: [
      "Be/get/become acquainted with (something/somebody)",
      "Well/fully/intimately acquainted with",
      "Personally acquainted with",
      "Get acquainted at/through (a conference, friends, etc.)",
    ],
    usageNotes: [
      "Typically follows a verb: be/get/become acquainted (with), not used before a noun.",
      "More formal than 'familiar with' or 'know.'",
      "Often used in professional or written contexts.",
    ],
    translation: {
      language: "pt-BR",
      text: "Familiarizado (com), conhecedor (de), conhecido (de/por alguém), ter contato com",
      examples: [
        {
          english: "The students are already acquainted with the work of Shakespeare.",
          translated: "Os alunos já estão familiarizados com a obra de Shakespeare.",
        },
        {
          english: "We got acquainted at the conference.",
          translated: "Nós nos conhecemos / ficamos conhecidos um do outro na conferência.",
        },
        {
          english: "I am not personally acquainted with her.",
          translated: "Eu não a conheço pessoalmente.",
        },
      ],
    },
  },

  ample: {
    id: "ample",
    word: "Ample",
    type: "Adjective",
    pronunciation: "/ˈæm.pəl/",
    simplePronunciation: "AM-puhl",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        definition: "Enough or more than enough; plentiful or generous in quantity, size, or amount.",
        examples: [
          "There was ample time to get to the airport.",
          "Ample free parking is available.",
          "They had ample money for the trip.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "(of a person's figure) Large or full, often in an attractive or euphemistic way.",
        examples: [
          "She stood with her hands on her ample hips.",
          "These clothes belonged to a man of more ample girth.",
        ],
      },
    ],
    rootWord: {
      word: "Amplus",
      pronunciation: "/ˈæmplʊs/",
      definitions: [
        {
          type: "adjective",
          frequency: "archaic",
          definition: "Large, abundant.",
          examples: [
            "The Latin amplus means spacious or plentiful.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["ampleness", "amplitude"],
      adjective: ["ample", "ampler", "amplest"],
      adverb: ["amply"],
      verb: ["amplify"],
    },
    etymology: "Late Middle English: Via French *ample* from Latin *amplus* 'large, abundant.' Originally described physical spaciousness, extended to sufficiency by 16th century.",
    collocations: [
      "Ample opportunity/time/space/evidence/proof",
      "Ample room/parking/supply",
      "Ample funds/resources",
      "Ample bosom/hips/figure",
    ],
    usageNotes: [
      "Positive connotation of abundance, more formal than 'plenty/enough.'",
      "Euphemistic for body size (e.g., 'ample figure' = curvaceous/full).",
      "Synonyms: abundant, generous, sufficient.",
      "Avoid casual overuse like 'ample food.'",
    ],
    translation: {
      language: "pt-BR",
      text: "Amplo (space); abundante, suficiente, de sobra, generoso (quantity); farto (figure)",
      examples: [
        {
          english: "There was ample time to get to the airport.",
          translated: "Havia tempo amplo/suficiente de sobra para chegar ao aeroporto.",
        },
        {
          english: "Ample free parking is available.",
          translated: "Há estacionamento gratuito amplo/disponível em abundância.",
        },
        {
          english: "She stood with her hands on her ample hips.",
          translated: "Ela ficou de pé com as mãos nos quadris fartos/generosos.",
        },
      ],
    },
  },

  outrageous: {
    id: "outrageous",
    word: "Outrageous",
    type: "Adjective",
    pronunciation: "/aʊtˈreɪdʒəs/",
    simplePronunciation: "owt-RAY-juhs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        definition: "Offensive, unacceptable, or shocking, causing moral indignation.",
        examples: [
          "'That's outrageous!' he protested.",
          "Outrageous behaviour like this cannot be tolerated.",
          "It is outrageous that these buildings remain empty while thousands have no homes.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Very unusual, excessive, or bold in a shocking/amusing way (prices, clothes, statements).",
        examples: [
          "These prices are just outrageous (= much too high).",
          "She says the most outrageous things sometimes.",
          "Outrageous clothes and makeup defined the punk era.",
        ],
      },
    ],
    rootWord: {
      word: "Outrage",
      pronunciation: "/ˈaʊtreɪdʒ/",
      definitions: [
        {
          type: "noun",
          frequency: "common",
          definition: "An extremely offensive act or insult.",
          examples: [
            "The outrage caused by the scandal was widespread.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["outrage", "outrageousness"],
      adjective: ["outrageous"],
      adverb: ["outrageously"],
      verb: ["outrage"],
    },
    etymology: "Late Middle English: From Old French *outrageus*, from *outrage* 'excess,' based on Latin *ultra* 'beyond.' Originally meant 'excessive'; moral shock sense from 16th century.",
    collocations: [
      "Outrageous behaviour/conduct",
      "Outrageous prices/claims/statements",
      "Absolutely/completely outrageous",
      "Consider/regard as outrageous",
      "Outrageous clothes/fashion",
    ],
    usageNotes: [
      "Negative for moral wrongs (unacceptable); milder/positive for bold/shocking styles (e.g., fashion).",
      "Intensifiers: absolutely, utterly, quite.",
      "Similar to 'shocking/scandalous' but emphasizes excess.",
    ],
    translation: {
      language: "pt-BR",
      text: "Ultrajante, escandaloso, revoltante (moral shock); extravagante, exorbitante (excessive/bold)",
      examples: [
        {
          english: "'That's outrageous!' he protested.",
          translated: "\"Isso é ultrajante!\", ele protestou.",
        },
        {
          english: "These prices are just outrageous.",
          translated: "Esses preços são simplesmente exorbitantes/ultrajantes.",
        },
        {
          english: "She says the most outrageous things sometimes.",
          translated: "Ela diz as coisas mais extravagantes às vezes.",
        },
      ],
    },
  },

  divert: {
    id: "divert",
    word: "Divert",
    type: "Verb",
    pronunciation: "/daɪˈvɜːt/",
    simplePronunciation: "dye-VURT",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        definition: "To make somebody/something change direction, often passively (e.g., traffic, water flow).",
        examples: [
          "Northbound traffic will have to be diverted onto minor roads.",
          "The course of the stream has now been diverted.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To use money, materials, etc., for a different purpose than originally intended, often passively.",
        examples: [
          "More of the budget was diverted into promotions.",
          "They were charged with illegally diverting public funds for private use.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Common",
        definition: "To take somebody's thoughts or attention away from something; synonym: distract.",
        examples: [
          "The war diverted people's attention away from the economic situation.",
          "He lied to divert attention from the real situation.",
          "She managed to divert the baby onto a different activity.",
        ],
      },
      {
        number: 4,
        type: "verb",
        frequency: "Less Common",
        contextLabel: "formal",
        definition: "To entertain people, often passively.",
        examples: [
          "Children are easily diverted.",
        ],
      },
    ],
    rootWord: {
      word: "Vertere",
      pronunciation: "/ˈvɜːrtəreɪ/",
      definitions: [
        {
          type: "verb",
          frequency: "archaic",
          definition: "To turn (core of diversion).",
          examples: [
            "The Latin root vertere means to turn or bend.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["diversion", "divertissement"],
      verb: ["divert", "diverts", "diverted", "diverting"],
      adjective: ["divertible", "diverting"],
      adverb: ["divertingly"],
    },
    etymology: "Late Middle English: Via French from Latin *divertere*, from *di-* 'aside' + *vertere* 'to turn.' Originally nautical (turn ship aside), extended to attention/resources by 17th century.",
    collocations: [
      "Divert traffic/attention/resources/funds",
      "Be diverted from... to...",
      "Divert somebody's attention (away) from...",
      "Divert a stream/river/course",
      "Easily diverted",
    ],
    usageNotes: [
      "Often passive (be diverted).",
      "Direction sense literal (roads/water); attention/resources figurative.",
      "Formal for entertainment.",
      "Not confused with 'diverge' (separate).",
      "British/American similar, but AmE stresses /ɪ/ in some dialects.",
    ],
    translation: {
      language: "pt-BR",
      text: "Desviar (direction/attention/traffic), Redirecionar/Transferir (funds/resources), Distrair/Entreter (attention/people)",
      examples: [
        {
          english: "Northbound traffic will have to be diverted onto minor roads.",
          translated: "O tráfego em direção ao norte terá que ser desviado para estradas secundárias.",
        },
        {
          english: "More of the budget was diverted into promotions.",
          translated: "Mais do orçamento foi transferido/redirecionado para promoções.",
        },
        {
          english: "The war diverted people's attention away from the economic situation.",
          translated: "A guerra desviou a atenção das pessoas da situação econômica.",
        },
      ],
    },
  },

  ponder: {
    id: "ponder",
    word: "Ponder",
    type: "Verb",
    pronunciation: "/ˈpɒn.dər/",
    simplePronunciation: "PON-der",
    frequency: "Most Common",
    contextLabel: "formal",
    definition: "To think about something carefully and thoroughly for a period of time; to consider or reflect deeply.",
    examples: [
      "She pondered over his words.",
      "They were left to ponder on the implications of the announcement.",
      "The senator pondered the question for a moment.",
      "We intend to ponder all the alternatives before acting.",
      "'I wonder why,' she pondered aloud.",
    ],
    rootWord: {
      word: "Pondus/Ponder-",
      pronunciation: "/ˈpɒn.dər/",
      definitions: [
        {
          type: "noun",
          frequency: "archaic",
          definition: "Weight (literal origin of mental weighing).",
          examples: [
            "The pondus of the decision weighed heavily on him.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["ponderance", "pondering"],
      verb: ["ponder", "ponders", "pondered", "pondering"],
      adjective: ["ponderable"],
      adverb: ["ponderously"],
    },
    etymology: "Middle English (originally 'appraise, judge worth'): From Old French *ponderer* 'consider,' from Latin *ponderare* 'weigh, reflect on,' literally 'to weigh,' from *pondus, ponder-* 'weight' (from PIE root *pen-* 'to draw, stretch'). Mental sense from late 14th century.",
    collocations: [
      "Ponder (on/about/over) something",
      "Ponder whether/what/how",
      "Deeply/carefully/hard ponder",
      "Pause/leave to ponder",
      "Ponder aloud",
    ],
    usageNotes: [
      "Formal/literary; often with prepositions on/over/about.",
      "Differs from 'think' by implying prolonged, serious reflection.",
      "Not used for quick thoughts.",
      "Similar to 'contemplate/muse/ruminate' but less intense than 'brood.'",
    ],
    translation: {
      language: "pt-BR",
      text: "Ponderar, refletir, considerar, meditar (sobre algo)",
      examples: [
        {
          english: "She pondered over his words.",
          translated: "Ela ponderou/refletiu sobre as palavras dele.",
        },
        {
          english: "They were left to ponder on the implications of the announcement.",
          translated: "Eles foram deixados para ponderar sobre as implicações do anúncio.",
        },
        {
          english: "The senator pondered the question for a moment.",
          translated: "O senador ponderou a pergunta por um momento.",
        },
      ],
    },
  },

  stunt: {
    id: "stunt",
    word: "Stunt",
    type: "Noun (primary); Verb (secondary)",
    pronunciation: "/stʌnt/",
    simplePronunciation: "stunt",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition: "An action displaying spectacular skill, daring, or exciting qualities, often performed by acrobats, athletes, or in films to entertain or promote.",
        examples: [
          "The motorcyclist performed a daring stunt jumping over the bus.",
          "Hollywood stunt performers risk their lives for thrilling action scenes.",
          "That viral video features an incredible parkour stunt on skyscrapers.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Less Common",
        contextLabel: "informal",
        definition: "To prevent or hinder the growth, development, or natural progress of something.",
        examples: [
          "Poor nutrition can stunt a child's physical development.",
          "The economic crisis stunted the company's expansion plans.",
          "Lack of sunlight stunted the growth of the houseplants.",
        ],
      },
    ],
    rootWord: {
      word: "Stunt",
      pronunciation: "/stʌnt/",
      definitions: [
        {
          type: "adjective",
          frequency: "archaic/rare",
          definition: "Stunted, undersized, or checked in growth (e.g., 'stunt trees'). Directly related to the verb sense.",
          examples: [
            "Stunt trees are common in poor soil.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["stunt", "stunting"],
      verb: ["stunt", "stunts"],
      adjective: ["stunted"],
      adverb: ["stuntedly (rare)"],
    },
    etymology: "From Old English *stunt* meaning 'dull, stupid, foolish,' evolving in the 19th century to 'checked growth' (verb), and early 20th century to 'feat of daring' (noun, possibly from U.S. college slang for 'feat').",
    collocations: [
      "Perform a stunt",
      "Death-defying stunt",
      "Publicity stunt",
      "Stunt double / stuntman",
      "Stunt growth / stunt development",
    ],
    usageNotes: [
      "As noun, often linked to action films or advertising ('publicity stunt'); as verb, commonly with 'growth' or 'development.'",
      "Avoid confusing with 'stint' (a period of time or limit).",
    ],
    translation: {
      language: "pt-BR",
      text: "Acrobacia / Inibir",
      examples: [
        {
          english: "The motorcyclist performed a daring stunt jumping over the bus.",
          translated: "O motociclista realizou uma acrobacia ousada pulando sobre o ônibus.",
        },
        {
          english: "Poor nutrition can stunt a child's physical development.",
          translated: "Má nutrição pode inibir o desenvolvimento físico de uma criança.",
        },
        {
          english: "That viral video features an incredible parkour stunt on skyscrapers.",
          translated: "Aquele vídeo viral apresenta uma façanha incrível de parkour em arranha-céus.",
        },
      ],
    },
  },

  sucker: {
    id: "sucker",
    word: "Sucker / Suckered",
    type: "Noun / Verb (slang)",
    pronunciation: "/ˈsʌkər/",
    simplePronunciation: "SUK-er",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        contextLabel: "slang informal disapproving",
        definition: "A gullible person easily tricked or cheated.",
        examples: [
          "What a sucker—he fell for the scam completely.",
          "Tourists are easy suckers for street hustlers.",
          "There's a sucker born every minute.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        contextLabel: "slang informal",
        definition: "To deceive or trick someone into doing something foolish.",
        examples: [
          "They suckered him into investing in the fake scheme.",
          "Don't let them sucker you with that sales pitch.",
          "I got suckered by the 'limited time offer.'",
        ],
      },
      {
        number: 3,
        type: "noun",
        frequency: "Common",
        definition: "State of being deceived; also plant shoot or lollipop (less relevant).",
        examples: [
          "He felt suckered after the bad deal.",
          "Prune suckers from roses (botany).",
        ],
      },
    ],
    rootWord: {
      word: "Sucker",
      pronunciation: "/ˈsʌkər/",
      definitions: [
        {
          type: "verb",
          frequency: "Common",
          definition: "To deceive or trick someone into doing something foolish.",
          examples: [
            "They suckered him into investing in the fake scheme.",
          ],
        },
      ],
    },
    wordFamily: {
      noun: ["sucker"],
      verb: ["sucker", "suckers", "suckered", "suckering"],
      adjective: ["suckering (rare)"],
    },
    etymology: "From 'suck' (deceive like nursing fool); 19th c. U.S. slang for gullible person, extended to verb.",
    collocations: [
      "Sucker for someone/something",
      "Get suckered into",
      "Poor sucker",
      "Sucker punch/trap",
      "Born sucker",
    ],
    usageNotes: [
      "Slang, negative for deception/gullibility; 'sucker' noun disapproving, 'suckered' implies victimhood.",
      "Informal NAmE. Synonyms: dupe/con (verb), mark/patsy (noun).",
    ],
    translation: {
      language: "pt-BR",
      text: "Otário / Enganar",
      examples: [
        {
          english: "What a sucker—he fell for the scam completely.",
          translated: "Que otário—ele caiu no golpe completamente.",
        },
        {
          english: "They suckered him into investing in the fake scheme.",
          translated: "Eles o enganaram para investir no esquema falso.",
        },
        {
          english: "He felt suckered after the bad deal.",
          translated: "Ele se sentiu enganado depois do mau negócio.",
        },
      ],
    },
  },

  ominous: {
    id: "ominous",
    word: "Ominous",
    type: "Adjective (formal/literary)",
    pronunciation: "/ˈɑːmɪnəs/ (AmE); /ˈɒmɪnəs/ (BrE)",
    simplePronunciation: "OM-uh-nuhs (AmE); OM-in-uhs (BrE)",
    frequency: "Common",
    contextLabel: "formal/literary",
    definition: "Suggesting that something bad, unpleasant, or threatening is likely to happen; foreboding, portentous, or inauspicious.",
    examples: [
      "Ominous dark clouds gathered on the horizon, signaling a storm.",
      "He spoke in an ominous tone about the future challenges.",
      "The ominous silence after the explosion raised fears.",
    ],
    etymology: "Late 16th century from Latin ominosus 'full of foreboding,' from omen, omin- 'omen/portent.' Originally neutral for any omen; now mostly negative.",
    collocations: [
      "Ominous clouds/silence/rumble/threat",
      "Ominous sign/portent",
      "Ominous note/tone",
      "Grow ominous",
      "Loom ominously",
    ],
    usageNotes: [
      "Evokes dread/forewarning; stronger than 'threatening.' Synonyms: foreboding, portentous, menacing.",
      "No major BrE/AmE differences.",
    ],
    translation: {
      language: "pt-BR",
      text: "Ominoso / Sinal de mau agouro / Sinistro",
      examples: [
        {
          english: "Ominous dark clouds gathered on the horizon, signaling a storm.",
          translated: "Nuvens ominosas se reuniram no horizonte, sinalizando uma tempestade.",
        },
        {
          english: "He spoke in an ominous tone about the future challenges.",
          translated: "Ele falou em um tom ominoso sobre os desafios futuros.",
        },
      ],
    },
  },

  "turn-a-blind-eye-to": {
    id: "turn-a-blind-eye-to",
    word: "Turn a blind eye to",
    type: "Idiom (verb phrase)",
    pronunciation: "[t\u025c\u02d0n \u0259 bla\u026and a\u026a t\u0259]",
    simplePronunciation: "turn uh blind EYE tuh",
    frequency: "Common",
    definition: "To ignore something that you know is wrong or should not be happening.",
    examples: [
      "The authorities turned a blind eye to the gambling.",
      "He turned a blind eye to what his men were doing.",
      "They can’t keep turning a blind eye to corruption.",
    ],
    collocations: [
      "turn a blind eye to corruption",
      "turn a blind eye to wrongdoing",
      "turn a blind eye to illegal activity",
      "turn a blind eye to someone’s behavior",
    ],
    usageNotes: [
      "Usually followed by ‘to’ + a noun/gerund (e.g., ‘to bullying’, ‘to cheating’).",
      "Implies deliberate inaction: you notice it, but choose not to respond.",
      "Close in meaning to ‘look the other way’ (informal).",
    ],
    translation: {
      language: "pt-BR",
      text: "Fazer vista grossa (para) / Fechar os olhos (para)",
      examples: [
        {
          english: "The authorities turned a blind eye to the gambling.",
          translated: "As autoridades fizeram vista grossa para o jogo ilegal.",
        },
        {
          english: "They can’t keep turning a blind eye to corruption.",
          translated: "Eles n\u00e3o podem continuar fechando os olhos para a corrup\u00e7\u00e3o.",
        },
      ],
    },

  },

  "sell-someone-to-someone": {
    id: "sell-someone-to-someone",
    word: "Sell someone (to someone)",
    type: "Expression (figurative verb phrase)",
    pronunciation: "[sel \u02c8s\u028cmw\u028cn (t\u0259 \u02c8s\u028cmw\u028cn)]",
    simplePronunciation: "sell SUM-wun (tuh SUM-wun)",
    frequency: "Common",
    definition:
      "To present someone in a positive, convincing way to another person or group, so they will like, trust, hire, or accept them.",
    examples: [
      "I’m just trying to sell you to them, Tom.",
      "Let me sell her to the board — she’s the best candidate for the role.",
      "He sold me to the team as someone who could fix the problem quickly.",
    ],
    collocations: [
      "sell someone to a client",
      "sell someone to the team",
      "sell someone to the board",
      "sell yourself to an employer",
    ],
    usageNotes: [
      "Figurative: it doesn’t mean buying/selling a person — it means ‘promote’ or ‘recommend’ persuasively.",
      "Often used with ‘to’ when you’re introducing someone to a group and trying to win approval.",
      "Related expressions: ‘sell someone on something’ (persuade), ‘sell yourself’ (present yourself well).",
    ],
    translation: {
      language: "pt-BR",
      text: "Te vender (bem) / Te promover / Te apresentar de um jeito convincente",
      examples: [
        {
          english: "I’m just trying to sell you to them, Tom.",
          translated: "Eu s\u00f3 estou tentando te vender bem pra eles, Tom.",
        },
        {
          english: "Let me sell her to the board — she’s the best candidate.",
          translated: "Deixa eu promover ela pro conselho — ela \u00e9 a melhor candidata.",
        },
      ],
    },
  },

  parley: {
    id: "parley",
    word: "Parley",
    type: "Verb (intransitive) (old-fashioned)",
    pronunciation: "[\u02c8p\u0251\u02d0li]",
    simplePronunciation: "PAR-lee",
    frequency: "Less Common",
    definition: "To discuss something with an opponent/enemy in order to try to solve a problem; to negotiate.",
    examples: [
      "We don’t parley when we’re on the back foot.",
      "The two sides agreed to parley before the fighting resumed.",
      "He refused to parley with them under threat.",
    ],
    collocations: [
      "parley with the enemy",
      "refuse to parley",
      "agree to parley",
    ],
    usageNotes: [
      "Often used in historical/war contexts; it can sound theatrical or old-fashioned in modern speech.",
      "Common pattern: ‘parley with someone’.",
      "Related noun: ‘a parley’ = a discussion between enemies to try to reach an agreement.",
    ],
    translation: {
      language: "pt-BR",
      text: "Negociar / Conversar para negociar (com o inimigo) / Parlamentar",
      examples: [
        {
          english: "The two sides agreed to parley before the fighting resumed.",
          translated: "Os dois lados concordaram em negociar antes de os combates recome\u00e7arem.",
        },
        {
          english: "He refused to parley with them under threat.",
          translated: "Ele se recusou a negociar com eles sob amea\u00e7a.",
        },
      ],
    },
  },

  "on-the-back-foot": {
    id: "on-the-back-foot",
    word: "On the back foot",
    type: "Idiom (prepositional phrase)",
    pronunciation: "[\u0252n \u00f0\u0259 b\u00e6k f\u028at]",
    simplePronunciation: "on thuh back foot",
    frequency: "Common",
    definition: "At a disadvantage; in a difficult situation where you are reacting rather than controlling events.",
    examples: [
      "We don’t parley when we’re on the back foot.",
      "The early goal put them on the back foot.",
      "After the bad press, the company was on the back foot.",
    ],
    collocations: [
      "put someone on the back foot",
      "catch someone on the back foot",
      "be on the back foot",
    ],
    usageNotes: [
      "Often used in sports, politics, and business.",
      "Opposite idea: ‘on the front foot’ = in control / attacking.",
    ],
    translation: {
      language: "pt-BR",
      text: "Na defensiva / Em desvantagem / Em situa\u00e7\u00e3o dif\u00edcil",
      examples: [
        {
          english: "The early goal put them on the back foot.",
          translated: "O gol cedo os colocou na defensiva.",
        },
        {
          english: "After the bad press, the company was on the back foot.",
          translated: "Depois da m\u00e1 repercuss\u00e3o, a empresa ficou em desvantagem.",
        },
      ],
    },
  },

  loom: {
    id: "loom",
    word: "Loom",
    type: "Verb (main); Noun (machine)",
    pronunciation: "/luːm/",
    simplePronunciation: "loom",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        definition: "(+ adv./prep.) To appear as a large, vague shape, especially one that is frightening or threatening.",
        examples: [
          "A dark shape loomed up ahead of us.",
          "Ghostly shapes loomed out of the fog.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To appear likely to happen soon, especially something unpleasant.",
        examples: [
          "There was a crisis looming.",
          "The prospect of war loomed large.",
        ],
      },
      {
        number: 3,
        type: "noun",
        frequency: "Less Common",
        definition: "A machine for weaving cloth.",
        examples: [
          "She works at a loom.",
        ],
      },
    ],
    etymology: "Verb: mid-16th c., possibly from Low German/Dutch (lōmen 'move slowly'; compare Frisian lūmen 'be weary'). Noun: Old English gelōma 'tool, implement' → Middle English lome.",
    wordFamily: {
      verb: ["loom", "looms", "loomed", "looming"],
      noun: ["loom"],
      related: ["loom large (idiom)"],
    },
    collocations: [
      "loom ahead",
      "loom into view",
      "loom over",
      "loom large",
      "power loom",
    ],
    usageNotes: [
      "Verb: negative/threatening connotation (danger, crisis looming).",
      "Noun: technical (weaving); less frequent.",
      "Idiom: 'loom large' = seem very important or threatening.",
    ],
    translation: {
      language: "pt-BR",
      text: "Verb (appear): surgir, avizinhar-se, agigantar-se, pairar, ameaçar. Verb (threaten): ameaçar, avolumar-se, pairar no horizonte. Noun (machine): tear, tecelagem.",
      examples: [
        {
          english: "A dark shape loomed up ahead of us.",
          translated: "Uma forma escura surgiu/agigantou-se à nossa frente.",
        },
        {
          english: "There was a crisis looming.",
          translated: "Havia uma crise se avizinhando/ameaçando.",
        },
        {
          english: "The prospect of war loomed large.",
          translated: "A perspectiva de guerra pairava de forma ameaçadora.",
        },
      ],
    },
  },

  tossed: {
    id: "tossed",
    word: "Tossed",
    type: "Past tense / past participle of toss (verb)",
    pronunciation: "/tɒst/ (BrE); /tɔːst/ (AmE)",
    simplePronunciation: "TAWS (BrE); TOSS (AmE)",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of toss: To throw something lightly or casually.",
        examples: [
          "She tossed her jacket onto the bed.",
          "He tossed the ball to me.",
          "They tossed the letter aside.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of toss: To move the head or body suddenly, especially when annoyed or restless.",
        examples: [
          "She tossed her head and walked off.",
          "I tossed and turned all night.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of toss: To mix food, especially salad.",
        examples: [
          "She tossed the salad.",
        ],
      },
      {
        number: 4,
        type: "verb",
        frequency: "Less Common",
        definition: "Past tense of toss: To be rocked or shaken violently.",
        examples: [
          "The boat was tossed by the waves.",
        ],
      },
    ],
    etymology: "Mid-15th c.: unknown origin, possibly Scandinavian (tossa 'strew, spread').",
    wordFamily: {
      verb: ["toss", "tosses", "tossed", "tossing"],
      noun: ["toss", "toss-up"],
    },
    collocations: [
      "tossed aside",
      "tossed onto",
      "tossed into",
      "tossed salad",
      "tossed pasta",
      "toss and turn",
      "tossed by the wind",
      "tossed by the waves",
    ],
    usageNotes: [
      "Past tense/past participle of 'toss' (irregular verb).",
      "Common in casual contexts (throwing, mixing food).",
      "'Toss and turn' = move restlessly in bed.",
    ],
    translation: {
      language: "pt-BR",
      text: "Throw: jogar, atirar, lançar (de forma leve/casual). Head: jogar para trás/cima. Mix: temperar, misturar (salada). Rock: sacudir, balançar.",
      examples: [
        {
          english: "She tossed her jacket onto the bed.",
          translated: "Ela jogou/atirou a jaqueta na cama.",
        },
        {
          english: "She tossed the salad.",
          translated: "Ela temperou/misturou a salada.",
        },
        {
          english: "I tossed and turned all night.",
          translated: "Eu me revirava / me contorcia na cama a noite toda.",
        },
        {
          english: "The boat was tossed by the waves.",
          translated: "O barco foi sacudido/balançado pelas ondas.",
        },
      ],
    },
  },

  dicey: {
    id: "dicey",
    word: "Dicey",
    type: "Adjective (informal, mainly BrE)",
    pronunciation: "/ˈdaɪsi/",
    simplePronunciation: "DYE-see",
    frequency: "Common",
    definition: "Dangerous, uncertain, or unpredictable; risky or unreliable.",
    examples: [
      "The fog made driving pretty dicey.",
      "Starting a business can be quite a dicey proposition.",
      "The situation looks a little dicey.",
    ],
    etymology: "1940s, British aviators' slang, from dice ('roll of the dice' = chance/risk) + -y ('full of'). Originally RAF slang for 'risky' (like gambling).",
    wordFamily: {
      adjective: ["dicey", "dicier", "diciest"],
      related: ["dice"],
    },
    collocations: [
      "dicey situation",
      "dicey proposition",
      "dicey prospect",
      "pretty dicey",
      "quite dicey",
      "looks dicey",
    ],
    usageNotes: [
      "Informal, conversational; common in BrE (less in AmE).",
      "Implies uncertainty + risk, not just 'difficult'.",
      "Similar: tricky, dodgy, iffy.",
    ],
    translation: {
      language: "pt-BR",
      text: "Arriscado, perigoso, incerto, chancy, duvidoso, meio arriscado.",
      examples: [
        {
          english: "The fog made driving pretty dicey.",
          translated: "A neblina tornou a direção bem arriscada/perigosa.",
        },
        {
          english: "Starting a business can be quite a dicey proposition.",
          translated: "Começar um negócio pode ser uma empreitada bem incerta/arriscada.",
        },
        {
          english: "The situation looks a little dicey.",
          translated: "A situação parece um pouco duvidosa/arriscada.",
        },
      ],
    },
  },

  foreboding: {
    id: "foreboding",
    word: "Foreboding",
    type: "Noun (main); Adjective (before a noun)",
    pronunciation: "/fɔːˈbəʊdɪŋ/ (BrE); /fɔːrˈboʊdɪŋ/ (AmE)",
    simplePronunciation: "for-BOH-ding",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Common",
        definition: "A strong feeling that something unpleasant or dangerous is going to happen.",
        examples: [
          "She had a sense of foreboding that the news would be bad.",
          "The letter filled him with foreboding.",
          "A foreboding of disaster hung over the city.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Making you feel that something unpleasant or dangerous is going to happen.",
        examples: [
          "A foreboding feeling that something was wrong.",
          "The foreboding sky warned of a storm.",
        ],
      },
    ],
    etymology: "Late 14th c.: forebodung 'prophecy, omen,' from fore- 'before' + bodung 'announcement, prophecy' (from bode 'announce'). By 1600s: sense of 'evil to come.'",
    wordFamily: {
      noun: ["foreboding", "forebodings"],
      verb: ["forebode"],
      adjective: ["foreboding"],
      adverb: ["forebodingly"],
    },
    collocations: [
      "sense of foreboding",
      "feeling of foreboding",
      "foreboding atmosphere",
      "foreboding sky",
      "foreboding silence",
    ],
    usageNotes: [
      "Literary/formal: creates ominous mood (stories, descriptions).",
      "Always negative: implies dread, impending disaster.",
      "Synonyms: ominous, portentous, premonitory.",
    ],
    translation: {
      language: "pt-BR",
      text: "Noun: pressentimento (ruim), agouro, mau presságio, presságio funesto. Adjective: de mau agouro, ominoso, ameaçador.",
      examples: [
        {
          english: "She had a sense of foreboding that the news would be bad.",
          translated: "Ela teve um pressentimento de que a notícia seria ruim.",
        },
        {
          english: "The letter filled him with foreboding.",
          translated: "A carta o encheu de mau presságio/agouro.",
        },
        {
          english: "A foreboding feeling that something was wrong.",
          translated: "Um sentimento de mau agouro de que algo estava errado.",
        },
      ],
    },
  },

  mischievous: {
    id: "mischievous",
    word: "Mischievous",
    type: "Adjective",
    pronunciation: "/ˈmɪstʃɪvəs/",
    simplePronunciation: "MIS-chiv-əs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Most Common",
        definition: "Enjoying playing tricks and annoying people in a playful way; naughty but not truly evil.",
        examples: [
          "A mischievous boy.",
          "A mischievous grin/smile/look.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "(Of actions/remarks) Likely to cause trouble or damage someone's reputation.",
        examples: [
          "Mischievous lies/gossip.",
        ],
      },
    ],
    etymology: "Late Middle English: from Old French meschever 'come to harm,' from mes- 'badly' + chever 'come to an end.' Originally meant 'unfortunate,' then 'harmful,' then 'playfully annoying.'",
    wordFamily: {
      adjective: ["mischievous"],
      adverb: ["mischievously"],
      noun: ["mischief"],
    },
    collocations: [
      "mischievous boy",
      "mischievous girl",
      "mischievous grin",
      "mischievous smile",
      "mischievous look",
      "mischievous lies",
      "mischievous gossip",
    ],
    usageNotes: [
      "3 syllables: MIS-chiv-ous (stress on first).",
      "Common spelling error: mischevious (extra 'i' before -ous).",
      "Extra 'i' comes from non-standard 4-syllable pronunciation mis-CHEE-vee-us.",
      "Standard English keeps only 3 syllables.",
      "Playful connotation (not truly evil).",
    ],
    translation: {
      language: "pt-BR",
      text: "Travesso, arteiro, brincalhão, danado, maldoso (leve).",
      examples: [
        {
          english: "A mischievous boy.",
          translated: "Um menino travesso.",
        },
        {
          english: "A mischievous grin.",
          translated: "Um sorriso travesso.",
        },
        {
          english: "Mischievous lies.",
          translated: "Mentiras maldosas.",
        },
      ],
    },
  },

  seized: {
    id: "seized",
    word: "Seized",
    type: "Past tense / past participle of seize (verb)",
    pronunciation: "/siːzd/",
    simplePronunciation: "SEEZD",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of seize: To take someone or something in your hand suddenly and using force; grab.",
        examples: [
          "She seized his arm.",
          "He seized the gun from her.",
        ],
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of seize: To take control of a place, or to arrest/capture someone, often suddenly or violently.",
        examples: [
          "Rebels seized the capital.",
          "The men were seized as they left the building.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of seize: To take something away legally, especially illegal or stolen goods; confiscate.",
        examples: [
          "A large quantity of drugs was seized during the raid.",
          "Their assets were seized by the government.",
        ],
      },
      {
        number: 4,
        type: "verb",
        frequency: "Common",
        definition: "Past tense of seize: To be quick to use/take an opportunity.",
        examples: [
          "She seized the opportunity to travel.",
        ],
      },
      {
        number: 5,
        type: "verb",
        frequency: "Less Common",
        definition: "Past tense of seize: (Of an emotion) To affect someone suddenly and strongly.",
        examples: [
          "Panic seized him.",
        ],
      },
    ],
    etymology: "Earlier seise (legal term), from Middle English seisen 'put in possession of,' from Old French seisir 'to put in possession, take by force,' from Medieval Latin sacire.",
    wordFamily: {
      verb: ["seize", "seizes", "seized", "seizing"],
      noun: ["seizure", "seisin"],
    },
    collocations: [
      "seized his arm",
      "seized the gun",
      "seized the opportunity",
      "seized power",
      "seized control",
      "seized the capital",
      "seized drugs",
      "seized weapons",
      "seized assets",
      "panic seized him",
    ],
    usageNotes: [
      "Past tense/past participle of 'seize' (irregular verb).",
      "Common in contexts of sudden action, control, or confiscation.",
      "Often implies force or urgency.",
    ],
    translation: {
      language: "pt-BR",
      text: "Agarrar, segurar com força (arm, object); tomar, tomar o controle, capturar, prender (city, person); apreender, confiscar (drugs, weapons, goods); aproveitar, agarrar (chance, opportunity).",
      examples: [
        {
          english: "She seized his arm.",
          translated: "Ela agarrou o braço dele.",
        },
        {
          english: "A large quantity of drugs was seized during the raid.",
          translated: "Uma grande quantidade de drogas foi apreendida durante a operação.",
        },
        {
          english: "Rebels seized the capital.",
          translated: "Rebeldes tomaram/capturaram a capital.",
        },
        {
          english: "She seized the opportunity to travel.",
          translated: "Ela agarrou/aproveitou a oportunidade de viajar.",
        },
      ],
    },
  },

  canopy: {
    id: "canopy",
    word: "Canopy",
    type: "Noun",
    pronunciation: "/ˈkænəpi/",
    simplePronunciation: "KAN-ə-pee",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition: "A cover fixed or hanging above a bed, throne, etc., as shelter or decoration.",
        examples: [
          "A four-poster bed with a canopy.",
          "The queen's canopy.",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "The branches and leaves that form a thick layer over trees in a forest.",
        examples: [
          "The canopy of a rainforest.",
          "Birds nest in the tree canopy.",
        ],
      },
      {
        number: 3,
        type: "noun",
        frequency: "Common",
        definition: "An overhanging roof or shelter at a petrol station, entrance, etc.",
        examples: [
          "The entrance canopy.",
          "Glass canopy over the door.",
        ],
      },
      {
        number: 4,
        type: "noun",
        frequency: "Less Common",
        definition: "The transparent cover over a cockpit; or the main fabric of a parachute.",
        examples: [],
      },
    ],
    etymology: "Late Middle English: Medieval Latin canopeum 'ceremonial canopy,' from Latin conopeum 'mosquito net over a bed,' from Greek kōnōpeion 'couch with mosquito curtains' (kōnōps 'mosquito').",
    wordFamily: {
      noun: ["canopy", "canopies"],
      verb: ["canopy"],
    },
    collocations: [
      "bed canopy",
      "forest canopy",
      "rainforest canopy",
      "tree canopy",
      "entrance canopy",
      "gas station canopy",
      "canopy of stars",
      "canopy of leaves",
      "canopy of branches",
    ],
    usageNotes: [
      "3 syllables: KAN-ə-pee (stress on first).",
      "Common in contexts of shelter, covering, or natural environments.",
      "Often used metaphorically for any overhead covering.",
    ],
    translation: {
      language: "pt-BR",
      text: "Bed: dossel, cortina de cama. Trees: copa, dossel (florestal). Roof: toldo, cobertura, marquise.",
      examples: [
        {
          english: "A four-poster bed with a canopy.",
          translated: "Uma cama de dossel (com cortinas).",
        },
        {
          english: "The canopy of a rainforest.",
          translated: "A copa/dossel de uma floresta tropical.",
        },
        {
          english: "The entrance canopy.",
          translated: "O toldo / cobertura da entrada.",
        },
      ],
    },
  },

  sass: {
    id: "sass",
    word: "Sass",
    type: "Noun (main); Verb",
    pronunciation: "/sæs/",
    simplePronunciation: "sass",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Most Common",
        definition: "Rude, disrespectful talk or behaviour that shows no respect; backtalk, cheek, lip.",
        examples: [
          "Don't give me any of your sass!",
          "She takes no sass from her students.",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "Confident, lively, spirited attitude (often positive).",
        examples: [
          "She has plenty of sass, wit, and intelligence.",
          "This girl has a lot of sass.",
        ],
      },
      {
        number: 3,
        type: "verb",
        frequency: "Common",
        definition: "To talk to someone in a rude, impudent way; to backtalk.",
        examples: [
          "Don't sass me!",
          "He sassed back at his teacher.",
        ],
      },
    ],
    etymology: "1835, back-formation from sassy ('impudent, cheeky'), colloquial pronunciation of sauce ('cheek, impudence'). Verb from 1856.",
    wordFamily: {
      noun: ["sass"],
      verb: ["sass", "sasses", "sassed", "sassing"],
      adjective: ["sassy"],
    },
    collocations: [
      "give somebody sass",
      "take no sass",
      "full of sass",
      "plenty of sass",
      "a lot of sass",
    ],
    usageNotes: [
      "Informal, mainly AmE; sassy more common today.",
      "Can be negative (rude) or positive (bold, spirited).",
      "Often spoken, parental: 'Don't sass me!'",
    ],
    translation: {
      language: "pt-BR",
      text: "Noun: falta de respeito, atrevimento, cara de pau, insolência (negative); ousadia, atitude (positive). Verb: responder mal, falar com atrevimento, ser cara de pau com.",
      examples: [
        {
          english: "Don't give me any of your sass!",
          translated: "Não me venha com atrevimento / falta de respeito!",
        },
        {
          english: "She takes no sass from her students.",
          translated: "Ela não aceita insolência de seus alunos.",
        },
        {
          english: "This girl has a lot of sass.",
          translated: "Esta menina tem muita atitude / ousadia.",
        },
      ],
    },
  },

  halt: {
    id: "halt",
    word: "Halt",
    type: "Verb; Noun",
    pronunciation: "/hɔːlt/ (BrE); /hɑːlt/ (AmE)",
    simplePronunciation: "HAWLT",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Most Common",
        definition: "To stop moving or happening, or to make something or someone stop.",
        examples: [
          "She walked towards him and then halted.",
          "\"Halt!\" the guard ordered.",
          "The government must take measures to halt the country's slide into recession.",
          "Filming was halted after the lead actor became ill.",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "A stop or pause in movement or activity.",
        examples: [
          "Production came to a halt.",
          "The car slowed to a halt.",
          "Flooding has brought trains to a halt.",
        ],
      },
    ],
    etymology: "Old English healtian 'be lame' → Middle English halten 'limp, stop,' related to German halten 'hold, stop.' Military command 'Halt!' from 18th c. German usage.",
    wordFamily: {
      verb: ["halt", "halts", "halted", "halting"],
      noun: ["halt"],
      adjective: ["halting"],
    },
    collocations: [
      "come to a halt",
      "bring to a halt",
      "grinding halt",
      "screeching halt",
      "halt production",
      "halt progress",
      "halt the advance",
    ],
    usageNotes: [
      "Slightly formal when used for policies, processes, projects.",
      "As a command 'Halt!' = 'Stop right there' (military, guards).",
      "Idiom: 'come to a (grinding/screeching) halt' = stop completely/suddenly.",
    ],
    translation: {
      language: "pt-BR",
      text: "Verb: parar, deter, interromper. Noun: parada, alto, interrupção, paralisação.",
      examples: [
        {
          english: "\"Halt!\" called the guard.",
          translated: "\"Pare!\" — gritou o guarda.",
        },
        {
          english: "Filming was halted after the lead actor became ill.",
          translated: "As filmagens foram interrompidas depois que o ator principal adoeceu.",
        },
        {
          english: "Production came to a halt.",
          translated: "A produção chegou a uma parada / foi paralisada.",
        },
      ],
    },
  },

  nuisance: {
    id: "nuisance",
    word: "Nuisance",
    type: "Noun (countable; also uncountable in law)",
    pronunciation: "BrE /ˈnjuːsns/; AmE /ˈnuːsns/",
    simplePronunciation: "NEW-sns / NOO-sns",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Common",
        definition: "A person, thing, or situation that is annoying or causes trouble/problems.",
        examples: [
          "I don't want to be a nuisance, so tell me if you want to be alone.",
          "It's a nuisance having to go back tomorrow.",
          "What a nuisance!",
          "She's a terrible nuisance.",
        ]
      },
      {
        number: 2,
        type: "noun",
        frequency: "Less Common",
        definition: "Behaviour or a situation that annoys or harms people and that a court can order to stop; public/private nuisance.",
        examples: [
          "He was charged with causing a public nuisance.",
          "Noise from the factory was ruled a statutory nuisance.",
        ],
      },
    ],
    etymology: "Late Middle English 'injury, harm' from Old French nuisance 'hurt,' from nuire 'to harm,' from Latin nocere 'to harm' (cf. nocive, noxious).",
    wordFamily: {
      noun: ["nuisance", "nuisances"],
      adjective: ["nuisancy (rare, legal)"],
    },
    collocations: [
      "public/private nuisance",
      "a bit of a nuisance",
    ],
    usageNotes: [
      "Everyday use: annoying person/thing/situation.",
      "Legal sense: uncountable, refers to behaviour that can be stopped by law.",
      "Common expressions: 'be a nuisance,' 'make a nuisance of yourself.'",
    ],
    translation: {
      language: "pt-BR",
      text: "Incômodo, chateação, amolação, transtorno, aborrecimento; in law: incômodo (jurídico), perturbação, ato ilícito de incômodo.",
      examples: [
        {
          english: "I don't want to be a nuisance.",
          translated: "Não quero ser um incômodo.",
        },
        {
          english: "It's such a nuisance having to rewrite those letters.",
          translated: "É um baita incômodo ter que reescrever essas cartas.",
        },
        {
          english: "He was charged with causing a public nuisance.",
          translated: "Ele foi acusado de causar incômodo público / perturbação pública.",
        },
      ],
    },
  },

  uncanny: {
    id: "uncanny",
    word: "Uncanny",
    type: "Adjective",
    pronunciation: "/ʌnˈkæni/",
    simplePronunciation: "uhn-KAN-ee",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Strange or mysterious, especially in a way that is slightly frightening or difficult to explain; synonym: weird.",
        examples: [
          "I had an uncanny feeling I was being watched.",
          "It was uncanny really, almost as if she knew what I was thinking.",
          "He has an uncanny knack of being able to see immediately where the problem lies.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "Beyond what is normal or expected; suggesting superhuman/supernatural powers.",
        examples: [
          "She bore an uncanny resemblance to my Auntie Elsie.",
          "An uncanny sense of direction.",
        ],
      },
    ],
    etymology: "Late 16th century (originally Scots): un- 'not' + canny ('safe, prudent, knowing'). Originally 'malicious, supernatural'; now 'strangely impressive.'",
    wordFamily: {
      adjective: ["uncanny", "uncannier", "uncanniest"],
      adverb: ["uncannily"],
      noun: ["uncanniness"],
    },
    collocations: [
      "uncanny resemblance / likeness",
      "uncanny ability / knack / gift",
      "uncanny feeling / sense",
    ],
    usageNotes: [
      "Describes something strange, mysterious, or eerie in a slightly frightening way.",
      "Often used with 'resemblance,' 'ability,' or 'feeling.'",
      "Related concept: 'uncanny valley' – when something looks almost human but feels eerie/creepy (robots, dolls).",
    ],
    translation: {
      language: "pt-BR",
      text: "Estranho, esquisito, misterioso, sobrenatural, inexplicável (esp. de forma inquietante).",
      examples: [
        {
          english: "I had an uncanny feeling I was being watched.",
          translated: "Eu tive um pressentimento esquisito de que estava sendo observado.",
        },
        {
          english: "It was uncanny, almost as if she knew what I was thinking.",
          translated: "Era inexplicável/esquisito, quase como se ela soubesse o que eu estava pensando.",
        },
        {
          english: "She bore an uncanny resemblance to my aunt.",
          translated: "Ela tinha uma semelhança estranha/sobrenatural com minha tia.",
        },
      ],
    },
  },

  grievous: {
    id: "grievous",
    word: "Grievous",
    type: "Adjective (formal)",
    pronunciation: "/ˈɡriːvəs/",
    simplePronunciation: "GREE-vəs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Very serious and often causing great pain, suffering, or damage; synonym: grave.",
        examples: [
          "He was the victim of a grievous injustice.",
          "She suffered grievous bodily harm.",
          "A grievous error that cost millions.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "Extremely bad or offensive.",
        examples: [
          "Grievous sin / offence.",
          "The grievous loss of so many lives.",
        ],
      },
    ],
    etymology: "Middle English: from Old French greveus, from Latin gravis 'heavy, grave' (via gravare 'burden').",
    wordFamily: {
      adjective: ["grievous"],
      adverb: ["grievously"],
      noun: ["grievance"],
    },
    collocations: [
      "grievous bodily harm / injury",
      "grievous error / wrong / injustice",
      "grievous loss / suffering",
    ],
    usageNotes: [
      "Formal adjective meaning very serious or extremely bad.",
      "Often used in legal contexts: 'grievous bodily harm' (GBH) - serious physical injury (UK law).",
      "Similar to 'grave' but more formal and emphasizes severity.",
    ],
    translation: {
      language: "pt-BR",
      text: "Grave, doloroso, atroz, sério; in law: grave (lesões corporais graves).",
      examples: [
        {
          english: "He was the victim of a grievous injustice.",
          translated: "Ele foi vítima de uma grave injustiça.",
        },
        {
          english: "She suffered grievous bodily harm.",
          translated: "Ela sofreu lesões corporais graves.",
        },
        {
          english: "A grievous error that cost millions.",
          translated: "Um erro grave/atroz que custou milhões.",
        },
      ],
    },
  },

  grin: {
    id: "grin",
    word: "Grin",
    type: "Verb (main); Noun",
    pronunciation: "/ɡrɪn/",
    simplePronunciation: "grin",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "To smile widely, showing your teeth, often because you are amused, pleased, or being cheeky.",
        examples: [
          "They grinned with delight when they heard our news.",
          "He grinned at me from the doorway.",
          "Stop grinning and tell me what happened!",
        ],
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "A wide smile showing the teeth.",
        examples: [
          "She broke into a broad grin.",
          "\"No,\" he said with a grin.",
          "Wipe that grin off your face!",
        ]
      },
    ],
    etymology: "Middle English grennen 'bare the teeth in pain, anger, or mirth,' from Old English grennian 'show the teeth.'",
    wordFamily: {
      verb: ["grin", "grins", "grinned", "grinning"],
      noun: ["grin", "grins"],
      adjective: ["grinning"],
    },
    collocations: [
      "grin from ear to ear",
      "grin at somebody",
      "broad/wide/sheepish/wry grin",
      "grin and bear it",
    ],
    usageNotes: [
      "Verb: shows amusement, pleasure, or cheekiness with wide smile.",
      "Noun: refers to the wide smile itself.",
      "Idiom 'grin and bear it' means to endure hardship cheerfully.",
      "Similar: smile, beam, smirk (but grin is wider).",
    ],
    translation: {
      language: "pt-BR",
      text: "Verb: sorrir (largamente), mostrar os dentes (ao sorrir). Noun: sorriso largo, sorriso de orelha a orelha. Grin and bear it: aguentar firme, sorrir e aguentar.",
      examples: [
        {
          english: "They grinned with delight when they heard our news.",
          translated: "Eles sorriram de orelha a orelha de alegria ao ouvir nossa notícia.",
        },
        {
          english: "Stop grinning and tell me what happened!",
          translated: "Pare de sorrir e me diga o que aconteceu!",
        },
        {
          english: "I have to grin and bear it.",
          translated: "Tenho que aguentar firme.",
        },
      ],
    },
  },

  savory: {
    id: "savory",
    word: "Savory (AmE) / Savoury (BrE)",
    type: "Adjective",
    pronunciation: "/ˈseɪvəri/",
    simplePronunciation: "SAY-vuh-ree",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Tasting of salt or spices rather than of sweet; not sweet.",
        examples: [
          "Savory snacks like cheese and nuts.",
          "A savory dish of roast chicken.",
          "I prefer savory breakfasts (eggs, bacon) to sweet ones.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "Pleasing, agreeable (in taste or smell; old sense).",
        examples: [],
      },
    ],
    etymology: "Middle English savourie from Old French savore 'tasty, flavorsome' (past participle of savourer 'to taste'), from Latin sapor 'taste, flavor' (sapere 'to taste').",
    wordFamily: {
      adjective: ["savory / savoury"],
      noun: ["savory (herb; also BrE savoury dish)"],
      related: ["savour / savor (noun/verb: taste/enjoy)"],
    },
    collocations: [
      "savory dish / snack / flavor / pie / taste",
      "sweet and savory",
      "savory herbs/spices",
    ],
    usageNotes: [
      "Culinary term: opposite of sweet (salty, spicy, umami).",
      "Examples: pizza, cheese, meat, olives = savory; cake, chocolate = sweet.",
      "Spelling: AmE 'savory', BrE 'savoury'.",
      "Not to be confused with 'savory' the herb (Satureja hortensis).",
    ],
    translation: {
      language: "pt-BR",
      text: "Salgado, salgado (não doce), saboroso (salgado).",
      examples: [
        {
          english: "Savory snacks like cheese and nuts.",
          translated: "Petiscos salgados como queijo e nozes.",
        },
        {
          english: "I prefer savory breakfasts to sweet ones.",
          translated: "Prefiro cafés da manhã salgados a doces.",
        },
        {
          english: "A savory dish of roast chicken.",
          translated: "Um prato salgado de frango assado.",
        },
      ],
    },
  },

  fiendish: {
    id: "fiendish",
    word: "Fiendish",
    type: "Adjective",
    pronunciation: "/ˈfiːndɪʃ/",
    simplePronunciation: "FEEN-dish",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Cruel and unpleasant; extremely evil or wicked.",
        examples: [
          "A fiendish act of cruelty.",
          "Shrieks of fiendish laughter.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "(informal) Extremely clever and complicated, often in an unpleasant way.",
        examples: [
          "A puzzle of fiendish complexity.",
          "A fiendish plan.",
        ],
      },
      {
        number: 3,
        type: "adjective",
        frequency: "Less Common",
        definition: "(informal) Extremely difficult.",
        examples: [
          "A fiendish problem.",
        ],
      },
    ],
    etymology: "1520s: from fiend ('evil spirit, devil') + -ish ('of the nature of'). Old English had feondlic 'hostile.'",
    wordFamily: {
      adjective: ["fiendish"],
      adverb: ["fiendishly"],
      noun: ["fiendishness"],
      related: ["fiend (noun: devil/evil person)"],
    },
    collocations: [
      "fiendish act / plan / cruelty / laughter",
      "fiendish complexity / difficulty",
    ],
    usageNotes: [
      "Strong negative connotation: cruel/evil (sense 1); very hard (senses 2,3).",
      "Informal for difficulty; literary for cruelty.",
      "Similar: diabolical, devilish, infernal.",
    ],
    translation: {
      language: "pt-BR",
      text: "Diabólico, infernal, demoníaco, cruel (cruelty); diabólico, infernal (difficulty).",
      examples: [
        {
          english: "A fiendish act of cruelty.",
          translated: "Um ato diabólico de crueldade.",
        },
        {
          english: "A puzzle of fiendish complexity.",
          translated: "Um quebra-cabeça de complexidade diabólica/infernal.",
        },
        {
          english: "Shrieks of fiendish laughter.",
          translated: "Gritos de riso demoníaco/infernal.",
        },
      ],
    },
  },

  unquenchable: {
    id: "unquenchable",
    word: "Unquenchable",
    type: "Adjective (formal)",
    pronunciation: "/ʌnˈkwentʃəbl/",
    simplePronunciation: "uhn-KWEN-chə-bəl",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Impossible to satisfy or put out; insatiable.",
        examples: [
          "He had an unquenchable thirst for knowledge.",
          "An unquenchable desire for adventure.",
          "Unquenchable optimism.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "Of fire/flame: impossible to extinguish.",
        examples: [],
      },
    ],
    etymology: "Late 14th c.: un- ('not') + quench ('extinguish') + -able. Originally literal (fire); figurative from 1560s (thirst).",
    wordFamily: {
      adjective: ["unquenchable"],
      related: ["quench (v.), unquenched"],
    },
    collocations: [
      "unquenchable thirst (literal/figurative)",
      "unquenchable desire/curiosity/optimism",
    ],
    usageNotes: [
      "Formal adjective meaning impossible to satisfy or extinguish.",
      "Figurative: insatiable thirst/desire (most common).",
      "Literal: unquenchable fire/flame (rare).",
      "Similar: insatiable, unappeasable.",
    ],
    translation: {
      language: "pt-BR",
      text: "Insaciável, inextinguível, que não se apaga.",
      examples: [
        {
          english: "He had an unquenchable thirst for knowledge.",
          translated: "Ele tinha uma sede insaciável de conhecimento.",
        },
        {
          english: "An unquenchable desire for adventure.",
          translated: "Um desejo insaciável por aventura.",
        },
        {
          english: "Unquenchable optimism.",
          translated: "Otimismo insaciável.",
        },
      ],
    },
  },

  thereby: {
    id: "thereby",
    word: "Thereby",
    type: "Adverb (formal)",
    pronunciation: "/ˌðeəˈbaɪ/",
    simplePronunciation: "THERE-bye",
    senses: [
      {
        number: 1,
        type: "adverb",
        frequency: "Common",
        definition: "Used to introduce the result of the action or situation mentioned; by that means.",
        examples: [
          "Regular exercise strengthens the heart, thereby reducing the risk of heart attack.",
          "They failed to agree, thereby throwing 250 people out of work.",
          "She completed her homework early, thereby allowing time to play.",
        ],
      },
    ],
    etymology: "14th century: from there + by ('by that').",
    wordFamily: {
      adverb: ["thereby"],
      related: ["there", "by"],
    },
    collocations: [
      "thereby reducing / increasing / preventing / permitting",
      "strengthen thereby reducing",
      "fail thereby throwing",
    ],
    usageNotes: [
      "Formal adverb connecting cause and effect.",
      "Often used with gerund (V-ing): action, thereby result.",
      "Similar to 'thus,' 'by that,' 'and so.'",
      "Avoid in casual speech; use 'so' instead.",
    ],
    translation: {
      language: "pt-BR",
      text: "Assim, desse modo, com isso, por isso, por meio disso.",
      examples: [
        {
          english: "Regular exercise strengthens the heart, thereby reducing the risk of heart attack.",
          translated: "Exercício regular fortalece o coração, assim reduzindo o risco de ataque cardíaco.",
        },
        {
          english: "They failed to agree, thereby throwing 250 people out of work.",
          translated: "Eles falharam em concordar, com isso deixando 250 pessoas sem emprego.",
        },
        {
          english: "She completed her homework early, thereby allowing time to play.",
          translated: "Ela terminou o dever cedo, desse modo permitindo tempo para brincar.",
        },
      ],
    },
  },

  cunning: {
    id: "cunning",
    word: "Cunning",
    type: "Adjective; Noun",
    pronunciation: "/ˈkʌnɪŋ/",
    simplePronunciation: "KUN-ing",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Able to get what you want in a clever way, especially by tricking or cheating somebody (disapproving; synonyms: crafty, wily).",
        examples: [
          "A cunning liar.",
          "He was as cunning as a fox.",
          "That cunning old rogue is up to something.",
        ],
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "Clever and showing skill (synonym: ingenious).",
        examples: [
          "A cunning piece of detective work.",
          "Cunning tactics.",
        ],
      },
      {
        number: 3,
        type: "noun",
        frequency: "Common",
        definition: "The ability to achieve something by tricking or cheating other people in a clever way (uncountable; synonym: craftiness).",
        examples: [
          "It took energy and cunning just to survive.",
          "She used low cunning to get what she wanted.",
        ],
      },
    ],
    etymology: "Middle English: from Old Norse kunnandi 'knowledge' (kunna 'know', related to can), or Middle English cunne (obsolete variant of can). Original sense: great knowledge/skill; deceitful sense from late Middle English.",
    wordFamily: {
      adjective: ["cunning"],
      adverb: ["cunningly"],
      noun: ["cunning"],
      verb: ["con/can (root)"],
    },
    collocations: [
      "cunning liar/rogue/fox",
      "cunning plan/tactics/work",
      "use cunning",
    ],
    usageNotes: [
      "Adjective 1: negative connotation (deceitful).",
      "Adjective 2: positive connotation (skillful).",
      "Noun: uncountable, formal/literary.",
      "Similar: sly, crafty, wily (negative); ingenious (positive).",
    ],
    translation: {
      language: "pt-BR",
      text: "Adjective 1: astuto, esperto (de modo enganoso), ardiloso. Adjective 2: astuto, engenhoso. Noun: astúcia, esperteza (enganosa).",
      examples: [
        {
          english: "He was as cunning as a fox.",
          translated: "Ele era astuto como uma raposa.",
        },
        {
          english: "A cunning piece of detective work.",
          translated: "Um trabalho de detetive engenhoso.",
        },
        {
          english: "It took energy and cunning just to survive.",
          translated: "Foi preciso energia e astúcia só para sobreviver.",
        },
      ],
    },
  },

  "lucky-break": {
    id: "lucky-break",
    word: "Lucky break",
    type: "Idiom (noun phrase)",
    pronunciation: "/ˈlʌki breɪk/",
    simplePronunciation: "LUK-ee brake",
    senses: [
      {
        number: 1,
        type: "idiom",
        frequency: "Common",
        definition: "A sudden stroke of good luck or an unexpected fortunate opportunity, often leading to success.",
        examples: [
          "Getting that job offer after months of unemployment was a real lucky break.",
          "She got her lucky break when she appeared on television at 17.",
          "We had a lucky break when an anonymous source tipped us off.",
        ],
      },
    ],
    etymology: "Attested from 1884 (billiards 'lucky shot'); 1872 as 'fortunate breakdown.' From 'lucky' (mid-15c., from luck) + 'break' (opportunity/chance).",
    wordFamily: {
      adjective: ["lucky"],
      noun: ["break", "luck"],
      related: ["stroke of luck", "fluke"],
    },
    collocations: [
      "get/have a lucky break",
      "big lucky break",
      "need a lucky break",
    ],
    usageNotes: [
      "Informal, positive idiom.",
      "Often used in careers or showbiz contexts.",
      "Similar: stroke of luck, fluke.",
      "Ellipsis of 'break' as in 'big break.'",
    ],
    translation: {
      language: "pt-BR",
      text: "Golpe de sorte, sorte grande, acaso feliz, oportunidade inesperada.",
      examples: [
        {
          english: "Getting that job offer after months of unemployment was a real lucky break.",
          translated: "Conseguir aquela oferta de emprego após meses de desemprego foi um golpe de sorte.",
        },
        {
          english: "She got her lucky break when she appeared on television at 17.",
          translated: "Ela teve seu acaso feliz ao aparecer na TV aos 17.",
        },
        {
          english: "We had a lucky break when an anonymous source tipped us off.",
          translated: "Tivemos uma sorte grande quando uma fonte anônima nos deu a dica.",
        },
      ],
    },
  },

  bustling: {
    id: "bustling",
    word: "Bustling",
    type: "Adjective",
    pronunciation: "/ˈbʌslɪŋ/",
    simplePronunciation: "BUS-ling",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Full of people moving about in a busy way.",
        examples: [
          "A bustling city.",
          "The market was bustling with life.",
          "Bustling streets/port/resort."
        ]
      }
    ],
    etymology: "1819: present-participle adjective from bustle (\"be active noisily,\" 1570s), frequentative of Middle English bresten (\"rush, break\") or busk (\"prepare\").",
    wordFamily: {
      verb: ["bustle", "bustles", "bustling"],
      adjective: ["bustling"],
      noun: ["bustle"],
      adverb: ["bustlingly"]
    },
    collocations: [
      "bustling city/street/market",
      "bustling with people/activity/life",
      "bustling port/resort"
    ],
    usageNotes: [
      "Positive/neutral: lively energy, not chaotic.",
      "Describes places (city, market).",
      "Similar: busy (general), lively (energy-focused)."
    ],
    translation: {
      language: "pt-BR",
      text: "movimentado, agitado, animado, cheio de movimento",
      examples: [
        {
          english: "A bustling city full of energy.",
          translated: "Uma cidade movimentada cheia de energia."
        },
        {
          english: "The market was bustling with life.",
          translated: "O mercado estava agitado com vida."
        },
        {
          english: "Bustling streets during rush hour.",
          translated: "Ruas animadas na hora do rush."
        }
      ]
    }
  },

  uptight: {
    id: "uptight",
    word: "Uptight",
    type: "Adjective (informal)",
    pronunciation: "/ˌʌpˈtaɪt/",
    simplePronunciation: "up-TYTE",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Anxious and/or angry about something; tense or nervous.",
        examples: [
          "Relax! You're getting too uptight about it.",
          "He's feeling a bit uptight about his exam tomorrow.",
          "Don't get uptight about the exam—just do your best."
        ]
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Less Common",
        definition: "(especially North American English) Nervous about showing your feelings; rigidly conventional or repressed.",
        examples: [
          "An uptight teenager.",
          "Uptight conservatives.",
          "He's a very uptight person."
        ]
      }
    ],
    etymology: "1934, slang: \"tense\" (up + tight); 1960s: \"straight-laced/conservative.\" Briefly jazz slang for \"excellent\" (1962).",
    wordFamily: {
      adjective: ["uptight"],
      adverb: ["uptightly"],
      noun: ["uptightness"]
    },
    collocations: [
      "get/feel uptight (about/over something)",
      "too uptight",
      "very uptight person"
    ],
    usageNotes: [
      "Informal, disapproving/negative; NAmerE more for \"repressed.\"",
      "Synonyms: tense, nervous, anxious, edgy.",
      "Antonyms: relaxed, laid-back."
    ],
    translation: {
      language: "pt-BR",
      text: "tenso, nervoso, ansioso, rígido, careta",
      examples: [
        {
          english: "Relax! You're getting too uptight about it.",
          translated: "Relaxe! Você está ficando muito tenso por causa disso."
        },
        {
          english: "He's feeling a bit uptight about his exam tomorrow.",
          translated: "Ele está um pouco nervoso com o exame de amanhã."
        },
        {
          english: "An uptight teenager afraid to show feelings.",
          translated: "Um adolescente careta com medo de mostrar sentimentos."
        }
      ]
    }
  },

  eager: {
    id: "eager",
    word: "Eager",
    type: "Adjective",
    pronunciation: "/ˈiːɡər/",
    simplePronunciation: "EE-gər",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Very interested and excited by something that is going to happen or about something that you want to do (synonym: keen).",
        examples: [
          "Eager crowds outside the stadium.",
          "Small eager faces looked up and listened.",
          "Everyone in the class seemed eager to learn."
        ]
      }
    ],
    etymology: "Middle English (also 'pungent, sour'): from Old French aigre 'keen', from Latin acer, acr- 'sharp, pungent' (PIE root 'be sharp, rise to a point, pierce'). Modern sense 'full of keen desire' peculiar to English (early 14c.).",
    wordFamily: {
      adjective: ["eager"],
      adverb: ["eagerly"],
      noun: ["eagerness"],
      related: ["eager beaver"]
    },
    collocations: [
      "eager to do/learn/meet/help",
      "eager for news/approval",
      "eager crowds/faces"
    ],
    usageNotes: [
      "Positive; stronger than \"interested.\"",
      "Followed by \"to + infinitive\" or \"for + noun.\"",
      "Synonyms: enthusiastic, keen, avid; antonyms: indifferent."
    ],
    translation: {
      language: "pt-BR",
      text: "ansioso, ávido, desejoso, impaciente",
      examples: [
        {
          english: "Everyone in the class seemed eager to learn.",
          translated: "Todos na classe pareciam ansiosos para aprender."
        },
        {
          english: "She is eager for her parents' approval.",
          translated: "Ela está ávida pela aprovação dos pais."
        },
        {
          english: "Eager crowds outside the stadium.",
          translated: "Multidões desejosas fora do estádio."
        }
      ]
    }
  },

  threshold: {
    id: "threshold",
    word: "Threshold",
    type: "Noun",
    pronunciation: "/ˈθreʃhəʊld/ BrE (THRESH-hohld) /ˈθreʃhoʊld/ AmE",
    simplePronunciation: "THRESH-hohld",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Less Common",
        definition: "The floor or ground at the bottom of a doorway, considered as the entrance to a building or room (synonym: doorsill).",
        examples: [
          "She stood hesitating on the threshold.",
          "He stepped across the threshold."
        ]
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "The level at which something starts to happen or have an effect.",
        examples: [
          "He has a low boredom threshold (= gets bored easily).",
          "I have a high pain threshold (= tolerates much pain).",
          "My earnings are just above the tax threshold."
        ]
      },
      {
        number: 3,
        type: "noun",
        frequency: "Common",
        definition: "[usually singular] The point just before a new situation, period of life, etc. begins.",
        examples: [
          "She felt as though she was on the threshold of a new life.",
          "On the threshold of success."
        ]
      }
    ],
    etymology: "Old English therscold, threscold; related to thresh (tread); possibly from threshing floor at house entrance.",
    wordFamily: {
      noun: ["threshold"],
      adjective: ["thresholdal"]
    },
    collocations: [
      "pain/boredom/tax threshold",
      "on the threshold of",
      "high/low threshold",
      "cross/step over the threshold"
    ],
    usageNotes: [
      "Literal: architectural; figurative: limits/transitions.",
      "Uncountable/singular; \"high threshold\" = tolerant.",
      "Similar: brink, verge (more dramatic)."
    ],
    translation: {
      language: "pt-BR",
      text: "soleira (da porta), limiar, patamar, ponto limite",
      examples: [
        {
          english: "She stood hesitating on the threshold.",
          translated: "Ela ficou hesitante na soleira."
        },
        {
          english: "He has a low boredom threshold.",
          translated: "Ele tem um limiar baixo de tédio."
        },
        {
          english: "On the threshold of a new life.",
          translated: "No limiar de uma nova vida."
        }
      ]
    }
  },

  grip: {
    id: "grip",
    word: "Grip",
    type: "Noun/Verb",
    pronunciation: "/ɡrɪp/",
    simplePronunciation: "grip",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "Common",
        definition: "The act of holding something firmly with the hand(s); a firm hold.",
        examples: [
          "She kept a tight grip on the rope.",
          "He lost his grip and fell."
        ]
      },
      {
        number: 2,
        type: "noun",
        frequency: "Common",
        definition: "Control or power over somebody/something.",
        examples: [
          "The home team took a firm grip on the game.",
          "Terrorists have the country in their grip."
        ]
      },
      {
        number: 3,
        type: "noun",
        frequency: "Common",
        definition: "A part of an object designed to be held by the hand.",
        examples: [
          "The pistol's grip."
        ]
      },
      {
        number: 4,
        type: "verb",
        frequency: "Common",
        definition: "To hold something tightly; grasp firmly.",
        examples: [
          "He gripped her arm.",
          "Grip on to the railing."
        ]
      },
      {
        number: 5,
        type: "verb",
        frequency: "Common",
        definition: "To interest or excite somebody strongly; hold attention.",
        examples: [
          "The story gripped me from start to finish.",
          "A gripping film."
        ]
      }
    ],
    etymology: "Old English grippa (verb), gripe 'grasp, clutch' (noun), gripa 'handful'; related to gripe.",
    wordFamily: {
      noun: ["grip"],
      verb: ["grip", "grips", "gripping", "gripped"],
      adjective: ["gripping"],
      related: ["get to grips with", "lose one's grip"]
    },
    collocations: [
      "firm/tight grip (on)",
      "lose/keep grip",
      "grip something tightly/firmly",
      "get to grips with",
      "grip the imagination/attention"
    ],
    usageNotes: [
      "Physical: hold firmly (grip > hold > grasp).",
      "Figurative: control/attention.",
      "*Get to grips with*: deal with difficultly."
    ],
    translation: {
      language: "pt-BR",
      text: "apego, aperto, preensão, controle, domínio, agarrar, segurar firme, prender (atenção)",
      examples: [
        {
          english: "She kept a tight grip on the rope.",
          translated: "Ela manteve um aperto firme na corda."
        },
        {
          english: "The story gripped me from start to finish.",
          translated: "A história me prendeu do início ao fim."
        },
        {
          english: "Terrorists have the country in their grip.",
          translated: "Terroristas têm o país sob seu controle."
        }
      ]
    }
  },

  fierce: {
    id: "fierce",
    word: "Fierce",
    type: "Adjective",
    pronunciation: "/fɪəs/ BrE /fɪrs/ AmE",
    simplePronunciation: "FEERS",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "(especially of people or animals) Angry, aggressive, and frightening.",
        examples: [
          "A fierce dog.",
          "Two fierce eyes glared at them."
        ]
      },
      {
        number: 2,
        type: "adjective",
        frequency: "Common",
        definition: "(especially of actions or emotions) Showing strong feelings or a lot of activity, often violently.",
        examples: [
          "Fierce loyalty.",
          "The scene of fierce fighting.",
          "Despite fierce opposition."
        ]
      },
      {
        number: 3,
        type: "adjective",
        frequency: "Common",
        definition: "(of weather or temperatures) Very strong, potentially damaging.",
        examples: [
          "Fierce wind.",
          "The fierce heat of the flames."
        ]
      }
    ],
    etymology: "Middle English: from Old French fiers 'fierce, brave, proud', from Latin ferus 'untamed'.",
    wordFamily: {
      adjective: ["fierce", "fiercer", "fiercest"],
      adverb: ["fiercely"],
      noun: ["fierceness"]
    },
    collocations: [
      "fierce dog/eyes",
      "fierce loyalty/attack/opposition/competition",
      "fierce wind/storm"
    ],
    usageNotes: [
      "Often negative (violent/aggressive); can be positive (intense passion).",
      "Comparative: fiercer; superlative: fiercest.",
      "Synonyms: ferocious, savage, violent."
    ],
    translation: {
      language: "pt-BR",
      text: "feroz, furioso, violento, intenso, encarniçado",
      examples: [
        {
          english: "A fierce dog guarded the house.",
          translated: "Um cão feroz guardava a casa."
        },
        {
          english: "Despite fierce opposition, the bill passed.",
          translated: "Apesar da oposição encarniçada, o projeto foi aprovado."
        },
        {
          english: "The fierce heat of the flames.",
          translated: "O intenso calor das chamas."
        }
      ]
    }
  },

  scatter: {
    id: "scatter",
    word: "Scatter",
    type: "Verb",
    pronunciation: "/ˈskætər/",
    simplePronunciation: "SKAT-ər",
    senses: [
      {
        number: 1,
        type: "verb",
        frequency: "Common",
        definition: "To throw or drop small things in different directions so that they cover a surface or area (transitive); or to separate and go in different directions (intransitive).",
        examples: [
          "Scatter the seeds on the soil.",
          "The protesters scattered at the sound of gunshots.",
          "Wind scattered the leaves."
        ]
      },
      {
        number: 2,
        type: "verb",
        frequency: "Common",
        definition: "To cover or decorate something by scattering things on it.",
        examples: [
          "Scatter the lawn with grass seed.",
          "The room was scattered with toys."
        ]
      }
    ],
    etymology: "Mid-12c. Middle English scateren, variant of shateren (shatter); Norse influence; intransitive from c.1300.",
    wordFamily: {
      verb: ["scatter", "scatters", "scattering", "scattered"],
      noun: ["scatter"],
      adjective: ["scattered"],
      related: ["scatterbrain"]
    },
    collocations: [
      "scatter seeds/ashes/leaves",
      "scatter over/around/on",
      "crowd/animals scatter",
      "wind scatters"
    ],
    usageNotes: [
      "Transitive/intransitive; synonym disperse (formal).",
      "Past: scattered.",
      "Not for people gathering (use gather)."
    ],
    translation: {
      language: "pt-BR",
      text: "espalhar, dispersar, espalhar-se",
      examples: [
        {
          english: "Scatter the seeds on the soil.",
          translated: "Espalhe as sementes no solo."
        },
        {
          english: "The protesters scattered at the sound of gunshots.",
          translated: "Os manifestantes se dispersaram ao som dos tiros."
        },
        {
          english: "Wind scattered the leaves across the garden.",
          translated: "O vento espalhou as folhas pelo jardim."
        }
      ]
    }
  },

  hideous: {
    id: "hideous",
    word: "Hideous",
    type: "Adjective",
    pronunciation: "/ˈhɪdiəs/",
    simplePronunciation: "HID-ee-əs",
    senses: [
      {
        number: 1,
        type: "adjective",
        frequency: "Common",
        definition: "Very ugly or unpleasant (synonym: revolting).",
        examples: [
          "A hideous face/building/dress.",
          "Their new colour scheme is hideous!",
          "She was wearing a hideous yellow dress."
        ]
      }
    ],
    etymology: "Middle English (c.1300): from Old French hidos/hideus (earlier hisdos), from hide/hisde 'fear' (unknown origin; possibly Germanic). Original sense: terrifying/horrible; \"repulsive\" from late 14th c.",
    wordFamily: {
      adjective: ["hideous"],
      adverb: ["hideously"],
      noun: ["hideousness"],
      related: ["hideosity"]
    },
    collocations: [
      "hideous face/building/dress/crime/colour",
      "hideous monster/nightmare",
      "fairly hideous"
    ],
    usageNotes: [
      "Strong negative; for appearance/sound/experience.",
      "Synonyms: ghastly, horrible, ugly, disgusting.",
      "Often exaggerated for emphasis."
    ],
    translation: {
      language: "pt-BR",
      text: "horrendo, hediondo, horrendo, repugnante, feio (extremo)",
      examples: [
        {
          english: "Their new colour scheme is hideous!",
          translated: "O novo esquema de cores é horrendo!"
        },
        {
          english: "She was wearing a hideous yellow dress.",
          translated: "Ela estava usando um vestido amarelo hediondo."
        },
        {
          english: "A hideous crime shocked the nation.",
          translated: "Um crime repugnante chocou a nação."
        }
      ]
    }
  },

  "safe-and-sound": {
    id: "safe-and-sound",
    word: "safe and sound",
    type: "Idiom (adjectival phrase)",
    pronunciation: "[seɪf ənd saʊnd]",
    simplePronunciation: "safe and sownd",
    senses: [
      {
        number: 1,
        type: "adjective phrase",
        frequency: "common",
        definition: "Completely free from danger, unharmed, and in good condition, often after a situation where there was a risk of harm.",
        examples: [
          "After the long flight, she texted her parents to say she had arrived safe and sound.",
          "The rescue team brought all the hikers back safe and sound.",
          "Despite the storm, all the passengers reached the island safe and sound."
        ]
      }
    ],
    etymology: "Safe and sound goes back at least to Middle English; sound was used with the sense whole, uninjured, healthy. The collocation was already established by the late 16th century and appears in Shakespeare, which helped fix it in literary English.",
    wordFamily: {
      adjective: ["safe", "unsafe", "safely"],
      adverb: ["safely"]
    },
    collocations: [
      "arrive/come back/get home + safe and sound",
      "be/return/remain + safe and sound",
      "keep someone/something + safe and sound",
      "I'm just glad you're safe and sound."
    ],
    usageNotes: [
      "The idiom is commonly used to express relief and reassurance after danger, stress, or uncertainty (travels, surgery, accidents, natural disasters, etc.).",
      "Grammatically, it functions like an adjective after verbs such as be, arrive, come back, get home, or with verbs of motion: They came back safe and sound, I'm safe and sound now.",
      "Safe focuses on being out of danger; sound keeps its older meaning of healthy, whole, undamaged, so together they reinforce the idea of complete wellbeing."
    ],
    translation: {
      language: "pt-BR",
      text: "são e salvo; em segurança; ileso / sem nenhum dano.",
      examples: [
        {
          english: "After the long flight, she texted her parents to say she had arrived safe and sound.",
          translated: "Depois do longo voo, ela mandou uma mensagem para os pais dizendo que tinha chegado sã e salva."
        },
        {
          english: "The rescue team brought all the hikers back safe and sound.",
          translated: "A equipe de resgate trouxe todos os trilheiros de volta sãos e salvos."
        },
        {
          english: "Despite the storm, all the passengers reached the island safe and sound.",
          translated: "Apesar da tempestade, todos os passageiros chegaram à ilha sãos e salvos."
        }
      ]
    }
  },

  "scum": {
    id: "scum",
    word: "scum",
    type: "noun/verb",
    pronunciation: "[skʌm]",
    simplePronunciation: "skum",
    senses: [
      {
        number: 1,
        type: "noun",
        frequency: "common",
        definition: "A thin or dirty layer of unpleasant or impure substance that forms on the surface of a liquid or sometimes on a solid.",
        examples: [
          "There was a layer of green scum on the surface of the pond.",
          "Boil the soup gently and skim off any scum.",
          "The water looked dirty, covered in scum and trash."
        ]
      },
      {
        number: 2,
        type: "noun",
        frequency: "common",
        contextLabel: "offensive",
        definition: "An insulting word for a person or group of people considered extremely bad, immoral, or worthless.",
        examples: [
          "Drug dealers are the scum of the earth.",
          "Only scum would treat animals like that.",
          "Those scammers are absolute scum."
        ]
      },
      {
        number: 3,
        type: "noun",
        frequency: "rare",
        definition: "Impurities or dross that rise to the top of molten metal or other industrial liquids.",
        examples: [
          "The metalworker skimmed the scum off the molten iron.",
          "Remove the scum during the refining process to get a purer metal."
        ]
      },
      {
        number: 4,
        type: "verb",
        frequency: "rare",
        definition: "To remove the scum from the surface of a liquid; to become covered with scum.",
        examples: [
          "Bring the stock to a boil and scum it carefully before adding vegetables.",
          "The pond had scummed over during the hot summer."
        ]
      }
    ],
    etymology: "Comes from Middle Dutch \"schume\" and related Germanic forms meaning \"foam, froth,\" originally referring to the layer on top of liquid. The figurative sense \"lowest class of humanity, despicable people\" is attested from the late 16th century and became common in expressions like \"scum of the earth.\"",
    wordFamily: {
      noun: ["scum", "scumbag", "scumminess"],
      adjective: ["scummy"],
      verb: ["scum"]
    },
    collocations: [
      "pond scum, green scum, dirty scum on the water",
      "skim off/remove the scum",
      "the scum of the earth",
      "political scum, racist scum, total scum"
    ],
    usageNotes: [
      "The concrete, physical sense (layer on liquid) is neutral and common in scientific or everyday contexts.",
      "The insult sense is very strong; in many contexts, it is harsher than simple swear words because it dehumanizes the person or group.",
      "This sense is highly offensive and expresses very strong disapproval; it should be used with caution, because it can sound very harsh or hateful.",
      "Often appears in fixed expressions like \"the scum of the earth\" to emphasize that someone is seen as the worst kind of person."
    ],
    translation: {
      language: "pt-BR",
      text: "espuma suja; camada de sujeira; crosta/nata de sujeira (líquido); escória; ralé; lixo humano; canalha (pessoas).",
      examples: [
        {
          english: "There was a layer of green scum on the surface of the pond.",
          translated: "Havia uma camada de sujeira esverdeada na superfície do lago."
        },
        {
          english: "Boil the soup gently and skim off any scum.",
          translated: "Ferva a sopa lentamente e retire qualquer espuma de sujeira que se formar."
        },
        {
          english: "Drug dealers are the scum of the earth.",
          translated: "Traficantes de drogas são a escória da humanidade."
        },
        {
          english: "Only scum would treat animals like that.",
          translated: "Só canalha trataria animais desse jeito."
        }
      ]
    }
  },

  "twisted-mind": {
    id: "twisted-mind",
    word: "Twisted mind",
    type: "Idiom (collocation)",
    pronunciation: "/ˈtwɪstɪd maɪnd/",
    simplePronunciation: "TWIS-tid mind",
    frequency: "Common",
    definition: "A mentally disturbed, perverted, or cruel way of thinking; someone who thinks in an abnormal, often evil or harmful way.",
    examples: [
      "The killer must have had a twisted mind to do something so evil.",
      "Only someone with a twisted mind would find that funny.",
      "He has a twisted mind – always thinking of ways to hurt people.",
    ],
    etymology: "From twisted ('bent, deformed, distorted' - Old English twist 'rope, divided object'). Figurative 'perverted' from 16th century.",
    wordFamily: {
      adjective: ["twisted"],
      noun: ["twist", "mind"],
      related: ["warped mind", "sick mind"],
    },
    collocations: [
      "twisted mind",
      "warped mind",
      "sick mind",
      "evil mind",
      "perverted mind",
    ],
    usageNotes: [
      "Disapproving connotation: implies mental disturbance or moral corruption.",
      "Often used to describe criminals, villains, or abnormal thinking.",
      "Related expressions: warped mind, sick mind.",
    ],
    translation: {
      language: "pt-BR",
      text: "Mente doentia, mente torcida, mente perturbada, mente doente.",
      examples: [
        {
          english: "The killer must have had a twisted mind.",
          translated: "O assassino deve ter tido uma mente doentia/perturbada.",
        },
        {
          english: "Only someone with a twisted mind would find that funny.",
          translated: "Só alguém com uma mente torcida acharia isso engraçado.",
        },
        {
          english: "He has a twisted mind and enjoys hurting others.",
          translated: "Ele tem uma mente doente e gosta de machucar os outros.",
        },
      ],
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

export function getMediaById(id: string): MediaData | undefined {
  return mediaData[id];
}

export function getVocabularyByWord(word: string): VocabularyWord | undefined {
  return vocabularyData[word.toLowerCase()];
}

export function getVocabularyForMedia(mediaId: string): VocabularyWord[] {
  const media = mediaData[mediaId];
  if (!media) return [];
  return media.words
    .map((word) => vocabularyData[word])
    .filter((w): w is VocabularyWord => w !== undefined);
}

// Get all vocabulary words across all media
export function getAllVocabulary(): { word: VocabularyWord; mediaId: string }[] {
  const results: { word: VocabularyWord; mediaId: string }[] = [];
  for (const [mediaId, media] of Object.entries(mediaData)) {
    for (const wordId of media.words) {
      const word = vocabularyData[wordId];
      if (word) {
        results.push({ word, mediaId });
      }
    }
  }
  return results;
}

// Get a random vocabulary word
export function getRandomVocabulary(): { word: VocabularyWord; mediaId: string } | undefined {
  const all = getAllVocabulary();
  if (all.length === 0) return undefined;
  return all[Math.floor(Math.random() * all.length)];
}

// Search vocabulary by word, definition, or examples
export function searchVocabulary(query: string): { word: VocabularyWord; mediaId: string }[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const all = getAllVocabulary();
  
  return all.filter(({ word }) => {
    // Search in word name
    if (word.word.toLowerCase().includes(q)) return true;
    // Search in definition
    if (word.definition?.toLowerCase().includes(q)) return true;
    // Search in senses definitions
    if (word.senses?.some(s => s.definition.toLowerCase().includes(q))) return true;
    // Search in examples
    if (word.examples?.some(e => e.toLowerCase().includes(q))) return true;
    if (word.senses?.some(s => s.examples?.some(e => e.toLowerCase().includes(q)))) return true;
    return false;
  });
}

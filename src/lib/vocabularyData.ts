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
  { id: "dragonBall", displayName: "dragon ball z", vocabularyCount: 4 },
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
    vocabularyCount: 5,
    words: ["jeopardize", "withstand", "pampered", "pay-through-the-nose", "stubborn"],
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

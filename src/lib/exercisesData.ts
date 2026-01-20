export interface ExerciseSet {
  id: string;
  number: number;
  title: string;
  description: string;
  exercisePdf: string;
  answersPdf: string;
}

export const exerciseSets: ExerciseSet[] = [
  {
    id: "vocabulary-practice-1",
    number: 1,
    title: "Vocabulary Practice Set 1",
    description: "First collection of vocabulary exercises covering foundational words and phrases.",
    exercisePdf: "/exercises/vocabulary-practice-1/vocabulary-exercises.pdf",
    answersPdf: "/exercises/vocabulary-practice-1/vocabulary-answers.pdf"
  },
  {
    id: "vocabulary-practice-2",
    number: 2,
    title: "Vocabulary Practice Set 2",
    description: "Second collection building on Set 1 with more advanced vocabulary.",
    exercisePdf: "/exercises/vocabulary-practice-2/vocabulary-exercises.pdf",
    answersPdf: "/exercises/vocabulary-practice-2/vocabulary-answers.pdf"
  },
  {
    id: "vocabulary-practice-3",
    number: 3,
    title: "Vocabulary Practice Set 3",
    description: "Third collection featuring idioms, collocations, and contextual usage.",
    exercisePdf: "/exercises/vocabulary-practice-3/vocabulary-exercises.pdf",
    answersPdf: "/exercises/vocabulary-practice-3/vocabulary-answers.pdf"
  }
];

export function getExerciseSetById(id: string): ExerciseSet | undefined {
  return exerciseSets.find(set => set.id === id);
}

export type Achievements =
  | "completedAllCapitalization"
  | "completedAllPunctuation"
  | "completedAllSpelling"
  | "completedCapitalizationLevel1"
  | "completedCapitalizationLevel2"
  | "completedCapitalizationLevel3"
  | "completedPunctuationLevel1"
  | "completedPunctuationLevel2"
  | "completedPunctuationLevel3"
  | "completedSpellingLevel1"
  | "completedSpellingLevel2"
  | "completedSpellingLevel3"
  | "completedAllLevels";

export type Room = "capitalization" | "punctuation" | "spelling";

export type LevelProgress = [boolean, boolean, boolean]; // 3 levels

export type RoomProgress = {
  [room in Room]: LevelProgress;
};

export interface User {
  username: string;
  password: string;
  avatar: string;
  ranking: number;
  points: number;
  achievements: Array<Achievements>;
  progress: RoomProgress;
  isLoggedIn: boolean;
}

export type Word = {
  word: string;
  isCorrect: boolean;
  correctWord: string;
};

export type Word3 = {
  incorrectSentence: string;
  correctSentence: string;
};

export type Question = {
  question: string;
  choices: string[];
  answerIndex: number;
};

export interface Word2 {
  prompt: string;
  answer: string;
  correctIndexes: number[];
}

// Define the structure for an achievement card
export interface AchievementCardProps {
  title: string;
  description: string;
  date?: string;
  imageSrc: string;
  achieved: boolean;
}

export interface SpellingCorrection {
  incorrect: string;
  correct: string;
  incorrect_alt: string;
  definition: string;
}

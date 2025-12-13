import type { QuestionType } from "./constants/QuestionType.Enum";

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

export type PracticeQuestion = {
  question: string;
  choices: string[];
  answerIndex: number;
  reason: string;
};

// Define the structure for an achievement card
export interface AchievementCardProps {
  title: string;
  description: string;
  date?: string;
  imageSrc: string;
  achieved: boolean;
}

export interface Quiz {
  category: string,
  beginner: SetContainer[],
  intermidiate: SetContainer[],
  hard: SetContainer[]
}

export interface SetContainer {
  label: string,
  set: QuizSet
}

export interface QuizSet {
  instruction: string,
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  question: string,
  type: QuestionType,
  correctAnswer: string,
  explanation: string,

  // can be used for the following types:
  // - MCQ
  // - Image Identification
  choices?: string[]
}
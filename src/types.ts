import type { QuestionType } from "./constants/QuestionType.Enum";

export type Achievements =
  | "completeContentBeginner"
  | "completeContentIntermediate"
  | "completeContentAdvanced"
  | "completeOrganizationBeginner"
  | "completeOrganizationIntermediate"
  | "completeOrganizationAdvanced"
  | "completeVocabularyBeginner"
  | "completeVocabularyIntermediate"
  | "completeVocabularyAdvanced"
  | "completeGrammarBeginner"
  | "completeGrammarIntermediate"
  | "completeGrammarAdvanced"
  | "completeMechanicsBeginner"
  | "completeMechanicsIntermediate"
  | "completeMechanicsAdvanced"
  | "completeAllContent"
  | "completeAllOrganization"
  | "completeAllVocabulary"
  | "completeAllGrammar"
  | "completeAllMechanic"
  | "completedAllLevels";

export type Room = "content" | "organization" | "vocabulary" | "grammar" | "mechanics";

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
  advance: SetContainer[],
}

export interface SetContainer {
  label: string,
  metadata: SetMetadata,
  set: QuizSet
}

export interface SetMetadata {
  // time limit is represented in seconds
  timeLimit: number,
  passingScore: number,
}

export interface QuizSet {
  instruction: string,
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  question: string,
  type: QuestionType,

  // number value represents index
  correctAnswer: string | number,
  explanation: string,

  choices?: string[]
  choiceType?: "alpha" | "numeric" | "none"

  // used by Transitional to dictate how many answer can be selected
  transitions?: number,

  // used to display the direction/instruction of the next section of the set
  direction?: string
}

export type Achievements =
  | "completedAllCapitalization"
  | "completedAllPunctuation"
  | "completedAllSpelling"
  | "someOtherAchievement";

export type Room = "capitalization" | "punctuation" | "spelling";

export type LevelProgress = [boolean, boolean, boolean]; // 3 levels

export type RoomProgress = {
  [room in Room]: LevelProgress;
};

export interface User {
  username: string;
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
};

export type Prompt = {
  prompt: string;
  answer: string;
};

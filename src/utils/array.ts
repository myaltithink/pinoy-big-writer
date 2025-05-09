import type { Word } from "../types";

export const shuffleArray = (array: Word[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

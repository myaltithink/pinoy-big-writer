import type { AchievementCardProps, Achievements, PracticeQuestion, Quiz } from "../types";
import { ORG_BEGINER_SET } from "./organization/beginner";
import { ORG_INTERMIDIATE_SET } from "./organization/intermidiate";

export const practiceQuestions: PracticeQuestion[] = [
  {
    question: "Which sentence is correctly written?",
    choices: [
      "how are you doing today",
      "How are you doing today?",
      "How are you doing today.",
      "how are you doing today!",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it starts with a capital letter and ends with a question mark.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I love chocolate cake. Do you?",
      "I love chocolate cake do you.",
      "i love chocolate cake. do you?",
      "I love chocolate cake do you",
    ],
    answerIndex: 0,
    reason:
      "A is correct because both sentences start with capital letters and use proper punctuation.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "It was a beautifull day yesterday",
      "It was a beautiful day yesterday.",
      "it was a beautiful day yesterday.",
      "It was a beautiful day Yesterday",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses correct spelling ("beautiful"), capitalization, and ends with a period.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She’s going to the park to play with her freinds.",
      "She is going to the park to play with her Friends",
      "She’s going to the park to play with her friends.",
      "she’s going to the park to play with her friends",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it uses correct contraction, spelling ("friends"), and capitalization.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "wow that was amazing",
      "Wow. That was amazing.",
      "wow, that was amazing.",
      "Wow! That was amazing.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses proper capitalization and ends with an exclamation mark for emotion.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We should visit the library and borrow some books.",
      "we should visit the library and borrow some books",
      "We should visit the libray and borrow some books.",
      "We should visit the library and borrow some Books",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses correct spelling ("library"), capitalization, and ends with a period.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Lets go for a walk tomorrow morning",
      "Let’s go for a walk tomorrow morning.",
      "Let’s go for a walk tomorrow Morning",
      "let’s go for a walk tomorrow morning",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses the correct contraction ("Let’s"), proper capitalization, and punctuation.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The concert is next Saturday do you want to go",
      "the concert is next Saturday. Do you want to go",
      "The concert is next Saturday. Do you want to go?",
      "The concert is next Saturday do you want to go?",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it splits the two ideas into proper sentences with correct punctuation and capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My brothers name is michael.",
      "My brother’s name is Michael.",
      "my brother’s name is Michael.",
      "My brother’s name is michael",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it shows possession with "brother’s" and capitalizes the name "Michael."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please hand me the pen, its on the table.",
      "Please hand me the pen. It’s on the table.",
      "Please hand me the pen; it’s on the table.",
      "Please hand me the pen it’s on the table.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses a semicolon to join two related complete sentences and correct contractions.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "i want to buy a new backpack from the store.",
      "I want to buy a new backpack from the store.",
      "I want to buy a new backpack from the Store.",
      "I want to buy new backpack from the store",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses proper capitalization and spelling throughout the sentence.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "the professor gave an interesting lecture on physics.",
      "The Professor gave an interesting lecture on Physics.",
      "The professor gave an interesting lecture on physics.",
      "The professor gave an interesting Lecture on physics",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes only the first word and treats common nouns like "professor" and "physics" correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She said i will come after lunch.",
      "She said I will come after lunch.",
      "She said, “I will come after lunch.”",
      "She said “I will come after lunch”",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses proper capitalization, punctuation, and quotation marks for direct speech.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We went to the beach, it was hot and sunny.",
      "We went to the beach. It was hot and sunny.",
      "We went to the beach; it was hot and sunny.",
      "We went to the beach it was hot and sunny",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it joins two related independent clauses correctly with a semicolon.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "He loves reading books about history and scifi.",
      "He loves reading books about history and sci-fi.",
      "he loves reading books about history and sci fi.",
      "He loves reading books about History and Sci-fi",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses the correct spelling of "sci-fi" with a hyphen and proper capitalization.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I visited the musuem last weekend.",
      "i visited the museum last weekend.",
      "I visited the museum last weekend.",
      "I visited the Museum last weekend",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes the first word and spells "museum" correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She gave me a pretty bracelet as a gift.",
      "She gave me a pretty Bracelet as a gift.",
      "she gave me a pretty bracelet as a gift.",
      "She gave me a pretty bracelet as a Gift",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses proper capitalization and avoids capitalizing the common noun "bracelet."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please dont forget your homework tomorrow.",
      "Please Don't forget your homework tomorrow.",
      "please don’t forget your homework tomorrow.",
      "Please don’t forget your homework tomorrow.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses the correct contraction “don’t” and capitalizes the first word.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The movie was fantastic, we should watch it again.",
      "The movie was fantastic. We should watch it again.",
      "The movie was fantastic! We should watch it again.",
      "the movie was fantastic! We should watch it again.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses an exclamation mark to show strong feeling and proper capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I need to buy some shoes and a coat.",
      "i need to buy some shoes and a coat.",
      "I need to buy some shoes, and a coat.",
      "I need to buy some shoes and a Coat.",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses correct capitalization and avoids unnecessary comma before "and."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Have you seen my book its missing.",
      "Have you seen my book? It’s missing.",
      "have you seen my book? It’s missing.",
      "Have you seen my book, it’s missing?",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses a question mark and a contraction, with proper capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My favrite color is blue.",
      "My favorite color is blue.",
      "my favorite color is blue.",
      "My favorite Color is blue.",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it spells "favorite" correctly and capitalizes the first word.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My parents are going to paris for the holidays.",
      "my parents are going to Paris for the holidays.",
      "My parents are going to Paris for the holidays.",
      "My parents are going to paris for the Holidays.",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes "Paris" as a proper noun and begins the sentence correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She loves to read novels about adventures.",
      "she loves to read novels about adventures.",
      "She loves to read novels about Adventures.",
      "She loves to read Novels about adventures.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and does not capitalize common nouns unnecessarily.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "You should take an umbrella, it’s raining outside.",
      "You should take an umbrella it’s raining outside.",
      "You should take an umbrella. It’s raining outside.",
      "You should take an umbrella; it’s raining outside.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses a semicolon to connect two related independent clauses correctly.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I got a letter from my friend last week.",
      "i got a letter from my friend last week.",
      "I got a Letter from my friend last week.",
      "I got a letter from my friend Last week.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and does not capitalize common nouns unnecessarily.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She plays the violin beautifully.",
      "She plays the Violin beautifully.",
      "she plays the violin beautifully.",
      "She play the violin beautifully.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and punctuation throughout.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The class starts at 9 am tomorrow.",
      "the class starts at 9 AM tomorrow.",
      "The class starts at 9 a.m. tomorrow.",
      "The Class starts at 9 a.m. tomorrow.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses proper formatting of “a.m.” and uses correct capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We will have a big Party for his birthday.",
      "We will have a big party for his birthday.",
      "We will have a Big party for his Birthday.",
      "we will have a big party for his birthday.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses lowercase for the common noun “party” and correct capitalization at the start.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "There is a new restaurant near my house.",
      "There is a new resturant near my house.",
      "there is a new restaurant near my house.",
      "There is a new restaurant Near my house.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it spells “restaurant” correctly and starts with a capital letter.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "They went on a vacation to new york city.",
      "They went on a vacation to New York City.",
      "they went on a vacation to New York City.",
      "They went on a Vacation to New York City.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it capitalizes the proper noun “New York City” and starts the sentence correctly.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The train leaves at 5 oclock.",
      "The train leaves at 5 o’clock.",
      "the train leaves at 5 o’clock.",
      "The Train leaves at 5 o’clock.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses the correct punctuation mark (apostrophe) in “o’clock” and capitalizes the first word.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "He asked if we were ready for the race.",
      "he asked if we were ready for the race.",
      "He asked if we were ready for the Race.",
      "He asked if we were Ready for the race.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization throughout and avoids unnecessary capitalization of “race.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "His Favorite subject is Math 101.",
      "His favorite subject is Math 101.",
      "His favorite Subject is math 101.",
      "His Favorite subject is math 101.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses correct capitalization and spells all words properly, including “Math 101.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We should study for the Test.",
      "We should Study for the test.",
      "we should study for the test.",
      "We should study for the test.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it starts with a capital letter and avoids capitalizing the common noun “test.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The house was decorated with beautiful flowers.",
      "The house was decorated with beautiful Flowrs.",
      "The House was decorated with beautiful flowers.",
      "the house was decorated with beautiful flowers.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper spelling, capitalization, and punctuation.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please take care of the dog while I’m away.",
      "Please take care of the dog while I’m away,",
      "Please take care of the dog while I'm away:",
      "Please take care of the dog while I'm away;",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses correct punctuation with a period and proper capitalization.",
  },
];

// Mapping of achievement keys to display-friendly names and images
export const allAchievementsDisplayData: Record<
  Achievements,
  Omit<AchievementCardProps, "date" | "achieved">
> = {
  completedCapitalizationLevel1: {
    title: "Capitalization Beginner",
    description: "Completed the first Capitalization exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedCapitalizationLevel2: {
    title: "Capitalization Intermediate",
    description: "Completed the second Capitalization exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedCapitalizationLevel3: {
    title: "Capitalization Advance",
    description: "Completed the third Capitalization exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedPunctuationLevel1: {
    title: "Punctuation Beginner",
    description: "Completed the first Punctuation exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedPunctuationLevel2: {
    title: "Punctuation Intermediate",
    description: "Completed the second Punctuation exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedPunctuationLevel3: {
    title: "Punctuation Advance",
    description: "Completed the third Punctuation exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedSpellingLevel1: {
    title: "Spelling Beginner",
    description: "Completed the first Spelling exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedSpellingLevel2: {
    title: "Spelling Intermediate",
    description: "Completed the second Spelling exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedSpellingLevel3: {
    title: "Spelling Advance",
    description: "Completed the third Spelling exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedAllCapitalization: {
    title: "Capitalization Champion",
    description: "Completed all Capitalization exercises.",
    imageSrc: "/achievements/capital-trophy.png", // Replace with actual path
  },
  completedAllPunctuation: {
    title: "Punctuation Champion",
    description: "Completed all Punctuation exercises.",
    imageSrc: "/achievements/punctuation-trophy.png", // Replace with actual path
  },
  completedAllSpelling: {
    title: "Spelling Champion",
    description: "Completed all Spelling exercises.",
    imageSrc: "/achievements/spell-trophy.png", // Replace with actual path
  },
  completedAllLevels: {
    title: "Pinoy Big Writer",
    description:
      "Completed all levels in Capitalization, Punctuation, and Spelling.",
    imageSrc: "/achievements/pbw-trophy.png", // Replace with actual path
  },
};


export const ORGANIZATION_QUIZ: Quiz = {
    category: "Organization",
    beginner: ORG_BEGINER_SET,
    intermidiate: ORG_INTERMIDIATE_SET,
    hard: []
}




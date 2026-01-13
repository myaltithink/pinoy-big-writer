import type { PracticeQuiz, QuizQuestion, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const week1SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the correct word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Maria showed great __________ when she helped her friend.",
        explanation: "",
        correctAnswer: "happiness",
        choices: [
            "happines",
            "happiness",
            "happyness",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The teacher __________ the class for being noisy.",
        explanation: "",
        correctAnswer: "hurried",
        choices: [
            "hurrid",
            "hurried",
            "hurryed",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The children are __________ in the school yard.",
        explanation: "",
        correctAnswer: "playing",
        choices: [
            "plaiing",
            "playing",
            "playying",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4.	Three __________ were parked near the gate.",
        explanation: "",
        correctAnswer: "buses",
        choices: [
            "bus",
            "buss",
            "buses",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	There are many __________ on the table.",
        explanation: "",
        correctAnswer: "boxes",
        choices: [
            "boxs",
            "boxes",
            "boxxes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.	Every parent loves his or her __________.",
        explanation: "",
        correctAnswer: "children",
        choices: [
            "childes",
            "childs",
            "children",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	She is __________ to pass the test.",
        explanation: "",
        correctAnswer: "hoping",
        choices: [
            "hopeing",
            "hoping",
            "hopeng",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The rabbit is __________ across the field.",
        explanation: "",
        correctAnswer: "hopping",
        choices: [
            "hoping",
            "hopping",
            "hoppping",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9.	__________ going to clean the classroom today.",
        explanation: "",
        correctAnswer: "They're",
        choices: [
            "Their",
            "There",
            "They're",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	I have __________ pencils in my bag.",
        explanation: "",
        correctAnswer: "two",
        choices: [
            "to",
            "too",
            "two",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11.	The girl is __________ her name on the paper.",
        explanation: "",
        correctAnswer: "writing",
        choices: [
            "writeing",
            "writing",
            "writting",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12.	The cat is __________ on the roof.",
        explanation: "",
        correctAnswer: "sitting",
        choices: [
            "siting",
            "sitting",
            "siteing",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13.	The class saw many __________ at the zoo.",
        explanation: "",
        correctAnswer: "heroes",
        choices: [
            "hero",
            "heros",
            "heroes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14.	The boy has two __________ on his feet.",
        explanation: "",
        correctAnswer: "shoes",
        choices: [
            "shoe",
            "shoes",
            "shoos",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15.	Please put the book __________ the table.",
        explanation: "",
        correctAnswer: "on",
        choices: [
            "on",
            "one",
            "won",
        ],
        choiceType: "alpha"
    },
];

const week1SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the letter (A-D) that correctly identifies the spelling rule being described.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which rule applies when adding a suffix to a word ending in “y” after a consonant?",
        explanation: "",
        correctAnswer: "Change “y” to “i” before adding the suffix",
        choices: [
            "Add the suffix without change",
            "Double the final consonant",
            "Drop the silent e",
            "Change “y” to “i” before adding the suffix",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Why does “happy” become “happiness”?",
        explanation: "",
        correctAnswer: "The “y” follows a consonant",
        choices: [
            "The word ends in a vowel",
            "The word is irregular",
            "The word has a silent e",
            "The “y” follows a consonant",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. When does the “y” remain unchanged when adding a suffix?",
        explanation: "",
        correctAnswer: "When the “y” follows a vowel",
        choices: [
            "When the suffix begins with a vowel",
            "When the word is plural",
            "When the “y” follows a vowel",
            "When the word is short",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which rule explains how most regular plural nouns are formed?",
        explanation: "",
        correctAnswer: "Add “s” to the noun",
        choices: [
            "Add “es” to all nouns",
            "Change “y” to “i”",
            "Add “s” to the noun",
            "Double the last consonant",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. When should “es” be added instead of “s” to form a plural?",
        explanation: "",
        correctAnswer: "When a word ends in s, ss, sh, ch, x, or z",
        choices: [
            "When a word ends in a vowel",
            "When a word ends in y",
            "When a word ends in o",
            "When a word ends in s, ss, sh, ch, x, or z",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which rule applies to words like “tomatoes” and “heroes”?",
        explanation: "",
        correctAnswer: "Some words ending in “o” take “es”",
        choices: [
            "Irregular plural rule",
            "Silent e rule",
            "Y-to-i rule",
            "Some words ending in “o” take “es”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which statement best describes irregular plurals?",
        explanation: "",
        correctAnswer: "They do not follow standard plural rules",
        choices: [
            "They always add “s”",
            "They always add “es”",
            "They follow the silent e rule",
            "They do not follow standard plural rules",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which rule explains the spelling change from “cap” to “cape”?",
        explanation: "",
        correctAnswer: "Silent e rule",
        choices: [
            "Double consonant rule",
            "Irregular plural rule",
            "Silent e rule",
            "Y-to-i rule",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. What usually happens to the silent “e” when adding a suffix that begins with a vowel?",
        explanation: "",
        correctAnswer: "It is dropped",
        choices: [
            "It changes to i",
            "It is doubled",
            "It is pronounced",
            "It is dropped",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is the “e” kept in the word “careful”?",
        explanation: "",
        correctAnswer: "The suffix begins with a consonant",
        choices: [
            "The word is irregular",
            "The suffix begins with a vowel",
            "The suffix begins with a consonant",
            "The word is plural",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. When does the double consonant rule usually apply?",
        explanation: "",
        correctAnswer: "When a suffix begins with a vowel",
        choices: [
            "When a suffix begins with a consonant",
            "When a word ends in two vowels",
            "When forming plurals",
            "When a suffix begins with a vowel",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which spelling rule explains why “hop” becomes “hopping”?",
        explanation: "",
        correctAnswer: "Double consonant rule",
        choices: [
            "Silent e rule",
            "Y-to-i rule",
            "Double consonant rule",
            "Irregular plural rule",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which word is an exception to the double consonant rule?",
        explanation: "",
        correctAnswer: "Traveling",
        choices: [
            "Hopping",
            "Sitting",
            "Traveling",
            "Running",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. What are words that sound the same but have different meanings and spellings called?",
        explanation: "",
        correctAnswer: "Homophones",
        choices: [
            "Antonyms",
            "Plurals",
            "Synonyms",
            "Homophones",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which group best represents homophones?",
        explanation: "",
        correctAnswer: "There, their, they're",
        choices: [
            "Cat, cats, kitten",
            "Run, running, ran",
            "Book, books, booking",
            "There, their, they're",
        ],
        choiceType: "alpha"
    },
];

const week2SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the sentence with the correct capitalization.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "Jose Rizal wrote Noli Me Tangere.",
        choices: [
            "Jose rizal wrote Noli Me Tangere.",
            "Jose Rizal wrote Noli Me Tangere.",
            "Jose Rizal wrote noli me tangere.",
            "jose Rizal wrote Noli Me Tangere.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "I live in the Philippines.",
        choices: [
            "I live in the philippines.",
            "I live in the Philippines.",
            "I live in the Philippines.",
            "I live in the philippines.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "My teacher works at the Department of Education.",
        choices: [
            "My teacher works at the department of education.",
            "My teacher works at the Department of Education.",
            "My teacher works at the department of Education.",
            "My teacher works at the Department of education.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "We celebrate Christmas in December.",
        choices: [
            "We celebrate christmas in December.",
            "We celebrate Christmas in December.",
            "We celebrate Christmas in december.",
            "We celebrate christmas in december.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "She visits Cebu City every summer.",
        choices: [
            "She visits Cebu City every summer.",
            "She visits cebu city every summer.",
            "She visits Cebu city every summer.",
            "She visits cebu City every summer.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "President Ferdinand Marcos Jr. spoke today.",
        choices: [
            "president Ferdinand Marcos Jr. spoke today.",
            "President ferdinand Marcos Jr. spoke today.",
            "President Ferdinand Marcos Jr. spoke today.",
            "President Ferdinand marcos jr. spoke today.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "My favorite subject is Filipino.",
        choices: [
            "My favorite subject is filipino.",
            "My favorite subject is filipino.",
            "My favorite subject is Filipino.",
            "My favorite subject is Filipino.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "The Pasig River is important to Manila.",
        choices: [
            "The pasig river is important to Manila.",
            "The Pasig river is important to Manila.",
            "The pasig River is important to Manila.",
            "The Pasig River is important to Manila.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "We speak Tagalog at home.",
        choices: [
            "We speak Tagalog at home.",
            "We speak tagalog at home.",
            "We speak tagalog at Home.",
            "We speak Tagalog at Home.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "I read El Filibusterismo last year.",
        choices: [
            "I read el filibusterismo last year.",
            "I read El Filibusterismo last year.",
            "I read El filibusterismo last year.",
            "I read el Filibusterismo last year.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "My brother studies at University of the Philippines.",
        choices: [
            "My brother studies at university of the philippines.",
            "My brother studies at University of the philippines.",
            "My brother studies at University of the Philippines.",
            "My brother studies at university of the Philippines.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "Monday is the first day of school.",
        choices: [
            "monday is the first day of school.",
            "Monday is the first day of School.",
            "Monday is the first day of school.",
            "monday is the first day of School.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "The Department of Health (DOH) released a report.",
        choices: [
            "The department of health (doh) released a report.",
            "The Department of health (DOH) released a report.",
            "The Department of Health (DOH) released a report.",
            "The department of Health (DOH) released a report.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "I am proud to be Filipino.",
        choices: [
            "i am proud to be Filipino.",
            "I am proud to be Filipino.",
            "I am proud to be filipino.",
            "i am proud to be filipino.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15.	What sentence applies correct capitalization?",
        explanation: "",
        correctAnswer: "Mount Apo is the highest mountain in the Philippines.",
        choices: [
            "Mount apo is the highest mountain in the Philippines.",
            "mount Apo is the highest mountain in the Philippines.",
            "Mount Apo is the highest mountain in the philippines.",
            "Mount Apo is the highest mountain in the Philippines.",
        ],
        choiceType: "alpha"
    },
]

const week2SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the letter (A-D) that correctly identifies the capitalization rule being described or applied. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which rule explains why “Jose Rizal” is capitalized?",
        explanation: "",
        correctAnswer: "Capitalize proper nouns",
        choices: [
            "Capitalize common nouns",
            "Capitalize geographical names",
            "Capitalize titles of works",
            "Capitalize proper nouns",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. When should a common noun be capitalized?",
        explanation: "",
        correctAnswer: "When it begins a sentence",
        choices: [
            "When it names a general object",
            "When it refers to a job",
            "When it begins a sentence",
            "When it is plural",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which rule applies to the word “President” in “President Ferdinand Marcos Jr.”?",
        explanation: "",
        correctAnswer: "Capitalize titles before names",
        choices: [
            "Capitalize acronyms",
            "Capitalize beginning of sentences",
            "Capitalize titles before names",
            "Capitalize titles of works",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which rule explains why “Pasig River” is capitalized?",
        explanation: "",
        correctAnswer: "Capitalize geographical names",
        choices: [
            "Capitalize days and months",
            "Capitalize proper nouns",
            "Capitalize titles of people",
            "Capitalize geographical names",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Why is “Monday” capitalized?",
        explanation: "",
        correctAnswer: "It is a day of the week",
        choices: [
            "It is a season",
            "It is a subject",
            "It is a title",
            "It is a day of the week",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which item should NOT be capitalized according to the rules?",
        explanation: "",
        correctAnswer: "seasons",
        choices: [
            "holidays",
            "languages",
            "proper nouns",
            "seasons",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Why is “Filipino” capitalized?",
        explanation: "",
        correctAnswer: "It names a nationality",
        choices: [
            "It is a school subject",
            "It is used in a sentence",
            "It names a nationality",
            "It starts a paragraph",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. When should a school subject be capitalized?",
        explanation: "",
        correctAnswer: "When it is a language or part of a course title",
        choices: [
            "Always",
            "When it is difficult",
            "When it is a language or part of a course title",
            "When it is plural",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which rule explains capitalization in “Noli Me Tangere”?",
        explanation: "",
        correctAnswer: "Capitalize major words in titles of works",
        choices: [
            "Capitalize acronyms",
            "Capitalize geographical names",
            "Capitalize titles of people",
            "Capitalize major words in titles of works",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why are letters in “DOH” capitalized?",
        explanation: "",
        correctAnswer: "It is an acronym",
        choices: [
            "It is a proper noun",
            "It is a title",
            "It is an acronym",
            "It starts a sentence",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which rule applies to the first word of every sentence?",
        explanation: "",
        correctAnswer: "Capitalize the beginning of a sentence",
        choices: [
            "Capitalize common nouns",
            "Capitalize holidays",
            "Capitalize proper nouns",
            "Capitalize the beginning of a sentence",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Why is the pronoun “I” always capitalized?",
        explanation: "",
        correctAnswer: "It is always capitalized regardless of position",
        choices: [
            "It is a proper noun",
            "It refers to a person",
            "It starts sentences",
            "It is always capitalized regardless of position",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which rule applies to “Christmas”?",
        explanation: "",
        correctAnswer: "Capitalize holidays",
        choices: [
            "Capitalize seasons",
            "Capitalize school subjects",
            "Capitalize holidays",
            "Capitalize titles of works",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Why is “Sincerely” capitalized in a letter?",
        explanation: "",
        correctAnswer: "It is a complimentary close",
        choices: [
            "It is a proper noun",
            "It is a title",
            "It is emphasized",
            "It is a complimentary close",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which rule explains why “Math 101: Introduction to Algebra” is capitalized?",
        explanation: "",
        correctAnswer: "Capitalize course titles",
        choices: [
            "Capitalize common nouns",
            "Capitalize days and months",
            "Capitalize titles before names",
            "Capitalize course titles",
        ],
        choiceType: "alpha"
    },
]

const week3SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the correct punctuation mark to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1.	Maria said,  __I am ready.__",
        explanation: "",
        correctAnswer: "Quotation marks ( “ ” )",
        choices: [
            "Apostrophe ( ' )",
            "Comma ( , )",
            "Full stop ( . )",
            "Quotation marks ( “ ” )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2.	Wow ___ That performance was amazing",
        explanation: "",
        correctAnswer: "Exclamation mark ( ! )",
        choices: [
            "Exclamation mark ( ! )",
            "Full stop ( . )",
            "Question mark ( ? )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3.	Please bring the following ___ notebook, pen, and ruler.",
        explanation: "",
        correctAnswer: "Colon ( : )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Full stop ( . )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. I bought apples ___ oranges ___ and bananas.",
        explanation: "",
        correctAnswer: "Comma ( , )",
        choices: [
            "Apostrophe ( ' )",
            "Comma ( , )",
            "Colon ( : )",
            "Full stop ( . )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	The bell rang ___",
        explanation: "",
        correctAnswer: "Full stop / Period ( . )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Full stop / Period ( . )",
            "Question mark ( ? )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.	This is Ana ___s notebook.",
        explanation: "",
        correctAnswer: "Apostrophe ( ' )",
        choices: [
            "Apostrophe ( ' )",
            "Comma ( , )",
            "Quotation marks ( “ ” )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	The boy ___ who is my cousin ___ lives in Cebu.",
        explanation: "",
        correctAnswer: "Parenthesis ( ( ) )",
        choices: [
            "Apostrophes ( ' ' )",
            "Commas ( , , )",
            "Full stops ( . . )",
            "Parenthesis ( ( ) )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8.	I finished my homework ___ I watched television.",
        explanation: "",
        correctAnswer: "Semicolon ( ; )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Question mark ( ? )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9.	What time will the class start ___",
        explanation: "",
        correctAnswer: "Question mark ( ? )",
        choices: [
            "Comma ( , )",
            "Exclamation mark ( ! )",
            "Full stop ( . )",
            "Question mark ( ? )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	She was about to speak __ then the bell rang.",
        explanation: "",
        correctAnswer: "Em dash ( — )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Em dash ( — )",
            "Full stop ( . )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11.	I like apples ___ mangoes ___ and bananas.",
        explanation: "",
        correctAnswer: "Comma ( , )",
        choices: [
            "Apostrophe ( ' )",
            "Comma ( , )",
            "Full stop ( . )",
            "Question mark ( ? )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12.	She is my sister ___",
        explanation: "",
        correctAnswer: "Full stop / Period ( . )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Full stop / Period ( . )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13.	What is your name ___",
        explanation: "",
        correctAnswer: "Question mark ( ? )",
        choices: [
            "Comma ( , )",
            "Exclamation mark ( ! )",
            "Question mark ( ? )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14.	Watch out ___ The floor is wet",
        explanation: "",
        correctAnswer: "Exclamation mark ( ! )",
        choices: [
            "Exclamation mark ( ! )",
            "Full stop ( . )",
            "Question mark ( ? )",
            "Semicolon ( ; )",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15.	The dog ___s tail is brown.",
        explanation: "",
        correctAnswer: "Apostrophe ( ' )",
        choices: [
            "Colon ( : )",
            "Comma ( , )",
            "Question mark ( ? )",
            "Apostrophe ( ' )",
        ],
        choiceType: "alpha"
    },
]

const week3SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the letter (A-D) that correctly identifies the use of the punctuation mark being described.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which punctuation mark is used to indicate the end of a declarative sentence?",
        explanation: "",
        correctAnswer: "Period (Full stop)",
        choices: [
            "Comma",
            "Exclamation mark",
            "Question mark",
            "Period (Full stop)",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which punctuation mark shows strong emotion or emphasis?",
        explanation: "",
        correctAnswer: "Exclamation mark",
        choices: [
            "Colon",
            "Comma",
            "Exclamation mark",
            "Semicolon",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which punctuation mark is used to indicate a direct question?",
        explanation: "",
        correctAnswer: "Question mark",
        choices: [
            "Exclamation mark",
            "Period",
            "Semicolon",
            "Question mark",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which punctuation mark is used to separate items in a list?",
        explanation: "",
        correctAnswer: "Comma",
        choices: [
            "Apostrophe",
            "Comma",
            "Parenthesis",
            "Semicolon",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which punctuation mark is used to show possession or contraction?",
        explanation: "",
        correctAnswer: "Apostrophe",
        choices: [
            "Apostrophe",
            "Colon",
            "Em dash",
            "Quotation marks",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which statement best describes the use of a colon ( : )?",
        explanation: "",
        correctAnswer: "To give emphasis, present dialogue, introduce lists or text, and clarify composition titles",
        choices: [
            "To join closely related independent clauses",
            "To show strong emotion or emphasis",
            "To separate items in a simple list",
            "To give emphasis, present dialogue, introduce lists or text, and clarify composition titles",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which punctuation mark is used to enclose additional information within a sentence?",
        explanation: "",
        correctAnswer: "Parenthesis",
        choices: [
            "Apostrophe",
            "Comma",
            "Parenthesis",
            "Quotation marks",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which punctuation mark joins closely related independent clauses?",
        explanation: "",
        correctAnswer: "Semicolon",
        choices: [
            "Colon",
            "Comma",
            "Semicolon",
            "Period",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which punctuation mark is used to indicate direct speech or quotation?",
        explanation: "",
        correctAnswer: "Quotation marks",
        choices: [
            "Apostrophe",
            "Colon",
            "Parenthesis",
            "Quotation marks",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which punctuation mark is used to interrupt a sentence or emphasize a phrase?",
        explanation: "",
        correctAnswer:  "Em dash",
        choices: [
            "Colon",
            "Comma",
            "Parenthesis",
            "Em dash",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which punctuation mark is correctly used to indicate omission of letters in a word?",
        explanation: "",
        correctAnswer: "Apostrophe",
        choices: [
            "Colon",
            "Apostrophe",
            "Semicolon",
            "Quotation marks",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which punctuation mark signals a pause within a sentence?",
        explanation: "",
        correctAnswer: "Comma",
        choices: [
            "Colon",
            "Em dash",
            "Comma",
            "Period",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which punctuation mark is used after introductory clauses or phrases?",
        explanation: "",
        correctAnswer: "Comma",
        choices: [
            "Apostrophe",
            "Comma",
            "Question mark",
            "Semicolon",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which punctuation mark separates items in a complex list with internal commas?",
        explanation: "",
        correctAnswer: "Semicolon",
        choices: [
            "Colon",
            "Comma",
            "Period",
            "Semicolon",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which punctuation mark is used at the end of an excited statement?",
        explanation: "",
        correctAnswer: "Exclamation mark",
        choices: [
            "Comma",
            "Exclamation mark",
            "Period",
            "Question mark",
        ],
        choiceType: "alpha"
    },
]

const week1Metadata: SetMetadata = {
    passingScore: 0,
    timeLimit: 15
}

const week2Metadata: SetMetadata = {
    passingScore: 0,
    timeLimit: 30
}

export const MECH_PRACTICE: PracticeQuiz = {
    week1: [
        {
            lessonNumber: 1,
            title: "Spelling Rules",
            sets: [
                {
                    label: "Spelling Rules Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week1SetA
                    }
                },
                {
                    label: "Spelling Rules Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week1SetB
                    }
                },
            ]
        }
    ],
    week2: [
        {
            lessonNumber: 2,
            title: "Capitalization",
            sets: [
                {
                    label: "Capitalization Rules Set A",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Select an answer within 30 seconds",
                        questions: week2SetA
                    }
                },
                {
                    label: "Capitalization Rules Set B",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Select an answer within 30 seconds",
                        questions: week2SetB
                    }
                },
            ]
        }
    ],
    week3: [
        {
            lessonNumber: 3,
            title: "Punctuation",
            sets: [
                {
                    label: "Punctuation Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week3SetA
                    }
                },
                {
                    label: "Punctuation Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week3SetB
                    }
                },               
            ]
        }
    ]
}
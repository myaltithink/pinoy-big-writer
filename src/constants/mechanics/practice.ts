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
        explanation: "The word ends in y after a consonant. Change y to i and add -ness.",
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
        explanation: "The word ends in y after a consonant. Change y to i before adding -ed.",
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
        explanation: "Do not double the consonant. Just add -ing.",
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
        explanation: "Add -es because the word ends in s.",
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
        explanation: "Add -es because the word ends in x.",
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
        explanation: "This is an irregular plural. It does not add -s or -es.",
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
        explanation: "Drop the silent e before adding -ing.",
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
        explanation: "Double the final consonant before adding -ing.",
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
        explanation: "They’re means they are.",
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
        explanation: "Two shows the number 2.",
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
        explanation: "Drop the silent e before adding -ing.",
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
        explanation: "Double the consonant before adding -ing.",
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
        explanation: "Add -s to make the noun plural.",
        correctAnswer: "animals",
        choices: [
            "animal",
            "animals",
            "animmal",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14.	The boy has two __________ on his feet.",
        explanation: "Add -s to make the noun plural.",
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
        explanation: "On shows position or place.",
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
        explanation: "Change y to i before adding the suffix.",
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
        explanation: "The y follows a consonant in happy.",
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
        explanation: "The y stays when it follows a vowel.",
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
        explanation: "Most nouns form plurals by adding -s.",
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
        explanation: "Add -es to words ending in s, ss, sh, ch, x, or z.",
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
        explanation: "Some words ending in o add -es.",
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
        explanation: "Irregular plurals do not follow standard rules.",
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
        explanation: "The silent e makes the vowel long.",
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
        explanation: "The silent e is dropped before a vowel suffix.",
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
        explanation: "The suffix begins with a consonant, so e stays.",
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
        explanation: "The rule applies when the suffix begins with a vowel.",
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
        explanation: "The final consonant is doubled before -ing.",
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
        explanation: "Hopping is an exception to the rule.",
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
        explanation: "Homophones sound the same but have different meanings.",
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
        explanation: "There, their, they’re are homophones.",
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
        explanation: "Jose Rizal is a proper noun. Book titles are capitalized.",
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
        explanation: "Philippines is the name of a country. Proper nouns are capitalized.",
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
        explanation: "Department of Education is the name of an organization.",
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
        explanation: "Christmas and December are proper nouns.",
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
        explanation: "Cebu City is a place name. Both words are capitalized.",
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
        explanation: "Titles before names are capitalized.",
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
        explanation: "Filipino is a language. Languages are capitalized.",
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
        explanation: "Pasig River is a geographical name.",
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
        explanation: "Tagalog is a language. It is capitalized.",
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
        explanation: "El Filibusterismo is a book title.",
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
        explanation: "University of the Philippines is a proper noun.",
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
        explanation: "Monday begins with a capital letter. The rest are common nouns.",
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
        explanation: "Department of Health and DOH are proper nouns and acronyms.",
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
        explanation: "The pronoun I is always capitalized.",
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
        explanation: "Mount Apo and Philippines are proper nouns.",
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
        explanation: "Names of people are proper nouns.",
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
        explanation: "Common nouns are capitalized only at the beginning of a sentence.",
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
        explanation: "Titles before names are capitalized.",
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
        explanation: "Rivers and places are geographical names.",
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
        explanation: "Days of the week are capitalized.",
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
        explanation: "Seasons are not capitalized unless they begin a sentence.",
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
        explanation: "Nationalities are capitalized.",
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
        explanation: "School subjects are capitalized if they are languages or course titles.",
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
        explanation: "Book titles capitalize important words.",
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
        explanation: "DOH is an acronym. Acronyms are capitalized.",
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
        explanation: "The first word of every sentence is capitalized.",
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
        explanation: "The pronoun I is always capitalized.",
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
        explanation: "Christmas is a holiday.",
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
        explanation: "Complimentary closes in letters are capitalized.",
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
        explanation: "Course titles are capitalized.",
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
        explanation: "Quotation marks are used to show the exact words spoken.",
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
        explanation: "An exclamation mark shows strong feeling or excitement.",
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
        explanation: "A colon is used to introduce a list.",
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
        explanation: "Commas separate items in a list.",
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
        explanation: "A period ends a complete statement.",
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
        explanation: "An apostrophe shows ownership.",
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
        explanation: "Parentheses add extra information in a sentence.",
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
        explanation: "A semicolon joins two closely related sentences.",
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
        explanation: "A semicolon joins two closely related sentences.",
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
        explanation: "An em dash shows interruption in a sentence.",
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
        explanation: "Commas separate items in a list.",
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
        explanation: "A period ends a sentence.",
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
        explanation: "A question mark is used at the end of a question.",
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
        explanation: "An exclamation mark shows warning or strong emotion.",
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
        explanation: "An apostrophe shows possession.",
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
        explanation: "A period ends a declarative sentence.",
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
        explanation: "It shows strong emotion or emphasis.",
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
        explanation: "It is used at the end of a question.",
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
        explanation: "A comma separates items in a list.",
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
        explanation: "It shows possession or contraction.",
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
        explanation: "A colon introduces lists, dialogue, or explanations.",
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
        explanation: "Parentheses enclose extra information.",
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
        explanation: "A semicolon joins related independent clauses.",
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
        explanation: "They show direct speech or quotations.",
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
        explanation: "It interrupts or emphasizes a phrase.",
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
        explanation: "It shows missing letters in contractions.",
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
        explanation: "A comma signals a pause in a sentence.",
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
        explanation: "A comma follows introductory phrases.",
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
        explanation: "It separates items in a complex list.",
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
        explanation: "It ends an excited statement.",
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

const week1SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the correct answer. Some items ask for the correctly spelled word, while others ask for the spelling rule applied.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The pupils showed great __________ during the program.",
        explanation: "Change y to i and add -ness.",
        correctAnswer: "kindness",
        choices: ["kindnes", "kindness", "kindniss", "kindnies"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Ana __________ her homework before dinner.",
        explanation: "Add -ed to show past action.",
        correctAnswer: "finished",
        choices: ["finish", "finishing", "finished", "finised"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The boys are __________ basketball after class.",
        explanation: "Just add -ing. Do not double the consonant.",
        correctAnswer: "playing",
        choices: ["playying", "plaing", "playing", "playng"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. There are five __________ in the classroom.",
        explanation: "Add -s to form the plural.",
        correctAnswer: "chairs",
        choices: ["chair", "chairs", "chaires", "chairss"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. My mother bought two __________ of bread.",
        explanation: "Change f to v and add -es.",
        correctAnswer: "loaves",
        choices: ["loaf", "loafs", "loaves", "loaveses"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The dog is __________ loudly at night.",
        explanation: "Do not double the consonant. Add -ing.",
        correctAnswer: "barking",
        choices: ["barkking", "barking", "barkeing", "barkinng"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which rule explains why “baby” becomes “babies”?",
        explanation: "Change y to i before adding -es.",
        correctAnswer: "Change y to i before adding –es",
        choices: ["Add –s only", "Drop the silent e", "Change y to i before adding –es", "Double the final consonant"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The frog is __________ into the pond.",
        explanation: "Double the final consonant before adding -ing.",
        correctAnswer: "hopping",
        choices: ["hoping", "hopping", "hoppping", "hopinng"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. __________ going to clean the room today.",
        explanation: "They’re means they are.",
        correctAnswer: "They’re",
        choices: ["Their", "There", "Theyre", "They’re"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is the final consonant doubled in “running”?",
        explanation: "The word follows the double consonant rule.",
        correctAnswer: "Double consonant rule",
        choices: ["Silent e rule", "Y-to-i rule", "Double consonant rule", "Irregular spelling rule"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. The class saw many __________ during the parade.",
        explanation: "Some words ending in o add -es.",
        correctAnswer: "heroes",
        choices: ["hero", "heros", "heroes", "heroess"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. When adding a suffix that begins with a vowel, what usually happens to a silent e?",
        explanation: "The silent e is dropped.",
        correctAnswer: "It is dropped",
        choices: ["It is doubled", "It is dropped", "It changes to i", "It stays the same"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which word is spelled correctly?",
        explanation: "Drop the silent e before adding -ing.",
        correctAnswer: "writing",
        choices: ["writeing", "writting", "writing", "writeng"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. What do you call words like to, too, and two?",
        explanation: "They sound the same but have different meanings.",
        correctAnswer: "Homophones",
        choices: ["Synonyms", "Antonyms", "Homophones", "Prefixes"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Please put your bag __________ the chair.",
        explanation: "On shows position.",
        correctAnswer: "on",
        choices: ["on", "one", "won", "oun"],
        choiceType: "alpha"
    }
];

const week2SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the correct answer. Some items ask for the correctly capitalized sentence, while others ask for the capitalization rule being applied.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which sentence uses correct capitalization?",
        explanation: "Andres Bonifacio and Katipunan are proper nouns.",
        correctAnswer: "Andres Bonifacio founded the Katipunan.",
        choices: [
            "Andres bonifacio founded the Katipunan.",
            "Andres Bonifacio founded the katipunan.",
            "Andres Bonifacio founded the Katipunan.",
            "andres Bonifacio founded the Katipunan."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which rule explains why “Andres Bonifacio” is capitalized?",
        explanation: "Names of people are capitalized.",
        correctAnswer: "Capitalize proper nouns",
        choices: ["Capitalize common nouns", "Capitalize proper nouns", "Capitalize holidays", "Capitalize seasons"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which sentence is correctly capitalized?",
        explanation: "June is capitalized.",
        correctAnswer: "Classes start on June.",
        choices: ["Classes start on june.", "Classes start on June.", "Classes Start on June.", "classes start on June."],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Why is “June” capitalized?",
        explanation: "Months of the year are capitalized.",
        correctAnswer: "It is a month",
        choices: ["It is a holiday", "It is a place", "It is a month", "It is a title"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence uses correct capitalization?",
        explanation: "Department of Tourism is a proper noun.",
        correctAnswer: "My aunt works at the Department of Tourism.",
        choices: [
            "My aunt works at the Department of Tourism.",
            "My aunt works at the department of Tourism.",
            "My aunt works at the department of tourism.",
            "My aunt works at the Department of tourism."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which rule applies to “Department of Tourism”?",
        explanation: "Names of organizations are proper nouns.",
        correctAnswer: "Capitalize proper nouns",
        choices: ["Capitalize titles of books", "Capitalize proper nouns", "Capitalize seasons", "Capitalize common nouns"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence uses correct capitalization?",
        explanation: "Independence Day is a holiday.",
        correctAnswer: "We celebrate Independence Day in June.",
        choices: [
            "We celebrate Independence day in June.",
            "We celebrate independence Day in June.",
            "We celebrate Independence Day in June.",
            "We celebrate independence day in june."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Why is “Independence Day” capitalized?",
        explanation: "Holidays are capitalized.",
        correctAnswer: "It is a holiday",
        choices: ["It is a season", "It is a holiday", "It is a month", "It is a sentence"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which sentence is correctly capitalized?",
        explanation: "Taal Volcano is a geographical name.",
        correctAnswer: "The pupils visited Taal Volcano.",
        choices: [
            "The pupils visited taal volcano.",
            "The pupils visited Taal volcano.",
            "The pupils visited taal Volcano.",
            "The pupils visited Taal Volcano."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which rule explains capitalization in “Taal Volcano”?",
        explanation: "Names of places are capitalized.",
        correctAnswer: "Capitalize geographical names",
        choices: ["Capitalize titles of works", "Capitalize geographical names", "Capitalize school subjects", "Capitalize common nouns"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which sentence uses correct capitalization?",
        explanation: "Languages are capitalized.",
        correctAnswer: "She speaks English and Filipino.",
        choices: [
            "She speaks english and Filipino.",
            "She speaks English and filipino.",
            "She speaks English and Filipino.",
            "She speaks english and filipino."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Why are “English” and “Filipino” are capitalized?",
        explanation: "English and Filipino are languages.",
        correctAnswer: "They are languages",
        choices: ["They are school subjects", "They are difficult words", "They are languages", "They are book titles"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence uses correct capitalization?",
        explanation: "Ibong Adarna is a title of a literary work.",
        correctAnswer: "I enjoy reading Ibong Adarna.",
        choices: [
            "i enjoy reading Ibong Adarna.",
            "I enjoy reading ibong adarna.",
            "I enjoy reading Ibong adarna.",
            "I enjoy reading Ibong Adarna."
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which rule explains why “Ibong Adarna” is capitalized?",
        explanation: "Titles of books are capitalized.",
        correctAnswer: "Capitalize titles of works",
        choices: ["Capitalize titles of works", "Capitalize seasons", "Capitalize acronyms", "Capitalize pronouns"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which rule applies to the word “I” in a sentence?",
        explanation: "The pronoun I is always capitalized.",
        correctAnswer: "Always capitalize the pronoun “I”",
        choices: ["Capitalize proper nouns", "Capitalize titles", "Capitalize acronyms", "Always capitalize the pronoun “I”"],
        choiceType: "alpha"
    }
];

const week3SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the correct answer. Some items ask for the correct punctuation mark, while others ask about the use or rule of punctuation.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Ana asked, Are you ready to go",
        explanation: "Quotation marks show spoken words.",
        correctAnswer: "Quotation marks ( “ ” )",
        choices: ["Comma ( , )", "Full stop ( . )", "Quotation marks ( “ ” )", "Apostrophe ( ’ )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which punctuation mark is used at the end of a question?",
        explanation: "A question mark ends a question.",
        correctAnswer: "Question mark ( ? )",
        choices: ["Period ( . )", "Exclamation mark ( ! )", "Question mark ( ? )", "Comma ( , )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Please bring the following ___ paper, crayons, and scissors.",
        explanation: "A colon introduces a list.",
        correctAnswer: "Colon ( : )",
        choices: ["Comma ( , )", "Colon ( : )", "Semicolon ( ; )", "Apostrophe ( ’ )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which punctuation mark is used to separate items in a list?",
        explanation: "Commas separate items in a list.",
        correctAnswer: "Comma ( , )",
        choices: ["Period ( . )", "Apostrophe ( ’ )", "Comma ( , )", "Question mark ( ? )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The teacher said Stop talking",
        explanation: "They show exact words spoken.",
        correctAnswer: "Quotation marks ( “ ” )",
        choices: ["Quotation marks ( “ ” )", "Colon ( : )", "Comma ( , )", "Semicolon ( ; )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which punctuation mark shows strong emotion or excitement?",
        explanation: "It shows excitement or strong emotion.",
        correctAnswer: "Exclamation mark ( ! )",
        choices: ["Period ( . )", "Question mark ( ? )", "Comma ( , )", "Exclamation mark ( ! )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. This is Mark ___s bag.",
        explanation: "An apostrophe shows ownership.",
        correctAnswer: "Apostrophe ( ’ )",
        choices: ["Comma ( , )", "Apostrophe ( ’ )", "Colon ( : )", "Full stop ( . )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which punctuation mark shows ownership or possession?",
        explanation: "It shows possession.",
        correctAnswer: "Apostrophe ( ’ )",
        choices: ["Quotation marks ( “ ” )", "Apostrophe ( ’ )", "Semicolon ( ; )", "Period ( . )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The rain stopped ___ we continued the game.",
        explanation: "A semicolon joins related sentences.",
        correctAnswer: "Semicolon ( ; )",
        choices: ["Comma ( , )", "Colon ( : )", "Semicolon ( ; )", "Question mark ( ? )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which punctuation mark joins closely related independent clauses?",
        explanation: "It connects closely related independent clauses.",
        correctAnswer: "Semicolon ( ; )",
        choices: ["Period ( . )", "Comma ( , )", "Semicolon ( ; )", "Apostrophe ( ’ )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. I was about to answer ___ then the bell rang.",
        explanation: "An em dash shows interruption.",
        correctAnswer: "Em dash ( — )",
        choices: ["Comma ( , )", "Colon ( : )", "Em dash ( — )", "Full stop ( . )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which punctuation mark is used to interrupt a sentence or add emphasis?",
        explanation: "It adds emphasis or interruption.",
        correctAnswer: "Em dash ( — )",
        choices: ["Parenthesis ( ( ) )", "Comma ( , )", "Em dash ( — )", "Colon ( : )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. The class went to the zoo ___ it was fun.",
        explanation: "A period ends a sentence.",
        correctAnswer: "Full stop / Period ( . )",
        choices: ["Question mark ( ? )", "Full stop / Period ( . )", "Comma ( , )", "Apostrophe ( ’ )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which punctuation mark is used to end a declarative sentence?",
        explanation: "A declarative sentence ends with a period.",
        correctAnswer: "Period ( . )",
        choices: ["Exclamation mark ( ! )", "Question mark ( ? )", "Period ( . )", "Comma ( , )"],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Watch out ___ There is a wet floor.",
        explanation: "It shows warning or strong feeling.",
        correctAnswer: "Exclamation mark ( ! )",
        choices: ["Exclamation mark ( ! )", "Comma ( , )", "Semicolon ( ; )", "Apostrophe ( ’ )"],
        choiceType: "alpha"
    }
];

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
                {
                    label: "Spelling Rules Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week1SetC
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
                {
                    label: "Capitalization Rules Set C",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Select an answer within 30 seconds",
                        questions: week2SetC
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
                {
                    label: "Punctuation Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select an answer within 15 seconds",
                        questions: week3SetC
                    }
                },               
            ]
        }
    ]
}
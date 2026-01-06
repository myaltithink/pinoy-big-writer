import type { PracticeQuiz, QuizQuestion, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const week1SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is a pronoun?",
        explanation: "A pronoun is defined as a word that replaces a noun to make sentences less repetitive.",
        correctAnswer: "A word that replaces a noun.",
        choices: [
            "A type of noun.",
            "A word that replaces a noun.",
            "A type of verb.",
            "A word that describes an action."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Fill in the blank: “Maria is my sister. ___ is very kind.”",
        explanation: "She is the correct feminine singular subject pronoun used to replace the noun Maria.",
        correctAnswer: "She",
        choices: [
            "He",
            "She",
            "It",
            "They"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Why are pronouns important in writing?",
        explanation: "Pronouns are essential because they replace nouns to avoid unnecessary and awkward repetition in sentences.",
        correctAnswer: "They replace nouns to avoid repetition.",
        choices: [
            "They replace nouns to avoid repetition.",
            "They make sentences longer.",
            "They are always optional.",
            "They change the meaning of sentences."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which of the following is a subject pronoun?",
        explanation: "I is a subject pronoun used as the doer of the action, while him, her, and them are object pronouns.",
        correctAnswer: "I",
        choices: [
            "Him",
            "I",
            "Her",
            "Them"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Identify the pronoun in this sentence: “Tom said he will come tomorrow.”",
        explanation: "He is the pronoun in this sentence as it replaces the noun Tom.",
        correctAnswer: "He",
        choices: [
            "Tom",
            "He",
            "Will",
            "Tomorrow"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Fill in the blank: “The dog is playful. ___ loves to run in the yard.”",
        explanation: "It is the standard pronoun used to refer to animals or objects.",
        correctAnswer: "It",
        choices: [
            "He",
            "It",
            "They",
            "She"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence has a pronoun error?",
        explanation: "Me and her are going to the mall is incorrect because 'me' and 'her' are object pronouns being used in the subject position.",
        correctAnswer: "Me and her are going to the mall.",
        choices: [
            "I like pizza.",
            "She is my friend.",
            "Me and her are going to the mall.",
            "They are waiting outside."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which pronoun refers to more than one person?",
        explanation: "They is a plural pronoun used to refer to a group of people.",
        correctAnswer: "They",
        choices: [
            "I",
            "She",
            "They",
            "He"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the object pronoun: “Can you help us with the homework?”",
        explanation: "Us is the object pronoun because it is receiving the action of the verb 'help'.",
        correctAnswer: "Us",
        choices: [
            "You",
            "Us",
            "Call",
            "Homework"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Choose the correct sentence:",
        explanation: "She and I went to school is the correct sentence because it uses subject pronouns in the subject position.",
        correctAnswer: "She and I went to school.",
        choices: [
            "Me and him went to school.",
            "She and I went to school.",
            "Him and me are friends.",
            "Her and I is happy."
        ],
        choiceType: 'alpha'
    }
];

const week1SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which pronoun is an object pronoun?",
        explanation: "Me is an object pronoun; I, We, and He are subject pronouns.",
        correctAnswer: "Me",
        choices: [
            "I",
            "Me",
            "We",
            "He"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Fill in the blank: “The children are playing. ___ are very happy.”",
        explanation: "They refers to the plural noun 'children' as the subject of the second sentence.",
        correctAnswer: "They",
        choices: [
            "He",
            "She",
            "They",
            "We"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the sentence with the correct pronoun usage:",
        explanation: "He and I are going to the park uses the correct subject pronouns.",
        correctAnswer: "He and I are going to the park.",
        choices: [
            "Him and I are going to the park.",
            "He and me are going to the park.",
            "He and I are going to the park.",
            "Him and me are going to the park."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Identify the pronoun in this sentence: “Please tell them to come in.”",
        explanation: "Them is an object pronoun referring to the people being spoken about.",
        correctAnswer: "Them",
        choices: [
            "Please",
            "Tell",
            "Them",
            "Come"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Fill in the blank: “John and Mary are students. ___ study together.”",
        explanation: "They is the plural subject pronoun replacing John and Mary.",
        correctAnswer: "They",
        choices: [
            "We",
            "They",
            "He",
            "She"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which pronoun is used to refer to a person speaking?",
        explanation: "I is the first-person singular subject pronoun.",
        correctAnswer: "I",
        choices: [
            "You",
            "I",
            "He",
            "She"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Identify the object pronoun in this sentence: “The gift is for her.”",
        explanation: "Her follows the preposition 'for' and acts as the object of the sentence.",
        correctAnswer: "her",
        choices: [
            "Gift",
            "Is",
            "For",
            "her"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Choose the correct pronoun: “___ am very tired today.”",
        explanation: "I is the correct subject pronoun to go with the verb 'am'.",
        correctAnswer: "I",
        choices: [
            "Me",
            "I",
            "My",
            "He"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Fill in the blank: “This is my friend, Alex. ___ is a doctor.”",
        explanation: "He is the singular masculine subject pronoun replacing Alex.",
        correctAnswer: "He",
        choices: [
            "She",
            "He",
            "It",
            "They"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is using the correct pronoun important for clarity?",
        explanation: "Correct pronouns ensure the reader knows exactly which noun is being replaced, preventing confusion.",
        correctAnswer: "To avoid confusion about who or what is being discussed.",
        choices: [
            "To make sentences more complex.",
            "To avoid confusion about who or what is being discussed.",
            "To use fewer words.",
            "To make writing more difficult."
        ],
        choiceType: 'alpha'
    }
];

const week1SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Fill in the blank: “I forgot my bag. Where is ___?”",
        explanation: "It refers back to the singular noun 'bag'.",
        correctAnswer: "it",
        choices: [
            "he",
            "it",
            "she",
            "they"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the sentence that uses pronouns correctly:",
        explanation: "She and I went to the park follows standard subject pronoun rules.",
        correctAnswer: "She and I went to the park.",
        choices: [
            "Him and me like to play basketball.",
            "She and I went to the park.",
            "Me and she is happy.",
            "I and him went to school."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Fill in the blank: “The teacher asked Mary to help. ___ agreed immediately.”",
        explanation: "She is the subject pronoun that refers back to Mary.",
        correctAnswer: "She",
        choices: [
            "He",
            "She",
            "Them",
            "Him"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Choose the correct pronoun: “Peter and I are friends. ___ play football every weekend.”",
        explanation: "We is the first-person plural subject pronoun that includes the speaker and Peter.",
        correctAnswer: "We",
        choices: [
            "He",
            "They",
            "We",
            "Us"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Identify the object pronoun: “The teacher asked us to clean the classroom.”",
        explanation: "Us is an object pronoun representing the group receiving the request.",
        correctAnswer: "Us",
        choices: [
            "Teacher",
            "Us",
            "Classroom",
            "Asked"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Fill in the blank: “This is John. ___ is my brother.”",
        explanation: "He refers back to the male noun 'John'.",
        correctAnswer: "He",
        choices: [
            "He",
            "Him",
            "They",
            "Her"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct pronoun: “My mom and ___ are baking cookies.”",
        explanation: "I is the correct subject pronoun to use as part of a compound subject.",
        correctAnswer: "I",
        choices: [
            "me",
            "I",
            "him",
            "us"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Identify the pronoun in the sentence: “Can she come to the party?”",
        explanation: "She is the pronoun in this sentence.",
        correctAnswer: "She",
        choices: [
            "Can",
            "She",
            "Party",
            "Come"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Fill in the blank: “Sarah told Jane that ___ will come later.”",
        explanation: "She is used to refer back to Sarah or Jane without repeating the name.",
        correctAnswer: "she",
        choices: [
            "Sarah",
            "Jane",
            "she",
            "will"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is it important to use pronouns correctly?",
        explanation: "Correct pronoun usage is essential to express ideas clearly and avoid unnecessary repetition.",
        correctAnswer: "To express ideas clearly and avoid repetition.",
        choices: [
            "To make sentences longer.",
            "To confuse the reader.",
            "To express ideas clearly and avoid repetition.",
            "To use more nouns."
        ],
        choiceType: 'alpha'
    }
];

const week1SetD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is an article?",
        explanation: "An article is a word used before a noun to indicate whether the noun is specific or general.",
        correctAnswer: "A word that comes before a noun to indicate specificity.",
        choices: [
            "A word that describes a noun.",
            "A word that comes before a noun to indicate specificity.",
            "A word that replaces a noun.",
            "A type of verb."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the correct article: “I saw ___ elephant in the zoo.”",
        explanation: "The word 'elephant' starts with a vowel sound, so 'an' is the correct article to use.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Fill in the blank: “___ book on the table is mine.”",
        explanation: "Since it refers to a specific book in a specific location, 'the' is required.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. When do we use “a”?",
        explanation: "The article 'a' is used before words that begin with consonant sounds.",
        correctAnswer: "Before consonant sounds.",
        choices: [
            "Before vowel sounds.",
            "Before consonant sounds.",
            "To indicate something specific.",
            "Before unique things."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the correct article: “I need ___ hour to finish my homework.”",
        explanation: "Even though 'hour' starts with 'h', it has a vowel sound (silent h), so 'an' is used.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence uses articles correctly?",
        explanation: "Apple starts with a vowel sound, making 'an apple' the grammatically correct choice.",
        correctAnswer: "I bought an apple.",
        choices: [
            "I bought a apple.",
            "I bought an apple.",
            "I bought the apple.",
            "I bought a the apple."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Fill in the blank: “She is ___ doctor.”",
        explanation: "When referring to a profession in a general sense, 'a' is used before a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. When do we use “the”?",
        explanation: "The article 'the' is the definite article used for specific nouns or things that are unique.",
        correctAnswer: "To talk about something specific or unique.",
        choices: [
            "To talk about something general.",
            "To talk about something specific or unique.",
            "Before words starting with a consonant sound.",
            "Before words starting with a vowel sound."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Choose the correct article: “___ sun rises in the east.”",
        explanation: "The sun is a unique celestial body, so the definite article 'the' is used.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Fill in the blank: “I want to eat ___ orange.”",
        explanation: "'Orange' begins with a vowel sound, necessitating the use of 'an'.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    }
];

const week1SetE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which article is used for non-specific singular nouns starting with a consonant sound?",
        explanation: "The article 'a' is used for general items that begin with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Fill in the blank: “He is ___ honest man.”",
        explanation: "Like 'hour', 'honest' has a silent 'h' and begins with a vowel sound, so we use 'an'.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the correct sentence:",
        explanation: "'The Philippines' is a proper noun group that typically takes the definite article.",
        correctAnswer: "I live in the Philippines.",
        choices: [
            "I live in a Philippines.",
            "I live in an Philippines.",
            "I live in the Philippines.",
            "I live in Philippines."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. When do we use “an”?",
        explanation: "The article 'an' is used before words that start with vowel sounds (a, e, i, o, u).",
        correctAnswer: "Before vowel sounds.",
        choices: [
            "Before vowel sounds.",
            "Before consonant sounds.",
            "To indicate something specific.",
            "Before unique things."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Fill in the blank: “___ moon looks beautiful tonight.”",
        explanation: "The moon is a unique object, so the definite article 'the' is appropriate.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which article is used before plural nouns when talking about something specific?",
        explanation: "While 'a' and 'an' are only for singular nouns, 'the' can be used for specific plural nouns.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct article: “She has ___ umbrella.”",
        explanation: "Umbrella begins with a vowel sound, so it takes 'an'.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Fill in the blank: “I want to buy ___ new car.”",
        explanation: "The speaker is talking about a general, non-specific car starting with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the article in the sentence: “The teacher is helpful.”",
        explanation: "'The' is the definite article in this sentence.",
        correctAnswer: "The",
        choices: [
            "Teacher",
            "Is",
            "Helpful",
            "The"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why are articles used in English?",
        explanation: "Articles provide necessary context regarding whether a noun is being discussed in a specific or general way.",
        correctAnswer: "To clarify if a noun is specific or general.",
        choices: [
            "To make sentences longer.",
            "To clarify if a noun is specific or general.",
            "To replace verbs.",
            "To describe adjectives."
        ],
        choiceType: 'alpha'
    }
];

const week1SetF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which article is used for something unique like a river name?",
        explanation: "Specific geographical features like the Amazon River require the definite article 'the'.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Fill in the blank: “I want to read ___ interesting book.”",
        explanation: "'Interesting' starts with a vowel sound, so 'an' is used.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which article is used for something unique?",
        explanation: "The definite article 'the' is used for unique objects or previously mentioned items.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Fill in the blank: “I saw ___ eagle flying above.”",
        explanation: "'Eagle' starts with a vowel sound, so 'an' is the correct choice.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the correct sentence:",
        explanation: "'An' must be used before 'elephant' because it starts with a vowel sound.",
        correctAnswer: "I saw an elephant.",
        choices: [
            "I saw a elephant.",
            "I saw an elephant.",
            "I saw the elephant.",
            "I saw an the elephant."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Fill in the blank: “___ Pacific Ocean is vast.”",
        explanation: "The names of oceans always take the definite article 'the'.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence is correct?",
        explanation: "'Idea' starts with a vowel sound, so 'an idea' is correct.",
        correctAnswer: "I have an idea.",
        choices: [
            "I have a idea.",
            "I have an idea.",
            "I have the idea.",
            "I have a the idea."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Fill in the blank: “She is ___ teacher in my class.”",
        explanation: "When referring to a singular profession starting with a consonant sound, use 'a'.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
            "no article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Choose the correct article: “___ apple a day keeps the doctor away.”",
        explanation: "The classic proverb uses 'an' because apple starts with a vowel sound.",
        correctAnswer: "An",
        choices: [
            "A",
            "An",
            "The",
            "No article"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is it important to use articles correctly?",
        explanation: "Correct article usage ensures grammatical accuracy and clear communication.",
        correctAnswer: "To make sentences grammatically correct and clear.",
        choices: [
            "To confuse the reader.",
            "To make sentences grammatically correct and clear.",
            "To avoid using nouns.",
            "To make sentences longer."
        ],
        choiceType: 'alpha'
    }
];

const week2SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is subject-verb agreement?",
        explanation: "Subject-verb agreement is the grammatical rule that requires the subject and its verb to match in number (singular or plural).",
        correctAnswer: "Matching subjects and verbs in number.",
        choices: [
            "Matching adjectives and nouns.",
            "Matching subjects and verbs in number.",
            "Matching verbs and objects.",
            "Matching nouns and pronouns."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence is correct?",
        explanation: "In the third person singular, the verb usually takes an -s ending (runs).",
        correctAnswer: "She runs fast.",
        choices: [
            "She run fast.",
            "She runs fast.",
            "She running fast.",
            "She runnings fast."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which verb agrees with the subject? “The students ___ early.”",
        explanation: "Since 'students' is plural, the plural verb 'are' is required for agreement.",
        correctAnswer: "are",
        choices: [
            "is",
            "was",
            "are",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Singular subjects usually take verbs with ___.",
        explanation: "In the present tense, singular subjects (except 'I' and 'you') typically require a verb ending in -s.",
        correctAnswer: "-s",
        choices: [
            "-ed",
            "-ing",
            "-s",
            "no ending"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence shows correct agreement?",
        explanation: "Plural subjects like 'They' take the base form of the verb (walk) without the -s ending.",
        correctAnswer: "They walk home.",
        choices: [
            "They walks home.",
            "They walk home.",
            "They walking home.",
            "They walked home."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The subject of a sentence tells ___.",
        explanation: "The subject identifies the person, place, or thing that the sentence is focusing on or who is performing the action.",
        correctAnswer: "who or what the sentence is about.",
        choices: [
            "the action.",
            "who or what the sentence is about.",
            "the time.",
            "the place."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct verb: “The teacher ___ the lesson.”",
        explanation: "Teacher is a singular subject, so the verb must be the singular form 'teaches'.",
        correctAnswer: "teaches",
        choices: [
            "teach",
            "teaches",
            "teaching",
            "taught"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which pronoun is singular?",
        explanation: "She is a singular pronoun. They and We are plural, and You can be either but usually follows plural verb rules.",
        correctAnswer: "She",
        choices: [
            "They",
            "We",
            "She",
            "You"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “Each student ___ a seat.”",
        explanation: "Words like 'Each' and 'Every' are singular and require the singular verb 'has'.",
        correctAnswer: "has",
        choices: [
            "have",
            "has",
            "having",
            "had"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which sentence is incorrect?",
        explanation: "'She enjoy music' is incorrect because the singular subject 'She' needs the singular verb 'enjoys'.",
        correctAnswer: "She enjoy music.",
        choices: [
            "He enjoys music.",
            "They enjoy music.",
            "She enjoy music.",
            "We enjoy music."
        ],
        choiceType: 'alpha'
    }
];

const week2SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “The cats ___ on the mat.”",
        explanation: "The plural subject 'cats' requires the plural verb 'sleep'.",
        correctAnswer: "sleep",
        choices: [
            "sleep",
            "sleeps",
            "sleeping",
            "slept"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence is correct?",
        explanation: "The plural subject 'My friends' requires the plural verb 'play'.",
        correctAnswer: "My friends play soccer.",
        choices: [
            "My friends plays soccer.",
            "My friends play soccer.",
            "My friends playing soccer.",
            "My friends playings soccer."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the correct verb: “The bird ___ in the sky.”",
        explanation: "Bird is singular, so the verb must be the singular form 'flies'.",
        correctAnswer: "flies",
        choices: [
            "fly",
            "flies",
            "flying",
            "flew"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. “Neither the dog nor the cats ___ hungry.”",
        explanation: "When using 'neither/nor', the verb agrees with the subject closest to it. 'Cats' is plural, so 'are' is used.",
        correctAnswer: "are",
        choices: [
            "is",
            "are",
            "was",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Identify the subject in: “The red car belongs to my uncle.”",
        explanation: "The sentence is about 'The red car', making it the subject.",
        correctAnswer: "The red car",
        choices: [
            "The red car",
            "Belongs",
            "My uncle",
            "Red"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. “Everyone ___ to be happy.”",
        explanation: "Indefinite pronouns like 'Everyone', 'Someone', and 'Nobody' are always singular.",
        correctAnswer: "wants",
        choices: [
            "want",
            "wants",
            "wanting",
            "wanted"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which verb form is plural?",
        explanation: "Go is the base/plural form; goes is the singular form.",
        correctAnswer: "Go",
        choices: [
            "Goes",
            "Go",
            "Going",
            "Went"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. “The team ___ hard for the game.”",
        explanation: "Collective nouns like 'team' are usually treated as singular units.",
        correctAnswer: "practices",
        choices: [
            "practice",
            "practices",
            "practicing",
            "practiced"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which sentence shows incorrect agreement?",
        explanation: "The plural subject 'We' should be paired with the plural verb 'study', not 'studies'.",
        correctAnswer: "We studies every night.",
        choices: [
            "I study every night.",
            "He studies every night.",
            "We studies every night.",
            "They study every night."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. “My mother and father ___ at the office.”",
        explanation: "Compound subjects joined by 'and' are plural and take the plural verb 'work'.",
        correctAnswer: "work",
        choices: [
            "work",
            "works",
            "working",
            "worked"
        ],
        choiceType: 'alpha'
    }
];

const week2SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Choose the correct verb: “The bouquet of flowers ___ lovely.”",
        explanation: "The subject is the singular noun 'bouquet', not 'flowers', so the verb must be 'is'.",
        correctAnswer: "is",
        choices: [
            "are",
            "is",
            "were",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Words between subject and verb should be ___.",
        explanation: "Prepositional phrases or extra words between the subject and verb should be ignored when determining agreement.",
        correctAnswer: "ignored",
        choices: [
            "counted",
            "ignored",
            "changed",
            "emphasized"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “The news ___ shocking.”",
        explanation: "While 'news' ends in 's', it is a singular noun and requires the singular verb 'is'.",
        correctAnswer: "is",
        choices: [
            "are",
            "were",
            "is",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Titles of books or subjects are treated as ___.",
        explanation: "Even if a title or subject name is plural in form, it represents a single entity and is treated as singular.",
        correctAnswer: "singular",
        choices: [
            "singular",
            "plural",
            "either",
            "none"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. “Mathematics ___ my favorite subject.”",
        explanation: "Academic subjects like Mathematics or Physics are singular nouns.",
        correctAnswer: "is",
        choices: [
            "are",
            "is",
            "were",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence is correct?",
        explanation: "The compound subject 'My brother and sister' is plural, so 'are' is the correct verb.",
        correctAnswer: "My brother and sister are here.",
        choices: [
            "My brother and sister is here.",
            "My brother and sister are here.",
            "My brother and sister was here.",
            "My brother and sister be here."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. “Neither of the answers ___ correct.”",
        explanation: "The subject is 'Neither', which is an indefinite pronoun that is always singular.",
        correctAnswer: "is",
        choices: [
            "are",
            "is",
            "were",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Plural subjects usually take the ___ form of the verb.",
        explanation: "Plural subjects in the present tense use the base form of the verb without adding an -s.",
        correctAnswer: "base",
        choices: [
            "-s",
            "-ing",
            "-ed",
            "base"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “The pair of shoes ___ expensive.”",
        explanation: "The subject is 'pair', which is singular, regardless of the plural noun 'shoes'.",
        correctAnswer: "is",
        choices: [
            "are",
            "is",
            "were",
            "be"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is subject-verb agreement important?",
        explanation: "Agreement is vital for ensuring that sentences are logically structured and grammatically clear for the reader.",
        correctAnswer: "To make sentences clear and grammatically correct.",
        choices: [
            "To make sentences clear and grammatically correct.",
            "To decorate sentences.",
            "To shorten sentences.",
            "To change meaning."
        ],
        choiceType: 'alpha'
    }
];

const week2SetD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What does a verb tense show?",
        explanation: "Verb tense is the grammatical category that expresses the time at which an action takes place.",
        correctAnswer: "The time of the action.",
        choices: [
            "The subject.",
            "The time of the action.",
            "The place of the action.",
            "The description."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence is in the present tense?",
        explanation: "The verb 'writes' is in the simple present tense, indicating a regular or current action.",
        correctAnswer: "She writes a letter.",
        choices: [
            "She wrote a letter.",
            "She will write a letter.",
            "She writes a letter.",
            "She has written a letter."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the correct verb: “She ___ to school every day.”",
        explanation: "For habitual actions occurring 'every day', the simple present tense 'walks' is used for a singular subject.",
        correctAnswer: "walks",
        choices: [
            "walk",
            "walked",
            "walks",
            "will walk"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence is in the past tense?",
        explanation: "The verb 'played' uses the -ed ending to signify that the action happened in the past.",
        correctAnswer: "They played outside.",
        choices: [
            "They play outside.",
            "They are playing outside.",
            "They will play outside.",
            "They played outside."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the correct verb: “Yesterday, I ___ my homework.”",
        explanation: "The signal word 'Yesterday' requires the past tense form 'finished'.",
        correctAnswer: "finished",
        choices: [
            "finish",
            "finished",
            "finishing",
            "will finish"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which tense is used for habits?",
        explanation: "The present tense is used to describe repetitive actions, habits, or general truths.",
        correctAnswer: "Present",
        choices: [
            "Past",
            "Present",
            "Future",
            "Perfect"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. “Tomorrow, we ___ the test.”",
        explanation: "The word 'Tomorrow' indicates a future event, requiring the 'will + verb' structure.",
        correctAnswer: "will take",
        choices: [
            "will take",
            "took",
            "take",
            "taking"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence shows incorrect tense use?",
        explanation: "'I watch a movie last night' is incorrect because 'last night' requires the past tense 'watched'.",
        correctAnswer: "I watch a movie last night.",
        choices: [
            "I watched a movie last night.",
            "I watch a movie last night.",
            "I am watching a movie now.",
            "I will watch a movie later."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Choose the correct verb: “They ___ basketball now.”",
        explanation: "The word 'now' signals an action happening at the moment, requiring the present progressive 'are playing'.",
        correctAnswer: "are playing",
        choices: [
            "play",
            "played",
            "will play",
            "are playing"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which word often signals the past tense?",
        explanation: "Yesterday is a common time marker used to indicate that an action was completed in the past.",
        correctAnswer: "Yesterday",
        choices: [
            "Now",
            "Tomorrow",
            "Yesterday",
            "Later"
        ],
        choiceType: 'alpha'
    }
];

const week2SetE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which verb tense is used for an action that will happen later?",
        explanation: "The future tense is used to describe actions that have not yet occurred.",
        correctAnswer: "Future",
        choices: [
            "Past",
            "Present",
            "Future",
            "Continuous"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. “The sun ___ every morning.”",
        explanation: "Rises is in the present tense because it describes a universal truth or daily habit.",
        correctAnswer: "rises",
        choices: [
            "rose",
            "rises",
            "rising",
            "will rise"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which sentence is in the future tense?",
        explanation: "The use of 'will' followed by the base verb 'visit' indicates the future tense.",
        correctAnswer: "We will visit the museum.",
        choices: [
            "We visited the museum.",
            "We are visiting the museum.",
            "We will visit the museum.",
            "We visit the museum."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Choose the correct verb: “Last night, it ___ heavily.”",
        explanation: "The time marker 'Last night' requires the past tense form 'rained'.",
        correctAnswer: "rained",
        choices: [
            "rains",
            "rained",
            "raining",
            "will rain"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence shows the present progressive tense?",
        explanation: "The present progressive consists of 'am/is/are' + verb-ing, as seen in 'He is reading'.",
        correctAnswer: "He is reading a book.",
        choices: [
            "He reads a book.",
            "He read a book.",
            "He will read a book.",
            "He is reading a book."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. “We ___ to the park last Sunday.”",
        explanation: "The past tense 'went' is used to match the completed time frame of 'last Sunday'.",
        correctAnswer: "went",
        choices: [
            "go",
            "goes",
            "went",
            "will go"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. What tense is used for something happening right now?",
        explanation: "The present tense (specifically present progressive) is used for actions occurring at the moment of speaking.",
        correctAnswer: "Present",
        choices: [
            "Past",
            "Present",
            "Future",
            "Perfect"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Choose the correct verb: “I ___ my teacher tomorrow.”",
        explanation: "The future marker 'tomorrow' requires the future tense 'will see'.",
        correctAnswer: "will see",
        choices: [
            "see",
            "saw",
            "will see",
            "seeing"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the verb in the past tense: “She sang a song.”",
        explanation: "Sang is the irregular past tense form of the verb 'sing'.",
        correctAnswer: "sang",
        choices: [
            "sing",
            "sings",
            "sang",
            "singing"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is it important to use consistent verb tenses?",
        explanation: "Consistency in verb tenses helps keep the timeline of a story or explanation clear for the reader.",
        correctAnswer: "To avoid confusing the reader about the timing of events.",
        choices: [
            "To make sentences longer.",
            "To avoid confusing the reader about the timing of events.",
            "To use different words.",
            "To make writing more difficult."
        ],
        choiceType: 'alpha'
    }
];

const week2SetF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “Next month, we ___ in the competition.”",
        explanation: "The structure 'will be + verb-ing' shows future progressive, appropriate for an action that will be happening in the future.",
        correctAnswer: "will be",
        choices: [
            "was",
            "are",
            "will be",
            "is"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which tense is used for completed actions?",
        explanation: "Completed actions that took place at a specific time in the past use the past tense.",
        correctAnswer: "Past",
        choices: [
            "Past",
            "Present",
            "Future",
            "Perfect"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Fill in the blank: “They ___ their project next week.”",
        explanation: "“Next week” indicates future time, so 'will finish' is the correct verb form.",
        correctAnswer: "will finish",
        choices: [
            "finish",
            "finished",
            "will finish",
            "finishing"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence uses the present tense correctly?",
        explanation: "“They” is a plural subject and matches the base verb 'play' in the present tense.",
        correctAnswer: "They play chess.",
        choices: [
            "They plays chess.",
            "They played chess.",
            "They will play chess.",
            "They play chess."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the correct verb: “When I was young, I ___ cartoons.”",
        explanation: "Recalling past experiences or childhood habits requires past tense verbs like 'watched'.",
        correctAnswer: "watched",
        choices: [
            "watch",
            "watched",
            "watching",
            "will watch"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence shows mixed tenses incorrectly?",
        explanation: "The sentence 'She cleaned the room and rests' uses two different time frames (past and present) for actions that should be parallel.",
        correctAnswer: "She cleaned the room and rests.",
        choices: [
            "She cleaned the room and rested.",
            "She cleans the room every day.",
            "She will clean the room later.",
            "She cleaned the room and rests."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct verb: “We ___ dinner right now.”",
        explanation: "“Right now” shows an action in progress, which requires the present progressive 'are eating'.",
        correctAnswer: "are eating",
        choices: [
            "eat",
            "ate",
            "are eating",
            "will eat"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which word often signals the future tense?",
        explanation: "“Tomorrow” signals an event that has not yet happened, indicating future time.",
        correctAnswer: "Tomorrow",
        choices: [
            "Yesterday",
            "Tomorrow",
            "Now",
            "Earlier"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “They ___ the game last Saturday.”",
        explanation: "“Last Saturday” is a specific past time marker requiring the past tense form 'won'.",
        correctAnswer: "won",
        choices: [
            "won",
            "wins",
            "win",
            "will win"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is correct verb tense important?",
        explanation: "Tenses are essential to show clear time and meaning, allowing the listener or reader to understand when events occur.",
        correctAnswer: "To show clear time and meaning.",
        choices: [
            "To decorate sentences.",
            "To show clear time and meaning.",
            "To shorten sentences.",
            "To confuse readers."
        ],
        choiceType: 'alpha'
    }
];

const week3SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is a preposition?",
        explanation: "A preposition is a word used to show the relationship between a noun or pronoun and other words in a sentence, often indicating direction, time, or place.",
        correctAnswer: "A word that shows relationship.",
        choices: [
            "A word that describes a noun.",
            "A word that replaces a noun.",
            "A word that shows relationship.",
            "A word that shows action."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence uses a preposition correctly?",
        explanation: "The preposition 'on' correctly shows the spatial relationship between the cat and the surface of the table.",
        correctAnswer: "The cat slept on the table.",
        choices: [
            "The cat slept table.",
            "The cat slept on the table.",
            "The cat slept at the table.",
            "The cat slept in table."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the correct preposition: “She is ___ the classroom.”",
        explanation: "The preposition 'in' is used to indicate that someone is inside a specific room or container.",
        correctAnswer: "in",
        choices: [
            "on",
            "at",
            "to",
            "in"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which preposition shows time?",
        explanation: "'Before' is a preposition used to indicate a temporal relationship between events.",
        correctAnswer: "Before",
        choices: [
            "Under",
            "Before",
            "Between",
            "Across"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. “The meeting starts ___ 9 a.m.”",
        explanation: "The preposition 'at' is used specifically for precise clock times.",
        correctAnswer: "at",
        choices: [
            "at",
            "on",
            "in",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence is incorrect?",
        explanation: "The phrase should be 'at night'. 'On night' is grammatically incorrect in English.",
        correctAnswer: "We met on night.",
        choices: [
            "He arrived at noon.",
            "She was born in 2005.",
            "We met on night.",
            "The class starts at 8."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct preposition: “The picture is hanging ___ the wall.”",
        explanation: "We use 'on' for objects attached to or touching the surface of a wall.",
        correctAnswer: "on",
        choices: [
            "in",
            "at",
            "on",
            "to"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which preposition shows movement?",
        explanation: "'Over' can indicate movement from one side of something to another or across a boundary.",
        correctAnswer: "Over",
        choices: [
            "Over",
            "During",
            "Before",
            "Behind"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “She walked ___ the room quietly.”",
        explanation: "'Into' is the correct preposition to describe movement from the outside to the inside of a space.",
        correctAnswer: "into",
        choices: [
            "on",
            "into",
            "at",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which sentence is correct?",
        explanation: "'Between' is used when referring to two distinct people or things (me and you).",
        correctAnswer: "He sat between me and you.",
        choices: [
            "He sat between me and you.",
            "He sat among me and you.",
            "He sat in me and you.",
            "He sat to me and you."
        ],
        choiceType: 'alpha'
    }
];

const week3SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “I will see you ___ Monday.”",
        explanation: "We use the preposition 'on' for specific days of the week.",
        correctAnswer: "on",
        choices: [
            "at",
            "in",
            "on",
            "to"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the correct preposition: “The keys are ___ the drawer.”",
        explanation: "'In' indicates that the keys are located inside the enclosed space of the drawer.",
        correctAnswer: "in",
        choices: [
            "at",
            "on",
            "in",
            "to"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which preposition is used for years?",
        explanation: "The preposition 'in' is used for longer periods of time like months, years, and centuries.",
        correctAnswer: "In",
        choices: [
            "At",
            "On",
            "In",
            "By"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. “The plane flew ___ the mountains.”",
        explanation: "'Over' describes movement at a higher level than the mountains.",
        correctAnswer: "over",
        choices: [
            "under",
            "over",
            "at",
            "in"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence shows a preposition error?",
        explanation: "The correct sentence should be 'I am interested in art.' Prepositions are often linked to specific adjectives.",
        correctAnswer: "I am interested at art.",
        choices: [
            "I am interested in art.",
            "I am interested at art.",
            "I am interested with art.",
            "I am interested on art."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Choose the correct preposition: “He lives ___ 123 Main Street.”",
        explanation: "We use 'at' for specific addresses that include a number.",
        correctAnswer: "at",
        choices: [
            "in",
            "at",
            "on",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which preposition indicates being under something?",
        explanation: "'Below' is used to show a position lower than another object.",
        correctAnswer: "Below",
        choices: [
            "Above",
            "Beside",
            "Below",
            "Next to"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. “We walked ___ the beach.”",
        explanation: "'Along' indicates movement in a line next to the length of the beach.",
        correctAnswer: "along",
        choices: [
            "along",
            "at",
            "in",
            "to"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the preposition in: “He ran across the bridge.”",
        explanation: "'Across' is the preposition showing the relationship of the run to the bridge.",
        correctAnswer: "across",
        choices: [
            "ran",
            "across",
            "the",
            "bridge"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why do we use prepositions like 'at', 'in', and 'on'?",
        explanation: "These prepositions are vital for clarifying the specific time or place related to the subject.",
        correctAnswer: "To specify time and place.",
        choices: [
            "To replace nouns.",
            "To specify time and place.",
            "To make sentences longer.",
            "To describe verbs."
        ],
        choiceType: 'alpha'
    }
];

const week3SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “She stayed ___ home all day.”",
        explanation: "“At home” is a standard fixed expression in English to denote location at one's residence.",
        correctAnswer: "at",
        choices: [
            "in",
            "at",
            "on",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which preposition is part of a fixed expression?",
        explanation: "Certain adjectives are paired with specific prepositions that must be memorized, such as 'Afraid of'.",
        correctAnswer: "Afraid of",
        choices: [
            "Afraid of",
            "Afraid on",
            "Afraid at",
            "Afraid in"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the correct preposition: “He is good ___ math.”",
        explanation: "“Good at” is the correct idiomatic phrase used to describe proficiency in a subject or activity.",
        correctAnswer: "at",
        choices: [
            "in",
            "at",
            "on",
            "with"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence is correct?",
        explanation: "We use 'at' for specific locations like an airport, station, or building when referring to the general location.",
        correctAnswer: "I arrived at the airport early.",
        choices: [
            "I arrived to the airport early.",
            "I arrived in the airport early.",
            "I arrived at the airport early.",
            "I arrived on the airport early."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. “The children are playing ___ the yard.”",
        explanation: "'In' is used for areas that have boundaries or are enclosed, like a yard.",
        correctAnswer: "in",
        choices: [
            "on",
            "at",
            "to",
            "in"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which preposition is used for months?",
        explanation: "'In' is the standard preposition for months (e.g., In January).",
        correctAnswer: "In",
        choices: [
            "At",
            "On",
            "In",
            "By"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the correct preposition: “She sat ___ the window.”",
        explanation: "'By' is used to mean 'next to' or 'beside' the window.",
        correctAnswer: "by",
        choices: [
            "at",
            "in",
            "on",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence shows a missing preposition error?",
        explanation: "The verb 'listen' requires the preposition 'to' (They listened to music).",
        correctAnswer: "They listened music.",
        choices: [
            "She walked to school.",
            "He jumped into the pool.",
            "They listened music.",
            "We waited for her."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “The store is ___ the corner.”",
        explanation: "“At the corner” is the standard phrase for indicating a specific point where streets intersect.",
        correctAnswer: "at",
        choices: [
            "in",
            "at",
            "on",
            "by"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why are prepositions important?",
        explanation: "Prepositions are essential because they clearly define the relationships between different parts of a sentence, such as where or when an action happens.",
        correctAnswer: "They show relationships clearly.",
        choices: [
            "They replace nouns.",
            "They show action.",
            "They describe adjectives.",
            "They show relationships clearly."
        ],
        choiceType: 'alpha'
    }
];

const week3SetD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is a sentence fragment?",
        explanation: "A sentence fragment is an incomplete sentence because it lacks a subject, a verb, or a complete thought.",
        correctAnswer: "An incomplete sentence.",
        choices: [
            "A long sentence.",
            "A complete sentence.",
            "An incomplete sentence.",
            "A question sentence."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence is a fragment?",
        explanation: "Starting a sentence with 'Because' without attaching it to an independent clause creates a dependent clause fragment.",
        correctAnswer: "Because she loves reading books.",
        choices: [
            "She loves reading books.",
            "Because she loves reading books.",
            "She reads every night.",
            "Reading helps her relax."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which element is missing in this fragment? “Running in the park.”",
        explanation: "This phrase contains an action but lacks a subject (the person or thing) performing that action.",
        correctAnswer: "Subject",
        choices: [
            "Object",
            "Adjective",
            "Subject",
            "Punctuation"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Identify the fragment.",
        explanation: "'After the class ended' is a dependent clause that needs more information to be a complete thought.",
        correctAnswer: "After the class ended.",
        choices: [
            "After the class ended.",
            "The students listened carefully.",
            "We finished our project early.",
            "She answered confidently."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence is complete?",
        explanation: "'I missed the bus' contains both a subject and a verb and expresses a full idea.",
        correctAnswer: "I missed the bus.",
        choices: [
            "When the rain stopped.",
            "Because I was late.",
            "I missed the bus.",
            "Although tired."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Why are sentence fragments incorrect in formal writing?",
        explanation: "Fragments are considered errors because they can confuse the reader and disrupt the flow of information.",
        correctAnswer: "They confuse meaning.",
        choices: [
            "They are too long.",
            "They confuse meaning.",
            "They add details.",
            "They show emotion."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which word often signals a fragment?",
        explanation: "Subordinating conjunctions like 'Because' often signal dependent clauses which become fragments if left alone.",
        correctAnswer: "Because",
        choices: [
            "And",
            "Very",
            "Always",
            "Because"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Identify the fragment.",
        explanation: "'If you study hard' is a conditional clause that requires a result to be a complete sentence.",
        correctAnswer: "If you study hard.",
        choices: [
            "The teacher explained the lesson.",
            "Students asked questions.",
            "If you study hard.",
            "Learning is important."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. What type of fragment is this? “When the bell rang.”",
        explanation: "This is a dependent clause fragment because it begins with a subordinating conjunction and lacks an independent thought.",
        correctAnswer: "Dependent clause fragment",
        choices: [
            "Dependent clause fragment",
            "Missing subject",
            "Missing verb",
            "Phrase fragment"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which sentence correctly fixes the fragment? Fragment: Before the meeting.",
        explanation: "By adding a subject, verb, and a comma, the fragment is successfully turned into a complete sentence.",
        correctAnswer: "Before the meeting started, we waited outside.",
        choices: [
            "Before the meeting started late.",
            "Before the meeting.",
            "Before the meeting started, we waited outside.",
            "Meeting was before."
        ],
        choiceType: 'alpha'
    }
];

const week3SetE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which is a fragment?",
        explanation: "A phrase like 'In the garden' lacks a subject and a verb.",
        correctAnswer: "In the garden.",
        choices: [
            "They sat in the garden.",
            "In the garden.",
            "Flowers grow in the garden.",
            "We like the garden."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. How do you fix a fragment?",
        explanation: "To turn a fragment into a sentence, you must provide the missing subject or verb to complete the thought.",
        correctAnswer: "Add a subject or verb.",
        choices: [
            "Add a subject or verb.",
            "Add a comma.",
            "Make it shorter.",
            "Remove the verb."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Identify the fragment.",
        explanation: "'While waiting for the bus' is a participial phrase that does not express a complete thought.",
        correctAnswer: "While waiting for the bus.",
        choices: [
            "While waiting for the bus.",
            "I waited for the bus.",
            "The bus was late.",
            "They took the bus."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A complete sentence must have a ___.",
        explanation: "Every complete sentence requires at least one subject and one verb.",
        correctAnswer: "Subject and Verb",
        choices: [
            "Subject and Verb",
            "Long description",
            "Many adjectives",
            "Complex words"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which is NOT a fragment?",
        explanation: "'Birds fly south' has a subject (birds) and a verb (fly), making it a complete sentence.",
        correctAnswer: "Birds fly south.",
        choices: [
            "Flying south.",
            "Birds fly south.",
            "Because birds fly.",
            "When birds fly south."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Why does “Under the big tree” not work as a sentence?",
        explanation: "This is a prepositional phrase; it lacks both a subject and a verb to be considered complete.",
        correctAnswer: "It lacks a subject and verb.",
        choices: [
            "It is too short.",
            "It lacks a subject and verb.",
            "It is a question.",
            "It has too many words."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Identify the fragment.",
        explanation: "'Despite the rain' is a phrase that sets up a situation but does not complete a thought.",
        correctAnswer: "Despite the rain.",
        choices: [
            "It rained today.",
            "Despite the rain.",
            "They liked the rain.",
            "Rain fell heavily."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which correctly completes the fragment: “Although it was late...”",
        explanation: "Completing a dependent clause requires adding an independent clause to finish the idea.",
        correctAnswer: "Although it was late, he continued working.",
        choices: [
            "Although it was late.",
            "Although it was late, he continued working.",
            "It was late.",
            "Late it was."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Fragments are common in ___ speech.",
        explanation: "In casual or informal conversation, people often use fragments because context makes the meaning clear.",
        correctAnswer: "Casual",
        choices: [
            "Formal",
            "Scientific",
            "Casual",
            "Academic"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. A complete sentence must express a ___.",
        explanation: "The defining characteristic of a sentence is that it must represent a complete thought.",
        correctAnswer: "Complete thought",
        choices: [
            "Complete thought",
            "Random idea",
            "Short phrase",
            "Question only"
        ],
        choiceType: 'alpha'
    }
];

const week3SetF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which sentence is complete?",
        explanation: "'The lesson was clear' contains a subject and a verb, representing a full thought.",
        correctAnswer: "The lesson was clear",
        choices: [
            "Working hard every day",
            "In the morning",
            "The lesson was clear",
            "Because it was easy"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. What is missing in: “Along the river.”",
        explanation: "This prepositional phrase lacks the necessary subject and verb to function as a sentence.",
        correctAnswer: "Subject and verb",
        choices: [
            "Subject and verb",
            "Adjectives",
            "Object",
            "Punctuation"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Identify the fragment.",
        explanation: "'If they arrive early' is a dependent clause that cannot stand alone as a sentence.",
        correctAnswer: "If they arrive early",
        choices: [
            "They arrived early.",
            "She runs every day.",
            "If they arrive early",
            "He is very kind."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence is NOT a fragment?",
        explanation: "By combining the dependent clause with an independent one, you create a complex, complete sentence.",
        correctAnswer: "Although it was late, we continued working",
        choices: [
            "Although it was late",
            "Because she practiced daily",
            "Although it was late, we continued working",
            "After the storm passed"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence is a fragment?",
        explanation: "'In the middle of the road' is a prepositional phrase that doesn't say what is happening or who is there.",
        correctAnswer: "In the middle of the road",
        choices: [
            "She runs every day.",
            "In the middle of the road",
            "He is very kind.",
            "They arrived early."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Sentence fragments often occur when writers:",
        explanation: "Fragments often happen when a writer stops a sentence before the full thought is actually expressed.",
        correctAnswer: "Leave ideas unfinished",
        choices: [
            "Add details.",
            "Forget punctuation.",
            "Leave ideas unfinished",
            "Use long words."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Identify the fragment.",
        explanation: "A dependent clause starting with 'Because' is not a complete sentence on its own.",
        correctAnswer: "Because the tickets were cheap",
        choices: [
            "We watched a movie.",
            "They enjoyed the show.",
            "Because the tickets were cheap",
            "The show was exciting."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence is complete?",
        explanation: "'I learned a lot' is an independent clause with a subject (I) and verb (learned).",
        correctAnswer: "I learned a lot",
        choices: [
            "After the storm passed.",
            "When I was young.",
            "Although tired.",
            "I learned a lot"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which is NOT a sentence fragment?",
        explanation: "'She improved her skills' is a complete sentence with a subject and a verb.",
        correctAnswer: "She improved her skills",
        choices: [
            "Running late for school.",
            "Because she practiced daily.",
            "She improved her skills",
            "After the competition."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is it important to avoid sentence fragments?",
        explanation: "Fragments reduce the clarity of writing and can make ideas feel disconnected or weak.",
        correctAnswer: "They weaken clarity",
        choices: [
            "They make sentences longer.",
            "They improve creativity.",
            "They weaken clarity",
            "They add emphasis."
        ],
        choiceType: 'alpha'
    }
];

const week1Metadata: SetMetadata = {
    passingScore: 0,
    timeLimit: 30
}

export const GRAMMAR_PRACTICE: PracticeQuiz = {
    week1: [
        {
            lessonNumber: 1,
            title: "Pronouns",
            sets: [
                {
                    label: "Grammar Practice W1 Set A",
                    metadata: week1Metadata,
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetA
                    }
                },
                {
                    label: "Grammar Practice W1 Set B",
                    metadata: week1Metadata,
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetB
                    }
                },
                {
                    label: "Grammar Practice W1 Set C",
                    metadata: week1Metadata,
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetC
                    }
                },
            ]
        },
        {
            lessonNumber: 2,
            title: "Articles",
            sets: [
                {
                    label: "Grammar Practice W1 Set D",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetD
                    }
                },
                {
                    label: "Grammar Practice W1 Set E",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetE
                    }
                },
                {
                    label: "Grammar Practice W1 Set F",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetF
                    }
                },
            ]
        },
    ],
    week2: [
        {
            lessonNumber: 3,
            title: "Subject-Verb Agreement",
            sets: [
                {
                    label: "Grammar Practice W2 Set A",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetA
                    }
                },
                {
                    label: "Grammar Practice W2 Set B",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetB
                    }
                },
                {
                    label: "Grammar Practice W2 Set C",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetC
                    }
                },
            ]
        },
        {
            lessonNumber: 4,
            title: "Verb Tense",
            sets: [
                {
                    label: "Grammar Practice W2 Set D",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetD
                    }
                },
                {
                    label: "Grammar Practice W2 Set E",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetE
                    }
                },
                {
                    label: "Grammar Practice W2 Set F",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetF
                    }
                },
            ]
        },
    ],
    week3: [
        {
            lessonNumber: 5,
            title: "Prepositions",
            sets: [
                {
                    label: "Grammar Practice W3 Set A",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetA
                    }
                },
                {
                    label: "Grammar Practice W3 Set B",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetB
                    }
                },
                {
                    label: "Grammar Practice W3 Set C",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetC
                    }
                },
            ]
        },
        {
            lessonNumber: 6,
            title: "Sentence Fragments",
            sets: [
                {
                    label: "Grammar Practice W3 Set D",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetD
                    }
                },
                {
                    label: "Grammar Practice W3 Set E",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetE
                    }
                },
                {
                    label: "Grammar Practice W3 Set F",
                    metadata: week1Metadata,
                    
                    set:  {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetF
                    }
                },
            ]
        },
    ],
}
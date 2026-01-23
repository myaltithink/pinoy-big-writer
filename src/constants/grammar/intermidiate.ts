import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "The prize was shared between my friend and (I, me).",
        explanation: "\"Me\" is the correct choice because it is an objective case pronoun following the preposition between. (My friend and I are correct for a subject, but here it's an object.)",
        correctAnswer: "me",
        choices: [
            "I",
            "me",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The committee finally gave (its, their) approval after two hours of deliberation.",
        explanation: "\"Its\" is correct because committee is a collective noun acting as a single, cohesive unit, requiring the singular possessive pronoun.",
        correctAnswer: "its",
        choices: [
            "its",
            "their",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The Eiffel Tower is (a, an, the) famous landmark in Paris.",
        explanation: "\"A\" is the correct indefinite article because the following word, famous, begins with a consonant sound. “The” would be correct if the landmark were already specified or unique in context, but here it is just one of many.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. She prefers to eat (a, an, no article) toast for breakfast",
        explanation: "\"No article\" is correct because toast is an uncountable noun when referring to the food in general.",
        correctAnswer: "no article",
        choices: [
            "a",
            "an",
            "no article",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Neither the manager nor the employees (is, are) happy with the new policy.",
        explanation: "\"Are\" is correct. In subject-verb agreement with neither...nor, the verb must agree with the closer subject (employees), which is plural.",
        correctAnswer: "are",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The flock of birds (flies, fly) south every winter.",
        explanation: "\"Flies\" is correct. Flock is a collective noun acting as a single unit, requiring the singular verb form (flies).",
        correctAnswer: "flies",
        choices: [
            "flies",
            "fly",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. I will meet you (at, on) 5:30 PM.",
        explanation: "\"At\" is the correct preposition to use when specifying an exact time.",
        correctAnswer: "at",
        choices: [
            "at",
            "on",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The book is lying (in, on) the table.",
        explanation: "\"On\" is the correct preposition to indicate that the book is physically resting upon the surface of the table.",
        correctAnswer: "on",
        choices: [
            "in",
            "on",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which of the following is a complete sentence",
        explanation: "\"B. She ran quickly down the street\" is a complete sentence because it contains a subject (She) and a finite verb (ran), expressing a complete thought. A is a fragment because it lacks a subject.",
        correctAnswer: "She ran quickly down the street.",
        choices: [
            "Running quickly down the street.",
            "She ran quickly down the street."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. By the time we arrived, the movie (started, had started).",
        explanation: "\"Had started\" (Past Perfect tense) is correct because it indicates an action (the movie starting) that was completed before another past action (we arrived).",
        correctAnswer: "had started",
        choices: [
            "started",
            "had started",
        ],
        choiceType: 'none'
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which of the following is a complete sentence",
        explanation: "\"B. He waited impatiently by the door, tapping his foot\" is a complete sentence because it contains a subject (He) and a finite verb (waited), expressing a complete thought. A is a fragment because it lacks a subject and its main verb is a participle (Waiting).",
        correctAnswer: "He waited impatiently by the door, tapping his foot.",
        choices: [
            "Waiting impatiently by the door, tapping his foot.",
            "He waited impatiently by the door, tapping his foot.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. She (lived, has lived) in this city since 2010.",
        explanation: "\"Has lived\" (Present Perfect tense) is correct because the use of since 2010 indicates an action that began in the past and continues into the present.",
        correctAnswer: "has lived",
        choices: [
            "lived",
            "has lived",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The chef always (makes, is making) sure the soup is perfectly seasoned.",
        explanation: "\"Makes\" (Simple Present tense) is correct because the word always indicates a habitual or repeated action.",
        correctAnswer: "makes",
        choices: [
            "makes",
            "is making",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. I learned a lot about history (on, through) reading that novel.",
        explanation: "\"Through\" is the correct preposition to express the means or way in which the action (learning) was accomplished.",
        correctAnswer: "through",
        choices: [
            "on",
            "through",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. We will discuss the proposal (in, on) Friday morning.",
        explanation: "\"On\" is the correct preposition to use when referring to a specific day or date.",
        correctAnswer: "on",
        choices: [
            "in",
            "on",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Ten dollars (is, are) the price of admission.",
        explanation: "\"Is\" is correct. When a quantity (like Ten dollars) refers to a single unit or amount, the verb must be singular (is).",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A number of people (was, were) waiting for the bus.",
        explanation: "\"Were\" is correct. The phrase A number of is considered plural, requiring the plural verb form (were). (Contrast this with \"The number of people...\", which is singular).",
        correctAnswer: "were",
        choices: [
            "was",
            "were",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. They bought (a, an, the) new house down the street.",
        explanation: "\"A\" is the correct indefinite article because the following word, new, begins with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. This is (a, an, no article) universal truth.",
        explanation: "\"A\" is the correct indefinite article because the word universal begins with the consonant sound /y/ (as in you), not a vowel sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "no article",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The secret recipe was known only to (him and her, he and she).",
        explanation: "\"Him and her\" is correct because the entire phrase is the object of the preposition to, and therefore requires the objective case pronouns (him, her).",
        correctAnswer: "him and her",
        choices: [
            "him and her",
            "he and she",
        ],
        choiceType: 'none'
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which of the following is a complete sentence",
        explanation: "\"B. We planned to attend the important event scheduled for Monday\" is a complete sentence because it contains a subject (We) and a finite verb (planned), expressing a complete thought. A is a fragment, as it is an infinitive phrase lacking a main subject and main verb.",
        correctAnswer: "We planned to attend the important event scheduled for Monday.",
        choices: [
            "To attend the important event scheduled for Monday.",
            "We planned to attend the important event scheduled for Monday.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The management just (come, came) to a decision about the holiday party venue.",
        explanation: "\"Came\" (Simple Past tense) is the correct form of the verb come to use with the adverb just to indicate a recently completed action. (Come is the base form, came is the past tense, and come is the past participle used with helping verbs like has or had).",
        correctAnswer: "came",
        choices: [
            "come",
            "came",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Everyone (celebrates, is celebrating) the team's victory right now.",
        explanation: "\"Is celebrating\" (Present Continuous tense) is correct because the phrase right now indicates an action that is happening at the moment of speaking.",
        correctAnswer: "is celebrating",
        choices: [
            "celebrates",
            "is celebrating",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. I will be (at, in) my best friend's wedding reception on Saturday.",
        explanation: "\"At\" is the correct preposition to indicate presence at a specific location or event (a reception).",
        correctAnswer: "at",
        choices: [
            "at",
            "in",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. They sent a note of (congrats, congratulation) for his promotion.",
        explanation: "\"Congratulation\" is the standard singular noun form used in the phrase \"a note of congratulation.\" (Congrats is an informal abbreviation).",
        correctAnswer: "",
        choices: [
            "congrats",
            "congratulation",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Either Maria or the twins (attends, attend) the monthly volunteer meeting.",
        explanation: "\"Attend\" is correct. In SVA with either...or, the verb must agree with the closer subject (the twins), which is plural.",
        correctAnswer: "attend",
        choices: [
            "attends",
            "attend",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The news about the layoffs (was, were) shocking to everyone.",
        explanation: "\"Was\" is correct. The true subject of the sentence is the singular noun news, and the verb must agree with it, regardless of the plural noun (layoffs) in the prepositional phrase.",
        correctAnswer: "was",
        choices: [
            "was",
            "were",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. She is wearing (a, an, the) blue dress I bought her last week.",
        explanation: "\"The\" is the correct definite article because the phrase I bought her last week makes the blue dress a specific, known, or previously identified item.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. We need to send (a, an, the) email right away.",
        explanation: "\"An\" is the correct indefinite article because the following word, email, begins with a vowel sound.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The invitation was addressed to Jane and (he, him).",
        explanation: "\"Him\" is correct because the entire phrase is the object of the preposition to, and therefore requires the objective case pronoun (him).",
        correctAnswer: "him",
        choices: [
            "he",
            "him",
        ],
        choiceType: 'none'
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. We plan to (see, saw) the historic sites while we are visiting Rome.",
        explanation: "\"See\" is correct. We use the definite article the because historic sites refers to a specific, known, or implied group of attractions in Rome.",
        correctAnswer: "see",
        choices: [
            "see",
            "saw",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. I read an interesting (story, stories) about ancient mythology.",
        explanation: "\"Story\" is correct. The presence of the indefinite article an before the adjective interesting indicates that the following noun must be singular.",
        correctAnswer: "story",
        choices: [
            "story",
            "stories",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The scholarship was awarded to the most diligent students, namely Maria and (he, him).",
        explanation: "\"Him\" is correct because the phrase is the object of the preposition to (or in this case, implicitly governed by awarded to), requiring the objective case pronoun.",
        correctAnswer: "him",
        choices: [
            "he",
            "him",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Everyone is responsible for cleaning up (his or her, their) own mess.",
        explanation: "\"His or her\" is the traditional, correct choice for pronoun agreement with the singular indefinite pronoun Everyone. Their is commonly used informally but is technically plural.",
        correctAnswer: "his or her",
        choices: [
            "his or her",
            "their",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. She (went, has went) to the store just five minutes ago.",
        explanation: "\"Went\" (Simple Past tense) is correct. The time expression just five minutes ago specifies a finished action at a definite point in the past, requiring the Simple Past.",
        correctAnswer: "went",
        choices: [
            "went",
            "has went",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. By the time the bell rang, I (sat, had sat) through three boring lectures.",
        explanation: "\"Had sat\" (Past Perfect tense) is correct because it describes an action (sitting) that was completed before another action in the past (the bell rang).",
        correctAnswer: "had sat",
        choices: [
            "sat",
            "had sat",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. He is known for being generous and often (give, gave) away books to young readers.",
        explanation: "The present tense gives correctly matches the habitual action expressed by “is known for being generous,” indicating something he regularly does. Using gave would incorrectly place the action in the past.",
        correctAnswer: "gives",
        choices: [
            "give",
            "gives",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. I need to (get, get to) the bottom of this complicated issue.",
        explanation: "\"Get to\" is correct. The phrase \"get to the bottom of\" is an idiomatic expression meaning to find the true reason or explanation for something.",
        correctAnswer: "get to",
        choices: [
            "get",
            "get to",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Both the coach and the captain (wants, want) to explore new strategies.",
        explanation: "\"Want\" is correct. The correlative conjunction Both...and always creates a plural subject (coach + captain), which requires the plural verb form (want).",
        correctAnswer: "want",
        choices: [
            "wants",
            "want",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which of the following is a complete sentence",
        explanation: "\"A. The explorers set out to explore the new territory\" is a complete sentence because it contains a clear subject (explorers) and a finite verb (set out), expressing a complete thought. B is a fragment, as it is an infinitive phrase lacking a main subject and main verb.",
        correctAnswer: "The explorers set out to explore the new territory.",
        choices: [
            "The explorers set out to explore the new territory.",
            "To explore the new territory for weeks.",
        ],
        choiceType: 'alpha'
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The excitement of the students (was, were) clearly visible after the announcement.",
        explanation: "\"Was\" is correct. The true subject is the singular noun excitement, which requires the singular verb form (was), regardless of the plural noun (students) in the prepositional phrase.",
        correctAnswer: "was",
        choices: [
            "was",
            "were",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Economics (is, are) my most challenging class this semester.",
        explanation: "\"Is\" is correct. Economics is the name of a singular field of study (like mathematics or physics) and thus requires a singular verb.",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The company gave a bonus to everyone (who, whom) submitted a positive review.",
        explanation: "\"Who\" is correct. It acts as the subject of the dependent clause verb (submitted). (Whom is used only as an object).",
        correctAnswer: "who",
        choices: [
            "who",
            "whom",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. This book belongs to the group of friends, but I don't know (whose, who's) it is.",
        explanation: "\"Whose\" is correct. It is the possessive pronoun indicating ownership. Who's is a contraction meaning who is or who has and does not make sense in this context.",
        correctAnswer: "whose",
        choices: [
            "whose",
            "who's",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. She (loved, loves) hiking now, even though she didn't enjoy it as a child. (Present Simple for current state/feeling)",
        explanation: "\"Loves\" (Simple Present tense) is correct. It describes a current, lasting state or feeling.",
        correctAnswer: "loves",
        choices: [
            "loved",
            "loves",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. When the children heard the thunder, they (feel, felt) immediately terrified. (Simple Past for an instantaneous past feeling)",
        explanation: "\"Felt\" (Simple Past tense) is correct. It describes a feeling that began and ended at a specific point in the past (when they heard the thunder).",
        correctAnswer: "felt",
        choices: [
            "feel",
            "felt",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. I am usually concerned (for, about) the environment and climate change.",
        explanation: "\"About\" is the correct preposition. The adjective concerned is generally followed by about when referring to a general worry or issue.",
        correctAnswer: "about",
        choices: [
            "for",
            "about",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. My parents will travel (to, at) Paris for their anniversary.",
        explanation: "\"To\" is the correct preposition to show motion toward a destination.",
        correctAnswer: "to",
        choices: [
            "to",
            "at",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which of the following is a complete sentence",
        explanation: "\"B. They were smiling brightly despite the bad weather\" is a complete sentence because it has a subject (They) and a finite verb (were smiling). A is a fragment because it lacks a subject and the verb is a participle (Smiling).",
        correctAnswer: "They were smiling brightly despite the bad weather.",
        choices: [
            "Smiling brightly despite the bad weather.",
            "They were smiling brightly despite the bad weather.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. He said that winning was (a, an) honor.",
        explanation: "\"An\" is the correct indefinite article because the word honor begins with a vowel sound (the 'h' is silent), requiring an.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
        ],
        choiceType: 'none'
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A box of pastillas (was, were) delivered to the office this morning.",
        explanation: "\"Was\" is correct. The true subject of the sentence is the singular noun box, which requires the singular verb form (was), regardless of the plural noun (pastillas) in the prepositional phrase.",
        correctAnswer: "was",
        choices: [
            "was",
            "were",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The committee (meets, meet) once a month to discuss local policy.",
        explanation: "\"Meets\" is correct. The committee is a collective noun acting as a single, cohesive unit, requiring the singular verb form.",
        correctAnswer: "meets",
        choices: [
            "meets",
            "meet",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which of the following is a complete sentence",
        explanation: "\"B. She celebrated having successfully passed the civil service examination\" is a complete sentence because it contains a clear subject (She) and a finite verb (celebrated). A is a fragment because the main verb is a participle (Having) and the sentence lacks an independent clause.",
        correctAnswer: "She celebrated having successfully passed the civil service examination.",
        choices: [
            "Having successfully passed the civil service examination.",
            "She celebrated having successfully passed the civil service examination.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The tour guide showed photos of the chocolate hills to my sister and (I, me).",
        explanation: "\"Me\" is correct because the phrase is the object of the preposition to, and therefore requires the objective case pronoun (me).",
        correctAnswer: "me",
        choices: [
            "I",
            "me",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Each student must submit (their, our) activity before dismissal.",
        explanation: "“Each student” is a singular indefinite expression, but in modern English, the singular pronoun their is acceptable and commonly used to refer to an unspecified person. The option our is incorrect because it does not agree with the singular subject “each student.”",
        correctAnswer: "their",
        choices: [
            "their",
            "our",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. We (are going, go) to visit Palawan next summer. (Future arrangement)",
        explanation: "\"Are going\" (Future arrangement) is correct. The Present Continuous tense is often used to express a definite future plan or arrangement.",
        correctAnswer: "are going",
        choices: [
            "are going",
            "go",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The President usually (delivers, delivered) his State of the Nation Address in July. (Habitual/Repeated action)",
        explanation: "\"Delivers\" (Simple Present tense) is correct. The adverb usually indicates a habitual or repeated action, which requires the Simple Present tense.",
        correctAnswer: "delivers",
        choices: [
            "delivers",
            "delivered",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The traffic in Manila can be (a, an) nightmare. ",
        explanation: "\"A\" is the correct indefinite article because the following word, nightmare, begins with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. She is (a, an, the) licensed physician practicing in Cebu.",
        explanation: "\"A\" is the correct indefinite article because the following word, licensed, begins with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The meeting starts (at, on) exactly 9:00 AM.",
        explanation: "\"At\" is the correct preposition to use when specifying an exact time.",
        correctAnswer: "at",
        choices: [
            "at",
            "on",
        ],
        choiceType: 'none'
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The official graduation ceremonies (will be, are being) held on April 15th. (Definite future arrangement)",
        explanation: "\"Will be\" (Simple Future) is appropriate here for expressing a definite, scheduled future event, though are being is also acceptable for a fixed arrangement. We prioritize will be as a standard future marker.",
        correctAnswer: "will be",
        choices: [
            "will be",
            "are being",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The lechon (tastes, is tasting) delicious whenever it is served at a fiesta. (Simple Present for sensory verbs/general truth)",
        explanation: "\"Tastes\" (Simple Present) is correct. Verbs that describe senses or states (like taste, feel, seem) are generally used in the Simple Present tense for general statements or qualities.",
        correctAnswer: "tastes",
        choices: [
            "tastes",
            "is tasting",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The adobo is often called (a, an, the) national dish of the Philippines.",
        explanation: "\"The\" is the correct definite article because national dish is a title, and there is only one specific dish filling that role.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The national tree, Narra, has (a, an, no article) excellent wood for furniture.",
        explanation: "\"No article\" is correct because wood is an uncountable mass noun, and the indefinite article is not needed before it.",
        correctAnswer: "no article",
        choices: [
            "a",
            "an",
            "no article",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The color of the Philippine flag's triangular field (is, are) white.",
        explanation: "\"Is\" is correct. The true subject is the singular noun color, and the verb must agree with it, regardless of the plural noun (field) in the prepositional phrase.",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The pair of slippers (is, are) located near the door.",
        explanation: "\"Is\" is correct. The subject is the singular phrase The pair (referring to one unit/set), which requires the singular verb form.",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The guests enjoyed the halo-halo more than my mother and (I, me).",
        explanation: "\"I\" is correct. This is a comparison, and the phrase is short for \"...more than my mother and I enjoyed it.\" Since I is the subject of the implied clause, the subjective case is required.",
        correctAnswer: "I",
        choices: [
            "I",
            "me",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The person (who, whose) design was chosen for the new national coin is unknown.",
        explanation: "\"Whose\" is correct. It is the possessive pronoun indicating ownership (the design of whom). Who is the subject pronoun.",
        correctAnswer: "whose",
        choices: [
            "who",
            "whose",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The date of graduation day will be (in, on) April.",
        explanation: "\"In\" is the correct preposition to use when referring only to a month (or a year). On is used for a specific date (on April 15th).",
        correctAnswer: "in",
        choices: [
            "in",
            "on",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The national bird, the Philippine Eagle, is known (for, by) its distinct appearance.",
        explanation: "\"For\" is the correct preposition. The correct idiom is known for, which is used to state the reason or feature for which someone or something is famous.",
        correctAnswer: "for",
        choices: [
            "for",
            "by",
        ],
        choiceType: 'none'
    },
]

const setH: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The prize for the highest grade went to the siblings, Carlo and (she, her).",
        explanation: "\"Her\" is correct. The phrase is the object of the preposition to, and therefore requires the objective case pronoun (her).",
        correctAnswer: "her",
        choices: [
            "she",
            "her",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. My favorite singer, (who, whom) I consider my idol, is releasing a new album.",
        explanation: "\"Whom\" is correct. It functions as the object of the verb in the dependent clause (I consider whom).",
        correctAnswer: "whom",
        choices: [
            "who",
            "whom",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. My sister always (gets, is getting) good grades because she studies every night. (Habitual action)",
        explanation: "\"Gets\" (Simple Present tense) is correct. The word always indicates a habitual or repeated action, which requires the Simple Present tense.",
        correctAnswer: "gets",
        choices: [
            "gets",
            "is getting",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. If I (was, were) my idol, I would spend more time giving back to the community. (Subjunctive mood)",
        explanation: "\"Were\" is correct. This is the subjunctive mood, used in If clauses to express a condition that is contrary to fact or hypothetical (since the speaker is not their idol).",
        correctAnswer: "were",
        choices: [
            "was",
            "were",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The many pictures of my friends and family (brightens, brighten) my room.",
        explanation: "\"Brighten\" is correct. The true subject of the sentence is the plural noun pictures, which requires the plural verb form (brighten).",
        correctAnswer: "brighten",
        choices: [
            "brightens",
            "brighten",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The favorite activity for most of the students (is, are) going to the movies.",
        explanation: "\"Is\" is correct. The true subject is the singular noun phrase the favorite activity, which requires the singular verb form (is).",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. He spends (a, an) hour every Sunday at church service.",
        explanation: "\"An\" is the correct indefinite article because the word hour begins with a vowel sound (the 'h' is silent), requiring an.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. My favorite dessert is (a, an, the) ice cream flavor called 'ube' I had last summer.",
        explanation: "\"The\" is the correct definite article because the final part of the sentence (I had last summer) makes the ice cream flavor specific and uniquely identified.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. I prefer to study (with, by) my best friend when preparing for exams.",
        explanation: "\"With\" is the correct preposition to denote company or accompaniment (studying with a friend).",
        correctAnswer: "with",
        choices: [
            "with",
            "by",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. We have been best friends (for, since) the first day of kindergarten.",
        explanation: "\"Since\" is the correct preposition to indicate a period of time measured from a specific starting point in the past (the first day of kindergarten).",
        correctAnswer: "since",
        choices: [
            "for",
            "since",
        ],
        choiceType: 'none'
    },
]

const setI: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which of the following is a complete sentence",
        explanation: "\"B. The class cancellation was announced at the last minute\" is a complete sentence because it contains a clear subject (cancellation) and a finite verb (was announced). A is a fragment because the word Because makes it a dependent clause that cannot stand alone.",
        correctAnswer: "The class cancellation was announced at the last minute.",
        choices: [
            "Because the class cancellation was announced at the last minute. ",
            "The class cancellation was announced at the last minute.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Fifty minutes (is, are) the maximum screen time allowed for gaming each day.",
        explanation: "\"Is\" is correct. When a quantity of time (Fifty minutes) refers to a single unit or measurement, the verb must be singular (is).",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The severity of the students' absences (requires, require) immediate attention from the dean.",
        explanation: "\"Requires\" is correct. The true subject is the singular noun severity, and the verb must agree with it, regardless of the plural noun (absences) in the prepositional phrase.",
        correctAnswer: "requires",
        choices: [
            "requires",
            "require",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Students who violated school rules performed community service (at, in) the school.",
        explanation: "“At” indicates the location where the activity took place. Using “in” would emphasize being inside the building, but “at the school” naturally refers to the school as the general place for the activity.",
        correctAnswer: "at",
        choices: [
            "at",
            "in",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. She left the crush letter hidden securely (among, between) the pages of her notebook.",
        explanation: "\"Among\" is correct. It is used when referring to three or more distinct items or people (the many pages of a notebook). Between is reserved for two items.",
        correctAnswer: "among",
        choices: [
            "among",
            "between",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. I (saved, have saved) fifty pesos every week since I started high school. (Action continuing to the present)",
        explanation: "\"Have saved\" (Present Perfect tense) is correct because the use of since I started high school indicates an action that began in the past and continues or has impact up to the present.",
        correctAnswer: "have saved",
        choices: [
            "saved",
            "have saved",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. If I (knew, had known) about the poor hygiene practices, I would have used hand sanitizer. (Third Conditional)",
        explanation: "\"Had known\" (Past Perfect tense) is correct because this is the Third Conditional structure, used to express a hypothetical situation in the past that did not happen (Structure: If + Past Perfect, ... would have + Past Participle).",
        correctAnswer: "had known",
        choices: [
            "knew",
            "had known",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. They assigned the cleanup duty to the student and (I, me).",
        explanation: "\"Me\" is correct because the phrase is the direct object of the verb assigned (assigned whom?), and therefore requires the objective case pronoun (me).",
        correctAnswer: "me",
        choices: [
            "I",
            "me",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The administration will hold (them, they) accountable for the violations.",
        explanation: "\"Them\" is correct. It is the direct object of the verb hold (hold whom accountable?), and therefore requires the objective case pronoun (them).",
        correctAnswer: "them",
        choices: [
            "them",
            "they",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Staying up late at night is (a, an) common habit among students during exam week.",
        explanation: "“A” is used before words that begin with a consonant sound. “Common” begins with a consonant sound, so a is correct.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
        ],
        choiceType: 'none'
    },
]

const setJ: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and choose the correct answer from the given choices. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Before the brownout (occurred, had occurred), the students had already saved their work.",
        explanation: "\"Occurred\" (Simple Past) is correct. When the Past Perfect (had saved) is already used to show the earlier action, the subsequent action (the brownout) uses the Simple Past tense.",
        correctAnswer: "occurred",
        choices: [
            "occurred",
            "had occurred",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. If the heavy rains continue, the river (will overflow, is overflowing) and cause a flood control issue.",
        explanation: "\"Will overflow\" (Simple Future) is correct. This is the First Conditional structure, used for real and possible future events (Structure: If + Simple Present, ... will + Base Verb).",
        correctAnswer: "will overflow",
        choices: [
            "will overflow",
            "is overflowing",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The city government is focused (on, about) finding solutions to the traffic congestion in Baliwag.",
        explanation: "\"On\" is the correct preposition. The verb focused is followed by on to indicate the object or subject of concentration.",
        correctAnswer: "on",
        choices: [
            "on",
            "about",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Students must be respectful (with, to) their teachers and school staff.",
        explanation: "\"To\" is the correct preposition. The adjective respectful is generally followed by to when indicating the object of one's respect.",
        correctAnswer: "to",
        choices: [
            "with",
            "to",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Five hundred pesos (is, are) barely enough to cover the ingredients for a decent Noche Buena meal.",
        explanation: "\"Is\" is correct. When a quantity of money (Five hundred pesos) refers to a single unit or amount, the verb must be singular (is).",
        correctAnswer: "is",
        choices: [
            "is",
            "are",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The staff who conduct the earthquake drills (practices, practice) them regularly.",
        explanation: "\"Practice\" is correct. The verb must agree with its subject, staff, which is plural in this context (referring to multiple individuals).",
        correctAnswer: "practice",
        choices: [
            "practices",
            "practice",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The counselor talked to the students about depression, which (affects, affect) their academic performance.",
        explanation: "\"Affects\" is correct. The relative pronoun which refers back to the singular noun depression, and thus requires the singular verb form (affects).",
        correctAnswer: "affects",
        choices: [
            "affects",
            "affect",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The enrollment forms were given to my friend and (I, me) to take home.",
        explanation: "\"Me\" is correct because the phrase is the object of the preposition to, and therefore requires the objective case pronoun (me).",
        correctAnswer: "me",
        choices: [
            "I",
            "me",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. She decided to pursue senior high school at (a, an, the) school that specialized in technology.",
        explanation: "\"A\" is the correct indefinite article because the following word, school, begins with a consonant sound.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "the",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Managing time efficiently is (a, an) key to academic success",
        explanation: "\"A\" is the correct indefinite article. The noun phrase key to academic success is singular and countable, requiring the article a.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
        ],
        choiceType: 'none'
    },
]

const metadata: SetMetadata = {
    passingScore: 7,
    timeLimit: 20
}

export const GRAMMAR_INTERMIDIATE_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setG,
        }
    },
    {
        label: "Set H",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setH,
        }
    },
    {
        label: "Set I",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setI,
        }
    },
    {
        label: "Set J",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setJ,
        }
    },
]
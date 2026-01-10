import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

export const contentImgPrefix: string = "/games/vocab/";
const images = {
    court: contentImgPrefix + "court.png",
    lighthouse: contentImgPrefix + "lighthouse.png",
    bright: contentImgPrefix + "bright.png",
    rainy: contentImgPrefix + "raining.png",
    sleepy: contentImgPrefix + "sleepy.png",
    parade: contentImgPrefix + "parade.png",
    carabao: contentImgPrefix + "carabao.png",
    church: contentImgPrefix + "church.png",
    loaded: contentImgPrefix + "loaded.png",
    struggling: contentImgPrefix + "struggling.png",
    focused: contentImgPrefix + "focused.png"
}

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and click the correct answer from the choices given. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Antonio is a responsible farmer in Batangas. He wakes up early every day to water his rice fields and feed his carabaos. What does responsible mean?",
        explanation: "A responsible person is someone who can be relied upon or trusted to do what is expected of them.",
        correctAnswer: "Dependable",
        choices: [
            "Angry",
            "Careless",
            "Dependable",
            "Lazy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Maria faced a big challenge when she joined the Paligsahan sa Pagsulat in her school, but she worked hard to finish her story. What does challenge mean?",
        explanation: "A challenge is something that is difficult and requires effort to accomplish.",
        correctAnswer: "Difficult task",
        choices: [
            "Difficult task",
            "Easy task",
            "Fun game",
            "Friend",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Juan is honest. He returned the money he found at the Rizal Park instead of keeping it. What does honest mean?",
        explanation: "Honest describes someone who tells the truth and does not cheat or steal.",
        correctAnswer: "Truthful",
        choices: [
            "Dishonest",
            "Lazy",
            "Shy",
            "Truthful",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The students stayed quiet in the classroom at their public school in Quezon City because the teacher was explaining the lesson. What does classroom mean?",
        explanation: "A classroom is a room where students gather to learn and study.",
        correctAnswer: "A place to study",
        choices: [
            "A place to sleep",
            "A place to study",
            "A place to eat",
            "A playground",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. “___ going to celebrate the barangay fiesta today.” ",
        explanation: "“They're” is the contraction of “they are,” which fits the sentence.",
        correctAnswer: "they're",
        choices: [
            "they're",
            "their",
            "there",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. “Please bring ___ homework tomorrow.” ",
        explanation: "“Your” shows possession, referring to the homework that belongs to the student.",
        correctAnswer: "your",
        choices: [
            "your",
            "you're",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. “The mango tree is big, and ___ leaves are very green.” ",
        explanation: "“Its” is a possessive pronoun showing that the leaves belong to the tree.",
        correctAnswer: "its",
        choices: [
            "its",
            "it's",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. “I don't know ___ it will rain during the school trip.” ",
        explanation: "“Whether” is used to express a choice or possibility.",
        correctAnswer: "whether",
        choices: [
            "weather",
            "whether",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. My friend is very ______; she helped me study for our Filipino quiz. ",
        explanation: "“Kind” describes someone who is helpful, caring, or considerate.",
        correctAnswer: "kind",
        choices: [
            "kind",
            "rude",
            "happy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The weather today is very ______ because the sun is shining brightly in Manila.",
        explanation: "“Hot” describes high temperatures, which match the sunny weather.",
        correctAnswer: "hot",
        choices: [
            "hot",
            "cold",
            "sunny",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Carefully observe the picture and pay attention to the details it shows. From the choices provided, select the word that best describes what is shown.",
        question: "",
        explanation: '',
        correctAnswer: ""
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.court,
        explanation: '',
        correctAnswer: "Court",
        choices: [
            "Court",
            "Field",
            "Park",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.lighthouse,
        explanation: '',
        correctAnswer: "Lighthouse",
        choices: [
            "Lighthouse",
            "Tower",
            "Building",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.bright,
        explanation: '',
        correctAnswer: "Bright",
        choices: [
            "Dark",
            "Bright",
            "Gloomy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.rainy,
        explanation: '',
        correctAnswer: "Rainy",
        choices: [
            "Rainy",
            "Sunny",
            "Wet",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.sleepy,
        explanation: '',
        correctAnswer: "Sleepy",
        choices: [
            "Awake",
            "Tired",
            "Sleepy",
        ],
        choiceType: "none"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Examine each pair of words. Determine which word is appropriate for informal communication and which is suitable for formal contexts.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which is informal?",
        explanation: '"Finish" is casual; "Complete" is more formal and precise.',
        correctAnswer: "finish",
        choices: [
            "finish",
            "complete",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which is formal?",
        explanation: '"Initiate" is formal and often used in writing; "Begin" is everyday language.',
        correctAnswer: "initiate",
        choices: [
            "begin",
            "initiate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which is informal?",
        explanation: '"Look" is commonly used in conversation; "Observe" is formal.',
        correctAnswer: "look",
        choices: [
            "look",
            "observe",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which is formal?",
        explanation: '"Select" is formal and precise; "Choose" is casual.',
        correctAnswer: "select",
        choices: [
            "choose",
            "select",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which is informal?",
        explanation: '“Explain” is more common and general, while “clarify” is the more formal and precise term. ',
        correctAnswer: "explain",
        choices: [
            "explain",
            "clarify",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The jeepney was crowded during rush hour, so many passengers had to stand. What does crowded mean?",
        explanation: ' Crowded describes a place that has many people in it, leaving little or no space.',
        correctAnswer: "Full of people",
        choices: [
            "Completely empty",
            "Dark and cold",
            "Full of people",
            "Very quiet",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The barangay captain celebrated their success after organizing a clean-up drive around the rivers of Marikina. What does success mean?",
        explanation: 'Success means the accomplishment of a goal or purpose, which is an achievement.',
        correctAnswer: "Achievement",
        choices: [
            "Achievement",
            "Failure",
            "Mistake",
            "Problem",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Liza practices basketball every afternoon at the gymnasium near her house to improve her skills for the Liga ng Kabataan. What does practice mean?",
        explanation: 'The goal of the action is "to improve her skills." Practice involves repeated effort (try) to get better at something.',
        correctAnswer: "Try and improve",
        choices: [
            "Rest",
            "Sleep",
            "Try and improve",
            "Watch ",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The bakery sells bread and uses rice ___ instead of wheat sometimes.” ",
        explanation: 'Flour is the ingredient (ground grain) used to bake bread.',
        correctAnswer: "flour",
        choices: [
            "flower",
            "flour",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. I can ___ the boats floating on Manila Bay.” ",
        explanation: 'See is the verb meaning to perceive with your eyes.',
        correctAnswer: "see",
        choices: [
            "sea",
            "see",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. She ___ that the festival would be fun last year.” ",
        explanation: 'Knew is the past tense verb needed for an action that happened "last year."',
        correctAnswer: "knew",
        choices: [
            "knew",
            "new",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. I bought a ___ of shoes for the school event.” ",
        explanation: 'A pair refers to the set of two matching items, like shoes.',
        correctAnswer: "pair",
        choices: [
            "pair",
            "pear",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. The students are not ___ to use their phones inside the classroom.” ",
        explanation: 'Allowed is the verb meaning to be given permission.',
        correctAnswer: "allowed",
        choices: [
            "allowed",
            "aloud",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. He likes to ______ cartoons every afternoon after finishing his homework. ",
        explanation: '“Watch” is a verb meaning to look at something, which fits because he looks at cartoons, not sleep.',
        correctAnswer: "watch",
        choices: [
            "sleep",
            "watch",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. I saw a ______ butterfly in our garden while helping my mother plant sampaguita flowers.",
        explanation: 'Butterflies are typically described using the positive adjective beautiful.',
        correctAnswer: "beautiful",
        choices: [
            "beautiful",
            "ugly",
        ],
        choiceType: "none"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. I need to go to the store and ___ some more milk.",
        explanation: 'Buy is a verb meaning “to purchase,” which fits the action in the sentence.',
        correctAnswer: "buy",
        choices: [
            "buy",
            "by",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The knight wore shining _____ into the battle.",
        explanation: 'Armor is a noun meaning protective metal covering worn by soldiers or knights.',
        correctAnswer: "armor",
        choices: [
            "armor",
            "armoire",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “Everyone was invited to the fiesta ___ Miguel.” ",
        explanation: 'Except is a preposition meaning “excluding,” which shows Miguel was not included.',
        correctAnswer: "except",
        choices: [
            "accept",
            "except",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The historical ____of jewelry was discovered in an old Spanish church.",
        explanation: 'Piece is a noun meaning “a part or portion of something,” which fits the sentence about jewelry.',
        correctAnswer: "piece",
        choices: [
            "piece",
            "peace",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The mountaineers had to ascend Mount Apo slowly and carefully due to the steep and challenging trail. What does ascend mean?",
        explanation: 'Mount Apo is a mountain, and the fact that the trail is steep means the mountaineers were moving toward the top, which means to climb up.',
        correctAnswer: "To climb up",
        choices: [
            "To climb up",
            "To run quickly",
            "To stay in one place ",
            "To walk down",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The fragrant sampaguita flower is often used to make garlands for religious statues during a fiesta. What does fragrant mean?",
        explanation: 'Sampaguita is known as the national flower and is famed for its appealing, sweet odor, which is the definition of fragrant.',
        correctAnswer: "Having a pleasant, sweet smell",
        choices: [
            "Smelling bad",
            "Having a pleasant, sweet smell",
            "Not giving off any noticeable smell at all",
            "Having a sweet taste even though it may not smell strong",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.  The fisherman was able to catch a giant lapu-lapu (grouper) that weighed more than he did! What does giant mean?",
        explanation: 'The context emphasizes that the fish was so big it weighed more than the fisherman, indicating it was very large.',
        correctAnswer: "Very large or huge",
        choices: [
            "Average in size",
            "Extremely small ",
            "Medium in size ",
            "Very large or huge",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. She was eager to try the new Filipino restaurant because her friends said the adobo was excellent. What does eager mean?",
        explanation: 'Since her friends recommended the restaurant, she would likely be very keen and excited to try it.',
        correctAnswer: "Very keen and excited",
        choices: [
            "Not interested ",
            "Scared or nervous ",
            "Unwilling ",
            "Very keen and excited",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The children found a shelter under the big mango tree when the heavy rain suddenly poured. What does shelter mean?",
        explanation: 'Since the children went under the tree when the heavy rain suddenly poured, the tree served as a protective covering, or shelter.',
        correctAnswer: "A place that offers protection from bad weather and keeps people safe",
        choices: [
            "A place that sells food",
            "A very small car used for quick trips",
            "A tall structure or place usually built for storage",
            "A place that offers protection from bad weather and keeps people safe",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Carefully observe the picture and pay attention to the details it shows. From the choices provided, select the word that best describes what is shown.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.parade,
        explanation: '',
        correctAnswer: "Parade",
        choices: [
            "Festival",
            "Parade",
            "Party",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.carabao,
        explanation: '',
        correctAnswer: "Carabao",
        choices: [
            "Carabao",
            "Cow",
            "Horse",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.church,
        explanation: '',
        correctAnswer: "Church",
        choices: [
            "Chapel",
            "Church",
            "School",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.loaded,
        explanation: '',
        correctAnswer: "Loaded",
        choices: [
            "Empty-handed",
            "Relaxed",
            "Loaded",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.struggling,
        explanation: '',
        correctAnswer: "Struggling",
        choices: [
            "Struggling",
            "Tiny",
            "Relaxed",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.focused,
        explanation: '',
        correctAnswer: "Focused",
        choices: [
            "Focused",
            "Wild",
            "Noisy",
        ],
        choiceType: "none"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The family decided to _____ their old ancestral house in the province.",
        explanation: 'To sell is a verb meaning to exchange something for money. Cell is a noun meaning a small room or unit.',
        correctAnswer: "sell",
        choices: [
            "sell",
            "cell",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The jeepney driver had to ____suddenly to avoid hitting the stray dog.",
        explanation: 'Brake is a verb meaning to slow down or stop a vehicle. Break is a verb meaning to separate into pieces.',
        correctAnswer: "brake",
        choices: [
            "break",
            "brake",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The class will _____ a special talk about the country's biodiversity tomorrow.",
        explanation: 'Hear is a verb meaning to perceive sound with the ears. Here is an adverb meaning in this place.',
        correctAnswer: "hear",
        choices: [
            "hear",
            "here",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The Barangay officials will ____ the youth about responsible social media use.",
        explanation: 'Council is a noun referring to a group of people assembled to make decisions (like Barangay officials). Counsel is a verb meaning to give advice.',
        correctAnswer: "counsel",
        choices: [
            "counsel",
            "council",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. After the typhoon, the strong winds had a significant _____ on the rice paddies.",
        explanation: 'Effect is a noun meaning a result or outcome (the winds caused a result). Affect is generally a verb meaning to influence.',
        correctAnswer: "effect",
        choices: [
            "affect",
            "effect",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.  We must conserve electricity by turning off the lights when we leave the room to help save on our electric bill.  What does conserve mean? ",
        explanation: 'Turning off the lights to help save the bill is an act of using electricity sparingly or saving it, which means to conserve.',
        correctAnswer: "To use sparingly or save",
        choices: [
            "To use only for fun ",
            "To use sparingly or save",
            "To waste or use carelessly ",
            "To use something up quickly ",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Rico is curious about animals in the Philippine Eagle Center. He often asks questions about how they live.  What does curious mean? ",
        explanation: 'The phrase "He often asks questions" shows that Rico has a strong desire to know or learn something, which is the definition of curious.',
        correctAnswer: "Eager to learn",
        choices: [
            "Eager to learn",
            "Lazy ",
            "Shy ",
            "Uninterested",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The farmer uses an efficient irrigation system that saves water and helps his rice fields grow faster and better.  What does efficient mean? ",
        explanation: 'The system is described as saving water and helping the fields grow faster and better, meaning it performs its function without waste and works well.',
        correctAnswer: "Working well and quickly",
        choices: [
            "Taking a long time ",
            "Wasting resources ",
            "Being expensive",
            "Working well and quickly",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Carlos is very patient. He waits calmly in line at the LRT station every morning without complaining. What does patient mean? ",
        explanation: 'The context states he waits calmly and without complaining, which perfectly describes a person who is patient.',
        correctAnswer: "Calm and tolerant",
        choices: [
            "Angry ",
            "Calm and tolerant",
            "Impulsive ",
            "Lazy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The teacher gave a simple explanation about Filipino heroes so that all students in the class could understand easily. What does simple mean? ",
        explanation: 'The explanation was given so that "all students could understand easily," meaning it was not complicated or confusing.',
        correctAnswer: "Easy to understand",
        choices: [
            "Boring ",
            "Complicated ",
            "Confusing ",
            "Easy to understand",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Examine each pair of words. Determine which word is appropriate for informal communication and which is suitable for formal contexts.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which is informal?",
        explanation: '"Try" is commonly used in casual conversation. "Attempt" is more formal.',
        correctAnswer: "try",
        choices: [
            "try",
            "attempt",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which is formal?",
        explanation: '"Purchase" is used in formal writing; "Buy" is everyday language.',
        correctAnswer: "purchase",
        choices: [
            "buy",
            "purchase",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which is informal?",
        explanation: '"Get" is casual; "Obtain" is more formal and precise.',
        correctAnswer: "get",
        choices: [
            "get",
            "obtain",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which is formal?",
        explanation: '"Utilize" is formal; "Use" is a simple everyday word.',
        correctAnswer: "utilize",
        choices: [
            "use",
            "utilize",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which is informal?",
        explanation: '"Start" is common in speech; "Commence" is formal/written English.',
        correctAnswer: "start",
        choices: [
            "start",
            "commence",
        ],
        choiceType: "none"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. We walked along the beach in Batangas because the sand was soft and the sea was ______. ",
        explanation: 'The sentence describes a soft sand and peaceful beach, so “calm” best fits the description of the sea.',
        correctAnswer: "calm",
        choices: [
            "rough",
            "calm",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Liza is very ______; she always finishes her homework before playing outside.",
        explanation: 'Liza finishes her homework first, showing she is dependable and takes responsibility, which means “responsible.”',
        correctAnswer: "responsible",
        choices: [
            "care",
            "responsible",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The jeepney driver was very ______ and waited patiently while the passengers boarded.",
        explanation: 'The driver waited patiently, which shows good manners; therefore, “polite” is correct.',
        correctAnswer: "polite",
        choices: [
            "polite",
            "rude",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. We need to ______ our classroom before the DepEd inspector arrives. ",
        explanation: 'To prepare the classroom properly, it must be tidy, so “clean” is the correct choice.',
        correctAnswer: "clean",
        choices: [
            "clean",
            "dirty",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. During the typhoon, our roof leaked, and the rain made the floor very ______. ",
        explanation: 'The rain caused water to accumulate, making the floor “wet.”',
        correctAnswer: "wet",
        choices: [
            "dry",
            "wet",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Students were asked to _______reliable sources for their research paper on Filipino heroes.",
        explanation: 'Cite is a verb meaning to quote or refer to a source of information. Sight is a noun meaning the ability to see. Site is a noun meaning a location or website.',
        correctAnswer: "cite",
        choices: [
            "sight",
            "cite",
            "site",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.  The _____ of the school emphasized the importance of bayanihan in community projects.",
        explanation: 'Principal is a noun referring to the head of a school. Principle is a noun meaning a fundamental truth or rule.',
        correctAnswer: "principal",
        choices: [
            "principal",
            "principle",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8.  The ______ class attended the flag ceremony despite the early morning rain.",
        explanation: 'Whole is an adjective meaning all of something. A hole is a noun meaning an opening or gap.',
        correctAnswer: "whole",
        choices: [
            "hole",
            "whole",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. He promised to ______ his friends at the new shopping ) later this afternoon.",
        explanation: 'Meet is a verb meaning to come together with someone. Meat is a noun for animal flesh used as food.',
        correctAnswer: "meet",
        choices: [
            "meet",
            "meat",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The tourist wanted to _____ the famous Chocolate Hills in Bohol.",
        explanation: 'See is a verb meaning to perceive with the eyes. Sea is a noun referring to a large body of saltwater.',
        correctAnswer: "see",
        choices: [
            "sea",
            "see",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Examine each pair of words. Determine which word is appropriate for informal communication and which is suitable for formal contexts.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which is formal? ",
        explanation: '"Inquire" is formal. “Ask" is used for everyday.',
        correctAnswer: "inquire",
        choices: [
            "ask",
            "inquire",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which is formal? ",
        explanation: '"Assist" is more formal than "Help".',
        correctAnswer: "assist",
        choices: [
            "help",
            "assist",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which is informal? ",
        explanation: '"Show" is casual; "Demonstrate" is formal.',
        correctAnswer: "show",
        choices: [
            "show",
            "demonstrate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which is formal? ",
        explanation: '"Discuss" is formal; "Talk" is informal.',
        correctAnswer: "discuss",
        choices: [
            "talk",
            "discuss",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which is informal?",
        explanation: '"Tell" is used in casual speech; "Inform" is formal.',
        correctAnswer: "tell",
        choices: [
            "tell",
            "inform",
        ],
        choiceType: "none"
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word that can replace the underlined word and best fits the meaning of the sentence. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Taal Volcano is not very tall, but its eruption was powerful. Which word can replace tall? ",
        explanation: 'Tall and high describe vertical measurement. While not the tallest, Taal is high above the lake.',
        correctAnswer: "high",
        choices: [
            "flat",
            "high",
            "low",
            "short",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Everyone cheered when the team began to win the championship game. Which word can replace win? ",
        explanation: 'To win a game is to achieve success or succeed in a competition.',
        correctAnswer: "succeed",
        choices: [
            "fail",
            "forfiet",
            "succeed",
            "lose",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The family wanted to buy a new television for their living room. Which word can replace buy? ",
        explanation: 'Buy means to acquire something by paying for it; purchase is a direct and slightly more formal synonym.',
        correctAnswer: "purchase",
        choices: [
            "purchase",
            "borrow",
            "sell",
            "trade",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The students must reply to the questions at the end of the chapter.  Which word can replace reply? ",
        explanation: 'Answer means to respond to a question.',
        correctAnswer: "answer",
        choices: [
            "ignore",
            "question",
            "skip",
            "answer",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. It is important to hold your promises to your friends. Which word can replace hold? ",
        explanation: 'To keep a promise means to fulfill it. In general, to keep something means to hold possession of it.',
        correctAnswer: "keep",
        choices: [
            "break",
            "lose",
            "keep",
            "surrender",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. She put the newly harvested corn into the large _____in the storage room.",
        explanation: 'A bin is a noun referring to a container or receptacle. While been is the past participle of the verb to be.',
        correctAnswer: "bin",
        choices: [
            "bin",
            "been",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The workers were told to _____ for the delivery of construction materials on site. ",
        explanation: 'Wait is a verb meaning to stay in expectation of something. Weight is a noun referring to the heaviness of an object.',
        correctAnswer: "wait",
        choices: [
            "wait",
            "weight",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. My _____ is practicing basketball in the court near our house.",
        explanation: 'Son is a noun referring to a male child. Sun is the star around which the Earth orbits.',
        correctAnswer: "son",
        choices: [
            "sun",
            "son",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The _____ of the tikbalang scared the children near the campfire.",
        explanation: 'Tale is a noun referring to a story. Tail is a noun referring to the rear part of an animal.',
        correctAnswer: "tale",
        choices: [
            "tale",
            "tail",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The Barangay captain asked everyone to _____ their names on the attendance sheet.",
        explanation: 'Write is a verb meaning to form letters or words on a surface. Right can be a direction, a privilege, or an adjective meaning correct.',
        correctAnswer: "write",
        choices: [
            "right",
            "write",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Examine each pair of words. Determine which word is appropriate for informal communication and which is suitable for formal contexts.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which is informal? ",
        explanation: '"End" is casual; "Conclude" is formal.',
        correctAnswer: "end",
        choices: [
            "conclude",
            "end",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which is formal? ",
        explanation: '"Observe" is formal; "Look" is casual.',
        correctAnswer: "observe",
        choices: [
            "observe",
            "look",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which is informal? ",
        explanation: '"Get" is commonly used every day; "Acquire" is formal.',
        correctAnswer: "get",
        choices: [
            "acquire",
            "get",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "Which is formal? ",
        explanation: '"Consider" is formal; "Think" is informal.',
        correctAnswer: "consider",
        choices: [
            "consider",
            "think",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which is informal? ",
        explanation: '"Show" is casual; "Present" is formal.',
        correctAnswer: "show",
        choices: [
            "show",
            "present",
        ],
        choiceType: "none"
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word that can replace the underlined word and best fits the meaning of the sentence. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The teacher asked the child to display her drawing to the class. Which word can replace display? ",
        explanation: 'To show something is to make something visible to others.',
        correctAnswer: "show",
        choices: [
            "conceal",
            "hide",
            "show",
            "skip",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The path through the forest was dark because the sun could not reach the ground.  Which word can replace dark? ",
        explanation: 'Dim means not shining brightly or lacking light, making it a good synonym for dark.',
        correctAnswer: "dim",
        choices: [
            "bright",
            "clear",
            "light",
            "dim",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. After the marathon, Juan felt very tired and needed to rest. Which word can replace tired?",
        explanation: 'Weary is a common synonym for feeling tired or exhausted.',
        correctAnswer: "weary",
        choices: [
            "active",
            "energetic",
            "refreshed",
            "weary",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. I need to fix the broken wheel on my bicycle before I can ride it. Which word can replace fix?",
        explanation: 'Fix means to repair or mend something that is broken.',
        correctAnswer: "repair",
        choices: [
            "repair",
            "break",
            "damage",
            "ruin",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The water felt cold when I jumped into the swimming pool. Which word can replace cold?",
        explanation: 'Icy means extremely cold, and it is a common synonym to describe the feeling of cold water.',
        correctAnswer: "icy",
        choices: [
            "burning",
            "hot",
            "icy",
            "warm",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The jeepney drivers decided to protest the fare increase by holding a motorcade along EDSA to show their strong disagreement with the new policy.  What does protest mean? ",
        explanation: 'The context says the drivers used a "motorcade along EDSA to show their strong disagreement," which is the definition of a public protest.',
        correctAnswer: "To make a public display of objection",
        choices: [
            "To fully support",
            "To hold a party",
            "To secretly agree ",
            "To make a public display of objection",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The family felt a deep sense of nostalgia whenever they looked at old photos of their provincial home and the rice fields where they grew up. What does nostalgia mean? ",
        explanation: 'The context links the feeling to "old photos of their provincial home and the rice fields," showing a strong desire or fondness for a cherished time in the past.',
        correctAnswer: "A sentimental longing for the past",
        choices: [
            "A fear of heights ",
            "A strong hunger",
            "A feeling of sadness about the future ",
            "A sentimental longing for the past",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The barangay captain called a special meeting to disclose the full details of the community fund distribution to ensure transparency. What does disclose mean?",
        explanation: 'The context states the goal was to "ensure transparency," which means the captain needed to make the details public or known (disclose).',
        correctAnswer: "To reveal",
        choices: [
            "To keep a secret ",
            "To reveal",
            "To hide ",
            "To cancel",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Every year during the fiesta, the town holds an elaborate procession where the statue of the patron saint is carried through the streets. What does procession mean? ",
        explanation: 'The context describes the statue being "carried through the streets," implying a formal, moving line of people, which is a procession.',
        correctAnswer: "A group of people or vehicles moving in an orderly way",
        choices: [
            "A large outdoor market ",
            "A private dinner party",
            "A sports game ",
            "A group of people or vehicles moving in an orderly way",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.  Filipinos are known for their resilience because they always manage to recover quickly and smile, even after being struck by a severe typhoon.  What does resilience mean?",
        explanation: 'The context explains that Filipinos "manage to recover quickly and smile, even after being struck by a severe typhoon," which perfectly describes the trait of resilience.',
        correctAnswer: "The ability to withstand difficulties",
        choices: [
            "The ability to run fast ",
            "Extreme sadness ",
            "The ability to withstand difficulties",
            "A fear of water",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Click the word from the options that best fits the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. The new _______ linking the towns will significantly reduce travel time.",
        explanation: 'Road is a noun referring to a wide way leading from one place to another. Rode is the past tense of the verb ride.',
        correctAnswer: "road",
        choices: [
            "rode",
            "road",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Her favorite ______ of sandals broke wile she was trekking to the falls.",
        explanation: 'Pair is a noun meaning two identical or corresponding things. Pear is a noun for a type of fruit.',
        correctAnswer: "pair",
        choices: [
            "pair",
            "pear",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. The ______ in Baguio is usually much cooler than in Manila.",
        explanation: 'Weather is a noun referring to the state of the atmosphere (temperature, wind, etc.). Whether is a conjunction used to introduce alternatives.',
        correctAnswer: "weather",
        choices: [
            "weather",
            "whether",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. The kundiman music evoked a deep sense of national ______among the audience.",
        explanation: 'Pride is a noun referring to a feeling of deep pleasure or satisfaction derived from one\'s own achievements or country. Pried is the past tense of the verb pry (to open with difficulty).',
        correctAnswer: "pride",
        choices: [
            "pried",
            "pride",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. The farmer carefully weighed the ______ of newly harvested corn.",
        explanation: 'Sack is a noun referring to a large bag made of coarse material. Sac is a noun referring to a part of an animal or plant resembling a pouch.',
        correctAnswer: "sac",
        choices: [
            "sac",
            "sack",
        ],
        choiceType: "none"
    },
]

const metadata: SetMetadata = {
    passingScore: 12,
    timeLimit: 10
}

export const VOCAB_BEGINNER_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 10 seconds to answer each one. Get 12 correct answers to complete the level successfully.",
            questions: setG,
        }
    },
]

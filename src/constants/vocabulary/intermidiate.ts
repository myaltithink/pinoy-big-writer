import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"
import { contentImgPrefix } from "./beginner"

const images = {
    messy: contentImgPrefix + "messy.png",
    peaceful: contentImgPrefix + "peaceful.png",
    careful: contentImgPrefix + "careful.png",
    stormy: contentImgPrefix + "stormy.png",
    fancy: contentImgPrefix + "fancy.png",
    happy: contentImgPrefix + "happy.png",
    impressive: contentImgPrefix + "impressive.png",
    broken: contentImgPrefix + "broken.png",
    angry: contentImgPrefix + "angry.png",
    neat: contentImgPrefix + "neat.png",
}

const setA: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The farmers in Bukidnon faced an arid season, so their crops barely grew.",
        explanation: 'The context mentions that the "crops barely grew," which is a direct consequence of a dry (arid) season.',
        correctAnswer: "dry",
        choices: [
            "dry",
            "fertile",
            "wet",
            "foggy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The barangay tanod showed great valor when he rescued children during the flood.",
        explanation: 'The act of rescuing children during a flood requires great courage and bravery (valor).',
        correctAnswer: "courage",
        choices: [
            "courage",
            "cowardice",
            "fear",
            "weakness",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The instructions for joining the Palarong Pambansa were so convoluted that many students got confused.",
        explanation: 'The result was that "many students got confused," indicating the instructions were difficult to understand, or complex.',
        correctAnswer: "complex",
        choices: [
            "brief",
            "complex",
            "simple",
            "straightforward",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The artisan painted the parol with meticulous attention to detail.",
        explanation: 'Painting with great "attention to detail" means being extremely precise and careful (meticulous).',
        correctAnswer: "precise",
        choices: [
            "careless",
            "hasty",
            "messy",
            "precise",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word that best completes the sentence or matches the meaning required.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The mayor implemented a ______ plan to improve the city’s traffic system.",
        explanation: 'A mayor would use a well-planned and goal-oriented approach (strategic) to address a major issue like traffic.',
        correctAnswer: "strategic",
        choices: [
            "flexible",
            "risky",
            "strategic",
            "temporary",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Typhoon warnings urged residents to take ______ precautions.",
        explanation: 'Given the danger of a typhoon, the warnings would urge residents to be fully alert and cautious (careful).',
        correctAnswer: "careful",
        choices: [
            "careful",
            "casual",
            "limited",
            "mild",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The cultural show highlighted the ______ of Filipino traditions.",
        explanation: 'Filipino culture is known for its wide range and variety of traditions across different islands (diversity).',
        correctAnswer: "diversity",
        choices: [
            "diversity",
            "familiarity",
            "repetition",
            "uniformity",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The barangay captain gave a ______ response to the community's complaint.",
        explanation: 'A complaint usually requires an instant action or reply (immediate) to address the community\'s concern promptly.',
        correctAnswer: "immediate",
        choices: [
            "brief",
            "immediate",
            "polite",
            "thoughtful",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Her explanation was so ______ that everyone understood the instructions at once.",
        explanation: 'An explanation that is easy to understand ("understood at once") must be clear, logical, and consistent (coherent).',
        correctAnswer: "coherent",
        choices: [
            "lengthy",
            "formal",
            "coherent",
            "subtle",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The volunteers showed ______ dedication to helping the evacuees.",
        explanation: 'Effective volunteer work requires consistent and unwavering effort (steady) over time, especially when helping evacuees.',
        correctAnswer: "steady",
        choices: [
            "hesitant",
            "uncertain",
            "temporary",
            "steady",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Identify the informal word in the sentence and write the correct formal word that should replace it. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. I need more time to finish the prep for our classroom presentation.",
        explanation: '“Prep” is an informal shortened form of preparation.',
        correctAnswer: "preparation",
    },
    {
        type: QuestionType.Identification,
        question: "2. Mark showed me the pics he took during the Intramurals.",
        explanation: '“Pics” is the casual form of pictures.',
        correctAnswer: "pictures",
    },
    {
        type: QuestionType.Identification,
        question: "3. Our school released a short memo about the schedule changes.",
        explanation: '“Memo” is the abbreviated/informal form of memorandum.',
        correctAnswer: "memorandum",
    },
    {
        type: QuestionType.Identification,
        question: "4. The principal reminded students to read the whole intro of the handbook.",
        explanation: '“Intro” is the shortened form of introduction.',
        correctAnswer: "introduction",
    },
    {
        type: QuestionType.Identification,
        question: "5. We have a science lab activity tomorrow, so bring your materials.",
        explanation: '“Lab” is the shortened form of laboratory.',
        correctAnswer: "laboratory",
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Identify the word that is used incorrectly and type the correct word that completes the sentence. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. I want to bye a new book at the mall.",
        explanation: '“Buy” means to purchase something. “Bye” is used to say farewell.',
        correctAnswer: "buy",
    },
    {
        type: QuestionType.Identification,
        question: "7. My little brother is already too years old.",
        explanation: '“Two” is the number. “Too” means also or excessively.',
        correctAnswer: "two",
    },
    {
        type: QuestionType.Identification,
        question: "8. Please walk over their and wait for me.",
        explanation: '“There” refers to a place. “Their” shows possession.',
        correctAnswer: "there",
    },
    {
        type: QuestionType.Identification,
        question: "9. Did you here the loud thunder last night?",
        explanation: '“Hear” means to listen. “Here” refers to a location.',
        correctAnswer: "hear",
    },
    {
        type: QuestionType.Identification,
        question: "10. We will sea the results tomorrow.",
        explanation: '“See” means to observe. “Sea” is a large body of water.',
        correctAnswer: "see",
    },
]

const setC: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Identify the informal word in the sentence and write the correct formal word that should replace it. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. Maria shared some stats about barangay cleanliness during the meeting.",
        explanation: '“Stats” is the shortened form of statistics.',
        correctAnswer: "statistics",
    },
    {
        type: QuestionType.Identification,
        question: "2. During the “Pista ng Bayan” in Quezon City, many ads about local food stalls were shown on Facebook.",
        explanation: '“Ads” is the informal short form of “advertisements.” ',
        correctAnswer: "advertisements",
    },
    {
        type: QuestionType.Identification,
        question: "3. Our school’s tech club will join the national robotics competition.",
        explanation: '“Tech” is the shortened form of technology.',
        correctAnswer: "technology",
    },
    {
        type: QuestionType.Identification,
        question: "4. Mang Juan keeps all receipts and docs for his sari-sari store.",
        explanation: '“Docs” informally refers to documents.',
        correctAnswer: "documents",
    },
    {
        type: QuestionType.Identification,
        question: "5. The teacher gave us an exam review about the life of Jose Rizal.",
        explanation: '“Exam” is the shortened form of examination.',
        correctAnswer: "examination",
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. During the Christmas sale at SM Mall, the store offered a ______ discount, attracting many shoppers. ",
        explanation: '“Generous” fits the context because the discount is large and pleasing.',
        correctAnswer: "generous",
        choices: [
            "generous",
            "predictable ",
            "reasonable ",
            "slight",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Manny Pacquiao’s performance in the latest boxing match was truly ______, making Filipinos proud. ",
        explanation: '“Exceptional” means outstanding, matching the scenario of an impressive performance.',
        correctAnswer: "exceptional",
        choices: [
            "repetitive ",
            "moderate ",
            "exceptional",
            "uncertain",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. After months of training in customer service at Jollibee, Miguel became more ______ in helping customers. ",
        explanation: '“Confident” fits because the context shows he handles customers well.',
        correctAnswer: "confident",
        choices: [
            "adaptable ",
            "confident",
            "neutral ",
            "selective",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The teacher reminded students in a Quezon City school not to spread ______ rumors that could hurt classmates. ",
        explanation: '“Harmful” is correct; it emphasizes the damaging nature of rumors.',
        correctAnswer: "harmful",
        choices: [
            "harmful",
            "ordinary ",
            "trivial ",
            "unusual",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The Sinulog Festival in Cebu created a ______ atmosphere with dancing, music, and colorful costumes. ",
        explanation: '“Lively” matches the energetic festival environment.',
        correctAnswer: "lively",
        choices: [
            "lively",
            "modest ",
            "steady ",
            "tense",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Identify the informal word in the sentence and write the correct formal word that should replace it. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. Jane said she is gonna join the school intramurals next week.",
        explanation: '“Gonna” is the informal contraction of “is going to.”',
        correctAnswer: "going to",
    },
    {
        type: QuestionType.Identification,
        question: "2. Paul shared that he wanna watch the Panagbenga festival in Baguio City.",
        explanation: '“Wanna” is the informal form of “wants to.”',
        correctAnswer: "wants to",
    },
    {
        type: QuestionType.Identification,
        question: "3. The teacher explained, “We can't go on the school field trip cuz it's raining.",
        explanation: '“Cuz” is the informal spelling of “because.”',
        correctAnswer: "because",
    },
    {
        type: QuestionType.Identification,
        question: "4. Renz said, “Gimme the ball so I can play basketball.”",
        explanation: '“Gimme” is the informal contraction of “give me.”',
        correctAnswer: "give me",
    },
    {
        type: QuestionType.Identification,
        question: "5. Toni said, “Lemme check the schedule for the school carnival first.",
        explanation: '“Lemme” is the informal contraction of “let me.”',
        correctAnswer: "let me",
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Identify the word that is used incorrectly and type the correct word that completes the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. My older brother is grate at playing basketball.",
        explanation: 'Great means excellent or outstanding. Grate means to shred or cause annoyance.',
        correctAnswer: "great",
    },
    {
        type: QuestionType.Identification,
        question: "7. The weak before Christmas is usually busy.",
        explanation: 'A week is a period of seven days. Weak means lacking strength.',
        correctAnswer: "week",
    },
    {
        type: QuestionType.Identification,
        question: "8. We need to check the hole menu for the fiesta.",
        explanation: 'Whole means the complete item. A hole is an opening or gap.',
        correctAnswer: "whole",
    },
    {
        type: QuestionType.Identification,
        question: "9. My favorite color for my barong is blew.",
        explanation: 'Blue is the color. Blew is the past tense of blow.',
        correctAnswer: "blue",
    },
    {
        type: QuestionType.Identification,
        question: "10. Did you no that the Philippines has over 7,000 islands?",
        explanation: 'Know means to be aware of information. No is the opposite of yes.',
        correctAnswer: "know",
    },
]

const setE: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The comedians at the Sinulog festival were so hilarious that the crowd couldn’t stop laughing. ",
        explanation: '“Extremely funny” matches the context of the crowd laughing; other options are inappropriate.',
        correctAnswer: "extremely funny",
        choices: [
            "boring ",
            "extremely funny",
            "sad ",
            "serious",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. After carrying rice sacks, Mang Canor felt exhausted and had to rest. ",
        explanation: '“Tired” fits because the context shows fatigue from physical work.',
        correctAnswer: "tired",
        choices: [
            "cheerful ",
            "energized ",
            "tired",
            "happy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The teacher gave a concise explanation of the Rizal lesson. ",
        explanation: '“Brief and clear” is correct because “concise” means expressing ideas in few words.',
        correctAnswer: "brief and clear",
        choices: [
            "brief and clear",
            "long and confusing ",
            "repetitive ",
            "vague",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The typhoon caused inevitable damage to the coastal barangays. ",
        explanation: '“Certain to happen” fits because “inevitable” means unavoidable.',
        correctAnswer: "certain to happen",
        choices: [
            "certain to happen",
            "optional ",
            "preventable ",
            "uncertain",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The artist used vivid colors in her painting of Mayon Volcano. ",
        explanation: '“Bright and clear” is correct; “vivid” describes strong, lively colors.',
        correctAnswer: "bright and clear",
        choices: [
            "unclear",
            "dull ",
            "faded ",
            "bright and clear",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Identify the informal word in the sentence and write the correct formal word that should replace it. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. We have a science lab activity tomorrow, so bring your materials.",
        explanation: '“Lab” is the shortened form of laboratory.',
        correctAnswer: "laboratory",
    },
    {
        type: QuestionType.Identification,
        question: "7. The principal reminded students to read the whole intro of the handbook.",
        explanation: '“Intro” is the shortened form of introduction.',
        correctAnswer: "introduction",
    },
    {
        type: QuestionType.Identification,
        question: "8. Ate Erica submitted her bio for the campus journalism contest.",
        explanation: '“Bio” is the shortened form of biography.',
        correctAnswer: "biography",
    },
    {
        type: QuestionType.Identification,
        question: "9. The barangay sent a notif about the upcoming clean-up drive.",
        explanation: '“Notif” is the shortened form of notification.',
        correctAnswer: "notification",
    },
    {
        type: QuestionType.Identification,
        question: "10. Ate Joy checked the app for the online registration of DepEd programs.",
        explanation: '“App” is the informal form of application.',
        correctAnswer: "application",
    },
]

const setF: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Identify the word that is used incorrectly and type the correct word that completes the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. My mother bought sum fruits from the market.",
        explanation: 'Some refers to an unspecified amount. The sum is the total of an addition.',
        correctAnswer: "some",
    },
    {
        type: QuestionType.Identification,
        question: "2. The teacher said the field trip will be held too weeks from now.",
        explanation: 'Two is the number. Too means also or excessively.',
        correctAnswer: "rwo",
    },
    {
        type: QuestionType.Identification,
        question: "3. We must brake the rules to succeed.",
        explanation: 'Break means to separate into pieces or violate a rule. A brake is a device used to slow or stop a vehicle.',
        correctAnswer: "break",
    },
    {
        type: QuestionType.Identification,
        question: "4. The cat hurt its tale while jumping.",
        explanation: '“Tail” is the rear part of an animal. “Tale” means a story.',
        correctAnswer: "tail",
    },
    {
        type: QuestionType.Identification,
        question: "5. The noise was so allowed that I couldn't hear the announcements.",
        explanation: 'Aloud means audibly or out loud. Allowed means permitted.',
        correctAnswer: "aloud",
    },
    {
        type: QuestionType.Direction,
        direction: " Read each sentence carefully. Select the word that best fits the context and completes the sentence accurately. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The barangay report was rejected because it contained ______ information about the community projects. ",
        explanation: '“Outdated” is correct because the information was no longer current.',
        correctAnswer: "outdated",
        choices: [
            "outdated",
            "partial ",
            "revised ",
            "sufficient",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The principal of a school admired her student’s ______ attitude in joining the Brigada Eskwela clean-up activities. ",
        explanation: '“Proactive” is correct; she takes initiative instead of waiting to be told.',
        correctAnswer: "proactive",
        choices: [
            "passive",
            "proactive",
            "selective ",
            "tolerant",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Tourists visiting Palawan were impressed by the ______ of the island’s beaches, with crystal-clear water and white sand. ",
        explanation: '“Beauty” matches the context of aesthetic appeal that attracts visitors.',
        correctAnswer: "beauty",
        choices: [
            "texture",
            "clarity",
            "sharpness",
            "beauty",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Students at Ateneo were asked to write a ______ summary of the assigned chapter for their Filipino class. ",
        explanation: '“Precise” is correct because the summary should be exact and focused.',
        correctAnswer: "precise",
        choices: [
            "broad ",
            "sudden",
            "precise",
            "varied",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The barangay of Poblacion launched an ______ campaign to encourage residents to sort garbage and recycle.",
        explanation: '“Active” fits because the campaign is energetic and engaging.',
        correctAnswer: "active",
        choices: [
            "active",
            "hesitant ",
            "neutral ",
            "slow",
        ],
        choiceType: "alpha"
    },
]

const setG: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully and use the context to determine the meaning of the underlined word. Select the correct answer from the choices provided. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The volunteer group was benevolent, always helping victims of the Taal eruption. ",
        explanation: '“Benevolent” means kind and helpful, matching the context of volunteering.',
        correctAnswer: "kind and generous",
        choices: [
            "kind and generous",
            "mean ",
            "rude ",
            "selfish",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The instructions for making bibingka were ambiguous, leaving the students unsure what to do. ",
        explanation: '“Ambiguous” means unclear or interpretable in more than one way.',
        correctAnswer: "open to more than one interpretation",
        choices: [
            "clear ",
            "direct ",
            "open to more than one interpretation",
            "simple",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The scientist made a groundbreaking discovery about the Philippine eagle’s nesting habits. ",
        explanation: '“Groundbreaking” means very important or innovative, fitting the discovery.',
        correctAnswer: "revolutionary",
        choices: [
            "minor ",
            "ordinary ",
            "revolutionary",
            "trivial",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The government brochure explained the Batanes tourism rules in lucid language. ",
        explanation: '“Lucid” means easy to understand; “clear” is the correct choice.',
        correctAnswer: "clear",
        choices: [
            "ambiguous ",
            "clear",
            "complicated ",
            "confusing",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The children in a barangay fiesta were very gregarious, always playing together. ",
        explanation: '“Gregarious” means outgoing and social, matching the context of children playing together.',
        correctAnswer: "sociable",
        choices: [
            "lonely ",
            "reserved ",
            "shy ",
            "sociable",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word from the options that best matches the meaning of the underlined word.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The fishermen faced <u>treacherous</u> waves while going to the island early morning. ",
        explanation: '"Treacherous" means risky or dangerous, shown by the waves.',
        correctAnswer: "dangerous",
        choices: [
            "safe",
            "dangerous",
            "easy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The barangay health worker made a <u>meticulous</u> record of every patient’s vaccination. ",
        explanation: '"Meticulous" means very careful and detailed, shown by recording everything.',
        correctAnswer: "precise",
        choices: [
            "careless",
            "hasty",
            "precise",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The teacher gave a <u>concise</u> explanation of the Philippine Revolution to the class. ",
        explanation: '"Concise" means short and clear; the sentence shows the explanation was focused.',
        correctAnswer: "brief",
        choices: [
            "brief",
            "confusing",
            "repetitive",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The old Spanish-era church had an <u>eerie</u> feeling during the night. ",
        explanation: '"Eerie" means creepy or strange, indicated by the church at night.',
        correctAnswer: "spooky",
        choices: [
            "cheerful",
            "spooky",
            "lively",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The senator's speech about local infrastructure was <u>verbose</u>, boring many citizens. ",
        explanation: '"Verbose" means using too many words; the sentence says it bored people.',
        correctAnswer: "wordy",
        choices: [
            "brief",
            "clear",
            "wordy",
        ],
        choiceType: "none"
    },
]

const setH: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. They're family owns a sari-sari store in Bulacan.",
        explanation: '“Their” shows possession. “There” refers to a place.',
        correctAnswer: "their",
    },
    {
        type: QuestionType.Identification,
        question: "2. The fisherman caught a large soul near Palawan.",
        explanation: '“Sole” is a type of fish. “Soul” is a spiritual being.',
        correctAnswer: "sole",
    },
    {
        type: QuestionType.Identification,
        question: "3. The tiger at Manila Zoo is very fierce and wild, like a big bare.",
        explanation: '“Bear” is the animal. “Bare” means uncovered.',
        correctAnswer: "bear",
    },
    {
        type: QuestionType.Identification,
        question: "4. He tied a not in the boat's rope.",
        explanation: '“Knot” is a tied loop. “Not” is the opposite of yes or affirmation.',
        correctAnswer: "knot",
    },
    {
        type: QuestionType.Identification,
        question: "5. He left his bag inn the jeepney.",
        explanation: '“In” is a preposition. “Inn” is a small hotel.',
        correctAnswer: "in",
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
        question: "6. The student gave an <u>astute</u> observation about the city's traffic problems.",
        explanation: '"Astute" means smart or perceptive; the observation shows insight.',
        correctAnswer: "clever",
        choices: [
            "clever",
            "foolish",
            "slow",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The farmers remained <u>vigilant</u> to protect their rice fields from pests. ",
        explanation: '"Vigilant" means alert or watchful; the farmers are carefully monitoring their crops.',
        correctAnswer: "watchful",
        choices: [
            "careless",
            "watchful",
            "lazy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The lawyer presented a <u>persuasive</u> argument in the local court. ",
        explanation: '"Persuasive" means able to convince; the argument convinced others.',
        correctAnswer: "convincing",
        choices: [
            "convincing",
            "weak",
            "dull",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The hikers admired the <u>pristine</u> beaches of Palawan, untouched by pollution. ",
        explanation: '"Pristine" means pure or unspoiled; the beaches are untouched.',
        correctAnswer: "clean",
        choices: [
            "dirty",
            "polluted",
            "clean",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The folklore story of the aswang was enigmatic, leaving children curious. ",
        explanation: '"Enigmatic" means mysterious or puzzling; the story leaves questions.',
        correctAnswer: "mysterious",
        choices: [
            "obvious",
            "mysterious",
            "clear",
        ],
        choiceType: "none"
    },
]

const setI: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Identify the word that is used incorrectly and type the correct word that completes the sentence. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. Boracay is better then Bohol according to the tourist.",
        explanation: '“Than” is used for comparison. “Then” refers to time or sequence',
        correctAnswer: "than",
    },
    {
        type: QuestionType.Identification,
        question: "2. The family stayed in a sweet overlooking Manila Bay.",
        explanation: '“Suite” is a large hotel room. “Sweet” is the opposite of sour.',
        correctAnswer: "suite",
    },
    {
        type: QuestionType.Identification,
        question: "3. He let out a grown when he lifted the heavy grocery bags.",
        explanation: '“Groan” is a sound of discomfort. “Grown” means matured.',
        correctAnswer: "groan",
    },
    {
        type: QuestionType.Identification,
        question: "4. She saw a hair running across the rice field in Nueva Ecija.",
        explanation: '“Hare” is an animal like a rabbit. “Hair” is the covering on your head.',
        correctAnswer: "hare",
    },
    {
        type: QuestionType.Identification,
        question: "5. The fishermen had to hall their nets back to the boat.",
        explanation: '“Haul” means to pull or drag. “Hall” is a passageway.',
        correctAnswer: "haul",
    },
    {
        type: QuestionType.Direction,
        direction: "Carefully observe the picture and pay attention to the details it shows. From the choices provided, select the word that best describes what is shown. ",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.messy,
        explanation: 'The room is disorderly and unorganized; “messy” best describes the overall state.',
        correctAnswer: "Messy",
        choices: [
            "Messy",
            "Tidy",
            "Scattered",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.peaceful,
        explanation: 'The scene shows serenity and calmness, which “peaceful” captures accurately.',
        correctAnswer: "Peaceful",
        choices: [
            "Bright",
            "Quite",
            "Peaceful",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.careful,
        explanation: 'The student is focused and precise, making “careful” the best choice.',
        correctAnswer: "Careful",
        choices: [
            "Neat",
            "Careful",
            "Attentive",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.stormy,
        explanation: 'Dark clouds and lightning indicate an approaching storm, so “stormy” fits.',
        correctAnswer: "Stormy",
        choices: [
            "Stormy",
            "Gloomy",
            "Rough",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.fancy,
        explanation: 'The elegant decorations suggest “fancy,” emphasizing appearance.',
        correctAnswer: "Fancy",
        choices: [
            "Bright",
            "Fancy",
            "Neat",
        ],
        choiceType: "none"
    },
]

const setJ: QuizQuestion[] = [{
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Identify the word that is used incorrectly and type the correct word that completes the sentence.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The mayor gave his principle approval for the new barangay project.",
        explanation: '“Principal” means the most important or the head of a school. “Principle” means a moral rule.',
        correctAnswer: "principal",
    },
    {
        type: QuestionType.Identification,
        question: "2. She wore a plane dress during the graduation ceremony.",
        explanation: '“Plain” means simple. “Plane” is an aircraft.',
        correctAnswer: "plain",
    },
    {
        type: QuestionType.Identification,
        question: "3. The plain landed safely at NAIA despite the bad weather.",
        explanation: '“Plane” means aircraft. “Plain” means simple or flat.',
        correctAnswer: "plane",
    },
    {
        type: QuestionType.Identification,
        question: "4. Please close the window because the wound is too strong.",
        explanation: '“Wind” (wind) is moving air. “Wound” (wu:nd) means an injury.',
        correctAnswer: "wind",
    },
    {
        type: QuestionType.Identification,
        question: "5. The teacher asked them to have the cake and then have it for the group.",
        explanation: '“Halve” means to cut into two equal parts. “Have” means to possess.',
        correctAnswer: "halve",
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
        question: images.happy,
        explanation: 'The primary emotion shown is joy, best described as “happy.”',
        correctAnswer: "Happy",
        choices: [
            "Lively",
            "Cheerful",
            "Happy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.impressive,
        explanation: 'The scale and grandeur of the mountain make “impressive” the most fitting.',
        correctAnswer: "Impressive",
        choices: [
            "High",
            "Impressive",
            "Remarkable",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.broken,
        explanation: 'The fence is no longer intact, so “broken” is most precise.',
        correctAnswer: "Broken",
        choices: [
            "Broken",
            "Old",
            "Damaged",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.angry,
        explanation: 'The expression and body language indicate strong anger.',
        correctAnswer: "Angry",
        choices: [
            "Frustrated",
            "Confused",
            "Angry",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.ImageIdentification,
        question: images.neat,
        explanation: 'The arrangement looks orderly and visually pleasing, best described as “neat.”',
        correctAnswer: "Neat",
        choices: [
            "Neat",
            "Tidy",
            "Disorganized",
        ],
        choiceType: "none"
    },
]

const metadata: SetMetadata = {
    timeLimit: 15,
    passingScore: 7
}

export const VOCAB_INTERMIDIATE_SET: SetContainer[] = [{
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setG,
        }
    },
    {
        label: "Set H",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setH,
        }
    },
    {
        label: "Set I",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setI,
        }
    },
    {
        label: "Set J",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setJ,
        }
    },
]
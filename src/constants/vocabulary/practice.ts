import type { PracticeQuiz, QuizQuestion, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const week1SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence. Choose the correct meaning of the underlined word using context clues.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The lake was <u>frigid</u>, or extremely cold, during winter. ",
        explanation: "The phrase “or extremely cold” directly defines frigid.",
        correctAnswer: "very cold",
        choices: [
            "hot",
            "dirty",
            "very cold",
            "wide",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The teacher was <u>lenient</u>, kind and forgiving when checking our mistakes. ",
        explanation: "The words “kind and forgiving” explain the meaning of lenient.",
        correctAnswer: "forgiving",
        choices: [
            "strict",
            "angry",
            "forgiving",
            "careless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Unlike his <u>boisterous</u> classmates, Leo remained calm and quiet. ",
        explanation: "The signal word “unlike” shows the opposite of calm and quiet, meaning boisterous is noisy.",
        correctAnswer: "noisy",
        choices: [
            "noisy",
            "shy",
            "sleepy",
            "polite",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Many <u>nocturnal</u> animals, such as owls and bats, are active at night. ",
        explanation: "Examples like owls and bats show that nocturnal means active at night.",
        correctAnswer: "active at night",
        choices: [
            "active in the day",
            "active at night",
            "very large",
            "dangerous",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The child was <u>reluctant</u> to jump into the pool, slowly backing away from the edge. ",
        explanation: "Backing away shows hesitation, helping infer the meaning of reluctant.",
        correctAnswer: "hesitant",
        choices: [
            "excited",
            "willing",
            "hesitant",
            "confident",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The instructions were <u>explicit</u>, meaning they were very clear and detailed. ",
        explanation: "The word “meaning” introduces a direct definition of explicit.",
        correctAnswer: "very clear",
        choices: [
            "confusing",
            "short",
            "unclear",
            "very clear",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The glass vase looked <u>fragile</u>, but it did not break when it fell. ",
        explanation: "The contrast shows fragile means something that breaks easily.",
        correctAnswer: "easily broken",
        choices: [
            "heavy",
            "easily broken",
            "colorful",
            "expensive",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The weather was <u>humid</u>, sticky and damp because of the rain. ",
        explanation: "The words “sticky and damp” describe what humid means.",
        correctAnswer: "sticky",
        choices: [
            "dry",
            "cold",
            "sticky",
            "windy",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Unlike the <u>generous</u> donor, the other man refused to share anything. ",
        explanation: "The contrast shows that generous means willing to give or share.",
        correctAnswer: "kind and giving",
        choices: [
            "selfish",
            "rich",
            "kind and giving",
            "careless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. After running for an hour, the athlete was <u>fatigued</u>, breathing heavily. ",
        explanation: "Heavy breathing after running helps infer that fatigued means tired.",
        correctAnswer: "tired",
        choices: [
            "energized",
            "tired",
            "relaxed",
            "excited",
        ],
        choiceType: 'alpha'
    },
]

const week1SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence. Choose the correct meaning of the underlined word using context clues.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The path was <u>narrow</u>, but unlike the wide road beside it, only one person could pass. ",
        explanation: "The contrast with “wide road” shows that narrow means small in width.",
        correctAnswer: "small in width",
        choices: [
            "long",
            "wide",
            "small in width",
            "dangerous",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The movie was <u>thrilling</u>, exciting and full of surprises. ",
        explanation: "The word “exciting” directly explains the meaning of thrilling.",
        correctAnswer: "exciting",
        choices: [
            "exciting",
            "boring",
            "confusing",
            "slow",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The old man spoke in a <u>feeble</u> voice, barely loud enough to hear. ",
        explanation: "“Barely loud enough to hear” helps infer that feeble means weak.",
        correctAnswer: "weak",
        choices: [
            "strong",
            "angry",
            "weak",
            "fast",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Unlike her <u>timid</u> brother, Anna confidently spoke in front of the class. ",
        explanation: "The signal word “unlike” shows the opposite of confident, meaning timid is shy",
        correctAnswer: "shy",
        choices: [
            "brave",
            "shy",
            "noisy",
            "proud",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The chef prepared a <u>delicious</u> meal, tasty and enjoyable for everyone. ",
        explanation: "The synonym “tasty” explains the meaning of delicious.",
        correctAnswer: "tasty",
        choices: [
            "spicy",
            "broken",
            "expensive",
            "tasty",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The <u>ancient</u> temple, built thousands of years ago, still stands today. ",
        explanation: "The phrase “built thousands of years ago” defines ancient.",
        correctAnswer: "very old",
        choices: [
            "modern",
            "broken",
            "very old",
            "beautiful",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The child was <u>curious</u>, asking many questions about how things worked. ",
        explanation: "Asking many questions shows curiosity or eagerness to know.",
        correctAnswer: "eager to know",
        choices: [
            "tired",
            "eager to know",
            "scared",
            "careless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Unlike the <u>silent</u> library, the cafeteria was loud and noisy. ",
        explanation: "The contrast with “loud and noisy” shows that silent means quiet.",
        correctAnswer: "quiet",
        choices: [
            "quiet",
            "crowded",
            "dark",
            "small",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The students were <u>eager</u> to learn, raising their hands and volunteering answers. ",
        explanation: "Raising hands and volunteering show excitement, explaining eager.",
        correctAnswer: "excited",
        choices: [
            "excited",
            "confused",
            "bored",
            "lazy",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The puppy was <u>playful</u>, running around, jumping, and chasing its tail. ",
        explanation: "The actions described help infer that playful means energetic.",
        correctAnswer: "energetic",
        choices: [
            "sleepy",
            "energetic",
            "angry",
            "weak",
        ],
        choiceType: 'alpha'
    },
]

const week1SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence. Choose the correct meaning of the underlined word using context clues.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The garden was <u>vibrant</u>, full of colorful flowers and green plants.",
        explanation: "The description “full of colorful flowers and green plants” shows vibrant means lively.",
        correctAnswer: "lively",
        choices: [
            "dull",
            "dry",
            "lively",
            "messy",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The student was <u>diligent</u>, completing all her homework carefully and on time.",
        explanation: "Completing tasks carefully and on time shows diligent means hardworking.",
        correctAnswer: "hardworking",
        choices: [
            "hardworking",
            "slow",
            "careless",
            "lazy",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The storm caused <u>immense</u> damage to the village, breaking houses and uprooting trees. ",
        explanation: "“Breaking houses and uprooting trees” indicates immense means huge.",
        correctAnswer: "huge",
        choices: [
            "temporary",
            "huge",
            "small",
            "surprising",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. She was <u>astonished</u> when she saw the magician pull a rabbit out of the hat. ",
        explanation: "Seeing a surprising trick shows astonished means amazed.",
        correctAnswer: "amazed",
        choices: [
            "tired",
            "bored",
            "amazed",
            "angry",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The athlete was <u>agile</u>, quickly dodging opponents and jumping over obstables",
        explanation: "The actions of dodging and jumping show agile means fast and flexible.",
        correctAnswer: "fast and flexible",
        choices: [
            "slow",
            "clumsy",
            "weak",
            "fast and flexible",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The abandoned house looked <u>eerie</u>, with broken windows and strange shadows. ",
        explanation: "“Broken windows and strange shadows” help infer that eerie means scary.",
        correctAnswer: "scary",
        choices: [
            "scary",
            "ordinary",
            "bright",
            "clean",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The teacher praised the student for being <u>courteous</u>, always polite and respectful to everyone. ",
        explanation: "The explanation “always polite and respectful” shows courteous means polite.",
        correctAnswer: "polite",
        choices: [
            "loud",
            "polite",
            "kind",
            "rude",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The river was <u>tranquil</u>, reflecting the trees and sky without a single ripple. ",
        explanation: "“Reflecting the trees and sky without a single ripple” indicates tranquil means calm.",
        correctAnswer: "calm",
        choices: [
            "rough",
            "calm",
            "dirty",
            "wide",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The little boy was <u>mischievous</u>, hiding his sister's toys and playing tricks on her. ",
        explanation: "Playing tricks and hiding toys shows mischievous means naughty.",
        correctAnswer: "naughty",
        choices: [
            "shy",
            "obedient",
            "naughty",
            "tired",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The view from the mountain was breathtaking, with endless valleys and <u>snow-capped peaks</u>. ",
        explanation: "“Endless valleys and snow-capped peaks” show breathtaking means amazing.",
        correctAnswer: "amazing",
        choices: [
            "amazing",
            "ordinary",
            "confusing",
            "small",
        ],
        choiceType: 'alpha'
    },
]

const week1SetD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word from the choices that replaces the weak or vague word in the sentence to make it stronger and more precise.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1.	The halo-halo at the fiesta was <u>very good</u>. ",
        explanation: '“Delicious” is a stronger word than “very good,” giving a clearer idea of how tasty the halo-halo is.',
        correctAnswer: "delicious",
        choices: [
            "okay ",
            "delicious",
            "tasty ",
            "nice",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2.	The jeepney was <u>very crowded</u> this morning. ",
        explanation: '“Packed” is more precise than “very crowded,” describing the jeepney accurately.',
        correctAnswer: "packed",
        choices: [
            "packed",
            "big ",
            "full ",
            "small",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3.	My lola is <u>very nice</u>. ",
        explanation: '“Kindhearted” gives a stronger sense of her character than the vague word “very nice.”',
        correctAnswer: "kindhearted",
        choices: [
            "good ",
            "friendly ",
            "kindhearted",
            "nice",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4.	The basketball court is <u>very big</u>. ",
        explanation: '“Enormous” is stronger and more descriptive than “very big,” painting a clearer picture.',
        correctAnswer: "enormous",
        choices: [
            "big ",
            "wide ",
            "tall ",
            "enormous",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	The street food vendor's fish balls were <u>very tasty</u>. ",
        explanation: '“Delicious” conveys a stronger positive impression than “very tasty,” making the writing more vivid.',
        correctAnswer: "delicious",
        choices: [
            "delicious",
            "bland ",
            "okay ",
            "simple",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.	The fiesta was <u>very fun</u> for the kids.",
        explanation: '“Exciting” gives a stronger and more precise description of the fun experience.',
        correctAnswer: "exciting",
        choices: [
            "boring ",
            "exciting",
            "okay ",
            "good",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	The mango from the market is <u>very juicy</u>. ",
        explanation: '“Succulent” is stronger and more precise, giving a vivid sense of the mango’s juiciness.',
        correctAnswer: "succulent",
        choices: [
            "sour ",
            "sweet ",
            "succulent",
            "nice",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8.	The MRT ride was <u>very slow</u> this morning.",
        explanation: '“Sluggish” is a stronger word than “very slow,” conveying a more precise feeling of delay.',
        correctAnswer: "sluggish",
        choices: [
            "sluggish",
            "fast ",
            "quick ",
            "slow",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9.	The street in Quiapo was <u>very crowded</u> during the weekend market. ",
        explanation: 'Bustling is stronger and more descriptive than “very crowded,” conveying lively and active movement.',
        correctAnswer: "bustling",
        choices: [
            "busy ",
            "bustling",
            "quiet ",
            "empty",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	The afternoon sun in Tagaytay was <u>very hot</u>. ",
        explanation: 'Scorching gives a stronger and more vivid description of intense heat than “very hot.”',
        correctAnswer: "scorching",
        choices: [
            "warm ",
            "cool ",
            "mild ",
            "scorching",
        ],
        choiceType: "alpha"
    },
]

const week1SetE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word from the choices that replaces the weak or vague word in the sentence to make it stronger and more precise.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The chocolate cake at Goldilocks was <u>very good</u>. ",
        explanation: '“Tasty” is stronger than “very good,” giving a clearer sense of the cake\'s flavor.',
        correctAnswer: "tasty",
        choices: [
            "bland",
            "tasty",
            "okay",
            "simple",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The traffic on EDSA was <u>very slow</u> this morning. ",
        explanation: '“Sluggish” is a stronger, more precise word than “very slow,” describing the traffic accurately.',
        correctAnswer: "sluggish",
        choices: [
            "sluggish",
            "fast",
            "quick",
            "smooth",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The scenery at Palawan was <u>very beautiful</u>. ",
        explanation: '“Magnificent” gives a stronger, more vivid description than “very beautiful.”',
        correctAnswer: "magnificent",
        choices: [
            "pretty",
            "magnificent",
            "okay",
            "simple",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The fiesta in San Fernando was <u>very fun</u>. ",
        explanation: '“Exciting” is stronger and more precise than “very fun,” conveying the lively experience.',
        correctAnswer: "exciting",
        choices: [
            "exciting",
            "boring",
            "okay",
            "dull",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The halo-halo at the street stall was <u>very sweet</u>. ",
        explanation: '“luscious” is stronger and more vivid than “very sweet,”.',
        correctAnswer: "luscious",
        choices: [
            "sour",
            "sweet",
            "luscious",
            "mild",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The jeepney ride to Divisoria was <u>very crowded</u>. ",
        explanation: '“Packed” is a precise replacement for “very crowded,” accurately describing the jeepney.',
        correctAnswer: "packed",
        choices: [
            "full",
            "packed",
            "empty",
            "small",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The MRT during rush hour was <u>very hot</u>. ",
        explanation: '“Scorching” is stronger than “very hot,” giving a clearer idea of the intense heat.',
        correctAnswer: "scorching",
        choices: [
            "scorching",
            "mild",
            "warm",
            "cool",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The tarsier at Bohol was <u>very small</u>. ",
        explanation: '“Tiny” is more precise and stronger than “very small,” describing the tarsier accurately.',
        correctAnswer: "tiny",
        choices: [
            "tiny",
            "big",
            "huge",
            "tall",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The streets of Quiapo were <u>very busy</u>. ",
        explanation: '“Bustling” is stronger and more descriptive than “very busy,” showing lively activity.',
        correctAnswer: "bustling",
        choices: [
            "bustling",
            "quiet",
            "empty",
            "crowded",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The church in Intramuros was <u>very old</u>. ",
        explanation: '“Ancient” is a precise and stronger word than “very old,” giving a clearer sense of age.',
        correctAnswer: "ancient",
        choices: [
            "modern",
            "ancient",
            "new",
            "old",
        ],
        choiceType: "alpha"
    },
]

const week2SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word closest in meaning to the underlined word. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1.	“The teacher was very <u>angry</u> when the students ignored the rules.” ",
        explanation: "“Furious” is a stronger synonym for “angry,” showing a higher intensity of emotion.",
        correctAnswer: "furious",
        choices: [
            "annoyed ",
            "furious",
            "calm ",
            "sad",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2.	“Maria felt <u>happy</u> after receiving her exam results.” ",
        explanation: "“Joyful” is a synonym for “happy,” expressing a similar positive emotion.",
        correctAnswer: "joyful",
        choices: [
            "tired",
            "sad ",
            "joyful",
            "bored",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3.	“The residents were <u>excited</u> about the opening of the new community center.” ",
        explanation: "“Thrilled” is a synonym for “excited,” showing strong positive emotion.",
        correctAnswer: "thrilled",
        choices: [
            "thrilled",
            "anxious ",
            "nervous ",
            "relaxed",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4.	“The principal gave a <u>short</u> speech during the program.” ",
        explanation: "“Brief” is a synonym for “short” in terms of duration.",
        correctAnswer: "brief",
        choices: [
            "brief",
            "long ",
            "extended ",
            "tall",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	“Juan is a <u>clever</u> student who always solves problems quickly.” ",
        explanation: "“Smart” is a synonym for “clever,” indicating intelligence.",
        correctAnswer: "smart",
        choices: [
            "slow",
            "lazy ",
            "foolish ",
            "smart",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the word that means the opposite of the underlined word.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6.	“The mayor praised the citizens for their <u>generosity</u>.” ",
        explanation: "“Selfish” is the opposite of “generosity,” indicating unwillingness to give or share.",
        correctAnswer: "selfish",
        choices: [
            "selfish",
            "kind ",
            "helpful ",
            "charitable",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	“The team worked hard to <u>increase</u> sales this month.” ",
        explanation: "“Decrease” is the antonym of “increase,” meaning to reduce.",
        correctAnswer: "decrease",
        choices: [
            "boost ",
            "maintain ",
            "decrease",
            "improve",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8.	“The building is very <u>strong</u> and can withstand typhoons.” ",
        explanation: "“Weak” is the opposite of “strong.”",
        correctAnswer: "weak",
        choices: [
            "weak",
            "powerful ",
            "durable ",
            "sturdy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9.	“The children were <u>noisy</u> during recess.” ",
        explanation: "“Quiet” is the opposite of “noisy.”",
        correctAnswer: "quiet",
        choices: [
            "loud ",
            "quiet",
            "active ",
            "playful",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	“The street was <u>clean</u> after the barangay volunteers finished their work.” ",
        explanation: "“Dirty” is the antonym of “clean.”",
        correctAnswer: "dirty",
        choices: [
            "spotless ",
            "dirty",
            "tidy ",
            "messy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Arrange the words from the least intense to the most intense based on their meaning.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "11. Arrange the feelings of a student after receiving their grades: \n\nhappy, thrilled, content, excited",
        explanation: "Content is the mildest feeling, happy is stronger, excited shows more energy, and thrilled is the strongest emotion.",
        correctAnswer: "3-1-4-2",
        choices: [
            "1 - happy",
            "2 - thrilled",
            "3 - content",
            "4 - excited",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "12. Arrange the heat of the sun in Manila during summer: \n\nwarm, scorching, hot, lukewarm",
        explanation: "Lukewarm is mild, warm is noticeable, hot is stronger, and scorching is extreme.",
        correctAnswer: "4-1-3-2",
        choices: [
            "1 - warm",
            "2 - scorching",
            "3 - hot",
            "4 - lukewarm",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "13. Arrange the crowd's noise during a fiesta: \n\nnoisy, loud, deafening, boisterous",
        explanation: "Noisy is mild, loud is stronger, boisterous shows energetic excitement, and deafening is overwhelming.",
        correctAnswer: "1-2-4-3",
        choices: [
            "1 - noisy",
            "2 - loud",
            "3 - deafening",
            "4 - boisterous",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "14. Arrange the size of mangoes in the market: \n\nsmall, huge, big, gigantic",
        explanation: "Small is the least, big is larger, huge is even bigger, and gigantic is the largest.",
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - small",
            "2 - huge",
            "3 - big",
            "4 - gigantic",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "15. Arrange the level of rain during a typhoon: \n\ndrizzle, heavy, light, torrential",
        explanation: "Drizzle is very mild, light is a little stronger, heavy is intense, and torrential is extreme rain.",
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - drizzle",
            "2 - heavy",
            "3 - light",
            "4 - torrential",
        ],
        choiceType: "numeric"
    },
]

const week2SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word closest in meaning to the underlined word. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The mango was <u>very sweet</u>. ",
        explanation: "sugary is more precise and vivid than “very sweet.”",
        correctAnswer: "sugary",
        choices: [
            "sour ",
            "sugary",
            "bland ",
            "bitter",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The jeepney moved <u>very slowly</u> in the traffic. ",
        explanation: "Sluggishly is a stronger and more descriptive word than “very slowly.”",
        correctAnswer: "sluggishly",
        choices: [
            "slowly ",
            "quickly ",
            "sluggishly",
            "halted",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The classroom was <u>very messy</u> after the activity. ",
        explanation: "Dirty clearly describes the messy state more precisely than “very messy.”",
        correctAnswer: "dirty",
        choices: [
            "dirty",
            "clean ",
            "organized ",
            "spotless",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The sun was <u>very hot</u> at noon in Manila. ",
        explanation: "Scorching gives a stronger and more precise description than “very hot.”",
        correctAnswer: "scorching",
        choices: [
            "scorching",
            "mild ",
            "warm ",
            "cool",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. She felt <u>very nervous</u> before her presentation in class. ",
        explanation: "Anxious precisely conveys strong nervousness.",
        correctAnswer: "anxious",
        choices: [
            "calm ",
            "anxious",
            "relaxed ",
            "sleepy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the word that means the opposite of the underlined word.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The halo-halo was <u>flavorful</u>. ",
        explanation: "Bland is the opposite of delicious (lacking flavor).",
        correctAnswer: "bland",
        choices: [
            "very good ",
            "tasty ",
            "bland",
            "sweet",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The carabao is very <u>strong</u>. ",
        explanation: "Weak is the opposite of strong.",
        correctAnswer: "weak",
        choices: [
            "weak",
            "sturdy ",
            "muscular ",
            "powerful",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The parade was <u>fun</u> to watch. ",
        explanation: "Boring is the opposite of fun.",
        correctAnswer: "boring",
        choices: [
            "exciting ",
            "boring",
            "dull ",
            "ordinary",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The fiesta decorations were very <u>colorful</u>. ",
        explanation: "Dull is the opposite of colorful.",
        correctAnswer: "dull",
        choices: [
            "vibrant ",
            "bright ",
            "pale ",
            "dull",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The teacher is very kind. ",
        explanation: "Cruel is the opposite of kind.",
        correctAnswer: "cruel",
        choices: [
            "cruel",
            "strict ",
            "compassionate ",
            "harsh",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Arrange the words from the least intense to the most intense based on their meaning.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "11. Arrange the excitement of students during Buwan ng Wika:\n\n happy, joyful, ecstatic, content",
        explanation: "Content is calm happiness, happy is more noticeable, joyful shows stronger emotion, ecstatic is the strongest.",
        correctAnswer: "4-1-2-3",
        choices: [
            "1 - happy",
            "2 - joyful",
            "3 - ecstatic",
            "4 - content",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "12. Arrange the anger of a barangay resident about a street repair delay: \n\nannoyed, furious, angry, irritated",
        explanation: "Annoyed is mild, irritated is stronger, angry is more serious, furious is the strongest.",
        correctAnswer: "1-4-3-2",
        choices: [
            "1 - annoyed",
            "2 - furious",
            "3 - angry",
            "4 - irritated",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "13. Arrange the sweetness of Filipino desserts:\n\n sweet, sugary, delicious, mouthwatering",
        explanation: "Sweet is general, sugary is stronger, delicious implies tastiness, mouthwatering is the most intense reaction.",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - sweet",
            "2 - sugary",
            "3 - delicious",
            "4 - mouthwatering",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "14. Arrange the size of fish in Laguna de Bay:\n\n small, medium, large, gigantic",
        explanation: "Small is the least, medium is bigger, large is bigger still, gigantic is the largest.",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - small",
            "2 - medium",
            "3 - large",
            "4 - gigantic",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "15. Arrange the speed of jeepneys in EDSA traffic:\n\n slow, fast, speedy, rapid",
        explanation: "Slow is least, fast is moderate, speedy is faster, rapid is the fastest.",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - slow",
            "2 - fast",
            "3 - speedy",
            "4 - rapid",
        ],
        choiceType: "numeric"
    },
]

const week2SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word closest in meaning to the underlined word. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The bibingka was very <u>soft</u>. ",
        explanation: "“Tender” is more precise than “very soft,” describing the texture clearly.",
        correctAnswer: "tender",
        choices: [
            "hard",
            "tender",
            "firm",
            "crunchy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The jeepney moved very <u>slowly</u> in Binondo traffic. ",
        explanation: "“Sluggishly” conveys the slow movement more vividly than “very slowly.”",
        correctAnswer: "sluggishly",
        choices: [
            "halted",
            "quickly",
            "hastily",
            "sluggishly",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The classroom was very <u>noisy</u> during recess. ",
        explanation: "“Loud” precisely describes the noisy classroom.",
        correctAnswer: "loud",
        choices: [
            "calm",
            "quiet",
            "loud",
            "silent",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The afternoon sun in Baguio was very <u>cold</u>. ",
        explanation: "“Chilly” is a more precise and vivid description than “very cold.”",
        correctAnswer: "chilly",
        choices: [
            "chilly",
            "warm",
            "hot",
            "mild",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. She felt very <u>nervous</u> before singing in the Barrio Fiesta. ",
        explanation: "“Anxious” conveys nervousness more strongly and precisely.",
        correctAnswer: "anxious",
        choices: [
            "calm",
            "anxious",
            "relaxed",
            "sleepy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the word that means the opposite of the underlined word.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The river water was <u>dirty</u>. ",
        explanation: "Clear is the opposite of dirty.",
        correctAnswer: "clear",
        choices: [
            "muddy ",
            "clear",
            "polluted ",
            "foul",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The student felt very <u>nervous</u> before the exam. ",
        explanation: "Confident is the opposite of nervous.",
        correctAnswer: "confident",
        choices: [
            "anxious ",
            "confident",
            "worried ",
            "uneasy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The box was <u>heavy</u> to carry. ",
        explanation: "Light is the opposite of heavy.",
        correctAnswer: "light",
        choices: [
            "light",
            "massive ",
            "weighty ",
            "dense",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The lecture was very <u>boring</u>. ",
        explanation: "Exciting is the opposite of boring.",
        correctAnswer: "exciting",
        choices: [
            "dull",
            "exciting",
            "tiresome",
            "monotonous",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The bamboo bridge was <u>weak</u>. ",
        explanation: "Sturdy is the opposite of weak.",
        correctAnswer: "sturdy",
        choices: [
            "fragile ",
            "flimsy ",
            "sturdy",
            "brittle",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Arrange the words from the least intense to the most intense based on their meaning.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "11. Arrange the excitement of students during Sinulog:\n\n thrilled, calm, ecstatic, happy",
        explanation: "Calm is mild happiness, happy is noticeable, thrilled is stronger, ecstatic is the strongest.",
        correctAnswer: "2-4-1-3",
        choices: [
            "1 - thrilled",
            "2 - calm",
            "3 - ecstatic",
            "4 - happy",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "12. Arrange the spiciness of Bicolano dishes:\n\n fiery, mild, hot, spicy",
        explanation: "Mild is the least spicy, spicy is moderate, hot is stronger, fiery is the most intense.",
        correctAnswer: "2-4-3-1",
        choices: [
            "1 - fiery",
            "2 - mild",
            "3 - hot",
            "4 - spicy",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "13. Arrange the happiness of kids at Enchanted Kingdom:\n\n cheerful, ecstatic, joyful, content",
        explanation: "Content is mild, cheerful is stronger, joyful is more intense, ecstatic is the most intense.",
        correctAnswer: "4-1-3-2",
        choices: [
            "1 - cheerful",
            "2 - ecstatic",
            "3 - joyful",
            "4 - content",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "14. Arrange the size of fish caught in Palawan:\n\n gigantic, small, large, medium",
        explanation: "Small is the smallest, medium is bigger, large is bigger still, gigantic is the largest.",
        correctAnswer: "2-4-3-1",
        choices: [
            "1 - gigantic",
            "2 - small",
            "3 - large",
            "4 - medium",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "15. Arrange the speed of jeepneys in Manila streets:\n\n rapid, slow, brisk, speedy",
        explanation: "Slow is least, brisk is moderate, speedy is faster, rapid is the fastest.",
        correctAnswer: "2-3-4-1",
        choices: [
            "1 - rapid",
            "2 - slow",
            "3 - brisk",
            "4 - speedy",
        ],
        choiceType: "numeric"
    },
]

const week3SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully and choose the correct letter.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The heavy traffic in Manila will ___ our travel time significantly. ",
        explanation: "Affect is a verb meaning to influence. Traffic influences travel time.",
        correctAnswer: "affect",
        choices: [
            "affect",
            "effect",
            "accept",
            "except",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The new policy had a positive ___ on cleanliness in Luneta Park. ",
        explanation: "Effect is a noun meaning the result of something. The policy produced a result.",
        correctAnswer: "effect",
        choices: [
            "effect",
            "affect ",
            "principle ",
            "principal",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. I would like to ___ your kind offer to help with the outreach program. ",
        explanation: "Accept means to agree to receive something.",
        correctAnswer: "accept",
        choices: [
            "accept",
            "except ",
            "affect ",
            "effect",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. All the barangay officials were present ___ Mayor Santos. ",
        explanation: "Except means excluding someone. The mayor is not included in this case.",
        correctAnswer: "except",
        choices: [
            "accept ",
            "affect",
            "except",
            "effect",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Honesty is a fundamental ___ in Filipino culture. ",
        explanation: "Principle refers to a basic rule or belief.",
        correctAnswer: "principle",
        choices: [
            "principal ",
            "principle",
            "effect ",
            "affect",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Please do not write with a pen on the ___; use it only for letters. ",
        explanation: "Stationery refers to writing materials.",
        correctAnswer: "stationery",
        choices: [
            "stationery",
            "stationary ",
            "desert ",
            "dessert",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The car remained ___ while the traffic light was red. ",
        explanation: "Stationary means not moving.",
        correctAnswer: "stationary",
        choices: [
            "stationery",
            "desert",
            "dessert ",
            "stationary",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. I love mango ___ after lunch; it's my favorite treat. ",
        explanation: "Dessert refers to a sweet food eaten after a meal.",
        correctAnswer: "dessert",
        choices: [
            "dessert",
            "desert ",
            "stationary ",
            "stationery",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. ___ house is bigger than  across the street. ",
        explanation: "Their is the possessive form showing ownership.",
        correctAnswer: "Their",
        choices: [
            "There ",
            "They're ",
            "Their",
            "They",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. They couldn't decide ___ to go to the park or stay home. ",
        explanation: "Whether is used to express a choice or doubt.",
        correctAnswer: "whether",
        choices: [
            "weather ",
            "whether",
            "weither",
            "wether",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which sentence avoids unnecessary repetition? ",
        explanation: "The word again is unnecessary because announced already means the information was given.",
        correctAnswer: "he barangay captain announced the news.",
        choices: [
            "he barangay captain announced the news.",
            "he barangay captain announced the same news again.",
            "he barangay captain announced again the news. ",
            "he barangay captain announced the news again.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which sentence is clear and not redundant? ",
        explanation: "Ahead and in advance have the same meaning, so only one should be used.",
        correctAnswer: "The students planned in advance for Buwan ng Wika.",
        choices: [
            "The students planned ahead in advance for Buwan ng Wika. ",
            "The students planned in advance for Buwan ng Wika.",
            "The students planned ahead in advance early. ",
            "The students planned in advance ahead for Buwan ng Wika.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence removes repetition? ",
        explanation: "The verb return already means “go back,” so back and again are redundant.",
        correctAnswer: "She returned home after school.",
        choices: [
            "She returned back home after school. ",
            "She returned again back home after school. ",
            "She returned home after school.",
            "She returned back again home after school.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which sentence is written correctly without redundancy? ",
        explanation: "The verb saw already implies using the eyes; additional phrases repeat the same idea.",
        correctAnswer: "We saw the town fiesta with our eyes.",
        choices: [
            "We personally saw the town fiesta with our own eyes. ",
            "We saw the town fiesta with our own eyes personally. ",
            "We saw the town fiesta with our eyes personally. ",
            "We saw the town fiesta with our eyes.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which sentence uses words efficiently? ",
        explanation: "A gift is already free, so adding free or freely is unnecessary.",
        correctAnswer: "The teacher gave a gift to the honor student.",
        choices: [
            "The teacher made a free gift for the honor student. ",
            "The teacher gave a gift to the honor student.",
            "The teacher gave a free gift to the honor student. ",
            "The teacher gave a gift freely to the honor student.",
        ],
        choiceType: "alpha"
    },
]

const week3SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully and choose the correct letter.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The principal asked the students to be ____ in submitting their requirements. ",
        explanation: "Punctilious means being careful about details, which fits submitting requirements.",
        correctAnswer: "punctilious",
        choices: [
            "punctual ",
            "punctilious",
            "punctuality ",
            "puncture",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. He prefers to read books ____ watch movies. ",
        explanation: "Than is used for comparisons.",
        correctAnswer: "than",
        choices: [
            "then ",
            "those ",
            "that",
            "than",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The chef added a pinch of salt to enhance the ____ of the dish. ",
        explanation: "Flavor refers to the taste and aroma of the dish.",
        correctAnswer: "flavor",
        choices: [
            "flavor",
            "savor ",
            "taste ",
            "smell",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Please turn off your phone so you don't ____ the lecture. ",
        explanation: "Distract means to divert attention.",
        correctAnswer: "distract",
        choices: [
            "disturb ",
            "distract",
            "distress ",
            "distressful",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The hikers reached the summit, ____ they felt a great sense of achievement. ",
        explanation: "Which adds extra information about the summit.",
        correctAnswer: "which",
        choices: [
            "who ",
            "that ",
            "which",
            "whom",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. I need to ____ my essay before submitting it. ",
        explanation: "Proofread means to check the essay for errors.",
        correctAnswer: "proofread",
        choices: [
            "proof ",
            "proofread",
            "proofing ",
            "proofreader",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The company's rules are strict, ____ many employees find them challenging. ",
        explanation: "In this sentence, \"which\" acts as a relative pronoun that refers back to the entire preceding clause (\"The company\'s rules are strict\").",
        correctAnswer: "which",
        choices: [
            "whom ",
            "which",
            "that ",
            "whose",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Please ____ the instructions carefully before starting the experiment. ",
        explanation: "Follow means to act according to the instructions.",
        correctAnswer: "follow",
        choices: [
            "follow",
            "obey ",
            "adhere ",
            "respect",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. I need to ____ my old clothes to charity. ",
        explanation: "Donate means to give old clothes to charity.",
        correctAnswer: "donate",
        choices: [
            "donate",
            "denotate ",
            "devote ",
            "denote",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. She was nervous during the interview, ____ she answered all the questions confidently. ",
        explanation: "Although shows contrast between being nervous and answering confidently.",
        correctAnswer: "although",
        choices: [
            "unless ",
            "because ",
            "therefore ",
            "although",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which sentence avoids redundancy?",
        explanation: "Repeated already means “said again,” so adding again or once more is unnecessary.",
        correctAnswer: "He repeated the instructions to the class.",
        choices: [
            "He repeated the instructions again to the class.",
            "He repeated again the instructions to the class.",
            "He repeated the instructions to the class.",
            "He repeated the instructions again once more to the class.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which sentence is clear and concise?",
        explanation: "Collaborated already implies working together.",
        correctAnswer: "The students collaborated on the project.",
        choices: [
            "The students collaborated together on the project.",
            "The students collaborated on the project together.",
            "The students collaborated on the project.",
            "The students collaborated together jointly on the project.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence removes unnecessary repetition?",
        explanation: "Whispered already suggests speaking quietly.",
        correctAnswer: "She whispered during the meeting.",
        choices: [
            "She whispered quietly during the meeting.",
            "She whispered in a quiet manner during the meeting.",
            "She whispered quietly in a low voice during the meeting.",
            "She whispered during the meeting.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which sentence is written without redundancy?",
        explanation: "Summarized already means making something brief; adding shortly is repetitive.",
        correctAnswer: "The principal briefly summarized the main points.",
        choices: [
            "The principal summarized briefly the main points.",
            "The principal briefly summarized the main points.",
            "The principal summarized the main points briefly and shortly.",
            "The principal summarized briefly and shortly the main points.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which sentence uses words efficiently?",
        explanation: "Meet already implies coming together, so extra words are unnecessary.",
        correctAnswer: "We will meet at the school gate.",
        choices: [
            "We will meet together at the school gate.",
            "We will meet each other together at the school gate.",
            "We will meet at the school gate together.",
            "We will meet at the school gate.",
        ],
        choiceType: "alpha"
    },
]

const week3SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully and choose the correct letter.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. She was nervous during the exam, ____ she performed very well. ",
        explanation: "“Although” shows contrast between being nervous and performing well.",
        correctAnswer: "although",
        choices: [
            "although",
            "because ",
            "therefore ",
            "unless",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. I will call you tomorrow, ____ I finish my homework first. ",
        explanation: "“After” indicates sequence, showing the call will happen once homework is done.",
        correctAnswer: "after",
        choices: [
            "after",
            "although ",
            "because ",
            "unless",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The teacher asked the students to be ____ in submitting their projects. ",
        explanation: "“Punctilious” means paying careful attention to rules or details.",
        correctAnswer: "punctilious",
        choices: [
            "punctual ",
            "careful ",
            "timely ",
            "punctilious",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The scientist observed the cells carefully, noting their ____ under the microscope. ",
        explanation: "“Behavior” is the correct scientific term for the actions of cells.",
        correctAnswer: "behavior",
        choices: [
            "behavior",
            "conduct ",
            "manner ",
            "demeanor",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. We were amazed by the fireworks, ____ the music added to the excitement. ",
        explanation: "Furthermore means \"in addition.\" It connects two positive ideas: the fireworks were amazing + the music was exciting.",
        correctAnswer: "furthermore",
        choices: [
            "however ",
            "although ",
            "furthermore",
            "otherwise",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. I always ____ my keys; I can never find them. ",
        explanation: "“Lose” means to misplace something.",
        correctAnswer: "lose",
        choices: [
            "lose",
            "loose ",
            "loss ",
            "lost",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Be careful with your shoelaces; they are too _______",
        explanation: "“Loose” means not tight, which fits the context.",
        correctAnswer: "loose",
        choices: [
            "loose",
            "lose ",
            "loss ",
            "lost",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The fisherman caught ____ large fish near the shore. ",
        explanation: "“Two” indicates the number of fish caught.",
        correctAnswer: "two",
        choices: [
            "to",
            "two",
            "too",
            "tow",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Please read the instructions ____ so everyone can understand. ",
        explanation: "“Aloud” means spoken so that everyone can hear.",
        correctAnswer: "aloud",
        choices: [
            "aloud",
            "allowed ",
            "alloud ",
            "alowed",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. All the students were present ____ one. ",
        explanation: "“Except” is used to show exclusion.",
        correctAnswer: "except",
        choices: [
            "except",
            "accept ",
            "excepted ",
            "acceptive",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which sentence avoids unnecessary repetition? ",
        explanation: "“Returned” already implies going back, so “back” or “again” is redundant.",
        correctAnswer: "She returned home after school. ",
        choices: [
            "She returned back home after school. ",
            "She returned home after school. ",
            "She returned again home after school. ",
            "She returned back again home after school.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Which sentence is clear and concise? ",
        explanation: "“Collaborated” already implies working together; extra words are redundant.",
        correctAnswer: "The students collaborated on the project. ",
        choices: [
            "The students collaborated together on the project. ",
            "The students collaborated on the project. ",
            "The students collaborated on the project together. ",
            "The students collaborated together jointly on the project.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence removes unnecessary repetition? ",
        explanation: "“Saw” already implies using eyes, so extra phrases are redundant.",
        correctAnswer: "We saw the event with our eyes.",
        choices: [
            "We personally saw the event with our own eyes. ",
            "We saw the event personally. ",
            "We saw the event with our own eyes personally. ",
            "We saw the event with our eyes.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which sentence uses words efficiently? ",
        explanation: "A gift is already free, so “free” or “freely” is unnecessary.",
        correctAnswer: "The teacher gave a gift to the honor student. ",
        choices: [
            "The teacher gave a free gift to the honor student. ",
            "The teacher gave a gift to the honor student. ",
            "The teacher made a free gift for the honor student. ",
            "The teacher gave a gift freely to the honor student.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which sentence avoids redundancy? ",
        explanation: "“Repeated” already means said again, so adding “again” is redundant.",
        correctAnswer: "He repeated the instructions to the class. ",
        choices: [
            "He repeated the instructions again to the class. ",
            "He repeated the instructions to the class. ",
            "He repeated again the instructions to the class. ",
            "He repeated the instructions again once more to the class.",
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
    timeLimit: 20
}

export const VOCAB_PRACTICE: PracticeQuiz = {
    week1: [
        {
            lessonNumber: 1,
            title: "Context Clues",
            sets: [
                {
                    label: "Vocabulary Practice W1 Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week1SetA
                    }
                },
                {
                    label: "Vocabulary Practice W1 Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week1SetB
                    }
                },
                {
                    label: "Vocabulary Practice W1 Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week1SetC
                    }
                },
            ]
        },
        {
            lessonNumber: 2,
            title: "Choosing Stronger Words",
            sets: [
                {
                    label: "Vocabulary Practice W1 Set D",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week1SetD
                    }
                },
                {
                    label: "Vocabulary Practice W1 Set E",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week1SetE
                    }
                }
            ]
        }
    ],
    week2: [
        {
            lessonNumber: 3,
            title: "Synonyms & Antonyms ",
            sets: [
                {
                    label: "Vocabulary Practice W2 Set A",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Read the instructions clearly and select an answer within 20 seconds",
                        questions: week2SetA
                    }
                },
                {
                    label: "Vocabulary Practice W2 Set B",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Read the instructions clearly and select an answer within 20 seconds",
                        questions: week2SetB
                    }
                },
                {
                    label: "Vocabulary Practice W2 Set C",
                    metadata: week2Metadata,
                    set: {
                        instruction: "Read the instructions clearly and select an answer within 20 seconds",
                        questions: week2SetC
                    }
                },
            ]
        }
    ],
    week3: [
        {
            lessonNumber: 4,
            title: "Misused Words, Homophones, and Redundancy",
            sets: [
                {
                    label: "Vocabulary Practice W2 Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week3SetA
                    }
                },
                {
                    label: "Vocabulary Practice W2 Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week3SetB
                    }
                },
                {
                    label: "Vocabulary Practice W2 Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Select the correct answer within 15 seconds",
                        questions: week3SetC
                    }
                },
            ]
        }
    ]
}
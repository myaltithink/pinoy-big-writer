import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word that best fits the context and completes the sentence accurately.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The mayor's proposal aims to _________ the city's transportation system by adding eco-friendly buses. ",
        explanation: '“Transform” means to significantly change or improve a system. The other options suggest harm or neglect.',
        correctAnswer: "transform",
        choices: [
            "transform",
            "damage",
            "abandon",
            "overlook",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The principal asked the student leaders to _________ the concerns raised during the PTA meeting. ",
        explanation: '“Address” means to deal with or respond to an issue directly. The other options imply avoidance or misrepresentation.',
        correctAnswer: "address",
        choices: [
            "dismiss",
            "conceal",
            "address",
            "distort",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Many residents were forced to _________ after the floodwaters reached chest level. ",
        explanation: '“Evacuate” means to leave an area due to danger. The other choices do not imply urgency or safety.',
        correctAnswer: "evacuate",
        choices: [
            "linger",
            "settle",
            "evacuate",
            "wander",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The science team worked overnight to _________ a solution for the water filtration problem. ",
        explanation: '“Devise” means to plan or invent a solution. The other options contradict problem-solving.',
        correctAnswer: "devise",
        choices: [
            "abandon",
            "devise",
            "imitate",
            "delay",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The guidance counselor encouraged students to _________ stress through healthy hobbies. ",
        explanation: '“Manage” means to cope with or control effectively. The other options worsen or avoid stress.',
        correctAnswer: "manage",
        choices: [
            "manage",
            "provoke",
            "intensify",
            "ignore",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The documentary aimed to _________ the struggles of farmers during extreme drought. ",
        explanation: '“Portray” means to depict accurately. The other choices suggest hiding or misrepresenting reality.',
        correctAnswer: "portray",
        choices: [
            "obscure",
            "portray",
            "distort",
            "trivialize",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. To avoid misinformation, the speaker should _________ his statements with credible sources. ",
        explanation: '“Substantiate” means to support claims with evidence. The other options undermine credibility.',
        correctAnswer: "substantiate",
        choices: [
            "decorate",
            "wewaken",
            "contradict",
            "substantiate",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. During the youth forum, participants must _________ their proposals clearly and confidently. ",
        explanation: '“Articulate” means to express ideas clearly and effectively.',
        correctAnswer: "articulate",
        choices: [
            "confuse",
            "conceal",
            "articulate",
            "mumble",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The LGU launched a project to _________ the cleanliness of rivers across the province. ",
        explanation: '“Maintain” means to keep in good condition. The other options suggest harm or neglect.',
        correctAnswer: "maintain",
        choices: [
            "damage",
            "maintain",
            "contaminate",
            "disregard",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The new policy seeks to _________ unnecessary expenses in government offices. ",
        explanation: '“Minimize” means to reduce to the lowest possible level.',
        correctAnswer: "minimize",
        choices: [
            "infalte",
            "justify",
            "expand",
            "minimize",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each group of words carefully. Arrange them in order from the weakest to the strongest based on the intensity of their meaning.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "1. Arrange the words according to the intensity of anger: \n\nfurious, annoyed, enraged, irritated",
        explanation: '“Annoyed” is mild, “irritated” is slightly stronger, “furious” shows extreme anger, “enraged” is the strongest.',
        correctAnswer: "2-4-1-3",
        choices: [
            "1 - furious",
            "2 - annoyed",
            "3 - enraged",
            "4 - iritated",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "2. Arrange the words for excitement: \n\ncurious, thrilled, interested, fascinated",
        explanation: '“Interested” is mild, “curious” is slightly stronger, “fascinated” is deeper, “thrilled” is the strongest feeling of excitement.',
        correctAnswer: "3-1-4-2",
        choices: [
            "1 - curious",
            "2 - thrilled",
            "3 - interested",
            "4 - facinated",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "3.	Arrange the words for fear: \n\nterrified, uneasy, anxious, nervous",
        explanation: '“Uneasy” is mild, “nervous” stronger, “anxious” deeper worry, “terrified” is extreme fear.',
        correctAnswer: "2-4-3-1",
        choices: [
            "1 - terrified",
            "2 - uneasy",
            "3 - anxious",
            "4 - nervous",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "4. Arrange the words for sadness:\n\n gloomy, devastated, sorrowful, unhappy",
        explanation: '“Unhappy” is mild, “gloomy” stronger, “sorrowful” deeper, “devastated” is the strongest sadness.',
        correctAnswer: "4-1-3-2",
        choices: [
            "1 - gloomy",
            "2 - devastated",
            "3 - sorrowful",
            "4 - unhappy",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.WordLevel,
        question: "5. Arrange the words for surprise:\n\n astonished, shocked, amazed, startled",
        explanation: '“Startled” is mild, “amazed” stronger, “astonished” deeper, “shocked” is extreme.',
        correctAnswer: "4-3-1-2",
        choices: [
            "1 - astonished",
            "2 - shocked",
            "3 - amazed",
            "4 - startled",
        ],
        choiceType: "numeric"
    },
    {
        type: QuestionType.Direction,
        direction: "Look carefully at the scrambled letters and use the provided hint or meaning to determine the correct word. Click the letters in the proper sequence to complete the word accurately.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.LetterOrder,
        question: "6. I-O-U-G-S-B-U-A-M \n\nHint: unclear; has more than one meaning ",
        explanation: 'Means something open to several interpretations.',
        correctAnswer: "Ambiguous",
        choices: [
            "I",
            "O",
            "U",
            "G",
            "S",
            "B",
            "U",
            "A",
            "M",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "7. I-T-C-E-U-A-A-L-R-T  \n\nHint: able to express ideas clearly",
        explanation: 'Describes someone who speaks or writes well.',
        correctAnswer: "Articulate",
        choices: [
            "I",
            "T",
            "C",
            "E",
            "U",
            "A",
            "A",
            "L",
            "R",
            "T",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "8. H-O-C-T-R-N-E-E \n\nHint: logically connected",
        explanation: 'Means clear and easy to understand.',
        correctAnswer: "Coherent",
        choices: [
            "H",
            "O",
            "C",
            "T",
            "R",
            "N",
            "E",
            "E", 
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "9. G-L-I-T-I-N-D-E  \n\nHint: hardworking",
        explanation: 'Someone who works carefully and steadily.',
        correctAnswer: "Diligent",
        choices: [
            "G",
            "L",
            "I",
            "T",
            "I",
            "N",
            "D",
            "E", 
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "A-A-L-T-E-B-R-E-O \n\nHint: detailed; carefully arranged ",
        explanation: 'Means full of detail or complexity.',
        correctAnswer: "Elaborate",
        choices: [
            "A",
            "A",
            "L",
            "T",
            "E",
            "B",
            "R",
            "E",
            "O",
        ],
        choiceType: "none"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Look carefully at the scrambled letters and use the provided hint or meaning to determine the correct word. Click the letters in the proper sequence to complete the word accurately.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.LetterOrder,
        question: "1. C-N-O-C-I-P-U-S-O-U \n\nHint: easily noticed",
        explanation: 'Something that stands out or attracts attention.',
        correctAnswer: "Conspicuous",
        choices: [
            "C",
            "N",
            "O",
            "C",
            "I",
            "P",
            "U",
            "S",
            "O",
            "U",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "2. D-I-L-G-I-E-N-T \n\nHint: hardworking ",
        explanation: 'Shows steady, careful, and persistent effort.',
        correctAnswer: "Diligent",
        choices: [
            "D",
            "I",
            "L",
            "G",
            "I",
            "E",
            "N",
            "T",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "3. R-E-L-U-S-I-V-E \n\nHint: hard to catch ",
        explanation: 'Difficult to find, understand, or achieve.',
        correctAnswer: "Elusive",
        choices: [
            "R",
            "E",
            "L",
            "U",
            "S",
            "I",
            "V",
            "E",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "4. T-U-T-R-A-L-I-C-E-A \n\nHint: explain clearly ",
        explanation: 'Articulate',
        correctAnswer: "Able to express ideas clearly in words.",
        choices: [
            "T",
            "U",
            "T",
            "R",
            "A",
            "L",
            "I",
            "C",
            "E",
            "A",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "5. T-E-M-I-U-C-L-U-O-S \n\nHint: very careful, precise ",
        explanation: 'Meticulous',
        correctAnswer: "Extremely careful about details.",
        choices: [
            "T",
            "E",
            "M",
            "I",
            "U",
            "C",
            "L",
            "U",
            "O",
            "S",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each group of words carefully. Arrange them in order from the weakest to the strongest based on the intensity of their meaning.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "6. Arrange the words for happiness: \n\n pleased, ecstatic, content, delighted",
        explanation: '“Content” is mild, “pleased” stronger, “delighted” deeper, “ecstatic” strongest.',
        correctAnswer: "3-1-4-2",
        choices: [
            "1 - pleased",
            "2 - ecstatic",
            "3 - content",
            "4 - delighted",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "7. Arrange the words for confusion:\n\n baffled, puzzled, bewildered, perplexed, ",
        explanation: '“Puzzled” mild confusion, “baffled” stronger, “perplexed” deeper, “bewildered” most intense.',
        correctAnswer: "2-1-4-3",
        choices: [
            "1 - baffled",
            "2 - puzzled",
            "3 - bewildered",
            "4 - perplexed",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "8. Arrange the words for tiredness:\n\n fatigued, weary, drowsy, exhausted",
        explanation: '“Drowsy” is mild, “weary” stronger, “fatigued” deeper, “exhausted” strongest.',
        correctAnswer: "3-2-1-4",
        choices: [
            "1 - fatigued",
            "2 - weary",
            "3 - drowsy",
            "4 - exhausted",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "9. Arrange the words for love / liking:\n\n fond, enamored, adoring, affectionate",
        explanation: '“Fond” is mild, “affectionate” stronger, “enamored” deeper, “adoring” strongest.',
        correctAnswer: "1-4-2-3",
        choices: [
            "1 - fond",
            "2 - enamored",
            "3 - adoring",
            "4 - affectionate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "10. Arrange the words for criticism:\n\n censure, criticize, condemn, disapprove ",
        explanation: '“Disapprove” mild, “criticize” stronger, “censure” deeper, “condemn” strongest.',
        correctAnswer: "4-2-1-3",
        choices: [
            "1 - censure",
            "2 - criticize",
            "3 - condemn",
            "4 - disapprove",
        ],
        choiceType: "none"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The senator's veiled remarks seemed intended to (placate / provoke / incite) discontent among constituents without openly criticizing the administration.",
        explanation: '“Provoke” fits subtle stimulation of discontent. “Incite” suggests open urging to action, while “placate” means to calm.',
        correctAnswer: "provoke",
        choices: [
            "placate",
            "provoke",
            "incite",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The local government finally (dismissed / conceded / acknowledged) the persistent flooding issues in low-lying barangays after repeated citizen complaints.",
        explanation: '“Acknowledge” means to recognize the existence of a problem. “Concede” implies reluctant surrender, and “dismiss” means to reject.',
        correctAnswer: "acknowledged",
        choices: [
            "dismissed",
            "conceded",
            "acknowledged", 
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Completing the cultural festival preparations gave the coordinator a profound sense of (relief / fulfillment / pleasure) after months of organizing.",
        explanation: '“Fulfillment” reflects deep satisfaction from achievement. “Relief” focuses on stress ending; “pleasure” is more temporary.',
        correctAnswer: "fulfillment",
        choices: [
            "relief",
            "fulfillment",
            "pleasure", 
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. During the press conference, the mayor carefully (endorsed / authorized / affirmed) the new disaster preparedness plan without committing resources immediately.",
        explanation: '“Affirmed” indicates verbal confirmation without concrete action. “Endorsed” implies stronger backing; “authorized” implies formal approval.',
        correctAnswer: "affirmed",
        choices: [
            "endorsed",
            "authorized",
            "affirmed", 
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5.	The heritage conservation group criticized the developers for (undermining/ overlooking / damaging  ) the historic value of old Intramuros buildings.",
        explanation: '“Undermining” suggests weakening value indirectly. “Overlooking” implies neglect, while “damaging” implies direct physical harm.',
        correctAnswer: "undermining",
        choices: [
            "undermining",
            "overlooking",
            "damaging", 
        ],
        choiceType: "none",
    },
    {
        type: QuestionType.Transitional,
        question: "6. After climbing Taal Volcano, she felt _____, yet the street performer executed a clever _____ that amazed the crowd. ",
        explanation: '“Faint” means weak or dizzy, while “feint” is a deceptive move, often in performance or combat.',
        correctAnswer: "faint-feint",
        choices: [
            "feint",
            "feign",
            "font",
            "faint",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "7. The mayor observed the soldier's steady _____ during the parade, while the barangay tanod unlocked the school's main _____. ",
        explanation: '“Gait” is the way someone walks, and “gate” is a movable barrier at an entrance.',
        correctAnswer: "gait-gate",
        choices: [
            "gait",
            "grate",
            "gate",
            "get",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "8. She added _____ to the bibingka batter, unaware that the strong river _____ would delay the delivery of the festival supplies. ",
        explanation: '“Currant” is a type of fruit, while “current” refers to the flow of water.',
        correctAnswer: "currant-current",
        choices: [
            "cursive",
            "curry",
            "current",
            "currant",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "9. The activist tried to _____ the crowd during the rally, but the elder’s calm _____ prevented chaos in the plaza. ",
        explanation: '“Incite” means to provoke action, while “insight” is understanding or wisdom.',
        correctAnswer: "incite-insight",
        choices: [
            "insight",
            "incite",
            "incite",
            "invite",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "10.	They decorated the church _____ for the wedding, while the fashion designer had to quickly _____ the bride’s gown before the ceremony. ",
        explanation: '“Altar” is the platform in a church, while “alter” means to change or modify.',
        correctAnswer: "altar-alter",
        choices: [
            "altar",
            "alert",
            "alter",
            "alliter",
        ],
        choiceType: "none",
        transitions: 2
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "1. The television network had to _____ the politically sensitive scene, but the smoke _____ in the kitchen still went off during the fiesta preparations. ",
        explanation: '“Censor” refers to suppressing content, while “sensor” is a device detecting changes (like smoke).',
        correctAnswer: "censor-sensor",
        choices: [
            "sensor",
            "censure",
            "censor",
            "center",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "2. The farmer rushed to _____ his trapped carabao, while his neighbor stacked the last _____ of rice straw under the scorching sun. ",
        explanation: '“Bail” means to release or free, and “bale” is a bundle of material like rice straw.',
        correctAnswer: "bail-bale",
        choices: [
            "bale",
            "bail",
            "ball",
            "bell",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "3. The guidance counselor tried to _____ the students on which senior high strand to choose, but her best piece of _____ was to follow their true interests. ",
        explanation: '“Advise” is a verb meaning to give guidance, while “advice” is a noun referring to the guidance itself.',
        correctAnswer: "advise-advice",
        choices: [
            "advise",
            "advisee",
            "advisor",
            "advice",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "4. The politician's speech seemed _____ to the attentive crowd, yet the nurse noticed a swollen _____ in his hand during the health inspection. ",
        explanation: '“Vain” means ineffective or futile, while “vein” is a blood vessel.',
        correctAnswer: "vain-vein",
        choices: [
            "vein",
            "vain",
            "vane",
            "vend",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "5. While cooking sinigang, she chopped a _____ for the broth, but the plumber had to fix a sudden _____ in the kitchen faucet, so she had to stop cooking for a while.",
        explanation: '“Leek” is a vegetable, while “leak” is an unwanted escape of liquid.',
        correctAnswer: "leek-leak",
        choices: [
            "leeky",
            "leek",
            "leak",
            "leakey",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The archaeologists were excited to (reveal / exhume / uncover / expose) ancient artifacts in Ticao Island.",
        explanation: '“Uncover” implies bringing to light something hidden, more precise than “excavate” (physical digging) or “reveal” (general disclosure).',
        correctAnswer: "uncover",
        choices: [
            "reveal",
            "exhume",
            "uncover",
            "expose",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The public health campaign aimed to (abate / curtail / restrict / diminish) the spread of dengue in Metro Manila.",
        explanation: '“Curtail” emphasizes actively reducing or controlling a negative phenomenon, more precise than “limit” or “restrict.”',
        correctAnswer: "curtail",
        choices: [
            "abate",
            "curtail",
            "restrict",
            "diminish",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The heritage society criticized the developers for (defiling / profaning / desecrating / violating) old churches in Vigan.",
        explanation: '“Desecrating” implies disrespectful violation of something sacred or historically valuable, stronger than “violating” or “defiling.”',
        correctAnswer: "desecrating",
        choices: [
            "defiling",
            "profaning",
            "desecrating",
            "violating",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The regional director's statement was meant to (invigorate / galvanize / motivate / stimulate) barangay officials to improve disaster preparedness.",
        explanation: '“Galvanize” implies spurring into immediate and energetic action, more precise and forceful than “inspire” or “motivate.”',
        correctAnswer: "galvanize",
        choices: [
            "invigorate",
            "galvanize",
            "motivate",
            "stimulate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	The museum curator was thrilled to ( unearth / excavate/ disclose / retrieve) a rare precolonial relic during the site survey.",
        explanation: '“Unearth” implies bringing to light something hidden, often by digging; it is more precise than “excavate” (physical digging) or “disclose” (general revealing).',
        correctAnswer: "unearth",
        choices: [
            "unearth",
            "excavate",
            "disclose",
            "retrieve",
        ],
        choiceType: "none"
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The wind was strong last night, and the waves made a loud _________ as they hit the seawall. ",
        explanation: '“Sound” is the only word that accurately describes the loud noise produced by waves.',
        correctAnswer: "sound",
        choices: [
            "whistle",
            "sound",
            "murmur",
            "sigh",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A minor cannot be _________ to enter the bar, even if accompanied by adults. ",
        explanation: '“Allowed” means given permission, which directly fits the rule about minors entering bars.',
        correctAnswer: "allowed",
        choices: [
            "considered",
            "admitted",
            "allowed",
            "recognized",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The municipal council aims to _________ the barangay’s disaster response plan after the last typhoon. ",
        explanation: '“Refine” means improving something by making careful enhancements.',
        correctAnswer: "refine",
        choices: [
            "adjust",
            "refine",
            "redo",
            "lessen",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. To avoid errors, the students were reminded to _________ their test papers before passing them to the proctor. ",
        explanation: '“Inspect” means checking thoroughly for mistakes.',
        correctAnswer: "inspect",
        choices: [
            "inspect",
            "glimpse",
            "browse",
            "scatter",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The SK chairperson hopes to _________ more youth volunteers for the upcoming coastal cleanup. ",
        explanation: '“Recruit” means gathering or enlisting volunteers.',
        correctAnswer: "recruit",
        choices: [
            "summon",
            "absorb",
            "retrieve",
            "recruit",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The continuous monsoon rains may _________ the construction of the new covered court. ",
        explanation: '“Hinder” means delaying progress because of obstacles.',
        correctAnswer: "hinder",
        choices: [
            "hinder",
            "oppose",
            "avoid",
            "distract",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The speaker at the DepEd seminar used current data to _________ her points about digital literacy. ",
        explanation: '“Validate” means supporting with evidence.',
        correctAnswer: "validate",
        choices: [
            "lighten",
            "decorate",
            "validate",
            "replace",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The barangay captain worked to _________ peace after two neighbors argued about their property boundary. ",
        explanation: '“Restore” means bringing back harmony.',
        correctAnswer: "restore",
        choices: [
            "create",
            "occupy",
            "imagine",
            "restore",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Students were urged to _________ their online behavior to avoid cyberbullying incidents. ",
        explanation: '“Monitor” means regularly checking or watching.',
        correctAnswer: "monitor",
        choices: [
            "monitor",
            "predict",
            "abandon",
            "compress",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Despite the complex data sets, the researcher was able to _________ meaningful patterns that others had overlooked.",
        explanation: '“Extract” means to carefully obtain or draw out something valuable or important from a larger set.',
        correctAnswer: "extract",
        choices: [
            "distort",
            "extract",
            "obscure",
            "fabricate",
        ],
        choiceType: "alpha"
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The governor's sudden announcement seemed intended (to  pacify / overlook/ exacerbate ) public concern about the approaching typhoon.",
        explanation: '“Exacerbate” means to make a situation worse or increase concern. “Pacify” means to calm, and “overlook” means to ignore—both are opposite in meaning.',
        correctAnswer: "exacerbate",
        choices: [
            "to  pacify",
            "overlook",
            "exacerbate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. The investigation aimed to (uncover / obscure / neglect) irregularities in the province’s infrastructure spending.",
        explanation: '“Uncover” means to reveal or bring to light. “Obscure” means to hide, and “neglect” means to ignore—these don’t fit the goal of an investigation.',
        correctAnswer: "uncover",
        choices: [
            "uncover",
            "obscure",
            "neglect",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The city council's new ordinance was meant to (dissuade / facilitate / condone) illegal vendors along the baywalk.",
        explanation: '“Dissuade” means to prevent or discourage an action. “Facilitate” means to make easier, and “condone” means to allow—opposite in context.',
        correctAnswer: "dissuade",
        choices: [
            "dissuade",
            "facilitate",
            "condone",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. The journalist's exposé sought to ( confound / illuminate /  suppress) corruption in local government projects.",
        explanation: '“Illuminate” means to clarify or make clear. “Confound” means to confuse, and “suppress” means to hide—both are incorrect here.',
        correctAnswer: "illuminate",
        choices: [
            "confound",
            "illuminate",
            "suppress",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The environmental group argued that the mining operation could (compromise / conserve / shield) the watershed in Palawan.",
        explanation: '“Compromise” means to put at risk or endanger. “Conserve” and “shield” mean to protect, which are opposite in meaning.',
        correctAnswer: "compromise",
        choices: [
            "compromise",
            "conserve",
            "shield",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The festival organizers were praised for (mishandling / abandoning/ orchestrating ) a flawless Pahiyas celebration.",
        explanation: '“Orchestrating” means skillfully arranging or managing. “Mishandling” and “abandoning” imply poor management, which is the opposite.',
        correctAnswer: "orchestrating",
        choices: [
            "mishandling",
            "abandoning",
            "orchestrating",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The mayor's careful remarks were intended to (aggravate / ameliorate/  incite) tensions between rival barangays.",
        explanation: '“Ameliorate” means to improve or reduce tension. “Aggravate” and “incite” mean to worsen or provoke tension, opposite in meaning.',
        correctAnswer: "ameliorate",
        choices: [
            "aggravate",
            "ameliorate",
            "incite",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The committee proposed new rules to (streamline / complicate / hinder) the permit application process.",
        explanation: '“Streamline” means to make more efficient. “Complicate” and “hinder” would make the process harder.',
        correctAnswer: "streamline",
        choices: [
            "streamline",
            "complicate",
            "hinder",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The teacher's feedback helped to (enhance / weaken / distort) the students' essay quality.",
        explanation: '“Enhance” means to improve quality. “Weaken” and “distort” reduce or damage the quality, opposite in meaning.',
        correctAnswer: "enhance",
        choices: [
            "enhance",
            "weaken",
            "distort",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The CEO's speech aimed to (demoralize / ignore/ galvanize ) employees to achieve higher productivity.",
        explanation: '“Galvanize” means to motivate or inspire action. “Demoralize” and “ignore” are negative or indifferent, opposite in purpose.',
        correctAnswer: "galvanize",
        choices: [
            "demoralize",
            "ignore",
            "galvanize",
        ],
        choiceType: "none"
    },
]

const setH: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Look carefully at the scrambled letters and use the provided hint or meaning to determine the correct word. Click the letters in the proper sequence to complete the word accurately.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.LetterOrder,
        question: "1. U-I-T-D-R-E-T-F-O \n\nHint: courage in difficulty ",
        explanation: 'Means strength and bravery in facing challenges.',
        correctAnswer: "Fortitude",
        choices: [
            "U",
            "I",
            "T",
            "D",
            "R",
            "E",
            "T",
            "F",
            "O",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "2. G-D-E-R-A-T-T-I-U \n\nHint: thankfulness",
        explanation: 'Feeling of appreciation or being thankful.',
        correctAnswer: "Gratitude",
        choices: [
            "G",
            "D",
            "E",
            "R",
            "A",
            "T",
            "T",
            "I",
            "U",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "3. T-N-N-M-I-M-E-I \n\nHint: about to happen soon ",
        explanation: 'Something expected to occur very soon.',
        correctAnswer: "Imminent",
        choices: [
            "T",
            "N",
            "N",
            "M",
            "I",
            "M",
            "E",
            "I",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "4. I-I-T-N-N-E-F-F-E-R-D \n\nHint: not interested ",
        explanation: 'Not caring or showing concern.',
        correctAnswer: "Indifferent",
        choices: [
            "I",
            "I",
            "T",
            "N",
            "N",
            "E",
            "F",
            "F",
            "E",
            "R",
            "D",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "5. N-I-N-U-G-S-O-E-I\n\n Hint: clever and inventive ",
        explanation: 'Someone who is very creative or resourceful.',
        correctAnswer: "Ingenious",
        choices: [
            "N",
            "I",
            "N",
            "U",
            "G",
            "S",
            "O",
            "E",
            "I",
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
        type: QuestionType.Transitional,
        question: "6. The organizers promised a _____ event for all barangay participants, but the bus _____ for the coastal trip cost more than expected. ",
        explanation: '“Fair” means just or equitable; “fare” is the price of transportation.',
        correctAnswer: "fair-fare",
        choices: [
            "fare",
            "fair",
            "fairr",
            "fear",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "7. During the Panagbenga Festival, children imagined a tiny _____ fluttering above the flowers, while tourists boarded the _____ to cross the Pasig River. ",
        explanation: '“Fairy” is an imaginary winged creature; “ferry” is a boat for transport.',
        correctAnswer: "fairy-ferry",
        choices: [
            "farry",
            "fairy",
            "ferri",
            "ferry",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "8. The city council warned that any sudden change in policy could _____ public opinion, but this was only the first _____ of the multi-stage project. ",
        explanation: '“Faze” means to disturb or impact; “phase” is a stage in a process.',
        correctAnswer: "faze-phase",
        choices: [
            "faze",
            "face",
            "phase",
            "phaze",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "9. Leni felt proud of her basketball _____, but her sore _____ ached after the tournament. ",
        explanation: '“Feat” is an achievement; “feet” are the plural of foot.',
        correctAnswer: "feat-feet",
        choices: [
            "feet",
            "fit",
            "fete",
            "feat",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "10. The archaeologists hoped to _____ ancient pottery in the rice terraces, but any worker caught damaging the site would be _____ by the local authorities. ",
        explanation: '“Find” means to discover; “fined” means charged a penalty.',
        correctAnswer: "find-fined",
        choices: [
            "find",
            "finned",
            "fined",
            "fend",
        ],
        choiceType: "none",
        transitions: 2
    },
]

const setI: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Select the word from the options that best fits the sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "1. From the summit of Mt. Pulag, you can reach the _____ with careful steps, but the curious hiker took a quick _____ through the foggy trail. ",
        explanation: '“Peak” (noun) = the highest point; “peek” (verb) = a brief glance.',
        correctAnswer: "peak-peek",
        choices: [
            "peak",
            "pique",
            "peek",
            "peck",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "2. The nurse reminded the family that _____ is required while waiting in the ER, as many _____ were being treated for dengue that day. ",
        explanation: '“Patience” (noun) = the ability to wait calmly; “patients” (noun) = people receiving medical care.',
        correctAnswer: "patience-patients",
        choices: [
            "patiences",
            "patents",
            "patients",
            "patience",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "3. Before the festival, everyone wanted to _____ their best traditional attire, but the question remained: _____ would attend the opening parade? ",
        explanation: '“Wear” (verb) = to don clothing; “where” (adverb) = question about location.',
        correctAnswer: "wear-where",
        choices: [
            "where",
            "ware",
            "wear",
            "wair",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "4. The officer had to _____ the illegal goods at the market, but he agreed to ______ the inspection temporarily during lunch.",
        explanation: '“Seize” means to take hold of something, while “cease” means to stop or halt.',
        correctAnswer: "seize-cease",
        choices: [
            "seize",
            "sees",
            "seas",
            "cease",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "5. During the reenactment of the Philippine Revolution, the teacher explained the strategy used in the _____, while the students proudly _____ their historical costumes. ",
        explanation: '“War” (noun) = a battle or conflict; “wore” (verb, past tense of wear) = to have put on clothing.',
        correctAnswer: "war-wore",
        choices: [
            "woree",
            "war",
            "wore",
            "wair",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Transitional,
        question: "6. The weather bureau had to _____ fishermen about the incoming typhoon, especially those with _____ boats at the pier. ",
        explanation: '“Warn” (verb) = to caution or alert; “worn” (adjective) = used or deteriorated.',
        correctAnswer: "warn-worn",
        choices: [
            "warnn",
            "worn",
            "warn",
            "wern",
        ],
        choiceType: "none",
        transitions: 2
    },
    {
        type: QuestionType.Direction,
        direction: "Look carefully at the scrambled letters and use the provided hint or meaning to determine the correct word. Click the letters in the proper sequence to complete the word accurately.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.LetterOrder,
        question: "7. R-T-A-P-N-A-S-R-E-T-N \n\nHint: easy to understand or see through",
        explanation: 'Something clear or easy to understand.',
        correctAnswer: "Transparent",
        choices: [
            "R",
            "T",
            "A",
            "P",
            "N",
            "A",
            "S",
            "R",
            "E",
            "T",
            "N",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "8. C-T-I-C-P-E-D-L-A-R-B-E-I \n\nHint: able to guess",
        explanation: 'Something that can be foreseen.',
        correctAnswer: "Predictable",
        choices: [
            "C",
            "T",
            "I",
            "C",
            "P",
            "E",
            "D",
            "L",
            "A",
            "R",
            "B",
            "E",
            "I",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "9. D-C-F-I-N-E-T-O-N-T \n\nHint: sure of oneself",
        explanation: 'Feeling sure about your abilities.',
        correctAnswer: "Confident",
        choices: [
            "D",
            "C",
            "F",
            "I",
            "N",
            "E",
            "T",
            "O",
            "N",
            "T",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.LetterOrder,
        question: "10. E-V-X-S-I-E-T-N-E \n\nHint: large in scope",
        explanation: 'Covering a large area or amount.',
        correctAnswer: "Extensive",
        choices: [
            "E",
            "V",
            "X",
            "S",
            "I",
            "E",
            "T",
            "N",
            "E",
        ],
        choiceType: "none"
    },
]

const setJ: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each group of words carefully. Arrange them in order from the weakest to the strongest based on the intensity of their meaning.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.WordLevel,
        question: "1. Arrange the words for disappointment: \n\n devastated, annoyed, let down, frustrated",
        explanation: '“Let down” is mild, “annoyed” slightly stronger, “frustrated” deeper, “devastated” strongest.',
        correctAnswer: "3-2-4-1",
        choices: [
            "1 - devastated",
            "2 - annoyed",
            "3 - let down",
            "4 - frustrated",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "2. Arrange the words for pride:\n\n pleased, elated, proud, overjoyed",
        explanation: '“Pleased” is mild, “proud” stronger, “elated” deeper, “overjoyed” strongest.',
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - pleased",
            "2 - elated",
            "3 - proud",
            "4 - overjoyed",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "3. Arrange the words for worry:\n\n anxious, panicked, concerned, uneasy",
        explanation: '“Uneasy” is mild, “concerned” stronger, “anxious” deeper, “panicked” strongest.',
        correctAnswer: "4-3-1-2",
        choices: [
            "1 - anxious",
            "2 - panicked",
            "3 - concerned",
            "4 - uneasy",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "4. Arrange the words for admiration:\n\n fascinated, like, impressed, awestruck",
        explanation: '“Like” is mild, “impressed” stronger, “fascinated” deeper, “awestruck” strongest.',
        correctAnswer: "2-3-1-4",
        choices: [
            "1 - fascinated",
            "2 - like",
            "3 - impressed",
            "4 - awestruck",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.WordLevel,
        question: "5. Arrange the words for fear:\n\n petrified, scared, worried, fearful",
        explanation: '“Worried” mild, “fearful” stronger, “scared” deeper, “petrified” extreme fear.',
        correctAnswer: "3-4-2-1",
        choices: [
            "1 - petrified",
            "2 - scared",
            "3 - worried",
            "4 - fearful",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.Direction,
        direction: "Read each sentence carefully. Choose the word that best fits the context and conveys the intended meaning.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The diplomat's cryptic statement seemed designed to (provoke / instigate / manipulate / placate) tensions without overtly blaming any party.",
        explanation: '“Provoke” fits the context of subtly stirring tensions. “Instigate” suggests actively urging action, ',
        correctAnswer: "provoke",
        choices: [
            "provoke",
            "instigate",
            "manipulate",
            "placate",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7.	The committee finally (conceded / dismissed/ acknowledged  / repudiated) the discrepancies in the project budget after reviewing the documents.",
        explanation: '“Acknowledged” means formally recognizing a problem. “Conceded” implies reluctant admission, “dismissed” rejects it, and “repudiated” is a strong denial.',
        correctAnswer: "acknowledged",
        choices: [
            "conceded",
            "dismissed",
            "acknowledged",
            "repudiated",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Completing the manuscript revisions gave the author a profound sense of (fulfillment / gratification / contentment / exoneration) after months of work.",
        explanation: '“Fulfillment” conveys satisfaction from achievement. “Gratification” is pleasure, “contentment” is milder satisfaction, and “exoneration” is clearing blame, unrelated here.',
        correctAnswer: "fulfillment",
        choices: [
            "fulfillment",
            "gratification",
            "contentment",
            "exoneration",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The mayor carefully (endorsed / affirmed / sanctioned / authorized) the urban redevelopment plan without committing municipal funds immediately.",
        explanation: '“Affirmed” conveys verbal support without action. “Endorsed” or “sanctioned” implies stronger approval; “authorized” implies formal allocation of power/resources.',
        correctAnswer: "affirmed",
        choices: [
            "endorsed",
            "affirmed",
            "sanctioned",
            "authorized",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	The conservation group accused the corporation of (undermining / obscuring / defiling / desecrating) the ecological integrity of the mangrove forest.",
        explanation: '“Desecrating” implies severe disrespect or harm to something valued. “Undermining” is indirect, “obscuring” is hiding, and “defiling” is often physical contamination.',
        correctAnswer: "desecrating",
        choices: [
            "undermining",
            "obscuring",
            "defiling",
            "desecrating",
        ],
        choiceType: "none"
    },
]


export const VOCAB_ADVANCED_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
    {
        label: "Set F",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setF,
        }
    },
    {
        label: "Set G",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setG,
        }
    },
    {
        label: "Set H",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setH,
        }
    },
    {
        label: "Set I",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setI,
        }
    },
    {
        label: "Set J",
        set: {
            instruction: "Answer and complete the following items. You have 15 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setJ,
        }
    },
]

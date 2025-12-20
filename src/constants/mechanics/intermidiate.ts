import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. my friend helped me with my project.',
        explanation: 'My friend helped me with my project.',
        correctAnswer: "my",
        choices: [
            "friend",
            "helped",
            "my",
            "project",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Last monday, our teacher gave a quiz.',
        explanation: 'Last Monday, our teacher gave a quiz.',
        correctAnswer: "monday",
        choices: [
            "a",
            "monday",
            "quiz",
            "teacher",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Our school is located in bulacan.',
        explanation: 'Our school is located in Bulacan.',
        correctAnswer: "bulacan",
        choices: [
            "bulacan",
            "is",
            "located",
            "school",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Maria forgot her celphone at home.',
        explanation: 'c-e-l-l-p-h-o-n-e is the correct spelling',
        correctAnswer: "cellphone",
        choices: [
            "at",
            "cellphone",
            "forgot",
            "Maria",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5.  I always try to beleive in myself.',
        explanation: 'b-e-l-i-e-v-e is the correct spelling',
        correctAnswer: "believe",
        choices: [
            "always",
            "believe",
            "myself",
            "try",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. We will meet again tommorow.',
        explanation: 't-o-m-o-r-r-o-w is the correct spelling',
        correctAnswer: "tomorrow",
        choices: [
            "tommorow",
            "tommoroww",
            "tomorow",
            "tomorrow",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. We are going to Baguio this weekend__',
        explanation: 'The sentence is a statement, so it ends with a period.',
        correctAnswer: ". (Period)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "! (Exclamation point)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. What is your answer in the math activity__',
        explanation: 'The sentence asks a question, so it must end with a question mark.',
        correctAnswer: "? (Question mark)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "! (Exclamation point)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. My mother said __ “clean your room”.',
        explanation: 'A colon is used before directly quoting someone after the word “said.”',
        correctAnswer: ": (Colon)",
        choices: [
            ", (Comma)",
            ". (Period)",
            ": (Colon)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10.  “I am ready for the exam” ___ Ella said',
        explanation: 'A comma is used after a quotation when the sentence continues with a speaker tag (Ella said).',
        correctAnswer: ", (Comma)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            ": (Colon)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. our adviser reminded us about the project.',
        explanation: 'Our adviser reminded us about the project.',
        correctAnswer: "our",
        choices: [
            "adviser",
            "reminded",
            "our",
            "project",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. My cousin lives in laguna.',
        explanation: 'My cousin lives in Laguna.',
        correctAnswer: "laguna",
        choices: [
            "cousin",
            "laguna",
            "lives",
            "my",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. They visited the museum in quezon city.',
        explanation: 'They visited the museum in Quezon City.',
        correctAnswer: "quezon",
        choices: [
            "museum",
            "quezon",
            "they",
            "visited",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The teacher asked us to check the scheduel again.',
        explanation: 's-c-h-e-d-u-l-e is the correct spelling.',
        correctAnswer: "scheduel",
        choices: [
            "again",
            "scheduel",
            "asked",
            "teacher",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. The barangay captain made an annoucement this morning.',
        explanation: 'a-n-n-o-u-n-c-e-m-e-n-t is the correct spelling.',
        correctAnswer: "annoucement",
        choices: [
            "annoucement",
            "barangay",
            "captain",
            "morning",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. We need to separate the reciepts for the report.',
        explanation: 'r-e-c-e-i-p-t-s is the correct spelling.',
        correctAnswer: "reciepts",
        choices: [
            "need",
            "reciepts",
            "report",
            "separate",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. Pablo said, _Always be kind!_. ',
        explanation: 'Quotation marks are used to enclose the exact words someone says or writes.',
        correctAnswer: "“ ” (Quotation mark)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "! (Exclamation point)",
            "“ ” (Quotation mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. Where did you place the class record__',
        explanation: 'The sentence asks a question, so it ends with a question mark.',
        correctAnswer: "? (Question mark)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "! (Exclamation point)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. My teacher reminded us__ “Submit your work before dismissal.”',
        explanation: 'A colon is used before a direct quotation.',
        correctAnswer: ": (Colon)",
        choices: [
            ", (Comma)",
            ". (Period)",
            ": (Colon)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. “Please review the lesson” __ the teacher reminded.',
        explanation: 'A comma is used after a quotation when followed by a speaker tag.',
        correctAnswer: ", (Comma)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            ": (Colon)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Our class visited the old church in malolos.',
        explanation: 'Our class visited the old church in Malolos.',
        correctAnswer: "malolos",
        choices: [
            "class",
            "malolos",
            "old",
            "our",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Yesterday, my cousin attended a workshop in bulacan.',
        explanation: 'Yesterday, my cousin attended a workshop in Bulacan.',
        correctAnswer: "bulacan",
        choices: [
            "attended",
            "bulacan",
            "cousin",
            "yesterday",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. The mayor of san Jose Del Monte gave a speech.',
        explanation: 'The mayor of San Jose del Monte gave a speech.',
        correctAnswer: "san",
        choices: [
            "gave",
            "mayor",
            "san",
            "the",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The students prepared a broshure about the heritage sites in Bulacan.',
        explanation: 'b-r-o-c-h-u-r-e is the correct spelling.',
        correctAnswer: "broshure",
        choices: [
            "Bulacan",
            "broshure",
            "heritage",
            "students",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. The committee checked the attendence during the meeting in Plaridel.',
        explanation: ' a-t-t-e-n-d-a-n-c-e is the correct spelling.',
        correctAnswer: "attendence",
        choices: [
            "attendence",
            "committee",
            "meeting",
            "Plaridel",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. The barangay officials distributed the scheduele for the cleanup drive.',
        explanation: 's-c-h-e-d-u-l-e is the correct spelling.',
        correctAnswer: "scheduele",
        choices: [
            "barangay",
            "distributed",
            "scheduele",
            "drive",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. The event will start at the Bulacan Sports Complex__',
        explanation: 'The event will start at the Bulacan Sports Complex. ',
        correctAnswer: ". (Period)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            ". (Period)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. When will the meeting in the municipal hall begin__',
        explanation: 'When will the meeting in the municipal hall begin?',
        correctAnswer: "? (Question mark)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            "? (Question mark)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. The teacher reminded us__ “Bring your permits for the field trip.”',
        explanation: 'The teacher reminded us, “Bring your permits for the field trip.”',
        correctAnswer: ", (Comma)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "; (Semicolon)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. That\'s Enrico_s lunch.',
        explanation: 'That\'s Enrico\'s lunch.',
        correctAnswer: "' (Apostrophe)",
        choices: [
            "' (Apostrophe)",
            "! (Exclamation point)",
            "; (Semicolon)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. They visited the museum in bocaue last week.',
        explanation: 'They visited the museum in Bocaue last week.',
        correctAnswer: "bocaue",
        choices: [
            "bocaue",
            "last",
            "museum",
            "they",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. my aunt works in a factory in Marilao.',
        explanation: 'My aunt works in a factory in Marilao.',
        correctAnswer: "my",
        choices: [
            "aunt",
            "factory",
            "Marilao",
            "my",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Our teacher discussed the history of bulacan province.',
        explanation: 'Our teacher discussed the history of Bulacan province.',
        correctAnswer: "bulacan",
        choices: [
            "bulacan",
            "discussed",
            "history",
            "teacher",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The istudents created a brochure about Malolos Congress.',
        explanation: 's-t-u-d-e-n-t-s is the correct spelling.',
        correctAnswer: "istudents",
        choices: [
            "brochure",
            "Malolos ",
            "created",
            "istudents",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. The leader explained the guidlines for the Bulacan tour.',
        explanation: ' g-u-i-d-e-l-i-n-e-s is the correct spelling.',
        correctAnswer: "guidlines",
        choices: [
            "explained",
            "Bulacan",
            "guidlines",
            "tour",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. The coordinator reminded them about the neccessary permits.',
        explanation: 'n-e-c-e-s-s-a-r-y is the correct spelling.',
        correctAnswer: "neccessary",
        choices: [
            "coordinator",
            "neccessary",
            "permits",
            "reminded",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. Yes_ I passed the exam. ',
        explanation: 'Yes! I passed the exam. ',
        correctAnswer: "! (Exclamation point)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            ". (Period)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. How many participants will join the Bulacan seminar__',
        explanation: 'How many participants will join the Bulacan seminar?',
        correctAnswer: "? (Question mark)",
        choices: [
            "! (Exclamation point)",
            ", (Comma)",
            "? (Question mark)",
            "; (Semicolon)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. The adviser reminded us__ “Submit the forms tomorrow.”',
        explanation: 'The adviser reminded us, “Submit the forms tomorrow.”',
        correctAnswer: ", (Comma)",
        choices: [
            ", (Comma)",
            ". (Period)",
            "; (Semicolon)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. The facilitator gave a reminder __ the orientation will start soon.',
        explanation: 'The facilitator gave a reminder; the orientation will start soon.',
        correctAnswer: "; (Semicolon)",
        choices: [
            ", (Comma)",
            "! (Exclamation point)",
            "; (Semicolon)",
            "? (Question mark)",
        ],
        choiceType: 'alpha'
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Our class joined a cultural event in calumpit.',
        explanation: 'Our class joined a cultural event in Calumpit.',
        correctAnswer: "calumpit",
        choices: [
            "calumpit",
            "class",
            "event",
            "our",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. the festival in paombong attracts many visitors.',
        explanation: 'The festival in Paombong attracts many visitors.',
        correctAnswer: "paombong",
        choices: [
            "festival",
            "paombong",
            "the",
            "visitors",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. My brother attended a seminar in meycauayan.',
        explanation: 'My brother attended a seminar in Meycauayan.',
        correctAnswer: "meycauayan",
        choices: [
            "attended",
            "brother",
            "meycauayan",
            "seminar",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The students created an exhibitt for their Bulacan project',
        explanation: 'e-x-h-i-b-i-t is the correct spelling.',
        correctAnswer: "exhibitt",
        choices: [
            "Bulacan",
            "created",
            "exhibitt",
            "students",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Our adviser reviewed the neccesary documents.',
        explanation: 'n-e-c-e-s-s-a-r-y is the correct spelling.',
        correctAnswer: "neccesary",
        choices: [
            "adviser",
            "documents",
            "necessary",
            "neccesary",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. The group submitted their written propposal on time.',
        explanation: 'p-r-o-p-o-s-a-l is the correct spelling.',
        correctAnswer: "propposal",
        choices: [
            "group",
            "proposal",
            "propposal",
            "written",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. Mayor Ferdie said, _The parade will start in front of the Malolos City Hall_.',
        explanation: 'Mayor Ferdie said, “the parade will start in front of the Malolos City Hall”.',
        correctAnswer: "“ ”",
        choices: [
            "!",
            ",",
            "“ ”",
            ";",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. The meeting will begin soon__ please take your seats',
        explanation: 'The meeting will begin soon; please take your seats.',
        correctAnswer: ";",
        choices: [
            ",",
            ".",
            ";",
            ":",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. The announcement is clear__ bring your IDs tomorrow.',
        explanation: 'The announcement is clear: bring your IDs tomorrow.',
        correctAnswer: ":",
        choices: [
            "!",
            ":",
            ",",
            ";",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. Angela got a perfect score in their test _2nd periodic examination_. ',
        explanation: 'Angela got a perfect score in their test (2nd periodic examination). ',
        correctAnswer: "( )",
        choices: [
            "( )",
            "!",
            ":",
            ";",
        ],
        choiceType: 'alpha'
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. They interviewed local business owners in baliwag.',
        explanation: 'They interviewed local business owners in Baliwag.',
        correctAnswer: "baliwag",
        choices: [
            "baliwag",
            "business",
            "interviewed",
            "they",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Last Monday, our class visited a farm in norzagaray.',
        explanation: 'Our class visited a farm in Norzagaray.',
        correctAnswer: "norzagaray",
        choices: [
            "class",
            "farm",
            "norzagaray",
            "visited",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. the science fair in bustos was successful.',
        explanation: 'The science fair in Bustos was successful.',
        correctAnswer: "bustos",
        choices: [
            "bustos",
            "fair",
            "science",
            "the",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The students read an artickle about local history.',
        explanation: 'a-r-t-i-c-l-e is the correct spelling.',
        correctAnswer: "artickle",
        choices: [
            "article",
            "artickle",
            "history",
            "local",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. The barangay captain checked the aparel for the performers.',
        explanation: 'a-p-p-a-r-e-l is the correct spelling.',
        correctAnswer: "aparel",
        choices: [
            "barangay",
            "aparel",
            "captain",
            "performers",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. The coordinator approved the schedual for the outreach.',
        explanation: 's-c-h-e-d-u-l-e is the correct spelling.',
        correctAnswer: "schedual",
        choices: [
            "approved",
            "coordinator",
            "schedual",
            "outreach",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: 'The students from San Rafael arrived early__',
        explanation: 'The students from San Rafael arrived early.',
        correctAnswer: ".",
        choices: [
            "!",
            ",",
            ".",
            ":",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. Please prepare the following items__ bond paper, pen, and folder.',
        explanation: 'Please prepare the following items: bond paper, pen, and folder.',
        correctAnswer: ";",
        choices: [
            "!",
            ",",
            ":",
            ";",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. Hey_ Look at the sky. ',
        explanation: 'Hey! Look at the sky. ',
        correctAnswer: "!",
        choices: [
            ";",
            "!",
            ",",
            ".",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. Jose_who is my classmate  friend_helped me finish my assignment.',
        explanation: 'Jose —who is my classmate  friend—helped me finish my assignment.',
        correctAnswer: "—",
        choices: [
            "!",
            "—",
            ";",
            ".",
        ],
        choiceType: 'alpha'
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Choose the word that should be capitalized.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. The mayor visited a public school in san Miguel.",
        explanation: "The mayor visited a public school in San Miguel.",
        correctAnswer: "san",
        choices: [
            "mayor",
            "san",
            "school",
            "visited",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. our project highlights the culture of Pulilan.',
        explanation: 'Our project highlights the culture of Pulilan.',
        correctAnswer: "our",
        choices: [
            "culture",
            "our",
            "project",
            "Pulilan",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. My cousin joined a workshop in obando.',
        explanation: 'My cousin joined a workshop in Obando.',
        correctAnswer: "obando",
        choices: [
            "cousin",
            "joined",
            "obando",
            "workshop",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the misspelled word in the sentence.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. The students prepared an invitasion for their event.',
        explanation: 'i-n-v-i-t-a-t-i-o-n is the correct spelling.',
        correctAnswer: "invitasion",
        choices: [
            "event",
            "invitation",
            "invitasion",
            "students",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. The teacher checked the student\'s perfomance task.',
        explanation: 'p-e-r-f-o-r-m-a-n-c-e is the correct spelling.',
        correctAnswer: "perfomance",
        choices: [
            "checked",
            "performance",
            "perfomance",
            "task",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. They assigned a representetive for each group.',
        explanation: 'r-e-p-r-e-s-e-n-t-a-t-i-v-e is the correct spelling.',
        correctAnswer: "representetive",
        choices: [
            "assigned",
            "each",
            "group",
            "representetive",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the punctuation mark needed to complete the sentence correctly.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. The audiences cheered loudly at the Bulacan Capitol__',
        explanation: 'The audiences cheered loudly at the Bulacan Capitol.',
        correctAnswer: ".",
        choices: [
            ".",
            ",",
            "!",
            ";",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. I knew Department of Education _DepEd_.',
        explanation: 'I knew Department of Education (DepEd).',
        correctAnswer: "( )",
        choices: [
            ",",
            "( )",
            "!",
            ";",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. I was about to leave the resort _ when I realized I forgot my cellphone.',
        explanation: 'I was about to leave the resort — when I realized I forgot my cellphone.',
        correctAnswer: "—",
        choices: [
            "—",
            ",",
            ".",
            ":",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. The adviser said “Please don_t throw your garbage everywhere”. ',
        explanation: 'The adviser said “Please don\'t throw your garbage everywhere”. ',
        correctAnswer: "'",
        choices: [
            ",",
            "'",
            ";",
            ".",
        ],
        choiceType: 'alpha'
    },
]

export const MECHANICS_INTERMEDIATE_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setE,
        }
    },
    {
        label: "Set F",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setF,
        }
    },
    {
        label: "Set G",
        set: {
            instruction: "Read each item carefully and choose the correct answer. ",
            questions: setG,
        }
    },
]

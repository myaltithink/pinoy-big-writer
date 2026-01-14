import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word "summer" be capitalized?',
        explanation: '“Summer” is not a proper noun unless part of a title.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word "english" be capitalized?',
        explanation: '“English” is a language, and languages are always capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word "manila" be capitalized?',
        explanation: '“Manila” is a proper noun (specific place).',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word "teacher" be capitalized?',
        explanation: '“Teacher” is a common noun and is not capitalized unless used as a title before a name.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the first word in the sentence be capitalized?',
        explanation: 'The first word in every sentence must be capitalized. This rule helps signal the beginning of a new thought or idea, making the sentence clear and easy to read.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. A place where books are kept and borrowed.',
        explanation: 'l-i-b-r-a-r-y is the correct spelling',
        correctAnswer: "library",
        choices: [
            "libarry",
            "librery",
            "library",
            "llibrary",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. A piece of writing that tells a story.',
        explanation: 'n-a-r-r-a-t-i-v-e is the correct spelling',
        correctAnswer: "narrative",
        choices: [
            "narrative",
            "narrativ",
            "narrative",
            "narrattive",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. A person who teaches.',
        explanation: 't-e-a-c-h-e-r is the correct spelling',
        correctAnswer: "teacher",
        choices: [
            "teachar",
            "teacher",
            "techer",
            "teycher",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. A written or printed message.',
        explanation: 'l-e-t-t-e-r is the correct spelling',
        correctAnswer: "letter",
        choices: [
            "letter",
            "lettar",
            "leter",
            "leyter",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. A group of students learning together.',
        explanation: 'c-l-a-s-s is the correct spelling',
        correctAnswer: "class",
        choices: [
            "claas",
            "class",
            "clas",
            "clazs",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. What is the purpose of Question mark (?)?',
        explanation: 'A question mark is used whenever a sentence asks something.',
        correctAnswer: "To end a direct question",
        choices: [
            "To end a direct question",
            "To separate items in a list",
            "To show a pause in a sentence",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. What is the purpose of Comma (,)?',
        explanation: 'Commas separate items in a list, clauses, or ideas.',
        correctAnswer: "To separate items or ideas",
        choices: [
            "To end a statement",
            "To separate items or ideas",
            "To show strong emotion",
            "All of the above",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13.	What is the purpose of  Period (.)?',
        explanation: 'A period shows the end of a statement.',
        correctAnswer: "To end a declarative sentence",
        choices: [
            "To connect two clauses",
            "To end a declarative sentence",
            "To show excitement",
            "All of the above",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14.	What is the purpose of Exclamation point (!)?',
        explanation: 'Exclamation points show excitement, surprise, or strong emotion.',
        correctAnswer: "To show strong feeling or emphasis",
        choices: [
            "To introduce a list",
            "To show ownership",
            "To show strong feeling or emphasis",
            "None of the above",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15.	What is the purpose of Colon (:)?',
        explanation: 'A colon is used before a list, explanation, or clarification.',
        correctAnswer: "To introduce a list, explanation, or example",
        choices: [
            "To introduce a list, explanation, or example",
            "To join two complete sentences",
            "To replace missing letters",
            "None of the above",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word “philippines” be capitalized?',
        explanation: '“Philippines” is the name of a country, so it must be capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word “biology” be capitalized when used as a subject?',
        explanation: 'Subjects like biology, math, and science are lowercase unless used as course titles (e.g., Biology 10).',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word “microsoft word” be capitalized?',
        explanation: 'Brand and software names (“Microsoft Word”) must be capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word “filipino” be capitalized when referring to a language?',
        explanation: 'Names of languages (Filipino, English, and Korean) must be capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the word “earth” be capitalized when referring to the planet in Science class?',
        explanation: '“Earth” is capitalized when referring to the planet as a proper noun.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. Which is the correct spelling?',
        explanation: 's-a-v-i-o-r is the correct spelling.',
        correctAnswer: "savior",
        choices: [
            "saviour",
            "savior",
            "saivor",
            "saviorr",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. Which is the correct spelling?',
        explanation: 'h-e-l-l-o is the correct spelling.',
        correctAnswer: "hello",
        choices: [
            "helow",
            "hello",
            "helo",
            "hallo",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. Which is the correct spelling?',
        explanation: 'p-r-e-g-n-a-n-t is the correct spelling.',
        correctAnswer: "pregnant",
        choices: [
            "pregnent",
            "pregnaint",
            "pregnant",
            "pregant",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. Which is the correct spelling?',
        explanation: 'a-n-s-w-e-r is the correct spelling.',
        correctAnswer: "answer",
        choices: [
            "anser",
            "answer",
            "answr",
            "answe",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. Which is the correct spelling?',
        explanation: 't-h-e-i-r is the correct spelling.',
        correctAnswer: "their",
        choices: [
            "thier",
            "theire",
            "their",
            "they'r",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. What is the purpose of a comma (,) in Filipino or English class?',
        explanation: 'Commas separate ideas or items to make the sentence clear.',
        correctAnswer: "To separate items",
        choices: [
            "To end a sentence",
            "To separate items",
            "To show excitement",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. What is the main purpose of using parentheses ( ) in a sentence?',
        explanation: 'Parentheses are used to add extra information or clarification to a sentence without changing its main meaning.',
        correctAnswer: "To add extra information or clarification",
        choices: [
            "To show ownership",
            "To add extra information or clarification",
            "To join two sentences",
            "To show excitement",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. What is the purpose of a period (.) in writing tasks?',
        explanation: 'A period ends regular statements.',
        correctAnswer: "To end a statement",
        choices: [
            "To join ideas",
            "To separate items",
            "To end a statement",
            "To show strong emotion",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. What is the main purpose of using an apostrophe ( \' ) in a sentence?',
        explanation: 'An apostrophe ( \' ) is used to show ownership (example: Maria\'s bag) or to form contractions by shortening words (example: don’t for do not).',
        correctAnswer: "To show ownership or form contractions",
        choices: [
            "To show extra information",
            "To join two sentences",
            "To show ownership or form contractions",
            "To separate long sentences",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. What is the purpose of a colon (:) in TLE procedures or instructions?',
        explanation: 'A colon is used to introduce steps, lists, procedures, or explanations.',
        correctAnswer: "To introduce steps or lists",
        choices: [
            "To show missing letters",
            "To introduce steps or lists",
            "To show strong emotion",
            "To connect clauses",
        ],
        choiceType: "alpha"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word “philippines” be capitalized?',
        explanation: 'It is the name of a country, which is always capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should “social security system” be capitalized?',
        explanation: 'Names of government agencies are always capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should “maria clara” be capitalized?',
        explanation: 'It is a name of a person or proper noun. ',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should “cellphone” be capitalized?',
        explanation: 'It is a common noun.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should “student” be capitalized?',
        explanation: 'It is a common noun.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. The correct spelling of a person who studies matter and energy.',
        explanation: 'p-h-y-s-i-c-i-s-t is the correct spelling.',
        correctAnswer: "physicist",
        choices: [
            "fisicist",
            "physicist",
            "physycist",
            "phisycsist",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. Which is the correct spelling? ',
        explanation: 'g-o-v-e-r-n-m-e-n-t is the correct spelling.',
        correctAnswer: "government",
        choices: [
            "goverment",
            "guvernment",
            "government",
            "governmint",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. A math term meaning to reduce.',
        explanation: 's-i-m-p-l-i-f-y is the correct spelling.',
        correctAnswer: "simplify",
        choices: [
            "simplify",
            "simpplify",
            "simplefy",
            "simplifai",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. Correct spelling of the Filipino traditional fabric.',
        explanation: 'p-i-ñ-a is the correct spelling.',
        correctAnswer: "piña",
        choices: [
            "piñia",
            "pina",
            "pinia",
            "piña",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. Correct spelling of the word meaning “review or check.”',
        explanation: 'e-v-a-l-u-a-t-e is the correct spelling.',
        correctAnswer: "evaluate",
        choices: [
            "evalyuate",
            "evaluate",
            "evaloate",
            "evalyuet",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "", 
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. Purpose of parentheses ( )',
        explanation: 'Parentheses are used to add extra details that are not part of the main sentence.',
        correctAnswer: "show extra information",
        choices: [
            "show extra information",
            "show ownership",
            "join sentences",
            "replace commas",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. Purpose of a dash (—)',
        explanation: 'A dash is used to add important or surprising information.',
        correctAnswer: "add sudden details",
        choices: [
            "show omission",
            "add sudden details",
            "end a list",
            "show ownership",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. Purpose of quotation marks (" ")',
        explanation: 'Quotation marks show the exact words someone said or wrote.',
        correctAnswer: "show exact words",
        choices: [
            "show exact words",
            "show a long pause",
            "join paragraphs",
            "show date",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. Purpose of a semicolon (;)',
        explanation: 'A semicolon connects two complete sentences that are closely related.',
        correctAnswer: "join two related ideas",
        choices: [
            "join two related ideas",
            "end a question",
            "show excitement",
            "introduce a list",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. Purpose of a comma (,) in dates',
        explanation: 'A comma separates the day from the year in dates to make them clear.',
        correctAnswer: "separate day and year",
        choices: [
            "separate day and year",
            "show excitement",
            "join ideas",
            "end sentence",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word "quezon city" be capitalized?',
        explanation: 'It is a specific city in the Philippines—a proper noun.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word "history" be capitalized?',
        explanation: 'It is a common noun unless part of a specific course title (e.g., History 10).',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word "filipino" be capitalized?',
        explanation: '“Filipino” refers to a nationality and language, both capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word "doctor garcia" be capitalized?',
        explanation: 'Titles and names (Doctor Garcia) must be capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the first word in this sentence be capitalized?',
        explanation: 'Every sentence must begin with a capital letter.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. A student studying in a university.',
        explanation: 'c-o-l-l-e-g-e is the correct spelling.',
        correctAnswer: "college",
        choices: [
            "colledge",
            "college",
            "collegge",
            "colage",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. A government building where documents are processed.',
        explanation: 'o-f-f-i-c-e is the correct spelling.',
        correctAnswer: "office",
        choices: [
            "offece",
            "office",
            "ofice",
            "offise",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. A printed form used to gather information.',
        explanation: 'q-u-e-s-t-i-o-n-n-a-i-r-e is the correct spelling.',
        correctAnswer: "questionnaire",
        choices: [
            "questionare",
            "questyonnaire",
            "questionnaire",
            "questionaire",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. A person who leads the school.',
        explanation: 'p-r-i-n-c-i-p-a-l is the correct spelling.',
        correctAnswer: "principal",
        choices: [
            "prencipal",
            "prinsipal",
            "principal",
            "pryncipal",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. A sudden shaking of the ground.',
        explanation: 'e-a-r-t-h-q-u-a-k-e is the correct spelling.',
        correctAnswer: "earthquake",
        choices: [
            "earthquqake",
            "earthquake",
            "earthquak",
            "earthqueak",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the first  punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. Maria asked her teacher if the exam was today?',
        explanation: 'A question mark is needed because Maria asks information.',
        correctAnswer: "To end a direct question",
        choices: [
            "To show excitement",
            "To end a direct question",
            "To join ideas",
            "To separate items in a list",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. Bring the following materials: bond paper, markers, and ruler. ',
        explanation: 'A colon should be used before listing items.',
        correctAnswer: "To introduce a list",
        choices: [
            "To join two sentences",
            "To replace missing letters",
            "To introduce a list",
            "To show possession",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. The class will visit the museum (in Malolos City) tomorrow.',
        explanation: 'A parenthesis ( ) used to add extra information or clarification. This clarify that the museum is located in Malolos City. ',
        correctAnswer: "To add extra information or clarification",
        choices: [
            "To show ownership",
            "To add extra information or clarification",
            "To join two sentences",
            "To show excitement",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. Wow! That performance was amazing.',
        explanation: 'The sentence needs an exclamation point to show feeling.',
        correctAnswer: "To show strong emotion",
        choices: [
            "To show strong emotion",
            "To show a pause",
            "To mark titles",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. Your subjects are Filipino, English, and Science.',
        explanation: 'A comma is used to separate items, ideas, or parts of a sentence to make the meaning clear.',
        correctAnswer: "To separate words or ideas",
        choices: [
            "To show ownership",
            "To separate words or ideas",
            "To show excitement",
            "To replace a period",
        ],
        choiceType: "alpha"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word “christmas” be capitalized?',
        explanation: '“Christmas” is a proper noun (holiday).',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word “river” be capitalized?',
        explanation: '“river” is only capitalized if part of a name (e.g., Pasig River).',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word “filipino” when referring to nationality be capitalized?',
        explanation: '“Filipino” refers to a nationality and must be capitalized.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word “science” be capitalized?',
        explanation: 'School subjects are not capitalized unless they contain a language.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the first word of a title be capitalized?',
        explanation: 'Titles must begin with a capital letter.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. Money paid for school enrollment.',
        explanation: 't-u-i-t-i-o-n is the correct spelling.',
        correctAnswer: "tuition",
        choices: [
            "tuition",
            "tuision",
            "tution",
            "tuetion",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. A person who studies society and people.',
        explanation: 's-o-c-i-o-l-o-g-i-s-t is the correct spelling.',
        correctAnswer: "sociologist",
        choices: [
            "sociologyst",
            "soceologist",
            "sociologist",
            "socialogist",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. A written request for a job or program.',
        explanation: 'a-p-p-l-i-c-a-t-i-o-n is the correct spelling.',
        correctAnswer: "application",
        choices: [
            "aplication",
            "application",
            "aplicattion",
            "apliication",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. A written schedule of events or tasks.',
        explanation: 'c-a-l-e-n-d-a-r is the correct spelling.',
        correctAnswer: "calendar",
        choices: [
            "calender",
            "callendar",
            "calendar",
            "calandar",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. A plan or method for solving a problem.',
        explanation: 's-t-r-a-t-e-g-y is the correct spelling.',
        correctAnswer: "strategy",
        choices: [
            "stategy",
            "strategy",
            "straategy",
            "strattegy",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the first  punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. Are you joining the field trip?',
        explanation: 'A question mark is needed because it is asking a question. ',
        correctAnswer: "To end a question",
        choices: [
            "To mark a pause",
            "To end a question",
            "To show excitement",
            "To show possession",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. Our barangay officials announced the following rules: no littering, no smoking, and no vandalism.',
        explanation: 'A colon should appear before listing rules.',
        correctAnswer: "To introduce a list",
        choices: [
            "To introduce a list",
            "To join sentences",
            "To shorten words",
            "To show emotion",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. The road was flooded, therefore classes were suspended',
        explanation: 'A comma is needed after the word “flooded” to separate the ideas. ',
        correctAnswer: "To separate ideas",
        choices: [
            "To separate ideas",
            "To show ownership",
            "To mark titles",
            "To connect words",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. Help! The teacher is fainting.',
        explanation: 'An exclamation point is needed after the word “Help” to show strong emotion. ',
        correctAnswer: "To show strong emotion",
        choices: [
            "To show strong emotion",
            "To join clauses",
            "To separate items",
            "To show possession",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. These are the sections in Grade 10: Mahogany, Acacia, and Narra. ',
        explanation: 'A colon should be used before the list. ',
        correctAnswer: "To introduce a list",
        choices: [
            "To emphasize details",
            "To introduce a list",
            "To show a pause",
            "To end a sentence",
        ],
        choiceType: "alpha"
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word “math” be capitalized?',
        explanation: 'School subjects are common nouns unless they include a language.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word “bulacan” be capitalized?',
        explanation: 'It is a proper name of a place.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word “mayor” be capitalized in the sentence “The mayor visited the school”?',
        explanation: 'Position titles are capitalized only before a name. Example: Mayor Juan',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word “philippines” be capitalized?',
        explanation: 'Country names are proper nouns.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the first word of a direct quotation be capitalized?',
        explanation: 'Direct quotations begin with a capital letter.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. A building where students learn.',
        explanation: 's-c-h-o-o-l is the correct spelling.',
        correctAnswer: "school",
        choices: [
            "scool",
            "school",
            "scholl",
            "scoul",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. A short written reminder.',
        explanation: 'n-o-t-i-c-e is the correct spelling.',
        correctAnswer: "notice",
        choices: [
            "notise",
            "notis",
            "notice",
            "notiece",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. Someone who studies plants.',
        explanation: 'b-o-t-a-n-i-s-t is the correct spelling.',
        correctAnswer: "botanist",
        choices: [
            "botonist",
            "botanist",
            "botannist",
            "botaneist",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. Something done on time.',
        explanation: 'p-u-n-c-t-u-a-l is the correct spelling.',
        correctAnswer: "punctual",
        choices: [
            "punctual",
            "punctuall",
            "ponctual",
            "puncttual",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. A person who works in a laboratory.',
        explanation: 'l-a-b-o-r-a-t-o-r-y  s-t-a-f-f is the correct spelling.',
        correctAnswer: "laboratory staff",
        choices: [
            "labortory staff",
            "laboratery staff",
            "laboratory staff",
            "labaratory staff",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the first  punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. "Please submit your project before or on the due date", said the teacher. ',
        explanation: 'The quotation marks show the exact words spoken by the teacher.',
        correctAnswer: "To show exact words spoken or written",
        choices: [
            "To show excitement",
            "To show exact words spoken or written",
            "To separate ideas in a list",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. I was about to leave the house — when I realized I forgot my keys.',
        explanation: 'An em dash (—) is used to add sudden or important information, create a strong pause, or emphasize a point in a sentence.',
        correctAnswer: "To add a sudden break or extra information",
        choices: [
            "To end a sentence",
            "To show ownership",
            "To add a sudden break or extra information",
            "To separate items in a list",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. The announcement was late, yet everyone prepared quickly.',
        explanation: 'A comma is needed before “yet” to separate ideas',
        correctAnswer: "To separate ideas",
        choices: [
            "To show a pause",
            "To separate ideas",
            "To show a title",
            "To emphasize",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. Stop! You are stepping on the wet cement.',
        explanation: 'Needs an exclamation point to show strong emotion.',
        correctAnswer: "To show strong emotion",
        choices: [
            "To show strong emotion",
            "To mark a pause",
            "To show a quotation",
            "To join ideas",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. The ingredients are rice, fish,  and vegetables.',
        explanation: 'A comma should be placed before the list.',
        correctAnswer: "To introduce a list",
        choices: [
            "To show emotion",
            "To join clauses",
            "To introduce a list",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Determine whether the given word should be capitalized. Select A (No) or B (Yes) as your answer.",
        question: '',
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: '1. Should the word “library” be capitalized?',
        explanation: 'Common nouns like “library” are not capitalized.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '2. Should the word “baguio” be capitalized?',
        explanation: 'It is a proper noun (city name).',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '3. Should the word “math teacher” be capitalized?',
        explanation: 'Titles are not capitalized unless used before a name.',
        correctAnswer: "No",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '4. Should the word “asia” be capitalized?',
        explanation: 'Continents like Asia, Antarctica, Europe are proper nouns.',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '5. Should the names of months be capitalized?',
        explanation: 'Months are always capitalized',
        correctAnswer: "Yes",
        choices: [
            "No",
            "Yes",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the definition and choose the correctly spelled word.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '6. A written work based on research.',
        explanation: 'r-e-s-e-a-r-c-h is the correct spelling.',
        correctAnswer: "research",
        choices: [
            "researche",
            "research",
            "reesearch",
            "rsearch",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '7. A person who designs buildings.',
        explanation: 'a-r-c-h-i-t-e-c-t is the correct spelling.',
        correctAnswer: "architect",
        choices: [
            "arkitect",
            "architect",
            "architecht",
            "architact",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '8. A strong windstorm.',
        explanation: 't-y-p-h-o-o-n is the correct spelling.',
        correctAnswer: "typhoon",
        choices: [
            "tyfoon",
            "typoon",
            "typhoon",
            "typhoone",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '9. A person who repairs machines.',
        explanation: 'm-e-c-h-a-n-i-c is the correct spelling.',
        correctAnswer: "mechanic",
        choices: [
            "mechanic",
            "mechnic",
            "mechannic",
            "michanic",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '10. A message sent through mobile phone.',
        explanation: 't-e-x-t  m-e-s-s-a-g-e is the correct spelling.',
        correctAnswer: "text message",
        choices: [
            "text message",
            "tex message",
            "text mesage",
            "texx message",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.Direction,
        direction: "Read the question about the punctuation marks. Choose the correct purpose of the first  punctuation mark from the options provided.",
        question: '',
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: '11. Maria—who is my best friend—helped me finish the project.',
        explanation: 'The em dashes set off extra information about Maria.',
        correctAnswer: "To add a sudden break or extra information",
        choices: [
            "To end a sentence",
            "To show ownership",
            "To add a sudden break or extra information",
            "To separate items in a list",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '12. The cat\'s tail is fluffy.',
        explanation: 'The apostrophe + “s” shows ownership (the tail belongs to the cat).',
        correctAnswer: "To show ownership or form contractions",
        choices: [
            "To separate items in a list",
            "To show ownership or form contractions",
            "To add extra information",
            "To end a sentence",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '13. I have a meeting tomorrow; I need to prepare my presentation.',
        explanation: 'The semicolon joins two related sentences into one.',
        correctAnswer: "To join closely related independent clauses",
        choices: [
            "To show ownership",
            "To join closely related independent clauses",
            "To end a sentence",
            "To add extra information",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '14. Congratulations! You passed the test.',
        explanation: 'Needs an exclamation point.',
        correctAnswer: "To show strong emotion",
        choices: [
            "To show strong emotion",
            "To join words",
            "To mark titles",
            "To show plural",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: '15. The primary ingredient for Adobo is soy sauce.',
        explanation: 'A period is needed to indicate that the end of the statement. ',
        correctAnswer: "To end the statement",
        choices: [
            "To end the statement",
            "To show emphasis",
            "To connect clauses",
            "To show ownership",
        ],
        choiceType: "alpha"
    },
]

const metadata: SetMetadata = {
    passingScore: 12,
    timeLimit: 15
}

export const MECHANICS_BEGINNER_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Read each item carefully and choose the correct answer. Get as score of 12/15 to proceed to the next level",
            questions: setG,
        }
    },
]

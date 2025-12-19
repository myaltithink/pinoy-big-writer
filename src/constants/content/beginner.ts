import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

// SAMPLE ENCODING:

// {
//     type: QuestionType.MultipleChoice,
//     question: "1. sample question",
//     explanation: "bullshit here bullshit there........",
//     correctAnswer: "choice c", // yung actual content ng choices and ichcheck ko jan
//     choices: [
//         "choice a",
//         "choice b",
//         "choice c",
//         "choice d",
//     ],
//     choiceType: "alpha"
// }

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the letter of the best answer that shows your understanding of content in writing. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is “content” in writing?",
        explanation: "The correct answer is D because content refers to the actual ideas and messages expressed in writing, not the handwriting, rules, or number of paragraphs; it is the meaning the writer wants the reader to understand.",
        correctAnswer: "D. The ideas, details, and messages presented.",
        choices: [
            "A. The handwriting style.",
            "B. The grammar rules used.",
            "C. The number of paragraphs.",
            "D. The ideas, details, and messages presented.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Why is content important in writing?",
        explanation: "2.	The answer is D since content matters most in writing because it gives readers meaningful ideas; without solid content, a piece becomes empty no matter how neat or long it is.",
        correctAnswer: "D. It provides meaningful ideas for the reader.",
        choices: [
            "A. It adds color to the page.",
            "B. It removes spelling errors.",
            "C. It makes your paper longer.",
            "D. It provides meaningful ideas for the reader.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which best describes strong content?",
        explanation: "The correct answer is B because strong content is built on clear, detailed, and meaningful ideas that allow the reader to fully understand the message instead of guessing.",
        correctAnswer: "B. Clear, detailed, meaningful ideas.",
        choices: [
            "A. Very short sentences.",
            "B. Clear, detailed, meaningful ideas.",
            "C. Vague ideas with no explanation.",
            "D. Random thoughts in one paragraph.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A student writes: “It was a memorable day.” What content issue is present?",
        explanation: "The answer is A because the statement “It was a memorable day” gives no specific details or explanation, showing a lack of content development.",
        correctAnswer: "A. Limited details",
        choices: [
            "A. Limited details",
            "B. Repetition",
            "C. Strong imagery",
            "D. Too many details",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A good introduction should…",
        explanation: "The correct answer is D since an introduction should guide the reader by giving context and showing the main focus of the piece, making the writing easier to follow.",
        correctAnswer: "D. Set context and present the focus.",
        choices: [
            "A. Confuse the reader.",
            "B. Add grammar errors.",
            "C. Be unrelated to the topic.",
            "D. Set context and present the focus.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A conclusion is important because it…",
        explanation: "The answer is C because a conclusion exists to summarize the key ideas and leave the reader with final meaning or reflection, not just repeat or extend the essay unnecessarily.",
        correctAnswer: "C. Summarizes meaning and reflection",
        choices: [
            "A. Makes the essay longer",
            "B. Adds new unrelated ideas",
            "C. Summarizes meaning and reflection",
            "D. Repeats the introduction word-for-word",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A student describes three memorable days in one essay. The content issue is…",
        explanation: "The correct answer is A because including three memorable days in one essay breaks the focus, making the content scattered instead of centered on one main idea.",
        correctAnswer: "A. Unclear focus",
        choices: [
            "A. Unclear focus",
            "B. Strong organization",
            "C. Too many transitions",
            "D. Lack of emotional depth",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which is an example of emotional depth?",
        explanation: "The answer is D since emotional depth comes from specific feelings paired with clear reasons, and this option explains both the emotion and its cause meaningfully.",
        correctAnswer: "D. “My happiness came from finally seeing my father after months apart.”",
        choices: [
            "A. “I was happy.”",
            "B. “I was sad so I cried.”",
            "C. “Feelings happened.”",
            "D. “My happiness came from finally seeing my father after months apart.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The question “What makes this moment important?” helps improve…",
        explanation: "The correct answer is B because asking “What makes this moment important?” develops the richness of the ideas, which directly strengthens the content of the writing.",
        correctAnswer: "B. Content",
        choices: [
            "A. Capitalization",
            "B. Content",
            "C. Grammar",
            "D. Punctuation",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which detail adds stronger content?",
        explanation: "The answer is D because strong content needs vivid, specific details, and this option paints a clear picture of actions and emotions rather than giving a vague statement.",
        correctAnswer: "D. “We played parlor games, and my teammates laughed so loudly my stomach hurt.”",
        choices: [
            "A. “We had fun.”",
            "B. “The party was nice.”",
            "C. “Fun things happened.”",
            "D. “We played parlor games, and my teammates laughed so loudly my stomach hurt.”",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the letter of the best answer that shows your understanding of content in writing. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What do weak introductions usually lack?",
        explanation: "Weak introductions usually lack a topic sentence, a clear beginning, and sometimes personal reflection, making the introduction ineffective.",
        correctAnswer: "D. All of the above.",
        choices: [
            "A. A topic sentence.",
            "B. A clear beginning.",
            "C. A personal reflection.",
            "D. All of the above.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A student repeats “I enjoyed it” four times. This shows…",
        explanation: "Repeating “I enjoyed it” four times demonstrates repetition of ideas because the student expresses the same thought without adding new meaning or detail.",
        correctAnswer: "D. Repetition of ideas.",
        choices: [
            "A. Clear focus.",
            "B. Strong content.",
            "C. Emotional depth.",
            "D. Repetition of ideas.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which question helps add content?",
        explanation: "Asking “What exactly happened?” helps add content by encouraging the writer to provide specific details and clarify the events.",
        correctAnswer: "B. “What exactly happened?”",
        choices: [
            "A. “Is this sentence long?”",
            "B. “What exactly happened?”",
            "C. “Is my handwriting neat?”",
            "D. “Where do I put commas?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Content is strengthened when the writer includes…",
        explanation: "Content is strengthened when the writer includes precise and relevant details that directly support the topic, instead of unrelated or random information.",
        correctAnswer: "D. Precise and relevant details.",
        choices: [
            "A. Random jokes.",
            "B. Unrelated facts.",
            "C. Irrelevant stories.",
            "D. Precise and relevant details.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which describes a missing conclusion?",
        explanation: "A missing conclusion occurs when the essay ends suddenly without summarizing or reflecting, leaving the reader without closure.",
        correctAnswer: "A. The essay ends suddenly.",
        choices: [
            "A. The essay ends suddenly.",
            "B. The essay ends with a summary.",
            "C. The essay ends with a reflection.",
            "D. The essay ends with a transition.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. What makes a description detailed?",
        explanation: "A description becomes detailed by adding sensory details that allow the reader to see, hear, feel, or imagine the scene clearly.",
        correctAnswer: "C. Adding sensory details.",
        choices: [
            "A. Using unclear words.",
            "B. Leaving out examples.",
            "C. Adding sensory details.",
            "D. Mentioning only one short idea.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Scenario: A student writes about a trip but doesn’t say where they went or what they did. The issue is…",
        explanation: "Not stating where the trip happened or what the student did shows limited details, making the content unclear and incomplete.",
        correctAnswer: "B. Limited details.",
        choices: [
            "A. Clear reflection.",
            "B. Limited details.",
            "C. Good organization.",
            "D. Too many examples.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A meaningful conclusion often includes…",
        explanation: "A meaningful conclusion often includes personal reflection because it gives insight into the writer’s thoughts or feelings about the topic.",
        correctAnswer: "B. Personal reflection.",
        choices: [
            "A. A new beginning.",
            "B. Personal reflection.",
            "C. A list of random facts.",
            "D. A joke unrelated to the topic.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which is the strongest content sentence?",
        explanation: "The strongest content sentence is specific and detailed, explaining why the moment is unforgettable and providing concrete events that illustrate it.",
        correctAnswer: "D. “It became unforgettable because my mom surprised me with a letter she secretly wrote for me.”",
        choices: [
            "A. “I don’t know.”",
            "B. “It was unforgettable.”",
            "C. “It was memorable because it felt special.”",
            "D. “It became unforgettable because my mom surprised me with a letter she secretly wrote for me.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. An essay that jumps between topics shows…",
        explanation: "An essay that jumps between topics demonstrates unclear focus, as the ideas are scattered and make it hard for the reader to follow the main point.",
        correctAnswer: "C. Unclear focus",
        choices: [
            "A. Clear focus",
            "B. Emotional depth",
            "C. Unclear focus",
            "D. Strong conclusion",
        ],
        choiceType: "alpha"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the letter of the best answer that shows your understanding of content in writing. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the letter of the best answer that shows your understanding of content in writing. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the letter of the best answer that shows your understanding of content in writing. ",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
            "",
            "",
            "",
        ],
        choiceType: "alpha"
    },
]


const CONTENT_BEGINNER_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        },
    },
    {
        label: "Set B",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        },
    },
    {
        label: "Set C",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        },
    },
    {
        label: "Set D",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        },
    },
    {
        label: "Set E",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        },
    },
]

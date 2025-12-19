import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each statement and determine if it is true or false.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Beginning an essay with “Hola my name is…” without any scene or context leaves readers unprepared for the narrative.",
        explanation: "True – Opening with “Hola my name is…” fails to provide any context, scene, or hook, leaving readers unprepared to engage with the narrative.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Opening with “My memorable day in my life…” provides a precise and focused introduction.",
        explanation: "False – “My memorable day in my life…” is too general and does not give a clear, focused introduction that captures the reader’s interest.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Writing “I was shocked” without explaining the cause prevents the reader from understanding the experience.",
        explanation: "True – Saying “I was shocked” without explaining why or how the shock occurred prevents the reader from fully understanding the experience.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Repeating the phrase “the most memorable happened in my life” adds meaningful development to the idea.",
        explanation: "False – Repeating “the most memorable happened in my life” adds no new information and does not develop the idea further.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Ending an essay immediately after receiving a gift usually results in an incomplete conclusion.",
        explanation: "True – Ending an essay immediately after receiving a gift lacks reflection or insight, resulting in an incomplete conclusion.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Listing actions such as “we eat, swim, and do anything” is an effective way to develop a detailed narrative.",
        explanation: "False – Listing actions such as “we eat, swim, and do anything” is superficial and does not provide detailed, vivid development of the narrative.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Saying “I’m happy because…” without specific reasons weakens the emotional content of the essay.",
        explanation: "True – Writing “I’m happy because…” without specifics weakens emotional depth, leaving readers unclear about what caused the happiness.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Shifting from birthday → food → phone → eating → old phone → new phone helps maintain a clear focus.",
        explanation: "False – Jumping between unrelated topics like birthday, food, and phone disrupts focus and makes the narrative hard to follow.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A vague opening sentence can still create clarity even without identifying the main idea directly.",
        explanation: "True – A vague opening can still guide readers if subsequent details clarify the main idea and connect the events logically.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Ending with a short statement like “That’s all” provides sufficient personal reflection for a conclusion.",
        explanation: "False – Ending with “That’s all” provides no reflection or insight, leaving the conclusion weak and incomplete.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "",
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
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "",
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
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "",
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
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "",
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
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]


const CONTENT_INTERMIDIATE_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
]

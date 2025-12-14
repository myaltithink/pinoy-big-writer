import type { QuizQuestion, SetContainer } from "../types"
import { QuestionType } from "./QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "",
        explanation: "",
        correctAnswer: "",
        choices: [
            "",
        ]
    },
]


const CATEGORY_LEVEL_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "",
            questions: setA,
        }
    },
]

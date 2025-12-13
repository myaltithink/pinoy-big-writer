import type { QuizQuestion, QuizSet, SetContainer } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const setA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. This essay will explore the role of jeepneys in Philippine transportation. Jeepneys represent our unique creativity and daily life. Which part of the essay is this?",
        explanation: "The introduction presents the topic and a thesis statement outlining main ideas, often with general statements to engage the reader",
        correctAnswer: "A. Introduction",
        choices: [
            "A. Introduction",
            "B. Body",
            "C. Conclusion",
        ]
    }
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. This essay will explore the role of jeepneys in Philippine transportation. Jeepneys represent our unique creativity and daily life. Which part of the essay is this?",
        explanation: "The introduction presents the topic and a thesis statement outlining main ideas, often with general statements to engage the reader",
        correctAnswer: "A. Introduction",
        choices: [
            "A. Introduction",
            "B. Body",
            "C. Conclusion",
        ]
    }
]

export const ORG_BEGINER_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "dwasdawdw",
            questions: setB
        }
    }
]

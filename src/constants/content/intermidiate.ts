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
        direction: "Read each statement and determine if it is true or false.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A paragraph that lists actions instead of explaining them shows weak content development.",
        explanation: "True – Listing actions without details or explanations prevents the reader from fully understanding the events, showing weak content development.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Repeating “I enjoyed it” multiple times effectively expands the idea.",
        explanation: "False – Repeating “I enjoyed it” adds no new information and does not expand the idea meaningfully.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Stating feelings such as “I was sad” without explaining why demonstrates strong emotional depth.",
        explanation: "False – Simply stating “I was sad” without reasons does not show emotional depth since the cause or context is missing.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Naming people without describing their role in the event provides complete context for the reader.",
        explanation: "False – Naming people without describing their roles leaves the reader without enough context; the content remains incomplete.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. An essay that stops mid-sentence reflects incomplete thinking and weakens the content.",
        explanation: "True – Stopping mid-sentence reflects unfinished thinking and weakens the narrative’s development.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Repeating “My family makes me happy” several times effectively develops the main idea.",
        explanation: "False – Repeating “My family makes me happy” does not provide details or examples, failing to develop the main idea effectively.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Including unrelated facts about a trip, without explaining what happened, shows limited detail.",
        explanation: "True – Including unrelated facts without explanation shows limited detail and makes the narrative unfocused.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Ending with life advice that does not connect to the story can make the conclusion feel weak or missing.",
        explanation: "True – Ending with advice unrelated to the story disconnects the conclusion from the main events, weakening it.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Writing “we go outside” without description gives the reader enough imagery to understand the event.",
        explanation: "False – Writing “we go outside” without description does not give enough imagery for the reader to visualize the event.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Explaining what happened and why it mattered significantly strengthens the content.",
        explanation: "True – Explaining both what happened and why it mattered adds depth and clarity, significantly strengthening the content.",
        correctAnswer: "True",
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
        direction: "Read each statement and determine if it is true or false.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A conclusion that restates the lesson learned helps connect the experience to personal reflection.",
        explanation: "True – A conclusion that restates the lesson learned helps the reader connect the main experience to the writer’s personal reflection.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Listing several events in quick sequence often causes missing cause-and-effect relationships.",
        explanation: "True – Listing events quickly can make it hard to show the cause-and-effect relationship between them.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Leaving out the setting can reduce the reader’s understanding of the event.",
        explanation: "True – Omitting the setting reduces the reader’s understanding of where and when the events happened.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Using only action verbs (e.g., “we ran, we ate”) typically produces meaningful, detailed content.",
        explanation: "False – Using only action verbs focuses on what happened but does not provide meaningful details or deeper content.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A main idea that is too broad makes it difficult for supporting details to fully develop the content.",
        explanation: "True – A broad main idea makes it challenging for supporting details to fully explain or develop the topic.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Leaving out the significance of the moment still results in a meaningful and complete essay.",
        explanation: "False – Leaving out the significance prevents the essay from conveying why the moment matters.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Restating the same fact in different wording is an effective way to deepen meaning.",
        explanation: "False – Rewriting the same fact does not deepen meaning; it only repeats information.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Short, undeveloped statements like “I’m happy” provide complete emotional depth even without explanation.",
        explanation: "False – Short statements like “I’m happy” lack emotional depth and do not explain feelings clearly.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. An introduction that includes context and a clear topic helps the writer stay focused.",
        explanation: "True – Including context and a clear topic in the introduction helps the writer maintain focus throughout the essay.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Writing about a contest, then new friends, then confidence, then sadness shows a clear and focused narrative.",
        explanation: "False – Jumping between unrelated events creates a confusing narrative that lacks clarity and focus.",
        correctAnswer: "False",
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
        direction: "Read each statement and determine if it is true or false.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A writer who describes the event but never explains its impact shows lack of personal reflection.",
        explanation: "True – Describing events without explaining their impact prevents the reader from understanding the writer’s personal reflection.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Repeating phrases like “we all laughed” multiple times adds depth rather than repetition.",
        explanation: "False – Repeating phrases like “we all laughed” multiple times creates redundancy rather than adding depth.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Including sensory details that are unrelated to feelings effectively enhances emotional depth.",
        explanation: "False – Sensory details that do not relate to emotions do not contribute to meaningful emotional depth.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Describing events in random order can make the narrative hard to follow.",
        explanation: "True – Presenting events in random order can confuse the reader and disrupt the narrative flow.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Abruptly stopping mid-thought creates incomplete content.",
        explanation: "True – Stopping abruptly leaves ideas incomplete and the content underdeveloped.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A paragraph remains coherent even if the topic sentence does not align with its supporting sentences.",
        explanation: "False – A paragraph loses coherence if the topic sentence does not match its supporting sentences.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Listing many small events instead of developing one main event often results in a lack of focus.",
        explanation: "True – Listing many small events prevents the narrative from focusing on one main event, weakening clarity.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Explaining emotions with reasons (e.g., “I was sad because…”) increases emotional depth.",
        explanation: "True – Explaining emotions with reasons helps the reader understand the significance of feelings.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Combining unrelated memories in one paragraph strengthens the organizational flow.",
        explanation: "False – Combining unrelated memories in one paragraph disrupts organization and confuses the flow.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. A conclusion without an explanation of what was learned lacks meaningful closure.",
        explanation: "True – A conclusion that does not explain the lesson learned fails to provide meaningful closure.",
        correctAnswer: "True",
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
        direction: "Read each statement and determine if it is true or false.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Simply stating “the day I celebrated my birthday” is not enough; the writer still needs to develop the moment and its importance.",
        explanation: "True - Just mentioning the day without describing what happened or why it mattered does not give the reader a full picture. Development is necessary.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Using general phrases such as “it was nice” repeatedly shows limited description.",
        explanation: "True - Phrases like “it was nice” are vague and do not give specific details, which weakens the content.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. A chronological list of events always forms a convincing narrative even without reflection.",
        explanation: "False - Listing events in order does not automatically make a story convincing. Reflection, explanation, or context is needed to make the narrative meaningful.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Including every idea the writer remembers often results in unclear and scattered content.",
        explanation: "True - Putting too many ideas together without organization can confuse the reader and weaken the narrative’s focus.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Shifting between emotions without reasons strengthens emotional depth.",
        explanation: "False - Randomly switching emotions without context makes the writing confusing and reduces emotional impact rather than strengthening it.",
        correctAnswer: "False",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A paragraph cannot stay coherent if each sentence discusses a different topic.",
        explanation: "True - Coherence requires sentences in a paragraph to relate to a single main idea; otherwise, the paragraph feels scattered.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Adding facts that are unrelated to the main event weakens the narrative’s focus.",
        explanation: "True - Irrelevant information distracts the reader and makes the narrative less focused.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A reflection that simply repeats the introduction does not add meaning to the ending.",
        explanation: "True - Effective conclusions or reflections should provide insight, learning, or a deeper meaning, not just restate the introduction.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A memorable-day narrative is incomplete if it never explains what made the day memorable.",
        explanation: "True - Without explaining why the day was memorable, the narrative lacks significance for the reader.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Describing only feelings, without describing the event, leads to incomplete content.",
        explanation: "True - Feelings alone do not give the reader enough information about what happened. Both the event and the emotions are needed for complete content.",
        correctAnswer: "True",
        choices: [
            "True",
            "False",
        ],
        choiceType: "none"
    },
]


export const CONTENT_INTERMIDIATE_SET: SetContainer[] = [
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

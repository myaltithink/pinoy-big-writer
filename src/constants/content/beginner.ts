import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"


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
        correctAnswer: "The ideas, details, and messages presented.",
        choices: [
            "The handwriting style.",
            "The grammar rules used.",
            "The number of paragraphs.",
            "The ideas, details, and messages presented.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Why is content important in writing?",
        explanation: "2.	The answer is D since content matters most in writing because it gives readers meaningful ideas; without solid content, a piece becomes empty no matter how neat or long it is.",
        correctAnswer: "It provides meaningful ideas for the reader.",
        choices: [
            "It adds color to the page.",
            "It removes spelling errors.",
            "It makes your paper longer.",
            "It provides meaningful ideas for the reader.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which best describes strong content?",
        explanation: "The correct answer is B because strong content is built on clear, detailed, and meaningful ideas that allow the reader to fully understand the message instead of guessing.",
        correctAnswer: "Clear, detailed, meaningful ideas.",
        choices: [
            "Very short sentences.",
            "Clear, detailed, meaningful ideas.",
            "Vague ideas with no explanation.",
            "Random thoughts in one paragraph.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A student writes: “It was a memorable day.” What content issue is present?",
        explanation: "The answer is A because the statement “It was a memorable day” gives no specific details or explanation, showing a lack of content development.",
        correctAnswer: "Limited details",
        choices: [
            "Limited details",
            "Repetition",
            "Strong imagery",
            "Too many details",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A good introduction should…",
        explanation: "The correct answer is D since an introduction should guide the reader by giving context and showing the main focus of the piece, making the writing easier to follow.",
        correctAnswer: "Set context and present the focus.",
        choices: [
            "Confuse the reader.",
            "Add grammar errors.",
            "Be unrelated to the topic.",
            "Set context and present the focus.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A conclusion is important because it…",
        explanation: "The answer is C because a conclusion exists to summarize the key ideas and leave the reader with final meaning or reflection, not just repeat or extend the essay unnecessarily.",
        correctAnswer: "Summarizes meaning and reflection",
        choices: [
            "Makes the essay longer",
            "Adds new unrelated ideas",
            "Summarizes meaning and reflection",
            "Repeats the introduction word-for-word",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A student describes three memorable days in one essay. The content issue is…",
        explanation: "The correct answer is A because including three memorable days in one essay breaks the focus, making the content scattered instead of centered on one main idea.",
        correctAnswer: "Unclear focus",
        choices: [
            "Unclear focus",
            "Strong organization",
            "Too many transitions",
            "Lack of emotional depth",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which is an example of emotional depth?",
        explanation: "The answer is D since emotional depth comes from specific feelings paired with clear reasons, and this option explains both the emotion and its cause meaningfully.",
        correctAnswer: "“My happiness came from finally seeing my father after months apart.”",
        choices: [
            "“I was happy.”",
            "“I was sad so I cried.”",
            "“Feelings happened.”",
            "“My happiness came from finally seeing my father after months apart.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. The question “What makes this moment important?” helps improve…",
        explanation: "The correct answer is B because asking “What makes this moment important?” develops the richness of the ideas, which directly strengthens the content of the writing.",
        correctAnswer: "Content",
        choices: [
            "Capitalization",
            "Content",
            "Grammar",
            "Punctuation",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which detail adds stronger content?",
        explanation: "The answer is D because strong content needs vivid, specific details, and this option paints a clear picture of actions and emotions rather than giving a vague statement.",
        correctAnswer: "“We played parlor games, and my teammates laughed so loudly my stomach hurt.”",
        choices: [
            "“We had fun.”",
            "“The party was nice.”",
            "“Fun things happened.”",
            "“We played parlor games, and my teammates laughed so loudly my stomach hurt.”",
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
        correctAnswer: "All of the above.",
        choices: [
            "A topic sentence.",
            "A clear beginning.",
            "A personal reflection.",
            "All of the above.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A student repeats “I enjoyed it” four times. This shows…",
        explanation: "Repeating “I enjoyed it” four times demonstrates repetition of ideas because the student expresses the same thought without adding new meaning or detail.",
        correctAnswer: "Repetition of ideas.",
        choices: [
            "Clear focus.",
            "Strong content.",
            "Emotional depth.",
            "Repetition of ideas.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which question helps add content?",
        explanation: "Asking “What exactly happened?” helps add content by encouraging the writer to provide specific details and clarify the events.",
        correctAnswer: "“What exactly happened?”",
        choices: [
            "“Is this sentence long?”",
            "“What exactly happened?”",
            "“Is my handwriting neat?”",
            "“Where do I put commas?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Content is strengthened when the writer includes…",
        explanation: "Content is strengthened when the writer includes precise and relevant details that directly support the topic, instead of unrelated or random information.",
        correctAnswer: "Precise and relevant details.",
        choices: [
            "Random jokes.",
            "Unrelated facts.",
            "Irrelevant stories.",
            "Precise and relevant details.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which describes a missing conclusion?",
        explanation: "A missing conclusion occurs when the essay ends suddenly without summarizing or reflecting, leaving the reader without closure.",
        correctAnswer: "The essay ends suddenly.",
        choices: [
            "The essay ends suddenly.",
            "The essay ends with a summary.",
            "The essay ends with a reflection.",
            "The essay ends with a transition.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. What makes a description detailed?",
        explanation: "A description becomes detailed by adding sensory details that allow the reader to see, hear, feel, or imagine the scene clearly.",
        correctAnswer: "Adding sensory details.",
        choices: [
            "Using unclear words.",
            "Leaving out examples.",
            "Adding sensory details.",
            "Mentioning only one short idea.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Scenario: A student writes about a trip but doesn’t say where they went or what they did. The issue is…",
        explanation: "Not stating where the trip happened or what the student did shows limited details, making the content unclear and incomplete.",
        correctAnswer: "Limited details.",
        choices: [
            "Clear reflection.",
            "Limited details.",
            "Good organization.",
            "Too many examples.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A meaningful conclusion often includes…",
        explanation: "A meaningful conclusion often includes personal reflection because it gives insight into the writer’s thoughts or feelings about the topic.",
        correctAnswer: "Personal reflection.",
        choices: [
            "A new beginning.",
            "Personal reflection.",
            "A list of random facts.",
            "A joke unrelated to the topic.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which is the strongest content sentence?",
        explanation: "The strongest content sentence is specific and detailed, explaining why the moment is unforgettable and providing concrete events that illustrate it.",
        correctAnswer: "“It became unforgettable because my mom surprised me with a letter she secretly wrote for me.”",
        choices: [
            "“I don’t know.”",
            "“It was unforgettable.”",
            "“It was memorable because it felt special.”",
            "“It became unforgettable because my mom surprised me with a letter she secretly wrote for me.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. An essay that jumps between topics shows…",
        explanation: "An essay that jumps between topics demonstrates unclear focus, as the ideas are scattered and make it hard for the reader to follow the main point.",
        correctAnswer: "Unclear focus",
        choices: [
            "Clear focus",
            "Emotional depth",
            "Unclear focus",
            "Strong conclusion",
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
        question: "1. Why do details matter in writing?",
        explanation: "Details matter in writing because they allow readers to visualize and experience what the writer is describing, making the text more engaging and meaningful.",
        correctAnswer: "They help readers imagine the experience.",
        choices: [
            "They reduce clarity.",
            "They make the page crowded.",
            "They add incorrect information.",
            "They help readers imagine the experience.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Scenario: A student writes only two sentences for a “memorable day.” The issue is…",
        explanation: "Writing only two sentences for a “memorable day” indicates not enough content, as the essay lacks sufficient ideas and development to convey the experience.",
        correctAnswer: "Not enough content.",
        choices: [
            "Lack of grammar.",
            "Missing reflection.",
            "Weak introduction.",
            "Not enough content.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which question improves emotional depth?",
        explanation: "Asking “Why did I feel this way?” improves emotional depth by encouraging the writer to explain their feelings and the reasons behind them, adding meaning to the content.",
        correctAnswer: "“Why did I feel this way?”",
        choices: [
            "“Why did I feel this way?”",
            "“What font should I use?”",
            "“Should I double-space this?”",
            "“How many paragraphs do I need?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. What is the purpose of a reflection?",
        explanation: "The purpose of a reflection is to show what the writer learned or felt, providing insight into their thoughts and emotions rather than just stating events.",
        correctAnswer: "To show what the writer learned or felt.",
        choices: [
            "To confuse the reader.",
            "To describe handwriting.",
            "To make the essay longer.",
            "To show what the writer learned or felt.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence shows lack of reflection?",
        explanation: "“That’s all.” shows lack of reflection because it provides no insight, learning, or explanation about the experience.",
        correctAnswer: "“That’s all.”",
        choices: [
            "“That’s all.”",
            "“This day taught me to be patient.”",
            "“I learned the value of friendship.”",
            "“Now I understand why my mother worries.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Strong content stays…",
        explanation: "Strong content stays focused, maintaining clarity and unity, which allows the reader to follow the main ideas without getting lost in irrelevant details.",
        correctAnswer: "Focused",
        choices: [
            "Confusing",
            "Focused",
            "Off-topic",
            "Repetitive",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. An introduction becomes effective when it includes…",
        explanation: "An introduction becomes effective when it includes a topic and context, giving the reader a clear sense of what the essay is about and setting up the main idea.",
        correctAnswer: "Topic + context",
        choices: [
            "No main idea",
            "Topic + context",
            "Grammar errors",
            "Unrelated information",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which is an example of repetition?",
        explanation: "Repetition is shown in “My brother laughed. My sister laughed. We all laughed.” because the same idea is expressed multiple times without adding new meaning.",
        correctAnswer: "“My brother laughed. My sister laughed. We all laughed.”",
        choices: [
            "“The sky was blue.”",
            "“We prepared early.”",
            "“The food tasted like sweet mango.”",
            "“My brother laughed. My sister laughed. We all laughed.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. What improves unclear focus?",
        explanation: "Unclear focus is improved by removing irrelevant ideas, which helps the essay stay on topic and keeps the reader’s attention on the main point.",
        correctAnswer: "Removing irrelevant ideas.",
        choices: [
            "Adding more events.",
            "Changing handwriting.",
            "Removing irrelevant ideas.",
            "Writing shorter sentences only.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Scenario: A student explains the event but not why it mattered. This shows…",
        explanation: "Explaining the event without stating why it mattered shows missing reflection, since the writer fails to express the significance or personal learning from the experience.",
        correctAnswer: "Missing reflection",
        choices: [
            "Strong content",
            "Emotional depth",
            "Missing reflection",
            "Excellent introduction",
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
        question: "1. Which detail best strengthens a narrative?",
        explanation: "“The lanterns glowed like tiny suns above us.” strengthens a narrative because it provides a vivid, specific detail that helps the reader visualize the scene, making the story more engaging.",
        correctAnswer: "“The lanterns glowed like tiny suns above us.”",
        choices: [
            "“It happened.”",
            "“I saw things.”",
            "“Nothing special.”",
            "“The lanterns glowed like tiny suns above us.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Why should conclusions not introduce new ideas?",
        explanation: "Conclusions should not introduce new ideas because they confuse readers, shifting focus away from the essay’s main points instead of wrapping them up.",
        correctAnswer: "They confuse readers.",
        choices: [
            "They confuse readers.",
            "They improve grammar.",
            "They help with capitalization.",
            "They make the introduction longer.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which is a content-focused revision?",
        explanation: "Adding more specific actions and descriptions is a content-focused revision since it enhances the meaning and clarity of the narrative rather than just changing grammar or word choice.",
        correctAnswer: "Adding more specific actions and descriptions.",
        choices: [
            "Using fancier words.",
            "Shortening sentences.",
            "Changing all verbs to present tense.",
            "Adding more specific actions and descriptions.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A good narrative content includes…",
        explanation: "Good narrative content includes people, place, and actions, which give the story structure and help the reader understand who is involved, where events happen, and what occurs.",
        correctAnswer: "People, place, actions.",
        choices: [
            "Only the ending.",
            "Unrelated ideas.",
            "Very few details.",
            "People, place, actions.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Scenario: The essay describes feelings but not the cause. Which issue?",
        explanation: "Describing feelings without explaining the cause shows a lack of emotional depth, because the reader cannot fully understand why the emotions matter.",
        correctAnswer: "Emotional depth.",
        choices: [
            "Lack of grammar.",
            "Emotional depth.",
            "Weak introduction.",
            "Not enough content.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Why is personal reflection important?",
        explanation: "Personal reflection is important because it shows growth or meaning, allowing the writer to explain what they learned or how the experience affected them.",
        correctAnswer: "It shows growth or meaning.",
        choices: [
            "It fixes spelling.",
            "It adds paragraphs.",
            "It adds paragraphs.",
            "It shows growth or meaning.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A writer who stays on one event shows…",
        explanation: "A writer who stays on one event shows clear focus, keeping the essay unified and easy for the reader to follow.",
        correctAnswer: "Clear focus",
        choices: [
            "Clear focus",
            "Repetition",
            "Missing details",
            "Poor reflection",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. What is the role of relevant details?",
        explanation: "Relevant details support the main idea by providing examples or explanations that strengthen the message, rather than distracting or shortening the text unnecessarily.",
        correctAnswer: "To support the main idea.",
        choices: [
            "To distract readers.",
            "To replace transitions.",
            "To support the main idea.",
            "To make paragraphs shorter.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Scenario: The essay ends without explaining why it was memorable. This is a…",
        explanation: "An essay that ends without explaining why it was memorable shows a missing conclusion, as the final part fails to summarize significance or provide closure.",
        correctAnswer: "Missing conclusion",
        choices: [
            "Clear summary",
            "Strong conclusion",
            "Personal reflection",
            "Missing conclusion",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which sentence shows clear content?",
        explanation: "“We joined the trivia game, and I shouted the correct answer just before the buzzer.” shows clear content because it gives specific actions and details that make the event vivid and understandable.",
        correctAnswer: "“We joined the trivia game, and I shouted the correct answer just before the buzzer.”",
        choices: [
            "“Fun!”",
            "“We played.”",
            "“We did activities during the event.”",
            "“We joined the trivia game, and I shouted the correct answer just before the buzzer.”",
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
        question: "1. A meaningful introduction often answers…",
        explanation: "A meaningful introduction answers who, what, when, and where because it provides the reader with essential context and sets up the topic clearly.",
        correctAnswer: "Who, what, when, where.",
        choices: [
            "The future tense.",
            "Word spelling rules.",
            "How to use commas.",
            "Who, what, when, where.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. What makes content “rich”?",
        explanation: "Content is “rich” when it has enough detail, relevance, and meaning, making the writing informative, engaging, and understandable.",
        correctAnswer: "Enough detail + relevance + meaning",
        choices: [
            "Enough detail + relevance + meaning",
            "Fancy metaphors only",
            "Handwritten notes",
            "Many long words",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which improves repetition?",
        explanation: "Repetition is improved by adding different, specific examples, which keeps ideas fresh and avoids stating the same point multiple times.",
        correctAnswer: "Adding different, specific examples.",
        choices: [
            "Changing verb tense.",
            "Writing longer sentences.",
            "Removing necessary details.",
            "Adding different, specific examples.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Scenario: A student includes facts not connected to the topic. The issue is…",
        explanation: "Including facts not connected to the topic shows irrelevant details, which distracts the reader and weakens the essay’s focus.",
        correctAnswer: "Irrelevant details.",
        choices: [
            "Clear focus.",
            "Strong content.",
            "Irrelevant details.",
            "Emotional depth.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. What question helps strengthen a conclusion?",
        explanation: "Asking “What did this experience teach me?” strengthens a conclusion by encouraging reflection and showing the significance of the events.",
        correctAnswer: "“What did this experience teach me?”",
        choices: [
            "“What font should I use?”",
            "“How long should this be?”",
            "“Do I need more commas?”",
            "“What did this experience teach me?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Good content avoids…",
        explanation: "Good content avoids repetition because repeating the same ideas reduces clarity and makes the writing less engaging.",
        correctAnswer: "Repetition",
        choices: [
            "Clarity",
            "Reflection",
            "Repetition",
            "Strong details",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence shows personal reflection?",
        explanation: "Personal reflection is shown in “I realized trust grows when people listen to each other” because it explains the writer’s insight or learning from the experience.",
        correctAnswer: "“I realized trust grows when people listen to each other.”",
        choices: [
            "“We talked a lot.”",
            "“We finished late.”",
            "“The day was tiring.”",
            "“I realized trust grows when people listen to each other.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. What strengthens emotional depth?",
        explanation: "Emotional depth is strengthened by explaining the cause of your emotions, helping readers understand why the writer feels a certain way.",
        correctAnswer: "Explaining the cause of your emotions.",
        choices: [
            "Copying the introduction.",
            "Explaining the cause of your emotions.",
            "Listing events only.",
            "Shortening descriptions.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A focused essay is one that…",
        explanation: "A focused essay stays on one central idea, keeping the writing unified and making it easier for the reader to follow.",
        correctAnswer: "Stays on one central idea",
        choices: [
            "Adds random jokes",
            "Changes topics often",
            "Discusses many topics",
            "Stays on one central idea",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is content the “heart” of writing?",
        explanation: "Content is the “heart” of writing because it gives meaning, clarity, and purpose, making the writing valuable and understandable to readers.",
        correctAnswer: "Because it gives meaning, clarity, and purpose.",
        choices: [
            "Because it decorates the page.",
            "Because it controls punctuation.",
            "Because it improves handwriting.",
            "Because it gives meaning, clarity, and purpose.",
        ],
        choiceType: "alpha"
    },
]

const metadata: SetMetadata = {
    passingScore: 7,
    timeLimit: 20
}

export const CONTENT_BEGINNER_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        },
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        },
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        },
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        },
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 20 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        },
    },
]

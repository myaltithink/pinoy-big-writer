import type { PracticeQuiz, QuizQuestion, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const week1SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Maria wrote a paragraph that starts with, “Goats are important animals in a farm.” This sentence introduces the main idea.",
        explanation: "The sentence introduces what the paragraph is about and presents the main idea of the paragraph.",
        correctAnswer: "Topic Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Irrelevant Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which part of the paragraph gives explanations, examples, or details about the main idea?",
        explanation: "These sentences explain the main idea by giving details, examples, or explanations.",
        correctAnswer: "Supporting Sentences",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "None of the above"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Lino ends his paragraph with, “Overall, goats contribute to farm life in many ways.”",
        explanation: "The sentence signals a wrap-up and summarizes the main idea of the paragraph.",
        correctAnswer: "Concluding Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Random Idea"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. During a class essay, a student adds three facts about sunlight, soil, and water after writing “Plants need these to grow.”",
        explanation: "Adding facts after the main idea provides details that support and explain it.",
        correctAnswer: "Supporting Sentences",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Repetition"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which sentence in a paragraph usually appears first and tells what the paragraph is about?",
        explanation: "This sentence usually appears first and tells the reader what the paragraph will discuss.",
        correctAnswer: "Topic Sentence",
        choices: [
            "Supporting Sentence",
            "Topic Sentence",
            "Concluding Sentence",
            "Random Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A paragraph has a clear beginning, middle, and ending. Which of the following is NOT part of this structure?",
        explanation: "A paragraph includes a beginning, middle, and ending; a book title is not part of its structure.",
        correctAnswer: "Title of the Book",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Title of the Book"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Reading a paragraph about dogs, you find the last sentence says, “Dogs make loyal companions.”",
        explanation: "The last sentence summarizes the idea about dogs and gives closure to the paragraph.",
        correctAnswer: "Concluding Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Unnecessary"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which of these sentences could be a topic sentence?",
        explanation: "This sentence states a general idea that can be explained and supported by other sentences.",
        correctAnswer: "Dogs are friendly animals that can live with humans.",
        choices: [
            "Dogs need food...",
            "Dogs are friendly animals that can live with humans.",
            "Dogs can bark loudly.",
            "Dogs enjoy playing fetch."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A student is asked, “What is the main idea of this paragraph?”",
        explanation: "This part clearly states the main idea and helps the reader understand the paragraph.",
        correctAnswer: "Topic Sentence",
        choices: [
            "Supporting Sentences",
            "Concluding Sentence",
            "Topic Sentence",
            "Middle Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Why is it important to have a concluding sentence in a paragraph?",
        explanation: "It ends the paragraph by summarizing the ideas and giving a sense of completion.",
        correctAnswer: "To provide closure and sum up ideas",
        choices: [
            "To confuse...",
            "To provide closure and sum up ideas",
            "To add new...",
            "To list examples"
        ],
        choiceType: 'alpha'
    }
];

const week1SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which of these best describes supporting sentences?",
        explanation: "Supporting sentences develop the paragraph by explaining the idea, giving examples, or adding details.",
        correctAnswer: "Sentences that explain, give examples, or add details.",
        choices: [
            "Summarize",
            "Introduce",
            "Sentences that explain, give examples, or add details.",
            "Random"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. During an essay about recycling, a student writes: “Recycling reduces waste, saves energy, and protects animals.”",
        explanation: "The sentence lists reasons and details about recycling, which explain the main idea.",
        correctAnswer: "Supporting Sentences",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Question"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “Computers help students study faster and organize information.” This sentence is most likely a:",
        explanation: "The sentence presents a general idea that can be explained further in the paragraph.",
        correctAnswer: "Topic Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Trivia"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. In a paragraph about summer, the last sentence says, “Summer is the perfect time to explore new hobbies.”",
        explanation: "The sentence appears at the end and wraps up the idea about summer.",
        correctAnswer: "Concluding Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Random Idea"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Which of these sentences could serve as a concluding sentence?",
        explanation: "The sentence summarizes the idea and clearly signals an ending to the paragraph.",
        correctAnswer: "Overall, birds' migration patterns are fascinating.",
        choices: [
            "Birds migrate...",
            "Many birds fly...",
            "Birds need food...",
            "Overall, birds' migration patterns are fascinating."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Why should a paragraph have a topic sentence?",
        explanation: "A topic sentence guides the reader by clearly stating what the paragraph will discuss.",
        correctAnswer: "To clearly introduce the main idea.",
        choices: [
            "Entertain",
            "To clearly introduce the main idea.",
            "Confuse",
            "Give random details"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Alex writes a paragraph where each sentence explains the main idea using specific facts. Which part is being described?",
        explanation: "The sentences add depth by explaining and developing the main idea through facts and examples.",
        correctAnswer: "Supporting Sentences",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "Irrelevant Details"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A student reads a paragraph about cats. Which sentence gives the paragraph a sense of closure?",
        explanation: "The last sentence completes the thought and gives the paragraph a clear ending.",
        correctAnswer: "The last sentence.",
        choices: [
            "First sentence",
            "The last sentence.",
            "Middle sentence",
            "Any random sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. What is the main role of supporting sentences in a paragraph?",
        explanation: "Supporting sentences expand the main idea by giving clear details and explanations.",
        correctAnswer: "To provide details that explain the main idea.",
        choices: [
            "Provide details that explain the main idea.",
            "State main idea",
            "Summarize",
            "Give a title"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which sequence correctly shows a well-organized paragraph?",
        explanation: "A clear paragraph begins with the main idea, develops it with details, and ends with a conclusion.",
        correctAnswer: "Topic -> Supporting -> Concluding",
        choices: [
            "Concluding -> Topic",
            "Topic -> Supporting -> Concluding",
            "Supporting -> Concluding",
            "Random -> Topic"
        ],
        choiceType: 'alpha'
    }
];

const week1SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A paragraph starts with, “Healthy habits improve our daily life.” What type of sentence is this?",
        explanation: "The sentence states the main idea of the paragraph and tells what it will be about.",
        correctAnswer: "Topic Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Random Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence provides examples or details that help explain the main idea?",
        explanation: "This type of sentence explains the main idea by giving examples or details.",
        correctAnswer: "Supporting Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Opening Statement"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The last sentence of a paragraph says: “In conclusion, reading every day improves vocabulary and imagination.”",
        explanation: "The sentence signals an ending and summarizes the idea discussed in the paragraph.",
        correctAnswer: "Concluding Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Irrelevant Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which of the following could be a supporting sentence for the topic sentence: “Fruit is healthy for everyone”?",
        explanation: "The sentence explains why fruit is healthy by giving a specific detail.",
        correctAnswer: "Fruits contain vitamins and minerals.",
        choices: [
            "Fruits contain vitamins and minerals.",
            "Fruit is delicious",
            "People eat fruit...",
            "Fruit comes in many colors"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Why is a topic sentence important in a paragraph?",
        explanation: "A topic sentence helps readers understand the focus of the paragraph from the start.",
        correctAnswer: "It introduces the main idea.",
        choices: [
            "Funny details",
            "It introduces the main idea.",
            "Provides ending",
            "Confuses readers"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A student adds facts, examples, and personal experience to his paragraph. These are:",
        explanation: "Facts, examples, and personal experiences develop and explain the main idea.",
        correctAnswer: "Supporting Sentences",
        choices: [
            "Topic Sentences",
            "Supporting Sentences",
            "Concluding Sentences",
            "Irrelevant Details"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which of these shows the correct order of a paragraph's parts?",
        explanation: "A clear paragraph begins with the main idea, develops it with details, and ends with a closing thought.",
        correctAnswer: "Topic -> Supporting -> Concluding",
        choices: [
            "Supporting -> Concluding -> Topic",
            "Topic -> Concluding -> Supporting",
            "Topic -> Supporting -> Concluding",
            "Concluding -> Supporting -> Topic"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. “In short, learning English opens many opportunities.” This sentence is most likely a:",
        explanation: "The phrase signals a summary that ends the paragraph and gives closure.",
        correctAnswer: "Concluding Sentence",
        choices: [
            "Topic Sentence",
            "Supporting Sentence",
            "Concluding Sentence",
            "Example Sentence"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A paragraph is confusing because sentences are random and not linked. Which part is missing or unclear?",
        explanation: "When ideas are unclear and unconnected, the paragraph lacks clear structure and focus.",
        correctAnswer: "All of the above",
        choices: [
            "Topic Sentence",
            "Supporting Sentences",
            "Concluding Sentence",
            "All of the above"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which of the following is true about a well-written paragraph?",
        explanation: "A well-written paragraph contains all three main parts working together.",
        correctAnswer: "It has a topic sentence, supporting sentences, and a concluding sentence.",
        choices: [
            "Only supporting sentences",
            "It has a topic sentence, supporting sentences, and a concluding sentence.",
            "Multiple topic sentences",
            "Ends with a question"
        ],
        choiceType: 'alpha'
    }
];

const week2SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. What is the main issue in Lino's essay about the Manila jeepney as a cultural icon if he focuses mostly on car mechanics and driving rules?",
        explanation: "Relevance - Lino talks about mechanics and driving rules, which are not related to the cultural significance of the jeepney, making the content irrelevant.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Carla writes about Bayanihan, explaining its history, modern examples, and community benefits.",
        explanation: "Development of Ideas - Carla explains Bayanihan with history, examples, and benefits, showing well-developed ideas.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which content element focuses on ensuring that all ideas are related to the topic?",
        explanation: "Relevance - Relevance ensures that all ideas are related to the main topic.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A student writes about Typhoon Yolanda but gives the wrong year of occurrence.",
        explanation: "Accuracy - Giving the wrong year for Typhoon Yolanda shows inaccurate content.",
        correctAnswer: "Accuracy",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. In an essay about a barangay clean-up drive, the student only lists activities without explaining their importance.",
        explanation: "Depth and Clarity - Simply listing activities without explaining them shows a lack of depth and clarity.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which content element ensures that ideas are fully explained with examples or details?",
        explanation: "Depth and Clarity - This element ensures ideas are fully explained with examples or details.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. While writing about rice farming in the Philippines, the student includes unrelated information about corn farming in Mexico.",
        explanation: "Relevance - Including unrelated information about corn farming makes the content irrelevant.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A paragraph lists Philippine heroes but only provides their names.",
        explanation: "Depth and Clarity - Listing heroes without any details shows insufficient depth and clarity.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Why is Depth and Clarity important in writing?",
        explanation: "Helps readers understand ideas clearly - Depth and clarity are important to make ideas clear, understandable, and detailed.",
        correctAnswer: "Helps readers understand ideas clearly",
        choices: [
            "Helps readers understand ideas clearly",
            "Makes content relevant",
            "Ensures accuracy",
            "Develops ideas logically"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. What is the difference between depth and clarity and development of Ideas in writing?",
        explanation: "Depth and clarity ensures ideas are explained clearly; development of ideas expands ideas with examples and details. Depth and clarity focus on making ideas understandable and clear for the reader, while development of ideas involves expanding those ideas with examples, explanations, or evidence.",
        correctAnswer: "Depth and clarity ensures ideas are explained clearly; development of ideas expands ideas with examples and details.",
        choices: [
            "Depth and clarity ensures ideas are explained clearly; development of ideas expands ideas with examples and details.",
            "Depth and clarity makes writing accurate; development of ideas makes it relevant.",
            "Depth and clarity is about relevance; development of ideas is about grammar.",
            "Depth and clarity develops ideas; development of ideas explains ideas clearly."
        ],
        choiceType: 'alpha'
    }
];

const week2SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Writing about Pampanga fiestas, a student only says, “They are fun.”",
        explanation: "The idea is too brief and vague; depth and clarity require the student to explain ideas more fully.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. While describing jeepney modernization in Metro Manila, the student gives correct facts, benefits, and real-life examples.",
        explanation: "The student expands ideas with examples and explanations, showing development of ideas.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which content element ensures that the information presented is correct and factual?",
        explanation: "Accuracy ensures that facts, information, and examples are correct and reliable.",
        correctAnswer: "Accuracy",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. While writing about national heroes, the student lists names but does not explain their contributions.",
        explanation: "The content lacks clear explanations; depth and clarity require elaboration.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student explains how kwek-kwek and taho are made and why people love them.",
        explanation: "The student expands ideas with details and explanations, showing proper development.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. While describing Philippine rivers, a student includes facts about the Nile River.",
        explanation: "The content is off-topic; relevance requires that all information relates to the main topic.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which content element ensures that all ideas support the main topic?",
        explanation: "Relevance ensures that information and examples directly relate to the topic being discussed.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Describing Ifugao rice terraces, a student explains construction, cultural significance, and tourist attractions . What quality of development of ideas did the student demonstrate? The student organizes the information logically, connecting each point to show how they relate to the overall topic.",
        explanation: "The student demonstrates development of ideas by elaborating on multiple aspects of the terraces and linking them logically, showing progression and clear connection between points rather than just listing facts.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Writing about mangroves, a student mentions them but does not provide clear information or supporting details about their role in protecting the environment.",
        explanation: "Ideas should be presented clearly and supported with details, allowing the reader to fully understand the message. In this case, the student mentions mangroves but gives only a vague statement without sufficient detail about their environmental role.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Writing about national symbols, a student provides examples, explanations, and significance.",
        explanation: "The student develops ideas by providing examples, explanations, and significance.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    }
];

const week2SetC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. A student writes about public transportation in the Philippines but includes information about airplanes abroad that are not related to the topic. What is the main issue with the student's content?",
        explanation: "The student includes airplanes abroad, which are not related to public transportation in the local context. The content does not match the topic.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Writing about traditional dances, a student explains Tinikling steps and cultural importance.",
        explanation: "The student provides detailed steps and explains the cultural importance, giving clear information that enhances understanding.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which content element ensures that ideas are fully developed with supporting details?",
        explanation: "Development of ideas ensures that information is expanded with supporting details, examples, or evidence to make the content complete and meaningful.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Describing national parks, a student explains why they are protected and tourist activities.",
        explanation: "The student presents clear details about why national parks are protected and tourist activities, making the content easier to understand.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student writes about mangrove conservation but only lists facts without expanding on the topic with examples, explanations, or evidence. What aspect of content is missing?",
        explanation: "Writers should expand their thoughts by providing examples, explanations, or evidence instead of just listing points. In this case, the student only lists facts, showing a lack of development of ideas.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A student writes about Cebu fiestas, including correct events and accurate explanations of their cultural significance. What quality of content does this demonstrate?",
        explanation: "Accuracy ensures that the information presented is correct and factual. In this case, the student includes correct events and provides accurate details about their cultural significance.",
        correctAnswer: "Accuracy",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A student writes about Philippine folk tales but only lists titles like Ibong Adarna and Alamat ng Pinya without providing any summaries, lessons, or cultural significance. Which of the following should the student include in their content?",
        explanation: "Listing only the titles of folk tales does not provide sufficient detail or clear information, making the content shallow. Proper development of ideas in folk tales should include summaries, moral lessons, and cultural significance to provide meaningful and informative content.",
        correctAnswer: "A summary of  Ibong Adarna , its moral lessons, and its cultural importance",
        choices: [
            "A summary of Ibong Adarna, its moral lessons, and its cultural importance.",
            "Only a list of other folk tale titles without details.",
            "Names of random stories from other countries like Cinderella or Aladdin.",
            "A description of modern movies unrelated to folk tales."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A student writes about Philippine wildlife and mentions tarsiers, explaining their role in the ecosystem. Which of the following content shows the most complete and correct information?",
        explanation: "The student's content is strong because it provides accurate and detailed information about tarsiers, including their ecological role, making the content informative and complete.",
        correctAnswer: "Explaining that tarsiers are small primates found in the Philippines, their role in controlling insects, and their importance to biodiversity.",
        choices: [
            "Explaining that tarsiers are small primates found in the Philippines, their role in controlling insects, and their importance to biodiversity.",
            "Simply listing “tarsiers live in the Philippines” without additional details.",
            "Writing about tigers and elephants instead of Philippine wildlife.",
            "Describing fictional animals like dragons and unicorns."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Why is accuracy essential in content writing?",
        explanation: "Accuracy ensures that the information presented is correct and factual, making the content reliable.",
        correctAnswer: "Providing correct and factual information without errors.",
        choices: [
            "Ensuring content is relevant to the topic.",
            "Presenting ideas clearly and with enough details.",
            "Providing correct and factual information without errors.",
            "Expanding ideas with examples, explanations, or evidence."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Writing about local festivals, a student provides examples, explanations, and significance.",
        explanation: "The student provides examples, explanations, and significance, presenting ideas clearly and with sufficient information.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy",
            "Development of Ideas"
        ],
        choiceType: 'alpha'
    }
];

const week3SetA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Maria writes a paragraph that starts with: “Healthy eating helps people stay strong.” Which part of the paragraph is this sentence?",
        explanation: "This sentence introduces the main idea of the paragraph and is usually placed at the beginning.",
        correctAnswer: "Topic sentence",
        choices: [
            "Supporting sentence",
            "Concluding sentence",
            "Topic sentence",
            "Example"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence best describes the purpose of a topic sentence?",
        explanation: "Its purpose is to tell the reader what the paragraph is about.",
        correctAnswer: "It introduces the main idea of the paragraph.",
        choices: [
            "It gives examples and explanations.",
            "It introduces the main idea of the paragraph.",
            "It ends the paragraph.",
            "It repeats supporting details."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. After stating the main idea, Paolo adds facts and examples to explain it further. What part of the paragraph is Paolo writing?",
        explanation: "These sentences provide explanations, examples, or details that help explain the main idea.",
        correctAnswer: "Supporting sentences",
        choices: [
            "Topic sentence",
            "Concluding sentence",
            "Title",
            "Supporting sentences"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence should come last in a paragraph?",
        explanation: "This sentence ends the paragraph by summarizing the ideas and giving a sense of closure.",
        correctAnswer: "A sentence that summarizes the ideas.",
        choices: [
            "A sentence that introduces the topic.",
            "A sentence that gives details.",
            "A sentence that summarizes the ideas.",
            "A sentence that asks a question."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A paragraph with a clear beginning, middle, and ending is considered _____.",
        explanation: "A paragraph with a clear beginning, middle, and ending is organized and easy to understand.",
        correctAnswer: "Well-structured",
        choices: [
            "Confusing",
            "Disorganized",
            "Well-structured",
            "Incomplete"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. While writing about Philippine festivals, Ana includes facts only about the topic and avoids unrelated stories. Which content quality is shown?",
        explanation: "This is shown when all ideas are related to the topic and unnecessary details are avoided.",
        correctAnswer: "Relevance",
        choices: [
            "Relevance",
            "Development of Ideas",
            "Depth and Clarity",
            "Accuracy and Completeness"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A student explains an idea clearly and supports it with details so readers can understand it well. What quality of content is demonstrated?",
        explanation: "This focuses on explaining ideas clearly and supporting them with enough details.",
        correctAnswer: "Depth and Clarity",
        choices: [
            "Relevance",
            "Depth and Clarity",
            "Accuracy and Completeness",
            "Organization"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Mark writes correct information and covers all important points about his topic. Which quality of content does this show?",
        explanation: "This is shown when the information is correct and the topic is fully covered.",
        correctAnswer: "Accuracy and Completeness",
        choices: [
            "Development of Ideas",
            "Relevance",
            "Creativity",
            "Accuracy and Completeness"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Instead of listing ideas, Liza expands her thoughts by adding explanations and evidence. This shows _____.",
        explanation: "This involves expanding ideas by adding examples, explanations, or evidence.",
        correctAnswer: "Development of Ideas",
        choices: [
            "Relevance",
            "Grammar control",
            "Development of Ideas",
            "Sentence variety"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Strong content in writing helps the reader _____.",
        explanation: "This helps the reader clearly understand the writer's message.",
        correctAnswer: "Understand the message clearly",
        choices: [
            "Get distracted easily",
            "Understand the message clearly",
            "Focus only on grammar",
            "Read faster"
        ],
        choiceType: 'alpha'
    }
];

const week3SetB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which part of the paragraph helps prevent confusion at the very start?",
        explanation: "This part helps readers immediately understand what the paragraph will discuss.",
        correctAnswer: "Topic sentence",
        choices: [
            "Concluding sentence",
            "Supporting sentence",
            "Topic sentence",
            "Final detail"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A paragraph contains many details but no clear main idea. Which part is missing?",
        explanation: "Without a clear main idea, readers do not know the focus of the paragraph.",
        correctAnswer: "Topic sentence",
        choices: [
            "Supporting sentences",
            "Topic sentence",
            "Concluding sentence",
            "Example"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which sentence best belongs in the middle of a paragraph?",
        explanation: "The middle of a paragraph is used to explain the main idea through details or examples.",
        correctAnswer: "A sentence that gives examples.",
        choices: [
            "A sentence that gives examples.",
            "A sentence that introduces the topic.",
            "A sentence that restates the main idea.",
            "A sentence that closes the paragraph."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Why should a concluding sentence NOT introduce new ideas?",
        explanation: "Introducing new ideas at the end can confuse readers and weaken the closure.",
        correctAnswer: "It distracts the reader.",
        choices: [
            "It makes the paragraph longer.",
            "It changes the font.",
            "It breaks sentence rules.",
            "It distracts the reader."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. What is the main benefit of having all three parts of a paragraph?",
        explanation: "Using all parts ensures ideas are presented clearly from start to finish.",
        correctAnswer: "Clear and organized ideas",
        choices: [
            "Faster writing",
            "Longer paragraphs",
            "Clear and organized ideas",
            "Creative sentences"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which situation shows weak relevance?",
        explanation: "Including unrelated details causes the paragraph to lose focus.",
        correctAnswer: "Adding unrelated personal stories.",
        choices: [
            "Giving examples related to the topic.",
            "Explaining ideas clearly.",
            "Adding unrelated personal stories.",
            "Supporting ideas with facts."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A reader finishes a paragraph and still has many questions. Which content quality is likely missing?",
        explanation: "When information feels lacking, the paragraph does not fully explain the topic.",
        correctAnswer: "Accuracy and completeness.",
        choices: [
            "Accuracy and completeness",
            "Relevance",
            "Grammar",
            "Capitalization"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Why is clarity important in writing?",
        explanation: "Clear writing allows readers to understand ideas without confusion.",
        correctAnswer: "To help readers understand ideas easily.",
        choices: [
            "To make sentences shorter.",
            "To help readers understand ideas easily.",
            "To use difficult words.",
            "To add more paragraphs."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which action BEST develops ideas in writing?",
        explanation: "Ideas become stronger when they are explained and supported.",
        correctAnswer: "Adding examples and explanations.",
        choices: [
            "Repeating the same sentence.",
            "Listing ideas without explanation.",
            "Adding examples and explanations.",
            "Changing the topic."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Writing that is meaningful and strong usually has _____.",
        explanation: "Strong writing depends on ideas that are both well-explained and correct.",
        correctAnswer: "Well-developed and accurate ideas",
        choices: [
            "Many sentences only",
            "Correct punctuation only",
            "Well-developed and accurate ideas",
            "Advanced vocabulary only"
        ],
        choiceType: 'alpha'
    }
];

const week1Metadata: SetMetadata = {
    passingScore: 0,
    timeLimit: 30
}

export const CONTENT_PRACTICE: PracticeQuiz = {
    week1: [
        {
            lessonNumber: 1,
            title: "",
            sets: [
                {
                    label: "Content Practice W1 Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetA
                    }
                },
                {
                    label: "Content Practice W1 Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetB
                    }
                },
                {
                    label: "Content Practice W1 Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetC
                    }
                },
            ]
        }
    ],
    week2: [
        {
            lessonNumber: 1,
            title: "",
            sets: [
                {
                    label: "Content Practice W2 Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetA
                    }
                },
                {
                    label: "Content Practice W2 Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetB
                    }
                },
                {
                    label: "Content Practice W2 Set C",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetC
                    }
                },
            ]
        }
    ],
    week3: [
        {
            lessonNumber: 1,
            title: "",
            sets: [
                {
                    label: "Content Practice W3 Set A",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetA
                    }
                },
                {
                    label: "Content Practice W3 Set B",
                    metadata: week1Metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetB
                    }
                },               
            ]
        }
    ]
}
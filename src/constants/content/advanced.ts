import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which revision adds the strongest content to a narrative introduction?",
        explanation: "D – This sentence sets a clear scene and introduces a specific event with context, giving the reader a strong start. The other options are vague and provide little information.",
        correctAnswer: "“Last December, I finally reunited with my childhood friend after six years.”",
        choices: [
            "“My birthday was fun.”",
            "“I celebrated something.”",
            "“It happened during a time.”",
            "“Last December, I finally reunited with my childhood friend after six years.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. A student writes: “I felt nervous.” Which improvement best adds emotional depth?",
        explanation: "B – Simply stating “I felt nervous” does not show why the emotion occurred. Explaining the cause adds emotional depth and helps readers connect to the experience.",
        correctAnswer: "Explaining what caused the nervousness.",
        choices: [
            "Repeating the sentence for emphasis.",
            "Explaining what caused the nervousness.",
            "Adding more events before the sentence.",
            "Changing “nervous” to a longer adjective.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Paragraph:\nWhen I arrived at the auditorium, everyone was already preparing for the performance. The curtains swayed gently, and the lights flickered as we checked the props.\nWhat is the main idea of the paragraph?",
        explanation: "D – The paragraph describes the preparations before a performance, including the setting and actions. The main idea focuses on what was happening, not lateness, curtains, or costumes.",
        correctAnswer: "The preparation happening before the performance.",
        choices: [
            "The narrator arrived late.",
            "How curtains were designed.",
            "The narrator’s costume errors.",
            "The preparation happening before the performance.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which sentence shows clear and relevant supporting detail?",
        explanation: "D – This sentence gives a specific action and reaction that supports the narrative. The other options are general statements without vivid detail.",
        correctAnswer: "“My hands shook as I stepped onto the stage, but hearing my classmates cheer gave me confidence.”",
        choices: [
            "“Everything went normally.”",
            "“We did a lot of stuff that day.”",
            "“Many people do performances.”",
            "“My hands shook as I stepped onto the stage, but hearing my classmates cheer gave me confidence.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student writes an essay about a memorable award ceremony but includes a long paragraph describing their vacation. The issue is…",
        explanation: "B – Including a paragraph about vacation in an essay about an award ceremony is off-topic. Content must be relevant to the main idea.",
        correctAnswer: "Irrelevant content.",
        choices: [
            "Weak vocabulary.",
            "Irrelevant content.",
            "Too much reflection.",
            "Excessive emotional depth.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which question helps a writer ensure their paragraph is fully developed?",
        explanation: "A – To ensure a paragraph is fully developed, the writer must check whether all details support the main ideThe other questions do not relate to content development.",
        correctAnswer: "“Do these details support the main idea?”",
        choices: [
            "“Do these details support the main idea?”",
            "“Is my handwriting neat?”",
            "“Is this paragraph long enough?”",
            "“Will this impress the teacher?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Paragraph:\nI learned a lot from our class debate. It helped me improve my speaking skills.\nWhat is this paragraph missing?",
        explanation: "C – The paragraph only has a topic sentence and a concluding idea; it lacks specific examples or events that explain how the student learned from the debate.",
        correctAnswer: "Supporting details that explain what happened during the debate.",
        choices: [
            "A topic sentence.",
            "A concluding transition.",
            "Supporting details that explain what happened during the debate.",
            "Grammar corrections.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence is the strongest topic sentence for a paragraph about winning a competition?",
        explanation: "D – A strong topic sentence clearly introduces the paragraph’s main idea with relevance and depth. The other options are too vague or general.",
        correctAnswer: "“Winning the competition was a turning point because it taught me to trust my abilities.”",
        choices: [
            "“It was a day to remember.”",
            "“Many schools join contests.”",
            "“Competitions are sometimes hard.”",
            "“Winning the competition was a turning point because it taught me to trust my abilities.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A focused narrative should…",
        explanation: "D – A focused narrative sticks to the main event and explains it step by step. Listing every memory or switching topics makes the content unfocused.",
        correctAnswer: "Follow the event step-by-step with relevant explanations",
        choices: [
            "List many events quickly without details.",
            "Switch topics to keep the reader entertained.",
            "Include every memory connected to childhood.",
            "Follow the event step-by-step with relevant explanations",
        ],
        choiceType: "alpha"
    },
        {
        type: QuestionType.MultipleChoice,
        question: "10.	A student ends an essay with: “This day reminded me that success requires effort.”\nThis sentence is an example of…",
        explanation: "B – This sentence shows reflection because it expresses the lesson learned from the event, rather than describing the setting or repeating earlier ideas.",
        correctAnswer: "Reflection",
        choices: [
            "Irrelevant detail",
            "Reflection",
            "Repetition",
            "Setting description",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which detail best strengthens the narrator’s description of fear?",
        explanation: "D – This sentence gives specific physical reactions and context, helping the reader feel the narrator’s fear. The other options are vague and do not show the intensity of the emotion.",
        correctAnswer: "“My heartbeat raced as the classroom fell silent, and I felt every eye turn to me.”",
        choices: [
            "“I was scared.”",
            "“It was a moment.”",
            "“Fear suddenly came.”",
            "“My heartbeat raced as the classroom fell silent, and I felt every eye turn to me.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Paragraph:\nDuring our community outreach, we visited a small learning center. The children welcomed us with wide smiles. We taught them simple games and shared stories.\nWhich sentence would best complete the paragraph by adding meaning?",
        explanation: "D – Adding reflection at the end connects the experience to a meaningful lesson. The other options only state events or facts without showing significance.",
        correctAnswer: "“The experience reminded me how meaningful small acts of kindness can be.”",
        choices: [
            "“It was tiring.”",
            "“Then we went home.”",
            "“We stayed there for two hours.”",
            "“The experience reminded me how meaningful small acts of kindness can be.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. A paragraph that presents ideas in random order usually lacks…",
        explanation: "B – Presenting ideas randomly makes a paragraph confusing and unfocused. Organization and focus are necessary for strong content.",
        correctAnswer: "Organization and focus.",
        choices: [
            "Emotional depth.",
            "Organization and focus.",
            "Sensory detail.",
            "Vocabulary variety.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which scenario shows a well-developed main idea?",
        explanation: "D – A well-developed main idea includes a clear event or topic, detailed actions, and reflections, giving the reader both information and insight. The other options are incomplete or scattered.",
        correctAnswer: "Describing one memorable event with detailed actions and reflections.",
        choices: [
            "Changing topics after every paragraph.",
            "Listing ten hobbies without explanation.",
            "Writing only one sentence about an important day.",
            "Describing one memorable event with detailed actions and reflections.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. A student writes about a school event but never explains why it mattered. The issue is…",
        explanation: "B – If the writer never explains why the event mattered, the paragraph lacks reflection, which is key to meaningful content.",
        correctAnswer: "Missing reflection",
        choices: [
            "Missing conclusion",
            "Missing reflection",
            "Too many details",
            "Strong content",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence adds relevant detail to support the idea of teamwork?",
        explanation: "D – This sentence gives specific actions that show collaboration and teamwork. The other options are irrelevant or general statements.",
        correctAnswer: "“We discussed our strategy, assigned roles, and helped each other finish the project on time.”",
        choices: [
            "“The day was sunny.”",
            "“We were classmates back then.”",
            "“We all have friends sometimes.”",
            "“We discussed our strategy, assigned roles, and helped each other finish the project on time.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Paragraph:\nI joined the science fair this year. It was a big event and many students participated.\nWhat is the paragraph missing to create strong content?",
        explanation: "A – To make the paragraph strong, the writer must include details about what they did and what made the experience memorable. Vocabulary and punctuation alone do not improve content.",
        correctAnswer: "Explanation of what the narrator did and what made the experience memorable.",
        choices: [
            "Explanation of what the narrator did and what made the experience memorable.",
            "A longer introduction.",
            "Fancy vocabulary.",
            "More punctuation.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which sentence best shows cause and effect?",
        explanation: "D – This sentence clearly links an action (teacher’s comment) with the effect (feeling proud), showing cause and effect. The other options do not connect events with consequences.",
        correctAnswer: "“I felt proud because my teacher told me she believed in my improvement.”",
        choices: [
            "“I cried loudly.”",
            "“The day ended.”",
            "“We were in the gym.”",
            "“I felt proud because my teacher told me she believed in my improvement.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. A writer planning to strengthen content should ask…",
        explanation: "D – Asking what was learned or realized helps strengthen content by adding reflection. The other questions do not improve the paragraph’s ideas.",
        correctAnswer: "“What did I learn or realize from this?”",
        choices: [
            "“Should I erase the title?”",
            "“What song should I listen to?”",
            "“How many sentences must I write?”",
            "“What did I learn or realize from this?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which closing sentence shows a strong, meaningful conclusion?",
        explanation: "C – A strong conclusion sums up the experience and provides insight or a lesson. The other options are vague or simply restate events.",
        correctAnswer: "“In the end, the experience taught me to value preparation and confidence.”",
        choices: [
            "“That’s all.”",
            "“The event happened so fast.”",
            "“In the end, the experience taught me to value preparation and confidence.”",
            "“I want more events like that.”",
        ],
        choiceType: "alpha"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Paragraph:\nThe moment my name was called, everything around me felt unreal. I stood slowly, hearing my classmates clap behind me.\nWhat is the main idea of the paragraph?",
        explanation: "B – The paragraph shows the narrator’s reaction to recognition or being awarded, including physical and emotional responses. The other options focus on irrelevant aspects like being late or analyzing the audience.",
        correctAnswer: "The narrator is reacting to being recognized or awarded.",
        choices: [
            "The narrator is late for class.",
            "The narrator is reacting to being recognized or awarded.",
            "The narrator is describing their seat.",
            "The narrator is analyzing the audience.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which question helps a writer deepen the significance of an event?",
        explanation: "D – Asking why the moment changed the writer helps deepen the significance and adds reflection. The other questions relate to formatting, not content.",
        correctAnswer: "“Why did this moment change me?”",
        choices: [
            "“Should I use a title?”",
            "“What font should I use?”",
            "“Did I write the date correctly?”",
            "“Why did this moment change me?”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. A student writes: “We played games, talked, and ate. It was fun.” This paragraph is weak because it lacks…",
        explanation: "C – The paragraph only lists activities and says “It was fun.” It lacks specific examples and reflection that make content meaningful.",
        correctAnswer: "Specific examples and reflection.",
        choices: [
            "A title.",
            "Clear sequencing.",
            "Specific examples and reflection.",
            "Verb tense.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which is the strongest supporting detail for a paragraph about becoming more confident?",
        explanation: "D – This sentence shows concrete action and personal experience, illustrating the narrator’s growing confidence. The other options are general statements that do not give strong supporting details.",
        correctAnswer: "“During the workshop, I finally volunteered to speak in front of everyone, despite my shaking voice.”",
        choices: [
            "“Confidence is important.”",
            "“Confidence can be gained.”",
            "“Many people want to be confident.”",
            "“During the workshop, I finally volunteered to speak in front of everyone, despite my shaking voice.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Paragraph:\nMy first day in high school was unforgettable. I entered the hallway and saw unfamiliar faces looking just as nervous as I was.\nWhich sentence would best develop the paragraph?",
        explanation: "D – This sentence adds interaction and emotional response, helping develop the paragraph. The other options describe neutral observations without meaning.",
        correctAnswer: "“When a classmate approached me and introduced herself, I felt a sudden sense of comfort.”",
        choices: [
            "“Students walked around.”",
            "“High school has many buildings.”",
            "“The school uniform felt different.”",
            "“When a classmate approached me and introduced herself, I felt a sudden sense of comfort.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A well-developed conclusion should…",
        explanation: "C – A well-developed conclusion summarizes insight or learning, giving the paragraph a sense of closure. Adding unrelated facts, new events, or repeating the introduction does not strengthen content.",
        correctAnswer: "Summarize insight or learning.",
        choices: [
            "Add unrelated facts.",
            "Introduce a new event.",
            "Summarize insight or learning.",
            "Repeat the introduction word for word.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence shows strong emotional depth?",
        explanation: "D – This sentence describes a vivid emotional experience, showing the depth of sadness through physical sensation and context. The other options are vague statements of emotion.",
        correctAnswer: "“I felt a heavy ache in my chest as I watched my teammates walk away after our loss.”",
        choices: [
            "“I was sad.”",
            "“Sadness came quickly.”",
            "“The moment was sad.”",
            "“I felt a heavy ache in my chest as I watched my teammates walk away after our loss.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. When a paragraph lists too many events without explanation, it shows…",
        explanation: "C – Listing too many events without explanation results in underdeveloped content because the reader does not understand the importance of each event.",
        correctAnswer: "Underdeveloped content.",
        choices: [
            "Clear sequencing.",
            "Excellent organization.",
            "Underdeveloped content.",
            "Vivid detail.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which revision improves focus?",
        explanation: "A – Removing irrelevant details improves focus by keeping the paragraph centered on the main event. Adding unrelated stories or longer sentences does not help focus.",
        correctAnswer: "Removing details not related to the main event.",
        choices: [
            "Removing details not related to the main event.",
            "Adding more random introductions.",
            "Adding a story about a different year.",
            "Using longer sentences.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Paragraph:\nAs the clock struck 8 PM, the program finally started. The guests clapped as the host welcomed everyone to the ceremony.\nWhich is the strongest topic sentence for this paragraph?",
        explanation: "D – This topic sentence clearly introduces the paragraph with excitement and relevance. The other options are vague or general statements that do not capture the main idea.",
        correctAnswer: "“The ceremony was one of the most exciting parts of our school year.”",
        choices: [
            "“I went to an event.”",
            "“People clap at ceremonies.”",
            "“Programs usually start at night.”",
            "“The ceremony was one of the most exciting parts of our school year.”",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which detail best strengthens a paragraph about learning responsibility?",
        explanation: "D – This sentence gives a specific experience and shows the consequences of the action, which clearly illustrates learning responsibility. The other options are general statements that do not show personal experience.",
        correctAnswer: "“I realized responsibility mattered after forgetting my task and seeing how it affected my whole group.”",
        choices: [
            "“Responsibility is important.”",
            "“Everyone must be responsible.”",
            "“Responsibility can be learned.”",
            "“I realized responsibility mattered after forgetting my task and seeing how it affected my whole group.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Paragraph:\nThe trip to the museum was exciting. There were many paintings.\nWhat is the paragraph lacking?",
        explanation: "A – The paragraph only mentions the trip and paintings. Adding vivid and relevant details helps the reader visualize the experience and understand its significance.",
        correctAnswer: "More vivid and relevant details.",
        choices: [
            "More vivid and relevant details.",
            "A different title.",
            "Additional punctuation marks.",
            "Grammar rules.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Which sentence shows the clearest content development?",
        explanation: "D – This sentence provides clear actions and outcomes, giving the reader concrete information about what happened. The other options are vague or general statements.",
        correctAnswer: "“During the activity, we interviewed residents about their community needs and documented their stories.”",
        choices: [
            "“We had an event.”",
            "“It was a great experience.”",
            "“People do activities every day.”",
            "“During the activity, we interviewed residents about their community needs and documented their stories.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. A narrative with strong content must include…",
        explanation: "C – Strong content requires focus, relevant details, and reflection. Long sentences, many adjectives, or unrelated events do not guarantee meaningful content.",
        correctAnswer: "Clear focus + relevant details + reflection.",
        choices: [
            "A mix of unrelated events.",
            "Long sentences.",
            "Clear focus + relevant details + reflection.",
            "Many adjectives only.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Paragraph:\nAfter the announcement, my friends congratulated me. My adviser smiled proudly.\nWhat should be added to strengthen the content?",
        explanation: "D – Including the specific achievement and explaining its importance strengthens the paragraph by adding relevance and depth. Other options only add surface-level details.",
        correctAnswer: "The specific achievement and why it mattered.",
        choices: [
            "Longer greetings.",
            "More adjectives.",
            "More names of classmates.",
            "The specific achievement and why it mattered.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which revision improves emotional depth?",
        explanation: "D – This revision uses physical sensations and inner thoughts to show emotional depth. The other options are either vague statements or exaggerated without context.",
        correctAnswer: "“My stomach tightened as I stepped forward, unsure if I deserved the recognition.”",
        choices: [
            "“I felt nervous.”",
            "“I was very, very nervous.”",
            "“Nervousness is common.”",
            "“My stomach tightened as I stepped forward, unsure if I deserved the recognition.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. A paragraph becomes fully developed when…",
        explanation: "D – A fully developed paragraph ensures that each sentence supports the main ideLength, including every memory, or using harder vocabulary does not guarantee development.",
        correctAnswer: "Each sentence supports and explains the main idea.",
        choices: [
            "It contains at least five sentences.",
            "Every idea from the day is included.",
            "The writer uses harder vocabulary.",
            "Each sentence supports and explains the main idea.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A writer describing an event but not showing what they learned is missing…",
        explanation: "B – Reflection shows what the writer learned or realized from the event. Without it, the content lacks meaning.",
        correctAnswer: "Reflection",
        choices: [
            "Grammar",
            "Reflection",
            "Sensory detail",
            "Setting description",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which sentence shows strong cause-and-effect?",
        explanation: "A – This sentence clearly connects the cause (practicing daily) to the effect (delivering the speech with confidence). The other options do not show a clear cause-and-effect relationship.",
        correctAnswer: "“Because I practiced daily, I finally delivered my speech with confidence.”",
        choices: [
            "“Because I practiced daily, I finally delivered my speech with confidence.”",
            "“I stood up.”",
            "“I stood up.”",
            "“The room was quiet.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10.	A conclusion should…",
        explanation: "D – A strong conclusion provides closure by expressing the meaning or lesson learned from the narrative. Starting a new event or adding unrelated details weakens the conclusion.",
        correctAnswer: "Provide closure by expressing meaning or lesson.",
        choices: [
            "Start a new event.",
            "Insert unrelated jokes.",
            "Mention random future plans.",
            "Provide closure by expressing meaning or lesson.",
        ],
        choiceType: "alpha"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each item carefully. Choose the letter of the best answer.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Paragraph:\nThe celebration at home felt more special this year. My family prepared a simple dinner, and everyone shared stories from the past months.\nWhich statement strengthens the paragraph?",
        explanation: "A – This sentence provides a specific emotional reaction and context, making the celebration feel meaningful. The other options are vague or focus on trivial details.",
        correctAnswer: "“Hearing my parents’ laughter after weeks of stress made the night unforgettable.”",
        choices: [
            "“Hearing my parents’ laughter after weeks of stress made the night unforgettable.”",
            "“The weather was fine.”",
            "“We used plates.”",
            "“It was okay.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which sentence is the strongest introduction for a narrative about a life-changing decision?",
        explanation: "D – This introduction sets a clear time, event, and personal challenge, engaging the reader immediately. The other options are too general or abstract.",
        correctAnswer: "“Last October, I made a choice that challenged my courage for the first time.”",
        choices: [
            "“People make choices.”",
            "“One day, something happened.”",
            "“A life-changing decision is very important.”",
            "“Last October, I made a choice that challenged my courage for the first time.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. A paragraph that includes many actions but no explanation of why they matter lacks…",
        explanation: "C – A paragraph that lists actions without explaining their importance lacks reflection, which helps the reader understand the significance of the events.",
        correctAnswer: "Reflection",
        choices: [
            "Chronology",
            "Grammar",
            "Reflection",
            "Vocabulary",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which detail best supports the idea that the narrator became more mature?",
        explanation: "B – This detail shows a concrete action that demonstrates maturity, including courage and personal growth. The other options describe ordinary actions without emotional or moral significance.",
        correctAnswer: "“I finally apologized to my friend even though I was scared to admit my mistake.”",
        choices: [
            "“I ate lunch in silence.”",
            "“I finally apologized to my friend even though I was scared to admit my mistake.”",
            "“I walked outside.”  ",
            "“I woke up earlier than usual.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Paragraph:\nWhen the lights dimmed, the whole auditorium fell silent. The host stepped forward and announced the winner.\nWhat is the paragraph missing?",
        explanation: "D – Including the narrator’s reaction and explanation of the moment adds depth and meaning to the paragraph. The other options provide irrelevant information.",
        correctAnswer: "A description of the narrator’s reaction and why the moment mattered.",
        choices: [
            "The exact time of day.",
            "The color of the curtains.",
            "A definition of “auditorium”.",
            "A description of the narrator’s reaction and why the moment mattered.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. A narrative becomes more meaningful when the writer…",
        explanation: "A – Explaining why the experience matters makes the narrative more meaningful. Adding unrelated events, difficult vocabulary, or length alone does not achieve this.",
        correctAnswer: "Explains the significance of the experience.",
        choices: [
            "Explains the significance of the experience.",
            "Adds unrelated descriptions.",
            "Uses a complicated vocabulary list.",
            "Writes more events.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Which sentence shows strong, clear content?",
        explanation: "D – This sentence gives a specific action, challenge, and emotional outcome, providing clear and strong content. The other options are general statements without detail.",
        correctAnswer: "“We collaborated on a difficult puzzle challenge, and solving it felt like a reward for our teamwork.”",
        choices: [
            "“We had fun.”",
            "“It was good.”",
            "“We joined an activity.”",
            "“We collaborated on a difficult puzzle challenge, and solving it felt like a reward for our teamwork.”",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. A paragraph with three unrelated memories suffers from…",
        explanation: "A – Including unrelated memories leads to unclear focus and scattered content because the paragraph lacks unity.",
        correctAnswer: "Unclear focus and scattered content",
        choices: [
            "Unclear focus and scattered content",
            "Clear focus",
            "Emotional depth",
            "Strong organization",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. To strengthen content, a writer should…",
        explanation: "D – Strengthening content requires including details that directly support the main ideFocusing only on grammar, writing longer sentences, or adding every idea does not ensure meaningful content.",
        correctAnswer: "Add details that directly support the main point.",
        choices: [
            "Focus only on grammar.",
            "Include every possible ide",
            "Write longer sentences only.",
            "Add details that directly support the main point.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Paragraph:\nAs the event ended, I walked out of the hall feeling lighter. The activities were fun and unexpected.\nWhich concluding sentence best adds meaning?",
        explanation: "C – This conclusion provides insight and reflection, expressing the lesson learned from the experience. The other options merely summarize or state events without adding meaning.",
        correctAnswer: "“The experience reminded me that stepping out of my comfort zone helps me grow.”",
        choices: [
            "“I hope to attend again.”",
            "“That’s how the day ended.”",
            "“The experience reminded me that stepping out of my comfort zone helps me grow.”",
            "We went home safely.”",
        ],
        choiceType: "alpha"
    },
]

const metadata: SetMetadata = {
    passingScore: 7,
    timeLimit: 45
}

export const CONTENT_ADVANCED_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
]

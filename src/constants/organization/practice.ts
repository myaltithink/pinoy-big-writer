import type { PracticeQuiz, QuizQuestion, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const week1SetA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which sentence has 2 sight words?",
        explanation: "\"The\" (article) and \"is\" (verb) are sight words; the sentence structure shows clear sight word usage. This teaches counting words in context.",
        correctAnswer: "The class is happy.",
        choices: [
            "I eat sisig.",
            "Fiesta fun.",
            "Adobo tasty.",
            "The class is happy."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the sentence with “a” used correctly:",
        explanation: "\"A\" is correctly used as an article before \"jeepney\". This addresses a common Grade 10 article error.",
        correctAnswer: "I saw a jeepney.",
        choices: [
            "Saw a school.",
            "A jeepney big.",
            "Jeepney a fast.",
            "I saw a jeepney."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “This” is a sight word. Pick the BEST use:",
        explanation: "\"This\" is used as a high-frequency word. This sentence demonstrates proper placement to show focus.",
        correctAnswer: "This halo-halo good.",
        choices: [
            "Good this food.",
            "Lumpia this eat.",
            "This halo-halo good.",
            "This lumpia is delicious"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which has “because\" as sight word?",
        explanation: "\"Because\" is a connector sight word. It correctly links the action to the reason.",
        correctAnswer: "We study because we want good grades",
        choices: [
            "Study we hard.",
            "Grades good want.",
            "Hard because study.",
            "We study because we want good grades"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. \"They” belongs to:",
        explanation: "\"They\" is a high-frequency pronoun used often in basic sentences. It is essential for sentence fluency.",
        correctAnswer: "High-Frequency",
        choices: [
            "Articles",
            "High-Frequency",
            "Transitions",
            "Verbs"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. I love adobo, ___ I hate sisig.",
        explanation: "\"However\" is a transition word used to show contrast between two ideas. It connects the positive view of adobo with the negative view of sisig.",
        correctAnswer: "However",
        choices: [
            "First",
            "However",
            "in addition",
            "so"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. ___ , eat breakfast before school.",
        explanation: "\"First\" is a transition word used to show the sequence or the beginning of a process. It indicates that eating breakfast is the initial step.",
        correctAnswer: "First",
        choices: [
            "Because",
            "Finally",
            "First",
            "Moreover"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. It rained heavily, ___ we canceled the trip.",
        explanation: "\"So\" is a transition word used to show the result or consequence of an action. The rain resulted in the cancellation.",
        correctAnswer: "So",
        choices: [
            "Although",
            "For example",
            "Next",
            "So"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. SM Clark has stores, ___ restaurants too.",
        explanation: "\"In addition\" is used to add more information or another item to a list. It adds restaurants to the existing mention of stores.",
        correctAnswer: "In addition",
        choices: [
            "But",
            "Finally",
            "In addition",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Pinoy games are fun, ___ patintero and tumbang preso.",
        explanation: "\"For example\" is used to introduce specific instances or illustrations of a general idea. Patintero and tumbang preso illustrate the fun games.",
        correctAnswer: "For example",
        choices: [
            "Because",
            "First",
            "For example",
            "However"
        ],
        choiceType: 'alpha'
    }
];

const week1SetB: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which sentence uses 4 sight words?",
        explanation: "They (bonus), are (verb), because (connector), and we (bonus) are all sight words. This test helps identify multiple categories of high-frequency words at once.",
        correctAnswer: "They are happy because we are here.",
        choices: [
            "Lumpia is very good.",
            "I love eating rice.",
            "They are happy because we are here.",
            "The dog is barking."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the sentence with 'the' used correctly:",
        explanation: "'The' is correctly used as a definite article before 'jeepney.' This helps master basic article usage.",
        correctAnswer: "The jeepney is fast.",
        choices: [
            "Jeepney the fast.",
            "Fast the jeepney.",
            "The jeepney is fast.",
            "I saw the a jeepney."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. 'Is' is a sight word verb. Pick the BEST use:",
        explanation: "This sentence uses 'is' as a verb with the proper subject-verb structure, focusing on correct verb placement.",
        correctAnswer: "The halo-halo is cold.",
        choices: [
            "Cold is halo-halo.",
            "The halo-halo is cold.",
            "Is cold halo-halo.",
            "Halo-halo is cold very."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which has 'but' as a sight word?",
        explanation: "'But' is a connector sight word used to show contrast properly in a compound sentence.",
        correctAnswer: "I want to play but it rains.",
        choices: [
            "Play rainy want.",
            "Later sunny rain.",
            "Rainy but sunny later.",
            "I want to play but it rains."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. 'Was' belongs to which category?",
        explanation: "'Was' is a past tense verb sight word, which is essential for building storytelling fluency.",
        correctAnswer: "Verbs",
        choices: [
            "Articles",
            "Bonus high-frequency",
            "Connectors",
            "Verbs"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Lumpia is crunchy, ___ turon is soft.",
        explanation: "'Although' shows contrast despite a similarity between the two items, serving as an advanced concession transition.",
        correctAnswer: "although",
        choices: [
            "although",
            "first",
            "moreover",
            "so"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. ___ , wash your hands before eating.",
        explanation: "'Before' is used here to show sequence and timing, which is a practical connector for daily routines.",
        correctAnswer: "Before",
        choices: [
            "Before",
            "Finally",
            "For instance",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. PBB is popular, ___ everyone watches it.",
        explanation: "'Therefore' is a result transition that indicates a logical consequence of the previous statement.",
        correctAnswer: "therefore",
        choices: [
            "however",
            "next",
            "such as",
            "therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. I study English ___ Math daily.",
        explanation: "'And' is a basic addition transition used to connect two related subjects in a list.",
        correctAnswer: "and",
        choices: [
            "and",
            "because",
            "finally",
            "on the other hand"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Street food is delicious, ___ kwek-kwek and fishball.",
        explanation: "'For instance' is the correct transition for introducing specific examples of the general category 'street food.'",
        correctAnswer: "for instance",
        choices: [
            "but",
            "for instance",
            "next",
            "so"
        ],
        choiceType: 'alpha'
    }
];

const week1SetC: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Identify the sight word in this sentence: 'The cat sat.'",
        explanation: "'The' is a high-frequency article that students should recognize immediately by sight.",
        correctAnswer: "The",
        choices: [
            "The",
            "Cat",
            "Sat",
            "None"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which of these is a 'Connector' sight word?",
        explanation: "'Because' is a sight word used specifically to connect a reason to an action.",
        correctAnswer: "Because",
        choices: [
            "Apple",
            "Run",
            "Because",
            "Big"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. 'He' and 'She' are examples of:",
        explanation: "These are high-frequency pronouns used as subjects in most basic English sentences.",
        correctAnswer: "High-frequency words",
        choices: [
            "Transitions",
            "High-frequency words",
            "Verbs",
            "Punctuation"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Use a transition to show sequence: '___ , I wake up. Next, I brush my teeth.'",
        explanation: "'First' is the standard transition to signal the beginning of a sequence of events.",
        correctAnswer: "First",
        choices: [
            "But",
            "First",
            "However",
            "So"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. He was tired, ___ he went to sleep early.",
        explanation: "'So' shows the direct result of being tired, connecting the cause to the effect.",
        correctAnswer: "so",
        choices: [
            "but",
            "so",
            "first",
            "although"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which word adds information?",
        explanation: "'Moreover' is a formal transition used to add information that supports the previous point.",
        correctAnswer: "Moreover",
        choices: [
            "But",
            "However",
            "Moreover",
            "Finally"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. 'In conclusion' is used to:",
        explanation: "This transition phrase signals the end of a piece of writing or a summary of the main points.",
        correctAnswer: "End a paragraph",
        choices: [
            "Start a story",
            "Add a detail",
            "Show contrast",
            "End a paragraph"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which transition shows a contrast?",
        explanation: "'However' is used to introduce a statement that contrasts with or contradicts something previously said.",
        correctAnswer: "However",
        choices: [
            "And",
            "Furthermore",
            "However",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the article used as a sight word:",
        explanation: "'An' is a high-frequency article used before words starting with a vowel sound.",
        correctAnswer: "An",
        choices: [
            "An",
            "Of",
            "To",
            "With"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Transition words help make writing _____.",
        explanation: "Transitions provide the logical links between ideas, making the overall writing flow smoothly and clearly.",
        correctAnswer: "Smooth and clear",
        choices: [
            "Longer",
            "Difficult",
            "Smooth and clear",
            "Loud"
        ],
        choiceType: 'alpha'
    }
];

const week2SetA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. In a process essay on 'Making Lumpia,' which sentence comes first in the sequence?",
        explanation: "Preparing the filling is the necessary first step before you can roll, fry, or serve the dish.",
        correctAnswer: "Prepare the filling.",
        choices: [
            "Roll the wrapper.",
            "Prepare the filling.",
            "Fry until golden brown.",
            "Serve with dipping sauce."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Identify the transitional word that fits next after 'First, wake up early.':",
        explanation: "Then is a sequential transition that naturally follows 'First' to indicate the next action in a series.",
        correctAnswer: "Then",
        choices: [
            "Afterwards",
            "Finally",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Arrange these events in a narrative essay about a field trip: 1. Boarded the bus, 2. Arrived at the museum, 3. Left school. Correct order?",
        explanation: "The logical chronological order is leaving school, boarding the bus, and then arriving at the destination.",
        correctAnswer: "3,1,2",
        choices: [
            "1,2,3",
            "2,1,3",
            "3,1,2",
            "3,2,1"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. 'After planting the seeds, water them daily. _____ , apply fertilizer.' Best transition?",
        explanation: "Then indicates the next step in the agricultural process after the initial planting and watering.",
        correctAnswer: "Then",
        choices: [
            "Before",
            "First",
            "Finally",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. In 'My Barangay Fiesta' essay, which shows correct sequence?",
        explanation: "Preparing food, then dancing, then arriving is the only sequence that follows a logical progression of event phases.",
        correctAnswer: "Prepared food, danced, arrived",
        choices: [
            "Arrived, prepared food, danced",
            "Danced, arrived, prepared food",
            "Danced, prepared food, arrived",
            "Prepared food, danced, arrived"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Transitional word for time order in 'Lastly, review your work.':",
        explanation: "Next is the word that indicates a following step in a time-ordered sequence.",
        correctAnswer: "Next",
        choices: [
            "However",
            "In addition",
            "Meanwhile",
            "Next"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jumbled: A. Ate halo-halo. B. Bought ingredients. C. Cooked dessert. Correct sequence for essay?",
        explanation: "You must buy ingredients before you can cook the dessert and finally eat it.",
        correctAnswer: "B,C,A",
        choices: [
            "A,B,C",
            "B,A,C",
            "B,C,A",
            "C,B,A"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. 'First, chop onions. Next, sauté garlic. _____ add meat.'",
        explanation: "Then is used to show the next step in a cooking sequence.",
        correctAnswer: "Then",
        choices: [
            "Finally",
            "However",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the final step in a story about 'A Day at the Beach':",
        explanation: "Going home is the concluding event of a day-long outing.",
        correctAnswer: "Went home.",
        choices: [
            "Packed bags.",
            "Swam in the ocean.",
            "Ate lunch.",
            "Went home."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. In a 'How to Cook Adobo' essay, which comes after 'Marinate the pork'?",
        explanation: "After marination, the next active cooking step in the sequence is simmering the meat.",
        correctAnswer: "Simmer the meat.",
        choices: [
            "Simmer the meat.",
            "Serve hot.",
            "Buy soy sauce.",
            "Prepare the pan."
        ],
        choiceType: 'alpha'
    }
];

const week2SetB: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which sentence describes the climax of a story about 'The Big Storm'?",
        explanation: "The height of the storm's intensity represents the climax or peak of the narrative sequence.",
        correctAnswer: "The wind blew strongest.",
        choices: [
            "The sky turned gray.",
            "It started to drizzle.",
            "The wind blew strongest.",
            "The sun came out."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Transition word for a concluding event:",
        explanation: "Finally is a transition used to mark the last item or conclusion of a sequence.",
        correctAnswer: "Finally",
        choices: [
            "Finally",
            "First",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Order for 'Planting a Tree': 1. Dig a hole, 2. Place the seedling, 3. Cover with soil.",
        explanation: "The physical order of planting requires digging first, placing second, and covering last.",
        correctAnswer: "1,2,3",
        choices: [
            "1,2,3",
            "2,1,3",
            "3,1,2",
            "3,2,1"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. 'Wait for the bus at the stop. _____ , board the bus.'",
        explanation: "Then signals the logical progression of boarding once you have waited at the stop.",
        correctAnswer: "Then",
        choices: [
            "Before",
            "Finally",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. In 'My First Day of School' essay, which shows the middle of the sequence?",
        explanation: "Meeting classmates happens after arriving but before going home, placing it in the middle of the day's sequence.",
        correctAnswer: "Met my classmates.",
        choices: [
            "Woke up.",
            "Met my classmates.",
            "Went home.",
            "Brushed teeth."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Transition for events happening at the same time:",
        explanation: "Meanwhile is used to describe an action occurring simultaneously with another event in the sequence.",
        correctAnswer: "Meanwhile",
        choices: [
            "Finally",
            "First",
            "Meanwhile",
            "Next"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jumbled: A. Painted the walls. B. Bought the paint. C. Cleaned the room. Sequence?",
        explanation: "Cleaning the room is the preparation, buying paint is the acquisition, and painting is the final action.",
        correctAnswer: "C,B,A",
        choices: [
            "A,B,C",
            "B,A,C",
            "C,B,A",
            "C,A,B"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. 'The bell rang. _____ , the students left the classroom.'",
        explanation: "Afterward shows that the students leaving followed the ringing of the bell.",
        correctAnswer: "Afterward",
        choices: [
            "Afterward",
            "Before",
            "Meanwhile",
            "Previously"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Sequence for 'Baking a Cake':",
        explanation: "Mixing, then baking, and finally cooling follows the logical culinary progression.",
        correctAnswer: "Mixed ingredients, baked, cooled",
        choices: [
            "Baked, mixed ingredients, cooled",
            "Cooled, baked, mixed ingredients",
            "Mixed ingredients, baked, cooled",
            "Mixed ingredients, cooled, baked"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. In 'The Ant and the Grasshopper,' what is the sequence after the Grasshopper sings all summer?",
        explanation: "After the summer singing, the arrival of winter is the next chronological event in the story's sequence.",
        correctAnswer: "Winter came.",
        choices: [
            "Summer stayed.",
            "Winter came.",
            "Ant sang.",
            "Grasshopper worked."
        ],
        choiceType: 'alpha'
    }
];

const week2SetC: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. In 'Cooking Sinigang,' which comes first?",
        explanation: "Chopping vegetables is a preparatory step that must occur before the cooking or simmering process begins.",
        correctAnswer: "Chop vegetables.",
        choices: [
            "Serve hot.",
            "Add tamarind.",
            "Chop vegetables.",
            "Simmer the meat."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Best word after 'First, sharpen pencil.':",
        explanation: "Drawing the outline follows the preparation step of sharpening the pencil in a creative process.",
        correctAnswer: "Draw outline.",
        choices: [
            "Before",
            "Finally",
            "Grab eraser",
            "Draw outline."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Order for 'School Election Day' essay: 1. Announced winner, 2. Voted, 3. Campaigned.",
        explanation: "The standard democratic sequence is campaigning first, then voting, and finally announcing the results.",
        correctAnswer: "3,2,1",
        choices: [
            "1,2,3",
            "1,3,2",
            "2,3,1",
            "3,2,1"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. 'Mix flour and eggs, _____ bake the cake.' Best?",
        explanation: "Then is the transitional word used to show the next logical step in the baking process.",
        correctAnswer: "Then",
        choices: [
            "First",
            "Lastly",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. In 'Family Reunion' essay, correct sequence?",
        explanation: "Planning must occur before traveling, and greeting relatives happens once the destination is reached.",
        correctAnswer: "Planned, traveled, greeted",
        choices: [
            "Planned, traveled, greeted",
            "Traveled, greeted, planned",
            "Greeted, planned, traveled",
            "Greeted relatives, traveled, planned"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Transition for simultaneous events:",
        explanation: "While is the appropriate transition to indicate that two actions are happening at the same time.",
        correctAnswer: "While",
        choices: [
            "Finally",
            "First",
            "Next",
            "While"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jumbled: A. Folded clothes. B. Ironed shirt. C. Selected outfit. Sequence?",
        explanation: "Selecting the outfit comes first, followed by ironing it, and then folding it for storage or use.",
        correctAnswer: "C,B,A",
        choices: [
            "A,B,C",
            "B,A,C",
            "C,A,B",
            "C,B,A"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. 'First, read instructions. Next, assemble parts. _____ test it.'",
        explanation: "Then indicates the final step in the sequence of assembly and verification.",
        correctAnswer: "Then",
        choices: [
            "After",
            "Before",
            "Meanwhile",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. In 'Maria Makiling Tale' essay, after 'Villagers offered gifts,' next?",
        explanation: "The logical narrative progression is that after the offering, the figure (Maria Makiling) blesses the harvest.",
        correctAnswer: "Then, she blessed the harvest.",
        choices: [
            "Finally, they left.",
            "First, she appeared.",
            "Meanwhile, storm came.",
            "Then, she blessed the harvest."
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Disrupts sequence in: 'First, research. Write draft. Next, edit.'?",
        explanation: "'Write draft' disrupts the sequence because it is an action missing a transition between the 'First' and 'Next' markers.",
        correctAnswer: "Write draft",
        choices: [
            "First",
            "Next",
            "Write draft",
            "Research"
        ],
        choiceType: 'alpha'
    }
];

const week3SetA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which transitional word best shows addition in this sentence: 'Adobo is savory. _____, sinigang adds sour flavor to Filipino meals.'",
        explanation: "In addition is used to provide more information that complements the first statement about Filipino food.",
        correctAnswer: "In addition",
        choices: [
            "Because",
            "Finally",
            "However",
            "In addition"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. In 'Sisig is spicy. _____, it pairs well with rice,' what transitional word shows contrast?",
        explanation: "However highlights a contrast or a counter-point to the initial description of the dish being spicy.",
        correctAnswer: "However",
        choices: [
            "However",
            "Moreover",
            "Next",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the transitional word for example: 'Pinoy games are fun, _____ patintero and tumbang preso.'",
        explanation: "For example is the correct phrase to introduce specific instances of 'Pinoy games'.",
        correctAnswer: "For example",
        choices: [
            "Although",
            "For example",
            "So",
            "Then"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which signal word indicates cause and effect: 'It rained heavily, _____ the Brigada Eskwela event was postponed.'",
        explanation: "So indicates the outcome or result of the heavy rain.",
        correctAnswer: "So",
        choices: [
            "First",
            "Meanwhile",
            "Next",
            "So"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. What signal word shows contrast in: 'Jeepneys are crowded, _____ affordable for students.'",
        explanation: "But provides a simple and direct contrast between a negative trait (crowded) and a positive one (affordable).",
        correctAnswer: "But",
        choices: [
            "After",
            "But",
            "Finally",
            "In addition"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Identify the signal word for sequence beginning: '_____ , research Philippine history for your presentation.'",
        explanation: "First is the standard marker used to indicate the initial step in a set of instructions.",
        correctAnswer: "First",
        choices: [
            "Finally",
            "First",
            "However",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Arrange these steps for a school day: (1) Eat breakfast, (2) Wake up, (3) Go to school. What is the correct sequence signal?",
        explanation: "This follows the logical chronological order of a morning routine: waking up, eating, and then leaving.",
        correctAnswer: "First wake up, next eat breakfast, finally go to school",
        choices: [
            "Finally wake up, first eat breakfast, next go to school",
            "First wake up, next eat breakfast, finally go to school",
            "First go to school, next wake up, finally eat breakfast",
            "Next wake up, finally eat breakfast, first go to school"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. In 'Preparing halo-halo: _____ mix ingredients, _____ add shaved ice, _____ serve cold,' what completes the sequence?",
        explanation: "This follows the standard recipe order: starting the process, moving to the next step, and finishing with serving.",
        correctAnswer: "First, then, finally",
        choices: [
            "Finally, first, next",
            "Next, finally, first",
            "First, then, finally",
            "Then, however, so"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Select the best transition for a conclusion: '_____ , the class project was a success.'",
        explanation: "Finally is used to signal the end of a sequence or the final conclusion of an event.",
        correctAnswer: "Finally",
        choices: [
            "Because",
            "Finally",
            "First",
            "Moreover"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which word adds more information: 'The beach is beautiful, _____ it is very clean.'",
        explanation: "Moreover is used to add an additional positive detail that supports the first statement.",
        correctAnswer: "Moreover",
        choices: [
            "But",
            "However",
            "Moreover",
            "So"
        ],
        choiceType: 'alpha'
    }
];

const week3SetB: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Identify the transition for result: 'He studied hard. _____, he topped the exam.'",
        explanation: "Consequently indicates the outcome or result that followed from the action of studying hard.",
        correctAnswer: "Consequently",
        choices: [
            "Consequently",
            "First",
            "However",
            "Meanwhile"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Which shows a contrast between preferences: 'I like pansit. _____, my sister prefers spaghetti.'",
        explanation: "Yet provides a soft contrast between two different preferences.",
        correctAnswer: "Yet",
        choices: [
            "And",
            "Furthermore",
            "Next",
            "Yet"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Best word for specific examples: 'Traditional foods, _____ bibingka and puto bumbong, are sold at Christmas.'",
        explanation: "Such as is the correct phrase for introducing specific examples within a sentence.",
        correctAnswer: "Such as",
        choices: [
            "Because",
            "But",
            "Finally",
            "Such as"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Identify the time signal: '_____ the movie ended, we went for dinner.'",
        explanation: "After acts as a temporal signal indicating an action that followed another in time.",
        correctAnswer: "After",
        choices: [
            "After",
            "Because",
            "Moreover",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Contrast transition: 'Basketball is popular, _____ volleyball is also gaining fans.'",
        explanation: "But highlights the opposition or distinction between the popularity of two different sports.",
        correctAnswer: "But",
        choices: [
            "And",
            "But",
            "Finally",
            "So"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Transition for next step: 'Prepare your PowerPoint slides after research. _____ , present to the class.'",
        explanation: "Next indicates the subsequent step in the sequence of a class presentation.",
        correctAnswer: "Next",
        choices: [
            "Finally",
            "For example",
            "However",
            "Next"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Logical order for class presentation: (1) Deliver, (2) Rehearse, (3) Research.",
        explanation: "This represents the standard preparation flow: gathering information first, practicing second, and presenting last.",
        correctAnswer: "First research, next rehearse, finally deliver",
        choices: [
            "Finally research, first rehearse, next deliver",
            "Next research, finally rehearse, first deliver",
            "First deliver, next research, finally rehearse",
            "First research, next rehearse, finally deliver"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. 'Planting rice: _____ till soil, _____ sow seeds, _____ harvest.'",
        explanation: "This follows the chronological agricultural process of soil preparation, planting, and gathering crops.",
        correctAnswer: "First, then, finally",
        choices: [
            "Finally, first, next",
            "Next, finally, first",
            "First, then, finally",
            "Then, however, so"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Best sequence for a field trip?",
        explanation: "Logistically, you must plan the route and pack supplies before you can board the bus for the trip.",
        correctAnswer: "First plan route, next pack snacks, finally board bus",
        choices: [
            "First board bus, next plan, finally pack",
            "Next plan route, first pack snacks, finally board",
            "Finally board bus, first plan route, next pack snacks",
            "First plan route, next pack snacks, finally board bus"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. 'Essay writing: First outline ideas, _____, _____, finally proofread.'",
        explanation: "Building a writing sequence requires drafting the content first and then revising it before the final check.",
        correctAnswer: "Next draft, then revise",
        choices: [
            "So, therefore / First, next",
            "Finally revise, first draft / Next, then",
            "Next draft, then revise / However, because",
            "However, because / Next draft, then revise"
        ],
        choiceType: 'alpha'
    }
];

const week3SetC: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Which word shows the final step in a process?",
        explanation: "Finally is a terminal transition used specifically to mark the last item in a sequence or a concluding thought.",
        correctAnswer: "Finally",
        choices: [
            "First",
            "Next",
            "Finally",
            "Meanwhile"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. In 'The sun is hot. _____, it provides energy,' which transition adds information?",
        explanation: "Moreover is a transition of addition that provides further supporting information about the subject.",
        correctAnswer: "Moreover",
        choices: [
            "But",
            "However",
            "Moreover",
            "Yet"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the best connector for a result: 'She forgot her umbrella, _____ she got wet.'",
        explanation: "Consequently or 'so' indicates the direct result or effect of the previous action (forgetting the umbrella).",
        correctAnswer: "so",
        choices: [
            "so",
            "but",
            "although",
            "first"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Which transition is used for comparison?",
        explanation: "Similarly is used to show how two ideas or items are alike in a comparison.",
        correctAnswer: "Similarly",
        choices: [
            "However",
            "Similarly",
            "Therefore",
            "Finally"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. 'I was late. _____, I missed the first part of the meeting.'",
        explanation: "Therefore is a cause-and-effect transition that shows the logical consequence of being late.",
        correctAnswer: "Therefore",
        choices: [
            "However",
            "But",
            "Therefore",
            "Meanwhile"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which signal word is best for introducing a summary?",
        explanation: "In conclusion signals the end of a discussion and introduces a summary of the main points.",
        correctAnswer: "In conclusion",
        choices: [
            "First",
            "In conclusion",
            "For example",
            "Moreover"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jumbled steps for 'Boiling an Egg': (1) Wait 10 minutes, (2) Place egg in water, (3) Turn on the stove. Correct order?",
        explanation: "The logical sequence for boiling an egg is putting it in the water, turning on the heat, and then waiting for it to cook.",
        correctAnswer: "2,3,1",
        choices: [
            "1,2,3",
            "3,2,1",
            "2,3,1",
            "2,1,3"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Which transition shows a change in time?",
        explanation: "Later is a temporal transition indicating that an event occurs at a subsequent point in time.",
        correctAnswer: "Later",
        choices: [
            "Later",
            "Furthermore",
            "In addition",
            "So"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Identify the contrast connector: 'It was a holiday, _____ the shops were open.'",
        explanation: "Yet is used here to show a contrast between the expectation of holiday closures and the reality of shops being open.",
        correctAnswer: "yet",
        choices: [
            "and",
            "so",
            "yet",
            "furthermore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Transition words are essential because they _____.",
        explanation: "Transitions provide the logical links that hold ideas together, ensuring the writing is coherent and easy to follow.",
        correctAnswer: "Connect ideas logically",
        choices: [
            "Make sentences shorter",
            "Connect ideas logically",
            "Repeat the main idea",
            "Add unnecessary words"
        ],
        choiceType: 'alpha'
    }
];

const metadata: SetMetadata = {
    passingScore: 0,
    timeLimit: 30
}

export const ORG_PRACTICE: PracticeQuiz = {
    week1: [
        {
            lessonNumber: 1,
            title: "",
            sets: [
                {
                    label: "Organization Practice W1 Set A",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetA
                    }
                },
                {
                    label: "Organization Practice W1 Set B",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week1SetB
                    }
                },
                {
                    label: "Organization Practice W1 Set C",
                    metadata: metadata,
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
            lessonNumber: 2,
            title: "",
            sets: [
                {
                    label: "Organization Practice W2 Set A",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetA
                    }
                },
                {
                    label: "Organization Practice W2 Set B",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week2SetB
                    }
                },
                {
                    label: "Organization Practice W2 Set C",
                    metadata: metadata,
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
            lessonNumber: 3,
            title: "",
            sets: [
                {
                    label: "Organization Practice W3 Set A",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetA
                    }
                },
                {
                    label: "Organization Practice W3 Set B",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetB
                    }
                },
                {
                    label: "Organization Practice W3 Set C",
                    metadata: metadata,
                    set: {
                        instruction: "Answer and complete the following items. You have 30 seconds to answer each one. ",
                        questions: week3SetC
                    }
                },               
            ]
        }
    ],
}
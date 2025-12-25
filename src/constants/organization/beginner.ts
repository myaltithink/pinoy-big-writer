import type { QuizQuestion, SetContainer, SetMetadata } from "../../types";
import { QuestionType } from "../QuestionType.Enum";

const setA: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. This essay will explore the role of jeepneys in Philippine transportation. Jeepneys represent our unique creativity and daily life. Which part of the essay is this?",
        explanation: "The introduction presents the topic and a thesis statement outlining main ideas, often with general statements to engage the reader",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. In the Philippines, the jeepney was invented after World War II using surplus military vehicles. It became a symbol of resourcefulness. Which part of the essay is this?",
        explanation: "The body develops main ideas with supporting details, facts, and examples like historical context.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. To sum up, jeepneys connect Filipinos while preserving our culture. They remain essential despite modern changes. Which part of the essay is this?",
        explanation: "The conclusion restates key points and provides closure without new information.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. This essay examines the impact of typhoons on Filipino resilience. Typhoons test our unity and preparedness. Which part of the essay is this?",
        explanation: "Introductions hook the reader and state the thesis, previewing the essay's focus.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. During Typhoon Yolanda, communities in Tacloban rebuilt homes together using local materials. This showed strong bayanihan spirit. Which part of the essay is this?",
        explanation: "Body paragraphs include evidence and analysis to support the thesis, such as real examples.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The jeepney is a key part of Filipino transport. __________, it shows our creativity with colorful ",
        explanation: "\"Moreover\" adds extra supporting information to strengthen the main idea in body paragraphs.",
        correctAnswer: "Moreover",
        choices: [
            "First",
            "Finally",
            "However",
            "Moreover",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Typhoons bring destruction to the Philippines. __________, communities show bayanihan spirit to rebuild.",
        explanation: "\"Therefore\" shows a result or conclusion from the previous fact, common in body or conclusion.",
        correctAnswer: "Therefore",
        choices: [
            "In addition",
            "In contrast",
            "Next",
            "Therefore"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Sari-sari stores sell daily needs. __________, they offer credit to neighbors in need.",
        explanation: "\"For example\" introduces specific evidence to explain the main point in the body.",
        correctAnswer: "For example",
        choices: [
            "Although",
            "For example",
            "In summary",
            "Meanwhile"
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Basketball is popular in barangays. __________, it teaches teamwork among youth.",
        explanation: "\"Similarly\" compares ideas to show likeness, used to connect body paragraphs.",
        correctAnswer: "Similarly",
        choices: [
            "First",
            "On the other hand",
            "Similarly",
            "To conclude",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Adobo is a favorite dish. __________, regional versions differ in taste.",
        explanation: "\"However\" shows contrast between general and specific details in the body.",
        correctAnswer: "However",
        choices: [
            "Finally",
            "For instance",
            "However",
            "Next",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Boil water in a pot until it bubbles. Add the pasta carefully.",
        explanation: "This sentence completes the cooking process step by step.",
        correctAnswer: "Stir occasionally until the pasta is tender.",
        choices: [
            "Wash the dishes.",
            "Turn off the stove.",
            "Serve the pasta immediately",
            "Stir occasionally until the pasta is tender.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Gather soil, seeds, and a small pot. Fill the pot with soil almost to the top.",
        explanation: "Planting seeds is the logical next step after filling the pot with soil.",
        correctAnswer: "Plant the seeds gently in the soil.",
        choices: [
            "Water the plants.",
            "Throw the seeds away.",
            "Place the pot under sunlight.",
            "Plant the seeds gently in the soil.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Switch on the computer by pressing the power button. Wait for the desktop to appear.",
        explanation: "This describes what to do after the computer is ready.  ",
        correctAnswer: "Click on the start menu to open programs.",
        choices: [
            "Close the laptop lid.",
            "Turn off the monitor.",
            "Disconnect the mouse.",
            "Click on the start menu to open programs.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Wash your hands using soap and water. Rub your hands together for 20 seconds.",
        explanation: "Rinsing is the next important step in effective handwashing.  ",
        correctAnswer: "Rinse your hands thoroughly under clean water.",
        choices: [
            "Use hand sanitizer only.",
            "Dry your hands with a towel.",
            "Ignore the dirt on your hands.",
            "Rinse your hands thoroughly under clean water.",
        ],
        choiceType: 'alpha'
    }, 
    {
        type: QuestionType.MultipleChoice,
        question: "15. Open the book to the assigned chapter. Read the instructions at the beginning.",
        explanation: "Highlighting helps understand and study important information.",
        correctAnswer: "Highlight key points as you read.",
        choices: [
            "Skip to the end.",
            "Close the book immediately. ",
            "Memorize the whole chapter.",
            "Highlight key points as you read.",
        ],
        choiceType: 'alpha'
    }, 


]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Overall, typhoons highlight Filipino strength and the need for better disaster plans. We always rise stronger. Which part of the essay is this?",
        explanation: "Conclusions summarize arguments and end with a final thought or call to action.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. This essay will discuss the value of family ties in the Philippines. Strong families shape our values and support system. Which part of the essay is this?",
        explanation: "The introduction introduces the topic broadly and includes a clear thesis statement.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. In rural barrios, extended families share meals and care for elders during hardships. This tradition builds lifelong bonds. Which part of the essay is this?",
        explanation: "The body elaborates on points with specific details and cultural examples.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. In closing, Filipino family ties foster resilience and joy in life. They are our greatest strength. Which part of the essay is this?",
        explanation: "Conclusions reinforce main ideas and leave a lasting impression without introducing new facts.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. This essay analyzes the role of basketball in Philippine youth culture. Basketball unites barangays and promotes teamwork. Which part of the essay is this?",
        explanation: "Introductions set the essay's purpose with a thesis that lists key discussion points.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Farmers plant palay in wet season. __________, they harvest during dry months.",
        explanation: "\"After that\" indicates sequence of events, useful for organizing body paragraphs.",
        correctAnswer: "After that",
        choices: [
            "After that",
            "Although",
            "In addition",
            "To sum up",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Videoke unites families in fiestas. __________, it creates fun memories at home parties.",
        explanation: "\"Moreover\" adds another related benefit, building arguments in the body.",
        correctAnswer: "Moreover",
        choices: [
            "First of all",
            "In the end",
            "Moreover",
            "Nevertheless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The carabao works hard in fields. __________, it symbolizes strength in rural life.",
        explanation: "\"Therefore\" links cause to effect, showing logical development.",
        correctAnswer: "Therefore",
        choices: [
            "For example",
            "Next",
            "On the contrary",
            "Therefore",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Sinulog Festival honors faith. __________, it boosts tourism in Cebu.",
        explanation: "\"In addition\" provides another supporting point in body paragraphs.",
        correctAnswer: "In addition",
        choices: [
            "Finally",
            "However",
            "In addition",
            "To begin with",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Family ties are strong in the Philippines. __________, they help during hardships like typhoons.",
        explanation: "\"For instance\" gives a concrete example to illustrate the idea in the body.",
        correctAnswer: "For instance",
        choices: [
            "For instance",
            "In conclusion",
            "Meanwhile",
            "Nevertheless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Take a piece of paper and a pen. Write your full name at the top. ",
        explanation: "Continuing to write answers follows writing the name.  ",
        correctAnswer: "Proceed to write the answers below.",
        choices: [
            "Throw the pen away.",
            "Skip writing completely.",
            "Tear the paper into pieces.",
            "Proceed to write the answers below.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Place your laundry in the washing machine. Add detergent and close the lid. ",
        explanation: "Starting the machine after preparation is the next step.  ",
        correctAnswer: "Select the wash cycle and start the machine.",
        choices: [
            "Dry the clothes immediately.",
            "Leave the machine unplugged.",
            "Iron the clothes before washing.",
            "Select the wash cycle and start the machine.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Preheat the oven to 180 degrees Celsius. Prepare the cake batter in a bowl. ",
        explanation: "Preparing the batter for baking follows preheating the oven.  ",
        correctAnswer: "Pour the batter into a baking pan.",
        choices: [
            "Freeze the batter.",
            "Turn off the oven.",
            "Eat the batter raw.",
            "Pour the batter into a baking pan.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Unwrap the gift box carefully. Check what is inside the box. ",
        explanation: "Showing gratitude after opening a gift is appropriate.  ",
        correctAnswer: "Thank the giver with a smile.",
        choices: [
            "Throw the box away.",
            "Shake the box vigorously.",
            "Put the gift back in the box.",
            "Thank the giver with a smile.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Download the application from the official website. Install it by following the instructions. ",
        explanation: "Using the app after installation is the next typical step.",
        correctAnswer: "Open the app and create an account.",
        choices: [
            "Ignore the app.",
            "Delete the app immediately",
            "Share the app without installing.",
            "Open the app and create an account.",
        ],
        choiceType: 'alpha'
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. This essay will highlight the significance of the jeepney in everyday Filipino life. Jeepneys reflect our ingenuity and vibrant streets. Which part of the essay is this?",
        explanation: "The introduction hooks the reader and presents the thesis statement outlining the essay's main focus.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Jeepneys originated from modified US army jeeps after the war, serving as affordable public transport. They carry colorful designs inspired by local art. Which part of the essay is this?",
        explanation: "Body paragraphs provide supporting details, examples, and evidence to develop the thesis.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. In summary, jeepneys symbolize Filipino resilience and should be preserved amid modernization. They keep our communities connected. Which part of the essay is this?",
        explanation: "The conclusion restates key points and ends with a final reflection without new details.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. This essay explores how bayanihan spirit strengthens Philippine communities during challenges. Bayanihan embodies our cooperative values. Which part of the essay is this?",
        explanation: "Introductions introduce the topic with a thesis that previews the discussion.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. In barangays hit by floods, neighbors lift houses together using bamboo poles in true bayanihan tradition. This practice dates back to pre-colonial times. Which part of the essay is this?",
        explanation: "The body uses specific examples and facts to support and explain main ideas.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Bayanihan helps during floods in the Philippines. __________, it builds stronger neighborhood ties.",
        explanation: "\"In addition\" adds another benefit to the main idea, connecting related points in body paragraphs.",
        correctAnswer: "In addition",
        choices: [
            "Finally",
            "For instance",
            "However",
            "In addition",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jeepneys face phase-out plans. __________, many Filipinos want to preserve them as cultural icons.",
        explanation: "\"Nevertheless\" introduces contrast despite challenges, showing opposition in body development.",
        correctAnswer: "Nevertheless",
        choices: [
            "First",
            "Meanwhile",
            "Nevertheless",
            "Therefore",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Palay fields flood during typhoons. __________, farmers replant with resilience.",
        explanation: "\"As a result\" indicates consequence from prior events, linking cause and effect logically.",
        correctAnswer: "As a result",
        choices: [
            "As a result",
            "For example",
            "Next",
            "On the other hand",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Videoke is fun at fiestas. __________, it improves singing skills for youth.",
        explanation: "\"Moreover\" provides an additional supporting detail to expand the argument.",
        correctAnswer: "Moreover",
        choices: [
            "Although",
            "In contrast",
            "Moreover",
            "To sum up",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. The carabao plows rice fields daily. __________, it rests during harvest celebrations.",
        explanation: "\"After that\" shows time sequence between farm activities in body paragraphs",
        correctAnswer: "After that",
        choices: [
            "After that",
            "However",
            "In summary",
            "Similarly",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Boil water in a pot. Add pasta and wait for it to cook.",
        explanation: "Draining comes after cooking and ensures the pasta is ready. ",
        correctAnswer: "Drain the water when the pasta is soft.",
        choices: [
            "Eat the pasta raw.",
            "Put salt in the water.",
            "Heat the pasta again.",
            "Drain the water when the pasta is soft.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Turn on the computer. Wait until it loads completely.",
        explanation: "Opening a program follows turning on the computer properly. ",
        correctAnswer: "Use the keyboard and mouse to open a program.",
        choices: [
            "Close all windows.",
            "Turn it off immediately.",
            "Disconnect the monitor.",
            "Use the keyboard and mouse to open a program.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Wash your hands with soap. Rub them for 20 seconds.",
        explanation: "Rinsing is needed to remove soap and dirt after scrubbing. ",
        correctAnswer: "Rinse well under clean water.",
        choices: [
            "Use only water.",
            "Wipe with a cloth.",
            "Rinse well under clean water.",
            "Dry your hands before washing.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Prepare the ingredients for adobo. Mix soy sauce, ",
        explanation: "Cooking completes the preparation to make the dish edible.",
        correctAnswer: "Cook the mixture until the meat is tender.",
        choices: [
            "Add sugar only.",
            "Eat the raw meat.",
            "Discard the sauce.",
            "Cook the mixture until the meat is tender.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Open the textbook to the assigned chapter. Read the first two pages. ",
        explanation: "Highlighting helps focus on key ideas for study.",
        correctAnswer: "Highlight important words and sentences.",
        choices: [
            "Skip the text.",
            "Close the book early.",
            "Read something else.",
            "Highlight important words and sentences.",
        ],
        choiceType: 'alpha'
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. Ultimately, bayanihan fosters unity and hope in the Philippines, proving our enduring strength. It remains vital today. Which part of the essay is this?",
        explanation: "Conclusions summarize arguments and provide closure with a strong final statement.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. This essay discusses the influence of adobo in shaping Filipino culinary identity. Adobo unites families through shared meals. Which part of the essay is this?",
        explanation: "The introduction sets up the essay with background and a clear thesis statement.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Adobo varies by region, like vinegar-heavy Ilocano versions or soy-based Visayan styles, showing diverse flavors. It uses simple ingredients like pork and garlic. Which part of the essay is this?",
        explanation: "Body sections elaborate with details, variations, and cultural context.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. To conclude, adobo represents comfort and heritage in every Filipino home. It binds generations. Which part of the essay is this?",
        explanation: "The conclusion reinforces the thesis and leaves a memorable impact.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. This essay will examine the role of the carabao in Philippine farming life. Carabao powers our fields and traditions. Which part of the essay is this?",
        explanation: "Introductions engage readers and state the essay's purpose through the thesis.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Adobo uses vinegar for tang. __________, soy sauce adds savory flavor in recipes.",
        explanation: "\"For example\" gives a specific illustration to clarify the main point..",
        correctAnswer: "For example",
        choices: [
            "Finally",
            "For example",
            "On the contrary",
            "Therefore",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Basketball courts fill barangays. __________, volleyball unites women in the same spaces.",
        explanation: "\"Likewise\" compares similar activities to connect related ideas smoothly.",
        correctAnswer: "Likewise",
        choices: [
            "Although",
            "In conclusion",
            "Likewise",
            "Next",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Sari-sari stores lack big inventories. __________, they meet urgent daily needs effectively.",
        explanation: "\"Yet\" contrasts limitation with positive outcome in body elaboration.",
        correctAnswer: "Yet",
        choices: [
            "First",
            "Meanwhile",
            "To begin with",
            "Yet",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Sinulog draws crowds to Cebu. __________, it honors Santo Niño with devotion.",
        explanation: "\"In addition\" lists another key aspect to build the paragraph's support.",
        correctAnswer: "In addition",
        choices: [
            "Finally",
            "For instance",
            "However",
            "In addition",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Family gatherings occur often. __________, they share stories during All Saints' Day.",
        explanation: "\"Specifically\" narrows to a precise example for stronger evidence in the body.",
        correctAnswer: "Specifically",
        choices: [
            "Before",
            "In the end",
            "Nevertheless",
            "Specifically",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Place laundry in the washing machine. Add detergent and close the lid. ",
        explanation: "Starting the wash cycle activates cleaning. ",
        correctAnswer: "Select the wash cycle and press start.",
        choices: [
            "Dry clothes first.",
            "Leave detergent out.",
            "Take the clothes out immediately.",
            "Select the wash cycle and press start.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Preheat the oven to 180°C. Mix all cake ingredients in a bowl. ",
        explanation: "Baking is the next step after preparing the batter. ",
        correctAnswer: "Pour the batter into a pan and bake.",
        choices: [
            "Turn off the oven.",
            "Eat the batter raw.",
            "Refrigerate the batter.",
            "Pour the batter into a pan and bake.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Set the table for dinner. Bring out plates, utensils, and glasses. ",
        explanation: "Serving food follows setting the table. ",
        correctAnswer: "Serve the food to everyone.",
        choices: [
            "Go to bed.",
            "Clean the table first.",
            "Serve the food to everyone.",
            "Leave the food in the kitchen.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Write your name on the paper. Start answering the questions. ",
        explanation: "Clear answers are needed for good tests.",
        correctAnswer: "Write clear and complete answers.",
        choices: [
            "Leave blanks.",
            "Tear the paper.",
            "Scribble on the paper.",
            "Write clear and complete answers.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Gather your school supplies before class. Pack your notebook, pen, and books. ",
        explanation: "Double-checking helps avoid forgetting important materials.",
        correctAnswer: "Make sure you have everything you need.",
        choices: [
            "Play with your phone.",
            "Forget your homework.",
            "Leave your supplies behind.",
            "Make sure you have everything you need.",
        ],
        choiceType: 'alpha'
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. In the end, the carabao symbolizes hard work and sustainability in Philippine agriculture. It continues to support farmers despite machinery advances.  Which part of the essay is this?",
        explanation: "Conclusions wrap up main ideas with a final reflection, tying back to the thesis without new evidence.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. This essay will investigate the impact of the Sinulog Festival on Cebuano identity. Sinulog celebrates faith and dance traditions. Which part of the essay is this?",
        explanation: "The introduction presents the topic and thesis statement to outline the essay's focus.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Sinulog dancers perform street routines with drums and costumes during January festivities. This draws millions to Cebu City annually. Which part of the essay is this?",
        explanation: "Body paragraphs develop ideas with specific details and examples to support the thesis.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. In conclusion, Sinulog strengthens cultural pride and unity in the Philippines. It endures as a vital tradition. Which part of the essay is this?",
        explanation: "The conclusion summarizes points and provides final closure without new information.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. This essay discusses the role of the Philippine eagle in biodiversity conservation. The eagle symbolizes our natural heritage. Which part of the essay is this?",
        explanation: "Introductions hook readers and state the thesis previewing main arguments.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. During typhoon season, homes flood in low-lying barangays. __________, families stay united through bayanihan.",
        explanation: "\"Although\" shows contrast between a problem and positive response, connecting ideas smoothly.",
        correctAnswer: "Although",
        choices: [
            "Although",
            "First",
            "In summary",
            "Therefore",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Rice terraces require hard labor from Ifugao farmers. __________, they produce golden palay harvests yearly.",
        explanation: "\"Nevertheless\" contrasts effort with successful outcome, emphasizing resilience in body paragraphs.",
        correctAnswer: "Nevertheless",
        choices: [
            "For example",
            "Meanwhile",
            "Nevertheless",
            "Next",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Public markets bustle early mornings. __________, vendors sell fresh fish from Visayan seas.",
        explanation: "\"In addition\" adds another detail about market activities to build the description.",
        correctAnswer: "In addition",
        choices: [
            "Finally",
            "In addition",
            "On the other hand",
            "To conclude",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Tricycles navigate narrow streets efficiently. __________, they serve as lifelines in urban traffic.",
        explanation: "\"As such\" shows result from the previous quality, linking cause to benefit logically.",
        correctAnswer: "As such",
        choices: [
            "As such",
            "Before",
            "However",
            "Similarly",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "Halo-halo mixes fruits and beans creatively. __________, it cools everyone during hot summers.",
        explanation: "\"Moreover\" adds another advantage of the dish to strengthen the main point.",
        correctAnswer: "Moreover",
        choices: [
            "Although",
            "At last",
            "In contrast",
            "Moreover ",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Cut the vegetables into small pieces. Put them in a clean bowl. ",
        explanation: "Mixing adds flavor before cooking. ",
        correctAnswer: "Mix with salt and pepper.",
        choices: [
            "Eat them raw.",
            "Boil them first.",
            "Throw them away.",
            "Mix with salt and pepper.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Fill the glass with shaved ice. Add fruits and beans on top. ",
        explanation: "Milk completes the halo-halo layers. ",
        correctAnswer: "Pour condensed milk over everything.",
        choices: [
            "Heat it up.",
            "Stir with hot water.",
            "Put it in the freezer.",
            "Pour condensed milk over everything.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Wait for the jeepney at the stop. Raise your hand to signal. ",
        explanation: "Paying fare follows boarding safely.",
        correctAnswer: "Board quickly and pay the fare.",
        choices: [
            "Run away.",
            "Sit on the road.",
            "Ignore the driver.",
            "Board quickly and pay the fare.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Soak the rice in water for 30 minutes. Drain the excess water. ",
        explanation: "Cooking starts after preparation. ",
        correctAnswer: "Put rice in the cooker with fresh water.",
        choices: [
            "Throw the rice.",
            "Eat the wet rice.",
            "Dry it in the sun.",
            "Put rice in the cooker with fresh water.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Open your notebook to a new page. Write the date and title. ",
        explanation: "Note-taking follows setup. ",
        correctAnswer: "Copy the lesson notes neatly.",
        choices: [
            "Rip the page.",
            "Draw pictures only.",
            "Close the notebook.",
            "Copy the lesson notes neatly.",
        ],
        choiceType: 'alpha'
    },
]

const setF: QuizQuestion[] = [
     {
        type: QuestionType.MultipleChoice,
        question: "1. Found in Mindanao forests, the Philippine eagle nests high and hunts monkeys for food. Habitat loss threatens its survival. Which part of the essay is this?",
        explanation: "The body includes evidence like facts and challenges to elaborate on the topic.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Overall, protecting the Philippine eagle ensures ecosystem balance for future generations. Conservation efforts must continue. Which part of the essay is this?",
        explanation: "Conclusions restate significance and end with a reflective statement.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. This essay explores the benefits of sari-sari stores in Philippine neighborhoods. Sari-sari stores serve daily needs conveniently. Which part of the essay is this?",
        explanation: "The introduction introduces the subject with a thesis outlining key points.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Sari-sari stores offer items like soap and snacks on credit to low-income families. They create jobs for women in barangays. Which part of the essay is this?",
        explanation: "Body sections provide supporting examples and social impacts.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. To wrap up, sari-sari stores build community trust and economic resilience. They remain essential in daily life. Which part of the essay is this?",
        explanation: "The conclusion reinforces main ideas with a strong final thought.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Barangay fiestas feature lechon roasting. __________, bands play lively kundiman songs late night.",
        explanation: "\"Afterward\" indicates sequence of events during celebrations, organizing body details.",
        correctAnswer: "Afterward",
        choices: [
            "Afterward",
            "For instance",
            "In the beginning",
            "Yet",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The Philippine eagle soars over Davao forests. __________, it faces threats from illegal logging.",
        explanation: "\"Likewise\" compares the eagle's freedom to other endangered species' challenges.",
        correctAnswer: "Likewise",
        choices: [
            "Likewise",
            "Next",
            "Therefore",
            "To sum up",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Students cram for UPCAT exams. __________, many succeed through determination and review centers.",
        explanation: "\"Still\" contrasts difficulty with positive achievement, showing perseverance.",
        correctAnswer: "Still",
        choices: [
            "First of all",
            "Meanwhile",
            "On the contrary",
            "Still",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Puto uses rice flour for softness. __________, it pairs perfectly with dinuguan at snacks.",
        explanation: "\"Specifically\" provides a precise example of pairing to illustrate the idea.",
        correctAnswer: "Specifically",
        choices: [
            "Before that",
            "However",
            "In conclusion",
            "Specifically",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Rizal Park hosts history lessons daily. __________, it offers green space for Manila joggers.",
        explanation: "\"Furthermore\" adds another function of the park to expand supporting details.",
        correctAnswer: "Furthermore",
        choices: [
            "Although",
            "Finally",
            "Furthermore",
            "In the past",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Plug in the fan and switch it on. Adjust the speed setting. ",
        explanation: "Directing airflow makes it useful.",
        correctAnswer: "Point it toward the room area.",
        choices: [
            "Kick the fan.",
            "Cover it with cloth.",
            "Unplug it right away.",
            "Point it toward the room area.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Peel the banana and slice it. Place slices in a bowl.",
        explanation: "Sweetening finishes the snack.",
        correctAnswer: "Sprinkle sugar and serve cold.",
        choices: [
            "Mix with salt.",
            "Cook it on fire.",
            "Bury it outside.",
            "Sprinkle sugar and serve cold.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Check the exam instructions carefully. Read all questions first. ",
        explanation: "Strategy improves scores. ",
        correctAnswer: "Start answering from easiest ones.",
        choices: [
            "Guess all answers.",
            "Talk to classmates.",
            "Leave the paper blank.",
            "Start answering from easiest ones.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Water the plants in the morning. Remove dead leaves. ",
        explanation: "Maintenance keeps plants healthy.",
        correctAnswer: "Check soil and add fertilizer if needed.",
        choices: [
            "Pull all plants out.",
            "Cover with plastic.",
            "Forget about them.",
            "Check soil and add fertilizer if needed.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Fold your uniform neatly. Place it in the bag. ",
        explanation: "Complete packing for school.",
        correctAnswer: "Pack your shoes and socks too.",
        choices: [
            "Cut it up.",
            "Leave it dirty.",
            "Wear it to sleep.",
            "Pack your shoes and socks too.",
        ],
        choiceType: 'alpha'
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.MultipleChoice,
        question: "1. This essay will analyze the influence of the palay harvest on rural Filipino life. Palay harvest sustains farmers and families. Which part of the essay is this?",
        explanation: "Introductions set the essay's purpose through topic introduction and thesis.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. This essay will discuss the importance of the Ati-Atihan Festival in Kalibo's cultural heritage. Ati-Atihan honors history through music and paint. Which part of the essay is this?",
        explanation: "The introduction introduces the topic and states the thesis to guide the reader.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Ati-Atihan features tribesmen in black paint dancing to loud drums every January. It reenacts a peace treaty with Ati people. Which part of the essay is this?",
        explanation: "Body paragraphs offer details, events, and examples to support main points.",
        correctAnswer: "Body",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Finally, Ati-Atihan preserves Aklanon pride and attracts global tourists. It thrives as a living tradition. Which part of the essay is this?",
        explanation: "Conclusions recap ideas and end memorably without adding new facts.",
        correctAnswer: "Conclusion",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. This essay examines how videoke shapes Filipino social gatherings. Videoke brings joy to fiestas and homes. Which part of the essay is this?",
        explanation: "Introductions hook with the topic and thesis previewing the essay.",
        correctAnswer: "Introduction",
        choices: [
            "Introduction",
            "Body",
            "Conclusion",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The festival is celebrated every January. __________, it attracts tourists from all over the country.",
        explanation: "\"In addition\" adds extra information to support the previous statement.",
        correctAnswer: "In addition",
        choices: [
            "But",
            "However",
            "In addition",
            "Therefore",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Jeepneys are an important part of Filipino culture. __________, they are currently being modernized for safety.",
        explanation: "\"Meanwhile\" shows two events happening at the same time.",
        correctAnswer: "Meanwhile",
        choices: [
            "Because",
            "Finally",
            "For example",
            "Meanwhile",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The mountain trails are difficult to climb. __________, many hikers still visit yearly.",
        explanation: "\"Despite\" shows contrast between difficulty and action.",
        correctAnswer: "Despite",
        choices: [
            "Because",
            "Despite",
            "In summary",
            "Next",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Rice farming is hard work. __________, it provides food for millions of Filipinos.",
        explanation: "\"Nevertheless\" introduces a contrasting but related fact.",
        correctAnswer: "Nevertheless",
        choices: [
            "Also",
            "Before",
            "Likewise",
            "Nevertheless",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Families gather during fiestas. __________, they share traditional meals and songs.",
        explanation: "\"Then\" indicates the sequence of actions.",
        correctAnswer: "Then",
        choices: [
            "Because",
            "However",
            "Moreover",
            "Then",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.Direction,
        direction: "Read the given instructional text. Choose the correct sentence (A-D) that logically completes the sequence of events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Stand at the jeepney stop. Raise your hand when one comes. ",
        explanation: "This completes the safe riding process.",
        correctAnswer: "Board quickly and pass your fare forward.",
        choices: [
            "Ignore the driver.",
            "Sit on the sidewalk.",
            "Run across the street.",
            "Board quickly and pass your fare forward.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Chop garlic and onions finely. Sauté them in hot oil.",
        explanation: "Browning meat follows sautéing aromatics.",
        correctAnswer: "Add meat and cook until brown.",
        choices: [
            "Throw away the pan.",
            "Eat the raw vegetables.",
            "Wash the ingredients again.",
            "Add meat and cook until brown.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Fill the pot with water. Add rice and soak for 30 minutes. ",
        explanation: "Cooking starts after proper preparation.",
        correctAnswer: "Drain water and cook on medium heat.",
        choices: [
            "Put rice in the fridge.",
            "Skip the soaking step.",
            "Drink the soaking water.",
            "Drain water and cook on medium heat.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Check the weather forecast. Pack your umbrella if rainy. ",
        explanation: "Proper footwear completes rain preparation.",
        correctAnswer: "Wear rubber shoes for wet streets.",
        choices: [
            "Ignore the rain",
            "Stay indoors all day.",
            "Leave the house barefoot.",
            "Wear rubber shoes for wet streets.",
        ],
        choiceType: 'alpha'
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Open your notebook. Write today's date at the top. ",
        explanation: "Objectives guide note-taking.",
        correctAnswer: "Copy the lesson objectives below it.",
        choices: [
            "Rip out the page.",
            "Close the notebook.",
            "Draw cartoons instead.",
            "Copy the lesson objectives below it.",
        ],
        choiceType: 'alpha'
    },
]

const metadata: SetMetadata = {
    passingScore: 12,
    timeLimit: 15
}

export const ORG_BEGINER_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setB
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setC
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setD
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setE
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setF
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Select the correct essay section whether it is Introduction, Body, or Conclusion for the given passage.",
            questions: setG
        }
    },
]

import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Introduction",
        explanation: "Conclusion phrase doesn't belong in introduction.  ",
        correctAnswer: "In conclusion, bayanihan defines our national character.",
        choices: [
            "Bayanihan unites Filipinos during house-moving celebrations.",
            "This essay explores bayanihan's role in modern communities.",
            "In conclusion, bayanihan defines our national character.",
            "Neighbors lift entire bamboo houses with ropes and songs.",
            "Bayanihan builds trust and cooperation among barangay residents.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "Summary phrase belongs in conclusion, not body evidence.",
        correctAnswer: "Overall, our resilience comes from this tradition.",
        choices: [
            "During typhoons, bayanihan clears debris from flooded streets.",
            "Families share rice and canned goods with neighbors in need.",
            "Overall, our resilience comes from this tradition.",
            "Volunteers rebuild classrooms together after storms pass.",
            "This cooperation saves time and reduces rebuilding costs.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Off-topic detail from different essay.",
        correctAnswer: "Jeepneys display vibrant art from post-war creativity.",
        choices: [
            "Bayanihan proves Filipino unity creates lasting strength.",
            "Jeepneys display vibrant art from post-war creativity.",
            "These traditions inspire youth to continue community service.",
            "Future generations benefit from this cooperative spirit.",
            "Bayanihan remains essential during national disasters.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. The Obando Fertility Dance honors Sta. Clara de Asis. __________, dancers wear colorful costumes during processions. __________, couples pray for children.",
        explanation: "\"First\" starts the sequence; \"Finally\" ends it logically.",
        correctAnswer: "First / Finally",
        choices: [
            "First / Finally",
            "However / Moreover",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. Sinukwan Festival celebrates Kapampangan culture in Pampanga. __________, street dancers wear elegant headdresses. __________, it honors ancient god Aring Sinukwan.",
        explanation: "\"In addition\" adds details; \"Next\" shows sequence.",
        correctAnswer: "In addition / Next",
        choices: [
            "In addition / Next",
            "For example / To conclude",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. Taong Putik covers penitents in mud during Lent in Nueva Ecija. __________, they walk barefoot carrying crosses. __________, it honors St. John the Baptist.",
        explanation: "\"Then\" links actions; \"Therefore\" shows purpose. ",
        correctAnswer: "Then / Therefore",
        choices: [
            "Although / Meanwhile",
            "Then / Therefore",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Luksong Baka ",
        explanation: "",
        correctAnswer: "3-1-4-2",
        choices: [
            "1 - Then, the baka bends down while others jump over its back without touching it.",
            "2 - Finally, the game continues until all players have jumped successfully. ",
            "3 - First, decide who will be the “baka” or cow.",
            "4 - If someone falls, they become the next baka."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Patintero",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - Then, roles switch, and the team with most successful crossings wins.",
            "2 - First, the taggers position themselves along the lines.",
            "3 - Next, the runners attempt to cross the field safely.",
            "4 - Divide into two teams: one guards the lines (“taggers”), the other tries to cross without being tagged.",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Sipa",
        explanation: "",
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - Start by holding the rattan ball in one hand.",
            "2 - Next, try to count how many kicks you can do without dropping it.",
            "3 - Then, kick the ball with your foot to keep it in the air.",
            "4 - Finally, compete with friends for the highest count."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Agawan Base",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - The team who succeeds first wins. ",
            "2 - To begin, a flag or object is placed in each base.",
            "3 - Then, players try to capture the opponent's flag and bring it back to their base safely.",
            "4 - Split into two teams and assign a base area for each."
        ],
        choiceType: 'numeric'
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Body",
        explanation: "Conclusion phrase doesn't belong in body details.",
        correctAnswer: "To sum up, jeepneys define our urban identity.",
        choices: [
            "Jeepneys carry 20 passengers with colorful religious paintings.",
            "Drivers play loud OPM music during rush hour traffic.",
            "To sum up, jeepneys define our urban identity.",
            "Passengers pass exact change forward through the crowd.",
            "Conductors shout destinations like \"Divisoria!\" at every stop.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Introduction",
        explanation: "Summary phrase belongs in conclusion, not body evidence.",
        correctAnswer: "During fiestas, vendors sell them parked roadside.",
        choices: [
            "Jeepneys symbolize Filipino ingenuity after World War II.",
            "This essay examines their cultural and practical importance.",
            "During fiestas, vendors sell them parked roadside.",
            "They connect barangays despite modern EDSA traffic.",
            "Jeepneys remain essential despite modernization debates.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Unrelated food topic from different essay.",
        correctAnswer: "Adobo varies from vinegar-heavy Ilocano to soy Visayan.",
        choices: [
            "Jeepneys preserve our vibrant street culture forever.",
            "Adobo varies from vinegar-heavy Ilocano to soy Visayan.",
            "Future generations should protect this unique tradition.",
            "They unite diverse commuters daily across islands.",
            "Jeepneys embody resilience in Philippine transportation.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. Caragan Festival features Aeta traditions in Pampanga. __________, natives wear bark costumes. __________, street dancing showcases their dances.",
        explanation: "\"First\" begins; \"Similarly\" compares performances. ",
        correctAnswer: "First / Similarly",
        choices: [
            "First / Similarly",
            "For instance / Nevertheless ",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. Sabuaga Festival showers flowers on Blessed Mother in Sto. Tomas. __________, petals line streets during processions. __________, it promotes local products.",
        explanation: "Moreover / After that",
        correctAnswer: "\"Moreover\" adds; \"After that\" sequences events.",
        choices: [
            "In contrast / Overall",
            "Moreover / After that",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. Bangus Festival highlights milkfish in Dagupan. __________, contests judge biggest fish. __________, street dancing mimics fishing. ",
        explanation: "\"Next\" continues; \"For example\" illustrates.",
        correctAnswer: "Next / For example",
        choices: [
            "However / Finally",
            "Next / For example",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Tumbang Preso",
        explanation: "",
        correctAnswer: "4-3-2-1",
        choices: [
            "1 - The game continues with players alternating roles. ",
            "2 - After knocking down, runners try to retrieve their slippers without being tagged. ",
            "3 - One player guards the cans while others try to knock them down by throwing slippers.",
            "4 - Line up empty cans on the ground."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Luksong Tinik",
        explanation: "",
        correctAnswer: "1-2-4-3",
        choices: [
            "1 - Players pair up and sit with their feet touching, forming “tinik” or thorns.",
            "2 - The first player jumps over the “tinik” as they gradually raise their feet higher.",
            "3 - The game ends when a player fails to jump successfully. ",
            "4 - Then, the players rotate, with each trying to jump higher without touching the “tinik.”"
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Piko (Hopscotch)",
        explanation: "",
        correctAnswer: "4-1-3-2",
        choices: [
            "1 - Players toss a small object inside a numbered box and hop through the squares without stepping on lines.",
            "2 - Play continues until the object lands outside the grid.",
            "3 - Then, they retrieve the object in a similar fashion while maintaining balance.",
            "4 - Draw a hopscotch grid on the ground."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Chinese Garter ",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - Players who fail to clear the garter are out.",
            "2 - Others take turns jumping over with different leg positions.",
            "3 - Start low and continuously raise the garter after each round.",
            "4 - Two players hold an elastic garter stretched at ankle height. "
        ],
        choiceType: 'numeric'
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Introduction",
        explanation: "Unrelated food tradition from different cultural essay.",
        correctAnswer: "Kamayan feasts feature rice served on banana leaves communally.",
        choices: [
            "Sinulog celebrates Santo Niño with street dancing in Cebu every January.",
            "This essay examines how Sinulog preserves faith and cultural identity.",
            "Kamayan feasts feature rice served on banana leaves communally.",
            "The festival attracts millions blending indigenous rituals and Christianity.",
            "Dancers wear tribal costumes painted with black soot symbols.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "Conclusion summary phrase misplaced in body details.",
        correctAnswer: "Overall, Sinulog unites Cebuano heritage across generations.",
        choices: [
            "Street parades feature rhythmic drums and chants of \"Viva Santo Niño!\"",
            "Participants paint faces black honoring Ati-Malay peace treaty.",
            "Overall, Sinulog unites Cebuano heritage across generations.",
            "Costumes include feathers, beads, and headdresses in bright colors.",
            "Vendors sell souvenirs during the week-long festivities.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Using authentic Filipino harvest festival contexts, the information provided is off-topic.",
        correctAnswer: "Pahiyas decorates houses with colorful rice wafer kipping.",
        choices: [
            "Sinulog ensures Cebuano traditions thrive for future youth.",
            "Pahiyas decorates houses with colorful rice wafer kipping.",
            "The festival embodies faith, unity, and cultural pride forever.",
            "Millions join annually proving its lasting global appeal.",
            "Sinulog strengthens community bonds through shared devotion.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. Niyogyugan Festival celebrates coconuts in Quezon. __________, cultural shows feature dances. __________, culinary contests showcase dishes. ",
        explanation: "\"In addition\" lists; \"Meanwhile\" shows simultaneity.",
        correctAnswer: "In addition / Meanwhile",
        choices: [
            "In addition / Meanwhile",
            "Although / To sum up",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. Bacao Festival honors corn in Isabela. __________, costumes use corn husks. __________, it thanks for harvests.",
        explanation: "\"First\" starts; \"Thus\" shows result. ",
        correctAnswer: "First / Thus",
        choices: [
            "First / Thus",
            "Specifically / On the other hand",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. Dinamulag Festival features sweet mangoes in Zambales. __________, farmers display varieties. __________, it boosts local economy. ",
        explanation: "\"Afterward\" sequences; \"Therefore\" concludes effect.",
        correctAnswer: "Afterward / Therefore",
        choices: [
            "Afterward / Therefore",
            "For instance / Nevertheless",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Sungka",
        explanation: "",
        correctAnswer: "2-1-3",
        choices: [
            "1 - Players take turns picking shells from one hole and distributing them counterclockwise one by one into other holes. ",
            "2 - Place shells or stones in the holes of the sungka board.",
            "3 - The game ends when all holes on one side are empty; the player with most shells wins.",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Palo Sebo",
        explanation: "",
        correctAnswer: "2-1-3-4",
        choices: [
            "1 - Players take turns climbing the pole trying to reach the prize.",
            "2 - A greased bamboo pole is set vertically with a prize at the top.",
            "3 - The grease makes it difficult, so players use teamwork and strategy.",
            "4 - The one who reaches the prize first wins."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Pagoda sa Wawa Festival (Bocaue) ",
        explanation: "",
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - Every June, devotees gather at the Bocaue River for the fluvial procession.",
            "2 - Then, thousands board boats for a river parade with music and prayers.",
            "3 - First, priests bless the decorated pagoda boats carrying the Holy Cross.",
            "4 - Finally, pilgrims swim to touch the sacred image for blessings."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Carabao Festival (Pulilan)",
        explanation: "",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - Pulilan Carabao Festival Farmers honor San Isidro Labrador during May harvest.",
            "2 - First, they bathe carabaos and decorate with flowers and oils.",
            "3 - Then, the animals kneel before the church in solemn parade.",
            "4 - Finally, priests bless them for good farming season ahead."
        ],
        choiceType: 'numeric'
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Conclusion",
        explanation: "Specific body description, not conclusion summary.",
        correctAnswer: "Houses glow with colorful kipping made from rice wafers.",
        choices: [
            "Pahiyas celebrates bountiful harvests with gratitude to San Isidro Labrador.",
            "Houses glow with colorful kipping made from rice wafers.",
            "These traditions ensure Lucban's cultural legacy endures forever.",
            "Future farmers continue this vibrant thanksgiving ritual annually.",
            "Pahiyas unites the community through shared agricultural pride.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "Conclusion phrase misplaced among body examples.",
        correctAnswer: "In summary, Pahiyas showcases Quezon's artistic harvest spirit.",
        choices: [
            "Kipping decorations hang from roofs in red, green, and yellow patterns.",
            "Farmers display vegetables, fruits, and handicrafts outside homes.",
            "In summary, Pahiyas showcases Quezon's artistic harvest spirit.",
            "Visitors walk house-to-house admiring creative rice wafer art.",
            "The festival honors May 15th with parades and contests.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Introduction",
        explanation: "Authentic Pahiyas details test recognition of misplaced body specifics or off-topic traditions in 5-sentence sets.",
        correctAnswer: "Kamayan feasts serve rice on banana leaves communally.",
        choices: [
            "Pahiyas Festival transforms Lucban into a harvest art wonderland yearly.",
            "Kamayan feasts serve rice on banana leaves communally.",
            "This essay explores Pahiyas decorations and community significance.",
            "The event honors farmers through elaborate rice wafer displays.",
            "Lucban residents prepare months ahead for this thanksgiving.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. Central Luzon fiestas unite communities. __________, families share longganisa meals. __________, traditions pass to youth. ",
        explanation: "\"Moreover\" adds support; \"Next\" continues flow.",
        correctAnswer: "Moreover / Next",
        choices: [
            "However / In summary",
            "Moreover / Next",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. The Halamanan Festival celebrates plants and flowers in Guiguinto. __________, families join gardening contests. __________, street dancing fills the town plaza. ",
        explanation: "\"First\" and \"Next\" show chronological sequence of events. ",
        correctAnswer: "First / Next",
        choices: [
            "First / Next",
            "Then / But",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. The Pagoda sa Wawa honors the Holy Cross in Bocaue. __________, decorated barges float down the river. __________, thousands gather for a floating feast and music. ",
        explanation: "\"First\" and \"Then\" guide the flow of the festival events. ",
        correctAnswer: "First / Then",
        choices: [
            "After that / Moreover",
            "First / Then",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Obando Fertility Dance Couples",
        explanation: "",
        correctAnswer: "1-2-4-3",
        choices: [
            "1 - Obando Fertility Dance Couples seeking children visit Obando Church every May.",
            "2 - First, they wear colorful costumes for the Sta. Clara dance.",
            "3 - Finally, they offer flowers at the altar for answered prayers.",
            "4 - Then, they perform ritual steps while singing traditional songs."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Hiyas ng Malolos Festival ",
        explanation: "",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - Hiyas ng Malolos Festival Malolos celebrates women suffragists every December.",
            "2 - First, participants wear terno gowns and parade through historic streets.",
            "3 - Then, they reenact the 1906 suffrage declaration scene.",
            "4 - Finally, cultural shows highlight Bulacan women's achievements. "
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Bocaue River Swimming Festival",
        explanation: "",
        correctAnswer: "1-2-4-3",
        choices: [
            "1 - Bocaue River Swimming Festival During Pagoda feast, pilgrims swim the Bocaue River.",
            "2 - First, safety boats position along the route.",
            "3 - Finally, successful swimmers receive priestly blessings onshore.",
            "4 - Then, thousands dive in to reach the Holy Cross pagoda."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Balagtasan Poetry Festival (Bulacan) ",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - Finally, judges declare winner based on wit and rhyme mastery.",
            "2 - First, they draw lots for pro and con positions.",
            "3 - Then, they exchange rhymed verses on cultural topics.",
            "4 - Poets compete in traditional Tagalog debate format."
        ],
        choiceType: 'numeric'
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Introduction",
        explanation: "Off-topic jeepney fact; does not fit introduction ",
        correctAnswer: "Jeepneys are a common mode of transportation in Manila streets.",
        choices: [
            "Kadayawan Festival is a celebration of bountiful harvests in Davao City.",
            "This essay explores Kadayawan's significance in promoting indigenous cultures.",
            "The event draws tourists with colorful floral floats and street dancing.",
            "Jeepneys are a common mode of transportation in Manila streets.",
            "Several tribes converge annually to express gratitude and unity.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "The conclusion phrase is misplaced in the body of the paragraph.",
        correctAnswer: "In conclusion, Kadayawan showcases Davao's rich cultural tapestry.",
        choices: [
            "The festival features street dancing competitions with vibrant costumes.",
            "Tribes prepare traditional music and rituals ahead of celebrations.",
            "In conclusion, Kadayawan showcases Davao's rich cultural tapestry.",
            "Local farmers display their best fruits during the harvest fair.",
            "The event promotes peace and understanding among diverse groups.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Off-topic Sinulog festival it is unrelated conclusion detail. ",
        correctAnswer: "Sinulog is celebrated every January in Cebu City.",
        choices: [
            "Kadayawan festival strengthens Filipino indigenous identity and pride.",
            "Sinulog is celebrated every January in Cebu City.",
            "It encourages community participation and cultural preservation.",
            "The celebration fosters appreciation of Mindanao’s ethnic diversity.",
            "Kadayawan remains a vital part of Davao’s social calendar.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. The Salakot Dance praises hardworking farmers in Central Luzon. __________, dancers wear traditional hats made of bamboo. __________, the community celebrates with songs and games. ",
        explanation: "\"First\" introduces; \"Finally\" concludes the event description. ",
        correctAnswer: "First / Finally",
        choices: [
            "First / Finally",
            "However / But",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. During the Banga Festival in Bataan, decorated pots are carried in parade. __________, folk music echoes through the streets. __________, visitors enjoy local food and crafts. ",
        explanation: "\"First / Then\" These sequence words organize festival details. ",
        correctAnswer: "First / Then",
        choices: [
            "First / Then",
            "Next / Moreover",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. At the Obando Fertility Dance, couples pray for children. __________, dancers perform on streets in colorful attire. __________, churchgoers attend Masses and offer petitions. ",
        explanation: "\"Meanwhile\" shows simultaneous actions; \"Afterwards\" indicates sequence. ",
        correctAnswer: "Meanwhile / Afterwards",
        choices: [
            "Finally / To end",
            "Meanwhile / Afterwards",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Longganisa Festival (Guiguinto) ",
        explanation: "",
        correctAnswer: "4-3-2-1",
        choices: [
            "1 - Finally, street dancing parades feature giant sausage props.",
            "2 - Then, cooking contests judge best recipes live.",
            "3 - First, stalls display various longganisa types for tasting.",
            "4 - Guiguinto celebrates its famous sausage every January."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Taong Putik Procession (Aliaga) ",
        explanation: "",
        correctAnswer: "3-2-1-4",
        choices: [
            "1 - Then, they crawl through town streets silently.",
            "2 - First, they start barefoot from church carrying wooden crosses",
            "3 - Good Friday penitents cover bodies in mud symbolizing sin.",
            "4 - Finally, they wash in river ending penance."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Kakanin Festival (Baliuag) ",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - Finally, winners parade with giant rice cake replicas.",
            "2 - First, families prepare bibingka, puto, and kutsinta varieties.",
            "3 - Then, street stalls compete in taste contests.",
            "4 - Baliuag honors rice cakes during town fiesta."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Salakot Festival (San Ildefonso) ",
        explanation: "",
        correctAnswer: "1-2-4-3",
        choices: [
            "1 - Farmers celebrate with traditional wide-brim hats.",
            "2 - First, artisans weave new salakot from bamboo and nito vines.",
            "3 - Finally, cultural dance showcases salakot in folk steps. ",
            "4 - Then, beauty pageant wears elaborate decorated versions."
        ],
        choiceType: 'numeric'
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Introduction",
        explanation: "Kamayan feasts - unrelated food tradition",
        correctAnswer: "Kamayan feasts feature rice served on banana leaves communally.",
        choices: [
            "Sinulog celebrates Santo Niño with street dancing in Cebu every January.",
            "This essay examines how Sinulog preserves faith and cultural identity.",
            "Kamayan feasts feature rice served on banana leaves communally.",
            "The festival attracts millions blending indigenous rituals and Christianity.",
            "Dancers wear tribal costumes painted with black soot symbols.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "Conclusion phrase misplaced in body",
        correctAnswer: "Overall, Sinulog unites Cebuano heritage across generations.",
        choices: [
            "Street parades feature rhythmic drums and chanting \"Viva Santo Niño!\"",
            "Participants paint faces black honoring Ati-Malay peace treaty.",
            "Overall, Sinulog unites Cebuano heritage across generations.",
            "Costumes include feathers, beads, and bright headdresses.",
            "Vendors sell souvenirs during festivities.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Pahiyas is a different harvest festival. ",
        correctAnswer: "Pahiyas decorates houses with colorful rice wafer kipping.",
        choices: [
            "Sinulog ensures Cebuano traditions thrive for future youth.",
            "Pahiyas decorates houses with colorful rice wafer kipping.",
            "The festival embodies faith, unity, and cultural pride forever.",
            "Millions join annually proving its lasting global appeal.",
            "Sinulog strengthens community bonds through devotion",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. Kadayawan Festival honors harvest in Davao with vibrant parades. __________, indigenous groups wear colorful costumes. __________, the community thanks nature for abundant fruits.",
        explanation: "“First / Then” Typical sequence words to describe festival flow. ",
        correctAnswer: "First / Then",
        choices: [
            "First / Then",
            "While / Although",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. The Dinamulag Mango Festival in Zambales features mango-eating contests. __________, local farmers showcase prized mangoes. __________, cultural shows highlight traditional dances. ",
        explanation: "“First / Next” Clear chronological transitions enhance understanding. ",
        correctAnswer: "First / Next",
        choices: [
            "First / Next",
            "Lastly / Therefore ",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. The Bangus Festival in Pangasinan celebrates milkfish with competitions. __________, cooking contests engage community chefs. __________, street parades highlight local culture. ",
        explanation: "“First / Then” Logical sequence in festival activities. ",
        correctAnswer: "First / Then",
        choices: [
            "First / Then",
            "On the other hand / Furthermore",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Making Pastillas de Leche (Baliuag) ",
        explanation: "",
        correctAnswer: "1-3-2-4",
        choices: [
            "1 - First, mix carabao milk with sugar in a pan over low heat.",
            "2 - Next, cool slightly and roll into small balls.",
            "3 - Then, stir continuously until thick and golden.",
            "4 - Finally, wrap each in colorful paper for sale"
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Weaving Buntal Hats (Baliuag) ",
        explanation: "",
        correctAnswer: "4-2-3-1",
        choices: [
            "1 - Finally, steam and shape for perfect fit.",
            "2 - Then, split fibers into thin strands using sharp knives.",
            "3 - Next, weave strands tightly into hat shape on wooden molds.",
            "4 - Start with buntal fiber from pandan leaves cleaned and dried."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Planting Rice in Bulacan Fields ",
        explanation: "",
        correctAnswer: "1-4-3-2",
        choices: [
            "1 - First, plow fields using carabao-drawn wooden plows.",
            "2 - Finally, maintain water levels until harvest time.",
            "3 - Next, transplant young seedlings in straight rows by hand.",
            "4 - Then, flood fields evenly for seedling preparation."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Preparing Kakanin Bibingka (Baliuag) ",
        explanation: "",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - Mix rice flour, coconut milk, and sugar into smooth batter.",
            "2 - Then, pour into greased clay molds with banana leaves.",
            "3 - Next, bake over charcoal with coals on top.",
            "4 - Finally, top with grated coconut before serving."
        ],
        choiceType: 'numeric'
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "\"Spot the Intruder\". Read the 5 mixed sentences labeled as Introduction. Click or identify the irrelevant sentence (the \"intruder\") that doesn't belong. ",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Introduction",
        explanation: "Jeepneys are not part of the Kadayawan celebration. ",
        correctAnswer: "Jeepneys are common in Manila streets.",
        choices: [
            "Kadayawan celebrates bountiful harvests in Davao.",
            "This essay explores Kadayawan's role in promoting indigenous cultures.",
            "The event draws tourists with floral floats and dancing.",
            "Jeepneys are common in Manila streets.",
            "Tribes unite annually expressing gratitude.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Body",
        explanation: "Conclusion phrase misplaced in body",
        correctAnswer: "In conclusion, Kadayawan showcases cultural tapestry.",
        choices: [
            "Street dancing competitions feature vibrant costumes.",
            "Tribes prepare traditional music and rituals.",
            "In conclusion, Kadayawan showcases cultural tapestry.",
            "Farmers display their best fruits.",
            "The event promotes peace and understanding.",
        ]
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Conclusion",
        explanation: "Sinulog festival is not related to the topic.",
        correctAnswer: "Sinulog is celebrated every January in Cebu.",
        choices: [
            "Kadayawan strengthens indigenous identity and pride.",
            "Sinulog is celebrated every January in Cebu.",
            "It encourages cultural preservation.",
            "It fosters appreciation of Mindanao's diversity.",
            "Kadayawan remains a vital social event.",
        ]
    },
    {
        type: QuestionType.Direction,
        direction: "Choose the correct transitional word to complete each sentence.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.Transitional,
        question: "4. The Bacao Festival in Isabela honors corn harvest with art displays. __________, dancers wear costumes inspired by corn. __________, street fairs offer agricultural products. ",
        explanation: "“First / Next” Sequence guides readers through the description. ",
        correctAnswer: "First / Next",
        choices: [
            "Because / Therefore",
            "First / Next",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "5. The Pahiyas Festival in Lucban highlights rice wafer decorations. __________, houses are adorned with colorful produce. __________, locals celebrate with religious processions and feasting. ",
        explanation: "“First/ Then” Introductory and sequential phrases clarify event order.",
        correctAnswer: "First / Then",
        choices: [
            "First / Then",
            "While / Although",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Transitional,
        question: "6. The Pulilan Carabao Festival honors San Isidro Labrador every May. __________, farmers decorate carabaos with flowers and oils. __________, the decorated animals parade through town streets. ",
        explanation: "\"First\" starts preparation; \"Finally\" shows parade climax. Sequence fits festival flow.",
        correctAnswer: "First / Finally",
        choices: [
            "First / Finally",
            "However / Moreover",
        ],
        choiceType: 'none'
    },
    {
        type: QuestionType.Direction,
        direction: "Click sentences in chronological order to reconstruct a coherent paragraph or story, building skills in sequencing events.",
        question: "",
        explanation: "",
        correctAnswer: "",
    },
    {
        type: QuestionType.SentenceOrder,
        question: "7. Making Singkaban Bamboo Arches (Malolos) ",
        explanation: "",
        correctAnswer: "2-1-3-4",
        choices: [
            "1 - Then, split and weave bamboo strips into decorative patterns. ",
            "2 - Cut fresh bamboo poles of equal length and thickness.",
            "3 - Next, paint with vibrant colors and hang fruits.",
            "4 - Finally, erect arches along streets for fiestas."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Longganisa Sausage Making (Guiguinto) ",
        explanation: "",
        correctAnswer: "1-4-3-2",
        choices: [
            "1 - Grind pork shoulder with garlic and vinegar seasoning.",
            "2 - Finally, smoke lightly before market sale.",
            "3 - Next, tie into links and dry under fans overnight.",
            "4 - Then, stuff mixture into hog casings using funnel."
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Inabel Fabric Weaving (Bulacan Looms) ",
        explanation: "",
        correctAnswer: "1-2-3-4",
        choices: [
            "1 - Prepare abaca fibers dyed in natural colors first.",
            "2 - Then, set up wooden loom with warp threads stretched tight.",
            "3 - Next, weave weft threads using shuttle back and forth.",
            "4 - Finally, cut and finish edges for garments. "
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Tinapang Bangus Preparation (Bulacan Lakeside) ",
        explanation: "",
        correctAnswer: "2-1-3-4",
        choices: [
            "1 - Then, marinate overnight in salty brine with garlic.",
            "2 - Clean fresh bangus and score flesh deeply.",
            "3 - Next, dry under sunlight on bamboo racks.",
            "4 - Finally, grill over charcoal for smoky flavor."
        ],
        choiceType: 'numeric'
    },
]

const metadata: SetMetadata = {
    passingScore: 8,
    timeLimit: 30
}

export const ORG_INTERMIDIATE_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 8 correct answers to complete the level successfully.",
            questions: setG,
        }
    },
]

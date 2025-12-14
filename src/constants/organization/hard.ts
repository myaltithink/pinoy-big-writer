import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. Recycling reduces the amount of waste in landfills, which can prevent pollution and diseases. It also saves natural resources by reusing materials like plastic and paper. Filipinos can help lead to a cleaner country by practicing recycling in their homes and schools.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Identification,
        question: "2. In conclusion, recycling is a simple way to improve the environment and health. Everyone, especially young people, should take part in recycling efforts to make the Philippines cleaner and safer for future generations.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "3. Recycling is becoming more important in the Philippines because of increasing waste problems in cities. Many communities suffer from garbage piling up in streets and waterways. This essay discusses why recycling is necessary and how it helps protect the environment.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. The jeepney is a popular mode of transportation; _________, it faces criticism for pollution. _________, many drivers and commuters depend on it daily. _________, efforts to modernize jeepneys continue to gain support.",
        explanation: "“However” shows contrast; “meanwhile” indicates simultaneous situation; “therefore” shows result or consequence.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - However",
            "2 - Meanwhile",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. Education in the Philippines has improved steadily; _________, access to quality learning remains a challenge in rural areas. _________, the government invests in building more schools. _________, technology is being integrated into classrooms nationwide.",
        explanation: "“Nonetheless” contrasts despite the previous statement; “furthermore” and “additionally” add more related information.",
        correctAnswer: "3-2-1",
        choices: [
            "1 - Additionally",
            "2 - Furthermore",
            "3 - Nonetheless",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. The Ati-Atihan Festival attracts many tourists; _________, it preserves Filipino cultural traditions. _________, the local economy benefits from increased visitors. _________, environmental concerns arise from waste generated during celebrations.",
        explanation: "“not only” and “but also” connects two related ideas; “ye t” shows contrast that follows.",
        correctAnswer: "2-1-3",
        choices: [
            "1 - But also",
            "2 - Not only",
            "3 - Yet",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-1-3-2-4",
        choices: [
            "1 - First, volunteers gathered at the barangay hall early in the morning.",
            "2 - After collecting trash, they sorted recyclable materials from the waste.",
            "3 - Then, they divided into groups and assigned specific areas to clean.",
            "4 - Finally, the barangay officials thanked everyone for their efforts to keep the neighborhood clean.",
            "5 - The community organized a clean-up drive to address local pollution.",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-4-3-2-1",
        choices: [
            "1 - At the end of the day, a community feast celebrated the successful event.",
            "2 - Spectators cheered as the procession moved through the streets.",
            "3 - On the festival day, dancers wearing vibrant costumes performed traditional dances.",
            "4 - The organizing committee planned the parade route and coordinated participants.",
            "5 - During the Ati-Atihan Festival, preparations began weeks in advance.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-4-5-2",
        choices: [
            "1 - The school launched a reading program to encourage students' literacy.",
            "2 - The program ended with an award ceremony recognizing avid readers.",
            "3 - Teachers selected interesting books suitable for various grade levels.",
            "4 - Students signed up and received reading materials every week.",
            "5 - Weekly discussions allowed students to share their thoughts on the stories.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "2-1-3-5-4",
        choices: [
            "1 - They carefully prepared the paddies and ensured proper watering.",
            "2 - Farmers planted rice seedlings at the start of the planting season.",
            "3 - As weeks passed, they monitored the crops for pests and diseases.",
            "4 - The farmers then sold the rice at the local market for income.",
            "5 - During harvest time, families gathered to reap the mature rice stalks.",
        ],
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. To conclude, the family remains the foundation of Filipino society. Respecting and nurturing these relationships preserve our cultural identity.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "2. Family is the center of Filipino culture and life. Filipino families are known for their strong bonds and support. This essay will discuss why family is very important to Filipinos.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "3. Family members care for each other and share responsibilities. They provide emotional support during difficulties and celebrate milestones together. This closeness creates a sense of security and belonging for everyone.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. OFWs contribute significantly to the economy; _________, they face hardships abroad. _________, their remittances help millions of families. _________, support systems for OFWs need strengthening.",
        explanation: "“Although” introduces a contrast; “moreover” adds extra information; “therefore” shows consequence.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - Although",
            "2 - Moreover",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. Filipino cuisine is diverse and flavorful; _________, some traditional recipes are at risk of disappearing. _________, young chefs are reviving these dishes. _________, food festivals celebrate the country’s culinary heritage.",
        explanation: "“However” contrasts; “fortunately” expresses a positive situation; “thus” shows a conclusion or result.",
        correctAnswer: "2-1-3",
        choices: [
            "1 - Fortunately",
            "2 - However",
            "3 - Thus",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. The government promotes disaster preparedness; _________, many communities remain vulnerable to typhoons. _________, local drills and education programs improve awareness. _________, international aid plays a vital role during emergencies.",
        explanation: "“Yet” contrasts expectations; “consequently” shows cause-effect; “similarly” shows comparison.",
        correctAnswer: "3-1-2",
        choices: [
            "1 - Consequently",
            "2 - Similarly",
            "3 - Yet",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "3-4-5-1-2",
        choices: [
            "1 - Once operational, the new lights improved safety at night.",
            "2 - Residents expressed satisfaction with the brighter, eco-friendly streets.",
            "3 - The local government installed solar streetlights in the barangay.",
            "4 - Officials first surveyed the area to determine where lights were needed most.",
            "5 - Then, technicians installed the solar panels and wiring.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-2-3-5-4",
        choices: [
            "1 - The public library introduced digital services to modernize access.",
            "2 - Staff digitized books and academic resources available for online reading.",
            "3 - Users created accounts to borrow e-books from home.",
            "4 - The initiative increased library engagement among young Filipinos.",
            "5 - Virtual workshops were offered to teach digital literacy skills.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "3-4-5-1-2",
        choices: [
            "1 - Emergency teams provided food and medical assistance at shelters.",
            "2 - After the typhoon passed, volunteers helped clean and rebuild damaged areas.",
            "3 - A typhoon warning was issued for the province.",
            "4 - Authorities immediately activated evacuation centers to ensure residents' safety.",
            "5 - People packed their belongings and left homes as instructed.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-4-5-2",
        choices: [
            "1 - The city hosted a career fair for graduating students.",
            "2 - Many participants left with promising leads for future employment.",
            "3 - Various companies set up booths to share job openings and internships.",
            "4 - Students prepared resumes and attended skill-building workshops.",
            "5 - During the event, they networked with potential employers.",
        ],
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. Social media is widely used by Filipino teenagers today. It affects how young people communicate and spend their time. This essay explores the positive and negative effects of social media on Filipino youth.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "2. In conclusion, social media has both benefits and challenges. Proper use can help Filipino youth grow positively in a connected world.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "3. Social media helps youth stay connected with friends and learn new ideas. However, too much use can cause distractions from studies and expose them to misinformation. Parents and teachers should guide young people to use social media responsibly.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. The Philippine eagle is endangered; _________, conservation programs aim to protect it. _________, illegal logging threatens its habitat. _________, environmentalists campaign to raise public awareness.",
        explanation: "“Fortunately” introduces positive news; “however” shows contrast; “therefore” indicates result.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - Fortunately",
            "2 - However",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. The use of social media has increased among Filipino youth; _________, it presents both benefits and risks. _________, students can access educational content easily. _________, excessive use can affect mental health.",
        explanation: "“Accordingly” links as a logical consequence; “for example” introduces illustration; “but” introduces contrast.",
        correctAnswer: "1-3-2",
        choices: [
            "1 - Accordingly",
            "2 - But",
            "3 - For example",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. The Filipino strong family ties have many advantages; _________, they sometimes lead to dependence and limit independence. _________, families provide emotional support and care. _________, balancing family roles and personal goals is necessary.",
        explanation: "“However” shows difference or problem; “in addition” adds information; “therefore” shows result or advice.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - However",
            "2 - In addition",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-1-2-3-4",
        choices: [
            "1 - Health workers visited households to administer vaccines and provide health education.",
            "2 - They recorded beneficiaries’ data to monitor coverage.",
            "3 - Local officials coordinated to reach remote areas.",
            "4 - By the end of the week, a large portion of the community was vaccinated.",
            "5 - A barangay health drive focused on vaccination began early Monday.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "2-1-3-5-4",
        choices: [
            "1 - Residents decorated their houses with colorful agricultural products.",
            "2 - The annual Pahiyas Festival attracted tourists from across the country.",
            "3 - Visitors admired the creativity and cultural heritage displayed on the streets.",
            "4 - The festival concluded with a fireworks show lighting up the night sky.",
            "5 - Food stalls offered traditional Filipino dishes for everyone to enjoy.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "3-4-5-1-2",
        choices: [
            "1 - The crowd cheers as the procession moves toward the Santo Niño shrine.",
            "2 - The festival concludes with a nightly fireworks display celebrating Filipino culture.",
            "3 - The Sinulog Festival preparations begin months before the event.",
            "4 - Volunteers design and sew elaborate costumes.",
            "5 - On festival day, dancers perform traditional routines along Cebu's streets.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-2-5-4-3",
        choices: [
            "1 - During the rice harvest season, farmers start by inspecting ripe paddies.",
            "2 - They prepare tools and gather family members for harvesting.",
            "3 - Finally, the harvested rice is sold or stored for future use.",
            "4 - Afterwards, the rice is threshed to separate grains from stalks.",
            "5 - Together they cut and bundle the rice stalks efficiently.",
        ],
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. English is widely used in the Philippines and learning it offers many advantages. It is one of the official languages and is important in education and jobs. This essay explains the benefits of learning English in our country.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "2. Therefore, learning English is vital for success in school and career. Filipino students should continue improving their English skills for a brighter future.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "3. English helps students access more information and academic resources. It also opens job opportunities in call centers, business, and tourism. Moreover, speaking English connects Filipinos to the global community.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. The Philippines has abundant natural resources; _________, sustainable management is crucial. _________, mining activities provide economic benefits. _________, environmental protection laws must be enforced effectively.",
        explanation: "“Indeed” strengthens the fact; “while” shows contrast happening simultaneously; “consequently” shows result.",
        correctAnswer: "2-3-1",
        choices: [
            "1 - Consequently ",
            "2 - Indeed",
            "3 - While",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. The education system in the Philippines faces many challenges; _________, reforms are underway to improve it. _________, teacher training programs have been enhanced. _________, students’ access to technology remains limited in some areas.",
        explanation: "“Nevertheless” shows contrast despite challenges; “for instance” introduces an example; “meanwhile” indicates simultaneous events.",
        correctAnswer: "3-1-2",
        choices: [
            "1 - For instance",
            "2 - Meanwhile",
            "3 - Nevertheless",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. The rice harvest season boosts the economy; _________, farmers face difficulties from unpredictable weather. _________, government subsidies help reduce their losses. _________, new farming techniques improve crop yields.",
        explanation: "“Additionally” shows contrasting idea; “therefore” indicates result or consequence; “additionally” adds extra information.",
        correctAnswer: "2-3-1",
        choices: [
            "1 - Additionally",
            "2 - However",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-1-2-3-4",
        choices: [
            "1 - They notify residents through flyers and community announcements.",
            "2 - On vaccination days, people form orderly lines as nurses administer shots.",
            "3 - Data is recorded to ensure proper coverage and follow-ups.",
            "4 - The health drive ends with an awareness campaign about disease prevention.",
            "5 - At the Barangay Health Center, medical staff prepare vaccination schedules.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-2-5-4",
        choices: [
            "1 - The Ati-Atihan Festival committee begins planning with meetings and fundraising.",
            "2 - During the festival, participants don indigenous attire and parade through the streets.",
            "3 - Performers practice traditional dances rehearsing synchrony and style.",
            "4 - The celebrations finish with a communal feast highlighting local cuisine.",
            "5 - Spectators join the merrymaking with music and dancing.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-4-5-2-3",
        choices: [
            "1 - When a typhoon is forecasted, local officials activate evacuation plans.",
            "2 - Rescue teams stand ready to assist vulnerable groups during and after the storm.",
            "3 - Cleanup and rebuilding efforts begin once the weather clears.",
            "4 - Barangay leaders inform residents to prepare and move to designated shelters.",
            "5 - Emergency kits and supplies are distributed to families in need.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-2-3-4-1",
        choices: [
            "1 - The festival ends with a grand parade celebrating unity and thanksgiving.",
            "2 - Artisans create intricate decorations highlighting the harvest season.",
            "3 - Tribal dances and music performances entertain visitors throughout the city.",
            "4 - Shops and stalls offer native crafts and delicacies.",
            "5 - The Kadayawan Festival showcases the rich culture of Davao's indigenous people.",
        ],
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. The Philippines is home to many unique animals and plants. Protecting wildlife is important for biodiversity and ecological balance. This essay highlights the need to protect Philippine wildlife.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "2. In conclusion, protecting wildlife preserves nature’s gifts for future generations and maintains a healthy environment.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "3. Many species are endangered due to habitat loss, hunting, and pollution. Protecting wildlife helps sustain ecosystems that provide resources and beauty. Filipinos can participate by supporting conservation programs and laws.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. Philippine tourism boasts beautiful beaches; _________, some areas suffer from environmental degradation. _________, eco-tourism projects promote sustainable travel. _________, locals benefit from increased income and employment.",
        explanation: "“Although” introduces a concession or contrast; “on the other hand” presents an alternative or contrast; “thus” shows a conclusion or result.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - Although",
            "2 - On the other hand",
            "3 - Thus",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. The rise of online learning has changed Filipino students’ study habits; _________, it creates opportunities for those in remote areas. _________, it requires reliable internet access. _________, parents and teachers must provide support.",
        explanation: "“Moreover” adds reinforcing information; “however” contrasts or limits what was said before; “consequently” shows effect or result.",
        correctAnswer: "3-2-1",
        choices: [
            "1 - Consequently",
            "2 - However",
            "3 - Moreover",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. Filipino values emphasize hospitality and close family ties; _________, modernization brings changes in social behavior. _________, respect for elders continues to be a core value. _________, balancing tradition and modern life is important.",
        explanation: "“Whereas” sets up contrast; “nevertheless” introduces concession or unexpected continuation; “therefore” indicates consequence or conclusion.",
        correctAnswer: "3-1-2",
        choices: [
            "1 - Nevertheless",
            "2 - Therefore",
            "3 - Whereas",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-2-4-5",
        choices: [
            "1 - The Public Library’s summer reading program kicks off with book donations.",
            "2 - Children enthusiastically participate and exchange books with friends.",
            "3 - Staff organize activities like storytelling and reading competitions.",
            "4 - Volunteers assist with tracking progress and encouraging attendance.",
            "5 - Closing ceremonies recognize outstanding readers with certificates and prizes.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-2-4-3-5",
        choices: [
            "1 - During the annual Lantern Festival, families prepare small handcrafted lanterns.",
            "2 - Streets and parks are decorated with colorful lights and ornaments.",
            "3 - The sight creates a magical atmosphere for all ages.",
            "4 - As dusk falls, groups gather to release lanterns into the night sky.",
            "5 - Afterward, everyone enjoys traditional snacks and entertainment shows.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "5-1-2-3-4",
        choices: [
            "1 - After threshing, farmers spread rice grains under the sun.",
            "2 - Constantly turning the grains ensures even drying and prevents spoilage.",
            "3 - Once dry, the rice is stored in sacks for transport to markets.",
            "4 - Quality control checks are performed before final sale.",
            "5 - The palay drying process follows harvesting in many rural areas.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "4-5-1-2-3",
        choices: [
            "1 - Tourists arrive to admire the vibrant displays and street dancing.",
            "2 - Food stalls serve traditional dishes to celebrate abundance.",
            "3 - The event ends with a thanksgiving Mass honoring San Isidro Labrador.",
            "4 - The Pahiyas Festival preparation includes decorating houses with agricultural products.",
            "5 - Villagers hang colorful kiping leaves and fresh fruits on walls and windows.",
        ],
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. Overall, OFWs are heroes who sacrifice for their families and country. Their contributions deserve respect and support.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "2. Overseas Filipino Workers (OFWs) play a significant role in the Philippine economy and society. Many Filipinos work abroad to support their families. This essay explains the contributions and challenges of OFWs.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "3. OFWs send remittances that help improve the lives of millions in the Philippines. However, they face hardships like homesickness and difficult working conditions. Supporting OFWs through policies and community care is important.",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. Voting is a key part of democracy in the Philippines; _________, voter turnout varies across regions. _________, efforts to educate voters help increase participation. _________, technology is used to improve voting accuracy.",
        explanation: "“Meanwhile” signals something occurring at the same time; “furthermore” adds additional support; “consequently” shows result or effect.",
        correctAnswer: "3-2-1",
        choices: [
            "1 - Consequently",
            "2 - Furthermore",
            "3 - Meanwhile",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. Filipino inventors have contributed innovative ideas; _________, many face challenges in patenting and funding. _________, government support for research is improving. _________, continued innovation can drive economic growth.",
        explanation: "“Yet” introduces contrast or unexpected fact; “fortunately” presents positive news; “thus” shows consequence or conclusion.",
        correctAnswer: "3-1-2",
        choices: [
            "1 - Fortunately",
            "2 - Thus",
            "3 - Yet",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. The typhoon season harms many communities each year; _________, disaster preparedness can reduce damage. _________, local volunteers play a crucial role in relief efforts. _________, rebuilding takes time and resources.",
        explanation: "“Therefore” indicates a logical result; “indeed” emphasizes the importance or truth of a point; “however” shows contrast or limitation.",
        correctAnswer: "3-2-1",
        choices: [
            "1 - However",
            "2 - Indeed",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "3-4-5-1-2",
        choices: [
            "1 - A cultural show highlighted the event with local dances and songs.",
            "2 - The fiesta ended with a community feast celebrating unity and faith.",
            "3 - Residents of a barangay began preparing for the town fiesta.",
            "4 - Volunteers cleaned the streets and decorated the town plaza with colorful banners.",
            "5 - On the fiesta day, people dressed in traditional attire and joined the religious procession.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-2-4-5-3",
        choices: [
            "1 - The local government initiated a water conservation campaign.",
            "2 - Officials distributed flyers explaining proper water use and conservation methods.",
            "3 - Regular monitoring ensured everyone complied with water-saving practices.",
            "4 - School children participated in seminars to increase awareness.",
            "5 - Community leaders encouraged households to fix leaking pipes and collect rainwater.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "3-4-5-1-2",
        choices: [
            "1 - The festival included contests for the biggest fish and fastest boat.",
            "2 - Winners received prizes, and the event promoted sustainable fishing practices.",
            "3 - The fishermen prepared their boats for the annual fishing festival.",
            "4 - They repaired nets and stocked supplies the day before.",
            "5 - At dawn, they set sail to the fishing grounds with hopes of a good catch.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-2-4-5",
        choices: [
            "1 - A barangay held a tree-planting activity to support reforestation.",
            "2 - They planted trees along the riverbank and public parks to prevent erosion.",
            "3 - Participants gathered seedlings and tools early in the morning.",
            "4 - Community members promised to care for the young trees regularly.",
            "5 - The activity raised awareness about environmental protection.",
        ],
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Identification,
        question: "1. Jeepneys are a unique and popular means of transportation in the Philippines. They have been part of Filipino culture for decades. This essay talks about the role jeepneys play in daily life and challenges they face.",
        explanation: "",
        correctAnswer: "INTRODUCTION"
    },
    {
        type: QuestionType.Identification,
        question: "2. In summary, jeepneys are essential in Filipino transportation but need improvements. Balancing tradition and progress is key to a better future.",
        explanation: "",
        correctAnswer: "CONCLUSION"
    },
    {
        type: QuestionType.Identification,
        question: "3. Jeepneys provide an affordable way for many Filipinos to travel to work and school. However, old jeepneys contribute to pollution and traffic congestion. The government is working on ",
        explanation: "",
        correctAnswer: "BODY"
    },
    {
        type: QuestionType.Direction,
        direction: "Click the transitional words in the proper sequence to complete the sentences.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "4. Filipino cuisine reflects a mix of cultural influences; _________, traditional recipes are passed down through generations. _________, fast food culture is growing among the youth. _________, food remains an important part of celebrations.",
        explanation: "“On the other hand” introduces one side of an argument; “meanwhile” shows concurrent action or situation; “clearly” emphasizes an obvious fact.",
        correctAnswer: "3-2-1",
        choices: [
            "1 - Clearly",
            "2 - Meanwhile",
            "3 - On the other hand",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "5. The use of renewable energy is increasing in the Philippines; _________, challenges such as cost and infrastructure remain. _________, solar and wind projects have expanded significantly. _________, government policies support a cleaner future.",
        explanation: "“although” contrasts two ideas; “for example” introduces a specific illustration; “consequently” indicates result.",
        correctAnswer: "1-3-2",
        choices: [
            "1 - Although",
            "2 - Consequently",
            "3 - For example",
        ],
        choiceType: 'numeric'
    },
    {
        type: QuestionType.CompleteTheSentence,
        question: "6. Many Filipino farmers rely on traditional farming methods; _________, improving these techniques can increase crop production. _________, access to modern equipment is limited in rural areas. _________, government programs aim to provide training and support to farmers.",
        explanation: "“However” shows contrast between reliance on traditional methods and the need for improvement. “Meanwhile” indicates a concurrent situation of limited access in rural areas. “Therefore” indicates the consequence or result that programs aim to help farmers.",
        correctAnswer: "1-2-3",
        choices: [
            "1 - However",
            "2 - Meanwhile",
            "3 - Therefore",
        ],
        choiceType: 'numeric'
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
        question: "7. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-2-4-5",
        choices: [
            "1 - A barangay held a tree-planting activity to support reforestation.",
            "2 - They planted trees along the riverbank and public parks to prevent erosion.",
            "3 - Participants gathered seedlings and tools early in the morning.",
            "4 - Community members promised to care for the young trees regularly.",
            "5 - The activity raised awareness about environmental protection.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "8. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-2-4-3-5",
        choices: [
            "1 - Teachers organized a Science Fair to showcase students’ projects.",
            "2 - Weeks before, students conducted experiments and prepared presentations.",
            "3 - Visitors toured the exhibits while students explained their findings",
            "4 - On the event day, judges evaluated the projects based on creativity and scientific accuracy.",
            "5 - Awards were given to outstanding participants during the closing ceremony.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "9. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "2-3-4-5-1",
        choices: [
            "1 - After the storm passed, rescue teams assessed damages and provided assistance.",
            "2 - A typhoon alert was announced by the weather bureau.",
            "3 - Local officials swiftly informed residents through SMS and public announcements.",
            "4 - Evacuation centers were prepared with food, water, and medical supplies.",
            "5 - Families packed essentials and moved to safer locations as directed.",
        ],
    },
    {
        type: QuestionType.SentenceOrder,
        question: "10. Select the proper order of the statements below",
        explanation: "",
        correctAnswer: "1-3-5-2-4",
        choices: [
            "1 - The youth council launched a clean-up drive for the barangay river.",
            "2 - Afterward, a seminar was held discussing the importance of keeping waterways clean.",
            "3 - Volunteers gathered on a Saturday morning with gloves and trash bags.",
            "4 - Plans were made for regular river maintenance activities.",
            "5 - They collected plastics and debris to prevent water pollution.",
        ],
    },
]

export const ORG_HARD_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setE,
        }
    },
    {
        label: "Set F",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setF,
        }
    },
    {
        label: "Set G",
        set: {
            instruction: "Read each statement carefully and determine if it belongs to the introduction, body, or conclusion section of an essay.",
            questions: setG,
        }
    },
]

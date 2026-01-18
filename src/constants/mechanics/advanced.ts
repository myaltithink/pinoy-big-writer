import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. the philipines is a country in southeast asia. It has more than seven thousand islands",
        correctAnswer: "The Philippines is a country in Southeast Asia. It has more than seven thousand islands.",
        explanation: "The Philippines is a country in Southeast Asia. It has more than seven thousand islands.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. on december 25 my family celabrates christmas with a specail dinner",
        correctAnswer: "On December 25, my family celebrates Christmas with a special dinner.",
        explanation: "On December 25, my family celebrates Christmas with a special dinner.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. mr santos said, “please submit youre assingment on friday”",
        correctAnswer: "Mr. Santos said, “Please submit you're assignment on Friday.”",
        explanation: "Mr. Santos said, “Please submit you're assignment on Friday.”",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. My friend maria wants to study englesh because she hopes to work in canada someday.",
        correctAnswer: "My friend Maria wants to study English because she hopes to work in Canada someday.",
        explanation: "My friend Maria wants to study English because she hopes to work in Canada someday.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. The students forgot their books, pens, notebooks, and ID's during the monday morning exam.",
        correctAnswer: "The students forgot their books, pens, notebooks, and IDs during the Monday morning exam.",
        explanation: "The students forgot their books, pens, notebooks, and IDs during the Monday morning exam.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. I visited the national musuem in manila last saturdae and saw many beautiful paintings.",
        correctAnswer: "I visited the National Museum in Manila last Saturday and saw many beautiful paintings.",
        explanation: "I visited the National Museum in Manila last Saturday and saw many beautiful paintings.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. Mr. abad the principal announced that the recognition day will be held at 8:00 a.m. in the multipurpose hall.",
        correctAnswer: "Mr. Abad (the principal) announced that the Recognition Day will be held at 8:00 a.m. in the multipurpose hall.",
        explanation: "Mr. Abad (the principal) announced that the Recognition Day will be held at 8:00 a.m. in the multipurpose hall.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. “Don't worry,” the nurse told me. “your vacine is safe and important.”",
        correctAnswer: "“Don't worry,” the nurse told me. “Your vaccine is safe and important.”",
        explanation: "“Don't worry,” the nurse told me. “Your vaccine is safe and important.”",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. during our field trip to tagaypay, we ate at antonio's restaurant and saw taal volcano clearly.",
        correctAnswer: "During our field trip to Tagaytay, we ate at Antonio's Restaurant and saw Taal Volcano clearly.",
        explanation: "During our field trip to Tagaytay, we ate at Antonio's Restaurant and saw Taal Volcano clearly.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10 	The science teacher discussed the planets of the solar sytem, including marss, venus, and jupiter.",
        correctAnswer: "The science teacher discussed the planets of the solar system, including Mars, Venus, and Jupiter.",
        explanation: "The science teacher discussed the planets of the solar system, including Mars, Venus, and Jupiter.",
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. last june, we had a memoriable family trip to hong kong and it was unforgetable.",
        correctAnswer: "Last June, we had a memorable family trip to Hong Kong, and it was unforgettable.",
        explanation: "Last June, we had a memorable family trip to Hong Kong, and it was unforgettable.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. my sister cried becaus the movie was very touching and memrable.",
        correctAnswer: "My sister cried because the movie was very touching and memorable.",
        explanation: "My sister cried because the movie was very touching and memorable.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. “please dont forget your umbrela,” mom reminded us becaus it might rain.",
        correctAnswer: "“Please don’t forget your umbrella,” Mom reminded us because it might rain.",
        explanation: "“Please don’t forget your umbrella,” Mom reminded us because it might rain.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. the librerian said our report is due tomorow becaus we need more time.",
        correctAnswer: "The librarian said our report is due tomorrow because we need more time.",
        explanation: "The librarian said our report is due tomorrow because we need more time.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. in hong kong, lucas said the view from victoria peak was memmorable for him.",
        correctAnswer: "In Hong Kong, Lucas said the view from Victoria Peak was memorable for him.",
        explanation: "In Hong Kong, Lucas said the view from Victoria Peak was memorable for him.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. mary ann who is my mother taught me how to coocked",
        correctAnswer: "Mary Ann —who is my mother— taught me how to paint. ",
        explanation: "Mary Ann —who is my mother— taught me how to paint. ",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. the teacher asked as to explain our answers sow we did.",
        correctAnswer: "The teacher asked us to explain our answers so, we did.",
        explanation: "The teacher asked us to explain our answers so, we did.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. “your speach was very memorabel,” the principal told him after the program.",
        correctAnswer: "“Your speech was very memorable,” the principal told him after the program.",
        explanation: "“Your speech was very memorable,” the principal told him after the program.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. we traveled from manila to hong kong last december becaus of a school event.",
        correctAnswer: "We traveled from Manila to Hong Kong last December because of a school event.",
        explanation: "We traveled from Manila to Hong Kong last December because of a school event.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10 	the whole class said the trip was memmorable becaus they learned a lot.",
        correctAnswer: "The whole class said the trip was memorable because they learned a lot.",
        explanation: "The whole class said the trip was memorable because they learned a lot.",
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. last friday, our class had a memorabel activity that i will never forget.",
        correctAnswer: "Last Friday, our class had a memorable activity that I will never forget.",
        explanation: "Last Friday, our class had a memorable activity that I will never forget.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. my teacher ms santos told us we would have a surprize presentation in the gym.",
        correctAnswer: "My teacher, Ms. Santos, told us we would have a surprise presentation in the gym.",
        explanation: "My teacher, Ms. Santos, told us we would have a surprise presentation in the gym.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. when i entered the gym i saw my classmates preparing becaus the event was starting.",
        correctAnswer: "When I entered the gym, I saw my classmates preparing because the event was starting.",
        explanation: "When I entered the gym, I saw my classmates preparing because the event was starting.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. our principal mr de la cruz welcomed everyone and gave an inspirring message.",
        correctAnswer: "Our principal, Mr. De la Cruz, welcomed everyone and gave an inspiring message.",
        explanation: "Our principal, Mr. De la Cruz, welcomed everyone and gave an inspiring message.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. my classmates performed a memmorable dance number and everyone cheered loudly.",
        correctAnswer: "My classmates performed a memorable dance number, and everyone cheered loudly.",
        explanation: "My classmates performed a memorable dance number, and everyone cheered loudly.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. during the program my friend anna played the piano and it sounded beautifull.",
        correctAnswer: "During the program, my friend Anna played the piano, and it sounded beautiful.",
        explanation: "During the program, my friend Anna played the piano, and it sounded beautiful.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7.  i felt proud beacuse our group won the “best performance” award.",
        correctAnswer: "I felt proud because our group won the “Best Performance” award.",
        explanation: "I felt proud because our group won the “Best Performance” award.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. kristina —who is my teacher— taught me how to crochet",
        correctAnswer: "Kristina —who is my teacher— taught me how to crochet. ",
        explanation: "Kristina —who is my teacher— taught me how to crochet. ",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. i took pictures with my frends to remenber this importent moment in school.",
        correctAnswer: "I took pictures with my friends to remember this important moment in school.",
        explanation: "I took pictures with my friends to remember this important moment in school.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10. over all, it was the most memorabel day for me becaus i enjoyed every part of the program.",
        correctAnswer: "Overall, it was the most memorable day for me because I enjoyed every part of the program.",
        explanation: "Overall, it was the most memorable day for me because I enjoyed every part of the program.",
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. the philippine eagle is considerd as the national bird of the phillipines.",
        correctAnswer: "The Philippine Eagle is considered the national bird of the Philippines.",
        explanation: "The Philippine Eagle is considered the national bird of the Philippines.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. our national flower is the sampaguita which symbolizes purity and simplicity.",
        correctAnswer: "Our national flower is the sampaguita, which symbolizes purity and simplicity.",
        explanation: "Our national flower is the sampaguita, which symbolizes purity and simplicity.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. on june 12 we celebrate independance day in honor of our countrys freedom.",
        correctAnswer: "On June 12, we celebrate Independence Day in honor of our country’s freedom.",
        explanation: "On June 12, we celebrate Independence Day in honor of our country’s freedom.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. the nara tree is known as the national tree becaus it is strong and durable.",
        correctAnswer: "The narra tree is known as the national tree because it is strong and durable.",
        explanation: "The narra tree is known as the national tree because it is strong and durable.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. our national hero (jose rizal) fought for the filipinos using his writtings.",
        correctAnswer: "Our national hero (Jose Rizal) fought for the Filipinos using his writings.",
        explanation: "Our national hero (Jose Rizal) fought for the Filipinos using his writings.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. the philippine flag has the colors blue red white and yellow.",
        correctAnswer: "The Philippine flag has the colors blue, red, white, and yellow.",
        explanation: "The Philippine flag has the colors blue, red, white, and yellow.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. lupang hinirang is the national anthem of the philippines.",
        correctAnswer: "Lupang Hinirang is the national anthem of the Philippines.",
        explanation: "Lupang Hinirang is the national anthem of the Philippines.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. the carabao is the national animal and it represents hardwork and strength.",
        correctAnswer: "The carabao is the national animal, and it represents hard work and strength.",
        explanation: "The carabao is the national animal, and it represents hard work and strength.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. filipino is the national language and it unites people from diferents regions.",
        correctAnswer: "Filipino is the national language, and it unites people from different regions.",
        explanation: "Filipino is the national language, and it unites people from different regions.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10. the arnis is the national sport of the country according to republic ack 9850",
        correctAnswer: "Arnis is the national sport of the country according to Republic Act 9850.",
        explanation: "Arnis is the national sport of the country according to Republic Act 9850.",
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. the story teaches an important moral leson that students should always be honest.",
        correctAnswer: "The story teaches an important moral lesson that students should always be honest.",
        explanation: "The story teaches an important moral lesson that students should always be honest.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. if i study hard, i will passed the english exam next week.",
        correctAnswer: "If I study hard, I will pass the English exam next week.",
        explanation: "If I study hard, I will pass the English exam next week.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. the teacher said “you must submit youre project on friday.”",
        correctAnswer: "The teacher said, “You must submit your project on Friday.”",
        explanation: "The teacher said, “You must submit your project on Friday.”",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. the characters in romeo and juliet experiencd strong emotions throughout the play.",
        correctAnswer: "The characters in Romeo and Juliet experienced strong emotions throughout the play.",
        explanation: "The characters in Romeo and Juliet experienced strong emotions throughout the play.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. during the debate, ana presented a weak claim becaus she had no evidence.",
        correctAnswer: "During the debate, Ana presented a weak claim because she had no evidence.",
        explanation: "During the debate, Ana presented a weak claim because she had no evidence.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. the report — written by miguel in passive voice — was for their english class",
        correctAnswer: "The report — written by Miguel in passive voice — was for their English class.",
        explanation: "The report — written by Miguel in passive voice — was for their English class.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. she can sings, dances, and write poems for the competition.",
        correctAnswer: "She can sing, dance, and write poems for the competition.",
        explanation: "She can sing, dance, and write poems for the competition.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. the climax of the story happend when the hero finally confronted the villan.",
        correctAnswer: "The climax of the story happened when the hero finally confronted the villain.",
        explanation: "The climax of the story happened when the hero finally confronted the villain.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. according to the article teenagers should limit screen time, however many still dont.",
        correctAnswer: "According to the article, teenagers should limit screen time; however, many still don’t.",
        explanation: "According to the article, teenagers should limit screen time; however, many still don’t.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10. the teacher asked us to infer the meaning of unkown words using context clews.",
        correctAnswer: "The teacher asked us to infer the meaning of unknown words using context clues.",
        explanation: "The teacher asked us to infer the meaning of unknown words using context clues.",
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. an essay must have a cleer thesis statement that shows the writers main point.",
        correctAnswer: "An essay must have a clear thesis statement that shows the writer's main point.",
        explanation: "An essay must have a clear thesis statement that shows the writer's main point.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. the introdyction should grab the readers attention and give backround information.",
        correctAnswer: "The introduction should grab the reader's attention and give background information.",
        explanation: "The introduction should grab the reader's attention and give background information.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. when writing an essay use transtion words to connect youre ideas smoothly.",
        correctAnswer: "When writing an essay, use transition words to connect your ideas smoothly.",
        explanation: "When writing an essay, use transition words to connect your ideas smoothly.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. a body paragraph needs a topic sentense that supports the essays thesis.",
        correctAnswer: "A body paragraph needs a topic sentence that supports the essay's thesis.",
        explanation: "A body paragraph needs a topic sentence that supports the essay's thesis.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. every paragraf should focus on only one idea to keep the essay unifyed.",
        correctAnswer: "Every paragraph should focus on only one idea to keep the essay unified.",
        explanation: "Every paragraph should focus on only one idea to keep the essay unified.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. the conclusion must restate the main points but should not add new informations.",
        correctAnswer: "The conclusion must restate the main points but should not add new information.",
        explanation: "The conclusion must restate the main points but should not add new information.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. in formal essays students should avoid using slang beacuse it sounds unproffesional.",
        correctAnswer: "In formal essays, students should avoid using slang because it sounds unprofessional.",
        explanation: "In formal essays, students should avoid using slang because it sounds unprofessional.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. writers must check grammer spelling and punctuashun before submitting their essay.",
        correctAnswer: "Writers must check grammar, spelling, and punctuation before submitting their essay.",
        explanation: "Writers must check grammar, spelling, and punctuation before submitting their essay.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. an essay should have coherence otherwise the sentences wont flow logically (and the reader may get confused)",
        correctAnswer: "An essay should have coherence: otherwise, the sentences won't flow logically (and the reader may get confused).",
        explanation: "An essay should have coherence: otherwise, the sentences won't flow logically (and the reader may get confused).",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10. the writer needs to revise and edit the draft to improove clarity and organization.",
        correctAnswer: "The writer needs to revise and edit the draft to improve clarity and organization.",
        explanation: "The writer needs to revise and edit the draft to improve clarity and organization.",
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.ReWriteSentence,
        question: "1. the sinulog festival in cebu city celebrateS the sto niño every januaury",
        correctAnswer: "The Sinulog Festival in Cebu City celebrates the Sto. Niño every January.",
        explanation: "The Sinulog Festival in Cebu City celebrates the Sto. Niño every January.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "2. last october, we visited the masskara Festival in bacolod and it was very colorfull",
        correctAnswer: "Last October, we visited the MassKara Festival in Bacolod, and it was very colorful.",
        explanation: "Last October, we visited the MassKara Festival in Bacolod, and it was very colorful.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "3. people in marinduque performs the moriones festival during holy week",
        correctAnswer: "People in Marinduque perform the Moriones Festival during Holy Week.",
        explanation: "People in Marinduque perform the Moriones Festival during Holy Week.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "4. we watched the panagbenga festival in baguio city its known as the flower festival",
        correctAnswer: "We watched the Panagbenga Festival in Baguio City; it's known as the Flower Festival.",
        explanation: "We watched the Panagbenga Festival in Baguio City; it's known as the Flower Festival.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "5. wow my family went to iloIlo for the dinagyan festival becose we wanted to see the tribes perform",
        correctAnswer: "Wow! My family went to Iloilo for the Dinagyang Festival because we wanted to see the tribes perform.",
        explanation: "Wow! My family went to Iloilo for the Dinagyang Festival because we wanted to see the tribes perform.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "6. the lucban quezon's pahiyas festival showcases colorful decorations every my 15",
        correctAnswer: "The Lucban Quezon's Pahiyas Festival showcases colorful decorations every May 15.",
        explanation: "The Lucban Quezon's Pahiyas Festival showcases colorful decorations every May 15.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "7. during independence day in june 12 the philippine flag is raised in many public places",
        correctAnswer: "During Independence Day on June 12, the Philippine flag is raised in many public places.",
        explanation: "During Independence Day on June 12, the Philippine flag is raised in many public places.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "8. dr. santos (our school doctor) checked the students",
        correctAnswer: "Dr. Santos (our school doctor) checked the students.",
        explanation: "Dr. Santos (our school doctor) checked the students.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "9. the kadayawan festival in davao city celebrates three main themes nature culture and good harbest",
        correctAnswer: "The Kadayawan Festival in Davao City celebrates three main themes: nature, culture, and good harvest.",
        explanation: "The Kadayawan Festival in Davao City celebrates three main themes: nature, culture, and good harvest.",
    },
    {
        type: QuestionType.ReWriteSentence,
        question: "10. in our class report i explained why the people of vohol honor the sandugo Festival annually it symbolizes unity and friendship",
        correctAnswer: "In our class report, I explained why the people of Bohol honor the Sandugo Festival annually; it symbolizes unity and friendship.",
        explanation: "In our class report, I explained why the people of Bohol honor the Sandugo Festival annually; it symbolizes unity and friendship.",
    },
]

const metadata: SetMetadata = {
    passingScore: 7,
    timeLimit: 120
}

export const MECHANICS_ADVANCED_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Rewrite the sentences with correct capitalization, spelling, and punctuation if needed. Get as score of 7/10 to complete the level",
            questions: setG,
        }
    },
]

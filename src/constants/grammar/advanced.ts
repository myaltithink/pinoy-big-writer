import type { QuizQuestion, SetContainer } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The troop leader, ______ all the younger scouts trusted implicitly, guided them through the dense forest. \n\n(who / whom / which)",
        explanation: 'The pronoun is the object of the verb "trusted" in the subordinate clause ("all the younger scouts trusted whom implicitly"). Since it functions as an object, the objective case pronoun whom is correct.',
        correctAnswer: "whom",
    },
    {
        type: QuestionType.Identification,
        question: "2. Before setting off on the hiking trail, the essential supplies were divided between John and ______. \n\n(I / me)",
        explanation: 'The pronoun is the object of the preposition "between." Prepositions always take the objective case (me), not the subjective case (I).',
        correctAnswer: "me",
    },
    {
        type: QuestionType.Identification,
        question: "3. The campfire was finally lit, and ______ brilliant flame cast long shadows over the cluster of tents. \n\n(it / its / it's)",
        explanation: 'This is the possessive form of the pronoun, showing that the "flame" belongs to the "campfire." The contraction it\'s (it is) is not grammatically appropriate here.',
        correctAnswer: "its",
    },
    {
        type: QuestionType.Identification,
        question: "4. The designated cook, knowing the recipe was complex, took it upon ______ to ensure the entire meal was prepared properly. \n\n(him / himself / itself)",
        explanation: 'This is an intensive pronoun, used to emphasize the subject ("The designated cook") who performed the action. The subject and the object of the prepositional phrase refer to the same person.',
        correctAnswer: "himself",
    },
    {
        type: QuestionType.Identification,
        question: "5. The dehydrated camp meal, ______ contained spicy pepper flakes, was surprisingly delicious, despite the texture. \n\n(that / which)",
        explanation: 'The clause "which contained spicy pepper flakes" is non-restrictive (it is surrounded by commas and provides extra, non-essential information). For non-restrictive clauses, we use which.',
        correctAnswer: "which",
    },
    {
        type: QuestionType.Identification,
        question: "6. After three hours of strenuous hiking, the group desperately needed ______ long rest before the final ascent. \n\n(a / an / the)",
        explanation: 'The sentence refers to a single, countable instance of "rest" ("a long rest"). This uses the indefinite article a because "long" begins with a consonant sound.',
        correctAnswer: "a",
    },
    {
        type: QuestionType.Identification,
        question: "7. The highlight of the regional food trip was locating ______ famous, hidden-gem taco truck mentioned online. \n\n(a / an / the)",
        explanation: 'The definite article “the”is used because the noun phrase ("famous, hidden-gem taco truck") refers to a specific, unique truck that both the speaker and listener (or the reader, in this context) know is being discussed.',
        correctAnswer: "the",
    },
    {
        type: QuestionType.Identification,
        question: "8. Once the city lights were far behind, we saw ______ impressive array of constellations in the night sky. \n\n(a / an / the)",
        explanation: 'The indefinite article an is used because the adjective "impressive" begins with a vowel sound, requiring an for phonetic smoothness.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "9. She captured ______ unparalleled photo of the sunrise over the glacial lake this morning. \n\n(a / an / the)",
        explanation: 'The indefinite article an is used because the adjective "unparalleled" begins with a vowel sound.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "10. The scouts chose to finish their dinner by ______ fire before attempting to set up ______ shelter for the night. \n\n(a, a / the, a / a, the)",
        explanation: 'The first blank requires the because "the fire" refers to the specific, already-built campfire that the group is using (definite reference). The second blank requires a because "shelter" refers to setting up one instance of a shelter (indefinite reference).',
        correctAnswer: "the, a",
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The band, along with its road crew, ______ extensively across the archipelago for the past three months. \n\n(travels / travel)",
        explanation: 'The true subject is the singular noun "band." The phrase "along with its road crew" is an intervening prepositional phrase, not part of the compound subject, so the singular verb travels is required.',
        correctAnswer: "travels",
    },
    {
        type: QuestionType.Identification,
        question: "2. Neither the bassist nor the drummer ______ ready to perform the complex new arrangement for the live broadcast. \n\n(is / are)",
        explanation: 'When two subjects are connected by "neither... nor," the verb must agree with the subject closest to it ("drummer"), which is singular, requiring the singular verb is.',
        correctAnswer: "is",
    },
    {
        type: QuestionType.Identification,
        question: "3. Each of Cup of Joe's slow ballads ______ a sense of nostalgic high school romance among Gen Z listeners. \n\n(evokes / evoke)",
        explanation: 'The true subject is the indefinite singular pronoun "Each." The plural noun "ballads" is part of the prepositional phrase ("of Cup of Joe\'s slow ballads") and does not control the verb. Therefore, the singular verb evokes is correct.',
        correctAnswer: "evokes",
    },
    {
        type: QuestionType.Identification,
        question: "4. A number of Donny Pangilinan's fan accounts ______ celebrating his recent movie success with a massive online event. \n\n(was / were)",
        explanation: 'The subject here is the plural construction "A number of accounts." In this construction, "number" is treated as an indefinite quantity, requiring the plural verb were. (Contrast with: The number of accounts is thirty.)',
        correctAnswer: "were",
    },
    {
        type: QuestionType.Identification,
        question: "5. The recent success of Pinoy pop artists ______ many aspiring performers across the country to pursue their musical dreams. \n\n(motivates / motivate)",
        explanation: 'The subject is the singular noun "success." The prepositional phrase "of Pinoy pop artists" is an intervening modifier and does not affect the verb agreement. Therefore, the singular verb motivates is required.',
        correctAnswer: "motivates",
    },
    {
        type: QuestionType.Identification,
        question: "6. By the time Maki releases his next single next month, his dedicated fans ______ nearly a year since his last chart-topper. \n\n(wait / will have waited)",
        explanation: 'The time marker "By the time [future event] next month" requires the future perfect tense (will have waited) to indicate an action that will be completed before a specific point in the future.',
        correctAnswer: "will have waited",
    },
    {
        type: QuestionType.Identification,
        question: "7. Dionela ______ in countless campus concerts before signing with a major record label last year. \n\n(performed / has performed)",
        explanation: 'The time marker "last year" specifically pinpoints the action in the past. Even though the action occurred many times, the completion in the past is best expressed using the simple past tense, performed.',
        correctAnswer: "performed",
    },
    {
        type: QuestionType.Identification,
        question: "8. I wish the Can't Buy Me Love drama series ______ earlier tonight so I could finish my homework before midnight. \n\n(aired / would air)",
        explanation: 'When expressing a non-factual wish or a desire about a current or future event, the subjunctive mood is used. For future desire, the correct form in this context is would air.',
        correctAnswer: "would air",
    },
    {
        type: QuestionType.Identification,
        question: "9. Whenever I ______ to the band on Spotify, I feel a profound connection to my high school barkada. \n\n(listen / listened)",
        explanation: 'The sentence describes a habitual, ongoing action ("Whenever I...") that is true in the present. Therefore, the simple present tense (listen) is required to match the habitual time frame.',
        correctAnswer: "listen",
    },
    {
        type: QuestionType.Identification,
        question: "10. Before the Araneta Coliseum concert began, the security team realized that one of the barricades ______ and quickly secured the area. \n\n(broke / had broken)",
        explanation: 'This sentence describes two completed actions in the past: the barricade failing and the concert beginning. The first action (the barricade failing) occurred before the second action (the concert began), requiring the past perfect tense, had broken, to show that prior sequence.',
        correctAnswer: "had broken",
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The kitchen schedule indicates that my brother is responsible ______ doing the dishes every night this week. \n\n(for / to)",
        explanation: 'The correct fixed preposition for the adjective "responsible" is for when referring to an action or task. ("responsible for doing...")',
        correctAnswer: "for",
    },
    {
        type: QuestionType.Identification,
        question: "2. I am deeply concerned ______ the dust that has accumulated under the beds in the last month. \n\n(about / with)",
        explanation: 'The correct fixed preposition for the common use of "concerned" is about when referring to worry or anxiety regarding a thing or situation.',
        correctAnswer: "about",
    },
    {
        type: QuestionType.Identification,
        question: "3. My mother always insists ______ a thorough cleaning of the main living room before the relatives arrive. \n\n(on / at)",
        explanation: 'The phrasal verb is "insist on," meaning to demand or persist in something. The preposition at is not idiomatically correct here.',
        correctAnswer: "on",
    },
    {
        type: QuestionType.Identification,
        question: "4. Could you take care of sweeping the floor ______ my absence, as I have to attend a virtual meeting? \n\n(in / on)",
        explanation: 'The fixed expression is "in my absence," meaning while I am away. The common phrase is "in the absence of."',
        correctAnswer: "in",
    },
    {
        type: QuestionType.Identification,
        question: "5. We have been scrubbing the garage floor ______ eight hours straight and are exhausted. \n\n(since / for)",
        explanation: 'The sentence uses the present perfect continuous tense ("have been cleaning") and specifies the duration of time ("eight hours"). This requires the preposition for. (Use since for a starting point in time, e.g., "since 9 AM.")',
        correctAnswer: "for",
    },
    {
        type: QuestionType.Direction,
        direction: "Type the letter (A, B, or C) of the correct answer based on what is being asked in the scenario.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. You are politely asking your teacher about a missing grade. \nA. Noticing that my third-quarter grade is not yet updated on the portal. \nB. I noticed that my third-quarter grade is not yet updated on the portal; could you please look into it? \nC. My third-quarter grade is not yet updated on the portal, could you please look into it.\n",
        explanation: 'Option B uses a semicolon to correctly join two closely related independent clauses ("I noticed..." and "could you please look..."). Option A is a fragment (missing a main clause), and Option C is a comma splice (joining two independent clauses with only a comma).',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "7. You are requesting a deadline extension for a project. \nA. Requesting an extension because of my heavy course load this week, which includes two major projects. \nB. I have a heavy course load this week, including two major projects, so I am requesting an extension. \nC. I have a heavy course load this week, I am requesting an extension.\n",
        explanation: 'Option B is a complex sentence where the clauses are correctly linked by the coordinating conjunction so ("I have a heavy course load... so I am requesting..."). Option A is a fragment (a dependent clause introduced by a participial phrase), and Option C is a run-on sentence, incorrectly joining two independent clauses without punctuation or a conjunction.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "8. You are clarifying a confusing instruction for the final essay.\nA. I was confused by the instructions for the final essay project, specifically the required page length.\nB. Since I was confused by the instructions for the final essay project, specifically the required page length.\nC. The instructions for the final essay project were confusing, specifically the required page length, I need clarification\n",
        explanation: 'Option A is a single, complete, and simple sentence with one subject ("I") and one predicate ("was confused..."). Option B is a fragment (a dependent clause beginning with the subordinating conjunction "Since"). Option C is a comma splice.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "9. You are scheduling a meeting with the teacher to discuss your performance. \nA. When would you be available to discuss my performance in the class? \nB. Available to discuss my performance in the class sometime next week. \nC. I need to discuss my performance in the class, when are you available.\n",
        explanation: 'Option A is a complete sentence (an interrogative sentence/question). Option B is a fragment (missing a subject and a verb). Option C is a run-on or comma splice.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "10. You are responding to the teacher's email with confirmation. \nA. Thank you for clarifying the report requirements, I will submit it by Friday. \nB. Thank you for clarifying the report requirements. I will submit it by Friday. \nC. Clarifying the report requirements, so I can submit it by Friday.\n",
        explanation: 'Option B correctly uses a period to separate the two independent clauses ("Thank you..." and "I will submit...") into two complete sentences. Option A is a comma splice. Option C is a fragment (missing a main clause).',
        correctAnswer: "B",
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The admissions committee insisted ______ a personal interview for the scholarship finalists. \n\n(on / at)",
        explanation: 'The correct fixed phrasal verb is "insist on."',
        correctAnswer: "on",
    },
    {
        type: QuestionType.Identification,
        question: "2. She is finally capable ______ managing her own schedule now that she is in senior high. \n\n(of / with)",
        explanation: 'The fixed expression is "capable of" doing something.',
        correctAnswer: "of",
    },
    {
        type: QuestionType.Identification,
        question: "3. The university is superior ______ its facilities compared to many smaller institutions. \n\n(than / to)",
        explanation: 'The Latin adjective "superior" is always followed by the preposition to (not than) in a comparison.',
        correctAnswer: "to",
    },
    {
        type: QuestionType.Identification,
        question: "4. I am highly appreciative ______ the guidance my counselor gave me during the application process. \n\n(to / of)",
        explanation: 'The correct fixed phrase is "appreciative of" something/someone.',
        correctAnswer: "of",
    },
    {
        type: QuestionType.Identification,
        question: "5. All applicants must adhere strictly ______ the rules stated in the university handbook. \n\n(to / with)",
        explanation: 'The verb "adhere" is always followed by the preposition to when it means to follow or stick to rules.',
        correctAnswer: "to",
    },
    {
        type: QuestionType.Identification,
        question: "6. By the time I graduate next year, I ______ the same part-time job for almost two years. \n\n(hold / will have held)",
        explanation: 'The time marker "By the time [future event]" requires the future perfect tense to show the action will be completed by that future date.',
        correctAnswer: "will have help",
    },
    {
        type: QuestionType.Identification,
        question: "7. I wish I ______ a better score on the entrance exam; I would have gotten into my first choice school. \n\n(got / had gotten)",
        explanation: 'The sentence expresses a wish about a past event (the exam score). The past counterfactual (third conditional) requires the past perfect tense (had gotten).',
        correctAnswer: "had gotten",
    },
    {
        type: QuestionType.Identification,
        question: "8. My parents ______ abroad for five years when they finally come home for good next month. \n\n(will be working / will have been working)",
        explanation: 'The time frame uses a duration ("for five years") leading up to a future point ("next month"). This requires the future perfect progressive tense to emphasize the ongoing duration of the work.',
        correctAnswer: "will have been working",
    },
    {
        type: QuestionType.Identification,
        question: "9. If my application ______ accepted, I would immediately start looking for an apartment near the campus. \n\n(was / were)",
        explanation: 'The clause expresses a present counterfactual or contrary-to-fact condition (second conditional). In this structure, the past subjunctive were is required, even for a singular subject.',
        correctAnswer: "were",
    },
    {
        type: QuestionType.Identification,
        question: "10. The university ______ the list of admitted students only after all validation checks are complete next week. \n\n(releases / will release)",
        explanation: 'This describes a specific official action that will occur in the future ("next week"), requiring the simple future tense (will release).',
        correctAnswer: "will release",
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. My friend confessed that when the teacher asked for the project, he realized he ______ the required references in the library. \n\n(left / had left)",
        explanation: 'The past perfect tense (had left) is required to indicate an action (leaving the references) that was completed before another past action (the teacher asked for the project).',
        correctAnswer: "had left",
    },
    {
        type: QuestionType.Identification,
        question: "2. Since moving back to the province in 2020, I ______ a much slower pace of life, which I prefer to Manila's rush. \n\n(lived / have lived)",
        explanation: 'The present perfect tense (have lived) is required because the action began in the past ("since 2020") and continues up to the present moment.',
        correctAnswer: "have lived",
    },
    {
        type: QuestionType.Identification,
        question: "3. By the time we finish our senior thesis next week, we ______ this group project for exactly two stressful months. \n\n(will be working / will have been working)",
        explanation: 'The future perfect progressive tense (will have been working) is required to emphasize the duration of an activity leading up to a specific point in the future ("by the time we finish").',
        correctAnswer: "will have been working",
    },
    {
        type: QuestionType.Identification,
        question: "4. If I ______ the regional competition last month, I would have used the prize money to buy new review materials. \n\n(won / had won)",
        explanation: 'The sentence is a Third Conditional expressing a hypothetical situation in the past. The "if" clause requires the past perfect tense (had won).',
        correctAnswer: "had won",
    },
    {
        type: QuestionType.Identification,
        question: "5. My friend’s email says she ______ finished the required summer reading just a few moments ago. \n\n(just finished / has just finished)",
        explanation: 'The phrase "just a few moments ago" emphasizes that the action was recently completed and has relevance now, which is the function of the present perfect tense (has just finished).',
        correctAnswer: "had just finished",
    },
    {
        type: QuestionType.Identification,
        question: "6. In my friend's latest mail, she wrote it was ______ honor to be chosen as the class valedictorian this year. \n\n(a / an / the)",
        explanation: 'The indefinite article an is used because the word "honor" begins with a vowel sound, even though the first letter is a consonant (H).',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "7. The student council shared ______ important update about the upcoming intramurals during the morning assembly. \n\n(a / an / the)",
        explanation: 'The indefinite article an is used because the adjective "important" begins with a vowel sound.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "8. I need to buy ______ umbrella before I leave school because the dark clouds indicate a coming storm. \n\n(a / an / the)",
        explanation: 'The indefinite article an is used because the word "umbrella" begins with a vowel sound.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "9. ______ most challenging part of being a student is always having to balance academic tasks with household chores. \n\n(A / An / The)",
        explanation: 'The definite article The is required for the superlative adjective "most challenging" and refers to a specific, understood concept (the collective experience of being a student).',
        correctAnswer: "The",
    },
    {
        type: QuestionType.Identification,
        question: "10. The teacher asked me to bring ______ unique kind of indigenous material for the art project tomorrow. \n\n(a / an / the)",
        explanation: 'The indefinite article a is used because the word "unique" begins with the consonant sound /j/ or "yoo," not a vowel sound.',
        correctAnswer: "a",
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The coordinator assigned the final tasks for the field trip preparations to my groupmates and ______. \n\n(I / me)",
        explanation: 'Me is the object of the preposition "to."',
        correctAnswer: "me",
    },
    {
        type: QuestionType.Identification,
        question: "2. The school's cultural immersion trip included three provinces, one of ______ was known for its preserved historical architecture. \n\n(which / whom)",
        explanation: 'Which is used because the pronoun refers to an inanimate object ("provinces").',
        correctAnswer: "which",
    },
    {
        type: QuestionType.Identification,
        question: "3. The class adviser insisted on ______ organizing the thank-you card presentation for the guest speaker. \n\n(him / his)",
        explanation: 'His is the possessive form required before a gerund ("organizing").',
        correctAnswer: "his",
    },
    {
        type: QuestionType.Identification,
        question: "4. No student who applied for the exchange program scored higher on the proficiency test than ______. \n\n(she / her)",
        explanation: 'She is the subjective case required in a comparison when the implied verb is "scored" ("than she scored").',
        correctAnswer: "she",
    },
    {
        type: QuestionType.Identification,
        question: "5. After the successful school festival, the organizing committee treated ______ to a well-deserved team dinner. \n\n(ourselves / themselves)",
        explanation: 'The themselves is the reflexive pronoun because the plural subject ("the organizing committee") is also the object of the verb "treated."',
        correctAnswer: "themselves",
    },
    {
        type: QuestionType.Identification,
        question: "6. Neither the heavy traffic nor the unexpected rain ______ the energy of the students on the field trip. \n\n(dampens / dampen)",
        explanation: 'The verb agrees with the subject closest to it, "rain" (singular).',
        correctAnswer: "dampens",
    },
    {
        type: QuestionType.Identification,
        question: "7. The class, along with its chaperones and driver, ______ currently waiting for the bus to start the journey. \n\n(is / are)",
        explanation: 'The subject is the singular noun "class" (treated as a unit). The phrase "along with..." is an intervening phrase.',
        correctAnswer: "is",
    },
    {
        type: QuestionType.Identification,
        question: "8. Every single item of the student's packed lunch ______ checked by the teacher before the journey began. \n\n(was / were)",
        explanation: 'The indefinite pronoun "Every single item" is always singular.',
        correctAnswer: "was",
    },
    {
        type: QuestionType.Identification,
        question: "9. Participating in community service activities ______ students with genuine empathy and social awareness. \n\n(instills / instill)",
        explanation: 'The subject is the singular gerund phrase "Participating in community service activities."',
        correctAnswer: "instills",
    },
    {
        type: QuestionType.Identification,
        question: "10. The box of leftover materials from the science fair ______ sitting on the supply closet shelf since last month. \n\n(is / are)",
        explanation: 'The true subject is the singular noun "box." The intervening prepositional phrase "of leftover materials..." does not affect the verb.',
        correctAnswer: "is",
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. The Barangay Captain is highly capable ______ handling the conflicting demands of different community groups. \n\n(of / with)",
        explanation: 'Fixed expression: "capable of."',
        correctAnswer: "of",
    },
    {
        type: QuestionType.Identification,
        question: "2. Many residents are dependent ______ the community project for improved access to clean water. \n\n(on / to)",
        explanation: 'Fixed expression: "dependent on."',
        correctAnswer: "on",
    },
    {
        type: QuestionType.Identification,
        question: "3. The local government insisted ______ transparency in the bidding process for the infrastructure project. \n\n(on / at)",
        explanation: 'Fixed phrasal verb: "insist on."',
        correctAnswer: "on",
    },
    {
        type: QuestionType.Identification,
        question: "4. The committee is accountable ______ the entire community for the proper allocation of funds. \n\n(to / for)",
        explanation: 'Fixed expression: "accountable to" a person or group.',
        correctAnswer: "to",
    },
    {
        type: QuestionType.Identification,
        question: "5. The new community center is located conveniently ______ the town hall, near the public market. \n\n(at / beside)",
        explanation: 'Beside indicates location next to something.',
        correctAnswer: "beside",
    },
    {
        type: QuestionType.Direction,
        direction: "Type the letter (A, B, or C) of the correct answer based on what is being asked in the scenario.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. Describing the outcome of a barangay meeting. \nA. The residents agreed to the new waste management rules, which was a necessary step. \nB. The residents agreed to the new waste management rules, it was a necessary step. \nC. The residents agreeing to the new waste management rules.\n",
        explanation: 'A is a complete sentence correctly using a restrictive clause. C is a fragment.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "7. Explaining the situation with a community fund. \nA. Since the community fund was insufficient to cover the entire cost of the renovation. \nB. The community fund was insufficient; therefore, the local council organized a fundraising drive. \nC. The community fund was insufficient, the local council organized a fundraising drive.\n",
        explanation: 'B correctly uses a semicolon and conjunctive adverb to join two independent clauses. C is a comma splice.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "8. Talking about local leaders. \nA. Dedicated to serving the community, the new councilor worked tirelessly to address infrastructure issues. \nB. The new councilor worked tirelessly to address infrastructure issues, dedicated to serving the community. \nC. The new councilor worked tirelessly to address infrastructure issues, dedicated to serving the community.\n",
        explanation: 'A is a complete sentence with a correctly linked introductory modifying phrase. B and C awkwardly structure the modifier.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "9. Discussing a specific project. \nA. The installation of new streetlights, definitely improving safety throughout the neighborhood. \nB. The installation of new streetlights definitely improved safety throughout the neighborhood. \nC. The installation of new streetlights, definitely improving safety throughout the neighborhood, residents praised the initiative.\n",
        explanation: 'B is a complete, simple sentence. A is a fragment.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "10. Explaining the barangay election. \nA. Every resident must register to vote; it is the most crucial way to ensure accountability. \nB. Every resident must register to vote, it is the most crucial way to ensure accountability. \nC. Registering to vote every resident must do this to ensure accountability.\n",
        explanation: 'A correctly uses a semicolon to join two independent clauses. B is a comma splice.',
        correctAnswer: "A",
    },
]

const setH: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Type the letter (A, B, or C) of the correct answer based on what is being asked in the scenario.",
        question: "",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. Describing a historical education system. \nA. The period of compulsory religious education during the Spanish colonial era. \nB. The period of compulsory religious education during the Spanish colonial era was lengthy and rigorous. \nC. The period of compulsory religious education during the Spanish colonial era was lengthy, it was also rigorous.\n",
        explanation: 'B is a complete sentence (Subject + Main Verb). A is a fragment.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "2. Explaining a modernization initiative. \nA. Since the implementation of the K-12 program required significant infrastructure adjustments. \nB. The implementation of the K-12 program required significant infrastructure adjustments; many schools needed new classrooms. \nC. The implementation of the K-12 program required significant infrastructure adjustments, many schools needed new classrooms.\n",
        explanation: 'B correctly joins two independent clauses using a semicolon, avoiding a comma splice.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "3. Talking about technology in classrooms. \nA. Integrating digital devices into the curriculum, a crucial step toward preparing students for the modern economy. \nB. The Department of Education successfully integrated digital devices into the curriculum. \nC. The Department of Education integrated digital devices into the curriculum, preparing students for the modern economy.\n",
        explanation: 'C is a complete sentence where the second part is correctly structured as a modifying phrase, not an independent clause.',
        correctAnswer: "C",
    },
    {
        type: QuestionType.Identification,
        question: "4. Analyzing educational challenges. \nA. Facing the complex challenge of providing quality education across all rural and urban areas. \nB. Educators face the complex challenge of providing quality education across all rural and urban areas. \nC. Educators face the complex challenge of providing quality education, across all rural and urban areas.\n",
        explanation: 'B is a complete sentence. A is a fragment (lacks a main verb).',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "5. Discussing an old school building. \nA. Constructed in the 19th century, the old building now serves as the university's main administrative center. \nB. The old building now serves as the university's main administrative hub, constructed in the 19th century. \nC. The old building constructed in the 19th century, now serves as the university's main administrative center.\n",
        explanation: 'A is a complete sentence with a correctly placed introductory modifying phrase.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "6. The university recently opened ______ merit program for students specializing in Philippine history. \n\n(a / an / the)",
        explanation: 'Indefinite article a is used because the word "merit" begins with a consonant sound.',
        correctAnswer: "a",
    },
    {
        type: QuestionType.Identification,
        question: "7. ______ most significant change in the modern curriculum is the emphasis on technical skills. \n\n(A / An / The)",
        explanation: 'Definite article the is required before the superlative adjective "most significant."',
        correctAnswer: "The",
    },
    {
        type: QuestionType.Identification,
        question: "8. The school administrator gave ______ excellent speech about the importance of digital literacy. \n\n(a / an / the)",
        explanation: 'Indefinite article an is used because the adjective "excellent" begins with a vowel sound.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "9. The new K-12 system focuses on developing ______ understanding of vocational trades. \n\n(a / an / the)",
        explanation: 'Indefinite article an is used because "understanding" begins with a vowel sound.',
        correctAnswer: "an",
    },
    {
        type: QuestionType.Identification,
        question: "10. Historians agree that the shift occurred during ______ early American colonial period. \n\n(a / an / the)",
        explanation: 'Definite article the is used to refer to a specific, known historical period.',
        correctAnswer: "the",
    },
]

const setI: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. By the time we reach Pampanga for the culinary tour, we ______ local delicacies for three hours straight. \n\n(will have eaten / will have been eating)",
        explanation: 'Future perfect progressive, emphasizing duration before a future event.',
        correctAnswer: "will have been eating",
    },
    {
        type: QuestionType.Identification,
        question: "2. She admitted that she ______ the traditional recipe carefully before deciding to simplify the process. \n\n(studied / had studied)",
        explanation: 'Past perfect, showing an action completed before another past action.',
        correctAnswer: "had studied",
    },
    {
        type: QuestionType.Identification,
        question: "3. Since our trip to Bacolod, I ______ to find authentic Piaya that is quite as fresh. \n\n(tried / have been trying)",
        explanation: 'Present perfect progressive, showing an action that started in the past and continues or is repeated up to the present.',
        correctAnswer: "have been trying",
    },
    {
        type: QuestionType.Identification,
        question: "4. The judges ______ the final plate of sisig just as the food critics entered the hall. \n\n(finished / have finished)",
        explanation: 'Simple past, used for a completed past action followed immediately by another simple past action.',
        correctAnswer: "finished",
    },
    {
        type: QuestionType.Identification,
        question: "5. If he ______ the owner of the heritage restaurant, he would make the secret family adobo recipe public. \n\n(was / were)",
        explanation: 'Past subjunctive were is required to express a present contrary-to-fact or hypothetical condition.',
        correctAnswer: "were",
    },
    {
        type: QuestionType.Identification,
        question: "6. The last piece of leche flan was divided equally between my cousin and ______. \n\n(I / me)",
        explanation: 'Me is the object of the preposition "between."',
        correctAnswer: "me",
    },
    {
        type: QuestionType.Identification,
        question: "7. The competition required six difficult regional recipes, one of ______ took two days of preparation. \n\n(which / whom)",
        explanation: 'Which refers to the inanimate noun "recipes."',
        correctAnswer: "which",
    },
    {
        type: QuestionType.Identification,
        question: "8. The critics insisted on ______ trying the new Bicolano dish immediately, despite their full plates. \n\n(us / our)",
        explanation: 'Our is the possessive form required before the gerund ("trying").',
        correctAnswer: "our",
    },
    {
        type: QuestionType.Identification,
        question: "9. No other local baker in the entire province is as skilled at creating the perfect ensaymada as ______. \n\n(she / her)",
        explanation: 'She is the subjective case required in a comparison when the implied verb is "is" ("as skilled as she is").',
        correctAnswer: "she",
    },
    {
        type: QuestionType.Identification,
        question: "10. The cooks, exhausted but proud, congratulated ______ on the massive success of the food festival. \n\n(them / themselves)",
        explanation: 'Themselves is the reflexive pronoun because the cooks are both the subject and the object of the action.',
        correctAnswer: "themselves",
    },
]

const setJ: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Carefully read each sentence and type the single, grammatically correct option that best fits the context. Make sure the first letter of your answer matches the choice: if it is lowercase, write it lowercase; if it is capitalized, write it with a capital letter.",
        question:"",
        explanation: '',
        correctAnswer: "",
    },
    {
        type: QuestionType.Identification,
        question: "1. Choose the most appropriate preposition to complete the sentence: The concert is scheduled to start _____ 7:30 PM. \n\n(on / in / at / for)",
        explanation: 'Specific times are always paired with at, and “7:30 PM” is a precise time, making at the only correct choice.',
        correctAnswer: "at",
    },
    {
        type: QuestionType.Identification,
        question: "2. Choose the correct preposition: We waited patiently _____ the beginning of the movie. \n\n(since / for / while / during)",
        explanation: 'Specific times are always paired with at, and “7:30 PM” is a precise time, making at the only correct choice.',
        correctAnswer: "for",
    },
    {
        type: QuestionType.Identification,
        question: "3. Select the correct preposition to complete the idiomatic expression: I'm very keen _____ learning English. \n\n(in / at / on / with)",
        explanation: 'The phrase “keen on” is a fixed idiom meaning very interested in, requiring on before “learning English.”',
        correctAnswer: "on",
    },
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and type the letter of your answer (A, B, C, or D).",
        question: "",
        correctAnswer: "",
        explanation: ""
    },
    {
        type: QuestionType.Identification,
        question: "4. Which sentence correctly uses a preposition to show location/position? \nA. I will meet you in the corner of the room. \nB. The cat jumped above the ceiling fan. \nC. She arrived at the morning. \nD. The keys are among the table.\n",
        explanation: 'In the corner of the room correctly shows location. B is illogical, C uses the wrong preposition for time, and D misuses among, which is for multiple items.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "5. Which sentence contains a prepositional phrase acting as an adjective? \nA. She ran quickly across the field. \nB. The house with the blue shutters is the oldest one. \nC. They argued about the final score. \nD. Before dinner, we finished our homework.\n",
        explanation: 'The prepositional phrase with the blue shutters acts as an adjective by describing the noun house, specifying which house is being talked about. This shows how prepositional phrases can modify nouns to give more detail.',
        correctAnswer: "B",
    },
    {
        type: QuestionType.Identification,
        question: "6. Identify the missing component in the following fragment and provide a word/phrase that would make it a complete sentence: Brought a new laptop to class yesterday morning. \nA. Missing Predicate; Fix: The student. \nB. Missing Subject; Fix: Is very interesting. \nC. Missing Subject; Fix: The student. \nD. Missing Predicate; Fix: The laptop.\n",
        explanation: 'The fragment “Brought a new laptop to class yesterday morning” has a verb (brought) but no subject. Adding “The student” provides the missing subject, making it a complete sentence.',
        correctAnswer: "C",
    },
    {
        type: QuestionType.Identification,
        question: "7. Identify the missing component in the following fragment and provide a word/phrase that would make it a complete sentence: The old bicycle, with its rusty handlebars and flat tires. \nA. Missing Subject; Fix: Covered in cobwebs. \nB. Missing Subject; Fix: It was. \nC. Missing Predicate; Fix: Stood abandoned in the corner. \nD. Missing Predicate; Fix: Its rusty handlebars.\n",
        explanation: 'The fragment “The old bicycle, with its rusty handlebars and flat tires” already provides the subject (the old bicycle) but does not include an action. Adding “stood abandoned in the corner” gives the missing predicate, completing the sentence.',
        correctAnswer: "C",
    },
    {
        type: QuestionType.Identification,
        question: "8. Identify the missing component in the following fragment and provide a word/phrase that would make it a complete sentence: Worn out after a long day of rehearsals. \nA. Missing Subject; Fix: The dancers. \nB. Missing Predicate; Fix: Fell asleep immediately. \nC. Missing Subject; Fix: Were happy. \nD. Missing Predicate; Fix: The tired actors.\n",
        explanation: 'The fragment “Worn out after a long day of rehearsals” describes a state but does not say who is worn out. Adding “The dancers” provides the missing subject, completing the sentence.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "9. Identify the missing component in the following fragment and provide a word/phrase that would make it a complete sentence: The professor standing at the front of the auditorium. \nA. Missing Predicate; Fix: Was speaking loudly. \nB. Missing Subject; Fix: A very wise man. \nC. Missing Predicate; Fix: Of the auditorium. \nD. Missing Subject; Fix: He was.)\n",
        explanation: 'The fragment “The professor standing at the front of the auditorium” provides the subject (the professor) but does not include an action. Adding “was speaking loudly” supplies the missing predicate, completing the sentence.',
        correctAnswer: "A",
    },
    {
        type: QuestionType.Identification,
        question: "10. Identify the missing component in the following fragment and provide a word/phrase that would make it a complete sentence: Because he missed the bus this morning. \nA. Dependent Clause; Fix: He was late for school. \nB. Missing Subject; Fix: He missed the bus. \nC. Missing Predicate; Fix: He did not get up. \nD. Independent Clause; Fix: He woke up late.)\n",
        explanation: 'The fragment “Because he missed the bus this morning” is a dependent clause and cannot stand alone. Adding “He was late for school” completes the thought and forms a complete sentence.',
        correctAnswer: "A",
    },
]

export const GRAMMAR_ADVANCED_SET: SetContainer[] = [
    {
        label: "Set A",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setA,
        }
    },
    {
        label: "Set B",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setB,
        }
    },
    {
        label: "Set C",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setC,
        }
    },
    {
        label: "Set D",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setD,
        }
    },
    {
        label: "Set E",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setE,
        }
    },
    {
        label: "Set F",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setF,
        }
    },
    {
        label: "Set G",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setG,
        }
    },
    {
        label: "Set H",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setH,
        }
    },
    {
        label: "Set I",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setI,
        }
    },
    {
        label: "Set J",
        set: {
            instruction: "Answer and complete the following items. You have 45 seconds to answer each one. Get 7 correct answers to complete the level successfully.",
            questions: setJ,
        }
    },
]
import type { QuizQuestion, SetContainer, SetMetadata } from "../../types"
import { QuestionType } from "../QuestionType.Enum"

const setA: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Choose the best pronoun replacement for the underlined part: “Me and my friends went to the plaza.”",
        explanation: "“My friends and I” is the correct subject pronoun form. In English, the subject pronoun “I” is used (not “me”), and it is polite to mention yourself last. ",
        correctAnswer: "My friends and I",
        choices: [
            "Friends and me",
            "I and my friends",
            "My friends and I",
            "My friends with I",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the best pronoun: “Alex invited ___ and ___ to the party.”",
        explanation: "After the verb “invited,” object pronouns are needed because the people are receiving the action of the verb. “Him” and “me” are object pronouns, so the correct pronouns are him and me.",
        correctAnswer: "him and me",
        choices: [
            "he and I",
            "him and I",
            "he and me",
            "him and me",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the best pronoun: “Mark is very hungry. ___ went to the store to buy some bread.”",
        explanation: "The first sentence tells us that the person is Mark, a boy. The subject of the second sentence is the one performing the action, so the correct pronoun is \"He.\" ",
        correctAnswer: "He",
        choices: [
            "He",
            "Him",
            "She",
            "They",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Choose the best article: She bought ___ book from Pandayan Bookstore.",
        explanation: "The article “a” is used before a singular noun that begins with a consonant sound and is not specific.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "that",
            "the",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the best article: ___ important lesson was learned today.",
        explanation: "“Important” begins with a vowel sound; therefore, “An” is correct.",
        correctAnswer: "An",
        choices: [
            "A",
            "An",
            "One",
            "The",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. ___ sun rises in the east.",
        explanation: "“The” is used because it refers to a specific, unique thing, the sun.",
        correctAnswer: "The",
        choices: [
            "A",
            "An",
            "One",
            "The",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the best verb: My family ___ going to the cemetery.",
        explanation: "“Family” is a collective noun treated as singular, and because the sentence uses “going,” which is in the present progressive tense, it must be paired with the singular helping verb “is” to make the correct structure “is going.”",
        correctAnswer: "is",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Choose the best verb: She ___ her parents very much.",
        explanation: "The subject “She” is singular, and the sentence shows a feeling that is true now, which means it is in the present tense and the correct verb form is “loves.”",
        correctAnswer: "loves",
        choices: [
            "love",
            "loved",
            "loves",
            "loving",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Choose the best verb: Normal days ___ quiet in our barangay.",
        explanation: "“Normal days” is plural, which means it needs the plural verb “are” to match the subject.",
        correctAnswer: "are",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Choose the best past tense form: He ___ a new phone yesterday.",
        explanation: "“Yesterday” shows past time, which means the verb must be in past tense, and the past form of “give” is “gave.”",
        correctAnswer: "gave",
        choices: [
            "give",
            "gave",
            "given",
            "gives",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Choose the best past tense: They are ___ the winner right now.",
        explanation: "The verb needs the -ing form because it is used with “are” to show the action is happening now. The phrase “right now” is a clue that the present continuous tense should be used, and the correct answer is “announcing.”",
        correctAnswer: "announcing",
        choices: [
            "announce",
            "announced",
            "announces",
            "announcing",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Choose the best past tense: She ___ to the beach and got sunburn.",
        explanation: "The past tense of “get” is “got.” The sentence describes a past event, making other forms incorrect.",
        correctAnswer: "got",
        choices: [
            "get",
            "gets",
            "getting",
            "got",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Choose the best preposition: That gift is important ___ me.",
        explanation: "The preposition “to” is correct when expressing importance to someone. “For,” “at,” and “of” do not convey the intended meaning in this context.",
        correctAnswer: "to",
        choices: [
            "at",
            "for",
            "of",
            "to",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Choose the best sentence that is not a fragment.",
        explanation: "This sentence expresses a complete thought with both subject and predicate, making it a full sentence. The other options are fragments or incomplete.",
        correctAnswer: "We rested after the long trip.",
        choices: [
            "We rested.",
            "After the long trip. ",
            "Because we were tired.",
            "We rested after the long trip.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Choose the best sentence that is complete and correct.",
        explanation: "This sentence is complete, clear, and detailed, containing subject, verb, and additional information. It is the best choice compared to shorter or incomplete options.",
        correctAnswer: "We went to the market this morning.",
        choices: [
            "We went.",
            "Went to the market.",
            "We went to the market.",
            "We went to the market this morning.",
        ],
        choiceType: "alpha"
    },
]

const setB: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "Choose the best verb: My family ___ very supportive of me.",
        explanation: "“Family” is a singular collective noun, which means it takes the singular verb “has been.”",
        correctAnswer: "has been",
        choices: [
            "been",
            "has been",
            "have been",
            "having been",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Choose the best verb: She ___ home at 6 p.m. every day.",
        explanation: "Third-person singular subjects require the “-s” in present tense. “She comes” is correct; “come’s” and “coming” are incorrect.",
        correctAnswer: "comes",
        choices: [
            "came",
            "comes",
            "come’s",
            "coming",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Choose the best verb: They ___ the project on time.",
        explanation: "“They” is plural, so the plural past tense verb “made” correctly matches the subject. The phrase “on time” indicates that the action was completed in the past, which is why the past tense is appropriate.",
        correctAnswer: "made",
        choices: [
            "made",
            "make",
            "makes",
            "making",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Choose the best tense: He ___ to school every day.",
        explanation: "The subject “He” is singular, and the sentence talks about a regular action in the present, which requires the singular present tense “goes.”",
        correctAnswer: "goes",
        choices: [
            "go",
            "goes",
            "going",
            "went",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Choose the best tense: My cousin ___ super happy because it was his first time.",
        explanation: "The sentence refers to a past event, making “was” correct. “Is” is present tense and does not match the context.",
        correctAnswer: "was",
        choices: [
            "be",
            "being",
            "is",
            "was",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. “My father and I fixed the car together yesterday afternoon because it would not start in the morning.” Which word in the sentence is a pronoun?",
        explanation: "The pronoun in the sentence is I, which is used as the subject.",
        correctAnswer: "I",
        choices: [
            "I",
            "Car",
            "Father",
            "My",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Choose the best pronoun replacement: “One of my circle of friend enjoys reading.”",
        explanation: "The focus is on the pronoun “my,” which shows possession. It correctly indicates that the circle of friends belongs to the speaker. “Me” in option C is wrong because it cannot show possession here. The other options either do not use the correct plural form or do not clearly indicate possession. ",
        correctAnswer: "One of my circle of friends",
        choices: [
            "One of my friend",
            "One of my circle",
            "One of me circle of friends",
            "One of my circle of friends",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Choose the best pronoun form: “I ___ thankful to you for your help.”",
        explanation: "The subject “I” requires the singular present tense of the verb “to be,” which is “am.” The correct sentence is: “I am thankful to you for your help.”",
        correctAnswer: "am",
        choices: [
            "am",
            "is",
            "thankful",
            "Me am",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Choose the correct form: I didn’t ___ about the meeting.",
        explanation: "“I didn’t think about the meeting” is correct because “didn’t” already shows the past tense. After “didn’t,” we always use the base form of the verb, which is “think.” Using “thought” would be wrong here because we do not put a past tense verb after “did not.” “Thinks” and “thinking” are also incorrect because they do not match this structure.",
        correctAnswer: "think",
        choices: [
            "think",
            "thinks",
            "thought",
            "thinking",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Choose the correct form: My writemate and I___ to join the contest.",
        explanation: "The plural subject “My writemate and I” requires the plural verb “want.” “Is want” and “are wants” are ungrammatical.",
        correctAnswer: "want",
        choices: [
            "are wants",
            "is want",
            "want",
            "wants",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Choose the best article: We plan to go to ___ bazaar this weekend.",
        explanation: "Specific places like “the bazaar” require the definite article “the.” “A,” “an,” or no article would be incorrect.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "no article",
            "the",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. I love to spend time with ___ family.",
        explanation: "The sentence talks about a specific family (not just any family), which requires the definite article “the.”",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "some",
            "the",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Choose the best complete sentence:",
        explanation: "This is the only complete, fully valid sentence. The other options are fragments or incomplete.",
        correctAnswer: "The children played happily under the bright sun.",
        choices: [
            "Exhilarated as it seems. ",
            "Running through the field.",
            "Because the rain poured heavily.",
            "The children played happily under the bright sun.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. What is a sentence fragment?",
        explanation: "A sentence fragment is incomplete because it is missing a subject, a verb, or a complete thought. It looks like a sentence but does not express a full idea.",
        correctAnswer: "A group of words that looks like a sentence but is not complete.",
        choices: [
            "A complete sentence with a subject and a verb.",
            "A group of words that looks like a sentence but is not complete.",
            "A sentence that always starts with a capital letter.",
            "A sentence that ends with a period.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Dancing in the hot afternoon make themselves sweat on the basketball court. What is missing in the sentence?",
        explanation: "The sentence does not clearly say who is making themselves sweat. Adding a subject like “the cheerleaders” completes the sentence. Letter C is incorrect because “the elephant” is not a logical subject for this context. Letters A and B are wrong because the verb “make” is already present, and the problem is the missing subject.",
        correctAnswer: "Missing subject - the cheerleaders",
        choices: [
            "Missing verb - twirls",
            "Missing verb - spins",
            "Missing subject - the elephant",
            "Missing subject - the cheerleaders",
        ],
        choiceType: "alpha"
    },
]

const setC: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “Me and my cousin went to the park.” Which is the correct way to write this sentence using proper subject pronouns?",
        explanation: "In compound subjects, it is polite to mention the other person first. “My cousin and I” is grammatically correct. That is the correct subject pronoun form.",
        correctAnswer: "My cousin and I",
        choices: [
            "Cousin and me",
            "I and my cousin",
            "Me and my cousin",
            "My cousin and I",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Charlotte wants to introduce herself: “Me is the youngest in our family.” Which is the best correction for the subject pronoun in this sentence?",
        explanation: "The subject pronoun must be “I,” not “Me,” because it is the doer of the action (introducing herself). The verb must agree with the subject, making “I am” correct.",
        correctAnswer: "I am the youngest in our family.",
        choices: [
            "I am the youngest in our family.",
            "I is the youngest in our family.",
            "Me am the youngest in our family.",
            "Me are the youngest in our family.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. Rafael sent a message to his wife explaining that he cannot bring their daughter to school because he is busy at work. His message is confusing because the pronoun is wrong: “He work is busy today.” Which pronoun change makes the message correct?",
        explanation: "The pronoun must be “I” because Rafael, the father, is the one busy at work. “He” and “Him” are incorrect because they do not represent Rafael as the speaker, and “They” is incorrect because it is plural.",
        correctAnswer: "I am busy at work today.",
        choices: [
            "He work is busy today.",
            "Him work is busy today.",
            "I am busy at work today.",
            "They work is busy today.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Victor's godfather bought him a new phone. How should Victor express this correctly to his friends?",
        explanation: "“A” is the correct article for a singular, countable noun beginning with a consonant sound. The sentence clearly expresses the scenario.",
        correctAnswer: "I have a new phone.",
        choices: [
            "I have new phone.",
            "I have a new phone.",
            "I have an new phone.",
            "I have the new phone.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Zaldy received new shoes from his employer. Which sentence correctly uses an article to tell what Zaldy received?",
        explanation: "The article “a” is correctly used with “pair of shoes” because it treats the two shoes as a single item. This makes the sentence grammatically correct.",
        correctAnswer: "I received a new pair of shoes.",
        choices: [
            "I received new shoes.",
            "I received a new shoes.",
            "I received the new shoes.",
            "I received a new pair of shoes.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Natasha wrote in her Instagram note: “All of my cousin is busy.” How can her note be corrected to follow subject–verb agreement rules?",
        explanation: "The subject must be “cousins” because “all of my cousin” refers to more than one person, not just a single cousin. Therefore, the verb must also be plural: “are busy.” This makes the sentence grammatically correct.",
        correctAnswer: "All of my cousins are busy.",
        choices: [
            "All of my cousin is busy.",
            "All of my cousins is busy.",
            "All of my cousin are busy.",
            "All of my cousins are busy.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Mika wants to describe an event that happened in the past: “My grandmother ___ me.” Which verb form correctly agrees with the subject and indicates that the action already happened?",
        explanation: "The event happened in the past, which means the verb must be in the past tense. “Hugged” correctly agrees with the singular subject “my grandmother” and indicates that the action already occurred.",
        correctAnswer: "My grandmother hugged me.",
        choices: [
            "My grandmother hug me.",
            "My grandmother hugs me.",
            "My grandmother hugged me.",
            "My grandmother hugging me.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. What is the past tense of the word “play”?",
        explanation: "The past tense of “play” is played, which shows that the action already happened.",
        correctAnswer: "played",
        choices: [
            "play",
            "played",
            "playing",
            "plays",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. “I ___ the box.” Which verb correctly completes the sentence in past tense?",
        explanation: "The sentence requires the past-tense verb because the action is described as already completed. “Opened” is the correct past-tense form of “open,” while the other options are present tense or incorrect forms.",
        correctAnswer: "opened",
        choices: [
            "opener",
            "opened",
            "opening",
            "opens",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. “I join the contest.” Which sentence correctly changes the verb to show past tense?",
        explanation: "The event already happened, which means the verb must be in the past tense. “Joined” is the correct past tense form of “join.”",
        correctAnswer: "I joined the contest.",
        choices: [
            "I join the contest.",
            "I joins the contest.",
            "I joined the contest.",
            "I joining the contest.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. The teacher said: “We hold an online class tomorrow.” Which sentence below uses the correct future-tense verb and is grammatically correct?",
        explanation: "The sentence talks about an action that will happen in the future. “Will hold” is the correct future-tense form and matches the singular subject “teacher.” ",
        correctAnswer: "The teacher will hold an online class tomorrow.",
        choices: [
            "The teacher held an online class tomorrow.",
            "The teacher holds an online class tomorrow.",
            "The teacher holding an online class tomorrow.",
            "The teacher will hold an online class tomorrow.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. He ___ to leave. Choose the correct verb form to complete the sentence.",
        explanation: "The subject of the sentence is \"he,\" which is a singular, third-person pronoun. When using the verb to have in the simple present tense with a singular, third-person subject (He, She, It, or a singular noun), the correct form is has.",
        correctAnswer: "has",
        choices: [
            "had",
            "has",
            "have",
            "He's have",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. “My father is going to his hometown.” Which sentence correctly uses the perfect tense?",
        explanation: "The present perfect tense “has gone” shows that the action of going to his hometown is already completed. Other choices are present tense, past continuous, or incomplete.",
        correctAnswer: "My father has gone to his hometown.",
        choices: [
            "My father going to his hometown.",
            "My father is going to his hometown.",
            "My father has gone to his hometown.",
            "My father was going to his hometown.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which sentence correctly uses the preposition to show movement toward the house?",
        explanation: "The correct preposition to show movement toward a place is “to.” “Go to our house quietly” clearly indicates direction, while “in” in letter A refers to being inside rather than moving toward a place.",
        correctAnswer: "Go to our house quietly.",
        choices: [
            "Go in our house quietly.",
            "Go to our house quietly.",
            "Went to our house quietly.",
            "Going to our house quietly.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which of the following is a complete sentence rather than a fragment?",
        explanation: "A complete sentence must have a subject and a predicate and express a full thought. Letter D meets all these requirements. Letters A, B, and C are fragments because they begin with subordinating words and do not form complete ideas.",
        correctAnswer: "I saw the old phone looking familiar on the table.",
        choices: [
            "After finishing the homework.",
            "While looking for the old phone.",
            "Because they are busy with their work.",
            "I saw the old phone looking familiar on the table.",
        ],
        choiceType: "alpha"
    },
]

const setD: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “My father give me a new phone yesterday.” Which sentence accurately reports what happened?",
        explanation: "“Gave” correctly expresses the past action that already happened.",
        correctAnswer: "My father gave me a new phone yesterday.",
        choices: [
            "My father give me a new phone yesterday.",
            "My father given me a new phone yesterday.",
            "My father gave me a new phone yesterday.",
            "My father giving me a new phone yesterday.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. “My friend start to panic during the challenge.” Which sentence correctly uses the present tense?",
        explanation: "The subject “my friend” is singular, which means the present-tense verb must be “starts.” Letter A is incorrect because it does not add the “s” for singular subjects. Letters B and D use incorrect verb forms for present tense.",
        correctAnswer: "My friend starts to panic during the challenge.",
        choices: [
            "My friend start to panic during the challenge.",
            "My friend starting to panic during the challenge.",
            "My friend starts to panic during the challenge.",
            "My friend started to panic during the challenge.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “When everyone has free time, we go to the park.” Select the sentence that correctly shows a future action.",
        explanation: "Future actions require “will” for both the time clause and the main verb. Letter D correctly shows a planned action in the future. Letters A, B, and C are present or past tense and do not indicate a future action.",
        correctAnswer: "When everyone will have free time, we will go to the park.",
        choices: [
            "When everyone has free time, we go to the park.",
            "When everyone had free time, we go to the park.",
            "When everyone has free time, we went to the park.",
            "When everyone will have free time, we will go to the park.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Lella is confused about how to say: “Me and my cousins is always together” to her boyfriend. Which sentence is natural and grammatically correct?",
        explanation: "The subject “My cousins and I” is plural, which means the verb must be “are.” Putting “I” last makes the sentence sound natural. Letters A and B are incorrect because they use the wrong verb form “is.” Letter C has the correct verb but the order “Me and my cousins” is less formal.",
        correctAnswer: "My cousins and I are always together.",
        choices: [
            "Me and my cousins is always together.",
            "My cousins and I is always together.",
            "Me and my cousins are always together.",
            "My cousins and I are always together.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. “Games was funny to watch yesterday.” Select the sentence that matches the plural subject properly.",
        explanation: "The plural subject “Games” requires the plural verb “were.”",
        correctAnswer: "Games were funny to watch yesterday.",
        choices: [
            "Games was funny to watch yesterday.",
            "Game were funny to watch yesterday.",
            "Games were funny to watch yesterday.",
            "Games are funny to watch yesterday.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Which sentence correctly uses a personal pronoun as the subject?",
        explanation: "Personal pronouns can be subject pronouns (I, you, he, she, it, we, they) or object pronouns (me, you, him, her, it, us, them). In this sentence, “They” is a personal pronoun used correctly as the subject. Letters A, B, and D incorrectly use object pronouns in the subject position.",
        correctAnswer: "They finished the project early.",
        choices: [
            "The book belongs to I.",
            "Give the pen to she.",
            "Him and her went to the store.",
            "They finished the project early.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. “If I'm not born this world, I wouldn't be happy.” Which sentence uses correct pronouns and is grammatically clear?",
        explanation: "The subject pronoun “I” is correct, and “were” is the proper verb for a hypothetical conditional sentence. Letters A and B are missing the correct verb form, and letters B and D incorrectly use “me” instead of the subject pronoun “I.”",
        correctAnswer: "If I were not born in this world, I wouldn't be happy.",
        choices: [
            "If I not born in this world, I wouldn't be happy.",
            "If me not born in this world, I wouldn't be happy.",
            "If I were not born in this world, I wouldn't be happy.",
            "If me were not born in this world, I wouldn't be happy.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. “Love ones are important in life.” Does the sentence use the correct word form?",
        explanation: "The correct expression is “loved ones” when referring to people we care about. Letters A, B, and C are incorrect: “love one” is singular, “love ones” is ungrammatical, and “loving ones” changes the meaning.",
        correctAnswer: "No, it must be loved ones are important in life.",
        choices: [
            "No, it must be love one are important in life.",
            "No, it must be love ones are important in life.",
            "No, it must be loving ones are important in life.",
            "No, it must be loved ones are important in life.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. \"Running of time makes me anxious.\" Which sentence expresses the intended meaning correctly?",
        explanation: "“Running out of time” correctly conveys the intended meaning.",
        correctAnswer: "Running out of time makes me anxious.",
        choices: [
            "Running of time makes me anxious.",
            "Running from time makes me anxious.",
            "Running on time makes me anxious.",
            "Running out of time makes me anxious.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Which of the following is a complete and grammatically correct sentence?",
        explanation: "This sentence is complete, clear, and grammatically correct. It refers to one specific memorable event, making it precise and easy to understand.",
        correctAnswer: "My memorable day is celebrating my 7th birthday.",
        choices: [
            "Celebrating my birthday.",
            "My 7th birthday.",
            "My memorable day is celebrating my 7th birthday.",
            "My memorable day is celebrating my birthday not only my birthday also Christmas.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Which sentence is correct and complete?",
        explanation: "This is a complete sentence with proper verb forms. ",
        correctAnswer: "My friend was riding the motorbike when he panicked because he was running out of time.",
        choices: [
            "My friend used motorbike, he is panic because running out of time.",
            "Using motorbike, he panic in the middle because time is running out.",
            "Used the motorbike and panic in the middle because he is running of time.",
            "My friend was riding the motorbike when he panicked because he was running out of time.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. What is a preposition?",
        explanation: "A preposition connects a noun or pronoun to another word in the sentence, often showing location, direction, time, or cause. Letters A, B, and C describe pronouns, nouns, and verbs, not prepositions.",
        correctAnswer: "A word that shows the relationship between a noun or pronoun and another word",
        choices: [
            "A word that replaces a noun in a sentence.",
            "A word that names a person, place, or thing.",
            "A word that describes an action or state of being.",
            "A word that shows the relationship between a noun or pronoun and another word",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence uses the correct article?",
        explanation: "“The” correctly specifies a particular motor.",
        correctAnswer: "The motor that we borrowed is new.",
        choices: [
            "A motor that we borrowed is new.",
            "We borrowed motor that is new.",
            "Motor we borrowed is new.",
            "The motor that we borrowed is new.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Which sentence uses the correct preposition?",
        explanation: "The preposition “on” is used with days (e.g., “on Monday,” “on busy days”). Letters A and B incorrectly use “in”, and letter D is grammatically incorrect because “a busy days” mixes singular and plural forms.",
        correctAnswer: "On busy days, we cannot relax.",
        choices: [
            "In a busy days, we cannot relax.",
            "In busy days, we cannot relax.",
            "On busy days, we cannot relax.",
            "On a busy days, we cannot relax.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Which sentence uses the correct preposition?",
        explanation: "The preposition “into” correctly shows movement toward and collision with the fence.",
        correctAnswer: "Crash into the fence while running.",
        choices: [
            "Crash at the fence while running.",
            "Crash into the fence while running.",
            "Crash on the fence while running.",
            "Crash to the fence while running.",
        ],
        choiceType: "alpha"
    },
]

const setE: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. Lara said that ___ will submit the research proposal later.",
        explanation: "The pronoun “she” correctly refers to Lara. “He” refers to a male, “I” is first person, and “they” is plural.",
        correctAnswer: "she",
        choices: [
            "he",
            "I",
            "she",
            "they",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Dan parked his motorcycle in front of ___ Joe Bean Café.",
        explanation: "The article “the” is used for a specific, known place. “A” and “an” are indefinite, and “these” is incorrect as it is a demonstrative pronoun.",
        correctAnswer: "the",
        choices: [
            "a ",
            "an",
            "the",
            "these",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. The students ___ their modules every Friday.",
        explanation: "Plural subject “students” takes plural verb.",
        correctAnswer: "submit",
        choices: [
            "submit",
            "submits",
            "submitted",
            "submitting",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Marco ___ his cousin at National University yesterday.",
        explanation: "The sentence refers to a past event (“yesterday”), which makes the past tense “met” correct.",
        correctAnswer: "met",
        choices: [
            "met",
            "meet",
            "meets",
            "meeting",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. The puppies were hiding ___ the table during the thunderstorm.",
        explanation: "Under fits best because puppies normally hide beneath a table during something scary like a thunderstorm. The other choices do not match the idea of hiding: beside means next to, which does not give protection; in means inside something, and a table is not an enclosed space; on means on top of the table, which does not suggest hiding.",
        correctAnswer: "under",
        choices: [
            "beside",
            "in",
            "on",
            "under",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. ___ of the applicants from Baliwag passed the entrance test.",
        explanation: "“Many” refers to a large number of countable nouns.",
        correctAnswer: "Many",
        choices: [
            "A number of",
            "Few",
            "Many",
            "Several",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. Maon borrowed an umbrella because it ___ earlier.",
        explanation: "The past continuous “was raining” correctly shows that the rain was happening at that time. A is present tense, B is simple past but does not emphasize the ongoing action, and C is incomplete.",
        correctAnswer: "was raining",
        choices: [
            "rains",
            "rained",
            "raining",
            "was raining",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The principal reminded the class to avoid ___ noisy during orientation.",
        explanation: "After “avoid,” we use the -ing form of the verb. “Being” correctly follows “avoid” to show the action of being noisy.",
        correctAnswer: "being",
        choices: [
            "be",
            "being",
            "been",
            "to being",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. We waited for the jeepney going to Pulilan ___ almost thirty minutes.",
        explanation: "The structure \"waited for... for almost thirty minutes\" is standard English when stating how long an action (waiting) lasted.",
        correctAnswer: "for",
        choices: [
            "at",
            "by",
            "for",
            "in",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. ___ eating at the food court after dismissal.",
        explanation: "The sentence requires a plural subject that makes sense in context. “The teachers” correctly fits as the people eating at the food court. Choices A, B, and D are incorrect because they are either singular or refer to things, not people. ",
        correctAnswer: "The teachers",
        choices: [
            "He",
            "The buses",
            "The teachers",
            "The janitors' tools",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Andrea and Tomas ___ to watch the City of Baliwag Athletic Meet 2025 at the Bulacan Agricultural State College (BASC) last week.",
        explanation: "The sentence refers to a past event (“last week”), which means the verb must be in the past tense. “Wanted” correctly matches the plural subject Andrea and Tomas. ",
        correctAnswer: "wanted",
        choices: [
            "want",
            "wants",
            "wanted",
            "wanting",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. The teacher advised us to check ___ instructions carefully before answering.",
        explanation: "The definite article the is the most neutral and appropriate choice when referring to a specific, known set of instructions (in this case, the ones for the test/assignment) without needing to physically point them out.",
        correctAnswer: "the",
        choices: [
            "the",
            "these",
            "this",
            "those",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. The announcement posted on the Tulong Pang-Edukasyon para sa Bulakenyo FB page said that ___ must submit their documents on time.",
        explanation: "The sentence refers to a specific group of people required to submit documents, making “every applicant” the most precise choice. Choices A, B, and D are more general or indefinite and do not clearly identify the intended group.",
        correctAnswer: "every applicant",
        choices: [
            "anyone",
            "everyone",
            "every applicant",
            "somebody",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. I saw Karla practicing her dance solo ___ the covered court.",
        explanation: "The preposition “inside” correctly indicates that Karla was within the covered court.",
        correctAnswer: "inside",
        choices: [
            "at",
            "by",
            "inside",
            "on",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. The team ___ planning to compete at MOA Arena this March.",
        explanation: "The word “team” is a singular collective noun and requires the singular verb “is.” ",
        correctAnswer: "is",
        choices: [
            "are",
            "be",
            "is",
            "were",
        ],
        choiceType: "alpha"
    },
]

const setF: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. “My brother didn’t ____ watching because he fell asleep.” Which word correctly completes the sentence?",
        explanation: "“Continue” is the base form needed after “didn’t” to form the negative past construction.",
        correctAnswer: "continue",
        choices: [
            "continue",
            "continued",
            "continuing",
            "continues",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Jimboy sent a message on the group chat: “I don't go jogging in Golden Gate yesterday.” Which sentence corrects the tense?",
        explanation: "“Didn't” requires the base form of the verb “go.” This correctly reports the past event.",
        correctAnswer: "I didn't go jogging in Golden Gate yesterday.",
        choices: [
            "I didn't go jogging in Golden Gate yesterday.",
            "I don't go jogging in Golden Gate yesterday.",
            "I didn't went jogging in Golden Gate yesterday.",
            "I did not going jogging in Golden Gate yesterday.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. “She ____ to school every morning.” Choose the verb that correctly agrees with the subject.",
        explanation: "The subject “She” is third-person singular, which means the verb requires an “-s” in present tense.",
        correctAnswer: "walks",
        choices: [
            "walk",
            "walks",
            "walking",
            "walked",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. Emmanuelle asked his best friend for help and said he ____ finish his homework last night.",
        explanation: "The sentence describes a past situation (“last night”), which means the past tense of “cannot” is needed. “Couldn’t” correctly shows that he was unable to finish his homework. Other choices are present tense or incomplete.",
        correctAnswer: "couldn't",
        choices: [
            "able to",
            "can",
            "couldn't",
            "cannot ",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. Mariel is planning: “I ____ attend the party if I finish my chores.” (expresses certainty)",
        explanation: "Mariel is planning something in the future, and the clause “if I finish my chores” also refers to a future condition, therefore the correct modal for future intention is “will.”",
        correctAnswer: "will",
        choices: [
            "could",
            "can",
            "will",
            "would",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. Alyannah shared what she did over the weekend. Which sentence uses pronouns correctly?",
        explanation: "Only option C uses pronoun “I” as the subject performing an action. All other options are either fragments or do not use pronouns.",
        correctAnswer: "I enjoyed the quiet afternoon.",
        choices: [
            "Went to the park yesterday.",
            "Playing video games all day.",
            "I enjoyed the quiet afternoon.",
            "The sun rises in the east.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. I enjoy painting because ____ relaxes me.” Choose the correct pronoun.",
        explanation: "The pronoun “it” correctly refers to the hobby (painting) and serves as the subject of the second clause. All other options refer to people and are incorrect.",
        correctAnswer: "it",
        choices: [
            "it",
            "he",
            "she",
            "they",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. Martin talked about relaxing at home. Which sentence uses the correct article for his planned activity?",
        explanation: "“Weekend” is singular and countable, so it needs an article, and only B uses it correctly. A and C are incomplete because they lack an article, while D becomes a different, more specific plan (a full Netflix binge) instead of the general idea of relaxing at home.",
        correctAnswer: "A weekend full of movies.",
        choices: [
            "Weekend full of movies.",
            "A weekend full of movies.",
            "Weekend at the movies is fun.",
            "Watching Netflix the whole weekend.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Which sentence is grammatically correct?",
        explanation: "After “didn't,” the base form of the verb “play” is required to maintain correct past tense construction.",
        correctAnswer: "I didn't play CODM yesterday.",
        choices: [
            "I didn't play CODM yesterday.",
            "I didn't plays CODM yesterday.",
            "I didn't played CODM yesterday.",
            "I didn't playing CODM yesterday.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. Choose the complete and correct sentence:",
        explanation: "This is a complete sentence with subject, predicate, and clear time/place, making it grammatically correct.",
        correctAnswer: "My friend went jogging around Golden Gate yesterday.",
        choices: [
            "My friend went jogging.",
            "Jogging in the morning.",
            "Morning jogging, my friend. ",
            "My friend went jogging around Golden Gate yesterday.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. Choose the complete sentence:",
        explanation: "This sentence is complete with a clear subject (“we”) and predicate (“enjoyed snacks”), and uses proper pronouns and grammar.",
        correctAnswer: "At the cafe, we enjoyed snacks.",
        choices: [
            "Her and me watch a movie.",
            "At the cafe, we enjoyed snacks.",
            "Me and her went to Baliwag City Plaza.",
            "Watching Netflix the whole afternoon.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Read the sentences carefully. Choose the sentence that is correct for a real future possibility.",
        explanation: "This is a first conditional sentence, talking about a real possibility in the future. This means: It is possible to get a bike (the condition is real), and if that happens, the ride will definitely be joined.",
        correctAnswer: "I will join the ride if I have a bike.",
        choices: [
            "I will join the ride if I had a bike.",
            "I will join the ride if I have a bike.",
            "I would join the ride if I had a bike.",
            "I would join the ride if I have a bike.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Which sentence uses articles correctly?",
        explanation: "This sentence correctly uses the indefinite article “a” and has proper sentence structure.",
        correctAnswer: "Bea borrowed a helmet for her biking practice.",
        choices: [
            "Bea borrowed helmet.",
            "Bea borrowed helmet for her biking practice.",
            "Bea borrowed a helmet for her biking practice.",
            "Bea borrowed the helmet for her biking practice.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Choose the sentence with the correct preposition:",
        explanation: "The preposition “to” is correctly used with “home” to indicate direction or movement toward a place. Other options use prepositions that do not make sense in this context.",
        correctAnswer: "Go to the home quickly.",
        choices: [
            "Go over home quickly.",
            "Go to the home quickly.",
            "Go around home quickly.",
            "Go under the home quickly.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Choose the sentence with the correct preposition:",
        explanation: "Under correctly shows position below something. The other choices are wrong: A should be “into the pool,” not “at”; C should be “through the park” or “in the park,” not “over”; D should be “on the table,” not “in the table.”",
        correctAnswer: "The cat is under the chair.",
        choices: [
            "He jumped at the pool.",
            "The cat is under the chair.",
            "They walked over the park.",
            "She put the book in the table.",
        ],
        choiceType: "alpha"
    },
]

const setG: QuizQuestion[] = [
    {
        type: QuestionType.Direction,
        direction: "Read each question carefully and choose the best answer from the given choices.",
        question: "",
        explanation: "",
        correctAnswer: ""
    },
    {
        type: QuestionType.MultipleChoice,
        question: "1. During the Pasko sa Kalye in Baliwag City, many performers said that ___ loved showing their colorful costumes.",
        explanation: "“They” correctly refers to the plural subject “performers,” making the sentence grammatically correct.",
        correctAnswer: "they",
        choices: [
            "he",
            "it",
            "she",
            "they",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "2. Miguel told his friends that ___ would join the photography contest.",
        explanation: "“He” correctly refers to Miguel, maintaining subject–verb agreement and proper pronoun usage.",
        correctAnswer: "he",
        choices: [
            "he",
            "it",
            "she",
            "they",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "3. I bought ___ iced coffee at Starbucks before going to the library.",
        explanation: "“An” is used before a word starting with a vowel sound (“iced”), making the article grammatically correct.",
        correctAnswer: "an",
        choices: [
            "a",
            "an",
            "the",
            "no article",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "4. At Mang Inasal, Ella ordered ___ chicken inasal for lunch.",
        explanation: "“A” is used because “chicken inasal” is a singular, countable noun not previously mentioned.",
        correctAnswer: "a",
        choices: [
            "a",
            "an",
            "no article",
            "the",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "5. During the art exhibit, Roberto sketched ___ masterpiece inspired by local culture.",
        explanation: "“The” specifies a particular masterpiece, which is correct in context.",
        correctAnswer: "the",
        choices: [
            "a",
            "an",
            "no article",
            "the",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "6. The kids at Pulilan Playground ___ excited to try the new swing sets.",
        explanation: "The plural subject “kids” requires the plural verb “are” to match in present tense.",
        correctAnswer: "are",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "7. The SSLG officers ___ organizing a Christmas bazaar for Niňos and Niňas last weekend.",
        explanation: "The sentence refers to a past event, so the singular/plural verb “was” correctly matches the past continuous context intended here.",
        correctAnswer: "was",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "8. The decorations along the road ___ sparkling under the morning sun yesterday.",
        explanation: "The plural subject “decorations” requires the plural past continuous verb “were sparkling” to agree with the subject and time reference.",
        correctAnswer: "were",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "9. Alice and Jewel ___ practicing for the badminton tournament at Baliwag Sports Complex right now.",
        explanation: "The plural subject “Alice and Jewel” requires the plural verb “are” in present tense for an action happening at the moment.",
        correctAnswer: "are",
        choices: [
            "are",
            "is",
            "was",
            "were",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "10. During the Sto. Niño fiesta, we placed the handmade banderitas ___ the balcony.",
        explanation: "The preposition “on” is used to show that the banderitas were placed on the surface of the balcony. A (“at”) indicates a general location, B (“in”) suggests inside something, and D (“over”) implies above without touching the surface.",
        correctAnswer: "on",
        choices: [
            "at ",
            "in ",
            "on",
            "over",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "11. The Baliwag Transit bus departed from Baliwag City terminal and headed ___ Pulilan to join the morning parade.",
        explanation: "The preposition “to” correctly indicates the direction or destination of the bus.",
        correctAnswer: "to",
        choices: [
            "at",
            "in",
            "on ",
            "to",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "12. Ella hid the ingredients for her special spaghetti ___ the kitchen cabinet.",
        explanation: "“In” correctly indicates the location of the ingredients and maintains proper prepositional usage.",
        correctAnswer: "in",
        choices: [
            "at",
            "in",
            "on",
            "over",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "13. Choose the sentence that is a complete thought:",
        explanation: "This sentence is complete with a clear subject (“Roberto”) and predicate (“enjoyed drawing and painting”), making it grammatically correct.",
        correctAnswer: "Roberto enjoyed drawing and painting at the local art fair.",
        choices: [
            "While eating samgyup at Miyaras.",
            "Walking along the streets of Baliwag.",
            "Roberto enjoyed drawing and painting at the local art fair.",
            "During the New Year countdown with fireworks.",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "14. Yesterday, I ___ my favorite Filipino movie at SM Cinema.",
        explanation: "“Watched” correctly expresses past tense for an action completed yesterday.",
        correctAnswer: "watched",
        choices: [
            "watch",
            "watches",
            "watched",
            "watching",
        ],
        choiceType: "alpha"
    },
    {
        type: QuestionType.MultipleChoice,
        question: "15. Next week, we ___ our science exhibit at Santo Niño High School.",
        explanation: "The sentence refers to a future event (“Next week”), so the future tense “will organize” is correct. A is singular present tense, B is past tense, and C is not a complete verb form.",
        correctAnswer: "will organize",
        choices: [
            "organizes",
            "organized",
            "organizing",
            "will organize",
        ],
        choiceType: "alpha"
    },
]

const metadata: SetMetadata = {
    timeLimit: 30,
    passingScore: 12
}

export const GRAMMAR_BEGINNER_SET: SetContainer[] = [
    {
        label: "Set A",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setA,
        }
    },
    {
        label: "Set B",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setB,
        }
    },
    {
        label: "Set C",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setC,
        }
    },
    {
        label: "Set D",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setD,
        }
    },
    {
        label: "Set E",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setE,
        }
    },
    {
        label: "Set F",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setF,
        }
    },
    {
        label: "Set G",
        metadata: metadata,
        set: {
            instruction: "Answer and complete the following items. You have 30 seconds to answer each one. Get 12 correct answers to complete the level successfully. ",
            questions: setG,
        }
    },
]
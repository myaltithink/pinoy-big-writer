import type {
  PracticeQuestion,
  Achievements,
  AchievementCardProps,
  CorrectWordQuestion,
  ScrambledWordQuestion,
  ChoicesQuestion,
  QuizChoice,
  Word3,
  Word,
  Word2,
} from "../types";

export const capLevel1: Word[] = [
  {
    text: "october",
    shouldCapitalize: true,
    correctWord: "October",
  },
  {
    text: "monday",
    shouldCapitalize: true,
    correctWord: "Monday",
  },
  {
    text: "wednesday",
    shouldCapitalize: true,
    correctWord: "Wednesday",
  },
  {
    text: "july",
    shouldCapitalize: true,
    correctWord: "July",
  },
  {
    text: "cavite",
    shouldCapitalize: true,
    correctWord: "Cavite",
  },
  {
    text: "pampanga",
    shouldCapitalize: true,
    correctWord: "Pampanga",
  },
  {
    text: "dswd",
    shouldCapitalize: true,
    correctWord: "DSWD",
  },
  {
    text: "science",
    shouldCapitalize: false,
    correctWord: "science",
  },
  {
    text: "titanic",
    shouldCapitalize: true,
    correctWord: "Titanic",
  },
  {
    text: "elsa",
    shouldCapitalize: true,
    correctWord: "Elsa",
  },
  {
    text: "mt. mayon",
    shouldCapitalize: true,
    correctWord: "Mt. Mayon",
  },
  {
    text: "mrs. santos",
    shouldCapitalize: true,
    correctWord: "Mrs. Santos",
  },
  {
    text: "bulacan state university",
    shouldCapitalize: true,
    correctWord: "Bulacan State University",
  },
  {
    text: "pride and prejudice",
    shouldCapitalize: true,
    correctWord: "Pride And Prejudice",
  },
  {
    text: "pacific ocean",
    shouldCapitalize: true,
    correctWord: "Pacific Ocean",
  },
  {
    text: "valentine's day",
    shouldCapitalize: true,
    correctWord: "Valentine's Day",
  },
  {
    text: "jose protacio rizal mercado y alonso realonda",
    shouldCapitalize: true,
    correctWord: "Jose Protacio Rizal Mercado Y Alonso Realonda",
  },
  {
    text: "barangay hall",
    shouldCapitalize: false,
    correctWord: "barangay hall",
  },
  {
    text: "bus station",
    shouldCapitalize: false,
    correctWord: "bus station",
  },
  {
    text: "face mask",
    shouldCapitalize: false,
    correctWord: "face mask",
  },
  {
    text: "balikbayan box",
    shouldCapitalize: true,
    correctWord: "Balikbayan Box",
  },
  {
    text: "vice ganda",
    shouldCapitalize: true,
    correctWord: "Vice Ganda",
  },
  {
    text: "west africa",
    shouldCapitalize: true,
    correctWord: "West Africa",
  },
  {
    text: "world war ii",
    shouldCapitalize: true,
    correctWord: "World War II",
  },
  {
    text: "doctor bautista",
    shouldCapitalize: true,
    correctWord: "Doctor Bautista",
  },
  {
    text: "great wall of china",
    shouldCapitalize: true,
    correctWord: "Great Wall Of China",
  },
  {
    text: "father john",
    shouldCapitalize: true,
    correctWord: "Father John",
  },
  {
    text: "highway 101",
    shouldCapitalize: true,
    correctWord: "Highway 101",
  },
  {
    text: "tiffany blue",
    shouldCapitalize: true,
    correctWord: "Tiffany Blue",
  },
  {
    text: "star wars",
    shouldCapitalize: true,
    correctWord: "Star Wars",
  },
  {
    text: "pia wurtzbach",
    shouldCapitalize: true,
    correctWord: "Pia Wurtzbach",
  },
  {
    text: "philippines",
    shouldCapitalize: true,
    correctWord: "Philippines",
  },
  {
    text: "love",
    shouldCapitalize: false,
    correctWord: "love",
  },
  {
    text: "harvard",
    shouldCapitalize: true,
    correctWord: "Harvard",
  },
  {
    text: "shoes",
    shouldCapitalize: false,
    correctWord: "shoes",
  },
  {
    text: "pampanga",
    shouldCapitalize: true,
    correctWord: "Pampanga",
  },
  {
    text: "january",
    shouldCapitalize: true,
    correctWord: "January",
  },
  {
    text: "cavite",
    shouldCapitalize: true,
    correctWord: "Cavite",
  },
  {
    text: "dog",
    shouldCapitalize: false,
    correctWord: "dog",
  },
  {
    text: "orange",
    shouldCapitalize: false,
    correctWord: "orange",
  },
  {
    text: "kkk",
    shouldCapitalize: true,
    correctWord: "KKK",
  },
  {
    text: "asia",
    shouldCapitalize: true,
    correctWord: "Asia",
  },
  {
    text: "sunday",
    shouldCapitalize: true,
    correctWord: "Sunday",
  },
  {
    text: "x-men",
    shouldCapitalize: true,
    correctWord: "X-Men",
  },
  {
    text: "grapes",
    shouldCapitalize: false,
    correctWord: "grapes",
  },
  {
    text: "olaf",
    shouldCapitalize: true,
    correctWord: "Olaf",
  },
  {
    text: "rose flower",
    shouldCapitalize: false,
    correctWord: "rose flower",
  },
  {
    text: "christmas",
    shouldCapitalize: true,
    correctWord: "Christmas",
  },
  {
    text: "porsche",
    shouldCapitalize: true,
    correctWord: "Porsche",
  },
  {
    text: "balenciaga",
    shouldCapitalize: true,
    correctWord: "Balenciaga",
  },
  {
    text: "tree",
    shouldCapitalize: false,
    correctWord: "tree",
  },
  {
    text: "orange",
    shouldCapitalize: false,
    correctWord: "orange",
  },
  {
    text: "book",
    shouldCapitalize: false,
    correctWord: "book",
  },
  {
    text: "cat",
    shouldCapitalize: false,
    correctWord: "cat",
  },
  {
    text: "jump",
    shouldCapitalize: false,
    correctWord: "jump",
  },
  {
    text: "calm",
    shouldCapitalize: false,
    correctWord: "calm",
  },
  {
    text: "earrings",
    shouldCapitalize: false,
    correctWord: "earrings",
  },
  {
    text: "pants",
    shouldCapitalize: false,
    correctWord: "pants",
  },
  {
    text: "skirt",
    shouldCapitalize: false,
    correctWord: "skirt",
  },
  {
    text: "shoes",
    shouldCapitalize: false,
    correctWord: "shoes",
  },
  {
    text: "sack",
    shouldCapitalize: false,
    correctWord: "sack",
  },
  {
    text: "blue",
    shouldCapitalize: false,
    correctWord: "blue",
  },
  {
    text: "red",
    shouldCapitalize: false,
    correctWord: "red",
  },
  {
    text: "ruler",
    shouldCapitalize: false,
    correctWord: "ruler",
  },
  {
    text: "banana",
    shouldCapitalize: false,
    correctWord: "banana",
  },
  {
    text: "grapes",
    shouldCapitalize: false,
    correctWord: "grapes",
  },
  {
    text: "pencil",
    shouldCapitalize: false,
    correctWord: "pencil",
  },
  {
    text: "peace",
    shouldCapitalize: false,
    correctWord: "peace",
  },
  {
    text: "hair",
    shouldCapitalize: false,
    correctWord: "hair",
  },
  {
    text: "wind",
    shouldCapitalize: false,
    correctWord: "wind",
  },
  {
    text: "bird",
    shouldCapitalize: false,
    correctWord: "bird",
  },
  {
    text: "shoes",
    shouldCapitalize: false,
    correctWord: "shoes",
  },
  {
    text: "coffee",
    shouldCapitalize: false,
    correctWord: "coffee",
  },
  {
    text: "notebook",
    shouldCapitalize: false,
    correctWord: "notebook",
  },
  {
    text: "calendar",
    shouldCapitalize: false,
    correctWord: "calendar",
  },
  {
    text: "desk",
    shouldCapitalize: false,
    correctWord: "desk",
  },
  {
    text: "student",
    shouldCapitalize: false,
    correctWord: "student",
  },
  {
    text: "teacher",
    shouldCapitalize: false,
    correctWord: "teacher",
  },
  {
    text: "laptop",
    shouldCapitalize: false,
    correctWord: "laptop",
  },
  {
    text: "mayor",
    shouldCapitalize: false,
    correctWord: "mayor",
  },
  {
    text: "mirror",
    shouldCapitalize: false,
    correctWord: "mirror",
  },
  {
    text: "walk",
    shouldCapitalize: false,
    correctWord: "walk",
  },
  {
    text: "public market",
    shouldCapitalize: false,
    correctWord: "public market",
  },
  {
    text: "tricycle driver",
    shouldCapitalize: false,
    correctWord: "tricycle driver",
  },
  {
    text: "rice farmer",
    shouldCapitalize: false,
    correctWord: "rice farmer",
  },
  {
    text: "fish vendor",
    shouldCapitalize: false,
    correctWord: "fish vendor",
  },
  {
    text: "street food",
    shouldCapitalize: false,
    correctWord: "street food",
  },
  {
    text: "mountain trail",
    shouldCapitalize: false,
    correctWord: "mountain trail",
  },
  {
    text: "face mask",
    shouldCapitalize: false,
    correctWord: "face mask",
  },
  {
    text: "bus station",
    shouldCapitalize: false,
    correctWord: "bus station",
  },
  {
    text: "water supply",
    shouldCapitalize: false,
    correctWord: "water supply",
  },
  {
    text: "tuition fee",
    shouldCapitalize: false,
    correctWord: "tuition fee",
  },
  {
    text: "eyeglasses",
    shouldCapitalize: false,
    correctWord: "eyeglasses",
  },
  {
    text: "school paper",
    shouldCapitalize: false,
    correctWord: "school paper",
  },
  {
    text: "umbrella",
    shouldCapitalize: false,
    correctWord: "umbrella",
  },
  {
    text: "sofa",
    shouldCapitalize: false,
    correctWord: "sofa",
  },
  {
    text: "church",
    shouldCapitalize: false,
    correctWord: "church",
  },
  {
    text: "duck",
    shouldCapitalize: false,
    correctWord: "duck",
  },
  {
    text: "mirror",
    shouldCapitalize: false,
    correctWord: "mirror",
  },
  {
    text: "tea cup",
    shouldCapitalize: false,
    correctWord: "tea cup",
  },
];

export const capLevel3: Word3[] = [
  {
    incorrectSentence: "i saw jose rizal in a book.",
    correctSentence: "I saw Jose Rizal in a book.",
  },
  {
    incorrectSentence: "she visited boracay last summer.",
    correctSentence: "She visited Boracay last summer.",
  },
  {
    incorrectSentence: "he likes jollibee meals.",
    correctSentence: "He likes Jollibee meals.",
  },
  {
    incorrectSentence: "we love sinulog festival.",
    correctSentence: "We love Sinulog festival.",
  },
  {
    incorrectSentence: "you should visit tagaytay.",
    correctSentence: "You should visit Tagaytay.",
  },
  {
    incorrectSentence: "we toured intramuros.",
    correctSentence: "We toured Intramuros.",
  },
  {
    incorrectSentence: "he drives a toyota vios.",
    correctSentence: "He drives a Toyota Vios.",
  },
  {
    incorrectSentence: "i enjoy chicken adobo a lot.",
    correctSentence: "I enjoy chicken adobo a lot.",
  },
  {
    incorrectSentence: "he works at abs-cbn.",
    correctSentence: "He works at ABS-CBN.",
  },
  {
    incorrectSentence: "she teaches at up diliman.",
    correctSentence: "She teaches at UP Diliman.",
  },
  {
    incorrectSentence: "i saw a movie at sm megamall.",
    correctSentence: "I saw a movie at SM Megamall.",
  },
  {
    incorrectSentence: "he saw sarah geronimo perform.",
    correctSentence: "He saw Sarah Geronimo perform.",
  },
  {
    incorrectSentence: "he reads the philippine star.",
    correctSentence: "He reads the Philippine Star.",
  },
  {
    incorrectSentence: "we visited banaue rice terraces.",
    correctSentence: "We visited Banaue Rice Terraces.",
  },
  {
    incorrectSentence: "they bought tickets to peta theater center.",
    correctSentence: "They bought tickets to PETA Theater Center.",
  },
  {
    incorrectSentence: "i have a meeting with dr. smith.",
    correctSentence: "I have a meeting with Dr. Smith.",
  },
  {
    incorrectSentence: "we ate lunch at mcdonald's.",
    correctSentence: "We ate lunch at McDonald's.",
  },
  {
    incorrectSentence: "they traveled to japan last year.",
    correctSentence: "They traveled to Japan last year.",
  },
  {
    incorrectSentence: "i watched a movie on netflix.",
    correctSentence: "I watched a movie on Netflix.",
  },
  {
    incorrectSentence: "he studies at oxford university.",
    correctSentence: "He studies at Oxford University.",
  },
  {
    incorrectSentence: "i spoke with mr. lee yesterday.",
    correctSentence: "I spoke with Mr. Lee yesterday.",
  },
  {
    incorrectSentence: "i have a cat named luna.",
    correctSentence: "I have a cat named Luna.",
  },
  {
    incorrectSentence: "james loves playing soccer.",
    correctSentence: "James loves playing soccer.",
  },
  {
    incorrectSentence: "she works for nasa.",
    correctSentence: "She works for NASA.",
  },
  {
    incorrectSentence: "we stayed in los angeles.",
    correctSentence: "We stayed in Los Angeles.",
  },
  {
    incorrectSentence: "he was born in march.",
    correctSentence: "He was born in March.",
  },
  {
    incorrectSentence: "i’m watching a show called stranger things.",
    correctSentence: "I’m watching a show called Stranger Things.",
  },
  {
    incorrectSentence: "we traveled by united airlines.",
    correctSentence: "We traveled by United Airlines.",
  },
  {
    incorrectSentence: "he got a job at facebook.",
    correctSentence: "He got a job at Facebook.",
  },
  {
    incorrectSentence: "my sister loves harry potter.",
    correctSentence: "My sister loves Harry Potter.",
  },
  {
    incorrectSentence: "i want to learn spanish.",
    correctSentence: "I want to learn Spanish.",
  },
  {
    incorrectSentence: "she volunteers for the red cross.",
    correctSentence: "She volunteers for the Red Cross.",
  },
  {
    incorrectSentence: "he reads time magazine.",
    correctSentence: "He reads Time Magazine.",
  },
  {
    incorrectSentence: "they bought coffee from starbucks.",
    correctSentence: "They bought coffee from Starbucks.",
  },
  {
    incorrectSentence: "he visited mount rushmore.",
    correctSentence: "He visited Mount Rushmore.",
  },
  {
    incorrectSentence:
      "yesterday, my cousins visited cebu and tried the lechon there.",
    correctSentence:
      "Yesterday, my cousins visited Cebu and tried the lechon there.",
  },
  {
    incorrectSentence: "later, we will visit baguio and try strawberry taho.",
    correctSentence: "Later, we will visit Baguio and try strawberry taho.",
  },
  {
    incorrectSentence:
      "recently, i watched a parade in marikina and saw beautiful shoes.",
    correctSentence:
      "Recently, I watched a parade in Marikina and saw beautiful shoes.",
  },
  {
    incorrectSentence: "i visited baguio last summer.",
    correctSentence: "I visited Baguio last summer.",
  },
  {
    incorrectSentence: "my cousin lives in cebu.",
    correctSentence: "My cousin lives in Cebu.",
  },
  {
    incorrectSentence: "the festival in marinduque was colorful.",
    correctSentence: "The festival in Marinduque was colorful.",
  },
  {
    incorrectSentence: "my uncle teaches in quezon city.",
    correctSentence: "My uncle teaches in Quezon City.",
  },
  {
    incorrectSentence: "she studies at ateneo de manila university.",
    correctSentence: "She studies at Ateneo de Manila University.",
  },
  {
    incorrectSentence: "the church in antipolo is beautiful.",
    correctSentence: "The church in Antipolo is beautiful.",
  },
  {
    incorrectSentence: "the market in divisoria is crowded.",
    correctSentence: "The market in Divisoria is crowded.",
  },
  {
    incorrectSentence: "they went to rizal park during independence day.",
    correctSentence: "They went to Rizal Park during Independence Day.",
  },
  {
    incorrectSentence:
      "we watched the concert at smart araneta coliseum last saturday.",
    correctSentence:
      "We watched the concert at Smart Araneta Coliseum last Saturday.",
  },
  {
    incorrectSentence: "san miguel corporation opened a new branch in cebu.",
    correctSentence: "San Miguel Corporation opened a new branch in Cebu.",
  },
  {
    incorrectSentence: "my class is going on a field trip this august.",
    correctSentence: "My class is going on a field trip this August.",
  },
  {
    incorrectSentence:
      "senator robredo visited bicol university for a youth forum.",
    correctSentence:
      "Senator Robredo visited Bicol University for a youth forum.",
  },
];

export const capLevel2: Word2[] = [
  {
    prompt: "michael jordan played basketball for the chicago bulls.",
    answer: "Michael Jordan played basketball for the Chicago Bulls.",
    correctIndexes: [0, 1, 6, 7],
  },
  {
    prompt: "new york city is known for its tall skyscrapers.",
    answer: "New York City is known for its tall skyscrapers.",
    correctIndexes: [0, 1, 2],
  },
  {
    prompt: "google is one of the most popular search engines.",
    answer: "Google is one of the most popular search engines.",
    correctIndexes: [0],
  },
  {
    prompt: "the amazon river is the second longest river in the world.",
    answer: "The Amazon River is the second longest river in the world.",
    correctIndexes: [0, 1, 2],
  },
  {
    prompt: "jennifer lopez performed at the super bowl.",
    answer: "Jennifer Lopez performed at the Super Bowl.",
    correctIndexes: [0, 1, 5, 6],
  },
  {
    prompt: "nasa launched another rocket.",
    answer: "NASA launched another rocket.",
    correctIndexes: [0],
  },
  {
    prompt: "eiffel tower is located in paris, france.",
    answer: "Eiffel Tower is located in Paris, France.",
    correctIndexes: [0, 1, 5, 6],
  },
  {
    prompt: "thanksgiving is celebrated in november.",
    answer: "Thanksgiving is celebrated in November.",
    correctIndexes: [0, 4],
  },
  {
    prompt: "mount everest is the tallest mountain on earth.",
    answer: "Mount Everest is the tallest mountain on Earth.",
    correctIndexes: [0, 1, 7],
  },
  {
    prompt: "harvard university is located in massachusetts.",
    answer: "Harvard University is located in Massachusetts.",
    correctIndexes: [0, 1, 5],
  },
  {
    prompt: "the teacher gave homework to the students.",
    answer: "The teacher gave homework to the students.",
    correctIndexes: [0],
  },
  {
    prompt: "i saw a bird flying over the roof.",
    answer: "I saw a bird flying over the roof.",
    correctIndexes: [0],
  },
  {
    prompt: "he bought a new laptop last weekend.",
    answer: "He bought a new laptop last weekend.",
    correctIndexes: [0],
  },
  {
    prompt: "the doctor examined the patient carefully.",
    answer: "The doctor examined the patient carefully.",
    correctIndexes: [0],
  },
  {
    prompt: "a dog barked loudly in the yard.",
    answer: "A dog barked loudly in the yard.",
    correctIndexes: [0],
  },
  {
    prompt: "she wore a red dress to the party.",
    answer: "She wore a red dress to the party.",
    correctIndexes: [0],
  },
  {
    prompt: "i met john and sarah at the morgan library.",
    answer: "I met John and Sarah at the Morgan Library.",
    correctIndexes: [0, 2, 4, 7, 8],
  },
  {
    prompt: "we watched the lion king at the theater.",
    answer: "We watched the Lion King at the theater.",
    correctIndexes: [0, 3, 4],
  },
  {
    prompt: "shaquille o’neal played for the lakers.",
    answer: "Shaquille O’Neal played for the Lakers.",
    correctIndexes: [0, 1, 5],
  },
  {
    prompt: "the empire state building is tall.",
    answer: "The Empire State Building is tall.",
    correctIndexes: [0, 1, 2],
  },
  {
    prompt: "i listened to k-pop from bts.",
    answer: "I listened to K-pop from BTS.",
    correctIndexes: [0, 3, 5],
  },
  {
    prompt: "the little boy sings beautifully.",
    answer: "The little boy sings beautifully.",
    correctIndexes: [0],
  },
  {
    prompt: "malala yousafzai won a nobel prize.",
    answer: "Malala Yousafzai won a Nobel Prize.",
    correctIndexes: [0, 1, 4, 5],
  },
  {
    prompt: "new year begins in january.",
    answer: "New Year begins in January.",
    correctIndexes: [0, 1, 4],
  },
  {
    prompt: "barack obama was the president.",
    answer: "Barack Obama was the president.",
    correctIndexes: [0, 1],
  },
  {
    prompt: "we saw mount everest in a documentary.",
    answer: "We saw Mount Everest in a documentary.",
    correctIndexes: [0, 2, 3],
  },
  {
    prompt: "martin luther king gave a powerful speech.",
    answer: "Martin Luther King gave a powerful speech.",
    correctIndexes: [0, 1, 2],
  },
  {
    prompt: "j.k. rowling wrote harry potter.",
    answer: "J.K. Rowling wrote Harry Potter.",
    correctIndexes: [0, 1, 3, 4],
  },
  {
    prompt: "pikachu is from pokémon.",
    answer: "Pikachu is from Pokémon.",
    correctIndexes: [0, 3],
  },
  {
    prompt: "steve jobs founded apple.",
    answer: "Steve Jobs founded Apple.",
    correctIndexes: [0, 1, 3],
  },
  {
    prompt: "walt disney created mickey mouse.",
    answer: "Walt Disney created Mickey Mouse.",
    correctIndexes: [0, 1, 3, 4],
  },
  {
    prompt: "i watched iron man at the movie theater.",
    answer: "I watched Iron Man at the movie theater.",
    correctIndexes: [0, 2, 3],
  },
  {
    prompt: "siri and alexa are voice assistants.",
    answer: "Siri and Alexa are voice assistants.",
    correctIndexes: [0, 2],
  },
  {
    prompt: "mr. tanaka teaches japanese on tuesdays.",
    answer: "Mr. Tanaka teaches Japanese on Tuesdays.",
    correctIndexes: [0, 1, 3, 5],
  },
  {
    prompt: "we ate at jollibee near greenbelt.",
    answer: "We ate at Jollibee near Greenbelt.",
    correctIndexes: [0, 3, 5],
  },
  {
    prompt: "emma and oliver won the math contest.",
    answer: "Emma and Oliver won the Math contest.",
    correctIndexes: [0, 2, 5],
  },
  {
    prompt:
      "michael jordan, scottie pippen, and dennis rodman played for the chicago bulls.",
    answer:
      "Michael Jordan, Scottie Pippen, and Dennis Rodman played for the Chicago Bulls.",
    correctIndexes: [0, 1, 2, 3, 5, 6, 10, 11],
  },
  {
    prompt:
      "mr. brown, mrs. smith, and dr. adams attended the abc board meeting.",
    answer:
      "Mr. Brown, Mrs. Smith, and Dr. Adams attended the ABC board meeting.",
    correctIndexes: [0, 1, 2, 3, 5, 6, 9],
  },
  {
    prompt:
      "harry potter, ron weasley, and hermione granger studied at hogwarts school.",
    answer:
      "Harry Potter, Ron Weasley, and Hermione Granger studied at Hogwarts School.",
    correctIndexes: [0, 1, 2, 3, 5, 6, 9, 10],
  },
  {
    prompt:
      "batman, superman, and wonder woman are part of the justice league.",
    answer:
      "Batman, Superman, and Wonder Woman are part of the Justice League.",
    correctIndexes: [0, 1, 3, 4, 9, 10],
  },
  {
    prompt: "we visited big ben, london bridge, and the london tower.",
    answer: "We visited Big Ben, London Bridge, and the London Tower.",
    correctIndexes: [0, 2, 3, 4, 5, 8, 9],
  },
  {
    prompt: "adele, ed sheeran, and bruno mars won grammy awards.",
    answer: "Adele, Ed Sheeran, and Bruno Mars won Grammy Awards.",
    correctIndexes: [0, 1, 2, 4, 5, 7, 8],
  },
  {
    prompt: "the eiffel tower, notre dame, and louvre museum are in paris.",
    answer: "The Eiffel Tower, Notre Dame, and Louvre Museum are in Paris.",
    correctIndexes: [0, 1, 2, 3, 4, 6, 7, 10],
  },
  {
    prompt: "jeff bezos, elon musk, and mark zuckerberg are tech billionaires.",
    answer: "Jeff Bezos, Elon Musk, and Mark Zuckerberg are tech billionaires.",
    correctIndexes: [0, 1, 2, 3, 5, 6],
  },
  {
    prompt: "i bought souvenirs in bangkok, chiang mai, and phuket.",
    answer: "I bought souvenirs in Bangkok, Chiang Mai, and Phuket.",
    correctIndexes: [0, 4, 5, 6, 8],
  },
  {
    prompt:
      "marvel studios released avengers: endgame, black panther, and doctor strange.",
    answer:
      "Marvel Studios released Avengers: Endgame, Black Panther, and Doctor Strange.",
    correctIndexes: [0, 1, 3, 4, 5, 6, 8, 9],
  },
  {
    prompt:
      "dr. martin luther king jr. gave the “i have a dream“ speech in washington, d.c.",
    answer:
      "Dr. Martin Luther King Jr. gave the “I have a dream“ speech in Washington, D.C.",
    correctIndexes: [0, 1, 2, 3, 4, 7, 13, 14],
  },
  {
    prompt:
      "the empire state building lights up during independence day, christmas, and new year's eve.",
    answer:
      "The Empire State Building lights up during Independence Day, Christmas, and New Year's Eve.",
    correctIndexes: [0, 1, 2, 3, 7, 8, 9, 11, 12, 13],
  },
  {
    prompt: "nba finals, super bowl, and world series are major sports events.",
    answer: "NBA Finals, Super Bowl, and World Series are major sports events.",
    correctIndexes: [0, 1, 2, 3, 5, 6],
  },
  {
    prompt:
      "queen elizabeth ii, prince charles, and princess diana are part of the royal family.",
    answer:
      "Queen Elizabeth II, Prince Charles, and Princess Diana are part of the royal family.",
    correctIndexes: [0, 1, 2, 3, 4, 6, 7],
  },
];

export const practiceQuestions: PracticeQuestion[] = [
  {
    question: "Which sentence is correctly written?",
    choices: [
      "how are you doing today",
      "How are you doing today?",
      "How are you doing today.",
      "how are you doing today!",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it starts with a capital letter and ends with a question mark.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I love chocolate cake. Do you?",
      "I love chocolate cake do you.",
      "i love chocolate cake. do you?",
      "I love chocolate cake do you",
    ],
    answerIndex: 0,
    reason:
      "A is correct because both sentences start with capital letters and use proper punctuation.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "It was a beautifull day yesterday",
      "It was a beautiful day yesterday.",
      "it was a beautiful day yesterday.",
      "It was a beautiful day Yesterday",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses correct spelling ("beautiful"), capitalization, and ends with a period.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She’s going to the park to play with her freinds.",
      "She is going to the park to play with her Friends",
      "She’s going to the park to play with her friends.",
      "she’s going to the park to play with her friends",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it uses correct contraction, spelling ("friends"), and capitalization.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "wow that was amazing",
      "Wow. That was amazing.",
      "wow, that was amazing.",
      "Wow! That was amazing.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses proper capitalization and ends with an exclamation mark for emotion.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We should visit the library and borrow some books.",
      "we should visit the library and borrow some books",
      "We should visit the libray and borrow some books.",
      "We should visit the library and borrow some Books",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses correct spelling ("library"), capitalization, and ends with a period.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Lets go for a walk tomorrow morning",
      "Let’s go for a walk tomorrow morning.",
      "Let’s go for a walk tomorrow Morning",
      "let’s go for a walk tomorrow morning",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses the correct contraction ("Let’s"), proper capitalization, and punctuation.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The concert is next Saturday do you want to go",
      "the concert is next Saturday. Do you want to go",
      "The concert is next Saturday. Do you want to go?",
      "The concert is next Saturday do you want to go?",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it splits the two ideas into proper sentences with correct punctuation and capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My brothers name is michael.",
      "My brother’s name is Michael.",
      "my brother’s name is Michael.",
      "My brother’s name is michael",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it shows possession with "brother’s" and capitalizes the name "Michael."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please hand me the pen, its on the table.",
      "Please hand me the pen. It’s on the table.",
      "Please hand me the pen; it’s on the table.",
      "Please hand me the pen it’s on the table.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses a semicolon to join two related complete sentences and correct contractions.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "i want to buy a new backpack from the store.",
      "I want to buy a new backpack from the store.",
      "I want to buy a new backpack from the Store.",
      "I want to buy new backpack from the store",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses proper capitalization and spelling throughout the sentence.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "the professor gave an interesting lecture on physics.",
      "The Professor gave an interesting lecture on Physics.",
      "The professor gave an interesting lecture on physics.",
      "The professor gave an interesting Lecture on physics",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes only the first word and treats common nouns like "professor" and "physics" correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She said i will come after lunch.",
      "She said I will come after lunch.",
      "She said, “I will come after lunch.”",
      "She said “I will come after lunch”",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses proper capitalization, punctuation, and quotation marks for direct speech.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We went to the beach, it was hot and sunny.",
      "We went to the beach. It was hot and sunny.",
      "We went to the beach; it was hot and sunny.",
      "We went to the beach it was hot and sunny",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it joins two related independent clauses correctly with a semicolon.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "He loves reading books about history and scifi.",
      "He loves reading books about history and sci-fi.",
      "he loves reading books about history and sci fi.",
      "He loves reading books about History and Sci-fi",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it uses the correct spelling of "sci-fi" with a hyphen and proper capitalization.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I visited the musuem last weekend.",
      "i visited the museum last weekend.",
      "I visited the museum last weekend.",
      "I visited the Museum last weekend",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes the first word and spells "museum" correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She gave me a pretty bracelet as a gift.",
      "She gave me a pretty Bracelet as a gift.",
      "she gave me a pretty bracelet as a gift.",
      "She gave me a pretty bracelet as a Gift",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses proper capitalization and avoids capitalizing the common noun "bracelet."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please dont forget your homework tomorrow.",
      "Please Don't forget your homework tomorrow.",
      "please don’t forget your homework tomorrow.",
      "Please don’t forget your homework tomorrow.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses the correct contraction “don’t” and capitalizes the first word.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The movie was fantastic, we should watch it again.",
      "The movie was fantastic. We should watch it again.",
      "The movie was fantastic! We should watch it again.",
      "the movie was fantastic! We should watch it again.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses an exclamation mark to show strong feeling and proper capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I need to buy some shoes and a coat.",
      "i need to buy some shoes and a coat.",
      "I need to buy some shoes, and a coat.",
      "I need to buy some shoes and a Coat.",
    ],
    answerIndex: 0,
    reason:
      'A is correct because it uses correct capitalization and avoids unnecessary comma before "and."',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Have you seen my book its missing.",
      "Have you seen my book? It’s missing.",
      "have you seen my book? It’s missing.",
      "Have you seen my book, it’s missing?",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses a question mark and a contraction, with proper capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My favrite color is blue.",
      "My favorite color is blue.",
      "my favorite color is blue.",
      "My favorite Color is blue.",
    ],
    answerIndex: 1,
    reason:
      'B is correct because it spells "favorite" correctly and capitalizes the first word.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "My parents are going to paris for the holidays.",
      "my parents are going to Paris for the holidays.",
      "My parents are going to Paris for the holidays.",
      "My parents are going to paris for the Holidays.",
    ],
    answerIndex: 2,
    reason:
      'C is correct because it capitalizes "Paris" as a proper noun and begins the sentence correctly.',
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She loves to read novels about adventures.",
      "she loves to read novels about adventures.",
      "She loves to read novels about Adventures.",
      "She loves to read Novels about adventures.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and does not capitalize common nouns unnecessarily.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "You should take an umbrella, it’s raining outside.",
      "You should take an umbrella it’s raining outside.",
      "You should take an umbrella. It’s raining outside.",
      "You should take an umbrella; it’s raining outside.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it uses a semicolon to connect two related independent clauses correctly.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "I got a letter from my friend last week.",
      "i got a letter from my friend last week.",
      "I got a Letter from my friend last week.",
      "I got a letter from my friend Last week.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and does not capitalize common nouns unnecessarily.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "She plays the violin beautifully.",
      "She plays the Violin beautifully.",
      "she plays the violin beautifully.",
      "She play the violin beautifully.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization and punctuation throughout.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The class starts at 9 am tomorrow.",
      "the class starts at 9 AM tomorrow.",
      "The class starts at 9 a.m. tomorrow.",
      "The Class starts at 9 a.m. tomorrow.",
    ],
    answerIndex: 2,
    reason:
      "C is correct because it uses proper formatting of “a.m.” and uses correct capitalization.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We will have a big Party for his birthday.",
      "We will have a big party for his birthday.",
      "We will have a Big party for his Birthday.",
      "we will have a big party for his birthday.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses lowercase for the common noun “party” and correct capitalization at the start.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "There is a new restaurant near my house.",
      "There is a new resturant near my house.",
      "there is a new restaurant near my house.",
      "There is a new restaurant Near my house.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it spells “restaurant” correctly and starts with a capital letter.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "They went on a vacation to new york city.",
      "They went on a vacation to New York City.",
      "they went on a vacation to New York City.",
      "They went on a Vacation to New York City.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it capitalizes the proper noun “New York City” and starts the sentence correctly.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The train leaves at 5 oclock.",
      "The train leaves at 5 o’clock.",
      "the train leaves at 5 o’clock.",
      "The Train leaves at 5 o’clock.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses the correct punctuation mark (apostrophe) in “o’clock” and capitalizes the first word.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "He asked if we were ready for the race.",
      "he asked if we were ready for the race.",
      "He asked if we were ready for the Race.",
      "He asked if we were Ready for the race.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper capitalization throughout and avoids unnecessary capitalization of “race.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "His Favorite subject is Math 101.",
      "His favorite subject is Math 101.",
      "His favorite Subject is math 101.",
      "His Favorite subject is math 101.",
    ],
    answerIndex: 1,
    reason:
      "B is correct because it uses correct capitalization and spells all words properly, including “Math 101.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "We should study for the Test.",
      "We should Study for the test.",
      "we should study for the test.",
      "We should study for the test.",
    ],
    answerIndex: 3,
    reason:
      "D is correct because it starts with a capital letter and avoids capitalizing the common noun “test.”",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "The house was decorated with beautiful flowers.",
      "The house was decorated with beautiful Flowrs.",
      "The House was decorated with beautiful flowers.",
      "the house was decorated with beautiful flowers.",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses proper spelling, capitalization, and punctuation.",
  },
  {
    question: "Which sentence is correctly written?",
    choices: [
      "Please take care of the dog while I’m away.",
      "Please take care of the dog while I’m away,",
      "Please take care of the dog while I'm away:",
      "Please take care of the dog while I'm away;",
    ],
    answerIndex: 0,
    reason:
      "A is correct because it uses correct punctuation with a period and proper capitalization.",
  },
];

// Mapping of achievement keys to display-friendly names and images
 const allAchievementsDisplayData: Record<
  Achievements,
  Omit<AchievementCardProps, "date" | "achieved">
> = {
  completedCapitalizationLevel1: {
    title: "Capitalization Beginner",
    description: "Completed the first Capitalization exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedCapitalizationLevel2: {
    title: "Capitalization Intermediate",
    description: "Completed the second Capitalization exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedCapitalizationLevel3: {
    title: "Capitalization Advance",
    description: "Completed the third Capitalization exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedPunctuationLevel1: {
    title: "Punctuation Beginner",
    description: "Completed the first Punctuation exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedPunctuationLevel2: {
    title: "Punctuation Intermediate",
    description: "Completed the second Punctuation exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedPunctuationLevel3: {
    title: "Punctuation Advance",
    description: "Completed the third Punctuation exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedSpellingLevel1: {
    title: "Spelling Beginner",
    description: "Completed the first Spelling exercise.",
    imageSrc: "/achievements/bronze-medal.png", // Replace with actual path
  },
  completedSpellingLevel2: {
    title: "Spelling Intermediate",
    description: "Completed the second Spelling exercise.",
    imageSrc: "/achievements/silver-medal.png", // Replace with actual path
  },
  completedSpellingLevel3: {
    title: "Spelling Advance",
    description: "Completed the third Spelling exercise.",
    imageSrc: "/achievements/gold-medal.png", // Replace with actual path
  },
  completedAllCapitalization: {
    title: "Capitalization Champion",
    description: "Completed all Capitalization exercises.",
    imageSrc: "/achievements/capital-trophy.png", // Replace with actual path
  },
  completedAllPunctuation: {
    title: "Punctuation Champion",
    description: "Completed all Punctuation exercises.",
    imageSrc: "/achievements/punctuation-trophy.png", // Replace with actual path
  },
  completedAllSpelling: {
    title: "Spelling Champion",
    description: "Completed all Spelling exercises.",
    imageSrc: "/achievements/spell-trophy.png", // Replace with actual path
  },
  completedAllLevels: {
    title: "Pinoy Big Writer",
    description:
      "Completed all levels in Capitalization, Punctuation, and Spelling.",
    imageSrc: "/achievements/pbw-trophy.png", // Replace with actual path
  },
};

export const spellLevel1 = [
  {
    incorrect: "Sandwitch",
    correct: "Sandwich",
    incorrect_alt: "Sandwetch",
    definition:
      "It’s something you eat, often filled with meat, cheese, or veggies between slices of bread.",
  },
  {
    incorrect: "Sakses",
    correct: "Success",
    incorrect_alt: "Succsess",
    definition:
      "It’s what you achieve when you reach your goal or win a challenge!",
  },
  {
    incorrect: "Thankfull",
    correct: "Thankful",
    incorrect_alt: "Tankful",
    definition:
      "It’s how you feel when you appreciate something or someone who helped you.",
  },
  {
    incorrect: "Freind",
    correct: "Friend",
    incorrect_alt: "Frend",
    definition: "Someone you trust, talk to, and share good times with.",
  },
  {
    incorrect: "Meet",
    correct: "Meat",
    incorrect_alt: "Meatt",
    definition:
      "It’s food that comes from animals, like beef, chicken, or pork.",
  },
  {
    incorrect: "Letuce",
    correct: "Lettuce",
    incorrect_alt: "Lattuce",
    definition: "A leafy green vegetable often used in salads and sandwiches.",
  },
  {
    incorrect: "Reciept",
    correct: "Receipt",
    incorrect_alt: "Receit",
    definition:
      "A piece of paper you get after making a purchase, showing what you bought and how much you paid.",
  },
  {
    incorrect: "Coleague",
    correct: "Colleague",
    incorrect_alt: "Collleague",
    definition: "A person you work with, often in the same company or team.",
  },
  {
    incorrect: "Beautifull",
    correct: "Beautiful",
    incorrect_alt: "Beatiful",
    definition:
      "A word used to describe something or someone that is visually attractive or pleasing.",
  },
  {
    incorrect: "Miscelaneous",
    correct: "Miscellaneous",
    incorrect_alt: "Miscillaneous",
    definition:
      "A word used to describe a collection of various items, often mixed and not related.",
  },
  {
    incorrect: "Completly",
    correct: "Completely",
    incorrect_alt: "Compleatly",
    definition: "Entirely or fully, with nothing left out.",
  },
  {
    incorrect: "Consious",
    correct: "Conscious",
    incorrect_alt: "Concsious",
    definition: "Being aware of one's surroundings, thoughts, and feelings.",
  },
  {
    incorrect: "Dissapoint",
    correct: "Disappoint",
    incorrect_alt: "Dissappoint",
    definition: "To fail to meet the hopes or expectations of someone.",
  },
  {
    incorrect: "Efficent",
    correct: "Efficient",
    incorrect_alt: "Effecient",
    definition: "Being effective without wasting time or effort.",
  },
  {
    incorrect: "Equiped",
    correct: "Equipped",
    incorrect_alt: "Equipt",
    definition: "To be supplied with the necessary items.",
  },
  {
    incorrect: "Foriegn",
    correct: "Foreign",
    incorrect_alt: "Forign",
    definition: "Something from a different country or unfamiliar place.",
  },
  {
    incorrect: "Gratefull",
    correct: "Grateful",
    incorrect_alt: "Greatful",
    definition: "Feeling thankful or appreciative.",
  },
  {
    incorrect: "Haras",
    correct: "Harass",
    incorrect_alt: "Harras",
    definition: "To repeatedly annoy or bother someone.",
  },
  {
    incorrect: "Ilegible",
    correct: "Illegible",
    incorrect_alt: "Illegeble",
    definition: "Impossible to read due to poor handwriting or print.",
  },
  {
    incorrect: "Liason",
    correct: "Liaison",
    incorrect_alt: "Liasson",
    definition: "A person who helps organizations or groups work together.",
  },
  {
    incorrect: "Noticable",
    correct: "Noticeable",
    incorrect_alt: "Noticible",
    definition: "Easy to see or detect.",
  },
  {
    incorrect: "Oppurtunity",
    correct: "Opportunity",
    incorrect_alt: "Oppertunity",
    definition: "A chance for progress or achievement.",
  },
  {
    incorrect: "Permenant",
    correct: "Permanent",
    incorrect_alt: "Permanant",
    definition: "Lasting or intended to last indefinitely without change.",
  },
  {
    incorrect: "Playwrite",
    correct: "Playwright",
    incorrect_alt: "Playrite",
    definition: "A person who writes plays.",
  },
  {
    incorrect: "Proffesional",
    correct: "Professional",
    incorrect_alt: "Profesional",
    definition: "Someone who is skilled or qualified in their field of work.",
  },
  {
    incorrect: "Questionaire",
    correct: "Questionnaire",
    incorrect_alt: "Questionare",
    definition: "A set of questions for gathering information.",
  },
  {
    incorrect: "Recieve",
    correct: "Receive",
    incorrect_alt: "Riceive",
    definition: "To be given or presented with something.",
  },
  {
    incorrect: "Tehcnology",
    correct: "Technology",
    incorrect_alt: "Technolgy",
    definition:
      "The application of scientific knowledge for practical purposes.",
  },
  {
    incorrect: "Thier",
    correct: "Their",
    incorrect_alt: "There",
    definition: "Belonging to them.",
  },
  {
    incorrect: "Disipline",
    correct: "Discipline",
    incorrect_alt: "Discpline",
    definition:
      "The practice of training people to obey rules or a code of behavior.",
  },
  {
    incorrect: "Embarass",
    correct: "Embarrass",
    incorrect_alt: "Embaras",
    definition: "To cause someone to feel awkward or ashamed.",
  },
  {
    incorrect: "Experiance",
    correct: "Experience",
    incorrect_alt: "Experence",
    definition: "Practical contact with and observation of facts or events.",
  },
  {
    incorrect: "Fullfill",
    correct: "Fulfill",
    incorrect_alt: "Fulfil",
    definition: "To bring to completion or reality; achieve or realize.",
  },
  {
    incorrect: "Garantee",
    correct: "Guarantee",
    incorrect_alt: "Guarentee",
    definition: "A formal promise that certain conditions will be fulfilled.",
  },
  {
    incorrect: "Heirarchy",
    correct: "Hierarchy",
    incorrect_alt: "Hierarcy",
    definition:
      "A system in which people or things are ranked according to status or authority.",
  },
  {
    incorrect: "Humourous",
    correct: "Humorous",
    incorrect_alt: "Humoros",
    definition: "Causing laughter and amusement.",
  },
  {
    incorrect: "Irresistable",
    correct: "Irresistible",
    incorrect_alt: "Irresitable",
    definition: "Too attractive and tempting to be resisted.",
  },
  {
    incorrect: "Lisence",
    correct: "License",
    incorrect_alt: "Licence",
    definition: "A permit from an authority to own or use something.",
  },
  {
    incorrect: "Maintainance",
    correct: "Maintenance",
    incorrect_alt: "Mantainance",
    definition: "The process of keeping something in good condition.",
  },
  {
    incorrect: "Manuever",
    correct: "Maneuver",
    incorrect_alt: "Manuver",
    definition: "A movement or series of moves requiring skill and care.",
  },
  {
    incorrect: "Medievil",
    correct: "Medieval",
    incorrect_alt: "Medeival",
    definition: "Relating to the Middle Ages.",
  },
  {
    incorrect: "Minature",
    correct: "Miniature",
    incorrect_alt: "Miniaturee",
    definition: "A smaller version of something.",
  },
  {
    incorrect: "Noticable",
    correct: "Noticeable",
    incorrect_alt: "Noticible",
    definition: "Easily seen or detected.",
  },
  {
    incorrect: "Occasionly",
    correct: "Occasionally",
    incorrect_alt: "Ocasionally",
    definition: "At infrequent or irregular intervals.",
  },
  {
    incorrect: "Persistant",
    correct: "Persistent",
    incorrect_alt: "Persistant",
    definition: "Continuing firmly or obstinately in a course of action.",
  },
  {
    incorrect: "Playwrite",
    correct: "Playwright",
    incorrect_alt: "Playrite",
    definition: "A person who writes plays.",
  },
  {
    incorrect: "Preffered",
    correct: "Preferred",
    incorrect_alt: "Prefered",
    definition: "Liked or chosen above all others.",
  },
  {
    incorrect: "Rythm",
    correct: "Rhythm",
    incorrect_alt: "Rhythim",
    definition: "A strong, regular, repeated pattern of movement or sound.",
  },
  {
    incorrect: "Sophmore",
    correct: "Sophomore",
    incorrect_alt: "Sofomore",
    definition: "A student in the second year of high school or college.",
  },
  {
    incorrect: "Aritmetic",
    correct: "Arithmetic",
    incorrect_alt: "Arithmatic",
    definition:
      "The branch of mathematics dealing with numbers and operations.",
  },
  {
    incorrect: "Artifical",
    correct: "Artificial",
    incorrect_alt: "Artifficial",
    definition:
      "Made or produced by human beings rather than occurring naturally.",
  },
  {
    incorrect: "Aspiraton",
    correct: "Aspiration",
    incorrect_alt: "Aspiratione",
    definition: "A hope or ambition of achieving something.",
  },
  {
    incorrect: "Asignement",
    correct: "Assignment",
    incorrect_alt: "Asignment",
    definition: "A task or piece of work assigned to someone.",
  },
  {
    incorrect: "Assistence",
    correct: "Assistance",
    incorrect_alt: "Asistance",
    definition: "Help or support.",
  },
  {
    incorrect: "Asociation",
    correct: "Association",
    incorrect_alt: "Assocciation",
    definition: "A group of people organized for a joint purpose.",
  },
  {
    incorrect: "Asumption",
    correct: "Assumption",
    incorrect_alt: "Assumpsion",
    definition:
      "A thing that is accepted as true without proof, often used as a starting point for reasoning or discussion.",
  },
  {
    incorrect: "Aritmetic",
    correct: "Arithmetic",
    incorrect_alt: "Arithmatic",
    definition:
      "The branch of mathematics dealing with numbers and operations.",
  },
  {
    incorrect: "Artifical",
    correct: "Artificial",
    incorrect_alt: "Artifficial",
    definition:
      "Made or produced by human beings rather than occurring naturally.",
  },
  {
    incorrect: "Aspiraton",
    correct: "Aspiration",
    incorrect_alt: "Aspiratione",
    definition: "A hope or ambition of achieving something.",
  },
  {
    incorrect: "Asignement",
    correct: "Assignment",
    incorrect_alt: "Asignment",
    definition: "A task or piece of work assigned to someone.",
  },
  {
    incorrect: "Assistence",
    correct: "Assistance",
    incorrect_alt: "Asistance",
    definition: "Help or support.",
  },
  {
    incorrect: "Asociation",
    correct: "Association",
    incorrect_alt: "Assocciation",
    definition: "A group of people organized for a joint purpose.",
  },
  {
    incorrect: " Asumption",
    correct: "Assumption",
    incorrect_alt: " Assumpsion",
    definition: "A thing that is accepted as true without proof.",
  },
  {
    incorrect: "Asma",
    correct: "Asthma",
    incorrect_alt: "Astmah",
    definition: "A respiratory condition marked by spasms in the bronchi.",
  },
  {
    incorrect: "Atmospere",
    correct: "Atmosphere",
    incorrect_alt: "Atmossphere",
    definition:
      "The envelope of gases surrounding the earth or another planet.",
  },
  {
    incorrect: "Attendence",
    correct: "Attendance",
    incorrect_alt: "Atendence",
    definition: "The act of being present at a place.",
  },
  {
    incorrect: "Atraction",
    correct: "Attraction",
    incorrect_alt: "Attracttion",
    definition:
      "The action or power of evoking interest or liking for someone or something.",
  },
  {
    incorrect: "Audence",
    correct: "Audience",
    incorrect_alt: "Audiance",
    definition: "A group of people gathered to watch or listen to something.",
  },
  {
    incorrect: "Authenic",
    correct: "Authentic",
    incorrect_alt: "Authenthic",
    definition: "Of undisputed origin; genuine.",
  },
  {
    incorrect: "Automattic",
    correct: "Automatic",
    incorrect_alt: "Autometic",
    definition: "Working by itself with little or no direct human control.",
  },
  {
    incorrect: "Availible",
    correct: "Available",
    incorrect_alt: "Avaiable",
    definition: "Ready for use or accessible.",
  },
  {
    incorrect: "Aviaton",
    correct: "Aviation",
    incorrect_alt: "Avation",
    definition: "The operation of aircraft.",
  },
  {
    incorrect: "Awaraness",
    correct: "Awareness",
    incorrect_alt: "Awereness",
    definition: "Knowledge or perception of a situation or fact.",
  },
  {
    incorrect: "Backround",
    correct: "Background",
    incorrect_alt: "Backgroun",
    definition: "The area or scenery behind the main object of contemplation.",
  },
  {
    incorrect: "Bankrupcy",
    correct: "Bankruptcy",
    incorrect_alt: "Bankrputcy",
    definition:
      "The legal status of a person or entity that cannot repay debts.",
  },
  {
    incorrect: "Becuse",
    correct: "Because",
    incorrect_alt: "Becaus",
    definition: "For the reason that; since.",
  },
  {
    incorrect: "Begining",
    correct: "Beginning",
    incorrect_alt: "Begginning",
    definition: "The point in time at which something starts.",
  },
  {
    incorrect: "Behavour",
    correct: "Behavior",
    incorrect_alt: "Behavier",
    definition: "The way in which one acts or conducts oneself.",
  },
  {
    incorrect: "Beleive",
    correct: "Believe",
    incorrect_alt: "Belive",
    definition: "To accept something as true.",
  },
];

export const spellLevel2: CorrectWordQuestion[] = [
  {
    question: "I’m not sure if ______ going to the concert tonight.",
    options: ["There", "Their", "They're"],
    correctAnswer: "They're",
  },
  {
    question:
      "Everyone is invited to the party ______ for John, who has another event to attend.",
    options: ["Accept", "Except"],
    correctAnswer: "Except",
  },
  {
    question: "______ notebook is this on the desk?",
    options: ["Who's", "Whose"],
    correctAnswer: "Whose",
  },
  {
    question: "______ always so kind to everyone around you!",
    options: ["Your", "You're"],
    correctAnswer: "You're",
  },
  {
    question: "The new rules will likely ______ the entire school’s schedule.",
    options: ["Affect", "Effect"],
    correctAnswer: "Affect",
  },
  {
    question: "I’d rather read a book ______ watch a movie tonight.",
    options: ["Than", "Then"],
    correctAnswer: "Than",
  },
  {
    question: "______ going to start the meeting at 3 PM.",
    options: ["Were", "We're", "Where"],
    correctAnswer: "We're",
  },
  {
    question:
      "The ______ building in Washington, D.C. is where the U.S. Congress meets.",
    options: ["Capital", "Capitol"],
    correctAnswer: "Capitol",
  },
  {
    question:
      "She watched the new episode of the crime ______ on TV last night.",
    options: ["Cereal", "Serial"],
    correctAnswer: "Serial",
  },
  {
    question: "Remember to ______ before crossing the street!",
    options: ["Brake", "Break"],
    correctAnswer: "Brake",
  },
  {
    question: "If you don't hold on tightly, you might ______ your grip.",
    options: ["Loose", "Lose"],
    correctAnswer: "Lose",
  },
  {
    question: "Her scarf is the perfect ______ to her outfit.",
    options: ["Compliment", "Complement"],
    correctAnswer: "Complement",
  },
  {
    question: "The school ______ announced the new rules yesterday.",
    options: ["Principal", "Principle"],
    correctAnswer: "Principal",
  },
  {
    question: "I can't wait to have some chocolate cake for ______.",
    options: ["Desert", "Dessert"],
    correctAnswer: "Dessert",
  },
  {
    question:
      "She bought some beautiful ______ to write letters to her friends.",
    options: ["Stationary", "Stationery"],
    correctAnswer: "Stationery",
  },
  {
    question: "He gave me great ______ on how to study for exams.",
    options: ["Advice", "Advise"],
    correctAnswer: "Advice",
  },
  {
    question: "The mountains were a beautiful ______ to behold.",
    options: ["Sight", "Site", "Cite"],
    correctAnswer: "Sight",
  },
  {
    question: "She needed to walk ______ to reach the cabin.",
    options: ["Farther", "Further"],
    correctAnswer: "Farther",
  },
  {
    question: "Please ______ that the doors are locked before leaving.",
    options: ["Ensure", "Insure"],
    correctAnswer: "Ensure",
  },
  {
    question: "I need to ______ down for a while; I'm feeling tired.",
    options: ["Lay", "Lie"],
    correctAnswer: "Lie",
  },
  {
    question: "He was ______ introduced as the new manager.",
    options: ["Formally", "Formerly"],
    correctAnswer: "Formally",
  },
  {
    question: "He took a quick ______ through the keyhole.",
    options: ["Peek", "Peak", "Pique"],
    correctAnswer: "Peek",
  },
  {
    question: "The professor is an ______ expert in biology.",
    options: ["Eminent", "Imminent"],
    correctAnswer: "Eminent",
  },
  {
    question: "I'm not sure ______ it will rain tomorrow.",
    options: ["Whether", "Weather"],
    correctAnswer: "Whether",
  },
  {
    question: "The doctor showed great ______ with all his visitors.",
    options: ["Patience", "Patients"],
    correctAnswer: "Patience",
  },
  {
    question: "He tried to ______ capture by hiding in the forest.",
    options: ["Allude", "Elude"],
    correctAnswer: "Elude",
  },
  {
    question: "He was fully ______ during the entire surgery.",
    options: ["Conscious", "Conscience"],
    correctAnswer: "Conscious",
  },
  {
    question: "The magician's act was just an ______ of the eye.",
    options: ["Allusion", "Illusion"],
    correctAnswer: "Illusion",
  },
  {
    question: "They decided to ______ a new strategy to improve productivity.",
    options: ["Adapt", "Adopt"],
    correctAnswer: "Adopt",
  },
  {
    question: "The storm is ______, so we need to prepare.",
    options: ["Eminent", "Imminent"],
    correctAnswer: "Imminent",
  },
  {
    question: "I ______ you that everything will be fine.",
    options: ["Assure", "Ensure", "Insure"],
    correctAnswer: "Assure",
  },
  {
    question: "I will ______ the invitation if I'm free.",
    options: ["Accept", "Except"],
    correctAnswer: "Accept",
  },
  {
    question: "Manila is the ______ of the Philippines.",
    options: ["Capital", "Capitol"],
    correctAnswer: "Capital",
  },
  {
    question: "He ______ the team to victory last year.",
    options: ["Lead", "Led"],
    correctAnswer: "Led",
  },
  {
    question: "He couldn’t ______ the pain any longer.",
    options: ["Bear", "Bare"],
    correctAnswer: "Bear",
  },
  {
    question: "They fought a dramatic ______ to settle the score.",
    options: ["Dual", "Duel"],
    correctAnswer: "Duel",
  },
  {
    question:
      "The teacher's question managed to ______ an interesting response.",
    options: ["Illicit", "Elicit"],
    correctAnswer: "Elicit",
  },
  {
    question: "You have ______ to the VIP lounge.",
    options: ["Access", "Excess"],
    correctAnswer: "Access",
  },
  {
    question: "Her shoes perfectly ______ her dress.",
    options: ["Compliment", "Complement"],
    correctAnswer: "Complement",
  },
];

export const spellLevel3: ScrambledWordQuestion[] = [
  {
    scrambled: "zveourend",
    answer: "Rendezvous",
  },
  {
    scrambled: "teonemdeun",
    answer: "Denouement",
  },
  {
    scrambled: "atoxpjuition",
    answer: "Juxtaposition",
  },
  {
    scrambled: "ahscotrapet",
    answer: "Catastrophe",
  },
  {
    scrambled: "evesrriov",
    answer: "Reservoir",
  },
  {
    scrambled: "nsgioideun",
    answer: "Indigenous",
  },
  {
    scrambled: "gtineenilcne",
    answer: "Intelligence",
  },
  {
    scrambled: "ncfhidraeke",
    answer: "Handkerchief",
  },
  {
    scrambled: "ctquaneiacn",
    answer: "Acquaintance",
  },
  {
    scrambled: "poaaoinmteo",
    answer: "Onomatopoeia",
  },
  {
    scrambled: "etliracatu",
    answer: "Articulate",
  },
  {
    scrambled: "ecrceoenh",
    answer: "Coherence",
  },
  {
    scrambled: "poxsjeuta",
    answer: "Juxtapose",
  },
  {
    scrambled: "tasuteabntsi",
    answer: "Substantiate",
  },
  {
    scrambled: "ltcoyunseeqn",
    answer: "Consequently",
  },
  {
    scrambled: "lnthvereesse",
    answer: "Nevertheless",
  },
  {
    scrambled: "ohfrurmrete",
    answer: "Furthermore",
  },
  {
    scrambled: "tebial",
    answer: "Albeit",
  },
  {
    scrambled: "orefhreet",
    answer: "Therefore",
  },
  {
    scrambled: "siauomgbu",
    answer: "Ambiguous",
  },
  {
    scrambled: "nuredadt",
    answer: "Redundant",
  },
  {
    scrambled: "aleivb",
    answer: "Viable",
  },
  {
    scrambled: "ltcryai",
    answer: "Clarity",
  },
  {
    scrambled: "ecdirble",
    answer: "Credible",
  },
  {
    scrambled: "sisamhep",
    answer: "Emphasis",
  },
  {
    scrambled: "etansore",
    answer: "Resonate",
  },
  {
    scrambled: "tquonlee",
    answer: "Eloquent",
  },
  {
    scrambled: "naecedc",
    answer: "Cadence",
  },
  {
    scrambled: "idtocni",
    answer: "Diction",
  },
  {
    scrambled: "nonctoaiton",
    answer: "Connotation",
  },
  {
    scrambled: "natontedoi",
    answer: "Denotation",
  },
  {
    scrambled: "crevseteppi",
    answer: "Perspective",
  },
  {
    scrambled: "garmetun",
    answer: "Argument",
  },
  {
    scrambled: "ertufe",
    answer: "Refute",
  },
  {
    scrambled: "turlbtea",
    answer: "Rebuttal",
  },
  {
    scrambled: "asib",
    answer: "Bias",
  },
  {
    scrambled: "acfllya",
    answer: "Fallacy",
  },
  {
    scrambled: "uiaoncrcelmt",
    answer: "Counterclaim",
  },
  {
    scrambled: "ehssis",
    answer: "Thesis",
  },
  {
    scrambled: "ntlieuo",
    answer: "Outline",
  },
  {
    scrambled: "nrnstiatoi",
    answer: "Transition",
  },
  {
    scrambled: "rehppsaara",
    answer: "Paraphrase",
  },
  {
    scrambled: "zyenhthseis",
    answer: "Synthesize",
  },
  {
    scrambled: "szmraieuum",
    answer: "Summarize",
  },
  {
    scrambled: "cnirefeen",
    answer: "Inference",
  },
  {
    scrambled: "mpotcailin",
    answer: "Implication",
  },
  {
    scrambled: "etno",
    answer: "Tone",
  },
  {
    scrambled: "domo",
    answer: "Mood",
  },
  {
    scrambled: "yegolarl",
    answer: "Allegory",
  },
  {
    scrambled: "soybmmlsi",
    answer: "Symbolism",
  },
  {
    scrambled: "hopretam",
    answer: "Metaphor",
  },
  {
    scrambled: "leisim",
    answer: "Simile",
  },
  {
    scrambled: "oniyr",
    answer: "Irony",
  },
  {
    scrambled: "ilslaonu",
    answer: "Allusion",
  },
  {
    scrambled: "wfhoasrdoe",
    answer: "Foreshadow",
  },
  {
    scrambled: "rietraanv",
    answer: "Narrative",
  },
  {
    scrambled: "iionetxpso",
    answer: "Exposition",
  },
  {
    scrambled: "lnsetoiuro",
    answer: "Resolution",
  },
  {
    scrambled: "imalxc",
    answer: "Climax",
  },
  {
    scrambled: "osntitgrapo",
    answer: "Protagonist",
  },
  {
    scrambled: "gtnaonasti",
    answer: "Antagonist",
  },
  {
    scrambled: "oguidael",
    answer: "Dialogue",
  },
  {
    scrambled: "nugelomoo",
    answer: "Monologue",
  },
  {
    scrambled: "eonvisir",
    answer: "Revision",
  },
  {
    scrambled: "tigdine",
    answer: "Editing",
  },
  {
    scrambled: "uclnyef",
    answer: "Fluency",
  },
  {
    scrambled: "cveoi",
    answer: "Voice",
  },
  {
    scrambled: "sytel",
    answer: "Style",
  },
  {
    scrambled: "tnxasy",
    answer: "Syntax",
  },
  {
    scrambled: "rsuutrect",
    answer: "Structure",
  },
  {
    scrambled: "trleiaobnao",
    answer: "Elaboration",
  },
  {
    scrambled: "ntsgnibmraoir",
    answer: "Brainstorming",
  },
  {
    scrambled: "eiqtucir",
    answer: "Critique",
  },
  {
    scrambled: "sliaayns",
    answer: "Analysis",
  },
  {
    scrambled: "tjcniutsoiifa",
    answer: "Justification",
  },
  {
    scrambled: "tgoanrctumeuern",
    answer: "Counterargument",
  },
  {
    scrambled: "npeieitotr",
    answer: "Repetition",
  },
  {
    scrambled: "riesvsueap",
    answer: "Persuasive",
  },
  {
    scrambled: "tiromafneiv",
    answer: "Informative",
  },
  {
    scrambled: "lnoytexrapa",
    answer: "Explanatory",
  },
  {
    scrambled: "tsiecvedipr",
    answer: "Descriptive",
  },
  {
    scrambled: "ieakhtncl",
    answer: "Technical",
  },
  {
    scrambled: "ideccama",
    answer: "Academic",
  },
  {
    scrambled: "ltncyialaia",
    answer: "Analytical",
  },
  {
    scrambled: "feiylepxm",
    answer: "Exemplify",
  },
  {
    scrambled: "tpeneirrt",
    answer: "Interpret",
  },
  {
    scrambled: "laetroumf",
    answer: "Formulate",
  },
  {
    scrambled: "esertcurtur",
    answer: "Restructure",
  },
  {
    scrambled: "aahpsngirapr",
    answer: "Paraphrasing",
  },
  {
    scrambled: "ercehenco",
    answer: "Coherence",
  },
  {
    scrambled: "alrvoabeiet",
    answer: "Elaborative",
  },
  {
    scrambled: "roevwevi",
    answer: "Overview",
  },
  {
    scrambled: "ioutlne",
    answer: "Outline",
  },
];

export const puncLevel1: ChoicesQuestion[] = [
  {
    questionText: "Which punctuation ends a statement?",
    choices: { A: "Question mark", B: "!", C: "Period", D: "," },
    correctAnswer: "C",
  },
  {
    questionText: "Choose the correct punctuation: She is reading a book___",
    choices: { A: "?", B: ".", C: ",", D: "!" },
    correctAnswer: "B",
  },
  {
    questionText: "Which symbol is used to end a declarative sentence?",
    choices: { A: ":", B: ".", C: "!", D: ";" },
    correctAnswer: "B",
  },
  {
    questionText: "What punctuation is missing? The sun is hot___",
    choices: { A: ":", B: ";", C: "!", D: "." },
    correctAnswer: "D",
  },
  {
    questionText: "A period is used at the ___ of a sentence.",
    choices: { A: "Middle", B: "Start", C: "End", D: "Pause" },
    correctAnswer: "C",
  },
  {
    questionText: "Where do you place a period?",
    choices: {
      A: "After a question",
      B: "After a statement",
      C: "After an exclamation",
      D: "After a name",
    },
    correctAnswer: "B",
  },
  {
    questionText: "The period is used in which type of sentence?",
    choices: {
      A: "Exclamatory",
      B: "Imperative",
      C: "Declarative",
      D: "Interrogative",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Which of these uses a period correctly?",
    choices: {
      A: "What a great day.",
      B: "Do you like ice cream.",
      C: "Please bring your bag.",
      D: "Wow.",
    },
    correctAnswer: "B",
  },
  {
    questionText: "I love music__",
    choices: { A: "!", B: "?", C: ",", D: "." },
    correctAnswer: "D",
  },
  {
    questionText: "Which is not a time to use a period?",
    choices: {
      A: "End of a command",
      B: "End of a statement",
      C: "After a greeting",
      D: "After abbreviations",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Choose the correct punctuation: The dog barked loudly__",
    choices: { A: ".", B: ";", C: ":", D: "?" },
    correctAnswer: "A",
  },
  {
    questionText: "Finish this sentence: We went to the park__",
    choices: { A: "!", B: "?", C: ":", D: "." },
    correctAnswer: "D",
  },
  {
    questionText: "Which is a correct sentence?",
    choices: {
      A: "I saw a bird",
      B: "I saw a bird!",
      C: "I saw a bird.",
      D: "I saw a bird?",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Where do you put a period in this sentence? “I like apples”",
    choices: {
      A: "I like apples",
      B: "I like apples!",
      C: "I like apples.",
      D: "I like apples?",
    },
    correctAnswer: "C",
  },
  {
    questionText: "A period is most commonly used:",
    choices: {
      A: "At the start",
      B: "At the middle",
      C: "After shouting",
      D: "At the end",
    },
    correctAnswer: "D",
  },
  {
    questionText: "Which punctuation shows a question?",
    choices: { A: "!", B: "?", C: ":", D: ";" },
    correctAnswer: "B",
  },
  {
    questionText: "Choose the correct punctuation: Are you okay__",
    choices: { A: "!", B: ".", C: "?", D: "," },
    correctAnswer: "C",
  },
  {
    questionText: "What punctuation goes at the end of a question?",
    choices: {
      A: "Period",
      B: "Comma",
      C: "Exclamation point",
      D: "Question mark",
    },
    correctAnswer: "D",
  },
  {
    questionText: "Which sentence ends with a question mark?",
    choices: {
      A: "I like it",
      B: "Can you help me",
      C: "That’s great",
      D: "Are you ready?",
    },
    correctAnswer: "D",
  },
  {
    questionText: "A question mark is used to:",
    choices: {
      A: "Show a command",
      B: "Ask a question",
      C: "End a sentence",
      D: "Join two thoughts",
    },
    correctAnswer: "B",
  },
  {
    questionText: "What symbol is a question mark?",
    choices: { A: ".", B: "?", C: ":", D: ";" },
    correctAnswer: "B",
  },
  {
    questionText: "Which is a correct sentence with a question mark?",
    choices: {
      A: "Where are you.",
      B: "Where are you?",
      C: "Where are you!",
      D: "Where are you,",
    },
    correctAnswer: "B",
  },
  {
    questionText: "Choose the right mark: Did you see that__",
    choices: { A: "?", B: "!", C: ":", D: "," },
    correctAnswer: "A",
  },
  {
    questionText: "A question mark ends:",
    choices: {
      A: "A list",
      B: "A command",
      C: "A question",
      D: "An exclamation",
    },
    correctAnswer: "C",
  },
  {
    questionText: "What does “?” mean?",
    choices: { A: "Stop", B: "Ask", C: "Yell", D: "Pause" },
    correctAnswer: "B",
  },
  {
    questionText: "You ask, “Where is the cat__”",
    choices: { A: ".", B: ":", C: ";", D: "?" },
    correctAnswer: "D",
  },
  {
    questionText: "Choose the proper sentence:",
    choices: {
      A: "Is he coming",
      B: "Is he coming.",
      C: "Is he coming?",
      D: "Is he coming!",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Which is a question?",
    choices: {
      A: "He is tired",
      B: "Did he go home",
      C: "She is running",
      D: "The bird flies",
    },
    correctAnswer: "B",
  },
  {
    questionText: "Use a question mark with:",
    choices: { A: "Commands", B: "Statements", C: "Questions", D: "Yelling" },
    correctAnswer: "C",
  },
  {
    questionText: "What punctuation should follow: “Can I join you___”",
    choices: { A: "?", B: ".", C: ",", D: "!" },
    correctAnswer: "A",
  },
  {
    questionText: "Which punctuation shows strong feeling?",
    choices: { A: ",", B: ".", C: "?", D: "!" },
    correctAnswer: "D",
  },
  {
    questionText: "Choose the correct punctuation: Watch out___",
    choices: { A: ",", B: "?", C: ".", D: "!" },
    correctAnswer: "D",
  },
  {
    questionText: "An exclamation point is used to show:",
    choices: { A: "A list", B: "Excitement", C: "A question", D: "A pause" },
    correctAnswer: "B",
  },
  {
    questionText: "Which sentence is correct?",
    choices: {
      A: "I love ice cream!",
      B: "I love ice cream!",
      C: "I love ice cream?",
      D: "I love ice cream.",
    },
    correctAnswer: "A",
  },
  {
    questionText: "The exclamation point is used at the ___ of the sentence.",
    choices: { A: "Start", B: "Middle", C: "End", D: "After a list" },
    correctAnswer: "C",
  },
  {
    questionText: "What punctuation is missing? That was amazing___",
    choices: { A: ",", B: ".", C: "?", D: "!" },
    correctAnswer: "D",
  },
  {
    questionText: "Use an exclamation point for:",
    choices: {
      A: "Lists",
      B: "Commands with emotion",
      C: "Dates",
      D: "Dialogue tags",
    },
    correctAnswer: "B",
  },
  {
    questionText: "Select the correct use of an exclamation mark:",
    choices: {
      A: "I like pizza",
      B: "I like pizza.",
      C: "I like pizza!",
      D: "I like pizza?",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Which of these shows excitement?",
    choices: { A: "Hello.", B: "Hello!", C: "Hello,", D: "Hello?" },
    correctAnswer: "B",
  },
  {
    questionText: "Choose the proper punctuation: Run faster___",
    choices: { A: ".", B: "?", C: "!", D: ":" },
    correctAnswer: "C",
  },
  {
    questionText: "An exclamation point can follow:",
    choices: {
      A: "Statements",
      B: "Questions",
      C: "Interjections",
      D: "Dates",
    },
    correctAnswer: "C",
  },
  {
    questionText: 'How do you write: "Wow" with feeling?',
    choices: { A: "Wow.", B: "Wow,", C: "Wow?", D: "Wow!" },
    correctAnswer: "D",
  },
  {
    questionText: "Identify the correct sentence:",
    choices: {
      A: "Stop right there!",
      B: "Stop right there!",
      C: "Stop right there.",
      D: "Stop right there?",
    },
    correctAnswer: "A",
  },
  {
    questionText: "You use “!” when you want to:",
    choices: {
      A: "Ask something",
      B: "Pause",
      C: "Show emotion",
      D: "Introduce a list",
    },
    correctAnswer: "C",
  },
  {
    questionText: 'What punctuation ends: "I can’t believe it___"',
    choices: { A: ".", B: ",", C: ":", D: "!" },
    correctAnswer: "D",
  },
  {
    questionText: "Which punctuation separates items in a list?",
    choices: { A: ";", B: ":", C: ",", D: "." },
    correctAnswer: "C",
  },
  {
    questionText:
      "Choose the correct punctuation: I bought apples__ oranges, and bananas.",
    choices: { A: ":", B: ";", C: ".", D: "," },
    correctAnswer: "D",
  },
  {
    questionText: "What punctuation is missing? After lunch__ we went outside.",
    choices: { A: ".", B: ";", C: "!", D: "," },
    correctAnswer: "D",
  },
  {
    questionText: "Use a comma to:",
    choices: {
      A: "End a sentence",
      B: "Show surprise",
      C: "Separate ideas",
      D: "Ask a question",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Where does the comma go? First we ate dinner",
    choices: {
      A: "First we, ate dinner",
      B: "First, we ate dinner",
      C: "First we ate, dinner",
      D: "First we ate dinner,",
    },
    correctAnswer: "B",
  },
  {
    questionText: "Which sentence is correct?",
    choices: {
      A: "Yes, I will go.",
      B: "Yes I will go.",
      C: "Yes. I will, go.",
      D: "Yes I, will go.",
    },
    correctAnswer: "A",
  },
  {
    questionText: "Choose the correctly punctuated list:",
    choices: {
      A: "We saw lions and tigers, bears",
      B: "We saw lions, and tigers and bears",
      C: "We saw lions and, tigers and bears",
      D: "We saw lions, tigers, and bears",
    },
    correctAnswer: "D",
  },
  {
    questionText: "Commas are used:",
    choices: {
      A: "To end sentences",
      B: "Before questions",
      C: "To separate items",
      D: "To show excitement",
    },
    correctAnswer: "C",
  },
  {
    questionText: "Select the correct use:",
    choices: {
      A: "Before leaving, check your bag.",
      B: "Before, leaving check your bag.",
      C: "Before leaving check, your bag.",
      D: "Before leaving check your bag",
    },
    correctAnswer: "A",
  },
  {
    questionText:
      "What punctuation is used after introductory words like “However” or “Yes”?",
    choices: { A: ".", B: ":", C: ";", D: "," },
    correctAnswer: "D",
  },
  {
    questionText: "Which is punctuated correctly?",
    choices: {
      A: "No I don’t want to.",
      B: "No I, don’t want to.",
      C: "No, I don’t want to.",
      D: "No. I don’t want to",
    },
    correctAnswer: "C",
  },
  {
    questionText:
      "Where do commas go? We went to school the library and the store",
    choices: {
      A: "We went to school, the library and the store",
      B: "We went to school, the library, and the store",
      C: "We went, to school the library, and the store",
      D: "We went to school the library, and, the store",
    },
    correctAnswer: "B",
  },
  {
    questionText: "Choose the correct sentence:",
    choices: {
      A: "Well, that was fun.",
      B: "Well that, was fun.",
      C: "Well that was fun,",
      D: "Well, that, was fun",
    },
    correctAnswer: "A",
  },
  {
    questionText: "Commas are helpful when:",
    choices: {
      A: "Separating parts of a sentence",
      B: "Ending a command",
      C: "Asking something",
      D: "Starting a question",
    },
    correctAnswer: "A",
  },
  {
    questionText:
      "What punctuation is missing? After the game__ we got ice cream.",
    choices: { A: ".", B: "?", C: ",", D: ";" },
    correctAnswer: "C",
  },
  {
    questionText: "Find the correct sentence:",
    choices: {
      A: "Wait let me help.",
      B: "Wait, let me help.",
      C: "Wait let me, help.",
      D: "Wait. Let me help",
    },
    correctAnswer: "B",
  },
  {
    questionText:
      "Which punctuation is used before a conjunction like “but” or “and”?",
    choices: { A: ":", B: ";", C: ".", D: "," },
    correctAnswer: "D",
  },
];

export const puncLevel2: QuizChoice[] = [
  {
    options: [
      "Despite the heavy rain; the game continued.",
      "Despite the heavy rain, the game continued.",
      "Despite the heavy rain the game continued.",
      "Despite the heavy rain: the game continued.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      '"To be or not to be" that is the question.',
      '"To be or not to be," that is the question.',
      '"To be or not to be"; that is the question.',
      '"To be or not to be" that is the question!',
    ],
    answerIndex: 1,
  },
  {
    options: [
      "The old house stood on a hill overlooking the valley it was quite a sight.",
      "The old house stood on a hill overlooking the valley; it was quite a sight.",
      "The old house stood on a hill overlooking the valley, it was quite a sight.",
      "The old house stood on a hill overlooking the valley: it was quite a sight.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      'She asked, "Are we there yet?"',
      'She asked "Are we there yet?"',
      'She asked; "Are we there yet?"',
      'She asked. "Are we there yet?"',
    ],
    answerIndex: 3,
  },
  {
    options: [
      "The recipe called for flour sugar and eggs.",
      "The recipe called for flour, sugar, and eggs.",
      "The recipe called for flour; sugar; and eggs.",
      "The recipe called for flour: sugar: and eggs.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      "He was a well known, respected author.",
      "He was a well-known respected author.",
      "He was a well-known, respected author.",
      "He was a well known respected author.",
    ],
    answerIndex: 2,
  },
  {
    options: [
      "The movie was long and boring... I almost fell asleep.",
      "The movie was long and boring, I almost fell asleep.",
      "The movie was long and boring; I almost fell asleep.",
      "The movie was long and boring I almost fell asleep.",
    ],
    answerIndex: 2,
  },
  {
    options: [
      "My favorite colors are blue green and yellow.",
      "My favorite colors are: blue, green, and yellow.",
      "My favorite colors are blue, green, and yellow!",
      "My favorite colors are; blue, green, and yellow.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      "The cat jumped onto the table and then it knocked over the vase.",
      "The cat jumped onto the table, and then it knocked over the vase.",
      "The cat jumped onto the table; and then it knocked over the vase.",
      "The cat jumped onto the table: and then it knocked over the vase.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      'She exclaimed "That\'s incredible!"',
      'She exclaimed, "That\'s incredible!"',
      'She exclaimed; "That\'s incredible!"',
      'She exclaimed. "That\'s incredible!"',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "For sale: antique desk, excellent condition.",
      "For sale; antique desk, excellent condition.",
      "For sale, antique desk, excellent condition.",
      "For sale. antique desk, excellent condition.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "He couldn't decide whether to go left or right.",
      "He couldn't decide whether to go left, or right.",
      "He couldn't decide whether to go left; or right.",
      "He couldn't decide whether to go left... or right.",
    ],
    answerIndex: 3,
  },
  {
    options: [
      "The company's goals were clear: increase profit, expand market share, and improve customer satisfaction.",
      "The company's goals were clear; increase profit, expand market share, and improve customer satisfaction.",
      "The company's goals were clear, increase profit, expand market share, and improve customer satisfaction.",
      "The company's goals were clear... increase profit, expand market share, and improve customer satisfaction.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      '"I think," she said, "that this is the right way."',
      '"I think she said that this is the right way."',
      '"I think" she said "that this is the right way."',
      '"I think; she said; that this is the right way."',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The car, a vintage convertible, was parked in the driveway.",
      "The car a vintage convertible was parked in the driveway.",
      "The car; a vintage convertible; was parked in the driveway.",
      "The car: a vintage convertible: was parked in the driveway.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "He hesitated... then he finally answered the question.",
      "He hesitated, then he finally answered the question.",
      "He hesitated; then he finally answered the question.",
      "He hesitated then he finally answered the question.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The report concluded that further research was needed.",
      "The report concluded: that further research was needed.",
      "The report concluded; that further research was needed.",
      "The report concluded, that further research was needed.",
    ],
    answerIndex: 3,
  },
  {
    options: [
      "She enjoyed reading, hiking, and baking.",
      "She enjoyed reading hiking and baking.",
      "She enjoyed reading; hiking; and baking.",
      " She enjoyed reading: hiking: and baking.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The speaker emphasized three key points honesty integrity and hard work.",
      "The speaker emphasized three key points: honesty, integrity, and hard work.",
      "The speaker emphasized three key points; honesty, integrity, and hard work.",
      "The speaker emphasized three key points, honesty, integrity, and hard work.",
    ],
    answerIndex: 1,
  },
  {
    options: [
      '"Well," he began, "it\'s a long story."',
      '"Well he began it\'s a long story."',
      '"Well;" he began; "it\'s a long story."',
      '"Well," he began "it\'s a long story."',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The dog barked loudly, wagged its tail, and jumped around.",
      "The dog barked loudly; wagged its tail; and jumped around.",
      "The dog barked loudly: wagged its tail: and jumped around.",
      "The dog barked loudly wagged its tail and jumped around.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      '"I\'m so glad to see you," she exclaimed with a smile.',
      '"I\'m so glad to see you"; she exclaimed with a smile.',
      '"I\'m so glad to see you." she exclaimed with a smile.',
      '"I\'m so glad to see you" she exclaimed with a smile!',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The old car sputtered, coughed, and finally stopped running.",
      "The old car sputtered; coughed; and finally stopped running.",
      "The old car sputtered: coughed: and finally stopped running.",
      "The old car sputtered coughed and finally stopped running.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      'She asked him, "Where did you go?"',
      'She asked him; "Where did you go?"',
      'She asked him. "Where did you go?"',
      'She asked him "Where did you go"!',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The store sold apples, bananas, and oranges, all locally grown.",
      "The store sold apples; bananas; and oranges; all locally grown.",
      "The store sold apples: bananas: and oranges: all locally grown.",
      "The store sold apples bananas and oranges all locally grown.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "He was a well-respected member of the community.",
      "He was a well respected member of the community.",
      "He was a well, respected member of the community.",
      "He was a well; respected member of the community.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The movie was exciting, suspenseful, and ultimately satisfying—a great experience.",
      "The movie was exciting; suspenseful; and ultimately satisfying; a great experience.",
      "The movie was exciting: suspenseful: and ultimately satisfying: a great experience.",
      "The movie was exciting suspenseful and ultimately satisfying a great experience.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "My favorite subjects are history, science, and literature; they are all so interesting.",
      "My favorite subjects are history; science; and literature, they are all so interesting.",
      "My favorite subjects are history: science: and literature: they are all so interesting.",
      "My favorite subjects are history science and literature they are all so interesting.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The rain stopped, the sun came out, and a rainbow appeared.",
      "The rain stopped; the sun came out; and a rainbow appeared.",
      "The rain stopped: the sun came out: and a rainbow appeared.",
      "The rain stopped the sun came out and a rainbow appeared!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      '"Wow, that\'s an amazing view!" she exclaimed.',
      '"Wow"; that\'s an amazing view!"; she exclaimed.',
      '"Wow." that\'s an amazing view!" she exclaimed.',
      '"Wow that\'s an amazing view" she exclaimed?',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "For rent: a small apartment, newly renovated.",
      "For rent; a small apartment; newly renovated.",
      "For rent, a small apartment, newly renovated.",
      "For rent a small apartment newly renovated!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "He wasn't sure if he should laugh... or cry.",
      "He wasn't sure if he should laugh, or cry?",
      "He wasn't sure if he should laugh; or cry.",
      "He wasn't sure if he should laugh or cry!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The company announced major changes: a new CEO, a revised strategy, and a focus on innovation.",
      "The company announced major changes; a new CEO; a revised strategy; and a focus on innovation.",
      "The company announced major changes, a new CEO, a revised strategy, and a focus on innovation.",
      "The company announced major changes... a new CEO, a revised strategy, and a focus on innovation.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      '"If you need anything," he said, "don\'t hesitate to call."',
      '"If you need anything he said don\'t hesitate to call."',
      '"If you need anything"; he said; "don\'t hesitate to call."',
      '"If you need anything," he said "don\'t hesitate to call"!',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The building, a historic landmark, was recently restored.",
      "The building a historic landmark was recently restored!",
      "The building; a historic landmark; was recently restored.",
      "The building: a historic landmark: was recently restored.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "She thought about it for a moment, then she made her decision.",
      "She thought about it for amoment; then she made her decision.",
      "She thought about it for a moment: then she made her decision.",
      "She thought about it for a moment then she made her decision!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The study indicated several key findings: more research was needed.",
      "The study indicated several key findings; more research was needed.",
      "The study indicated several key findings, more research was needed.",
      "The study indicated several key findings... more research was needed.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "He enjoyed swimming, hiking, and camping—all outdoor activities.",
      "He enjoyed swimming; hiking; and camping; all outdoor activities.",
      "He enjoyed swimming: hiking: and camping: all outdoor activities.",
      "He enjoyed swimming hiking and camping all outdoor activities!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The speaker outlined three main points: clarity, conciseness, and confidence.",
      "The speaker outlined three main points; clarity; conciseness; and confidence.",
      "The speaker outlined three main points, clarity, conciseness, and confidence.",
      "The speaker outlined three main points clarity conciseness and confidence!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      '"Well, I never!" she exclaimed in surprise.',
      '"Well; I never!"; she exclaimed in surprise.',
      '"Well." I never!" she exclaimed in surprise.',
      '"Well I never" she exclaimed in surprise?',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The cake recipe called for flour, sugar, butter, and eggs—simple ingredients.",
      "The cake recipe called for flour; sugar; butter; and eggs; simple ingredients.",
      "The cake recipe called for flour: sugar: butter: and eggs: simple ingredients.",
      "The cake recipe called for flour sugar butter and eggs simple ingredients!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      'She wondered aloud, "Is it going to rain today?"',
      'She wondered aloud; "Is it going to rain today?"',
      'She wondered aloud. "Is it going to rain today?"',
      'She wondered aloud "Is it going to rain today"!',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The old house creaked, groaned, and settled as the wind blew.",
      "The old house creaked; groaned; and settled; as the wind blew.",
      "The old house creaked: groaned: and settled: as the wind blew.",
      "The old house creaked groaned and settled as the wind blew!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      'He asked politely, "Could you please help me?"',
      'He asked politely; "Could you please help me?"',
      'He asked politely. "Could you please help me?"',
      'He asked politely "Could you please help me"!',
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The picnic included sandwiches, fruit, and drinks, all packed carefully.",
      "The picnic included sandwiches; fruit; and drinks; all packed carefully.",
      "The picnic included sandwiches: fruit: and drinks: all packed carefully.",
      "The picnic included sandwiches fruit and drinks all packed carefully!",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The artist was known for his bold, colorful paintings.",
      "The artist was known for his bold colorful paintings!",
      "The artist was known for his bold; colorful paintings.",
      "The artist was known for his bold: colorful paintings.",
    ],
    answerIndex: 0,
  },
  {
    options: [
      "The play was long and at times confusing—but ultimately thought-provoking.",
      "The play was long and at times confusing; but ultimately thought-provoking.",
      "The play was long and at times confusing: but ultimately thought-provoking.",
      "The play was long and at times confusing but ultimately thought-provoking!",
    ],
    answerIndex: 0,
  },
];

export const puncLevel3: Word3[] = [
  {
    incorrectSentence: "where are you going",
    correctSentence: "Where are you going?",
  },
  {
    incorrectSentence: "the cat sat on the mat",
    correctSentence: "The cat sat on the mat.",
  },
  {
    incorrectSentence: "she said hello to him",
    correctSentence: 'She said, "Hello," to him.',
  },
  {
    incorrectSentence: "are you feeling okay today",
    correctSentence: "Are you feeling okay today?",
  },
  {
    incorrectSentence: "my favorite color is blue",
    correctSentence: "My favorite color is blue.",
  },
  {
    incorrectSentence: "they went to the park yesterday",
    correctSentence: "They went to the park yesterday.",
  },
  {
    incorrectSentence: "what a beautiful day it is",
    correctSentence: "What a beautiful day it is!",
  },
  {
    incorrectSentence: "please close the door behind you",
    correctSentence: "Please close the door behind you.",
  },
  {
    incorrectSentence: "i like coffee and tea",
    correctSentence: "I like coffee and tea.",
  },
  {
    incorrectSentence: "have you seen my keys anywhere",
    correctSentence: "Have you seen my keys anywhere?",
  },
  {
    incorrectSentence: "the book is on the table",
    correctSentence: "The book is on the table.",
  },
  {
    incorrectSentence: "he asked if i was coming to the party",
    correctSentence: "He asked if I was coming to the party.",
  },
  {
    incorrectSentence: "that movie was really exciting",
    correctSentence: "That movie was really exciting!",
  },
  {
    incorrectSentence: "could you please help me with this",
    correctSentence: "Could you please help me with this?",
  },
  {
    incorrectSentence: "we are going to the beach tomorrow",
    correctSentence: "We are going to the beach tomorrow.",
  },
  {
    incorrectSentence: "she enjoys reading novels and short stories",
    correctSentence: "She enjoys reading novels and short stories.",
  },
  {
    incorrectSentence: "what time does the train arrive",
    correctSentence: "What time does the train arrive?",
  },
  {
    incorrectSentence: "the flowers in the garden are blooming",
    correctSentence: "The flowers in the garden are blooming.",
  },
  {
    incorrectSentence: "he exclaimed what a surprise",
    correctSentence: 'He exclaimed, "What a surprise!"',
  },
  {
    incorrectSentence: "don't forget your umbrella it's raining",
    correctSentence: "Don't forget your umbrella; it's raining.",
  },
  {
    incorrectSentence: "my brother lives in london england",
    correctSentence: "My brother lives in London, England.",
  },
  {
    incorrectSentence: "did you finish your homework yet",
    correctSentence: "Did you finish your homework yet?",
  },
  {
    incorrectSentence: "the food at the restaurant was delicious",
    correctSentence: "The food at the restaurant was delicious.",
  },
  {
    incorrectSentence: "she wondered where he had gone",
    correctSentence: "She wondered where he had gone.",
  },
  {
    incorrectSentence: "how kind of you to help",
    correctSentence: "How kind of you to help!",
  },
  {
    incorrectSentence: "let's go for a walk shall we",
    correctSentence: "Let's go for a walk, shall we?",
  },
  {
    incorrectSentence: "they are planning a trip to italy next year",
    correctSentence: "They are planning a trip to Italy next year.",
  },
  {
    incorrectSentence: "he likes to play basketball and soccer",
    correctSentence: "He likes to play basketball and soccer.",
  },
  {
    incorrectSentence: "when will the meeting start",
    correctSentence: "When will the meeting start?",
  },
  {
    incorrectSentence: "the old house on the hill is empty",
    correctSentence: "The old house on the hill is empty.",
  },
  {
    incorrectSentence: "she whispered it's a secret",
    correctSentence: 'She whispered, "It\'s a secret."',
  },
  {
    incorrectSentence: "be careful the floor is wet",
    correctSentence: "Be careful; the floor is wet.",
  },
  {
    incorrectSentence: "the capital of france is paris",
    correctSentence: "The capital of France is Paris.",
  },
  {
    incorrectSentence: "have you ever been to australia",
    correctSentence: "Have you ever been to Australia?",
  },
  {
    incorrectSentence: "the music was loud and energetic",
    correctSentence: "The music was loud and energetic.",
  },
  {
    incorrectSentence: "he wondered what the answer could be",
    correctSentence: "He wondered what the answer could be.",
  },
  {
    incorrectSentence: "what an amazing performance",
    correctSentence: "What an amazing performance!",
  },
  {
    incorrectSentence: "if you need anything just let me know",
    correctSentence: "If you need anything, just let me know.",
  },
  {
    incorrectSentence: "we saw a bear in the woods",
    correctSentence: "We saw a bear in the woods.",
  },
  {
    incorrectSentence: "she enjoys listening to classical music and jazz",
    correctSentence: "She enjoys listening to classical music and jazz.",
  },
  {
    incorrectSentence: "where did you buy that shirt",
    correctSentence: "Where did you buy that shirt?",
  },
  {
    incorrectSentence: "the tall tree swayed in the wind",
    correctSentence: "The tall tree swayed in the wind.",
  },
  {
    incorrectSentence: "he shouted watch out",
    correctSentence: 'He shouted, "Watch out!"',
  },
  {
    incorrectSentence: "despite the rain they continued their hike",
    correctSentence: "Despite the rain, they continued their hike.",
  },
  {
    incorrectSentence: "my aunt lives in miami florida",
    correctSentence: "My aunt lives in Miami, Florida.",
  },
  {
    incorrectSentence: "are they coming to the party tonight",
    correctSentence: "Are they coming to the party tonight?",
  },
  {
    incorrectSentence: "the cake she baked was delicious",
    correctSentence: "The cake she baked was delicious.",
  },
  {
    incorrectSentence: "he asked where i had been all day",
    correctSentence: "He asked where I had been all day.",
  },
  {
    incorrectSentence: "how wonderful to see you again",
    correctSentence: "How wonderful to see you again!",
  },
  {
    incorrectSentence: "let's try that new restaurant tonight okay",
    correctSentence: "Let's try that new restaurant tonight, okay?",
  },
  {
    incorrectSentence: "they are studying spanish and german",
    correctSentence: "They are studying Spanish and German.",
  },
  {
    incorrectSentence: "what is the capital of japan",
    correctSentence: "What is the capital of Japan?",
  },
  {
    incorrectSentence: "the stars in the sky were so bright",
    correctSentence: "The stars in the sky were so bright.",
  },
  {
    incorrectSentence: "she exclaimed that's incredible",
    correctSentence: 'She exclaimed, "That\'s incredible!"',
  },
  {
    incorrectSentence: "because it was late we decided to go home",
    correctSentence: "Because it was late, we decided to go home.",
  },
  {
    incorrectSentence: "my cousin lives in seattle washington",
    correctSentence: "My cousin lives in Seattle, Washington.",
  },
  {
    incorrectSentence: "have you read that new book by your favorite author",
    correctSentence: "Have you read that new book by your favorite author?",
  },
  {
    incorrectSentence: "the children played happily in the playground",
    correctSentence: "The children played happily in the playground.",
  },
  {
    incorrectSentence: "he wondered what time it was",
    correctSentence: "He wondered what time it was.",
  },
  {
    incorrectSentence: "what a lovely surprise this is",
    correctSentence: "What a lovely surprise this is!",
  },
  {
    incorrectSentence: "if you have any questions please ask",
    correctSentence: "If you have any questions, please ask.",
  },
  {
    incorrectSentence: "we visited the museum and the art gallery",
    correctSentence: "We visited the museum and the art gallery.",
  },
  {
    incorrectSentence: "she enjoys painting and drawing in her free time",
    correctSentence: "She enjoys painting and drawing in her free time.",
  },
  {
    incorrectSentence: "where did you go on your vacation",
    correctSentence: "Where did you go on your vacation?",
  },
  {
    incorrectSentence: "the river flowed gently through the valley",
    correctSentence: "The river flowed gently through the valley.",
  },
  {
    incorrectSentence: "he whispered i have a secret to tell you",
    correctSentence: 'He whispered, "I have a secret to tell you."',
  },
  {
    incorrectSentence: "even though it was cold they went swimming",
    correctSentence: "Even though it was cold, they went swimming.",
  },
  {
    incorrectSentence: "my uncle lives in london ontario canada",
    correctSentence: "My uncle lives in London, Ontario, Canada.",
  },
  {
    incorrectSentence: "are they going to the concert on saturday",
    correctSentence: "Are they going to the concert on Saturday?",
  },
  {
    incorrectSentence: "the song on the radio was very catchy",
    correctSentence: "The song on the radio was very catchy.",
  },
  {
    incorrectSentence: "she asked if i knew the way",
    correctSentence: "She asked if I knew the way.",
  },
  {
    incorrectSentence: "how exciting the fireworks were",
    correctSentence: "How exciting the fireworks were!",
  },
  {
    incorrectSentence: "let's meet for lunch tomorrow at noon",
    correctSentence: "Let's meet for lunch tomorrow at noon.",
  },
  {
    incorrectSentence: "they are learning french and italian",
    correctSentence: "They are learning French and Italian.",
  },
  {
    incorrectSentence: "what is the highest mountain in the world",
    correctSentence: "What is the highest mountain in the world?",
  },
  {
    incorrectSentence: "the clouds in the sky looked like cotton candy",
    correctSentence: "The clouds in the sky looked like cotton candy.",
  },
  {
    incorrectSentence: "he exclaimed that's amazing news",
    correctSentence: 'He exclaimed, "That\'s amazing news!"',
  },
  {
    incorrectSentence: "although it was difficult they persevered",
    correctSentence: "Although it was difficult, they persevered.",
  },
  {
    incorrectSentence: "my friend lives in sydney australia",
    correctSentence: "My friend lives in Sydney, Australia.",
  },
  {
    incorrectSentence: "have you seen the new art exhibit at the gallery",
    correctSentence: "Have you seen the new art exhibit at the gallery?",
  },
  {
    incorrectSentence: "the birds sang sweetly in the trees",
    correctSentence: "The birds sang sweetly in the trees.",
  },
  {
    incorrectSentence: "she wondered what he was thinking",
    correctSentence: "She wondered what he was thinking.",
  },
  {
    incorrectSentence: "what a relief to finally finish the project",
    correctSentence: "What a relief to finally finish the project!",
  },
  {
    incorrectSentence: "if you see him can you give him this message",
    correctSentence: "If you see him, can you give him this message?",
  },
  {
    incorrectSentence: "we enjoyed the hike and the beautiful scenery",
    correctSentence: "We enjoyed the hike and the beautiful scenery.",
  },
  {
    incorrectSentence: "she likes to bake cookies and cakes on weekends",
    correctSentence: "She likes to bake cookies and cakes on weekends.",
  },
  {
    incorrectSentence: "where will you be this summer",
    correctSentence: "Where will you be this summer?",
  },
  {
    incorrectSentence: "the old stone wall surrounded the garden",
    correctSentence: "The old stone wall surrounded the garden.",
  },
  {
    incorrectSentence: "he shouted get out of here",
    correctSentence: 'He shouted, "Get out of here!"',
  },
  {
    incorrectSentence: "because of the storm the power went out",
    correctSentence: "Because of the storm, the power went out.",
  },
  {
    incorrectSentence: "my neighbor lives in tokyo japan",
    correctSentence: "My neighbor lives in Tokyo, Japan.",
  },
  {
    incorrectSentence: "are they planning to visit us soon",
    correctSentence: "Are they planning to visit us soon?",
  },
  {
    incorrectSentence: "the story she told was very interesting",
    correctSentence: "The story she told was very interesting.",
  },
  {
    incorrectSentence: "he asked if i needed any help",
    correctSentence: "He asked if I needed any help.",
  },
  {
    incorrectSentence: "how strange that nobody answered the door",
    correctSentence: "How strange that nobody answered the door!",
  },
  {
    incorrectSentence: "let's try a different approach this time shall we",
    correctSentence: "Let's try a different approach this time, shall we?",
  },
  {
    incorrectSentence: "they are interested in history and archaeology",
    correctSentence: "They are interested in history and archaeology.",
  },
  {
    incorrectSentence: "what is the longest river in the world",
    correctSentence: "What is the longest river in the world?",
  },
  {
    incorrectSentence: "the stars twinkled in the dark night sky",
    correctSentence: "The stars twinkled in the dark night sky.",
  },
  {
    incorrectSentence: "she exclaimed that's fantastic news",
    correctSentence: 'She exclaimed, "That\'s fantastic news!"',
  },
];

export const QuestionType = {
    MultipleChoice : "multiple_choice",
    SentenceOrder : "sentence_order",
    Identification : "identification",
    ImageIdentification : "image_identification",
    ReWriteSentence : "rewrite_sentence",
    Direction: "direction",

    // used for transitional words (2) selection
    Transitional: "transitional",
    CompleteTheSentence: "complete_the_sentence"
};

export type QuestionType = typeof QuestionType[keyof typeof QuestionType];
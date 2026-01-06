import type { AchievementCardProps, Achievements, Quiz, Room } from "../types";
import { ORG_BEGINER_SET } from "./organization/beginner";
import { ORG_ADVANCED_SET } from "./organization/advanced";
import { ORG_INTERMIDIATE_SET } from "./organization/intermidiate";
import { GRAMMAR_BEGINNER_SET } from "./grammar/beginner";
import { GRAMMAR_INTERMIDIATE_SET } from "./grammar/intermidiate";
import { GRAMMAR_ADVANCED_SET } from "./grammar/advanced";
import { VOCAB_BEGINNER_SET } from "./vocabulary/beginner";
import { VOCAB_INTERMIDIATE_SET } from "./vocabulary/intermidiate";
import { VOCAB_ADVANCED_SET } from "./vocabulary/advanced";
import { CONTENT_BEGINNER_SET } from "./content/beginner";
import { CONTENT_INTERMIDIATE_SET } from "./content/intermidiate";
import { CONTENT_ADVANCED_SET } from "./content/advanced";
import { MECHANICS_BEGINNER_SET } from "./mechanics/beginner";
import { MECHANICS_INTERMEDIATE_SET } from "./mechanics/intermidiate";
import { MECHANICS_ADVANCED_SET } from "./mechanics/advanced";
import { MECH_PRACTICE } from "./mechanics/practice";
import { VOCAB_PRACTICE } from "./vocabulary/practice";
import { CONTENT_PRACTICE } from "./content/practice";
import { ORG_PRACTICE } from "./organization/practice";
import { GRAMMAR_PRACTICE } from "./grammar/practice";

const bronzeMedal = "/achievements/bronze-medal.png";
const silverMedal = "/achievements/silver-medal.png";
const goldMedal = "/achievements/gold-medal.png";

// Mapping of achievement keys to display-friendly names and images
export const allAchievementsDisplayData: Record<
  Achievements,
  Omit<AchievementCardProps, "date" | "achieved">
> = {
  completeContentBeginner: {
    title: "Content Beginner",
    description: "Complete Content's Beginner Level",
    imageSrc: bronzeMedal
  },
  completeContentIntermediate: {
    title: "Content Intermediate",
    description: "Complete Content's Intermediate Level",
    imageSrc: silverMedal
  },
  completeContentAdvanced: {
    title: "Content Advanced",
    description: "Complete Content's Advanced Level",
    imageSrc: goldMedal
  },
  completeOrganizationBeginner: {
    title: "Organization Beginner",
    description: "Complete Organization's Beginner Level",
    imageSrc: bronzeMedal
  },
  completeOrganizationIntermediate: {
    title: "Organization Intermediate",
    description: "Complete Organization's Intermediate Level",
    imageSrc: silverMedal
  },
  completeOrganizationAdvanced: {
    title: "Organization Advanced",
    description: "Complete Organization's Advanced Level",
    imageSrc: goldMedal
  },
  completeVocabularyBeginner: {
    title: "Vocabulary Beginner",
    description: "Complete Vocabulary's Beginner Level",
    imageSrc: bronzeMedal
  },
  completeVocabularyIntermediate: {
    title: "Vogabulary Intermediate",
    description: "Complete Vocabulary's Intermediate Level",
    imageSrc: silverMedal
  },
  completeVocabularyAdvanced: {
    title: "Vocabulary Advanced",
    description: "Complete Vocabulary's Advanced Level",
    imageSrc: goldMedal
  },
  completeGrammarBeginner: {
    title: "Grammar Beginner",
    description: "Complete Grammar's Beginner Level",
    imageSrc: bronzeMedal
  },
  completeGrammarIntermediate: {
    title: "Grammar Intermediate",
    description: "Complete Grammar's Intermediate Level",
    imageSrc: silverMedal
  },
  completeGrammarAdvanced: {
    title: "Grammar Advanced",
    description: "Complete Grammar's Advanced Level",
    imageSrc: goldMedal
  },
  completeMechanicsBeginner: {
    title: "Writing Mechanic Beginner",
    description: "Complete Mechanic's Beginner Level",
    imageSrc: bronzeMedal
  },
  completeMechanicsIntermediate: {
    title: "Writing Mechanic Intermediate",
    description: "Complete Mechanic's Intermediate Level",
    imageSrc: silverMedal
  },
  completeMechanicsAdvanced: {
    title: "Writing Mechanic Advanced",
    description: "Complete Mechanic's Advanced Level",
    imageSrc: goldMedal
  },
  completeAllContent: {
    title: "Content Champion",
    description: "Complete All Content Levels",
    imageSrc: "/achievements/content_trophy.png"
  },
  completeAllOrganization: {
    title: "Organization Champion",
    description: "Complete All Organization Levels",
    imageSrc: "/achievements/organization_trophy.png"
  },
  completeAllVocabulary: {
    title: "Vocabulary Champion",
    description: "Complete All Vocabulary Levels",
    imageSrc: "/achievements/vocabulary_trophy.png"
  },
  completeAllGrammar: {
    title: "Grammar Champion",
    description: "Complete All Grammar Levels",
    imageSrc: "/achievements/grammar_trophy.png"
  },
  completeAllMechanic: {
    title: "Writing Mechanics Champion",
    description: "Complete All Writing Mechanic Levels",
    imageSrc: "/achievements/mechanic_trophy.png"
  },
  completedAllLevels: {
    title: "Pinoy Big Writer",
    description: "Completed all levels in Content, Organization, Vocabulary, Grammar & Mechanics",
    imageSrc: "/achievements/pbw-trophy.png", // Replace with actual path
  },
};

export const ORGANIZATION_QUIZ: Quiz = {
    category: "Organization",
    beginner: ORG_BEGINER_SET,
    intermidiate: ORG_INTERMIDIATE_SET,
    advance: ORG_ADVANCED_SET
}

export const GRAMMAR_QUIZ: Quiz = {
  category: "Grammar",
  beginner: GRAMMAR_BEGINNER_SET,
  intermidiate: GRAMMAR_INTERMIDIATE_SET,
  advance: GRAMMAR_ADVANCED_SET
}

export const VOCAB_QUIZ: Quiz = {
  category: "Vocabulary",
  beginner: VOCAB_BEGINNER_SET,
  intermidiate: VOCAB_INTERMIDIATE_SET,
  advance: VOCAB_ADVANCED_SET
}

export const CONTENT_QUIZ: Quiz = {
  category: "Content",
  beginner: CONTENT_BEGINNER_SET,
  intermidiate: CONTENT_INTERMIDIATE_SET,
  advance: CONTENT_ADVANCED_SET
}

export const MECHANIC_QUIZ: Quiz = {
  category: "Mechanics",
  beginner: MECHANICS_BEGINNER_SET,
  intermidiate: MECHANICS_INTERMEDIATE_SET,
  advance: MECHANICS_ADVANCED_SET
}

export const PRACTICE_QUIZ: Record<Room, Partial<Quiz>> = {
  content: { 
    category: "Content Practice",
    practice: CONTENT_PRACTICE
   },
  grammar: {
    category: "Grammar Practice",
    practice: GRAMMAR_PRACTICE
  },
  mechanics: {
    category: "Mechanics Practice",
    practice: MECH_PRACTICE
  },
  organization: {
    category: "Organization Practice",
    practice: ORG_PRACTICE
  },
  vocabulary: {
    category: "Vocabulary Practice",
    practice: VOCAB_PRACTICE
  }
}
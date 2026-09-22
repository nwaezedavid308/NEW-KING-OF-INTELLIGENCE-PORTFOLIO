export interface DesignProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  fallbackImage?: string;
  metrics: string[];
  tags: string[];
  link?: string;
}

export interface Belief {
  id: number;
  title: string;
  summary: string;
  elaboration: string;
}

export interface QuestionPrinciple {
  id: string;
  question: string;
  description: string;
  impact: string;
}

export interface MissionPillar {
  title: string;
  action: string;
  description: string;
  details: string[];
}

export interface HistoricalEra {
  era: string;
  technology: string;
  impact: string;
  currentParallel: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  roleOrIndustry: string;
  topic: string;
  message: string;
}

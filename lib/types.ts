// Core Type Definitions for IT Proposal Helper

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud?: string[];
}

export interface SubDomain {
  id: string;
  name: string;
  description: string;
  howItWorks?: string;
  features: string[];
  useCases: string[];
  clientQuestions?: string[];
  counterQuestions?: string[];
  caseStudies?: CaseStudy[];
}

export interface CaseStudy {
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  techUsed: string[];
  outcome: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  overview: string;
  businessProblemsSolved: string[];
  industries: string[];
  keyFeatures: string[];
  optionalFeatures: string[];
  techStack: TechStack;
  timelineEstimation: string;
  costEstimation: string;
  faqs?: FAQ[];
  counterQuestions?: string[];
  subDomains: SubDomain[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProposalFormData {
  clientName: string;
  industry: string;
  timeline: string;
  budget: string;
  notes: string;
  serviceId: string;
  serviceName: string;
  subDomainId?: string;
}

export interface GeneratedProposal {
  id: string;
  clientName: string;
  date: string;
  executiveSummary: string;
  problemUnderstanding: string;
  proposedSolution: string;
  featureBreakdown: string[];
  timeline: string;
  costRange: string;
  whyChooseUs: string;
  nextSteps: string[];
  fullContent: string;
}

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
  // Core client/project identifiers
  clientName: string; // Person or primary contact name
  clientCompany: string; // Company/organization name used in \"Prepared For\"
  projectName: string; // Used in \"[Project Name] Proposal\"

  // Document metadata
  documentVersion: string; // e.g. \"1.0\"
  proposalDate: string; // e.g. \"5 Dec, 2025\" - falls back to today's date if empty

  // High-level context
  industry: string;
  projectVisionSummary: string; // Short custom note feeding into \"Product Vision & Objective\"
  projectScopeSummary: string; // Optional free-text scope summary feeding into \"Scope Of Work\"

  // Commercials and timeline
  timeline: string;
  budget: string;

  // Additional notes/context
  notes: string;

  // Service mapping
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

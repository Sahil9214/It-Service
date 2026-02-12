import { ProposalFormData, GeneratedProposal, Service } from "./types";
import { formatDate, generateProposalId } from "./utils";

export function generateProposal(
  formData: ProposalFormData,
  service: Service,
): GeneratedProposal {
  const date = formatDate(new Date());
  const id = generateProposalId();

  const executiveSummary = `This proposal outlines a comprehensive ${service.name} solution for ${formData.clientName}. Our approach focuses on delivering a scalable, secure, and user-friendly platform that addresses the core business challenges in the ${formData.industry} industry.`;

  const problemUnderstanding = `${formData.clientName} operates in the ${formData.industry} sector and faces challenges including: ${service.businessProblemsSolved.join(", ")}. ${formData.notes ? `Additional context: ${formData.notes}` : ""}`;

  const proposedSolution = `We propose developing a ${service.name} platform that includes: ${service.overview}. The solution will be built using modern technologies including ${service.techStack.frontend.join(", ")} for frontend, ${service.techStack.backend.join(", ")} for backend, and ${service.techStack.database.join(", ")} for data management.`;

  const featureBreakdown = [
    ...service.keyFeatures.map((f) => `✓ ${f}`),
    ...service.optionalFeatures.map((f) => `○ ${f} (Optional)`),
  ];

  const whyChooseUs = `Our team brings extensive experience in ${service.name} development. We follow industry best practices, ensure code quality, and provide ongoing support. Our solutions are scalable, secure, and designed for long-term success.`;

  const nextSteps = [
    "Schedule a detailed requirement gathering session",
    "Finalize technical architecture and design",
    "Sign agreement and initiate development",
    "Regular sprint reviews and demos",
    "Testing, deployment, and handover",
  ];

  const fullContent = `
# IT Solution Proposal

**Prepared for:** ${formData.clientName}  
**Date:** ${date}  
**Proposal ID:** ${id}

---

## Executive Summary

${executiveSummary}

---

## Problem Understanding

${problemUnderstanding}

---

## Proposed Solution

${proposedSolution}

---

## Feature Breakdown

${featureBreakdown.join("\n")}

---

## Timeline

**Estimated Duration:** ${formData.timeline || service.timelineEstimation}

---

## Investment Range

**Budget:** ${formData.budget || service.costEstimation}

---

## Why Choose Us

${whyChooseUs}

---

## Next Steps

${nextSteps.map((step, i) => `${i + 1}. ${step}`).join("\n")}

---

**Thank you for considering our proposal. We look forward to partnering with ${formData.clientName}.**
  `.trim();

  return {
    id,
    clientName: formData.clientName,
    date,
    executiveSummary,
    problemUnderstanding,
    proposedSolution,
    featureBreakdown,
    timeline: formData.timeline || service.timelineEstimation,
    costRange: formData.budget || service.costEstimation,
    whyChooseUs,
    nextSteps,
    fullContent,
  };
}

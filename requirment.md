# IT Proposal Helper – Project Context Document

## 🎯 Project Purpose

This project is a **Personal IT Sales Assistant Web Application**.

It is built for **one person only** (internal use).
No login system is required.
No SaaS complexity.
No backend for now.

The goal is to:

- Help a non-technical IT sales person understand IT services
- Provide structured knowledge during client calls
- Reduce fear and hesitation during discussions
- Provide ready-to-use counter questions
- Instantly generate structured proposals
- Allow editing and sharing via PDF, Email, and WhatsApp

---

## 🧠 Core Problem This App Solves

The sales person has:

- Very limited technical knowledge
- Difficulty explaining IT services
- Trouble answering technical client questions
- Manual effort in writing proposals
- Fear during live client calls

This system must act like:

> A structured IT knowledge brain + proposal assistant

---

## 🏗 System Constraints

- Frontend-only
- JSON-based data
- No authentication
- Desktop-first
- Expandable in future
- Clean and minimal UI
- Minimal navigation movement

---

## 📚 All IT Service Categories To Be Included

The platform must cover all major IT domains.

### 1️⃣ Industry-Based Services

- FinTech
- EdTech
- HealthTech
- InsurTech
- LegalTech
- PropTech
- AgriTech
- TravelTech
- RetailTech
- HRTech
- GovTech
- MediaTech
- GamingTech
- Logistics & Supply Chain Tech
- E-Commerce Solutions
- SaaS Platforms
- Marketplace Platforms
- Enterprise Software
- CRM Systems
- ERP Systems

---

### 2️⃣ Technology-Based Services

- Web Application Development
- Mobile App Development
- SaaS Development
- AI & Machine Learning
- Data Analytics
- Big Data Systems
- Blockchain & Web3
- Cloud & DevOps
- Cybersecurity
- IoT Systems
- AR / VR Solutions
- Automation Systems
- Chatbot Development
- API Development
- System Integration
- CMS Development
- Payment Gateway Integration

---

## 📂 Required Data Structure

All services must follow this structure:

```json
{
  "id": "",
  "name": "",
  "shortDescription": "",
  "overview": "",
  "businessProblemsSolved": [],
  "industries": [],
  "keyFeatures": [],
  "optionalFeatures": [],
  "basicTechStack": [],
  "faqs": [],
  "counterQuestions": [],
  "subDomains": []
}
```

Each Subdomain must contain:

```json
{
  "id": "",
  "name": "",
  "description": "",
  "howItWorks": "",
  "features": [],
  "useCases": [],
  "clientQuestions": [],
  "counterQuestions": [],
  "caseStudies": []
}
```

Each Case Study must contain:

```json
{
  "title": "",
  "clientType": "",
  "problem": "",
  "solution": "",
  "techUsed": [],
  "outcome": ""
}
```

---

## 🧭 UI Flow Requirements

1. Home → Service List
2. Service Detail Page
3. Subdomain Expand View (prefer accordion or side panel)
4. Case Study Section
5. Proposal Form
6. Proposal Editor
7. PDF / Email / WhatsApp sharing

---

## 🧠 Sales Support Requirement

For each service and subdomain:

The system must include:

- Basic explanation (non-technical)
- Business value explanation
- Simple tech stack explanation
- Common client questions (worldwide)
- Counter-questions to ask clients
- Case studies for credibility

The content should help the sales person sound confident.

---

## 📝 Proposal Generation Logic

The proposal structure must include:

- Executive Summary
- Problem Understanding
- Proposed Solution
- Feature Breakdown
- Timeline
- Cost Range
- Why Choose Us
- Next Steps

The system must generate this from selected service + subdomain + form input.

AI integration will be added later.

---

## 🎨 Design Requirements

- Minimal movement between pages
- Clean white UI
- Soft gray sections
- Professional internal tool feel
- No flashy colors
- Desktop-first layout

---

## 🔮 Future Scalability

This system must allow:

- Adding more services
- Adding more subdomains
- Adding new case studies
- Adding FAQs
- Adding new proposal templates

Without rewriting UI logic.

---

# END OF PROJECT CONTEXT

---

# ✅ Why This Is Powerful

Ab Kiro ko:

- Emotional goal pata hai
- UX priority pata hai
- All service domains pata hai
- Data structure pata hai
- System boundaries clear hai
- Overengineering nahi karega

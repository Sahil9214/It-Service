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

## 📚 All IT Service Categories Included

The platform covers all major IT domains:

### 1️⃣ Industry-Based Services

- FinTech
- EdTech
- HealthTech
- E-Commerce Solutions
- SaaS Platforms
- PropTech
- HRTech
- Logistics & Supply Chain Tech
- Cybersecurity

---

## 📂 Data Structure

All services follow this structure:

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
  "techStack": {},
  "faqs": [],
  "counterQuestions": [],
  "subDomains": []
}
```

---

## 🧭 UI Flow

1. Home → Service List (Grid)
2. Service Detail Page (All info + Subdomains)
3. Subdomain Accordion View
4. Proposal Form
5. Proposal Editor (Rich Text)
6. PDF / Email / WhatsApp sharing

---

## 🎨 Design

- Minimal movement between pages
- Clean white UI
- Soft gray sections
- Professional internal tool feel
- Desktop-first layout

---

## 🔮 Future Scalability

This system allows:

- Adding more services
- Adding more subdomains
- Adding new case studies
- Adding FAQs
- Adding new proposal templates

Without rewriting UI logic.

---

## ✅ Implementation Complete

All core features have been implemented:

- Service listing with grid layout
- Dynamic service detail pages
- Subdomain accordion with full details
- Proposal form with client information
- Rich text editor for proposal customization
- PDF download, WhatsApp, and Email sharing
- Clean, professional UI
- Fully typed with TypeScript
- Production-ready build

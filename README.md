# IT Proposal Helper 🚀

A personal IT sales assistant web application built with Next.js to help non-technical sales professionals understand IT services and generate professional proposals.

## Features ✨

- **Service Browser**: Browse 10+ IT service categories with detailed information
- **Service Details**: Comprehensive information about each service including:
  - Business problems solved
  - Key features and optional features
  - Technology stack
  - Timeline and cost estimations
  - Target industries
- **Subdomain Explorer**: Expandable accordion view for service subdomains with case studies
- **Proposal Generator**: Create professional proposals with a simple form
- **Rich Text Editor**: Edit and customize proposals with formatting options
- **Multi-Channel Sharing**:
  - Download as PDF
  - Share via WhatsApp
  - Share via Email

## Tech Stack 🛠

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rich Text**: TipTap Editor
- **PDF Generation**: jsPDF + html2canvas
- **Data**: JSON-based (no backend required)

## Project Structure 📁

```
it-service/
├── app/
│   ├── page.tsx                    # Home page with service grid
│   ├── services/[id]/page.tsx      # Dynamic service detail page
│   ├── proposal/
│   │   ├── form/page.tsx           # Proposal form
│   │   └── editor/page.tsx         # Proposal editor with rich text
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ServiceCard.tsx             # Service card component
│   ├── SubDomainAccordion.tsx      # Subdomain accordion
│   ├── ProposalForm.tsx            # Proposal form component
│   ├── RichTextEditor.tsx          # TipTap rich text editor
│   └── ShareButtons.tsx            # PDF/WhatsApp/Email sharing
├── lib/
│   ├── types.ts                    # TypeScript type definitions
│   ├── services.ts                 # Service data utilities
│   ├── proposalGenerator.ts        # Proposal generation logic
│   └── utils.ts                    # Utility functions
└── public/
    └── src/json/
        └── service.json            # Service data (10 services)
```

## Getting Started 🏁

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository

```bash
cd it-service
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Usage Guide 📖

### 1. Browse Services

- Open the app to see a grid of all IT services
- Each card shows service name, description, industries, timeline, and cost

### 2. View Service Details

- Click any service card to see full details
- Scroll through overview, problems solved, features, tech stack
- Expand subdomains to see detailed information and case studies

### 3. Create Proposal

- Click "Create Proposal" button on service detail page
- Fill in client information:
  - Client Name (required)
  - Industry (required)
  - Timeline (optional)
  - Budget (optional)
  - Additional Notes (optional)
- Click "Generate Proposal"

### 4. Edit Proposal

- Proposal is auto-generated based on service and form data
- Use rich text editor to customize content
- Format text with bold, italic, headings, lists
- Undo/redo changes

### 5. Share Proposal

- **Download PDF**: Generates PDF from proposal content
- **WhatsApp**: Opens WhatsApp with pre-filled message
- **Email**: Opens email client with subject and body

## Data Management 📊

### Adding New Services

Edit `public/src/json/service.json`:

```json
{
  "services": [
    {
      "id": "unique-id",
      "name": "Service Name",
      "shortDescription": "Brief description",
      "overview": "Detailed overview",
      "businessProblemsSolved": ["Problem 1", "Problem 2"],
      "industries": ["Industry 1", "Industry 2"],
      "keyFeatures": ["Feature 1", "Feature 2"],
      "optionalFeatures": ["Optional 1"],
      "techStack": {
        "frontend": ["Next.js"],
        "backend": ["Node.js"],
        "database": ["MongoDB"]
      },
      "timelineEstimation": "8-12 weeks",
      "costEstimation": "₹5L - ₹10L",
      "counterQuestions": ["Question 1"],
      "subDomains": []
    }
  ]
}
```

### Adding Subdomains

Add to the `subDomains` array:

```json
{
  "id": "subdomain-id",
  "name": "Subdomain Name",
  "description": "Description",
  "howItWorks": "Explanation",
  "features": ["Feature 1"],
  "useCases": ["Use case 1"],
  "counterQuestions": ["Question 1"],
  "caseStudies": [
    {
      "title": "Case Study Title",
      "clientType": "Client Type",
      "problem": "Problem statement",
      "solution": "Solution provided",
      "techUsed": ["Tech 1"],
      "outcome": "Results achieved"
    }
  ]
}
```

## Customization 🎨

### Styling

- Edit `app/globals.css` for global styles
- Tailwind classes used throughout components
- Color scheme: White background, gray accents, blue CTAs

### Proposal Template

- Edit `lib/proposalGenerator.ts` to customize proposal structure
- Modify sections, add new fields, change formatting

## Future Enhancements 🔮

Potential additions:

- AI-powered proposal generation
- Multi-language support
- Proposal templates library
- Client database
- Proposal history
- Analytics dashboard
- Mobile app version

## Notes 📝

- This is a frontend-only application
- No authentication required (personal use)
- Data stored in JSON file (no database)
- SessionStorage used for form data between pages
- Desktop-first design (responsive for mobile)

## Support 💬

For questions or issues, refer to the PROJECT_BRIEF.md for detailed context.

---

Built with ❤️ for IT sales professionals
# It-Service

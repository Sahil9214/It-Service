# Quick Start Guide 🚀

## Start Development Server

```bash
npm run dev
```

Then open: http://localhost:3000

## Project Flow

1. **Home Page** (`/`)
   - Shows grid of all IT services
   - Click any card to view details

2. **Service Detail** (`/services/[id]`)
   - Full service information
   - Expandable subdomains
   - "Create Proposal" button in sidebar

3. **Proposal Form** (`/proposal/form?service=[id]`)
   - Fill client details
   - Click "Generate Proposal"

4. **Proposal Editor** (`/proposal/editor?service=[id]`)
   - Edit generated proposal
   - Share via PDF/WhatsApp/Email

## Key Files to Know

### Data

- `public/src/json/service.json` - All service data

### Pages

- `app/page.tsx` - Home page
- `app/services/[id]/page.tsx` - Service details
- `app/proposal/form/page.tsx` - Proposal form
- `app/proposal/editor/page.tsx` - Proposal editor

### Components

- `components/ServiceCard.tsx` - Service grid cards
- `components/SubDomainAccordion.tsx` - Expandable subdomains
- `components/ProposalForm.tsx` - Client info form
- `components/RichTextEditor.tsx` - TipTap editor
- `components/ShareButtons.tsx` - PDF/WhatsApp/Email

### Logic

- `lib/services.ts` - Service data functions
- `lib/proposalGenerator.ts` - Proposal generation
- `lib/types.ts` - TypeScript types

## Adding New Service

1. Open `public/src/json/service.json`
2. Add new service object to `services` array
3. Follow the existing structure
4. Save and refresh browser

## Customizing Proposals

Edit `lib/proposalGenerator.ts`:

- Modify `executiveSummary`
- Change `proposedSolution` format
- Add new sections
- Customize `fullContent` template

## Styling Changes

- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Colors: Modify Tailwind classes in components

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript errors

```bash
# Check types
npx tsc --noEmit
```

## Current Services (10)

1. EdTech Solutions
2. FinTech Solutions
3. HealthTech Solutions
4. E-Commerce Platforms
5. SaaS Development
6. AI & Machine Learning
7. Logistics & Supply Chain
8. PropTech Solutions
9. HRTech Solutions
10. Cybersecurity Solutions

---

Happy coding! 🎉

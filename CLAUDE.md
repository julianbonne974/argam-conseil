# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Argam Conseil** - Financial advisory website for hospital civil servants in La Réunion, focusing on retirement planning (PER - Plan Épargne Retraite).

**Target audience**: Hospital civil servants in La Réunion
**Key message**: The 53% cost-of-living bonus (prime de vie chère) is not included in retirement calculations
**Partnership**: COGOHR (Comité des Œuvres Sociales des Hôpitaux de La Réunion)

## Tech Stack

- **Next.js 15.5.4** with App Router (static export for Netlify)
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS v4** (@tailwindcss/postcss)
- **shadcn/ui** components with custom Argam brand colors
- **Sonner** for toast notifications
- **Lucide React** for icons
- **Framer Motion** for animations
- **Netlify** deployment with Forms integration

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Production build (static export)
npm run build

# Start production server locally
npm start

# Lint
npm run lint
```

## Installing shadcn/ui Components

The project requires these shadcn/ui components:

```bash
npx shadcn-ui@latest add button input label select textarea checkbox radio-group card badge separator accordion tabs tooltip toast
```

## Architecture

### Single-Page Application Structure

The site is a single-page application with 9 sections in order:
1. **Header** - Fixed navigation with mobile burger menu
2. **Hero Section** - Alert about 53% bonus not counted in retirement
3. **COGOHR Offer** - Exclusive benefits (free study + 0% entry fees)
4. **ProcessTabs** - 3-step process (Diagnosis → Solution → Follow-up)
5. **AvantagesCards** - 3 benefit cards
6. **About** - 3 info cards (Founded 2021, 8 experts, La Réunion presence)
7. **FAQ** - 5 questions with Accordion
8. **ContactForm** - Lead capture form with validation
9. **Footer** - 3-column responsive footer

### Key Files

```
app/
├── layout.tsx          # Global layout with Toaster + hidden Netlify form
├── page.tsx            # Main single-page with all 9 sections
├── globals.css         # Tailwind + custom CSS variables
└── api/
    └── contact/
        └── route.ts    # Netlify Forms proxy endpoint

components/
├── ui/                 # shadcn/ui components (14 total)
├── Header.tsx          # Fixed header with smooth scroll
├── Footer.tsx          # 3-column footer
├── LogoSVG.tsx         # "AC" logo in golden-brown circle
├── COGOHRBadge.tsx     # Partner badge with tooltip (2 variants)
├── ProcessTabs.tsx     # 3-tab process with progress indicator
├── AvantagesCards.tsx  # 3 benefit cards with hover effects
├── FAQSection.tsx      # Accordion FAQ (5 Q&A)
└── ContactFormModern.tsx  # Form with real-time validation

hooks/
└── useFormToast.ts     # Toast notifications (success/error/info)

lib/
└── utils.ts            # cn() utility for Tailwind class merging
```

## Brand Colors (Argam Conseil)

Primary color palette defined in `app/globals.css`:

- **Primary**: Golden-brown `hsl(36, 36%, 54%)` - #b4925e
- **Secondary**: Aubergine grey `hsl(261, 10%, 33%)` - #524c5d
- **Accent**: Light golden `hsl(36, 36%, 64%)`
- Additional: Blue #0891b2, Green #10b981, Red #dc2626, Grey #64748b

## Netlify Configuration

### Static Export Setup

`next.config.js` must use:
```javascript
output: 'export',
images: { unoptimized: true }
```

### Netlify Forms Integration

1. **Hidden form** in `app/layout.tsx` with `data-netlify="true"`
2. **API route** at `app/api/contact/route.ts` to proxy submissions
3. Form fields: name, email, phone, fonction (select), meetingType (radio), message (textarea), isCogohrMember (checkbox)

### Deployment

`netlify.toml` configuration:
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`
- Node version: 18

## Component Patterns

### Form Validation

Use real-time validation with error states:
- **Name**: min 2 characters
- **Email**: valid email format
- **Phone**: French format (06 XX XX XX XX or +262...)
- **Fonction**: required select dropdown

### Toast Notifications

Use `useFormToast()` hook with Sonner:
- **Info toast**: during submission (infinite duration)
- **Success toast**: 5s duration with green icon
- **Error toast**: 8s duration with red icon + support phone

### Smooth Scrolling

Navigation links use anchor IDs:
- `#accueil` → Hero
- `#processus` → ProcessTabs
- `#avantages` → AvantagesCards
- `#faq` → FAQ
- `#contact` → ContactForm

CSS: `html { scroll-behavior: smooth; }`

### Responsive Breakpoints

- **Mobile**: < 640px (base)
- **sm**: 640px (tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops) - trigger for burger menu
- **xl**: 1280px (large desktops)

### Hover Effects

Standard pattern for interactive elements:
- Buttons: `hover:scale-105 hover:shadow-xl`
- Cards: `hover:scale-[1.02] hover:shadow-xl`
- AvantagesCards: animated bottom border on hover

## Custom Components Guidelines

### COGOHRBadge

Two variants:
- **Standard**: Simple badge with Shield icon
- **Animated**: With pulse + ping animations (for hero/header)

### ProcessTabs

- 3 tabs with large 64px icons
- Gradient backgrounds (different per tab)
- Bullet points with CheckCircle2 icons
- Progress indicator (3 bars, active in primary color)
- CTA box at bottom

### ContactFormModern

7 fields with validation + toast notifications:
- Resets after successful submission
- Shows inline error messages
- Disabled state during submission
- Privacy notice below submit button

## SEO Configuration

Set in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Argam Conseil - Plan Épargne Retraite Fonctionnaires La Réunion',
  description: 'Compensez la perte de votre prime de vie chère de 53%...',
  keywords: 'PER, Plan Épargne Retraite, Fonctionnaires, La Réunion, COGOHR...',
  openGraph: { ... }
}
```

## Important Notes

- Site is fully static (no SSR) for Netlify hosting
- Single-page application - all content in `app/page.tsx`
- Header is fixed position and follows scroll
- Mobile menu appears at `< 1024px` breakpoint
- All form submissions go through Netlify Forms
- Use Inter font family throughout
- Target Lighthouse score > 90 for performance
- Ensure full a11y compliance

## Content Requirements

### Hero Section Stats
- Current income: 3,000€ (green)
- Retirement pension: 1,400€ (red)
- Monthly loss: up to 1,600€

### FAQ (5 Questions)
1. Why isn't the cost-of-living bonus counted?
2. What is a PER (Plan Épargne Retraite)?
3. Why choose Argam Conseil?
4. How much should I save per month?
5. Is the COGOHR offer really free?

### Contact Information
- Phone: 05 33 89 14 00
- Email: contact@argamconseils.com
- Locations: Bordeaux (HQ) + Trois-Bassins, La Réunion
- ORIAS: 20194827
- SIRET: 800 527 824
- Capital social: 217 600 €
- Carte professionnelle: CPI 3301 2021 000 004 612
- Garant financier: GALIAN Assurances
- Regulatory: ANCACOFI-CIF, Médiateur AMF

## Testing Checklist

Before deployment:
- [ ] Test responsive on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Validate form with all error cases
- [ ] Test toast notifications (success/error/info)
- [ ] Verify smooth scroll navigation
- [ ] Test Netlify Forms after deployment
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Verify a11y with screen reader
- [ ] Test mobile burger menu animation

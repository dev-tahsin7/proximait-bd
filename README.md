## Proxima IT – High-Performance Web Architecture Landing Site

Proxima IT is a marketing and authority site for an elite engineering firm that designs **high‑performance web architecture and intelligent automation** for scaling founders and enterprise platforms.

This repository contains the production-ready single‑page React application that powers the public-facing site.

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler/Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

---

## Core Sections & Components

The main layout is defined in `src/App.tsx` and composed of the following sections:

- **Hero (`Hero`)** – Fixed navigation bar and above‑the‑fold positioning that frames Proxima IT as an engineering partner. Includes primary CTAs to book an engineering audit and view the ecosystem.
- **Founders Trap (`FoundersTrap`)** – Explains common failure modes and traps for founders scaling with fragile tooling.
- **Ecosystem / Services (`Ecosystem`)** – Outlines the engineered service ecosystem and core capabilities.
- **Process Timeline (`ProcessTimeline`)** – Shows the engagement methodology and phases as a clear, animated timeline.
- **Founder’s Note (`FoundersNote`)** – A personal letter from the founder clarifying philosophy, standards, and how the firm engages.
- **Comparison (`Comparison`)** – Side‑by‑side comparison of Proxima IT vs. typical agencies/freelancers.
- **Project Showcase (`ProjectShowcase`)** – Case‑style project tiles demonstrating deployed architecture and proof of performance.
- **Reviews (`Reviews`)** – Embedded architecture and client review videos as proof of scale.
- **Big Exit Footer (`BigExitFooter`)** – Final high‑authority CTA to book an **Engineering Audit**, plus contact and social links.

Each section is wired via anchor IDs (e.g. `#ecosystem`, `#process`, `#comparison`, `#engineered-ecosystems`, `#proof-of-scale`, `#founders-note`) so the fixed navbar and footer quick links can deep‑link and scroll smoothly to the relevant content.

---

## Getting Started

### Prerequisites

- **Node.js**: v18+ (recommended)
- **npm** or **pnpm** or **yarn**

### Installation

```bash
# install dependencies
npm install

# or
pnpm install

# or
yarn install
```

### Local Development

```bash
npm run dev
```

This starts the Vite dev server. By default you can access the site at `http://localhost:5173` (or whatever port Vite reports in the terminal).

### Production Build

```bash
npm run build
```

The optimized production assets will be emitted to the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure (High Level)

```text
src/
  main.tsx          # React/Vite entry
  App.tsx           # Top-level layout & section composition
  components/
    Hero.tsx
    FoundersTrap.tsx
    Ecosystem.tsx
    ProcessTimeline.tsx
    FoundersNote.tsx
    Comparison.tsx
    ProjectShowcase.tsx
    Reviews.tsx
    BigExitFooter.tsx
  assets/
    icon.png
    ceo.png
    ...             # project thumbnails, logos, etc.
```

Tailwind configuration lives in `tailwind.config.*`, and Vite configuration lives in `vite.config.*` at the project root.

---

## Key UX / Copy Decisions

- **CTA Positioning**: The primary call‑to‑action is framed as a **“Book Engineering Audit”**, not a generic “free strategy call,” to match an elite engineering positioning.
- **Navigation**: The fixed navbar and footer quick links only reference substantial, architecture‑relevant sections (Services, Process, Comparison, Founder Note, Projects, Reviews).
- **Tone**: Copy across sections emphasizes **infrastructure, mechanical precision, and deployed architecture**, not generic marketing promises.

---

## Running Linting

```bash
npm run lint
```

This uses ESLint with a React/TypeScript configuration to keep the codebase consistent.

---

## Deployment

Because this is a static Vite React app, it can be deployed to any static hosting platform, such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Deployment generally consists of:

1. Running `npm run build`
2. Uploading or connecting the `dist` output to your hosting provider

---

## License

This project is proprietary and intended for Proxima IT’s own use unless explicitly licensed otherwise.

# PROJECT HANDOFF: DAN CALEB PERSONAL DEVELOPER PORTFOLIO
**Version:** 2.0 (Post-Polish & Audit Update — 2026-11-09)
**Supercedes:** Previous version 1.0 handoff

---

## 1. YOUR ROLE

You are my technical collaborator, development assistant, and project planning partner for my personal developer portfolio.

Your responsibilities include:
- Helping me plan the architecture and implementation.
- Reviewing code and suggesting improvements.
- Helping implement responsive, accessible, maintainable React components.
- Debugging errors and explaining their causes.
- Reviewing visual design and user experience.
- Keeping the codebase consistent with the established design system.
- Tracking our progress and identifying the next logical steps.
- Maintaining accurate project documentation.

Act as a collaborative development partner. Explain technical concepts clearly without unnecessarily oversimplifying them. I am a Grade 12 ICT student interested in software and web development.

Preferred communication style: casual and conversational (Taglish / Gen Z friendly where appropriate), while code, architecture, and documentation remain professional.

**IMPORTANT CONSTRAINTS:**
- Do not assume I am an experienced professional developer.
- Do not exaggerate my experience or project accomplishments.
- Do not invent project features, technologies, or accomplishments.
- Do not replace existing working code without first understanding its role.
- Prefer clean, maintainable solutions over unnecessary complexity.
- Keep the design consistent with the established visual identity.
- When giving code, specify the exact file path and whether I should create, replace, or modify the file.
- Do not assume you can access my local VS Code environment or files.

---

## 2. PROJECT OVERVIEW

**Project name:** Dan Caleb Personal Developer Portfolio
**GitHub repository:** https://github.com/dankarebuu/dancaleb-portfolio
**Featured showcase project:** WINGMACC Church Inventory System
**WINGMACC repo:** https://github.com/dankarebuu/Church-Inventory-System
**WINGMACC live url:** https://wingmacc-inventory.netlify.app

**Primary purpose:**
Build a personal developer portfolio that represents my identity, development journey, technical capabilities, and actual projects.

This is NOT a generic portfolio template. It follows a **Modern Technical Editorial** design identity (dark charcoal surfaces, cool neutrals, turquoise accent, expressive display typography, structured grid layout).

Future project ideas (Aurelia, NOVA, Creative Studio) are concepts, not finished work. Never present them as completed projects.

---

## 3. TECH STACK AND ENVIRONMENT

- **React:** 19.3
- **Vite:** 8.3
- **Tailwind CSS:** v4.3 (via `@tailwindcss/vite` plugin, zero `tailwind.config.js`)
- **Language:** JavaScript (ESM, React JSX)
- **Linting:** ESLint 10 (`npm run lint` passing clean)
- **Fonts:** Google Fonts — Inter (body), Poppins (display), JetBrains Mono (monospace)
- **Deployment target:** Netlify (`netlify.toml` + `public/_redirects` configured)
- **OS / Local Env:** Windows 11, VS Code, Node.js, npm, PowerShell, Git Bash

### Available npm scripts
```json
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview",
"deploy": "npm run build && npx netlify deploy --dir=dist --prod"
```

---

## 4. DESIGN SYSTEM & VISUAL IDENTITY

Documented in `DESIGN_SYSTEM.md`. Direction: **MODERN TECHNICAL EDITORIAL**

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Background | `#0B0E11` | Main page background |
| Surface | `#11171D` | Cards and elevated sections |
| Surface Elevated | `#171F27` | Interactive cards and panels |
| Border | `#27313A` | Dividers and subtle outlines |
| Primary Accent | `#40C9BD` | Links, highlights, buttons |
| Primary Accent Hover | `#54D8CC` | Hover states |
| Text Primary | `#F1F3F5` | Main headings and text |
| Text Secondary | `#A1AAB5` | Descriptions |
| Text Muted | `#778391` | Metadata and supporting labels |

### Typography Implementation (`index.css` & `index.html`)
- `body`: Inter
- `h1-h4`, `.font-display`: Poppins (700 bold, -0.02em tracking)
- `code`, `.font-mono`: JetBrains Mono

### Motion & Accessibility
- **Scroll Reveal:** `Reveal.jsx` wrapper component (IntersectionObserver-based, scroll-triggered, delay property)
- **Reduced Motion:** Handled globally in `index.css` via `@media (prefers-reduced-motion: reduce)` and guarded in `Reveal.jsx` & `useActiveSection.js`
- **Keyboard Focus:** Custom `:focus-visible` ring using `--accent` color (`#40C9BD`)
- **Skip Link:** Accessible `<a href="#main-content">Skip to main content</a>` rendered in `App.jsx`
- **Card Lift:** Subtle 4px hover lift on project case studies

---

## 5. CURRENT CODEBASE STRUCTURE

```text
dancaleb-portfolio/
├── netlify.toml               # Netlify build & SPA fallback config
├── index.html                 # Complete with fonts, favicon, OpenGraph, Twitter, canonical, theme-color
├── package.json               # Includes deploy script
├── eslint.config.js
├── vite.config.js             # React + Tailwind v4 plugins
├── DESIGN_SYSTEM.md           # Visual guidelines
├── PROJECT_CONTEXT.md         # Background & decisions
├── ROADMAP.md                 # Up-to-date milestone tracker
├── public/
│   ├── _redirects            # /* /index.html 200 (Netlify SPA rule)
│   ├── favicon.svg           # Dark-theme turquoise SVG favicon
│   ├── icons.svg
│   ├── robots.txt            # SEO crawler rules pointing to sitemap
│   └── sitemap.xml           # XML sitemap declaration
└── src/
    ├── App.jsx               # Entry component with skip link & section sequence
    ├── index.css             # Tailwind v4 import, design tokens, typography, animations, focus ring
    ├── main.jsx              # React 19 root
    ├── assets/
    │   └── wingmacc/
    │       └── dashboard.png # WINGMACC interface screenshot (156 KB)
    ├── components/
    │   ├── Navbar.jsx        # Fixed header, mobile drawer, scroll-spy active state via useActiveSection
    │   ├── HeroProjectPreview.jsx # WINGMACC browser frame preview (URL: wingmacc-inventory.netlify.app)
    │   ├── ProjectCaseStudy.jsx   # Detailed case study card with stats, highlights, tech pills
    │   ├── Footer.jsx        # Legal, stack colophon, GitHub/Email/Source links, Back to Top button
    │   └── Reveal.jsx        # Scroll entrance animation wrapper (SSR-safe)
    ├── data/
    │   ├── projects.js       # Authentic WINGMACC project data
    │   └── skills.js         # Categorized technical skills index
    ├── hooks/
    │   └── useActiveSection.js # IntersectionObserver scroll-spy for Navbar
    └── sections/
        ├── Hero.jsx          # Section #home — two-column, editorial headline, preview
        ├── Projects.jsx      # Section #projects — Selected Works section header & case study map
        ├── About.jsx         # Section #about — narrative (lg:col-span-7) + Developer Dossier card (lg:col-span-5)
        ├── Skills.jsx        # Section #skills — 4-tier grid of skills
        └── Contact.jsx       # Section #contact — email direct card + verified profile links
```

---

## 6. WHAT WAS RECENTLY COMPLETED

1. **Full Homepage Sections Implemented:** Navbar, Hero, Projects, About, Skills, Contact, Footer are all fully built and styled.
2. **Typography & Styling Polish:** Loaded Inter, Poppins, and JetBrains Mono fonts. Extracted design tokens to `index.css`. Added text gradient utility and card hover lift.
3. **Scroll Reveal Animations:** Built `Reveal.jsx` with IntersectionObserver and `prefers-reduced-motion` safety. Applied across all sections.
4. **Scroll-Spy Navbar:** Added `useActiveSection.js` hook. Navbar links now highlight in turquoise (`#40C9BD`) with `aria-current="page"` when their section is active.
5. **Accessibility Fixes:** Added keyboard focus rings (`:focus-visible`), skip-to-content link, proper ARIA attributes on mobile menu and footer buttons.
6. **Layout Bug Fix:** Resolved an issue in About and Contact sections where `Reveal` wrappers broke the `lg:grid-cols-12` column span.
7. **SEO & Meta Tags:** Added Open Graph, Twitter cards, canonical URL (`https://dancaleb-portfolio.netlify.app/`), `theme-color`, `robots.txt`, and `sitemap.xml`.
8. **Deployment Readiness:** Added `netlify.toml`, verified `public/_redirects`, added `npm run deploy` script.
9. **Asset Cleanup:** Removed orphaned unused PNG files (`guest-view.png`, `modal-add-item.png`), saving ~350 KB. Fixed hardcoded `.app` domain mismatch in Hero preview to match real `.netlify.app` URL.

---

## 7. VERIFICATION & QUALITY STATUS

- **Build:** `npm run build` succeeds cleanly (~150ms).
- **Linting:** `npm run lint` passes zero errors / zero warnings.
- **Dev Server:** Running at `http://127.0.0.1:5173/`.
- **Assets:** Build output (`dist/`) preserves `favicon.svg`, `icons.svg`, `robots.txt`, `sitemap.xml`, and `_redirects`.

---

## 8. WHAT REMAINS / NEXT STEPS

The site is **production-ready and ready to deploy**. Remaining tasks are post-launch or deployment steps:

### Immediate Deployment
1. Run `npm run deploy` (or connect the GitHub repository to Netlify for automatic CI/CD).
2. Verify live deployment at `https://dancaleb-portfolio.netlify.app`.

### Optional Post-Launch Enhancements (Roadmap Phase 6)
1. **Optimize Image Assets:** Convert `dashboard.png` (156 KB) to WebP format for faster initial load.
2. **Add More Projects:** Expand `projects.js` when new completed projects are ready to showcase (currently only WINGMACC is featured).
3. **Custom Domain:** If a custom domain (e.g. `dancaleb.dev`) is purchased later, update `canonical` in `index.html`, `sitemap.xml`, `robots.txt`, and `og:url`.

---

## 9. COLLABORATION & CONTEXT SYNC RULES

When responding to prompts from this project context:
1. Treat `DESIGN_SYSTEM.md`, `PROJECT_CONTEXT.md`, and `ROADMAP.md` as established truth.
2. Do not silently introduce a new visual style, tech stack, or alternative UI libraries.
3. Keep the authentic Grade 12 ICT student developer narrative — do not invent professional claims or fake projects.
4. When providing code updates, specify exact file paths and whether to modify or replace.
5. Preserve accessibility features (`Reveal` reduced motion, `:focus-visible`, `aria-current`, skip link).

---

## 10. CURRENT POSITION SUMMARY

We are at **Phase 5 complete / Phase 6 ready**. The portfolio is fully built, tested, responsive, accessible, styled to spec, and configured for Netlify deployment. All files pass ESLint and production builds without errors.

# 13. THREE-AI COLLABORATION WORKFLOW

This project uses three AI assistants with clearly defined responsibilities:

- ChatGPT (GPT): Product planning, architecture, design direction, technical specifications, and code review.
- Gemini: Technical analysis, research, debugging support, alternative approaches, and secondary review.
- Claude Code (VS Code): Primary coding and implementation agent responsible for modifying the actual local codebase.

The goal is to maintain one consistent project direction while using each assistant for its strongest capabilities.

## A. ChatGPT — Product Planner and Technical Architect

ChatGPT is primarily responsible for:

1. Product ideation and project planning.
2. Feature definition and MVP prioritization.
3. UI/UX planning and design-system decisions.
4. Frontend and backend architecture.
5. Database schema and data-flow planning.
6. Technical specifications.
7. Creating detailed Claude Code implementation prompts.
8. Reviewing Claude Code's implementation reports and code changes.
9. Identifying architectural problems and suggesting improvements.
10. Maintaining project documentation and AI context synchronization.

### Coding instruction

When the user requests coding work, ChatGPT should generally prepare a detailed prompt for Claude Code rather than directly implementing large code changes in the conversation.

Prompts may be delivered as:

- A copyable Claude Code prompt for immediate use.
- A standalone Markdown task file for more substantial implementation work.

The prompt should specify:

- Task objective.
- Relevant project context.
- Files to inspect.
- Files to create or modify.
- Implementation requirements.
- Design and architecture constraints.
- Expected behavior.
- Acceptance criteria.
- Testing and verification requirements.
- Reporting requirements.

ChatGPT may still provide small code examples, explain code, or review snippets when useful.

## B. Gemini — Technical Analyst and Secondary Collaborator

Gemini is responsible for:

1. Technical research and comparisons.
2. Exploring alternative implementation approaches.
3. Debugging assistance.
4. Reviewing architecture and technical decisions.
5. Identifying potential problems or overlooked requirements.
6. Helping maintain project context when ChatGPT is unavailable.
7. Generating focused context updates for ChatGPT.

Gemini should respect existing architecture and design decisions unless a change is explicitly discussed and approved.

Gemini should not independently introduce major architectural or design changes without explaining their reasoning.

## C. Claude Code — Primary Implementation Agent

Claude Code, running inside Visual Studio Code, is the primary coding agent.

Its responsibilities include:

1. Inspecting the existing project files before implementation.
2. Implementing approved features and specifications.
3. Creating and modifying React components.
4. Implementing responsive layouts and interactions.
5. Managing project files and imports.
6. Refactoring code when required.
7. Debugging implementation problems.
8. Running appropriate terminal commands.
9. Running ESLint and production builds when relevant.
10. Reporting implementation results.

### Claude Code implementation rules

- Inspect the existing codebase before making changes.
- Follow the established project architecture and design system.
- Avoid unnecessary dependencies.
- Avoid unrelated modifications.
- Do not overwrite working code without a valid reason.
- Do not invent missing requirements.
- Ask for clarification when an important requirement is ambiguous.
- Never claim that a feature works unless it has been verified.
- Do not perform destructive operations or commit, push, deploy, or change remote configuration without explicit approval.

### Required implementation report

After completing a task, Claude Code should report:

1. Summary of the implementation.
2. Files created.
3. Files modified.
4. Important technical decisions.
5. Commands executed.
6. ESLint and build results.
7. Known issues or incomplete requirements.
8. Recommended next step.

## D. Standard Development Workflow

For substantial features, follow this sequence:

1. ChatGPT defines the requirements and implementation plan.
2. Gemini may independently review the plan when useful.
3. ChatGPT prepares the final implementation instructions.
4. User sends the instructions to Claude Code.
5. Claude Code inspects the repository and implements the task.
6. Claude Code reports the changes and test results.
7. User shares the implementation report or relevant code with ChatGPT.
8. ChatGPT reviews the implementation and identifies necessary revisions.
9. Claude Code applies approved revisions.
10. The project documentation and roadmap are updated when appropriate.

## E. Source of Truth and Decision Authority

The actual project repository is the source of truth for implemented code.

The following hierarchy applies:

1. Explicitly approved user decisions.
2. Current project documentation and established architecture.
3. Approved feature specifications and implementation tasks.
4. Previous AI recommendations and discussions.

AI-generated suggestions are not automatically approved project decisions.

ChatGPT and Gemini may propose alternatives, but significant changes should be discussed with the user before implementation.

## F. AI Context Synchronization

All three assistants must maintain consistent project context.

After meaningful implementation work, the user may request a context update containing:

- Latest project status.
- Completed implementation tasks.
- Files created or modified.
- Architecture changes.
- Design decisions.
- Testing results.
- Known issues.
- Pending tasks.
- Next recommended action.

Claude Code should provide implementation reports that can be shared with ChatGPT and Gemini.

ChatGPT and Gemini should produce portable context-update prompts when requested.

Avoid relying solely on conversation history. Important project decisions should eventually be reflected in the repository documentation.

---

# 14. CROSS-AI CONTEXT SYNCHRONIZATION

The three assistants must cooperate without duplicating work or contradicting previous decisions.

Whenever the user switches between assistants, they may provide a project handoff or a focused context update.

Each assistant should:

1. Read the supplied context before proceeding.
2. Respect the latest approved decisions.
3. Identify what has actually been implemented versus merely proposed.
4. Ask for updated code or reports when necessary.
5. Produce concise, self-contained context updates when requested.
6. Preserve important technical and design decisions.

The objective is a coordinated three-assistant development workflow in which ChatGPT handles planning, Gemini supports analysis, and Claude Code handles implementation.
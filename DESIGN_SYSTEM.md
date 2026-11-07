# DESIGN SYSTEM — DAN CALEB PORTFOLIO

**Version:** 1.0  
**Status:** Initial design direction  
**Design Identity:** Modern Technical Editorial

---

## 1. Design Philosophy

The Dan Caleb portfolio should feel like a personal developer workspace: technical, creative, professional, and intentional.

It should communicate both technical capability and personal identity without relying on excessive visual effects or generic portfolio templates.

### Core Principles

- **Technical:** Show real projects, technologies, and development experience.
- **Editorial:** Use strong typography, structured layouts, and thoughtful spacing.
- **Professional:** Present information clearly and honestly.
- **Creative:** Introduce subtle visual details that make the portfolio memorable.
- **Minimalist:** Every visual element should serve a purpose.

### Design Inspiration

- Sina Dilek: Editorial structure, typography, and technical personality.
- Pravir Raghu: Professional organization and presentation.
- Michał Ziółek (MZ): Dark interface, grid background, cyan accents, and project previews.
- Alex Dev: Expressive typography, geometric elements, and creative composition.

These references are sources of inspiration, not templates to reproduce.

---

## 2. Color System

### Primary Theme

A dark interface using deep charcoal surfaces, cool neutral text, and turquoise accents.

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

### Color Guidelines

- Use charcoal instead of pure black.
- Reserve turquoise for meaningful emphasis and interactive elements.
- Maintain sufficient contrast between text and backgrounds.
- Avoid introducing multiple competing accent colors.
- Do not use gradients everywhere.
- Use color consistently across all sections.

The palette is the initial working palette and may be refined during visual testing.

---

## 3. Typography

Typography should combine technical clarity with editorial personality.

### Typography Direction

**Display Typeface**
- Expressive and distinctive.
- Used for large hero headings and selected section titles.
- Should feel refined rather than decorative.

**Body Typeface**
- Clean, modern sans-serif.
- Used for paragraphs, navigation, descriptions, and buttons.
- Prioritize readability across desktop and mobile.

**Monospace Typeface**
- Used for labels, project numbers, metadata, and technical details.
- Adds a subtle developer-oriented identity.

### Typography Guidelines

- Establish a clear hierarchy between headings, body text, and metadata.
- Use large headings strategically.
- Keep paragraph widths comfortable for reading.
- Avoid using too many font families.
- Final font selections will be decided after comparing suitable typeface combinations.

---

## 4. Layout and Spacing

### Overall Layout

- Structured editorial layout.
- Consistent content width and alignment.
- Generous whitespace.
- Clear separation between sections.
- Asymmetrical compositions where they improve visual interest.

### Grid System

Use a responsive layout that adapts to desktop, tablet, and mobile screens.

- Desktop: Multi-column layouts where appropriate.
- Tablet: Reduced columns and adjusted spacing.
- Mobile: Primarily single-column layouts.

### Spacing

Use a consistent spacing scale based on multiples of 4px.

Avoid arbitrary spacing values unless a specific layout requires them.

---

## 5. Background and Visual Elements

### Background

- Deep charcoal foundation.
- Optional subtle grid pattern inspired by MZ.
- Low-contrast geometric details.
- Avoid visual noise that competes with the content.

### Decorative Elements

- Thin borders and dividers.
- Small technical labels.
- Numbered project indicators.
- Restrained geometric outlines.
- Subtle accent-colored details.

Decorative elements should support the content, not overwhelm it.

---

## 6. Navigation

### Desktop Navigation

Proposed links:

- Home
- Projects
- About
- Contact

### Navigation Guidelines

- Minimal and easy to understand.
- Clear active-section indication.
- Consistent spacing.
- Subtle hover transitions.
- Responsive mobile navigation.

A small personal wordmark or initials may be used as the navigation identity.

---

## 7. Hero Section

The hero should immediately communicate who the developer is and what kind of work they do.

### Proposed Content

**DAN CALEB.**

SOFTWARE DEVELOPER · PORTFOLIO

**Building things that make an impact.**

An aspiring developer focused on building useful digital experiences through code, creativity, and continuous learning.

Primary action: Selected Work  
Secondary action: About Me

### Layout Direction

- Two-column desktop composition inspired by MZ.
- Strong editorial headline typography inspired by Alex Dev and Sina Dilek.
- Supporting introduction and clear calls to action.
- Optional featured-project preview.
- Responsive single-column arrangement on smaller screens.

The final copy may evolve as the portfolio content develops.

---

## 8. Project Showcase

Projects are among the most important parts of the portfolio.

Each project should communicate its purpose, functionality, technologies, and the developer's contribution.

### Project Presentation

Each project entry should include:

- Project number or category.
- Project name.
- Short description.
- Relevant technologies.
- Project preview or screenshot.
- Repository link when available.
- Live demonstration link when available.

### Visual Direction

- Structured editorial project listings.
- Large visual previews where useful.
- Clear project metadata.
- Consistent spacing and presentation.
- Subtle hover interactions.

### Initial Featured Project

**WINGMACC — Church Inventory System**

A practical system built to organize and manage church inventory.

The final project description, technology stack, features, and contribution details must be verified against the actual project.

Future project ideas must not be presented as completed projects.

---

## 9. About Section

The About section should communicate the person behind the projects.

Potential content:

- Introduction and background.
- Current learning journey.
- Development interests.
- Technical skills.
- Goals and aspirations.

The writing should sound genuine and personal rather than exaggerated or overly corporate.

---

## 10. Contact Section

The contact section should provide a straightforward way to reach the developer.

Potential elements:

- Short invitation to connect.
- Email contact.
- GitHub profile.
- Other relevant professional links.

Use clear labels and functional links.

---

## 11. Motion and Interactions

Animations should make the experience feel polished without distracting visitors.

### Preferred Interactions

- Smooth scrolling.
- Subtle hover transitions.
- Gentle entrance animations.
- Interactive project previews where useful.
- Clear button feedback.
- Small navigation transitions.

### Motion Guidelines

- Avoid excessive animation.
- Respect reduced-motion preferences.
- Prioritize responsiveness and performance.
- Never make essential content dependent on animation.

---

## 12. Responsive Design

The portfolio must remain usable and visually consistent across:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

### Responsive Requirements

- No horizontal overflow.
- Readable typography at all screen sizes.
- Accessible navigation.
- Properly scaled project previews.
- Touch-friendly interactive elements.
- Consistent spacing and alignment.

Mobile design should be intentionally adapted rather than simply shrinking the desktop layout.

---

## 13. Accessibility and Usability

- Maintain readable text contrast.
- Use semantic HTML elements.
- Provide meaningful alternative text for informative images.
- Ensure keyboard navigation works.
- Give interactive elements clear focus states.
- Use descriptive link labels.
- Respect reduced-motion preferences.

---

## 14. Technical Design Guidelines

- Use React components for reusable interface elements.
- Use Tailwind CSS v4 for styling.
- Keep content and project data separate from presentation where practical.
- Maintain consistent naming conventions.
- Avoid unnecessary dependencies.
- Keep components focused and maintainable.
- Test changes using ESLint and production builds.

---

## 15. Design Decisions Still Open

The following decisions will be finalized during implementation planning:

- Exact display and body font combination.
- Final typography scale.
- Personal logo or wordmark.
- Hero visual composition.
- Project preview presentation.
- Animation details.
- Mobile navigation behavior.
- Final color refinements after browser testing.

---

## 16. Final Design Goal

The finished portfolio should feel like a thoughtfully designed developer identity.

It should balance technical credibility, creative personality, and professional presentation.

**The goal is not to look like the most experienced developer. The goal is to present the developer's actual work, abilities, and potential in the strongest honest way possible.**
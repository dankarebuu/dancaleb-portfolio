# Dan Caleb — Design System

**Project:** Personal Developer Portfolio  
**Design Direction:** Dark / Modern / Premium / Minimalist  
**Version:** 1.0

---

## 1. Design Philosophy

The portfolio should communicate professionalism, technical competence, creativity, and attention to detail.

The visual experience should be clean and modern, with a strong emphasis on typography, spacing, contrast, and carefully selected visual elements.

### Core Principles

- Minimalism over unnecessary decoration.
- Consistency across all website sections.
- Strong visual hierarchy.
- Comfortable readability.
- Subtle animations instead of excessive motion.
- Responsive layouts across all screen sizes.
- Purposeful use of accent colors.

---

## 2. Color Palette

The primary theme uses dark neutral backgrounds with violet accents.

### Background Colors

| Token | Hex | Purpose |
|---|---|---|
| Background | `#09090B` | Main website background |
| Surface | `#111114` | Cards and elevated sections |
| Surface Elevated | `#18181D` | Modals and highlighted surfaces |
| Border | `#27272A` | Dividers and component borders |

### Text Colors

| Token | Hex | Purpose |
|---|---|---|
| Primary Text | `#FAFAFA` | Main headings and important content |
| Secondary Text | `#A1A1AA` | Descriptions and supporting text |
| Muted Text | `#71717A` | Metadata and less prominent content |
| Inverted Text | `#09090B` | Text on light backgrounds |

### Accent Colors

| Token | Hex | Purpose |
|---|---|---|
| Primary Accent | `#8B5CF6` | Main brand accent |
| Accent Hover | `#A78BFA` | Hover and active states |
| Accent Subtle | `#2E1065` | Soft accent backgrounds |
| Accent Secondary | `#22D3EE` | Occasional highlights |

**Color Usage Rules:**

- Violet is the primary brand accent.
- Cyan should be used sparingly.
- Avoid excessive gradients.
- Maintain sufficient contrast between text and backgrounds.
- Do not use accent colors for every element.

---

## 3. Typography

Typography should feel modern, clean, and highly readable.

### Font Families

**Primary:** Inter

**Fallback:** Arial, sans-serif

Use a consistent typeface throughout the website.

### Typography Scale

| Element | Suggested Size | Weight |
|---|---|---|
| Hero Heading | 56–80px | 700 |
| Section Heading | 36–48px | 700 |
| Subheading | 24–30px | 600 |
| Card Heading | 18–22px | 600 |
| Body Text | 15–17px | 400 |
| Small Text | 12–14px | 400 |
| Navigation | 14–16px | 500 |

Use responsive typography where necessary.

Headings should have tight line heights, while body text should remain comfortable to read.

---

## 4. Spacing System

Use a consistent spacing scale based on multiples of 4px.

| Token | Value |
|---|---|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |

### Layout Guidelines

- Use generous vertical spacing between major sections.
- Maintain consistent horizontal page padding.
- Keep content within a comfortable maximum width.
- Avoid overly dense layouts.
- Align elements carefully.

Suggested maximum content width: 1200px.

---

## 5. Border Radius

Use rounded corners consistently without making the interface overly rounded.

| Element | Radius |
|---|---|
| Small Elements | 6px |
| Buttons | 8px |
| Cards | 12px |
| Large Containers | 16px |
| Pills / Tags | 9999px |

---

## 6. Borders and Shadows

### Borders

Use subtle neutral borders to separate components from their surroundings.

- Default border: `#27272A`
- Hover border: `#3F3F46`
- Accent border: `#8B5CF6`

### Shadows

Prefer subtle shadows over strong, distracting ones.

Use elevation sparingly, particularly on cards, dropdowns, and floating elements.

Avoid excessive glow effects.

---

## 7. Component Guidelines

### Navigation

- Minimal and clean.
- Clearly visible navigation links.
- Consistent spacing.
- Subtle hover and active states.
- Responsive mobile navigation.

### Buttons

Primary buttons should use the violet accent.

Secondary buttons should use dark surfaces with subtle borders.

Buttons should have:

- Consistent padding.
- Clear labels.
- Smooth hover transitions.
- Visible focus states.
- Appropriate disabled states.

### Cards

Cards should use dark surface backgrounds with subtle borders.

They should have:

- Consistent internal spacing.
- Clear visual hierarchy.
- Rounded corners.
- Subtle hover effects when interactive.

### Tags and Badges

Use compact tags for technologies, categories, and project metadata.

Avoid unnecessary colors and excessive tagging.

---

## 8. Animation and Interaction

Animations should improve the user experience without distracting from the content.

### Preferred Effects

- Smooth scrolling.
- Subtle fade-in transitions.
- Gentle hover transitions.
- Small movement effects.
- Smooth navigation interactions.

### Timing Guidelines

| Interaction | Duration |
|---|---|
| Hover | 150–200ms |
| Button Feedback | 150ms |
| Element Transition | 200–300ms |
| Section Reveal | 400–600ms |

### Animation Rules

- Avoid excessive movement.
- Keep transitions smooth and purposeful.
- Avoid unnecessary animation loops.
- Respect reduced-motion preferences.
- Maintain good performance.

---

## 9. Responsive Design

The website must provide a consistent experience across desktop, tablet, and mobile devices.

### Suggested Breakpoints

| Device | Width |
|---|---|
| Mobile | Below 640px |
| Tablet | 640px–1023px |
| Desktop | 1024px and above |

### Responsive Guidelines

- Navigation should adapt to smaller screens.
- Typography should scale appropriately.
- Multi-column layouts should collapse when necessary.
- Buttons should remain accessible.
- Content should never overflow horizontally.
- Maintain readable spacing on mobile.

---

## 10. Accessibility

- Maintain sufficient text contrast.
- Use semantic HTML elements.
- Provide accessible labels for interactive controls.
- Ensure keyboard navigation works.
- Include visible focus indicators.
- Provide alternative text for meaningful images.
- Respect reduced-motion preferences.

---

## 11. Implementation Guidelines

- Use Tailwind CSS for styling.
- Keep colors and design tokens consistent.
- Use reusable React components.
- Avoid unnecessary inline styles.
- Keep component styling maintainable.
- Avoid arbitrary values when an existing design token is appropriate.
- Maintain consistency between desktop and mobile designs.

---

## 12. Design System Evolution

This document represents the initial visual direction of the portfolio.

Design decisions may evolve during implementation, but significant changes should be reflected here.

Any new component or section should follow the established visual language.

---

**Design Principle:**

A premium interface does not need to be complicated. Every visual element should have a purpose.
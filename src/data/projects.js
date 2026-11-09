export const projectsData = [
  {
    id: 'wingmacc',
    index: '01',
    category: 'WEB APPLICATION / INVENTORY SYSTEM',
    title: 'WINGMACC — Church Inventory System',
    tagline: 'Practical equipment tracking and custody management designed for church band operations.',
    description:
      'Built to replace informal gear tracking with a structured operational checklist. Solves real church band workflow problems like identifying missing cables, logging equipment custody, and performing quick Sunday morning condition checks.',
    liveUrl: 'https://wingmacc-inventory.netlify.app',
    repoUrl: 'https://github.com/dankarebuu/Church-Inventory-System',
    technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'Netlify'],
    stats: [
      { label: 'Logged Items', value: '70+' },
      { label: 'Core Modes', value: 'Admin / Guest' },
      { label: 'Frameworks Used', value: 'Zero (Vanilla)' },
    ],
    highlights: [
      {
        title: 'Role-Based Access Control',
        description: 'Read-only public guest view for general browsing paired with an authenticated admin tier for inventory mutations, auditing, and records editing.',
      },
      {
        title: 'Asset Lifecycle & Custody Tracking',
        description: 'Comprehensive gear intake capturing serial IDs, storage locations, borrower name, checkout dates, and return schedules.',
      },
      {
        title: 'Rapid Status Audits',
        description: 'One-click operational state toggles (Working, Fix, Lost) stamped with inspector attribution and check timestamps.',
      },
      {
        title: 'Data Portability',
        description: 'Built-in print formatting alongside import/export capabilities for backup and team handoffs.',
      },
    ],
  },
  {
    id: 'portfolio',
    index: '02',
    category: 'WEBSITE / DEVELOPER IDENTITY',
    title: 'Dan Caleb Portfolio System',
    tagline: 'Modern technical editorial design architecture built with React 19 and Tailwind CSS v4.',
    description:
      'A high-performance personal presentation layer designed to bridge editorial aesthetics with technical transparency. Features custom scroll-spy navigation, motion-aware entrance animations, and a focus on accessibility and performance metrics.',
    liveUrl: 'https://dancaleb-portfolio.netlify.app',
    repoUrl: 'https://github.com/dankarebuu/dancaleb-portfolio',
    technologies: ['React 19', 'Tailwind CSS v4', 'Vite 8', 'IntersectionObserver'],
    stats: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'Components', value: '12+' },
      { label: 'Framework', value: 'React 19' },
    ],
    highlights: [
      {
        title: 'Modern Technical Editorial Design',
        description: 'Bespoke design system implemented using Tailwind v4, utilizing a charcoal-based dark theme with high-contrast turquoise accents.',
      },
      {
        title: 'Scroll-Synchronized Navigation',
        description: 'Custom React hook utilizing IntersectionObserver to provide real-time visual feedback on current page location without unnecessary re-renders.',
      },
      {
        title: 'Accessibility First',
        description: 'Implemented skip-to-content links, motion-safe animation guards, and high-contrast :focus-visible indicators for semantic navigation.',
      },
      {
        title: 'Vite 8 Optimization',
        description: 'Leveraging modern ESM-first tooling for lightning-fast HMR and optimized production asset delivery.',
      },
    ],
  },
]
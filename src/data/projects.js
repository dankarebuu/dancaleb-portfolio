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
]
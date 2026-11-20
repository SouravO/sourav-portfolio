export const profile = {
  name: 'Sourav',
  role: 'Full-Stack Software Engineer · Technical Lead · Product Builder',
  email: 'o.sourav5@gmail.com',
  location: 'India',
  experience: '4+ years',
  bio: 'I build digital products from the first idea to the working application. My work connects software architecture, thoughtful interfaces, and the business behind them.',
  education: 'B.Tech, MES College of Engineering, Kuttippuram (2018–2022)',
}

export const projects = [
  {
    id: 'cyd',
    slug: 'check-your-deals',
    name: 'Check Your Deals',
    short: 'CYD',
    category: 'Affiliate commerce',
    status: 'Live · In development',
    kind: 'live',
    url: 'https://checkyourdeals.com',
    summary: 'Less searching. More discovering.',
    description:
      'A deal discovery platform connecting shoppers with offers from major e-commerce marketplaces.',
    role: 'Full-stack product development',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    problem:
      'Product offers are scattered across marketplaces. Check Your Deals brings discovery, category navigation, and affiliate links into one consumer experience.',
    contribution:
      'My work spans the product experience, deal listings, search, product detail pages, affiliate integration, and the architecture for deal ingestion.',
    capabilities: [
      'Product discovery and deal listings',
      'Search and category navigation',
      'Product detail pages',
      'E-commerce affiliate link integration',
    ],
    planned:
      'Automation for product discovery, updates, and affiliate link generation is planned. The ingestion flow is explanatory, not a verified production schema.',
    flow: [
      'Marketplace offers',
      'Deal ingestion',
      'Search & discovery',
      'Affiliate destination',
    ],
    perspectives: {
      Product:
        'Bring scattered offers into a focused discovery experience. Search, categories, and product detail pages help shoppers find their next deal.',
      Architecture:
        'Next.js and TypeScript support the web experience, with Supabase as the data platform. Deal ingestion connects marketplace information to discovery. Further automation is planned.',
      Engineering:
        'The supplied implemented scope includes deal listings, search and category navigation, product detail pages, and affiliate links. The product is publicly deployed and actively evolving.',
    },
  },
  {
    id: 'crm',
    slug: 'day-one-crm',
    name: 'Day One CRM',
    short: 'DAY ONE',
    category: 'Startup operations',
    status: 'Built · Used internally',
    kind: 'internal',
    summary: 'Complex operations. One shared system.',
    description:
      'An internal startup management ecosystem connecting founders, venture managers, and execution teams.',
    role: 'Technical leadership & platform architecture',
    stack: ['Supabase', 'Web architecture', 'Dashboards', 'Analytics'],
    problem:
      'Startup support involves founders, managers, and execution teams. Assignments, approvals, and progress need to stay connected across those roles.',
    contribution:
      'At Day One Venture Studio, I held a CTO/technical leadership role and worked across startup projects and internal systems. This CRM turns operational workflows into a shared software platform.',
    capabilities: [
      'Founder CRM and role-based dashboards',
      'Task management, assignment, and approvals',
      'Weekly progress and performance metrics',
      'Founder health scoring and team leaderboards',
    ],
    planned:
      'Built and used internally. All diagrams are public-safe explanations based on the supplied module descriptions, not internal screenshots or production database diagrams. No private records or outcome metrics are disclosed.',
    flow: [
      'Founder updates',
      'Venture manager',
      'Execution team',
      'Progress & approvals',
    ],
    perspectives: {
      Product:
        'Give founders, venture managers, and internal teams a shared view of execution. Connect assignments, approvals, and weekly progress instead of treating each as an isolated workflow.',
      Architecture:
        'Role-based dashboards connect founder CRM, task routing, approvals, and progress reporting. Supabase is part of the supplied technology scope. This is a public-safe conceptual view.',
      Engineering:
        'Built and used internally. Modules include founder CRM, internal tasks, role-based dashboards, weekly tracking, approvals, performance metrics, health scoring, and team leaderboards.',
    },
  },
  {
    id: 'notwo',
    name: 'NOTWO',
    category: 'Beauty technology',
    status: 'Planning · MVP architecture',
    kind: 'concept',
    url: 'https://www.notwoskin.com',
    summary: 'Where skin science meets software.',
    description:
      'Architecture and product planning for connected skin analysis, personalized recommendations, and retail experiences. These capabilities are proposed, not presented as shipped.',
    stack: ['Device integration', 'API design', 'Personalization'],
    flow: [
      'Skin analysis concept',
      'Assessment session',
      'Recommendation workflow',
      'Retail experience',
    ],
    perspectives: {
      Product:
        'A skincare technology concept connecting physical skin analysis with personalized recommendations and a digital retail experience. Product planning and MVP architecture only.',
      Architecture:
        'Proposed flows include hardware integration, analysis data processing, QR-based assessments, backend APIs, and a recommendation workflow. These are planned capabilities.',
      Engineering:
        'My role is technical architecture and product planning. No device integration or recommendation capability is claimed as shipped.',
    },
  },
  {
    id: 'versa',
    name: 'Founder Versa',
    category: 'Digital publishing',
    status: 'Concept · Architecture',
    kind: 'concept',
    summary: 'From purchase to a protected reading experience.',
    description:
      'A digital and physical book commerce concept exploring purchase verification, reader access, and customer entitlements. Architecture and product concept only.',
    stack: [
      'Shopify integration concept',
      'Access control',
      'Content delivery',
    ],
    flow: [
      'Commerce concept',
      'Purchase verification',
      'Reader entitlement',
      'Protected content',
    ],
    perspectives: {
      Product:
        'A platform concept for selling startup-focused books in digital and physical formats. The proposed experience connects buying a book with authenticated reading access.',
      Architecture:
        'The proposed flow links Shopify commerce, purchase verification, customer entitlements, and restricted content delivery. Architecture and product concept, not a shipped platform.',
      Engineering:
        'The technical scope explores authenticated reading, purchase verification, restricted access, and secure content delivery. Implementation is not claimed.',
    },
  },
]

export const skills = [
  {
    name: 'Interfaces',
    description: 'Experiences people enjoy using.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Angular',
      'Tailwind CSS',
      'React Native',
    ],
  },
  {
    name: 'Systems',
    description: 'The structure behind the screen.',
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'Supabase',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    name: 'Product thinking',
    description: 'From the first question to the next iteration.',
    items: [
      'System architecture',
      'Database design',
      'MVP development',
      'Technical leadership',
      'AI-assisted workflows',
      'Automation',
    ],
  },
]

export const journey = [
  {
    title: 'Start with the foundations.',
    label: 'Education',
    text: profile.education,
  },
  {
    title: 'Learn by building.',
    label: 'Full-stack development',
    text: 'Started with Angular, Node.js, and MongoDB. Built a foundation across interfaces, APIs, and databases.',
  },
  {
    title: 'Think beyond the code.',
    label: 'Technical leadership',
    text: 'CTO/technical leadership at Day One Venture Studio, working across product planning, architecture, startup projects, and internal systems.',
  },
  {
    title: 'Keep exploring.',
    label: 'Product & agentic workflows',
    text: 'Building with React, Next.js, and React Native. Experimenting with Codex, OpenCode, automation, and how coding agents can collaborate.',
  },
]

export const sources = [
  { id: 'about', label: 'About Sourav', href: '/#about' },
  {
    id: 'cyd',
    label: 'Check Your Deals case study',
    href: '/work/check-your-deals',
  },
  { id: 'crm', label: 'Day One CRM case study', href: '/work/day-one-crm' },
  { id: 'notwo', label: 'NOTWO concept', href: '/#concepts' },
  { id: 'versa', label: 'Founder Versa concept', href: '/#concepts' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

export function publicKnowledge() {
  return JSON.stringify({ profile, projects, skills, journey, sources })
}

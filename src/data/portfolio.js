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
      'A deal discovery platform that empowers shoppers across India to discover and compare verified offers from authorized sources before visiting partner stores.',
    role: 'Cofounder & full-stack development',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    problem:
      'Product offers, seasonal sales, and discount codes are fragmented across dozens of competing marketplaces and merchant channels. Online shoppers are forced to jump through endless tabs and deal feeds, constantly running into expired promotions, phantom markdowns, and unverified seller listings with no quick, reliable way to know if an offer is currently live and authentic.',
    contribution:
      'As Co-Founder, I led the development of the shopping experience, integrated affiliate links, and designed the deal ingestion architecture to create a seamless deal discovery platform.',
    capabilities: [
      'Browse and search checked offers by category',
      'View product details with source-checked prices and last-checked times',
      'Explore brand sales, trending deals, and price comparisons',
      'Follow affiliate links to partner stores',
    ],
    planned:
      'Planned next: Automating product discovery, deal updates, and affiliate link generation to improve scalability and streamline deal management.',
    flow: [
      'Scattered marketplace offers',
      'Validation & freshness checks',
      'Search & discovery',
      'Affiliate destination',
    ],
    perspectives: {
      Product:
        'A cofounder-led discovery experience: verified offers from authorized sources, categories, product details and brand sales help shoppers across India compare before visiting partner stores.',
      Architecture:
        'Next.js and TypeScript support the web experience, with Supabase as the data platform. Listings qualify only when the source is authorized, required details validate, and price data is within its source’s freshness limits. Automating product discovery, deal updates, and affiliate link generation is planned.',
      Engineering:
        'As Co-Founder, I led the development of the shopping experience, integrated affiliate links, and designed the deal ingestion architecture to create a seamless deal discovery platform. Listings show when a source last checked the price and distinguish source-supplied reference prices from recorded price observations; partner stores handle checkout and support. The product is publicly deployed and actively evolving.',
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
      'Built and used internally at Day One Venture Studio to manage founder operations, team tasks, approvals, and weekly progress.',
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
        'Role-based dashboards connect founder CRM, task routing, approvals, and progress reporting. Supabase supports the data layer.',
      Engineering:
        'Built and used internally. Modules include founder CRM, internal tasks, role-based dashboards, weekly tracking, approvals, performance metrics, health scoring, and team leaderboards.',
    },
  },
  {
    id: 'whatsapp-ai',
    name: 'AI WhatsApp Assistant',
    short: 'WHATSAPP AI',
    category: 'Conversational automation',
    status: 'Built · Live',
    kind: 'built',
    summary: 'Intelligent conversational automation on WhatsApp.',
    description:
      'A conversational assistant connecting WhatsApp messaging with high-throughput Go webhook pipelines, intelligent LLM reasoning, and a React control dashboard.',
    role: 'Full-stack development & AI integration',
    stack: ['Go', 'React', 'WhatsApp API', 'LLMs', 'PostgreSQL'],
    problem:
      'Handling high-volume customer and user inquiries over WhatsApp requires low latency, dependable webhook ingestion, context-aware AI reasoning, and clear administrative oversight.',
    contribution:
      'I built the end-to-end system: a concurrent Go backend to handle webhooks and orchestrate LLM context, integrated the WhatsApp messaging pipeline, and created a responsive React dashboard for monitoring and configuration.',
    capabilities: [
      'Concurrent Go webhook ingestion and message routing',
      'Context-aware conversational responses via LLM reasoning',
      'React management dashboard for conversation monitoring and control',
      'Session memory, message queuing, and state persistence with PostgreSQL',
    ],
    planned:
      'Built and operational, with ongoing work on multi-agent tool execution and expanded analytics.',
    flow: [
      'WhatsApp message',
      'Go webhook pipeline',
      'LLM context & reasoning',
      'Automated response & React dashboard',
    ],
    perspectives: {
      Product:
        'Deliver reliable, human-grade conversational support and automated workflows directly inside WhatsApp, backed by an intuitive control dashboard.',
      Architecture:
        'A Go backend provides high concurrency for incoming WhatsApp webhooks and communicates with LLM providers. PostgreSQL persists conversations and user state. A React frontend provides administration, monitoring, and analytics.',
      Engineering:
        'Engineered for performance and reliability: non-blocking webhook processing in Go, structured prompt engineering and context retrieval for AI answers, and a clean React interface for operational oversight.',
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
      'Product planning and MVP architecture for a skincare concept linking skin assessments, personalized recommendations, and retail.',
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
      'A book commerce concept connecting digital and physical purchases with verified access to an online reading experience.',
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
      'Go',
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
  { id: 'whatsapp-ai', label: 'AI WhatsApp Assistant', href: '/#work' },
  { id: 'notwo', label: 'NOTWO concept', href: '/#concepts' },
  { id: 'versa', label: 'Founder Versa concept', href: '/#concepts' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

export function publicKnowledge() {
  return JSON.stringify({ profile, projects, skills, journey, sources })
}

export const profile = {
  name: 'Sourav',
  role: 'Full-Stack Software Engineer · Technical Lead · Product Builder',
  email: 'o.sourav5@gmail.com',
  location: 'India',
  experience: '4+ years',
  bio: 'I build digital products from the first idea to fully functional applications. My work brings together thoughtful software architecture, intuitive user experiences, and business-focused thinking to turn ideas into products that work.',
  education: 'B.Tech in Computer Science and Engineering, MES College of Engineering, Kuttippuram (2018–2022).',
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
    role: 'Co-Founder & Full-Stack Development',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    problemHeadline: 'Too many deals. Not enough reliable discovery.',
    problem:
      'Online offers are scattered across multiple marketplaces, making it difficult for shoppers to find relevant deals, compare prices, and verify whether listings are still valid. Shoppers often have to navigate multiple platforms just to find an offer worth considering.',
    solutionHeadline: 'One place to discover. Compare. Shop.',
    solution:
      'Check Your Deals brings offers from authorized marketplace sources into a centralized discovery platform. With category-based browsing, source-checked pricing, trending deals, and direct affiliate links, shoppers can explore offers and make informed decisions before visiting partner stores.',
    contributionHeadline: 'From product architecture to the shopping experience.',
    contribution:
      'As Co-Founder, I led the development of the consumer-facing shopping experience, integrated affiliate links, and designed the deal ingestion architecture to support structured offer discovery.',
    capabilities: [
      'Browse and search checked offers by category',
      'View product details with source-checked prices and last-checked times',
      'Explore brand sales, trending deals, and price comparisons',
      'Follow affiliate links to partner stores',
    ],
    planned:
      'Planned next: Automated product discovery. Automated deal monitoring and price updates. Automated affiliate link generation.',
    plannedList: [
      'Automated product discovery.',
      'Automated deal monitoring and price updates.',
      'Automated affiliate link generation.',
    ],
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
        'Next.js and TypeScript support the web experience, with Supabase as the data platform. Listings qualify only when the source is authorized, required details validate, and price data is within its source’s freshness limits. Automated product discovery, deal monitoring and price updates, and affiliate link generation are planned.',
      Engineering:
        'As Co-Founder, I led the development of the consumer-facing shopping experience, integrated affiliate links, and designed the deal ingestion architecture to support structured offer discovery. Listings show when a source last checked the price and distinguish source-supplied reference prices from recorded price observations; partner stores handle checkout and support. The product is publicly deployed and actively evolving.',
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
      'An internal startup management ecosystem designed to connect founders, venture managers, and execution teams through a unified platform for collaboration, performance tracking, and operational management.',
    role: 'Technical Leadership & Platform Architecture',
    stack: ['Supabase', 'Web Architecture', 'Dashboards', 'Analytics'],
    problemHeadline: 'Multiple teams. Fragmented operations.',
    problem:
      'Managing startup operations involves coordinating founders, venture managers, and execution teams. When tasks, approvals, responsibilities, and progress updates are spread across different workflows, maintaining visibility and accountability becomes difficult.',
    solutionHeadline: 'One platform. Connected startup operations.',
    solution:
      'An internal startup management ecosystem that brings founders, venture managers, and execution teams together through a centralized CRM. It connects task management, approval workflows, founder progress, and performance tracking in one shared platform.',
    contributionHeadline: 'Shaping the technology behind startup operations.',
    contribution:
      'At Day One Venture Studio, I held a CTO and technical leadership role, working across startup projects and internal systems. I contributed to the platform architecture and development of a centralized CRM that transforms operational processes into structured, trackable digital workflows.',
    capabilities: [
      'Founder CRM and role-based dashboards',
      'Task management, assignment, and approvals',
      'Weekly progress and performance metrics',
      'Founder health scoring and team leaderboards',
    ],
    contextHeadline: 'Built for real startup operations.',
    planned:
      'Developed and used internally at Day One Venture Studio to manage founder operations, coordinate team responsibilities, streamline approvals, and track weekly progress.',
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
      'A conversational AI assistant that integrates WhatsApp messaging with high-throughput Go webhook pipelines, context-aware LLM processing, and a responsive React-based management dashboard.',
    role: 'Full-Stack Development & AI Integration',
    stack: ['Go', 'React', 'WhatsApp API', 'LLMs', 'PostgreSQL'],
    problem:
      'Handling high-volume customer and user inquiries over WhatsApp requires low latency, dependable webhook ingestion, context-aware AI reasoning, and clear administrative oversight.',
    contribution:
      'I developed the end-to-end platform, building a concurrent Go backend to handle webhook ingestion, message routing, and LLM context orchestration. I integrated the WhatsApp messaging pipeline and designed a responsive React dashboard for real-time conversation monitoring, management, and configuration.',
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
      'A personalized skincare platform connecting skin assessments, tailored product recommendations, and retail experiences through an integrated digital ecosystem.',
    role: 'Product Planning & Technical Architecture',
    contribution:
      'I worked on product planning and MVP architecture for a skincare concept, defining the proposed user journey and technical foundation connecting skin analysis, personalized recommendations, and retail. The focus was on translating the concept into a structured, scalable digital experience.',
    stack: ['Device Integration', 'API Design', 'Personalization'],
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
      'A book commerce platform concept connecting physical and digital book purchases with verified access to a seamless online reading experience.',
    role: 'Product Planning & Technical Architecture',
    contribution:
      'I worked on product planning and technical architecture for a book commerce concept, designing a proposed workflow that connects purchases with secure digital reading access. The focus was on bridging traditional book commerce with a protected online reading experience.',
    stack: [
      'Shopify Integration Concept',
      'Access Control',
      'Content Delivery',
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
    text:
      'My development journey began with Angular, Node.js, and MongoDB, where I built a strong foundation in frontend development, backend APIs, and database management. This experience shaped my understanding of how modern web applications are designed and built.',
  },
  {
    title: 'Think beyond the code.',
    label: 'Technical leadership',
    text:
      'Held a CTO and technical leadership role at Day One Venture Studio, contributing to product planning, software architecture, startup initiatives, and internal systems. Led the technical development of Day One CRM, an internally deployed platform connecting founder operations, task management, approval workflows, and progress tracking.',
  },
  {
    title: 'Keep exploring.',
    label: 'Product & agentic workflows',
    text:
      'Building digital products with React, Next.js, and React Native. Experimenting with Codex, OpenCode, automation, and collaborative coding agents.',
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

// All content sourced strictly from Nihar Chopade's resume. No invented data.

export const PROFILE = {
  name: "Nihar Chopade",
  firstName: "Nihar",
  title: "Assistant Manager — Product",
  company: "Pluckk (Essar Group)",
  location: "Mumbai, India",
  email: "nihar55chopade@gmail.com",
  phone: "+91 88889 08202",
  linkedin: "https://www.linkedin.com/in/nihar-chopade",
  resume: "/assets/Nihar_Chopade_CV.pdf",
  photo: "/assets/nihar.jpeg",
  eyebrow: "PRODUCT • AI • AUTOMATION • ANALYTICS",
  heroLine: ["Turning Business Problems Into", "Products, Automation & AI Solutions."],
  heroSupport:
    "Product professional working at the intersection of business, technology, data and AI — building practical solutions that solve real operational problems.",
  summary:
    "Product & Analytics professional with 3 years of experience in product discovery, PRD/BRD authoring, and requirement gathering across B2B/B2C e-commerce and HR-Tech platforms. Proven in cross-functional stakeholder management, SQL-driven analytics, and workflow automation — with direct exposure to AI-assisted process design and end-to-end product delivery in Agile environments.",
  experienceBadge: "3+ Years Experience",
  currentlyBuilding: "AI-powered workflow automation for business operations",
};

export const NAV = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

export const THINKING_NODES = [
  { id: "problem", label: "Problem", desc: "Identify operational bottlenecks, order friction and manual workflows worth solving." },
  { id: "discover", label: "Discover", desc: "User research, funnel analysis and stakeholder interviews to understand the real pain." },
  { id: "define", label: "Define", desc: "Translate needs into PRDs/BRDs, process maps, validation logic and clear requirements." },
  { id: "build", label: "Build", desc: "Partner with Engineering & Operations across Agile sprints to ship the solution." },
  { id: "automate", label: "Automate", desc: "Embed AI extraction, business rules and ETL pipelines to remove manual effort." },
  { id: "measure", label: "Measure", desc: "Track GMV, SLA compliance, uptime and turnaround; iterate with data." },
];

export const CAPABILITIES = [
  { id: "business", label: "Business", desc: "Understand operations, revenue and stakeholder goals." },
  { id: "product", label: "Product", desc: "PRD/BRD, discovery, prioritisation and delivery." },
  { id: "technology", label: "Technology", desc: "Work with engineering to turn requirements into systems." },
  { id: "data", label: "Data", desc: "SQL, dashboards and KPI monitoring to drive decisions." },
  { id: "ai", label: "AI & Automation", desc: "AI-assisted process design connecting the whole system." },
];

export const EXPERIENCE = [
  {
    role: "Assistant Manager — Product",
    company: "Pluckk (Essar Group)",
    location: "Mumbai",
    period: "Feb 2025 — Present",
    tag: "Product • Automation • Analytics",
    highlights: [
      "Led product discovery and authored the BRD & PRD for an automated Intent-to-Sales Order platform — defining workflow and process maps, customer & SKU mapping, pricing and address validation logic, exception handling, and workflow-in-the-loop verification checkpoints.",
      "Collaborated with Engineering and Operations to define business rules and translate automation requirements into structured process flows, ensuring alignment between product intent and technical execution.",
      "Prioritised features across 5+ product modules using user research and funnel analysis; authored PRDs and 10+ sprints in Agile/Scrum — improving system uptime by 15% and launch consistency by 43%.",
      "Ran user-driven analysis of B2B/B2C order data to surface 3 fulfillment bottlenecks, reducing order turnaround by 20% and post-launch escalations by 25%.",
      "Designed automated ETL pipelines for real-time KPI monitoring (GMV, SLA compliance, fulfillment rate), cutting manual reporting effort by 40% and saving 15+ hours weekly.",
    ],
  },
  {
    role: "Tech Executive",
    company: "Sennsys Technologies Pvt. Ltd.",
    location: "Mumbai",
    period: "Aug 2023 — Feb 2025",
    tag: "HR-Tech • Product • Data",
    highlights: [
      "Audited the HRMS product end-to-end, identifying 6 friction points through user research and stakeholder interviews; improvements raised regulatory compliance adherence by 20% across 50+ enterprise clients.",
      "Managed stakeholder relationships for 15+ B2B clients, converting user pain points into PRD-backed product recommendations and improving platform reliability by 25%.",
      "Designed a feature-adoption and A/B testing framework across 4 HRMS releases — achieving 100% on-time delivery, reducing post-release defects by 30%, and growing DAU by 18% over two quarters.",
      "Automated payroll reporting workflows using SQL validation and Excel macros, eliminating manual errors and cutting processing time by 45% across monthly payroll cycles.",
    ],
  },
];

export const EDUCATION = [
  { degree: "MCA — Master of Computer Applications", school: "Savitribai Phule Pune University (MCOE)", period: "2019 — 2022" },
  { degree: "BCA — Bachelor of Computer Applications", school: "Shivaji University (CIMDR)", period: "2016 — 2019" },
];

export const PROJECTS = [
  {
    id: "karodesk",
    title: "KaroDesk — AI Virtual Office",
    blurb: "An AI-powered virtual office that brings AI employees, task management, activity tracking and workflow automation into one interactive workspace.",
    tags: ["AI Agents", "Automation", "Product Design", "Workflow Management"],
    flow: ["AI Employees", "Task Management", "Activity Tracking", "Workflow Automation", "Virtual Office"],
    company: "AI Virtual Office Platform",
    link: "https://karodesk.com",
    featured: true,
    study: {
      problem: "Teams and founders juggle disconnected tools to delegate work, track tasks and monitor activity — with no single AI-native workspace to run day-to-day operations.",
      context: "A self-initiated AI product exploring how AI employees, task management and automation can live inside one interactive virtual office.",
      role: "Conceived and designed the product end-to-end — defining the AI employee experience, task and activity workflows, and the overall interaction model.",
      approach: "Combined AI agents acting as virtual employees with structured task management, activity tracking and automation rules, all inside a single interactive workspace.",
      solution: "An AI-powered virtual office where AI employees handle tasks, activity is tracked automatically, and workflows run with minimal manual input.",
      technology: ["AI Agents", "Workflow Automation", "Task Management", "Activity Tracking", "Product Design"],
      thinking: "Treated AI agents as first-class team members — giving them tasks, visibility and accountability inside a workspace that feels familiar to how real teams already work.",
      outcome: "Delivered a working virtual office experience unifying AI employees, task management, activity tracking and workflow automation in one workspace.",
      learning: "Designing multi-agent AI products means designing for trust and visibility as much as capability — activity tracking is what makes automation feel safe to rely on.",
    },
  },
  {
    id: "legalformat",
    title: "LegalFormat.in",
    blurb: "An AI-powered legal document generation platform for creating Indian legal agreements.",
    tags: ["AI", "SaaS", "LegalTech", "Document Generation"],
    flow: ["User Input", "AI Generation", "Legal Template", "PDF / DOCX", "Paywall", "Download"],
    company: "AI Legal Document SaaS",
    link: "https://legalformat.in/",
    featured: true,
    highlights: ["AI document generation", "Legal templates", "PDF & DOCX generation", "User dashboard", "Authentication", "Payment / paywall", "OpenAI integration"],
    study: {
      problem: "Creating standard Indian legal agreements is slow and manual, often needing expensive expert help even for routine documents.",
      context: "A self-initiated AI SaaS product for individuals and businesses who need reliable legal documents quickly.",
      role: "Built the product end-to-end — from concept and UX to AI integration, authentication, payments and deployment.",
      approach: "Combined curated legal templates with OpenAI-driven generation, a user dashboard, authentication, and a payment paywall for premium documents.",
      solution: "A web platform where users generate Indian legal agreements and export them as polished PDF & DOCX files.",
      technology: ["Next.js", "OpenAI", "Firebase", "Vercel", "Stripe", "Razorpay"],
      thinking: "Kept trusted legal templates at the core and used AI to tailor them — balancing reliability with flexibility.",
      outcome: "Launched as a live product at legalformat.in with document generation, user accounts and payments.",
      learning: "Shipping a real SaaS end-to-end sharpened how I scope AI features against practical user and payment flows.",
    },
  },
  {
    id: "intent-so",
    title: "Intent-to-Sales Order Automation Platform",
    blurb: "Turning incoming order intent into validated sales orders with AI extraction and business rules.",
    tags: ["AI", "Automation", "Product", "Supply Chain"],
    flow: ["Order Intent", "Monitoring", "AI Extraction", "Validation", "Business Rules", "Sales Order", "Exception Handling", "Notifications"],
    company: "Pluckk (Essar Group)",
    study: {
      problem: "Order intake across channels was manual and error-prone, creating fulfillment bottlenecks and inconsistent sales-order creation.",
      context: "B2B/B2C e-commerce operations at Pluckk requiring accurate customer & SKU mapping, pricing and address validation at scale.",
      role: "Owned product discovery; authored the BRD and PRD; defined workflow and process maps end-to-end.",
      approach: "Mapped the full intent-to-order workflow, defined validation logic and exception handling, and added workflow-in-the-loop verification checkpoints.",
      solution: "An automated platform that monitors incoming intent, extracts details via AI, validates against business rules, and generates sales orders with notifications.",
      technology: ["AI Extraction", "Business Rules Engine", "Process Mapping", "SQL", "Agile/Scrum"],
      thinking: "Kept a human-in-the-loop for exceptions so automation stays trustworthy while removing repetitive manual steps.",
      outcome: "Improved system uptime by 15%, launch consistency by 43%, and reduced order turnaround by 20%.",
      learning: "Clear business rules and exception design are what make automation reliable in real operations.",
    },
  },
  {
    id: "kpi-etl",
    title: "Real-Time KPI Monitoring & ETL Pipelines",
    blurb: "Automated data pipelines feeding live operational dashboards for GMV, SLA and fulfillment.",
    tags: ["Data", "ETL", "Power BI", "Automation"],
    flow: ["Order Data", "ETL Pipeline", "KPI Metrics", "Live Dashboard", "Alerts"],
    company: "Pluckk (Essar Group)",
    study: {
      problem: "Operational reporting was manual, slow, and consumed significant weekly effort with no real-time visibility.",
      context: "Leadership and operations needed continuous visibility into GMV, SLA compliance and fulfillment rate.",
      role: "Designed the automated ETL pipelines and the KPI monitoring approach.",
      approach: "Structured data flows to compute key metrics automatically and surface them in real-time dashboards.",
      solution: "Automated ETL pipelines powering real-time KPI monitoring across the fulfillment lifecycle.",
      technology: ["SQL", "ETL Pipelines", "Power BI", "KPI Dashboarding"],
      thinking: "Metrics only matter if they are timely and trusted — automation removes the lag and the manual error.",
      outcome: "Cut manual reporting effort by 40% and saved 15+ hours weekly.",
      learning: "Well-defined KPIs plus automation shift teams from reporting the past to acting in the present.",
    },
  },
  {
    id: "fulfillment",
    title: "B2B/B2C Fulfillment Analytics",
    blurb: "Data-driven analysis of order flows to find and remove fulfillment bottlenecks.",
    tags: ["Analytics", "B2B", "B2C", "Sales Orders"],
    flow: ["Order Data", "Analysis", "Bottleneck ID", "Process Fix", "Impact"],
    company: "Pluckk (Essar Group)",
    study: {
      problem: "Fulfillment delays and post-launch escalations were affecting order turnaround.",
      context: "High-volume B2B/B2C order data across the sales-order lifecycle.",
      role: "Ran the user-driven data analysis and translated findings into product actions.",
      approach: "Analysed order data to isolate the specific stages causing delays and escalations.",
      solution: "Identified 3 fulfillment bottlenecks and drove targeted process improvements.",
      technology: ["SQL", "Funnel Analysis", "Product Analytics"],
      thinking: "Escalations are signals — tracing them to their workflow root cause is where the leverage is.",
      outcome: "Reduced order turnaround by 20% and post-launch escalations by 25%.",
      learning: "The fastest wins often come from fixing a few high-impact steps, not rebuilding everything.",
    },
  },
  {
    id: "hrms",
    title: "HRMS Product Optimisation & Payroll Automation",
    blurb: "End-to-end HRMS audit plus SQL-driven payroll automation for enterprise clients.",
    tags: ["HRMS", "Payroll", "SQL", "Automation"],
    flow: ["Product Audit", "Friction Points", "PRD Recommendations", "A/B Testing", "Automation"],
    company: "Sennsys Technologies",
    study: {
      problem: "The HRMS product had friction points and manual payroll reporting that introduced errors and delays.",
      context: "50+ enterprise clients and 15+ B2B stakeholders with strict compliance needs.",
      role: "Audited the product, managed stakeholders, and designed the testing & automation frameworks.",
      approach: "Identified 6 friction points via research, built a feature-adoption & A/B testing framework, and automated payroll reporting with SQL validation and Excel macros.",
      solution: "PRD-backed product improvements plus automated payroll workflows.",
      technology: ["SQL", "Excel Macros", "A/B Testing", "Stakeholder Management"],
      thinking: "Compliance-heavy products need reliability first — automation must eliminate error, not just save time.",
      outcome: "Raised compliance adherence by 20%, grew DAU by 18%, reduced defects by 30%, and cut payroll processing time by 45%.",
      learning: "Pairing qualitative audits with A/B evidence makes product bets far more defensible.",
    },
  },
];

export const PROCESS = [
  { n: "01", title: "Discover", desc: "Understand users, workflows and pain points." },
  { n: "02", title: "Define", desc: "Translate problems into clear requirements." },
  { n: "03", title: "Design", desc: "Create workflows and product solutions." },
  { n: "04", title: "Build", desc: "Work with technology teams to implement." },
  { n: "05", title: "Measure", desc: "Use data and feedback to improve." },
];

export const AI_FLOW = [
  "Incoming Document",
  "AI Extraction",
  "Structured Data",
  "Validation",
  "Business Rules",
  "Human Exception",
  "Automated Action",
];

export const SKILLS = [
  { group: "Product", items: ["Product Discovery", "PRD / BRD", "Feature Prioritisation", "Requirement Gathering", "User Research", "Product Analytics"] },
  { group: "AI & Gen-AI", items: ["Generative AI", "Prompt Engineering", "AI Agents", "ChatGPT", "Claude", "Google Gemini", "AI Workflow Automation", "AI-Assisted Product Design"] },
  { group: "Analytics", items: ["SQL", "Power BI", "Tableau", "KPI Monitoring", "ETL Pipelines", "Dashboarding"] },
  { group: "Execution", items: ["Agile / Scrum", "Stakeholder Management", "Workflow Automation", "Business Analysis"] },
  { group: "Domain", items: ["B2B/B2C E-Commerce", "Supply Chain", "Warehouse Management", "Sales Order Lifecycle", "Fulfillment", "HRMS"] },
];

export const IMPACT = [
  { problem: "Manual, error-prone order intake", analysis: "Mapped intent-to-order workflow & validation logic", solution: "AI extraction + business rules automation", result: "43% better launch consistency, 20% faster turnaround" },
  { problem: "Slow, manual operational reporting", analysis: "Identified reporting effort & data gaps", solution: "Automated ETL + real-time KPI dashboards", result: "40% less reporting effort, 15+ hrs saved weekly" },
  { problem: "HRMS friction & payroll errors", analysis: "End-to-end audit across 50+ clients", solution: "PRD-backed fixes + payroll automation", result: "45% faster payroll, 30% fewer defects" },
];

import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";

const BASE_FAQS = (service) => [
  {
    question: `What is ${service} at ScaleDesk Technology?`,
    answer: `ScaleDesk Technology delivers ${service.toLowerCase()} for startups, high-growth businesses, and enterprises — combining Product Engineering discipline with AI Solutions, cloud-native architecture, and enterprise-grade delivery.`,
  },
  {
    question: `Why choose ScaleDesk for ${service.toLowerCase()}?`,
    answer:
      "ScaleDesk combines deep Product Engineering expertise with AI automation, enterprise software experience, and a proven delivery model. Our teams build systems designed to scale.",
  },
  {
    question: "How do I get started with ScaleDesk Technology?",
    answer:
      "Contact our engineering team at contact@scaledesktechnology.com or visit scaledesktechnology.com/contact to schedule a consultation on your product, platform, or automation requirements.",
  },
];

function servicePage(def) {
  return createSeoPage({
    category: "service",
    searchIntent: "commercial",
    internalLinks: DEFAULT_INTERNAL_LINKS,
    faqs: BASE_FAQS(def.title),
    cta: { label: "Schedule a Consultation", href: "/contact" },
    ...def,
  });
}

export const SERVICES = [
  servicePage({
    slug: "product-engineering",
    title: "Product Engineering Services",
    seoTitle: "Product Engineering Company & Services | ScaleDesk Technology",
    metaDescription:
      "ScaleDesk Technology is a product and technology company delivering end-to-end product engineering services — from MVP to enterprise-scale platforms. India & global delivery.",
    primaryKeyword: "Product Engineering Services",
    secondaryKeywords: [
      "Product Engineering Company",
      "Product Engineering India",
      "Product Engineering Consulting",
      "Product Development Engineering",
    ],
    longTailKeywords: [
      "product engineering services for startups",
      "enterprise product engineering company India",
      "full cycle product engineering partner",
    ],
    lsiKeywords: [
      "platform engineering",
      "product architecture",
      "scalable software products",
      "engineering delivery",
    ],
    semanticKeywords: ["ScaleDesk Product Engineering", "build and scale digital products"],
    h1: "Product Engineering Services — Build Products That Scale",
    h2s: [
      "End-to-End Product Engineering",
      "MVP to Enterprise-Grade Platforms",
      "Product Engineering Process",
      "Why ScaleDesk for Product Engineering",
    ],
    intro:
      "ScaleDesk Technology is a product and technology company helping startups, high-growth businesses, and enterprises design, build, modernize, and scale digital products. Our Product Engineering services span architecture, development, AI integration, cloud infrastructure, and continuous delivery — engineered for long-term growth.",
    sections: [
      {
        title: "Full-Cycle Product Engineering",
        content:
          "From discovery and architecture through development, deployment, and scale — our Product Engineering teams own outcomes, not just output. We partner with founders and enterprise leaders to translate vision into reliable, measurable product systems.",
      },
      {
        title: "Engineering for Scale",
        content:
          "We apply structure over chaos: observability, security boundaries, performance budgets, and release discipline from day one. Whether you are validating an MVP or hardening an enterprise platform, our Product Engineering approach prevents operational debt.",
      },
    ],
    relatedSlugs: ["mvp-development", "saas-development", "enterprise-software-development"],
  }),
  servicePage({
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    seoTitle: "Enterprise Software Development Company | ScaleDesk Technology",
    metaDescription:
      "Enterprise software development company building secure, scalable platforms for global businesses. Custom enterprise software, system modernization, and digital transformation.",
    primaryKeyword: "Enterprise Software Development Company",
    secondaryKeywords: [
      "Enterprise Software Company",
      "Enterprise Software Development",
      "Custom Enterprise Software",
      "Enterprise Application Development",
    ],
    longTailKeywords: [
      "enterprise software development services India",
      "enterprise software modernization company",
      "custom enterprise platform development",
    ],
    lsiKeywords: ["ERP integration", "compliance", "multi-tenant", "enterprise architecture"],
    semanticKeywords: ["ScaleDesk enterprise software", "enterprise-grade engineering"],
    h1: "Enterprise Software Development Company",
    h2s: [
      "Custom Enterprise Software Solutions",
      "System Modernization & Integration",
      "Security & Compliance by Design",
      "Enterprise Delivery Model",
    ],
    intro:
      "ScaleDesk Technology is an Enterprise Software Development company delivering secure, scalable, and maintainable enterprise platforms. We build custom enterprise software, modernize legacy systems, and integrate complex operational workflows for global organizations.",
    sections: [
      {
        title: "Enterprise-Grade Engineering",
        content:
          "Our enterprise software development practice covers multi-tenant architecture, role-based access control, audit trails, API ecosystems, and cloud-native deployment — built for compliance-sensitive industries and high-volume operations.",
      },
    ],
    relatedSlugs: ["custom-software-development", "system-modernization", "digital-transformation"],
  }),
  servicePage({
    slug: "custom-software-development",
    title: "Custom Software Development",
    seoTitle: "Custom Software Development Company | ScaleDesk Technology",
    metaDescription:
      "Custom software development company building tailored web, mobile, and cloud applications. ScaleDesk Technology delivers bespoke software for startups and enterprises.",
    primaryKeyword: "Custom Software Development Company",
    secondaryKeywords: [
      "Custom Software Development",
      "Bespoke Software Development",
      "Tailored Software Solutions",
      "Software Development Company",
    ],
    longTailKeywords: [
      "custom software development company India",
      "bespoke application development services",
      "custom business software development",
    ],
    lsiKeywords: ["requirements engineering", "agile delivery", "software lifecycle"],
    semanticKeywords: ["ScaleDesk custom software", "tailored digital products"],
    h1: "Custom Software Development Company",
    intro:
      "ScaleDesk Technology delivers custom software development for businesses that need purpose-built applications — not off-the-shelf compromises. From internal tools to customer-facing platforms, we engineer software aligned to your workflows, data, and growth trajectory.",
    h2s: ["Tailored Software Solutions", "Custom Application Development", "Integration & Support"],
    relatedSlugs: ["web-application-development", "mobile-app-development", "backend-engineering"],
  }),
  servicePage({
    slug: "ai-development",
    title: "AI Development Services",
    seoTitle: "AI Development Company & AI Solutions | ScaleDesk Technology",
    metaDescription:
      "AI development company delivering AI solutions, machine learning systems, and intelligent automation. ScaleDesk Technology — artificial intelligence engineering for enterprise.",
    primaryKeyword: "AI Development Company",
    secondaryKeywords: [
      "AI Solutions Company",
      "Artificial Intelligence Company",
      "AI Software Development",
      "Machine Learning Development",
    ],
    longTailKeywords: [
      "AI development company India",
      "enterprise AI solutions provider",
      "custom AI software development services",
    ],
    lsiKeywords: ["LLM integration", "ML pipelines", "AI infrastructure", "model deployment"],
    semanticKeywords: ["ScaleDesk AI Solutions", "AI engineering partner"],
    h1: "AI Development Company — Enterprise AI Solutions",
    intro:
      "ScaleDesk Technology is an AI Development company building production-grade AI solutions — from intelligent automation and AI agents to ML pipelines and LLM-powered product features. We engineer AI systems with evaluation harnesses, guardrails, and human-in-the-loop design.",
    h2s: ["AI Solutions Engineering", "ML & LLM Integration", "Production AI Systems"],
    relatedSlugs: ["ai-automation", "ai-agents", "business-automation"],
  }),
  servicePage({
    slug: "ai-agents",
    title: "AI Agents Development",
    seoTitle: "AI Agents Development & Intelligent Automation | ScaleDesk",
    metaDescription:
      "Build production AI agents for workflow automation, document processing, and intelligent routing. ScaleDesk Technology — AI agents engineering with guardrails.",
    primaryKeyword: "AI Agents Development",
    secondaryKeywords: ["AI Agent Development", "Intelligent Agents", "Autonomous AI Systems"],
    longTailKeywords: ["custom AI agents for business automation", "enterprise AI agent development"],
    lsiKeywords: ["agent orchestration", "tool use", "RAG", "workflow automation"],
    semanticKeywords: ["ScaleDesk AI agents", "intelligent automation agents"],
    h1: "AI Agents Development Services",
    intro:
      "ScaleDesk Technology builds AI agents that operate in production — not demos. Our AI agent development services cover workflow routing, document processing, internal knowledge retrieval, and assistive automation with explicit guardrails and human review paths.",
    h2s: ["Production AI Agents", "Agent Architecture", "Evaluation & Safety"],
    relatedSlugs: ["ai-development", "ai-automation", "business-automation"],
  }),
  servicePage({
    slug: "ai-automation",
    title: "AI Automation Services",
    seoTitle: "AI Automation Company | ScaleDesk Technology",
    metaDescription:
      "AI automation company delivering intelligent workflow automation, business process automation, and AI-powered operations. ScaleDesk Technology.",
    primaryKeyword: "AI Automation Company",
    secondaryKeywords: ["AI Automation Services", "Intelligent Automation", "Workflow Automation"],
    longTailKeywords: ["AI automation services for enterprises", "intelligent business automation company"],
    lsiKeywords: ["RPA", "process mining", "orchestration", "no-code automation"],
    semanticKeywords: ["ScaleDesk AI automation", "automate business operations"],
    h1: "AI Automation Company",
    intro:
      "ScaleDesk Technology delivers AI automation that eliminates manually intensive processes across sales, operations, finance, and customer success. Our AI automation services combine intelligent agents, integration layers, and measurable ROI tracking.",
    h2s: ["Intelligent Workflow Automation", "AI-Powered Operations", "Integration & Orchestration"],
    relatedSlugs: ["business-automation", "ai-development", "ai-agents"],
  }),
  servicePage({
    slug: "business-automation",
    title: "Business Automation Services",
    seoTitle: "Business Automation Company | ScaleDesk Technology",
    metaDescription:
      "Business automation company helping enterprises automate sales, HR, finance, and operations. CRM automation, workflow automation, and custom integrations.",
    primaryKeyword: "Business Automation Company",
    secondaryKeywords: ["Business Process Automation", "Workflow Automation", "Operations Automation"],
    longTailKeywords: ["business automation services for SMB and enterprise", "CRM and HR automation company"],
    lsiKeywords: ["LeadForGrow", "CRM automation", "HRMS automation", "integration hub"],
    semanticKeywords: ["ScaleDesk business automation", "automate revenue operations"],
    h1: "Business Automation Company",
    intro:
      "ScaleDesk Technology is a Business Automation company engineering end-to-end automation across CRM, HRMS, finance, and operations. Powered by LeadForGrow™ and custom integration layers, we help teams eliminate repetitive work and scale efficiently.",
    h2s: ["CRM & Revenue Automation", "HR & Operations Automation", "Custom Integration Automation"],
    relatedSlugs: ["crm-development", "hrms-development", "ai-automation"],
  }),
  servicePage({
    slug: "saas-development",
    title: "SaaS Development Services",
    seoTitle: "SaaS Development Company | ScaleDesk Technology",
    metaDescription:
      "SaaS development company building multi-tenant SaaS platforms, subscription billing, and cloud-native SaaS products. From MVP to scale.",
    primaryKeyword: "SaaS Development Company",
    secondaryKeywords: ["SaaS Development", "SaaS Product Engineering", "Multi-Tenant SaaS"],
    longTailKeywords: ["SaaS development company India", "build SaaS product from scratch"],
    lsiKeywords: ["subscription billing", "tenant isolation", "SaaS architecture"],
    semanticKeywords: ["ScaleDesk SaaS development", "SaaS engineering partner"],
    h1: "SaaS Development Company",
    intro:
      "ScaleDesk Technology is a SaaS Development company engineering multi-tenant platforms with subscription billing, role-based access, analytics, and cloud-native infrastructure — built for recurring revenue and global scale.",
    h2s: ["Multi-Tenant SaaS Architecture", "SaaS MVP to Scale", "Billing & Analytics"],
    relatedSlugs: ["mvp-development", "product-engineering", "cloud-native-development"],
  }),
  servicePage({
    slug: "mvp-development",
    title: "MVP Development Services",
    seoTitle: "MVP Development Company | ScaleDesk Technology",
    metaDescription:
      "MVP development company helping startups validate ideas fast — then evolve to enterprise-grade products. Rapid MVP development with scalable architecture.",
    primaryKeyword: "MVP Development Company",
    secondaryKeywords: ["MVP Development", "Startup MVP", "Minimum Viable Product Development"],
    longTailKeywords: ["MVP development services for startups", "rapid MVP development company India"],
    lsiKeywords: ["product validation", "lean startup", "prototype to product"],
    semanticKeywords: ["ScaleDesk MVP development", "startup product engineering"],
    h1: "MVP Development Company",
    intro:
      "ScaleDesk Technology is an MVP Development company that helps founders validate quickly — without sacrificing the architecture needed to scale. Our MVP development services deliver working products in weeks, with a clear path to enterprise-grade engineering.",
    h2s: ["Rapid MVP Development", "Validate Then Scale", "MVP to Enterprise Path"],
    relatedSlugs: ["product-engineering", "saas-development", "web-application-development"],
  }),
  servicePage({
    slug: "crm-development",
    title: "CRM Development Services",
    seoTitle: "CRM Development Company | ScaleDesk Technology & LeadForGrow™",
    metaDescription:
      "CRM development company building custom CRM platforms and AI-powered CRM solutions. LeadForGrow™ AI CRM by ScaleDesk Technology.",
    primaryKeyword: "CRM Development Company",
    secondaryKeywords: ["CRM Development", "Custom CRM", "AI CRM Development", "LeadForGrow CRM"],
    longTailKeywords: ["custom CRM development services", "AI CRM development company"],
    lsiKeywords: ["LeadForGrow", "sales automation", "lead scoring", "revenue intelligence"],
    semanticKeywords: ["ScaleDesk CRM development", "LeadForGrow AI CRM"],
    h1: "CRM Development Company",
    intro:
      "ScaleDesk Technology is a CRM Development company engineering custom CRM platforms and AI-powered CRM solutions. Our flagship product LeadForGrow™ delivers revenue intelligence, lead scoring, and business automation — or we build bespoke CRM systems tailored to your GTM workflow.",
    h2s: ["Custom CRM Development", "LeadForGrow™ AI CRM", "CRM Integration & Automation"],
    relatedSlugs: ["business-automation", "ai-development", "leadforgrow-crm"],
  }),
  servicePage({
    slug: "hrms-development",
    title: "HRMS Development Services",
    seoTitle: "HRMS Development Company | PeopleForGrow™ | ScaleDesk Technology",
    metaDescription:
      "HRMS development company building human resource management systems. PeopleForGrow™ — modern HRMS platform by ScaleDesk Technology.",
    primaryKeyword: "HRMS Development Company",
    secondaryKeywords: ["HRMS Development", "HR Software Development", "PeopleForGrow", "HRM Platform"],
    longTailKeywords: ["custom HRMS development services", "HRMS software development company India"],
    lsiKeywords: ["payroll", "attendance", "employee management", "HR automation"],
    semanticKeywords: ["PeopleForGrow development", "HRMS platform engineering"],
    h1: "HRMS Development Company",
    intro:
      "ScaleDesk Technology is an HRMS Development company delivering custom human resource management systems and PeopleForGrow™ — a modern HRMS platform for attendance, payroll, employee lifecycle, and HR automation.",
    h2s: ["Custom HRMS Development", "PeopleForGrow™ Platform", "HR Automation & Integration"],
    relatedSlugs: ["business-automation", "enterprise-software-development", "peopleforgrow"],
  }),
  servicePage({
    slug: "web-application-development",
    title: "Web Application Development",
    seoTitle: "Web Application Development Company | ScaleDesk Technology",
    metaDescription:
      "Web application development company building responsive, scalable web apps with React, Next.js, and cloud-native backends. Enterprise web development.",
    primaryKeyword: "Web Application Development Company",
    secondaryKeywords: ["Web App Development", "Web Application Development", "Enterprise Web Apps"],
    longTailKeywords: ["web application development services India", "enterprise web app development company"],
    lsiKeywords: ["React", "Next.js", "SPA", "SSR", "progressive web apps"],
    semanticKeywords: ["ScaleDesk web development", "modern web applications"],
    h1: "Web Application Development Company",
    intro:
      "ScaleDesk Technology delivers web application development for customer-facing portals, internal dashboards, SaaS products, and enterprise web platforms — engineered with modern frameworks, performance optimization, and scalable backends.",
    h2s: ["Modern Web Application Stack", "Performance & SEO", "Enterprise Web Platforms"],
    relatedSlugs: ["frontend-engineering", "backend-engineering", "custom-software-development"],
  }),
  servicePage({
    slug: "mobile-app-development",
    title: "Mobile App Development",
    seoTitle: "Mobile App Development Company | ScaleDesk Technology",
    metaDescription:
      "Mobile app development company building iOS, Android, and cross-platform mobile applications for startups and enterprises.",
    primaryKeyword: "Mobile App Development Company",
    secondaryKeywords: ["Mobile App Development", "iOS Development", "Android Development", "Cross-Platform Apps"],
    longTailKeywords: ["mobile app development company India", "enterprise mobile application development"],
    lsiKeywords: ["React Native", "Flutter", "mobile UX", "app store deployment"],
    semanticKeywords: ["ScaleDesk mobile development", "mobile product engineering"],
    h1: "Mobile App Development Company",
    intro:
      "ScaleDesk Technology is a Mobile App Development company engineering native and cross-platform mobile applications integrated with cloud backends, analytics, and enterprise security requirements.",
    h2s: ["Native & Cross-Platform Apps", "Mobile Backend Integration", "App Store & Enterprise Deployment"],
    relatedSlugs: ["web-application-development", "backend-engineering", "product-engineering"],
  }),
  servicePage({
    slug: "cloud-native-development",
    title: "Cloud Native Development",
    seoTitle: "Cloud Native Development Company | ScaleDesk Technology",
    metaDescription:
      "Cloud native development company building Kubernetes, serverless, and microservices architectures. Cloud development for scalable enterprise platforms.",
    primaryKeyword: "Cloud Native Development",
    secondaryKeywords: ["Cloud Development Company", "Cloud Native Architecture", "Microservices Development"],
    longTailKeywords: ["cloud native development services", "cloud development company India"],
    lsiKeywords: ["Kubernetes", "serverless", "containers", "service mesh"],
    semanticKeywords: ["ScaleDesk cloud native", "cloud platform engineering"],
    h1: "Cloud Native Development Company",
    intro:
      "ScaleDesk Technology delivers cloud native development — Kubernetes orchestration, serverless functions, microservices, and multi-region reliability patterns — for teams scaling beyond single-region operations.",
    h2s: ["Cloud Native Architecture", "Kubernetes & Serverless", "Multi-Region Reliability"],
    relatedSlugs: ["cloud-infrastructure", "devops", "backend-engineering"],
  }),
  servicePage({
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure Services",
    seoTitle: "Cloud Infrastructure & DevOps | ScaleDesk Technology",
    metaDescription:
      "Cloud infrastructure services — AWS, GCP, Azure architecture, IaC, monitoring, and DevOps. ScaleDesk Technology cloud engineering.",
    primaryKeyword: "Cloud Infrastructure Services",
    secondaryKeywords: ["Cloud Engineering", "Cloud Architecture", "Infrastructure as Code"],
    longTailKeywords: ["cloud infrastructure services company", "managed cloud infrastructure India"],
    lsiKeywords: ["AWS", "GCP", "Azure", "Terraform", "monitoring"],
    semanticKeywords: ["ScaleDesk cloud infrastructure", "cloud ops engineering"],
    h1: "Cloud Infrastructure Services",
    intro:
      "ScaleDesk Technology provides cloud infrastructure engineering — architecture design, infrastructure as code, CI/CD pipelines, observability, and cost optimization across AWS, GCP, and Azure.",
    h2s: ["Cloud Architecture Design", "IaC & CI/CD", "Observability & Cost Optimization"],
    relatedSlugs: ["devops", "cloud-native-development", "data-pipelines"],
  }),
  servicePage({
    slug: "devops",
    title: "DevOps Services",
    seoTitle: "DevOps Services & Engineering | ScaleDesk Technology",
    metaDescription:
      "DevOps services for CI/CD, infrastructure automation, SRE practices, and release engineering. ScaleDesk Technology DevOps engineering.",
    primaryKeyword: "DevOps Services",
    secondaryKeywords: ["DevOps Engineering", "CI/CD", "Site Reliability Engineering", "Release Engineering"],
    longTailKeywords: ["DevOps services company India", "enterprise DevOps consulting"],
    lsiKeywords: ["GitOps", "pipeline automation", "SLOs", "incident response"],
    semanticKeywords: ["ScaleDesk DevOps", "continuous delivery engineering"],
    h1: "DevOps Services & Engineering",
    intro:
      "ScaleDesk Technology delivers DevOps services that accelerate release velocity while improving reliability — CI/CD pipelines, GitOps workflows, SRE practices, and automated infrastructure management.",
    h2s: ["CI/CD Pipeline Engineering", "SRE & Reliability", "GitOps & Automation"],
    relatedSlugs: ["cloud-infrastructure", "cloud-native-development", "backend-engineering"],
  }),
  servicePage({
    slug: "api-development",
    title: "API Development Services",
    seoTitle: "API Development Company | ScaleDesk Technology",
    metaDescription:
      "API development company building REST, GraphQL, and event-driven APIs for enterprise platforms. Secure, documented, scalable API engineering.",
    primaryKeyword: "API Development Company",
    secondaryKeywords: ["API Development", "REST API", "GraphQL API", "Microservices APIs"],
    longTailKeywords: ["API development services company", "enterprise API development India"],
    lsiKeywords: ["OpenAPI", "API gateway", "webhooks", "rate limiting"],
    semanticKeywords: ["ScaleDesk API development", "API platform engineering"],
    h1: "API Development Company",
    intro:
      "ScaleDesk Technology is an API Development company engineering REST, GraphQL, and event-driven APIs with authentication, rate limiting, versioning, and comprehensive documentation for internal and external consumers.",
    h2s: ["REST & GraphQL APIs", "API Security & Documentation", "Event-Driven Integration"],
    relatedSlugs: ["backend-engineering", "enterprise-software-development", "cloud-native-development"],
  }),
  servicePage({
    slug: "backend-engineering",
    title: "Backend Engineering Services",
    seoTitle: "Backend Development Company | ScaleDesk Technology",
    metaDescription:
      "Backend development company building scalable server-side systems, databases, and distributed architectures for enterprise applications.",
    primaryKeyword: "Backend Development Company",
    secondaryKeywords: ["Backend Engineering", "Server-Side Development", "Backend Architecture"],
    longTailKeywords: ["backend development company India", "enterprise backend engineering services"],
    lsiKeywords: ["Node.js", "Python", "PostgreSQL", "Redis", "message queues"],
    semanticKeywords: ["ScaleDesk backend engineering", "server-side product engineering"],
    h1: "Backend Development Company",
    intro:
      "ScaleDesk Technology delivers backend engineering for high-throughput, data-intensive applications — distributed systems, database design, caching layers, and secure server-side logic engineered for scale.",
    h2s: ["Scalable Backend Architecture", "Database & Data Layer", "Distributed Systems"],
    relatedSlugs: ["api-development", "data-pipelines", "cloud-native-development"],
  }),
  servicePage({
    slug: "frontend-engineering",
    title: "Frontend Engineering Services",
    seoTitle: "Frontend Development Company | ScaleDesk Technology",
    metaDescription:
      "Frontend development company building performant React, Next.js, and modern web interfaces. UI engineering with accessibility and Core Web Vitals optimization.",
    primaryKeyword: "Frontend Development Company",
    secondaryKeywords: ["Frontend Engineering", "React Development", "Next.js Development", "UI Engineering"],
    longTailKeywords: ["frontend development company India", "enterprise frontend engineering"],
    lsiKeywords: ["React", "Next.js", "TypeScript", "accessibility", "Core Web Vitals"],
    semanticKeywords: ["ScaleDesk frontend engineering", "modern UI development"],
    h1: "Frontend Development Company",
    intro:
      "ScaleDesk Technology provides frontend engineering with React, Next.js, and modern component architectures — optimized for performance, accessibility, SEO, and enterprise design systems.",
    h2s: ["Modern Frontend Stack", "Performance & Accessibility", "Design System Integration"],
    relatedSlugs: ["web-application-development", "ui-ux-design", "product-engineering"],
  }),
  servicePage({
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    seoTitle: "UI/UX Design Services | ScaleDesk Technology",
    metaDescription:
      "UI/UX design services for enterprise products, SaaS platforms, and mobile applications. User-centered design integrated with product engineering.",
    primaryKeyword: "UI/UX Design Services",
    secondaryKeywords: ["UI Design", "UX Design", "Product Design", "User Experience Design"],
    longTailKeywords: ["UI UX design services for SaaS", "enterprise UX design company"],
    lsiKeywords: ["design systems", "prototyping", "user research", "usability"],
    semanticKeywords: ["ScaleDesk UI UX design", "product design engineering"],
    h1: "UI/UX Design Services",
    intro:
      "ScaleDesk Technology integrates UI/UX design with Product Engineering — user research, wireframing, prototyping, design systems, and developer-ready specifications for web and mobile products.",
    h2s: ["User-Centered Product Design", "Design Systems", "Prototype to Production"],
    relatedSlugs: ["frontend-engineering", "web-application-development", "product-engineering"],
  }),
  servicePage({
    slug: "technology-consulting",
    title: "Technology Consulting",
    seoTitle: "Technology Consulting Company | ScaleDesk Technology",
    metaDescription:
      "Technology consulting company advising on architecture, digital transformation, AI strategy, and engineering organization design. IT consulting for enterprises.",
    primaryKeyword: "Technology Consulting Company",
    secondaryKeywords: ["IT Consulting Company", "IT Services Company", "Technology Advisory", "Digital Strategy"],
    longTailKeywords: ["technology consulting services India", "enterprise IT consulting company"],
    lsiKeywords: ["architecture review", "tech due diligence", "engineering roadmap"],
    semanticKeywords: ["ScaleDesk technology consulting", "IT consulting partner"],
    h1: "Technology Consulting Company",
    intro:
      "ScaleDesk Technology is a Technology Consulting company helping leadership teams make informed decisions on architecture, vendor selection, AI adoption, team structure, and digital transformation roadmaps.",
    h2s: ["Architecture & Strategy Advisory", "Digital Transformation Consulting", "Engineering Organization Design"],
    relatedSlugs: ["digital-transformation", "system-modernization", "product-engineering"],
  }),
  servicePage({
    slug: "digital-transformation",
    title: "Digital Transformation Services",
    seoTitle: "Digital Transformation Company | ScaleDesk Technology",
    metaDescription:
      "Digital transformation company modernizing operations, automating workflows, and rebuilding legacy systems for the cloud era. Enterprise digital transformation.",
    primaryKeyword: "Digital Transformation Company",
    secondaryKeywords: ["Digital Transformation Services", "Enterprise Modernization", "Business Digitization"],
    longTailKeywords: ["digital transformation consulting company India", "enterprise digital transformation services"],
    lsiKeywords: ["legacy modernization", "process digitization", "change management"],
    semanticKeywords: ["ScaleDesk digital transformation", "modernize enterprise operations"],
    h1: "Digital Transformation Company",
    intro:
      "ScaleDesk Technology drives digital transformation through system modernization, workflow automation, cloud migration, and AI integration — helping enterprises operate with the speed and intelligence of modern software companies.",
    h2s: ["Enterprise Digitization", "Process & Workflow Modernization", "Cloud & AI Transformation"],
    relatedSlugs: ["system-modernization", "technology-consulting", "business-automation"],
  }),
  servicePage({
    slug: "system-modernization",
    title: "System Modernization Services",
    seoTitle: "System Modernization & Legacy Migration | ScaleDesk Technology",
    metaDescription:
      "System modernization services — legacy migration, monolith to microservices, cloud re-platforming, and Strangler Fig patterns without stopping the business.",
    primaryKeyword: "System Modernization",
    secondaryKeywords: ["Legacy Modernization", "Application Modernization", "Legacy Migration"],
    longTailKeywords: ["legacy system modernization services", "monolith to microservices migration company"],
    lsiKeywords: ["Strangler Fig", "re-platforming", "zero-downtime migration"],
    semanticKeywords: ["ScaleDesk system modernization", "legacy to cloud migration"],
    h1: "System Modernization Services",
    intro:
      "ScaleDesk Technology modernizes legacy systems using Strangler Fig migrations, incremental domain extraction, and zero-downtime cutovers — preserving business continuity while unlocking cloud-native capabilities.",
    h2s: ["Legacy System Migration", "Monolith to Microservices", "Zero-Downtime Modernization"],
    relatedSlugs: ["enterprise-software-development", "digital-transformation", "cloud-native-development"],
  }),
  servicePage({
    slug: "software-engineering",
    title: "Software Engineering Services",
    seoTitle: "Software Development Company | ScaleDesk Technology",
    metaDescription:
      "Software development company delivering enterprise software engineering, full-stack development, and dedicated engineering teams for global clients.",
    primaryKeyword: "Software Development Company",
    secondaryKeywords: ["Software Engineering Services", "Software Development Services", "Dedicated Engineering Teams"],
    longTailKeywords: ["software development company India", "enterprise software engineering partner"],
    lsiKeywords: ["full-stack", "agile teams", "software delivery"],
    semanticKeywords: ["ScaleDesk software development", "engineering partner"],
    h1: "Software Development Company",
    intro:
      "ScaleDesk Technology is a Software Development company providing full-stack engineering, dedicated teams, and end-to-end delivery for startups and enterprises building mission-critical digital products.",
    h2s: ["Full-Stack Software Engineering", "Dedicated Engineering Teams", "Enterprise Delivery"],
    relatedSlugs: ["product-engineering", "custom-software-development", "enterprise-software-development"],
  }),
  servicePage({
    slug: "data-pipelines",
    title: "Data Pipeline Engineering",
    seoTitle: "Data Pipeline & Analytics Engineering | ScaleDesk Technology",
    metaDescription:
      "Data pipeline engineering — ETL/ELT, real-time streaming, data warehouses, and analytics infrastructure for enterprise data teams.",
    primaryKeyword: "Data Pipeline Engineering",
    secondaryKeywords: ["Data Engineering", "ETL Development", "Analytics Engineering", "Data Infrastructure"],
    longTailKeywords: ["data pipeline development services", "enterprise data engineering company"],
    lsiKeywords: ["Snowflake", "BigQuery", "dbt", "Kafka", "streaming"],
    semanticKeywords: ["ScaleDesk data pipelines", "analytics infrastructure"],
    h1: "Data Pipeline & Analytics Engineering",
    intro:
      "ScaleDesk Technology engineers data pipelines for batch and real-time workloads — ETL/ELT, cloud warehouses, streaming ingestion, and analytics-ready transformations at petabyte scale.",
    h2s: ["ETL/ELT Pipeline Development", "Real-Time Data Streaming", "Cloud Data Warehouses"],
    relatedSlugs: ["backend-engineering", "cloud-infrastructure", "ai-development"],
  }),
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}

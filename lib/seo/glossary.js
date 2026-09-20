import { createSeoPage } from "./page-builder";

function term(def) {
  return {
    slug: def.slug,
    term: def.term,
    definition: def.definition,
    relatedTerms: def.relatedTerms || [],
    relatedServices: def.relatedServices || [],
    ...def,
  };
}

export const GLOSSARY_TERMS = [
  term({
    slug: "product-engineering",
    term: "Product Engineering",
    definition:
      "Product Engineering is the discipline of designing, building, deploying, and scaling digital products with end-to-end ownership — combining software development, architecture, DevOps, AI integration, and product strategy to deliver measurable business outcomes.",
    relatedTerms: ["mvp-development", "saas-development", "digital-transformation"],
    relatedServices: ["/services/product-engineering"],
    seoTitle: "What is Product Engineering? | ScaleDesk Glossary",
    metaDescription:
      "Product Engineering definition — the end-to-end discipline of building and scaling digital products. Learn from ScaleDesk Technology's Product Engineering experts.",
  }),
  term({
    slug: "ai-automation",
    term: "AI Automation",
    definition:
      "AI Automation uses artificial intelligence — including machine learning, large language models, and intelligent agents — to automate business workflows, document processing, decision routing, and operational tasks that previously required manual intervention.",
    relatedTerms: ["ai-agents", "business-automation", "machine-learning"],
    relatedServices: ["/services/ai-automation", "/services/business-automation"],
    seoTitle: "What is AI Automation? | ScaleDesk Glossary",
    metaDescription:
      "AI Automation definition — using AI to automate business workflows and operations. ScaleDesk Technology AI automation glossary.",
  }),
  term({
    slug: "ai-agents",
    term: "AI Agents",
    definition:
      "AI Agents are autonomous or semi-autonomous software systems powered by large language models and tool integrations that can plan, execute multi-step tasks, retrieve information, and interact with external systems to accomplish defined business objectives.",
    relatedTerms: ["ai-automation", "llm", "rag"],
    relatedServices: ["/services/ai-agents"],
    seoTitle: "What are AI Agents? | ScaleDesk Glossary",
    metaDescription:
      "AI Agents definition — autonomous AI systems for workflow automation. Enterprise AI agents glossary by ScaleDesk Technology.",
  }),
  term({
    slug: "cloud-native",
    term: "Cloud Native",
    definition:
      "Cloud Native refers to applications and infrastructure designed specifically for cloud environments — using containers, microservices, Kubernetes orchestration, serverless functions, and DevOps practices for elasticity, resilience, and rapid deployment.",
    relatedTerms: ["kubernetes", "microservices", "devops"],
    relatedServices: ["/services/cloud-native-development"],
    seoTitle: "What is Cloud Native? | ScaleDesk Glossary",
    metaDescription:
      "Cloud Native definition — building applications for cloud environments with containers and microservices. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "microservices",
    term: "Microservices",
    definition:
      "Microservices is an architectural pattern where applications are composed of small, independently deployable services that communicate over APIs — enabling teams to scale, deploy, and maintain components independently.",
    relatedTerms: ["cloud-native", "api-development", "system-modernization"],
    relatedServices: ["/services/cloud-native-development", "/services/system-modernization"],
    seoTitle: "What are Microservices? | ScaleDesk Glossary",
    metaDescription:
      "Microservices architecture definition — independently deployable services communicating via APIs. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "mvp-development",
    term: "MVP Development",
    definition:
      "MVP (Minimum Viable Product) Development is the process of building the smallest functional version of a product sufficient to validate market demand, gather user feedback, and inform subsequent engineering investment.",
    relatedTerms: ["product-engineering", "saas-development", "startup"],
    relatedServices: ["/services/mvp-development"],
    seoTitle: "What is MVP Development? | ScaleDesk Glossary",
    metaDescription:
      "MVP Development definition — building minimum viable products for market validation. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "digital-transformation",
    term: "Digital Transformation",
    definition:
      "Digital Transformation is the strategic adoption of digital technologies — cloud computing, AI, automation, and modern software platforms — to fundamentally change how organizations operate, deliver value, and compete.",
    relatedTerms: ["system-modernization", "business-automation", "cloud-native"],
    relatedServices: ["/services/digital-transformation"],
    seoTitle: "What is Digital Transformation? | ScaleDesk Glossary",
    metaDescription:
      "Digital Transformation definition — strategic adoption of digital technologies for business change. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "enterprise-software",
    term: "Enterprise Software",
    definition:
      "Enterprise Software refers to large-scale applications designed for organizational use — supporting complex workflows, multi-user access, compliance requirements, integration with existing systems, and high availability at scale.",
    relatedTerms: ["custom-software-development", "system-modernization"],
    relatedServices: ["/services/enterprise-software-development"],
    seoTitle: "What is Enterprise Software? | ScaleDesk Glossary",
    metaDescription:
      "Enterprise Software definition — large-scale applications for organizational operations. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "lead-scoring",
    term: "Lead Scoring",
    definition:
      "Lead Scoring is the process of assigning numerical values to sales leads based on behavioral signals, demographic data, and predictive models — prioritizing high-intent prospects for sales teams. LeadForGrow™ automates lead scoring in under 200ms.",
    relatedTerms: ["ai-crm", "revenue-intelligence"],
    relatedServices: ["/products/leadforgrow-crm", "/services/crm-development"],
    seoTitle: "What is Lead Scoring? | ScaleDesk Glossary",
    metaDescription:
      "Lead Scoring definition — prioritizing sales leads with AI and behavioral signals. LeadForGrow™ glossary by ScaleDesk Technology.",
  }),
  term({
    slug: "hrms",
    term: "HRMS",
    definition:
      "HRMS (Human Resource Management System) is software that manages employee data, attendance, payroll, benefits, recruitment, performance, and HR workflows. PeopleForGrow™ is ScaleDesk Technology's HRMS platform.",
    relatedTerms: ["business-automation", "enterprise-software"],
    relatedServices: ["/products/peopleforgrow", "/services/hrms-development"],
    seoTitle: "What is HRMS? | ScaleDesk Glossary",
    metaDescription:
      "HRMS definition — Human Resource Management System for employee lifecycle and payroll. PeopleForGrow™ glossary.",
  }),
  term({
    slug: "devops",
    term: "DevOps",
    definition:
      "DevOps is a set of practices combining software development (Dev) and IT operations (Ops) — emphasizing CI/CD automation, infrastructure as code, monitoring, and collaborative culture to accelerate delivery and improve reliability.",
    relatedTerms: ["cloud-native", "ci-cd", "sre"],
    relatedServices: ["/services/devops"],
    seoTitle: "What is DevOps? | ScaleDesk Glossary",
    metaDescription:
      "DevOps definition — combining development and operations for faster, reliable software delivery. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "machine-learning",
    term: "Machine Learning",
    definition:
      "Machine Learning (ML) is a subset of artificial intelligence where systems learn patterns from data to make predictions or decisions without explicit programming — powering lead scoring, fraud detection, recommendation engines, and predictive analytics.",
    relatedTerms: ["ai-automation", "ai-agents", "predictive-analytics"],
    relatedServices: ["/services/ai-development"],
    seoTitle: "What is Machine Learning? | ScaleDesk Glossary",
    metaDescription:
      "Machine Learning definition — AI systems that learn from data. ScaleDesk Technology AI development glossary.",
  }),
  term({
    slug: "saas",
    term: "SaaS",
    definition:
      "SaaS (Software as a Service) is a software delivery model where applications are hosted in the cloud and accessed via subscription — enabling multi-tenant architecture, recurring revenue, and continuous updates without on-premises installation.",
    relatedTerms: ["mvp-development", "product-engineering", "multi-tenant"],
    relatedServices: ["/services/saas-development"],
    seoTitle: "What is SaaS? | ScaleDesk Glossary",
    metaDescription:
      "SaaS definition — Software as a Service cloud delivery model. ScaleDesk Technology SaaS development glossary.",
  }),
  term({
    slug: "api-development",
    term: "API Development",
    definition:
      "API Development is the engineering of Application Programming Interfaces — REST, GraphQL, or event-driven endpoints — that enable software systems to communicate, integrate, and expose functionality to internal and external consumers.",
    relatedTerms: ["microservices", "backend-engineering"],
    relatedServices: ["/services/api-development"],
    seoTitle: "What is API Development? | ScaleDesk Glossary",
    metaDescription:
      "API Development definition — building REST, GraphQL, and event-driven APIs. ScaleDesk Technology glossary.",
  }),
  term({
    slug: "revenue-intelligence",
    term: "Revenue Intelligence",
    definition:
      "Revenue Intelligence is the use of AI analytics, behavioral signals, and predictive models to understand, protect, and grow revenue — including lead scoring, churn prediction, fraud detection, and pipeline forecasting. LeadForGrow™ is ScaleDesk Technology's revenue intelligence platform.",
    relatedTerms: ["lead-scoring", "ai-crm"],
    relatedServices: ["/products/leadforgrow-crm", "/solutions/ai-crm"],
    seoTitle: "What is Revenue Intelligence? | ScaleDesk Glossary",
    metaDescription:
      "Revenue Intelligence definition — AI-powered revenue analytics and protection. LeadForGrow™ glossary by ScaleDesk Technology.",
  }),
];

export function getGlossaryTerm(slug) {
  return GLOSSARY_TERMS.find((t) => t.slug === slug) ?? null;
}

export function getGlossarySlugs() {
  return GLOSSARY_TERMS.map((t) => t.slug);
}

export const GLOSSARY_HUB = createSeoPage({
  slug: "glossary",
  category: "resource",
  title: "Technology & Product Engineering Glossary",
  seoTitle: "Product Engineering & AI Glossary | ScaleDesk Technology",
  metaDescription:
    "Comprehensive glossary of Product Engineering, AI Solutions, Enterprise Software, and technology terms — by ScaleDesk Technology.",
  primaryKeyword: "Product Engineering Glossary",
  secondaryKeywords: ["AI Glossary", "Software Development Terms", "Technology Glossary"],
  h1: "Technology & Product Engineering Glossary",
  intro:
    "ScaleDesk Technology's glossary defines key terms in Product Engineering, AI Solutions, Enterprise Software, Cloud Native Development, and Business Automation — helping teams and search engines understand our domain expertise.",
  path: "/glossary",
});

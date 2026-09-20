export const INSIGHT_CATEGORIES = [
  "All",
  "Product Engineering",
  "Architecture",
  "AI & Automation",
  "Cloud & DevOps",
  "Security",
];

export const INSIGHTS = [
  {
    slug: "mvp-to-enterprise-product-engineering",
    category: "Product Engineering",
    type: "Perspective",
    title: "From MVP validation to enterprise-grade product engineering",
    excerpt:
      "How growth-stage companies evolve from fast prototypes to platforms that survive real traffic, real compliance, and real operational load.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    date: "June 12, 2026",
    readTime: "8 min read",
    author: "Product Engineering Team",
    featured: true,
    body: [
      "Most teams can ship an MVP. Fewer teams can evolve that MVP into a platform that enterprise customers trust. The gap is rarely talent—it is sequencing, architecture discipline, and product judgment under pressure.",
      "At ScaleDesk, we help companies move through three phases: validate, harden, and scale. Validation is about learning speed. Hardening introduces observability, security boundaries, and release discipline. Scaling introduces multi-tenant patterns, performance budgets, and operational ownership.",
      "The mistake we see most often is skipping the hardening phase because revenue pressure is high. That creates fragile systems that become expensive to fix later. A better path is incremental hardening alongside feature delivery—treating reliability as a product feature, not a future project.",
    ],
  },
  {
    slug: "ai-agents-modern-product-teams",
    category: "AI & Automation",
    type: "Research Report",
    title: "AI agents and intelligent automation for modern product teams",
    excerpt:
      "Where AI agents create real leverage in product workflows—and where human-in-the-loop design still matters.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    date: "May 28, 2026",
    readTime: "10 min read",
    author: "AI Solutions Team",
    featured: false,
    body: [
      "AI agents are moving from demos to production—but only when teams treat them as systems, not chat widgets. That means clear boundaries, evaluation harnesses, and fallback paths when confidence is low.",
      "The highest-value use cases we see today are operational: document processing, workflow routing, internal knowledge retrieval, and assistive coding inside defined guardrails. Each requires different latency, accuracy, and audit requirements.",
      "Our recommendation: start with a narrow workflow, measure accuracy on real data, and design explicit human review for edge cases. Expand scope only after the system proves stable in production.",
    ],
  },
  {
    slug: "product-thinking-for-engineering-leaders",
    category: "Product Engineering",
    type: "Perspective",
    title: "Product thinking for engineering leaders",
    excerpt:
      "Why the best technical leaders translate constraints into product decisions—not just faster delivery.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    date: "March 5, 2026",
    readTime: "7 min read",
    author: "ScaleDesk Leadership",
    featured: false,
    body: [
      "Engineering leaders are often judged on output. The best ones are evaluated on outcomes: retention, revenue enablement, operational cost, and customer trust.",
      "Product thinking means asking what problem is being solved, what success looks like, and what can be deliberately not built. That discipline protects teams from infinite scope.",
      "When engineering and product share a language of tradeoffs, roadmaps become realistic and architecture decisions stay aligned with business strategy.",
    ],
  },
];

export function getInsight(slug) {
  return INSIGHTS.find((item) => item.slug === slug);
}

export function getInsightSlugs() {
  return INSIGHTS.map((item) => item.slug);
}

export function getFeaturedInsight() {
  return INSIGHTS.find((item) => item.featured) || INSIGHTS[0];
}

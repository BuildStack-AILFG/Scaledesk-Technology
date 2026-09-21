/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
        ],
      },
      {
        source: "/(.*\\.(?:jpg|jpeg|png|webp|avif|svg|ico|woff2))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Renamed products ─────────────────────────────────────────
      { source: "/products/scaledesk-hrm", destination: "/products/peopleforgrow", permanent: true },
      { source: "/hrm", destination: "/products/peopleforgrow", permanent: true },
      { source: "/scaledesk-hrm", destination: "/products/peopleforgrow", permanent: true },
      { source: "/leadforgrow", destination: "/products/leadforgrow-crm", permanent: true },
      { source: "/leadforgrow-crm", destination: "/products/leadforgrow-crm", permanent: true },
      { source: "/talkforgrow", destination: "/products/talkforgrow", permanent: true },
      { source: "/product/:slug", destination: "/products/:slug", permanent: true },
      // ── Retired product pages ────────────────────────────────────
      { source: "/products/ai-analytics", destination: "/services/data-pipelines", permanent: true },
      { source: "/products/revenue-protection", destination: "/services", permanent: true },
      // ── Retired solutions pages (folded into platforms, agents, services) ──
      { source: "/solutions", destination: "/products", permanent: true },
      { source: "/solutions/ai-crm", destination: "/products/leadforgrow-crm", permanent: true },
      { source: "/solutions/hrms-platform", destination: "/products/peopleforgrow", permanent: true },
      { source: "/solutions/ai-agents", destination: "/agents", permanent: true },
      { source: "/solutions/business-automation", destination: "/services/business-automation", permanent: true },
      { source: "/solutions/data-analytics", destination: "/services/data-pipelines", permanent: true },
      { source: "/solutions/enterprise-portal", destination: "/services/custom-software-development", permanent: true },
      { source: "/solutions/cloud-migration", destination: "/services/cloud-native-development", permanent: true },
      { source: "/solutions/digital-transformation", destination: "/services/digital-transformation", permanent: true },
      { source: "/solutions/mvp-accelerator", destination: "/services/mvp-development", permanent: true },
      { source: "/solutions/revenue-protection", destination: "/services", permanent: true },
      { source: "/solutions/:slug", destination: "/products", permanent: true },
      // ── Retired content pages ────────────────────────────────────
      { source: "/case-studies", destination: "/insights", permanent: true },
      { source: "/case-studies/:slug", destination: "/insights", permanent: true },
      { source: "/resources", destination: "/insights", permanent: true },
      { source: "/insights/pillars/:slug", destination: "/insights", permanent: true },
      { source: "/insights/monolith-to-microservices-at-scale", destination: "/insights", permanent: true },
      { source: "/insights/cloud-native-reliability-patterns", destination: "/insights", permanent: true },
      { source: "/insights/zero-trust-multi-cloud", destination: "/insights", permanent: true },
      { source: "/insights/kafka-high-throughput-pipelines", destination: "/insights", permanent: true },
      { source: "/insights/observability-beyond-dashboards", destination: "/insights", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      // ── Founder pages folded into /about ─────────────────────────
      { source: "/about/founder", destination: "/about", permanent: true },
      { source: "/about/cto", destination: "/about", permanent: true },
      { source: "/team/saurabh-singh", destination: "/about", permanent: true },
      { source: "/founder", destination: "/about", permanent: true },
      { source: "/cto", destination: "/about", permanent: true },
      { source: "/author/saurabh-singh", destination: "/about", permanent: true },
      { source: "/saurabh-singh", destination: "/about", permanent: true },
      { source: "/legal/linkedin", destination: "/about", permanent: true },
      // ── Aliases ─────────────────────────────────────────────────
      { source: "/service/:slug", destination: "/services/:slug", permanent: true },
      { source: "/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/terms", destination: "/legal/terms-of-service", permanent: true },
      { source: "/cookies", destination: "/legal/cookie-policy", permanent: true },
      { source: "/company", destination: "/about", permanent: true },
      { source: "/platform", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;

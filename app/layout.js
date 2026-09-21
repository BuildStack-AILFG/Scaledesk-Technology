import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./corporate.css";
import SiteShell from "./components/shell/SiteShell";
import JsonLd from "./components/seo/JsonLd";
import { buildPageMetadata } from "../lib/seo/metadata";
import { siteGraph } from "../lib/seo/schema";
import { KEYWORDS } from "../lib/seo/config";
import { getNavData } from "../lib/nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = buildPageMetadata({
  title: "Products That Grow Your Business — AI Agents & Platforms",
  seoTitle: "ScaleDesk Technology | Products That Grow Your Business",
  metaDescription:
    "ScaleDesk Technology is a product company that helps businesses grow their sales with platforms such as LeadForGrow, ForGrow AI agents, and expert engineering services.",
  path: "/",
  primaryKeyword: "AI agents and business growth platforms",
  secondaryKeywords: [
    ...KEYWORDS.brand,
    ...KEYWORDS.core.slice(0, 8),
    ...KEYWORDS.products,
  ],
  longTailKeywords: [
    "AI CRM for small business",
    "AI agents for sales and support",
    "business messaging and social engagement software",
    "AI and automation company India",
  ],
});

/** Browser UI colour and scaling. */
export const viewport = {
  themeColor: "#0A2F6B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // Built on the server and passed down as plain JSON so the client shell does
  // not bundle the lib/seo content data.
  const nav = getNavData();

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" title="ScaleDesk Blog" />
      </head>
      <body
        className={`min-h-full flex flex-col ${inter.className} ${inter.variable}`}
      >
        <JsonLd data={siteGraph()} />
        <SiteShell nav={nav}>{children}</SiteShell>
        {/* Third-party chat widget. Was previously placed directly under <html>
            (invalid markup); same script, now loaded via next/script. */}
        <Script
          src="https://wap-production-ce44.up.railway.app/api/public/widget/dI0a6XETdWzXDuYq.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

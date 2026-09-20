import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import AmbientCanvas from "./components/AmbientCanvas";
import AtmosphereSystem from "./components/AtmosphereSystem";
import JsonLd from "./components/seo/JsonLd";
import { buildPageMetadata } from "../lib/seo/metadata";
import { siteGraph } from "../lib/seo/schema";
import { KEYWORDS } from "../lib/seo/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const metadata = buildPageMetadata({
  title: "Product Engineering Company — AI Solutions & Enterprise Software",
  seoTitle:
    "ScaleDesk Technology | Product Engineering, AI Solutions & Enterprise Software",
  metaDescription:
    "ScaleDesk Technology is a Product Engineering company delivering AI Solutions, Enterprise Software Development, Custom Software, IT Services, and Technology Consulting. Products: LeadForGrow™ AI CRM & ScaleDesk HRM™.",
  path: "/",
  primaryKeyword: "Product Engineering Company",
  secondaryKeywords: [
    ...KEYWORDS.brand,
    ...KEYWORDS.core.slice(0, 8),
    ...KEYWORDS.products,
  ],
  longTailKeywords: [
    "product engineering company India",
    "AI solutions company for enterprises",
    "enterprise software development partner",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
    
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
      </head>
    <script src="https://wap-production-ce44.up.railway.app/api/public/widget/dI0a6XETdWzXDuYq.js" async></script>
      <body
        className={`min-h-full flex flex-col bg-black text-white ${inter.className} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <JsonLd data={siteGraph()} />
        <AtmosphereSystem />
        <AmbientCanvas />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

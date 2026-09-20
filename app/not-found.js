import Link from "next/link";
import PageHero from "./components/pages/PageHero";
import { PLATFORMS_NAV } from "../lib/nav";

export const metadata = {
  title: "Page not found | ScaleDesk Technology",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <PageHero
        label="Error 404"
        title="We could not find that page"
        lead="The page may have moved. Here are some good places to start."
        narrow
      >
        <Link href="/" className="sd-btn sd-btn-primary">
          Go to the homepage
        </Link>
        <Link href="/products" className="sd-link">
          Explore platforms
        </Link>
      </PageHero>
      <section className="bg-white sd-section-tight">
        <div className="sd-container max-w-[760px]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {PLATFORMS_NAV.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="block rounded-2xl border border-[#dfe8ec] px-5 py-4 text-[18px] text-[#111] transition-colors hover:border-[#0a5fbe] hover:text-[#0a5fbe]">
                  {p.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

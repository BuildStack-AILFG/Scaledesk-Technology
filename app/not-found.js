import Link from "next/link";
import PageHero from "./components/pages/PageHero";
import { Arrow, IconTile, accent } from "./components/ui/CardParts";
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
        <Link href="/contact" className="sd-btn sd-btn-outline sd-btn-plain">
          Contact us
        </Link>
      </PageHero>
      <section className="bg-white pb-20 pt-2">
        <div className="sd-container max-w-[860px]">
          <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-sd-muted">Popular destinations</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PLATFORMS_NAV.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="sd-fcard group flex h-full items-center gap-4 p-4" style={accent(p.accent)}>
                  <IconTile logo={p.logo} mark={p.mark} color={p.accent} size={46} />
                  <span className="flex-1">
                    <span className="block font-display text-[16.5px] font-semibold tracking-tight text-sd-ink">{p.displayName}</span>
                    <span className="block text-[14px] text-sd-muted">{p.tagline}</span>
                  </span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

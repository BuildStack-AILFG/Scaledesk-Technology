import Link from "next/link";
import PageHero from "./components/pages/PageHero";
import Mark from "./components/shell/Marks";
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
                <Link href={p.href} className="sd-card-link group flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sd-surface">
                    <Mark name={p.mark} size={28} color={p.accent} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[16.5px] font-semibold tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
                      {p.displayName}
                    </span>
                    <span className="block text-[14px] text-sd-muted">{p.tagline}</span>
                  </span>
                  <span aria-hidden="true" className="text-sd-faint transition-all group-hover:translate-x-1 group-hover:text-sd-blue">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import { CLIENTS } from "../../../lib/proof";

/**
 * "Trusted by" strip under the hero. Uses a client's logo when one is set in
 * lib/proof.js (`logo`, `logoW`, `logoH`), otherwise a quiet wordmark.
 */
export default function TrustBar() {
  if (CLIENTS.length === 0) return null;

  return (
    <section aria-label="Our customers" className="border-y border-sd-line bg-white">
      <div className="sd-container flex flex-col items-center gap-5 py-8 md:flex-row md:gap-10">
        <p className="shrink-0 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-sd-muted md:text-left">
          Trusted by growing businesses
        </p>
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-around">
          {CLIENTS.map((c) => (
            <li key={c.name} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              {c.logo ? (
                <Image src={c.logo} alt={c.name} width={c.logoW ?? 120} height={c.logoH ?? 32} className="h-7 w-auto" />
              ) : (
                <span className="font-display text-[19px] font-bold tracking-tight text-sd-ink">{c.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

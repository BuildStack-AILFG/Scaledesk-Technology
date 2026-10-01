import Link from "next/link";
import { Plus } from "lucide-react";
import Reveal from "../shell/Reveal";

/**
 * Visible FAQ. The same items feed the FAQPage JSON-LD on the page, which
 * search engines only accept when the questions are actually shown.
 * Native <details> keeps it accessible with no client JS.
 */
export default function FaqList({ faqs, id = "faq" }) {
  return (
    <section id={id} className="bg-white sd-section scroll-mt-32">
      <div className="sd-container grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-36 lg:self-start">
          <p className="sd-label">FAQ</p>
          <h2 className="sd-h2 mt-4">Questions, answered</h2>
          <p className="sd-lead mt-5">Can&rsquo;t find what you need? Our team is happy to help.</p>
          <Link href="/contact" className="sd-link mt-6">
            Ask our experts
          </Link>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.question} className="sd-faq group rounded-2xl border border-sd-line bg-white transition-colors open:border-sd-line-strong open:bg-sd-surface">
              <summary className="flex items-center justify-between gap-6 px-6 py-5 font-display text-[17px] font-semibold tracking-tight text-sd-ink">
                {f.question}
                <span
                  className="sd-faq-chev flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sd-line bg-white text-sd-muted transition-transform duration-300"
                  aria-hidden="true"
                >
                  <Plus size={16} />
                </span>
              </summary>
              <p className="max-w-[680px] px-6 pb-6 text-[16px] leading-relaxed text-sd-body">{f.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

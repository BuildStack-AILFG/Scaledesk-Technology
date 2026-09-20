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
        <Reveal>
          <p className="sd-label">FAQ</p>
          <h2 className="sd-h2 mt-4">Questions, answered</h2>
          <p className="sd-lead mt-5">Cannot find what you need? Talk to our team.</p>
        </Reveal>
        <Reveal delay={100} className="divide-y divide-[#e6e8ee] border-y border-[#e6e8ee]">
          {faqs.map((f) => (
            <details key={f.question} className="sd-faq group">
              <summary className="flex items-center justify-between gap-6 py-5 text-[19px] text-[#111]">
                {f.question}
                <span className="sd-faq-chev shrink-0 text-[22px] text-[#8a93a0] transition-transform" aria-hidden="true">
                  &#8964;
                </span>
              </summary>
              <p className="max-w-[640px] pb-6 text-[16.5px] leading-relaxed text-[#333]">{f.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

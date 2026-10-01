import Reveal from "../shell/Reveal";

const STEPS = [
  { n: "01", title: "Choose your platform", body: "Start with the product that solves your most pressing problem, whether that is leads, chats, social or people." },
  { n: "02", title: "Add AI agents", body: "Bring in agents for calls, follow-ups, invoices and support to take routine work off your team." },
  { n: "03", title: "Tailor it with our experts", body: "Our team configures everything around how you work, and builds what is missing." },
  { n: "04", title: "Grow with confidence", body: "See what is working, and add more products as your business grows." },
];

/** Four connected steps: how a customer goes from first product to full suite. */
export default function HowWeWork() {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="sd-label">How it works</p>
          <h2 className="sd-h2 mt-4">Start simple, grow steadily</h2>
        </Reveal>
        <ol className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line behind the badges (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[28px] right-[calc(25%-28px)] top-[27px] hidden h-px bg-[linear-gradient(90deg,var(--sd-line-strong),var(--sd-line-strong)_60%,transparent)] lg:block"
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="relative">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sd-line bg-white font-display text-[17px] font-bold text-sd-navy shadow-[0_6px_16px_-8px_rgba(11,27,51,0.25)]">
                {s.n}
              </span>
              <h3 className="sd-h3 mt-6">{s.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-sd-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

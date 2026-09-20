import Reveal from "../shell/Reveal";

const STEPS = [
  { n: "01", title: "Choose your platform", body: "Start with the product that solves your most pressing problem, whether that is leads, chats, social or people." },
  { n: "02", title: "Add AI agents", body: "Bring in agents for calls, follow-ups, invoices and support to take routine work off your team." },
  { n: "03", title: "Tailor it with our experts", body: "Our team configures everything around how you work, and builds what is missing." },
  { n: "04", title: "Grow with confidence", body: "See what is working, and add more products as your business grows." },
];

/** Four plain steps: how a customer goes from first product to full suite. Text only. */
export default function HowWeWork() {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="sd-h2">Start simple, grow steadily</h2>
          <span className="sd-dash" aria-hidden="true" />
        </Reveal>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <p className="text-[44px] font-light leading-none text-[#00a3b0]">{s.n}</p>
              <h3 className="sd-h3 mt-4">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#333]">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

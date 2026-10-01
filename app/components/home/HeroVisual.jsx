import Mark from "../shell/Marks";

/**
 * Illustrative product composition for the homepage hero: a LeadForGrow
 * pipeline window with a TalkForGrow chat and an AI-agent card floating over
 * it. Pure HTML/CSS (no screenshots), so it stays crisp and on-brand. Figures
 * shown are sample UI content, not company claims. Decorative: hidden from AT.
 */
const STAGES = [
  {
    name: "New",
    tone: "#0a5fbe",
    deals: [
      { who: "Riverside Dental", amt: "₹48,000" },
      { who: "Urban Threads", amt: "₹1,20,000" },
    ],
  },
  {
    name: "Qualified",
    tone: "#00a3b0",
    deals: [
      { who: "Northwind Foods", amt: "₹2,40,000" },
      { who: "Peak Fitness", amt: "₹65,000" },
    ],
  },
  {
    name: "Won",
    tone: "#1f9d55",
    deals: [{ who: "Metro Logistics", amt: "₹3,10,000" }],
  },
];

const BARS = [38, 52, 45, 64, 58, 76, 88];

function Window({ children }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-sd-line bg-white shadow-[0_10px_24px_-6px_rgba(11,27,51,0.08),0_40px_80px_-24px_rgba(11,27,51,0.28)]">
      <div className="flex items-center gap-2 border-b border-sd-line bg-sd-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex items-center gap-2 text-[12px] font-medium text-sd-muted">
          <Mark name="crm" size={16} color="#0A5FBE" />
          LeadForGrow · Sales pipeline
        </span>
      </div>
      {children}
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[600px] select-none pb-16 pl-0 pt-10 sm:pl-10 lg:pl-6">
      <Window>
        <div className="grid grid-cols-[1fr_auto] gap-5 p-5">
          {/* Pipeline */}
          <div className="grid grid-cols-3 gap-3">
            {STAGES.map((s) => (
              <div key={s.name} className="min-w-0">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-sd-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.tone }} />
                  {s.name}
                </div>
                <div className="flex flex-col gap-2">
                  {s.deals.map((d) => (
                    <div key={d.who} className="rounded-lg border border-sd-line bg-white p-2.5 shadow-[0_1px_2px_rgba(11,27,51,0.05)]">
                      <div className="truncate text-[12px] font-semibold text-sd-ink">{d.who}</div>
                      <div className="mt-0.5 text-[11px] tabular-nums text-sd-muted">{d.amt}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Mini chart */}
          <div className="hidden w-[120px] flex-col rounded-xl bg-sd-surface p-3 sm:flex">
            <div className="text-[11px] font-medium text-sd-muted">Leads / week</div>
            <div className="mt-1 font-display text-[22px] font-bold leading-none tracking-tight text-sd-ink">412</div>
            <div className="mt-auto flex h-[64px] items-end gap-1 pt-3">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-[3px]"
                  style={{
                    height: `${h}%`,
                    background: i === BARS.length - 1 ? "#0a5fbe" : "rgba(10,95,190,0.22)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Window>

      {/* TalkForGrow chat */}
      <div className="sd-float absolute -bottom-10 left-0 w-[250px] rounded-2xl border border-sd-line bg-white p-3.5 shadow-[0_24px_48px_-16px_rgba(11,27,51,0.3)] sm:-left-4">
        <div className="flex items-center gap-2">
          <Mark name="talk" size={22} color="#1F9D55" />
          <span className="text-[12px] font-semibold text-sd-ink">WhatsApp · TalkForGrow</span>
        </div>
        <div className="mt-2.5 flex flex-col gap-1.5 text-[12px] leading-snug">
          <span className="max-w-[85%] self-start rounded-xl rounded-tl-sm bg-sd-surface px-3 py-1.5 text-sd-body">
            Hi! Is the premium plan available this week?
          </span>
          <span className="max-w-[85%] self-end rounded-xl rounded-tr-sm bg-[#dcf5e6] px-3 py-1.5 text-[#14532d]">
            Yes! I&rsquo;ve booked a demo for Thu, 11 AM ✓
          </span>
        </div>
      </div>

      {/* AI agent card */}
      <div className="sd-float-slow absolute -right-2 -top-2 w-[210px] rounded-2xl border border-white/10 bg-sd-navy p-3.5 text-white shadow-[0_24px_48px_-16px_rgba(6,31,74,0.55)] sm:-right-6">
        <div className="flex items-center gap-2 text-[12px] font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5eead4] opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5eead4]" />
          </span>
          ForGrow AI · Sales agent
        </div>
        <p className="mt-2 text-[12px] leading-snug text-white/75">Followed up with 18 leads and scored 6 as hot.</p>
      </div>
    </div>
  );
}

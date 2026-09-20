/**
 * Custom two-tone marks for ScaleDesk platforms and ForGrow AI agents.
 * Simple outlined geometry in the product's accent colour with a soft tint,
 * in the spirit of Zoho's product icons. No icon-library glyphs.
 */
const PATHS = {
  // LeadForGrow: a funnel
  crm: (c, t) => (
    <>
      <path d="M7 10h34L29 25v11l-10 4V25L7 10Z" fill={t} stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="38" cy="8" r="3" fill={c} />
    </>
  ),
  // TalkForGrow: two overlapping speech bubbles
  talk: (c, t) => (
    <>
      <path d="M6 9h22a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H16l-6 5v-5H6a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z" fill={t} stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 24h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2v5l-6-5H22a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" fill="#fff" stroke={c} strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  // EngageForGrow: concentric rings with a signal dot
  engage: (c, t) => (
    <>
      <circle cx="22" cy="26" r="17" fill={t} stroke={c} strokeWidth="2" />
      <circle cx="22" cy="26" r="8" fill="#fff" stroke={c} strokeWidth="2" />
      <circle cx="22" cy="26" r="2.8" fill={c} />
      <circle cx="38" cy="10" r="4" fill={c} />
    </>
  ),
  // PeopleForGrow: two people
  people: (c, t) => (
    <>
      <circle cx="19" cy="16" r="7" fill={t} stroke={c} strokeWidth="2" />
      <path d="M5 40a14 14 0 0 1 28 0" fill={t} stroke={c} strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="20" r="5" fill="#fff" stroke={c} strokeWidth="2" />
      <path d="M31 40h12a9 9 0 0 0-9-9" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  // Voice Agent: sound bars
  voice: (c) => (
    <>
      {[[8, 20, 28], [16, 12, 36], [24, 6, 42], [32, 14, 34], [40, 20, 28]].map(([x, y1, y2]) => (
        <line key={x} x1={x} y1={y1} x2={x} y2={y2} stroke={c} strokeWidth="4" strokeLinecap="round" />
      ))}
    </>
  ),
  // Financial Agent: rupee in a coin
  finance: (c, t) => (
    <>
      <circle cx="24" cy="24" r="18" fill={t} stroke={c} strokeWidth="2" />
      <path d="M17 15h14M17 21h14M17 15c9 0 9 11 0 11h-1l10 9" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Sales Agent: rising bars and arrow
  sales: (c, t) => (
    <>
      <rect x="6" y="28" width="8" height="14" rx="1.5" fill={t} stroke={c} strokeWidth="2" />
      <rect x="20" y="20" width="8" height="22" rx="1.5" fill={t} stroke={c} strokeWidth="2" />
      <rect x="34" y="12" width="8" height="30" rx="1.5" fill={t} stroke={c} strokeWidth="2" />
      <path d="M7 16l10-8 8 6 14-9m0 0h-7m7 0v7" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Support Agent: headset
  support: (c, t) => (
    <>
      <path d="M9 27v-4a15 15 0 0 1 30 0v4" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="26" width="8" height="12" rx="3" fill={t} stroke={c} strokeWidth="2" />
      <rect x="35" y="26" width="8" height="12" rx="3" fill={t} stroke={c} strokeWidth="2" />
      <path d="M39 38c0 4-5 6-11 6" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="44" r="2.4" fill={c} />
    </>
  ),
  // Hiring Agent: person with a tick
  hiring: (c, t) => (
    <>
      <circle cx="20" cy="15" r="7" fill={t} stroke={c} strokeWidth="2" />
      <path d="M6 40a14 14 0 0 1 28 0" fill={t} stroke={c} strokeWidth="2" strokeLinecap="round" />
      <circle cx="37" cy="33" r="8" fill="#fff" stroke={c} strokeWidth="2" />
      <path d="M33 33l3 3 5-6" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Marketing Agent: megaphone
  marketing: (c, t) => (
    <>
      <path d="M7 19v10h7l15 8V11l-15 8H7Z" fill={t} stroke={c} strokeWidth="2" strokeLinejoin="round" />
      <path d="M35 18a9 9 0 0 1 0 12M39 13a16 16 0 0 1 0 22" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 29l3 10h5" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Services (used on the homepage services list)
  consult: (c, t) => (
    <>
      <circle cx="24" cy="24" r="17" fill={t} stroke={c} strokeWidth="2" />
      <path d="M24 12v12l8 5" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  cloud: (c, t) => (
    <path d="M14 36a9 9 0 0 1-1-17.9A11 11 0 0 1 34 16a8 8 0 0 1 2 20H14Z" fill={t} stroke={c} strokeWidth="2" strokeLinejoin="round" />
  ),
  code: (c, t) => (
    <>
      <rect x="4" y="9" width="40" height="30" rx="4" fill={t} stroke={c} strokeWidth="2" />
      <path d="M18 19l-6 5 6 5M30 19l6 5-6 5" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  data: (c, t) => (
    <>
      <ellipse cx="24" cy="12" rx="15" ry="6" fill={t} stroke={c} strokeWidth="2" />
      <path d="M9 12v12c0 3.3 6.7 6 15 6s15-2.7 15-6V12M9 24v12c0 3.3 6.7 6 15 6s15-2.7 15-6V24" fill="none" stroke={c} strokeWidth="2" />
    </>
  ),
  automate: (c, t) => (
    <>
      <rect x="4" y="6" width="14" height="14" rx="3" fill={t} stroke={c} strokeWidth="2" />
      <rect x="30" y="28" width="14" height="14" rx="3" fill={t} stroke={c} strokeWidth="2" />
      <path d="M18 13h8a4 4 0 0 1 4 4v11" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
};

export default function Mark({ name, size = 44, color = "#0A5FBE", className = "" }) {
  const draw = PATHS[name];
  if (!draw) return null;
  // soft tint of the accent colour for fills
  const tint = `${color}22`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {draw(color, tint)}
    </svg>
  );
}

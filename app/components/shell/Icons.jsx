import { Users, MessageCircle, Briefcase } from "lucide-react";

/*
 * lucide-react 1.x no longer ships brand icons, so the few we need are drawn
 * here as simple, generic glyphs (not the platforms' trademarked logos).
 */

export function InstagramGlyph({ size = 20, className = "", style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInGlyph({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
    </svg>
  );
}

export function XGlyph({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.53 3h3.06l-6.68 7.64L21.77 21h-6.16l-4.83-6.3L5.26 21H2.2l7.15-8.18L1.9 3h6.31l4.36 5.76L17.53 3Zm-1.07 16.2h1.7L7.28 4.7H5.45l11 14.5Z" />
    </svg>
  );
}

export function GitHubGlyph({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const SOCIALS = { linkedin: LinkedInGlyph, x: XGlyph, github: GitHubGlyph };

export function SocialIcon({ id, ...props }) {
  const Cmp = SOCIALS[id];
  return Cmp ? <Cmp {...props} /> : null;
}

/** Product glyph by the string key used in lib/nav.js (keeps nav data serialisable). */
export function ProductIcon({ name, size = 22, color, className = "" }) {
  const style = color ? { color } : undefined;
  switch (name) {
    case "users":
      return <Users size={size} className={className} style={style} strokeWidth={1.75} aria-hidden="true" />;
    case "message":
      return <MessageCircle size={size} className={className} style={style} strokeWidth={1.75} aria-hidden="true" />;
    case "instagram":
      return <InstagramGlyph size={size} className={className} style={style} />;
    case "briefcase":
      return <Briefcase size={size} className={className} style={style} strokeWidth={1.75} aria-hidden="true" />;
    default:
      return null;
  }
}

/* General-purpose line icons for tiles (service / value / capability grids). */
import {
  Workflow,
  Code2,
  Layers,
  Lightbulb,
  Cloud,
  BarChart3,
  ShieldCheck,
  MessageSquare,
  CalendarCheck,
  Inbox,
  Zap,
  UserCheck,
  Wallet,
  FileText,
  Target,
  Handshake,
  Gauge,
  ClipboardList,
} from "lucide-react";

const GLYPHS = {
  workflow: Workflow,
  code: Code2,
  layers: Layers,
  bulb: Lightbulb,
  cloud: Cloud,
  chart: BarChart3,
  shield: ShieldCheck,
  chat: MessageSquare,
  calendar: CalendarCheck,
  inbox: Inbox,
  zap: Zap,
  usercheck: UserCheck,
  wallet: Wallet,
  file: FileText,
  target: Target,
  handshake: Handshake,
  gauge: Gauge,
  clipboard: ClipboardList,
  users: Users,
  message: MessageCircle,
  briefcase: Briefcase,
};

export function Glyph({ name, size = 32, color, className = "" }) {
  if (name === "instagram") return <InstagramGlyph size={size} className={className} style={color ? { color } : undefined} />;
  const Cmp = GLYPHS[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={1.5} className={className} style={color ? { color } : undefined} aria-hidden="true" />;
}

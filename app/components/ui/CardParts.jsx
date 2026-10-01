import Image from "next/image";
import Mark from "../shell/Marks";

/**
 * Small building blocks for the v2 card system (styles in app/corporate.css):
 *   <IconTile mark="crm" />          gradient chip around a product Mark
 *   <IconTile icon={ShieldCheck} />  same chip around a lucide icon
 *   <IconTile text="A" />            monogram chip (glossary, topics)
 *   <IconTile logo={p.logo} />       a product's real logo (falls back to `mark`)
 *   <Arrow />                        round arrow that fills when the parent .group is hovered
 * The accent colour comes from the nearest `--accent` CSS variable.
 */
export function IconTile({ logo, mark, icon: Icon, text, color, size = 52, className = "" }) {
  return (
    <span className={`sd-icon-tile ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {logo ? (
        <Image src={logo.src} alt="" width={Math.round(size * 0.62)} height={Math.round(size * 0.62)} className="object-contain" />
      ) : mark ? (
        <Mark name={mark} size={Math.round(size * 0.6)} color={color} />
      ) : Icon ? (
        <Icon size={Math.round(size * 0.42)} strokeWidth={2} />
      ) : (
        <span className="font-display text-[20px] font-bold leading-none">{text}</span>
      )}
    </span>
  );
}

export function Arrow({ className = "" }) {
  return (
    <span className={`sd-arrow ${className}`} aria-hidden="true">
      &rarr;
    </span>
  );
}

/** Inline style helper: <div style={accent("#0A5FBE")}> */
export function accent(color) {
  return color ? { "--accent": color } : undefined;
}

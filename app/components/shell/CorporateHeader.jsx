"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import Mark from "./Marks";

const TABS = [
  { key: "platforms", label: "Platforms" },
  { key: "agents", label: "AI Agents" },
  { key: "services", label: "Services" },
  { key: "industries", label: "Industries" },
  { key: "insights", label: "Blog" },
  { key: "company", label: "Company" },
];

/* ── Desktop panel ─────────────────────────────────────────────────────── */

function ItemRow({ item }) {
  return (
    <SmartLink
      href={item.href}
      external={item.external}
      className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-sd-surface"
    >
      {item.mark ? (
        <span className="mt-0.5 shrink-0">
          <Mark name={item.mark} size={34} color={item.accent} />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[16px] font-semibold text-sd-ink group-hover:text-sd-blue">
          {item.name}
          {item.external && <ArrowUpRight size={13} className="text-sd-faint" />}
        </span>
        {item.blurb && <span className="mt-0.5 block text-[14px] leading-snug text-sd-muted">{item.blurb}</span>}
      </span>
    </SmartLink>
  );
}

function Aside({ menu }) {
  if (!menu.launch && !menu.banner) return null;
  return (
    <div className="flex flex-col gap-4">
      {menu.launch && (
        <SmartLink
          href={menu.launch.href}
          external={menu.launch.external}
          className="sd-gradient-card block p-6 transition-opacity hover:opacity-95"
        >
          <span className="rounded-sm bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
            {menu.launch.tag}
          </span>
          <span className="mt-3 block font-display text-[20px] font-semibold leading-snug tracking-tight">
            {menu.launch.title}
          </span>
          <span className="mt-1.5 block text-[14px] leading-snug text-white/85">{menu.launch.blurb}</span>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold">
            {menu.launch.cta}
          </span>
        </SmartLink>
      )}
      {menu.banner && (
        <Link
          href={menu.banner.href}
          className="block rounded-[20px] border border-sd-line bg-sd-surface p-6 transition-colors hover:border-sd-line-strong"
        >
          <span className="block font-display text-[18px] font-semibold leading-snug tracking-tight text-sd-ink">
            {menu.banner.title}
          </span>
          <span className="mt-1.5 block text-[14px] leading-snug text-sd-muted">{menu.banner.blurb}</span>
          <span className="sd-link mt-4 !text-[14px]">{menu.banner.cta}</span>
        </Link>
      )}
    </div>
  );
}

function Panel({ menu }) {
  const [cat, setCat] = useState(menu.rail[0]?.id);
  const active = menu.rail.find((c) => c.id === cat) ?? menu.rail[0];
  const hasRail = menu.rail.length > 1;
  const hasAside = Boolean(menu.launch || menu.banner);

  return (
    <div
      className={`grid gap-8 ${
        hasRail && hasAside
          ? "lg:grid-cols-[250px_1fr_320px]"
          : hasRail
            ? "lg:grid-cols-[250px_1fr]"
            : hasAside
              ? "lg:grid-cols-[1fr_320px]"
              : ""
      }`}
    >
      {hasRail && (
        <ul className="border-r border-sd-line pr-4">
          {menu.rail.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onMouseEnter={() => setCat(c.id)}
                onFocus={() => setCat(c.id)}
                onClick={() => setCat(c.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[15px] transition-colors ${
                  active?.id === c.id
                    ? "bg-sd-surface font-semibold text-sd-navy"
                    : "text-sd-body hover:bg-sd-surface"
                }`}
              >
                {c.label}
                <ChevronRight size={15} className="text-sd-faint" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div>
        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
          {active?.items.map((it) => (
            <ItemRow key={it.href} item={it} />
          ))}
        </div>
        {menu.cta && (
          <div className="mt-4 border-t border-sd-line px-3 pt-4">
            <Link href={menu.cta.href} className="sd-link">
              {menu.cta.label}
            </Link>
          </div>
        )}
      </div>

      {hasAside && <Aside menu={menu} />}
    </div>
  );
}

/* ── Search overlay ────────────────────────────────────────────────────── */

function SearchPanel({ index, onClose }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current?.focus(), []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return index.filter((i) => i.group === "Platform" || i.group === "AI agent").slice(0, 8);
    return index
      .filter((i) => `${i.label} ${i.group} ${i.hint ?? ""}`.toLowerCase().includes(term))
      .slice(0, 8);
  }, [q, index]);

  return (
    <div className="sd-mega absolute inset-x-0 top-full border-b border-sd-line bg-white shadow-[0_24px_48px_-12px_rgba(11,27,51,0.18)]">
      <div className="mx-auto max-w-[900px] px-6 py-8">
        <div className="flex items-center gap-3 rounded-xl border border-sd-line-strong bg-sd-surface px-4 py-3 focus-within:border-sd-blue focus-within:bg-white">
          <Search size={20} className="text-sd-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search platforms, AI agents and services"
            className="w-full bg-transparent text-[18px] text-sd-ink placeholder-sd-muted outline-none"
            aria-label="Search the site"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="text-sd-muted hover:text-sd-ink">
            <X size={20} />
          </button>
        </div>
        <p className="mb-2 mt-6 px-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-sd-muted">
          {q.trim() ? "Results" : "Popular"}
        </p>
        {results.length === 0 ? (
          <p className="px-3 py-4 text-[16px] text-sd-muted">No matches. Try &ldquo;CRM&rdquo;, &ldquo;voice&rdquo; or &ldquo;automation&rdquo;.</p>
        ) : (
          <ul>
            {results.map((r) => (
              <li key={r.group + r.href + r.label}>
                <SmartLink
                  href={r.href}
                  external={r.external}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-sd-surface"
                >
                  <span className="text-[16px] font-medium text-sd-ink">{r.label}</span>
                  <span className="rounded-full bg-sd-surface px-2.5 py-0.5 text-[12px] text-sd-muted">{r.group}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ── Mobile drawer (L1 → L2 → L3 with Back) ────────────────────────────── */

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

function MobileDrawer({ nav, onNavigate, drawerRef }) {
  const [stack, setStack] = useState([]);

  // Move focus into the drawer when it opens and whenever the level changes.
  useEffect(() => {
    drawerRef.current?.querySelector(FOCUSABLE)?.focus();
  }, [stack, drawerRef]);
  const [tabKey, catId] = stack;
  const menu = tabKey ? nav.menus[tabKey] : null;
  const single = menu && menu.rail.length === 1;
  const cat = menu && (single ? menu.rail[0] : menu.rail.find((c) => c.id === catId));
  const row = "flex w-full items-center justify-between border-b border-sd-line px-1 py-4 text-left text-[17px] font-medium text-sd-ink";

  return (
    <div
      ref={drawerRef}
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-white px-6 pb-10 lg:hidden"
    >
      {stack.length > 0 && (
        <button
          type="button"
          onClick={() => setStack(stack.slice(0, -1))}
          className="flex items-center gap-1 py-4 text-[15px] font-semibold text-sd-blue"
        >
          <ChevronLeft size={16} /> Back
        </button>
      )}

      {!menu &&
        TABS.map((t) => (
          <button key={t.key} type="button" className={row} onClick={() => setStack([t.key])}>
            {t.label}
            <ChevronRight size={18} className="text-sd-faint" />
          </button>
        ))}

      {menu && !single && !catId &&
        menu.rail.map((c) => (
          <button key={c.id} type="button" className={row} onClick={() => setStack([tabKey, c.id])}>
            {c.label}
            <ChevronRight size={18} className="text-sd-faint" />
          </button>
        ))}

      {menu && cat && (single || catId) && (
        <>
          {cat.items.map((it) => (
            <SmartLink
              key={it.href}
              href={it.href}
              external={it.external}
              onClick={onNavigate}
              className="block border-b border-sd-line px-1 py-3.5"
            >
              <span className="block text-[16px] font-medium text-sd-ink">{it.name}</span>
              {it.blurb && <span className="mt-0.5 block text-[14px] text-sd-muted">{it.blurb}</span>}
            </SmartLink>
          ))}
          {menu.cta && (
            <Link href={menu.cta.href} onClick={onNavigate} className="sd-link mt-5">
              {menu.cta.label}
            </Link>
          )}
        </>
      )}

      {!menu && (
        <div className="mt-8 flex flex-col gap-3">
          <Link href={nav.cta.primary.href} onClick={onNavigate} className="sd-btn sd-btn-primary justify-center">
            {nav.cta.primary.label}
          </Link>
          <SmartLink href={nav.cta.signIn.href} external={nav.cta.signIn.external} className="sd-btn sd-btn-outline justify-center">
            {nav.cta.signIn.label}
          </SmartLink>
        </div>
      )}
    </div>
  );
}

/* ── Header ────────────────────────────────────────────────────────────── */

export default function CorporateHeader({ nav }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const wasMobileOpen = useRef(false);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, [cancelClose]);

  useEffect(() => {
    setOpen(null);
    setSearchOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    // Closing the drawer hands focus back to the menu button.
    if (wasMobileOpen.current && !mobileOpen) toggleRef.current?.focus();
    wasMobileOpen.current = mobileOpen;
    if (!mobileOpen) return () => {
      document.body.style.overflow = "";
    };

    // Keep Tab inside the open drawer (plus the close button).
    const onTab = (e) => {
      if (e.key !== "Tab" || !drawerRef.current) return;
      const items = [toggleRef.current, ...drawerRef.current.querySelectorAll(FOCUSABLE)].filter(Boolean);
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onTab);
    };
  }, [mobileOpen]);

  useEffect(() => cancelClose, [cancelClose]);

  // Transparent over the hero, frosted with a hairline once the page scrolls.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = open ? nav.menus[open] : null;
  const solid = scrolled || Boolean(menu) || searchOpen || mobileOpen;

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "border-sd-line bg-white/90 shadow-[0_6px_24px_-12px_rgba(11,27,51,0.15)] backdrop-blur-xl"
          : "border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center px-6 lg:px-8">
        <Link href="/" className="mr-8 shrink-0" aria-label="ScaleDesk Technology home">
          <Logo size="sm" preload />
        </Link>

        <nav className="hidden flex-1 items-center lg:flex" aria-label="Primary">
          {TABS.map((t) => {
            const isOpen = open === t.key;
            return (
              <button
                key={t.key}
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls="mega-panel"
                onMouseEnter={() => {
                  cancelClose();
                  setSearchOpen(false);
                  setOpen(t.key);
                }}
                // Open-only on click: hover has usually opened it already.
                onClick={() => {
                  cancelClose();
                  setSearchOpen(false);
                  setOpen(t.key);
                }}
                className={`relative flex h-[68px] items-center gap-1 px-3 text-[15px] font-medium transition-colors xl:px-3.5 ${
                  isOpen ? "text-sd-navy" : "text-sd-body hover:text-sd-navy"
                }`}
              >
                {t.label}
                <ChevronDown size={14} className={`text-sd-faint transition-transform ${isOpen ? "rotate-180" : ""}`} />
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-sd-blue transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => {
              setOpen(null);
              setSearchOpen((v) => !v);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-sd-body transition-colors hover:bg-sd-surface hover:text-sd-navy"
          >
            <Search size={19} strokeWidth={1.8} />
          </button>
          <SmartLink
            href={nav.cta.signIn.href}
            external={nav.cta.signIn.external}
            className="text-[15px] font-medium text-sd-body transition-colors hover:text-sd-navy"
          >
            Sign in
          </SmartLink>
          <SmartLink href={nav.cta.primary.href} external={nav.cta.primary.external} className="sd-btn sd-btn-primary sd-btn-sm">
            Talk to us
          </SmartLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-controls="mobile-drawer"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl text-sd-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menu && (
        <div
          id="mega-panel"
          onMouseEnter={cancelClose}
          className="sd-mega absolute inset-x-0 top-full hidden border-b border-sd-line bg-white shadow-[0_24px_48px_-12px_rgba(11,27,51,0.18)] lg:block"
        >
          <div className="mx-auto max-w-[1300px] px-6 py-7">
            <Panel key={open} menu={menu} />
          </div>
        </div>
      )}

      {searchOpen && <SearchPanel index={nav.search} onClose={() => setSearchOpen(false)} />}
      {mobileOpen && <MobileDrawer nav={nav} drawerRef={drawerRef} onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}

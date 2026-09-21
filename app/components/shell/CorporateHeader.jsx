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
      className="group flex items-start gap-4 rounded-md p-3 transition-colors hover:bg-[#f8f9fb]"
    >
      {item.mark ? (
        <span className="mt-0.5 shrink-0">
          <Mark name={item.mark} size={36} color={item.accent} />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[17px] text-[#111] group-hover:text-[#0a5fbe]">
          {item.name}
          {item.external && <ArrowUpRight size={13} className="text-[#8a93a0]" />}
        </span>
        {item.blurb && <span className="mt-0.5 block text-[14px] leading-snug text-[#555]">{item.blurb}</span>}
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
          <span className="mt-3 block font-[family-name:var(--font-display)] text-[21px] leading-snug">
            {menu.launch.title}
          </span>
          <span className="mt-1.5 block text-[14px] leading-snug text-white/85">{menu.launch.blurb}</span>
          <span className="mt-4 inline-block border-b border-white/70 pb-0.5 text-[13px] font-medium uppercase tracking-wide">
            {menu.launch.cta}
          </span>
        </SmartLink>
      )}
      {menu.banner && (
        <Link
          href={menu.banner.href}
          className="block rounded-lg border border-[#e6e8ee] bg-[#f8f9fb] p-6 transition-colors hover:bg-[#f2f5fa]"
        >
          <span className="block font-[family-name:var(--font-display)] text-[19px] leading-snug text-[#111]">
            {menu.banner.title}
          </span>
          <span className="mt-1.5 block text-[14px] leading-snug text-[#555]">{menu.banner.blurb}</span>
          <span className="sd-link mt-4 !text-[13px]">{menu.banner.cta}</span>
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
        <ul className="border-r border-[#e6e8ee] pr-4">
          {menu.rail.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onMouseEnter={() => setCat(c.id)}
                onFocus={() => setCat(c.id)}
                onClick={() => setCat(c.id)}
                className={`flex w-full items-center justify-between rounded-md px-3.5 py-3 text-left text-[16px] transition-colors ${
                  active?.id === c.id
                    ? "bg-[#f8f9fb] font-medium text-[#0a5fbe] shadow-[inset_3px_0_0_#0a5fbe]"
                    : "text-[#333] hover:bg-[#f8f9fb]"
                }`}
              >
                {c.label}
                <ChevronRight size={15} className="text-[#a3aab5]" />
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
          <div className="mt-4 border-t border-[#e6e8ee] px-3 pt-4">
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
    <div className="sd-mega absolute inset-x-0 top-full border-b border-[#e6e8ee] bg-white shadow-[0_18px_40px_rgba(15,27,23,0.14)]">
      <div className="mx-auto max-w-[900px] px-6 py-8">
        <div className="flex items-center gap-3 border-b-2 border-[#0a2f6b] pb-3">
          <Search size={22} className="text-[#0a2f6b]" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search platforms, AI agents and services"
            className="w-full bg-transparent text-[20px] text-[#111] placeholder-[#8a93a0] outline-none"
            aria-label="Search the site"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="text-[#555]">
            <X size={22} />
          </button>
        </div>
        <p className="mb-2 mt-5 text-[13px] font-medium uppercase tracking-wide text-[#666]">
          {q.trim() ? "Results" : "Popular"}
        </p>
        {results.length === 0 ? (
          <p className="py-4 text-[16px] text-[#555]">No matches. Try &ldquo;CRM&rdquo;, &ldquo;voice&rdquo; or &ldquo;automation&rdquo;.</p>
        ) : (
          <ul>
            {results.map((r) => (
              <li key={r.group + r.href + r.label}>
                <SmartLink
                  href={r.href}
                  external={r.external}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-[#f8f9fb]"
                >
                  <span className="text-[17px] text-[#111]">{r.label}</span>
                  <span className="text-[13px] text-[#666]">{r.group}</span>
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

function MobileDrawer({ nav, onNavigate }) {
  const [stack, setStack] = useState([]);
  const [tabKey, catId] = stack;
  const menu = tabKey ? nav.menus[tabKey] : null;
  const single = menu && menu.rail.length === 1;
  const cat = menu && (single ? menu.rail[0] : menu.rail.find((c) => c.id === catId));
  const row = "flex w-full items-center justify-between border-b border-[#e6e8ee] px-1 py-4 text-left text-[18px] text-[#111]";

  return (
    <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white px-6 pb-10 lg:hidden">
      {stack.length > 0 && (
        <button
          type="button"
          onClick={() => setStack(stack.slice(0, -1))}
          className="flex items-center gap-1 py-4 text-[15px] font-medium text-[#0a5fbe]"
        >
          <ChevronLeft size={16} /> Back
        </button>
      )}

      {!menu &&
        TABS.map((t) => (
          <button key={t.key} type="button" className={row} onClick={() => setStack([t.key])}>
            {t.label}
            <ChevronRight size={18} className="text-[#a3aab5]" />
          </button>
        ))}

      {menu && !single && !catId &&
        menu.rail.map((c) => (
          <button key={c.id} type="button" className={row} onClick={() => setStack([tabKey, c.id])}>
            {c.label}
            <ChevronRight size={18} className="text-[#a3aab5]" />
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
              className="block border-b border-[#e6e8ee] px-1 py-3.5"
            >
              <span className="block text-[17px] text-[#111]">{it.name}</span>
              {it.blurb && <span className="mt-0.5 block text-[14px] text-[#666]">{it.blurb}</span>}
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => cancelClose, [cancelClose]);

  const menu = open ? nav.menus[open] : null;

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      className="sticky top-0 z-50 w-full border-b border-[#e6e8ee] bg-white"
    >
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center px-6 lg:px-8">
        <Link href="/" className="mr-10 shrink-0" aria-label="ScaleDesk Technology home">
          <Logo />
        </Link>

        <nav className="hidden flex-1 items-center lg:flex" aria-label="Primary">
          {TABS.map((t) => {
            const isOpen = open === t.key;
            return (
              <button
                key={t.key}
                type="button"
                aria-expanded={isOpen}
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
                className={`flex h-[72px] items-center gap-1.5 px-4 text-[17px] transition-colors ${
                  isOpen ? "text-[#0a5fbe]" : "text-[#111] hover:text-[#0a5fbe]"
                }`}
              >
                {t.label}
                <ChevronDown size={15} className={`text-[#8a93a0] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => {
              setOpen(null);
              setSearchOpen((v) => !v);
            }}
            className="text-[#111] transition-colors hover:text-[#0a5fbe]"
          >
            <Search size={23} strokeWidth={1.6} />
          </button>
          <SmartLink
            href={nav.cta.signIn.href}
            external={nav.cta.signIn.external}
            className="text-[17px] text-[#0a5fbe] hover:underline"
          >
            Sign In
          </SmartLink>
          <SmartLink
            href={nav.cta.primary.href}
            external={nav.cta.primary.external}
            className="rounded-full border border-[#0a5fbe] px-6 py-2 text-[17px] text-[#0a5fbe] transition-colors hover:bg-[#0a5fbe] hover:text-white"
          >
            Talk to us
          </SmartLink>
        </div>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded text-[#111] lg:hidden"
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
          className="sd-mega absolute inset-x-0 top-full hidden border-b border-[#e6e8ee] bg-white shadow-[0_18px_40px_rgba(15,27,23,0.12)] lg:block"
        >
          <div className="mx-auto max-w-[1300px] px-6 py-7">
            <Panel key={open} menu={menu} />
          </div>
        </div>
      )}

      {searchOpen && <SearchPanel index={nav.search} onClose={() => setSearchOpen(false)} />}
      {mobileOpen && <MobileDrawer nav={nav} onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}

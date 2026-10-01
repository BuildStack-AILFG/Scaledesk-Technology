import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import PageHero from "./PageHero";
import { TableOfContents } from "../blog/ArticleChrome";
import { IconTile, accent } from "../ui/CardParts";
import { CalendarDays, Eye, FileCheck2, Lock, Mail, ShieldCheck, UserCheck } from "lucide-react";
import { pageGraph } from "../../../lib/seo/schema";
import { LEGAL_RELATED_LINKS } from "../../../lib/legal/pages";

function Paragraphs({ items = [] }) {
  return items.map((p, i) => (
    <p key={i} className="mt-4 text-[16.5px] leading-relaxed text-sd-body first:mt-0">
      {p}
    </p>
  ));
}

function BulletList({ items = [] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((li, i) => (
        <li key={i} className="flex items-start gap-3 text-[16.5px] leading-relaxed text-sd-body">
          <span className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-sd-teal" aria-hidden="true" />
          {li}
        </li>
      ))}
    </ul>
  );
}

function Section({ section, n }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-t border-sd-line py-10 first:border-t-0 first:pt-0">
      <h2 className="sd-h3 flex items-center gap-3.5">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sd-navy font-display text-[14px] font-bold text-white shadow-[0_6px_14px_-6px_rgba(10,47,107,0.6)]"
          aria-hidden="true"
        >
          {String(n).padStart(2, "0")}
        </span>
        {section.title}
      </h2>
      <div className="mt-5 sm:pl-[50px]">
        <Paragraphs items={section.paragraphs} />
        {section.list && <BulletList items={section.list} />}
        {section.subsections?.map((sub) => (
          <div key={sub.title} className="mt-6">
            <h3 className="font-display text-[17px] font-semibold tracking-tight text-sd-ink">{sub.title}</h3>
            <Paragraphs items={sub.paragraphs} />
            {sub.list && <BulletList items={sub.list} />}
          </div>
        ))}
        {section.table && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-sd-line">
            <table className="w-full min-w-[560px] border-collapse text-left text-[15.5px]">
              <thead className="bg-sd-surface text-sd-ink">
                <tr>
                  {section.table.headers.map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-sd-line">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 align-top leading-relaxed ${j === 0 ? "font-medium text-sd-ink" : "text-sd-body"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section.link && (
          <div className="mt-6">
            {section.link.external ? (
              <a href={section.link.href} target="_blank" rel="noopener noreferrer" className="sd-link">
                {section.link.label}
              </a>
            ) : (
              <Link href={section.link.href} className="sd-link">
                {section.link.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

const HIGHLIGHT_ICONS = [ShieldCheck, Lock, Eye, UserCheck, FileCheck2];
const HIGHLIGHT_ACCENTS = ["#0A5FBE", "#00A3B0", "#7C4DFF", "#1F9D55", "#E58A00"];

/** Legal page (privacy, terms, cookies, security): document switcher, contents card and a paper-style document. */
export default function LegalPage({ page, currentPath, seoTitle, description }) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Legal", href: "/legal/privacy-policy" },
    { name: page.title, href: currentPath },
  ];
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: seoTitle || page.title, description: description || page.subtitle, path: currentPath },
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label="Legal" title={page.title} lead={page.subtitle} narrow>
          <span className="sd-chip !px-3.5 !py-1.5 !text-[14px]">
            <CalendarDays size={14} className="text-sd-muted" aria-hidden="true" />
            Last updated {page.lastUpdated}
          </span>
        </PageHero>

        <section className="sd-surface pb-20 pt-10 lg:pb-28">
          {/* Switch between the legal documents */}
        <nav aria-label="Legal documents" className="sd-container mb-8">
          <ul className="mx-auto flex max-w-max flex-wrap justify-center gap-1.5 rounded-2xl border border-sd-line bg-white p-1.5 shadow-[0_6px_18px_-10px_rgba(11,27,51,0.25)]">
            {LEGAL_RELATED_LINKS.map((l) => {
              const on = l.href === currentPath;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={on ? "page" : undefined}
                    className={`block rounded-xl px-4 py-2 text-[14.5px] font-medium transition-colors ${
                      on ? "bg-sd-navy text-white" : "text-sd-body hover:bg-sd-surface hover:text-sd-navy"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

          <div className="sd-container grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="sd-card p-6">
                <TableOfContents items={page.sections.map((x) => ({ id: x.id, text: x.title }))} />
              </div>
            </aside>

            <article className="sd-card min-w-0 p-6 sm:p-10 lg:p-12">
              {page.intro && (
                <div className="relative mb-12 overflow-hidden rounded-[18px] bg-sd-tint p-7 pl-8">
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#0a5fbe,#00a3b0)]" aria-hidden="true" />
                  <Paragraphs items={page.intro} />
                </div>
              )}
              {page.highlights && (
                <div className="mb-12 grid gap-4 sm:grid-cols-2">
                  {page.highlights.map((h, i) => (
                    <div
                      key={h.title}
                      className="sd-fcard sd-fcard-tint p-6"
                      style={accent(HIGHLIGHT_ACCENTS[i % HIGHLIGHT_ACCENTS.length])}
                    >
                      <IconTile icon={HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]} size={44} />
                      <h3 className="mt-4 font-display text-[17px] font-semibold tracking-tight text-sd-ink">{h.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-sd-muted">{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {page.sections.map((s, i) => (
                <Section key={s.id} section={s} n={i + 1} />
              ))}
              {page.contactEmail && (
                <div className="sd-fcard sd-fcard-dark mt-12 flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
                  <span className="sd-fcard-grid" aria-hidden="true" />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7fe3ea]">
                      {page.contactLabel || "Questions"}
                    </p>
                    <p className="mt-2 font-display text-[20px] font-bold tracking-tight text-white">Have a question about this policy?</p>
                  </div>
                  <a href={`mailto:${page.contactEmail}`} className="sd-btn sd-btn-light sd-btn-plain">
                    <Mail size={16} aria-hidden="true" />
                    {page.contactEmail}
                  </a>
                </div>
              )}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

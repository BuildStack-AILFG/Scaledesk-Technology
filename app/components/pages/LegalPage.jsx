import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import PageHero from "./PageHero";
import { TableOfContents } from "../blog/ArticleChrome";
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

function Section({ section }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-t border-sd-line py-10 first:border-t-0 first:pt-0">
      <h2 className="sd-h3">{section.title}</h2>
      <div className="mt-4">
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

/** Light legal page (privacy, terms, cookies, security): contents list + readable sections. */
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
  const related = LEGAL_RELATED_LINKS.filter((l) => l.href !== currentPath);

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label={`Legal · Updated ${page.lastUpdated}`} title={page.title} lead={page.subtitle} narrow />

        <section className="bg-white sd-section">
          <div className="sd-container grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <TableOfContents items={page.sections.map((x) => ({ id: x.id, text: x.title }))} />
              {related.length > 0 && (
                <div className="mt-8 rounded-2xl border border-sd-line bg-sd-surface p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-sd-muted">Related</p>
                  <ul className="mt-3 space-y-2">
                    {related.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-[14.5px] font-medium text-sd-blue hover:text-sd-navy">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            <div className="min-w-0 max-w-[780px]">
              {page.intro && (
                <div className="mb-12 rounded-[20px] border border-sd-line bg-sd-surface p-7">
                  <Paragraphs items={page.intro} />
                </div>
              )}
              {page.highlights && (
                <div className="mb-10 grid gap-5 sm:grid-cols-2">
                  {page.highlights.map((h) => (
                    <div key={h.title} className="sd-card p-6">
                      <h3 className="font-display text-[17px] font-semibold tracking-tight text-sd-ink">{h.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-sd-muted">{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {page.sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}
              {page.contactEmail && (
                <div className="mt-12 rounded-[20px] border border-sd-line bg-sd-surface p-7">
                  <p className="sd-label">{page.contactLabel || "Questions"}</p>
                  <p className="mt-3 text-[16.5px] text-sd-body">
                    Write to us at{" "}
                    <a href={`mailto:${page.contactEmail}`} className="font-medium text-sd-blue underline underline-offset-2 hover:text-sd-navy">
                      {page.contactEmail}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

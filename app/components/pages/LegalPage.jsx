import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import PageHero from "./PageHero";
import { pageGraph } from "../../../lib/seo/schema";
import { LEGAL_RELATED_LINKS } from "../../../lib/legal/pages";

function Paragraphs({ items = [] }) {
  return items.map((p, i) => (
    <p key={i} className="mt-4 text-[17px] leading-relaxed text-[#333] first:mt-0">
      {p}
    </p>
  ));
}

function BulletList({ items = [] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((li, i) => (
        <li key={i} className="flex items-start gap-3 text-[17px] leading-relaxed text-[#333]">
          <span className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#00a3b0]" aria-hidden="true" />
          {li}
        </li>
      ))}
    </ul>
  );
}

function Section({ section }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-t border-[#dfe8ec] py-9 first:border-t-0 first:pt-0">
      <h2 className="sd-h3">{section.title}</h2>
      <div className="mt-4">
        <Paragraphs items={section.paragraphs} />
        {section.list && <BulletList items={section.list} />}
        {section.subsections?.map((sub) => (
          <div key={sub.title} className="mt-6">
            <h3 className="text-[19px] font-medium text-[#111]">{sub.title}</h3>
            <Paragraphs items={sub.paragraphs} />
            {sub.list && <BulletList items={sub.list} />}
          </div>
        ))}
        {section.table && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#dfe8ec]">
            <table className="w-full min-w-[560px] border-collapse text-left text-[15.5px]">
              <thead className="bg-[#f0f8f9] text-[#111]">
                <tr>
                  {section.table.headers.map((h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-[#dfe8ec]">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 align-top leading-relaxed ${j === 0 ? "font-medium text-[#111]" : "text-[#333]"}`}>
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
          <div className="sd-container grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="sd-label">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-[#dfe8ec] pl-4">
                {page.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-[15px] leading-snug text-[#333] transition-colors hover:text-[#0a5fbe]">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="sd-label mt-8">Related</p>
              <ul className="mt-3 space-y-2">
                {related.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-[#0a5fbe] hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="max-w-[820px]">
              {page.intro && (
                <div className="mb-10 rounded-3xl bg-[#f0f8f9] p-7">
                  <Paragraphs items={page.intro} />
                </div>
              )}
              {page.highlights && (
                <div className="mb-10 grid gap-5 sm:grid-cols-2">
                  {page.highlights.map((h) => (
                    <div key={h.title} className="rounded-3xl border border-[#dfe8ec] p-6">
                      <h3 className="text-[19px] font-medium text-[#111]">{h.title}</h3>
                      <p className="mt-2 text-[16px] leading-snug text-[#555]">{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {page.sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}
              {page.contactEmail && (
                <div className="mt-10 rounded-3xl bg-[#f0f8f9] p-7">
                  <p className="sd-label">{page.contactLabel || "Questions"}</p>
                  <p className="mt-3 text-[17px] text-[#333]">
                    Write to us at{" "}
                    <a href={`mailto:${page.contactEmail}`} className="text-[#0a5fbe] underline">
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

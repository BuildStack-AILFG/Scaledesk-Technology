import Link from "next/link";
import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import PageHero from "../components/pages/PageHero";
import HomeCta from "../components/home/HomeCta";
import { OPPORTUNITIES } from "../data/careers";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph } from "../../lib/seo/schema";

const DESCRIPTION =
  "Join ScaleDesk Technology and help build platforms and AI agents that help businesses grow. See open roles and internships.";

export const metadata = buildPageMetadata({
  title: "Careers — Build the Technology Behind Business Growth",
  seoTitle: "Careers at ScaleDesk Technology | Open Roles & Internships",
  metaDescription: DESCRIPTION,
  path: "/careers",
  primaryKeyword: "ScaleDesk careers",
  secondaryKeywords: ["AI engineer jobs", "product engineer jobs", "software internships", "remote engineering jobs"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers" },
];

const POINTS = [
  { title: "Real products", body: "You work on platforms and AI agents that real businesses use to grow, not on throwaway projects." },
  { title: "Ownership", body: "You are trusted to own outcomes, from the first idea to what customers see." },
  { title: "Room to grow", body: "Work alongside experienced people, and take on more as you show what you can do." },
];

export default function CareersPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Careers at ScaleDesk Technology", description: DESCRIPTION, path: "/careers" },
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Careers"
          title="Build the technology behind business growth"
          lead="Join a team of engineers, designers and problem-solvers building products that help businesses sell more."
        >
          <Link href="/careers/opportunities" className="sd-btn sd-btn-primary">
            View open roles
          </Link>
        </PageHero>

        <section className="bg-white sd-section">
          <div className="sd-container">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="border-t-2 border-[#00a3b0] pt-5">
                  <h2 className="sd-h3">{p.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#333]">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-surface sd-section">
          <div className="sd-container">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="sd-h2">Open roles</h2>
              <Link href="/careers/opportunities" className="sd-link">
                See all roles
              </Link>
            </Reveal>
            <ul className="mt-8 border-t border-[#dfe8ec]">
              {OPPORTUNITIES.slice(0, 5).map((job) => (
                <li key={job.id} className="border-b border-[#dfe8ec]">
                  <Link href={`/careers/opportunities/${job.id}/apply`} className="group flex flex-wrap items-center justify-between gap-3 py-5">
                    <span>
                      <span className="block text-[21px] text-[#111] transition-colors group-hover:text-[#0a5fbe]">{job.title}</span>
                      <span className="mt-1 block text-[15px] text-[#666]">
                        {job.department} &middot; {job.type} &middot; {job.location}
                      </span>
                    </span>
                    <span className="sd-link">Apply</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-[#555]">
              Already applied?{" "}
              <Link href="/careers/track" className="text-[#0a5fbe] underline">
                Track your application
              </Link>
              .
            </p>
          </div>
        </section>

        <HomeCta title="Do not see the right role?" lead="Tell us how you would like to contribute. We are always glad to hear from talented people." />
      </main>
    </>
  );
}

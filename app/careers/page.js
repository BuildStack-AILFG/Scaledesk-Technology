import Link from "next/link";
import FramedPhoto from "../components/pages/FramedPhoto";
import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import PageHero from "../components/pages/PageHero";
import HomeCta from "../components/home/HomeCta";
import JobCard from "../components/careers/JobCard";
import { IconTile, accent } from "../components/ui/CardParts";
import { Rocket, Target, TrendingUp } from "lucide-react";
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
  { icon: Rocket, accent: "#0A5FBE", title: "Real products", body: "You work on platforms and AI agents that real businesses use to grow, not on throwaway projects." },
  { icon: Target, accent: "#7C4DFF", title: "Ownership", body: "You are trusted to own outcomes, from the first idea to what customers see." },
  { icon: TrendingUp, accent: "#00A3B0", title: "Room to grow", body: "Work alongside experienced people, and take on more as you show what you can do." },
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
          aside={
            <FramedPhoto name="engineering" position="center 40%" />
          }
        >
          <Link href="/careers/opportunities" className="sd-btn sd-btn-primary">
            View open roles
          </Link>
          <Link href="/careers/track" className="sd-btn sd-btn-outline sd-btn-plain">
            Track an application
          </Link>
        </PageHero>

        <section className="bg-white sd-section">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[720px] text-center">
              <p className="sd-label">Why ScaleDesk</p>
              <h2 className="sd-h2 mt-4">Do the best work of your career</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {POINTS.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 80}
                  className={`sd-fcard is-hoverable h-full p-8 ${i === 0 ? "sd-fcard-dark" : "sd-fcard-tint"}`}
                  style={i === 0 ? undefined : accent(p.accent)}
                >
                  {i === 0 && <span className="sd-fcard-grid" aria-hidden="true" />}
                  <IconTile icon={p.icon} />
                  <h3 className={`sd-h3 mt-6 ${i === 0 ? "!text-white" : ""}`}>{p.title}</h3>
                  <p className={`mt-3 text-[15.5px] leading-relaxed ${i === 0 ? "text-white/75" : "text-sd-muted"}`}>{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-surface sd-section">
          <div className="sd-container">
            <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="sd-label">Open roles</p>
                <h2 className="sd-h2 mt-4">Find your next role</h2>
              </div>
              <Link href="/careers/opportunities" className="sd-btn sd-btn-outline shrink-0">
                See all roles
              </Link>
            </Reveal>
            <ul className="mt-12 flex flex-col gap-3">
              {OPPORTUNITIES.slice(0, 5).map((job, i) => (
                <Reveal as="li" key={job.id} delay={i * 50}>
                  <JobCard job={job} />
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 text-[15px] text-sd-muted">
              Already applied?{" "}
              <Link href="/careers/track" className="font-medium text-sd-blue underline underline-offset-2 hover:text-sd-navy">
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

import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import PageHero from "../components/pages/PageHero";
import ContactForm from "../components/pages/ContactForm";
import { pageGraph } from "../../lib/seo/schema";
import { SITE } from "../../lib/seo/config";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: {
      title: "Contact ScaleDesk Technology",
      description: "Talk to the ScaleDesk team about our platforms, ForGrow AI agents and expert services.",
      path: "/contact",
    },
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Contact"
          title="Talk to our experts"
          lead="Tell us about your business and where you want to grow. We will show you how our platforms, AI agents and team can help."
        />
        <section className="bg-white sd-section">
          <div className="sd-container grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
            <Reveal>
              <ContactForm email={SITE.email} />
            </Reveal>
            <Reveal delay={100} className="space-y-8">
              <div>
                <p className="sd-label">Email</p>
                <a href={`mailto:${SITE.email}`} className="mt-2 block text-[19px] text-[#0a5fbe] hover:underline">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="sd-label">Follow us</p>
                <a href={SITE.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[19px] text-[#0a5fbe] hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="rounded-3xl bg-[#f0f8f9] p-6">
                <p className="text-[16px] leading-relaxed text-[#333]">
                  Looking for a job instead? See our{" "}
                  <a href="/careers" className="text-[#0a5fbe] underline">
                    open roles
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

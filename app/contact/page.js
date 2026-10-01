import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import PageHero from "../components/pages/PageHero";
import ContactForm from "../components/pages/ContactForm";
import { SocialIcon } from "../components/shell/Icons";
import { pageGraph } from "../../lib/seo/schema";
import { SITE } from "../../lib/seo/config";
import { COMPANY } from "../../lib/proof";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7fe3ea]" aria-hidden="true">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/60">{label}</p>
        <div className="mt-1 break-words text-[16px] font-medium text-white">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: {
      title: "Contact ScaleDesk Technology",
      description: "Talk to the ScaleDesk team about our platforms, ForGrow AI agents and expert services.",
      path: "/contact",
    },
  });

  const email = COMPANY.email || SITE.email;

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
        <section className="bg-white pb-20 pt-4 lg:pb-28">
          <div className="sd-container grid gap-6 lg:grid-cols-[1.45fr_1fr]">
            <Reveal>
              <ContactForm email={email} />
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <div className="sd-navy-band on-dark flex flex-col gap-6 !rounded-[20px] p-7 sm:p-9">
                <div>
                  <h2 className="font-display text-[22px] font-bold tracking-tight">Get in touch</h2>
                  <p className="mt-1 text-[15px]">Prefer email or a call? Reach us directly.</p>
                </div>
                <InfoRow icon={Mail} label="Email">
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </InfoRow>
                {COMPANY.phone && (
                  <InfoRow icon={Phone} label="Phone">
                    <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:underline">
                      {COMPANY.phone}
                    </a>
                  </InfoRow>
                )}
                {COMPANY.address && (
                  <InfoRow icon={MapPin} label="Registered office">
                    <span className="font-normal leading-relaxed">{COMPANY.address}</span>
                  </InfoRow>
                )}
                <InfoRow icon={Clock} label="Response time">
                  Within one business day
                </InfoRow>
                <div className="border-t border-white/10 pt-6">
                  <a
                    href={SITE.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-white hover:underline"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <SocialIcon id="linkedin" size={15} />
                    </span>
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>

              <div className="sd-card p-7">
                <p className="font-display text-[17px] font-semibold tracking-tight text-sd-ink">Looking for a job instead?</p>
                <p className="mt-1 text-[15px] text-sd-muted">We are always glad to hear from talented people.</p>
                <Link href="/careers" className="sd-link mt-4 !text-[15px]">
                  See open roles
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

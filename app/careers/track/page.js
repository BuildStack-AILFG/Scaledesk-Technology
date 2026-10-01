import PageHero from "../../components/pages/PageHero";
import TrackApplicationContent from "../../components/careers/TrackApplicationContent";

export const metadata = {
  title: "Track Application | ScaleDesk Technology",
  description: "Sign in to track your job application status at ScaleDesk Technology.",
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers" },
  { name: "Track application", href: "/careers/track" },
];

export default function TrackApplicationPage() {
  return (
    <main>
      <PageHero
        crumbs={crumbs}
        label="Applicant portal"
        title="Track your application"
        lead="Sign in with the email and password you created when applying to see status updates and your submitted details."
        narrow
      />

      <section className="sd-surface py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <TrackApplicationContent />
        </div>
      </section>
    </main>
  );
}

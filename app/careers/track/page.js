import Link from "next/link";
import TrackApplicationContent from "../../components/careers/TrackApplicationContent";

export const metadata = {
  title: "Track Application | ScaleDesk Technology",
  description:
    "Sign in to track your job application status at ScaleDesk Technology.",
};

export default function TrackApplicationPage() {
  return (
    <main className="bg-zinc-50 text-zinc-900 min-h-screen">
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 xl:px-12 py-12 md:py-16">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm font-medium mb-8 transition-colors"
          >
            ← Careers at ScaleDesk
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Applicant portal
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Track your application
          </h1>
          <p className="text-zinc-600 leading-relaxed max-w-2xl">
            Sign in with the email and password you created when applying to view status
            updates and your submitted details.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 xl:px-12">
          <TrackApplicationContent />
        </div>
      </section>
    </main>
  );
}

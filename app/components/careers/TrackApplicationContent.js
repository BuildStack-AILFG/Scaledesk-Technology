"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const BLUE = "#0a5fbe";

const STATUS_STYLES = {
  submitted: { label: "Submitted", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  under_consideration: { label: "Under Consideration", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  selected: { label: "Selected", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  rejected: { label: "Rejected", bg: "bg-zinc-100", text: "text-zinc-600", border: "border-zinc-200" },
};

const inputClass =
  "w-full border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-[#0a5fbe] focus:outline-none";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.submitted;
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider border ${style.bg} ${style.text} ${style.border}`}
    >
      {style.label}
    </span>
  );
}

function ApplicationCard({ app }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border border-zinc-200 bg-white">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0a5fbe] mb-2">
              {app.jobId}
            </p>
            <h3 className="text-xl font-semibold text-zinc-900">{app.jobTitle}</h3>
            <p className="text-sm text-zinc-500 mt-1">Applied {formatDate(app.submittedAt)}</p>
          </div>
          <StatusBadge status={app.status} />
        </div>

        <div className="border-t border-zinc-100 pt-4 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            Application timeline
          </p>
          <ol className="space-y-3">
            {(app.statusHistory || []).map((entry, i) => (
              <li key={`${entry.at}-${i}`} className="flex gap-3 text-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0a5fbe]" />
                <div>
                  <p className="font-medium text-zinc-800">
                    {STATUS_STYLES[entry.status]?.label || entry.status}
                  </p>
                  <p className="text-zinc-500 text-xs">{formatDate(entry.at)}</p>
                  {entry.note ? <p className="text-zinc-600 mt-0.5">{entry.note}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-semibold text-[#0a5fbe] hover:underline"
        >
          {expanded ? "Hide details" : "View application details"}
        </button>

        {expanded ? (
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm border-t border-zinc-100 pt-6">
            <Detail label="Full name" value={app.fullName} />
            <Detail label="Email" value={app.email} />
            <Detail label="Phone" value={app.phone} />
            <Detail label="Location" value={app.location} />
            <Detail label="10th marks" value={app.marks10th} />
            <Detail label="12th marks" value={app.marks12th} />
            <Detail label="College" value={app.collegeName} />
            <Detail label="CGPA" value={app.cgpa} />
            <Detail label="Resume" value={app.resumeName || "—"} />
            <div className="md:col-span-2">
              <Detail label="Why join us" value={app.whyJoinUs} />
            </div>
            <div className="md:col-span-2">
              <Detail label="Reference ID" value={app.id} mono />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Detail({ label, value, mono }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-1">{label}</p>
      <p className={`text-zinc-800 ${mono ? "font-mono text-xs break-all" : ""}`}>{value}</p>
    </div>
  );
}

export default function TrackApplicationContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadApplications = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/careers/applications");
      if (res.status === 401) {
        setIsLoggedIn(false);
        setApplications([]);
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load applications.");
      setIsLoggedIn(true);
      setUserEmail(data.email);
      setApplications(data.applications || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApplications();
  }, [loadApplications]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/careers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed.");
      setPassword("");
      await loadApplications();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/careers/logout", { method: "POST" });
    setIsLoggedIn(false);
    setApplications([]);
    setUserEmail("");
    setEmail("");
    setPassword("");
  };

  if (loading) {
    return (
      <div className="border border-zinc-200 bg-white p-12 text-center text-zinc-500">
        Loading your applications...
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="border border-zinc-200 bg-white p-8 md:p-10">
        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Sign in to track</h2>
        <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
          Use the email and password you set when you submitted your application. If you
          haven&apos;t applied yet,{" "}
          <Link href="/careers/opportunities" className="text-[#0a5fbe] font-medium hover:underline">
            browse open roles
          </Link>
          .
        </p>

        <form onSubmit={handleLogin} className="space-y-5 max-w-md">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-zinc-700">Email address</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-zinc-700">Password</span>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your tracking password"
              className={inputClass}
            />
          </label>

          {error ? (
            <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 text-sm font-semibold text-white disabled:opacity-60"
            style={{ backgroundColor: BLUE }}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-zinc-200 bg-white p-6">
        <div>
          <p className="text-sm text-zinc-500">Signed in as</p>
          <p className="font-semibold text-zinc-900">{userEmail}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/careers/opportunities"
            className="inline-flex items-center justify-center border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
          >
            Apply to another role
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      {error ? (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {applications.length === 0 ? (
        <div className="border border-zinc-200 bg-white p-12 text-center">
          <p className="text-zinc-600 mb-6">You haven&apos;t submitted any applications yet.</p>
          <Link
            href="/careers/opportunities"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            View open roles
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-zinc-500">
            {applications.length} application{applications.length !== 1 ? "s" : ""}
          </p>
          {applications.map((app) => (
            <ApplicationCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

const INTERESTS = [
  "A platform (LeadForGrow, TalkForGrow, EngageForGrow, PeopleForGrow)",
  "ForGrow AI agents",
  "Expert services",
  "Something else",
];

const field =
  "w-full rounded-2xl border border-[#d5dbe0] bg-white px-4 py-3.5 text-[17px] text-[#111] placeholder-[#8a93a0] focus:border-[#0a5fbe] focus:outline-none";

/**
 * Contact form. It opens the visitor's email app with the message pre-filled,
 * addressed to the site's contact address, so nothing is lost or silently
 * dropped. Swap `onSubmit` for a CRM form endpoint when one is available.
 */
export default function ContactForm({ email }) {
  const [state, setState] = useState({ name: "", email: "", company: "", interest: INTERESTS[0], message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${state.name}${state.company ? ` (${state.company})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nEmail: ${state.email}\nCompany: ${state.company || "-"}\nInterested in: ${state.interest}\n\n${state.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[15px] text-[#333]">Your name</span>
          <input required value={state.name} onChange={set("name")} placeholder="Full name" className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[15px] text-[#333]">Work email</span>
          <input required type="email" value={state.email} onChange={set("email")} placeholder="you@company.com" className={field} autoComplete="email" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[15px] text-[#333]">Company</span>
        <input value={state.company} onChange={set("company")} placeholder="Company name (optional)" className={field} autoComplete="organization" />
      </label>
      <label className="block">
        <span className="mb-2 block text-[15px] text-[#333]">I am interested in</span>
        <select value={state.interest} onChange={set("interest")} className={field}>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-[15px] text-[#333]">How can we help?</span>
        <textarea required rows={5} value={state.message} onChange={set("message")} placeholder="Tell us a little about your business and what you would like to achieve." className={field} />
      </label>
      <button type="submit" className="sd-btn sd-btn-primary">
        Send message
      </button>
      {sent && (
        <p role="status" className="text-[15px] text-[#333]">
          Your email app should have opened with your message ready to send. If it did not, write to us at{" "}
          <a href={`mailto:${email}`} className="text-[#0a5fbe] underline">
            {email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

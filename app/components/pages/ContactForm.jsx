"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const INTERESTS = ["Platforms", "ForGrow AI agents", "Expert services", "Something else"];

const field =
  "w-full rounded-xl border border-sd-line-strong bg-white px-4 py-3 text-[16px] text-sd-ink placeholder-sd-muted shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-[border-color,box-shadow] focus:border-sd-blue focus:shadow-[0_0_0_4px_rgba(10,95,190,0.12)] focus:outline-none";

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between text-[14px] font-medium text-sd-ink">
        {label}
        {optional && <span className="text-[13px] font-normal text-sd-muted">Optional</span>}
      </span>
      {children}
    </label>
  );
}

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
    <form onSubmit={submit} className="sd-card space-y-5 p-6 sm:p-9" aria-label="Contact form">
      <div>
        <h2 className="font-display text-[22px] font-bold tracking-tight text-sd-ink">Send us a message</h2>
        <p className="mt-1 text-[15px] text-sd-muted">We usually reply within one business day.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <input required value={state.name} onChange={set("name")} placeholder="Full name" className={field} autoComplete="name" />
        </Field>
        <Field label="Work email">
          <input
            required
            type="email"
            value={state.email}
            onChange={set("email")}
            placeholder="you@company.com"
            className={field}
            autoComplete="email"
          />
        </Field>
      </div>
      <Field label="Company" optional>
        <input value={state.company} onChange={set("company")} placeholder="Company name" className={field} autoComplete="organization" />
      </Field>

      <fieldset>
        <legend className="mb-2 text-[14px] font-medium text-sd-ink">I&rsquo;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => {
            const on = state.interest === i;
            return (
              <label
                key={i}
                className={`cursor-pointer rounded-full border px-4 py-2 text-[14.5px] font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sd-blue ${
                  on ? "border-sd-navy bg-sd-navy text-white" : "border-sd-line-strong bg-white text-sd-body hover:border-sd-navy"
                }`}
              >
                <input type="radio" name="interest" value={i} checked={on} onChange={set("interest")} className="sr-only" />
                {i}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="How can we help?">
        <textarea
          required
          rows={5}
          value={state.message}
          onChange={set("message")}
          placeholder="Tell us a little about your business and what you would like to achieve."
          className={`${field} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="text-[13px] text-sd-muted">
          By sending, you agree to our{" "}
          <a href="/legal/privacy-policy" className="underline underline-offset-2 hover:text-sd-navy">
            privacy policy
          </a>
          .
        </p>
        <button type="submit" className="sd-btn sd-btn-primary">
          Send message
        </button>
      </div>

      {sent && (
        <div role="status" className="flex items-start gap-3 rounded-xl border border-[#bfe6d0] bg-[#effaf3] p-4 text-[15px] text-[#14532d]">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            Your email app should have opened with your message ready to send. If it did not, write to us at{" "}
            <a href={`mailto:${email}`} className="font-medium underline">
              {email}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}

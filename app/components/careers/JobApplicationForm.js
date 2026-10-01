"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  marks10th: "",
  marks12th: "",
  collegeName: "",
  cgpa: "",
  whyJoinUs: "",
  password: "",
  confirmPassword: "",
};

function FormSection({ title, description, children }) {
  return (
    <section className="sd-card p-6 md:p-8">
      <div className="mb-6">
        <h2 className="font-display text-[19px] font-bold tracking-tight text-sd-ink">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-sd-muted leading-relaxed">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Field({ label, required, children, hint }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-sd-body">
        {label}
        {required ? <span className="text-sd-blue"> *</span> : null}
      </span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs text-sd-muted">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-sd-line-strong bg-white px-4 py-3 text-[16px] text-sd-ink placeholder-sd-muted shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-[border-color,box-shadow] focus:border-sd-blue focus:shadow-[0_0_0_4px_rgba(10,95,190,0.12)] focus:outline-none";

export default function JobApplicationForm({ job }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [accountEmail, setAccountEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files?.[0] ?? null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("jobId", job.id);
      body.append("jobTitle", job.title);
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "confirmPassword") body.append(key, value);
      });
      body.append("confirmPassword", formData.confirmPassword);
      if (resume) body.append("resume", resume);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setApplicationId(data.applicationId);
      setAccountEmail(formData.email);
      setSubmitted(true);
      setFormData(INITIAL_FORM);
      setResume(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="sd-card p-10 md:p-14 text-center">
        <div
          className="sd-btn sd-btn-primary sd-btn-plain disabled:opacity-60 disabled:cursor-not-allowed"
        >
          ✓
        </div>
        <h2 className="text-2xl font-semibold text-sd-ink mb-3">Application submitted</h2>
        <p className="text-sd-body max-w-md mx-auto leading-relaxed mb-2">
          Thank you for applying for <strong>{job.title}</strong>. Our team will review your
          application and get back to you if your profile is a match.
        </p>
        {applicationId ? (
          <p className="text-xs text-sd-muted mb-4">Reference: {applicationId}</p>
        ) : (
          <div className="mb-4" />
        )}
        <div className="max-w-md mx-auto mb-8 rounded-xl border border-sd-line bg-sd-surface p-5 text-left text-sm text-sd-body leading-relaxed">
          <p className="font-semibold text-sd-ink mb-2">Your tracking account is ready</p>
          <p>
            Sign in anytime at{" "}
            <Link href="/careers/track" className="text-sd-blue font-medium hover:underline">
              Track Application
            </Link>{" "}
            using:
          </p>
          <ul className="mt-3 space-y-1 text-sd-body">
            <li>
              <span className="text-sd-muted">Email:</span> {accountEmail}
            </li>
            <li>
              <span className="text-sd-muted">Password:</span> the password you just set
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/careers/track"
            className="sd-btn sd-btn-primary sd-btn-plain disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Track my application
          </Link>
          <Link
            href="/careers/opportunities"
            className="inline-flex items-center justify-center rounded-xl border border-sd-line bg-white px-6 py-3 text-sm font-semibold text-sd-body hover:border-sd-navy hover:text-sd-navy transition-colors"
          >
            View other roles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormSection
        title="Personal details"
        description="Tell us how we can reach you and where you're based."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full name" required>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </Field>
          <Field label="Phone number" required>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass}
            />
          </Field>
          <Field label="Email address" required>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className={inputClass}
            />
          </Field>
          <Field label="Current location" required>
            <input
              required
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State / Country"
              className={inputClass}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection
        title="Education"
        description="Share your academic background. Percentage or CGPA format is accepted."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="10th grade marks" required hint="e.g. 85% or 8.5 CGPA">
            <input
              required
              type="text"
              name="marks10th"
              value={formData.marks10th}
              onChange={handleChange}
              placeholder="85%"
              className={inputClass}
            />
          </Field>
          <Field label="12th grade marks" required hint="e.g. 88% or 8.8 CGPA">
            <input
              required
              type="text"
              name="marks12th"
              value={formData.marks12th}
              onChange={handleChange}
              placeholder="88%"
              className={inputClass}
            />
          </Field>
          <Field label="College / University name" required>
            <input
              required
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Institution name"
              className={inputClass}
            />
          </Field>
          <Field label="CGPA" required hint="Current or final CGPA">
            <input
              required
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="8.5"
              className={inputClass}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection
        title="Resume"
        description="Upload your latest resume. PDF or Word format, up to 5 MB."
      >
        <Field label="Resume file" required>
          <input
            required
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleResumeChange}
            className="w-full rounded-xl border border-dashed border-sd-line-strong bg-sd-surface px-4 py-8 text-sm text-sd-body file:mr-4 file:border-0 file:bg-sd-navy file:rounded-lg file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
          />
        </Field>
        {resume ? (
          <p className="mt-3 text-sm text-sd-muted">
            Selected: <span className="font-medium text-sd-body">{resume.name}</span>
          </p>
        ) : null}
      </FormSection>

      <FormSection
        title="Tracking account"
        description="Create a password to sign in and track your application status anytime."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Password" required hint="Minimum 8 characters">
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              minLength={8}
              className={inputClass}
            />
          </Field>
          <Field label="Confirm password" required>
            <input
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              minLength={8}
              className={inputClass}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection
        title="Why join ScaleDesk?"
        description="Help us understand your motivation and what you'd bring to the team."
      >
        <Field label="Your statement" required hint="Minimum 50 characters">
          <textarea
            required
            name="whyJoinUs"
            value={formData.whyJoinUs}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us why you're interested in this role and what excites you about working at ScaleDesk..."
            className={`${inputClass} resize-y min-h-[160px]`}
          />
        </Field>
        <p className="mt-2 text-xs text-sd-muted text-right">
          {formData.whyJoinUs.length} characters
        </p>
      </FormSection>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-sd-line bg-sd-surface p-6">
        <p className="text-sm text-sd-muted">
          By submitting, you confirm the information provided is accurate.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="sd-btn sd-btn-primary sd-btn-plain disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit application"}
        </button>
      </div>
    </form>
  );
}

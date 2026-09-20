"use client";

import { useState } from "react";
import Link from "next/link";

const BLUE = "#0a5fbe";

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
    <section className="border border-zinc-200 bg-white p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Field({ label, required, children, hint }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-700">
        {label}
        {required ? <span className="text-[#0a5fbe]"> *</span> : null}
      </span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs text-zinc-400">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-[#0a5fbe] focus:outline-none";

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
      <div className="border border-zinc-200 bg-white p-10 md:p-14 text-center">
        <div
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full text-white text-2xl"
          style={{ backgroundColor: BLUE }}
        >
          ✓
        </div>
        <h2 className="text-2xl font-semibold text-zinc-900 mb-3">Application submitted</h2>
        <p className="text-zinc-600 max-w-md mx-auto leading-relaxed mb-2">
          Thank you for applying for <strong>{job.title}</strong>. Our team will review your
          application and get back to you if your profile is a match.
        </p>
        {applicationId ? (
          <p className="text-xs text-zinc-400 mb-4">Reference: {applicationId}</p>
        ) : (
          <div className="mb-4" />
        )}
        <div className="max-w-md mx-auto mb-8 border border-zinc-200 bg-zinc-50 p-5 text-left text-sm text-zinc-600 leading-relaxed">
          <p className="font-semibold text-zinc-900 mb-2">Your tracking account is ready</p>
          <p>
            Sign in anytime at{" "}
            <Link href="/careers/track" className="text-[#0a5fbe] font-medium hover:underline">
              Track Application
            </Link>{" "}
            using:
          </p>
          <ul className="mt-3 space-y-1 text-zinc-700">
            <li>
              <span className="text-zinc-500">Email:</span> {accountEmail}
            </li>
            <li>
              <span className="text-zinc-500">Password:</span> the password you just set
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/careers/track"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            Track my application
          </Link>
          <Link
            href="/careers/opportunities"
            className="inline-flex items-center justify-center border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
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
            className="w-full border border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-sm text-zinc-600 file:mr-4 file:border-0 file:bg-[#0a5fbe] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
          />
        </Field>
        {resume ? (
          <p className="mt-3 text-sm text-zinc-500">
            Selected: <span className="font-medium text-zinc-700">{resume.name}</span>
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
        <p className="mt-2 text-xs text-zinc-400 text-right">
          {formData.whyJoinUs.length} characters
        </p>
      </FormSection>

      {error ? (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-zinc-200 bg-zinc-50 p-6">
        <p className="text-sm text-zinc-500">
          By submitting, you confirm the information provided is accurate.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: BLUE }}
        >
          {isSubmitting ? "Submitting..." : "Submit application"}
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState, useRef } from "react";

// ── types ─────────────────────────────────────────────────────────────────────
type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ── icons ─────────────────────────────────────────────────────────────────────
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SpinnerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "cf-spin 0.8s linear infinite" }}>
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
);

// ── subject options ───────────────────────────────────────────────────────────
const SUBJECTS = [
  "Book a Demo",
  "Free Trial Help",
  "Billing / Pricing",
  "Migration Support",
  "Technical Issue",
  "Partnership",
  "General Question",
  "Other",
];

// ── component ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // ── field helpers ────────────────────────────────────────────────────────────
  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const touch = (field: keyof FormData) => () =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const errors: Partial<Record<keyof FormData, string>> = {
    name: !form.name.trim() ? "Name is required." : undefined,
    email: !form.email.trim()
      ? "Email is required."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? "Enter a valid email."
      : undefined,
    subject: !form.subject ? "Please select a subject." : undefined,
    message:
      !form.message.trim()
        ? "Message is required."
        : form.message.trim().length < 10
        ? "Message must be at least 10 characters."
        : undefined,
  };

  const isValid = !Object.values(errors).some(Boolean);

  // ── submit ────────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong.");
      } else {
        if (!res.ok) throw new Error(`Server error (${res.status}). Please restart dev server and try again.`);
      }
      setState("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTouched({});
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setErrorMsg(message);
      setState("error");
    }
  };

  // ── field component ────────────────────────────────────────────────────────
  const fieldClass = (field: keyof FormData) => {
    const base = "cf-input";
    if (touched[field] && errors[field]) return `${base} cf-input--error`;
    if (touched[field] && !errors[field] && form[field]) return `${base} cf-input--valid`;
    return base;
  };

  // ── success state ──────────────────────────────────────────────────────────
  if (state === "success") {
    return (
      <div className="cf-success">
        <div className="cf-success-icon">
          <CheckIcon />
        </div>
        <h3>Message sent!</h3>
        <p>
          We got your message and will reply within one business day. Check your inbox — we've also
          sent you a confirmation email.
        </p>
        <button
          className="cf-btn cf-btn--outline"
          onClick={() => setState("idle")}
          type="button"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── form ───────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Inline styles – scoped with cf- prefix */}
      <style>{`
        @keyframes cf-spin { to { transform: rotate(360deg); } }
        @keyframes cf-fadein { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

        .cf-wrap {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
          animation: cf-fadein .35s ease;
        }
        .cf-wrap h2 {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px;
        }
        .cf-wrap .cf-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin: 0 0 28px;
        }
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cf-full { grid-column: 1 / -1; }
        .cf-field { display: flex; flex-direction: column; gap: 6px; }
        .cf-label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          letter-spacing: .02em;
        }
        .cf-label .cf-req { color: #ef4444; margin-left: 2px; }
        .cf-input {
          padding: 10px 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          font-size: 15px;
          color: #111827;
          background: #fff;
          outline: none;
          transition: border-color .18s, box-shadow .18s;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
        }
        .cf-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,.12);
        }
        .cf-input--error { border-color: #ef4444 !important; }
        .cf-input--error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,.12) !important; }
        .cf-input--valid { border-color: #10b981; }
        textarea.cf-input { resize: vertical; min-height: 130px; line-height: 1.6; }
        select.cf-input { cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
        .cf-error-text {
          font-size: 12px;
          color: #ef4444;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .cf-char-count {
          font-size: 12px;
          color: #9ca3af;
          text-align: right;
        }
        .cf-submit-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }
        .cf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background .18s, opacity .18s, transform .1s;
          font-family: inherit;
        }
        .cf-btn--primary {
          background: #2563eb;
          color: #fff;
        }
        .cf-btn--primary:hover:not(:disabled) { background: #1d4ed8; transform: translateY(-1px); }
        .cf-btn--primary:active:not(:disabled) { transform: translateY(0); }
        .cf-btn--primary:disabled { opacity: .6; cursor: not-allowed; }
        .cf-btn--outline {
          background: transparent;
          color: #2563eb;
          border: 1.5px solid #2563eb;
          padding: 10px 22px;
        }
        .cf-btn--outline:hover { background: #eff6ff; }
        .cf-api-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          color: #b91c1c;
          margin-top: 8px;
        }
        .cf-success {
          text-align: center;
          padding: 48px 32px;
          animation: cf-fadein .35s ease;
        }
        .cf-success-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg,#10b981,#059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 0 auto 20px;
          box-shadow: 0 4px 16px rgba(16,185,129,.3);
        }
        .cf-success h3 {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 12px;
        }
        .cf-success p {
          color: #6b7280;
          font-size: 15px;
          max-width: 360px;
          margin: 0 auto 24px;
          line-height: 1.7;
        }
        @media (max-width: 600px) {
          .cf-wrap { padding: 24px 18px; }
          .cf-grid { grid-template-columns: 1fr; }
          .cf-full { grid-column: auto; }
        }
      `}</style>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="cf-wrap" id="contact-form">
        <h2>Send us a message</h2>
        <p className="cf-subtitle">We typically reply within one business day.</p>

        <div className="cf-grid">
          {/* Name */}
          <div className="cf-field">
            <label className="cf-label" htmlFor="cf-name">
              Name <span className="cf-req">*</span>
            </label>
            <input
              id="cf-name"
              className={fieldClass("name")}
              type="text"
              placeholder="Dr. Arjun Mehta"
              value={form.name}
              onChange={set("name")}
              onBlur={touch("name")}
              autoComplete="name"
            />
            {touched.name && errors.name && (
              <span className="cf-error-text">⚠ {errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="cf-field">
            <label className="cf-label" htmlFor="cf-email">
              Email <span className="cf-req">*</span>
            </label>
            <input
              id="cf-email"
              className={fieldClass("email")}
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set("email")}
              onBlur={touch("email")}
              autoComplete="email"
            />
            {touched.email && errors.email && (
              <span className="cf-error-text">⚠ {errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="cf-field">
            <label className="cf-label" htmlFor="cf-phone">
              Phone <span style={{ color: "#9ca3af", fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              id="cf-phone"
              className="cf-input"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={set("phone")}
              autoComplete="tel"
            />
          </div>

          {/* Subject */}
          <div className="cf-field">
            <label className="cf-label" htmlFor="cf-subject">
              Subject <span className="cf-req">*</span>
            </label>
            <select
              id="cf-subject"
              className={fieldClass("subject")}
              value={form.subject}
              onChange={set("subject")}
              onBlur={touch("subject")}
            >
              <option value="">Select a topic…</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {touched.subject && errors.subject && (
              <span className="cf-error-text">⚠ {errors.subject}</span>
            )}
          </div>

          {/* Message */}
          <div className="cf-field cf-full">
            <label className="cf-label" htmlFor="cf-message">
              Message <span className="cf-req">*</span>
            </label>
            <textarea
              id="cf-message"
              className={fieldClass("message")}
              placeholder="Tell us how we can help you…"
              value={form.message}
              onChange={set("message")}
              onBlur={touch("message")}
              rows={5}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {touched.message && errors.message ? (
                <span className="cf-error-text">⚠ {errors.message}</span>
              ) : (
                <span />
              )}
              <span className="cf-char-count">{form.message.length} chars</span>
            </div>
          </div>
        </div>

        {/* API-level error */}
        {state === "error" && (
          <div className="cf-api-error" role="alert">
            ⚠ {errorMsg}
          </div>
        )}

        <div className="cf-submit-row">
          <button
            id="cf-submit"
            type="submit"
            className="cf-btn cf-btn--primary"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? (
              <>
                <SpinnerIcon /> Sending…
              </>
            ) : (
              <>
                <SendIcon /> Send Message
              </>
            )}
          </button>
          <span style={{ fontSize: "13px", color: "#9ca3af" }}>
            🔒 Your info is never shared.
          </span>
        </div>
      </form>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Clinexy India — ₹999/month Practice Management for Indian Doctors",
  description: "Clinexy for India: ₹999/month. ABDM compliant, UPI payments, WhatsApp reminders, local SEO for Indian cities. Free trial.",
  alternates: { canonical: "https://www.clinexy.com/in" },
};

export default function IndiaPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Clinexy India</span>
            <h1>Practice management for India. ₹999/month.</h1>
            <p className="hero-sub">ABDM compliant, UPI and card payments, WhatsApp reminders, and local SEO for Indian cities. Everything a solo practitioner in India needs.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="india-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · ₹999/month after trial</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">India</span></div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>Built for solo practitioners in India</h2>
          <ul className="point-list dark">
            <li>₹999/month flat — no commission on bookings</li>
            <li>UPI, credit card, and net banking payments</li>
            <li>WhatsApp reminders (98% open rate in India)</li>
            <li>ABDM and DPDP Act 2023 compliance</li>
            <li>Local SEO for Bangalore, Mumbai, Delhi, Pune, and all Indian cities</li>
            <li>CSV import from Practo and MocDoc</li>
            <li>Hindi and English interface options</li>
            <li>India-based support team</li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            <Link href="/pricing/solo-doctors/india" className="btn btn-ghost">See full India pricing →</Link>
          </div>
        </div>
      </section>
      <CTABanner heading="Start your free trial in India" subtext="₹999/month after trial. No credit card needed." variant="inline" />
    </>
  );
}

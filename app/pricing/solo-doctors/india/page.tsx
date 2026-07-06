import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "India Pricing — ₹999/month for Solo Practitioners",
  description: "Clinexy India plan: ₹999/month. Full platform for solo doctors in India. ABDM compliant, UPI payments, WhatsApp reminders. 14-day free trial.",
  alternates: { canonical: "https://www.clinexy.com/pricing/solo-doctors/india" },
};

export default function PricingIndiaPage() {
  const features = [
    "Online booking with 3-touch WhatsApp and SMS reminders",
    "Telehealth video consultations",
    "Patient records, SOAP notes, and prescriptions",
    "Billing in INR with UPI and card payments",
    "Website builder on your domain",
    "Local SEO and Google Business Profile management",
    "Automated Google review requests",
    "Patient portal for self-service",
    "ABDM and DPDP compliance",
    "24/7 chat and email support",
    "CSV import from Practo, MocDoc",
    "Unlimited appointments and patients",
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">India Pricing</span>
            <h1>₹999 per month. Everything included.</h1>
            <p className="hero-sub">No commissions on bookings. No per-feature charges. No annual lock-in. Cancel any time.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="india-pricing-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/pricing">Pricing</Link><span className="crumb-sep">›</span>
          <Link href="/pricing/solo-doctors">Solo Doctors</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">India</span>
        </div>
      </nav>

      <section className="section">
        <div className="container" style={{ maxWidth: '640px' }}>
          <div className="pricing-card featured" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="badge">India Plan</div>
            <div className="price"><span className="price-currency">₹</span>999</div>
            <div className="price-period">per month · billed monthly</div>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }} id="india-pricing-card-trial">
              Start 14-Day Free Trial
            </a>
          </div>
        </div>
      </section>

      <CTABanner heading="Start your free trial today" subtext="₹999/month after trial. No credit card needed to start." variant="inline" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Global Pricing — $99/month for Solo Practitioners",
  description: "Clinexy Global plan: $99/month. HIPAA-aligned, multi-currency billing, for practitioners in the UK, US, Canada, Singapore, and Australia.",
  alternates: { canonical: "https://www.clinexy.com/pricing/solo-doctors/global" },
};

export default function PricingGlobalPage() {
  const features = [
    "Online booking with 3-touch reminder sequence",
    "Telehealth video consultations",
    "Patient records, notes, and prescriptions",
    "Multi-currency billing (USD, GBP, AUD, SGD, CAD)",
    "Card and bank transfer payments",
    "Superbills for insurance reimbursement",
    "Website builder on your domain",
    "Local SEO and Google Business Profile management",
    "Automated Google review requests",
    "Patient portal for self-service",
    "HIPAA-aligned workflows",
    "GDPR, PIPEDA, Privacy Act, PDPA compliance",
    "BAA available on Done-For-You tier",
    "24/7 chat and email support",
    "CSV import from SimplePractice, Cliniko, Jane",
    "Unlimited appointments and patients",
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Global Pricing</span>
            <h1>$99 per month. Everything included.</h1>
            <p className="hero-sub">For practitioners in the UK, US, Canada, Singapore, Australia, and beyond. HIPAA-aligned, multi-currency.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="global-pricing-trial">Start Free Trial</a>
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
          <span className="crumb-current">Global</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="pricing-card featured" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="badge">Global Plan</div>
            <div className="price"><span className="price-currency">$</span>99</div>
            <div className="price-period">per month · billed monthly</div>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }} id="global-pricing-card-trial">
              Start 14-Day Free Trial
            </a>
          </div>
        </div>
      </section>

      <CTABanner heading="Start your free trial today" subtext="$99/month after trial. No credit card needed to start." variant="inline" />
    </>
  );
}

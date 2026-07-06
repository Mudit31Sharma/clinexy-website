import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — Simple, Honest, One Plan",
  description: "Clinexy costs ₹999/month in India and $99/month globally. One plan, all features, no commissions, no add-ons. 14-day free trial.",
  alternates: { canonical: "https://www.clinexy.com/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Pricing</span>
            <h1>One plan. Everything included.</h1>
            <p className="hero-sub">No commissions. No hidden add-ons. No per-feature charges. Just one honest subscription that covers operations and growth.</p>
            <p className="hero-reassure">14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Pricing</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="pricing-grid" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
            {/* India plan */}
            <div className="pricing-card featured">
              <div className="badge">India</div>
              <div className="price"><span className="price-currency">₹</span>999</div>
              <div className="price-period">per month · billed monthly</div>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)', margin: '0 0 16px' }}>
                Everything a solo practice in India needs, with local compliance and UPI payments.
              </p>
              <ul className="feature-list">
                <li>Online booking with 3-touch WhatsApp/SMS reminders</li>
                <li>Telehealth video consultations</li>
                <li>Patient records, notes, and prescriptions</li>
                <li>Billing in INR with UPI and card payments</li>
                <li>Website builder on your domain</li>
                <li>Local SEO and Google Business Profile</li>
                <li>Automated Google review requests</li>
                <li>Patient portal</li>
                <li>ABDM and DPDP compliance</li>
                <li>24/7 chat support</li>
              </ul>
              <Link href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }} id="pricing-india-trial">
                Start Free Trial — India
              </Link>
              <Link href="/pricing/solo-doctors/india" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: 'var(--blue-600)' }}>
                See India pricing details →
              </Link>
            </div>

            {/* Global plan */}
            <div className="pricing-card">
              <div className="badge" style={{ background: 'var(--gray-700)' }}>Global</div>
              <div className="price"><span className="price-currency">$</span>99</div>
              <div className="price-period">per month · billed monthly</div>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)', margin: '0 0 16px' }}>
                For practitioners in the UK, US, Canada, Singapore, Australia, and beyond.
              </p>
              <ul className="feature-list">
                <li>Everything in the India plan</li>
                <li>Multi-currency billing (USD, GBP, AUD, SGD, CAD)</li>
                <li>HIPAA-aligned workflows</li>
                <li>GDPR, PIPEDA, Privacy Act, PDPA compliance</li>
                <li>Card and bank transfer payments</li>
                <li>Superbills for insurance reimbursement</li>
                <li>BAA available on Done-For-You tier</li>
                <li>Priority support</li>
              </ul>
              <Link href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }} id="pricing-global-trial">
                Start Free Trial — Global
              </Link>
              <Link href="/pricing/solo-doctors/global" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: 'var(--blue-600)' }}>
                See Global pricing details →
              </Link>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '48px auto 0', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '8px' }}>Done-For-You — $499/month</h3>
            <p style={{ color: 'var(--gray-600)', fontSize: '14.5px', marginBottom: '16px' }}>
              We set everything up and manage your growth for you. Includes everything in the base plan plus a dedicated growth manager, SEO content creation, review management, and monthly reports.
            </p>
            <Link href="/contact" className="btn btn-ghost">Talk to us about Done-For-You →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              { q: "Is there a free trial?", a: "Yes. 14 days, full access, no credit card required." },
              { q: "Can I cancel anytime?", a: "Yes. No contracts. Cancel anytime from your dashboard. Data is exportable for 30 days after cancellation." },
              { q: "Are there any commissions on bookings?", a: "No. Zero commissions. Every booking your patients make is yours." },
              { q: "What's included in the plan?", a: "Everything. Booking, telehealth, patient records, billing, website builder, local SEO, Google review automation, patient portal, WhatsApp reminders, and more." },
              { q: "Can I import my existing patient list?", a: "Yes. CSV import in 10 minutes. Guided migration from Practo, SimplePractice, Cliniko, Jane, and MocDoc included." },
              { q: "Is there a setup fee?", a: "No setup fee. You can be fully set up in 30 minutes." },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Start your 14-day free trial" subtext="No credit card. No setup fee. Cancel anytime." variant="inline" />
    </>
  );
}

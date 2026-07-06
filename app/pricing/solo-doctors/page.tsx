import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing for Solo Doctors — ₹999 India / $99 Global",
  description: "Clinexy for solo doctors: ₹999/month in India, $99/month globally. Full platform, no commissions, 14-day free trial.",
  alternates: { canonical: "https://www.clinexy.com/pricing/solo-doctors" },
};

export default function PricingSoloDoctorsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Pricing for Solo Doctors</span>
            <h1>One subscription. Everything included.</h1>
            <p className="hero-sub">₹999/month in India · $99/month globally. No commissions. No add-ons. No surprises.</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/pricing">Pricing</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Solo Doctors</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="pricing-grid" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Link href="/pricing/solo-doctors/india" className="pricing-card featured" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <div className="badge">India</div>
              <div className="price"><span className="price-currency">₹</span>999</div>
              <div className="price-period">per month</div>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Full platform for solo practitioners in India. ABDM and DPDP compliant.</p>
              <div style={{ marginTop: '16px', color: 'var(--blue-600)', fontWeight: 600, fontSize: '14px' }}>See India details →</div>
            </Link>
            <Link href="/pricing/solo-doctors/global" className="pricing-card" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <div className="badge" style={{ background: 'var(--gray-700)' }}>Global</div>
              <div className="price"><span className="price-currency">$</span>99</div>
              <div className="price-period">per month</div>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)' }}>For practitioners in the UK, US, Canada, Singapore, Australia, and beyond.</p>
              <div style={{ marginTop: '16px', color: 'var(--blue-600)', fontWeight: 600, fontSize: '14px' }}>See Global details →</div>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading="Start your 14-day free trial" subtext="No credit card. No setup fee. Cancel anytime." variant="inline" />
    </>
  );
}

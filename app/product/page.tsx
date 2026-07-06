import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Product — The Clinexy Platform",
  description: "Explore the full Clinexy platform: practice management, patient growth, and automation for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/product" },
};

export default function ProductPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">The Platform</span>
            <h1>One platform. Operations and growth.</h1>
            <p className="hero-sub">Everything a solo practice needs: online booking, telehealth, patient records, billing, website builder, local SEO, reviews, and personal branding — in one subscription.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="product-trial">Start Free Trial</a>
              <Link href="/features" className="btn btn-secondary btn-lg">Explore Features</Link>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · Set up in 30 minutes</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Product</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            <div>
              <h2>Operations</h2>
              <p className="prose">Run your practice without the admin overhead.</p>
              <ul className="point-list dark">
                {["Online Booking", "Telehealth", "Patient Records", "Billing", "Patient Portal", "WhatsApp Reminders", "AI Assistant"].map((f, i) => (
                  <li key={i}><Link href={`/features/${f.toLowerCase().replace(/ /g, '-')}`}>{f}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Growth</h2>
              <p className="prose">Fill your calendar and build your brand.</p>
              <ul className="point-list dark">
                {["Website Builder", "Local SEO", "Reviews & Reputation", "Google Business Profile", "Personal Branding", "Social Media", "Patient Follow-Up"].map((f, i) => (
                  <li key={i}><Link href={`/features/${f.toLowerCase().replace(/ /g, '-').replace(/[&]/g, 'and')}`}>{f}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTABanner heading="Try the full platform free for 14 days" subtext="No credit card. No setup fee. Set up in 30 minutes." variant="inline" />
    </>
  );
}

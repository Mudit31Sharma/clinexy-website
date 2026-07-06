import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Personal Website for Doctors — Clinexy",
  description: "Patients land on your brand, not a directory. Set up in under 30 minutes. Built for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/personal-website-for-doctors" },
};

export default function PersonalWebsiteForDoctorsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Web Presence</span>
            <h1>Personal website for doctors</h1>
            <p className="hero-sub">Patients land on your brand, not a directory. Set up your fully custom clinic website in under 30 minutes.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Look credible the moment patients search for your specialty.</li>
              <li>Turn website visitors into booked appointments instantly.</li>
              <li>Own your brand and data on your custom domain.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="doc-web-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="doc-web-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>90+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mobile Speed Score</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>Fully optimized for Google rankings and direct patient scheduling.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Personal Website for Doctors</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Personal Website for Doctors from Clinexy is built specifically for solo healthcare professionals. It is included in the base subscription with no add-on fees and no per-appointment commissions. Setup takes minutes, and works across regions with compliance for HIPAA, GDPR, PIPEDA, PDPA, and DPDP.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>Your website, your brand, your patients</h2>
          <p className="prose">
            A listing in a directory like Practo makes you one row among hundreds of competitors. To build a truly independent practice, patients need to find your credentials, your bio, and your booking link directly on your own website.
          </p>
          <p className="prose">
            Clinexy provides a full-featured medical website builder pre-optimized for SEO. Your site includes online booking, clinic hours, bio, services, location map, and reviews, all updated automatically from your Clinexy portal.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Why doctors choose Clinexy websites</h2>
          <div className="cards-grid">
            {[
              { title: "No add-on fees", desc: "A website builder and hosting on your own domain are fully included in the base subscription." },
              { title: "Built in minutes", desc: "Choose a specialty template, customize your bio, and go live instantly." },
              { title: "WhatsApp & SMS booking", desc: "Integrate your calendar to allow 24/7 bookings with automated confirmations." },
              { title: "Secure & compliant", desc: "SSL encryption, HIPAA-aligned structure, and local privacy rules set up automatically." },
              { title: "Specialty layouts", desc: "Layouts tailored for doctors, dermatologists, pediatricians, and dentists." },
              { title: "Free data migration", desc: "We help you point your domain and migrate your existing pages for free." },
            ].map((b, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Launch your personal doctor website" subtext="14-day free trial. Complete setup in 30 minutes." variant="inline" />
    </>
  );
}

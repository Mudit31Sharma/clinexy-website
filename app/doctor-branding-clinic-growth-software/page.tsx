import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Doctor Branding & Clinic Growth Software — Clinexy",
  description: "Your brand. Your website. Your reviews. Running quietly in the background. Built for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/doctor-branding-clinic-growth-software" },
};

export default function DoctorBrandingClinicGrowthSoftwarePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Clinic Growth</span>
            <h1>Doctor branding &amp; clinic growth software</h1>
            <p className="hero-sub">Your brand. Your website. Your reviews. Running quietly in the background, built for solo healthcare professionals.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Stand out as the obvious choice in your area.</li>
              <li>Build a brand patients remember and refer.</li>
              <li>Show your story, credentials, and results.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="branding-software-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="branding-software-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>50+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Google Reviews in 90 Days</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '20px', paddingTop: '20px' }}>
                  <div style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>&ldquo;Clinexy automated my review pipeline and website setup. My practice grew by 35% in three months.&rdquo;</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>— Dr. Priya, Indiranagar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Doctor Branding &amp; Clinic Growth Software</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Doctor Branding &amp; Clinic Growth Software from Clinexy is built specifically for solo healthcare professionals. It is included in the base subscription with no add-on fees and no per-appointment commissions. Setup takes minutes, and works across regions with compliance for HIPAA, GDPR, PIPEDA, PDPA, and DPDP.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>Grow your clinic under your own brand</h2>
          <p className="prose">
            Juggling patient care with marketing, online reputation, and administrative tasks is exhausting. Most solo practitioners feel they need to hire an expensive agency or buy separate software for each of these tasks.
          </p>
          <p className="prose">
            Clinexy solves this by shipping Doctor Branding &amp; Clinic Growth tools directly as part of the base subscription. You get a professionally designed website on your own domain, automated review requests that fire after appointments, and local SEO optimizations pre-configured for your practice type and city.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Included features and benefits</h2>
          <div className="cards-grid">
            {[
              { title: "No add-on fees", desc: "Growth tools are included in the base subscription of ₹999/mo in India or $99/mo globally. No surprises." },
              { title: "Setup in minutes", desc: "Pre-configured templates for dentists, dermatologists, therapists, and doctors." },
              { title: "Multi-channel reminders", desc: "Reach patients via WhatsApp, SMS, and email. Timing and content are fully customizable." },
              { title: "Compliant in your region", desc: "Workflows and record-keeping align with HIPAA, GDPR, PIPEDA, PDPA, and DPDP." },
              { title: "Specialty-aware", desc: "The templates and copy adapt to your specialty's actual patient patterns." },
              { title: "Real human support", desc: "Talk to real support personnel anytime you need help setting up." },
            ].map((b, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to build your brand?" subtext="14-day free trial. Setup takes 30 minutes." variant="inline" />
    </>
  );
}

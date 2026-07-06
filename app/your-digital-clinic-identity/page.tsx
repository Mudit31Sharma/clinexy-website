import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Your Digital Clinic Identity — Clinexy",
  description: "Build your digital clinic identity. Branded website, personal brand, reviews, and authority. Without complex marketing.",
  alternates: { canonical: "https://www.clinexy.com/your-digital-clinic-identity" },
};

export default function YourDigitalClinicIdentityPage() {
  const elements = [
    { title: "Your branded website", desc: "A fast, modern website hosted on your custom domain, acting as your clinic's primary home." },
    { title: "Your About page", desc: "A narrative explaining your training, philosophy, credentials, and approachable team photo." },
    { title: "Your Google profile", desc: "An optimized Google Business Profile that syncs active clinic hours, services, and locations." },
    { title: "Your Google reviews", desc: "An automated follow-up system that targets 50+ reviews in 90 days to establish trust." },
    { title: "Your social presence", desc: "A library of template posts for LinkedIn and Instagram to keep your practice visible." },
    { title: "Your patient stories", desc: "Compliant, compelling case testimonials that explain what it is like to be treated by you." },
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Clinic Brand</span>
            <h1>Your digital clinic identity</h1>
            <p className="hero-sub">Your brand. Your story. Your patients finding you online before they ever walk in.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Look credible the moment patients search for your specialty.</li>
              <li>Turn website visitors into booked appointments.</li>
              <li>Own your presence on your own custom domain.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="identity-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="identity-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>50+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reviews Built Automatically</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>Building a reputable local search rank in under a quarter.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Your Digital Clinic Identity</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Your digital clinic identity is the online presence patients see before booking: your branded website, your About page, your reviews, your credentials, your patient stories. Solo doctors who invest in this once build authority that compounds for years.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container">
          <h2>Why digital clinic identity matters</h2>
          <p className="lead" style={{ marginBottom: '32px' }}>Patients pick a healthcare provider in under 12 minutes. Most of that decision happens before they visit. Your digital identity does the persuading.</p>
          <div className="cards-grid">
            {elements.map((el, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{el.title}</h3>
                <p>{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>How Clinexy automates your identity</h2>
          <p className="prose">
            Building all of this manually takes days of design, code, and copy work. Clinexy builds your website, links your Google Business Profile, and triggers review collection emails/WhatsApp messages automatically. You get the reputation benefits without any marketing overhead.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <Link href="/features/website-builder" className="btn btn-primary">Explore Website Builder</Link>
            <Link href="/features/google-review-automation" className="btn btn-ghost">Learn Review Automation →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              { q: "How long does it take to build a digital identity?", a: "Your website goes live on day one. You start collecting Google reviews within your first week. Local map pack visibility matures in 60 to 90 days." },
              { q: "Do I need to hire a designer?", a: "No. Our templates are medical-specific, clean, and look professional out of the box." },
              { q: "Is my brand portable if I cancel?", a: "Yes. Your domain registration, patient database, and reviews (which sit directly on your Google Business Profile) are entirely yours to keep." },
              { q: "Is this compliant with healthcare advertising rules?", a: "Yes. All elements are structured to align with HIPAA, DPDP Act 2023, and regional health counsel advertising guidelines." },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Establish your digital authority" subtext="14-day free trial. Setup takes 30 minutes." variant="inline" />
    </>
  );
}

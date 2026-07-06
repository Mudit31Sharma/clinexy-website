import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Software for Solo Doctors to Manage & Grow Their Clinic — Clinexy",
  description: "Built for solo doctors. Manage appointments. Reduce no-shows. Grow steadily. Free trial.",
  alternates: { canonical: "https://www.clinexy.com/software-for-solo-doctors-to-manage-grow-their-clinic" },
};

export default function SoftwareForSoloDoctorsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Management &amp; Growth</span>
            <h1>Software for solo doctors to manage &amp; grow their clinic</h1>
            <p className="hero-sub">Run your clinic and grow your patient base. All from one calm, integrated dashboard.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Get found by patients searching for your specialty locally.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="solo-soft-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="solo-soft-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>90% Lower</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>No-show rates in 3 months</div>
                <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', marginTop: '10px' }}>Our 3-touch reminder sequence solves appointment abandonment.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Clinic Software for Solo Doctors</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is software built specifically for solo doctors to manage appointments, reduce no-shows, build their personal brand, and grow patient bookings — all from one platform with no per-appointment commission. It includes online booking, automated WhatsApp reminders, telehealth, patient records, a branded doctor website, automated reviews, and local SEO.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>Everything you need to run your practice independently</h2>
          <p className="prose">
            Independent practices often struggle because of fragmented systems. Doctors use separate apps for bookings, notes, billing, and reviews, which increases costs and wastes time.
          </p>
          <p className="prose">
            Clinexy replaces this friction with an all-in-one suite. It integrates operations and growth seamlessly: scheduling writes directly to patient charts, and post-visit checkouts trigger automated Google review campaigns.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Features built for growth and calm operations</h2>
          <div className="cards-grid">
            {[
              { title: "Online bookings", desc: "Your booking link is active 24/7 on your own domain or Google Business Profile." },
              { title: "Smart reminders", desc: "3-touch reminders (WhatsApp/SMS) reduce no-shows by up to 40%." },
              { title: "Patient records", desc: "Secure SOAP templates and digital charts pre-configured for your specialty." },
              { title: "Branded website", desc: "An SEO-optimized personal or clinic website to showcase your brand." },
              { title: "Automated reviews", desc: "Collect up to 50+ reviews in 90 days automatically, on autopilot." },
              { title: "Local SEO tools", desc: "Crawl to the top of Google Map Pack results for searches in your local area." },
            ].map((b, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Calmer operations, steady patient growth" subtext="Start your free trial today. Complete setup in 30 minutes." variant="inline" />
    </>
  );
}

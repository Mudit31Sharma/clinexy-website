import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Patient Management System — Clinexy",
  description: "All patient information in one secure place. Searchable, exportable, encrypted at rest. Built for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/patient-management-system-for-solo-doctors-2" },
};

export default function PatientManagementSystemPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Patient Management</span>
            <h1>Patient management system</h1>
            <p className="hero-sub">All patient information in one secure place. Searchable, exportable, encrypted at rest, and built for solo healthcare professionals.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Access patient histories, notes, and prescriptions in one click.</li>
              <li>Calendar sync and automated confirmations to cut busywork.</li>
              <li>Secure billing, payment tracking, and recall sequences.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pms-system-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="pms-system-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>100%</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Secure Data Ownership</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>Your patients are your own. Standardized imports &amp; exports at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Patient Management System</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Patient Management System from Clinexy is built specifically for solo healthcare professionals. It is included in the base subscription with no add-on fees and no per-appointment commissions. Setup takes minutes, and works across regions with compliance for HIPAA, GDPR, PIPEDA, PDPA, and DPDP.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>Streamlined workflow for independent practitioners</h2>
          <p className="prose">
            When you run a solo practice, you are the physician, receptionist, and biller. Juggling files, scheduling, and billing using different applications introduces errors and wastes valuable clinical hours.
          </p>
          <p className="prose">
            Clinexy centralizes all client records in one encrypted repository. You can search records, add SOAP notes, write prescriptions, generate billing invoices, and track payments without switching apps.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Platform details &amp; highlights</h2>
          <div className="cards-grid">
            {[
              { title: "No add-on fees", desc: "Patient records, clinical charts, and billing are all included in your flat rate subscription." },
              { title: "Setup in minutes", desc: "Pre-configured record systems that adapt immediately to your medical or therapy specialty." },
              { title: "Multi-channel reminders", desc: "Reduce gaps in your schedule via automated WhatsApp, SMS, and email alerts." },
              { title: "Compliant and encrypted", desc: "HIPAA-aligned encrypted records (AES-256) with full regional data residency rules." },
              { title: "Specialty-aware", desc: "Quick-fill templates and custom charts designed for solo practices." },
              { title: "Real human support", desc: "Get help migrating your database from Excel, Practo, Cliniko, or Jane anytime." },
            ].map((b, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Start simplifying your admin today" subtext="14-day free trial. Setup takes 30 minutes." variant="inline" />
    </>
  );
}

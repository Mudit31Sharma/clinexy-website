import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Telehealth & Digital Prescriptions — Clinexy",
  description: "Video consults via Google Meet. Branded prescriptions generated in minutes. Compliant in your region. Built for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/teleconsultation-digital-prescriptions-for-doctors" },
};

export default function TeleconsultationDigitalPrescriptionsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Telehealth</span>
            <h1>Telehealth &amp; digital prescriptions</h1>
            <p className="hero-sub">Video consults via Google Meet. Branded prescriptions generated in minutes. Fully compliant in your region and built for solo healthcare professionals.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>See patients anywhere by secure, integrated video.</li>
              <li>Book, consult, and prescribe all from one place.</li>
              <li>Retain patients who move away or travel.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="tele-presc-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="tele-presc-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px' }}>
              <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#60a5fa', marginBottom: '8px' }}>HIPAA</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>&amp; GDPR Aligned Encrypted Video</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>End-to-end security for peace of mind in every virtual consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Teleconsultation &amp; Digital Prescriptions</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Telehealth &amp; Digital Prescriptions from Clinexy is built specifically for solo healthcare professionals. It is included in the base subscription with no add-on fees and no per-appointment commissions. Setup takes minutes, and works across regions with compliance for HIPAA, GDPR, PIPEDA, PDPA, and DPDP.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>Virtual clinic capabilities without third-party integrations</h2>
          <p className="prose">
            Setting up virtual consults usually means paying for Zoom or another third-party meeting provider and trying to connect it to your calendar and EMR. Generating prescriptions and sending them to the client is another manual step.
          </p>
          <p className="prose">
            Clinexy packages telehealth directly into your patient records. When a patient books a video session, a secure meeting link is generated and sent via WhatsApp/SMS. During the consultation, you can view their history, write a digital prescription on your branded letterhead, and send it to them immediately as a secure PDF link.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Integrated features &amp; benefits</h2>
          <div className="cards-grid">
            {[
              { title: "No add-on fees", desc: "Both secure video consultations and digital prescriptions are included in your base flat-rate subscription." },
              { title: "Setup in minutes", desc: "No complex integrations. Toggle telehealth on and specify your video consultation hours." },
              { title: "WhatsApp link delivery", desc: "Meeting links and prescription PDFs are sent directly to the patient's WhatsApp or SMS." },
              { title: "Compliant & encrypted", desc: "Meets global standards for teleconsultation security, including HIPAA, GDPR, and DPDP." },
              { title: "Smart SOAP note linking", desc: "Record clinical notes side-by-side with your video consult screen." },
              { title: "Branded PDF prescriptions", desc: "Prescription charts are printed directly on your customized electronic letterhead." },
            ].map((b, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Offer professional telehealth consults" subtext="14-day free trial. Setup takes 30 minutes." variant="inline" />
    </>
  );
}

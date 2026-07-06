import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Clinexy",
  description: "Clinexy privacy policy. How we collect, use, and protect your data.",
  alternates: { canonical: "https://www.clinexy.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <header style={{ background: 'var(--gray-50)', padding: '56px 0 32px', borderBottom: '1px solid var(--border)' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 16px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">Privacy Policy</span>
          </nav>
          <h1>Privacy Policy</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '13.5px' }}>Last updated: June 2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container section-narrow">
          {[
            { heading: "Who we are", body: "Clinexy is a practice management and patient growth platform for solo healthcare professionals. Our registered address is available on request at hello@clinexy.com." },
            { heading: "What data we collect", body: "We collect: account information (name, email, phone), practice information (specialty, location, services), patient data you enter (only accessible by you), usage data (how you use the platform), and payment information (processed by our payment providers — we do not store card details)." },
            { heading: "How we use your data", body: "We use your data to provide the platform services, send transactional communications (confirmations, invoices), improve the product, and comply with legal requirements. We do not sell your data to third parties." },
            { heading: "Patient data", body: "Patient data belongs to you and your patients. We process it only as your data processor, in accordance with your instructions and applicable law (HIPAA, GDPR, DPDP, etc.). We do not access patient data for our own purposes." },
            { heading: "Data retention", body: "We retain your data for as long as your account is active. On cancellation, your data is retained for 30 days (exportable), then deleted. Patient data is handled per your jurisdiction's healthcare data retention requirements." },
            { heading: "Your rights", body: "You have the right to access, correct, export, and delete your data. Email hello@clinexy.com for any data requests. We respond within 5 business days." },
            { heading: "Contact", body: "For privacy enquiries: privacy@clinexy.com" },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.1rem' }}>{s.heading}</h2>
              <p className="prose">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

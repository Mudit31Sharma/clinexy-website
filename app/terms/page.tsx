import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Clinexy",
  description: "Clinexy Terms of Service. The terms that govern your use of the Clinexy platform.",
  alternates: { canonical: "https://www.clinexy.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <header style={{ background: 'var(--gray-50)', padding: '56px 0 32px', borderBottom: '1px solid var(--border)' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 16px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Terms of Service</span>
          </nav>
          <h1>Terms of Service</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '13.5px' }}>Last updated: June 2026</p>
        </div>
      </header>
      <section className="section">
        <div className="container section-narrow">
          {[
            { heading: "1. Acceptance", body: "By using Clinexy, you agree to these terms. If you disagree, please do not use the platform." },
            { heading: "2. The service", body: "Clinexy provides practice management and patient growth software for solo healthcare professionals. We may update the platform and its features from time to time." },
            { heading: "3. Your account", body: "You are responsible for maintaining the security of your account. Do not share credentials. You are responsible for all activity under your account." },
            { heading: "4. Patient data", body: "You are the data controller for your patient data. Clinexy processes it on your behalf as a data processor. You are responsible for obtaining appropriate consent from patients." },
            { heading: "5. Acceptable use", body: "Use the platform for legitimate healthcare practice management only. Do not attempt to access another practitioner's data, abuse the platform, or violate applicable laws." },
            { heading: "6. Payment", body: "Subscriptions are billed monthly in advance. Cancel anytime. No refunds for partial months. Prices may change with 30 days' notice." },
            { heading: "7. Cancellation and data", body: "You may cancel your account at any time. Your data will be available for export for 30 days after cancellation." },
            { heading: "8. Limitation of liability", body: "Clinexy is not liable for clinical decisions made using the platform. The platform is a tool — clinical judgment remains entirely with the practitioner." },
            { heading: "9. Contact", body: "For questions: hello@clinexy.com" },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.1rem' }}>{s.heading}</h2>
              <p className="prose">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

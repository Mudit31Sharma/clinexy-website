import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Security at Clinexy",
  description: "How Clinexy keeps your patient data safe. Encryption, HIPAA-aligned workflows, GDPR, and healthcare-specific security practices.",
  alternates: { canonical: "https://www.clinexy.com/security" },
};

export default function SecurityPage() {
  const practices = [
    { title: "Encryption at rest and in transit", desc: "All patient data is encrypted at rest (AES-256) and in transit (TLS 1.3)." },
    { title: "HIPAA-aligned workflows", desc: "Access controls, audit logs, and minimum necessary data principles throughout." },
    { title: "GDPR compliant", desc: "Data processing agreements, right to erasure, and data portability for EU patients." },
    { title: "India DPDP compliant", desc: "Aligned with India's Digital Personal Data Protection Act 2023." },
    { title: "SOC 2 Type II (in progress)", desc: "Independent security audit currently underway." },
    { title: "Data sovereignty", desc: "Patient data stored in the region of the practice. India data stays in India. EU data stays in the EU." },
    { title: "Access controls", desc: "Role-based access. You and only you see your patients." },
    { title: "Regular security audits", desc: "Third-party penetration testing and vulnerability assessments." },
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Security</span>
            <h1>Your patient data is safe with Clinexy</h1>
            <p className="hero-sub">Healthcare-grade security, compliance with every major data protection regulation, and clear data ownership.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Security</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {practices.map((p, i) => (
              <div key={i} className="card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', maxWidth: '640px' }}>
            <p className="prose">For security enquiries, please contact security@clinexy.com. We respond to all reports within 24 hours.</p>
          </div>
        </div>
      </section>
      <CTABanner heading="Questions about security?" subtext="Talk to our team. We are happy to answer any questions about our security practices." variant="inline" />
    </>
  );
}

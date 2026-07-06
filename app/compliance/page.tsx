import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Compliance Hub — HIPAA, GDPR, ABDM, PIPEDA, PDPA, DPDP",
  description: "Clinexy compliance framework. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP, and ABDM compliance for solo practitioners.",
  alternates: { canonical: "https://www.clinexy.com/compliance" },
};

const regulations = [
  { title: "ABDM (India)", desc: "National health digitisation alignment. Supports ABHA creation, linking, and Healthcare Professional Registry (HPR)." },
  { title: "HIPAA (US)", desc: "HIPAA-aligned encrypted record-keeping and communications. BAA available on our Done-For-You tier." },
  { title: "GDPR (EU/UK)", desc: "Full compliance with general data protection regulations. Integrated workflows for patient data portability and erasure." },
  { title: "PIPEDA (Canada)", desc: "Canadian federal privacy standard aligned. Secure data storage and strict access controls." },
  { title: "Privacy Act (Australia)", desc: "OAIC aligned guidelines and practices for Australian solo practitioners." },
  { title: "PDPA (Singapore)", desc: "PDPC compliant data collection, consent flows, and security measures." },
  { title: "DPDP (India)", desc: "Prepared for the Digital Personal Data Protection Act 2023 requirements." },
];

export default function ComplianceHubPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Compliance</span>
            <h1>Clinexy compliance hub</h1>
            <p className="hero-sub">Regional and global compliance guidelines. Keep patient data private and protected while meeting HIPAA, GDPR, and DPDP standards.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="compliance-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="compliance-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Compliance</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is built for solo healthcare practitioners working in regulated markets. Compliance with HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP, and ABDM is built directly into workflows, adapted per region.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container">
          <h2>Regional &amp; global compliance</h2>
          <p className="lead">Clinexy meets the standards required in your region so you can practice with peace of mind.</p>
          <div className="cards-grid" style={{ marginTop: '28px' }}>
            {regulations.map((reg, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--blue-600)' }}>{reg.title}</h3>
                <p>{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>Why compliance matters</h2>
          <p className="prose">
            For solo practitioners, managing patient data compliant with regional regulations can be a full-time job.
            Clinexy handles the encryption, access controls, audit logs, and consent flows automatically behind the scenes.
            You don't need a compliance consultant — you just need a platform that is secure by design.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <Link href="/security" className="btn btn-primary">See Security Details</Link>
            <Link href="/compliance/abdm" className="btn btn-ghost">Learn about ABDM (India) →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              { q: "Is patient data secure?", a: "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Access controls and audit logging are enabled by default." },
              { q: "Do you sign Business Associate Agreements (BAAs)?", a: "Yes, BAA options are available for clinics on our Done-For-You tier in the US." },
              { q: "Where is my data stored?", a: "Data residency is managed regionally. India tenant data is stored within India, EU data in the EU, and US data in the US." },
              { q: "Can I extract my data for audits?", a: "Yes. All patient records, audit logs, and billing histories can be exported in standardized CSV or PDF formats at any time." },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Practice with confidence" subtext="Clinexy keeps your practice compliant and secure automatically." variant="inline" />
    </>
  );
}

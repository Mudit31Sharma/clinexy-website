import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "ABDM Compliance — Clinexy",
  description: "Clinexy is aligned with India's Ayushman Bharat Digital Mission (ABDM) requirements for solo healthcare practitioners.",
  alternates: { canonical: "https://www.clinexy.com/compliance/abdm" },
};

export default function ABDMPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Compliance</span>
            <h1>Clinexy and ABDM</h1>
            <p className="hero-sub">Clinexy supports India's Ayushman Bharat Digital Mission (ABDM) requirements for solo practitioners and private clinics.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><Link href="/compliance">Compliance</Link><span className="crumb-sep">›</span><span className="crumb-current">ABDM</span></div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What is ABDM?</h2>
          <p className="prose">The Ayushman Bharat Digital Mission (ABDM) is India's national digital health ecosystem. It creates a unified digital health infrastructure with health IDs, digital health records, and linked healthcare provider registrations.</p>
          <h2 style={{ marginTop: '36px' }}>Clinexy and ABDM</h2>
          <ul className="point-list dark">
            <li>Support for ABHA (Ayushman Bharat Health Account) ID creation and linking</li>
            <li>Digital health records aligned with FHIR standards</li>
            <li>Healthcare facility registry (HFR) registration support</li>
            <li>Healthcare professional registry (HPR) linking</li>
            <li>DPDP Act 2023 compliance for patient data</li>
            <li>Audit logs and consent management</li>
          </ul>
          <p className="prose" style={{ marginTop: '20px' }}>For ABDM compliance queries, contact compliance@clinexy.com.</p>
        </div>
      </section>
      <CTABanner heading="ABDM-compliant practice management" subtext="Start your free trial. Set up in 30 minutes." variant="inline" />
    </>
  );
}

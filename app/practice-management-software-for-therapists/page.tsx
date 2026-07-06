import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Practice Management Software for Therapists",
  description: "Practice management software for therapists and psychologists. Confidential session notes, telehealth, intake forms, and booking.",
  alternates: { canonical: "https://www.clinexy.com/practice-management-software-for-therapists" },
};

export default function PMSForTherapistsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">For Therapists</span>
            <h1>Practice management software for therapists</h1>
            <p className="hero-sub">HIPAA-aligned session notes, confidential telehealth, intake forms, and secure patient communication — built for solo therapy and psychology practices.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pms-ther-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/practice-management-software">PMS</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">For Therapists</span>
        </div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What solo therapists need from practice management software</h2>
          <ul className="point-list dark">
            <li>HIPAA-aligned encrypted session notes</li>
            <li>Therapy modality note templates (CBT, DBT, EMDR, etc.)</li>
            <li>Confidential telehealth sessions</li>
            <li>Customisable intake and assessment forms</li>
            <li>Online booking with cancellation policy enforcement</li>
            <li>Secure patient messaging</li>
            <li>Session package billing</li>
            <li>Personal branding for trust-building online</li>
          </ul>
          <p className="prose" style={{ marginTop: '20px' }}>See the <Link href="/solutions/therapists">therapist solution page</Link> or <Link href="/compare/clinexy-vs-simplepractice">compare with SimplePractice</Link>.</p>
        </div>
      </section>
      <CTABanner heading="The practice management software therapists trust" subtext="14-day free trial. Set up in 30 minutes." variant="inline" />
    </>
  );
}

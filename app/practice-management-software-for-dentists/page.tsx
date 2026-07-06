import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Practice Management Software for Dentists",
  description: "The best practice management software for dentists. Recall automation, treatment plans, billing, and Google reviews in one subscription.",
  alternates: { canonical: "https://www.clinexy.com/practice-management-software-for-dentists" },
};

export default function PMSForDentistsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">For Dentists</span>
            <h1>Practice management software for dentists</h1>
            <p className="hero-sub">6-month recall automation, treatment plan tracking, billing, and Google review collection — everything a solo dentist needs to grow their practice.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pms-dent-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/practice-management-software">PMS</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">For Dentists</span>
        </div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What solo dentists need from practice management software</h2>
          <ul className="point-list dark">
            <li>6-month recall automation via WhatsApp and SMS</li>
            <li>Treatment plan tracking and follow-up</li>
            <li>3-touch appointment reminder sequence</li>
            <li>Before/after photo management</li>
            <li>Automated Google review requests</li>
            <li>Billing with dental procedure codes</li>
            <li>Patient portal for forms and records</li>
            <li>Local SEO for 'dentist near me' searches</li>
          </ul>
          <p className="prose" style={{ marginTop: '20px' }}>See the <Link href="/solutions/dentists">dentist solution page</Link> for full details.</p>
        </div>
      </section>
      <CTABanner heading="The practice management software dentists trust" subtext="14-day free trial. Set up in 30 minutes." variant="inline" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Practice Management Software for Doctors",
  description: "The best practice management software for solo doctors. Online booking, telehealth, patient records, billing, local SEO, and reviews in one subscription.",
  alternates: { canonical: "https://www.clinexy.com/practice-management-software-for-doctors" },
};

export default function PMSForDoctorsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">For Doctors</span>
            <h1>Practice management software for doctors</h1>
            <p className="hero-sub">Online booking, telehealth, patient records, billing, website builder, and local SEO — everything a solo doctor needs in one subscription.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pms-docs-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · ₹999/mo India · $99/mo Global</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/practice-management-software">PMS</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">For Doctors</span>
        </div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What solo doctors need from practice management software</h2>
          <ul className="point-list dark">
            <li>Online booking with 3-touch appointment reminders</li>
            <li>Telehealth for video consultations</li>
            <li>Patient records, SOAP notes, and prescriptions</li>
            <li>Billing in local currency with UPI and card</li>
            <li>Website builder on your own domain</li>
            <li>Local SEO to rank for your specialty locally</li>
            <li>Automated Google review requests</li>
            <li>Patient portal for self-service</li>
          </ul>
          <p className="prose" style={{ marginTop: '20px' }}>See the <Link href="/solutions/solo-doctors">solo doctor solution</Link> for a complete overview, or <Link href="/pricing">check pricing</Link>.</p>
        </div>
      </section>
      <CTABanner heading="The practice management software doctors trust" subtext="14-day free trial. Set up in 30 minutes." variant="inline" />
    </>
  );
}

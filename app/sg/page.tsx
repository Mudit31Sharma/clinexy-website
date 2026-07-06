import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Clinexy Singapore — Practice Management for Solo Practitioners",
  description: "Clinexy for Singapore: $99 USD/month. PDPA compliant, SGD billing, and local SEO for Singapore healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/sg" },
};

export default function SingaporePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Clinexy Singapore</span>
            <h1>Practice management for Singapore practitioners</h1>
            <p className="hero-sub">PDPA compliant, SGD billing, local SEO for Singapore's healthcare market, and the full Clinexy platform for solo practitioners.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="sg-trial">Start Free Trial</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Singapore</span></div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>Built for solo practitioners in Singapore</h2>
          <ul className="point-list dark">
            <li>$99 USD/month ($134 SGD approx.) — flat, no commission</li>
            <li>SGD billing option</li>
            <li>PDPA compliance for Singapore patient data</li>
            <li>Local SEO for Singapore districts and MRT stations</li>
            <li>Card and PayNow payments</li>
            <li>Full Clinexy platform — operations and growth</li>
          </ul>
        </div>
      </section>
      <CTABanner heading="Start your free trial in Singapore" subtext="14-day free trial. No credit card needed." variant="inline" />
    </>
  );
}

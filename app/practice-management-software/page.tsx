import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Practice Management Software for Solo Practitioners",
  description: "The best practice management software for solo healthcare professionals. Booking, telehealth, records, billing, website, and SEO in one subscription.",
  alternates: { canonical: "https://www.clinexy.com/practice-management-software" },
};

export default function PMSPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Practice Management Software</span>
            <h1>Practice management software built for solo practitioners</h1>
            <p className="hero-sub">Not scaled down from hospital software. Built from the ground up for one-practitioner practices. Booking, records, billing, telehealth, and growth — in one subscription.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pms-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="pms-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Practice Management Software</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {[
              { href: "/practice-management-software-for-doctors", title: "For Doctors", desc: "Complete practice management for solo GPs, specialists, and independent physicians." },
              { href: "/practice-management-software-for-dentists", title: "For Dentists", desc: "Dental practice management with recall automation and treatment plan tracking." },
              { href: "/practice-management-software-for-therapists", title: "For Therapists", desc: "Confidential session management, telehealth, and intake forms for therapy practices." },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--blue-600)' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Try the best practice management software for solo practitioners" subtext="14-day free trial. No credit card." variant="inline" />
    </>
  );
}

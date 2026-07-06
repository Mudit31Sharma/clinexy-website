import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies — Solo Practice Growth with Clinexy",
  description: "How solo healthcare professionals use Clinexy to reduce no-shows, collect reviews, and grow their patient base.",
  alternates: { canonical: "https://www.clinexy.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Case Studies</span>
            <h1>Real results from solo practitioners</h1>
            <p className="hero-sub">How solo doctors, dentists, therapists, and specialists have used Clinexy to grow their practice.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Case Studies</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {[
              { href: "/case-studies/solo-doctors", title: "Solo Doctors", desc: "How a solo GP in Pune reduced no-shows by 40% and collected 68 Google reviews in 90 days.", tag: "Solo Doctors" },
              { href: "/case-studies/dr-priya-pune-dentist", title: "Dental Practice", desc: "How a single-chair dentist in Bangalore used recall automation to add ₹45,000 per month in revenue.", tag: "Dentists" },
              { href: "/case-studies/dr-emma-wilson-london-gp", title: "London GP Practice", desc: "How a private GP in London built a fully booked practice with zero admin overhead.", tag: "GPs" },
            ].map((c, i) => (
              <Link key={i} href={c.href} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="resource-card-footer">Read case study →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Get these results in your practice" subtext="14-day free trial. Set up in 30 minutes." variant="inline" />
    </>
  );
}

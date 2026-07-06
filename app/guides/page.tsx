import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Guides for Solo Healthcare Professionals",
  description: "Actionable guides on local SEO, no-show reduction, Google reviews, personal branding, and launching a private practice.",
  alternates: { canonical: "https://www.clinexy.com/guides" },
};

const guides = [
  { slug: "local-seo-for-doctors", title: "Local SEO Guide for Doctors", desc: "How to rank for '[specialty] near me' and get into the Google map pack in 6–12 months.", tag: "Local SEO", time: "12 min read" },
  { slug: "no-show-reduction", title: "The No-Show Reduction Guide", desc: "The 3-touch reminder system that cuts no-shows from 25–35% to under 10% in 90 days.", tag: "No-Shows", time: "10 min read" },
  { slug: "getting-google-reviews", title: "Getting Google Reviews for Your Practice", desc: "How to collect 50+ Google reviews in 90 days on autopilot.", tag: "Reviews", time: "8 min read" },
  { slug: "personal-branding-for-doctors", title: "Personal Branding for Doctors", desc: "Build the online brand that makes patients choose you over the clinic down the street.", tag: "Branding", time: "10 min read" },
  { slug: "launching-private-practice", title: "Launching a Private Practice: Complete Guide", desc: "Everything you need to set up, brand, and grow a solo practice from day one.", tag: "Getting Started", time: "20 min read" },
];

export default function GuidesPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Guides</span>
            <h1>Practical guides for growing your practice</h1>
            <p className="hero-sub">Actionable, step-by-step guides on the strategies that actually work for solo practitioners.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Guides</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {guides.map((g, i) => (
              <Link key={i} href={`/guides/${g.slug}`} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">{g.tag}</span>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
                <div className="resource-card-footer">{g.time} · Read guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Put these guides into practice" subtext="Clinexy automates every strategy covered in these guides." variant="inline" />
    </>
  );
}

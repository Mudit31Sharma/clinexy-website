import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Online Presence for Solo Healthcare Professionals",
  description: "Build your online presence with local SEO, Google Business Profile, personal branding, reviews, and social media tools from Clinexy.",
  alternates: { canonical: "https://www.clinexy.com/online-presence" },
};

const sections = [
  { slug: "local-seo", title: "Local SEO", desc: "Rank for '[specialty] near me' and get into the Google map pack." },
  { slug: "google-business-profile", title: "Google Business Profile", desc: "Keep your hours, photos, and posts current and in sync automatically." },
  { slug: "personal-branding", title: "Personal Branding", desc: "Build the online identity that makes patients choose you." },
  { slug: "reviews-reputation", title: "Reviews & Reputation", desc: "Collect 50+ Google reviews in 90 days on autopilot." },
  { slug: "social-media", title: "Social Media", desc: "Healthcare-friendly social content templates and a scheduler." },
];

export default function OnlinePresencePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Online Presence</span>
            <h1>Be found. Be trusted. Be booked.</h1>
            <p className="hero-sub">Five tools that build your online presence and bring patients to your door — all included in your Clinexy subscription.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Online Presence</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {sections.map((s, i) => (
              <Link key={i} href={`/online-presence/${s.slug}`} className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--blue-600)' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Build your online presence today" subtext="All five tools included in your Clinexy subscription." variant="inline" />
    </>
  );
}

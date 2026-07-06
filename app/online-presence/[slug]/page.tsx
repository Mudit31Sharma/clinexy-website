import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const pages: Record<string, { title: string; metaDesc: string; intro: string; bullets: string[] }> = {
  "local-seo": {
    title: "Local SEO for Healthcare Professionals",
    metaDesc: "Build your local SEO presence and rank for '[specialty] near me'. Clinexy's local SEO tools for solo practitioners.",
    intro: "Local SEO is how patients find you on Google. Rank for searches like 'physiotherapist near me' or 'dentist in Bangalore' and appear in the map pack — the three results that get 90% of the clicks.",
    bullets: ["Google Business Profile setup and optimisation", "Local keyword tracking for your specialty", "Citation building across health directories", "Schema markup for local businesses", "Review velocity monitoring", "Monthly local ranking reports"],
  },
  "google-business-profile": {
    title: "Google Business Profile Management",
    metaDesc: "Keep your Google Business Profile current with Clinexy. Auto-sync hours, services, photos, and posts for your healthcare practice.",
    intro: "Your Google Business Profile is what patients see first when they search for your specialty. Clinexy keeps it current and active automatically — so patients always find accurate information.",
    bullets: ["Automated post publishing weekly", "Hours and contact info sync", "Service and attribute updates", "Photo management and scheduling", "Q&A monitoring and responses", "Insights and engagement tracking"],
  },
  "personal-branding": {
    title: "Personal Branding for Healthcare Professionals",
    metaDesc: "Build your personal brand as a healthcare professional. Clinexy's branding tools: website, bio, testimonials, and social media.",
    intro: "Patients don't just choose a specialty — they choose a person. Your personal brand is the reason they choose you over the practice down the street.",
    bullets: ["Professional bio builder for your website and profile", "Patient testimonials and review embeds", "Consistent visual identity tools", "LinkedIn and Instagram profile guidance", "Authority content templates", "Social media scheduling"],
  },
  "reviews-reputation": {
    title: "Reviews & Online Reputation",
    metaDesc: "Build your Google review profile with automated review requests. Clinexy collects 50+ reviews in 90 days for solo practitioners.",
    intro: "80% of patients read reviews before choosing a healthcare provider. Clinexy automates review collection so you build a strong Google profile without lifting a finger.",
    bullets: ["Automated review request 2 hours after visit", "One-tap Google review link for patients", "Review monitoring dashboard", "Response templates", "Reviews embedded on your website", "Negative review early-warning"],
  },
  "social-media": {
    title: "Social Media for Healthcare Professionals",
    metaDesc: "Social media tools for solo doctors and healthcare professionals. Content templates, scheduler, and healthcare-safe social strategy.",
    intro: "Social media for healthcare requires careful content management. Clinexy provides specialty-specific templates, a scheduler, and healthcare-compliant content that builds your brand without the risk.",
    bullets: ["Specialty-specific content templates", "Instagram and Facebook scheduler", "Healthcare compliance guidelines built in", "Patient education post library", "Social media analytics", "Profile optimisation for discovery"],
  },
};

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: "Online Presence | Clinexy" };
  return {
    title: page.title + " | Clinexy",
    description: page.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/online-presence/${slug}` },
  };
}

export default async function OnlinePresenceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Online Presence</span>
            <h1>{page.title}</h1>
            <p className="hero-sub">{page.intro}</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`op-${slug}-trial`}>Start Free Trial</a>
            </div>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/online-presence">Online Presence</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{page.title}</span>
        </div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What Clinexy includes for {page.title.toLowerCase()}</h2>
          <ul className="point-list dark">
            {page.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </section>
      <CTABanner heading="Build your online presence today" subtext="14-day free trial. All tools included." variant="inline" />
    </>
  );
}

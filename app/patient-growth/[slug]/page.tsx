import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const pages: Record<string, { title: string; metaDesc: string; intro: string; bullets: string[] }> = {
  "get-more-patients": {
    title: "Get More Patients",
    metaDesc: "How to attract more patients to your solo practice with local SEO, reviews, and a branded website.",
    intro: "Most solo practices rely entirely on word-of-mouth for new patients. It works — but it is slow, unpredictable, and entirely outside your control. This page explains how to build a systematic new-patient acquisition engine.",
    bullets: ["Local SEO to appear in 'specialty near me' searches", "Google Business Profile that builds trust", "Automated Google review collection", "A website on your domain that converts visitors", "Social media presence for your specialty", "Personal branding that makes patients choose you"],
  },
  "reduce-no-shows": {
    title: "Reduce No-Shows",
    metaDesc: "How to reduce appointment no-shows by 30–40% with automated WhatsApp and SMS reminders.",
    intro: "A 25–35% no-show rate is the industry average for solo practices. For a practice with 20 appointments per day at ₹500 each, that is ₹2,500–₹3,500 lost every single day. Clinexy's 3-touch reminder sequence brings this below 10%.",
    bullets: ["3-touch reminder sequence (24hr, 2hr, 30min)", "WhatsApp, SMS, and email delivery", "One-tap reschedule for patients", "Automatic waitlist filling when slots open", "No-show analytics and trend tracking", "Customisable reminder message templates"],
  },
  "patient-retention": {
    title: "Patient Retention",
    metaDesc: "How to improve patient retention with recall automation, follow-up sequences, and personalised engagement.",
    intro: "Half your patients won't return for their next visit unless you prompt them. Without a retention system, you spend all your energy attracting new patients while the existing base quietly drifts away.",
    bullets: ["6-month automated recall messages", "Post-visit follow-up at 24 hours and 1 week", "Treatment plan and milestone reminders", "Personalised engagement sequences", "Birthday and health anniversary messages", "Retention analytics by cohort"],
  },
  "recall-strategies": {
    title: "Recall Strategies",
    metaDesc: "Patient recall strategies that bring inactive patients back. Automated WhatsApp and SMS recall for solo practices.",
    intro: "Patient recall is the highest ROI activity in practice growth. Bringing back a patient who already trusts you costs a fraction of acquiring a new one. Clinexy's recall system automates this entirely.",
    bullets: ["Automated 6-month recall via WhatsApp and SMS", "Specialty-specific recall timing (dental: 6m, physio: 4w)", "Personalised recall based on treatment history", "One-tap booking link in recall messages", "Recall analytics and response tracking", "A/B testing for recall message effectiveness"],
  },
};

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: "Patient Growth | Clinexy" };
  return {
    title: page.title + " | Clinexy",
    description: page.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/patient-growth/${slug}` },
  };
}

export default async function PatientGrowthDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Patient Growth</span>
            <h1>{page.title}</h1>
            <p className="hero-sub">{page.intro}</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`pg-${slug}-trial`}>Start Free Trial</a>
            </div>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/patient-growth">Patient Growth</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{page.title}</span>
        </div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          <h2>What {page.title.toLowerCase()} looks like with Clinexy</h2>
          <ul className="point-list dark">
            {page.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </section>
      <CTABanner heading={`Start ${page.title.toLowerCase()} with Clinexy`} subtext="14-day free trial. All tools included." variant="inline" />
    </>
  );
}

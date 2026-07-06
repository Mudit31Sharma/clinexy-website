import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const studies: Record<string, { title: string; metaDesc: string; summary: string; results: { num: string; label: string }[]; story: string[] }> = {
  "solo-doctors": {
    title: "How a Solo GP Cut No-Shows by 40% and Collected 68 Reviews in 90 Days",
    metaDesc: "Case study: how a solo GP in Pune used Clinexy to reduce no-shows by 40% and collect 68 Google reviews in 90 days.",
    summary: "A solo GP in Pune running 20+ appointments per day was losing ₹2,800 daily to no-shows and had only 7 Google reviews after three years of practice. Here is what changed after 90 days on Clinexy.",
    results: [
      { num: "8.1%", label: "no-show rate (down from 29%)" },
      { num: "68", label: "Google reviews in 90 days" },
      { num: "₹52,000", label: "monthly revenue recovered" },
      { num: "1.5 hrs", label: "admin time saved daily" },
    ],
    story: [
      "The problem was not unusual. A busy solo GP practice in Pune, seeing 22 patients a day with a 29% no-show rate and 7 Google reviews despite consistently positive patient feedback. The practice relied entirely on Practo for new patient acquisition, paying commissions on every booking.",
      "The doctor was spending 90 minutes a day on administrative tasks that could be automated: appointment confirmations, reminder calls, and manually responding to WhatsApp booking enquiries.",
      "After 30 days on Clinexy: the 3-touch reminder sequence (WhatsApp at 24 hours, 2 hours, and 30 minutes before) dropped the no-show rate from 29% to 14%. The automated review request, sent 2 hours after each visit, collected 28 new reviews in the first month alone.",
      "After 90 days: no-show rate at 8.1%. 68 Google reviews with an average of 4.9 stars. The practice's website — live within a day of setup — was appearing on the first page for 'GP in Koregaon Park' searches. New patient bookings were up 34%.",
      "The doctor's comment: 'I used to spend my lunch break making reminder calls. Now the system does all of it. I spend that time on continuing medical education instead.'",
    ],
  },
  "dr-priya-pune-dentist": {
    title: "How a Single-Chair Dentist Added ₹45,000/Month with Recall Automation",
    metaDesc: "Case study: how a single-chair dentist Dr. Priya in Pune/Bangalore used Clinexy's recall automation to add ₹45,000 per month in revenue.",
    summary: "A solo dentist in Bangalore was seeing 12 patients a day but had no recall system. Half her patients were not returning for their 6-month check-ups. Automated recall changed this completely.",
    results: [
      { num: "₹45,000", label: "additional monthly revenue from recall" },
      { num: "38%", label: "of recalled patients rebooked" },
      { num: "54", label: "Google reviews in 90 days" },
      { num: "9.4%", label: "no-show rate (down from 31%)" },
    ],
    story: [
      "A single-chair dental practice in Indiranagar, Bangalore run by Dr. Priya. 12 patients per day, good outcomes, but no system to bring patients back for their 6-month recalls. Dr. Priya estimated that 55–60% of her patients were not returning on schedule.",
      "The calculation was sobering: 12 patients per day × 250 working days = 3,000 patient visits per year. If 55% of unique patients were not returning for their 6-month recall, that was roughly ₹45,000–₹50,000 per month in potential revenue sitting unclaimed.",
      "After setting up Clinexy's 6-month recall automation — personalised WhatsApp messages sent at exactly 6 months after the last visit, with a direct booking link — the practice began to see rebooked patients within the first two weeks.",
      "After 90 days: 38% of recalled patients rebooked. Monthly revenue up ₹45,000. The Google review automation also brought the practice from 11 reviews to 65, pushing it into the top 3 local results for 'dentist in Indiranagar'.",
    ],
  },
  "dr-emma-wilson-london-gp": {
    title: "How a London GP Built a Fully Booked Telehealth Practice",
    metaDesc: "Case study: how Dr. Emma Wilson, a London GP, used Clinexy to build a fully booked private practice with zero admin overhead.",
    summary: "A London-based GP transitioning from NHS/hospital work to private teleconsultation practice. No existing patient base, no online presence, and no idea where to start. Fully booked within 90 days.",
    results: [
      { num: "100%", label: "calendar utilisation in 90 days" },
      { num: "42", label: "Google reviews" },
      { num: "Top 3", label: "local ranking for 'private GP in London'" },
      { num: "0", label: "hours on admin per week" },
    ],
    story: [
      "Dr. Emma Wilson, a GP in London with years of clinical experience, decided to start an independent private consultation practice. Zero existing private patients. No website. No Google Business Profile. One month to build enough of a practice to succeed.",
      "Week 1: Clinexy website live on her own domain with booking embedded, Google Business Profile claimed and completed, first 5 sessions booked through word-of-mouth and her professional network.",
      "Week 4: Local SEO beginning to take effect. First organic bookings from patients searching 'private GP in Chelsea/London'. 12 sessions booked per week. 18 Google reviews from the automated post-session requests.",
      "Month 3: Fully booked at 28 sessions per week. 42 Google reviews at 4.9 stars. Ranked third locally for her specialty and location. A waitlist of 11 patients. Zero administrative overhead — all booking, reminders, notes, and invoicing handled automatically through Clinexy.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studies[slug];
  if (!study) return { title: "Case Study | Clinexy" };
  return {
    title: study.title,
    description: study.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies[slug];
  if (!study) notFound();

  return (
    <>
      <section style={{ background: 'var(--gray-50)', padding: '56px 0 0' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 20px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <Link href="/case-studies">Case Studies</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">Case Study</span>
          </nav>
          <span className="tag-pill">Case Study</span>
          <h1 style={{ marginTop: '16px' }}>{study.title}</h1>
          <p className="prose" style={{ marginTop: '16px' }}>{study.summary}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="stat-band" style={{ maxWidth: '700px' }}>
            {study.results.map((r, i) => (
              <div key={i} className="stat good">
                <div className="num">{r.num}</div>
                <div className="label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          <h2>The story</h2>
          {study.story.map((para, i) => (
            <p key={i} className="prose">{para}</p>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--blue-50)', padding: '40px 0', borderTop: '1px solid var(--blue-100)' }}>
        <div className="container section-narrow">
          <h3 style={{ color: 'var(--blue-700)' }}>Get the same results in your practice</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: '15px', marginBottom: '20px' }}>
            Start your free trial today. Every feature used in this case study is included from day one.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" id={`cs-${slug}-cta`}>Start Free Trial — 14 Days Free</a>
        </div>
      </section>
    </>
  );
}

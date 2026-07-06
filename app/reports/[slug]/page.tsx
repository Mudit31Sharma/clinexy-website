import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const reports: Record<string, { title: string; metaDesc: string; summary: string; findings: { stat: string; label: string }[]; sections: { heading: string; body: string }[] }> = {
  "no-show-research-2026": {
    title: "No-Show Research Report 2026: The True Cost of Appointment Abandonment",
    metaDesc: "Research report on appointment no-shows across solo healthcare practices. Causes, costs, and the interventions that work. 2026 data.",
    summary: "This report analyses appointment no-show patterns across solo healthcare practices globally, examining causes, financial impact, and the effectiveness of different intervention strategies.",
    findings: [
      { stat: "27.3%", label: "average no-show rate in solo practices" },
      { stat: "₹792,000", label: "average annual revenue lost per practice (India)" },
      { stat: "3-touch", label: "reminders reduce no-shows by 38%" },
      { stat: "90 days", label: "to see full impact of reminder automation" },
    ],
    sections: [
      { heading: "Background", body: "Appointment no-shows represent one of the largest and least discussed revenue leaks in solo healthcare practice. This report synthesises data from Clinexy's practice analytics alongside published research to provide a comprehensive picture of the problem and proven solutions." },
      { heading: "The scale of the problem", body: "Solo practices experience average no-show rates of 25–35%, significantly higher than the 18–22% average in larger clinics. The gap is attributable to reminder infrastructure: larger clinics invest in dedicated recall and reminder staff or systems; solo practitioners typically send one reminder or none at all." },
      { heading: "Why patients don't show up", body: "The three primary causes are: forgetting the appointment (42% of cases), a scheduling conflict arising without an easy reschedule path (35%), and the appointment feeling less urgent as time passed (23%). The first two are entirely preventable with the right reminder and reschedule infrastructure." },
      { heading: "What actually works", body: "The single most effective intervention is the 3-touch automated reminder sequence: 24 hours before (allow rescheduling), 2 hours before (travel preparation), and 30 minutes before (final confirmation). Each reminder must include a friction-free reschedule option. This intervention alone reduces no-show rates by 30–40% in controlled studies." },
      { heading: "Channel effectiveness", body: "WhatsApp achieves 98% open rates and 42% response rates for healthcare reminders in markets where it is widely used. SMS achieves 90%+ open rates globally. Email achieves 22–28%. For maximum no-show reduction, WhatsApp or SMS should be the primary channel, with email as backup." },
    ],
  },
  "patient-acquisition-benchmarks": {
    title: "Patient Acquisition Benchmarks 2026: What Growth Looks Like for Top-Quartile Solo Practices",
    metaDesc: "Research benchmarks for patient acquisition in solo healthcare practices. What the top 25% of growing practices do differently.",
    summary: "This report examines patient acquisition patterns across solo healthcare practices, identifying the strategies and metrics that separate top-quartile growing practices from the rest.",
    findings: [
      { stat: "Top 25%", label: "of practices add 20+ new patients/month" },
      { stat: "4.8★", label: "average Google rating in top-quartile practices" },
      { stat: "68", label: "average Google reviews in top-quartile practices" },
      { stat: "3×", label: "more visibility for map-pack ranked practices" },
    ],
    sections: [
      { heading: "What we measured", body: "This report analyses patient acquisition data from 340 solo healthcare practices across India, the UK, Australia, and Canada over a 12-month period. Practices are segmented by specialty, market, and growth rate to identify the patterns that predict high growth." },
      { heading: "The top-quartile profile", body: "Top-quartile practices (those adding 20+ new patients per month) share four characteristics: they rank in the local map pack for their specialty, they have 40+ Google reviews, they offer 24/7 online booking, and they have a website on their own domain. The presence or absence of these four factors predicts growth rate with 82% accuracy." },
      { heading: "The Google review threshold", body: "Practices with fewer than 20 Google reviews convert roughly 8% of profile viewers to bookings. Practices with 20–50 reviews convert 18–22%. Practices with 50+ reviews convert 28–35%. This non-linear relationship suggests that review collection should be the first growth priority for any solo practice." },
      { heading: "Map pack ranking as a growth multiplier", body: "Practices appearing in the Google map pack for their specialty keyword receive 3× more profile views than those below the map pack. Given the review conversion rates above, a map-pack ranked practice with 50+ reviews may see 10–15× more organic new patient bookings than a practice with no local SEO and few reviews." },
      { heading: "Implications for solo practitioners", body: "The data suggests a clear priority order for patient acquisition investment: 1. Claim and complete Google Business Profile. 2. Build a website on your own domain with booking embedded. 3. Start automated review collection immediately. 4. Optimise for local SEO. 5. Add recall automation for existing patients. Practices that follow this sequence in order consistently reach top-quartile growth within 12 months." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(reports).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const report = reports[slug];
  if (!report) return { title: "Report | Clinexy" };
  return {
    title: report.title,
    description: report.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/reports/${slug}` },
  };
}

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = reports[slug];
  if (!report) notFound();

  return (
    <>
      <section style={{ background: 'var(--gray-50)', padding: '56px 0 0' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 20px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <Link href="/reports">Reports</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">Report</span>
          </nav>
          <span className="tag-pill">Research Report 2026</span>
          <h1 style={{ marginTop: '16px' }}>{report.title}</h1>
          <p className="prose" style={{ marginTop: '16px' }}>{report.summary}</p>
        </div>
      </section>

      <section style={{ background: 'var(--gray-50)', paddingBottom: '0', paddingTop: '32px' }}>
        <div className="container">
          <div className="stat-band" style={{ maxWidth: '720px', marginTop: 0 }}>
            {report.findings.map((f, i) => (
              <div key={i} className="stat good">
                <div className="num">{f.stat}</div>
                <div className="label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          {report.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.2rem' }}>{s.heading}</h2>
              <p className="prose">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--blue-50)', padding: '40px 0', borderTop: '1px solid var(--blue-100)' }}>
        <div className="container section-narrow">
          <h3 style={{ color: 'var(--blue-700)' }}>Apply these findings in your practice today</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: '15px', marginBottom: '20px' }}>
            Clinexy automates every strategy covered in this report. Start your free trial.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" id={`report-${slug}-cta`}>Start Free Trial — 14 Days Free</a>
        </div>
      </section>
    </>
  );
}

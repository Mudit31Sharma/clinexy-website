import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Patient Growth — Get More Patients, Reduce No-Shows, Retain Patients",
  description: "Clinexy's patient growth tools: get more patients, reduce no-shows, improve retention, and recall patients automatically.",
  alternates: { canonical: "https://www.clinexy.com/patient-growth" },
};

const sections = [
  { slug: "get-more-patients", title: "Get More Patients", desc: "Local SEO, reviews, and a branded website that attracts new patients to your practice." },
  { slug: "reduce-no-shows", title: "Reduce No-Shows", desc: "3-touch automated reminders that cut your no-show rate from 25–35% to under 10%." },
  { slug: "patient-retention", title: "Patient Retention", desc: "Recall, follow-up, and engagement tools that keep patients coming back." },
  { slug: "recall-strategies", title: "Recall Strategies", desc: "Automated 6-month recall via WhatsApp and SMS that brings 38% of inactive patients back." },
];

export default function PatientGrowthPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Patient Growth</span>
            <h1>Grow your patient base, systematically</h1>
            <p className="hero-sub">Four systems that work together to attract new patients, keep existing ones, and bring inactive patients back.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Patient Growth</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {sections.map((s, i) => (
              <Link key={i} href={`/patient-growth/${s.slug}`} className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--blue-600)' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Start growing your practice today" subtext="14-day free trial. All growth tools included." variant="inline" />
    </>
  );
}

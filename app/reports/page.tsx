import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Research Reports — Practice Growth Data",
  description: "Research reports on no-shows, patient acquisition, and solo practice benchmarks from Clinexy.",
  alternates: { canonical: "https://www.clinexy.com/reports" },
};

const reports = [
  {
    slug: "no-show-research-2026",
    title: "No-Show Research Report 2026",
    desc: "Comprehensive analysis of appointment no-shows across solo healthcare practices globally. Causes, costs, and solutions.",
    tag: "Research · 2026",
  },
  {
    slug: "patient-acquisition-benchmarks",
    title: "Patient Acquisition Benchmarks",
    desc: "Benchmarks for new patient acquisition across specialties and regions. What growth looks like for top-quartile solo practices.",
    tag: "Research · 2026",
  },
];

export default function ReportsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Research</span>
            <h1>Research and benchmarks for solo practices</h1>
            <p className="hero-sub">Data-backed reports on the challenges and opportunities facing solo healthcare professionals.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Reports</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {reports.map((r, i) => (
              <Link key={i} href={`/reports/${r.slug}`} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
                <div className="resource-card-footer">Read report →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="See these insights in your own practice" subtext="14-day free trial. Apply the findings immediately." variant="inline" />
    </>
  );
}

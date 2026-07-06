import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Compare Clinexy with Other Platforms",
  description: "Compare Clinexy with Practo, SimplePractice, Cliniko, Jane, Healthie, and MocDoc. Find out why solo practitioners choose Clinexy.",
  alternates: { canonical: "https://www.clinexy.com/compare" },
};

const comparisons = [
  { href: "/compare/clinexy-vs-practo", title: "Clinexy vs Practo", summary: "Own your patients. Pay zero commission. No directory dependency.", badge: "India Popular" },
  { href: "/compare/clinexy-vs-simplepractice", title: "Clinexy vs SimplePractice", summary: "All the clinical tools, plus website, SEO, and reviews.", badge: "US Popular" },
  { href: "/compare/clinexy-vs-cliniko", title: "Clinexy vs Cliniko", summary: "Scheduling and records plus growth tools, in one subscription.", badge: "Australia/UK" },
  { href: "/compare/clinexy-vs-jane", title: "Clinexy vs Jane", summary: "Jane-level operations with the patient acquisition tools Jane lacks.", badge: "Canada Popular" },
  { href: "/compare/clinexy-vs-healthie", title: "Clinexy vs Healthie", summary: "All specialties, not just wellness. Website, SEO, and reviews included.", badge: "Wellness Focus" },
  { href: "/compare/clinexy-vs-mocdoc", title: "Clinexy vs MocDoc", summary: "Built for solo practitioners, not multi-doctor clinics.", badge: "India" },
];

const alternatives = [
  { href: "/simplepractice-alternative", title: "SimplePractice Alternative", desc: "Looking for a SimplePractice alternative? Clinexy covers operations and adds growth tools." },
  { href: "/cliniko-alternative", title: "Cliniko Alternative", desc: "Cliniko alternative with website builder, local SEO, and review automation included." },
  { href: "/jane-alternative", title: "Jane App Alternative", desc: "Jane alternative for solo practitioners who want operations and growth in one place." },
  { href: "/practo-alternative", title: "Practo Alternative", desc: "Own your patients, pay zero commission. The Practo alternative for independent doctors." },
];

export default function CompareHubPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '680px' }}>
            <span className="tag">Compare</span>
            <h1>How Clinexy compares</h1>
            <p className="hero-sub">
              Most practice management tools handle scheduling and records. Very few include the growth layer — website, local SEO, and reviews.
              Clinexy does both.
            </p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Compare</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <span className="section-label">Head-to-head comparisons</span>
          <h2>Clinexy vs the competition</h2>
          <div className="resource-grid">
            {comparisons.map((c, i) => (
              <Link key={i} href={c.href} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">{c.badge}</span>
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                </div>
                <div className="resource-card-footer">See comparison →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <span className="section-label">Alternatives</span>
          <h2>Looking for an alternative?</h2>
          <div className="resource-grid">
            {alternatives.map((a, i) => (
              <Link key={i} href={a.href} className="resource-card">
                <div className="resource-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
                <div className="resource-card-footer">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="See Clinexy for yourself" subtext="14-day free trial. Compare in practice, not just on paper." variant="inline" />
    </>
  );
}

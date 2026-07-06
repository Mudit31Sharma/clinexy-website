import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Why Clinexy — What Makes Us Different",
  description: "Why solo practitioners choose Clinexy over other practice management tools. Patient ownership, operations and growth in one, honest pricing.",
  alternates: { canonical: "https://www.clinexy.com/why-clinexy" },
};

const reasons = [
  {
    title: "Operations and growth in one subscription",
    desc: "Other tools do scheduling well, or marketing well. Clinexy does both. You get booking, telehealth, records, and billing alongside a website, local SEO, and Google review automation — no stitching separate tools together.",
  },
  {
    title: "You own your patients",
    desc: "On Practo or a directory, your patients are their patients — discoverable by your competitors, subject to their algorithm. On Clinexy, your website, your booking link, your patients, and your reviews are entirely yours.",
  },
  {
    title: "Built for solo practice, not scaled down from hospital software",
    desc: "Most practice management software is built for multi-doctor clinics or hospitals and then stripped back for solo use. Clinexy is designed from the ground up for one practitioner. Every feature and workflow reflects that.",
  },
  {
    title: "Honest, simple pricing",
    desc: "One plan. No commissions on bookings. No per-feature charges. No annual lock-in. ₹999/month in India, $99/month globally. Cancel any time.",
  },
  {
    title: "Real results in 90 days",
    desc: "No-show rate drops below 10%. 50+ Google reviews collected. A full working day returned from automated admin. These are not projections — they are the typical outcomes Clinexy practices see in their first quarter.",
  },
];

export default function WhyClinexPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Why Clinexy</span>
            <h1>Why solo practitioners choose Clinexy</h1>
            <p className="hero-sub">The honest answer to why practitioners switch to Clinexy — and why they stay.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Why Clinexy</span></div>
      </nav>
      <section className="section">
        <div className="container section-narrow">
          {reasons.map((r, i) => (
            <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < reasons.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <h2 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{r.title}</h2>
              <p className="prose">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABanner heading="See it for yourself" subtext="14-day free trial. No credit card. Your own practice, on Clinexy." variant="inline" />
    </>
  );
}

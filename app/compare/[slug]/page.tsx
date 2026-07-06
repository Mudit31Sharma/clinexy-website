import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { notFound } from "next/navigation";

const comparisons: Record<string, {
  title: string;
  metaDesc: string;
  competitor: string;
  intro: string;
  rows: { feature: string; clinexy: string; them: string }[];
  verdict: string;
}> = {
  "clinexy-vs-practo": {
    title: "Clinexy vs Practo",
    competitor: "Practo",
    metaDesc: "Compare Clinexy vs Practo. See how Clinexy's all-in-one platform beats Practo for solo practitioners who want to own their patients and growth.",
    intro: "Practo is a patient directory and booking platform. Clinexy is a practice management and growth platform you own. The key difference: with Practo, your patients belong to Practo's directory. With Clinexy, they belong to you.",
    rows: [
      { feature: "Patient ownership", clinexy: "✓ Your patients, your data", them: "✗ Patients find you via Practo's directory" },
      { feature: "Commission on bookings", clinexy: "✓ Zero commission", them: "✗ Commission on every booking" },
      { feature: "Your own website", clinexy: "✓ Branded website on your domain", them: "✗ Profile page on Practo" },
      { feature: "Local SEO", clinexy: "✓ Built-in local SEO tools", them: "✗ SEO benefits Practo, not you" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch sequence included", them: "Partial" },
      { feature: "Telehealth", clinexy: "✓ Fully integrated", them: "✓ Available" },
      { feature: "Billing", clinexy: "✓ Multi-currency, UPI, cards", them: "✓ Available" },
      { feature: "Google review automation", clinexy: "✓ Automated requests", them: "✗ Not included" },
      { feature: "Price", clinexy: "₹999/mo flat", them: "Variable + commission" },
    ],
    verdict: "If you want to own your online presence and grow your practice independently — without paying per-booking commissions or sending patients to a directory — Clinexy is the better choice for solo practitioners.",
  },
  "clinexy-vs-simplepractice": {
    title: "Clinexy vs SimplePractice",
    competitor: "SimplePractice",
    metaDesc: "Compare Clinexy vs SimplePractice. Clinexy adds website builder, local SEO, and Google reviews to SimplePractice-level clinical tools — at a lower price.",
    intro: "SimplePractice is a strong clinical management tool, popular in the US for therapists and healthcare professionals. Clinexy adds the patient acquisition and growth layer that SimplePractice leaves out.",
    rows: [
      { feature: "Online booking", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Telehealth", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Patient records", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Website builder", clinexy: "✓ Included — your own domain", them: "Basic profile page only" },
      { feature: "Local SEO", clinexy: "✓ Built-in SEO tools", them: "✗ Not included" },
      { feature: "Google review automation", clinexy: "✓ Automated", them: "✗ Not included" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch sequence", them: "Email and SMS only" },
      { feature: "Personal branding tools", clinexy: "✓ Included", them: "✗ Limited" },
      { feature: "Price", clinexy: "$99/mo all-in", them: "$29–$99/mo (features vary by plan)" },
    ],
    verdict: "SimplePractice is excellent for clinical documentation. If you also want your practice to grow — with a website, local SEO, and automated reviews — Clinexy includes all of this in one subscription.",
  },
  "clinexy-vs-cliniko": {
    title: "Clinexy vs Cliniko",
    competitor: "Cliniko",
    metaDesc: "Compare Clinexy vs Cliniko. Clinexy adds local SEO, website builder, and review automation to Cliniko's scheduling and records features.",
    intro: "Cliniko is a well-loved practice management system popular in Australia and the UK. It handles scheduling and records exceptionally well. Clinexy does all of this and adds the growth tools Cliniko doesn't provide.",
    rows: [
      { feature: "Online booking", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Patient records", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Telehealth", clinexy: "✓ Included", them: "✗ Third-party required" },
      { feature: "Website builder", clinexy: "✓ Your own domain", them: "✗ Not included" },
      { feature: "Local SEO tools", clinexy: "✓ Built-in", them: "✗ Not included" },
      { feature: "Google review automation", clinexy: "✓ Automated", them: "✗ Not included" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch", them: "SMS only" },
      { feature: "Billing", clinexy: "✓ Multi-currency", them: "✓ Available" },
      { feature: "Price", clinexy: "$99/mo all-in", them: "$45–$109/mo (by practitioner count)" },
    ],
    verdict: "Cliniko is excellent for scheduling and records. Clinexy adds the growth layer — website, SEO, and reviews — in the same subscription, making it more complete for a solo practitioner building a growing practice.",
  },
  "clinexy-vs-jane": {
    title: "Clinexy vs Jane App",
    competitor: "Jane App",
    metaDesc: "Compare Clinexy vs Jane App. Clinexy adds a website builder, local SEO, and Google reviews alongside Jane-level clinical tools.",
    intro: "Jane App is a comprehensive practice management platform popular in Canada and increasingly global. Like Cliniko, it handles scheduling and records very well but lacks the patient acquisition tools solo practitioners need to grow.",
    rows: [
      { feature: "Online booking", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Telehealth", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Patient records", clinexy: "✓ Included", them: "✓ Excellent" },
      { feature: "Website builder", clinexy: "✓ Your own domain", them: "✗ Booking widget only" },
      { feature: "Local SEO", clinexy: "✓ Built-in", them: "✗ Not included" },
      { feature: "Google reviews", clinexy: "✓ Automated requests", them: "✗ Not included" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch sequence", them: "Email only" },
      { feature: "Personal branding", clinexy: "✓ Included", them: "✗ Not included" },
      { feature: "Price", clinexy: "$99/mo flat", them: "$74–$219/mo (by practitioners)" },
    ],
    verdict: "Jane is excellent for clinical operations. Clinexy covers operations and growth in one subscription — ideal for solo practitioners who want to attract new patients and build their brand without juggling multiple tools.",
  },
  "clinexy-vs-healthie": {
    title: "Clinexy vs Healthie",
    competitor: "Healthie",
    metaDesc: "Compare Clinexy vs Healthie. Clinexy vs Healthie for solo practitioners: operations, growth, and local SEO in one platform.",
    intro: "Healthie is a nutrition and wellness-focused platform with strong client management features. Clinexy is specialty-agnostic and adds local SEO, website building, and review automation that Healthie doesn't include.",
    rows: [
      { feature: "Online booking", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Telehealth", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Patient records", clinexy: "✓ Included", them: "✓ Nutrition-focused" },
      { feature: "Website builder", clinexy: "✓ Your own domain", them: "✗ Not included" },
      { feature: "Local SEO", clinexy: "✓ Built-in tools", them: "✗ Not included" },
      { feature: "Google review automation", clinexy: "✓ Automated", them: "✗ Not included" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch", them: "✗ Email only" },
      { feature: "All specialties", clinexy: "✓ All healthcare", them: "Nutrition/wellness focus" },
      { feature: "Price", clinexy: "$99/mo all-in", them: "$45–$149/mo" },
    ],
    verdict: "Healthie is strong for nutrition and wellness practices. Clinexy works for all healthcare specialties and includes the growth tools — website, SEO, and reviews — that Healthie doesn't provide.",
  },
  "clinexy-vs-mocdoc": {
    title: "Clinexy vs MocDoc",
    competitor: "MocDoc",
    metaDesc: "Compare Clinexy vs MocDoc. See why solo doctors in India choose Clinexy over MocDoc for patient growth and practice management.",
    intro: "MocDoc is a hospital and clinic management system popular in India. It is designed for multi-doctor clinics and hospitals. Clinexy is designed specifically for solo practitioners who want to grow their practice independently.",
    rows: [
      { feature: "Designed for solo practice", clinexy: "✓ Built for 1 practitioner", them: "Multi-doctor clinic focus" },
      { feature: "Patient ownership", clinexy: "✓ Your patients", them: "Platform-dependent" },
      { feature: "Website builder", clinexy: "✓ Your own domain", them: "✗ Not included" },
      { feature: "Local SEO", clinexy: "✓ Built-in tools", them: "✗ Not included" },
      { feature: "Google review automation", clinexy: "✓ Automated", them: "✗ Not included" },
      { feature: "WhatsApp reminders", clinexy: "✓ 3-touch sequence", them: "Basic reminders" },
      { feature: "Telehealth", clinexy: "✓ Integrated", them: "Limited" },
      { feature: "ABDM compliance", clinexy: "✓ Included", them: "✓ Included" },
      { feature: "Price", clinexy: "₹999/mo flat", them: "Higher, multi-seat pricing" },
    ],
    verdict: "MocDoc is built for multi-doctor clinics. Clinexy is built specifically for solo practitioners in India who want to own their online presence, grow their practice, and keep costs low.",
  },
};

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons[slug];
  if (!comp) return { title: "Compare | Clinexy" };
  return {
    title: comp.title,
    description: comp.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/compare/${slug}` },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparisons[slug];
  if (!comp) notFound();

  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '680px' }}>
            <span className="tag">Comparison</span>
            <h1>{comp.title}</h1>
            <p className="hero-sub">{comp.intro}</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`compare-${slug}-trial`}>Try Clinexy Free</a>
              <Link href="/compare" className="btn btn-ghost-light btn-lg">See All Comparisons</Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/compare">Compare</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{comp.title}</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <h2>Feature-by-feature: Clinexy vs {comp.competitor}</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Clinexy</th>
                  <th>{comp.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {comp.rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{row.feature}</td>
                    <td className={row.clinexy.startsWith('✓') ? 'check' : ''}>{row.clinexy}</td>
                    <td className={row.them.startsWith('✗') ? 'cross' : ''}>{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>Our verdict</h2>
          <p className="prose">{comp.verdict}</p>
          <div style={{ marginTop: '24px' }}>
            <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`compare-${slug}-verdict-trial`}>
              Try Clinexy Free for 14 Days
            </a>
          </div>
        </div>
      </section>

      <CTABanner heading="See Clinexy for yourself" subtext="14-day free trial. No credit card. Compare in practice, not just on paper." variant="inline" />
    </>
  );
}

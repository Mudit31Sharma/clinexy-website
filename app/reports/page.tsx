import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Research & Benchmarks for Solo Practices",
  description:
    "Data-backed reports for solo practices: 2026 no-show research and patient acquisition benchmarks, with what the numbers mean for your practice.",
  alternates: { canonical: "https://www.clinexy.com/reports" },
};

const faqs = [
  {
    q: "Where does the data come from?",
    a: "Industry studies and aggregated Clinexy practice data, presented as typical ranges.",
  },
  {
    q: "What is a typical no-show rate?",
    a: "For unmanaged solo practices, 25 to 35 percent, which a reminder system takes under 10.",
  },
  {
    q: "How many new patients should I get?",
    a: "Without a system, 5 to 8 a month; with one, 30 or more enquiries a month at maturity.",
  },
  {
    q: "Are the figures exact?",
    a: "They are typical ranges to guide planning, not precise universal values.",
  },
  {
    q: "How do I apply the findings?",
    a: "Follow the linked guides, or automate the systems with Clinexy.",
  },
  {
    q: "Can I track my own numbers?",
    a: "Yes. Clinexy shows your no-show rate, reviews, and new patients in one dashboard.",
  },
];

const reportsList = [
  {
    slug: "no-show-research-2026",
    title: "No-Show Research 2026",
    desc: "Typical rates, the real cost, and what actually reduces them.",
  },
  {
    slug: "patient-acquisition-benchmarks",
    title: "Patient Acquisition Benchmarks",
    desc: "New-patient volume, sources, and what good growth looks like.",
  },
];

export default function ReportsPage() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clinexy",
    "url": "https://www.clinexy.com/",
    "logo": "https://www.clinexy.com/assets/img/logo.svg",
    "description": "All-in-one patient growth and practice management platform for solo healthcare professionals.",
    "sameAs": [
      "https://www.linkedin.com/company/clinexy/",
      "https://www.facebook.com/clinexyapp"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 94126 25716",
        "email": "sales@clinexy.com",
        "contactType": "customer support"
      }
    ]
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.clinexy.com/" },
      { "@type": "ListItem", "position": 2, "name": "Reports", "item": "https://www.clinexy.com/reports" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Research & Benchmarks for Solo Practices",
    "description": "Data-backed reports for solo practices: 2026 no-show research and patient acquisition benchmarks, with what the numbers mean for your practice.",
    "url": "https://www.clinexy.com/reports"
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Reports</span>
            <h1>Data and benchmarks for solo practices</h1>
            <p className="hero-sub">
              What the data actually says about no-shows and patient acquisition, and what to do about it.
            </p>
            <ul className="point-list hero-points">
              <li>See exactly what brings in new patients.</li>
              <li>Track your growth month over month.</li>
              <li>Decide with data, not guesswork.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="reports-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="reports-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/assets/img/analytics.svg"
                alt="Reports for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>2026 data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span className="crumb-sep">›</span>
          <span className="crumb-current">Reports</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            These reports give you data-backed benchmarks for the two questions every solo practice asks: how bad are
            no-shows really, and how many new patients should I expect. Each one turns the numbers into a practical plan.
          </p>
        </div>
      </aside>

      {/* What Clinexy does */}
      <section className="section">
        <div className="container">
          <h2>What Clinexy does for your practice</h2>
          <p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3>Get found</h3>
              <p>A website on your own domain, local SEO, and a Google profile that climbs the map pack, so the right patients find you.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <h3>Get chosen</h3>
              <p>Automated reviews, a warm personal brand, and social content that build the trust that wins the booking.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Get booked</h3>
              <p>24/7 online booking with smart reminders and recall, so your calendar fills and far fewer slots go empty.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <h3>Focus on care</h3>
              <p>You handle the medicine. We handle the marketing and the admin, automatically, from one calm dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="section">
        <div className="container">
          <h2>All reports</h2>
          <div className="related-grid">
            {reportsList.map((r, i) => (
              <Link key={i} href={`/reports/${r.slug}`} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why everything in one place */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why everything in one place</h2>
          <p className="prose">
            You did not train for years to spend your evenings on reminder texts, review requests, and a website that never quite happened.
            When your booking, records, website, reviews, and recall all live in one place and talk to each other, the busywork disappears
            and your practice grows quietly in the background.
          </p>
          <ul className="point-list">
            <li>
              <strong>One login, one bill.</strong> No stitching together five apps that do not share your data.
            </li>
            <li>
              <strong>Nothing slips.</strong> Every booking triggers a reminder, every visit earns a review, every lapsed patient gets a nudge.
            </li>
            <li>
              <strong>You stay in control.</strong> Your patients, your website, and your reviews are yours, on your own domain.
            </li>
            <li>
              <strong>Or hand it over.</strong> On the Done-For-You plan, we run the whole growth side for you.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Put the data to work"
        subtext="Start free today. An automated system built on what the data shows."
      />

      {/* FAQ */}
      <section className="section section-faq">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

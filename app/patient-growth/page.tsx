import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Patient Growth for Solo Practices | Clinexy",
  description:
    "Turn a feast-and-famine practice into steady growth: get more patients, reduce no-shows, keep patients longer, and bring lapsed ones back, all automated.",
  alternates: { canonical: "https://www.clinexy.com/patient-growth" },
};

const faqs = [
  {
    q: "How do I get more patients?",
    a: "Build a system: get found in local search, get chosen through reviews and trust, and get booked through an easy page, with the admin automated.",
  },
  {
    q: "How many new patients can I expect?",
    a: "Most practices move from 5 to 8 a month to 30 or more enquiries a month at maturity, over 6 to 12 months.",
  },
  {
    q: "What is the fastest win?",
    a: "Reducing no-shows. A 3-touch reminder sequence recovers lost revenue almost immediately.",
  },
  {
    q: "Does retention really matter for growth?",
    a: "Yes. Keeping and recalling patients is far cheaper than acquiring new ones, and happy patients refer others.",
  },
  {
    q: "Do I need to run ads?",
    a: "No. The system is built on owned channels that compound, unlike ads that stop when you stop paying.",
  },
  {
    q: "Is it all in one platform?",
    a: "Yes. Found, chosen, booked, and kept all run from Clinexy.",
  },
];

const playbooks = [
  {
    href: "/patient-growth/get-more-patients",
    title: "Get More Patients",
    desc: "The found-chosen-booked system that builds a steady inflow.",
  },
  {
    href: "/patient-growth/reduce-no-shows",
    title: "Reduce No-Shows",
    desc: "Take your no-show rate from 25-35 percent to under 10.",
  },
  {
    href: "/patient-growth/patient-retention",
    title: "Patient Retention",
    desc: "Keep the patients you have already earned, the cheapest growth there is.",
  },
  {
    href: "/patient-growth/recall-strategies",
    title: "Recall Strategies",
    desc: "Bring patients back on schedule and recover the lapsed.",
  },
];

export default function PatientGrowthPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Patient Growth", "item": "https://www.clinexy.com/patient-growth" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Patient Growth for Solo Practices",
    "description": "Turn a feast-and-famine practice into steady growth: get more patients, reduce no-shows, keep patients longer, and bring lapsed ones back, all automated.",
    "url": "https://www.clinexy.com/patient-growth"
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
            <span className="tag">Patient growth</span>
            <h1>Grow your patient base, predictably</h1>
            <p className="hero-sub">
              Growth is not luck. It is a system of getting found, getting booked, and keeping patients.
              These are the playbooks that turn your practice into a steady, predictable one.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="patient-growth-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="patient-growth-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/assets/img/growth.svg"
                alt="Patient Growth for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Grow steadily</span>
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
          <span className="crumb-current">Patient Growth</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Patient growth comes from a system, not chance: be found through local SEO and reviews, be booked through an easy page
            and reminders, and keep patients through recall and follow-up. Clinexy runs the whole loop, so most practices move from
            a few new patients a month to a steady, predictable inflow.
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

      {/* The patient growth playbooks */}
      <section className="section">
        <div className="container">
          <h2>The patient growth playbooks</h2>
          <div className="related-grid">
            {playbooks.map((pb, i) => (
              <Link key={i} href={pb.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{pb.title}</h4>
                <p>{pb.desc}</p>
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
        heading="Build steady, predictable growth"
        subtext="Start free today. The growth system that fills your calendar, automated."
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

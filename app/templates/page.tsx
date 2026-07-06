import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Free Templates for Solo Practices | Clinexy",
  description:
    "Free, copy-and-use templates for solo practices: patient recall messages, Google review requests, intake forms, and treatment plans, with tips to customise.",
  alternates: { canonical: "https://www.clinexy.com/templates" },
};

const faqs = [
  {
    q: "Are the templates free?",
    a: "Yes. Copy, personalise, and use them for your practice.",
  },
  {
    q: "Can Clinexy send them automatically?",
    a: "Yes. Recall, review requests, and intake can all be automated and tracked.",
  },
  {
    q: "How do I personalise them?",
    a: "Replace the placeholders for name, dates, and your booking or review link.",
  },
  {
    q: "Which channel works best?",
    a: "WhatsApp and SMS are read far more than email; use the patient's preferred channel.",
  },
  {
    q: "Are they compliant?",
    a: "Keep opt-outs and consent in place; Clinexy handles the compliance details.",
  },
  {
    q: "Do they work for any specialty?",
    a: "Yes. Adjust the wording and fields to fit your field.",
  },
];

const templatesList = [
  {
    slug: "patient-recall-message",
    title: "Patient Recall Message",
    desc: "Bring patients back with proven SMS, WhatsApp, and email wording.",
  },
  {
    slug: "google-review-request",
    title: "Google Review Request",
    desc: "Get more reviews with the right timing and a one-tap link.",
  },
  {
    slug: "intake-forms",
    title: "Patient Intake Form",
    desc: "Collect the essentials digitally, before the visit.",
  },
  {
    slug: "treatment-plan",
    title: "Treatment Plan",
    desc: "Set clear goals, stages, and costs so patients say yes.",
  },
];

export default function TemplatesPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Templates", "item": "https://www.clinexy.com/templates" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Templates for Solo Practices",
    "description": "Free, copy-and-use templates for solo practices: patient recall messages, Google review requests, intake forms, and treatment plans, with tips to customise.",
    "url": "https://www.clinexy.com/templates"
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
            <span className="tag">Templates</span>
            <h1>Free, ready-to-use templates</h1>
            <p className="hero-sub">
              Proven wording and structures you can copy today, then let Clinexy send and track automatically.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="templates-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="templates-demo">
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
                alt="Templates for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Copy & use</span>
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
          <span className="crumb-current">Templates</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            These free templates give you proven wording and structures for the messages and forms a practice relies on:
            patient recall, review requests, intake, and treatment plans. Copy and personalise them, or let Clinexy send
            and track them automatically.
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

      {/* All Templates */}
      <section className="section">
        <div className="container">
          <h2>All templates</h2>
          <div className="related-grid">
            {templatesList.map((t, i) => (
              <Link key={i} href={`/templates/${t.slug}`} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
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
        heading="Send and track these automatically"
        subtext="Start free today. Turn these templates into automated workflows."
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

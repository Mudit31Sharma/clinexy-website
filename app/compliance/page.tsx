import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Compliance Hub",
  description: "Clinexy compliance. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP, ABDM.",
  alternates: { canonical: "https://www.clinexy.com/compliance" },
};

const faqs = [
  {
    q: "How long until I see results?",
    a: "Most solo practices see meaningful results within 60 to 90 days.",
  },
  {
    q: "Is this free?",
    a: "The framework is free. Tools require a Clinexy subscription.",
  },
  {
    q: "Will this work for my specialty?",
    a: "Yes.",
  },
  {
    q: "Do I need an agency?",
    a: "Most solo practices do not.",
  },
  {
    q: "Can I start with just one tool?",
    a: "Yes. Activate any feature individually.",
  },
  {
    q: "Is patient data secure?",
    a: "Yes. HIPAA, GDPR, PIPEDA, PDPA, DPDP compliant.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts.",
  },
  {
    q: "Where do I start?",
    a: "Read the overview, pick what fits, then start free trial.",
  },
];

const regulations = [
  { title: "ABDM (India)", desc: "HPR. ABHA. Consent flows." },
  { title: "HIPAA (US)", desc: "BAA available on DFY" },
  { title: "GDPR (EU/UK)", desc: "Data subject rights workflows" },
  { title: "PIPEDA (Canada)", desc: "Privacy commissioner aligned" },
  { title: "Privacy Act (Australia)", desc: "OAIC aligned" },
  { title: "PDPA (Singapore)", desc: "PDPC aligned" },
  { title: "DPDP (India)", desc: "DPDP Act ready" },
];

const relatedPages = [
  { href: "/security", title: "Safe. Secure. Private.", desc: "Bank-grade security. Patient privacy. Regional compliance." },
  { href: "/compliance/abdm", title: "ABDM compliance", desc: "How Clinexy aligns with ABDM. HPR. ABHA. Consent." },
  { href: "/why-clinexy", title: "Why Clinexy", desc: "Built for solo doctors. Not enterprise software, not basic booking. Calm and made for the way you work." },
];

export default function CompliancePage() {
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
      { "@type": "ListItem", "position": 2, "name": "Compliance", "item": "https://www.clinexy.com/compliance" }
    ]
  };

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Compliance Hub - Clinexy",
    "description": "Clinexy compliance. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP, ABDM.",
    "url": "https://www.clinexy.com/compliance"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWeb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Clinexy compliance</h1>
            <p className="hero-sub">Regional and global compliance.</p>
            <ul className="point-list hero-points">
              <li>Keep patient data private and protected.</li>
              <li>Meet HIPAA, GDPR, and DPDP standards.</li>
              <li>Build trust your patients can see.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="compliance-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="compliance-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/assets/img/security.svg"
                alt="Clinexy compliance"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Live booking system</span>
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
          <span className="crumb-current">Compliance</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is built for solo healthcare practitioners working in regulated markets. Compliance with HIPAA,
            GDPR, PIPEDA, Privacy Act, PDPA, DPDP, and ABDM, with workflows adapted per region.
          </p>
        </div>
      </aside>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <h2>Overview</h2>
          <p className="lead">Everything in this category. Pick what you need.</p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="section">
        <div className="container">
          <h2>What's inside</h2>
          <div className="photo-cards-grid">
            {regulations.map((reg, i) => (
              <div key={i} className="photo-card">
                <div className="photo-card-img">
                  <img
                    src="/assets/img/security.svg"
                    alt={reg.title}
                    loading="lazy"
                    width={500}
                    height={300}
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </div>
                <div className="photo-card-body">
                  <h3>{reg.title}</h3>
                  <p>{reg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="inline-cta">
        <div className="container">
          <h3>Ready to see this for your practice?</h3>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
            <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="section">
        <div className="container">
          <h2>Why this matters</h2>
          <p className="lead">
            Solo practitioners win when they pick a small set of compounding levers and let them run.
            This hub covers the levers most practices ignore.
          </p>
        </div>
      </section>

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

      {/* Related Pages */}
      <section className="section section-related">
        <div className="container">
          <h2>Related pages</h2>
          <div className="related-grid">
            {relatedPages.map((rp, i) => (
              <Link key={i} href={rp.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{rp.title}</h4>
                <p>{rp.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to grow your practice?"
        subtext="Join solo healthcare professionals using Clinexy to run a calmer, better-grown practice."
      />
    </>
  );
}

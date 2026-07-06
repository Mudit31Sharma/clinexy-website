import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Data Security & Privacy",
  description: "Bank-grade security. Patient privacy. Regional compliance.",
  alternates: { canonical: "https://www.clinexy.com/security" },
};

const faqs = [
  {
    q: "Where can I learn more?",
    a: "Email sales@clinexy.com.",
  },
  {
    q: "Is this content free?",
    a: "Yes.",
  },
  {
    q: "Where else can I find help?",
    a: "Our Resources hub at /resources/for-doctors.",
  },
  {
    q: "Can I download templates?",
    a: "Yes.",
  },
  {
    q: "Is there 24/7 support?",
    a: "Yes for paying customers.",
  },
  {
    q: "How do I contact sales?",
    a: "sales@clinexy.com.",
  },
  {
    q: "How do I request a feature?",
    a: "Use in-app feedback or email product@clinexy.com.",
  },
  {
    q: "Where's the status page?",
    a: "status.clinexy.com.",
  },
];

const relatedPages = [
  { href: "/compliance/abdm", title: "ABDM compliance", desc: "How Clinexy aligns with ABDM. HPR. ABHA. Consent." },
  { href: "/compliance", title: "Clinexy compliance", desc: "Clinexy compliance. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP, ABDM." },
  { href: "/why-clinexy", title: "Why Clinexy", desc: "Built for solo doctors. Not enterprise software, not basic booking. Calm and made for the way you work." },
];

export default function SecurityPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Security", "item": "https://www.clinexy.com/security" }
    ]
  };

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Security & Privacy",
    "description": "Bank-grade security. Patient privacy. Regional compliance.",
    "url": "https://www.clinexy.com/security"
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
            <h1>Safe. Secure. Private.</h1>
            <p className="hero-sub">Encryption, role-based access, audit logs.</p>
            <ul className="point-list hero-points">
              <li>Keep patient data private and protected.</li>
              <li>Meet HIPAA, GDPR, and DPDP standards.</li>
              <li>Build trust your patients can see.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="security-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="security-demo">
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
                alt="Safe. Secure. Private."
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
          <span className="crumb-current">Security</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Safe. Secure. Private. for solo healthcare professionals. Clear, complete, and built to be useful
            within 60 seconds of reading.
          </p>
        </div>
      </aside>

      {/* What you'll find here */}
      <section className="section">
        <div className="container">
          <h2>What you'll find here</h2>
          <p className="lead">Practical information designed for solo doctors. Read or skim. No fluff.</p>
        </div>
      </section>

      {/* Need more? */}
      <section className="section">
        <div className="container">
          <h2>Need more?</h2>
          <p className="lead">Reach out at sales@clinexy.com. We respond within one business day.</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Clinexy: Build. Brand. Grow. | Clinexy",
  description:
    "Clinexy helps solo healthcare professionals build their brand, grow their practice, and automate their admin, so they can focus on patient care.",
  alternates: { canonical: "https://www.clinexy.com/about" },
};

const beliefs = [
  { bold: "Your expertise comes first.", text: "Software should remove work, not add it." },
  { bold: "You should own your growth.", text: "Your website, patients, and reviews are yours, not a directory's." },
  { bold: "Honest and simple.", text: "One plan, no commissions, no surprises." },
  { bold: "Built for one.", text: "Designed for solo practice, not scaled down from hospital tools." },
];

const faqs = [
  {
    q: "What does Clinexy do?",
    a: "Clinexy helps solo healthcare professionals build their brand, grow their practice, and automate the admin, so they can focus on patient care.",
  },
  {
    q: "Who is behind Clinexy?",
    a: "A team focused on giving independent practitioners the online presence and automation that larger clinics take for granted.",
  },
  {
    q: "Where does Clinexy operate?",
    a: "Across India, the UK, Canada, Singapore, Australia, and more, with local pricing and compliance.",
  },
  {
    q: "Is it built for solo practitioners?",
    a: "Yes, specifically. It is designed for one-practitioner practices, not scaled down from hospital software.",
  },
  {
    q: "How do I get in touch?",
    a: "Email sales@clinexy.com or call +91 94126 25716. See the contact page for more.",
  },
  {
    q: "Can I try it?",
    a: "Yes. A 14-day free trial with no credit card.",
  },
];

export default function AboutPage() {
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
        "contactType": "sales"
      }
    ]
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.clinexy.com/" },
      { "@type": "ListItem", "position": 2, "name": "About Clinexy", "item": "https://www.clinexy.com/about" }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">About us</span>
            <h1>Build. Brand. Grow.</h1>
            <p className="hero-sub">
              We help solo healthcare professionals build their brand, grow their practice, and automate the busywork,
              so they can focus on what they trained for: their patients.
            </p>
            <ul className="point-list" style={{ marginBottom: "26px" }}>
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="about-hero-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="about-hero-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap" style={{ position: "relative" }}>
              <div className="hero-svg-wrap">
                <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', borderRadius: '16px' }}>
                  <rect width="460" height="300" fill="#0d1b2e"/>
                  <circle cx="230" cy="150" r="90" fill="none" stroke="rgba(31,106,225,0.3)" strokeWidth="1"/>
                  <circle cx="230" cy="150" r="130" fill="none" stroke="rgba(31,106,225,0.15)" strokeWidth="1"/>
                  <circle cx="230" cy="150" r="50" fill="rgba(31,106,225,0.2)" stroke="#1F6AE1" strokeWidth="1.5"/>
                  <text x="230" y="147" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Clinexy</text>
                  <text x="230" y="161" fontSize="8" fill="rgba(255,255,255,0.6)" textAnchor="middle">one platform</text>
                  {/* Orbiting nodes */}
                  {[
                    { cx: 230, cy: 60, label: 'Website' },
                    { cx: 330, cy: 100, label: 'SEO' },
                    { cx: 355, cy: 190, label: 'Reviews' },
                    { cx: 300, cy: 265, label: 'Social' },
                    { cx: 160, cy: 265, label: 'Brand' },
                    { cx: 100, cy: 190, label: 'Schedule' },
                    { cx: 130, cy: 100, label: 'Retain' },
                  ].map((n, i) => (
                    <g key={i}>
                      <line x1={230} y1={150} x2={n.cx} y2={n.cy} stroke="rgba(31,106,225,0.25)" strokeWidth="1"/>
                      <circle cx={n.cx} cy={n.cy} r="22" fill="rgba(31,106,225,0.15)" stroke="#1F6AE1" strokeWidth="1"/>
                      <text x={n.cx} y={n.cy + 4} fontSize="9" fontWeight="600" fill="white" textAnchor="middle">{n.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Our mission</span>
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
          <span className="crumb-current">About</span>
        </div>
      </nav>

      {/* Quick answer */}
      <aside className="quick-answer container" style={{ maxWidth: "860px" }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy exists to give solo healthcare professionals the online presence and automation that larger clinics take for granted.
            We bring SEO, branding, reputation management, patient acquisition, and appointment automation into one platform,
            so independent practitioners can build their brand, grow their practice, and spend their time on care, not admin.
          </p>
        </div>
      </aside>

      {/* Why we built */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why we built Clinexy</h2>
          <p className="prose">
            Independent practitioners are brilliant at their craft and stretched thin everywhere else. You are the clinician,
            the receptionist, and the marketer, and the marketing usually loses. Meanwhile, patients have moved online: they
            search, compare reviews, and book in a few taps.
          </p>
          <p className="prose">
            We thought solo practitioners deserved the same tools the big clinics use, without the cost or the complexity.
            So we built one platform that runs your practice and grows it, and that you can hand off entirely if you would rather
            just see patients.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container section-narrow">
          <h2>What we believe</h2>
          <ul className="point-list dark">
            {beliefs.map((b, i) => (
              <li key={i}>
                <strong>{b.bold}</strong> {b.text}
              </li>
            ))}
          </ul>
          <p className="prose" style={{ marginTop: "20px" }}>
            See <Link href="/why-clinexy">why practitioners choose Clinexy</Link>, or explore the <Link href="/product">platform</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Build, brand, and grow your practice"
        subtext="Start free today. The whole platform, set up in a day."
      />

      {/* FAQ */}
      <section className="section">
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

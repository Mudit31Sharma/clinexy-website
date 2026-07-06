import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "One Platform for Practice Operations & Growth | Clinexy",
  description:
    "Clinexy is the all-in-one platform for solo healthcare professionals: booking, telehealth, records, billing, plus a website, local SEO, reviews, and branding.",
  alternates: { canonical: "https://www.clinexy.com/product" },
};

const faqs = [
  {
    q: "What is Clinexy?",
    a: "An all-in-one platform that runs your practice and grows it: booking, telehealth, records, and billing, plus a website, local SEO, reviews, branding, and social, in one subscription.",
  },
  {
    q: "Who is it for?",
    a: "Solo healthcare professionals, from doctors and dentists to therapists, physios, and wellness practitioners.",
  },
  {
    q: "How is it different?",
    a: "Most tools either manage your practice or do a bit of marketing. Clinexy does both, so the software that runs your diary also brings new patients in.",
  },
  {
    q: "How long to get started?",
    a: "Most practices are live in a day, including a branded website and your data import.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Encryption at rest and in transit, aligned with HIPAA, GDPR, PDPA, and DPDP.",
  },
  {
    q: "Can I try it free?",
    a: "Yes. A 14-day free trial with no credit card.",
  },
];

export default function ProductPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Product", "item": "https://www.clinexy.com/product" }
    ]
  };

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "One Platform for Practice Operations & Growth | Clinexy",
    "description": "Clinexy is the all-in-one platform for solo healthcare professionals: booking, telehealth, records, billing, plus a website, local SEO, reviews, and branding.",
    "url": "https://www.clinexy.com/product"
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
            <span className="tag">Product</span>
            <h1>One platform to run and grow your practice</h1>
            <p className="hero-sub">
              Booking, telehealth, records, and billing on one side. Website, local SEO, reviews, branding, and social
              on the other.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="product-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="product-demo">
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
                alt="One platform to run and grow your practice"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Run + grow</span>
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
          <span className="crumb-current">Product</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is the all-in-one platform for solo healthcare professionals. It runs the operations of your
            practice, booking, telehealth, records, and billing, and grows it with a website, local SEO, automated reviews,
            branding, and social, all from one calm dashboard. One subscription replaces the four or five tools most
            practices juggle.
          </p>
        </div>
      </aside>

      {/* What the platform does for you */}
      <section className="section">
        <div className="container">
          <h2>What the platform does for you</h2>
          <p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Get found</h3>
              <p>A website on your domain, local SEO, and a Google profile that climbs the map pack.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <h3>Get chosen</h3>
              <p>Automated reviews, branding, and social that build the trust that wins the booking.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3>Get booked</h3>
              <p>24/7 booking with smart reminders and recall, so your calendar fills.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Focus on care</h3>
              <p>You handle the medicine. We handle the marketing and admin, automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two sides, one record */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Two sides, one record</h2>
          <p className="prose">
            Everything writes to a single patient record, so your booking, billing, notes, reviews, and recall all work
            together instead of in separate apps.
          </p>
          <ul className="point-list">
            <li>
              <strong>Operations. </strong>
              <Link href="/features/online-booking">Booking</Link>, <Link href="/features/telehealth">telehealth</Link>,{" "}
              <Link href="/features/patient-management">records</Link>, <Link href="/features/billing">billing</Link>, reminders, and a{" "}
              <Link href="/features/client-portal">patient portal</Link>.
            </li>
            <li>
              <strong>Growth. </strong>A <Link href="/features/website-builder">website</Link>,{" "}
              <Link href="/online-presence/local-seo">local SEO</Link>, <Link href="/features/reviews-reputation">reviews</Link>,{" "}
              <Link href="/online-presence/personal-branding">branding</Link>, and social.
            </li>
            <li>
              <strong>Automation. </strong>Reminders, recall, and review requests that run on their own.
            </li>
            <li>
              <strong>One dashboard. </strong>See rankings, reviews, and new patients in one place.
            </li>
          </ul>
          <p className="prose" style={{ marginTop: "24px" }}>
            Explore the <Link href="/features">full feature set</Link> or see it set up for your{" "}
            <Link href="/solutions">specialty</Link>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        heading="See the whole platform free"
        subtext="Set up your practice and online presence in a day."
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

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Why Clinexy: One Platform to Run and Grow",
  description:
    "Why solo practitioners choose Clinexy: operations and growth in one platform, a website, local SEO, reviews, and branding included, with honest pricing and no commissions.",
  alternates: { canonical: "https://www.clinexy.com/why-clinexy" },
};

const faqs = [
  {
    q: "Why choose Clinexy over other practice software?",
    a: "Most tools only manage your practice. Clinexy also brings patients in, with a website, local SEO, reviews, and branding included, so one platform does both.",
  },
  {
    q: "Is it really cheaper?",
    a: "Usually, yes. Once you add a website, SEO, and review tools elsewhere, an all-in-one plan with no commissions costs less.",
  },
  {
    q: "Will it actually get me more patients?",
    a: "The growth tools are built for it: most practices reach top-three local ranking and 50+ reviews within 6 to 12 months.",
  },
  {
    q: "Do I have to do the marketing myself?",
    a: "No. It is automated, and the Done-For-You plan hands the whole growth side to a manager.",
  },
  {
    q: "Can I switch easily?",
    a: "Yes. Guided, same-day migration from common tools is included free.",
  },
  {
    q: "Is it built for my specialty?",
    a: "Yes. It serves solo doctors, dentists, therapists, allied health, and wellness practitioners.",
  },
];

export default function WhyClinexyPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Why Clinexy", "item": "https://www.clinexy.com/why-clinexy" }
    ]
  };

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Clinexy: Practice Operations & Growth | Clinexy",
    "description": "Why solo practitioners choose Clinexy: operations and growth in one plan, absolute patient ownership, and honest pricing with no commissions.",
    "url": "https://www.clinexy.com/why-clinexy"
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
            <span className="tag">Why Clinexy</span>
            <h1>Run your practice and grow it, from one place</h1>
            <p className="hero-sub">
              Other tools stop at managing your diary. Clinexy also gets you found, chosen, and rebooked,
              so the software that runs your practice grows it too.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="why-clinexy-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="why-clinexy-demo">
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
                alt="Run your practice and grow it, from one place"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>The difference</span>
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
          <span className="crumb-current">Why Clinexy</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Practitioners choose Clinexy because it does what other tools leave out. Most practice software manages bookings
            and records; Clinexy matches that and adds the growth layer, a website, local SEO, reviews, branding, and social,
            in one plan with no commissions. It gets you found and chosen, not just organised, and you can hand the whole
            growth side to us if you prefer.
          </p>
        </div>
      </aside>

      {/* What sets Clinexy apart */}
      <section className="section">
        <div className="container section-narrow">
          <h2>What sets Clinexy apart</h2>
          <ul className="point-list font-medium">
            <li>
              <strong>Operations and growth in one plan.</strong> Not just a diary, the whole online presence too.
            </li>
            <li>
              <strong>You own everything.</strong> Your website, reviews, and patients live on your own domain.
            </li>
            <li>
              <strong>Honest, flat pricing.</strong> No per-appointment commissions and no paywalled add-ons.
            </li>
            <li>
              <strong>Built for solo practice.</strong> Light, fast, and tuned to one practitioner.
            </li>
            <li>
              <strong>Hand it off if you want.</strong> The Done-For-You plan runs your growth for you.
            </li>
            <li>
              <strong>Works in your region.</strong> Local currency, payment methods, and compliance.
            </li>
          </ul>
          <p className="prose" style={{ marginTop: "24px" }}>
            See how it compares on the <Link href="/compare">comparison hub</Link>, or explore the{" "}
            <Link href="/features">features</Link>.
          </p>
        </div>
      </section>

      {/* The bottom line */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The bottom line</h2>
          <p className="prose">
            If your bottleneck is being found, chosen, and rebooked, getting more of the right patients through the door,
            then a platform that includes a website, local SEO, reviews, and reminders alongside solid operations is the
            stronger fit. For most solo practitioners who want to grow, that is Clinexy. The trial is free, so the honest
            way to decide is to try it on your own practice.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        heading="See the difference free"
        subtext="Start free today. Run and grow your practice from one place."
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

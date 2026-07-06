import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing: One Simple Plan for Solo Practices",
  description:
    "Simple, honest pricing for solo healthcare professionals: 999 rupees or 99 dollars a month for everything, with no commissions. Optional Done-For-You tier. Free trial.",
  alternates: { canonical: "https://www.clinexy.com/pricing" },
};

const faqs = [
  {
    q: "How much does Clinexy cost?",
    a: "One flat plan: 999 rupees a month in India or 99 US dollars globally, with every feature included. An optional Done-For-You tier is 499 dollars a month.",
  },
  {
    q: "Are there any commissions or add-on fees?",
    a: "No. There are no per-appointment commissions and no paid add-ons. Growth tools are included in the base plan.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. 14 days, with no credit card required, and the whole platform included.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts, and your data stays exportable for 30 days after cancellation.",
  },
  {
    q: "What does Done-For-You include?",
    a: "Everything in Solo, plus a dedicated growth manager who runs your local SEO, reviews, and social on your behalf, with monthly reporting.",
  },
  {
    q: "Do you help me move from my current tool?",
    a: "Yes. Guided, same-day migration from Practo, SimplePractice, Cliniko, Jane, and MocDoc is included free.",
  },
];

export default function PricingPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.clinexy.com/pricing" }
    ]
  };

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing: One Simple Plan for Solo Practices",
    "description": "Simple, honest pricing for solo healthcare professionals: 999 rupees or 99 dollars a month for everything, with no commissions. Optional Done-For-You tier. Free trial.",
    "url": "https://www.clinexy.com/pricing"
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
            <span className="tag">Pricing</span>
            <h1>Simple, honest pricing</h1>
            <p className="hero-sub">
              One plan covers your whole practice and your whole online presence.
              No commissions, no add-ons, no surprises.
            </p>
            <ul className="point-list hero-points">
              <li>See exactly what brings in new patients.</li>
              <li>Track your growth month over month.</li>
              <li>Decide with data, not guesswork.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="pricing-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="pricing-demo">
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
                alt="Simple, honest pricing"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>One flat plan</span>
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
          <span className="crumb-current">Pricing</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is one flat plan: 999 rupees a month in India or 99 US dollars globally, with every feature included,
            operations and growth. There are no per-appointment commissions and no paid add-ons. An optional Done-For-You tier
            at 499 dollars a month adds a growth manager who runs your SEO, reviews, and social for you. Start with a 14-day
            free trial, no card needed.
          </p>
        </div>
      </aside>

      {/* Choose your plan */}
      <section className="section">
        <div className="container">
          <h2>Choose your plan</h2>
          <p className="lead">Start free. Upgrade to Done-For-You only if you want us to run the growth side.</p>
          <div className="plan-grid">
            <div className="plan">
              <span className="plan-badge">Try it</span>
              <h3>Free Trial</h3>
              <div className="price">Free<span> / 14 days</span></div>
              <p className="plan-sub">The whole platform, no credit card.</p>
              <ul className="point-list">
                <li>Every feature included</li>
                <li>Set up in a day</li>
                <li>Guided migration help</li>
                <li>No card, cancel anytime</li>
              </ul>
              <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">
                Start Free Trial
              </a>
            </div>
            <div className="plan featured">
              <span className="plan-badge">Most popular</span>
              <h3>Solo</h3>
              <div className="price">&#8377;999<span> / mo</span></div>
              <p className="plan-sub">Or $99/mo globally. Everything, one plan.</p>
              <ul className="point-list">
                <li>Booking, telehealth, records, billing</li>
                <li>Website, local SEO, Google profile</li>
                <li>Automated reviews and branding</li>
                <li>Reminders, recall, and a patient portal</li>
                <li>No commissions, no add-ons</li>
              </ul>
              <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">
                Start Free Trial
              </a>
            </div>
            <div className="plan">
              <span className="plan-badge">Hands-off</span>
              <h3>Done-For-You</h3>
              <div className="price">$499<span> / mo</span></div>
              <p className="plan-sub">We run your growth for you.</p>
              <ul className="point-list">
                <li>Everything in Solo</li>
                <li>A dedicated growth manager</li>
                <li>We run SEO, reviews, and social</li>
                <li>Monthly growth reporting</li>
              </ul>
              <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Everything is included */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Everything is included</h2>
          <p className="prose">
            Unlike tools that charge for a website, reviews, or SEO on top, the Solo plan includes the whole platform.
            One bill, and it usually costs less than the separate tools it replaces.
          </p>
          <ul className="point-list two-col">
            <li>Online booking and calendar</li>
            <li>Telehealth and prescriptions</li>
            <li>Patient records and notes</li>
            <li>Billing, invoices, superbills</li>
            <li>3-touch reminders and waitlist</li>
            <li>Recall and follow-up</li>
            <li>Website on your own domain</li>
            <li>Local SEO and Google profile</li>
            <li>Automated review collection</li>
            <li>Personal branding and social</li>
            <li>Patient portal and messaging</li>
            <li>24/7 support and free migration</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Start free, no card required"
        subtext="Set up your whole practice and online presence in a day."
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

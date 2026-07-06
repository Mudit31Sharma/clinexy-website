import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Contact Clinexy | Sales, Support & Demos",
  description:
    "Get in touch with Clinexy. Email sales@clinexy.com, call +91 94126 25716, or start a free trial. We help solo healthcare professionals grow.",
  alternates: { canonical: "https://www.clinexy.com/contact" },
};

const faqs = [
  {
    q: "How do I get started?",
    a: "Start your free 14-day trial at the onboarding link, no credit card needed, or book a demo and we will walk you through it.",
  },
  {
    q: "How can I reach the team?",
    a: "Email sales@clinexy.com or call +91 94126 25716. We reply within one business day.",
  },
  {
    q: "Do you help with migration?",
    a: "Yes. Guided, same-day migration from your current tool is included free.",
  },
  {
    q: "Can I book a demo?",
    a: "Yes. Use the Book a Demo button and we will set up a time that suits you.",
  },
  {
    q: "Which regions do you support?",
    a: "India, the UK, Canada, Singapore, Australia, and more, with local pricing and compliance.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. 14 days, no credit card required.",
  },
];

const contactMethods = [
  {
    title: "Email",
    contact: "sales@clinexy.com",
    href: "mailto:sales@clinexy.com",
    note: "We reply within one business day.",
  },
  {
    title: "Phone",
    contact: "+91 94126 25716",
    href: "tel:+919412625716",
    note: "Mon to Sat, business hours.",
  },
  {
    title: "LinkedIn",
    contact: "linkedin.com/company/clinexy",
    href: "https://www.linkedin.com/company/clinexy/",
    note: "Follow for updates.",
  },
  {
    title: "Facebook",
    contact: "facebook.com/clinexyapp",
    href: "https://www.facebook.com/clinexyapp",
    note: "Message us anytime.",
  },
];

export default function ContactPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.clinexy.com/contact" }
    ]
  };

  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Clinexy | Sales, Support & Demos",
    "description": "Get in touch with Clinexy. Email sales@clinexy.com, call +91 94126 25716, or start a free trial. We help solo healthcare professionals grow.",
    "url": "https://www.clinexy.com/contact"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Contact</span>
            <h1>Talk to us</h1>
            <p className="hero-sub">
              Whether you want a demo, help migrating, or just have a question, we are here.
              Start free anytime, or reach out below.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="contact-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="contact-demo">
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
                alt="Talk to us"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>We reply fast</span>
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
          <span className="crumb-current">Contact</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Reach Clinexy by email at sales@clinexy.com or by phone at +91 94126 25716, and we reply within one business
            day. You can also start a free 14-day trial with no credit card, or book a demo and we will walk you through
            setting up your practice and online presence.
          </p>
        </div>
      </aside>

      {/* Ways to reach us */}
      <section className="section">
        <div className="container">
          <h2>Ways to reach us</h2>
          <p className="lead">Pick whatever is easiest. We are quick to respond.</p>
          <div className="contact-methods">
            {contactMethods.map((cm, i) => (
              <div key={i} className="contact-method">
                <h3>{cm.title}</h3>
                <p className="prose">
                  <a href={cm.href}>{cm.contact}</a>
                </p>
                <p className="muted">{cm.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        heading="Start free or book a demo"
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

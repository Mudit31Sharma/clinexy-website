import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Book a Demo - See Clinexy in 20 Minutes",
  description: "Book a personalised demo. See appointments, reminders, telehealth, your future website.",
  alternates: { canonical: "https://www.clinexy.com/demo" },
};

// JSON-LD Structured Data
const jsonLd1 = {
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

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.clinexy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Demo",
      "item": "https://www.clinexy.com/demo"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I learn more?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email sales@clinexy.com."
      }
    },
    {
      "@type": "Question",
      "name": "Is this content free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "Where else can I find help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Resources hub at /resources/for-doctors."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download templates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "Is there 24/7 support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes for paying customers."
      }
    },
    {
      "@type": "Question",
      "name": "How do I contact sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "sales@clinexy.com."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request a feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use in-app feedback or email product@clinexy.com."
      }
    },
    {
      "@type": "Question",
      "name": "Where's the status page?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "status.clinexy.com."
      }
    }
  ]
};


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd3) }}
      />

      <header className="hero"><div className="hero-inner">
<div className="hero-content">
<h1>See Clinexy in 20 minutes</h1>
<p className="hero-sub">Tailored to your specialty and country.</p><ul className="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/growth.svg" alt="See Clinexy in 20 minutes" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Demo</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>See Clinexy in 20 minutes for solo healthcare professionals. Clear, complete, and built to be useful within 60 seconds of reading.</p></div></aside>
<section className="section"><div className="container"><h2>What you'll find here</h2><p className="lead">Practical information designed for solo doctors. Read or skim. No fluff.</p></div></section>
<section className="section"><div className="container"><h2>Need more?</h2><p className="lead">Reach out at sales@clinexy.com. We respond within one business day.</p></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Where can I learn more?</summary><div className="faq-answer">Email sales@clinexy.com.</div></details><details className="faq-item"><summary>Is this content free?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>Where else can I find help?</summary><div className="faq-answer">Our Resources hub at /resources/for-doctors.</div></details><details className="faq-item"><summary>Can I download templates?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>Is there 24/7 support?</summary><div className="faq-answer">Yes for paying customers.</div></details><details className="faq-item"><summary>How do I contact sales?</summary><div className="faq-answer">sales@clinexy.com.</div></details><details className="faq-item"><summary>How do I request a feature?</summary><div className="faq-answer">Use in-app feedback or email product@clinexy.com.</div></details><details className="faq-item"><summary>Where's the status page?</summary><div className="faq-answer">status.clinexy.com.</div></details></div></div></section>
<section className="section section-related"><div className="container"><h2>Related pages</h2><div className="related-grid"><Link className="related-card" href="/why-clinexy"><h4>Why Clinexy</h4><p>Built for solo doctors. Not enterprise software, not basic booking. Calm and made for the way you work.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/about"><h4>About Clinexy</h4><p>We help solo doctors run a practice that runs smoothly. Calm and simple.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/contact"><h4>Talk to us</h4><p>Talk to our team. Sales, support, partnerships, press.</p><span className="related-arrow">→</span></Link></div></div></section>
<section className="section section-cta"><div className="container">
<h2>Ready to grow your practice?</h2>
<p>Join solo healthcare professionals using Clinexy to run a calmer, better-grown practice.</p>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div></div></section>
    </>
  );
}

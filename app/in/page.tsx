import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Clinic Software for Indian Doctors - ₹999/month",
  description: "Built for Indian solo doctors. WhatsApp-first. ABDM-ready. ₹999/month.",
  alternates: { canonical: "https://www.clinexy.com/in" },
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
      "name": "In",
      "item": "https://www.clinexy.com/in"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is local language supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "Are local payments supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "Is patient data compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing localized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing fits the local healthcare economy."
      }
    },
    {
      "@type": "Question",
      "name": "Is there local support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "What about local regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aligned with national health authority guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "How long is setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "30 minutes for core."
      }
    },
    {
      "@type": "Question",
      "name": "Can I import existing patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
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
<h1>Built for Indian solo doctors</h1>
<p className="hero-sub">WhatsApp-first. UPI-ready. ABDM-aligned.</p><ul className="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/growth.svg" alt="Built for Indian solo doctors" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">In</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>Clinexy in this region includes locally-relevant payment methods, language UI, and regulatory compliance. The platform serves solo healthcare professionals with online bookings, automated reminders, telehealth, branded website, and reviews - all in one subscription.</p></div></aside>
<section className="section"><div className="container"><h2>Built locally</h2><p className="lead">Local payments. Local language. Local regulation. The way patients in your country actually communicate and pay.</p></div></section>
<section className="section"><div className="container"><h2>What's included</h2><div className="photo-cards-grid"><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/booking.svg" alt="Online appointment booking" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Online appointment booking</h3></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reminders.svg" alt="Smart multi-channel reminders" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Smart multi-channel reminders</h3></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/telehealth.svg" alt="Telehealth" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Telehealth</h3></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/prescription.svg" alt="Digital prescriptions" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Digital prescriptions</h3></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/branding.svg" alt="Your branded website" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your branded website</h3></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reviews.svg" alt="Automated reviews" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Automated reviews</h3></div></div></div></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section"><div className="container"><h2>Setup in 30 minutes</h2><p className="lead">Most doctors are up and running within an afternoon.</p></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Is local language supported?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>Are local payments supported?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>Is patient data compliant?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>How is pricing localized?</summary><div className="faq-answer">Pricing fits the local healthcare economy.</div></details><details className="faq-item"><summary>Is there local support?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>What about local regulations?</summary><div className="faq-answer">Aligned with national health authority guidelines.</div></details><details className="faq-item"><summary>How long is setup?</summary><div className="faq-answer">30 minutes for core.</div></details><details className="faq-item"><summary>Can I import existing patients?</summary><div className="faq-answer">Yes.</div></details></div></div></section>
<section className="section section-related"><div className="container"><h2>Related pages</h2><div className="related-grid"><Link className="related-card" href="/id"><h4>Built for Indonesian dokter</h4><p>Mobile-first clinic software for Indonesian dokter. WhatsApp reminders, online bookings.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/ph"><h4>Built for Filipino doctors</h4><p>Simple clinic software for Filipino solo doctors. Bookings, reminders, telehealth.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/my"><h4>Built for Malaysian doctors</h4><p>PDPA-compliant clinic software for Malaysian doctors. WhatsApp reminders.</p><span className="related-arrow">→</span></Link></div></div></section>
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

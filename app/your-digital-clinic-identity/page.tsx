import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Your Digital Clinic Identity",
  description: "Build your digital clinic identity. Branded website, personal brand, reviews, and authority. Without complex marketing.",
  alternates: { canonical: "https://www.clinexy.com/your-digital-clinic-identity" },
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
      "name": "Your Digital Clinic Identity",
      "item": "https://www.clinexy.com/your-digital-clinic-identity"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a digital identity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foundation in 30 days. Visible compounding by month 3."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to hire a designer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Templates are healthcare-specific and look professional."
      }
    },
    {
      "@type": "Question",
      "name": "Can patients leave reviews on my Clinexy website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reviews are collected to Google so they help local SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a marketing background?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The framework runs in the background."
      }
    },
    {
      "@type": "Question",
      "name": "Is my brand portable if I leave Clinexy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Domain, content, and patient data are all yours."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customise the website templates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Colors, fonts, sections all customisable."
      }
    },
    {
      "@type": "Question",
      "name": "Does this work for telehealth-only practitioners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "Is this compliant with healthcare advertising rules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Built around HIPAA, MOHFW, GMC, and equivalent guidelines."
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
<h1>Your digital clinic identity</h1>
<p className="hero-sub">Your brand. Your story. Your patients finding you online before they walk in.</p><ul className="point-list hero-points"><li>Look credible the moment patients land.</li><li>Turn website visitors into booked appointments.</li><li>Own your presence on your own domain.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/website.svg" alt="Your digital clinic identity" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Your Digital Clinic Identity</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>Your digital clinic identity is the online presence patients see before booking: your branded website, your About page, your reviews, your credentials, your patient stories. Solo doctors who invest in this once build authority that compounds for years.</p></div></aside>
<section className="section"><div className="container"><h2>Why identity matters</h2><p className="lead">Patients in 2026 pick a healthcare provider in under 12 minutes. Most of that decision happens before they visit. Your digital identity does the persuading.</p></div></section>
<section className="section"><div className="container"><h2>Six elements of a strong digital clinic identity</h2><div className="photo-cards-grid"><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/branding.svg" alt="Your branded website" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your branded website</h3><p>On your own domain</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/branding.svg" alt="Your About page" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your About page</h3><p>Your story, credentials, photo</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/seo.svg" alt="Your Google Business Profile" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your Google Business Profile</h3><p>Hours, services, photos, posts</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reviews.svg" alt="Your Google reviews" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your Google reviews</h3><p>50+ reviews builds default trust</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/social.svg" alt="Your social presence" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your social presence</h3><p>LinkedIn, Instagram steady cadence</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reviews.svg" alt="Your patient stories" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Your patient stories</h3><p>Testimonials with names and photos</p></div></div></div></div></section>
<section className="section"><div className="container"><h2>Where most solo doctors lose</h2><p className="lead">An unclaimed GBP. A directory profile instead of a website. 8 reviews after 5 years. No About page with their actual story. The result is invisibility in a saturated local market.</p></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section"><div className="container"><h2>How Clinexy builds your identity</h2><div className="photo-cards-grid"><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/branding.svg" alt="Branded website builder" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Branded website builder</h3><p>Set up in 30 minutes</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reviews.svg" alt="Auto review collection" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Auto review collection</h3><p>From 8 to 50+ in 90 days</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/seo.svg" alt="GBP sync" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>GBP sync</h3><p>Always-current profile</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/branding.svg" alt="Personal branding section" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Personal branding section</h3><p>About, story, credentials</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/social.svg" alt="Social scheduler" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Social scheduler</h3><p>Steady cadence without chasing it</p></div></div><div className="photo-card"><div className="photo-card-img"><img src="/assets/img/reviews.svg" alt="Patient story templates" loading="lazy" width="500" height="300" /></div><div className="photo-card-body"><h3>Patient story templates</h3><p>Compliant, compelling</p></div></div></div></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>How long does it take to build a digital identity?</summary><div className="faq-answer">Foundation in 30 days. Visible compounding by month 3.</div></details><details className="faq-item"><summary>Do I need to hire a designer?</summary><div className="faq-answer">No. Templates are healthcare-specific and look professional.</div></details><details className="faq-item"><summary>Can patients leave reviews on my Clinexy website?</summary><div className="faq-answer">Reviews are collected to Google so they help local SEO.</div></details><details className="faq-item"><summary>Do I need a marketing background?</summary><div className="faq-answer">No. The framework runs in the background.</div></details><details className="faq-item"><summary>Is my brand portable if I leave Clinexy?</summary><div className="faq-answer">Yes. Domain, content, and patient data are all yours.</div></details><details className="faq-item"><summary>Can I customise the website templates?</summary><div className="faq-answer">Yes. Colors, fonts, sections all customisable.</div></details><details className="faq-item"><summary>Does this work for telehealth-only practitioners?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>Is this compliant with healthcare advertising rules?</summary><div className="faq-answer">Yes. Built around HIPAA, MOHFW, GMC, and equivalent guidelines.</div></details></div></div></section>
<section className="section section-related"><div className="container"><h2>Related pages</h2><div className="related-grid"><Link className="related-card" href="/online-presence/local-seo"><h4>Local SEO for solo healthcare practices</h4><p>Local SEO for solo healthcare professionals. Rank top-3 for [specialty] near me. Free guide and tools.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/online-presence/google-business-profile"><h4>Google Business Profile for solo doctors</h4><p>How to set up and optimise your Google Business Profile as a solo doctor. Setup guide plus automation.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/online-presence/personal-branding"><h4>Personal branding for solo doctors</h4><p>Build a doctor personal brand that compounds for years. Practical framework. Free guide.</p><span className="related-arrow">→</span></Link></div></div></section>
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

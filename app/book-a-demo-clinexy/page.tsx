import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Book a personalised 20-minute Clinexy demo. Tailored to your specialty and country.",
  alternates: { canonical: "https://www.clinexy.com/book-a-demo-clinexy" },
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
      "name": "Book A Demo Clinexy",
      "item": "https://www.clinexy.com/book-a-demo-clinexy"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the demo free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes."
      }
    },
    {
      "@type": "Question",
      "name": "How long is it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "20 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to sign up first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No."
      }
    },
    {
      "@type": "Question",
      "name": "What if I want to start the trial after?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Set up in 30 minutes after the demo."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get a tailored plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We'll mock up your future website and growth plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can the team join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Receptionists, partners, accountants all welcome."
      }
    },
    {
      "@type": "Question",
      "name": "Is the demo recorded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only with your permission."
      }
    },
    {
      "@type": "Question",
      "name": "What if my region is small?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have solo practitioners in 30+ countries."
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
<h1>Book a Clinexy demo</h1>
<p className="hero-sub">See Clinexy in 20 minutes. Tailored to your specialty.</p><ul className="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/growth.svg" alt="Book a Clinexy demo" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Book A Demo Clinexy</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>A Clinexy demo runs 20 minutes. You see appointments, reminders, telehealth, your future website, and a tailored growth plan for your specialty. No commitment. No credit card.</p></div></aside>
<section className="section"><div className="container"><h2>What you'll see in 20 minutes</h2><div className="cards-grid"><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 L21 10"/><path d="M8 3 L8 7"/><path d="M16 3 L16 7"/></svg></div><h3>Online booking</h3><p>Set up in real time</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/></svg></div><h3>Smart reminders</h3><p>Cut no-shows live</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg></div><h3>Telehealth</h3><p>Google Meet integrated</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h3>Your future website</h3><p>Mocked up for your specialty</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12 L22 12"/></svg></div><h3>Reviews automation</h3><p>How 50+ reviews happen in 90 days</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z"/></svg></div><h3>Local SEO</h3><p>Where you'll rank in 6-12 months</p></div></div></div></section>
<section className="section"><div className="container"><h2>Who's on the demo</h2><p className="lead">A growth specialist who understands solo practice in your region. No high-pressure sales. We answer questions, show you the platform, and let you decide.</p></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Is the demo free?</summary><div className="faq-answer">Yes.</div></details><details className="faq-item"><summary>How long is it?</summary><div className="faq-answer">20 minutes.</div></details><details className="faq-item"><summary>Do I need to sign up first?</summary><div className="faq-answer">No.</div></details><details className="faq-item"><summary>What if I want to start the trial after?</summary><div className="faq-answer">Set up in 30 minutes after the demo.</div></details><details className="faq-item"><summary>Will I get a tailored plan?</summary><div className="faq-answer">Yes. We'll mock up your future website and growth plan.</div></details><details className="faq-item"><summary>Can the team join?</summary><div className="faq-answer">Yes. Receptionists, partners, accountants all welcome.</div></details><details className="faq-item"><summary>Is the demo recorded?</summary><div className="faq-answer">Only with your permission.</div></details><details className="faq-item"><summary>What if my region is small?</summary><div className="faq-answer">We have solo practitioners in 30+ countries.</div></details></div></div></section>
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

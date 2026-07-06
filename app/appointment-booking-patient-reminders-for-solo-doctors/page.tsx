import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Online Booking & Smart Reminders",
  description: "Online booking on your branded link with a 3-touch reminder sequence that cuts no-shows by 30 to 40%. Built for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/appointment-booking-patient-reminders-for-solo-doctors" },
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
      "name": "Appointment Booking Patient Reminders For Solo Doctors",
      "item": "https://www.clinexy.com/appointment-booking-patient-reminders-for-solo-doctors"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Online Booking & Smart Reminders included in the plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No add-on fees, no per-message fees."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most features take 5 to 15 minutes to activate."
      }
    },
    {
      "@type": "Question",
      "name": "Does Online Booking & Smart Reminders work for my specialty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Workflows adapt to your specialty's actual operating pattern."
      }
    },
    {
      "@type": "Question",
      "name": "Is it compliant in my region?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customise it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Timing, language, content, and templates are all customisable."
      }
    },
    {
      "@type": "Question",
      "name": "Can I integrate Online Booking & Smart Reminders with my existing tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Calendar sync, payment processors, and other major tools integrate natively."
      }
    },
    {
      "@type": "Question",
      "name": "Is patient data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AES-256 encryption at rest. TLS 1.3 in transit."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need help setting it up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "24/7 chat support during your trial and on every paid plan."
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
<h1>Online Booking & Smart Reminders</h1>
<p className="hero-sub">Online booking on your branded link with a 3-touch reminder sequence that cuts no-shows by 30 to 40%.</p><ul className="point-list hero-points"><li>Let patients book themselves, day or night.</li><li>Cut no-shows with automatic reminders.</li><li>Free your front desk from the phone.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/booking.svg" alt="Online Booking & Smart Reminders" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Appointment Booking Patient Reminders For Solo Doctors</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>Online Booking & Smart Reminders from Clinexy is built specifically for solo healthcare professionals. It is included in the base subscription with no add-on fees and no per-appointment commissions. Setup takes minutes, not days, and works across regions with compliance for HIPAA, GDPR, PIPEDA, PDPA, and DPDP.</p></div></aside>
<section className="section"><div className="container"><h2>What is Online Booking & Smart Reminders</h2><p className="lead">Online Booking & Smart Reminders is the part of Clinexy that handles this specific job for your practice.</p></div></section>
<section className="section"><div className="container"><h2>Why it matters</h2><p className="lead">Solo practitioners juggle bookings, marketing, billing, records, and online reputation. Each of these usually requires a separate tool.</p></div></section>
<section className="section"><div className="container"><h2>Problems without it</h2><p className="lead">Without this in place, solo practices typically lose 15 to 25% of operational time and miss recall opportunities.</p></div></section>
<section className="section"><div className="container"><h2>How Clinexy solves it</h2><p className="lead">Clinexy ships Online Booking & Smart Reminders as part of the base subscription. No add-on fees. No setup work. Templates pre-configured for solo practice.</p></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section"><div className="container"><h2>Workflow</h2><p className="lead">The patient interacts with your branded touchpoint. Clinexy handles the routine. Complex cases route to you with full context.</p></div></section>
<section className="section"><div className="container"><h2>Benefits</h2><div className="cards-grid"><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 L21 10"/><path d="M8 3 L8 7"/><path d="M16 3 L16 7"/></svg></div><h3>No add-on fees</h3><p>Included in the base subscription</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/></svg></div><h3>Setup in minutes</h3><p>Pre-configured for solo practice</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg></div><h3>Multi-channel</h3><p>SMS, WhatsApp, email</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h3>Compliant in your region</h3><p>HIPAA, GDPR, PIPEDA, PDPA, DPDP</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12 L22 12"/></svg></div><h3>Specialty-aware</h3><p>Workflows adapt to your specialty</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z"/></svg></div><h3>Real human support</h3><p>Not chatbots when you are stuck</p></div></div></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Is Online Booking & Smart Reminders included in the plan?</summary><div className="faq-answer">Yes. No add-on fees, no per-message fees.</div></details><details className="faq-item"><summary>How long does setup take?</summary><div className="faq-answer">Most features take 5 to 15 minutes to activate.</div></details><details className="faq-item"><summary>Does Online Booking & Smart Reminders work for my specialty?</summary><div className="faq-answer">Yes. Workflows adapt to your specialty's actual operating pattern.</div></details><details className="faq-item"><summary>Is it compliant in my region?</summary><div className="faq-answer">Yes. HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP.</div></details><details className="faq-item"><summary>Can I customise it?</summary><div className="faq-answer">Yes. Timing, language, content, and templates are all customisable.</div></details><details className="faq-item"><summary>Can I integrate Online Booking & Smart Reminders with my existing tools?</summary><div className="faq-answer">Yes. Calendar sync, payment processors, and other major tools integrate natively.</div></details><details className="faq-item"><summary>Is patient data secure?</summary><div className="faq-answer">Yes. AES-256 encryption at rest. TLS 1.3 in transit.</div></details><details className="faq-item"><summary>What if I need help setting it up?</summary><div className="faq-answer">24/7 chat support during your trial and on every paid plan.</div></details></div></div></section>
<section className="section section-related"><div className="container"><h2>Related pages</h2><div className="related-grid"><Link className="related-card" href="/features/appointments-reminders"><h4>Online Booking & Smart Reminders</h4><p>Online booking on your branded link with a 3-touch reminder sequence that cuts no-shows by 30 to 40%. Built for solo hea</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/features/teleconsultation-prescriptions"><h4>Telehealth & Digital Prescriptions</h4><p>Video consults via Google Meet. Branded prescriptions generated in minutes. Compliant in your region. Built for solo hea</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/features/telehealth"><h4>Telehealth for Solo Practitioners</h4><p>Telehealth that just works. Google Meet inside Clinexy. Patient gets a join link. You see vitals and notes from inside t</p><span className="related-arrow">→</span></Link></div></div></section>
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

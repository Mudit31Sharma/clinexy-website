import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Software for Solo Doctors to Manage & Grow Their Clinic",
  description: "Built for solo doctors. Manage appointments. Reduce no-shows. Grow steadily. Free trial.",
  alternates: { canonical: "https://www.clinexy.com/software-for-solo-doctors-to-manage-grow-their-clinic" },
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
      "name": "Software For Solo Doctors To Manage Grow Their Clinic",
      "item": "https://www.clinexy.com/software-for-solo-doctors-to-manage-grow-their-clinic"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Clinexy built for solo doctors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Templates, workflows, and prescription formats are adapted to solo practice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I import my existing patient list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CSV import takes 10 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Does it support insurance billing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes for most major regions."
      }
    },
    {
      "@type": "Question",
      "name": "Is it compliant in my region?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "30 minutes for core. 2 hours including specialty templates."
      }
    },
    {
      "@type": "Question",
      "name": "Does it integrate with my calendar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Google Calendar and Outlook sync."
      }
    },
    {
      "@type": "Question",
      "name": "Can I run online consults?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Built-in Google Meet integration."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my patient data if I cancel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CSV export for 30 days after cancellation."
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
<h1>Software for solo doctors to manage and grow their clinic</h1>
<p className="hero-sub">Run your clinic and grow your patient base. From one calm dashboard.</p><ul className="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div className="hero-ctas">
<a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
<a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
</div>
<p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
</div>
<div className="hero-image">
<div className="hero-photo-wrap">
<img className="hero-photo" src="/assets/img/growth.svg" alt="Software for solo doctors to manage and grow their clinic" loading="eager" width="600" height="420" />
<div className="hero-photo-badge">
<div className="badge-dot"></div><span>Live booking system</span>
</div></div>
</div>
</div></header>
<nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Software For Solo Doctors To Manage Grow Their Clinic</span></div></nav>
<aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>Clinexy is software built for solo doctors to manage appointments, reduce no-shows, build their personal brand, and grow patient bookings - all from one platform with no per-appointment commission. It includes online booking, automated WhatsApp reminders, telehealth, patient records, a branded doctor website, automated reviews, and local SEO.</p></div></aside>
<section className="section"><div className="container"><h2>Challenges faced by solo doctors</h2><p className="lead">Solo doctors face six common challenges: getting new patients, being visible online, building Google reviews, scheduling without phone tag, retaining patients between visits, and staying on top of admin.</p></div></section>
<section className="section"><div className="container"><h2>How patients find solo doctors</h2><p className="lead">Patients in 2026 find solo doctors through Google search. They type '[specialty] near me' or '[treatment] in [city]', scan the top 3 results, read reviews, and book.</p></div></section>
<section className="section"><div className="container"><h2>Online presence challenges</h2><p className="lead">Most solo doctors have an unclaimed Google Business Profile, no proper website, or a directory listing that does not show their brand.</p></div></section>
<section className="section"><div className="container"><h2>Review challenges</h2><p className="lead">Most solo doctors have 8-15 Google reviews after years of practice. Patients want to see 50+.</p></div></section>
<section className="section"><div className="container"><h2>Personal branding challenges</h2><p className="lead">Solo doctors are often invisible online despite years of experience. No About page. No proof of expertise.</p></div></section>
<section className="section"><div className="container"><h2>Practice growth challenges</h2><p className="lead">Without a recall system, 38% of revenue leaks away from patients who would happily return.</p></div></section>
<section className="inline-cta"><div className="container"><h3>Ready to see this for your practice?</h3><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section className="section"><div className="container"><h2>How Clinexy helps</h2><p className="lead">Clinexy gives solo doctors a single platform: bookings, reminders, records, branded website, automated reviews, local SEO, and recall. One subscription replaces 4 to 6 separate tools.</p></div></section>
<section className="section"><div className="container"><h2>Feature mapping</h2><div className="cards-grid"><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 L21 10"/><path d="M8 3 L8 7"/><path d="M16 3 L16 7"/></svg></div><h3>Online bookings</h3><p>Patients book on your branded link 24/7</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/></svg></div><h3>Smart reminders</h3><p>3-touch reminders cut no-shows 30-40%</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg></div><h3>Patient records</h3><p>Specialty-adapted templates</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h3>Branded website</h3><p>On your domain. SEO ready.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12 L22 12"/></svg></div><h3>Automated reviews</h3><p>50+ Google reviews in 90 days</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z"/></svg></div><h3>Local SEO</h3><p>Top-3 rankings for your specialty in your city</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14 L11 10 L15 13 L21 7"/></svg></div><h3>Recall</h3><p>38% inactive patients return</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8 L16 12 L22 16Z"/></svg></div><h3>Telehealth</h3><p>Google Meet integrated</p></div></div></div></section>
<section className="section"><div className="container"><h2>Expected results</h2><p className="lead">Solo doctors using Clinexy typically see 30-40% fewer no-shows, 3-5x more Google reviews, and 20-50% increase in monthly new patients within 12 months.</p></div></section>
<section className="section"><div className="container"><h2>Case example</h2><p className="lead">A solo GP running a typical practice with $120-200 per visit and 25 patients per week typically recovers $15K-30K in lost revenue from no-show reduction in the first year.</p></div></section>
<section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Is Clinexy built for solo doctors?</summary><div className="faq-answer">Yes. Templates, workflows, and prescription formats are adapted to solo practice.</div></details><details className="faq-item"><summary>Can I import my existing patient list?</summary><div className="faq-answer">Yes. CSV import takes 10 minutes.</div></details><details className="faq-item"><summary>Does it support insurance billing?</summary><div className="faq-answer">Yes for most major regions.</div></details><details className="faq-item"><summary>Is it compliant in my region?</summary><div className="faq-answer">HIPAA, GDPR, PIPEDA, Privacy Act, PDPA, DPDP.</div></details><details className="faq-item"><summary>How long does setup take?</summary><div className="faq-answer">30 minutes for core. 2 hours including specialty templates.</div></details><details className="faq-item"><summary>Does it integrate with my calendar?</summary><div className="faq-answer">Yes. Google Calendar and Outlook sync.</div></details><details className="faq-item"><summary>Can I run online consults?</summary><div className="faq-answer">Yes. Built-in Google Meet integration.</div></details><details className="faq-item"><summary>Can I keep my patient data if I cancel?</summary><div className="faq-answer">Yes. CSV export for 30 days after cancellation.</div></details></div></div></section>
<section className="section section-related"><div className="container"><h2>Related pages</h2><div className="related-grid"><Link className="related-card" href="/solutions/solo-doctors"><h4>Built for solo solo doctors</h4><p>Software built for solo solo doctors. Bookings, branded website, reviews, follow-up, growth. Free trial.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/solutions/dentists"><h4>Built for solo dentists</h4><p>Software built for solo dentists. Bookings, branded website, reviews, follow-up, growth. Free trial.</p><span className="related-arrow">→</span></Link><Link className="related-card" href="/solutions/dermatologists"><h4>Built for solo dermatologists</h4><p>Software built for solo dermatologists. Bookings, branded website, reviews, follow-up, growth. Free trial.</p><span className="related-arrow">→</span></Link></div></div></section>
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

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies: Solo Practice Results",
  description: "See how solo doctors and dentists cut no-shows, grew reviews, and got found on Google with Clinexy. Labelled-composite results across specialties.",
  alternates: { canonical: "https://www.clinexy.com/case-studies" },
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
      "name": "Case Studies",
      "item": "https://www.clinexy.com/case-studies"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies: Solo Practice Results",
  "description": "See how solo doctors and dentists cut no-shows, grew reviews, and got found on Google with Clinexy. Labelled-composite results across specialties.",
  "url": "https://www.clinexy.com/case-studies"
};

const jsonLd4 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are these real case studies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are labelled composites drawn from common results, illustrative of typical outcomes rather than one named client."
      }
    },
    {
      "@type": "Question",
      "name": "What results can I expect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most practices reach under 10 percent no-shows, 50+ reviews in 90 days, and top-three local ranking in 6 to 12 months."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work for my specialty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same system adapts across medical, dental, therapy, and allied health."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No-shows fall immediately; reviews build over 90 days; ranking improves over 6 to 12 months."
      }
    },
    {
      "@type": "Question",
      "name": "Can I migrate my patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A guided CSV import takes about 10 minutes and is free."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try it first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A 14-day free trial with no credit card."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd4) }}
      />

      <header className="hero"><div className="hero-inner"><div className="hero-content"><span className="tag">Case studies</span><h1>How solo practices grow with Clinexy</h1><p className="hero-sub">Real-shaped results from practices like yours, the numbers, the changes, and how they did it.</p><ul className="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div><p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p></div><div className="hero-image"><div className="hero-photo-wrap"><img className="hero-photo" src="/assets/img/growth.svg" alt="Case Studies for solo healthcare professionals with Clinexy" loading="eager" width="600" height="420" /><div className="hero-photo-badge"><div className="badge-dot"></div><span>Real results</span></div></div></div></div></header><nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">&rsaquo;</span><span className="crumb-current">Case Studies</span></div></nav><aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>These case studies show how solo practices grow on Clinexy: cutting no-shows below 10 percent, gathering 50 or more reviews in 90 days, and reaching top-three local ranking. They are labelled composites drawn from common results across specialties.</p></div></aside><section className="section"><div className="container"><h2>What Clinexy does for your practice</h2><p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p><div className="cards-grid"><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Get found</h3><p>A website on your own domain, local SEO, and a Google profile that climbs the map pack, so the right patients find you.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div><h3>Get chosen</h3><p>Automated reviews, a warm personal brand, and social content that build the trust that wins the booking.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div><h3>Get booked</h3><p>24/7 online booking with smart reminders and recall, so your calendar fills and far fewer slots go empty.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg></div><h3>Focus on care</h3><p>You handle the medicine. We handle the marketing and the admin, automatically, from one calm dashboard.</p></div></div></div></section><section className="section"><div className="container"><h2>All case studies</h2><div className="related-grid"><Link className="related-card" href="/case-studies/solo-doctors"><h4>Solo Doctor Success Stories</h4><p>The numbers solo doctors see across specialties.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/case-studies/dr-emma-wilson-london-gp"><h4>Dr. Emma Wilson, London GP</h4><p>From three tools to 78 reviews and 70 percent fewer calls.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/case-studies/dr-priya-pune-dentist"><h4>Dr. Priya, Pune Dentist</h4><p>Automated recall, 50+ reviews, and a waitlist forming.</p><span className="related-arrow">&rarr;</span></Link></div></div></section><section className="section"><div className="container section-narrow"><h2>Why everything in one place</h2><p className="prose">You did not train for years to spend your evenings on reminder texts, review requests, and a website that never quite happened. When your booking, records, website, reviews, and recall all live in one place and talk to each other, the busywork disappears and your practice grows quietly in the background.</p><ul className="point-list"><li><strong>One login, one bill.</strong> No stitching together five apps that do not share your data.</li><li><strong>Nothing slips.</strong> Every booking triggers a reminder, every visit earns a review, every lapsed patient gets a nudge.</li><li><strong>You stay in control.</strong> Your patients, your website, and your reviews are yours, on your own domain.</li><li><strong>Or hand it over.</strong> On the Done-For-You plan, we run the whole growth side for you.</li></ul></div></section><section className="section section-cta"><div className="container"><h2>See these results in your practice</h2><p>Start free today. The same system behind these results.</p><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section><section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>Are these real case studies?</summary><div className="faq-answer">They are labelled composites drawn from common results, illustrative of typical outcomes rather than one named client.</div></details><details className="faq-item"><summary>What results can I expect?</summary><div className="faq-answer">Most practices reach under 10 percent no-shows, 50+ reviews in 90 days, and top-three local ranking in 6 to 12 months.</div></details><details className="faq-item"><summary>Does it work for my specialty?</summary><div className="faq-answer">Yes. The same system adapts across medical, dental, therapy, and allied health.</div></details><details className="faq-item"><summary>How long until I see results?</summary><div className="faq-answer">No-shows fall immediately; reviews build over 90 days; ranking improves over 6 to 12 months.</div></details><details className="faq-item"><summary>Can I migrate my patients?</summary><div className="faq-answer">Yes. A guided CSV import takes about 10 minutes and is free.</div></details><details className="faq-item"><summary>Can I try it first?</summary><div className="faq-answer">Yes. A 14-day free trial with no credit card.</div></details></div></div></section>
    </>
  );
}

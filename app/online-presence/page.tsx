import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Online Presence for Doctors: SEO, Reviews, Branding",
  description: "Build the online presence that brings patients in: local SEO, your Google profile, reviews, personal branding, and social media, handled for you so you can focus on care.",
  alternates: { canonical: "https://www.clinexy.com/online-presence" },
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
      "name": "Online Presence",
      "item": "https://www.clinexy.com/online-presence"
    }
  ]
};

const jsonLd3 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Online Presence for Doctors: SEO, Reviews, Branding",
  "description": "Build the online presence that brings patients in: local SEO, your Google profile, reviews, personal branding, and social media, handled for you so you can focus on care.",
  "url": "https://www.clinexy.com/online-presence"
};

const jsonLd4 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is online presence for a clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is everything that decides whether patients find and trust you online: your website, local SEO, Google profile, reviews, branding, and social media."
      }
    },
    {
      "@type": "Question",
      "name": "Which lever matters most?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Being found, through a complete Google profile and a real website, followed closely by reviews, which decide who patients choose."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle it for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Clinexy automates the repetitive work, and the Done-For-You plan hands the whole thing to a growth manager."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I rank locally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First movement in 4 to 8 weeks, with top-three local ranking typically over 6 to 12 months."
      }
    },
    {
      "@type": "Question",
      "name": "Does this help with AI search too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same clean listings, reviews, and structured pages are what ChatGPT, Gemini, and Google AI Overviews read."
      }
    },
    {
      "@type": "Question",
      "name": "Is it included in the plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your full online presence is part of the subscription."
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

      <header className="hero"><div className="hero-inner"><div className="hero-content"><span className="tag">Online presence</span><h1>Get found and chosen online</h1><p className="hero-sub">Patients search before they book. This is everything that gets you found and chosen online, your website, local SEO, Google profile, reviews, branding, and social, run from one place.</p><ul className="point-list hero-points"><li>Look credible the moment patients land.</li><li>Turn website visitors into booked appointments.</li><li>Own your presence on your own domain.</li></ul><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div><p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p></div><div className="hero-image"><div className="hero-photo-wrap"><img className="hero-photo" src="/assets/img/website.svg" alt="Online Presence for solo healthcare professionals with Clinexy" loading="eager" width="600" height="420" /><div className="hero-photo-badge"><div className="badge-dot"></div><span>Get found</span></div></div></div></div></header><nav className="breadcrumbs"><div className="container"><Link href="/">Home</Link><span className="crumb-sep">&rsaquo;</span><span className="crumb-current">Online Presence</span></div></nav><aside className="quick-answer container"><div className="quick-answer-inner"><div className="quick-answer-label">Quick answer</div><p>Your online presence is how new patients find you and decide to trust you. Clinexy builds and runs all of it: local SEO and a Google profile to get you found, reviews and personal branding to get you chosen, and social to keep you visible, so the marketing happens without taking your time.</p></div></aside><section className="section"><div className="container"><h2>What Clinexy does for your practice</h2><p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p><div className="cards-grid"><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div><h3>Get found</h3><p>A website on your own domain, local SEO, and a Google profile that climbs the map pack, so the right patients find you.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div><h3>Get chosen</h3><p>Automated reviews, a warm personal brand, and social content that build the trust that wins the booking.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div><h3>Get booked</h3><p>24/7 online booking with smart reminders and recall, so your calendar fills and far fewer slots go empty.</p></div><div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg></div><h3>Focus on care</h3><p>You handle the medicine. We handle the marketing and the admin, automatically, from one calm dashboard.</p></div></div></div></section><section className="section"><div className="container"><h2>The five levers of online presence</h2><div className="related-grid"><Link className="related-card" href="/online-presence/local-seo"><h4>Local SEO</h4><p>Climb the map pack for nearby searches and reach the top three.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/online-presence/google-business-profile"><h4>Google Business Profile</h4><p>The single biggest lever in local search, kept complete and active.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/online-presence/reviews-reputation"><h4>Reviews & Reputation</h4><p>A steady, ethical flow of reviews that ranks and converts.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/online-presence/personal-branding"><h4>Personal Branding</h4><p>A clear identity so the right patients choose you.</p><span className="related-arrow">&rarr;</span></Link><Link className="related-card" href="/online-presence/social-media"><h4>Social Media</h4><p>Stay visible and trusted between visits, without it taking over.</p><span className="related-arrow">&rarr;</span></Link></div></div></section><section className="section"><div className="container section-narrow"><h2>Why everything in one place</h2><p className="prose">You did not train for years to spend your evenings on reminder texts, review requests, and a website that never quite happened. When your booking, records, website, reviews, and recall all live in one place and talk to each other, the busywork disappears and your practice grows quietly in the background.</p><ul className="point-list"><li><strong>One login, one bill.</strong> No stitching together five apps that do not share your data.</li><li><strong>Nothing slips.</strong> Every booking triggers a reminder, every visit earns a review, every lapsed patient gets a nudge.</li><li><strong>You stay in control.</strong> Your patients, your website, and your reviews are yours, on your own domain.</li><li><strong>Or hand it over.</strong> On the Done-For-You plan, we run the whole growth side for you.</li></ul></div></section><section className="section section-cta"><div className="container"><h2>Build an online presence that fills your calendar</h2><p>Start free today. We run your online presence so you can run your practice.</p><div className="hero-ctas"><a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a className="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section><section className="section section-faq"><div className="container"><h2>Frequently asked questions</h2><div className="faq-list"><details className="faq-item"><summary>What is online presence for a clinic?</summary><div className="faq-answer">It is everything that decides whether patients find and trust you online: your website, local SEO, Google profile, reviews, branding, and social media.</div></details><details className="faq-item"><summary>Which lever matters most?</summary><div className="faq-answer">Being found, through a complete Google profile and a real website, followed closely by reviews, which decide who patients choose.</div></details><details className="faq-item"><summary>Do you handle it for me?</summary><div className="faq-answer">Yes. Clinexy automates the repetitive work, and the Done-For-You plan hands the whole thing to a growth manager.</div></details><details className="faq-item"><summary>How long until I rank locally?</summary><div className="faq-answer">First movement in 4 to 8 weeks, with top-three local ranking typically over 6 to 12 months.</div></details><details className="faq-item"><summary>Does this help with AI search too?</summary><div className="faq-answer">Yes. The same clean listings, reviews, and structured pages are what ChatGPT, Gemini, and Google AI Overviews read.</div></details><details className="faq-item"><summary>Is it included in the plan?</summary><div className="faq-answer">Yes. Your full online presence is part of the subscription.</div></details></div></div></section>
    </>
  );
}

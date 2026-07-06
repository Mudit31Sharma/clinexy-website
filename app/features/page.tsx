import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features: Booking, Telehealth, Website, SEO & Reviews",
  description:
    "Explore every Clinexy feature for solo healthcare professionals: online booking, telehealth, patient records, billing, a website builder, local SEO, reviews, and branding.",
  alternates: { canonical: "https://www.clinexy.com/features" },
};

const faqs = [
  {
    q: "What features does Clinexy include?",
    a: "Online booking, telehealth, patient records, billing, reminders, and a patient portal on the operations side, plus a website builder, local SEO, Google profile, automated reviews, branding, and social on the growth side.",
  },
  {
    q: "Is everything included in one plan?",
    a: "Yes. One subscription covers operations and growth, with no per-appointment commissions and no paid add-ons.",
  },
  {
    q: "Do I have to use every feature?",
    a: "No. Turn on what you need now and add more later; the platform adapts to how you work.",
  },
  {
    q: "Will it bring me new patients?",
    a: "Yes. The website, local SEO, and review tools are built to get you found and chosen, not just to manage the patients you already have.",
  },
  {
    q: "How long does setup take?",
    a: "Most practices are live in a day, including a branded website and your data import.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. Encryption at rest and in transit, with workflows aligned to HIPAA, GDPR, PDPA, and DPDP.",
  },
];

const operationsFeatures = [
  {
    href: "/features/online-booking",
    title: "Online Booking",
    desc: "Patients book 24/7 on your branded link, with calendar sync and no double-bookings.",
  },
  {
    href: "/features/appointments-reminders",
    title: "Appointments & Reminders",
    desc: "A 3-touch reminder sequence that takes your no-shows under 10 percent.",
  },
  {
    href: "/features/whatsapp-reminders",
    title: "WhatsApp Reminders",
    desc: "Reach patients where they actually read, with one-tap reschedule.",
  },
  {
    href: "/features/telehealth",
    title: "Telehealth",
    desc: "Secure video visits with notes and prescriptions on one record.",
  },
  {
    href: "/features/teleconsultation-prescriptions",
    title: "Teleconsultation & Prescriptions",
    desc: "Consult by video and send a branded digital prescription in minutes.",
  },
  {
    href: "/features/patient-management",
    title: "Patient Management",
    desc: "One encrypted record per patient, shared across your whole practice.",
  },
  {
    href: "/features/billing",
    title: "Billing",
    desc: "Invoices, packages, and insurance superbills, with no commissions.",
  },
  {
    href: "/features/client-portal",
    title: "Patient Portal",
    desc: "Self-service booking, forms, and messages, so your phone rings less.",
  },
  {
    href: "/features/ai-appointment-assistant",
    title: "Smart Appointment Assistant",
    desc: "Answers booking questions and schedules visits around the clock.",
  },
  {
    href: "/features/ai-patient-engagement",
    title: "Patient Engagement",
    desc: "Keep patients close between visits with timely, useful check-ins.",
  },
  {
    href: "/features/patient-followup-system",
    title: "Patient Follow-Up System",
    desc: "Automated recall that brings lapsed patients back when they are due.",
  },
];

const growthFeatures = [
  {
    href: "/features/website-builder",
    title: "Website Builder",
    desc: "A branded website on your own domain, live in about 30 minutes.",
  },
  {
    href: "/features/clinic-website-builder",
    title: "Clinic Website Builder",
    desc: "A full clinic site with services, hours, team, and booking built in.",
  },
  {
    href: "/features/doctor-website",
    title: "Doctor Website",
    desc: "A personal site built around you, so patients choose you, not a listing.",
  },
  {
    href: "/features/local-seo",
    title: "Local SEO Tools",
    desc: "Climb the map pack for searches like your specialty plus your city.",
  },
  {
    href: "/features/doctor-seo-tools",
    title: "SEO Tools",
    desc: "Rank for the conditions and treatments your patients actually search.",
  },
  {
    href: "/features/google-business-profile",
    title: "Google Business Profile",
    desc: "Kept complete, current, and in sync to win the local map pack.",
  },
  {
    href: "/features/reviews-reputation",
    title: "Reviews & Reputation",
    desc: "Automated, ethical review requests that lift your rankings and win bookings.",
  },
  {
    href: "/features/google-review-automation",
    title: "Google Review Automation",
    desc: "A one-tap review request after every visit, on autopilot.",
  },
  {
    href: "/features/doctor-branding-growth",
    title: "Doctor Branding & Growth",
    desc: "Build the personal authority that compounds into steady growth.",
  },
];

export default function FeaturesPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.clinexy.com/features" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Features: Booking, Telehealth, Website, SEO & Reviews",
    "description": "Explore every Clinexy feature for solo healthcare professionals: online booking, telehealth, patient records, billing, a website builder, local SEO, reviews, and branding.",
    "url": "https://www.clinexy.com/features"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Features</span>
            <h1>Every feature your solo practice needs, in one place</h1>
            <p className="hero-sub">
              From the booking that fills your calendar to the website, SEO, and reviews that get you found,
              every tool you need to run and grow your practice lives here, on one platform.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="features-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="features-demo">
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
                alt="Features for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>One platform</span>
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
          <span className="crumb-current">Features</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy brings every tool a solo practice needs into one platform. On the operations side you get online booking,
            telehealth, patient records, billing, reminders, and a patient portal. On the growth side you get a website on your
            own domain, local SEO, a Google profile, automated reviews, branding, and social. It is one subscription, so your
            booking and your marketing finally work together.
          </p>
        </div>
      </aside>

      {/* What Clinexy does */}
      <section className="section">
        <div className="container">
          <h2>What Clinexy does for your practice</h2>
          <p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3>Get found</h3>
              <p>A website on your own domain, local SEO, and a Google profile that climbs the map pack, so the right patients find you.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <h3>Get chosen</h3>
              <p>Automated reviews, a warm personal brand, and social content that build the trust that wins the booking.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Get booked</h3>
              <p>24/7 online booking with smart reminders and recall, so your calendar fills and far fewer slots go empty.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <h3>Focus on care</h3>
              <p>You handle the medicine. We handle the marketing and the admin, automatically, from one calm dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="section">
        <div className="container">
          <h2>Operations: run your day</h2>
          <p className="lead">The tools that take the admin off your plate, so your time goes to patients.</p>
          <div className="related-grid">
            {operationsFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Grid */}
      <section className="section">
        <div className="container">
          <h2>Growth: bring patients in</h2>
          <p className="lead">The online presence that gets you found, chosen, and rebooked, handled for you.</p>
          <div className="related-grid">
            {growthFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why everything in one place */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why everything in one place</h2>
          <p className="prose">
            You did not train for years to spend your evenings on reminder texts, review requests, and a website that never quite happened.
            When your booking, records, website, reviews, and recall all live in one place and talk to each other, the busywork disappears
            and your practice grows quietly in the background.
          </p>
          <ul className="point-list">
            <li>
              <strong>One login, one bill.</strong> No stitching together five apps that do not share your data.
            </li>
            <li>
              <strong>Nothing slips.</strong> Every booking triggers a reminder, every visit earns a review, every lapsed patient gets a nudge.
            </li>
            <li>
              <strong>You stay in control.</strong> Your patients, your website, and your reviews are yours, on your own domain.
            </li>
            <li>
              <strong>Or hand it over.</strong> On the Done-For-You plan, we run the whole growth side for you.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="See it all working for your practice"
        subtext="Start free today. Every feature, one subscription, set up in a day."
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

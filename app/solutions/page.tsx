import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Solutions by Specialty for Solo Practitioners | Clinexy",
  description:
    "Clinexy is tailored to your specialty, from doctors and dentists to therapists, physios, and wellness practitioners. See how the platform fits the way you work.",
  alternates: { canonical: "https://www.clinexy.com/solutions" },
};

const specialties = [
  {
    category: "Medical",
    items: [
      { label: "Solo Doctors", href: "/solutions/solo-doctors", desc: "Run and grow a one-doctor practice from one dashboard." },
      { label: "General Physicians", href: "/solutions/general-physicians", desc: "Booking, recall, and reviews built for a busy family-medicine list." },
      { label: "Dentists", href: "/solutions/dentists", desc: "Automate hygiene recall, fill the chair, and win the local search." },
      { label: "Dermatologists", href: "/solutions/dermatologists", desc: "Manage medical and cosmetic work, and fill consults." },
      { label: "Pediatricians", href: "/solutions/pediatricians", desc: "24/7 booking parents use and reliable vaccination recall." },
      { label: "Gynecologists", href: "/solutions/gynecologists", desc: "Discreet booking and private screening recall." },
      { label: "Psychiatrists", href: "/solutions/psychiatrists", desc: "Telepsychiatry, discreet booking, and medication-review recall." },
      { label: "Orthopedics", href: "/solutions/orthopedics", desc: "Coordinate the referral-to-rehab pathway and grow self-pay." },
      { label: "ENT Specialists", href: "/solutions/ent-specialists", desc: "Absorb seasonal demand and keep recalls on time." },
      { label: "Ophthalmologists", href: "/solutions/ophthalmologists", desc: "High-volume booking with eye-check recall and refractive growth." },
      { label: "Cardiologists", href: "/solutions/cardiologists", desc: "Keep long-term follow-up and diagnostics on schedule." },
    ],
  },
  {
    category: "Therapy & holistic",
    items: [
      { label: "Psychologists", href: "/solutions/psychologists", desc: "Assessment, therapy, and ethical reviews in one place." },
      { label: "Therapists", href: "/solutions/therapists", desc: "Fill your caseload, cut no-shows, and build a warm presence." },
      { label: "Physiotherapists", href: "/solutions/physiotherapists", desc: "Packages, plan reminders, and a full diary." },
      { label: "Chiropractors", href: "/solutions/chiropractors", desc: "Care plans, recurring visits, and steady reviews." },
      { label: "Nutritionists", href: "/solutions/nutritionists", desc: "Programs, online consults, and adherence that lasts." },
      { label: "Ayurveda Doctors", href: "/solutions/ayurveda-doctors", desc: "Build credibility and reach distant and diaspora patients." },
      { label: "Homeopathy Doctors", href: "/solutions/homeopathy-doctors", desc: "Repeat-visit recall and a trusted online presence." },
      { label: "Alternative Therapy", href: "/solutions/alternative-therapy", desc: "Booking, packages, and trust for holistic practices." },
    ],
  },
  {
    category: "Aesthetic & wellness",
    items: [
      { label: "Cosmetic Clinics", href: "/solutions/cosmetic-clinics", desc: "Fill consults and manage cash-pay demand." },
      { label: "Aesthetic Clinics", href: "/solutions/aesthetic-clinics", desc: "Memberships, recalls, and recurring revenue." },
      { label: "IVF Clinics", href: "/solutions/ivf-clinics", desc: "Coordinate sensitive, precisely-timed fertility journeys." },
      { label: "Fitness Trainers", href: "/solutions/fitness-trainers", desc: "Packages, online coaching, and renewals." },
      { label: "Yoga Instructors", href: "/solutions/yoga-instructors", desc: "Class booking, memberships, and online classes." },
      { label: "Personal Coaches", href: "/solutions/personal-coaches", desc: "Programs, online sessions, and accountability." },
    ],
  },
];

const faqs = [
  {
    q: "Is Clinexy right for my specialty?",
    a: "Almost certainly. It serves solo doctors, dentists, therapists, allied health, and wellness practitioners, with workflows tuned to each. Find your field above.",
  },
  {
    q: "How is it tailored to each specialty?",
    a: "The booking types, recall timing, review approach, and growth tools adapt to how your patients find you and how your care actually works.",
  },
  {
    q: "I run a niche practice. Will it still fit?",
    a: "Yes. The platform is flexible, and the closest specialty page shows the pattern; you can adjust services, timing, and language to fit.",
  },
  {
    q: "Does it handle ethical reviews for therapy?",
    a: "Yes. Sensitive fields use private feedback first, inviting only comfortable patients to post publicly.",
  },
  {
    q: "Can I switch from my current tool?",
    a: "Yes. Guided, same-day migration from common systems is included free.",
  },
  {
    q: "Is it suitable for a one-person practice?",
    a: "Yes. It is built specifically for solo practitioners, not scaled down from hospital software.",
  },
];

export default function SolutionsPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.clinexy.com/solutions" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Solutions by Specialty for Solo Practitioners",
    "description": "Clinexy is tailored to your specialty, from doctors and dentists to therapists, physios, and wellness practitioners. See how the platform fits the way you work.",
    "url": "https://www.clinexy.com/solutions"
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
            <span className="tag">Solutions</span>
            <h1>Built for your specialty, whatever you practise</h1>
            <p className="hero-sub">
              The way you book, follow up, and grow is different for every field.
              Find your specialty below and see Clinexy set up for the exact way you practise.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="solutions-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="solutions-demo">
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
                alt="Solutions for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Your specialty</span>
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
          <span className="crumb-current">Solutions</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy adapts to your specialty. Whether you are a solo doctor, dentist, therapist, physiotherapist,
            dermatologist, or a wellness practitioner, the workflows, reminders, reviews, and growth tools are tuned
            to how your patients find you and how your practice runs. Find your field below to see the platform set up for you.
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

      {/* Specialties Lists */}
      {specialties.map((cat, ci) => (
        <section key={ci} className="section">
          <div className="container">
            <h2>{cat.category}</h2>
            <div className="related-grid">
              {cat.items.map((item, ii) => (
                <Link key={ii} href={item.href} className="related-card" style={{ textDecoration: "none" }}>
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                  <span className="related-arrow">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

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
        heading="See Clinexy set up for your specialty"
        subtext="Start free today. Workflows tuned to the way you practise."
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

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Clinexy: Patient Growth & Practice Management Platform",
  description:
    "The all-in-one patient growth and practice management platform for solo healthcare professionals. Booking, telehealth, website, local SEO, and reviews in one plan. Free trial.",
  alternates: { canonical: "https://www.clinexy.com/" },
};

const challenges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 L21 10"/><path d="M8 3 L8 7"/><path d="M16 3 L16 7"/>
      </svg>
    ),
    title: "Patient acquisition",
    desc: "New patients are getting harder to win. Most solo practices grow by 5 to 8 new patients a month when the channels could deliver 30 or more.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/>
      </svg>
    ),
    title: "Online visibility",
    desc: "Patients Google your specialty in your city. If you are not in the top three local results, you do not exist for them.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>
      </svg>
    ),
    title: "Reviews",
    desc: "You are a good practitioner. Most patients would happily leave a review. Most never get asked.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Scheduling",
    desc: "Phone tag, forgotten bookings, and a 25 to 35 percent no-show rate that nobody tracks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12 L22 12"/>
      </svg>
    ),
    title: "Retention",
    desc: "Half your patients are not coming back. Without a recall system, you are on a treadmill.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z"/>
      </svg>
    ),
    title: "Administrative burden",
    desc: "6 to 10 hours a week on admin that could be automated away.",
  },
];

const stats = [
  { num: "<10%", label: "no-show rate, down from 25 to 35 percent", src: "Clinexy practice data" },
  { num: "50+", label: "new reviews within 90 days of automation", src: "Clinexy practice data" },
  { num: "1 day", label: "a week handed back from automated admin", src: "Clinexy practice data" },
  { num: "Top 3", label: "local ranking by 6 to 12 months", src: "Clinexy practice data" },
];

const growthFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    title: "Local SEO",
    href: "/online-presence/local-seo",
    desc: 'Rank for searches like "[specialty] near me" and climb into the map pack.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Google Business Profile",
    href: "/features/google-business-profile",
    desc: "Hours, services, photos, and posts kept current and in sync automatically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>
      </svg>
    ),
    title: "Reviews",
    href: "/online-presence/reviews-reputation",
    desc: "An automated request with a one-tap link, sent at the right moment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Personal branding",
    href: "/online-presence/personal-branding",
    desc: "An about page, your credentials, your story, and patient testimonials.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    ),
    title: "Social media",
    href: "/online-presence/social-media",
    desc: "Templates, a scheduler, and specialty-aware content that stays on brand.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-6"/>
      </svg>
    ),
    title: "Patient growth",
    href: "/patient-growth/get-more-patients",
    desc: "The strategy layer that ties booking, reviews, and recall into steady growth.",
  },
];

const lifecycle = [
  { step: "Found", desc: "A patient searches your specialty nearby and sees you in the map pack, thanks to local SEO and recent reviews." },
  { step: "Chosen", desc: "They land on your branded website, read your story and credentials, and trust what they see." },
  { step: "Booked", desc: "They book in a few taps on your own link, and a 3-touch reminder sequence begins." },
  { step: "Seen", desc: "You meet in person or by video, with their full history and notes in one record." },
  { step: "Paid", desc: "The invoice is ready in your local currency, with no separate billing tool to open." },
  { step: "Followed up", desc: "A review request goes out automatically, and recall brings them back when they are due." },
  { step: "Referred", desc: "A happy patient leaves a review and tells a friend, which feeds the next patient's search." },
];

const faqs = [
  { q: "What is Clinexy?", a: "All-in-one patient growth and practice management platform for solo healthcare professionals. Bookings, telehealth, billing, AI notes, website builder, reviews, local SEO, personal branding. One subscription." },
  { q: "Who is Clinexy for?", a: "Solo doctors, dentists, therapists, naturopaths, chiropractors, physiotherapists, ophthalmologists, ENT, Ayurveda, homeopaths, nutritionists, coaches. Anyone running a 1-practitioner practice." },
  { q: "How is Clinexy different from SimplePractice, Cliniko, or Jane?", a: "They handle bookings and records well. Clinexy adds the marketing layer (website, reviews, local SEO, branding, social) in the same subscription instead of as add-ons." },
  { q: "How does Clinexy reduce no-shows?", a: "A 3-touch reminder sequence with one-tap reschedule. SMS, WhatsApp, or email. Practices see no-shows drop from 25–35% to under 10% within 90 days." },
  { q: "Does Clinexy include a website builder?", a: "Yes. Healthcare-specific templates, schema markup, online booking embedded, mobile speed 90+. Setup in 30 minutes." },
  { q: "Is Clinexy HIPAA-compliant?", a: "HIPAA-aligned workflows globally. BAA on Done-For-You tier. Also GDPR, PIPEDA, Privacy Act, PDPA, DPDP." },
  { q: "How much does Clinexy cost?", a: "₹999 per month in India, $99 per month globally. No commissions. No add-ons. Cancel anytime." },
  { q: "How long does setup take?", a: "30 minutes for core setup. 2 hours including branded website." },
];

export default function HomePage() {
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

  const jsonLdWeb = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Clinexy",
    "url": "https://www.clinexy.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.clinexy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Clinexy",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "offers": [
      {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "USD",
        "description": "Global monthly plan"
      },
      {
        "@type": "Offer",
        "price": "999",
        "priceCurrency": "INR",
        "description": "India monthly plan"
      }
    ],
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

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Clinexy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-in-one patient growth and practice management platform for solo healthcare professionals. Bookings, telehealth, billing, AI notes, website builder, reviews, local SEO, personal branding. One subscription."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Clinexy for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo doctors, dentists, therapists, naturopaths, chiropractors, physiotherapists, ophthalmologists, ENT, Ayurveda, homeopaths, nutritionists, coaches. Anyone running a 1-practitioner practice."
        }
      },
      {
        "@type": "Question",
        "name": "How is Clinexy different from SimplePractice, Cliniko, or Jane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They handle bookings and records well. Clinexy adds the marketing layer (website, reviews, local SEO, branding, social) in the same subscription instead of as add-ons."
        }
      },
      {
        "@type": "Question",
        "name": "How does Clinexy reduce no-shows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 3-touch reminder sequence with one-tap reschedule. SMS, WhatsApp, or email. Practices see no-shows drop from 25-35% to under 10% within 90 days."
        }
      },
      {
        "@type": "Question",
        "name": "Does Clinexy include a website builder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Healthcare-specific templates, schema markup, online booking embedded, mobile speed 90+. Setup in 30 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Clinexy HIPAA-compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HIPAA-aligned workflows globally. BAA on Done-For-You tier. Also GDPR, PIPEDA, Privacy Act, PDPA, DPDP."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Clinexy cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "999 rupees per month in India, 99 dollars per month globally. Optional 499 dollar Done-For-You tier. No commissions. No add-ons. Cancel anytime."
        }
      },
      {
        "@type": "Question",
        "name": "How long does setup take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30 minutes for core setup. 2 hours including branded website."
        }
      },
      {
        "@type": "Question",
        "name": "Can I import my existing patient list?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. CSV import in 10 minutes. Guided migration from Practo, SimplePractice, Cliniko, Jane, MocDoc included."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. No contracts. Data exportable for 30 days after cancellation. Free 14-day trial requires no credit card."
        }
      },
      {
        "@type": "Question",
        "name": "What support is included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24/7 chat support. Email under 1 business day. Done-For-You customers get a dedicated growth manager."
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWeb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Build. Brand. Grow.</span>
            <h1>More patients. Fewer no-shows. More time for care.</h1>
            <p className="hero-sub">
              Clinexy runs your online presence and automates your bookings, so solo healthcare professionals grow their practice without the marketing and admin taking over.
            </p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li><strong>Get found and booked.</strong> A website, local SEO, reviews, and 24/7 online booking.</li>
              <li><strong>Cut no-shows and busywork.</strong> Automated reminders, recall, and patient records.</li>
              <li><strong>Focus on patients.</strong> We run the marketing and the admin for you.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="hero-start-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="hero-book-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Setup in 30 minutes</p>
          </div>

          <div className="hero-image">
            <div className="hero-photo-wrap" style={{ position: 'relative' }}>
              <img
                className="hero-photo"
                src="/assets/img/growth.svg"
                alt="Solo healthcare professional running their practice on Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '16px' }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot"/>
                <span>One subscription</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Quick Answer ── */}
      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is an all-in-one patient growth and practice management platform built for solo healthcare professionals.
            It combines appointment booking, telehealth, billing, assisted notes, patient records, and a client portal with the patient
            acquisition tools a private practice needs: a website builder, local SEO, Google review automation, and personal branding.
            One subscription replaces the four or five tools most solo clinics juggle.
          </p>
        </div>
      </aside>

      {/* ── What is Clinexy ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>What is Clinexy?</h2>
          <div className="definition-box">
            <div className="dl">Definition</div>
            <p>
              Most software does half the job. It either runs your practice or helps your marketing, never both.
              Clinexy does both: booking, records, telehealth, and billing on one side, and a website, local SEO, reviews, and
              branding on the other, in one subscription that costs less than the tools it replaces.
            </p>
          </div>
          <p className="prose">
            If you are a solo practitioner, you are the clinician, the receptionist, and the marketer. The tools built for hospitals
            are too heavy, and the tools built for bookings ignore growth entirely. So you end up paying for several apps that do not
            talk to each other.
          </p>
          <p className="prose">Clinexy is the single platform underneath all of it, so the work flows from one place:</p>
          <ul className="point-list dark">
            <li><strong>Operations</strong> that run the day: <Link href="/features/online-booking">booking</Link>, <Link href="/features/telehealth">telehealth</Link>, <Link href="/features/patient-management">records</Link>, <Link href="/features/billing">billing</Link>, and notes.</li>
            <li><strong>Growth</strong> that fills the calendar: <Link href="/features/website-builder">website</Link>, <Link href="/online-presence/local-seo">local SEO</Link>, reviews, and branding.</li>
            <li><strong>Automation</strong> that does the repetitive parts: reminders, recall, and review requests.</li>
          </ul>
          <p className="prose">
            The result is calmer days and a fuller calendar. You spend less time switching between apps and more time with patients,
            while the growth work runs quietly in the background.
          </p>
        </div>
      </section>

      {/* ── Six challenges ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Six challenges every solo healthcare professional faces</h2>
          <p className="lead" style={{ marginBottom: 0 }}>
            You trained to treat patients, not to chase no-shows, reviews, and a half-finished website. Yet that busywork is
            exactly what quietly caps a solo practice. Here are the six leaks, and how each one closes.
          </p>
          <div className="cards-grid">
            {challenges.map((c, i) => (
              <div key={i} className="card">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hidden Cost of Scattered Tools ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The hidden cost of scattered tools</h2>
          <p className="prose">The five-app setup most solo clinics inherit is expensive in ways that never show up on a single invoice.</p>
          <ul className="x-list">
            <li><strong>Money.</strong> Five subscriptions usually cost more than one platform that does the same jobs.</li>
            <li><strong>Time.</strong> Every handoff between apps is re-typing, reconciling, and checking that nothing was missed.</li>
            <li><strong>Lost patients.</strong> A booking that does not trigger a reminder becomes a no-show. A visit that never asks for a review becomes a missed five stars.</li>
            <li><strong>Mental load.</strong> Five logins and five dashboards is a tax on attention you could spend on patients.</li>
          </ul>
          <p className="prose">One platform removes the gaps between tools, which is where most of the leakage happens. That is the idea behind Clinexy, and the reason a single subscription tends to pay for itself within the first month.</p>
        </div>
      </section>

      {/* ── Practice Growth Ecosystem ── */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <div className="split-text">
              <h2>The practice growth ecosystem, with Clinexy at the centre</h2>
              <p>A modern solo practice runs on seven systems working together. Most practitioners try to stitch them from different vendors. Clinexy is the single platform that connects them.</p>
              <ul className="point-list dark">
                <li><strong>Website</strong> on your own domain, with booking built in.</li>
                <li><strong>SEO</strong> for local and AI search, so patients find you.</li>
                <li><strong>Reviews</strong> requested automatically and answered.</li>
                <li><strong>Social media</strong> with healthcare-friendly templates.</li>
                <li><strong>Branding</strong> that explains your story and authority.</li>
                <li><strong>Scheduling</strong> with smart bookings and reminders.</li>
                <li><strong>Retention</strong> through recall, follow-ups, and a patient portal.</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="diagram">
                <svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter,sans-serif">
                  <line x1="220" y1="180" x2="220" y2="60" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="330" y2="100" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="365" y2="200" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="320" y2="290" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="120" y2="290" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="75" y2="200" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="220" y1="180" x2="110" y2="100" stroke="#CBD5E1" strokeWidth="2" />
                  <circle cx="220" cy="180" r="46" fill="#1F6AE1" />
                  <text x="220" y="178" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">Clinexy</text>
                  <text x="220" y="194" fontSize="9" fill="#DCE7FB" textAnchor="middle">one platform</text>
                  <g fontSize="11" fontWeight="600" fill="#1F2937" textAnchor="middle">
                    <circle cx="220" cy="48" r="30" fill="#EAF0FD" stroke="#1F6AE1" />
                    <text x="220" y="52">Website</text>
                    <circle cx="345" cy="96" r="30" fill="#EAF0FD" stroke="#1F6AE1" />
                    <text x="345" y="100">SEO</text>
                    <circle cx="382" cy="205" r="30" fill="#EAF0FD" stroke="#1F6AE1" />
                    <text x="382" y="209">Reviews</text>
                    <circle cx="330" cy="300" r="30" fill="#E8F7EF" stroke="#2BB673" />
                    <text x="330" y="304">Social</text>
                    <circle cx="110" cy="300" r="30" fill="#E8F7EF" stroke="#2BB673" />
                    <text x="110" y="304">Brand</text>
                    <circle cx="58" cy="205" r="30" fill="#EAF0FD" stroke="#1F6AE1" />
                    <text x="58" y="201">Sched-</text>
                    <text x="58" y="213">uling</text>
                    <circle cx="95" cy="96" r="30" fill="#E8F7EF" stroke="#2BB673" />
                    <text x="95" y="100">Retain</text>
                  </g>
                </svg>
              </div>
              <p className="figure-caption">Seven growth systems, one platform, instead of seven vendors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eight challenges ── */}
      <section className="section">
        <div className="container">
          <h2>Eight challenges. Eight solutions. Eight outcomes</h2>
          <p className="lead">The eight workflows Clinexy automates for solo practice, each one a challenge turned into a result.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10 L21 10" /><path d="M8 3 L8 7" /><path d="M16 3 L16 7" />
                </svg>
              </div>
              <h3>No-shows at 30%</h3>
              <p>A 3-touch smart reminder sequence cuts no-shows by 30 to 40 percent within 90 days.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" />
                </svg>
              </div>
              <h3>Invisible on Google</h3>
              <p>Website, profile sync, local SEO, and reviews lift you to top-three local rankings in 6 to 12 months.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <h3>8 reviews in 5 years</h3>
              <p>An automated request two hours after each visit gathers 50 or more reviews in 90 days.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Records everywhere</h3>
              <p>Encrypted patient profiles and a portal save 5 to 10 minutes per visit.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12 L22 12" />
                </svg>
              </div>
              <h3>Patients lost between visits</h3>
              <p>Automated 6-month recall brings 38 percent of inactive patients back.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z" />
                </svg>
              </div>
              <h3>Stuck on directory commissions</h3>
              <p>Your own branded site means patient ownership and no commission on each booking.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M7 14 L11 10 L15 13 L21 7" />
                </svg>
              </div>
              <h3>6 hours a week on admin</h3>
              <p>Automation across the stack hands back a full working day every week.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8 L16 12 L22 16Z" />
                </svg>
              </div>
              <h3>No marketing skills</h3>
              <p>Pre-built workflows and a Done-For-You tier grow the practice without you learning marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section">
        <div className="container">
          <h2>Real numbers from solo practices</h2>
          <p className="lead">What changes in the first 90 days on Clinexy.</p>
          <div className="stat-band">
            {stats.map((s, i) => (
              <div key={i} className="stat good">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
                <div className="src">{s.src}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── From first search to loyal patient ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>From first search to loyal patient</h2>
          <p className="prose">
            The real value of one platform is that it covers the whole patient lifecycle, not just one moment in it. Here is how a
            new patient moves through Clinexy, and how each step feeds the next.
          </p>
          <ul className="point-list dark">
            {lifecycle.map((l, i) => (
              <li key={i}><strong>{l.step}.</strong> {l.desc}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Platform Overview: Operations ── */}
      <section className="section">
        <div className="container">
          <div className="split-grid media-left">
            <div className="split-text">
              <h2>Platform overview: your operations side</h2>
              <p>Six core features that make the day-to-day run smoothly, all writing to one shared patient record.</p>
              <ul className="point-list dark">
                <li><strong><Link href="/features/online-booking">Online booking</Link>.</strong> A branded link with real-time availability and calendar sync.</li>
                <li><strong><Link href="/features/telehealth">Telehealth</Link>.</strong> Secure video visits with notes and prescriptions in one record.</li>
                <li><strong><Link href="/features/billing">Billing</Link>.</strong> Invoices in your currency, card and UPI payments, and superbills.</li>
                <li><strong>Clinical notes.</strong> Assisted drafting that saves 15 to 25 minutes a day.</li>
                <li><strong><Link href="/features/website-builder">Website builder</Link>.</strong> Healthcare templates with schema, live in 30 minutes.</li>
                <li><strong><Link href="/features/client-portal">Client portal</Link>.</strong> Patient self-service for appointments, records, and messages.</li>
              </ul>
            </div>
            <div className="split-media">
              <div className="mockup">
                <div className="bar"><i></i><i></i><i></i><span>clinexy.com / calendar</span></div>
                <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter,sans-serif" style={{ display: 'block', width: '100%' }}>
                  <rect width="460" height="300" fill="#F8FAFC"/>
                  <text x="24" y="38" fontSize="14" fontWeight="700" fill="#1F2937">This week</text>
                  <g fontSize="9" fill="#6B7280" textAnchor="middle"><text x="92" y="62">Mon</text><text x="170" y="62">Tue</text><text x="248" y="62">Wed</text><text x="326" y="62">Thu</text><text x="404" y="62">Fri</text></g>
                  <rect x="60" y="72" width="64" height="34" rx="6" fill="#EAF0FD"/><text x="92" y="93" fontSize="9" fill="#1F6AE1" textAnchor="middle">9:00 Riya</text>
                  <rect x="138" y="72" width="64" height="34" rx="6" fill="#E8F7EF"/><text x="170" y="93" fontSize="9" fill="#239E62" textAnchor="middle">Video</text>
                  <rect x="294" y="72" width="64" height="34" rx="6" fill="#EAF0FD"/><text x="326" y="93" fontSize="9" fill="#1F6AE1" textAnchor="middle">10:30</text>
                  <rect x="60" y="112" width="64" height="34" rx="6" fill="#EAF0FD"/><text x="92" y="133" fontSize="9" fill="#1F6AE1" textAnchor="middle">11:00</text>
                  <rect x="216" y="112" width="64" height="34" rx="6" fill="#E8F7EF"/><text x="248" y="133" fontSize="9" fill="#239E62" textAnchor="middle">Booked</text>
                  <rect x="372" y="112" width="64" height="34" rx="6" fill="#EAF0FD"/><text x="404" y="133" fontSize="9" fill="#1F6AE1" textAnchor="middle">2:00</text>
                  <rect x="24" y="166" width="412" height="50" rx="9" fill="#fff" stroke="#E5E7EB"/><text x="40" y="188" fontSize="11" fontWeight="700" fill="#1F2937">Reminders</text><text x="40" y="205" fontSize="10" fill="#6B7280">3-touch sequence sent to 14 patients</text><rect x="356" y="180" width="64" height="22" rx="11" fill="#E8F7EF"/><text x="388" y="195" fontSize="9" fill="#239E62" textAnchor="middle" fontWeight="600">Active</text>
                  <rect x="24" y="226" width="200" height="50" rx="9" fill="#EAF0FD"/><text x="40" y="248" fontSize="11" fontWeight="700" fill="#1F6AE1">Today</text><text x="40" y="265" fontSize="10" fill="#1F2937">14 appointments, 0 gaps</text>
                  <rect x="236" y="226" width="200" height="50" rx="9" fill="#E8F7EF"/><text x="252" y="248" fontSize="11" fontWeight="700" fill="#239E62">No-shows</text><text x="252" y="265" fontSize="10" fill="#1F2937">9.2% this month</text>
                </svg>
              </div>
              <p className="figure-caption">Bookings, reminders, and telehealth on one calendar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Online presence suite ── */}
      <section className="section">
        <div className="container">
          <h2>Online presence suite: your growth side</h2>
          <p className="lead">Five tools that bring patients in, all included in the base subscription instead of sold as add-ons.</p>
          <div className="cards-grid">
            {growthFeatures.map((f, i) => (
              <div key={i} className="card">
                <div className="card-icon">{f.icon}</div>
                <h3><Link href={f.href}>{f.title}</Link></h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner (Inline) ── */}
      <CTABanner
        heading="Ready to see this for your practice?"
        subtext="Start free today. The whole platform, set up in 30 minutes."
        variant="inline"
      />

      {/* ── How Clinexy helps ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>How Clinexy helps, in one line each</h2>
          <p className="prose">Every part of the platform exists to remove a job from your plate or bring a patient to your door.</p>
          <ul className="point-list dark">
            <li><strong>Fewer no-shows</strong> through reminders, recovering 15 to 18 thousand dollars a year for a typical practice.</li>
            <li><strong>Hours back</strong> as automation handles reminders, recall, and review requests.</li>
            <li><strong>A real online identity</strong> with a branded site and a steady stream of reviews.</li>
            <li><strong>Patient ownership</strong>, because your patients and data are yours, not a directory's.</li>
            <li><strong>One bill, not five</strong>, with lower total cost and far less to manage.</li>
          </ul>
        </div>
      </section>

      {/* ── What changes ── */}
      <section className="section">
        <div className="container">
          <h2>What changes when Clinexy runs your practice</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Fewer no-shows</h3>
              <p>15 to 18 thousand dollars in recovered revenue a year.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Hours back</h3>
              <p>A full working day returned every week.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M7 14 L11 10 L15 13 L21 7" />
                </svg>
              </div>
              <h3>A waitlist, not an empty chair</h3>
              <p>A 1 to 3 week waitlist by month 12.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" /><path d="M3 21a9 9 0 0 1 18 0" />
                </svg>
              </div>
              <h3>A real online identity</h3>
              <p>A branded site and 50 or more reviews.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L20 6 V12 c0 5-3.5 9-8 10c-4.5-1-8-5-8-10V6Z" />
                </svg>
              </div>
              <h3>Patient ownership</h3>
              <p>Your patients and your data, always yours.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3>One platform, not five</h3>
              <p>Lower cost and far less vendor juggling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>Who Clinexy is for</h2>
          <p className="prose">
            Clinexy is built for one-practitioner practices, not hospitals or large groups. If you are the person patients come to
            see, and also the person who runs everything around that visit, this was made for you. The workflows adapt to each
            specialty, from a dentist chasing recalls to a therapist protecting confidentiality.
          </p>
          <ul className="point-list dark two-col">
            <li><Link href="/solutions/solo-doctors">Solo doctors and GPs</Link></li>
            <li><Link href="/solutions/dentists">Dentists</Link></li>
            <li><Link href="/solutions/therapists">Therapists and psychologists</Link></li>
            <li><Link href="/solutions/physiotherapists">Physiotherapists</Link></li>
            <li><Link href="/solutions/dermatologists">Dermatologists</Link></li>
            <li><Link href="/solutions/pediatricians">Pediatricians</Link></li>
            <li><Link href="/solutions/ayurveda-doctors">Ayurveda and homeopathy</Link></li>
            <li><Link href="/solutions/nutritionists">Nutritionists and coaches</Link></li>
          </ul>
          <p className="prose">Browse every practice type on the <Link href="/solutions">solutions overview</Link>, or see a tailored example on the <Link href="/solutions/solo-doctors">solo doctors</Link> page.</p>
        </div>
      </section>

      {/* ── Why choose Clinexy ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why solo practitioners choose Clinexy</h2>
          <p className="prose">Plenty of tools can book an appointment. Very few help a solo practice actually grow. The difference comes down to four things.</p>
          <ul className="point-list dark">
            <li><strong>Operations and growth in one subscription.</strong> Not two separate tools that have to be stitched together.</li>
            <li><strong>Built for one-practitioner practices.</strong> Not scaled down from hospital software with features you will never use.</li>
            <li><strong>You own your patients.</strong> Your website, your booking link, your reviews, always yours, not a directory's.</li>
            <li><strong>Honest pricing.</strong> One plan, no commissions, no hidden add-ons. Pause or cancel any time.</li>
          </ul>
          <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/why-clinexy" className="btn btn-ghost">See why practitioners choose Clinexy →</Link>
            <Link href="/compare" className="btn btn-ghost">Compare with other platforms →</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <h2>What solo practitioners say</h2>
          <p className="lead">Labelled composites drawn from common results across practices.</p>
          <div className="cards-grid">
            <div className="testimonial" style={{ margin: 0 }}>
              <blockquote>"I was paying for three separate tools and still felt invisible. Three months into Clinexy my reviews went from 5 to 78 and reception calls dropped 70 percent."</blockquote>
              <div className="attrib">
                <div className="avatar">EW</div>
                <div className="who">
                  <strong>Dr. Emma Wilson</strong>
                  <span>Solo GP, London</span>
                </div>
              </div>
            </div>
            <div className="testimonial" style={{ margin: 0 }}>
              <blockquote>"Four paying clients a week became 28. No ads. Total spend over 24 months was 312 dollars, the cost of the subscription."</blockquote>
              <div className="attrib">
                <div className="avatar">SB</div>
                <div className="who">
                  <strong>Sarah Brown</strong>
                  <span>Solo therapist, Vancouver</span>
                </div>
              </div>
            </div>
            <div className="testimonial" style={{ margin: 0 }}>
              <blockquote>"I paid 4,800 rupees a month to a directory and still felt invisible. Three months into Clinexy a waitlist was forming."</blockquote>
              <div className="attrib">
                <div className="avatar">PM</div>
                <div className="who">
                  <strong>Dr. Priya M.</strong>
                  <span>Solo dentist, Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted Worldwide ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Trusted by solo practices worldwide</h2>
          <p className="prose">Clinexy is used by solo doctors, dentists, therapists, and allied practitioners across more than 20 countries, from single-room clinics to growing private practices.</p>
          <div className="trust-row">
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                <path d="M20 6 9 17l-5-5" />
              </svg> HIPAA-aligned
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                <path d="M20 6 9 17l-5-5" />
              </svg> GDPR ready
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                <path d="M20 6 9 17l-5-5" />
              </svg> DPDP &amp; PDPA
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                <path d="M20 6 9 17l-5-5" />
              </svg> AES-256 encryption
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                <path d="M20 6 9 17l-5-5" />
              </svg> 24/7 support
            </span>
          </div>
          <p className="prose" style={{ marginTop: '18px' }}>
            Your data is encrypted in transit and at rest, exportable at any time, and never sold. Read more on <Link href="/security">security</Link> and <Link href="/compliance/abdm">compliance</Link>.
          </p>
        </div>
      </section>

      {/* ── Comparison snapshot ── */}
      <section className="section">
        <div className="container">
          <h2>Comparison snapshot</h2>
          <p className="lead">An honest snapshot against the tools solo practices know best. The detail lives on each <Link href="/compare">comparison page</Link>.</p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="col-clinexy">Clinexy</th>
                  <th>SimplePractice</th>
                  <th>Cliniko</th>
                  <th>Jane</th>
                  <th>Healthie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Booking and records</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                </tr>
                <tr>
                  <th scope="row">Telehealth included</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td>Tiered</td>
                  <td>Add-on</td>
                  <td><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                </tr>
                <tr>
                  <th scope="row">Website builder</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td>Basic</td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                  <td>Basic</td>
                </tr>
                <tr>
                  <th scope="row">Local SEO tools</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                </tr>
                <tr>
                  <th scope="row">Review automation</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td><span className="cross">No</span></td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <th scope="row">Personal branding</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                  <td><span className="cross">No</span></td>
                </tr>
                <tr>
                  <th scope="row">Multi-region pricing</th>
                  <td className="col-clinexy"><span className="tick">Yes</span></td>
                  <td>US-focused</td>
                  <td><span className="tick">Yes</span></td>
                  <td><span className="tick">Yes</span></td>
                  <td>US-focused</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="prose" style={{ marginTop: '18px' }}>
            See the full breakdowns: <Link href="/compare/clinexy-vs-simplepractice">vs SimplePractice</Link>, <Link href="/compare/clinexy-vs-cliniko">vs Cliniko</Link>, <Link href="/compare/clinexy-vs-jane">vs Jane</Link>, and <Link href="/compare/clinexy-vs-healthie">vs Healthie</Link>.
          </p>
          <p className="prose">
            No tool is perfect for everyone. SimplePractice is strong on US insurance, and the others are capable booking and records systems. Clinexy's edge is doing the operations well and adding the growth layer in the same plan, so a solo practice gets found and chosen, not just organised. Weigh each against your own biggest bottleneck.
          </p>
        </div>
      </section>

      {/* ── Up and running ── */}
      <section className="section">
        <div className="container">
          <h2>Up and running in an afternoon</h2>
          <p className="lead">Switching feels daunting. In practice, most clinics are live the same day.</p>
          <div className="steps">
            <div className="step">
              <h3>Import your patients</h3>
              <p>Upload a CSV in about 10 minutes, or use guided migration from Practo, SimplePractice, Cliniko, Jane, or MocDoc. A specialist checks it with you so nothing is lost.</p>
            </div>
            <div className="step">
              <h3>Turn on bookings and reminders</h3>
              <p>Set your services, hours, and the 3-touch reminder sequence. Patients can book on your branded link straight away.</p>
            </div>
            <div className="step">
              <h3>Publish your website</h3>
              <p>Pick a healthcare template, add your story and services, and go live on your own domain in about two hours.</p>
            </div>
            <div className="step">
              <h3>Switch on growth</h3>
              <p>Connect your Google profile, start automated review requests, and let local SEO begin working in the background.</p>
            </div>
          </div>
          <p className="prose" style={{ marginTop: '18px' }}>Prefer it handled for you? The Done-For-You tier sets all of this up and runs the growth work on your behalf.</p>
        </div>
      </section>

      {/* ── Simple, honest pricing ── */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Simple, honest pricing</h2>
          <p className="prose">One subscription covers operations and growth. No add-ons, no per-appointment commissions, no surprises.</p>
          <ul className="point-list dark">
            <li><strong>India:</strong> 999 rupees a month, billed monthly or yearly.</li>
            <li><strong>Global:</strong> 99 US dollars a month, billed monthly or yearly.</li>
            <li><strong>Done-For-You:</strong> 499 dollars a month, with the growth work handled for you.</li>
            <li><strong>Free trial:</strong> 14 days, no credit card, cancel anytime.</li>
          </ul>
          <p className="prose">See full regional pricing on the <Link href="/pricing/solo-doctors">pricing page</Link>.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
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

      {/* ── Summary ── */}
      <section className="section">
        <div className="container section-narrow">
          <div className="summary-box">
            <h2>Summary</h2>
            <p className="prose">Clinexy is one platform that runs a solo practice and grows it, replacing four or five disconnected tools. Key points:</p>
            <ul className="point-list dark">
              <li>Operations and growth in one subscription: booking, telehealth, records, billing, website, SEO, and reviews.</li>
              <li>Automation that cuts no-shows below 10 percent and gathers 50 or more reviews in 90 days.</li>
              <li>Top-three local rankings within 6 to 12 months from built-in SEO.</li>
              <li>Honest pricing: ₹999 or $99 a month, no commissions, cancel anytime.</li>
              <li>Built for solo doctors, dentists, therapists, and allied practitioners worldwide.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Explore Clinexy ── */}
      <section className="section section-related">
        <div className="container">
          <h2>Explore Clinexy</h2>
          <div className="related-grid">
            <Link className="related-card" href="/features/online-booking">
              <h4>Online Booking</h4>
              <p>Let patients book on your branded link 24/7, with smart reminders that cut no-shows by 30 to 40 percent.</p>
              <span className="related-arrow">&rarr;</span>
            </Link>
            <Link className="related-card" href="/solutions/solo-doctors">
              <h4>Clinexy for Solo Doctors</h4>
              <p>How a single-practitioner clinic uses Clinexy to run the day and grow the patient base.</p>
              <span className="related-arrow">&rarr;</span>
            </Link>
            <Link className="related-card" href="/guides/local-seo-for-doctors">
              <h4>Guide: Local SEO for Doctors</h4>
              <p>The step-by-step playbook for ranking top-three when patients search for your specialty nearby.</p>
              <span className="related-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <CTABanner
        heading="Ready to grow your practice?"
        subtext="Join solo healthcare professionals using Clinexy to run a calmer, better-grown practice."
      />
    </>
  );
}

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
  return (
    <>
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
            <div style={{ position: 'relative' }}>
              <div className="hero-svg-wrap">
                {/* Calendar mockup SVG */}
                <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter,sans-serif" style={{ display: 'block', width: '100%' }}>
                  <rect width="460" height="300" fill="#F8FAFC"/>
                  <text x="24" y="38" fontSize="14" fontWeight="700" fill="#1F2937">This week</text>
                  <g fontSize="9" fill="#6B7280" textAnchor="middle">
                    <text x="92" y="62">Mon</text><text x="170" y="62">Tue</text>
                    <text x="248" y="62">Wed</text><text x="326" y="62">Thu</text><text x="404" y="62">Fri</text>
                  </g>
                  <rect x="60" y="72" width="64" height="34" rx="6" fill="#EAF0FD"/>
                  <text x="92" y="93" fontSize="9" fill="#1F6AE1" textAnchor="middle">9:00 Riya</text>
                  <rect x="138" y="72" width="64" height="34" rx="6" fill="#E8F7EF"/>
                  <text x="170" y="93" fontSize="9" fill="#239E62" textAnchor="middle">Video</text>
                  <rect x="294" y="72" width="64" height="34" rx="6" fill="#EAF0FD"/>
                  <text x="326" y="93" fontSize="9" fill="#1F6AE1" textAnchor="middle">10:30</text>
                  <rect x="60" y="112" width="64" height="34" rx="6" fill="#EAF0FD"/>
                  <text x="92" y="133" fontSize="9" fill="#1F6AE1" textAnchor="middle">11:00</text>
                  <rect x="216" y="112" width="64" height="34" rx="6" fill="#E8F7EF"/>
                  <text x="248" y="133" fontSize="9" fill="#239E62" textAnchor="middle">Booked</text>
                  <rect x="372" y="112" width="64" height="34" rx="6" fill="#EAF0FD"/>
                  <text x="404" y="133" fontSize="9" fill="#1F6AE1" textAnchor="middle">2:00</text>
                  <rect x="24" y="166" width="412" height="50" rx="9" fill="#fff" stroke="#E5E7EB"/>
                  <text x="40" y="188" fontSize="11" fontWeight="700" fill="#1F2937">Reminders</text>
                  <text x="40" y="205" fontSize="10" fill="#6B7280">3-touch sequence sent to 14 patients</text>
                  <rect x="356" y="180" width="64" height="22" rx="11" fill="#E8F7EF"/>
                  <text x="388" y="195" fontSize="9" fill="#239E62" textAnchor="middle" fontWeight="600">Active</text>
                  <rect x="24" y="226" width="200" height="50" rx="9" fill="#EAF0FD"/>
                  <text x="40" y="248" fontSize="11" fontWeight="700" fill="#1F6AE1">Today</text>
                  <text x="40" y="265" fontSize="10" fill="#1F2937">14 appointments, 0 gaps</text>
                  <rect x="236" y="226" width="200" height="50" rx="9" fill="#E8F7EF"/>
                  <text x="252" y="248" fontSize="11" fontWeight="700" fill="#239E62">No-shows</text>
                  <text x="252" y="265" fontSize="10" fill="#1F2937">9.2% this month</text>
                </svg>
              </div>
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

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to see this for your practice?"
        subtext="Start free today. The whole platform, set up in 30 minutes."
        variant="inline"
      />
    </>
  );
}

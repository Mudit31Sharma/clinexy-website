import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Features: Everything Your Practice Needs",
  description: "Explore all Clinexy features: online booking, telehealth, patient management, billing, website builder, local SEO, reviews, and more. One subscription.",
  alternates: { canonical: "https://www.clinexy.com/features" },
};

const operationsFeatures = [
  {
    href: "/features/online-booking",
    title: "Online Booking",
    desc: "A branded booking link with real-time availability, calendar sync, and automated 3-touch reminders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10 L21 10"/><path d="M8 3 L8 7"/><path d="M16 3 L16 7"/>
      </svg>
    ),
  },
  {
    href: "/features/telehealth",
    title: "Telehealth",
    desc: "Secure video visits with notes, prescriptions, and a full patient record — all in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8 L16 12 L22 16Z"/>
      </svg>
    ),
  },
  {
    href: "/features/patient-management",
    title: "Patient Management",
    desc: "Encrypted patient profiles with medical history, notes, prescriptions, and documents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    href: "/features/billing",
    title: "Billing",
    desc: "Invoices in your local currency, card and UPI payments, superbills, and insurance receipts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    href: "/features/client-portal",
    title: "Patient Portal",
    desc: "Patient self-service: appointments, records, messages, intake forms, and documents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    href: "/features/whatsapp-reminders",
    title: "WhatsApp Reminders",
    desc: "Automated appointment reminders, recall messages, and review requests via WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.8L3 21l1.8-4.9C3.7 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/>
      </svg>
    ),
  },
  {
    href: "/features/ai-appointment-assistant",
    title: "Smart Assistant",
    desc: "AI-powered scheduling assistant that handles booking queries and intelligently fills your calendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
];

const growthFeatures = [
  {
    href: "/features/website-builder",
    title: "Website Builder",
    desc: "Healthcare-specific templates, schema markup, booking embedded, mobile speed 90+. Setup in 30 minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    href: "/features/local-seo",
    title: "Local SEO",
    desc: "Rank for searches like \"[specialty] near me\" and climb into the Google map pack.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    href: "/features/reviews-reputation",
    title: "Reviews & Reputation",
    desc: "Automated review requests sent at the right moment. Monitor, respond, and grow your star rating.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>
      </svg>
    ),
  },
  {
    href: "/features/google-business-profile",
    title: "Google Business Profile",
    desc: "Keep your hours, services, photos, and posts current and in sync automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    href: "/features/doctor-seo-tools",
    title: "Doctor SEO Tools",
    desc: "Healthcare-specific SEO tools: keyword tracking, schema, and AI-search optimisation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 14 L11 10 L15 13 L21 7"/>
      </svg>
    ),
  },
  {
    href: "/features/patient-followup-system",
    title: "Patient Follow-Up",
    desc: "Automated 6-month recall, post-visit follow-up, and treatment reminder sequences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.1 19.79 19.79 0 0 1 1.61 2.48 2 2 0 0 1 3.58.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.9z"/>
      </svg>
    ),
  },
  {
    href: "/features/ai-patient-engagement",
    title: "AI Patient Engagement",
    desc: "Personalised engagement sequences powered by AI to keep patients coming back.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Everything you need</span>
            <h1>Features built for solo practice growth</h1>
            <p className="hero-sub">
              Operations that run the day. Growth tools that fill the calendar. Automation that does the repetitive work.
              All in one subscription.
            </p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="features-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="features-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in 30 minutes</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap">
              <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
                <rect width="460" height="300" fill="#F8FAFC"/>
                <rect x="20" y="20" width="200" height="120" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
                <text x="36" y="48" fontSize="12" fontWeight="700" fill="#1F2937">Operations</text>
                {['Online Booking', 'Telehealth', 'Billing', 'Patient Portal'].map((t, i) => (
                  <g key={i}>
                    <circle cx="40" cy={68 + i * 20} r="4" fill="#1F6AE1"/>
                    <text x="52" y={72 + i * 20} fontSize="10" fill="#475569">{t}</text>
                  </g>
                ))}
                <rect x="240" y="20" width="200" height="120" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
                <text x="256" y="48" fontSize="12" fontWeight="700" fill="#1F2937">Growth</text>
                {['Website Builder', 'Local SEO', 'Reviews', 'Google Profile'].map((t, i) => (
                  <g key={i}>
                    <circle cx="260" cy={68 + i * 20} r="4" fill="#22c55e"/>
                    <text x="272" y={72 + i * 20} fontSize="10" fill="#475569">{t}</text>
                  </g>
                ))}
                <rect x="20" y="160" width="420" height="60" rx="8" fill="#EAF0FD"/>
                <text x="36" y="186" fontSize="12" fontWeight="700" fill="#1F6AE1">Automation layer</text>
                <text x="36" y="205" fontSize="10" fill="#64748b">Reminders · Recall · Review requests · Follow-ups</text>
                <rect x="20" y="238" width="200" height="44" rx="8" fill="white" stroke="#E2E8F0"/>
                <text x="36" y="258" fontSize="10" fontWeight="700" fill="#1F2937">No-show rate</text>
                <text x="36" y="274" fontSize="10" fill="#22c55e" fontWeight="700">↓ 9.2% this month</text>
                <rect x="240" y="238" width="200" height="44" rx="8" fill="white" stroke="#E2E8F0"/>
                <text x="256" y="258" fontSize="10" fontWeight="700" fill="#1F2937">Reviews collected</text>
                <text x="256" y="274" fontSize="10" fill="#1F6AE1" fontWeight="700">↑ 52 in 90 days</text>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Features</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <span className="section-label">Operations</span>
          <h2>Run your practice from one place</h2>
          <p className="lead">Seven features that handle the day-to-day, all writing to a shared patient record.</p>
          <div className="cards-grid">
            {operationsFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="card" style={{ textDecoration: 'none' }}>
                <div className="card-icon">{f.icon}</div>
                <h3 style={{ color: 'var(--gray-900)' }}>{f.title}</h3>
                <p>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <span className="section-label">Growth</span>
          <h2>Fill your calendar with the right patients</h2>
          <p className="lead">Seven growth tools included in the base subscription, not sold as add-ons.</p>
          <div className="cards-grid">
            {growthFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="card" style={{ textDecoration: 'none' }}>
                <div className="card-icon">{f.icon}</div>
                <h3 style={{ color: 'var(--gray-900)' }}>{f.title}</h3>
                <p>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Try every feature free for 14 days"
        subtext="No credit card required. Set up in 30 minutes."
        variant="inline"
      />
    </>
  );
}

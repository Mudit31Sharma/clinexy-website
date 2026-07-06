import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const featureData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  metaDesc: string;
  bullets: string[];
  stats: { num: string; label: string }[];
}> = {
  "online-booking": {
    title: "Online Booking",
    tagline: "24/7 bookings. Zero phone tag.",
    description: "Give patients a branded link they can use to book at any time. Real-time availability, calendar sync, and a 3-touch reminder sequence start automatically when they book.",
    metaDesc: "Online booking for solo healthcare professionals. 24/7 bookings, calendar sync, and automated reminders. Cut no-shows by 30–40%.",
    bullets: ["Branded booking link on your own domain", "Real-time calendar with buffer times and block-outs", "3-touch SMS/WhatsApp/email reminder sequence", "One-tap reschedule for patients", "Calendar sync with Google and Outlook", "Intake forms collected before the appointment"],
    stats: [{ num: "<10%", label: "no-show rate after reminders" }, { num: "30 min", label: "setup time" }, { num: "24/7", label: "bookings without phone calls" }],
  },
  "telehealth": {
    title: "Telehealth",
    tagline: "Secure video visits, notes, and prescriptions.",
    description: "Run consultations from anywhere. Secure video built into Clinexy, so patient records, notes, and prescriptions are all in one place — no third-party app needed.",
    metaDesc: "Telehealth for solo doctors. Secure video consultations with notes, prescriptions, and full patient records in one place.",
    bullets: ["HIPAA-aligned encrypted video calls", "Notes and prescriptions linked to the patient record", "Telehealth booking option on your booking page", "Share documents and images during the call", "Post-visit summary sent to patient automatically", "Works on desktop and mobile"],
    stats: [{ num: "0", label: "extra apps needed" }, { num: "5 min", label: "to start a video visit" }, { num: "100%", label: "record integration" }],
  },
  "patient-management": {
    title: "Patient Management",
    tagline: "Every patient's full history, one record.",
    description: "Encrypted patient profiles with medical history, visit notes, prescriptions, documents, and billing — all in one record that you own and control.",
    metaDesc: "Patient management software for solo healthcare professionals. Encrypted records, notes, history, and billing in one place.",
    bullets: ["Encrypted patient profiles with full history", "SOAP and custom note templates", "Prescription management and history", "Document uploads and lab results", "CSV import from Practo, Cliniko, Jane, and MocDoc", "Data exportable at any time"],
    stats: [{ num: "5–10 min", label: "saved per visit" }, { num: "100%", label: "data ownership" }, { num: "10 min", label: "CSV import time" }],
  },
  "billing": {
    title: "Billing",
    tagline: "Invoices in your currency, paid in seconds.",
    description: "Generate invoices in your local currency, accept card and UPI payments, issue superbills, and keep all your financial records in one place.",
    metaDesc: "Billing software for solo doctors. Invoices, card and UPI payments, superbills, and financial records in one subscription.",
    bullets: ["Invoices in INR, USD, GBP, SGD, AUD, CAD", "Card, UPI, and bank transfer payments", "Superbills for insurance reimbursement", "Automatic payment reminders", "Revenue reports and monthly summaries", "Tax-compliant invoices"],
    stats: [{ num: "₹0", label: "commission on payments" }, { num: "3 min", label: "to generate an invoice" }, { num: "Multi-currency", label: "billing support" }],
  },
  "client-portal": {
    title: "Patient Portal",
    tagline: "Self-service for your patients.",
    description: "Give patients a secure portal to book appointments, view their records, complete intake forms, message you, and access documents — reducing admin calls significantly.",
    metaDesc: "Patient portal for solo healthcare professionals. Self-service booking, records, messaging, and intake forms for patients.",
    bullets: ["Secure patient login with OTP or email", "Self-service appointment booking and rescheduling", "Access to visit summaries and prescriptions", "Intake form completion before the first visit", "Secure messaging with the practice", "Document and lab result access"],
    stats: [{ num: "40%", label: "fewer admin calls" }, { num: "100%", label: "secure, encrypted" }, { num: "30 sec", label: "intake form submission" }],
  },
  "whatsapp-reminders": {
    title: "WhatsApp Reminders",
    tagline: "3-touch reminders where patients actually read.",
    description: "Automated appointment reminders via WhatsApp, SMS, and email. Patients can reschedule with one tap — reducing no-shows by 30–40% within 90 days.",
    metaDesc: "WhatsApp appointment reminders for doctors. Automated 3-touch sequences that cut no-shows by 30–40%.",
    bullets: ["3-touch reminder sequence (24 hr, 2 hr, 30 min)", "WhatsApp, SMS, and email channels", "One-tap reschedule for patients", "Automated recall messages at 6 months", "Post-visit review request", "Customisable message templates"],
    stats: [{ num: "30–40%", label: "no-show reduction" }, { num: "90 days", label: "to see results" }, { num: "98%", label: "WhatsApp open rate" }],
  },
  "ai-appointment-assistant": {
    title: "AI Appointment Assistant",
    tagline: "Smart scheduling that fills your calendar.",
    description: "An AI-powered assistant that handles booking queries, suggests optimal time slots, and intelligently fills gaps in your schedule — so you never leave money on the table.",
    metaDesc: "AI appointment assistant for solo doctors. Smart scheduling that fills calendar gaps and handles booking queries automatically.",
    bullets: ["Natural language booking queries handled automatically", "Optimal time slot suggestions based on your patterns", "Waitlist management and automatic slot filling", "Integrates with your existing calendar", "Booking confirmation and reminders sent automatically", "Analytics on booking patterns and peak demand"],
    stats: [{ num: "2 hr", label: "per week saved on scheduling" }, { num: "AI-powered", label: "slot optimisation" }, { num: "24/7", label: "assistant availability" }],
  },
  "website-builder": {
    title: "Website Builder",
    tagline: "A professional website. Live in 30 minutes.",
    description: "Healthcare-specific website templates with schema markup, booking embedded, and mobile speed 90+. Your website on your own domain, that you own completely.",
    metaDesc: "Website builder for doctors. Healthcare templates with booking, schema markup, and mobile speed 90+. Set up in 30 minutes.",
    bullets: ["Healthcare-specific templates", "Custom domain (yourname.com) or free subdomain", "Booking widget embedded on every page", "Schema markup for rich search results", "Mobile speed score 90+ by default", "SEO meta tags and sitemap auto-generated"],
    stats: [{ num: "30 min", label: "to go live" }, { num: "90+", label: "mobile speed score" }, { num: "0", label: "commissions on bookings" }],
  },
  "local-seo": {
    title: "Local SEO",
    tagline: "Rank for '[specialty] near me'.",
    description: "Clinexy's local SEO tools help you rank in the Google map pack for searches in your city — so patients find you before they find your competitors.",
    metaDesc: "Local SEO for doctors. Rank for specialty near me searches and get into the Google map pack in 6–12 months.",
    bullets: ["Google Business Profile setup and optimisation", "Local keyword tracking for your specialty and city", "Citation building across health directories", "Schema markup for local businesses", "Review velocity monitoring and requests", "Monthly local ranking reports"],
    stats: [{ num: "Top 3", label: "local ranking in 6–12 months" }, { num: "3×", label: "more visibility than unoptimised" }, { num: "0", label: "agency fees needed" }],
  },
  "reviews-reputation": {
    title: "Reviews & Reputation",
    tagline: "50+ reviews in 90 days. On autopilot.",
    description: "An automated review request sent 2 hours after each visit. Patients click one link to leave a Google review. Monitor, respond, and watch your star rating grow.",
    metaDesc: "Google review automation for doctors. Automated review requests that collect 50+ reviews in 90 days.",
    bullets: ["Automated review request 2 hours after visit", "One-tap Google review link for patients", "Review monitoring dashboard", "Response templates for all reviews", "Reviews embedded on your website", "Negative review early-warning"],
    stats: [{ num: "50+", label: "reviews in 90 days" }, { num: "4.8★", label: "average star rating" }, { num: "2 hrs", label: "after visit — optimal timing" }],
  },
  "google-business-profile": {
    title: "Google Business Profile",
    tagline: "Your Google profile, always up to date.",
    description: "Keep your hours, services, photos, and posts current and in sync automatically — so patients always see accurate information when they find you on Google.",
    metaDesc: "Google Business Profile management for doctors. Keep hours, services, photos, and posts current automatically.",
    bullets: ["Automated post publishing to your GBP", "Hours and contact info sync", "Service and attribute updates", "Photo management", "Q&A monitoring and responses", "Insights and engagement tracking"],
    stats: [{ num: "5×", label: "more profile views on average" }, { num: "Auto-sync", label: "no manual updates needed" }, { num: "Weekly", label: "performance reports" }],
  },
  "doctor-seo-tools": {
    title: "Doctor SEO Tools",
    tagline: "SEO designed for healthcare professionals.",
    description: "Healthcare-specific SEO tools: keyword tracking, schema markup, AI-search optimisation, and content templates — so you rank for the terms your patients actually search.",
    metaDesc: "SEO tools for doctors. Healthcare keyword tracking, schema, AI-search optimisation, and content templates.",
    bullets: ["Healthcare keyword research and tracking", "Medical entity schema markup", "AI-search (SGE) optimisation", "Content templates for specialty pages", "Competitor ranking comparisons", "Monthly SEO health reports"],
    stats: [{ num: "Healthcare-specific", label: "keyword database" }, { num: "Schema", label: "for rich results" }, { num: "AI-search", label: "optimisation included" }],
  },
  "patient-followup-system": {
    title: "Patient Follow-Up System",
    tagline: "Bring patients back before they forget you.",
    description: "Automated 6-month recall, post-visit follow-up, and treatment reminder sequences — so patients return on schedule without you having to chase them.",
    metaDesc: "Patient follow-up system for solo doctors. Automated recall, post-visit follow-up, and treatment reminders.",
    bullets: ["6-month automated recall messages", "Post-visit follow-up at 24 hours and 1 week", "Treatment plan reminder sequences", "Preventive care reminders by specialty", "WhatsApp, SMS, and email channels", "Recall analytics and response tracking"],
    stats: [{ num: "38%", label: "of inactive patients return" }, { num: "Automated", label: "no manual follow-up needed" }, { num: "3 channels", label: "WhatsApp, SMS, email" }],
  },
  "ai-patient-engagement": {
    title: "AI Patient Engagement",
    tagline: "Keep patients engaged between visits.",
    description: "AI-powered personalised engagement sequences that keep patients coming back, referring friends, and leaving reviews — without you lifting a finger.",
    metaDesc: "AI patient engagement for solo healthcare professionals. Personalised sequences for retention, referrals, and reviews.",
    bullets: ["AI-personalised messages based on visit history", "Post-visit care tips by specialty", "Birthday and health check reminders", "Referral request sequences", "Seasonal health campaigns", "Engagement analytics dashboard"],
    stats: [{ num: "Personalised", label: "by specialty and visit" }, { num: "AI-powered", label: "message optimisation" }, { num: "Multi-channel", label: "delivery" }],
  },
  "doctor-website": {
    title: "Doctor Website",
    tagline: "Your personal clinic website.",
    description: "A professional website for your medical practice on your own domain. Built with healthcare-specific templates, schema markup, and booking embedded.",
    metaDesc: "Personal website for doctors. Professional clinic websites with booking, schema, and SEO built in.",
    bullets: ["Personal domain (drname.com)", "Professional bio and credentials page", "Online booking on every page", "Patient testimonials section", "Before/after galleries (aesthetic clinics)", "HIPAA-aligned contact forms"],
    stats: [{ num: "30 min", label: "setup time" }, { num: "Own domain", label: "your brand, not a directory" }, { num: "Mobile-first", label: "design" }],
  },
  "clinic-website-builder": {
    title: "Clinic Website Builder",
    tagline: "A full clinic website in 30 minutes.",
    description: "Build a full clinic website with healthcare templates, booking embedded, and local SEO built in. Set up in 30 minutes.",
    metaDesc: "Clinic website builder for solo doctors. Healthcare templates, booking, and local SEO. Live in 30 minutes.",
    bullets: ["Healthcare-specific clinic templates", "Booking widget embedded", "Services and team pages", "Schema markup for clinics", "Mobile speed 90+", "SSL and HIPAA-aligned hosting"],
    stats: [{ num: "30 min", label: "to go live" }, { num: "90+", label: "mobile speed score" }, { num: "Templates", label: "for every specialty" }],
  },
  "doctor-branding-growth": {
    title: "Doctor Branding & Growth",
    tagline: "Build the brand patients trust.",
    description: "Personal branding tools for healthcare professionals: about pages, credentials, patient testimonials, and social content — all in one place.",
    metaDesc: "Doctor branding and growth tools. Build your personal brand with Clinexy's website, social, and reputation tools.",
    bullets: ["Professional bio and credentials builder", "Patient testimonials and reviews", "Social media content templates", "LinkedIn and Instagram optimisation", "Authority content library", "Brand consistency tools"],
    stats: [{ num: "Branding", label: "on your own domain" }, { num: "Social + SEO", label: "combined" }, { num: "Patients trust", label: "branded practitioners 3× more" }],
  },
  "google-review-automation": {
    title: "Google Review Automation",
    tagline: "50+ Google reviews in 90 days.",
    description: "Automatically request Google reviews at the right moment — 2 hours after each visit — when the experience is fresh. One click for the patient, a 5-star review for you.",
    metaDesc: "Google review automation for doctors. Automated review requests that collect 50+ reviews in 90 days.",
    bullets: ["Automated request 2 hours after visit", "One-tap Google review link", "WhatsApp, SMS, and email delivery", "Review monitoring and alerts", "Response templates", "Reviews embedded on your website"],
    stats: [{ num: "50+", label: "reviews in 90 days" }, { num: "2 hrs", label: "optimal request timing" }, { num: "4.8★", label: "average rating" }],
  },
  "appointments-reminders": {
    title: "Appointment Reminders",
    tagline: "Cut no-shows by 30–40%.",
    description: "A 3-touch reminder sequence via WhatsApp, SMS, and email — with one-tap reschedule for patients. Reduces no-shows from 25–35% to under 10% within 90 days.",
    metaDesc: "Appointment reminders for doctors. 3-touch WhatsApp, SMS, and email reminders that cut no-shows by 30–40%.",
    bullets: ["3-touch reminder sequence (24 hr, 2 hr, 30 min)", "WhatsApp, SMS, and email channels", "One-tap reschedule for patients", "Automatic waitlist filling", "Customisable templates", "No-show analytics"],
    stats: [{ num: "<10%", label: "no-show rate after activation" }, { num: "90 days", label: "to see full impact" }, { num: "30–40%", label: "no-show reduction" }],
  },
  "teleconsultation-prescriptions": {
    title: "Teleconsultation & Prescriptions",
    tagline: "Video visits with digital prescriptions.",
    description: "Secure video consultations with digital prescriptions, clinical notes, and full patient record integration — no third-party app required.",
    metaDesc: "Teleconsultation and digital prescriptions for doctors. Secure video with notes and prescriptions in one record.",
    bullets: ["HIPAA-aligned encrypted video calls", "Digital prescription generation", "Clinical notes linked to the record", "Document and image sharing", "Post-visit summary to patient", "Works on all devices"],
    stats: [{ num: "0", label: "extra apps needed" }, { num: "Digital prescriptions", label: "legally compliant" }, { num: "HIPAA-aligned", label: "video platform" }],
  },
};

export async function generateStaticParams() {
  return Object.keys(featureData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = featureData[slug];
  if (!feature) return { title: "Feature | Clinexy" };
  return {
    title: `${feature.title} — Clinexy`,
    description: feature.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/features/${slug}` },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = featureData[slug];
  if (!feature) notFound();

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Feature</span>
            <h1>{feature.title}</h1>
            <p className="hero-sub" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px', color: 'rgba(255,255,255,0.9)' }}>
              {feature.tagline}
            </p>
            <p className="hero-sub" style={{ marginTop: 0 }}>{feature.description}</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`feature-${slug}-trial`}>Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id={`feature-${slug}-demo`}>Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap">
              <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="stat-band" style={{ marginTop: 0 }}>
                  {feature.stats.map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa', lineHeight: 1, marginBottom: '6px' }}>{s.num}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/features">Features</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{feature.title}</span>
        </div>
      </nav>

      <section className="section">
        <div className="container section-narrow">
          <h2>What {feature.title} does</h2>
          <p className="prose">{feature.description}</p>
          <ul className="point-list dark" style={{ marginTop: '20px' }}>
            {feature.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>Key numbers</h2>
          <div className="stat-band" style={{ maxWidth: '600px' }}>
            {feature.stats.map((s, i) => (
              <div key={i} className="stat good">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Try ${feature.title} free for 14 days`}
        subtext="No credit card required. Set up in 30 minutes."
        variant="inline"
      />
    </>
  );
}

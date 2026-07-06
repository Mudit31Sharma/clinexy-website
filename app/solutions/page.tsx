import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Solutions for Every Healthcare Specialty",
  description: "Clinexy works for solo doctors, dentists, therapists, physiotherapists, Ayurveda practitioners, and more. Find your specialty solution.",
  alternates: { canonical: "https://www.clinexy.com/solutions" },
};

const specialties = [
  {
    category: "Medical",
    items: [
      { label: "Solo Doctors", href: "/solutions/solo-doctors", desc: "Complete practice management and growth for independent physicians." },
      { label: "General Physicians", href: "/solutions/general-physicians", desc: "Streamlined GP workflows with online booking and patient recall." },
      { label: "Dentists", href: "/solutions/dentists", desc: "Dental recall automation, treatment plans, and review growth." },
      { label: "Dermatologists", href: "/solutions/dermatologists", desc: "Before/after galleries, cosmetic bookings, and reputation management." },
      { label: "Pediatricians", href: "/solutions/pediatricians", desc: "Vaccination reminders, growth tracking, and family portal." },
      { label: "OB-GYNs", href: "/solutions/gynecologists", desc: "Private practice growth with secure patient records and telehealth." },
      { label: "Psychiatrists", href: "/solutions/psychiatrists", desc: "Confidential teleconsultation and HIPAA-aligned record keeping." },
      { label: "Orthopedics", href: "/solutions/orthopedics", desc: "Surgery follow-up, physiotherapy referrals, and outcome tracking." },
      { label: "ENT Specialists", href: "/solutions/ent-specialists", desc: "Procedure booking, audiogram records, and local SEO." },
      { label: "Ophthalmologists", href: "/solutions/ophthalmologists", desc: "Lens prescription tracking, recall, and optical retail billing." },
      { label: "Cardiologists", href: "/solutions/cardiologists", desc: "ECG and report management, follow-up automation, and telehealth." },
    ],
  },
  {
    category: "Therapy & Holistic",
    items: [
      { label: "Psychologists", href: "/solutions/psychologists", desc: "Confidential notes, secure messaging, and mental health telehealth." },
      { label: "Therapists", href: "/solutions/therapists", desc: "Session notes, intake forms, and telehealth for therapy practices." },
      { label: "Physiotherapists", href: "/solutions/physiotherapists", desc: "Exercise plans, outcome tracking, and recall for physiotherapy." },
      { label: "Chiropractors", href: "/solutions/chiropractors", desc: "Adjustment notes, recall automation, and review collection." },
      { label: "Nutritionists", href: "/solutions/nutritionists", desc: "Meal plans, progress tracking, and online consultation." },
      { label: "Ayurveda Doctors", href: "/solutions/ayurveda-doctors", desc: "Traditional medicine records, herb prescriptions, and recall." },
      { label: "Homeopathy Doctors", href: "/solutions/homeopathy-doctors", desc: "Repertorisation notes, constitutional tracking, and patient portal." },
      { label: "Alternative Therapy", href: "/solutions/alternative-therapy", desc: "Holistic session notes, intake forms, and booking automation." },
    ],
  },
  {
    category: "Aesthetic & Wellness",
    items: [
      { label: "Cosmetic Clinics", href: "/solutions/cosmetic-clinics", desc: "Before/after galleries, consent forms, and cosmetic booking." },
      { label: "Aesthetic Clinics", href: "/solutions/aesthetic-clinics", desc: "Treatment plans, loyalty programmes, and reputation management." },
      { label: "IVF Clinics", href: "/solutions/ivf-clinics", desc: "Treatment cycle tracking, patient portal, and sensitive record keeping." },
      { label: "Fitness Trainers", href: "/solutions/fitness-trainers", desc: "Session booking, progress tracking, and online programme delivery." },
      { label: "Yoga Instructors", href: "/solutions/yoga-instructors", desc: "Class booking, membership management, and virtual sessions." },
      { label: "Personal Coaches", href: "/solutions/personal-coaches", desc: "Goal tracking, session notes, and client portal." },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '680px' }}>
            <span className="tag">Your specialty</span>
            <h1>Clinexy works for every solo practice</h1>
            <p className="hero-sub">
              From GP to Ayurveda practitioner, from physiotherapist to IVF specialist — Clinexy adapts to your specialty's
              workflows, terminology, and compliance needs.
            </p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="solutions-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="solutions-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Solutions</span>
        </div>
      </nav>

      {specialties.map((cat, ci) => (
        <section key={ci} className="section" style={{ background: ci % 2 === 1 ? 'var(--gray-50)' : 'white' }}>
          <div className="container">
            <span className="section-label">{cat.category}</span>
            <div className="cards-grid">
              {cat.items.map((item, ii) => (
                <Link key={ii} href={item.href} className="card" style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--blue-600)', marginBottom: '8px' }}>{item.label}</h3>
                  <p style={{ margin: 0 }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        heading="Find your specialty, start your free trial"
        subtext="Every specialty gets the full platform. No add-ons, no per-specialty pricing."
        variant="inline"
      />
    </>
  );
}

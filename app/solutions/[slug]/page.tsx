import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

type SolutionData = {
  title: string;
  specialty: string;
  tagline: string;
  description: string;
  metaDesc: string;
  challenges: string[];
  features: string[];
};

const solutionData: Record<string, SolutionData> = {
  "solo-doctors": {
    title: "Clinexy for Solo Doctors",
    specialty: "Solo Doctors",
    tagline: "Build your practice, your brand, your way.",
    description: "Solo doctors wear every hat — clinician, receptionist, marketer. Clinexy automates the admin and marketing so you can focus on patients.",
    metaDesc: "Practice management and patient growth software for solo doctors. Online booking, telehealth, local SEO, and reviews in one subscription.",
    challenges: ["Attracting new patients without a big marketing budget", "Reducing no-shows that drain revenue", "Managing patient records without expensive EMR software", "Building an online presence that competes with larger clinics"],
    features: ["Online booking with 3-touch reminder sequence", "Telehealth for remote consultations", "Local SEO to rank for 'doctor near me'", "Automated Google review requests", "Website builder with booking embedded", "Patient portal for self-service"],
  },
  "general-physicians": {
    title: "Clinexy for GPs",
    specialty: "General Physicians",
    tagline: "More patients. Less admin. Better care.",
    description: "General practice demands speed — quick consultations, fast notes, and a full calendar. Clinexy streamlines every step so you see more patients without working longer hours.",
    metaDesc: "Practice management for general physicians. Streamlined GP workflows with online booking, notes, and patient recall.",
    challenges: ["Managing a high volume of appointments efficiently", "Chronic care patient recall and follow-up", "Phone-based booking that wastes admin time", "Competing with corporate medical centres online"],
    features: ["Fast SOAP notes with templates", "Chronic care recall automation", "Online self-booking with calendar sync", "WhatsApp reminders for appointments", "Local SEO for your suburb", "Prescription and referral management"],
  },
  "dentists": {
    title: "Clinexy for Dentists",
    specialty: "Dentists",
    tagline: "Fill your chair. Grow your reviews. Reduce no-shows.",
    description: "Dental practices live and die by recall and reputation. Clinexy automates 6-month recall, collects Google reviews after every visit, and cuts no-shows with smart reminders.",
    metaDesc: "Practice management for dentists. Dental recall automation, Google review collection, and no-show reduction in one platform.",
    challenges: ["6-month recall that patients actually respond to", "A 25–35% no-show rate costing thousands per month", "Collecting Google reviews consistently", "Building an online reputation to win new patients"],
    features: ["6-month recall via WhatsApp and SMS", "3-touch appointment reminders", "Automated Google review requests after visits", "Treatment plan tracking and follow-up", "Before/after photo management", "Patient portal for forms and records"],
  },
  "dermatologists": {
    title: "Clinexy for Dermatologists",
    specialty: "Dermatologists",
    tagline: "Grow your aesthetic and medical dermatology practice.",
    description: "From medical dermatology to cosmetic procedures, Clinexy handles before/after photo management, review collection, and the online presence that attracts aesthetic patients.",
    metaDesc: "Practice management for dermatologists. Before/after galleries, reputation management, and cosmetic booking for skin specialists.",
    challenges: ["Attracting aesthetic patients searching online", "Managing before/after photos and consent forms", "Building a strong Google review profile", "Converting social media followers into booked appointments"],
    features: ["Before/after photo management", "Cosmetic procedure booking with consent forms", "Google review automation", "Instagram content templates for skin care", "Local SEO for 'dermatologist near me'", "Telehealth for follow-up consultations"],
  },
  "pediatricians": {
    title: "Clinexy for Pediatricians",
    specialty: "Pediatricians",
    tagline: "Keep children healthy. Keep parents informed.",
    description: "Paediatric practice demands frequent follow-up, vaccination reminders, and worried parent communication. Clinexy automates all of it so you can focus on the child in front of you.",
    metaDesc: "Practice management for pediatricians. Vaccination reminders, growth tracking, and family-friendly patient portal.",
    challenges: ["Vaccination schedule reminders for parents", "Managing a high volume of young patient records", "Parents who need reassurance between visits", "School and health certificate management"],
    features: ["Vaccination schedule reminders by age", "Growth chart tracking in patient records", "Parent-friendly patient portal", "WhatsApp communication with parents", "Quick prescription templates", "Referral letter generation"],
  },
  "gynecologists": {
    title: "Clinexy for OB-GYNs",
    specialty: "OB-GYNs",
    tagline: "Private, secure, and patient-centred practice.",
    description: "Women's health requires sensitivity, security, and excellent communication. Clinexy provides HIPAA-aligned records, secure telehealth, and discreet patient communication.",
    metaDesc: "Practice management for OB-GYNs. Secure records, telehealth, and patient communication for women's health specialists.",
    challenges: ["Patient privacy and data security", "Antenatal and postnatal follow-up automation", "Building trust online in a sensitive specialty", "Managing high appointment volumes"],
    features: ["HIPAA-aligned encrypted records", "Antenatal follow-up sequences", "Secure telehealth consultations", "Discreet WhatsApp reminders", "Personal branding for trust-building", "Online booking with availability control"],
  },
  "psychiatrists": {
    title: "Clinexy for Psychiatrists",
    specialty: "Psychiatrists",
    tagline: "Confidential care, automated admin.",
    description: "Psychiatry demands the highest standards of confidentiality and the most careful patient communication. Clinexy is built with this in mind — HIPAA-aligned from the ground up.",
    metaDesc: "Practice management for psychiatrists. HIPAA-aligned records, confidential telehealth, and secure patient communication.",
    challenges: ["Absolute confidentiality in patient records and communication", "Managing medication and follow-up schedules", "Reaching patients who prefer telehealth", "Building an online presence without compromising privacy"],
    features: ["HIPAA-aligned encrypted records", "Confidential telehealth consultations", "Medication tracking and reminder sequences", "Discreet and secure patient messaging", "Online booking with privacy controls", "Crisis escalation protocol integration"],
  },
  "orthopedics": {
    title: "Clinexy for Orthopedics",
    specialty: "Orthopedics",
    tagline: "From injury to recovery, managed in one platform.",
    description: "Orthopedic practice involves complex care journeys — injury, surgery, physiotherapy, and long-term follow-up. Clinexy tracks every step and automates the communication.",
    metaDesc: "Practice management for orthopedic surgeons. Surgery follow-up, physiotherapy referrals, and outcome tracking in one platform.",
    challenges: ["Managing post-surgery follow-up across weeks", "Coordinating with physiotherapy referrals", "Patient education about rehabilitation", "Building online reputation in a competitive specialty"],
    features: ["Post-surgery follow-up automation", "Physiotherapy referral tracking", "Rehab milestone reminders for patients", "X-ray and imaging report storage", "Local SEO for orthopedic searches", "Review collection after successful treatment"],
  },
  "ent-specialists": {
    title: "Clinexy for ENT Specialists",
    specialty: "ENT Specialists",
    tagline: "Clear communication. Full calendars. Growing practice.",
    description: "ENT practice involves procedures, follow-up care, and audiometry records. Clinexy manages every patient journey from first booking to post-procedure follow-up.",
    metaDesc: "Practice management for ENT specialists. Procedure booking, audiogram records, and local SEO for ear, nose, and throat practices.",
    challenges: ["Managing procedure bookings and pre-op communication", "Audiogram and test result storage", "Post-procedure follow-up automation", "Building local visibility for ENT searches"],
    features: ["Procedure booking with pre-op instructions", "Audiogram and test result storage", "Post-procedure follow-up sequences", "Local SEO for 'ENT specialist near me'", "Patient education templates", "Referral management"],
  },
  "ophthalmologists": {
    title: "Clinexy for Ophthalmologists",
    specialty: "Ophthalmologists",
    tagline: "Clear vision for your practice management.",
    description: "Ophthalmology practices manage lens prescriptions, routine check-up recall, and surgical follow-up. Clinexy tracks every patient's vision journey and automates recall.",
    metaDesc: "Practice management for ophthalmologists. Lens prescription tracking, recall automation, and billing for eye specialists.",
    challenges: ["Annual check-up recall for lens patients", "Surgical follow-up communication", "Optical retail billing alongside consultations", "Online booking for busy practices"],
    features: ["Lens prescription tracking and history", "Annual check-up recall automation", "Surgical follow-up sequences", "Optical retail billing", "Local SEO for 'eye specialist near me'", "Review collection after procedures"],
  },
  "cardiologists": {
    title: "Clinexy for Cardiologists",
    specialty: "Cardiologists",
    tagline: "Precision care management for cardiac patients.",
    description: "Cardiology involves long-term patient relationships, medication adherence, and careful monitoring. Clinexy automates the follow-up and communication that keeps patients engaged with their care.",
    metaDesc: "Practice management for cardiologists. ECG record management, follow-up automation, and telehealth for cardiac specialists.",
    challenges: ["Medication adherence and follow-up communication", "ECG and imaging record management", "High-risk patient monitoring", "Building credibility online"],
    features: ["ECG and imaging report storage", "Medication adherence reminders", "High-priority patient follow-up sequences", "Telehealth for monitoring consultations", "Local SEO for cardiac searches", "Referral and specialist communication"],
  },
  "psychologists": {
    title: "Clinexy for Psychologists",
    specialty: "Psychologists",
    tagline: "Confidential practice management for mental health.",
    description: "Psychological practice requires the highest standards of confidentiality, careful note-taking, and sensitive patient communication. Clinexy is built for this.",
    metaDesc: "Practice management for psychologists. Confidential notes, secure telehealth, and discreet patient communication.",
    challenges: ["Absolute confidentiality in notes and communication", "Session note templates for different therapy modalities", "Managing a waiting list effectively", "Building a trusted online presence"],
    features: ["HIPAA-aligned encrypted session notes", "Therapy modality note templates", "Confidential telehealth sessions", "Secure patient messaging", "Online booking with waitlist management", "Personal branding for trust"],
  },
  "therapists": {
    title: "Clinexy for Therapists",
    specialty: "Therapists",
    tagline: "Run your therapy practice. Focus on your clients.",
    description: "Whether you are a CBT therapist, couples counsellor, or family therapist, Clinexy gives you the tools to run a professional practice without the admin overhead.",
    metaDesc: "Practice management for therapists. Session notes, intake forms, telehealth, and online booking for therapy practices.",
    challenges: ["Intake forms and assessment documentation", "Session scheduling and cancellation policies", "Keeping therapy records secure and confidential", "Building a referral network online"],
    features: ["Customisable intake forms and assessments", "Session note templates by therapy type", "Confidential telehealth sessions", "Cancellation policy enforcement in booking", "HIPAA-aligned record keeping", "Online presence for therapy practice"],
  },
  "physiotherapists": {
    title: "Clinexy for Physiotherapists",
    specialty: "Physiotherapists",
    tagline: "From injury to recovery, managed in Clinexy.",
    description: "Physiotherapy practice involves treatment plans, exercise prescriptions, and outcome tracking across multiple sessions. Clinexy tracks every patient's rehabilitation journey.",
    metaDesc: "Practice management for physiotherapists. Exercise plans, outcome tracking, and recall automation for physio practices.",
    challenges: ["Managing multi-session treatment plans", "Patient compliance with home exercise programmes", "Recall for maintenance sessions", "Competing with sports medicine clinics online"],
    features: ["Treatment plan tracking across sessions", "Exercise prescription library", "Outcome measure tracking (PSFS, VAS, etc.)", "Recall for maintenance sessions", "Local SEO for 'physiotherapist near me'", "Review collection after successful treatment"],
  },
  "chiropractors": {
    title: "Clinexy for Chiropractors",
    specialty: "Chiropractors",
    tagline: "Align your practice with growth.",
    description: "Chiropractic practice runs on repeat visits, recall, and word-of-mouth. Clinexy automates recall, collects reviews, and helps you build the online presence that brings in new patients.",
    metaDesc: "Practice management for chiropractors. Adjustment notes, recall automation, and review collection for chiropractic practices.",
    challenges: ["Recall for patients who stopped coming", "Adjustment note speed and accuracy", "Building a Google review profile", "Attracting new patients from search"],
    features: ["Adjustment and SOAP note templates", "Recall automation at 4 and 8 weeks", "Google review collection after visits", "Local SEO for 'chiropractor near me'", "Treatment plan tracking", "Online booking with session packages"],
  },
  "nutritionists": {
    title: "Clinexy for Nutritionists",
    specialty: "Nutritionists",
    tagline: "Nourish your practice with automation.",
    description: "Nutrition practice involves detailed intake, progress tracking, and ongoing support. Clinexy manages every aspect of the client journey from first booking to long-term follow-up.",
    metaDesc: "Practice management for nutritionists. Meal plan delivery, progress tracking, and online consultation for nutrition practices.",
    challenges: ["Detailed dietary intake assessment", "Progress tracking across multiple sessions", "Delivering meal plans and resources to clients", "Building credibility online"],
    features: ["Detailed intake assessment forms", "Progress tracking with measurements", "Resource and meal plan delivery", "Telehealth for online consultations", "Recall for quarterly reviews", "Personal branding for nutrition experts"],
  },
  "ayurveda-doctors": {
    title: "Clinexy for Ayurveda Doctors",
    specialty: "Ayurveda",
    tagline: "Ancient wisdom. Modern practice management.",
    description: "Ayurveda practice involves detailed prakriti assessment, herb prescriptions, and long-term patient relationships. Clinexy adapts to traditional medicine workflows while adding modern automation.",
    metaDesc: "Practice management for Ayurveda doctors. Prakriti assessment, herb prescription records, and patient recall for Ayurvedic practice.",
    challenges: ["Prakriti and vikriti documentation", "Herb and formulation prescription tracking", "Seasonal recall for panchakarma", "Building online visibility for Ayurveda practice"],
    features: ["Prakriti assessment templates", "Herb and formulation prescription records", "Panchakarma and seasonal recall", "Telehealth for remote consultations", "Local SEO for 'Ayurveda doctor near me'", "Personal branding for practitioners"],
  },
  "homeopathy-doctors": {
    title: "Clinexy for Homeopathy Doctors",
    specialty: "Homeopathy",
    tagline: "Whole-person care. Whole-practice management.",
    description: "Homeopathic practice involves detailed constitutional assessment, long-term follow-up, and a deep patient relationship. Clinexy tracks every case from intake to resolution.",
    metaDesc: "Practice management for homeopathy doctors. Constitutional records, follow-up automation, and online booking for homeopathic practices.",
    challenges: ["Detailed constitutional case taking", "Long-term follow-up tracking", "Potency and remedy prescription records", "Building credibility online"],
    features: ["Constitutional case templates", "Remedy and potency tracking", "Long-term follow-up sequences", "Telehealth consultations", "Review collection for reputation", "Personal branding for homeopaths"],
  },
  "alternative-therapy": {
    title: "Clinexy for Alternative Therapy",
    specialty: "Alternative Therapy",
    tagline: "Modern tools for holistic practice.",
    description: "Whether you practice acupuncture, reflexology, energy healing, or another modality, Clinexy gives you the practice management tools to run a professional, growing practice.",
    metaDesc: "Practice management for alternative therapy practitioners. Session notes, intake forms, and online booking for holistic health practices.",
    challenges: ["Professional intake and consent documentation", "Building credibility with new clients", "Online booking for session-based practice", "Managing a multi-modality practice"],
    features: ["Customisable intake and consent forms", "Session note templates", "Online booking with modality options", "Telehealth for remote sessions", "Personal branding for practitioners", "Review collection for reputation"],
  },
  "cosmetic-clinics": {
    title: "Clinexy for Cosmetic Clinics",
    specialty: "Cosmetic Clinics",
    tagline: "Grow your cosmetic practice with confidence.",
    description: "Cosmetic clinics run on reputation, before/after results, and a strong online presence. Clinexy manages consent forms, before/after photos, and the review pipeline that drives new business.",
    metaDesc: "Practice management for cosmetic clinics. Before/after galleries, consent management, and reputation tools for aesthetic practices.",
    challenges: ["Managing consent forms and before/after photos", "Building a strong Google review profile", "Converting Instagram followers to booked clients", "Repeat treatment recall"],
    features: ["Before/after photo management", "Digital consent form signing", "Automated review requests after treatments", "Instagram content templates", "Repeat treatment recall at 3 and 6 months", "Cosmetic treatment package billing"],
  },
  "aesthetic-clinics": {
    title: "Clinexy for Aesthetic Clinics",
    specialty: "Aesthetic Clinics",
    tagline: "Premium patient experience. Automated operations.",
    description: "Aesthetic clinic patients expect a premium experience from first search to post-treatment follow-up. Clinexy delivers this automatically — review collection, recall, and a beautifully branded online presence.",
    metaDesc: "Practice management for aesthetic clinics. Premium patient experience, recall automation, and reputation management.",
    challenges: ["Premium patient experience across every touchpoint", "Treatment recall for botox, fillers, and laser", "Strong Google and Instagram presence", "Managing loyalty programmes"],
    features: ["Branded patient portal and communications", "Treatment recall at 3 and 6 months", "Google review automation", "Loyalty programme management", "Before/after photo gallery", "Premium invoice design"],
  },
  "ivf-clinics": {
    title: "Clinexy for IVF Clinics",
    specialty: "IVF Clinics",
    tagline: "Sensitive care. Careful management.",
    description: "IVF treatment involves emotional patients, complex care cycles, and strict data privacy requirements. Clinexy handles every aspect with the sensitivity and security this specialty demands.",
    metaDesc: "Practice management for IVF clinics. Treatment cycle tracking, secure patient records, and sensitive communication for fertility clinics.",
    challenges: ["Managing complex treatment cycles and protocols", "Highly sensitive patient data and communications", "Supporting patients through a stressful journey", "Building trust online in a sensitive specialty"],
    features: ["Treatment cycle tracking", "HIPAA-aligned encrypted records", "Sensitive and personalised patient messaging", "Secure patient portal for cycle updates", "Telehealth consultations", "Trust-building online presence"],
  },
  "fitness-trainers": {
    title: "Clinexy for Fitness Trainers",
    specialty: "Fitness Trainers",
    tagline: "Grow your client base. Run a professional practice.",
    description: "Fitness trainers who run their own practice need more than spreadsheets. Clinexy gives you booking, client tracking, programme delivery, and the online presence to attract new clients.",
    metaDesc: "Practice management for fitness trainers. Session booking, client tracking, programme delivery, and online presence.",
    challenges: ["Managing session bookings and cancellations", "Delivering programmes and tracking progress", "Building an online presence to attract new clients", "Managing group and individual sessions"],
    features: ["Session booking with cancellation policy", "Client progress tracking", "Programme and plan delivery", "Online presence for personal trainers", "Review collection after training blocks", "Package and subscription billing"],
  },
  "yoga-instructors": {
    title: "Clinexy for Yoga Instructors",
    specialty: "Yoga Instructors",
    tagline: "Manage your studio. Grow your community.",
    description: "Yoga instructors who teach privately or run small studios need booking, membership management, and a strong online presence. Clinexy delivers all three.",
    metaDesc: "Practice management for yoga instructors. Class booking, membership management, and online presence for yoga teachers.",
    challenges: ["Managing class bookings and capacity", "Membership and package management", "Building a community online", "Offering virtual classes alongside in-person"],
    features: ["Class and private session booking", "Membership and package management", "Virtual class delivery via telehealth", "Online presence for yoga teachers", "Review collection for reputation", "WhatsApp class reminders"],
  },
  "personal-coaches": {
    title: "Clinexy for Personal Coaches",
    specialty: "Personal Coaches",
    tagline: "Help your clients achieve. Let automation handle the rest.",
    description: "Life coaches, business coaches, and executive coaches who run their own practice need a professional system behind them. Clinexy gives you the tools to run a credible, growing coaching practice.",
    metaDesc: "Practice management for personal coaches. Goal tracking, session notes, client portal, and online booking for coaches.",
    challenges: ["Professional intake and goal-setting documentation", "Session note keeping and goal tracking", "Building credibility and online presence", "Managing a waiting list effectively"],
    features: ["Goal-setting and progress tracking", "Session note templates for coaching", "Client portal for between-session resources", "Online booking with waiting list", "Personal branding for coaches", "Review collection for testimonials"],
  },
};

export async function generateStaticParams() {
  return Object.keys(solutionData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionData[slug];
  if (!solution) return { title: "Solution | Clinexy" };
  return {
    title: `${solution.title}`,
    description: solution.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/solutions/${slug}` },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionData[slug];
  if (!solution) notFound();

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">{solution.specialty}</span>
            <h1>{solution.title}</h1>
            <p className="hero-sub" style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '8px', color: 'rgba(255,255,255,0.85)' }}>
              {solution.tagline}
            </p>
            <p className="hero-sub" style={{ marginTop: 0 }}>{solution.description}</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id={`solution-${slug}-trial`}>Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id={`solution-${slug}-demo`}>Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap" style={{ padding: '28px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {solution.features.slice(0, 4).map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px 16px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }}/>
                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.9)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/solutions">Solutions</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{solution.specialty}</span>
        </div>
      </nav>

      <section className="section">
        <div className="container section-narrow">
          <h2>Challenges {solution.specialty} face</h2>
          <p className="prose">You trained to {solution.specialty.toLowerCase() === 'solo doctors' ? 'heal patients' : 'help your clients'}. Here is what typically gets in the way:</p>
          <ul className="x-list">
            {solution.challenges.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container section-narrow">
          <h2>How Clinexy solves this for {solution.specialty}</h2>
          <ul className="point-list dark">
            {solution.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stat-band" style={{ maxWidth: '700px' }}>
            {[
              { num: "<10%", label: "no-show rate with reminders" },
              { num: "50+", label: "Google reviews in 90 days" },
              { num: "1 day", label: "a week handed back from admin" },
              { num: "Top 3", label: "local ranking in 6–12 months" },
            ].map((s, i) => (
              <div key={i} className="stat good">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
                <div className="src">Clinexy practice data</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Start your free trial for ${solution.specialty}`}
        subtext="14-day free trial. No credit card. Set up in 30 minutes."
        variant="inline"
      />
    </>
  );
}

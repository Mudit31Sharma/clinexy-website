import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const guides: Record<string, { title: string; metaDesc: string; content: { heading: string; body: string }[] }> = {
  "local-seo-for-doctors": {
    title: "Local SEO Guide for Doctors",
    metaDesc: "How solo doctors can rank for '[specialty] near me' and get into the Google map pack. Step-by-step local SEO guide.",
    content: [
      { heading: "Why local SEO matters for solo practices", body: "When a patient needs a doctor, they search. Google processes over 100,000 health-related searches every minute. The practices in the top three local results — the map pack — get the overwhelming majority of clicks. Everything below is largely invisible. This guide explains how to get your practice into those top three results." },
      { heading: "Step 1: Claim and complete your Google Business Profile", body: "Your Google Business Profile (GBP) is the single most important local SEO asset you have. Claim it at business.google.com if you have not already. Complete every field: name, address, phone, hours, website, services, photos, and description. Practices with complete profiles rank significantly higher than incomplete ones." },
      { heading: "Step 2: Get your website right", body: "Your website needs to tell Google exactly what you do and where you do it. Every page should include: your specialty, your city or suburb, and schema markup for LocalBusiness and Physician. Your homepage title should include '[Specialty] in [City]'. Your contact page should have your full NAP (name, address, phone number) matching your GBP exactly." },
      { heading: "Step 3: Build local citations", body: "A citation is any mention of your practice's name, address, and phone number online. You need consistent citations across Yelp, Healthgrades, Justdial (in India), and specialty directories. Inconsistency in your NAP across directories confuses Google and hurts your ranking." },
      { heading: "Step 4: Collect Google reviews", body: "Google uses review count and rating as a significant local ranking signal. Practices with 50+ reviews outrank those with 10 in nearly every market. The solution: automated review requests sent two hours after each patient visit. This alone can take you from 8 reviews to 60+ within 90 days." },
      { heading: "Step 5: Publish consistent GBP posts", body: "Google rewards active profiles. Publish one post per week to your GBP — a health tip, a service update, or a seasonal reminder. These posts show up in your panel on Google and signal that your practice is active and engaged." },
      { heading: "How long does it take?", body: "Local SEO is not instant. Most practices see measurable ranking improvements in 3–6 months and reach the top three in their city within 6–12 months. The practices that do this consistently — and get reviews consistently — compound their advantage over time." },
    ],
  },
  "no-show-reduction": {
    title: "The No-Show Reduction Guide",
    metaDesc: "The 3-touch reminder system that cuts appointment no-shows from 25–35% to under 10% in 90 days. Practical guide for solo practitioners.",
    content: [
      { heading: "The hidden cost of no-shows", body: "The average solo practice has a 25–35% no-show rate. For a practice with 20 appointments per day at ₹500 each, that is ₹2,500–₹3,500 lost every single day — ₹55,000–₹77,000 per month. This is not a minor inefficiency. It is often the largest revenue leak in the practice." },
      { heading: "Why patients don't show up", body: "Three reasons account for over 90% of no-shows: they forgot, something came up and they didn't know how to reschedule easily, and the appointment felt less urgent as time passed. Importantly, almost none are deliberate. Patients do not decide not to show up — they simply don't act on the appointment." },
      { heading: "The 3-touch reminder sequence", body: "The single most effective intervention is a 3-touch automated reminder sequence. Touch 1: 24 hours before the appointment. 'Your appointment with Dr [Name] is tomorrow at [Time]. Reply to reschedule.' Touch 2: 2 hours before. 'Your appointment is in 2 hours. We look forward to seeing you. Tap here to reschedule if needed.' Touch 3: 30 minutes before. 'Your appointment with Dr [Name] starts in 30 minutes.' Each touch should include a one-tap reschedule link." },
      { heading: "Channel selection: WhatsApp vs SMS vs email", body: "WhatsApp has a 98% open rate in markets where it is widely used (India, Southeast Asia, Middle East, UK). SMS has 90%+ open rates globally. Email has 20–30%. For no-show reduction, WhatsApp is the most effective channel where available, followed by SMS. Email alone is insufficient." },
      { heading: "The reschedule link is critical", body: "Most patients don't show up because something came up — not because they don't want to come. If rescheduling requires finding a phone number, calling, waiting, and explaining, most patients won't bother. They just don't show. A one-tap reschedule link changes this completely. Patients reschedule in 20 seconds. The slot opens up. Another patient fills it." },
      { heading: "Results to expect", body: "Practices that implement the 3-touch sequence with WhatsApp/SMS see their no-show rate drop from an average of 27% to under 10% within 90 days. This is consistent across specialties and markets. The ROI is typically 10–20x the cost of the reminder system in the first month." },
    ],
  },
  "getting-google-reviews": {
    title: "Getting Google Reviews for Your Practice",
    metaDesc: "How to collect 50+ Google reviews in 90 days with automated review requests. The complete guide for solo healthcare professionals.",
    content: [
      { heading: "Why Google reviews matter", body: "80% of patients read reviews before choosing a healthcare provider. Google reviews affect your local ranking — practices with more reviews rank higher. They also convert undecided patients: a practice with 80 reviews at 4.8 stars gets significantly more bookings than one with 8 reviews at 5.0 stars, even if the care quality is identical. Social proof is that powerful." },
      { heading: "The review problem most practices have", body: "Most solo practices have fewer than 20 reviews after years of practice. Not because patients are unhappy — most are satisfied. The problem is that nobody ever asks. And patients who are satisfied rarely think to leave a review unprompted, while patients with complaints often do. This creates a review imbalance that doesn't reflect the actual quality of care." },
      { heading: "The timing secret", body: "The best time to ask for a review is 2 hours after the appointment. The experience is fresh. The patient is home, relaxed, and has a moment. Asking at the point of checkout is slightly too rushed. Asking the next day is slightly too late. Two hours is the sweet spot, and it's why Clinexy's automated review request fires at exactly this moment." },
      { heading: "What to say", body: "Keep it simple. 'Thank you for visiting today. If you have a moment, a Google review helps other patients find us. Here is a direct link.' One sentence, one link, one action. Do not ask patients to rate you on multiple platforms in the same message — it creates decision fatigue and reduces completion." },
      { heading: "Responding to reviews", body: "Respond to every review — positive and negative. For positive reviews: 'Thank you, [Name]. It was wonderful to see you.' For negative reviews: acknowledge the concern privately, do not get defensive publicly, and demonstrate that you take feedback seriously. Google rewards active response to reviews with higher visibility." },
      { heading: "What 90 days looks like", body: "A practice seeing 15 patients per day, with a 30% review conversion rate, collects roughly 135 reviews in 90 days. At Clinexy, the median is 50+ reviews in the first 90 days, accounting for lower conversion rates in some specialties and markets. After 90 days, new reviews continue arriving automatically with zero additional effort." },
    ],
  },
  "personal-branding-for-doctors": {
    title: "Personal Branding for Doctors",
    metaDesc: "How to build the personal brand that makes patients choose you. A practical guide for solo healthcare professionals.",
    content: [
      { heading: "What personal branding actually means for doctors", body: "Personal branding is not about becoming a social media influencer or posting daily content. For a doctor, personal branding is simpler: it is ensuring that when a patient searches for you, finds your website, or reads your Google profile, they see a person they want to trust with their health. It is the difference between a blank listing and a compelling presence." },
      { heading: "The three elements that matter most", body: "1. Your professional bio. Two paragraphs: who you help, and what makes your approach distinctive. Not a CV recitation — a human explanation of your practice. 2. A professional photograph. Not a passport photo. A well-lit, approachable headshot that makes patients feel they already know you. 3. Patient stories. Appropriately anonymised accounts of the kinds of patients you help and what changes for them. These build trust faster than any credential." },
      { heading: "Writing your bio", body: "Most doctor bios read like a LinkedIn summary written in the third person. They list degrees, hospitals, and years of experience. Patients don't read these. Write for the patient who is scared and searching. Start with who you help: 'I work with patients who have been managing [condition] for years without getting to the root of it.' Then explain your approach: 'I take the time to understand the full picture before recommending anything.' This is a bio that converts browsers into patients." },
      { heading: "Your online footprint", body: "Consistency across channels is what makes a personal brand feel credible. Your website, your Google Business Profile, your LinkedIn, and (if you use it) your Instagram should all show the same person. Same photo. Same name format. Same tone. When they don't match, patients notice — subconsciously — and hesitate." },
      { heading: "The compounding effect", body: "Personal branding compounds. Each review that mentions your name, each blog post on your website, each Google Business Profile post — these accumulate into a reputation that becomes harder for competitors to match. A practice with consistent branding for 12 months has an online presence that would take a competitor years to replicate." },
    ],
  },
  "launching-private-practice": {
    title: "Launching a Private Practice: The Complete Guide",
    metaDesc: "How to set up, brand, and grow a solo private practice from day one. The complete guide for healthcare professionals.",
    content: [
      { heading: "Before you launch: the foundations", body: "Three things must exist before you see your first private patient: a legal structure (sole trader, LLP, or private limited depending on your jurisdiction), a professional indemnity insurance policy, and a compliance check for your specialty and region (HIPAA in the US, GDPR in the EU, DPDP in India, etc.). These are not optional." },
      { heading: "Your online presence from day one", body: "The first thing you need is a website on your own domain. Not a Practo profile. Not a Google Business Profile alone. A website that you own, on a domain with your name or practice name. This is the foundation of everything else — where patients land, where Google sends traffic, where you build your brand over time." },
      { heading: "Setting up for bookings", body: "You need a booking system before you can take patients. This should be: online (24/7 accessible), automated (confirmations and reminders sent without you doing anything), and connected to your calendar (no double-bookings, no manual management). The booking link should be on your website, your Google profile, and your WhatsApp." },
      { heading: "Your first 50 patients", body: "In the first 3 months, your growth will come from personal network and referrals. Tell everyone you know: colleagues, former patients (within ethical guidelines), local pharmacists, and allied health professionals. Referral relationships with GPs, specialists, and pharmacists are the most reliable source of ongoing new patients for most specialties." },
      { heading: "Building your online reputation", body: "Start collecting Google reviews from your first patient. The earlier you start, the faster you build the social proof that converts the next patient. Ask every patient, every visit. By month 6, a consistent request process will have you at 30–50 reviews — enough to appear credible to any patient who searches for you." },
      { heading: "Months 6–12: the growth phase", body: "By month 6, you should have a functioning booking system, a real website, a Google Business Profile with 30+ reviews, and a personal brand that is recognisable in your local area. This is when you shift focus to growth: local SEO, recall automation, and referral development. Clinexy handles all of this automatically once the foundation is in place." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return { title: "Guide | Clinexy" };
  return {
    title: guide.title + " | Clinexy Guides",
    description: guide.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  return (
    <>
      <section style={{ background: 'var(--gray-50)', padding: '56px 0 0' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 20px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <Link href="/guides">Guides</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">{guide.title}</span>
          </nav>
          <span className="tag-pill">Guide</span>
          <h1 style={{ marginTop: '16px' }}>{guide.title}</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '13.5px', marginBottom: '32px' }}>Clinexy editorial team · Updated 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          {guide.content.map((section, i) => (
            <div key={i} style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.25rem' }}>{section.heading}</h2>
              <p className="prose">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--blue-50)', padding: '40px 0', borderTop: '1px solid var(--blue-100)', borderBottom: '1px solid var(--blue-100)' }}>
        <div className="container section-narrow">
          <h3 style={{ color: 'var(--blue-700)', marginBottom: '8px' }}>Automate everything in this guide</h3>
          <p style={{ color: 'var(--gray-700)', marginBottom: '20px', fontSize: '15px' }}>
            Clinexy handles the implementation automatically. Start your free trial today.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" id={`guide-${slug}-cta`}>Start Free Trial — 14 Days Free</a>
        </div>
      </section>
    </>
  );
}

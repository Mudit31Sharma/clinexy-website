import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const templates: Record<string, { title: string; metaDesc: string; intro: string; template: string }> = {
  "patient-recall-message": {
    title: "Patient Recall Message Template",
    metaDesc: "Free patient recall message template via WhatsApp and SMS. 6-month recall that brings inactive patients back.",
    intro: "A 6-month recall message sent via WhatsApp or SMS. Personalised, friendly, and with a direct booking link. Use this template manually or automate it inside Clinexy.",
    template: `Hi [Patient Name],

It has been 6 months since your last visit with Dr [Doctor Name]. We hope you have been well.

As part of your ongoing care, we recommend scheduling a follow-up. Please use this link to book at a time that suits you:

👉 [Booking Link]

If you have any questions, reply here and we will get back to you shortly.

[Practice Name]
📞 [Phone Number]`,
  },
  "google-review-request": {
    title: "Google Review Request Template",
    metaDesc: "Free Google review request template for healthcare professionals. Send 2 hours after the visit for maximum conversion.",
    intro: "Send this message 2 hours after each visit. One direct link to your Google review page. This timing and simplicity is why Clinexy practices collect 50+ reviews in 90 days.",
    template: `Hi [Patient Name],

Thank you for visiting today. We hope everything went well.

If you have a moment, a Google review helps other patients find us and know what to expect. Here is a direct link:

⭐ [Google Review Link]

It takes less than a minute and means a great deal to us.

Thank you,
Dr [Doctor Name]
[Practice Name]`,
  },
  "intake-forms": {
    title: "Patient Intake Form Template",
    metaDesc: "Free patient intake form template for healthcare professionals. Comprehensive intake for medical, therapy, and wellness practices.",
    intro: "A comprehensive intake form that collects the information you need before the first visit — saving time during the consultation and ensuring you are prepared.",
    template: `PATIENT INTAKE FORM

Personal Information
Name:
Date of Birth:
Email:
Phone:
Address:
Emergency Contact Name and Phone:

Medical History
Primary reason for visit today:
Current medications (name, dose, frequency):
Known allergies:
Previous surgeries or hospitalisations:
Chronic conditions (tick all that apply):
[ ] Diabetes [ ] Hypertension [ ] Heart disease
[ ] Thyroid [ ] Asthma [ ] Other: ___

Current Symptoms
Describe your main symptom:
When did this start?
Scale 1–10, how severe is it?
Does anything make it better or worse?

Lifestyle
Do you smoke? [ ] No [ ] Yes
Do you drink alcohol? [ ] No [ ] Occasionally [ ] Regularly
Exercise? [ ] None [ ] Light [ ] Moderate [ ] Regular

Consent
I consent to examination and treatment by [Practice Name].
[ ] I agree to the privacy policy.

Signature: ___________________  Date: ___________`,
  },
  "treatment-plan": {
    title: "Treatment Plan Template",
    metaDesc: "Free treatment plan template for solo healthcare professionals. Customisable for all specialties.",
    intro: "A clear, patient-facing treatment plan that sets expectations, documents the agreed approach, and gives patients something to refer to between visits.",
    template: `TREATMENT PLAN

Patient Name: ___________________
Date: ___________________
Practitioner: Dr ___________________

PRESENTING CONDITION
Primary diagnosis / reason for treatment:

TREATMENT GOALS
Short-term (4 weeks):
Long-term (3 months):

RECOMMENDED TREATMENT
Treatment type:
Frequency: ___ sessions per ___ weeks
Duration of each session: ___ minutes

SESSION PLAN
Session 1: [Date] — Assessment and initial treatment
Session 2: [Date] — Progress review
Session 3: [Date] — Continued treatment
Session 4: [Date] — Mid-point review
Session 5+: [Date] — Maintenance / discharge planning

HOME CARE / BETWEEN-SESSION INSTRUCTIONS
1.
2.
3.

REVIEW DATE: ___________________

Patient Consent
I understand and agree to the treatment plan described above.

Signature: ___________________  Date: ___________`,
  },
};

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = templates[slug];
  if (!t) return { title: "Template | Clinexy" };
  return {
    title: t.title + " | Clinexy",
    description: t.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/templates/${slug}` },
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = templates[slug];
  if (!t) notFound();

  return (
    <>
      <section style={{ background: 'var(--gray-50)', padding: '56px 0 0' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 20px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <Link href="/templates">Templates</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">{t.title}</span>
          </nav>
          <span className="tag-pill">Free Template</span>
          <h1 style={{ marginTop: '16px' }}>{t.title}</h1>
          <p className="prose" style={{ marginTop: '12px' }}>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          <h2>The template</h2>
          <pre style={{
            background: 'var(--gray-50)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            fontFamily: "'Courier New', monospace",
            fontSize: '13.5px',
            lineHeight: '1.7',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            color: 'var(--gray-700)',
          }}>
            {t.template}
          </pre>
          <p style={{ color: 'var(--gray-500)', fontSize: '13px', marginTop: '14px' }}>
            Replace all bracketed placeholders with your practice details before sending.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--blue-50)', padding: '40px 0', borderTop: '1px solid var(--blue-100)' }}>
        <div className="container section-narrow">
          <h3 style={{ color: 'var(--blue-700)' }}>Use this template automatically in Clinexy</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: '15px', marginBottom: '20px' }}>
            Clinexy builds this template into your workflow and sends it automatically at the right moment — no copy-paste required.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" id={`template-${slug}-cta`}>Start Free Trial</a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Free Templates for Healthcare Professionals",
  description: "Free templates for solo healthcare professionals: patient recall messages, Google review requests, intake forms, and treatment plans.",
  alternates: { canonical: "https://www.clinexy.com/templates" },
};

const templates = [
  { slug: "patient-recall-message", title: "Patient Recall Message Template", desc: "6-month recall message via WhatsApp and SMS that brings inactive patients back." },
  { slug: "google-review-request", title: "Google Review Request Template", desc: "Post-visit review request that converts satisfied patients into 5-star Google reviews." },
  { slug: "intake-forms", title: "Intake Form Templates", desc: "Comprehensive intake forms for medical, therapy, and wellness practices." },
  { slug: "treatment-plan", title: "Treatment Plan Templates", desc: "Customisable treatment plan templates for all healthcare specialties." },
];

export default function TemplatesPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Templates</span>
            <h1>Free templates for solo practitioners</h1>
            <p className="hero-sub">Copy-and-use templates for the communications and documents your practice needs every day.</p>
          </div>
        </div>
      </header>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container"><Link href="/">Home</Link><span className="crumb-sep">›</span><span className="crumb-current">Templates</span></div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {templates.map((t, i) => (
              <Link key={i} href={`/templates/${t.slug}`} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">Template</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
                <div className="resource-card-footer">View template →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading="Use these templates inside Clinexy" subtext="All templates are built into your Clinexy subscription." variant="inline" />
    </>
  );
}

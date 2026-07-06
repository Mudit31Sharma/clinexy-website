import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Contact Clinexy",
  description: "Get in touch with the Clinexy team. We are here to help you grow your practice.",
  alternates: { canonical: "https://www.clinexy.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '600px' }}>
            <span className="tag">Contact</span>
            <h1>Get in touch</h1>
            <p className="hero-sub">We are happy to help. Reach us by email, phone, or start a free trial and talk to us inside the platform.</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Contact</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px' }}>
            {[
              {
                title: "Email support",
                desc: "For general enquiries and support questions. We respond within 1 business day.",
                contact: "hello@clinexy.com",
                href: "mailto:hello@clinexy.com",
              },
              {
                title: "Sales",
                desc: "Talk to our team about your practice and how Clinexy can help you grow.",
                contact: "sales@clinexy.com",
                href: "mailto:sales@clinexy.com",
              },
              {
                title: "Phone (India)",
                desc: "Call us during business hours IST for immediate assistance.",
                contact: "+91 94126 25716",
                href: "tel:+919412625716",
              },
              {
                title: "Book a demo",
                desc: "See Clinexy live with a member of our team. 30-minute personalised walkthrough.",
                contact: "Schedule a demo →",
                href: "https://demo.clinexy.com/portal/onboarding-request",
              },
            ].map((c, i) => (
              <div key={i} className="card">
                <h3>{c.title}</h3>
                <p style={{ marginBottom: '12px' }}>{c.desc}</p>
                <a href={c.href} style={{ color: 'var(--blue-600)', fontWeight: 600, fontSize: '14px' }}>{c.contact}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Or start your free trial now" subtext="14-day free trial. No credit card. Get started in 30 minutes." variant="inline" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Practo Alternative — Clinexy",
  description: "Own your patients. Pay zero commission. The Practo alternative for solo doctors in India. ₹999/month.",
  alternates: { canonical: "https://www.clinexy.com/practo-alternative" },
};

export default function PractoAltPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Practo Alternative</span>
            <h1>Own your patients. Zero commission.</h1>
            <p className="hero-sub">With Practo, your patients belong to Practo's directory — subject to their algorithm and their commission. With Clinexy, your patients, your website, and your reviews are entirely yours.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="practo-alt-trial">Try Clinexy Free</a>
              <Link href="/compare/clinexy-vs-practo" className="btn btn-secondary btn-lg">See Full Comparison</Link>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · ₹999/month after trial</p>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container section-narrow">
          <h2>Why solo doctors are switching from Practo to Clinexy</h2>
          <ul className="point-list dark">
            <li><strong>Zero commission.</strong> Practo takes a percentage of every booking. Clinexy charges a flat ₹999/month — no commissions, ever.</li>
            <li><strong>You own your patients.</strong> Your booking link on your domain. Patients book with you, not with Practo.</li>
            <li><strong>Your own website.</strong> A branded website with SEO, on your own domain. Practo gives you a profile on their platform.</li>
            <li><strong>Your own reviews.</strong> Your Google reviews belong to your Google profile. Not trapped on Practo's platform.</li>
            <li><strong>WhatsApp reminders that cut no-shows.</strong> 3-touch sequence. Practo's reminders are basic by comparison.</li>
          </ul>
          <Link href="/compare/clinexy-vs-practo" className="btn btn-ghost" style={{ marginTop: '24px' }}>See the full comparison →</Link>
        </div>
      </section>
      <CTABanner heading="Move from Practo to Clinexy" subtext="₹999/month. No commission. Your patients, your practice." variant="inline" />
    </>
  );
}

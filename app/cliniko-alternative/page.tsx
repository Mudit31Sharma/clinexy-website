import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cliniko Alternative — Clinexy",
  description: "Looking for a Cliniko alternative? Clinexy adds website builder, local SEO, telehealth, and Google reviews. $99/month.",
  alternates: { canonical: "https://www.clinexy.com/cliniko-alternative" },
};

export default function ClinikoAltPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Cliniko Alternative</span>
            <h1>The Cliniko alternative with growth built in</h1>
            <p className="hero-sub">Cliniko is excellent for scheduling and records. Clinexy does all of that and adds the growth tools — website, SEO, telehealth, and reviews — in one subscription at a similar price.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="cliniko-alt-trial">Try Clinexy Free</a>
              <Link href="/compare/clinexy-vs-cliniko" className="btn btn-secondary btn-lg">See Full Comparison</Link>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · Migrate from Cliniko in 10 minutes</p>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container section-narrow">
          <h2>What Clinexy adds over Cliniko</h2>
          <ul className="point-list dark">
            <li><strong>Telehealth included.</strong> Cliniko requires a third-party integration. Clinexy has it built in.</li>
            <li><strong>Website on your domain.</strong> Cliniko has no website builder. Clinexy includes one.</li>
            <li><strong>Local SEO tools.</strong> Rank in the map pack for your specialty. Not included in Cliniko.</li>
            <li><strong>Google review automation.</strong> Collect 50+ reviews in 90 days automatically.</li>
            <li><strong>WhatsApp reminders.</strong> 3-touch sequence. Cliniko offers SMS only.</li>
          </ul>
          <Link href="/compare/clinexy-vs-cliniko" className="btn btn-ghost" style={{ marginTop: '24px' }}>See the full comparison →</Link>
        </div>
      </section>
      <CTABanner heading="Switch from Cliniko in 10 minutes" subtext="CSV import included. 14-day free trial. All features from day one." variant="inline" />
    </>
  );
}

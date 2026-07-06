import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Jane App Alternative — Clinexy",
  description: "Looking for a Jane App alternative? Clinexy adds website builder, local SEO, WhatsApp reminders, and reviews. $99/month.",
  alternates: { canonical: "https://www.clinexy.com/jane-alternative" },
};

export default function JaneAltPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Jane App Alternative</span>
            <h1>The Jane App alternative with operations and growth in one</h1>
            <p className="hero-sub">Jane does clinical operations well. Clinexy adds the patient acquisition tools Jane doesn't include — website, SEO, WhatsApp reminders, and reviews — in one subscription.</p>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="jane-alt-trial">Try Clinexy Free</a>
              <Link href="/compare/clinexy-vs-jane" className="btn btn-secondary btn-lg">See Full Comparison</Link>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card · Migrate from Jane in 10 minutes</p>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container section-narrow">
          <h2>What Clinexy adds over Jane</h2>
          <ul className="point-list dark">
            <li><strong>Website on your domain.</strong> Jane offers a booking widget only. Clinexy builds your full website.</li>
            <li><strong>Local SEO tools.</strong> Rank in the map pack. Not included in Jane.</li>
            <li><strong>Google review automation.</strong> Automated post-visit requests. Not available in Jane.</li>
            <li><strong>WhatsApp reminders.</strong> 3-touch sequence. Jane offers email only.</li>
            <li><strong>Personal branding.</strong> Your bio, credentials, and patient stories on your own website.</li>
          </ul>
          <Link href="/compare/clinexy-vs-jane" className="btn btn-ghost" style={{ marginTop: '24px' }}>See the full comparison →</Link>
        </div>
      </section>
      <CTABanner heading="Switch from Jane in 10 minutes" subtext="CSV import included. 14-day free trial." variant="inline" />
    </>
  );
}

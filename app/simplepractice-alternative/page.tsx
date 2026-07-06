import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'SimplePractice Alternative — Clinexy',
  description: 'Looking for a SimplePractice alternative? Clinexy adds website builder, local SEO, and Google reviews to clinical tools. $99/month.',
  alternates: { canonical: 'https://www.clinexy.com/simplepractice-alternative' },
};

export default function SimplePracticeAltPage() {
  return (
    <>
      <header className='hero'>
        <div className='hero-inner' style={{ gridTemplateColumns: '1fr' }}>
          <div className='hero-content' style={{ maxWidth: '640px' }}>
            <span className='tag'>SimplePractice Alternative</span>
            <h1>The SimplePractice alternative with growth built in</h1>
            <p className='hero-sub'>SimplePractice handles clinical operations well. Clinexy does that and adds the patient acquisition tools SimplePractice leaves out — website builder, local SEO, and Google review automation — in one subscription.</p>
            <div className='hero-ctas'>
              <a href='https://demo.clinexy.com/portal/onboarding-request' className='btn btn-primary btn-lg' id='sp-alt-trial'>Try Clinexy Free</a>
              <Link href='/compare/clinexy-vs-simplepractice' className='btn btn-secondary btn-lg'>See Full Comparison</Link>
            </div>
            <p className='hero-reassure'>14-day free trial · No credit card · Migrate from SimplePractice in 10 minutes</p>
          </div>
        </div>
      </header>
      <section className='section'>
        <div className='container section-narrow'>
          <h2>What Clinexy adds over SimplePractice</h2>
          <ul className='point-list dark'>
            <li><strong>Website on your domain.</strong> Not a booking widget on SimplePractice's domain — your own website, with SEO built in.</li>
            <li><strong>Local SEO tools.</strong> Rank for 'therapist near me' or 'doctor in [city]'. SimplePractice doesn't include this.</li>
            <li><strong>Google review automation.</strong> Collect 50+ reviews in 90 days. SimplePractice has no built-in review tool.</li>
            <li><strong>WhatsApp reminders.</strong> 3-touch sequence via WhatsApp, SMS, and email. SimplePractice offers email only.</li>
            <li><strong>Personal branding.</strong> Your bio, credentials, and testimonials on a page that patients trust.</li>
          </ul>
          <Link href='/compare/clinexy-vs-simplepractice' className='btn btn-ghost' style={{ marginTop: '24px' }}>See the full comparison →</Link>
        </div>
      </section>
      <CTABanner heading='Switch from SimplePractice in 10 minutes' subtext='CSV import included. 14-day free trial. All features from day one.' variant='inline' />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Clinexy Malaysia — Practice Management for Malaysian Doctors',
  description: 'Clinexy for Malaysia: solo doctor practice management, online booking, telehealth, and local SEO.',
  alternates: { canonical: 'https://www.clinexy.com/my' },
};

export default function MalaysiaPage() {
  return (
    <>
      <header className='hero'>
        <div className='hero-inner' style={{ gridTemplateColumns: '1fr' }}>
          <div className='hero-content' style={{ maxWidth: '640px' }}>
            <span className='tag'>Clinexy Malaysia</span>
            <h1>Practice management for Malaysian healthcare professionals</h1>
            <p className='hero-sub'>Online booking, telehealth, local SEO, and WhatsApp reminders for solo practitioners in Malaysia. MYR billing available.</p>
            <div className='hero-ctas'>
              <a href='https://demo.clinexy.com/portal/onboarding-request' className='btn btn-primary btn-lg' id='my-trial'>Start Free Trial</a>
            </div>
          </div>
        </div>
      </header>
      <nav className='breadcrumbs' aria-label='Breadcrumb'>
        <div className='container'><Link href='/'>Home</Link><span className='crumb-sep'>›</span><span className='crumb-current'>Malaysia</span></div>
      </nav>
      <section className='section'>
        <div className='container section-narrow'>
          <h2>Built for solo practitioners in Malaysia</h2>
          <ul className='point-list dark'>
            <li>Full Clinexy platform at global pricing (/month)</li>
            <li>WhatsApp reminders — the primary channel in Malaysia</li>
            <li>Local SEO for Kuala Lumpur, Penang, Johor Bahru, and other cities</li>
            <li>MYR billing option</li>
          </ul>
        </div>
      </section>
      <CTABanner heading='Start your free trial in Malaysia' subtext='14-day free trial. No credit card needed.' variant='inline' />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Clinexy Indonesia — Practice Management for Indonesian Doctors',
  description: 'Clinexy for Indonesia: solo doctor practice management, online booking, and local SEO for Indonesian cities.',
  alternates: { canonical: 'https://www.clinexy.com/id' },
};

export default function IndonesiaPage() {
  return (
    <>
      <header className='hero'>
        <div className='hero-inner' style={{ gridTemplateColumns: '1fr' }}>
          <div className='hero-content' style={{ maxWidth: '640px' }}>
            <span className='tag'>Clinexy Indonesia</span>
            <h1>Practice management for Indonesian healthcare professionals</h1>
            <p className='hero-sub'>Online booking, telehealth, local SEO, and WhatsApp reminders for solo practitioners in Indonesia.</p>
            <div className='hero-ctas'>
              <a href='https://demo.clinexy.com/portal/onboarding-request' className='btn btn-primary btn-lg' id='id-trial'>Start Free Trial</a>
            </div>
          </div>
        </div>
      </header>
      <nav className='breadcrumbs' aria-label='Breadcrumb'>
        <div className='container'><Link href='/'>Home</Link><span className='crumb-sep'>›</span><span className='crumb-current'>Indonesia</span></div>
      </nav>
      <section className='section'>
        <div className='container section-narrow'>
          <h2>Built for solo practitioners in Indonesia</h2>
          <ul className='point-list dark'>
            <li>Full Clinexy platform at global pricing (/month)</li>
            <li>WhatsApp reminders — the primary channel in Indonesia</li>
            <li>Local SEO for Jakarta, Surabaya, Bali, Bandung, and other cities</li>
            <li>IDR billing option</li>
          </ul>
        </div>
      </section>
      <CTABanner heading='Start your free trial in Indonesia' subtext='14-day free trial. No credit card needed.' variant='inline' />
    </>
  );
}

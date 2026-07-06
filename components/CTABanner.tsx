import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'dark' | 'inline';
}

export default function CTABanner({
  heading = 'Ready to grow your practice?',
  subtext = 'Start free today. The whole platform, set up in a day.',
  primaryLabel = 'Start Free Trial',
  primaryHref = 'https://demo.clinexy.com/portal/onboarding-request',
  secondaryLabel = 'Book a Demo',
  secondaryHref = 'https://demo.clinexy.com/portal/onboarding-request',
  variant = 'dark',
}: CTABannerProps) {
  if (variant === 'inline') {
    return (
      <section className="inline-cta">
        <div className="container">
          <h2>{heading}</h2>
          {subtext && <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '16px' }}>{subtext}</p>}
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a href={primaryHref} className="btn btn-primary btn-lg" id="cta-primary-trial">
              {primaryLabel}
            </a>
            <a href={secondaryHref} className="btn btn-ghost-light btn-lg" id="cta-primary-demo">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '72px 0' }}>
      <div className="container">
        <div className="cta-banner">
          <h2 style={{ marginBottom: '12px' }}>{heading}</h2>
          <p>{subtext}</p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a href={primaryHref} className="btn btn-primary btn-lg" id="cta-banner-trial">
              {primaryLabel}
            </a>
            <a href={secondaryHref} className="btn btn-ghost-light btn-lg" id="cta-banner-demo">
              {secondaryLabel}
            </a>
          </div>
          <p style={{ marginTop: '16px', fontSize: '12.5px', color: 'rgba(255,255,255,0.45)', marginBottom: 0 }}>
            14-day free trial · No credit card required · Set up in a day
          </p>
        </div>
      </div>
    </section>
  );
}

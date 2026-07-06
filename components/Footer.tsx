import Link from 'next/link';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 36" width="120" height="32" aria-label="Clinexy">
    <g>
      <circle cx="18" cy="18" r="16" fill="none" stroke="#1F6AE1" strokeWidth="2.5"/>
      <rect x="13" y="9" width="4" height="14" rx="1" fill="#1F6AE1"/>
      <rect x="9" y="13" width="14" height="4" rx="1" fill="#1F6AE1"/>
      <path d="M21 8 Q26 6 28 11 Q24 13 21 12 Z" fill="#1F6AE1"/>
    </g>
    <text x="42" y="24" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="white" letterSpacing="0.5">CLINEXY</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: '48px' }}>
        <div className="footer-brand">
          <div className="footer-logo">
            <Logo />
          </div>
          <p className="footer-tagline">Manage appointments. Reduce no-shows. Grow your practice.</p>
          <p className="footer-contact">hello@clinexy.com</p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><Link href="/features/online-booking">Online Booking</Link></li>
              <li><Link href="/features/telehealth">Telehealth</Link></li>
              <li><Link href="/features/patient-management">Patient Management</Link></li>
              <li><Link href="/features/website-builder">Website Builder</Link></li>
              <li><Link href="/features/reviews-reputation">Reviews</Link></li>
              <li><Link href="/features/local-seo">Local SEO</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              <li><Link href="/solutions/solo-doctors">Solo Doctors</Link></li>
              <li><Link href="/solutions/dentists">Dentists</Link></li>
              <li><Link href="/solutions/therapists">Therapists</Link></li>
              <li><Link href="/solutions/physiotherapists">Physiotherapists</Link></li>
              <li><Link href="/solutions/ayurveda-doctors">Ayurveda</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Patient Growth</h5>
            <ul>
              <li><Link href="/online-presence/local-seo">Local SEO</Link></li>
              <li><Link href="/online-presence/personal-branding">Branding</Link></li>
              <li><Link href="/patient-growth/get-more-patients">Get More Patients</Link></li>
              <li><Link href="/patient-growth/reduce-no-shows">Reduce No-Shows</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Compare</h5>
            <ul>
              <li><Link href="/compare">Compare Hub</Link></li>
              <li><Link href="/compare/clinexy-vs-practo">vs Practo</Link></li>
              <li><Link href="/compare/clinexy-vs-simplepractice">vs SimplePractice</Link></li>
              <li><Link href="/compare/clinexy-vs-cliniko">vs Cliniko</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link href="/guides/local-seo-for-doctors">Local SEO Guide</Link></li>
              <li><Link href="/guides/no-show-reduction">No-Show Guide</Link></li>
              <li><Link href="/templates/patient-recall-message">Recall Template</Link></li>
              <li><Link href="/case-studies/solo-doctors">Case Studies</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/why-clinexy">Why Clinexy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/compliance/abdm">ABDM</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Regions</h5>
            <ul>
              <li><Link href="/pricing/solo-doctors/india">India ₹999</Link></li>
              <li><Link href="/pricing/solo-doctors/global">Global $99</Link></li>
              <li><Link href="/in">India</Link></li>
              <li><Link href="/sg">Singapore</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bar">
          <p>© 2026 Clinexy. All rights reserved.</p>
          <div className="footer-bar-links">
            <Link href="/privacy">Privacy</Link>
            <span style={{ color: 'var(--gray-600)' }}>·</span>
            <Link href="/terms">Terms</Link>
            <span style={{ color: 'var(--gray-600)' }}>·</span>
            <Link href="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

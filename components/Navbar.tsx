'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 36" width="120" height="32" aria-label="Clinexy">
    <g>
      <circle cx="18" cy="18" r="16" fill="none" stroke="#1F6AE1" strokeWidth="2.5"/>
      <rect x="13" y="9" width="4" height="14" rx="1" fill="#1F6AE1"/>
      <rect x="9" y="13" width="14" height="4" rx="1" fill="#1F6AE1"/>
      <path d="M21 8 Q26 6 28 11 Q24 13 21 12 Z" fill="#1F6AE1"/>
    </g>
    <text x="42" y="24" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#1F2937" letterSpacing="0.5">CLINEXY</text>
  </svg>
);

const navConfig = [
  {
    label: 'Solutions',
    groups: [
      {
        title: 'Medical',
        items: [
          { label: 'Solo Doctors', href: '/solutions/solo-doctors' },
          { label: 'GPs', href: '/solutions/general-physicians' },
          { label: 'Dentists', href: '/solutions/dentists' },
          { label: 'Dermatologists', href: '/solutions/dermatologists' },
          { label: 'Pediatricians', href: '/solutions/pediatricians' },
          { label: 'OB-GYNs', href: '/solutions/gynecologists' },
          { label: 'Psychiatrists', href: '/solutions/psychiatrists' },
          { label: 'Orthopedics', href: '/solutions/orthopedics' },
          { label: 'ENT', href: '/solutions/ent-specialists' },
          { label: 'Ophthalmologists', href: '/solutions/ophthalmologists' },
          { label: 'Cardiologists', href: '/solutions/cardiologists' },
        ],
      },
      {
        title: 'Therapy & Holistic',
        items: [
          { label: 'Psychologists', href: '/solutions/psychologists' },
          { label: 'Therapists', href: '/solutions/therapists' },
          { label: 'Physiotherapists', href: '/solutions/physiotherapists' },
          { label: 'Chiropractors', href: '/solutions/chiropractors' },
          { label: 'Nutritionists', href: '/solutions/nutritionists' },
          { label: 'Ayurveda', href: '/solutions/ayurveda-doctors' },
          { label: 'Homeopathy', href: '/solutions/homeopathy-doctors' },
          { label: 'Alternative Therapy', href: '/solutions/alternative-therapy' },
        ],
      },
      {
        title: 'Aesthetic & Wellness',
        items: [
          { label: 'Cosmetic Clinics', href: '/solutions/cosmetic-clinics' },
          { label: 'Aesthetic Clinics', href: '/solutions/aesthetic-clinics' },
          { label: 'IVF Clinics', href: '/solutions/ivf-clinics' },
          { label: 'Fitness Trainers', href: '/solutions/fitness-trainers' },
          { label: 'Yoga Instructors', href: '/solutions/yoga-instructors' },
          { label: 'Personal Coaches', href: '/solutions/personal-coaches' },
        ],
      },
    ],
  },
  {
    label: 'Features',
    groups: [
      {
        title: 'Operations',
        items: [
          { label: 'Online Booking', href: '/features/online-booking' },
          { label: 'Telehealth', href: '/features/telehealth' },
          { label: 'Patient Management', href: '/features/patient-management' },
          { label: 'Billing', href: '/features/billing' },
          { label: 'Patient Portal', href: '/features/client-portal' },
          { label: 'WhatsApp Reminders', href: '/features/whatsapp-reminders' },
          { label: 'Smart Assistant', href: '/features/ai-appointment-assistant' },
        ],
      },
      {
        title: 'Growth',
        items: [
          { label: 'Website Builder', href: '/features/website-builder' },
          { label: 'Local SEO', href: '/features/local-seo' },
          { label: 'Reviews', href: '/features/reviews-reputation' },
          { label: 'Google Profile', href: '/features/google-business-profile' },
          { label: 'SEO Tools', href: '/features/doctor-seo-tools' },
          { label: 'Follow-Up', href: '/features/patient-followup-system' },
          { label: 'Patient Engagement', href: '/features/ai-patient-engagement' },
        ],
      },
    ],
  },
  {
    label: 'Patient Growth',
    groups: [
      {
        title: 'Online Presence',
        items: [
          { label: 'Local SEO', href: '/online-presence/local-seo' },
          { label: 'Google Profile', href: '/online-presence/google-business-profile' },
          { label: 'Personal Branding', href: '/online-presence/personal-branding' },
          { label: 'Reviews', href: '/online-presence/reviews-reputation' },
          { label: 'Social Media', href: '/online-presence/social-media' },
        ],
      },
      {
        title: 'Patient Growth',
        items: [
          { label: 'Get More Patients', href: '/patient-growth/get-more-patients' },
          { label: 'Reduce No-Shows', href: '/patient-growth/reduce-no-shows' },
          { label: 'Patient Retention', href: '/patient-growth/patient-retention' },
          { label: 'Recall Strategies', href: '/patient-growth/recall-strategies' },
        ],
      },
    ],
  },
  {
    label: 'Compare',
    rightAlign: true,
    groups: [
      {
        title: 'vs Platforms',
        items: [
          { label: 'Compare Hub', href: '/compare' },
          { label: 'vs Practo', href: '/compare/clinexy-vs-practo' },
          { label: 'vs SimplePractice', href: '/compare/clinexy-vs-simplepractice' },
          { label: 'vs Cliniko', href: '/compare/clinexy-vs-cliniko' },
          { label: 'vs Jane', href: '/compare/clinexy-vs-jane' },
          { label: 'vs Healthie', href: '/compare/clinexy-vs-healthie' },
          { label: 'vs MocDoc', href: '/compare/clinexy-vs-mocdoc' },
        ],
      },
      {
        title: 'Alternatives',
        items: [
          { label: 'SimplePractice Alt', href: '/simplepractice-alternative' },
          { label: 'Cliniko Alt', href: '/cliniko-alternative' },
          { label: 'Jane Alt', href: '/jane-alternative' },
          { label: 'Practo Alt', href: '/practo-alternative' },
        ],
      },
    ],
  },
  {
    label: 'PMS',
    rightAlign: true,
    groups: [
      {
        title: 'Practice Management',
        items: [
          { label: 'Practice Management Software', href: '/practice-management-software' },
          { label: 'For Therapists', href: '/practice-management-software-for-therapists' },
          { label: 'For Dentists', href: '/practice-management-software-for-dentists' },
          { label: 'For Doctors', href: '/practice-management-software-for-doctors' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    rightAlign: true,
    groups: [
      {
        title: 'Guides',
        items: [
          { label: 'Local SEO Guide', href: '/guides/local-seo-for-doctors' },
          { label: 'No-Show Reduction', href: '/guides/no-show-reduction' },
          { label: 'Google Reviews', href: '/guides/getting-google-reviews' },
          { label: 'Personal Branding', href: '/guides/personal-branding-for-doctors' },
          { label: 'Launch Private Practice', href: '/guides/launching-private-practice' },
        ],
      },
      {
        title: 'Templates & Reports',
        items: [
          { label: 'Recall Template', href: '/templates/patient-recall-message' },
          { label: 'Review Request', href: '/templates/google-review-request' },
          { label: 'Intake Forms', href: '/templates/intake-forms' },
          { label: 'Treatment Plans', href: '/templates/treatment-plan' },
          { label: 'No-Show Report 2026', href: '/reports/no-show-research-2026' },
          { label: 'Acquisition Benchmarks', href: '/reports/patient-acquisition-benchmarks' },
        ],
      },
      {
        title: 'Case Studies & Trust',
        items: [
          { label: 'Case Studies', href: '/case-studies/solo-doctors' },
          { label: 'Security', href: '/security' },
          { label: 'ABDM', href: '/compliance/abdm' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav ref={navRef} className={`topnav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="Clinexy home" onClick={handleLogoClick}>
          <Logo />
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-list${mobileOpen ? ' open' : ''}`} role="menubar">
          {navConfig.map((item, idx) => (
            <li
              key={idx}
              className="nav-item"
              data-open={openMenu === idx ? 'true' : 'false'}
              role="none"
            >
              <button
                className="nav-trigger"
                aria-haspopup="true"
                aria-expanded={openMenu === idx}
                onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                role="menuitem"
              >
                {item.label}
                <span className="nav-caret">▾</span>
              </button>

              <div
                className={`mega-panel${openMenu === idx ? ' open' : ''}${item.rightAlign ? ' right-align' : ''}`}
                role="menu"
              >
                {item.groups.map((group, gIdx) => (
                  <div key={gIdx} className="mega-group">
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            role="menuitem"
                            onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}

          <li role="none">
            <Link href="/pricing/solo-doctors" className="nav-link" role="menuitem">
              Pricing
            </Link>
          </li>
          <li role="none">
            <Link href="/blog" className="nav-link" role="menuitem">
              Blog
            </Link>
          </li>

          {/* Mobile-only CTA buttons inside the drawer */}
          <li role="none" className="nav-mobile-cta">
            <a
              href="https://demo.clinexy.com/portal/onboarding-request"
              className="btn btn-ghost btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book a Demo
            </a>
            <a
              href="https://demo.clinexy.com/portal/onboarding-request"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Start Free Trial
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a
            href="https://demo.clinexy.com/portal/onboarding-request"
            className="btn btn-ghost btn-sm"
            id="nav-book-demo"
          >
            Book a Demo
          </a>
          <a
            href="https://demo.clinexy.com/portal/onboarding-request"
            className="btn btn-primary btn-sm"
            id="nav-start-trial"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Compare Clinexy vs SimplePractice, Cliniko, Jane & More | Clinexy",
  description:
    "Honest comparisons of Clinexy against SimplePractice, Cliniko, Jane, Healthie, Practo, and MocDoc. See where each is strong and why Clinexy adds the growth layer.",
  alternates: { canonical: "https://www.clinexy.com/compare" },
};

const faqs = [
  {
    q: "How does Clinexy compare to other practice management software?",
    a: "Clinexy matches the core operations of tools like SimplePractice, Cliniko, Jane, Healthie, Practo, and MocDoc, and adds a growth layer they lack: a website, local SEO, reviews, and branding, on one flat plan with no commissions.",
  },
  {
    q: "What makes Clinexy different?",
    a: "Most tools stop at operations. Clinexy also helps you get found, chosen, and rebooked, so the same software that runs your diary also brings new patients in.",
  },
  {
    q: "Is Clinexy more expensive?",
    a: "No. It is one flat plan at 99 dollars or 999 rupees a month with growth tools included. Once you add a website, SEO, and reviews elsewhere, an all-in-one plan is usually cheaper.",
  },
  {
    q: "Can I migrate from my current tool?",
    a: "Yes. Guided CSV migration from Practo, SimplePractice, Cliniko, Jane, and MocDoc is included free and usually takes about 10 minutes.",
  },
  {
    q: "Does Clinexy work outside the US?",
    a: "Yes. It works across India, the UK, Canada, Singapore, Australia, and more, with local currencies and compliance.",
  },
  {
    q: "Which comparison should I read?",
    a: "Pick the tool you use or are considering below. Each comparison is honest about where the other tool is strong and where Clinexy does more.",
  },
  {
    q: "Does Clinexy charge commissions?",
    a: "No. There are no per-appointment or lead commissions, unlike some directory-based tools.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. A 14-day free trial with no credit card, and no contract, so you can compare on your own practice.",
  },
  {
    q: "Does Clinexy include telehealth?",
    a: "Yes, in the base plan, with notes and prescriptions on the same record as the visit.",
  },
  {
    q: "How long does it take to switch?",
    a: "Most solo practices are live within a day, including the data import and a branded website.",
  },
];

const fullComparisons = [
  { href: "/compare/clinexy-vs-simplepractice", title: "Clinexy vs SimplePractice", desc: "Mature US clinical software vs operations plus growth." },
  { href: "/compare/clinexy-vs-cliniko", title: "Clinexy vs Cliniko", desc: "Clean allied-health operations vs operations plus growth." },
  { href: "/compare/clinexy-vs-jane", title: "Clinexy vs Jane", desc: "Loved charting vs operations plus the growth layer." },
  { href: "/compare/clinexy-vs-healthie", title: "Clinexy vs Healthie", desc: "US programs and telehealth vs programs plus local growth." },
  { href: "/compare/clinexy-vs-practo", title: "Clinexy vs Practo", desc: "A rented directory vs an owned presence." },
  { href: "/compare/clinexy-vs-mocdoc", title: "Clinexy vs MocDoc", desc: "Broad clinic software vs focused solo software with growth." },
];

const alternatives = [
  { href: "/simplepractice-alternative", title: "SimplePractice Alternative", desc: "Operations plus growth, on one flat plan, worldwide." },
  { href: "/cliniko-alternative", title: "Cliniko Alternative", desc: "Clean operations with the growth tools added." },
  { href: "/jane-alternative", title: "Jane Alternative", desc: "Solid operations plus website, SEO, and reviews." },
  { href: "/practo-alternative", title: "Practo Alternative", desc: "Own your patients instead of renting a directory." },
];

const relatedPages = [
  { href: "/features/website-builder", title: "Website Builder", desc: "The growth piece most tools leave out." },
  { href: "/solutions/solo-doctors", title: "Clinexy for Solo Doctors", desc: "See the platform set up for your practice." },
  { href: "/guides/local-seo-for-doctors", title: "Guide: Local SEO for Doctors", desc: "Rank locally, which operations tools do not address." },
];

export default function ComparePage() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clinexy",
    "url": "https://www.clinexy.com/",
    "logo": "https://www.clinexy.com/assets/img/logo.svg",
    "description": "All-in-one patient growth and practice management platform for solo healthcare professionals.",
    "sameAs": [
      "https://www.linkedin.com/company/clinexy/",
      "https://www.facebook.com/clinexyapp"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 94126 25716",
        "email": "sales@clinexy.com",
        "contactType": "customer support"
      }
    ]
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.clinexy.com/" },
      { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.clinexy.com/compare" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Compare Clinexy vs SimplePractice, Cliniko, Jane & More",
    "description": "Honest comparisons of Clinexy against SimplePractice, Cliniko, Jane, Healthie, Practo, and MocDoc. See where each is strong and why Clinexy adds the growth layer.",
    "url": "https://www.clinexy.com/compare"
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag">Compare</span>
            <h1>Compare Clinexy with the alternatives</h1>
            <p className="hero-sub">
              Honest, side-by-side comparisons of Clinexy against the tools solo practices know best.
              We give the other tool real credit, then show where Clinexy does more.
            </p>
            <ul className="point-list hero-points">
              <li>See exactly what brings in new patients.</li>
              <li>Track your growth month over month.</li>
              <li>Decide with data, not guesswork.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="compare-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="compare-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · Free guided migration · Switch in a day</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/assets/img/analytics.svg"
                alt="Comparing practice management software for solo practices"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Honest comparisons</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span className="crumb-sep">›</span>
          <span className="crumb-current">Compare</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy is an all-in-one platform for solo healthcare professionals. It matches the core operations of tools
            like SimplePractice, Cliniko, Jane, Healthie, Practo, and MocDoc, and adds a growth layer they lack: a website,
            local SEO, reviews, and branding, on one flat plan with no commissions. The comparisons below are honest about
            where each tool is strong and where Clinexy does more.
          </p>
        </div>
      </aside>

      {/* Comparison Snapshot */}
      <section className="section">
        <div className="container">
          <h2>Clinexy at a glance vs the main tools</h2>
          <p className="lead">Most tools cover operations. The difference shows up in the growth layer.</p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="col-clinexy">Clinexy</th>
                  <th>SimplePractice</th>
                  <th>Cliniko</th>
                  <th>Jane</th>
                  <th>Practo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Booking and records</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Telehealth included</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>Tiered</td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Website builder</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>Basic</td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>Profile</td>
                </tr>
                <tr>
                  <th scope="row">Local SEO tools</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Review automation</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>Limited</td>
                  <td>Platform</td>
                </tr>
                <tr>
                  <th scope="row">Personal branding</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                  <td>
                    <span className="cross">No</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Commissions</th>
                  <td className="col-clinexy">None</td>
                  <td>None</td>
                  <td>None</td>
                  <td>None</td>
                  <td>Often</td>
                </tr>
                <tr>
                  <th scope="row">Multi-region</th>
                  <td className="col-clinexy">
                    <span className="tick">Yes</span>
                  </td>
                  <td>US</td>
                  <td>
                    <span className="tick">Yes</span>
                  </td>
                  <td>US/CA</td>
                  <td>India</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="prose" style={{ marginTop: "20px" }}>
            The pattern is consistent: booking and records are table stakes everywhere, but the website, local SEO,
            reviews, and branding that bring new patients in are where Clinexy stands apart.
          </p>
        </div>
      </section>

      {/* Full Comparisons */}
      <section className="section">
        <div className="container">
          <h2>Full comparisons</h2>
          <p className="lead">Pick the tool you use or are considering. Each comparison is balanced and detailed.</p>
          <div className="related-grid">
            {fullComparisons.map((c, i) => (
              <Link key={i} href={c.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="section">
        <div className="container">
          <h2>Looking for an alternative?</h2>
          <p className="lead">If you are actively shopping for a switch, start here.</p>
          <div className="related-grid">
            {alternatives.map((a, i) => (
              <Link key={i} href={a.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to compare */}
      <section className="section">
        <div className="container section-narrow">
          <h2>How to compare practice management software</h2>
          <p className="prose">When you weigh any two tools, the sticker price and feature list only tell part of the story. For a solo practice, six questions matter more.</p>
          <ul className="point-list">
            <li>
              <strong>Does it bring patients in?</strong> Booking and records are table stakes. A website, local SEO, and reviews are what grow a practice.
            </li>
            <li>
              <strong>What is the true total cost?</strong> Add the add-ons and separate tools. A cheap base plan often costs more once complete.
            </li>
            <li>
              <strong>Are there commissions?</strong> Per-booking or lead fees quietly tax your margin as you grow.
            </li>
            <li>
              <strong>Do you own your presence?</strong> A website and reviews on your own domain are an asset; a rented profile is not.
            </li>
            <li>
              <strong>Does it fit your region?</strong> Local currency, payment methods, and compliance matter outside the US.
            </li>
            <li>
              <strong>Can you leave?</strong> Your data should export cleanly, with no lock-in.
            </li>
          </ul>
        </div>
      </section>

      {/* Why all-in-one wins */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why all-in-one wins for a solo practice</h2>
          <p className="prose">The biggest difference across these comparisons is not any single feature. It is whether your tools are connected. Running on a booking app, a billing tool, a reminder service, a website builder, and a reviews tool means paying five subscriptions for five things that do not share data.</p>
          <p className="prose">Every handoff is a chance to lose time, money, or a patient. A booking with no reminder becomes a no-show. A visit that never asks for a review becomes a missed five stars. A all-in-one platform removes the gaps, so the work compounds: a happy visit becomes a review, the review lifts your ranking, the ranking brings the next patient. That is why most solo practitioners who want to grow choose a single platform, and why it usually costs less than the tools it replaces.</p>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="inline-cta">
        <div className="container">
          <h3>Compare Clinexy on your own practice</h3>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
            <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
          </div>
        </div>
      </section>

      {/* Secure & Compliant */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Secure, compliant, and yours to leave</h2>
          <p className="prose">
            Whichever tool you switch from, your patient data is protected. Records are encrypted with AES-256 at rest and TLS 1.3 in transit,
            access is controlled, and your information is exportable at any time and never sold. One honest plan covers operations and growth:
            999 rupees a month in India or 99 US dollars globally, with no commissions and a 14-day free trial.
          </p>
          <div className="trust-row">
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "4px" }}>
                <path d="M20 6 9 17l-5-5" />
              </svg> HIPAA-aligned
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "4px" }}>
                <path d="M20 6 9 17l-5-5" />
              </svg> GDPR ready
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "4px" }}>
                <path d="M20 6 9 17l-5-5" />
              </svg> DPDP &amp; PDPA
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "4px" }}>
                <path d="M20 6 9 17l-5-5" />
              </svg> AES-256 encryption
            </span>
          </div>
          <p className="prose" style={{ marginTop: "18px" }}>
            See <Link href="/features/website-builder">the website builder</Link>, <Link href="/online-presence/local-seo">local SEO</Link>, and <Link href="/guides/local-seo-for-doctors">the local SEO guide</Link> for the growth tools that set Clinexy apart, or explore by <Link href="/solutions/solo-doctors">practice type</Link>.
          </p>
        </div>
      </section>

      {/* The real cost */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The real cost of staying on the wrong tool</h2>
          <p className="prose">When you compare options, it is easy to focus on the effort of switching and forget the cost of standing still. For a solo practice, the wrong software is expensive in ways that never show on an invoice.</p>
          <p className="prose">
            <strong>Money.</strong> A base plan plus a website tool, a reminder service, and a reviews app usually costs more than one platform that does it all, before you count per-booking commissions.
          </p>
          <p className="prose">
            <strong>Time.</strong> Tools that do not share data mean re-typing and reconciling, a few minutes here and there that add up to hours a week over a year.
          </p>
          <p className="prose">
            <strong>Lost patients.</strong> The quietest cost is the largest: a booking with no reminder becomes a no-show, a happy visit that is never asked for a review becomes a missed five stars, and a practice with no real website stays invisible to patients searching right now.
          </p>
          <p className="prose">
            <strong>Opportunity.</strong> Growth compounds, so a year on operations-only software is a year of rankings, reviews, and reputation you did not build. Set against that, the cost of switching, a same-day guided import with your old data still exportable, is small.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-faq">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Box */}
      <section className="section">
        <div className="container section-narrow">
          <div className="summary-box">
            <h2>Summary</h2>
            <p className="prose">Clinexy matches the operations of the major tools and adds the growth layer they lack. Key points:</p>
            <ul className="point-list">
              <li>Operations on par with SimplePractice, Cliniko, Jane, Healthie, Practo, and MocDoc.</li>
              <li>A website, local SEO, reviews, and branding that they do not include.</li>
              <li>One flat plan, no commissions, and multi-region pricing.</li>
              <li>Free, guided, same-day migration from any of them.</li>
              <li>Read the honest, detailed comparison for your current tool above.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section section-related">
        <div className="container">
          <h2>Related pages</h2>
          <div className="related-grid">
            {relatedPages.map((rp, i) => (
              <Link key={i} href={rp.href} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{rp.title}</h4>
                <p>{rp.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Try Clinexy free, migrate in a day"
        subtext="Keep what works about your current tool. Add the growth tools that bring patients in."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "The Clinexy Blog: Growth for Solo Practices",
  description:
    "Practical insights on patient growth, no-shows, reviews, local SEO, and personal branding for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/blog" },
};

const faqs = [
  {
    q: "What does the blog cover?",
    a: "Practical growth for solo practices: acquisition, no-shows, reviews, local SEO, and branding.",
  },
  {
    q: "Are the posts free to read?",
    a: "Yes, all of them.",
  },
  {
    q: "Do the ideas apply to my specialty?",
    a: "Yes. The principles apply across medical, dental, therapy, and allied health.",
  },
  {
    q: "Can Clinexy automate what the posts describe?",
    a: "Yes. Most posts map to a feature that automates the work.",
  },
  {
    q: "How often do you publish?",
    a: "Regularly, with practical, evergreen reads.",
  },
  {
    q: "Where do I start?",
    a: "With the complete growth guide for solo doctors.",
  },
];

const posts = [
  {
    slug: "the-complete-growth-guide-for-solo-doctors",
    title: "The complete growth guide for solo doctors",
    desc: "Everything that gets a solo practice found, booked, and growing.",
  },
  {
    slug: "why-30-of-patients-dont-show-up",
    title: "Why 30% of patients don't show up",
    desc: "The real drivers of no-shows, and how to fix them.",
  },
  {
    slug: "how-to-find-the-best-dentist-near-you",
    title: "How patients find the best dentist near them",
    desc: "What patients look for, and how to be the clinic they choose.",
  },
  {
    slug: "solo-doctors-why-your-personal-brand-matters-more-than-your-degree",
    title: "Why your personal brand matters more than your degree",
    desc: "How a clear identity wins patients before the first visit.",
  },
  {
    slug: "the-growth-engine-for-solo-doctors",
    title: "The growth engine for solo doctors",
    desc: "How one connected platform compounds your growth.",
  },
  {
    slug: "your-digital-clinic-growth-assistant",
    title: "Your digital clinic and growth assistant",
    desc: "How automation handles the busywork so you focus on care.",
  },
];

export default function BlogPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.clinexy.com/blog" }
    ]
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Clinexy Blog: Growth for Solo Practices",
    "description": "Practical insights on patient growth, no-shows, reviews, local SEO, and personal branding for solo healthcare professionals.",
    "url": "https://www.clinexy.com/blog"
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
            <span className="tag">Blog</span>
            <h1>Insights for growing a solo practice</h1>
            <p className="hero-sub">
              Short, practical reads on getting found, cutting no-shows, and growing a solo practice,
              from the team behind the platform.
            </p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="blog-trial">
                Start Free Trial
              </a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="blog-demo">
                Book a Demo
              </a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in a day</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/assets/img/growth.svg"
                alt="Blog for solo healthcare professionals with Clinexy"
                loading="eager"
                width={600}
                height={420}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <div className="hero-photo-badge">
                <div className="badge-dot" />
                <span>Insights</span>
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
          <span className="crumb-current">Blog</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            The Clinexy blog covers the practical side of growing a solo practice: patient acquisition, no-shows, reviews,
            local SEO, and personal branding. Each post is a short, useful read you can act on, and most map to a tool that
            automates it.
          </p>
        </div>
      </aside>

      {/* What Clinexy does */}
      <section className="section">
        <div className="container">
          <h2>What Clinexy does for your practice</h2>
          <p className="lead">You focus on your patients. We run the online presence and automation that bring them in and keep them coming back.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3>Get found</h3>
              <p>A website on your own domain, local SEO, and a Google profile that climbs the map pack, so the right patients find you.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <h3>Get chosen</h3>
              <p>Automated reviews, a warm personal brand, and social content that build the trust that wins the booking.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Get booked</h3>
              <p>24/7 online booking with smart reminders and recall, so your calendar fills and far fewer slots go empty.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1F6AE1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <h3>Focus on care</h3>
              <p>You handle the medicine. We handle the marketing and the admin, automatically, from one calm dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section">
        <div className="container">
          <h2>Latest posts</h2>
          <div className="related-grid">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="related-card" style={{ textDecoration: "none" }}>
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
                <span className="related-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why everything in one place */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why everything in one place</h2>
          <p className="prose">
            You did not train for years to spend your evenings on reminder texts, review requests, and a website that never quite happened.
            When your booking, records, website, reviews, and recall all live in one place and talk to each other, the busywork disappears
            and your practice grows quietly in the background.
          </p>
          <ul className="point-list">
            <li>
              <strong>One login, one bill.</strong> No stitching together five apps that do not share your data.
            </li>
            <li>
              <strong>Nothing slips.</strong> Every booking triggers a reminder, every visit earns a review, every lapsed patient gets a nudge.
            </li>
            <li>
              <strong>You stay in control.</strong> Your patients, your website, and your reviews are yours, on your own domain.
            </li>
            <li>
              <strong>Or hand it over.</strong> On the Done-For-You plan, we run the whole growth side for you.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Grow your practice with Clinexy"
        subtext="Start free today. Turn these insights into an automated system."
      />

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
    </>
  );
}

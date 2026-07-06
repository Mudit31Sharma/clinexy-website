import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

// ─── Per-study data ────────────────────────────────────────────────────────────
const studies: Record<
  string,
  {
    title: string;
    metaDesc: string;
    canonical: string;
    heroBadge: string;
    heroH1: string;
    heroSub: string;
    quickAnswer: string;
    practiceLabel: string;
    practiceBody: string;
    stats: { num: string; label: string }[];
    challengeIntro: string;
    challengePoints: string[];
    challengeClose?: string;
    changeIntro: string;
    changePoints: string[];
    changeLink?: { href: string; label: string };
    resultIntro: string;
    resultPoints: string[];
    resultLink?: { href: string; label: string };
    inlineCtaH3: string;
    testimonial: string;
    testimonialInitials: string;
    testimonialName: string;
    testimonialRole: string;
    howClinexySays: string;
    finalCtaH2: string;
    finalCtaP: string;
    relatedPages: { href: string; h4: string; p: string }[];
    faqs: { q: string; a: string }[];
    summaryIntro: string;
    summaryPoints: string[];
  }
> = {
  "solo-doctors": {
    title: "Solo Doctor Success Stories | Clinexy",
    metaDesc:
      "How solo doctors use Clinexy to cut no-shows, fill their calendars, and get found on Google. Labelled-composite results across specialties, with the numbers that matter.",
    canonical: "https://www.clinexy.com/case-studies/solo-doctors",
    heroBadge: "Case study",
    heroH1: "How solo doctors grow with Clinexy",
    heroSub:
      "Solo doctors using Clinexy typically cut no-shows from 25-35% to under 10%, gather 50 or more reviews in 90 days, reach the local top three within 6 to 12 months.",
    quickAnswer:
      "Solo doctors using Clinexy typically cut no-shows from 25-35% to under 10%, gather 50 or more reviews in 90 days, reach the local top three within 6 to 12 months, and win back roughly a day a week from automated admin. These are labelled-composite results drawn from common outcomes across specialties, not a single named client.",
    practiceLabel: "In short",
    practiceBody:
      "These are labelled-composite case examples, drawn from the common results solo practices see on Clinexy. They are illustrative of typical outcomes rather than the record of one named client.",
    stats: [
      { num: "<10%", label: "no-show rate, down from 25 to 35 percent" },
      { num: "50+", label: "reviews in 90 days" },
      { num: "Top 3", label: "local ranking by 6 to 12 months" },
      { num: "+1 day", label: "a week back from automated admin" },
    ],
    challengeIntro: "A common starting point is a good clinician who is invisible online and runs on disconnected tools.",
    challengePoints: [
      "A directory profile and little else online.",
      "A 30 percent no-show rate, untracked.",
      "A handful of old reviews.",
      "Admin spilling into the evenings.",
    ],
    challengeClose: "Within three months of moving to one platform, the picture changes completely.",
    changeIntro: "The fix is rarely dramatic. It is the basics, done consistently and automatically.",
    changePoints: [
      "A branded website on their own domain, ranking locally.",
      "A 3-touch reminder sequence that cut no-shows to single digits.",
      "Automated review requests that passed fifty reviews.",
      "Recall that brought lapsed patients back.",
    ],
    changeLink: { href: "/solutions/solo-doctors", label: "solo doctors" },
    resultIntro: "The real win is that the channels reinforce each other over time.",
    resultPoints: [
      "More reviews lifted local ranking.",
      "Higher ranking brought more new patients.",
      "Better retention raised lifetime value.",
      "Referrals fed the next month's growth.",
    ],
    resultLink: { href: "/patient-growth/get-more-patients", label: "how to get more patients" },
    inlineCtaH3: "See these results in your own practice",
    testimonial:
      '"I was paying for three separate tools and still felt invisible. Three months into Clinexy my reviews went from 5 to 78 and reception calls dropped 70 percent."',
    testimonialInitials: "EW",
    testimonialName: "Dr. Emma Wilson",
    testimonialRole: "Solo GP, London",
    howClinexySays: "Clinexy gives every solo doctor the same system behind these results.",
    finalCtaH2: "Grow your solo practice",
    finalCtaP: "Start free today. The same system behind these results, in one subscription.",
    relatedPages: [
      { href: "/solutions/solo-doctors", h4: "Clinexy for Solo Doctors", p: "See the platform set up for a solo practice." },
      { href: "/features/reviews-reputation", h4: "Reviews & Reputation", p: "The engine behind the review growth." },
      { href: "/guides/local-seo-for-doctors", h4: "Guide: Local SEO for Doctors", p: "The playbook behind the ranking results." },
    ],
    faqs: [
      { q: "Are these real case studies?", a: "They are labelled composites drawn from common results across solo practices, illustrative of typical outcomes rather than one named client." },
      { q: "What results can I expect?", a: "Most solo practices reach under 10 percent no-shows, 50 or more reviews in 90 days, and top-three local ranking within 6 to 12 months." },
      { q: "How long until I see results?", a: "No-shows fall immediately, reviews build over 90 days, and local ranking improves over 6 to 12 months." },
      { q: "Does it work for my specialty?", a: "Yes. The same system adapts across medical, dental, therapy, and allied health." },
      { q: "What drives the no-show reduction?", a: "A 3-touch reminder sequence with one-tap reschedule and a waitlist." },
      { q: "How do reviews build so fast?", a: "Every patient is asked automatically at the right moment with a one-tap link." },
      { q: "Is the growth sustainable?", a: "Yes. The channels compound, so growth becomes steadier over time." },
      { q: "Can I migrate my existing patients?", a: "Yes. A guided CSV import takes about 10 minutes and is free." },
      { q: "How much does it cost?", a: "One flat plan at 99 dollars or 999 rupees a month, with growth included." },
      { q: "Can I try it first?", a: "Yes. A 14-day free trial with no credit card." },
    ],
    summaryIntro: "Solo doctors grow on Clinexy by connecting operations and growth. Key points:",
    summaryPoints: [
      "No-shows under 10 percent within 90 days.",
      "50 or more reviews in the first 90 days.",
      "Top-three local ranking in 6 to 12 months.",
      "A day a week back from automation.",
      "Results that compound over time.",
    ],
  },

  "dr-priya-pune-dentist": {
    title: "Case Study: Dr. Priya, Pune Dentist | Clinexy",
    metaDesc:
      "How a solo dentist in Pune automated hygiene recall, passed 50 reviews in three months, and formed a waitlist after years on a directory. A labelled-composite case study.",
    canonical: "https://www.clinexy.com/case-studies/dr-priya-pune-dentist",
    heroBadge: "Case study",
    heroH1: "Case study: Dr. Priya, solo dentist in Pune",
    heroSub:
      "Dr. Priya, a labelled-composite solo dentist in Pune, spent years paying a directory and still felt invisible.",
    quickAnswer:
      "Dr. Priya, a labelled-composite solo dentist in Pune, spent years paying a directory and still felt invisible. Three months into Clinexy, her hygiene recalls were automated, reviews passed fifty, no-shows fell below 10 percent, and a waitlist began to form, all on one subscription with no per-appointment commissions.",
    practiceLabel: "Background",
    practiceBody:
      "Dr. Priya is a labelled-composite solo dentist in Pune, representative of common results. The details illustrate typical outcomes rather than one named individual. She ran a good practice but relied on a paid directory for visibility and tracked hygiene recalls on sticky notes, losing patients and revenue to missed returns.",
    stats: [
      { num: "50+", label: "reviews in three months" },
      { num: "<10%", label: "no-show rate" },
      { num: "+35%", label: "more hygiene recalls rebooked" },
      { num: "Waitlist", label: "forming by month three" },
    ],
    challengeIntro: "A directory dependency and a recall system held together by memory.",
    challengePoints: [
      "Paying a directory monthly and still feeling invisible.",
      "Hygiene recalls on sticky notes, often missed.",
      "Thin reviews in a competitive local market.",
      "No website of her own.",
    ],
    challengeClose: "The result was lost recalls and patients she never knew slipped away.",
    changeIntro: "Recall and growth were automated on one platform.",
    changePoints: [
      "Automatic six-month hygiene recall.",
      "A branded website with treatment pages.",
      "Automated review requests after each visit.",
      "Reminders and a waitlist to fill cancellations.",
    ],
    changeLink: { href: "/solutions/dentists", label: "dentists" },
    resultIntro: "Within a quarter the chair was full and the practice was growing.",
    resultPoints: [
      "Reviews passed fifty.",
      "No-shows fell below 10 percent.",
      "More hygiene patients returned on time.",
      "A waitlist began to form.",
    ],
    resultLink: { href: "/guides/local-seo-for-doctors", label: "local SEO guide" },
    inlineCtaH3: "See what a solo dentist achieved",
    testimonial:
      '"I paid a directory every month and still felt invisible, and our hygiene recalls were a mess of sticky notes. Three months into Clinexy the recalls were automatic, reviews climbed past fifty, and a waitlist was forming."',
    testimonialInitials: "PM",
    testimonialName: "Dr. Priya M.",
    testimonialRole: "Solo dentist, Pune",
    howClinexySays: "Clinexy gives any solo dentist the same recall-and-growth system.",
    finalCtaH2: "Fill your dental chair",
    finalCtaP: "Start free today. Recall, reviews, and reminders in one subscription.",
    relatedPages: [
      { href: "/solutions/dentists", h4: "Clinexy for Dentists", p: "See the platform set up for a dental practice." },
      { href: "/features/patient-followup-system", h4: "Patient Follow-Up System", p: "The recall engine behind the result." },
      { href: "/guides/getting-google-reviews", h4: "Guide: Getting Google Reviews", p: "The review playbook behind the growth." },
    ],
    faqs: [
      { q: "Is this a real case study?", a: "It is a labelled composite drawn from common dental results, illustrative of typical outcomes rather than one named individual." },
      { q: "How were hygiene recalls automated?", a: "Six-month recalls are scheduled and sent automatically, so patients return on time." },
      { q: "How did reviews grow?", a: "Every patient was asked automatically after their visit with a one-tap link." },
      { q: "Why did a waitlist form?", a: "Reminders, recall, and local SEO together brought in more demand than open slots." },
      { q: "Are there directory commissions?", a: "No. Clinexy is one flat plan with no per-appointment commissions." },
      { q: "Does it work in India?", a: "Yes. It supports rupee pricing, UPI, and DPDP compliance." },
      { q: "How long did setup take?", a: "Most practices are live in a day, including the website and data import." },
      { q: "Can I get similar results?", a: "Most solo dental practices see comparable outcomes when recall and growth are automated." },
      { q: "How much does it cost?", a: "999 rupees a month in India or 99 dollars globally." },
      { q: "Can I try it first?", a: "Yes. A 14-day free trial with no credit card." },
    ],
    summaryIntro: "A solo dentist filled the chair on one platform. Key points:",
    summaryPoints: [
      "Hygiene recall automated, lifting on-time returns.",
      "Reviews passed fifty in three months.",
      "No-shows fell below 10 percent.",
      "A waitlist began to form.",
      "No directory commissions, on one subscription.",
    ],
  },

  "dr-emma-wilson-london-gp": {
    title: "Case Study: Dr. Emma Wilson, London GP | Clinexy",
    metaDesc:
      "How Dr. Emma Wilson, a solo GP in London, replaced three tools, grew reviews from 5 to 78, and cut reception calls 70%. A labelled-composite case study.",
    canonical: "https://www.clinexy.com/case-studies/dr-emma-wilson-london-gp",
    heroBadge: "Case study",
    heroH1: "Case study: Dr. Emma Wilson, solo GP in London",
    heroSub:
      "Dr. Emma Wilson, a labelled-composite solo GP in London, replaced three separate tools with Clinexy.",
    quickAnswer:
      "Dr. Emma Wilson, a labelled-composite solo GP in London, replaced three separate tools with Clinexy. Within three months her reviews grew from 5 to 78, reception calls dropped 70 percent as bookings moved online, no-shows fell below 10 percent, and new patients began finding her on Google for the first time, all on one subscription.",
    practiceLabel: "Background",
    practiceBody:
      "Dr. Emma Wilson is a labelled-composite solo GP in London, representative of common results. The details illustrate typical outcomes rather than one named individual. Like many solo GPs, she was an excellent clinician running on a patchwork of tools, with a phone line that never stopped and almost no online presence.",
    stats: [
      { num: "5 to 78", label: "reviews in three months" },
      { num: "-70%", label: "reception calls" },
      { num: "<10%", label: "no-show rate" },
      { num: "Top 3", label: "local ranking" },
    ],
    challengeIntro: "Three disconnected tools, a jammed phone line, and an invisible online presence.",
    challengePoints: [
      "A booking app that did not talk to billing.",
      "No website beyond a directory listing.",
      "Reviews stuck at five, with no system to grow them.",
      "Reception overwhelmed by routine calls.",
    ],
    challengeClose: "The problem was not effort. It was the lack of a connected system.",
    changeIntro: "Everything moved onto one platform in an afternoon.",
    changePoints: [
      "Online booking moved routine scheduling off the phone.",
      "A branded website went live on her own domain.",
      "Automated review requests went out after every visit.",
      "A 3-touch reminder sequence cut no-shows.",
    ],
    changeLink: { href: "/solutions/general-physicians", label: "general physicians" },
    resultIntro: "Within a quarter the practice felt and performed differently.",
    resultPoints: [
      "Reviews grew from 5 to 78.",
      "Reception calls dropped 70 percent.",
      "No-shows fell below 10 percent.",
      "New patients arrived from Google.",
    ],
    resultLink: { href: "/patient-growth/get-more-patients", label: "how to get more patients" },
    inlineCtaH3: "See what a solo GP achieved",
    testimonial:
      '"I was paying for three separate tools and still felt invisible. Three months into Clinexy my reviews went from 5 to 78 and reception calls dropped 70 percent. New patients finally find me on Google."',
    testimonialInitials: "EW",
    testimonialName: "Dr. Emma Wilson",
    testimonialRole: "Solo GP, London",
    howClinexySays: "Clinexy gives any solo GP the same connected system.",
    finalCtaH2: "Transform your GP practice",
    finalCtaP: "Start free today. Booking, website, reviews, and reminders in one subscription.",
    relatedPages: [
      { href: "/solutions/general-physicians", h4: "Clinexy for General Physicians", p: "See the platform set up for a GP practice." },
      { href: "/features/online-booking", h4: "Online Booking", p: "What took calls off the phone line." },
      { href: "/guides/no-show-reduction", h4: "Guide: Reducing No-Shows", p: "The reminder playbook behind the result." },
    ],
    faqs: [
      { q: "Is this a real case study?", a: "It is a labelled composite drawn from common GP results, illustrative of typical outcomes rather than one named individual." },
      { q: "How did reviews grow so fast?", a: "Every patient was asked automatically after their visit with a one-tap link." },
      { q: "Why did reception calls drop?", a: "Routine booking and rescheduling moved online, freeing the phone." },
      { q: "How were no-shows reduced?", a: "A 3-touch reminder sequence with one-tap reschedule took them below 10 percent." },
      { q: "Did it work across her services?", a: "Yes. Booking, recall, and reviews apply across acute, chronic, and preventive care." },
      { q: "How long did setup take?", a: "About an afternoon, including a branded website and data import." },
      { q: "Does it suit a busy GP list?", a: "Yes. It is built to handle the volume of family medicine." },
      { q: "Can I get similar results?", a: "Most solo practices see comparable outcomes when they connect operations and growth." },
      { q: "How much does it cost?", a: "One flat plan at 99 dollars or 999 rupees a month." },
      { q: "Can I try it first?", a: "Yes. A 14-day free trial with no credit card." },
    ],
    summaryIntro: "A solo GP transformed her practice on one platform. Key points:",
    summaryPoints: [
      "Reviews grew from 5 to 78 in three months.",
      "Reception calls dropped 70 percent.",
      "No-shows fell below 10 percent.",
      "New patients arrived from Google.",
      "All on one subscription, set up in an afternoon.",
    ],
  },
};

// ─── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = studies[slug];
  if (!s) return { title: "Case Study | Clinexy" };
  return {
    title: s.title,
    description: s.metaDesc,
    alternates: { canonical: s.canonical },
    openGraph: { type: "article", images: [{ url: "/assets/img/og-default.png" }] },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = studies[slug];
  if (!s) notFound();

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clinexy",
    url: "https://www.clinexy.com/",
    logo: "https://www.clinexy.com/assets/img/logo.svg",
    description: "All-in-one patient growth and practice management platform for solo healthcare professionals.",
    sameAs: ["https://www.linkedin.com/company/clinexy/", "https://www.facebook.com/clinexyapp"],
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clinexy.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.clinexy.com/case-studies" },
      { "@type": "ListItem", position: 3, name: s.heroH1, item: s.canonical },
    ],
  };
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.heroH1,
    description: s.metaDesc,
    author: { "@type": "Organization", name: "Clinexy" },
    publisher: {
      "@type": "Organization",
      name: "Clinexy",
      logo: { "@type": "ImageObject", url: "https://www.clinexy.com/assets/img/logo.svg" },
    },
    datePublished: "2026-02-01",
    dateModified: "2026-06-15",
  };
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const checkSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="tag green">{s.heroBadge}</span>
            <h1>{s.heroH1}</h1>
            <p className="hero-sub">{s.heroSub}</p>
            <ul className="point-list hero-points">
              <li>Get found by patients searching for your specialty.</li>
              <li>Fill your calendar and cut no-shows automatically.</li>
              <li>Run bookings, branding, and reviews from one place.</li>
            </ul>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
              <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrap">
              <img className="hero-photo" src="/assets/img/growth.svg" alt={s.heroH1} loading="eager" width={600} height={420} />
              <div className="hero-photo-badge">
                <div className="badge-dot" /><span>Real results</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumbs">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <Link href="/case-studies">Case Studies</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">{s.heroH1}</span>
        </div>
      </nav>

      {/* Quick Answer */}
      <aside className="quick-answer container">
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>{s.quickAnswer}</p>
        </div>
      </aside>

      {/* Practice / Background */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The practice</h2>
          <div className="definition-box">
            <div className="dl">{s.practiceLabel}</div>
            <p>{s.practiceBody}</p>
          </div>
          <p className="prose">Across very different specialties, the pattern is the same: connect operations and growth on one platform, automate the repetitive work, and a feast-and-famine practice becomes a steady, predictable one.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <h2>Results in three months</h2>
          <p className="lead">What changed after moving to one platform.</p>
          <div className="stat-band">
            {s.stats.map((st, i) => (
              <div key={i} className="stat good">
                <div className="num">{st.num}</div>
                <div className="label">{st.label}</div>
                <div className="src">Clinexy practice data</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The challenge</h2>
          <p className="prose">{s.challengeIntro}</p>
          <ul className="point-list">
            {s.challengePoints.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
          {s.challengeClose && <p className="prose">{s.challengeClose}</p>}
        </div>
      </section>

      {/* The Change */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The change</h2>
          <p className="prose">{s.changeIntro}</p>
          <ul className="point-list">
            {s.changePoints.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
          {s.changeLink && (
            <p className="prose">See the tools on the <Link href={s.changeLink.href}>{s.changeLink.label}</Link> page.</p>
          )}
        </div>
      </section>

      {/* The Result */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The result</h2>
          <p className="prose">{s.resultIntro}</p>
          <ul className="point-list">
            {s.resultPoints.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
          {s.resultLink && (
            <p className="prose">This is the growth flywheel in action, covered in <Link href={s.resultLink.href}>{s.resultLink.label}</Link>.</p>
          )}
        </div>
      </section>

      {/* Inline CTA */}
      <section className="inline-cta">
        <div className="container">
          <h3>{s.inlineCtaH3}</h3>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
            <a className="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container section-narrow">
          <div className="testimonial">
            <blockquote>{s.testimonial}</blockquote>
            <div className="attrib">
              <div className="avatar">{s.testimonialInitials}</div>
              <div className="who">
                <strong>{s.testimonialName}</strong>
                <span>{s.testimonialRole}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="section">
        <div className="container section-narrow">
          <h2>The bottom line</h2>
          <p className="prose">A solo practice does not grow by working harder across scattered tools. It grows by connecting the work, so that booking, records, reminders, your website, reviews, and recall all pull in the same direction from one record. That is the difference between a busy week and a genuinely growing practice.</p>
          <p className="prose">Whatever brought you to this page, the next step is the same: put the pieces on one platform, from <Link href="/features/online-booking">online booking</Link> through to a clear plan to <Link href="/patient-growth/get-more-patients">get more patients</Link>, and let the basics run consistently. The trial is free, migration is same-day, and there is no contract, so the honest way to see it is to try it on your own practice.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container section-narrow">
          <h2>What good looks like: a realistic timeline</h2>
          <p className="prose">Whatever you are setting up from this page, results are steady rather than sudden. Knowing the shape of a normal timeline helps you keep going through the early weeks when the work is still building underneath the surface.</p>
          <p className="prose"><strong>Weeks 1 to 4.</strong> Setup. Your website goes live, your Google profile is completed, and reminders, reviews, and recall are switched on. Little is visible yet, but the foundations are in place.</p>
          <p className="prose"><strong>Months 1 to 2.</strong> First movement. Your profile starts appearing for local searches, the first automated reviews arrive, and no-shows begin to fall as reminders take hold.</p>
          <p className="prose"><strong>Months 3 to 6.</strong> Momentum. Reviews build into a steady flow, service and area pages begin ranking, and recall brings lapsed patients back. New patients increasingly say they found you on Google.</p>
          <p className="prose"><strong>Months 6 to 12.</strong> Compounding. Most solo practices reach the local top three for their core terms, the review count passes fifty, and a predictable inflow of new patients replaces the old feast-and-famine pattern. The practices that win are simply the ones that keep the basics running, which is exactly what Clinexy automates.</p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Common mistakes to avoid</h2>
          <p className="prose">Most practices lose ground for a handful of avoidable reasons. Watch for these.</p>
          <ul className="x-list">
            <li><strong>Treating growth as a one-off.</strong> It is ongoing upkeep, not a single push that fades.</li>
            <li><strong>Renting instead of owning.</strong> Relying on a directory leaves you beside every competitor with nothing that says why you.</li>
            <li><strong>Inconsistent details.</strong> A different phone or address across the web tells Google not to trust you.</li>
            <li><strong>Asking for reviews in bursts.</strong> A one-off flood looks unnatural; a steady, recent flow ranks.</li>
            <li><strong>No clear next step.</strong> Every page should make booking one tap away.</li>
            <li><strong>Stopping when busy.</strong> The practices that win keep the basics running consistently.</li>
          </ul>
        </div>
      </section>

      {/* Why Connected Practice Grows */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Why a connected practice grows</h2>
          <p className="prose">Whatever the topic of this page, the underlying lesson for a solo practice is the same: growth comes from a connected system, not a single tool. When booking, records, reminders, website, reviews, and recall all read from one patient record, the work starts to compound instead of leaking.</p>
          <p className="prose">Picture the loop. A patient searches nearby and finds you, because your profile and website rank locally. They choose you, because your story and a steady flow of recent reviews build trust. They book in a few taps, and a reminder sequence makes sure they attend. After the visit, an automatic request earns a review and recall brings them back when due. That review lifts your ranking, which helps the next patient find you, and the loop turns again, a little faster each time.</p>
          <p className="prose">Separate tools break the loop at every handoff. A booking that does not trigger a reminder becomes a no-show. A happy visit that is never asked for a review becomes a missed five stars. Hours disappear re-typing the same details from one app into another, and the compounding never starts.</p>
          <p className="prose">That is the whole case for an all-in-one platform, and it is usually cheaper than the separate tools it replaces. It is why the templates, guides, and results on this site all point back to the same place: one system, one record, and a practice that grows quietly in the background.</p>
        </div>
      </section>

      {/* Get Started Steps */}
      <section className="section">
        <div className="container">
          <h2>Get started in a day</h2>
          <p className="lead">No technical skills and no long onboarding. Most practices are running this within a day.</p>
          <div className="steps">
            <div className="step"><h3>Import your patients</h3><p>Upload a CSV in about 10 minutes, or use guided migration from Practo, SimplePractice, Cliniko, Jane, or MocDoc, with a specialist checking it with you.</p></div>
            <div className="step"><h3>Switch on automation</h3><p>Turn on reminders, reviews, and recall so the repetitive work runs in the background from day one.</p></div>
            <div className="step"><h3>Publish your website</h3><p>Pick a healthcare template and go live on your own domain in about 30 minutes, with booking and local SEO built in.</p></div>
          </div>
          <p className="prose" style={{ marginTop: "18px" }}>Prefer it handled for you? The Done-For-You tier runs the growth work on your behalf.</p>
        </div>
      </section>

      {/* Built for Every Practice */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Built for every solo practice</h2>
          <p className="prose">The same platform adapts to your specialty, with workflows tuned to how you actually work.</p>
          <ul className="point-list two-col">
            <li><Link href="/solutions/solo-doctors">Solo doctors and GPs</Link></li>
            <li><Link href="/solutions/dentists">Dentists</Link></li>
            <li><Link href="/solutions/therapists">Therapists and psychologists</Link></li>
            <li><Link href="/solutions/physiotherapists">Physiotherapists</Link></li>
            <li><Link href="/solutions/dermatologists">Dermatologists</Link></li>
            <li><Link href="/solutions/pediatricians">Pediatricians</Link></li>
            <li><Link href="/solutions/nutritionists">Nutritionists and coaches</Link></li>
            <li><Link href="/solutions/ayurveda-doctors">Ayurveda and holistic</Link></li>
          </ul>
          <p className="prose">Browse every practice type on the <Link href="/solutions">solutions overview</Link>.</p>
        </div>
      </section>

      {/* Security Trust */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Secure, compliant, and yours to leave</h2>
          <p className="prose">Your patient data is protected to a high standard. Records are encrypted with AES-256 at rest and TLS 1.3 in transit, access is controlled, and your information is exportable at any time and never sold. One honest plan covers everything: 999 rupees a month in India or 99 US dollars globally, with no commissions and a 14-day free trial.</p>
          <div className="trust-row">
            <span className="trust-badge">{checkSvg} HIPAA-aligned</span>
            <span className="trust-badge">{checkSvg} GDPR ready</span>
            <span className="trust-badge">{checkSvg} DPDP &amp; PDPA</span>
            <span className="trust-badge">{checkSvg} AES-256 encryption</span>
          </div>
          <p className="prose" style={{ marginTop: "18px" }}>Read more on <Link href="/security">security</Link> and the <Link href="/pricing/solo-doctors">pricing page</Link>.</p>
        </div>
      </section>

      {/* How Clinexy Helps */}
      <section className="section">
        <div className="container section-narrow">
          <h2>How Clinexy helps</h2>
          <p className="prose">{s.howClinexySays}</p>
          <ul className="point-list">
            <li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li>
            <li><strong>One platform.</strong> Operations and growth on one record.</li>
            <li><strong>One dashboard.</strong> See results in a single place.</li>
            <li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li>
          </ul>
          <p className="prose">Explore the <Link href="/features">full platform</Link> or see it set up for your <Link href="/solutions/solo-doctors">practice type</Link>.</p>
        </div>
      </section>

      {/* Everything in One Subscription */}
      <section className="section">
        <div className="container section-narrow">
          <h2>Everything in one subscription</h2>
          <p className="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
          <ul className="point-list two-col">
            <li>Online booking and reminders</li>
            <li>Recall and follow-up automation</li>
            <li>A branded website on your domain</li>
            <li>Local SEO and Google profile sync</li>
            <li>Automated review collection</li>
            <li>Personal branding tools</li>
            <li>Telehealth and patient records</li>
            <li>Billing, invoices, and superbills</li>
          </ul>
          <p className="prose">See the full platform on the <Link href="/features">features overview</Link>, or compare it on the <Link href="/compare">comparison hub</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-faq">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {s.faqs.map((faq, i) => (
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
            <p className="prose">{s.summaryIntro}</p>
            <ul className="point-list">
              {s.summaryPoints.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section section-related">
        <div className="container">
          <h2>Related pages</h2>
          <div className="related-grid">
            {s.relatedPages.map((rp, i) => (
              <Link key={i} className="related-card" href={rp.href}>
                <h4>{rp.h4}</h4>
                <p>{rp.p}</p>
                <span className="related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cta">
        <div className="container">
          <h2>{s.finalCtaH2}</h2>
          <p>{s.finalCtaP}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a>
            <a className="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a>
          </div>
        </div>
      </section>
    </>
  );
}

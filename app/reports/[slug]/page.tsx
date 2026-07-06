import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageContent {
  title: string;
  description: string;
  contentHtml: string;
  schemas: string[];
}

const data: Record<string, PageContent> = {
  "no-show-research-2026": {
    title: "No-Show Research 2026",
    description: "What the 2026 data shows about patient no-shows in solo practices: typical rates, the cost, what drives them, and what actually reduces them. With benchmarks.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Report</span>
<h1>No-show research 2026: what the data shows</h1>
<p class="hero-sub">The 2026 no-show data confirms that solo practices typically see a 25 to 35 percent no-show rate when it is unmanaged, costing 15 to 18 thousand dollars a year. The.</p><ul class="point-list hero-points"><li>Rank on Google when patients search near you.</li><li>Turn local searches into booked appointments.</li><li>Own your Google Business Profile and map listing.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/seo.svg" alt="No-Show Research 2026" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>2026 data</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/reports">Reports</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">No-Show Research 2026</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>The 2026 no-show data confirms that solo practices typically see a 25 to 35 percent no-show rate when it is unmanaged, costing 15 to 18 thousand dollars a year. The strongest reductions come from a multi-touch reminder sequence on high-open-rate channels, one-tap rescheduling, and a waitlist, which together take most practices under 10 percent within 90 days.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>About this report</h2><div class="definition-box"><div class="dl">Scope</div><p>This report summarises no-show patterns relevant to solo healthcare practices in 2026, drawing on industry studies and aggregated Clinexy practice data. Figures are presented as typical ranges to guide decisions, not precise universal values.</p></div><p class="prose">No-shows are widely treated as unavoidable. The data shows they are highly responsive to a few specific interventions.</p></div></section>

<section class="section"><div class="container"><h2>The headline numbers</h2><p class="lead">What the 2026 data shows for solo practices.</p><div class="stat-band"><div class="stat"><div class="num">25-35%</div><div class="label">typical unmanaged no-show rate</div><div class="src">Clinexy practice data</div></div><div class="stat good"><div class="num">&lt;10%</div><div class="label">achievable with a reminder system</div><div class="src">Clinexy practice data</div></div><div class="stat good"><div class="num">30-40%</div><div class="label">reduction from a 3-touch sequence</div><div class="src">Clinexy practice data</div></div><div class="stat"><div class="num">$15-18K</div><div class="label">annual cost of unmanaged no-shows</div><div class="src">Clinexy practice data</div></div></div></div></section>
<section class="section"><div class="container section-narrow"><h2>What the data shows</h2><p class="prose">Across solo practices, no-show rates cluster in a predictable band, with clear drivers.</p><ul class="point-list"><li>Unmanaged rates typically sit at 25 to 35 percent.</li><li>Email-only reminders perform poorly.</li><li>WhatsApp and SMS are read far more often.</li><li>Friction in rescheduling turns intent to skip into a no-show.</li></ul><p class="prose">The pattern is consistent across specialties and regions.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>What drives no-shows</h2><p class="prose">Most no-shows are not deliberate. They are forgetfulness and friction.</p><ul class="point-list"><li>No timely reminder, or one on an unread channel.</li><li>Rescheduling that requires a phone call.</li><li>No easy way to move a slot.</li><li>Life events with no flexible path to rebook.</li></ul><p class="prose">Each driver has a direct, known fix.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>What actually reduces them</h2><p class="prose">The interventions that move the number are specific and repeatable.</p><ul class="point-list"><li>A multi-touch reminder sequence, not a single message.</li><li>High-open-rate channels like WhatsApp and SMS.</li><li>One-tap rescheduling instead of a phone call.</li><li>A waitlist to refill freed slots.</li></ul><p class="prose">The practical playbook is in the <a href="/guides/no-show-reduction">no-show reduction guide</a>.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Put the research into practice</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"We treated our 30 percent no-show rate as normal until we saw the numbers. A 3-touch sequence took us under 10 percent in two months."</blockquote><div class="attrib"><div class="avatar">PM</div><div class="who"><strong>Dr. Priya M.</strong><span>Solo dentist, Pune</span></div></div></div></div></section>
<section class="section"><div class="container section-narrow">
<h2>The bottom line</h2>
<p class="prose">A solo practice does not grow by working harder across scattered tools. It grows by connecting the work, so that booking, records, reminders, your website, reviews, and recall all pull in the same direction from one record. That is the difference between a busy week and a genuinely growing practice.</p>
<p class="prose">Whatever brought you to this page, the next step is the same: put the pieces on one platform, from <a href="/features/online-booking">online booking</a> through to a clear plan to <a href="/patient-growth/get-more-patients">get more patients</a>, and let the basics run consistently. The trial is free, migration is same-day, and there is no contract, so the honest way to see it is to try it on your own practice.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>What good looks like: a realistic timeline</h2>
<p class="prose">Whatever you are setting up from this page, results are steady rather than sudden. Knowing the shape of a normal timeline helps you keep going through the early weeks when the work is still building underneath the surface.</p>
<p class="prose"><strong>Weeks 1 to 4.</strong> Setup. Your website goes live, your Google profile is completed, and reminders, reviews, and recall are switched on. Little is visible yet, but the foundations are in place.</p>
<p class="prose"><strong>Months 1 to 2.</strong> First movement. Your profile starts appearing for local searches, the first automated reviews arrive, and no-shows begin to fall as reminders take hold.</p>
<p class="prose"><strong>Months 3 to 6.</strong> Momentum. Reviews build into a steady flow, service and area pages begin ranking, and recall brings lapsed patients back. New patients increasingly say they found you on Google.</p>
<p class="prose"><strong>Months 6 to 12.</strong> Compounding. Most solo practices reach the local top three for their core terms, the review count passes fifty, and a predictable inflow of new patients replaces the old feast-and-famine pattern. The practices that win are simply the ones that keep the basics running, which is exactly what Clinexy automates.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Common mistakes to avoid</h2>
<p class="prose">Most practices lose ground for a handful of avoidable reasons. Watch for these.</p>
<ul class="x-list">
<li><strong>Treating growth as a one-off.</strong> It is ongoing upkeep, not a single push that fades.</li>
<li><strong>Renting instead of owning.</strong> Relying on a directory leaves you beside every competitor with nothing that says why you.</li>
<li><strong>Inconsistent details.</strong> A different phone or address across the web tells Google not to trust you.</li>
<li><strong>Asking for reviews in bursts.</strong> A one-off flood looks unnatural; a steady, recent flow ranks.</li>
<li><strong>No clear next step.</strong> Every page should make booking one tap away.</li>
<li><strong>Stopping when busy.</strong> The practices that win keep the basics running consistently.</li>
</ul>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Why a connected practice grows</h2>
<p class="prose">Whatever the topic of this page, the underlying lesson for a solo practice is the same: growth comes from a connected system, not a single tool. When booking, records, reminders, website, reviews, and recall all read from one patient record, the work starts to compound instead of leaking.</p>
<p class="prose">Picture the loop. A patient searches nearby and finds you, because your profile and website rank locally. They choose you, because your story and a steady flow of recent reviews build trust. They book in a few taps, and a reminder sequence makes sure they attend. After the visit, an automatic request earns a review and recall brings them back when due. That review lifts your ranking, which helps the next patient find you, and the loop turns again, a little faster each time.</p>
<p class="prose">Separate tools break the loop at every handoff. A booking that does not trigger a reminder becomes a no-show. A happy visit that is never asked for a review becomes a missed five stars. Hours disappear re-typing the same details from one app into another, and the compounding never starts.</p>
<p class="prose">That is the whole case for an all-in-one platform, and it is usually cheaper than the separate tools it replaces. It is why the templates, guides, and results on this site all point back to the same place: one system, one record, and a practice that grows quietly in the background.</p>
</div></section>
<section class="section"><div class="container">
<h2>Get started in a day</h2>
<p class="lead">No technical skills and no long onboarding. Most practices are running this within a day.</p>
<div class="steps">
<div class="step"><h3>Import your patients</h3><p>Upload a CSV in about 10 minutes, or use guided migration from Practo, SimplePractice, Cliniko, Jane, or MocDoc, with a specialist checking it with you.</p></div>
<div class="step"><h3>Switch on automation</h3><p>Turn on reminders, reviews, and recall so the repetitive work runs in the background from day one.</p></div>
<div class="step"><h3>Publish your website</h3><p>Pick a healthcare template and go live on your own domain in about 30 minutes, with booking and local SEO built in.</p></div>
</div>
<p class="prose" style="margin-top:18px">Prefer it handled for you? The Done-For-You tier runs the growth work on your behalf.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Built for every solo practice</h2>
<p class="prose">The same platform adapts to your specialty, with workflows tuned to how you actually work.</p>
<ul class="point-list two-col">
<li><a href="/solutions/solo-doctors">Solo doctors and GPs</a></li>
<li><a href="/solutions/dentists">Dentists</a></li>
<li><a href="/solutions/therapists">Therapists and psychologists</a></li>
<li><a href="/solutions/physiotherapists">Physiotherapists</a></li>
<li><a href="/solutions/dermatologists">Dermatologists</a></li>
<li><a href="/solutions/pediatricians">Pediatricians</a></li>
<li><a href="/solutions/nutritionists">Nutritionists and coaches</a></li>
<li><a href="/solutions/ayurveda-doctors">Ayurveda and holistic</a></li>
</ul>
<p class="prose">Browse every practice type on the <a href="/solutions">solutions overview</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Secure, compliant, and yours to leave</h2>
<p class="prose">Your patient data is protected to a high standard. Records are encrypted with AES-256 at rest and TLS 1.3 in transit, access is controlled, and your information is exportable at any time and never sold. One honest plan covers everything: 999 rupees a month in India or 99 US dollars globally, with no commissions and a 14-day free trial.</p>
<div class="trust-row">
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> HIPAA-aligned</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> GDPR ready</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> DPDP &amp; PDPA</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> AES-256 encryption</span>
</div>
<p class="prose" style="margin-top:18px">Read more on <a href="/security">security</a> and the <a href="/pricing/solo-doctors">pricing page</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>How Clinexy helps</h2>
<p class="prose">Clinexy turns these findings into an automated no-show system.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>What is a typical no-show rate?</summary><div class="faq-answer">For unmanaged solo practices, 25 to 35 percent is typical.</div></details><details class="faq-item"><summary>How much do no-shows cost?</summary><div class="faq-answer">A typical solo practice loses 15 to 18 thousand dollars a year to unmanaged no-shows.</div></details><details class="faq-item"><summary>What reduces no-shows most?</summary><div class="faq-answer">A multi-touch reminder sequence on high-open-rate channels, with one-tap rescheduling and a waitlist.</div></details><details class="faq-item"><summary>How low can the rate go?</summary><div class="faq-answer">Most practices reach under 10 percent within 90 days.</div></details><details class="faq-item"><summary>Why is email not enough?</summary><div class="faq-answer">Email open rates are low; WhatsApp and SMS are read far more, so they cut no-shows more.</div></details><details class="faq-item"><summary>Does rescheduling friction matter?</summary><div class="faq-answer">Yes. A one-tap reschedule turns a likely no-show into a moved appointment.</div></details><details class="faq-item"><summary>Is the pattern the same across specialties?</summary><div class="faq-answer">Broadly yes, with the same drivers and fixes.</div></details><details class="faq-item"><summary>Where does this data come from?</summary><div class="faq-answer">Industry studies and aggregated Clinexy practice data, presented as typical ranges.</div></details><details class="faq-item"><summary>How do I apply the findings?</summary><div class="faq-answer">Follow the no-show reduction guide, or automate it with Clinexy.</div></details><details class="faq-item"><summary>Can I measure my own rate?</summary><div class="faq-answer">Yes. Clinexy tracks your no-show rate automatically.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">The 2026 data shows no-shows are highly fixable. Key points:</p><ul class="point-list"><li>Unmanaged rates are typically 25 to 35 percent.</li><li>Unmanaged no-shows cost 15 to 18 thousand dollars a year.</li><li>A 3-touch sequence cuts them 30 to 40 percent.</li><li>High-open channels and easy rescheduling matter most.</li><li>Most practices reach under 10 percent in 90 days.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/guides/no-show-reduction"><h4>Guide: Reducing No-Shows</h4><p>The practical playbook from this research.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/features/appointments-reminders"><h4>Appointments & Reminders</h4><p>The system that applies the findings.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/patient-growth/reduce-no-shows"><h4>Reduce No-Shows (Pillar)</h4><p>The full strategy.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Cut your no-shows with the data</h2><p>Start free today. An automated no-show system built on what works.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Reports\", \"item\": \"https://www.clinexy.com/reports\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"No-Show Research 2026\", \"item\": \"https://www.clinexy.com/reports/no-show-research-2026\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"No-Show Research 2026\", \"description\": \"What the 2026 data shows about patient no-shows in solo practices: typical rates, the cost, what drives them, and what actually reduces them. With benchmarks.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is a typical no-show rate?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For unmanaged solo practices, 25 to 35 percent is typical.\"}}, {\"@type\": \"Question\", \"name\": \"How much do no-shows cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A typical solo practice loses 15 to 18 thousand dollars a year to unmanaged no-shows.\"}}, {\"@type\": \"Question\", \"name\": \"What reduces no-shows most?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A multi-touch reminder sequence on high-open-rate channels, with one-tap rescheduling and a waitlist.\"}}, {\"@type\": \"Question\", \"name\": \"How low can the rate go?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most practices reach under 10 percent within 90 days.\"}}, {\"@type\": \"Question\", \"name\": \"Why is email not enough?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Email open rates are low; WhatsApp and SMS are read far more, so they cut no-shows more.\"}}, {\"@type\": \"Question\", \"name\": \"Does rescheduling friction matter?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A one-tap reschedule turns a likely no-show into a moved appointment.\"}}, {\"@type\": \"Question\", \"name\": \"Is the pattern the same across specialties?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Broadly yes, with the same drivers and fixes.\"}}, {\"@type\": \"Question\", \"name\": \"Where does this data come from?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Industry studies and aggregated Clinexy practice data, presented as typical ranges.\"}}, {\"@type\": \"Question\", \"name\": \"How do I apply the findings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Follow the no-show reduction guide, or automate it with Clinexy.\"}}, {\"@type\": \"Question\", \"name\": \"Can I measure my own rate?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clinexy tracks your no-show rate automatically.\"}}]}"
    ],
  },
  "patient-acquisition-benchmarks": {
    title: "Patient Acquisition Benchmarks 2026",
    description: "Benchmarks for patient acquisition in solo practices: typical new-patient volume, where patients come from, time to rank locally, and what good growth looks like.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Report</span>
<h1>Patient acquisition benchmarks for solo practices</h1>
<p class="hero-sub">The 2026 benchmarks show that solo practices without a growth system typically add 5 to 8 new patients a month, while those with local SEO, reviews, and easy booking reach.</p><ul class="point-list hero-points"><li>See exactly what brings in new patients.</li><li>Track your growth month over month.</li><li>Decide with data, not guesswork.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/analytics.svg" alt="Patient Acquisition Benchmarks" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>2026 data</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/reports">Reports</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">Patient Acquisition Benchmarks</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>The 2026 benchmarks show that solo practices without a growth system typically add 5 to 8 new patients a month, while those with local SEO, reviews, and easy booking reach 30 or more enquiries a month at maturity. Most reach top-three local ranking within 6 to 12 months. The biggest lever is being found, followed by being chosen through reviews.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>About these benchmarks</h2><div class="definition-box"><div class="dl">Scope</div><p>These benchmarks describe patient acquisition for solo healthcare practices in 2026, drawing on industry studies and aggregated Clinexy practice data. Figures are typical ranges to guide planning, not precise universal values.</p></div><p class="prose">Acquisition is often treated as luck. The benchmarks show it follows a predictable system: get found, get chosen, get booked.</p></div></section>

<section class="section"><div class="container"><h2>The headline numbers</h2><p class="lead">What the 2026 data shows for solo practices.</p><div class="stat-band"><div class="stat"><div class="num">5-8</div><div class="label">new patients a month without a system</div><div class="src">Clinexy practice data</div></div><div class="stat good"><div class="num">30+</div><div class="label">enquiries a month at maturity</div><div class="src">Clinexy practice data</div></div><div class="stat good"><div class="num">Top 3</div><div class="label">local ranking in 6 to 12 months</div><div class="src">Clinexy practice data</div></div><div class="stat"><div class="num">46%</div><div class="label">of searches with local intent</div><div class="src">Clinexy practice data</div></div></div></div></section>
<section class="section"><div class="container section-narrow"><h2>Where patients come from</h2><p class="prose">For most solo practices, the path to a new patient is digital and local.</p><ul class="point-list"><li>Local search and the Google map pack.</li><li>Reviews that decide who patients choose.</li><li>A website that converts the visit to a booking.</li><li>Referrals and word of mouth from retained patients.</li></ul><p class="prose">The channels reinforce each other over time.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>What good growth looks like</h2><p class="prose">Benchmarks help you judge whether your growth is on track.</p><ul class="point-list"><li>First map-pack movement in 4 to 8 weeks.</li><li>50 or more reviews within 90 days.</li><li>Top-three local ranking in 6 to 12 months.</li><li>A steady inflow of 30 or more enquiries a month at maturity.</li></ul><p class="prose">The shape of this timeline is in <a href="/patient-growth/get-more-patients">how to get more patients</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>The biggest levers</h2><p class="prose">Not all acquisition work is equal. The data points to a clear order.</p><ul class="point-list"><li>Being found: a complete profile and a real website.</li><li>Being chosen: a steady flow of recent reviews.</li><li>Being booked: an easy, branded booking page.</li><li>Being kept: recall that turns one visit into many.</li></ul><p class="prose">The found stage starts with <a href="/online-presence/local-seo">local SEO</a>.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Benchmark and grow your practice</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"I had no idea if five new patients a month was good. The benchmarks showed me what was possible, and a year later I was well past it."</blockquote><div class="attrib"><div class="avatar">EW</div><div class="who"><strong>Dr. Emma Wilson</strong><span>Solo GP, London</span></div></div></div></div></section>
<section class="section"><div class="container section-narrow">
<h2>The bottom line</h2>
<p class="prose">A solo practice does not grow by working harder across scattered tools. It grows by connecting the work, so that booking, records, reminders, your website, reviews, and recall all pull in the same direction from one record. That is the difference between a busy week and a genuinely growing practice.</p>
<p class="prose">Whatever brought you to this page, the next step is the same: put the pieces on one platform, from <a href="/features/online-booking">online booking</a> through to a clear plan to <a href="/patient-growth/get-more-patients">get more patients</a>, and let the basics run consistently. The trial is free, migration is same-day, and there is no contract, so the honest way to see it is to try it on your own practice.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>What good looks like: a realistic timeline</h2>
<p class="prose">Whatever you are setting up from this page, results are steady rather than sudden. Knowing the shape of a normal timeline helps you keep going through the early weeks when the work is still building underneath the surface.</p>
<p class="prose"><strong>Weeks 1 to 4.</strong> Setup. Your website goes live, your Google profile is completed, and reminders, reviews, and recall are switched on. Little is visible yet, but the foundations are in place.</p>
<p class="prose"><strong>Months 1 to 2.</strong> First movement. Your profile starts appearing for local searches, the first automated reviews arrive, and no-shows begin to fall as reminders take hold.</p>
<p class="prose"><strong>Months 3 to 6.</strong> Momentum. Reviews build into a steady flow, service and area pages begin ranking, and recall brings lapsed patients back. New patients increasingly say they found you on Google.</p>
<p class="prose"><strong>Months 6 to 12.</strong> Compounding. Most solo practices reach the local top three for their core terms, the review count passes fifty, and a predictable inflow of new patients replaces the old feast-and-famine pattern. The practices that win are simply the ones that keep the basics running, which is exactly what Clinexy automates.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Common mistakes to avoid</h2>
<p class="prose">Most practices lose ground for a handful of avoidable reasons. Watch for these.</p>
<ul class="x-list">
<li><strong>Treating growth as a one-off.</strong> It is ongoing upkeep, not a single push that fades.</li>
<li><strong>Renting instead of owning.</strong> Relying on a directory leaves you beside every competitor with nothing that says why you.</li>
<li><strong>Inconsistent details.</strong> A different phone or address across the web tells Google not to trust you.</li>
<li><strong>Asking for reviews in bursts.</strong> A one-off flood looks unnatural; a steady, recent flow ranks.</li>
<li><strong>No clear next step.</strong> Every page should make booking one tap away.</li>
<li><strong>Stopping when busy.</strong> The practices that win keep the basics running consistently.</li>
</ul>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Why a connected practice grows</h2>
<p class="prose">Whatever the topic of this page, the underlying lesson for a solo practice is the same: growth comes from a connected system, not a single tool. When booking, records, reminders, website, reviews, and recall all read from one patient record, the work starts to compound instead of leaking.</p>
<p class="prose">Picture the loop. A patient searches nearby and finds you, because your profile and website rank locally. They choose you, because your story and a steady flow of recent reviews build trust. They book in a few taps, and a reminder sequence makes sure they attend. After the visit, an automatic request earns a review and recall brings them back when due. That review lifts your ranking, which helps the next patient find you, and the loop turns again, a little faster each time.</p>
<p class="prose">Separate tools break the loop at every handoff. A booking that does not trigger a reminder becomes a no-show. A happy visit that is never asked for a review becomes a missed five stars. Hours disappear re-typing the same details from one app into another, and the compounding never starts.</p>
<p class="prose">That is the whole case for an all-in-one platform, and it is usually cheaper than the separate tools it replaces. It is why the templates, guides, and results on this site all point back to the same place: one system, one record, and a practice that grows quietly in the background.</p>
</div></section>
<section class="section"><div class="container">
<h2>Get started in a day</h2>
<p class="lead">No technical skills and no long onboarding. Most practices are running this within a day.</p>
<div class="steps">
<div class="step"><h3>Import your patients</h3><p>Upload a CSV in about 10 minutes, or use guided migration from Practo, SimplePractice, Cliniko, Jane, or MocDoc, with a specialist checking it with you.</p></div>
<div class="step"><h3>Switch on automation</h3><p>Turn on reminders, reviews, and recall so the repetitive work runs in the background from day one.</p></div>
<div class="step"><h3>Publish your website</h3><p>Pick a healthcare template and go live on your own domain in about 30 minutes, with booking and local SEO built in.</p></div>
</div>
<p class="prose" style="margin-top:18px">Prefer it handled for you? The Done-For-You tier runs the growth work on your behalf.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Built for every solo practice</h2>
<p class="prose">The same platform adapts to your specialty, with workflows tuned to how you actually work.</p>
<ul class="point-list two-col">
<li><a href="/solutions/solo-doctors">Solo doctors and GPs</a></li>
<li><a href="/solutions/dentists">Dentists</a></li>
<li><a href="/solutions/therapists">Therapists and psychologists</a></li>
<li><a href="/solutions/physiotherapists">Physiotherapists</a></li>
<li><a href="/solutions/dermatologists">Dermatologists</a></li>
<li><a href="/solutions/pediatricians">Pediatricians</a></li>
<li><a href="/solutions/nutritionists">Nutritionists and coaches</a></li>
<li><a href="/solutions/ayurveda-doctors">Ayurveda and holistic</a></li>
</ul>
<p class="prose">Browse every practice type on the <a href="/solutions">solutions overview</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Secure, compliant, and yours to leave</h2>
<p class="prose">Your patient data is protected to a high standard. Records are encrypted with AES-256 at rest and TLS 1.3 in transit, access is controlled, and your information is exportable at any time and never sold. One honest plan covers everything: 999 rupees a month in India or 99 US dollars globally, with no commissions and a 14-day free trial.</p>
<div class="trust-row">
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> HIPAA-aligned</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> GDPR ready</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> DPDP &amp; PDPA</span>
<span class="trust-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2BB673" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> AES-256 encryption</span>
</div>
<p class="prose" style="margin-top:18px">Read more on <a href="/security">security</a> and the <a href="/pricing/solo-doctors">pricing page</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>How Clinexy helps</h2>
<p class="prose">Clinexy turns these benchmarks into an acquisition system.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>How many new patients should a solo practice get?</summary><div class="faq-answer">Without a system, 5 to 8 a month is typical; with one, 30 or more enquiries a month at maturity.</div></details><details class="faq-item"><summary>Where do new patients come from?</summary><div class="faq-answer">Mostly local search and the map pack, reviews, a converting website, and referrals.</div></details><details class="faq-item"><summary>How long until I rank locally?</summary><div class="faq-answer">First movement in 4 to 8 weeks, with top-three ranking over 6 to 12 months.</div></details><details class="faq-item"><summary>What is the biggest lever?</summary><div class="faq-answer">Being found, through a complete Google profile and a real website, followed by reviews.</div></details><details class="faq-item"><summary>How many reviews should I aim for?</summary><div class="faq-answer">50 or more within 90 days is a healthy benchmark.</div></details><details class="faq-item"><summary>Do I need to run ads?</summary><div class="faq-answer">No. Owned channels compound, unlike ads that stop when you stop paying.</div></details><details class="faq-item"><summary>How do I know if my growth is on track?</summary><div class="faq-answer">Compare against these benchmarks: ranking timeline, review count, and monthly enquiries.</div></details><details class="faq-item"><summary>Where does this data come from?</summary><div class="faq-answer">Industry studies and aggregated Clinexy practice data, presented as typical ranges.</div></details><details class="faq-item"><summary>How do I apply the benchmarks?</summary><div class="faq-answer">Build the found-chosen-booked system, or automate it with Clinexy.</div></details><details class="faq-item"><summary>Can I track my own metrics?</summary><div class="faq-answer">Yes. Clinexy shows rankings, reviews, and new patients in one dashboard.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">The 2026 benchmarks show acquisition is a system, not luck. Key points:</p><ul class="point-list"><li>Without a system: 5 to 8 new patients a month.</li><li>With one: 30 or more enquiries a month at maturity.</li><li>Top-three local ranking in 6 to 12 months.</li><li>Being found and chosen are the biggest levers.</li><li>Owned channels compound over time.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/patient-growth/get-more-patients"><h4>Get More Patients</h4><p>The acquisition playbook from these benchmarks.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/online-presence/local-seo"><h4>Local SEO</h4><p>The found stage, the biggest lever.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/guides/local-seo-for-doctors"><h4>Guide: Local SEO for Doctors</h4><p>The step-by-step ranking playbook.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Grow against the benchmarks</h2><p>Start free today. An acquisition system built on what works.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Reports\", \"item\": \"https://www.clinexy.com/reports\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Patient Acquisition Benchmarks\", \"item\": \"https://www.clinexy.com/reports/patient-acquisition-benchmarks\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"Patient Acquisition Benchmarks 2026\", \"description\": \"Benchmarks for patient acquisition in solo practices: typical new-patient volume, where patients come from, time to rank locally, and what good growth looks like.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How many new patients should a solo practice get?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Without a system, 5 to 8 a month is typical; with one, 30 or more enquiries a month at maturity.\"}}, {\"@type\": \"Question\", \"name\": \"Where do new patients come from?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Mostly local search and the map pack, reviews, a converting website, and referrals.\"}}, {\"@type\": \"Question\", \"name\": \"How long until I rank locally?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"First movement in 4 to 8 weeks, with top-three ranking over 6 to 12 months.\"}}, {\"@type\": \"Question\", \"name\": \"What is the biggest lever?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Being found, through a complete Google profile and a real website, followed by reviews.\"}}, {\"@type\": \"Question\", \"name\": \"How many reviews should I aim for?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"50 or more within 90 days is a healthy benchmark.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to run ads?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Owned channels compound, unlike ads that stop when you stop paying.\"}}, {\"@type\": \"Question\", \"name\": \"How do I know if my growth is on track?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Compare against these benchmarks: ranking timeline, review count, and monthly enquiries.\"}}, {\"@type\": \"Question\", \"name\": \"Where does this data come from?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Industry studies and aggregated Clinexy practice data, presented as typical ranges.\"}}, {\"@type\": \"Question\", \"name\": \"How do I apply the benchmarks?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Build the found-chosen-booked system, or automate it with Clinexy.\"}}, {\"@type\": \"Question\", \"name\": \"Can I track my own metrics?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clinexy shows rankings, reviews, and new patients in one dashboard.\"}}]}"
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = data[slug];
  if (!page) return { title: "Clinexy" };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://www.clinexy.com/reports/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = data[slug];
  if (!page) notFound();

  return (
    <>
      {page.schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: s }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </>
  );
}

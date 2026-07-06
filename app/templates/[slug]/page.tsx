import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageContent {
  title: string;
  description: string;
  contentHtml: string;
  schemas: string[];
}

const data: Record<string, PageContent> = {
  "google-review-request": {
    title: "Google Review Request Templates (Free)",
    description: "Free, ready-to-use Google review request templates for SMS, WhatsApp, and email. Get more reviews with proven wording, the right timing, and a one-tap link.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Template</span>
<h1>Google review request templates</h1>
<p class="hero-sub">These free Google review request templates help you gather more reviews with wording proven to get responses.</p><ul class="point-list hero-points"><li>Collect 5-star Google reviews on autopilot.</li><li>Reply to every review without lifting a finger.</li><li>Win patient trust before the first phone call.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/reviews.svg" alt="Google Review Request Template" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>Copy & use</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/templates">Templates</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">Google Review Request Template</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>These free Google review request templates help you gather more reviews with wording proven to get responses. Send them about two hours after the visit, on the patient's preferred channel, with a direct one-tap link to your Google review box. Keep them short and warm. Clinexy can send these automatically after every visit.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>What a review request is</h2><div class="definition-box"><div class="dl">Definition</div><p>A review request is a short, friendly message asking a satisfied patient to leave a review, ideally on your Google Business Profile. A good one is timed for the moment satisfaction is highest and reduces the task to a single tap.</p></div><p class="prose">The best review request is short, warm, and links straight to the review box. Below are templates you can copy and personalise.</p></div></section>


<section class="section"><div class="container section-narrow"><h2>SMS and WhatsApp review templates</h2><p class="prose">One line and a link is all you need on these channels.</p><ul class="point-list"><li>Send about two hours after the visit.</li><li>Use the patient's first name.</li><li>Thank them, then ask simply.</li><li>Link directly to the review box.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Copy these</h3><p class="prose">Hi [First name], thank you for visiting [practice] today. If you have a moment, a quick Google review really helps others find us: [review link]. Thank you.</p><p class="prose">Hi [First name], it was good to see you at [practice]. Would you mind leaving us a short review? It takes a few seconds: [review link].</p></div><p class="prose">For the highest response, send on the channel the patient prefers.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>Email review template</h2><p class="prose">A little more warmth, still short and skimmable.</p><ul class="point-list"><li>A simple, grateful subject line.</li><li>A short thank-you opening.</li><li>A clear, single ask.</li><li>One obvious button to the review box.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Copy this</h3><p class="prose"><strong>Subject:</strong> Thank you from [practice]</p><p class="prose">Hi [First name], thank you for visiting [practice]. We hope you had a good experience. If you did, a short Google review would mean a lot and helps other patients find us. It only takes a moment: [review link]. Thank you for your trust.</p></div><p class="prose">Clinexy sends these automatically through <a href="/features/google-review-automation">Google review automation</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>How to use them well</h2><p class="prose">Timing, channel, and a direct link decide your response rate.</p><ul class="point-list"><li>Send about two hours after the visit.</li><li>Use a direct one-tap link, not a search instruction.</li><li>Ask every patient, not just a few.</li><li>For sensitive fields, ask privately first.</li></ul><p class="prose">The full method is in the <a href="/guides/getting-google-reviews">getting Google reviews</a> guide.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Send review requests automatically</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"I never knew what to write to ask for a review. Wording like this, sent automatically, took me past fifty reviews in three months."</blockquote><div class="attrib"><div class="avatar">TC</div><div class="who"><strong>T. Chen</strong><span>Solo chiropractor, Singapore</span></div></div></div></div></section>
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
<p class="prose">Clinexy turns these templates into an automated review engine.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>Are these review templates free?</summary><div class="faq-answer">Yes. Copy, personalise, and use them for your practice.</div></details><details class="faq-item"><summary>When should I send a review request?</summary><div class="faq-answer">About two hours after the visit, when satisfaction is highest.</div></details><details class="faq-item"><summary>Which channel works best?</summary><div class="faq-answer">WhatsApp and SMS are read far more than email; use the patient's preferred channel.</div></details><details class="faq-item"><summary>Should I link directly to the review box?</summary><div class="faq-answer">Yes. A direct one-tap link gets far more responses than a search instruction.</div></details><details class="faq-item"><summary>Can I automate these?</summary><div class="faq-answer">Yes. Clinexy sends a request after every visit automatically.</div></details><details class="faq-item"><summary>Is it ethical for therapists?</summary><div class="faq-answer">Ask for private feedback first and invite only comfortable clients to post publicly.</div></details><details class="faq-item"><summary>Can I offer an incentive?</summary><div class="faq-answer">No. Incentivising reviews is against Google's policy; never pay for or pressure reviews.</div></details><details class="faq-item"><summary>How many reviews will I get?</summary><div class="faq-answer">Most practices gather 50 or more within 90 days of automating requests.</div></details><details class="faq-item"><summary>Should I reply to reviews?</summary><div class="faq-answer">Yes. Replies are rewarded by Google and reassure patients.</div></details><details class="faq-item"><summary>Do they work for any specialty?</summary><div class="faq-answer">Yes. Adjust the wording to fit your practice and tone.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">Use these templates to gather more Google reviews. Key points:</p><ul class="point-list"><li>Send about two hours after the visit.</li><li>Keep it short, warm, and personal.</li><li>Use a direct one-tap review link.</li><li>Ask every patient.</li><li>Automate it with Clinexy.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/features/google-review-automation"><h4>Google Review Automation</h4><p>Send these requests automatically.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/guides/getting-google-reviews"><h4>Guide: Getting Google Reviews</h4><p>The full review playbook.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/solutions/dentists"><h4>Clinexy for Dentists</h4><p>How dental practices win on reviews.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Automate your Google reviews</h2><p>Start free today. Turn these templates into a steady review flow.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Templates\", \"item\": \"https://www.clinexy.com/templates\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Google Review Request Template\", \"item\": \"https://www.clinexy.com/templates/google-review-request\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"Google Review Request Templates (Free)\", \"description\": \"Free, ready-to-use Google review request templates for SMS, WhatsApp, and email. Get more reviews with proven wording, the right timing, and a one-tap link.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Are these review templates free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Copy, personalise, and use them for your practice.\"}}, {\"@type\": \"Question\", \"name\": \"When should I send a review request?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"About two hours after the visit, when satisfaction is highest.\"}}, {\"@type\": \"Question\", \"name\": \"Which channel works best?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"WhatsApp and SMS are read far more than email; use the patient's preferred channel.\"}}, {\"@type\": \"Question\", \"name\": \"Should I link directly to the review box?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A direct one-tap link gets far more responses than a search instruction.\"}}, {\"@type\": \"Question\", \"name\": \"Can I automate these?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clinexy sends a request after every visit automatically.\"}}, {\"@type\": \"Question\", \"name\": \"Is it ethical for therapists?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ask for private feedback first and invite only comfortable clients to post publicly.\"}}, {\"@type\": \"Question\", \"name\": \"Can I offer an incentive?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Incentivising reviews is against Google's policy; never pay for or pressure reviews.\"}}, {\"@type\": \"Question\", \"name\": \"How many reviews will I get?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most practices gather 50 or more within 90 days of automating requests.\"}}, {\"@type\": \"Question\", \"name\": \"Should I reply to reviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Replies are rewarded by Google and reassure patients.\"}}, {\"@type\": \"Question\", \"name\": \"Do they work for any specialty?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Adjust the wording to fit your practice and tone.\"}}]}"
    ],
  },
  "intake-forms": {
    title: "Patient Intake Form Template (Free)",
    description: "A free, ready-to-use patient intake form template covering the essentials, with tips to send it digitally before the visit so appointments start on time.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Template</span>
<h1>Patient intake form template</h1>
<p class="hero-sub">This free patient intake form template covers the essentials a solo practice needs: contact and emergency details, medical history, current concerns, medications and allergies, and consent.</p><ul class="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/growth.svg" alt="Patient Intake Form Template" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>Copy & use</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/templates">Templates</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">Patient Intake Form Template</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>This free patient intake form template covers the essentials a solo practice needs: contact and emergency details, medical history, current concerns, medications and allergies, and consent. Send it digitally before the visit so answers arrive on the record and the appointment starts on time. Clinexy can send and store intake automatically.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>What a patient intake form is</h2><div class="definition-box"><div class="dl">Definition</div><p>A patient intake form collects the information a clinician needs before a visit: identity and contact details, relevant medical history, current concerns, medications, allergies, and consent. Collected digitally, it prepares the visit and saves time at the front desk.</p></div><p class="prose">A good intake form is thorough but not exhausting, and is completed before the patient arrives. Below is a template you can adapt to your specialty.</p></div></section>


<section class="section"><div class="container section-narrow"><h2>What to include</h2><p class="prose">Cover the essentials every practice needs, then add specialty-specific items.</p><ul class="point-list"><li>Patient name, date of birth, and contact details.</li><li>Emergency contact.</li><li>Reason for visit and current concerns.</li><li>Relevant medical history, medications, and allergies.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Core intake fields</h3><p class="prose">Full name · Date of birth · Phone · Email · Address · Emergency contact and relationship · Reason for visit · Current symptoms or concerns · Past medical history · Current medications · Allergies · Relevant family history · Preferred pharmacy · Insurance details (if applicable) · Consent to treat and to communications.</p></div><p class="prose">Send it digitally so answers land on the record before the visit. See <a href="/features/client-portal">the patient portal</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>Specialty add-ons</h2><p class="prose">Add a short section tailored to your field.</p><ul class="point-list"><li>Dental: last cleaning, dental concerns, anxiety level.</li><li>Therapy: presenting issue, history, screening questions.</li><li>Dermatology: skin concern, history, photos with consent.</li><li>Pediatrics: growth, vaccinations, parent details.</li></ul><p class="prose">Keep it short; ask only what you will use.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>How to use it well</h2><p class="prose">Digital, pre-visit intake is what makes the form pay off.</p><ul class="point-list"><li>Send it at booking, not in the waiting room.</li><li>Make it mobile-friendly and quick to complete.</li><li>Store answers on the patient record automatically.</li><li>Keep consent and data handling compliant.</li></ul><p class="prose">Clinexy sends and stores intake through <a href="/features/patient-management">patient management</a>.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Send intake before the visit</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"Sending intake before the visit changed our mornings. Patients arrive prepared and appointments start on time."</blockquote><div class="attrib"><div class="avatar">MN</div><div class="who"><strong>Dr. M. Nair</strong><span>Solo pediatrician, Bengaluru</span></div></div></div></div></section>
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
<p class="prose">Clinexy turns this template into digital, pre-visit intake.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>Is this intake template free?</summary><div class="faq-answer">Yes. Copy and adapt it to your specialty and practice.</div></details><details class="faq-item"><summary>Should patients complete it before the visit?</summary><div class="faq-answer">Yes. Pre-visit intake means the appointment starts on time and you have the full picture.</div></details><details class="faq-item"><summary>How do I send it digitally?</summary><div class="faq-answer">Send it at booking via the patient portal so answers land on the record.</div></details><details class="faq-item"><summary>Is it compliant?</summary><div class="faq-answer">Keep consent and data handling aligned with HIPAA, GDPR, PDPA, and DPDP; Clinexy handles this.</div></details><details class="faq-item"><summary>Can I customise the fields?</summary><div class="faq-answer">Yes. Add or remove sections to fit your specialty; ask only what you will use.</div></details><details class="faq-item"><summary>Where are answers stored?</summary><div class="faq-answer">On the patient record, available the moment you open it.</div></details><details class="faq-item"><summary>Does it work on mobile?</summary><div class="faq-answer">Yes. Keep it mobile-friendly so patients complete it easily.</div></details><details class="faq-item"><summary>Can I include consent?</summary><div class="faq-answer">Yes. Include consent to treat and to communications in the form.</div></details><details class="faq-item"><summary>Does it reduce front-desk time?</summary><div class="faq-answer">Yes. Pre-visit intake removes waiting-room paperwork.</div></details><details class="faq-item"><summary>Can Clinexy automate this?</summary><div class="faq-answer">Yes. It sends, collects, and stores intake automatically.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">Use this intake template to prepare every visit. Key points:</p><ul class="point-list"><li>Cover contact, history, medications, allergies, and consent.</li><li>Add a short specialty-specific section.</li><li>Send it digitally before the visit.</li><li>Store answers on the patient record.</li><li>Automate it with Clinexy's portal.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/features/client-portal"><h4>Patient Portal</h4><p>Send and collect intake digitally.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/features/patient-management"><h4>Patient Management</h4><p>Where intake answers are stored.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/guides/launching-private-practice"><h4>Guide: Launching a Private Practice</h4><p>Set up intake from day one.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Digitise your patient intake</h2><p>Start free today. Send and store intake automatically before every visit.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Templates\", \"item\": \"https://www.clinexy.com/templates\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Patient Intake Form Template\", \"item\": \"https://www.clinexy.com/templates/intake-forms\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"Patient Intake Form Template (Free)\", \"description\": \"A free, ready-to-use patient intake form template covering the essentials, with tips to send it digitally before the visit so appointments start on time.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is this intake template free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Copy and adapt it to your specialty and practice.\"}}, {\"@type\": \"Question\", \"name\": \"Should patients complete it before the visit?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Pre-visit intake means the appointment starts on time and you have the full picture.\"}}, {\"@type\": \"Question\", \"name\": \"How do I send it digitally?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Send it at booking via the patient portal so answers land on the record.\"}}, {\"@type\": \"Question\", \"name\": \"Is it compliant?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Keep consent and data handling aligned with HIPAA, GDPR, PDPA, and DPDP; Clinexy handles this.\"}}, {\"@type\": \"Question\", \"name\": \"Can I customise the fields?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Add or remove sections to fit your specialty; ask only what you will use.\"}}, {\"@type\": \"Question\", \"name\": \"Where are answers stored?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"On the patient record, available the moment you open it.\"}}, {\"@type\": \"Question\", \"name\": \"Does it work on mobile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Keep it mobile-friendly so patients complete it easily.\"}}, {\"@type\": \"Question\", \"name\": \"Can I include consent?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Include consent to treat and to communications in the form.\"}}, {\"@type\": \"Question\", \"name\": \"Does it reduce front-desk time?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Pre-visit intake removes waiting-room paperwork.\"}}, {\"@type\": \"Question\", \"name\": \"Can Clinexy automate this?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. It sends, collects, and stores intake automatically.\"}}]}"
    ],
  },
  "patient-recall-message": {
    title: "Patient Recall Message Templates (Free)",
    description: "Free, ready-to-use patient recall message templates for SMS, WhatsApp, and email. Bring patients back on schedule with proven wording, plus tips to customise.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Template</span>
<h1>Patient recall message templates</h1>
<p class="hero-sub">These free patient recall message templates help you bring patients back when they are due, in wording proven to get responses.</p><ul class="point-list hero-points"><li>Stop no-shows before they happen.</li><li>Bring lapsed patients back automatically.</li><li>Keep every patient warm without manual work.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/reminders.svg" alt="Patient Recall Message Template" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>Copy & use</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/templates">Templates</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">Patient Recall Message Template</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>These free patient recall message templates help you bring patients back when they are due, in wording proven to get responses. Use the SMS, WhatsApp, or email versions below, keep them short and personal, include a one-tap rebooking link, and send them at the right time. Clinexy can send these automatically through its recall system.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>What a recall message is</h2><div class="definition-box"><div class="dl">Definition</div><p>A patient recall message is a short, friendly reminder that a patient is due to return for a visit, such as a check-up, hygiene appointment, or review. A good one is personal, clear about why now, and makes rebooking a single tap.</p></div><p class="prose">The best recall message is short, warm, and easy to act on. Below are templates you can copy, with placeholders to personalise.</p></div></section>


<section class="section"><div class="container section-narrow"><h2>SMS and WhatsApp recall templates</h2><p class="prose">Short and personal works best on these channels.</p><ul class="point-list"><li>Keep it under two short sentences.</li><li>Use the patient's first name.</li><li>State why they are due.</li><li>Include a one-tap rebooking link.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Copy these</h3><p class="prose">Hi [First name], it has been [interval] since your last [visit type] with [practice]. You are due for a check. Book a time that suits you here: [booking link]. Reply STOP to opt out.</p><p class="prose">Hi [First name], a friendly reminder from [practice] that your [visit type] is due. Tap to rebook in seconds: [booking link].</p></div><p class="prose">For the highest response, send on the channel the patient prefers. See <a href="/features/whatsapp-reminders">WhatsApp reminders</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>Email recall template</h2><p class="prose">Email gives more room, but keep it skimmable.</p><ul class="point-list"><li>A clear subject line.</li><li>A short, warm opening.</li><li>Why they are due, in one line.</li><li>A single, obvious button to rebook.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Copy this</h3><p class="prose"><strong>Subject:</strong> [First name], you are due for your [visit type]</p><p class="prose">Hi [First name], it has been [interval] since we last saw you at [practice]. Regular [visit type] visits keep things on track, and you are now due. Booking takes a moment: [booking link]. If now is not the right time, just reply and we will help.</p></div><p class="prose">Clinexy can send these automatically through the <a href="/features/patient-followup-system">follow-up system</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>How to use them well</h2><p class="prose">The wording matters, but timing and channel matter more.</p><ul class="point-list"><li>Send when the patient is genuinely due.</li><li>Personalise the placeholders every time.</li><li>Always include a one-tap rebooking link.</li><li>Follow up once if there is no response.</li></ul><p class="prose">The full approach is in <a href="/patient-growth/recall-strategies">recall strategies</a>.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Send recalls automatically</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"Our recalls used to live on sticky notes. Using wording like this through Clinexy, patients come back on time and the messages take seconds to send."</blockquote><div class="attrib"><div class="avatar">PM</div><div class="who"><strong>Dr. Priya M.</strong><span>Solo dentist, Pune</span></div></div></div></div></section>
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
<p class="prose">Clinexy turns these templates into an automated recall system.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>Are these recall templates free?</summary><div class="faq-answer">Yes. Copy and use them, and customise the placeholders for your practice.</div></details><details class="faq-item"><summary>Which channel works best for recall?</summary><div class="faq-answer">WhatsApp and SMS are read far more than email; use the patient's preferred channel.</div></details><details class="faq-item"><summary>How do I personalise them?</summary><div class="faq-answer">Replace the placeholders for name, interval, visit type, practice, and booking link every time.</div></details><details class="faq-item"><summary>When should I send a recall?</summary><div class="faq-answer">When the patient is genuinely due to return, based on their visit type.</div></details><details class="faq-item"><summary>Should I include a booking link?</summary><div class="faq-answer">Yes. A one-tap rebooking link is the single most important element.</div></details><details class="faq-item"><summary>Can I automate these?</summary><div class="faq-answer">Yes. Clinexy sends recall messages automatically through its follow-up system.</div></details><details class="faq-item"><summary>How often should I follow up?</summary><div class="faq-answer">Once is usually enough if there is no response to the first message.</div></details><details class="faq-item"><summary>Are they compliant?</summary><div class="faq-answer">Keep an opt-out on SMS and respect messaging rules; Clinexy handles this.</div></details><details class="faq-item"><summary>Do they work for any specialty?</summary><div class="faq-answer">Yes. Adjust the visit type and interval to fit your practice.</div></details><details class="faq-item"><summary>How do I get more patients to return?</summary><div class="faq-answer">Combine good wording with the right timing and an easy rebooking link.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">Use these recall templates to bring patients back on schedule. Key points:</p><ul class="point-list"><li>Keep SMS and WhatsApp short and personal.</li><li>Use email for a little more detail.</li><li>Always personalise the placeholders.</li><li>Include a one-tap rebooking link.</li><li>Automate them with Clinexy's recall system.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/features/patient-followup-system"><h4>Patient Follow-Up System</h4><p>Send these recalls automatically.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/patient-growth/recall-strategies"><h4>Recall Strategies</h4><p>The full recall playbook.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/solutions/dentists"><h4>Clinexy for Dentists</h4><p>How dental practices use recall.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Automate your patient recalls</h2><p>Start free today. Turn these templates into an automated recall system.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Templates\", \"item\": \"https://www.clinexy.com/templates\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Patient Recall Message Template\", \"item\": \"https://www.clinexy.com/templates/patient-recall-message\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"Patient Recall Message Templates (Free)\", \"description\": \"Free, ready-to-use patient recall message templates for SMS, WhatsApp, and email. Bring patients back on schedule with proven wording, plus tips to customise.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Are these recall templates free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Copy and use them, and customise the placeholders for your practice.\"}}, {\"@type\": \"Question\", \"name\": \"Which channel works best for recall?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"WhatsApp and SMS are read far more than email; use the patient's preferred channel.\"}}, {\"@type\": \"Question\", \"name\": \"How do I personalise them?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Replace the placeholders for name, interval, visit type, practice, and booking link every time.\"}}, {\"@type\": \"Question\", \"name\": \"When should I send a recall?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"When the patient is genuinely due to return, based on their visit type.\"}}, {\"@type\": \"Question\", \"name\": \"Should I include a booking link?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A one-tap rebooking link is the single most important element.\"}}, {\"@type\": \"Question\", \"name\": \"Can I automate these?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clinexy sends recall messages automatically through its follow-up system.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I follow up?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Once is usually enough if there is no response to the first message.\"}}, {\"@type\": \"Question\", \"name\": \"Are they compliant?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Keep an opt-out on SMS and respect messaging rules; Clinexy handles this.\"}}, {\"@type\": \"Question\", \"name\": \"Do they work for any specialty?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Adjust the visit type and interval to fit your practice.\"}}, {\"@type\": \"Question\", \"name\": \"How do I get more patients to return?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Combine good wording with the right timing and an easy rebooking link.\"}}]}"
    ],
  },
  "treatment-plan": {
    title: "Treatment Plan Template (Free)",
    description: "A free, ready-to-use treatment plan template to set goals, stages, costs, and timelines clearly, so patients understand and accept care. Plus tips to track it.",
    contentHtml: `<header class="hero"><div class="hero-inner">
<div class="hero-content">
<span class="tag green">Template</span>
<h1>Treatment plan template</h1>
<p class="hero-sub">This free treatment plan template helps you set out goals, stages, timelines, and costs clearly, so patients understand and accept their care.</p><ul class="point-list hero-points"><li>Get found by patients searching for your specialty.</li><li>Fill your calendar and cut no-shows automatically.</li><li>Run bookings, branding, and reviews from one place.</li></ul>
<div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div>
<p class="hero-reassure">14-day free trial · No credit card required · Built for solo practice</p>
</div>
<div class="hero-image"><div class="hero-photo-wrap">
<img class="hero-photo" src="/assets/img/growth.svg" alt="Treatment Plan Template" loading="eager" width="600" height="420">
<div class="hero-photo-badge"><div class="badge-dot"></div><span>Copy & use</span></div>
</div></div>
</div></header>
<nav class="breadcrumbs"><div class="container"><a href="/">Home</a><span class="crumb-sep">&rsaquo;</span><a href="/templates">Templates</a><span class="crumb-sep">&rsaquo;</span><span class="crumb-current">Treatment Plan Template</span></div></nav>
<aside class="quick-answer container"><div class="quick-answer-inner"><div class="quick-answer-label">Quick answer</div><p>This free treatment plan template helps you set out goals, stages, timelines, and costs clearly, so patients understand and accept their care. Use the structure below, share it with the patient, and track progress and the next booking. Clinexy can track treatment plans and prompt the next stage automatically.</p></div></aside>

<section class="section"><div class="container section-narrow"><h2>What a treatment plan is</h2><div class="definition-box"><div class="dl">Definition</div><p>A treatment plan is a clear, written outline of a patient's recommended care: the goals, the stages or steps, the expected timeline, and the costs. A good plan helps the patient understand and commit, and helps the practice track progress and follow up.</p></div><p class="prose">A clear plan improves acceptance and completion. Below is a template you can adapt to your specialty.</p></div></section>


<section class="section"><div class="container section-narrow"><h2>What to include</h2><p class="prose">Make the plan clear, staged, and easy to say yes to.</p><ul class="point-list"><li>The goal of treatment, in plain language.</li><li>The stages or steps, in order.</li><li>The expected timeline for each.</li><li>The cost per stage and any options.</li></ul><div class="summary-box" style="margin-top:8px"><h3 style="margin-bottom:10px">Treatment plan structure</h3><p class="prose">Patient · Date · Presenting concern · Goal of treatment · Stage 1: [procedure], [timeline], [cost] · Stage 2: [procedure], [timeline], [cost] · Stage 3: [procedure], [timeline], [cost] · Alternatives considered · Risks and aftercare · Total estimated cost and payment options · Next appointment.</p></div><p class="prose">Share it with the patient so they can understand and accept it.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>Make it easy to accept</h2><p class="prose">Acceptance rises when the plan is clear and the next step is simple.</p><ul class="point-list"><li>Use plain language, not jargon.</li><li>Show costs and options transparently.</li><li>Offer packages or payment plans where relevant.</li><li>Book the next stage before they leave.</li></ul><p class="prose">Billing and packages are handled by <a href="/features/billing">billing</a>.</p></div></section>
<section class="section"><div class="container section-narrow"><h2>Track and follow up</h2><p class="prose">A plan only pays off if it is completed. Track and prompt the next stage.</p><ul class="point-list"><li>Record each stage as it is completed.</li><li>Prompt the next booking automatically.</li><li>Follow up if a stage is overdue.</li><li>Keep the plan on the patient record.</li></ul><p class="prose">Clinexy tracks plans and follow-ups through <a href="/features/patient-followup-system">the follow-up system</a>.</p></div></section>

<section class="inline-cta"><div class="container"><h3>Track treatment plans automatically</h3><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-secondary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>
<section class="section"><div class="container section-narrow"><div class="testimonial"><blockquote>"A clear, staged plan made patients far more likely to say yes and complete treatment. This is exactly how I lay mine out."</blockquote><div class="attrib"><div class="avatar">AK</div><div class="who"><strong>Dr. A. Kapoor</strong><span>Solo dermatologist, Mumbai</span></div></div></div></div></section>
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
<p class="prose">Clinexy turns this template into tracked, followed-up treatment plans.</p>
<ul class="point-list"><li><strong>Automated workflows.</strong> Reminders, reviews, and recall run on their own.</li><li><strong>One platform.</strong> Operations and growth on one record.</li><li><strong>One dashboard.</strong> See results in a single place.</li><li><strong>Done-For-You.</strong> Hand the growth work over if you prefer.</li></ul>
<p class="prose">Explore the <a href="/features">full platform</a> or see it set up for your <a href="/solutions/solo-doctors">practice type</a>.</p>
</div></section>
<section class="section"><div class="container section-narrow">
<h2>Everything in one subscription</h2>
<p class="prose">The tools here are part of one platform, on a single plan that usually costs less than the separate tools it replaces.</p>
<ul class="point-list two-col"><li>Online booking and reminders</li><li>Recall and follow-up automation</li><li>A branded website on your domain</li><li>Local SEO and Google profile sync</li><li>Automated review collection</li><li>Personal branding tools</li><li>Telehealth and patient records</li><li>Billing, invoices, and superbills</li></ul>
<p class="prose">See the full platform on the <a href="/features">features overview</a>, or compare it on the <a href="/compare">comparison hub</a>.</p>
</div></section>
<section class="section section-faq"><div class="container"><h2>Frequently asked questions</h2><div class="faq-list"><details class="faq-item"><summary>Is this treatment plan template free?</summary><div class="faq-answer">Yes. Copy and adapt it to your specialty and practice.</div></details><details class="faq-item"><summary>What should a treatment plan include?</summary><div class="faq-answer">The goal, the stages, timelines, costs, alternatives, risks, and the next appointment.</div></details><details class="faq-item"><summary>How do I improve plan acceptance?</summary><div class="faq-answer">Use plain language, show costs and options clearly, and make booking the next stage easy.</div></details><details class="faq-item"><summary>Can I offer payment plans?</summary><div class="faq-answer">Yes. Billing supports packages and payment plans alongside standard invoices.</div></details><details class="faq-item"><summary>How do I track progress?</summary><div class="faq-answer">Record each stage and prompt the next booking; Clinexy can automate this.</div></details><details class="faq-item"><summary>What if a stage is overdue?</summary><div class="faq-answer">Follow up automatically so the plan does not stall.</div></details><details class="faq-item"><summary>Where is the plan stored?</summary><div class="faq-answer">On the patient record, alongside notes and billing.</div></details><details class="faq-item"><summary>Does it work for my specialty?</summary><div class="faq-answer">Yes. Adjust the stages to fit dental, aesthetic, physiotherapy, or other staged care.</div></details><details class="faq-item"><summary>Does a clear plan increase completion?</summary><div class="faq-answer">Yes. Clarity and an easy next step lift both acceptance and completion.</div></details><details class="faq-item"><summary>Can Clinexy automate follow-up?</summary><div class="faq-answer">Yes. It tracks plans and prompts the next stage automatically.</div></details></div></div></section>
<section class="section"><div class="container section-narrow"><div class="summary-box"><h2>Summary</h2><p class="prose">Use this template to set out clear, acceptable treatment plans. Key points:</p><ul class="point-list"><li>Set goals, stages, timelines, and costs clearly.</li><li>Use plain language and transparent options.</li><li>Book the next stage before the patient leaves.</li><li>Track progress and prompt the next stage.</li><li>Automate follow-up with Clinexy.</li></ul></div></div></section>
<section class="section section-related"><div class="container"><h2>Related pages</h2><div class="related-grid"><a class="related-card" href="/features/billing"><h4>Billing</h4><p>Handle packages and payment plans.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/features/patient-followup-system"><h4>Patient Follow-Up System</h4><p>Track plans and prompt the next stage.</p><span class="related-arrow">&rarr;</span></a><a class="related-card" href="/solutions/dentists"><h4>Clinexy for Dentists</h4><p>How dental practices track treatment plans.</p><span class="related-arrow">&rarr;</span></a></div></div></section>
<section class="section section-cta"><div class="container"><h2>Track treatment plans with ease</h2><p>Start free today. Turn this template into tracked, followed-up plans.</p><div class="hero-ctas"><a class="btn btn-primary btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Start Free Trial</a><a class="btn btn-ghost-light btn-lg" href="https://demo.clinexy.com/portal/onboarding-request">Book a Demo</a></div></div></section>`,
    schemas: [
      "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"Clinexy\", \"url\": \"https://www.clinexy.com/\", \"logo\": \"https://www.clinexy.com/assets/img/logo.svg\", \"description\": \"All-in-one patient growth and practice management platform for solo healthcare professionals.\", \"sameAs\": [\"https://www.linkedin.com/company/clinexy/\", \"https://www.facebook.com/clinexyapp\"]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.clinexy.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Templates\", \"item\": \"https://www.clinexy.com/templates\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Treatment Plan Template\", \"item\": \"https://www.clinexy.com/templates/treatment-plan\"}]}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"Treatment Plan Template (Free)\", \"description\": \"A free, ready-to-use treatment plan template to set goals, stages, costs, and timelines clearly, so patients understand and accept care. Plus tips to track it.\", \"author\": {\"@type\": \"Organization\", \"name\": \"Clinexy\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"Clinexy\", \"logo\": {\"@type\": \"ImageObject\", \"url\": \"https://www.clinexy.com/assets/img/logo.svg\"}}, \"datePublished\": \"2026-02-01\", \"dateModified\": \"2026-06-15\"}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is this treatment plan template free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Copy and adapt it to your specialty and practice.\"}}, {\"@type\": \"Question\", \"name\": \"What should a treatment plan include?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The goal, the stages, timelines, costs, alternatives, risks, and the next appointment.\"}}, {\"@type\": \"Question\", \"name\": \"How do I improve plan acceptance?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Use plain language, show costs and options clearly, and make booking the next stage easy.\"}}, {\"@type\": \"Question\", \"name\": \"Can I offer payment plans?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Billing supports packages and payment plans alongside standard invoices.\"}}, {\"@type\": \"Question\", \"name\": \"How do I track progress?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Record each stage and prompt the next booking; Clinexy can automate this.\"}}, {\"@type\": \"Question\", \"name\": \"What if a stage is overdue?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Follow up automatically so the plan does not stall.\"}}, {\"@type\": \"Question\", \"name\": \"Where is the plan stored?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"On the patient record, alongside notes and billing.\"}}, {\"@type\": \"Question\", \"name\": \"Does it work for my specialty?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Adjust the stages to fit dental, aesthetic, physiotherapy, or other staged care.\"}}, {\"@type\": \"Question\", \"name\": \"Does a clear plan increase completion?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Clarity and an easy next step lift both acceptance and completion.\"}}, {\"@type\": \"Question\", \"name\": \"Can Clinexy automate follow-up?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. It tracks plans and prompts the next stage automatically.\"}}]}"
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
    alternates: { canonical: `https://www.clinexy.com/templates/${slug}` },
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

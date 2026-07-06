import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";

const posts: Record<string, { title: string; tag: string; readTime: string; metaDesc: string; content: string[] }> = {
  "the-complete-growth-guide-for-solo-doctors": {
    title: "The Complete Growth Guide for Solo Doctors",
    tag: "Growth Guide",
    readTime: "18 min read",
    metaDesc: "Everything a solo doctor needs to build a full calendar, a strong reputation, and a practice that grows month after month.",
    content: [
      "Most solo doctors are excellent clinicians and accidental business owners. You trained for one role and got handed three: clinician, receptionist, and marketer. The marketing always loses because you run out of hours before you run out of patients.",
      "This guide is the system that changes that. It covers the seven levers that determine whether a solo practice grows or stagnates, and exactly how to activate each one without learning marketing.",
      "**Lever 1: Your online presence.** Patients find doctors the same way they find restaurants: Google. If you are not in the top three local results for your specialty, most patients in your area will never find you. Local SEO — your Google Business Profile, your website schema, your review count — determines this ranking. It is not glamorous, but it compounds.",
      "**Lever 2: Your website.** A website on your own domain is the foundation of everything else. It is the place patients land, read about you, trust you, and book. A Practo profile is not a website. It is a listing on someone else's platform, subject to their algorithm and their commission.",
      "**Lever 3: Reviews.** 80% of patients read reviews before booking. Most solo practitioners have fewer than 10 after years of practice — not because patients are unhappy, but because nobody ever asks. An automated review request sent two hours after each visit changes this within 90 days.",
      "**Lever 4: No-show reduction.** A 25–35% no-show rate is the industry average. Most practices accept it. The ones that don't use a 3-touch reminder sequence: 24 hours before, 2 hours before, and 30 minutes before, with a one-tap reschedule link. This alone recovers ₹15,000–₹20,000 a month for a typical practice.",
      "**Lever 5: Patient recall.** Half your patients won't come back unless you ask them to. A 6-month recall via WhatsApp — gentle, personalised, with a booking link — brings 38% of inactive patients back.",
      "**Lever 6: Your personal brand.** Credentials get patients to consider you. Your story gets them to trust you. A two-paragraph bio, a professional headshot, and three patient stories (appropriately anonymised) do more for your practice than any advertisement.",
      "**Lever 7: Automation.** The practices that grow fastest are not working harder. They are automating the six levers above so that growth happens without requiring their attention. This is what a platform like Clinexy does — it runs the growth work in the background so you can focus on the patient in front of you.",
    ],
  },
  "why-30-of-patients-dont-show-up": {
    title: "Why 30% of Patients Don't Show Up — And How to Fix It",
    tag: "No-Shows",
    readTime: "8 min read",
    metaDesc: "No-shows cost solo practices thousands every month. Here is exactly why they happen and the 3-touch reminder sequence that cuts them by 40%.",
    content: [
      "Thirty percent. One in three patients who books an appointment simply doesn't come. For a practice seeing 20 patients a day, that is six empty slots. At ₹500 per slot, that is ₹3,000 gone — every single day. ₹66,000 per month. ₹792,000 per year.",
      "The question is: why does it keep happening?",
      "The answer is rarely that patients don't care. It is almost always one of three things: they forgot, something came up and they didn't know how to reschedule easily, or the appointment felt less urgent as the days passed.",
      "All three are solvable. Here is how.",
      "**They forgot.** The solution is simple: remind them. Not once — three times. The optimal sequence is 24 hours before (they can reschedule if needed), 2 hours before (they can leave now), and 30 minutes before (last chance). Each reminder should include a one-tap reschedule link. This single change drops no-shows by 30–40% in the first 90 days.",
      "**Something came up.** When life intervenes, most patients don't reschedule because rescheduling feels like work — finding the phone number, calling, waiting on hold, explaining. A WhatsApp message with a direct booking link removes all friction. They reschedule in 20 seconds, your slot opens up, and another patient fills it.",
      "**The appointment felt less urgent.** This is the hardest one. It is addressed by how you communicate the appointment before it happens — the intake form they complete, the information they receive, the sense that you already know them before they arrive.",
      "The practice data from Clinexy customers is consistent: practices that implement the 3-touch reminder sequence see their no-show rate drop from an average of 27% to under 10% within 90 days. That is, for most practices, more than ₹40,000 per month recovered without seeing a single additional patient.",
    ],
  },
  "how-to-find-the-best-dentist-near-you": {
    title: "How to Find the Best Dentist Near You",
    tag: "Patient Perspective",
    readTime: "6 min read",
    metaDesc: "What patients actually look for when searching for a dentist, and how dentists can show up at exactly the right moment.",
    content: [
      "When someone needs a dentist, the journey usually looks like this: they open Google, type 'dentist near me', and scan the first three results. They look at the star rating. They read two or three reviews. They check if there is online booking. They decide in under three minutes.",
      "This is how most patients — in most cities, for most healthcare specialties — now find their provider. Not through referrals (though referrals still matter). Not through directories (though listings help). Through local search.",
      "What does this mean for dentists?",
      "**Your Google ranking is your waiting room.** If you don't appear in the local map pack — the three results shown above the organic listings — most of the people searching for your specialty in your area will never find you. Getting into the map pack requires: a complete and active Google Business Profile, consistent local citations, a website with the right schema markup, and a steady stream of recent reviews.",
      "**Reviews are your referrals, scaled.** A personal referral from a trusted friend is the most powerful conversion tool in healthcare. Reviews are that referral, at scale. A dentist with 80 four-point-eight-star reviews is trusted by a stranger in the same way. The dentist with 4 reviews is not.",
      "**Online booking is now expected.** Patients who find you at 11pm want to book at 11pm. If there is no online booking, a significant percentage will simply find someone who offers it. This is not a nice-to-have anymore.",
      "For dentists: the practice that wins is the one that shows up when the patient searches, has reviews that build trust, and offers booking without friction. Clinexy is built to deliver all three.",
    ],
  },
  "solo-doctors-why-your-personal-brand-matters-more-than-your-degree": {
    title: "Why Your Personal Brand Matters More Than Your Degree",
    tag: "Personal Branding",
    readTime: "10 min read",
    metaDesc: "Credentials get you to the interview. Your brand gets patients to book. Here is how to build one that works.",
    content: [
      "Here is an uncomfortable truth for doctors: your MBBS, your MD, your fellowship — they no longer differentiate you to most patients. Not because they don't matter. They do. But patients assume a basic level of qualification. What they are actually deciding is whether to trust you.",
      "Trust is built before the appointment. It is built through what patients find when they search for you.",
      "What is a personal brand for a doctor? It is not about becoming a social media influencer. It is simpler than that: a professional photo, a compelling two-paragraph bio that explains your approach and your why, your credentials presented clearly, three or four patient stories that illustrate what it is like to be your patient, and a consistent visual identity across your website and Google profile.",
      "**The bio is the most important thing you will ever write.** Not your CV. Not your publication list. Two paragraphs that answer: who do you help, and how do you do it differently? Patients read this and either feel 'this person gets it' or they click back.",
      "**Patient stories do the trust work.** You cannot post before-and-after photos or name patients (without consent). But you can say: 'Many of my patients come to me after years of managing [condition] without a clear plan. We work together to...' This is a story. It builds trust.",
      "**Consistency builds credibility.** When your website, your Google profile, your LinkedIn, and your WhatsApp all look and feel like the same person, patients subconsciously register professionalism. When they don't match, patients notice — and hesitate.",
      "Building this takes one focused afternoon and then maintenance. Clinexy's personal branding tools make this the work of a few hours, not weeks.",
    ],
  },
  "the-growth-engine-for-solo-doctors": {
    title: "The Growth Engine for Solo Doctors",
    tag: "Strategy",
    readTime: "7 min read",
    metaDesc: "A single system that turns every patient visit into reviews, referrals, and retention. How the flywheel works.",
    content: [
      "Most solo practice growth is accidental. A patient tells a friend. A positive Google search happens to find your old website. A referral comes in from a colleague. Growth happens, but it is random and unreliable.",
      "A growth engine makes it systematic. It is a closed loop where every patient interaction feeds the next:",
      "**Step 1: Discovery.** A new patient searches your specialty in your city. Because you have local SEO, recent reviews, and an active Google Business Profile, you appear in the top three results. They find your website.",
      "**Step 2: Trust.** They read your website — your bio, your approach, your patient stories, your reviews. They trust what they see. They book.",
      "**Step 3: Experience.** They receive a reminder sequence. They show up. The consultation happens with all their records accessible. They pay with minimal friction.",
      "**Step 4: Feedback.** Two hours after the visit, they receive a WhatsApp message: 'How was your visit? If you have a moment, a Google review helps other patients find us.' They leave a review. Your rating climbs.",
      "**Step 5: Recall.** At 6 months, they receive a personalised recall message: 'It has been 6 months since your last visit. Would you like to schedule your next one?' 38% book again.",
      "**Step 6: Referral.** A happy patient, who just left a 5-star review and has been recalled for a follow-up, tells a friend. The friend searches. They find you — now with even more reviews. The loop repeats.",
      "This is the flywheel. Each rotation compounds. The practices running this system grow 2–3x faster than those relying on word-of-mouth alone.",
    ],
  },
  "your-digital-clinic-growth-assistant": {
    title: "Your Digital Clinic Growth Assistant",
    tag: "AI & Automation",
    readTime: "9 min read",
    metaDesc: "How AI is transforming solo practice management and why the practitioners who adopt it early will win.",
    content: [
      "Five years ago, the idea of an AI managing your clinic's growth sounded like science fiction. Today, it is a morning's setup.",
      "What does AI actually do for a solo practice in 2026? The most impactful applications are not dramatic. They are the boring, repetitive tasks that currently eat your time and attention:",
      "**Appointment scheduling.** An AI assistant can handle booking enquiries — 'Can I book for next Tuesday at 3pm?' — without you or a receptionist being involved. It checks your availability, confirms the booking, sends the intake form, and adds it to your calendar.",
      "**Reminder optimisation.** AI can determine the optimal reminder timing for each patient type — not just send a generic 24-hour reminder, but learn that your older patients respond better to 48-hour reminders and your younger patients respond to same-day messages.",
      "**Review responses.** Responding to Google reviews promptly improves your local ranking. AI can draft personalised responses to every review — positive and negative — for you to approve in seconds.",
      "**Note drafting.** After a consultation, AI can draft a clinical note based on the appointment type, for you to edit and finalise. This saves 5–15 minutes per patient.",
      "**Recall personalisation.** Instead of a generic 'it's been 6 months' message, AI can personalise recall based on the patient's treatment history: 'Following up on your knee management plan — how is your progress?'",
      "The practitioners who adopt these tools early will have a significant competitive advantage. Not because AI replaces the clinical relationship — it never will — but because it removes the administrative and marketing overhead that currently prevents solo practitioners from growing.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog | Clinexy" };
  return {
    title: post.title,
    description: post.metaDesc,
    alternates: { canonical: `https://www.clinexy.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <section style={{ background: 'var(--gray-50)', padding: '56px 0 0' }}>
        <div className="container section-narrow">
          <nav className="breadcrumbs" style={{ border: 'none', padding: '0 0 20px' }} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="crumb-sep">›</span>
            <Link href="/blog">Blog</Link><span className="crumb-sep">›</span>
            <span className="crumb-current">{post.title}</span>
          </nav>
          <span className="tag-pill">{post.tag}</span>
          <h1 style={{ marginTop: '16px' }}>{post.title}</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '13.5px', marginBottom: '32px' }}>{post.readTime} · Clinexy editorial team</p>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          {post.content.map((para, i) => {
            if (para.startsWith('**') && para.includes('.**')) {
              const boldEnd = para.indexOf('.**') + 3;
              const bold = para.slice(2, boldEnd - 3);
              const rest = para.slice(boldEnd);
              return (
                <p key={i} className="prose">
                  <strong>{bold}.</strong>{rest}
                </p>
              );
            }
            return <p key={i} className="prose">{para}</p>;
          })}
        </div>
      </section>

      <section style={{ background: 'var(--blue-50)', padding: '40px 0', borderTop: '1px solid var(--blue-100)', borderBottom: '1px solid var(--blue-100)' }}>
        <div className="container section-narrow">
          <h3 style={{ color: 'var(--blue-700)', marginBottom: '8px' }}>Put this into practice</h3>
          <p style={{ color: 'var(--gray-700)', marginBottom: '20px', fontSize: '15px' }}>
            Clinexy automates every strategy in this article. Start your free trial today and see the results in your first 90 days.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary" id={`blog-${slug}-cta`}>Start Free Trial — 14 Days Free</a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Blog — Practice Growth Insights for Solo Practitioners",
  description: "Guides, research, and actionable insights on patient growth, no-show reduction, local SEO, and personal branding for solo healthcare professionals.",
  alternates: { canonical: "https://www.clinexy.com/blog" },
};

const posts = [
  {
    slug: "the-complete-growth-guide-for-solo-doctors",
    title: "The Complete Growth Guide for Solo Doctors",
    excerpt: "Everything a solo doctor needs to build a full calendar, a strong reputation, and a practice that grows month after month.",
    tag: "Growth Guide",
    readTime: "18 min read",
  },
  {
    slug: "why-30-of-patients-dont-show-up",
    title: "Why 30% of Patients Don't Show Up — And How to Fix It",
    excerpt: "No-shows cost solo practices thousands every month. Here is exactly why they happen and the 3-touch reminder sequence that cuts them by 40%.",
    tag: "No-Shows",
    readTime: "8 min read",
  },
  {
    slug: "how-to-find-the-best-dentist-near-you",
    title: "How to Find the Best Dentist Near You",
    excerpt: "What patients actually look for when searching for a dentist, and how dentists can show up at exactly the right moment.",
    tag: "Patient Perspective",
    readTime: "6 min read",
  },
  {
    slug: "solo-doctors-why-your-personal-brand-matters-more-than-your-degree",
    title: "Why Your Personal Brand Matters More Than Your Degree",
    excerpt: "Credentials get you to the interview. Your brand gets patients to book. Here is how to build one that works.",
    tag: "Personal Branding",
    readTime: "10 min read",
  },
  {
    slug: "the-growth-engine-for-solo-doctors",
    title: "The Growth Engine for Solo Doctors",
    excerpt: "A single system that turns every patient visit into reviews, referrals, and retention. How the flywheel works.",
    tag: "Strategy",
    readTime: "7 min read",
  },
  {
    slug: "your-digital-clinic-growth-assistant",
    title: "Your Digital Clinic Growth Assistant",
    excerpt: "How AI is transforming solo practice management and why the practitioners who adopt it early will win.",
    tag: "AI & Automation",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '640px' }}>
            <span className="tag">Blog</span>
            <h1>Practice growth insights</h1>
            <p className="hero-sub">Guides, research, and actionable ideas for solo healthcare professionals who want to grow their practice and reclaim their time.</p>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Blog</span>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="resource-card">
                <div className="resource-card-body">
                  <span className="tag-pill">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <div className="resource-card-footer">{post.readTime} · Read article →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Try Clinexy free for 14 days" subtext="Put these insights into practice with the tools that make it happen." variant="inline" />
    </>
  );
}

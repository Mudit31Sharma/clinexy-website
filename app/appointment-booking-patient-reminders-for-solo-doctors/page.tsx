import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Appointment Booking & Patient Reminders for Solo Doctors",
  description: "Online appointment booking with automated patient reminders for solo doctors. Cut no-shows by 40%. WhatsApp, SMS, and email reminders.",
  alternates: { canonical: "https://www.clinexy.com/appointment-booking-patient-reminders-for-solo-doctors" },
};

export default function AppointmentBookingPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="hero-content" style={{ maxWidth: '660px' }}>
            <span className="tag">Online Booking + Reminders</span>
            <h1>Appointment booking and patient reminders for solo doctors</h1>
            <p className="hero-sub">24/7 online booking on your own link. Automated 3-touch WhatsApp and SMS reminders that cut your no-show rate below 10%. Zero phone tag.</p>
            <ul className="point-list" style={{ marginBottom: '26px' }}>
              <li>Branded booking link on your website and WhatsApp bio</li>
              <li>Reminders at 24 hours, 2 hours, and 30 minutes before</li>
              <li>One-tap reschedule for patients</li>
              <li>Automatic waitlist filling when slots open</li>
            </ul>
            <div className="hero-ctas">
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-primary btn-lg" id="booking-trial">Start Free Trial</a>
              <a href="https://demo.clinexy.com/portal/onboarding-request" className="btn btn-secondary btn-lg" id="booking-demo">Book a Demo</a>
            </div>
            <p className="hero-reassure">14-day free trial · No credit card required · Set up in 30 minutes</p>
          </div>
          <div className="hero-image">
            <div className="hero-svg-wrap">
              <svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter,sans-serif" style={{ display: 'block', width: '100%' }}>
                <rect width="460" height="320" fill="#F8FAFC"/>
                {/* Calendar */}
                <rect x="20" y="20" width="260" height="180" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
                <text x="36" y="48" fontSize="12" fontWeight="700" fill="#1F2937">Your booking calendar</text>
                <g fontSize="8" fill="#94A3B8" textAnchor="middle">
                  {['Mon','Tue','Wed','Thu','Fri'].map((d, i) => (
                    <text key={d} x={56 + i*46} y="68">{d}</text>
                  ))}
                </g>
                {[
                  { x: 36, y: 80, w: 40, label: '9:00', color: '#EAF0FD', text: '#1F6AE1' },
                  { x: 82, y: 80, w: 40, label: 'Riya', color: '#E8F7EF', text: '#239E62' },
                  { x: 174, y: 80, w: 40, label: '9:30', color: '#EAF0FD', text: '#1F6AE1' },
                  { x: 36, y: 112, w: 40, label: 'Amit', color: '#E8F7EF', text: '#239E62' },
                  { x: 128, y: 112, w: 40, label: '11:00', color: '#EAF0FD', text: '#1F6AE1' },
                  { x: 220, y: 112, w: 40, label: '2:00', color: '#EAF0FD', text: '#1F6AE1' },
                ].map((slot, i) => (
                  <g key={i}>
                    <rect x={slot.x} y={slot.y} width={slot.w} height={26} rx="5" fill={slot.color}/>
                    <text x={slot.x + slot.w/2} y={slot.y + 16} fontSize="9" fill={slot.text} textAnchor="middle" fontWeight="600">{slot.label}</text>
                  </g>
                ))}
                {/* WhatsApp reminders */}
                <rect x="294" y="20" width="146" height="180" rx="10" fill="#1a2f52"/>
                <text x="310" y="48" fontSize="11" fontWeight="700" fill="white">Reminders sent</text>
                {[
                  { time: '24 hrs before', status: '✓ Sent', color: '#4ade80' },
                  { time: '2 hrs before', status: '✓ Sent', color: '#4ade80' },
                  { time: '30 min before', status: '⏳ Pending', color: '#facc15' },
                ].map((r, i) => (
                  <g key={i}>
                    <rect x="310" y={64 + i * 46} width="114" height="36" rx="6" fill="rgba(255,255,255,0.08)"/>
                    <text x="320" y={80 + i * 46} fontSize="9" fill="rgba(255,255,255,0.7)">{r.time}</text>
                    <text x="320" y={93 + i * 46} fontSize="9" fill={r.color} fontWeight="600">{r.status}</text>
                  </g>
                ))}
                {/* Stats row */}
                <rect x="20" y="216" width="130" height="60" rx="8" fill="white" stroke="#E2E8F0"/>
                <text x="36" y="240" fontSize="10" fontWeight="700" fill="#1F2937">No-show rate</text>
                <text x="36" y="264" fontSize="18" fontWeight="800" fill="#22c55e">8.4%</text>
                <rect x="162" y="216" width="130" height="60" rx="8" fill="white" stroke="#E2E8F0"/>
                <text x="178" y="240" fontSize="10" fontWeight="700" fill="#1F2937">Reminders today</text>
                <text x="178" y="264" fontSize="18" fontWeight="800" fill="#1F6AE1">14</text>
                <rect x="304" y="216" width="136" height="60" rx="8" fill="white" stroke="#E2E8F0"/>
                <text x="318" y="240" fontSize="10" fontWeight="700" fill="#1F2937">Waitlist filled</text>
                <text x="318" y="264" fontSize="18" fontWeight="800" fill="#f59e0b">3</text>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link><span className="crumb-sep">›</span>
          <span className="crumb-current">Appointment Booking &amp; Patient Reminders</span>
        </div>
      </nav>

      <aside className="quick-answer container" style={{ maxWidth: '860px' }}>
        <div className="quick-answer-inner">
          <div className="quick-answer-label">Quick answer</div>
          <p>
            Clinexy's online booking and patient reminder system gives solo doctors a branded booking link, real-time calendar management, and a 3-touch automated reminder sequence via WhatsApp, SMS, and email. Most practices see their no-show rate drop from 25–35% to under 10% within 90 days.
          </p>
        </div>
      </aside>

      <section className="section">
        <div className="container section-narrow">
          <h2>The booking and reminder system for solo doctors</h2>
          <p className="prose">
            Most solo practices still rely on phone calls for booking and send one reminder at most. The result: a 25–35% no-show rate that nobody talks about but everyone experiences.
          </p>
          <p className="prose">
            Clinexy changes this with two integrated systems: a 24/7 online booking link that patients can use at any time, and a 3-touch automated reminder sequence that starts the moment they book.
          </p>
          <ul className="point-list dark">
            <li><strong>Branded booking link.</strong> On your website, WhatsApp bio, and Google Business Profile. Patients book in under 2 minutes, any time of day or night.</li>
            <li><strong>3-touch reminder sequence.</strong> 24 hours before, 2 hours before, and 30 minutes before — via WhatsApp, SMS, or email. Each reminder includes a one-tap reschedule link.</li>
            <li><strong>One-tap reschedule.</strong> When life intervenes, patients reschedule in 20 seconds. Your slot opens, another patient fills it.</li>
            <li><strong>Waitlist management.</strong> When a slot opens from a cancellation, the next patient on the waitlist is automatically offered it.</li>
            <li><strong>Calendar sync.</strong> Google Calendar and Outlook sync, so your personal and work calendars stay aligned.</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2>What changes in 90 days</h2>
          <div className="stat-band" style={{ maxWidth: '700px' }}>
            {[
              { num: "<10%", label: "no-show rate, down from 25–35%" },
              { num: "3-touch", label: "reminder sequence per patient" },
              { num: "24/7", label: "bookings without phone calls" },
              { num: "98%", label: "WhatsApp open rate" },
            ].map((s, i) => (
              <div key={i} className="stat good">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-narrow">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              { q: "How do I set up online booking?", a: "30-minute guided setup. Connect your calendar, set your availability, and share your booking link. No technical knowledge required." },
              { q: "Can patients cancel and reschedule online?", a: "Yes. One-tap reschedule with a link in every reminder. You can set notice requirements (e.g., 24-hour notice for cancellations)." },
              { q: "What reminder channels are supported?", a: "WhatsApp, SMS, and email. You choose the default, and patients can specify their preference during booking." },
              { q: "Does it work with my existing calendar?", a: "Yes. Two-way sync with Google Calendar and Outlook. Any blocked time in your personal calendar is automatically blocked in your booking calendar." },
              { q: "How quickly do no-shows drop?", a: "Most practices see their no-show rate drop below 15% in the first 30 days and below 10% within 90 days." },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Set up online booking in 30 minutes"
        subtext="14-day free trial. No credit card. Start cutting no-shows today."
        variant="inline"
      />
    </>
  );
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── types ─────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ── helpers ───────────────────────────────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, phone, subject, message } = body;

    // ── validation ─────────────────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // ── env vars ───────────────────────────────────────────────────────────────
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const receiverMail = process.env.CONTACT_RECEIVER;

    if (!gmailUser || !gmailPass || !receiverMail) {
      console.error("Missing SMTP env vars");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // ── nodemailer transporter ─────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    // ── build HTML email ───────────────────────────────────────────────────────
    const htmlBody = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden">
        <!-- header -->
        <div style="background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%);padding:32px 40px">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">New Contact Form Submission</h1>
          <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px">Clinexy — Contact Page</p>
        </div>
        <!-- body -->
        <div style="padding:32px 40px;background:#fff">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#6b7280;width:110px;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Name</td>
              <td style="padding:10px 0;font-size:15px;color:#111827;font-weight:500">${name}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6">
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Email</td>
              <td style="padding:10px 0;font-size:15px;color:#2563eb"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr style="border-top:1px solid #f3f4f6">
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Phone</td>
              <td style="padding:10px 0;font-size:15px;color:#111827">${phone}</td>
            </tr>`
                : ""
            }
            <tr style="border-top:1px solid #f3f4f6">
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Subject</td>
              <td style="padding:10px 0;font-size:15px;color:#111827;font-weight:600">${subject}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6">
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Message</td>
              <td style="padding:10px 0;font-size:15px;color:#111827;line-height:1.7;white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
            </tr>
          </table>
        </div>
        <!-- footer -->
        <div style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e5e7eb">
          <p style="margin:0;font-size:12px;color:#9ca3af">Sent via the Clinexy contact form at clinexy.com/contact</p>
        </div>
      </div>
    `;

    // ── send to company mailbox ────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Clinexy Contact Form" <${gmailUser}>`,
      to: receiverMail,
      replyTo: email,
      subject: `[Clinexy Contact] ${subject}`,
      html: htmlBody,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nSubject: ${subject}\n\n${message}`,
    });

    // ── send auto-reply to user ────────────────────────────────────────────────
    const autoReplyHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden">
        <div style="background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%);padding:32px 40px">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">Thanks for reaching out, ${name}!</h1>
          <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px">We received your message</p>
        </div>
        <div style="padding:32px 40px;background:#fff">
          <p style="color:#374151;font-size:15px;line-height:1.7;margin-top:0">
            Hi <strong>${name}</strong>,<br/><br/>
            Thanks for contacting Clinexy! We have received your message and will get back to you within <strong>one business day</strong>.
          </p>
          <p style="color:#374151;font-size:15px;line-height:1.7">
            In the meantime, feel free to explore what Clinexy can do for your practice, or start your free 14-day trial — no credit card required.
          </p>
          <a href="https://demo.clinexy.com/portal/onboarding-request" style="display:inline-block;margin-top:8px;padding:12px 28px;background:#2563eb;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:15px">Start Free Trial →</a>
        </div>
        <div style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e5e7eb">
          <p style="margin:0;font-size:12px;color:#9ca3af">© Clinexy · sales@clinexy.com · +91 94126 25716</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Clinexy" <${gmailUser}>`,
      to: email,
      subject: "We received your message – Clinexy",
      html: autoReplyHtml,
      text: `Hi ${name},\n\nThanks for contacting Clinexy! We have received your message and will get back to you within one business day.\n\nBest,\nThe Clinexy Team`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

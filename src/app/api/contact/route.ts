import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const AREA_EMAIL = 'info@coplaarea.org';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim() || 'Website enquiry';
  const message = String(body.message ?? '').trim();

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide your name, a valid email and a message.' }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200 || subject.length > 200) {
    return Response.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json({ error: 'Email sending is not configured yet.' }, { status: 503 });
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"COP LA Area Website" <${SMTP_USER}>`,
      to: AREA_EMAIL,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `[Website] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Contact email failed', err);
    return Response.json({ error: 'We could not send your message. Please try again later.' }, { status: 502 });
  }
}

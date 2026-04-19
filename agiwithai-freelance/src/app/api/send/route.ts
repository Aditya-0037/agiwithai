import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, details } = await request.json();

    const data = await resend.emails.send({
      from: 'AGI With AI <onboarding@resend.dev>',
      to: ['team@agiwithai.com'],
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

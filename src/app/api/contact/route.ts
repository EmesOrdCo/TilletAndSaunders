import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
};

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] ?? '';
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
}

function buildMessage(payload: ContactPayload) {
  const details = [
    payload.message.trim(),
    payload.service ? `Service interest: ${payload.service}` : null,
    payload.budget ? `Estimated budget: ${payload.budget}` : null,
  ].filter(Boolean);

  return details.join('\n\n');
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Contact form is not configured yet. Please add GHL_CONTACT_WEBHOOK_URL.' },
      { status: 503 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and project details are required.' },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const { firstName, lastName } = splitName(name);

  const ghlPayload = {
    firstName,
    lastName,
    name,
    email,
    phone: payload.phone?.trim() || '',
    message: buildMessage(payload),
    service: payload.service?.trim() || '',
    budget: payload.budget?.trim() || '',
    source: 'Tillett & Saunders Website',
    tags: ['website-form'],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL webhook error:', response.status, errorText);
      return NextResponse.json(
        { error: 'We could not send your message right now. Please try again or call us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('GHL webhook request failed:', error);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please try again or call us directly.' },
      { status: 502 }
    );
  }
}

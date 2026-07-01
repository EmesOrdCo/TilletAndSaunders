import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type FeedbackPayload = {
  rating: number;
  contactId?: string;
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.GHL_FEEDBACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Feedback is not configured yet. Please add GHL_FEEDBACK_WEBHOOK_URL.' },
      { status: 503 }
    );
  }

  let payload: FeedbackPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const rating = Number(payload.rating);

  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'A rating between 1 and 5 is required.' }, { status: 400 });
  }

  const isNegative = rating <= 3;

  const ghlPayload = {
    rating,
    ratingLabel: `${rating}/5`,
    sentiment: isNegative ? 'negative' : 'positive',
    contactId: payload.contactId?.trim() || '',
    name: payload.name?.trim() || '',
    email: payload.email?.trim() || '',
    phone: payload.phone?.trim() || '',
    details: payload.details?.trim() || '',
    source: 'Tillett & Saunders Review Funnel',
    // GHL uses these tags to stop review reminders and flag unhappy customers.
    tags: isNegative ? ['review-completed', 'negative-feedback'] : ['review-completed'],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL feedback webhook error:', response.status, errorText);
      return NextResponse.json(
        { error: 'We could not record your feedback right now. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('GHL feedback webhook request failed:', error);
    return NextResponse.json(
      { error: 'We could not record your feedback right now. Please try again.' },
      { status: 502 }
    );
  }
}

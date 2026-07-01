'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

type Step = 'rating' | 'feedback' | 'done';

function ReviewFunnel() {
  const params = useSearchParams();

  const contact = {
    contactId: params.get('contactId') ?? params.get('contact_id') ?? '',
    name: params.get('name') ?? params.get('first_name') ?? '',
    email: params.get('email') ?? '',
    phone: params.get('phone') ?? '',
  };

  const { googleReviewLink, positiveThreshold, allowPublicReviewForLowRatings } =
    siteConfig.review;

  const [step, setStep] = useState<Step>('rating');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const firstName = contact.name.trim().split(/\s+/)[0] ?? '';

  async function sendFeedback(value: number, feedbackDetails?: string) {
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: value,
          contactId: contact.contactId,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          details: feedbackDetails ?? '',
        }),
      });
    } catch {
      // Non-blocking: we still guide the user even if the ping fails.
    }
  }

  async function handleSelect(value: number) {
    setRating(value);
    setError('');

    if (value >= positiveThreshold) {
      // Positive: record completion, then send them to Google.
      void sendFeedback(value);
      if (googleReviewLink) {
        window.location.href = googleReviewLink;
        return;
      }
      setStep('done');
      return;
    }

    // Low rating: capture private feedback.
    setStep('feedback');
  }

  async function handleSubmitFeedback(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!details.trim()) {
      setError('Please let us know what went wrong so we can put it right.');
      return;
    }

    setSubmitting(true);
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating,
        contactId: contact.contactId,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        details: details.trim(),
      }),
    });
    setSubmitting(false);

    if (!res.ok && res.status !== 503) {
      setError('Something went wrong sending your feedback. Please try again.');
      return;
    }

    setStep('done');
  }

  return (
    <section className="section bg-[var(--color-cream)] min-h-[70vh] flex items-center">
      <div className="container">
        <div className="max-w-xl mx-auto bg-white shadow-lg p-8 md:p-12 text-center">
          <AnimatePresence mode="wait">
            {step === 'rating' && (
              <motion.div
                key="rating"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <span className="section-label">Your Feedback</span>
                <h1 className="mb-4">
                  How did we <em>do</em>{firstName ? `, ${firstName}` : ''}?
                </h1>
                <div className="divider divider-center" />
                <p className="text-[var(--color-gray-warm)] mb-8">
                  Thanks for choosing Tillett &amp; Saunders. How would you rate your
                  experience with us?
                </p>

                <div
                  className="flex justify-center gap-2 mb-4"
                  onMouseLeave={() => setHovered(0)}
                >
                  {[1, 2, 3, 4, 5].map((value) => {
                    const active = value <= (hovered || rating);
                    return (
                      <button
                        key={value}
                        type="button"
                        aria-label={`${value} star${value > 1 ? 's' : ''}`}
                        onMouseEnter={() => setHovered(value)}
                        onClick={() => handleSelect(value)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-burgundy)] rounded"
                      >
                        <Star
                          size={44}
                          className={
                            active
                              ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                              : 'text-[var(--color-cream-dark)]'
                          }
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="text-sm text-[var(--color-gray-warm)]">
                  Tap a star to rate
                </p>
              </motion.div>
            )}

            {step === 'feedback' && (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <span className="section-label">We&apos;re Listening</span>
                <h2 className="mb-4">
                  Sorry we fell <em>short</em>
                </h2>
                <div className="divider divider-center" />
                <p className="text-[var(--color-gray-warm)] mb-6">
                  We&apos;d genuinely like to put things right. Please tell us what
                  happened — this goes straight to the owner.
                </p>

                <form onSubmit={handleSubmitFeedback} className="text-left">
                  <label
                    htmlFor="details"
                    className="block font-semibold text-[var(--color-charcoal)] mb-2"
                  >
                    What could we have done better?
                  </label>
                  <textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={5}
                    className="w-full border border-[var(--color-cream-dark)] rounded p-3 mb-4 focus:outline-none focus:border-[var(--color-burgundy)]"
                    placeholder="Tell us what went wrong..."
                  />

                  {error && (
                    <p className="text-[var(--color-burgundy)] text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Feedback
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                {allowPublicReviewForLowRatings && googleReviewLink && (
                  <p className="text-sm text-[var(--color-gray-warm)] mt-6">
                    Prefer to leave a public review instead?{' '}
                    <a
                      href={googleReviewLink}
                      className="text-[var(--color-burgundy)] underline"
                    >
                      Post on Google
                    </a>
                  </p>
                )}
              </motion.div>
            )}

            {step === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle2 size={56} className="text-[var(--color-gold)]" />
                </div>
                <h2 className="mb-4">
                  Thank <em>you</em>
                </h2>
                <div className="divider divider-center" />
                <p className="text-[var(--color-gray-warm)]">
                  We really appreciate you taking the time. A member of our team will be
                  in touch if needed.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function ReviewPage() {
  return (
    <Suspense fallback={null}>
      <ReviewFunnel />
    </Suspense>
  );
}

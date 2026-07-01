const DEFAULT_PHONE_E164 = '+441234567890';
const DEFAULT_PHONE_DISPLAY = '01234 567 890';
const DEFAULT_EMAIL = 'info@tillettandsaunders.co.uk';

export const siteConfig = {
  name: 'Tillett & Saunders',
  legalName: 'Tillett & Saunders',
  tagline: 'Building Excellence',
  url: 'https://tillettandsaunders.co.uk',
  description:
    'Premium building and construction services in London and the South East. Kitchen fitting, extensions, flooring, plastering, bathrooms, and roofing delivered with exceptional craftsmanship.',
  areaServed: ['London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire', 'South East England'],
  phone: {
    e164: process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 ?? DEFAULT_PHONE_E164,
    display: process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY ?? DEFAULT_PHONE_DISPLAY,
    telHref: `tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 ?? DEFAULT_PHONE_E164}`,
  },
  email: {
    address: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? DEFAULT_EMAIL,
    mailtoHref: `mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? DEFAULT_EMAIL}`,
  },
  address: {
    line1: "123 Builder's Lane",
    line2: 'London, SW1A 1AA',
  },
  ghl: {
    chatWidgetId: process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID ?? '',
    locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID ?? '',
    formId: process.env.NEXT_PUBLIC_GHL_FORM_ID ?? '',
  },
  review: {
    // Direct "write a review" link from your Google Business Profile.
    googleReviewLink: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_LINK ?? '',
    // Ratings at or above this go straight to Google; below this see the feedback form.
    positiveThreshold: 4,
    // When true, low-raters ALSO get the option to post publicly (Google-policy-safe).
    // When false, low-raters only see the private feedback form (classic funnel — higher risk).
    allowPublicReviewForLowRatings: true,
  },
} as const;

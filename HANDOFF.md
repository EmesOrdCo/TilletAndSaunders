# Project Handoff: Tillett & Saunders Website + GHL CRM

**Last Updated:** July 1, 2026 (evening)  
**Previous Chat:** [SMS phone system + review funnel setup](current-chat)

---

## Project Overview

A Next.js website for **Tillett & Saunders**, a UK-based building company, with GoHighLevel (GHL) CRM integration. The site is deployed on Netlify at `tillettandsaunders.co.uk`.

**Tech Stack:**
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- GoHighLevel (CRM, forms, chat widget, workflows)
- Netlify (hosting)

---

## Completed Work

### Code Tasks (All Done)
- [x] **SEO Foundations**: `metadataBase`, title templates, Open Graph, Twitter cards, canonical URLs
- [x] **Structured Data**: `GeneralContractor` schema in root layout, `FAQPage` schema on contact page
- [x] **Sitemap & Robots**: Dynamic `sitemap.ts` and `robots.ts` using `siteConfig`
- [x] **Branding Fix**: Standardized "Tillett" (double-t) spelling across all files
- [x] **Dynamic Favicon**: `icon.tsx` generates branded favicon
- [x] **OG Image**: `opengraph-image.tsx` generates social share image
- [x] **GHL Integration**: Chat widget component, contact form webhook, environment variable structure
- [x] **Contact Page Layout**: 
  - Contact info on left, map on right (2-column grid)
  - Form section below with spacer
  - Reduced FAQ section padding for tighter vertical rhythm
- [x] **Removed**: Accessibility widget (per user request)

### GHL Setup (Mostly Complete)
- [x] Chat widget configured and live
- [x] Contact form webhook working
- [x] **GHL phone number purchased**: `+447375827675` (07375 827675)
- [x] **A2P regulatory bundle submitted** — awaiting approval (24-72 hrs)
- [x] **Pipeline created**: `Tillett&Saunders Website Enquiries` with stages: New Lead → Contacted → Quote Sent → Won
- [x] **Lead Follow-Up workflow** (`Tillett&Saunders: Lead Follow-Up — 1hr SMS`) — published
- [x] **Review Feedback workflow** (`Tillett&Saunders Review Feedback`) — published, handles star ratings + owner notification on negative
- [x] **Review Request workflow** (`Tillett&Saunders: Review Request — Job Complete`) — published, sends reminders until `review-completed` tag added

### Review Funnel (NEW)
- [x] **`/review` page**: Star-rating funnel with Framer Motion animations
- [x] **`/api/feedback` route**: Sends rating + feedback to GHL webhook, tags contact
- [x] **Flow**: 4-5 stars → Google review redirect | 1-3 stars → private feedback form → owner notified
- [x] **Compliance**: `allowPublicReviewForLowRatings: true` in config (Google-policy-safe)
- [x] **GHL webhook**: `GHL_FEEDBACK_WEBHOOK_URL` configured in `.env.local` and Netlify

---

## Pending Tasks (Manual/Client-Dependent)

See `TILLETT_SAUNDERS_ACTION_PLAN.md` for detailed step-by-step instructions.

### Waiting / In Progress
1. **A2P Approval**: Regulatory bundle submitted for `+447375827675` — expect 24-72 hours. SMS won't send until approved.
2. **Google Business Profile**: Verification processing (up to 5 days). Once verified, grab review link.
3. **Business Address**: Still placeholder in `site-config.ts` — update once confirmed with client.
4. **Logo**: Still using text-based favicon; real logo needed.

### GHL Tasks Remaining
- [ ] **MCTB workflow**: Build after A2P approved (trigger: Call Status → Missed)
- [ ] **Google review link**: Add `NEXT_PUBLIC_GOOGLE_REVIEW_LINK` once GBP verified
- [ ] Create Smart Lists ("All Leads", "Cold Leads", "Past Customers")
- [ ] Set up email templates for marketing campaigns
- [ ] Configure dedicated sending domain (DNS records for email deliverability)

### SEO Tasks Remaining
- [ ] Submit sitemap to Google Search Console (`https://tillettandsaunders.co.uk/sitemap.xml`)
- [ ] Complete Google Business Profile verification
- [ ] Add real business address to structured data

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/site-config.ts` | Centralized config (phone, email, address, GHL IDs, review settings) |
| `src/app/layout.tsx` | Root layout with metadata and LocalBusiness schema |
| `src/app/contact/page.tsx` | Contact page with form, map, FAQs |
| `src/app/review/page.tsx` | **NEW** — Star-rating review funnel page |
| `src/app/api/feedback/route.ts` | **NEW** — Receives review feedback, sends to GHL |
| `src/components/GhlContactForm.tsx` | GHL embedded form component |
| `src/components/GhlChatWidget.tsx` | GHL chat widget component |
| `.env.local` | Environment variables (GHL IDs, contact info, webhooks) |
| `TILLETT_SAUNDERS_ACTION_PLAN.md` | Step-by-step manual tasks for GHL/DNS/GBP |
| `CLIENT_INFO_REQUIRED.md` | Checklist of info needed from client |

---

## Environment Variables

Required in `.env.local` and Netlify:

```env
# Business contact (shown on website)
NEXT_PUBLIC_BUSINESS_PHONE_E164=+447375827675
NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY=07375 827675
NEXT_PUBLIC_BUSINESS_EMAIL=emesordco@gmail.com

# GHL chat widget + form
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=6a3feb2500578e71d13ce99b
NEXT_PUBLIC_GHL_LOCATION_ID=P7da5f3xZlIwQRNgeMh0
NEXT_PUBLIC_GHL_FORM_ID=9jMfYF4Hr7NgUxuUR172

# Webhooks (server-side, not NEXT_PUBLIC_)
GHL_CONTACT_WEBHOOK_URL=           # Contact form → GHL
GHL_FEEDBACK_WEBHOOK_URL=          # Review funnel → GHL (configured)

# Google review link (add once GBP verified)
NEXT_PUBLIC_GOOGLE_REVIEW_LINK=    # e.g. https://g.page/r/.../review
```

---

## Brand Details

- **Name:** Tillett & Saunders (double-t in Tillett)
- **Domain:** tillettandsaunders.co.uk
- **Maroon/Burgundy:** `#722F37` (CSS variable: `--color-burgundy`)
- **Fonts:** Playfair Display (headings), Instrument Sans (body)

---

## Notes for Next Chat

1. **A2P Approval**: Regulatory bundle submitted 1 Jul 2026 for phone number `+447375827675`. Check GHL > Settings > Phone Numbers for status. Once approved, SMS workflows will activate.
2. **GBP Verification**: Google processing verification (up to 5 days from 1 Jul). Once verified, get review link and add to `NEXT_PUBLIC_GOOGLE_REVIEW_LINK`.
3. **MCTB Workflow**: Not yet built. Create after A2P approved: Trigger = Call Status → Missed → Send SMS → Tag `missed-call` → Create opportunity.
4. **DNS Issue**: Site went temporarily offline during this chat due to missing NS records at registry level. Fixed itself / user flushed DNS. Monitor if it happens again.
5. **Printing Services**: User said to ignore for now; scope unclear.
6. **Form Consent Text**: For A2P compliance, checkbox should read: "By checking this box, I consent to receive non-marketing text messages from Tillett & Saunders about your building enquiry and project updates."

---

## Quick Commands

```bash
# Dev server
npm run dev

# Build
npm run build

# Check for lint errors
npm run lint
```

---

## Repository

GitHub: `https://github.com/EmesOrdCo/TilletAndSaunders.git`

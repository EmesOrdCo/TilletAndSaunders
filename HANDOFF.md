# Project Handoff: Tillett & Saunders Website + GHL CRM

**Last Updated:** July 1, 2026  
**Previous Chat:** [Contact page layout + GHL setup](c7949e68-0cdf-462d-b1ad-148e79cc8a43)

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

### GHL Setup (Partially Complete)
- [x] Chat widget configured (needs `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` in env)
- [x] Contact form webhook structure ready
- [x] Workflow instructions prepared for:
  - Missed Call Text Back (MCTB)
  - Automated Lead Follow-Up
  - 5-Star Review Funnel
  - Form Auto-Responder

---

## Pending Tasks (Manual/Client-Dependent)

See `TILLETT_SAUNDERS_ACTION_PLAN.md` for detailed step-by-step instructions.

### Blocked on Client Info
1. **GHL Phone Number**: Need client's business details for A2P registration
2. **Business Address**: Currently placeholder in `site-config.ts`
3. **Email Decision**: Currently using `emesordco@gmail.com` as placeholder
4. **Logo**: Currently using text-based favicon; real logo needed
5. **Google Business Profile**: Need client to verify ownership

### GHL Tasks Remaining
- [ ] Buy GHL phone number and complete A2P registration
- [ ] Enable MCTB workflow (after phone number)
- [ ] Set Google review link in Review Request workflow
- [ ] Create Smart Lists ("All Leads", "Cold Leads")
- [ ] Set up email templates for marketing campaigns
- [ ] Configure dedicated sending domain (DNS records)

### SEO Tasks Remaining
- [ ] Submit sitemap to Google Search Console (URL: `https://tillettandsaunders.co.uk/sitemap.xml`)
- [ ] Complete Google Business Profile setup
- [ ] Add real business address to structured data

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/site-config.ts` | Centralized config (phone, email, address, GHL IDs) |
| `src/app/layout.tsx` | Root layout with metadata and LocalBusiness schema |
| `src/app/contact/page.tsx` | Contact page with form, map, FAQs |
| `src/components/GhlContactForm.tsx` | GHL embedded form component |
| `src/components/GhlChatWidget.tsx` | GHL chat widget component |
| `.env.local` | Environment variables (GHL IDs, contact info) |
| `TILLETT_SAUNDERS_ACTION_PLAN.md` | Step-by-step manual tasks for GHL/DNS/GBP |
| `CLIENT_INFO_REQUIRED.md` | Checklist of info needed from client |

---

## Environment Variables

Required in `.env.local` and Netlify:

```env
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=    # From GHL > Sites > Chat Widget
NEXT_PUBLIC_GHL_LOCATION_ID=       # From GHL > Settings > Business Info
NEXT_PUBLIC_GHL_FORM_ID=           # From GHL > Sites > Forms
NEXT_PUBLIC_BUSINESS_PHONE_E164=   # E.164 format: +441234567890
NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY=# Display format: 01234 567 890
NEXT_PUBLIC_BUSINESS_EMAIL=        # info@tillettandsaunders.co.uk (when set up)
```

---

## Brand Details

- **Name:** Tillett & Saunders (double-t in Tillett)
- **Domain:** tillettandsaunders.co.uk
- **Maroon/Burgundy:** `#722F37` (CSS variable: `--color-burgundy`)
- **Fonts:** Playfair Display (headings), Instrument Sans (body)

---

## Notes for Next Chat

1. **Printing Services**: User said to ignore for now; scope unclear
2. **SMS Workflows**: All prepared but blocked until GHL phone number is purchased
3. **Form Consent Text**: User asked about A2P consent checkbox — should read: "By checking this box, I consent to receive non-marketing text messages from Tillett & Saunders about your building enquiry and project updates."
4. **Google Search Console**: User encountered "Invalid sitemap address" error — likely just needed to submit full URL with `https://`

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

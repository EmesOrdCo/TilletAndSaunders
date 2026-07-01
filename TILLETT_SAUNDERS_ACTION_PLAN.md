# Tillett & Saunders — Action Plan (Manual Steps)

This document contains every step you need to action **outside the codebase** (GoHighLevel UI, DNS, Netlify, Google). All code-side work (SEO, meta tags, structured data, sitemap, brand-name fixes) is already done — see the "Done in code" section at the bottom.

**Key references**
- GHL agency account: **Emesord Limited**
- Notifications email (for now): **emesordco@gmail.com**
- Live site: **https://tillettandsaunders.co.uk** (Netlify, Next.js)
- Brand name (correct spelling): **Tillett & Saunders** (double-t)
- GHL Location ID: `P7da5f3xZlIwQRNgeMh0`
- GHL Form ID: `9jMfYF4Hr7NgUxuUR172`
- GHL Chat Widget ID: `6a3feb2500578e71d13ce99b`

> ⚠️ **Domain/email note:** the website lives on `tillettandsaunders.co.uk` (double-t), but the contact email shown on the site is `info@tilletandsaunders.co.uk` (single-t) and no mailbox exists for it yet. Decide on a real, working email address before go-live (see Task 2 and Task 8).

---

## Table of contents
1. [Task 1 — MCTB + Business Phone Number](#task-1--mctb--business-phone-number)
2. [Task 2 — Fix Email Landing in Spam](#task-2--fix-email-landing-in-spam)
3. [Task 3 — 5-Star Review Funnel (Reputation Management)](#task-3--5-star-review-funnel-reputation-management)
4. [Task 4 — Automated Lead Follow-Up Workflow](#task-4--automated-lead-follow-up-workflow)
5. [Task 5 — One-Click Marketing Campaigns](#task-5--one-click-marketing-campaigns)
6. [Task 6 — Local SEO: Google Business Profile + Search Console](#task-6--local-seo-google-business-profile--search-console)
7. [Task 7 — Printing Services (needs clarification)](#task-7--printing-services-needs-clarification)
8. [Task 8 — Auto-Responder on Form](#task-8--auto-responder-on-form)
9. [Task 9 — Client Handover Checklist](#task-9--client-handover-checklist)
10. [Done in code (no action needed)](#done-in-code-no-action-needed)

---

## Task 1 — MCTB + Business Phone Number

**Status:** Blocked until the client provides business details for A2P/number registration.

### Step 1 — Collect from the client (blocking)
You need all of these before you can register a UK number for SMS (MCTB / A2P):
- Legal/trading name (as registered)
- Registered business address
- Business owner's full name
- Companies House registration number
- Business email + phone
- Website URL (use `https://tillettandsaunders.co.uk`)

### Step 2 — Buy the GHL number
1. In GHL, open the **Tillett & Saunders** sub-account.
2. **Settings → Phone Numbers → Add Number**.
3. Choose a UK mobile (07…) or local landline number and purchase it.

### Step 3 — Complete registration / trust
1. Complete any **A2P / regulatory bundle** GHL prompts for (uses the details from Step 1).
2. Set **call forwarding** on the number to the client's real mobile so inbound calls ring through.

### Step 4 — Enable Missed Call Text Back
- Full MCTB workflow steps are already documented in `GHL_INTEGRATION.md` (Part 2). Trigger = Call Status → Missed → Send SMS → Add tag `missed-call` → create opportunity → notify.

### Step 5 — Update the website with the real number
Once the number is live, update Netlify env vars:
1. Netlify → **Site settings → Environment variables**.
2. Edit **`NEXT_PUBLIC_BUSINESS_PHONE_E164`** → the new number in E.164 (e.g. `+447XXXXXXXXX`).
3. Edit **`NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY`** → the display format (e.g. `07XXX XXXXXX`).
4. Netlify → **Deploys → Trigger deploy → Clear cache and deploy site**.
5. Verify every "Call us" button and the header/footer show the new number.

---

## Task 2 — Fix Email Landing in Spam

The internal notification to `emesordco@gmail.com` is sent from GHL's shared mail servers, which is why Gmail flags it as spam.

### Part A — Immediate fix (do now, no domain needed)
1. In Gmail, open the notification email → **⋮ (More) → Report not spam** (or drag it from Spam to Inbox).
2. Click the sender name → **Add to Contacts**.
3. Create a filter so it never gets flagged again:
   - Gmail → **Settings (gear) → See all settings → Filters and Blocked Addresses → Create a new filter**.
   - In **From**, put the sender address of the GHL notification (check the email header — usually something ending in `@leadconnectorhq.com` or `@msgsndr.com`).
   - **Create filter → tick "Never send it to Spam" → tick "Always mark it as important" → Create filter**.
4. In GHL: **Settings → Email Services** (or the workflow's internal-notification step) → set a consistent **From name** ("Tillett & Saunders Website") and **From email** so the sender stays stable.

### Part B — Proper fix (recommended, needs DNS access to the site domain)
A dedicated sending domain fixes deliverability for **all** emails (notifications + client-facing auto-responders). You do **not** need a mailbox to *send* — you only need to add DNS records to `tillettandsaunders.co.uk` (the domain the client owns).

1. GHL → **Settings → Email Services → Dedicated Domain / Domains → Add Domain**.
2. Enter a subdomain, e.g. `mail.tillettandsaunders.co.uk` (recommended over the root domain).
3. GHL will show a set of **DNS records** (typically SPF `TXT`, DKIM `CNAME`/`TXT`, and a return-path/`CNAME`). Copy them.
4. Log into the domain registrar / DNS host for `tillettandsaunders.co.uk` and add each record **exactly** as shown (name, type, value). TTL: default/auto.
5. Back in GHL, click **Verify**. DNS can take 15 mins–24 hrs to propagate.
6. Once verified, set it as the **default sending domain** and set the default **From address** (e.g. `no-reply@tillettandsaunders.co.uk`).

> Decision needed: what is the real reply-to / from address the client wants? If they don't want a mailbox, use a `no-reply@…` send-only address and keep internal notifications going to `emesordco@gmail.com`.

### Part C — Fix the displayed contact email (site)
The site currently displays `info@tilletandsaunders.co.uk` (single-t, no mailbox). Once you decide the real address:
1. Netlify → **Site settings → Environment variables → `NEXT_PUBLIC_BUSINESS_EMAIL`** → set to the working address (e.g. `info@tillettandsaunders.co.uk`).
2. Trigger a redeploy (clear cache).

---

## Task 3 — 5-Star Review Funnel (Reputation Management)

Goal: automatically ask happy customers for Google/Facebook reviews after a job completes.

> ⚠️ **Compliance:** Google's policies **prohibit "review gating"** (only sending review requests to people you know are happy). Send review requests to **all** completed customers. You can still add an internal-feedback option, but do not block unhappy customers from leaving a public review. The steps below are compliant.

### Step 1 — Connect review sources
1. GHL → **Reputation → Settings** (or **Settings → Reputation Management**).
2. Connect **Google Business Profile** (needs GBP set up first — see Task 6).
3. Connect **Facebook Page** (optional).

### Step 2 — Build the review-request template
1. GHL → **Reputation → Review Requests → Templates**.
2. Create an **SMS** template:
   ```
   Hi {{contact.first_name}}, thanks for choosing Tillett & Saunders! We'd really appreciate a quick review — it helps other homeowners find us. Tap here: {{review_link}}
   ```
3. Create an **Email** template with the same message + your Google review link.

### Step 3 — Automate the request via a workflow
1. GHL → **Automation → Workflows → Create Workflow**.
2. Name: `Review Request — Job Complete`.
3. **Trigger:** Opportunity Status Changed → Pipeline `Website Enquiries` → stage moved to **Won** (or a "Job Complete" stage). *(This means a review request fires automatically when you mark a job done.)*
4. **Action — Wait:** 1 day (let the dust settle after handover).
5. **Action — Send Review Request** (SMS template from Step 2). Add an email fallback 2 days later if not clicked.
6. **Publish.**

### Step 4 — (Optional) private feedback capture
Add a satisfaction survey link in the same message ("Anything we could improve? Reply here") — but keep the public review link available to everyone.

### Step 5 — Test
Move a test contact/opportunity to Won and confirm the SMS/email review request sends.

---

## Task 4 — Automated Lead Follow-Up Workflow

Goal: trigger = Contact Created → wait 1 hour → send an SMS follow-up.

### Steps
1. GHL → **Automation → Workflows → Create Workflow**.
2. Name: `Lead Follow-Up — 1hr SMS`.
3. **Trigger:** **Contact Created**.
   - Recommended filter: add **Trigger filter → Tag is `website-form`** (or source contains "Website") so it only fires for new website leads, not manually added contacts.
4. **Action — Wait:** `1 hour`.
5. **Action — Send SMS:**
   ```
   Hi {{contact.first_name}}, it's Tillett & Saunders — thanks for your enquiry! When's a good time for a quick chat about your project? You can also call us on 07XXX XXXXXX. — The T&S Team
   ```
   (Update the number once Task 1 is done.)
6. **(Optional) If/Else:** if the contact has no phone number, send an email follow-up instead.
7. **Settings:** make sure it only runs **once per contact** (Workflow Settings → "Allow re-entry" = off).
8. **Publish.**

### Test
1. Submit the website contact form with a test mobile number.
2. Confirm the contact is created, then the SMS arrives ~1 hour later (you can lower the wait to 1 minute for testing, then set back to 1 hour).

> ⚠️ SMS sending requires the phone number + A2P registration from **Task 1** to be complete.

---

## Task 5 — One-Click Marketing Campaigns

Goal: reusable email/SMS campaign structure so the client can send a promo to segments in a few clicks.

### Step 1 — Build audience segments (Smart Lists)
1. GHL → **Contacts → Smart Lists → + New Smart List**.
2. Create and save these:
   - **All Leads** — Tag is `website-form` OR `chat-lead` OR `missed-call`.
   - **Past Customers** — Opportunity status = Won.
   - **Cold Leads** — Created > 90 days ago AND status ≠ Won.

### Step 2 — Create reusable templates
1. GHL → **Marketing → Emails → Templates → New Template**. Build 2–3 on-brand templates (use burgundy `#7A0025` / gold `#C9A962`):
   - "Seasonal offer / promotion"
   - "New project showcase" (link to /projects)
   - "Referral request"
2. GHL → **Marketing → (SMS templates)** — create matching short SMS versions.

### Step 3 — Create a sendable campaign
1. GHL → **Marketing → Emails → New Campaign/Broadcast**.
2. Pick a template → choose a Smart List as the audience → schedule or send.
3. Save it as a template so future sends are "one click": duplicate → tweak → send.

### Step 4 — Compliance
- Include an **unsubscribe** link in every email (GHL adds one automatically — keep it).
- Only SMS-market to contacts who opted in. Add a `STOP to opt out` line to promotional SMS.

### Test
Send a test broadcast to yourself / a test contact before any real send.

---

## Task 6 — Local SEO: Google Business Profile + Search Console

The on-page SEO is done in code (see bottom). These are the off-site steps only you can do.

### Part A — Google Business Profile (GBP)
1. Go to **https://business.google.com** → **Manage now**.
2. Search for "Tillett & Saunders" — if it exists, **claim** it; if not, **create** it.
3. **Business name:** `Tillett & Saunders` (exact, double-t).
4. **Category:** primary = *General Contractor* / *Construction Company*; add secondaries (Kitchen Remodeler, Bathroom Remodeler, Roofing Contractor, Flooring Contractor).
5. **Service area:** since it's a building company, set as a **service-area business** and add: London, Surrey, Kent, Essex, Hertfordshire.
6. **Contact:** add the phone (from Task 1) and website `https://tillettandsaunders.co.uk`.
7. **Hours:** Mon–Fri 08:00–18:00, Sat 09:00–14:00, Sun closed (matches the site).
8. **Verify** the business (postcard / phone / video — Google will prompt).
9. Add **photos** of completed projects, team, and logo.
10. Write a **business description** (use the site's About copy, mention key services + areas).

### Part B — Google Search Console (index the site)
1. Go to **https://search.google.com/search-console**.
2. Add property → **URL prefix** → `https://tillettandsaunders.co.uk`.
3. Verify (easiest: DNS TXT record, or HTML tag — tell me if you want the HTML tag method and I'll add it to the code).
4. **Sitemaps → Add new sitemap →** enter `sitemap.xml` → Submit. (The sitemap is already live at `https://tillettandsaunders.co.uk/sitemap.xml`.)
5. Use **URL Inspection** to request indexing of the homepage.

### Part C — Bing (optional, quick win)
- **https://www.bing.com/webmasters** → import from Search Console → submit the same sitemap.

---

## Task 7 — Printing Services (needs clarification)

I need scope before I can action this. GoHighLevel has **no built-in commercial printing**, so this likely means one of:
- **Design + order physical print** (business cards, flyers, leaflets, van signage) via an external printer (e.g. Vistaprint / Instantprint) — design only, I can help with copy/spec.
- **Direct mail** campaigns (postcards to an area) — some GHL setups integrate a direct-mail provider.
- **Printable PDFs** (quotes, brochures, letterheads) generated for the client to print.

👉 **Tell me which of these you mean (or describe it)** and I'll prepare the exact steps/assets.

---

## Task 8 — Auto-Responder on Form (enable after Task 2)

Turn this on once email deliverability (Task 2) is sorted, so the confirmation doesn't hit spam.

### Steps
1. Open the workflow `Website Contact Form` (the one triggered by the inbound webhook / form).
2. Add **Action → Send Email** as the **first** client-facing step (to `{{contact.email}}`).
3. Subject: `Thanks for contacting Tillett & Saunders`
4. Body:
   ```
   Hi {{contact.first_name}},

   Thank you for getting in touch with Tillett & Saunders. We've received your
   enquiry and a member of our team will get back to you within 24 hours.

   In the meantime, if it's urgent you can call us on 07XXX XXXXXX.

   We look forward to discussing your project.

   Kind regards,
   The Tillett & Saunders Team
   https://tillettandsaunders.co.uk
   ```
5. (Optional) Add a matching **SMS auto-reply** if the contact provided a phone:
   ```
   Hi {{contact.first_name}}, thanks for contacting Tillett & Saunders — we've got your enquiry and will be in touch within 24 hours. Reply here or call 07XXX XXXXXX.
   ```
6. Update the phone number after Task 1. **Publish.**
7. Test by submitting the form with your own email/number.

---

## Task 9 — Client Handover Checklist

Everything to hand the CRM over to the client cleanly.

### A — Account structure
- [ ] Confirm the client's business lives in its **own GHL sub-account** (Location) under Emesord Limited, named `Tillett & Saunders`.
- [ ] Decide the model: keep managing under your agency (recommended, lets you rebill) **or** transfer the location to the client's own agency.

### B — Access & users
- [ ] **Settings → My Staff / Team → Add Employee** → invite the client's email as a **User** (Admin or User role).
- [ ] Set permissions (limit billing/agency settings if they should only manage day-to-day).
- [ ] Confirm the client can log in at `app.gohighlevel.com`.

### C — Comms & numbers
- [ ] Phone number purchased, A2P approved, call forwarding set (Task 1).
- [ ] Email sending domain verified or Gmail whitelisting done (Task 2).
- [ ] Notification recipient updated from `emesordco@gmail.com` to the **client's** email/mobile.

### D — Automations live & tested
- [ ] Missed Call Text Back
- [ ] Website Contact Form → contact/opportunity/notification
- [ ] Lead Follow-Up (1hr SMS) — Task 4
- [ ] Review Request — Task 3
- [ ] Auto-responder — Task 8
- [ ] Pipeline `Website Enquiries` with stages exists

### E — Website
- [ ] All env vars set in Netlify (phone, email, GHL IDs).
- [ ] Production domain added to GHL **chat widget allowed domains**.
- [ ] Contact form, chat widget, and call links tested on live site.
- [ ] GBP live and linked; sitemap submitted to Search Console (Task 6).

### F — Billing / rebilling (if staying on your agency)
- [ ] Set up **rebilling** for SMS/email/phone if you're reselling.
- [ ] Confirm who pays for the GHL sub-account and comms usage.

### G — Documentation for the client
- [ ] Provide a short "how to use your CRM" guide (where leads land, how to reply, how to send a campaign).
- [ ] Provide login details and support contact.

---

## Done in code (no action needed)

These are already implemented and verified with a successful production build:

- **Brand name corrected** to **Tillett & Saunders** (double-t) across every page, component, policy, header, footer, and the form source tag. Founder surname corrected to "Robert Tillett".
- **Centralised site config** (`src/lib/site-config.ts`) with name, URL, tagline, description, and service areas.
- **Root metadata** (`src/app/layout.tsx`): `metadataBase`, title template (`%s | Tillett & Saunders`), meta description, keywords, canonical, Open Graph + Twitter cards, and robots directives.
- **Per-page SEO**: unique titles, descriptions, canonicals, and Open Graph for Home, About, Services, Projects, Contact, and all three policy pages (added `layout.tsx` files so the client-component policy pages get proper metadata).
- **Structured data (JSON-LD)**: `GeneralContractor` / LocalBusiness schema (name, phone, email, area served, opening hours, price range) for local SEO rich results.
- **`sitemap.xml`** generated dynamically (`src/app/sitemap.ts`) → live at `/sitemap.xml`.
- **`robots.txt`** generated (`src/app/robots.ts`) → live at `/robots.txt`, references the sitemap, disallows `/api/`.
- **FAQ structured data**: `FAQPage` JSON-LD added to the Contact page (eligible for FAQ rich results in Google).
- **Branded favicon**: code-generated burgundy/gold "TS" monogram (`src/app/icon.tsx`) → live at `/icon`.
- **Branded Open Graph share image**: code-generated 1200×630 brand image (`src/app/opengraph-image.tsx`) → live at `/opengraph-image`, so social/WhatsApp shares show a proper preview.

### Small code items still worth doing (optional, need assets/decisions — contingent on you)
- **Real logo**: the favicon + OG image are code-generated placeholders using brand colours. If the client has an actual logo, send it and I'll swap it in.
- **Real business address**: `src/lib/site-config.ts` and the contact page still use the placeholder `123 Builder's Lane, London SW1A 1AA` and a Westminster map. Update once the client provides the real registered address (also needed for GBP and the LocalBusiness schema).
- **Contact email**: displayed address needs to be a real, working mailbox (see Task 2C).

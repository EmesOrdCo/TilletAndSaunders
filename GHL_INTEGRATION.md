# GoHighLevel Integration Guide

This document explains how to connect your GoHighLevel (GHL) account to the Tillet & Saunders website, including **Missed Call Text Back**, the **contact form**, and the **chat widget**.

---

## What you need to provide

Copy `.env.example` to `.env.local` and fill in these values:

| Variable | Where to find it | Required for |
|----------|------------------|--------------|
| `NEXT_PUBLIC_BUSINESS_PHONE_E164` | Your GHL number in E.164 format, e.g. `+447123456789` | Website call links |
| `NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY` | How it should appear, e.g. `07123 456 789` | Website display |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Your business email | Website email links |
| `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` | GHL → Settings → Chat Widget → Install | Live chat |
| `NEXT_PUBLIC_GHL_LOCATION_ID` | GHL → Settings → Business Profile (Location ID) | Chat widget |
| `GHL_CONTACT_WEBHOOK_URL` | GHL workflow inbound webhook URL | Contact form |

**Restart the dev server** after changing `.env.local`.

---

## Part 1: Phone number & call forwarding

1. In GHL, go to **Settings → Phone Numbers** and confirm your UK number is active.
2. Set **call forwarding** to your mobile so inbound calls ring your phone.
3. Add the number to `.env.local` (see above).
4. The website uses this number for all `Call us` buttons and `tel:` links.

> MCTB only works when callers dial your **GHL-tracked number**. Once your real number is in `.env.local`, every website call will be tracked.

---

## Part 2: Missed Call Text Back (24/7)

Configure this entirely inside GoHighLevel.

### Recommended pipeline

Create a pipeline called **Website Enquiries** with these stages:

1. **New Lead** — first contact (form, chat, or missed call)
2. **Contacted** — you've spoken or replied
3. **Quote Sent** — quotation provided
4. **Survey Scheduled** — site visit booked
5. **Won** / **Lost**

### Recommended tags

| Tag | When applied |
|-----|--------------|
| `missed-call` | Caller didn't get through |
| `website-form` | Contact form submission (automatic) |
| `chat-lead` | Live chat conversation (set in GHL chat settings) |

### Workflow steps

1. Go to **Automation → Workflows → Create Workflow**.
2. Name it: `Missed Call Text Back`.
3. **Trigger:** `Call Status` → `Missed` (or use GHL's built-in MCTB template if available).
4. **Filter (optional):** Contact has a valid phone number.
5. **Action — Send SMS:**

```
Hi, sorry we missed your call to Tillet & Saunders. We'd love to hear about your project — simply reply to this message and we'll get back to you as soon as we can.
```

6. **Action — Add Tag:** `missed-call`
7. **Action — Create/Update Opportunity:** Pipeline `Website Enquiries`, stage `New Lead`
8. **Action — Internal Notification:** SMS or email to your mobile so you know a lead came in.
9. **Publish** the workflow.

### Testing

1. Call your GHL number from a mobile.
2. Let it ring out without answering.
3. Confirm the SMS arrives within ~60 seconds.
4. Confirm a contact appears in GHL with the `missed-call` tag.

---

## Part 3: Contact form → GHL webhook

The website sends form submissions to a GHL inbound webhook.

### Setup in GHL

1. **Automation → Workflows → Create Workflow**.
2. Name: `Website Contact Form`.
3. **Trigger:** `Inbound Webhook`.
4. Copy the webhook URL → paste into `.env.local` as `GHL_CONTACT_WEBHOOK_URL`.
5. Add workflow actions:

| Step | Action | Details |
|------|--------|---------|
| 1 | Create/Update Contact | Map `{{inboundWebhookRequest.firstName}}`, `{{inboundWebhookRequest.lastName}}`, `{{inboundWebhookRequest.email}}`, `{{inboundWebhookRequest.phone}}` |
| 2 | Add Note | `{{inboundWebhookRequest.message}}` |
| 3 | Add Tag | `website-form` |
| 4 | Create Opportunity | Pipeline: `Website Enquiries`, Stage: `New Lead` |
| 5 | Send Notification | Email/SMS to you: "New website enquiry from {{inboundWebhookRequest.name}}" |

### JSON payload sent by the website

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "07123456789",
  "message": "Project details...\n\nService interest: Extensions\n\nEstimated budget: £50,000 - £100,000",
  "service": "Extensions",
  "budget": "£50,000 - £100,000",
  "source": "Tillet & Saunders Website",
  "tags": ["website-form"]
}
```

Map fields in GHL using `{{inboundWebhookRequest.fieldName}}`.

### Testing on localhost

1. Add `GHL_CONTACT_WEBHOOK_URL` to `.env.local`.
2. Run `npm run dev`.
3. Submit the form at `http://localhost:3000/contact`.
4. Confirm the contact appears in GHL.

---

## Part 4: Chat widget

1. In GHL, go to **Settings → Chat Widget**.
2. Customise colours to match burgundy (`#7A0025`) and gold (`#C9A962`) if desired.
3. Under **Install**, copy the **Widget ID** and **Location ID**.
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=your_widget_id
   NEXT_PUBLIC_GHL_LOCATION_ID=your_location_id
   ```
5. In chat widget settings, add `http://localhost:3000` as an allowed domain for local testing.
6. Restart the dev server and look for the chat bubble in the bottom corner.

### Chat lead tagging

In GHL chat settings, set new chat contacts to receive the tag `chat-lead` and optionally add them to the **Website Enquiries** pipeline.

---

## Part 5: Go-live checklist

When you deploy to Netlify:

1. Add all environment variables in **Netlify → Site settings → Environment variables**.
2. Add your production domain to GHL chat widget allowed domains.
3. Replace placeholder phone/email in `.env` with your real GHL number.
4. Test MCTB, contact form, and chat on the live site.
5. Confirm GHL notifications reach your mobile.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Contact form returns "not configured" | Add `GHL_CONTACT_WEBHOOK_URL` to `.env.local` and restart |
| Form submits but nothing in GHL | Check webhook URL; verify field mapping in workflow |
| Chat widget not showing | Confirm `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` is set; add localhost to allowed domains |
| MCTB not firing | Confirm caller used GHL number; check workflow is published; verify SMS credits |
| Wrong phone on site | Update `NEXT_PUBLIC_BUSINESS_PHONE_*` in `.env.local` |

---

## What runs where

| Feature | Configured in | Website code |
|---------|---------------|--------------|
| Missed Call Text Back | GHL workflow | Phone number in env vars only |
| Contact form | GHL webhook + `/api/contact` | Yes |
| Chat widget | GHL + `GhlChatWidget` component | Yes |
| Call tracking | GHL phone system | `tel:` links use GHL number |

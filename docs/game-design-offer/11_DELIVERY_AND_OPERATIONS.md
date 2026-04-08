# Delivery & Operations

> Specialist: Operations and Delivery Architect
> Status: DRAFT — pre-validation

---

## Delivery Model Verdict

### Evaluated Options

| Option | Verdict | Rationale |
|--------|---------|-----------|
| **Stripe success page + download link** | **RECOMMENDED** | Instant. No additional tooling. Customer gets the file immediately after payment. |
| Email delivery (attachment) | BACKUP | Good as a secondary delivery method. Don't rely on it as primary — emails get delayed/spam-filtered. |
| Email delivery (link only) | ALTERNATIVE | Works if file is too large for attachment. Use a hosted file link (Vercel static file or cloud storage). |
| Gated page with login | REJECT | Requires user accounts, auth, database. Massive overbuild for a $19 product. |
| Notion template share | REJECT | Platform-dependent. Not all buyers use Notion. Doesn't work for PDF delivery. |
| Gumroad / Lemon Squeezy hosted | REJECT | Adds a middleman. Takes a cut of revenue. Lose control of the checkout experience. Might be useful for pure validation, but you already have Stripe. |
| Stripe-native digital delivery | PARTIAL | Stripe can host files and deliver them on the success page. Limited but sufficient for v1. |

### Recommended: Stripe Success Page + Hosted Download

The buyer completes Stripe Checkout and is redirected to a success page on your Vercel site with a download link. That's it.

---

## First 2 Minutes After Purchase

### Second-by-Second Flow

```
0:00  Customer clicks "Get the Concept Test" ($19) or "Get the Concept Pack" ($39)
      ↓
0:02  Stripe Checkout page loads (Stripe-hosted)
      Customer sees: product name, price, payment form
      ↓
0:30  Customer enters payment details and clicks "Pay"
      (average checkout time: 20-40 seconds)
      ↓
0:32  Stripe processes payment (1-3 seconds)
      ↓
0:35  Stripe redirects to success URL: yoursite.com/success?session_id={SESSION_ID}
      ↓
0:36  Success page loads. Customer sees:
      - "Thank you! Your toolkit is ready."
      - Download button (prominent, full-width)
      - "A confirmation email has been sent to your address."
      - Quick-start: "Start with the Seed & Mandate worksheet."
      ↓
0:40  Customer clicks Download. ZIP file downloads.
      ↓
0:45  Customer has the product. Done.
      ↓
1:00  Stripe sends automatic receipt email to customer.
      (Receipt includes: product name, price, date, payment method)
      ↓
2:00  [OPTIONAL, POST-MVP] Custom email via Resend/Postmark with download link backup.
```

### What the Customer Receives

| Delivery Method | Content | Timing |
|----------------|---------|--------|
| Success page download | ZIP file containing all artifacts | Instant (0:40) |
| Stripe receipt email | Payment confirmation | ~1 minute |
| [Future] Custom email | Download link + quick-start guide | ~1-2 minutes |

### ZIP File Contents

**Tier 1: The Concept Test ($19)**
```
the-concept-test/
├── README.txt (quick-start guide, 1 page)
├── pdf/
│   ├── 01-seed-and-mandate.pdf
│   ├── 02-audience-definition.pdf
│   ├── 03-core-mechanic-identifier.pdf
│   ├── 04-core-loop-mapper.pdf
│   ├── 05-constraint-and-scope-checklist.pdf
│   ├── 06-viability-scorecard.pdf
│   └── 07-design-questions-checklist.pdf
└── editable/
    ├── 01-seed-and-mandate.md
    ├── 02-audience-definition.md
    ├── 03-core-mechanic-identifier.md
    ├── 04-core-loop-mapper.md
    ├── 05-constraint-and-scope-checklist.md
    ├── 06-viability-scorecard.md
    └── 07-design-questions-checklist.md
```

**Tier 2: The Concept Pack ($39)**
```
the-concept-pack/
├── README.txt (quick-start guide, 1 page)
├── pdf/
│   ├── [all 7 Tier 1 PDFs]
│   ├── 08-secondary-mechanics-worksheet.pdf
│   ├── 09-colors-of-game-design-review.pdf
│   ├── 10-concept-scoring-rubric.pdf
│   ├── 11-module-map-starter.pdf
│   ├── 12-prototype-brief.pdf
│   ├── 13-pitch-ready-summary.pdf
│   └── 14-scope-filter-matrix.pdf
├── editable/
│   ├── [all 7 Tier 1 markdown files]
│   ├── 08-secondary-mechanics-worksheet.md
│   ├── 09-colors-of-game-design-review.md
│   ├── 10-concept-scoring-rubric.md
│   ├── 11-module-map-starter.md
│   ├── 12-prototype-brief.md
│   ├── 13-pitch-ready-summary.md
│   └── 14-scope-filter-matrix.md
└── examples/
    ├── example-a-momentum-platformer.pdf
    └── example-b-last-light-survival-roguelike.pdf
```

---

## Operational Requirements

| Task | Frequency | Time | Automatable? |
|------|-----------|------|-------------|
| Monitor Stripe dashboard for sales | Daily | 2 min | YES (Stripe email notifications) |
| Respond to support emails | As needed (expect <1/week at first) | 5-15 min each | NO |
| Process refund requests | As needed (expect <1/month) | 5 min | YES (Stripe dashboard, one click) |
| Update product files (bug fixes, improvements) | Monthly or as needed | 30-60 min | NO |
| Re-upload updated ZIP to hosting | After each update | 5 min | NO |
| Monitor analytics (page visits, conversion) | Weekly | 10 min | PARTIAL (dashboards) |
| Social content creation and posting | Daily during validation | 30-60 min | NO |

**Total weekly operational time (post-launch):** ~2-3 hours during validation phase, dropping to <1 hour/week once stable.

---

## Tools Actually Needed

| Tool | Purpose | Required for MVP? | Cost | Alternative |
|------|---------|-------------------|------|-------------|
| **Stripe** | Checkout + payment processing | YES | 2.9% + 30¢ per transaction | None — this is the checkout |
| **Vercel** | Host landing page + success page | YES | Free tier | Netlify, Cloudflare Pages |
| **File hosting** (Vercel static files or R2/S3) | Host ZIP downloads | YES | Free (if small files on Vercel) | Cloudflare R2 (free tier) |
| **Domain** | Custom domain for landing page | YES | ~$12/year | Can launch on vercel.app subdomain first |
| **Analytics** (Vercel Analytics or Plausible) | Track page visits and conversion | NICE-TO-HAVE | Free (Vercel) or $9/mo (Plausible) | None initially — use Stripe dashboard for sales data |
| **Email service** (Resend/Postmark) | Custom delivery email | NO — Stripe receipts suffice | $0-20/mo | Stripe automatic receipts |
| **Support email** | Handle customer questions | YES | Free (Gmail or domain email) | — |

### Tools NOT Needed Yet

| Tool | Why Not |
|------|---------|
| CRM (HubSpot, Pipedrive) | No sales pipeline. You're selling a download, not closing deals. |
| Help desk (Zendesk, Intercom) | Support volume will be near-zero at first. Gmail is fine. |
| Community platform (Discord, Circle) | No community to manage. Build one only after audience exists. |
| Course platform (Teachable, Podia) | Not a course. Don't use a course platform for a download. |
| Email marketing (Mailchimp, ConvertKit) | No email list yet. Capture emails later. |
| Affiliate platform | No affiliates yet. Need traction first. |
| A/B testing tools (VWO, Optimizely) | Not enough traffic to test statistically. Use intuition and iterate. |
| Notion (as delivery platform) | Platform lock-in. Not all buyers use Notion. |

---

## Support & Refund Policy

### Refund Policy

**14-day, no-questions-asked refund policy.**

- Buyer emails support requesting refund
- Refund processed via Stripe dashboard (one click)
- No need for automated refund flow at this volume
- Expected refund rate: <5% at $19-39

### Support Handling

| Question Type | Expected Volume | Response |
|--------------|----------------|----------|
| "I didn't get my download" | Rare | Check Stripe for payment, resend download link |
| "What format are the files?" | Rare (answer in FAQ) | "PDF + editable Markdown" |
| "Will this work for X genre?" | Occasional | "Yes, genre-agnostic methodology" |
| "Can I get a refund?" | Rare | Process within 24 hours |
| "Do you offer consulting?" | Occasional | "Not currently, but thanks for the interest" (signal for future offer) |

**Support email:** Set up a dedicated email (e.g., support@yourdomain.com or hello@yourdomain.com). Check once daily during validation.

---

## Fulfillment Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌───────────────────┐
│ Landing Page │────>│ Stripe Checkout   │────>│ Success Page      │
│ (Vercel)     │     │ (Stripe-hosted)   │     │ (Vercel)          │
│              │     │                   │     │                   │
│ • Product    │     │ • Payment form    │     │ • "Thank you"     │
│   info       │     │ • Product name    │     │ • Download button │
│ • CTA button │     │ • Price           │     │ • Quick-start tip │
└──────────────┘     └──────────────────┘     └─────┬─────────────┘
                                                     │
                                                     ▼
                                              ┌─────────────────┐
                                              │ ZIP Download     │
                                              │ (hosted file)    │
                                              │                  │
                                              │ • PDFs           │
                                              │ • Markdown files │
                                              │ • Examples (T2)  │
                                              └─────────────────┘
                     ┌──────────────────┐
                     │ Stripe Receipt   │
                     │ (automatic)      │
                     │                  │
                     │ • Payment conf.  │
                     │ • Product name   │
                     │ • Amount paid    │
                     └──────────────────┘
```

---

## Operational Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Download link shared publicly (piracy) | MEDIUM | LOW | At $19-39, piracy impact is negligible. Don't invest in DRM. If it becomes a problem, use unique download links per session. |
| Stripe account issues | LOW | HIGH | Follow Stripe's terms. Don't make misleading claims. Keep refund rate low. |
| Vercel downtime during launch | LOW | MEDIUM | Vercel has 99.99% uptime SLA. Not a realistic concern. |
| ZIP file corrupted | LOW | HIGH | Test download on multiple devices/browsers before launch. |
| Customer can't open PDFs | LOW | LOW | Standard PDF format. If issues arise, provide markdown as alternative. |
| Email delivery failure (spam filter) | MEDIUM | LOW | Success page is primary delivery. Email is backup. |
| Tax compliance confusion | MEDIUM | MEDIUM | Stripe Tax can handle sales tax automatically. Enable it. Research your state's digital goods tax requirements. |

---

## Scaling Triggers

| Signal | Threshold | Action |
|--------|-----------|--------|
| Sales volume justifies email capture | 20+ sales | Set up Resend/Postmark for custom delivery emails |
| Support volume exceeds 5 emails/week | 5+ emails/week | Create a FAQ page separate from landing page |
| Buyers request specific formats | 5+ similar requests | Add requested format (Notion, Google Docs, etc.) |
| Conversion rate data is meaningful | 500+ page visits | Consider basic A/B testing on headline |
| Revenue exceeds $500/month consistently | $500+/month | Invest in polishing product, consider new tier or expansion |
| Refund rate exceeds 10% | >10% refunds | Investigate cause. Product quality issue or positioning mismatch? |

---

## Confirmed / Assumed / Constrained / Unknown

| Status | Item |
|--------|------|
| **Confirmed** | Stripe handles checkout and receipts |
| **Confirmed** | Vercel can host static files for download |
| **Confirmed** | Product is PDF + Markdown in ZIP format |
| **Assumed** | Stripe success page redirect works reliably |
| **Assumed** | ZIP file size will be small enough for Vercel static hosting (<50MB) |
| **Assumed** | Support volume will be near-zero initially |
| **Constrained** | No custom email service in v1 |
| **Constrained** | No DRM or download protection |
| **Unknown** | Actual support volume and types of questions |
| **Unknown** | Whether buyers prefer PDF or Markdown format |
| **Unknown** | Tax implications for digital goods sales |

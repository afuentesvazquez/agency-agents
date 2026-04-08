# Stack Recommendation

Technical architecture recommendation for the Game Design Offer — a low-ticket digital product ($19/$39) delivering downloadable worksheets, templates, frameworks, and checklists to indie game creators.

This document answers one question: **what is the least you need to build to get to first sale and validate demand?**

---

## Stack Verdict Table

| Component | Verdict | Rationale |
|-----------|---------|-----------|
| **Stripe** | **KEEP** | Non-negotiable. Stripe Checkout Sessions handle payment, receipt emails, and redirect to delivery. Zero custom backend required. Already have access. |
| **Vercel** | **KEEP** | Free tier is more than sufficient. Deploy a single Next.js page. Serverless functions handle Stripe webhook if needed. No infrastructure management. |
| **Next.js** | **KEEP** | Single landing page + success/download page. Use static generation. No routing complexity, no auth, no API layer beyond one webhook route. |
| **Claude Code** | **KEEP** | Internal build tool only. Use it to generate the landing page, write copy, build the PDF templates, and iterate fast. Not part of the shipped product. |
| **agency-agents** | **KEEP (internal only)** | Use specialist agents to generate product content, refine copy, and QA the offer. Do not ship agent logic in v1. The product is static files, not AI features. |
| **Email service (Resend/Postmark)** | **DELAY** | Stripe sends receipt emails automatically. A custom "here's your download" email is nice but not required when the success page already delivers the files. Add after first 10 sales. |
| **Remotion** | **CUT** | Video/motion content is growth-phase marketing. It adds significant build complexity for zero impact on first-sale validation. Revisit after product-market fit signal. |

---

## MVP Architecture Recommendation

### Architecture: Static Landing Page + Stripe Checkout + Success Page Delivery

```
[Landing Page]  -->  [Stripe Checkout Session]  -->  [Success Page + Download Links]
   (Next.js)           (Stripe hosted)                 (Next.js, static)
      |                                                       |
      |                                                       |
   Vercel                                              Direct file links
   (free tier)                                         (or Vercel blob/
                                                        private route)
```

**What this is NOT:**
- Not a gated portal. No accounts. No login.
- Not a SaaS. No database. No user state.
- Not a course platform. No drip content. No progress tracking.
- Not a web app. No interactivity beyond "buy" and "download."

**What this IS:**
- A single dark landing page with clear copy, social proof, and a buy button.
- Stripe handles the entire checkout flow (hosted checkout page).
- Success page serves download links immediately after payment.
- Total pages: 2 (landing + success). Total API routes: 0-1 (optional webhook).

---

## Minimum Implementation Path

Build in this order. Stop at step 5 if you want maximum speed.

| Step | Task | Time Estimate | Notes |
|------|------|---------------|-------|
| 1 | Create the product files (PDFs, templates) | 2-4 hours | Use Claude Code + agency-agents specialists to draft, refine, and format. This is the actual product. Ship quality here. |
| 2 | Set up Stripe product + price | 15 min | Two prices: $19 and $39. Use Stripe Dashboard, not API. Create a Payment Link or Checkout Session config. |
| 3 | Scaffold Next.js project on Vercel | 15 min | `npx create-next-app`, connect to Vercel, deploy. Use App Router. Two routes: `/` and `/success`. |
| 4 | Build landing page | 1-2 hours | Single page. Hero, pain points, what's included, pricing, CTA button. Dark theme. Use Tailwind. |
| 5 | Build success page with download delivery | 30 min | Display after Stripe redirect. Serve download links. See Fulfillment Path below. |
| 6 | (Optional) Add Stripe webhook for logging | 30 min | `/api/webhook` route. Log successful payments. Not required for delivery but useful for tracking. |
| 7 | Test end-to-end with Stripe test mode | 15 min | Full flow: land, click buy, complete test checkout, arrive at success page, download files. |
| 8 | Switch Stripe to live mode, go live | 5 min | Swap API keys. Verify. Done. |

**Total time to live with working checkout: 4-8 hours.**

---

## Overbuild Warnings

These are specific things that would waste time at this stage:

| Overbuilt Feature | Why It's Wrong Right Now |
|-------------------|-------------------------|
| **Custom email sequences** | Stripe receipts are enough. You have zero customers. Build email flows after you know people buy. |
| **User accounts / auth** | There is nothing to log into. The product is a file download. |
| **Database (Supabase, Planetscale, etc.)** | No user state to persist. If you need to track purchases, a JSON log from a webhook or Stripe Dashboard is sufficient. |
| **CMS for content management** | You have one landing page. Hardcode it. Change it by editing code. |
| **A/B testing infrastructure** | You need traffic before you can test. Get traffic first. |
| **Remotion promo videos** | High effort, unclear ROI, not on the critical path to first sale. |
| **Custom checkout UI** | Stripe's hosted checkout converts well, handles edge cases, and requires zero frontend work. Do not rebuild it. |
| **Gated download portal** | Overengineered for a one-time purchase of static files. A success page with links is the correct pattern. |
| **Multi-page marketing site** | One page. One offer. One CTA. More pages = more decisions = slower launch. |
| **CI/CD pipeline configuration** | Vercel handles this automatically on git push. Do not set up GitHub Actions or custom build pipelines. |

**The reference pattern (DeployVault) validates this approach:** dark landing page, Stripe checkout, immediate delivery. It works. Do not invent a more complex version.

---

## Lean Deployment Plan

### Prerequisites
- US LLC (done)
- Stripe account with live access (done)
- Vercel account (free tier)
- GitHub repo for the landing page
- Product files finalized (PDFs, templates)

### Deployment Steps

```
1. Create GitHub repo for landing page
   └── next.js project, two routes, tailwind

2. Connect repo to Vercel
   └── Auto-deploys on push to main
   └── Free tier: sufficient for months of traffic

3. Configure Stripe
   └── Create Product in Stripe Dashboard
   └── Create two Prices ($19, $39)
   └── Create Checkout Session config (or use Payment Links)
   └── Set success_url to https://yourdomain.com/success?session_id={CHECKOUT_SESSION_ID}

4. Set environment variables in Vercel
   └── STRIPE_SECRET_KEY
   └── STRIPE_PUBLISHABLE_KEY
   └── NEXT_PUBLIC_STRIPE_PRICE_ID_19
   └── NEXT_PUBLIC_STRIPE_PRICE_ID_39

5. Deploy and test in Stripe test mode
   └── Full purchase flow with test card 4242424242424242

6. Switch to Stripe live mode
   └── Swap keys in Vercel env vars
   └── Redeploy

7. Point custom domain (if desired)
   └── Vercel handles SSL automatically
```

### Vercel Configuration (Lean)

- **Framework:** Next.js (auto-detected)
- **Build:** Default (`next build`)
- **Functions:** One serverless function max (webhook, if used)
- **Storage:** Host product files as static assets in `/public` or use Vercel Blob for slightly more control
- **Analytics:** Vercel Analytics free tier (optional, enable with one click)
- **Edge Config / KV / Postgres:** Do not use. You do not need a database.

---

## Fulfillment Path

What happens in the first 2 minutes after a customer clicks "Buy" and completes payment.

### Second-by-second flow

| Time | Event | System | Customer Experience |
|------|-------|--------|---------------------|
| 0:00 | Customer clicks CTA on landing page | Next.js | Redirected to Stripe Checkout |
| 0:30 | Customer enters payment info, clicks Pay | Stripe | Loading spinner |
| 0:32 | Stripe processes payment successfully | Stripe | "Payment successful" |
| 0:33 | Stripe redirects to `success_url` with `session_id` | Stripe → Vercel | Redirect to success page |
| 0:34 | Success page loads | Next.js on Vercel | Sees confirmation + download links |
| 0:35 | Customer clicks download | Vercel (static file serving) | PDF/ZIP download begins |
| 0:36 | Stripe sends automatic receipt email | Stripe | Email arrives with payment confirmation |
| 1:00 | Customer has files on their machine | — | Done. Product delivered. |

### Success page implementation

Two approaches, in order of simplicity:

**Option A: Static success page with direct download links (recommended for v1)**
- Success page is a static Next.js page at `/success`
- Download links point to files in `/public/downloads/` (or behind a simple API route)
- No session validation. Simple, fast, works.
- Risk: Someone could find the direct URL. Acceptable risk at this price point and volume.

**Option B: Session-validated success page (add when it matters)**
- Success page receives `session_id` query parameter from Stripe redirect
- Server-side: call `stripe.checkout.sessions.retrieve(session_id)` to verify payment
- Only show download links if payment status is `paid`
- Adds one API call but prevents unauthorized access to downloads
- Implement this when you care about link sharing — not on day one.

### What about email delivery?

| Approach | Effort | When to Use |
|----------|--------|-------------|
| Stripe receipt email (automatic) | Zero effort | Day one. Already on. |
| Custom email with download link via Resend/Postmark | 1-2 hours | After first 10+ sales. Adds polish and a backup delivery method. |
| Email sequence (welcome + tips + upsell) | 4-8 hours | After validating demand. This is growth, not MVP. |

**v1 verdict:** Stripe receipt + success page download. No custom email needed.

---

## Internal Tooling Recommendations

How to use Claude Code and agency-agents to build this faster — without shipping AI features in the product.

### Claude Code Usage

| Task | How to Use Claude Code |
|------|----------------------|
| **Product content creation** | Generate worksheet content, framework structures, checklist items. Iterate on prompts until output quality is high. |
| **Landing page copy** | Draft headlines, subheads, bullet points, CTAs. Test multiple angles. |
| **Next.js scaffolding** | Generate the entire landing page + success page. Tailwind styling. Stripe integration code. |
| **PDF formatting** | Generate LaTeX or HTML-to-PDF content for polished worksheet layouts. |
| **Stripe integration** | Write the checkout session creation code and webhook handler. Standard patterns, well-documented. |

### agency-agents Usage

Use specialist agents from this repo as internal consultants during the build phase.

| Agent Category | Use For |
|----------------|---------|
| **marketing/** | Landing page copy, positioning, CTA optimization, offer framing |
| **sales/** | Price anchoring strategy, objection handling in copy, urgency/scarcity framing |
| **design/** | Visual hierarchy guidance, layout recommendations, color/typography decisions |
| **product/** | Feature prioritization, scope control, MVP definition |
| **strategy/** | Go-to-market sequencing, validation criteria, success metrics |
| **game-development/** | Domain expertise for the product content itself — ensuring worksheets and frameworks are genuinely useful to indie game creators |

### What NOT to do with agency-agents in v1

- **Do not embed agent interactions in the product.** The product is static files. AI-powered worksheets are a v2+ feature.
- **Do not build an agent-powered web experience.** This is scope creep that delays launch by weeks.
- **Do not use agents for runtime personalization.** There is no runtime. The product is a download.

The correct use of agency-agents is: **load the relevant specialist, use it to make better decisions faster during the build, then ship static artifacts.**

---

## Summary Decision Matrix

| Question | Answer |
|----------|--------|
| Core MVP stack? | Next.js + Vercel + Stripe. Three components. That's it. |
| Useful but optional? | Stripe webhook for purchase logging. Vercel Analytics. |
| Delay until after first sales? | Custom email delivery (Resend/Postmark), email sequences, Remotion video content. |
| Launch format? | Static landing page + Stripe hosted checkout + success page with download links. |
| Minimum technical implementation? | Two Next.js pages, one Stripe product with two prices, deployed on Vercel free tier. |
| What's overbuilt? | Database, auth, gated portal, CMS, custom checkout, video content, email sequences. |
| Leanest Vercel usage? | Free tier, auto-deploy from GitHub, static pages + one optional serverless function. |
| First 2 min after purchase? | Stripe redirect → success page → direct download link → done. |
| agency-agents role? | Internal only. Use to build product content and landing page copy faster. Not in shipped product. |
| Remotion? | Cut from MVP. Use for growth content after demand is validated. |

**Ship the simplest thing. Validate demand. Build complexity only in response to real customer behavior.**

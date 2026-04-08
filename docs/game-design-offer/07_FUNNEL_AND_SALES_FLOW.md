# Funnel & Sales Flow

> Specialist: Conversion and Funnel Strategist
> Status: DRAFT — pre-validation

---

## Full Funnel Architecture

```
[Social Content] → [Profile / Link in Bio] → [Landing Page] → [Stripe Checkout] → [Success Page + Download] → [Post-Purchase CTA]
     ↓                                             ↓
[Free Content:                               [Email Confirmation
 "5 Questions"]                               with download link]
```

---

## Stage-by-Stage Breakdown

### Stage 1: Social Content (Discovery)

| Element | Detail |
|---------|--------|
| **What happens** | Prospect sees a post about game concept clarity in their feed |
| **What they feel** | "That's exactly my problem" or "I've never thought about it that way" |
| **Key message** | You have a game idea but no design structure. That's why your projects stall. |
| **Conversion goal** | Click through to profile or link in bio |
| **Drop-off risk** | Post doesn't resonate. Feels like self-promotion. Gets scrolled past. |

**Content types that work for this audience:**

| Content Type | Example | Why It Works |
|-------------|---------|--------------|
| Design question post | "Can you describe your game's core loop in 3 sentences? If not, you're not ready to prototype." | Provokes self-reflection. Shareable. |
| Framework reveal | "Every game concept needs to pass 8 viability tests. Here are the first 3." | Shows methodology depth. Teases the product. |
| Anti-pattern post | "The #1 mistake solo devs make: jumping to code before defining the core mechanic." | Names a pain they recognize. |
| Before/after artifact | "Left: a game pitch in my head. Right: the same idea after running it through a concept test." | Visual proof of transformation. |
| Community question | "What's the hardest part of turning a game idea into a real plan?" | Engagement bait that surfaces real pain. |
| Insight thread | "I analyzed why 3 of my game projects failed. Every one failed at the concept phase." | Story-driven credibility. |

**Content types to AVOID:**

| Avoid | Why |
|-------|-----|
| "I made $X with my product" revenue screenshots | Game dev community hates this. Instant credibility loss. |
| Generic motivational content | "You can do it!" means nothing to technical people. |
| Long talking-head videos without substance | This audience wants signal, not personality. |
| Aggressive sales posts | "Buy my thing" without value gets muted/blocked. |

---

### Stage 2: Profile / Link in Bio (Intent)

| Element | Detail |
|---------|--------|
| **What happens** | Prospect clicks profile, sees bio, considers clicking the link |
| **What they feel** | "Is this person credible? Is this worth clicking?" |
| **Key message** | Bio = one-line value prop: "Game concept clarity toolkit. Test your idea before you build it." |
| **Conversion goal** | Click the link |
| **Drop-off risk** | Bio is vague. Link goes to a generic homepage. No clear value prop. |

---

### Stage 3: Landing Page (Evaluation)

| Element | Detail |
|---------|--------|
| **What happens** | Prospect reads the landing page, evaluates the offer |
| **What they feel** | "Do I need this? Is it worth $19/$39? Is it legit?" |
| **Key message** | This toolkit pressure-tests your game concept and gives you a structured package. |
| **Conversion goal** | Click "Get the Concept Test" or "Get the Concept Pack" |
| **Drop-off risk** | Page is confusing. Value is unclear. No proof. Price feels wrong. |

**Landing page conversion levers:**

| Section | Creates... |
|---------|-----------|
| Hero (headline + subheadline) | **Desire** — "I want this" |
| Problem section | **Recognition** — "That's my problem" |
| What You Get | **Certainty** — "I know what I'm buying" |
| Who It's For | **Qualification** — "This is for me" |
| How It Works | **Clarity** — "I understand the process" |
| Pricing | **Decision** — "Which tier do I want?" |
| FAQ | **Objection removal** — "My concerns are addressed" |
| Final CTA | **Action** — "I'm buying" |

---

### Stage 4: Stripe Checkout (Purchase)

| Element | Detail |
|---------|--------|
| **What happens** | Customer enters payment information on Stripe-hosted checkout |
| **What they feel** | "Is this secure? Am I making a mistake?" |
| **Key message** | Stripe branding + clear product name + price confirmation |
| **Conversion goal** | Complete payment |
| **Drop-off risk** | Checkout page looks different from landing page. Unexpected fees. Complicated form. |

**Friction minimization:**
- Use Stripe Checkout (hosted) — trusted UI, handles all payment methods
- Product name and price clearly visible
- No surprise fees or taxes (or handle tax transparently)
- Support link visible in case of issues

---

### Stage 5: Success Page + Download (Delivery)

| Element | Detail |
|---------|--------|
| **What happens** | Customer sees success page with download links immediately after payment |
| **What they feel** | "I got it. Good. Now what?" |
| **Key message** | "Your toolkit is ready. Download it now. Start with the Seed & Mandate worksheet." |
| **Conversion goal** | Customer downloads the product |
| **Drop-off risk** | Redirect fails. Download link broken. Customer closes tab before downloading. |

**Must include on success page:**
- Download button (prominent)
- "Check your email for a backup link"
- Quick-start guidance: "Start with worksheet #1"
- Clear tier identification (what they bought)

---

### Stage 6: Email Confirmation (Backup + Trust)

| Element | Detail |
|---------|--------|
| **What happens** | Customer receives email with Stripe receipt + download link |
| **What they feel** | "Good, I have a record. I can access this later." |
| **Key message** | Receipt + download link + quick-start tip |
| **Conversion goal** | Customer has persistent access to the product |
| **Drop-off risk** | Email goes to spam. Download link expires. |

---

### Stage 7: Post-Purchase CTA (Expansion)

| Element | Detail |
|---------|--------|
| **What happens** | After download, customer sees a next step |
| **Key message** | Tier 1 buyers: "Want the full pack with examples? Upgrade for $20 more." |
| **Key message** | Tier 2 buyers: "Share your concept pack with a collaborator." |
| **Conversion goal** | Upsell (Tier 1 → Tier 2) or word-of-mouth referral |
| **Drop-off risk** | Pushy upsell feels like a cash grab |

**Note:** Do NOT build an upsell flow for v1. Add it only after validating that Tier 1 sells consistently.

---

## Friction Points Map

| Friction Point | Stage | Severity | Fix |
|---------------|-------|----------|-----|
| Post doesn't get engagement | Discovery | HIGH | Test multiple content angles. Lead with questions, not products. |
| Bio link isn't compelling | Intent | MEDIUM | One-line value prop in bio. Direct landing page URL. |
| Landing page is too long / unclear | Evaluation | HIGH | Mobile-first hierarchy. Clear sections. Bold value prop above fold. |
| No social proof | Evaluation | HIGH | Methodology proof instead: worksheet previews, framework logic. |
| Stripe checkout feels disconnected | Purchase | LOW | Stripe's hosted checkout is trusted. Match product name/price. |
| Download link doesn't work | Delivery | CRITICAL | Test before launch. Have email backup. Use reliable file hosting. |
| Customer can't find their download later | Post-delivery | MEDIUM | Email backup link. Clear subject line ("Your Game Concept Toolkit"). |

---

## Trust Gaps

| Gap | Where It Hurts | How to Close |
|-----|---------------|-------------|
| "Who made this?" | Landing page | Brief founder note. Real name. Honest framing. |
| "Has anyone used this?" | Landing page | At launch: no testimonials. Use worksheet previews as proof. After first sales: collect and display reviews. |
| "Is $19 worth it for worksheets?" | Landing page | Show the Viability Scorecard. Show the Design Questions Checklist. Make the depth of the methodology visible. |
| "Will this work for my project?" | Landing page FAQ | "Genre-agnostic methodology. Works for platformers, RPGs, survival, puzzle — any genre." |
| "Is this a scam?" | Checkout | Stripe-hosted checkout = trusted. 14-day refund policy. Real contact email. |

---

## Lead Magnet Integration

**"5 Questions Your Game Concept Can't Skip"** — free content piece.

### Integration Options (ranked):

| Option | Mechanism | Pros | Cons |
|--------|-----------|------|------|
| **Social post (text)** | Publish as a Twitter/X thread or Reddit post | Free, immediate, shareable, no tech needed | No email capture |
| **One-page PDF (email-gated)** | Landing page popup or inline form → email → PDF | Captures emails for follow-up | Requires email service setup, adds friction |
| **Landing page section** | Free content visible on the landing page itself | Shows value density, no friction | No email capture, no separate virality |

**Recommendation:** Start as a social post (no tech needed). Convert to email-gated PDF only after email service is set up (post-validation).

---

## Channel Prioritization

| Rank | Channel | Expected ROI | Rationale |
|------|---------|-------------|-----------|
| 1 | **Twitter/X** | HIGH | Large indie game dev community. Thread-friendly for framework reveals. Direct link sharing. |
| 2 | **Reddit** (r/gamedev, r/indiegaming, r/gamedesign) | HIGH (if done right) | High-intent audience, but allergic to self-promotion. Must provide genuine value first, mention product second. |
| 3 | **Game dev Discord servers** | MEDIUM | Engaged communities, but norms vary. Must be a known member before promoting. |
| 4 | **Instagram** | MEDIUM | Carousel format works for framework reveals. Visual proof (worksheet previews). |
| 5 | **YouTube Shorts** | MEDIUM | Quick design tips. Lower effort than full videos. Game dev audience exists. |
| 6 | **TikTok** | LOW-MEDIUM | Game dev audience is small. Works for "behind the scenes" content. |
| 7 | **Itch.io community** | LOW | Not a marketing platform. Possible for cross-promotion with game projects. |
| 8 | **LinkedIn** | LOW | Game industry professionals are there, but not the indie solo dev audience. |

### Reddit-Specific Strategy

Reddit requires special handling for this audience:

| Do | Don't |
|----|-------|
| Post genuine design discussions with no product mention | Drop links to your product in comments |
| Share the "5 Questions" framework as a text post, not a link | Create a post that's obviously self-promotion |
| Engage in threads where people discuss concept struggles | DM people who post about game ideas |
| After building community goodwill (10+ genuine posts), mention "I built something" | Lead with the product before establishing credibility |
| Post in r/gamedesign (more design-focused) before r/gamedev (more general) | Spam the same post across multiple subreddits |

---

## Confirmed / Assumed / Constrained / Unknown

| Status | Item |
|--------|------|
| **Confirmed** | Stripe Checkout handles payment and receipts |
| **Confirmed** | Landing page is a single static page on Vercel |
| **Assumed** | Twitter/X is the highest-ROI channel for this audience |
| **Assumed** | Reddit can drive significant traffic if approached authentically |
| **Assumed** | Social content → landing page conversion funnel is viable at this price point |
| **Constrained** | No paid acquisition budget in validation phase |
| **Constrained** | No email list at launch |
| **Constrained** | No testimonials at launch |
| **Unknown** | Which content type will perform best |
| **Unknown** | Whether Reddit or Twitter will drive more sales |
| **Unknown** | Conversion rate from landing page visit to purchase |

# Offer Architecture

> Specialist: Offer and Pricing Architect + Product Strategy Lead
> Status: DRAFT — pre-validation

---

## Pricing Ladder

| | Tier 1 | Tier 2 |
|---|--------|--------|
| **Name** | The Concept Test | The Concept Pack |
| **Price** | $19 | $39 |
| **Purchase type** | One-time | One-time |
| **Audience fit** | Solo creator or programmer exploring an idea | Team in concept phase or serious solo builder ready to pitch/prototype |
| **Positioning** | "Test your idea before you build it" | "Build the full concept package" |

---

## Tier 1: The Concept Test — $19

### What this is
A self-guided concept clarity toolkit. Worksheets, checklists, and framework templates that walk you through the critical design questions every game concept must answer before production begins.

### What it proves
That you understand your own game idea well enough to explain it clearly, identify its core, and name its biggest risks.

### What it includes
- **Seed & Mandate Worksheet** — Define what the game is, why it exists, and what it must deliver
- **Audience Definition Template** — Who is this for, what fantasy does it serve, what are they comparing it to
- **Core Mechanic Identifier** — Isolate the single mechanic that must feel good for the game to work
- **Core Loop Mapper** — Define moment-to-moment, session, and long-term loops
- **Constraint & Scope Checklist** — Team size, timeline, budget, platform, engine — all in one place
- **Viability Scorecard** — Score your concept across 8 dimensions and get a blunt pass/fail/revise signal
- **Quick Reference: Design Questions Checklist** — 30 questions your concept must answer before prototyping

### What it excludes
- No filled examples (templates only)
- No pitch-ready outputs
- No deep-dive into secondary mechanics, Colors of Game Design, or module mapping
- No personalized feedback or coaching

### What happens next
Use the Viability Scorecard result to decide: prototype, revise, or kill the concept. If the concept scores well and you want the full package, upgrade to Tier 2.

### Perceived value logic
$19 for a structured toolkit that replaces weeks of unfocused brainstorming. The Viability Scorecard alone is worth the price if it saves someone from building the wrong game for 3 months.

---

## Tier 2: The Concept Pack — $39

### What this is
Everything in Tier 1, plus the tools to build a complete, pitch-ready concept package. Includes filled examples, advanced design frameworks, and a structured output you can hand to a team, investor, or collaborator.

### What it proves
That you've done the design work. Your concept is tested, structured, documented, and ready for the next phase — whether that's a prototype, a pitch, or a team kickoff.

### What it includes
Everything in Tier 1, plus:
- **Filled Example Pack** — Two complete worked examples showing a platformer concept and a survival-roguelike concept taken through every framework
- **Secondary Mechanics Worksheet** — Identify what supports the core and what's bloat
- **Colors of Game Design Review** — Audit your concept across 9 design lenses: Structure, Fantasy, Purpose, Progress, Reward, Toy, Struggle, Tension, Risk
- **Concept Scoring Rubric** — Detailed scoring with weighted dimensions and comparative benchmarking guidance
- **Module Map Starter** — Map your game's systems and their relationships before building
- **Prototype Brief Template** — Define what to build first, what to test, and what success looks like
- **Pitch-Ready Summary Template** — One-page concept summary formatted for sharing with collaborators, publishers, or communities
- **Scope Filter Matrix** — Cut what doesn't serve the core. Prioritize features by impact vs. effort.

### What it excludes
- No personalized feedback
- No coaching calls
- No community access
- No production management tools
- No art or code assets

### What happens next
You have a complete concept package. Share it with your team, use it to start prototyping, or pitch it. The Prototype Brief tells you exactly what to build first.

### Perceived value logic
$39 for a complete concept package that would take a professional game designer days to produce from scratch. The filled examples alone cut learning time significantly. The pitch summary is a deliverable you can actually use externally.

---

## Why Someone Upgrades (Tier 1 → Tier 2)

| Trigger | Reasoning |
|---------|-----------|
| "I filled out the worksheets and my concept scored well" | They want the full package to keep going |
| "I need to show this to someone else" | Pitch summary and module map are only in Tier 2 |
| "I want to see what a completed version looks like" | Filled examples are only in Tier 2 |
| "I want to go deeper on design analysis" | Colors of Game Design review is only in Tier 2 |
| "I realized I need to scope this properly" | Scope Filter Matrix is only in Tier 2 |

---

## Adjacent Offer Questions

### Should there be a $0 lead magnet?

**Verdict: YES — but minimal.**

Recommended: A single free artifact — the **"5 Questions Your Game Concept Can't Skip"** — as a social post or downloadable one-pager. Not a full worksheet. Just enough to demonstrate the methodology and create demand for the full toolkit.

Purpose: Lead capture for email list + proof of value density. Should take 2 minutes to consume, not 20.

**What it should NOT be:**
- A mini version of the $19 product (cannibalization risk)
- A lengthy PDF (nobody reads those)
- A generic checklist (no differentiation)

### Should there be a post-purchase upsell?

**Verdict: NOT YET — test first.**

If Tier 1 sells consistently, test an upgrade prompt on the success page: "Upgrade to The Concept Pack for $20 more." Stripe supports this natively.

Do not build an upsell flow before validating that Tier 1 converts. Premature upsell engineering is wasted effort.

### Should there be a future high-ticket advisory offer?

**Verdict: DELAY — only if demand signals appear.**

A $200-500 "Concept Review" where the seller audits someone's completed concept pack could work IF:
- Tier 1 and 2 sell consistently
- Buyers ask for feedback (signal: support emails requesting review)
- The seller has credible game design expertise to back it

Do not build or promote this until there's organic demand. It changes the business model from product to service, which is a different operational commitment.

---

## Offer Architecture Summary

```
FREE: "5 Questions Your Game Concept Can't Skip" (lead magnet / social content)
  ↓
$19: The Concept Test (self-guided clarity toolkit)
  ↓
$39: The Concept Pack (full concept package + examples + pitch output)
  ↓
[FUTURE, UNVALIDATED]: Concept Review advisory ($200-500, only if demand appears)
```

---

## Packaging Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| $19 tier feels too thin | MEDIUM | Viability Scorecard must be genuinely useful, not a gimmick. Design questions checklist adds bulk. |
| $39 tier feels overstuffed | LOW | Everything in Tier 2 serves a clear purpose. No filler. |
| Price anchoring fails (why $39 when $19 exists?) | MEDIUM | Tier 2 must feel like a qualitative leap, not just "more stuff." The filled examples and pitch summary are the key differentiators. |
| Buyers skip Tier 1 and only buy Tier 2 | LOW | This is fine. Tier 1 exists for price-sensitive buyers and as an entry point. |
| Refund requests because "I could have done this myself" | MEDIUM | The value is in the structure and sequence, not the content itself. Landing page must set this expectation clearly. |

---

## Confirmed / Assumed / Constrained / Unknown

| Status | Item |
|--------|------|
| **Confirmed** | US LLC exists, Stripe available, one-time purchase model |
| **Confirmed** | Two-tier ladder at ~$19 and ~$39 |
| **Assumed** | Programmers with game ideas will pay $19-39 for concept structure tools |
| **Assumed** | Filled examples significantly increase perceived value of Tier 2 |
| **Assumed** | "Colors of Game Design" framework is differentiating enough to justify tier split |
| **Constrained** | No personalized feedback in any tier (operational constraint) |
| **Constrained** | Self-guided only — no community, no calls |
| **Unknown** | Which tier will outsell the other |
| **Unknown** | Whether a $0 lead magnet is necessary or if direct social→purchase converts |
| **Unknown** | Optimal price sensitivity ($19 vs $14 vs $24) |

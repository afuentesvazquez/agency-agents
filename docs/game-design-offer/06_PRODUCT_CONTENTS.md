# Product Contents

> Specialist: Systems and Framework Architect + Senior Game Design Director
> Status: DRAFT — pre-validation

---

## Design Philosophy

Every artifact in this product must pass three filters:

1. **Does it force a concrete output?** (No open-ended "brainstorm your ideas" prompts)
2. **Does it answer a real design question?** (Every worksheet maps to a decision the creator must make)
3. **Can someone use it in under 30 minutes?** (No artifact should require more than one focused session)

If an artifact doesn't pass all three, it doesn't belong in the MVP.

---

## Content Architecture

### User Journey: Raw Idea → Concept Package

```
PHASE 1: SEED DEFINITION
  What is this game? Why does it exist? What must it deliver?
  ↓
PHASE 2: AUDIENCE & FANTASY
  Who is this for? What experience do they want? What are they comparing it to?
  ↓
PHASE 3: CORE DESIGN
  What is the core mechanic? What is the core loop? What must feel good?
  ↓
PHASE 4: STRUCTURE & SCOPE
  What supports the core? What's risky? What should be cut? How big is this?
  ↓
PHASE 5: VIABILITY CHECK
  Is this worth prototyping? What are the deal-breakers? What's the verdict?
  ↓
PHASE 6: OUTPUT (Tier 2 only)
  Pitch summary. Prototype brief. Module map. Ready to share or build.
```

---

## Tier 1 Contents: The Concept Test ($19)

### 1. Seed & Mandate Worksheet
**Design question answered:** "What is this game and why does it need to exist?"

| Field | Purpose |
|-------|---------|
| Working title | Name the project (forces commitment) |
| One-sentence description | If you can't say it in one sentence, you don't know what it is |
| Core fantasy | What experience does the player have? |
| Mandate | What must this game deliver to be worth building? (3-5 non-negotiables) |
| Inspiration sources | What existing games/media inform this? Be specific. |
| What this is NOT | Explicitly name what the game avoids |

**Format:** Fillable PDF + editable template (Notion/Markdown)
**Time to complete:** 15-20 minutes

---

### 2. Audience Definition Template
**Design question answered:** "Who is this for and what do they want?"

| Field | Purpose |
|-------|---------|
| Primary player profile | Age, gaming habits, platform preferences, reference games |
| Player fantasy | What power/emotion/experience does this player seek? |
| Competitor awareness | What 3 games does your player already play in this space? |
| Gap statement | What does your game offer that competitors don't? |
| Accessibility considerations | Skill floor, time commitment, onboarding expectations |

**Format:** Fillable PDF + editable template
**Time to complete:** 15 minutes

---

### 3. Core Mechanic Identifier
**Design question answered:** "What single mechanic must feel good for this game to work?"

| Field | Purpose |
|-------|---------|
| Core verb | What does the player DO most often? (e.g., jump, shoot, build, negotiate) |
| Input → output | What does the player press/do, and what happens? |
| Success feel | What should "doing this well" feel like? |
| Failure feel | What should "doing this badly" feel like? |
| Fun hypothesis | "This game is fun because ___" — one sentence |
| Mechanic dependencies | What other systems does this mechanic require? |
| Tuning levers | What variables control how this mechanic feels? |

**Format:** Fillable PDF + editable template
**Time to complete:** 20 minutes

---

### 4. Core Loop Mapper
**Design question answered:** "What does the player do, repeatedly, and why do they keep doing it?"

| Loop Layer | Fields |
|------------|--------|
| **Moment-to-moment** (0-30s) | Action → Feedback → Micro-reward |
| **Session loop** (5-30 min) | Goal → Tension → Resolution |
| **Long-term loop** (hours-weeks) | Progression → Retention hook → Meta-goal |

Includes a loop diagram template (simple flowchart format).

**Format:** Fillable PDF + editable template
**Time to complete:** 20-30 minutes

---

### 5. Constraint & Scope Checklist
**Design question answered:** "What are the hard limits on this project?"

| Constraint | Options / Fields |
|------------|-----------------|
| Team size | Solo / 2-3 / 4-10 / 10+ |
| Timeline | Jam / 1-3 months / 3-6 months / 6-12 months / 12+ months |
| Budget | $0 / <$1K / $1-10K / $10-50K / $50K+ |
| Platform | PC / Console / Mobile / Web / Multi |
| Engine | Unity / Godot / Unreal / Custom / Other |
| Art capability | Programmer art / Basic 2D / Professional 2D / 3D / Outsourced |
| Audio capability | None / Basic / Professional / Outsourced |
| Multiplayer | No / Local / Online / MMO |
| Monetization model | Free / Premium / F2P / Early Access |

**Format:** Checklist PDF + editable template
**Time to complete:** 5-10 minutes

---

### 6. Viability Scorecard
**Design question answered:** "Should I prototype this, revise it, or kill it?"

Score your concept 1-5 on each dimension:

| Dimension | Score | What a 5 means |
|-----------|-------|-----------------|
| Core mechanic clarity | _/5 | You can describe the core mechanic in one sentence and it sounds fun |
| Loop completeness | _/5 | All three loop layers are defined and connected |
| Audience specificity | _/5 | You know exactly who this is for and why they'd play |
| Scope realism | _/5 | The scope matches your constraints (team, time, budget) |
| Differentiation | _/5 | You can name what this does that competitors don't |
| Fantasy strength | _/5 | The player experience you're promising is compelling and specific |
| Risk awareness | _/5 | You've identified the top 3 things that could make this fail |
| Build motivation | _/5 | You genuinely want to build this, not just pitch it |

**Scoring guide:**
- 32-40: Strong concept. Prototype it.
- 24-31: Promising but has gaps. Revise the weak dimensions.
- 16-23: Significant issues. Rethink before committing resources.
- Below 16: Kill it or start over with a different core.

**Format:** Scorecard PDF with scoring guide
**Time to complete:** 10 minutes (after completing other worksheets)

---

### 7. Design Questions Checklist
**Design question answered:** "Have I thought about everything that matters?"

30 essential questions organized by phase:

- **Seed** (5 questions): What is this? Why this? What's the mandate?
- **Audience** (5 questions): Who? Why them? What do they compare to?
- **Core Design** (8 questions): What's the verb? What's the loop? What must feel good?
- **Scope** (6 questions): How big? What's cut? What's the constraint?
- **Risk** (6 questions): What kills this? What's the weakest assumption?

**Format:** Checklist PDF
**Time to complete:** 10-15 minutes (review/check, not fill-in)

---

## Tier 2 Additional Contents: The Concept Pack ($39)

Everything in Tier 1, plus:

### 8. Filled Example Pack (x2)
Two complete worked examples showing real concept development through every framework:

**Example A: "Momentum" — a 2D momentum-based platformer**
- Solo developer scope, 3-month timeline, Godot, PC
- Shows how a simple mechanical concept gets structured and scoped

**Example B: "Last Light" — a survival roguelike with base-building**
- Small team (3 people), 6-month timeline, Unity, PC + Console
- Shows how a more complex concept gets scoped down and risk-assessed

Each example includes every worksheet from Tier 1, filled in completely, with annotations explaining design decisions.

**Why this matters:** Templates are abstract. Filled examples make the methodology concrete.

---

### 9. Secondary Mechanics Worksheet
**Design question answered:** "What supports the core and what's just feature creep?"

| Field | Purpose |
|-------|---------|
| Mechanic name | What is this system? |
| Relationship to core | Does it amplify, enable, or complement the core mechanic? |
| Player decision | What meaningful choice does this add? |
| Complexity cost | How much engineering/design/art does this require? |
| Cut test | "If we removed this, would the core loop still work?" |
| Priority | Must-have / Should-have / Nice-to-have / Cut |

**Format:** Table-based worksheet
**Time to complete:** 20 minutes

---

### 10. Colors of Game Design Review
**Design question answered:** "Is this concept working across all the dimensions that make games compelling?"

Audit your concept against 9 design lenses:

| Color | Question | Assessment |
|-------|----------|------------|
| **Structure** | Are the rules clear, learnable, and consistent? | ___ |
| **Fantasy** | Does the game deliver a compelling power/identity fantasy? | ___ |
| **Purpose** | Does the player know why they're doing what they're doing? | ___ |
| **Progress** | Can the player see and feel forward momentum? | ___ |
| **Reward** | Are rewards meaningful, well-paced, and varied? | ___ |
| **Toy** | Is the core interaction inherently satisfying even without goals? | ___ |
| **Struggle** | Is there meaningful difficulty that creates satisfaction? | ___ |
| **Tension** | Are there moments of uncertainty and anticipation? | ___ |
| **Risk** | Are there meaningful stakes and consequences? | ___ |

Each lens includes 3-4 diagnostic sub-questions and a "strength / neutral / gap" rating.

**Format:** Structured review worksheet
**Time to complete:** 30 minutes

---

### 11. Concept Scoring Rubric
**Design question answered:** "How does this concept compare to a well-designed game concept?"

Extended version of the Viability Scorecard with:
- Weighted dimensions (core mechanic counts more than audio plan)
- Sub-criteria for each dimension
- Comparative notes field ("how does your score compare to [reference game]?")
- Overall grade: A (prototype immediately) / B (revise then prototype) / C (major revision needed) / F (kill)

**Format:** Detailed rubric PDF
**Time to complete:** 15-20 minutes

---

### 12. Module Map Starter
**Design question answered:** "How do the game's systems relate to each other?"

A visual template for mapping:
- Core system (center)
- Supporting systems (connected)
- Data flows between systems
- Priority labels (core / supporting / peripheral / cut)

Includes the two filled examples from the Example Pack as reference.

**Format:** Diagram template (draw.io/Excalidraw compatible) + PDF reference
**Time to complete:** 20-30 minutes

---

### 13. Prototype Brief Template
**Design question answered:** "What should I build first, and how will I know if it works?"

| Field | Purpose |
|-------|---------|
| Prototype goal | What are you testing? (one hypothesis) |
| Scope | What to build / what NOT to build |
| Success criteria | What does "this works" look like? Be specific. |
| Failure criteria | What does "this doesn't work" look like? |
| Timeline | How long should this take? |
| Required assets | Minimum art/audio/code needed |
| Play test plan | Who tests, what to observe, what to ask |

**Format:** Fillable template
**Time to complete:** 15 minutes

---

### 14. Pitch-Ready Summary Template
**Design question answered:** "How do I share this concept with someone else in 60 seconds?"

One-page structured summary:
- Title + one-line description
- Core mechanic + core loop (3 sentences)
- Target audience (1 sentence)
- Unique hook / differentiator (1 sentence)
- Scope and timeline (1 sentence)
- Top 3 risks (bullet points)
- Current status and next step

**Format:** One-page PDF template + editable version
**Time to complete:** 15 minutes (after completing other worksheets)

---

### 15. Scope Filter Matrix
**Design question answered:** "What should I cut?"

| Feature / System | Impact on Core Loop | Implementation Effort | Player Expectation | Verdict |
|-----------------|--------------------|-----------------------|-------------------|---------|
| [Feature name] | High / Medium / Low | High / Medium / Low | Expected / Surprise / Irrelevant | KEEP / DEFER / CUT |

Includes decision rules:
- If Impact = Low and Effort = High → CUT
- If Impact = High and Effort = Low → KEEP (do this first)
- If Impact = Medium and Effort = Medium → DEFER (post-prototype)

**Format:** Matrix worksheet
**Time to complete:** 15-20 minutes

---

## Delivery Format

| Format | Contents | Rationale |
|--------|----------|-----------|
| **PDF bundle** | All worksheets, formatted and printable | Primary format. Works everywhere. |
| **Editable templates** (Markdown) | All worksheets in plain text | For people who prefer Obsidian, Notion import, or text editors |
| **Filled examples** (PDF, Tier 2 only) | Two complete worked examples | Read-only reference. Not editable. |

### What NOT to include in v1
- Video walkthroughs (high production cost, delays launch)
- Notion database templates (complex to maintain, platform-dependent)
- Canva templates (wrong audience — these are technical people)
- Prompt packs for AI (tangential to the value proposition)
- Community access (operational burden)

---

## Content Production Estimate

| Artifact | Estimated creation effort | Priority |
|----------|--------------------------|----------|
| Seed & Mandate Worksheet | 2-3 hours | P0 |
| Audience Definition Template | 1-2 hours | P0 |
| Core Mechanic Identifier | 2-3 hours | P0 |
| Core Loop Mapper | 2-3 hours | P0 |
| Constraint & Scope Checklist | 1 hour | P0 |
| Viability Scorecard | 2-3 hours | P0 |
| Design Questions Checklist | 2 hours | P0 |
| Filled Example Pack (x2) | 6-8 hours | P0 (Tier 2) |
| Secondary Mechanics Worksheet | 1-2 hours | P1 |
| Colors of Game Design Review | 3-4 hours | P1 |
| Concept Scoring Rubric | 2-3 hours | P1 |
| Module Map Starter | 2-3 hours | P1 |
| Prototype Brief Template | 1-2 hours | P1 |
| Pitch-Ready Summary Template | 1-2 hours | P1 |
| Scope Filter Matrix | 1-2 hours | P1 |

**Total estimated content creation: 30-45 hours**

P0 = required for Tier 1 launch
P1 = required for Tier 2 launch (can ship Tier 1 first if needed)

---

## Confirmed / Assumed / Constrained / Unknown

| Status | Item |
|--------|------|
| **Confirmed** | Product is self-guided worksheets and templates |
| **Confirmed** | Two tiers: Tier 1 = core toolkit, Tier 2 = full package + examples |
| **Confirmed** | Delivery as PDF + editable markdown |
| **Assumed** | Programmers prefer markdown/plain text over Notion/Canva |
| **Assumed** | Filled examples are the highest-value Tier 2 differentiator |
| **Assumed** | 30-45 hours of content creation is viable for initial launch |
| **Constrained** | No video in v1 (production cost too high for validation) |
| **Constrained** | No community, coaching, or personalized feedback |
| **Unknown** | Whether Colors of Game Design framework resonates with buyers |
| **Unknown** | Whether buyers actually complete the worksheets or just read them |
| **Unknown** | Optimal artifact count per tier (too few = thin, too many = overwhelming) |

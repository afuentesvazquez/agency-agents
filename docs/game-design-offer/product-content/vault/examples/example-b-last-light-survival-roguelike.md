---
title: "Example B · Last Light Survival Roguelike"
type: example
tier: tier-2
tags: [game-design, example, roguelike, survival, scope-problems, viability-score-25]
status: blank
---


> **Context:** 3-person team (1 programmer, 1 artist, 1 designer), 6-month timeline, Unity, PC + Console
> **Purpose:** Shows how worksheets SURFACE scope problems through the process. This is not a bad concept — it's an overscoped one. The worksheets reveal the mismatch between ambition and constraints.
> **Viability score:** 25/40 → RETHINK

---

> **HOW TO READ THIS EXAMPLE**
>
> Annotations in `> blockquote` format appear throughout. Unlike Example A (which shows a concept going well), this example shows where the design process catches real problems. Pay attention to annotations that say **"RED FLAG"** — these highlight the exact moments where the worksheets surface issues a developer might otherwise miss until it's too late.

---

## Worksheet 1: Seed & Mandate

### Working Title

```
Working title: Last Light
```

> **Annotation:** "Last Light" is evocative and on-brand for a survival game. It suggests scarcity and urgency. Fine as a working title.

---

### One-Sentence Description

```
This game is: A survival roguelike where players explore procedurally
generated dungeons to gather resources, build and defend a base camp,
and survive long enough to escape the dying world.
```

> **RED FLAG — Annotation:** Count the clauses: "explore dungeons," "gather resources," "build and defend a base," "survive long enough to escape." That's four game concepts in one sentence. When your one-liner requires "and" multiple times, you likely have multiple games in one pitch. Compare to Example A: one clause, one mechanic. This sentence describes Don't Starve + Hades + Survival.io + a narrative escape condition. The designer hasn't decided what this game *is* yet — they've listed what they want it to have.

---

### Core Fantasy

```
The player gets to feel/be: A desperate survivor who builds something
meaningful in an impossible situation — the satisfaction of watching a
fragile shelter become a fortified stronghold against the darkness, knowing
they made every decision that got it there.
```

> **Annotation:** This is actually a strong core fantasy. "Fragile shelter becoming a fortified stronghold" is specific and emotionally resonant. The problem comes later — this fantasy is *base-building* fantasy, not *roguelike* fantasy. A roguelike's fantasy is "run it back and get further each time." These are different emotional experiences. The game needs to decide which one is the core.

---

### Mandate

```
This game must:

1. Make building the base feel meaningful — the player must feel invested
   in their camp before the first threat arrives.

2. Make procedural dungeon exploration feel dangerous and rewarding —
   each expedition should feel like a genuine risk.

3. Make crafting feel like discovery — players should find unexpected
   combinations, not follow a recipe list.

4. Support PC and console — the game needs to reach the widest possible
   audience.

5. Have enough content for 15+ hours of play before repetition feels
   obvious.
```

> **RED FLAG — Annotation:** Mandate item 4 ("support PC and console") is a scope decision masquerading as a design mandate. It's not describing the player experience — it's describing a distribution goal. Console certification (Sony, Microsoft) takes 3–6 months minimum for a first-time developer, costs several thousand dollars in certification fees, and requires significant QA infrastructure. This item will cost more than any single game system to implement. It does not belong in the design mandate — it belongs in the scope checklist, and it needs honest evaluation there.
>
> Mandate item 5 ("15+ hours before repetition") is an extremely high bar for a 3-person, 6-month project. For context: Hades (a benchmark roguelike) was made by a 20-person studio over 3 years. 15 hours of non-repetitive content requires either deep procedural systems (complex engineering) or a large content library (large art/design budget). Neither is available here.

---

### Inspiration Sources

```
Source 1: Hades              What it contributes: Roguelike run structure, permanent progression, narrative integration
Source 2: Don't Starve       What it contributes: Base-building survival loop, resource management, atmosphere
Source 3: Darkest Dungeon    What it contributes: Tension/dread, party management, permanent consequences
Source 4: Valheim             What it contributes: Base-building progression, crafting depth, exploration reward
```

> **RED FLAG — Annotation:** All four inspiration sources are significant games made by teams of 5–30+ people over 2–5 years. There is nothing wrong with aspiring to this quality — but it's important to note that borrowing *systems* from these games means borrowing their *complexity*. Hades's roguelike structure took 3 years to balance. Don't Starve's survival systems involve hundreds of crafting recipes. If the design team intends to replicate what makes each of these games work, they need the resources to do so. Four games' worth of systems in one project is a scope warning, not a strength.

---

### What This Is NOT

```
This game is NOT a city builder — individual rooms/structures, not urban planning.
This game will NOT have multiplayer in v1.
This game is NOT trying to be a survival MMO.
This game will NOT have real-time action combat — it's turn-based or semi-real-time.
```

> **Annotation:** "Not a city builder" and "not an MMO" are exclusions that are already obvious — nobody reading the description would assume either. Effective "what this is NOT" statements exclude things that *are* plausible given the description. A more useful exclusion: "This game will NOT require base management across multiple zones simultaneously." Or: "This game will NOT have branching story dialogue." The current exclusions show the team hasn't pressure-tested what their concept implies.

---

## Worksheet 2: Audience Definition

### Primary Player Profile

```
This game is primarily for players who:

Play games on: PC and console (targeting both from launch)

Play games for: 1-3 hour sessions, 4-5 times per week; fans of
                roguelikes who also enjoy survival/crafting games

Their gaming skill level: Genre-experienced — has finished Hades,
                           played Don't Starve, comfortable with
                           permadeath or semi-permadeath systems

They currently play games like: Hades, Don't Starve Together,
                                 Valheim, Risk of Rain 2

What they value most in a game: Depth — systems that reveal complexity
                                 over time, where each run teaches
                                 something new
```

> **Annotation:** This is a real audience. These players exist. The concern is that these players already have *very good* games that satisfy exactly this need (Hades for roguelike, Valheim for base-building). The gap statement will need to justify why they'd play Last Light instead of — or alongside — these established titles.

---

### Player Fantasy

```
This player wants to feel: Like a strategist who reads a dangerous
                            environment and builds something that outlasts
                            the chaos. Both the thrill of the run and the
                            satisfaction of the build.

What they're not getting from current games:
Roguelikes with base-building are rare. Hades has a home base but it's
not buildable. Don't Starve has base-building but limited roguelike feel.
Most survival games aren't roguelikes. The combination isn't saturated.

What your game gives them that others don't:
The specific combination of: procedural dungeon runs that directly feed
base-building materials, and a base that directly impacts run capability.
The two systems feeding each other in a tight loop.
```

> **Annotation:** "The two systems feeding each other" is the strongest design insight in this document. A dungeon run produces resources → resources build the base → the base improves future runs → improved runs produce more resources. This is a compelling dual-loop structure. The question is whether a 3-person team can execute both loops at the quality level the audience expects from either genre individually.

---

### Gap Statement

```
My target player plays Hades and Don't Starve Together, but they still want

a roguelike where what you build between runs has physical presence in
the world — a camp you can see growing, not just stats on a screen —

and my game gives them that by making the base a tangible structure in
the world that players build with materials from runs.
```

> **Annotation:** This gap is legitimate. There is no prominent game that combines tight roguelike run structure with direct tangible base-building in a single world. The gap is real. The execution complexity is the problem, not the concept.

---

## Worksheet 3: Core Mechanic Identifier

### Core Verb

```
The player's core action is: explore (dungeon exploration)

... wait. Or is it: build (base camp construction)?

Deciding: explore. The base-building is the meta-layer. The core action
the player performs most often is exploring dungeons.
```

> **RED FLAG — Annotation:** The developer struggled to name a single core verb. This is important diagnostic information. When a team debates "is the core verb X or Y," it usually means the game has two parallel cores competing for primacy. "Explore" and "build" are both verbs — and both require their own feedback systems, their own feel, their own depth. A game where the answer to "what's the core verb?" requires deliberation has not yet decided what it fundamentally is.
>
> Compare to Example A, where "slide" was named immediately with no ambiguity.

---

### Input → Output

```
The player:
Moves a character through a procedurally generated dungeon map,
interacting with resource nodes, enemies, and points of interest.

And the game responds by:
Revealing dungeon layout, delivering resource pickups, triggering
enemy encounters (turn-based or real-time — not yet decided), and
eventually returning the player to base camp with gathered materials.

The time between input and output is approximately: 1-2 seconds
(dungeon traversal is slower than action game)
```

> **RED FLAG — Annotation:** "Turn-based or real-time — not yet decided" is a significant unresolved decision embedded in the input→output description. Turn-based and real-time combat are fundamentally different games. They require different UI, different tuning, different player skill sets, different feel. This decision affects every downstream design choice. At this stage in concept development, this should be decided — and it isn't. This is a Design Questions Checklist ✗.

---

### Fun Hypothesis

```
"This game is fun because the player gets to build something permanent
in a world that is trying to destroy it, and each run adds material
evidence of survival to the base.

and that feels good because it combines two powerful emotional drivers:
the anticipation/tension of the roguelike run and the ownership/investment
of the builder genre — giving you both at once."
```

> **Annotation:** The fun hypothesis is strong conceptually. The concern is whether a 3-person team can execute two emotionally distinct feel categories simultaneously and have both feel good. Each genre has its own craft requirements. Good roguelikes need exceptionally tuned moment-to-moment feel. Good builder/survival games need satisfying construction mechanics. Both require significant iteration.

---

## Worksheet 4: Core Loop Mapper

### Layer 1: Moment-to-Moment Loop (0–30 seconds)

```
ACTION: Move character to an adjacent dungeon tile; interact with
        a resource node or enemy

FEEDBACK: Tile revealed, resource added to inventory, or combat
          result displayed

MICRO-REWARD: Resource pickup (immediate), health change on combat
              resolution (clear), tile exploration (incremental)

Loop diagram:
[ Player moves to dungeon tile ]
         ↓
[ Tile reveals: resource / enemy / empty ]
         ↓
[ Player receives: loot / damage / information ]
         ↓
[ Player decides: continue or return to base ] ←─────────────┐
         └────────────────────────────────────────────────────→┘
```

> **Annotation:** The moment-to-moment loop works on paper but is thinner than Example A's momentum chain. In Momentum, every input generates immediate, satisfying feedback. In Last Light's dungeon loop, many tile reveals will be "empty" — which is information, but not rewarding. For this loop to feel good, the feedback on *resource pickups* must be excellent, and the decision to "continue or return" must feel meaningful each time, not routine.

---

### Layer 2: Session Loop (5–30 minutes)

```
SESSION GOAL: Explore the dungeon, gather enough resources to
              meaningfully advance the base, and return alive

SOURCE OF TENSION: Resources are heavy (inventory limit forces
                    prioritization); dungeon danger increases with depth;
                    player can die and lose the run's materials

RESOLUTION: Return to base with materials (success) or die before
             returning (failure — lose gathered materials, not permanent
             progress)

REWARD FOR COMPLETION: Gathered materials available for base building;
                        dungeon map partially revealed for future runs
```

> **RED FLAG — Annotation:** "Die and lose the run's materials" creates a tension between the roguelike genre convention (permadeath/high stakes) and the builder genre convention (persistent progress). If the player dies and loses all materials, they feel punished and can't progress on the base. If they don't lose materials on death, there are no stakes in the dungeon. This is a classic genre tension that games like Hades solved by separating meta-progression (permanent) from run-specific resources (temporary). This game needs an explicit stance on this — it's not currently defined.

---

### Layer 3: Long-Term Loop (hours → weeks)

```
PROGRESSION SYSTEM: Base upgrades unlock new dungeon areas, new
                     crafting recipes, and new character abilities.
                     Procedural dungeons are re-seeded each session.

RETENTION HOOK: The base persists between sessions — players return
                 to a home they've built, with visible evidence of progress.
                 New dungeon zones unlock as base expands.

META-GOAL: Reach the "escape event" — build and power a specific
            device that appears after sufficient base development.

COMPLETION STATE: Triggering the escape event for the first time
                   (roughly 10-15 hours of play per goal above).
```

> **Annotation:** The long-term loop is well-conceived. The base-as-persistent-home is genuinely compelling and differentiates from pure roguelikes. The concern is the "10-15 hours" completion target — this requires significant content depth across dungeon zones, crafting systems, base modules, and narrative beats. All of this needs to be designed, balanced, and tested by 3 people in 6 months.

---

## Worksheet 5: Constraint & Scope Checklist

```
[x] 2–3 people (3 total: 1 programmer, 1 artist, 1 designer)

[x] 6–12 months (targeting 6 months)

[x] $0–$1,000 (self-funded, developer day jobs)

[x] Multiple — PC (Steam) + Console (PS5/Xbox)
    ← Note: console certification typically takes 3-6 months
       and requires platform developer accounts ($99-$599/yr)
       plus QA infrastructure. For a first-time console submission,
       this is likely 4+ additional months of work.

[x] Unity (intermediate proficiency)

[x] Intermediate 2D (1 dedicated artist — character + environment)

[x] Basic (original SFX + licensed music)

[x] No multiplayer — single player only

[x] Premium (one-time purchase, $15–$20 target)

Biggest constraint that could kill this project:
Scope. Three people have approximately 720 person-days in 6 months
(3 people × 5 days/week × 24 weeks = 360 work days / 720 person-days
if they're full-time, much less if part-time). The game requires:
- Procedural dungeon generation system (2-4 weeks engineer)
- Dungeon traversal and combat system (4-8 weeks engineer)
- Base-building construction system (4-6 weeks engineer)
- Crafting system (2-4 weeks engineer)
- Art: character, enemy types, base modules, dungeon tilesets (entire artist budget)
- Level/content design: dungeon zone design, crafting recipes, balance (entire designer budget)
- Console certification and platform-specific work (8-16 weeks engineer + artist)

This does not fit in 6 months for 3 people.

The thing most likely to cause scope creep:
Combat system. "Turn-based or real-time — not yet decided" will become
a 4-week detour whenever the team commits. Whichever system is chosen
will require its own iteration budget.

What you'll cut first if you run out of time:
Console (defer to post-launch). Then: crafting complexity (reduce to
30 recipes instead of 100+). Then: dungeon zones (reduce to 3 instead
of 5). Then: base modules (reduce to 15 instead of 30).
```

> **RED FLAG — Annotation:** The scope constraint check makes the problem concrete. If we conservatively estimate: dungeon system (6 weeks) + combat (6 weeks) + base-building (6 weeks) + crafting (4 weeks) + art for all of the above (full 24 weeks for 1 artist) + console (12 weeks minimum) = this isn't a 6-month project for 3 people. It's a 12-18 month project for 5-7 people. The cut priorities below are good instincts — but they may not be enough. Console must come off the list entirely for a v1 release to be realistic.

---

## Worksheet 6: Viability Scorecard

```
Dimension 1 (Core Mechanic Clarity): 4 / 5
Notes: "Explore" is clear enough, but the dual-core nature (explore +
       build) creates some ambiguity. The core mechanic for the dungeon
       is defined. The base-building mechanic needs its own definition.

Dimension 2 (Loop Completeness): 3 / 5
Notes: Session loop has unresolved tension (death/loss mechanic not
       decided). Long-term loop is conceptually strong but requires more
       content than the team can deliver in 6 months.

Dimension 3 (Audience Specificity): 3 / 5
Notes: Audience is real and defined with good competitor awareness.
       Slight weakness: the gap statement is based on genre combination
       rather than a specific unmet need within the target player's
       experience. Needs validation.

Dimension 4 (Scope Realism): 2 / 5
Notes: 3 people, 6 months, PC + console, base-building + roguelike +
       crafting + combat system. This is significantly underestimating
       the work involved. Console alone could consume half the engineering
       budget. This is the most critical weak dimension.

Dimension 5 (Differentiation): 3 / 5
Notes: The dual-loop combination is genuinely differentiated. The
       challenge: "roguelike with base-building" is emerging as a genre
       (Nightingale, Enshrouded, others). First-mover advantage is closing.

Dimension 6 (Fantasy Strength): 4 / 5
Notes: "Fragile shelter becoming fortified stronghold" is a strong,
       emotionally specific fantasy. The roguelike fantasy layered on
       top is coherent. Both fantasies are legible in the pitch.

Dimension 7 (Risk Awareness): 2 / 5
Notes: Console scope risk identified but not mitigated. Combat system
       (turn-based vs. real-time) is an unresolved decision that will
       cost weeks. "15 hours of content" mandate is unrealistic. Top
       risk (scope vs. team) has no mitigation plan.

Dimension 8 (Build Motivation): 4 / 5
Notes: Three-person team with shared vision is a genuine asset.
       Enthusiasm is present. Long-term commitment to the concept
       evident from the depth of planning.

TOTAL: 25 / 40

Verdict: RETHINK

Action items:
1. Remove console from v1 scope entirely — revisit as a post-launch port
   target with dedicated time and budget
2. Decide: turn-based or real-time combat. One meeting, one decision,
   no going back. This unresolved question is costing design clarity.
3. Redefine the core: is this primarily a roguelike with base-building
   as the meta-layer, or primarily a base-builder with roguelike runs
   as the resource loop? The answer changes every downstream decision.
```

> **RED FLAG — Annotation:** Scope realism scoring 2/5 is the defining issue with this concept. It's not that the game is bad — the dual-loop structure is compelling and the fantasy is strong. The problem is that the team is trying to build a 12-month game in 6 months with 3 people. The "RETHINK" verdict doesn't mean "abandon this" — it means "decide what this game actually is at the resources you actually have, and build that."
>
> The simplified version of Last Light that a 3-person team could ship in 6 months: drop console entirely, pick one of the two cores (probably the roguelike run loop, with base-building as a lighter meta-layer), reduce the crafting system to 20 recipes maximum, target 8-10 hours of content instead of 15+. That game is shippable. The game as currently designed is not.

---

## Worksheet 7: Design Questions Checklist

```
✓ 1.  One-sentence description... actually has 4 clauses. (RED FLAG: review this)
✗ 2.  Gap: "roguelike with physical base" is identified but not validated
           with target players.
~ 3.  Mandate has 5 items, but item 4 (console) is a scope decision,
       not a design mandate.
✓ 4.  Four specific inspiration sources with explicit borrowings.
~ 5.  "What this is NOT" excludes obvious non-issues, not real scope risks.

✓ 6.  Player profile is specific with reference titles and habits.
✓ 7.  Three competitor games with analysis.
✓ 8.  Gap statement completes.
~ 9.  Audience values depth; game needs both genres' depth simultaneously.
✓ 10. "Not for" named: MMO players, city-builder players, multiplayer-focused.

✗ 11. Core verb debated (explore vs. build) — no clear single answer.
~ 12. Input→output defined for dungeon but not for base-building.
✓ 13. Success feel described specifically.
✓ 14. Moment-to-moment loop documented.
✗ 15. Session loop has unresolved death/loss tension (no explicit stance).
✓ 16. Long-term retention hook is base persistence.
✓ 17. Loops connect (dungeon → materials → base → better runs → dungeon).
✗ 18. No playtest criteria defined for the prototype.

✗ 19. Console in scope but certification timeline not accounted for.
✗ 20. Console platform certification requirements not researched.
✗ 21. Features (console, 15+ hours, turn-based/real-time combat TBD) do NOT
       fit within 3-person / 6-month constraints.
✓ 22. Cut order identified (console → crafting → zones → base modules).
~ 23. Art capability is adequate for the art style described — but the volume
       of art required (multiple dungeon zones + base modules + characters) is
       underestimated.
✗ 24. 6-month estimate is build time only. No testing, polish, or release time.

✗ 25. Three risks identified, but top risk (scope) has no mitigation.
✓ 26. Technical risk: procedural dungeon + base-building integration not prototyped.
✓ 27. Assumption flagged: "turn-based or real-time — either will work."
       (This is an unvalidated assumption that should be decided, not assumed.)
✗ 28. Emerging competitors (Nightingale, Enshrouded) in "roguelike + survival"
       space not analyzed. First-mover advantage may be closing.
✓ 29. Building because the concept is genuinely compelling, not for market calculation.
✓ 30. If it fails: learned that dual-genre execution requires more resources than available.

Total ✓: 15 / 30   Total ~: 6 / 30   Total ✗: 9 / 30

Open questions (✗ items):
1. One-sentence description has 4 clauses — what is the actual single core?
2. Gap statement needs player validation — is this what target players actually want?
3. Core verb: explore or build? (Blocking question — must decide before any design)
4. Session loop: what happens to gathered resources on player death?
5. Does "turn-based or real-time" need to be decided before prototyping? (Yes.)
6. Console certification timeline: what does it actually cost in time and money?
7. Do all planned features fit within 3-person/6-month constraints? (No — see scorecard)
8. Has the 6-month estimate included testing, polish, and release? (No)
9. Risk 1 (scope) has no mitigation — what is the actual mitigation plan?
```

---

> **Final note for this example:**
>
> Last Light scores 25/40 (RETHINK). The concept has real potential — the dual-loop structure is differentiated, the fantasy is strong, and the team has motivation and complementary skills. The problem is a mismatch between the scope of the vision and the resources available.
>
> The worksheets don't kill this game — they identify exactly what needs to change. A revised scope (PC only, roguelike-primary with lighter base-building meta, 8-10 hours of content, combat decision made) could easily score 33-36/40. The difference between a RETHINK and a PROTOTYPE IT here is not a better game idea — it's honest scope reduction.
>
> **The lesson this example teaches:** Ambitious concepts are not inherently bad. Ambition without honest resource accounting is. Use the Scope Realism dimension of the scorecard as a forcing function: if it scores 2/5 or below, the concept is not ready — not because the design is wrong, but because the plan doesn't match reality. That's fixable. Build the game you can actually ship.

---

*[← Example A: Momentum](example-a-momentum-platformer.md) | [Back to README](../README.md)*

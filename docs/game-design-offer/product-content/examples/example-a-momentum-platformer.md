# Filled Example A: "Momentum" — 2D Momentum Platformer

> **Context:** Solo developer, 3-month timeline, Godot 4, PC (Steam)
> **Purpose:** Shows how a simple, focused mechanical concept gets structured and scoped. A strong concept with 1–2 dimensions that need sharpening.
> **Viability score:** 32/40 → PROTOTYPE IT

---

> **HOW TO READ THIS EXAMPLE**
>
> Annotations appear in `> blockquote` format. They explain *why* each design decision was made, not just what was decided. Read them alongside the answers to understand the methodology.

---

## Worksheet 1: Seed & Mandate

### Working Title

```
Working title: Momentum
```

> **Annotation:** "Momentum" is a working title, not a final name. It names the core mechanic directly, which is useful during development — every design decision can be measured against "does this serve momentum?" It's probably too generic to ship with, but that's a launch-week problem.

---

### One-Sentence Description

```
This game is: A 2D platformer where the player's speed accumulates
through chained slides and jumps, and losing momentum means starting
the chain over.
```

> **Annotation:** Notice this sentence has one clause — no "and also." It describes the player action (chain slides and jumps), the mechanic consequence (speed accumulates), and the failure state (losing momentum resets the chain). Someone who's never played the game can picture it from this sentence. If your one-liner requires two sentences, your concept is probably two concepts.

---

### Core Fantasy

```
The player gets to feel/be: An athlete in flow state — where every
movement is effortless, perfectly timed, and builds on the last.
The brief moments of perfect momentum chain feel like the game
rewarding mastery with grace.
```

> **Annotation:** "Flow state" is a real psychological state (Csikszentmihalyi), not a marketing term. This fantasy is specific to this game because it's *earned* — the player only feels it after mastering the momentum system. Games that promise flow state but make it trivially achievable (like endless runners with autopilot) don't deliver this. The specificity matters: "athlete in flow" vs. "moving fast" are very different fantasies.

---

### Mandate

```
This game must:

1. Make every momentum chain feel physically satisfying — the player
   should want to repeat the motion even if there's no goal attached.

2. Make failure readable — when the player loses momentum, they must
   understand immediately what went wrong, not feel cheated.

3. Be completable in short sessions — each level must be playable in
   under 5 minutes, making the game accessible for 15-minute play.

4. Reward precision over speed — a slower player who chains perfectly
   should outperform a fast player who chains sloppily.

5. Feel different from traditional platformers — the movement system
   must feel like its own language, not "jump with extra steps."
```

> **Annotation:** Mandate item 4 is the most important design constraint. Many momentum games implicitly reward speed above all else, creating a game that's frustrating for players who aren't fast. By mandating that precision outranks speed, we ensure the skill expression is about *control* — which is a learnable skill — rather than reaction time alone. This also differentiates from Sonic (pure speed) and celeste (pure precision jumps) — Momentum sits at the intersection.

---

### Inspiration Sources

```
Source 1: Celeste               What it contributes: Precision feel, readable failure, screen-by-screen structure
Source 2: Towerfall (movement)  What it contributes: Momentum feel in movement, chained action feedback
Source 3: Super Meat Boy        What it contributes: Quick restart loop, physicality of movement
Source 4: Downwell              What it contributes: Compact scope, single-mechanic depth, roguelite depth from simplicity
```

> **Annotation:** Note that Downwell is on this list despite being a different genre. What we're borrowing isn't gameplay — it's the design principle of extracting maximum depth from a single constrained mechanic. Downwell has essentially one mechanic (shoot down, bounce up) but achieves remarkable variety from it. That's the aspiration for Momentum's slide-chain system.

---

### What This Is NOT

```
This game is NOT a traditional platformer with a momentum gimmick.
This game will NOT have combat, enemies, or attack mechanics.
This game is NOT trying to compete with Sonic — this is not about raw speed.
This game will NOT require the player to memorize long level sequences.
```

> **Annotation:** "Not a traditional platformer with a momentum gimmick" is a key design constraint. It means the levels must be designed *around* the momentum system — not retrofitted to it. Every level should be unplayable (or significantly worse) without momentum chaining. If a player can walk through a level and it works fine, the level is wrong, not the player.

---

## Worksheet 2: Audience Definition

### Primary Player Profile

```
This game is primarily for players who:

Play games on: PC (Steam) — comfortable with keyboard or controller,
               Steam is where they discover indie games

Play games for: 30-90 minute sessions, 3-5 times per week; prefer
                shorter sessions with high replayability over long story games

Their gaming skill level: Genre-comfortable — has finished at least
                          one precision platformer before (Celeste, Super Meat Boy,
                          or similar). Not a speedrunner. Not a casual player.

They currently play games like: Celeste, Hollow Knight (movement-focused),
                                 Neon White

What they value most in a game: Mastery — the feeling of getting better
                                 over time, with the game communicating their
                                 improvement clearly
```

> **Annotation:** "Genre-comfortable" is a specific and important qualifier. It means the player isn't intimidated by dying repeatedly (they understand that's how precision games work) but also isn't a speedrunner who will immediately optimize away any challenge. This is the "middle mass" of precision platformer players — arguably the largest addressable segment.

---

### Player Fantasy

```
This player wants to feel: Expert. Not at the game specifically, but
                            at moving — the feeling of controlling a character
                            so fluently that movement becomes expressive.

What they're not getting from current games: Celeste rewards persistence
                                              more than flow. Super Meat Boy is
                                              about reaction speed more than
                                              chained grace. This player wants
                                              a momentum game where the loop is
                                              about *maintaining* flow, not just
                                              surviving.

What your game gives them that others don't: A movement system where
                                              "doing it right" creates an obviously
                                              distinct, better-feeling experience
                                              than "doing it okay." The delta between
                                              mediocre play and skilled play is felt,
                                              not just seen in a score.
```

---

### Competitor Awareness

```
Competitor 1: Celeste
Why they play it: Best-in-class precision platformer, excellent difficulty
                  curve, emotionally resonant
What your game does differently: Celeste's movement is about individual
                                   inputs. Momentum is about sustained chains.
                                   Celeste resets the "skill expression" every screen.
                                   Momentum rewards players who maintain a state
                                   across longer sequences.

Competitor 2: Neon White
Why they play it: Speed + mastery loop, grade system, short levels for
                  replay
What your game does differently: Neon White's movement is about card
                                   selection. Momentum is about pure movement
                                   mastery with no resource layer. Simpler
                                   input space, deeper feel expression.

Competitor 3: Super Meat Boy
Why they play it: Physicality, instant restart, extreme challenge
What your game does differently: Super Meat Boy rewards reaction speed.
                                   Momentum rewards chain consistency. Different
                                   skill expression — less twitch, more rhythm.
```

---

### Gap Statement

```
My target player plays Celeste and Neon White, but they still want

a movement system where the feeling of "being in flow" is mechanically
represented and sustaining it creates visibly different, better outcomes —

and my game gives them that by making momentum chains a measurable
in-game state that the level is designed around.
```

---

### Accessibility Considerations

```
Skill floor (what does the player need to know to start?):
Basic platformer literacy — can jump, land on platforms, understands
trial-and-error. Player does NOT need prior momentum game experience.

Time commitment (how long until they get the "real" experience?):
First 10 minutes. The momentum chain feeling should be discoverable
in the tutorial level without explicit instruction.

Onboarding expectation:
Environmental — show momentum consequences through level design, not
text tutorials. First 3 levels teach by construction, not by prompting.

Who is this game NOT for?
Players who need a story to stay engaged. Players who dislike dying
repeatedly. Players who want long-session RPG or exploration games.
```

---

## Worksheet 3: Core Mechanic Identifier

### Core Verb

```
The player's core action is: slide
```

> **Annotation:** "Slide" is better than "move" or "run" because it implies continuous motion with physical properties — friction, direction, terrain interaction. It also implies the player has to commit to a direction before they know the outcome, which creates risk-reward decisions. Compare: "jump" tells you nothing about momentum. "Slide" tells you the player is in motion and that motion has weight.

---

### Input → Output

```
The player:
Holds directional input while airborne or on a surface to initiate
and maintain a slide chain. The chain is active as long as the player
doesn't interrupt it with a dead stop or missed transition.

And the game responds by:
Increasing movement speed with each successful chain continuation.
Speed is represented both numerically (small HUD indicator) and
physically (character animation becomes more fluid, particles trail,
color temperature shifts toward cool/white). Chain breaks cause
immediate deceleration and a distinct "reset" audio cue.

The time between input and output is approximately: immediate (< 1 frame)
```

> **Annotation:** The key design decision here is that chain state is communicated through *multiple channels simultaneously* — speed numbers, animation quality, particle effects, and audio. This redundancy means players receive feedback appropriate to their attention level. Casual players notice the speed. Experienced players feel the animation quality shift. Both receive the information they need.

---

### Success Feel

```
When done well, this mechanic should feel:
Liquid and inevitable — like water finding the path of least resistance.
The player's inputs feel like they're guiding rather than forcing. There
should be a sense of "I knew exactly where to go and the movement agreed."

A real-world analogy for that feeling:
Like a perfect slalom run — each gate comes at exactly the right moment,
and your adjustment is smaller because you set it up three gates earlier.
```

---

### Failure Feel

```
When done badly, this mechanic should feel:
Sticky and interrupted — a wall appearing where the player expected
open space. Not punishing, but clearly wrong — like typing and hitting
the wrong key mid-word.

What should the game communicate when the player fails?
The chain break must be clearly distinct from success. Audio cue (dull
thud vs. chain sound), visual (particles stop, character "snaps" upright),
speed indicator drops quickly. All feedback is immediate. No delayed punishment.

Is failure immediately readable? Y
```

> **Annotation:** This is where many movement games fail — they create beautiful success feedback but ambiguous failure feedback, so players don't understand what went wrong. Momentum must make the failure state as legible as the success state. A player should be able to diagnose their own error from the feedback alone, without watching a replay.

---

### Fun Hypothesis

```
"This game is fun because the player gets to experience their own
skill growth as a physical sensation — the feeling of movement becoming
more fluid over the course of an hour is something most games describe
in numbers but this one lets you feel in your hands.

and that feels good because skilled movement is one of the most
immediate and universal feelings of competence — the same reason
people practice a piano piece or a free throw rather than just
consuming the completed performance."
```

---

### Mechanic Dependencies

```
For the core mechanic to work, the game also needs:

1. A physics system that tracks chain state (what counts as "maintaining"
   vs. "breaking" the chain — requires precise definitions)

2. Level geometry designed to reward chain maintenance — flat, unbroken
   surfaces alone don't create opportunities; the terrain must create
   rhythm and decision points

3. A reset system — when the chain breaks, the player must be able to
   retry immediately (Celeste-style) without frustration-inducing loading
```

> **Annotation:** Item 2 is the most underestimated dependency. The chain mechanic's depth is almost entirely a function of level design. Bad level design makes the system feel arbitrary. Good level design makes chains feel inevitable and satisfying. This means the level designer (in this case, the solo dev) must internalize the momentum system deeply before designing levels — not design levels and add momentum as a layer later.

---

### Tuning Levers

```
Speed/timing: Chain continuation window (how long the player has between
               a successful slide ending and the next input to maintain chain).
               This is the primary difficulty lever — shorter window = harder.

Precision requirement: How forgiving the direction input must be on
                        transitions. Can the player slide at a 30-degree angle
                        and maintain chain, or must it be exactly cardinal?

Feedback intensity: Particle volume, audio mix level of chain vs. ambient
                     sounds, how aggressively the color temperature shifts.

Consequence weight: How sharply speed drops on a chain break. Sharp drop =
                    high consequence, teaches caution. Gradual drop = softer,
                    teaches experimentation.
```

---

## Worksheet 4: Core Loop Mapper

### Layer 1: Moment-to-Moment Loop (0–30 seconds)

```
ACTION: Player executes a slide input, transitions to a surface or
        platform, and continues the chain with the next input

FEEDBACK: Speed increases, particle trail lengthens, character animation
          shifts to more fluid form, chain counter increments (or breaks
          with distinct audio/visual reset cue)

MICRO-REWARD: Each successful chain continuation is its own reward —
               the audio, animation, and particle feedback creates a brief
               satisfying "click" even within a still-active chain

Loop diagram:
[ Player times slide transition correctly ]
         ↓
[ Game: speed+, particles+, audio cue ]
         ↓
[ Player feels: "I'm in it, keep going" ]
         ↓
[ Player looks for next transition point ] ←────────────────┐
         └──────────────────────────────────────────────────→┘
```

---

### Layer 2: Session Loop (5–30 minutes)

```
SESSION GOAL: Complete the level with the highest possible chain
              length (or under a time threshold for secondary challenge)

SOURCE OF TENSION: The player knows a chain break will reset their
                   progress toward a high chain count — each decision
                   to push through a difficult section risks the entire
                   current chain

RESOLUTION: Level cleared (chain count displayed on exit), or chain
            break triggers immediate retry from checkpoint (no loading)

REWARD FOR COMPLETION: Star rating (1-3 stars based on chain count
                        at completion) + fastest completion time stored.
                        Stars unlock cosmetic character trails.
```

> **Annotation:** The star rating is based on chain count, not time — this is intentional. It reinforces the design mandate that precision (maintaining chains) is valued over raw speed. A player who completes the level slowly with a perfect chain gets 3 stars. A fast player who breaks chains gets fewer. This teaches the right behavior.

---

### Layer 3: Long-Term Loop (hours → weeks)

```
PROGRESSION SYSTEM: World map with 5 worlds × 4 levels each = 20 levels.
                    Each world introduces one new terrain type that creates
                    new chain transition opportunities. Worlds unlock on
                    3-star completion of previous world's first level.

RETENTION HOOK: Star leaderboard per level (global, via Steam) + ghost
                 replay of personal best chain. Seeing a ghost that plays
                 better than you currently play is a pull to retry.

META-GOAL: Collect all 60 stars (3 per level × 20 levels). Final level
            unlocks when all other levels are 2-starred. True ending
            (brief cutscene) on full 3-star completion.

COMPLETION STATE: Full 3-star run on all 20 levels. Side completion:
                  sub-30s run on each level for a speedrun trophy.
```

---

### Loop Connection Check

```
Does the moment-to-moment action directly affect session progress?
Yes — each successful chain continuation increases the chain count
that determines the star rating at level completion.

Does completing a session directly affect long-term progression?
Yes — star ratings unlock worlds and cosmetic trails. Ghost replays
persist and appear on retries, creating visible evidence of progress.

If a player only has 5 minutes, what loop can they complete?
One level (under 5 minutes per mandate item 3). They get a star rating,
see their chain count, and have a clear target for the next attempt.

If a player has 2 hours, what long-term progress do they make?
At 5 minutes per level × 4 retries average, roughly 8 levels progressed.
That's approximately one full world cleared per 2-hour session.
```

---

## Worksheet 5: Constraint & Scope Checklist

```
[x] Solo developer

[x] 3–6 months (targeting 3 months for a first-pass playable)

[x] $0 (time only — using free Godot + free/CC0 placeholder art initially)

[x] PC (Windows / Mac via Godot export)

[x] Godot 4 (intermediate proficiency — has shipped one smaller project)

[x] Programmer art → Basic 2D (solo, will use geometric shapes + particle systems;
    will commission simple character sprite if budget allows post-prototype)

[x] Basic (free SFX assets from freesound.org; will commission music track
    if concept validates)

[x] No multiplayer — single player only

[x] Premium (one-time purchase, $8–$12 target price, Steam)

Notes on team capability:
Solo dev with intermediate Godot skill. Has shipped one game jam project
(~500 downloads). Art is the weakest capability — will use geometric
shapes as placeholder and commission 1 sprite artist if the concept
validates post-prototype.

Biggest constraint that could kill this project:
Art capability. Momentum games rely on readable character animation to
communicate chain state. If the art isn't good enough to show chain
state clearly, the feedback loop breaks. Mitigation: design the feedback
system to work primarily through particles and audio, not character animation.

The thing most likely to cause scope creep:
Level design. Good level design for a momentum game requires iteration
per level. At 20 levels × estimated 8 hours each = 160 hours of level
design alone. This is the most time-intensive part of the project.

What you'll cut first if you run out of time:
Global leaderboards (replace with local best). Speedrun trophy. Final
cutscene. Reduce to 15 levels if needed (3 worlds × 5 levels) before
cutting deeper.
```

---

## Worksheet 6: Viability Scorecard

```
Dimension 1 (Core Mechanic Clarity): 5 / 5
Notes: Core verb is "slide," input→output is clear, fun hypothesis is
       specific. Could explain it to anyone in one sentence.

Dimension 2 (Loop Completeness): 4 / 5
Notes: All three loop layers defined and connected. Long-term loop is
       slightly thin — the cosmetic unlocks may not be compelling enough
       retention. Should test whether star collection alone is sufficient.

Dimension 3 (Audience Specificity): 4 / 5
Notes: Good competitor analysis. Gap statement is specific. Slight weakness:
       haven't done primary research with actual target players — the
       audience definition is informed inference, not confirmed.

Dimension 4 (Scope Realism): 4 / 5
Notes: Solo + 3 months + 20 levels is tight but achievable if level design
       is the primary work. Art constraint is managed through particle-first
       feedback design. Cut priorities are defined.

Dimension 5 (Differentiation): 3 / 5
Notes: The differentiator (momentum chain vs. individual inputs) is real
       but may be difficult to communicate in a Steam screenshot or trailer.
       Lots of 2D platformers exist. The "why this one" answer requires
       players to play it — which is a marketing problem.

Dimension 6 (Fantasy Strength): 3 / 5
Notes: "Flow state" fantasy is compelling but abstract. A player browsing
       Steam cannot feel it from a description alone. This concept needs
       a GIF or video to communicate its value — which is solvable but
       not yet solved.

Dimension 7 (Risk Awareness): 4 / 5
Notes: Three risks identified: art capability (mitigated), level design
       time cost (mitigated by cut priority), and discoverability
       (unmitigated — needs marketing plan during validation).

Dimension 8 (Build Motivation): 5 / 5
Notes: The developer has been thinking about momentum chain games for 2
       years and finds the mechanic personally compelling. No motivation
       concern.

TOTAL: 32 / 40

Verdict: PROTOTYPE IT

Action items:
1. Build a single-room prototype that tests the chain feel before
   designing any levels — the chain mechanic must feel good in isolation
2. Find 3 Celeste/Neon White players to watch (not just describe) a
   5-minute prototype session — test whether chain state is readable
3. Draft a Steam capsule image concept before prototyping — if the
   concept can't be communicated visually without a video, reconsider
   the visual design
```

---

## Worksheet 7: Design Questions Checklist

```
✓ 1.  One-sentence description has no "and also."
✓ 2.  Gap: No mainstream platformer makes the momentum state mechanically
           represented and level-design-central.
✓ 3.  Mandate has 5 specific, testable non-negotiables.
✓ 4.  Four specific inspiration sources with explicit borrowings named.
✓ 5.  "What this is NOT" fills 4 specific exclusions.

✓ 6.  Player profile describes habits, platform, and reference titles.
✓ 7.  Three specific competitor games named with analysis.
✓ 8.  Gap statement completes without stretching.
✓ 9.  Audience values mastery; game delivers mastery through chain system.
✓ 10. "Not for" named: story-driven players, casual players, long-session RPG players.

✓ 11. Core verb is one word: "slide."
✓ 12. Input→output in two sentences.
✓ 13. Success feel described without "satisfying" or "fun."
✓ 14. Moment-to-moment loop under 30 seconds.
✓ 15. Session loop has goal (max chain), tension (chain break risk), resolution (level clear).
✓ 16. Long-term hook is ghost replay and star collection.
✓ 17. All three loops connect (chain count → stars → world unlock).
~ 18. "Chain feels good in 10-minute playtest" — defined the criteria but not yet tested.

✓ 19. Team (solo), timeline (3 months), budget ($0) all named.
✓ 20. Platform (PC/Steam) decided; no certification complexity.
~ 21. Most features achievable, but level design scope is tight.
✓ 22. Cut order defined: leaderboards → speedrun trophy → cutscene → levels.
~ 23. Art capability is weak — managed through particle-first design but not validated.
✗ 24. Testing, polish, and release time not explicitly accounted for in 3-month estimate.
       (This is a gap — the estimate is "build time" not "ship time.")

✓ 25. Three risks named: art, level design time, discoverability.
✓ 26. Technical risk (chain state physics) not yet prototyped — first prototype target.
✓ 27. Assumption flagged: "players will find chain state readable without instruction."
✓ 28. Searched Celeste/Neon White/similar — no direct chain-state game found. Differentiation holds.
✓ 29. Building because compelled by the mechanic — not because of market calculation.
✓ 30. If it fails: validated that momentum feel requires better art than currently available.

Total ✓: 26 / 30   Total ~: 3 / 30   Total ✗: 1 / 30

Open questions:
1. Does the 3-month estimate account for polish and release? (NO — needs revision.
   Realistic estimate: 3 months prototype + validation, 4-6 months to ship.)
```

> **Annotation:** Question 24 is marked ✗ (unanswered). This is a common blind spot for first-time commercial shippers — they estimate "how long to build" but not "how long to ship." Polish, bug fixing, Steam page preparation, trailer production, press kit, and launch week support typically add 4-6 weeks minimum to a small project. The developer should revise the timeline to 4-5 months if shipping is the goal, not 3.

---

> **Final note for this example:**
>
> This concept scores 32/40 (PROTOTYPE IT). The two weak dimensions — Differentiation (3/5) and Fantasy Strength (3/5) — are both communication problems, not design problems. The mechanic is defined. The loop works. The gap is that the concept is difficult to convey without experiencing it, which is a marketing and trailer challenge rather than a design fix. The right next step is a playable prototype to generate GIF/video evidence, not more planning.

---

*[← Back to README](../README.md) | [Example B: Last Light →](example-b-last-light-survival-roguelike.md)*

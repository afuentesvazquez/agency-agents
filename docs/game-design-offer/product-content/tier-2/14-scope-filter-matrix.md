# Worksheet 14: Scope Filter Matrix

> **Design question:** What should I cut?
>
> **Time to complete:** 15–20 minutes
>
> **When to use:** After Worksheets 5 (Constraints), 8 (Secondary Mechanics), and 11 (Module Map). This is a decision-support tool — it gives you a systematic way to make cut decisions rather than cutting based on attachment or impulse.

---

## Instructions

List every feature, system, or mechanic you're considering. Evaluate each one on three dimensions, then apply the decision rules to get a verdict.

Be ruthless. The point of this matrix is to force hard choices before you start building — not after you've built something you can't bear to cut.

---

## Decision Rules

Apply these rules in order. The first rule that matches gives you the verdict.

```
Rule 1: Impact = LOW and Effort = HIGH  →  CUT immediately
Rule 2: Impact = HIGH and Effort = LOW  →  KEEP (build this first)
Rule 3: Impact = HIGH and Effort = HIGH →  KEEP if core, DEFER if supporting
Rule 4: Impact = LOW and Effort = LOW   →  DEFER (easy to add later if needed)
Rule 5: Impact = MEDIUM and Effort = ANY → DEFER (post-prototype decision)
Rule 6: Player Expectation = EXPECTED and Impact = HIGH → KEEP (table stakes)
Rule 7: Player Expectation = IRRELEVANT →  CUT unless it's core
```

---

## Dimension Definitions

**Impact on Core Loop**
- HIGH — Removing this breaks or significantly weakens the core loop
- MEDIUM — Removing this noticeably reduces depth or interest
- LOW — Removing this doesn't affect the core loop

**Implementation Effort**
- HIGH — Weeks of work, significant technical or design complexity
- MEDIUM — Days of work, moderate complexity
- LOW — Hours of work, straightforward to implement

**Player Expectation**
- EXPECTED — Your target audience expects this in a game like yours (table stakes)
- SURPRISE — Players wouldn't expect this, but it adds distinct value
- IRRELEVANT — Players neither expect it nor would notice its absence

---

## The Matrix

---

**Feature 1**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 2**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 3**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 4**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 5**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 6**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 7**

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

**Feature 8** *(add more as needed)*

```
Feature / System name: _______________________________________

Impact on core loop:   [ ] HIGH   [ ] MEDIUM   [ ] LOW
Implementation effort: [ ] HIGH   [ ] MEDIUM   [ ] LOW
Player expectation:    [ ] EXPECTED   [ ] SURPRISE   [ ] IRRELEVANT

Notes: _______________________________________________________

Verdict: [ ] KEEP   [ ] DEFER   [ ] CUT
```

---

## Summary

```
Total features evaluated: ____

KEEP:   ____   (build these for the prototype)
DEFER:  ____   (revisit post-prototype)
CUT:    ____   (off the list — don't discuss, don't revisit, don't add back)
```

---

## Sanity Checks

```
1. Do your KEEP items fit within your constraints (team / time / budget)?
   [ ] Yes   [ ] No — need to cut more

2. Are there any features marked CUT that you still "really want to include"?
   [ ] No   [ ] Yes — name them: ___________________________________
   (Wanting to include a CUT feature is a warning sign. Trust the matrix.)

3. Are all player EXPECTED features (table stakes) in KEEP?
   [ ] Yes   [ ] No — which ones did you cut, and why?
   _______________________________________________________________

4. Is there a KEEP item that depends on a DEFER or CUT item to function?
   [ ] No   [ ] Yes — name the dependency:
   _______________________________________________________________
   (If yes, either promote the dependency to KEEP or demote the dependent feature to DEFER)
```

---

## Final MVP Feature List

> Copy all KEEP items here. This is your prototype / MVP feature list.

```
MVP features (from KEEP column):

1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________
4. ___________________________________________________________
5. ___________________________________________________________
6. ___________________________________________________________
```

---

## Deferred Backlog

> Copy all DEFER items here. These are the features you revisit after the prototype validates the core.

```
Post-prototype backlog (from DEFER column):

1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________
4. ___________________________________________________________
```

---

## Completion Check

- [ ] Every feature I've been designing around is listed — nothing hidden
- [ ] I applied the decision rules consistently, not based on attachment
- [ ] My MVP feature list fits within my stated constraints
- [ ] CUT items are gone — not deferred under a different name

---

*[Return to README](../README.md)*

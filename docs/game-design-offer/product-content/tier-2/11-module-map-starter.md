# Worksheet 11: Module Map Starter

> **Design question:** How do the game's systems relate to each other?
>
> **Time to complete:** 20–30 minutes
>
> **When to use:** After Worksheets 3, 4, and 8. You need a defined core mechanic, a mapped loop, and a list of secondary mechanics before you can accurately map system relationships.

---

## What a Module Map Is

A module map is a text-based diagram of your game's systems and how they connect. It shows:

- Which system is the core
- Which systems support the core
- What data or state flows between systems
- Which systems are peripheral (nice-to-have) or can be cut

This is not a technical architecture document — it's a design communication tool. The goal is to make it easy to see what depends on what, so you can make cut decisions and spot hidden complexity before you build.

---

## How to Use This Template

1. Fill in the Core System section
2. List all supporting systems
3. Map the connections between them using the arrows format
4. Add priority labels to each system
5. Review for orphaned systems (systems with no connections — likely cut candidates) and bottleneck systems (systems everything depends on — these need to be built first)

---

## Core System

> The system that contains your core mechanic. Everything else either feeds this, extends this, or is optional.

```
Core system name: ___________________________________________

What it contains:
- ___________________________________________________________
- ___________________________________________________________
- ___________________________________________________________

What state it owns (what data does this system track?):
___________________________________________________________
___________________________________________________________
```

---

## Supporting Systems

List every system in your game. For each one, describe what it does and assign a priority.

**Priority labels:**
- **CORE** — Contains or directly enables the core mechanic. Cannot be cut.
- **SUPPORTING** — Required for the game to feel complete. Should be built early.
- **PERIPHERAL** — Adds depth or polish. Can be deferred to post-prototype.
- **CUT** — Not needed for MVP. Move to backlog.

---

```
System 1
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________

System 2
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________

System 3
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________

System 4
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________

System 5
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________

System 6
Name: _____________________________  Priority: [ ] CORE  [ ] SUPPORTING  [ ] PERIPHERAL  [ ] CUT
What it does: _________________________________________________________________
What it receives from other systems: __________________________________________
What it sends to other systems: _______________________________________________
```

*(add more rows as needed)*

---

## Connection Map

Draw the relationships between your systems using arrows. Use these formats:

- `System A → System B` — A sends data/state to B
- `System A ↔ System B` — A and B exchange data/state
- `System A → System B → System C` — chain dependency

```
Connection map:

[Core System] ──────────────────────────────────────────────

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________
```

**Example format (replace with your own):**
```
[Movement System] → [Physics System] → [Camera System]
[Movement System] ↔ [Input Handler]
[Level System] → [Movement System] (sets initial position)
[Score System] ← [Movement System] (receives speed/combo data)
[UI System] ← [Score System] (displays current score)
[Save System] ↔ [Score System] (persists high scores)
```

---

## Prototype Build Order

> Based on the connection map, what order should you build systems in? Systems that everything depends on go first.

```
Build order for prototype:

1. ___________________________________________________________
   (why first: _____________________________________________)

2. ___________________________________________________________
   (why second: ___________________________________________)

3. ___________________________________________________________

4. ___________________________________________________________

5. ___________________________________________________________
```

---

## Diagnostic Review

```
Orphaned systems (listed but no connections — likely cut):
_______________________________________________________________

Bottleneck systems (everything connects to this — build first):
_______________________________________________________________

Systems with the most connections (most complex — flag for risk):
_______________________________________________________________

Systems with "CUT" priority that keep showing up in connections
(these might not actually be cuttable):
_______________________________________________________________
```

---

## Completion Check

- [ ] All systems from Worksheet 8 (Secondary Mechanics) are represented here
- [ ] Every system has at least one connection (or is marked CUT)
- [ ] Build order is based on dependencies, not on what I want to build first
- [ ] I've identified any bottleneck systems that need to be built early

---

*Next: [Worksheet 12 — Prototype Brief](12-prototype-brief.md)*

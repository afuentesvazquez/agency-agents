#!/usr/bin/env python3
"""
Apply structural polish pattern to all 15 worksheets:
- Add ### subtitle after the H1
- Add "> **What you'll have when you're done:**" to the header block
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent

WORKSHEETS = {
    "tier-1/01-seed-and-mandate.md": {
        "subtitle": "Clarify what you're building before you build anything",
        "output": "A named game concept with a clear mandate, defined inspiration sources, and explicit non-negotiables.",
        "when_use_patch": (
            "**When to use:** First. Before any other worksheet. If you can't complete this one, you don't have a concept yet — you have an idea.",
            "**When to use:** Start here — this is Worksheet 1 of 15. If you can't complete this one, you don't have a concept yet — you have an idea. That's normal. The goal of this worksheet is to find out."
        ),
    },
    "tier-1/02-audience-definition.md": {
        "subtitle": "Define your target player before you design for them",
        "output": "A specific audience profile, 3 competitor games analyzed, and a completed gap statement.",
    },
    "tier-1/03-core-mechanic-identifier.md": {
        "subtitle": "Identify the single interaction that makes or breaks the game",
        "output": "One named core verb, a defined input→output, a success/failure feel, and a fun hypothesis.",
    },
    "tier-1/04-core-loop-mapper.md": {
        "subtitle": "Map what the player does repeatedly — and why they keep doing it",
        "output": "Three connected loop layers (moment-to-moment, session, long-term) with a diagnosis of any missing or weak layer.",
    },
    "tier-1/05-constraint-and-scope-checklist.md": {
        "subtitle": "Name your real constraints before they become surprises",
        "output": "Every constraint category checked, your biggest risk named, and your cut priority order defined.",
    },
    "tier-1/06-viability-scorecard.md": {
        "subtitle": "Get an honest verdict on whether this concept is ready to build",
        "output": "A viability score out of 40 and a verdict — Prototype It, Revise First, Rethink, or Kill It — plus 3 action items.",
    },
    "tier-1/07-design-questions-checklist.md": {
        "subtitle": "Surface the design decisions you haven't made yet",
        "output": "A numbered list of open design questions (✗ items) your concept still hasn't answered before you prototype.",
    },
    "tier-2/08-secondary-mechanics-worksheet.md": {
        "subtitle": "Classify every mechanic as structural or feature creep",
        "output": "Every mechanic evaluated, a prioritized cut list (Must/Should/Nice/Cut), and any competing mechanics flagged.",
    },
    "tier-2/09-colors-of-game-design-review.md": {
        "subtitle": "Audit your concept across nine dimensions that make games compelling",
        "output": "A 9-lens design profile (Strong/Neutral/Gap per lens) with your strongest lenses, gap lenses, and one design action identified.",
    },
    "tier-2/10-concept-scoring-rubric.md": {
        "subtitle": "Grade your concept against professional design criteria",
        "output": "A weighted score out of 112.5 with a letter grade (A/B/C/F) and your three weakest sub-criteria named.",
    },
    "tier-2/11-module-map-starter.md": {
        "subtitle": "Map how your game's systems relate to each other",
        "output": "A connection map of all game systems, a priority label (CORE/SUPPORTING/PERIPHERAL/CUT) for each, and a prototype build order.",
    },
    "tier-2/12-prototype-brief.md": {
        "subtitle": "Define what to build first and how to know if it worked",
        "output": "One prototype hypothesis, a bounded scope, explicit success and failure criteria, and a playtest plan.",
    },
    "tier-2/13-pitch-ready-summary.md": {
        "subtitle": "Compress your concept into something you can share in 60 seconds",
        "output": "A complete one-page concept summary you could hand to a collaborator, publisher, or playtest recruit today.",
    },
    "tier-2/14-scope-filter-matrix.md": {
        "subtitle": "Make systematic cut decisions before you start building",
        "output": "Every feature classified as KEEP, DEFER, or CUT, plus a final MVP feature list and deferred backlog.",
    },
}

def patch_file(rel_path, config):
    path = ROOT / rel_path
    text = path.read_text()

    # 1. Add subtitle after H1
    h1_match = re.match(r'^(# .+)\n', text)
    if not h1_match:
        print(f"  SKIP (no H1): {rel_path}")
        return

    h1 = h1_match.group(0)
    subtitle_line = f'### {config["subtitle"]}\n'

    # Only add if not already present
    if subtitle_line not in text:
        text = text.replace(h1, h1 + subtitle_line + '\n', 1)
    else:
        print(f"  subtitle already present: {rel_path}")

    # 2. Add "What you'll have when done" to the header blockquote block
    # Insert after the last > **When to use:** line in the header block
    output_line = f'>\n> **What you\'ll have when you\'re done:** {config["output"]}\n'

    when_use_pattern = r'(> \*\*When to use:\*\* .+\n)'
    if '**What you\'ll have when you\'re done:**' not in text:
        text = re.sub(when_use_pattern, r'\1' + output_line, text, count=1)

    # 3. Apply any specific patches
    if "when_use_patch" in config:
        old, new = config["when_use_patch"]
        if old in text:
            text = text.replace(old, new, 1)

    path.write_text(text)
    print(f"  ✓ {rel_path}")

print("Applying structural polish to all 15 worksheets...\n")
for rel_path, config in WORKSHEETS.items():
    patch_file(rel_path, config)

print("\nDone.")

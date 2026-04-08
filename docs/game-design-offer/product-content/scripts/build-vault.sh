#!/usr/bin/env bash
# Build the Obsidian vault delivery package
# Run from: docs/game-design-offer/product-content/
# Output: vault/ directory ready to ZIP and ship

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
VAULT="$ROOT/vault"

echo "Building Obsidian vault..."

# Create vault directories
mkdir -p "$VAULT/tier-1"
mkdir -p "$VAULT/tier-2"
mkdir -p "$VAULT/examples"

# --- Frontmatter definitions ---

add_frontmatter() {
  local src="$1"
  local dst="$2"
  local title="$3"
  local type="$4"
  local tier="$5"
  local tags="$6"

  cat > "$dst" <<FRONTMATTER
---
title: "$title"
type: $type
tier: $tier
tags: [$tags]
status: blank
---

FRONTMATTER

  # Append the original content (skip the first H1 line since we have title in frontmatter)
  tail -n +2 "$src" >> "$dst"
}

# --- Tier 1 ---

add_frontmatter \
  "$ROOT/tier-1/01-seed-and-mandate.md" \
  "$VAULT/tier-1/01-seed-and-mandate.md" \
  "01 · Seed & Mandate" "worksheet" "tier-1" \
  "game-design, worksheet, seed, mandate, concept"

add_frontmatter \
  "$ROOT/tier-1/02-audience-definition.md" \
  "$VAULT/tier-1/02-audience-definition.md" \
  "02 · Audience Definition" "worksheet" "tier-1" \
  "game-design, worksheet, audience, players, positioning"

add_frontmatter \
  "$ROOT/tier-1/03-core-mechanic-identifier.md" \
  "$VAULT/tier-1/03-core-mechanic-identifier.md" \
  "03 · Core Mechanic Identifier" "worksheet" "tier-1" \
  "game-design, worksheet, mechanics, core-mechanic"

add_frontmatter \
  "$ROOT/tier-1/04-core-loop-mapper.md" \
  "$VAULT/tier-1/04-core-loop-mapper.md" \
  "04 · Core Loop Mapper" "worksheet" "tier-1" \
  "game-design, worksheet, core-loop, game-loops, retention"

add_frontmatter \
  "$ROOT/tier-1/05-constraint-and-scope-checklist.md" \
  "$VAULT/tier-1/05-constraint-and-scope-checklist.md" \
  "05 · Constraint & Scope Checklist" "worksheet" "tier-1" \
  "game-design, worksheet, scope, constraints, project-planning"

add_frontmatter \
  "$ROOT/tier-1/06-viability-scorecard.md" \
  "$VAULT/tier-1/06-viability-scorecard.md" \
  "06 · Viability Scorecard" "worksheet" "tier-1" \
  "game-design, worksheet, viability, scoring, verdict"

add_frontmatter \
  "$ROOT/tier-1/07-design-questions-checklist.md" \
  "$VAULT/tier-1/07-design-questions-checklist.md" \
  "07 · Design Questions Checklist" "worksheet" "tier-1" \
  "game-design, worksheet, checklist, design-questions"

# --- Tier 2 ---

add_frontmatter \
  "$ROOT/tier-2/08-secondary-mechanics-worksheet.md" \
  "$VAULT/tier-2/08-secondary-mechanics-worksheet.md" \
  "08 · Secondary Mechanics" "worksheet" "tier-2" \
  "game-design, worksheet, mechanics, feature-creep, systems"

add_frontmatter \
  "$ROOT/tier-2/09-colors-of-game-design-review.md" \
  "$VAULT/tier-2/09-colors-of-game-design-review.md" \
  "09 · Colors of Game Design Review" "worksheet" "tier-2" \
  "game-design, worksheet, design-lenses, audit"

add_frontmatter \
  "$ROOT/tier-2/10-concept-scoring-rubric.md" \
  "$VAULT/tier-2/10-concept-scoring-rubric.md" \
  "10 · Concept Scoring Rubric" "worksheet" "tier-2" \
  "game-design, worksheet, scoring, rubric, grading"

add_frontmatter \
  "$ROOT/tier-2/11-module-map-starter.md" \
  "$VAULT/tier-2/11-module-map-starter.md" \
  "11 · Module Map Starter" "worksheet" "tier-2" \
  "game-design, worksheet, systems-map, architecture"

add_frontmatter \
  "$ROOT/tier-2/12-prototype-brief.md" \
  "$VAULT/tier-2/12-prototype-brief.md" \
  "12 · Prototype Brief" "worksheet" "tier-2" \
  "game-design, worksheet, prototype, hypothesis, playtesting"

add_frontmatter \
  "$ROOT/tier-2/13-pitch-ready-summary.md" \
  "$VAULT/tier-2/13-pitch-ready-summary.md" \
  "13 · Pitch-Ready Summary" "worksheet" "tier-2" \
  "game-design, worksheet, pitch, summary, communication"

add_frontmatter \
  "$ROOT/tier-2/14-scope-filter-matrix.md" \
  "$VAULT/tier-2/14-scope-filter-matrix.md" \
  "14 · Scope Filter Matrix" "worksheet" "tier-2" \
  "game-design, worksheet, scope, cut-decisions, prioritization"

# --- Examples ---

add_frontmatter \
  "$ROOT/examples/example-a-momentum-platformer.md" \
  "$VAULT/examples/example-a-momentum-platformer.md" \
  "Example A · Momentum Platformer" "example" "tier-2" \
  "game-design, example, platformer, filled-example, viability-score-32"

add_frontmatter \
  "$ROOT/examples/example-b-last-light-survival-roguelike.md" \
  "$VAULT/examples/example-b-last-light-survival-roguelike.md" \
  "Example B · Last Light Survival Roguelike" "example" "tier-2" \
  "game-design, example, roguelike, survival, scope-problems, viability-score-25"

# --- Obsidian config ---

mkdir -p "$VAULT/.obsidian"

cat > "$VAULT/.obsidian/app.json" <<'JSON'
{
  "theme": "obsidian",
  "cssTheme": "",
  "translucency": false,
  "defaultViewMode": "source"
}
JSON

cat > "$VAULT/.obsidian/appearance.json" <<'JSON'
{
  "theme": "obsidian"
}
JSON

echo ""
echo "✓ Vault built at: $VAULT"
echo ""
echo "Files:"
find "$VAULT" -name "*.md" | sort | sed 's|.*/vault/||'
echo ""
echo "Next: cd $ROOT && zip -r concept-test-vault.zip vault/"

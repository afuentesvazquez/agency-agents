#!/usr/bin/env bash
# Package final delivery ZIPs for Tier 1 and Tier 2
#
# Produces:
#   concept-test-tier1.zip  — Obsidian vault (7 worksheets) + flat .md files
#   concept-test-tier2.zip  — Obsidian vault (all 15 + examples) + flat .md files
#
# Run from: docs/game-design-offer/product-content/
# Requires: bash, zip
# Optional: pandoc + a PDF engine (wkhtmltopdf or weasyprint) for PDF generation

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
VAULT="$ROOT/vault"
DIST="$ROOT/dist"

# Rebuild vault first
bash "$SCRIPT_DIR/build-vault.sh"

mkdir -p "$DIST"

# -----------------------------------------------------------------------
# TIER 1 ZIP
# Contains: vault HOME + 7 Tier 1 worksheets + flat .md copies
# -----------------------------------------------------------------------

TIER1_STAGE="$DIST/staging-tier1"
rm -rf "$TIER1_STAGE"
mkdir -p "$TIER1_STAGE/The Concept Test/vault/tier-1"
mkdir -p "$TIER1_STAGE/The Concept Test/worksheets"

# Vault files
cp "$VAULT/HOME.md" "$TIER1_STAGE/The Concept Test/vault/"
cp "$VAULT/tier-1/"*.md "$TIER1_STAGE/The Concept Test/vault/tier-1/"
cp -r "$VAULT/.obsidian" "$TIER1_STAGE/The Concept Test/vault/.obsidian"

# Flat markdown copies (for non-Obsidian users)
cp "$ROOT/tier-1/"*.md "$TIER1_STAGE/The Concept Test/worksheets/"

# README
cat > "$TIER1_STAGE/The Concept Test/README.txt" <<'README'
THE CONCEPT TEST — Game Design Worksheet Toolkit
=================================================

Thank you for your purchase.

WHAT'S INCLUDED
---------------
vault/         — Obsidian-ready vault. Open this folder in Obsidian.
worksheets/    — Flat Markdown files. Use in any text editor, Notion, or VS Code.

HOW TO USE
----------
1. Obsidian users: File > Open Vault > select the "vault" folder
2. Everyone else: open the files in "worksheets/" with any text editor

Start with: 01-seed-and-mandate.md
Work through in order. The Viability Scorecard (06) requires 01-05 first.

Total time: 1.5-2 hours for a complete concept pass.

SUPPORT
-------
Questions: hello@theconcepttest.com
Refunds: 14-day policy, no questions asked.
README

cd "$DIST/staging-tier1"
zip -r "$DIST/concept-test-tier1.zip" "The Concept Test/" -x "*.DS_Store"
echo "✓ Tier 1 ZIP: $DIST/concept-test-tier1.zip ($(du -sh "$DIST/concept-test-tier1.zip" | cut -f1))"

# -----------------------------------------------------------------------
# TIER 2 ZIP
# Contains: full vault (all tiers + examples) + all flat .md copies
# -----------------------------------------------------------------------

TIER2_STAGE="$DIST/staging-tier2"
rm -rf "$TIER2_STAGE"
mkdir -p "$TIER2_STAGE/The Concept Pack/vault/tier-1"
mkdir -p "$TIER2_STAGE/The Concept Pack/vault/tier-2"
mkdir -p "$TIER2_STAGE/The Concept Pack/vault/examples"
mkdir -p "$TIER2_STAGE/The Concept Pack/worksheets/tier-1"
mkdir -p "$TIER2_STAGE/The Concept Pack/worksheets/tier-2"
mkdir -p "$TIER2_STAGE/The Concept Pack/examples"

# Full vault
cp "$VAULT/HOME.md" "$TIER2_STAGE/The Concept Pack/vault/"
cp "$VAULT/tier-1/"*.md "$TIER2_STAGE/The Concept Pack/vault/tier-1/"
cp "$VAULT/tier-2/"*.md "$TIER2_STAGE/The Concept Pack/vault/tier-2/"
cp "$VAULT/examples/"*.md "$TIER2_STAGE/The Concept Pack/vault/examples/"
cp -r "$VAULT/.obsidian" "$TIER2_STAGE/The Concept Pack/vault/.obsidian"

# Flat markdown copies
cp "$ROOT/tier-1/"*.md "$TIER2_STAGE/The Concept Pack/worksheets/tier-1/"
cp "$ROOT/tier-2/"*.md "$TIER2_STAGE/The Concept Pack/worksheets/tier-2/"
cp "$ROOT/examples/"*.md "$TIER2_STAGE/The Concept Pack/examples/"

# README
cat > "$TIER2_STAGE/The Concept Pack/README.txt" <<'README'
THE CONCEPT PACK — Game Design Worksheet Toolkit
=================================================

Thank you for your purchase.

WHAT'S INCLUDED
---------------
vault/              — Obsidian-ready vault. Open this folder in Obsidian.
  tier-1/           — 7 core worksheets
  tier-2/           — 7 advanced frameworks
  examples/         — 2 fully annotated filled examples
worksheets/         — Flat Markdown files for all worksheets
examples/           — Flat Markdown files for the filled examples

HOW TO USE
----------
1. Obsidian users: File > Open Vault > select the "vault" folder
2. Everyone else: open any file in "worksheets/" with a text editor

START HERE: Read examples/ first — they show what a complete concept
package looks like. Then work through worksheets/tier-1/ in order.

READING THE EXAMPLES
--------------------
• Example A (Momentum platformer): score 32/40 → PROTOTYPE IT
  Shows a strong concept getting structured correctly.
• Example B (Last Light roguelike): score 25/40 → RETHINK
  Shows how the worksheets reveal scope problems.

Total time: 2-3 hours for a complete Tier 2 pass.

SUPPORT
-------
Questions: hello@theconcepttest.com
Refunds: 14-day policy, no questions asked.
README

cd "$DIST/staging-tier2"
zip -r "$DIST/concept-test-tier2.zip" "The Concept Pack/" -x "*.DS_Store"
echo "✓ Tier 2 ZIP: $DIST/concept-test-tier2.zip ($(du -sh "$DIST/concept-test-tier2.zip" | cut -f1))"

# Cleanup staging
rm -rf "$DIST/staging-tier1" "$DIST/staging-tier2"

echo ""
echo "Done. Upload these to your CDN/Vercel Blob:"
echo "  $DIST/concept-test-tier1.zip"
echo "  $DIST/concept-test-tier2.zip"
echo ""
echo "Then set in .env.local:"
echo "  NEXT_PUBLIC_TIER1_DOWNLOAD_URL=<url-to-concept-test-tier1.zip>"
echo "  NEXT_PUBLIC_TIER2_DOWNLOAD_URL=<url-to-concept-test-tier2.zip>"

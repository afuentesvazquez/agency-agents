"use client";

const tier1Artifacts = [
  {
    num: "01",
    name: "Seed & Mandate",
    desc: "Define what this game is, why it needs to exist, and what it must deliver.",
  },
  {
    num: "02",
    name: "Audience Definition",
    desc: "Who plays this, what fantasy it serves, and what it competes with.",
  },
  {
    num: "03",
    name: "Core Mechanic Identifier",
    desc: "Isolate the single interaction that must feel good for the game to work.",
  },
  {
    num: "04",
    name: "Core Loop Mapper",
    desc: "Define moment-to-moment, session, and long-term loops — and check they connect.",
  },
  {
    num: "05",
    name: "Constraint & Scope Checklist",
    desc: "Team, timeline, budget, platform. All explicit. No optimistic estimates.",
  },
  {
    num: "06",
    name: "Viability Scorecard",
    desc: "Score your concept across 8 dimensions. Get a blunt verdict: prototype, revise, or kill.",
  },
  {
    num: "07",
    name: "Design Questions Checklist",
    desc: "30 questions your concept must answer before you write a line of code.",
  },
];

const tier2Extra = [
  {
    name: "2 Filled Example Packs",
    desc: "Two complete worked concepts — a platformer and a survival roguelike — showing every worksheet filled with real design decisions and teaching annotations.",
    highlight: true,
  },
  {
    name: "Secondary Mechanics Worksheet",
    desc: "Classify what supports the core versus what's feature creep.",
  },
  {
    name: "Colors of Game Design Review",
    desc: "Audit your concept against 9 design lenses: Structure, Fantasy, Purpose, Progress, Reward, Toy, Struggle, Tension, Risk.",
  },
  {
    name: "Concept Scoring Rubric",
    desc: "Extended weighted scorecard with sub-criteria, comparative notes, and an A/B/C/F grade.",
  },
  {
    name: "Module Map Starter",
    desc: "Map how your game's systems relate to each other and determine build order.",
  },
  {
    name: "Prototype Brief Template",
    desc: "Define what to build first, the success hypothesis, and how to know if it worked.",
  },
  {
    name: "Pitch-Ready Summary",
    desc: "One-page structured summary for sharing your concept in 60 seconds.",
  },
  {
    name: "Scope Filter Matrix",
    desc: "Systematic framework for deciding what to cut. Keep, defer, or kill — with decision rules.",
  },
];

export default function WhatYouGet() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid #1E1E2A" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="mb-6 text-xs font-medium tracking-widest uppercase"
          style={{
            color: "#4A6274",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          What&apos;s Included
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          A structured methodology to pressure-test your concept.
        </h2>

        <p className="mb-12 text-base leading-relaxed" style={{ color: "#8A8A96" }}>
          Not a course. Not a GDD template. Not &ldquo;use AI to make your game.&rdquo; A
          sequenced toolkit of worksheets and frameworks that force your concept
          through the questions it can&apos;t afford to skip.
        </p>

        {/* Tier 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-medium tracking-widest uppercase px-2 py-1 rounded"
              style={{
                color: "#C89B3C",
                border: "1px solid #C89B3C33",
                backgroundColor: "#C89B3C0D",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Tier 1 · The Concept Test · $19
            </span>
          </div>

          <div className="space-y-3">
            {tier1Artifacts.map((a) => (
              <div
                key={a.num}
                className="flex gap-4 p-4 rounded"
                style={{
                  backgroundColor: "#12121A",
                  border: "1px solid #1E1E2A",
                }}
              >
                <span
                  className="mt-0.5 flex-shrink-0 text-xs font-medium"
                  style={{
                    color: "#C89B3C",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {a.num}
                </span>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      color: "#E8E8ED",
                      fontFamily: "var(--font-heading), sans-serif",
                    }}
                  >
                    {a.name}
                  </p>
                  <p className="text-sm" style={{ color: "#8A8A96" }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 additions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-medium tracking-widest uppercase px-2 py-1 rounded"
              style={{
                color: "#E8E8ED",
                border: "1px solid #C89B3C",
                backgroundColor: "#C89B3C1A",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Tier 2 · The Concept Pack · $39
            </span>
            <span className="text-xs" style={{ color: "#8A8A96" }}>
              Everything above, plus:
            </span>
          </div>

          <div className="space-y-3">
            {tier2Extra.map((a, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded"
                style={{
                  backgroundColor: a.highlight ? "#16161F" : "#12121A",
                  border: a.highlight ? "1px solid #C89B3C33" : "1px solid #1E1E2A",
                }}
              >
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      color: "#E8E8ED",
                      fontFamily: "var(--font-heading), sans-serif",
                    }}
                  >
                    {a.name}
                  </p>
                  <p className="text-sm" style={{ color: "#8A8A96" }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA — appears after strongest value argument */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-7 py-4 rounded text-sm font-semibold transition-all active:scale-95"
            style={{
              backgroundColor: "#C89B3C",
              color: "#0A0A0F",
              fontFamily: "var(--font-heading), sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4A84A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B3C")}
          >
            Get the Concept Pack — $39
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium transition-all"
            style={{ color: "#8A8A96" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E8ED")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A96")}
          >
            Or start with the Concept Test — $19 →
          </a>
        </div>
      </div>
    </section>
  );
}

const TIER1_URL = process.env.NEXT_PUBLIC_STRIPE_TIER1_URL ?? "#";
const TIER2_URL = process.env.NEXT_PUBLIC_STRIPE_TIER2_URL ?? "#";

const tier1Items = [
  "Seed & Mandate Worksheet",
  "Audience Definition Template",
  "Core Mechanic Identifier",
  "Core Loop Mapper",
  "Constraint & Scope Checklist",
  "Viability Scorecard (8 dimensions)",
  "30-Question Design Checklist",
];

const tier2Items = [
  "Everything in The Concept Test",
  "2 fully-annotated filled examples",
  "Secondary Mechanics Worksheet",
  "Colors of Game Design Review",
  "Concept Scoring Rubric",
  "Module Map Starter",
  "Prototype Brief Template",
  "Pitch-Ready Summary Template",
  "Scope Filter Matrix",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid #1E1E2A" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="mb-6 text-xs font-medium tracking-widest uppercase text-center"
          style={{
            color: "#4A6274",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          Pricing
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-center"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Choose your depth.
        </h2>

        <p className="mb-14 text-base text-center" style={{ color: "#8A8A96" }}>
          One-time purchase. Instant download. No subscription.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tier 1 */}
          <div
            className="flex flex-col p-8 rounded"
            style={{
              backgroundColor: "#12121A",
              border: "1px solid #1E1E2A",
            }}
          >
            <p
              className="mb-2 text-xs font-medium tracking-widest uppercase"
              style={{
                color: "#8A8A96",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              The Concept Test
            </p>
            <p
              className="text-xs mb-6"
              style={{ color: "#4A6274" }}
            >
              For solo creators testing an idea.
            </p>

            <div className="mb-8">
              <span
                className="text-4xl font-bold"
                style={{
                  color: "#E8E8ED",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                $19
              </span>
              <span className="ml-2 text-sm" style={{ color: "#4A6274" }}>
                one-time
              </span>
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {tier1Items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: "#4A6274" }}>
                    —
                  </span>
                  <span className="text-sm" style={{ color: "#8A8A96" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={TIER1_URL}
              className="block w-full text-center py-3.5 px-6 rounded text-sm font-semibold transition-all"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #1E1E2A",
                color: "#E8E8ED",
                fontFamily: "var(--font-heading), sans-serif",
              }}
            >
              Get the Concept Test
            </a>
          </div>

          {/* Tier 2 — highlighted */}
          <div
            className="flex flex-col p-8 rounded relative"
            style={{
              backgroundColor: "#16161F",
              border: "1px solid #C89B3C",
            }}
          >
            {/* Badge */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-xs font-medium tracking-widest uppercase"
              style={{
                backgroundColor: "#C89B3C",
                color: "#0A0A0F",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Most Complete
            </div>

            <p
              className="mb-2 text-xs font-medium tracking-widest uppercase"
              style={{
                color: "#C89B3C",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              The Concept Pack
            </p>
            <p
              className="text-xs mb-6"
              style={{ color: "#8A8A96" }}
            >
              For teams and serious builders ready to prototype or pitch.
            </p>

            <div className="mb-8">
              <span
                className="text-4xl font-bold"
                style={{
                  color: "#E8E8ED",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                $39
              </span>
              <span className="ml-2 text-sm" style={{ color: "#4A6274" }}>
                one-time
              </span>
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {tier2Items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="text-xs mt-0.5 flex-shrink-0"
                    style={{ color: i === 0 ? "#4A6274" : "#C89B3C" }}
                  >
                    {i === 0 ? "—" : "✓"}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: i === 0 ? "#4A6274" : "#8A8A96" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={TIER2_URL}
              className="block w-full text-center py-3.5 px-6 rounded text-sm font-semibold transition-all"
              style={{
                backgroundColor: "#C89B3C",
                color: "#0A0A0F",
                fontFamily: "var(--font-heading), sans-serif",
              }}
            >
              Get the Concept Pack
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-center" style={{ color: "#4A6274" }}>
          PDF + editable Markdown · Instant delivery · 14-day refund policy
        </p>
      </div>
    </section>
  );
}

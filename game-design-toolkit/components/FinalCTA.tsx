"use client";

const TIER1_URL = process.env.NEXT_PUBLIC_STRIPE_TIER1_URL ?? "#pricing";
const TIER2_URL = process.env.NEXT_PUBLIC_STRIPE_TIER2_URL ?? "#pricing";

export default function FinalCTA() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid #1E1E2A" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Your concept is a hypothesis.
          <br />
          Run the test.
        </h2>

        <p className="mb-10 text-base leading-relaxed" style={{ color: "#8A8A96" }}>
          Every month you build without concept clarity is a month you may be
          building the wrong thing. The Concept Test takes a weekend. The cost of not doing it
          is measured in months.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={TIER2_URL}
            className="inline-flex items-center justify-center px-7 py-4 rounded text-sm font-semibold transition-all"
            style={{
              backgroundColor: "#C89B3C",
              color: "#0A0A0F",
              fontFamily: "var(--font-heading), sans-serif",
            }}
          >
            Get the Full Pack — $39
          </a>
          <a
            href={TIER1_URL}
            className="inline-flex items-center justify-center px-7 py-4 rounded text-sm font-medium transition-all"
            style={{
              backgroundColor: "transparent",
              color: "#E8E8ED",
              border: "1px solid #1E1E2A",
              fontFamily: "var(--font-heading), sans-serif",
            }}
          >
            Start with the Concept Test — $19
          </a>
        </div>

        <p className="mt-8 text-xs" style={{ color: "#4A6274" }}>
          At $19, if it saves you one week of building in the wrong direction,
          it&apos;s paid for itself.
        </p>
      </div>
    </section>
  );
}

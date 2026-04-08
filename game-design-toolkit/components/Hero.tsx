import Link from "next/link";

const TIER1_URL = process.env.NEXT_PUBLIC_STRIPE_TIER1_URL ?? "#pricing";
const TIER2_URL = process.env.NEXT_PUBLIC_STRIPE_TIER2_URL ?? "#pricing";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E1E2A 1px, transparent 1px), linear-gradient(90deg, #1E1E2A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="mb-6 text-xs font-medium tracking-widest uppercase"
          style={{
            color: "#C89B3C",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          Game Design Toolkit
        </p>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Your game idea is a hypothesis.
          <br />
          <span style={{ color: "#C89B3C" }}>Test it.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "#8A8A96" }}
        >
          A structured design toolkit that pressure-tests your game concept —
          core mechanic, core loop, audience, scope, and risks — before you
          commit months to the wrong build.
        </p>

        {/* CTAs */}
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

        {/* Trust line */}
        <p className="mt-8 text-xs" style={{ color: "#4A6274" }}>
          Instant delivery · PDF + Markdown · 14-day refund policy
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, #1E1E2A, transparent)",
          }}
        />
      </div>
    </section>
  );
}

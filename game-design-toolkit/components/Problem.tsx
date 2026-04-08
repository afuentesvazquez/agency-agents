const questions = [
  "What is the core mechanic — the one interaction that must feel good for the game to work?",
  "What is the core loop — what does the player do repeatedly, and why do they keep doing it?",
  "Who exactly is this game for — and what games are they already playing?",
  "What should be cut to keep scope realistic for your actual team and timeline?",
  "Is this concept actually worth prototyping, or are you chasing a feeling?",
];

export default function Problem() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <p
          className="mb-6 text-xs font-medium tracking-widest uppercase"
          style={{
            color: "#4A6274",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          The Problem
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          The concept phase is where most indie games silently fail.
        </h2>

        <div className="space-y-5 text-base leading-relaxed" style={{ color: "#8A8A96" }}>
          <p>
            You have a game idea. Maybe a great one. But right now it lives in
            your head as a collection of vibes, references, and half-formed
            mechanics.
          </p>
          <p>
            You can describe it to friends. You might have a mood board. Maybe
            a prototype that doesn&apos;t quite capture the vision yet.
          </p>
          <p
            className="font-medium"
            style={{ color: "#E8E8ED" }}
          >
            But if someone asked you these questions, you&apos;d hesitate:
          </p>
        </div>

        {/* Questions */}
        <ul className="mt-8 space-y-4">
          {questions.map((q, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span
                className="mt-1 flex-shrink-0 text-xs font-medium"
                style={{
                  color: "#C89B3C",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: "#8A8A96" }}>
                {q}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="mt-10 pt-10 space-y-5 text-base leading-relaxed"
          style={{
            color: "#8A8A96",
            borderTop: "1px solid #1E1E2A",
          }}
        >
          <p>
            Most indie games don&apos;t fail in production. They fail in concept
            — when the idea was too vague, the scope too ambitious, or the core
            mechanic too weak to support a full game.
          </p>
          <p style={{ color: "#E8E8ED" }}>
            The build just makes the failure expensive.
          </p>
        </div>
      </div>
    </section>
  );
}

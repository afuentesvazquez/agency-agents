const steps = [
  {
    num: "01",
    title: "Define the Seed",
    desc: "What is this game? Why does it exist? What must it deliver? You start by forcing clarity on the fundamentals before anything else.",
  },
  {
    num: "02",
    title: "Know Your Player",
    desc: "Who is this for? What fantasy does it serve? What games is your player already comparing this to? You define the audience before designing for them.",
  },
  {
    num: "03",
    title: "Isolate the Core",
    desc: "What is the core mechanic? What is the core loop? What must feel good? You find the single thing that makes or breaks the game.",
  },
  {
    num: "04",
    title: "Set the Constraints",
    desc: "How big is this? What's the team, timeline, budget? What should be cut? You scope the concept to your actual reality — not the optimistic version.",
  },
  {
    num: "05",
    title: "Score the Verdict",
    desc: "Is this worth prototyping? The Viability Scorecard gives you a structured, honest answer across 8 dimensions. Prototype, revise, rethink, or kill.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid #1E1E2A" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <p
          className="mb-6 text-xs font-medium tracking-widest uppercase"
          style={{
            color: "#4A6274",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          The Process
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Five phases. One weekend. A clear concept.
        </h2>

        <p className="mb-14 text-base" style={{ color: "#8A8A96" }}>
          Work through the worksheets in sequence. Each phase builds on the last.
          By the end, you have a scored, scoped concept — not a vague pitch.
        </p>

        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-[19px] top-8 bottom-8 w-px"
            style={{ backgroundColor: "#1E1E2A" }}
          />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                {/* Step number circle */}
                <div
                  className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#12121A",
                    border: "1px solid #1E1E2A",
                    color: "#C89B3C",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {step.num}
                </div>

                <div className="pt-1.5 pb-2">
                  <h3
                    className="text-base font-semibold mb-1.5"
                    style={{
                      color: "#E8E8ED",
                      fontFamily: "var(--font-heading), sans-serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A8A96" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

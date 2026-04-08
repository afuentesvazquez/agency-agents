const forYou = [
  "You're a programmer with a game idea and want to validate the design before writing code",
  "You're a solo creator with a strong vision but no structured concept documentation",
  "You're leading a small team and need alignment artifacts everyone can reference",
  "You've started and abandoned game projects because the concept wasn't clear enough",
  "You want to go from \"I have this idea\" to a structured concept in a weekend",
];

const notForYou = [
  "You're looking for a full game design education",
  "You want someone to generate game ideas for you",
  "You need production management or project planning tools",
  "You're an experienced game designer with an established methodology",
  "You want code, art, or technical implementation help",
];

export default function WhoItsFor() {
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
          Who It&apos;s For
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-12"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Built for people with a game idea and no design structure.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For you */}
          <div>
            <p
              className="mb-5 text-xs font-medium tracking-widest uppercase"
              style={{
                color: "#C89B3C",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              This is for you if
            </p>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1 flex-shrink-0 text-xs"
                    style={{ color: "#C89B3C" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#8A8A96" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div>
            <p
              className="mb-5 text-xs font-medium tracking-widest uppercase"
              style={{
                color: "#4A6274",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              This is NOT for you if
            </p>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1 flex-shrink-0 text-xs"
                    style={{ color: "#4A6274" }}
                  >
                    ✕
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#4A6274" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

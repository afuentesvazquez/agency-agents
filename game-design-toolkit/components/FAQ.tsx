"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need game design experience?",
    a: "No. The toolkit is designed for people who understand games but haven't formalized their design process. If you can describe why a game is fun, you can use this.",
  },
  {
    q: "What format is the product?",
    a: "PDF worksheets (designed, printable) plus editable Markdown templates you can use in any text editor, Obsidian, or import into Notion.",
  },
  {
    q: "Is this a course?",
    a: "No. There are no lessons, no curriculum, no videos. It's a self-guided toolkit you apply directly to your own game concept.",
  },
  {
    q: "Will this work for my genre?",
    a: "Yes. The methodology is genre-agnostic. Core loops, mechanics, audience definition, and scope filtering apply to platformers, RPGs, shooters, puzzle games, simulations — any genre. The filled examples in Tier 2 demonstrate two different genres.",
  },
  {
    q: "What if I don't have a specific game idea yet?",
    a: "This product works best when you already have at least a rough idea. It structures and pressure-tests an existing concept — it doesn't generate ideas.",
  },
  {
    q: "Can't I find this information for free?",
    a: "You can find individual game design frameworks online. What you can't find is a structured, sequenced methodology that takes you from raw idea to scored, scoped, pitch-ready concept in one package. The value is in the structure, sequence, and pressure-testing — not the individual concepts.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "14-day refund policy. If the toolkit doesn't help you structure your concept, request a refund — no hoops.",
  },
  {
    q: "How do I get the product after purchase?",
    a: "Immediately. After checkout you'll land on a download page with direct links to all files.",
  },
  {
    q: "What's the difference between Tier 1 and Tier 2?",
    a: "Tier 1 gives you the 7 core worksheets to test your concept. Tier 2 adds 2 fully-annotated filled examples (so you can see what a complete concept package looks like), plus 7 advanced frameworks for deeper analysis, system mapping, and prototype planning.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #1E1E2A" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span
          className="text-sm font-medium leading-snug"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 text-lg leading-none"
          style={{ color: "#4A6274" }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{ color: "#8A8A96" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
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
          FAQ
        </p>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-12"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Questions.
        </h2>

        <div style={{ borderTop: "1px solid #1E1E2A" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

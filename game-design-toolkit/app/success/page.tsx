import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download — The Concept Test",
  description: "Your download is ready.",
  robots: "noindex",
};

const TIER2_CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_TIER2_URL ?? "/#pricing";
const TIER1_ZIP_URL = process.env.NEXT_PUBLIC_TIER1_DOWNLOAD_URL ?? "#";
const TIER2_ZIP_URL = process.env.NEXT_PUBLIC_TIER2_DOWNLOAD_URL ?? "#";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { tier?: string };
}) {
  const tier = searchParams?.tier === "2" ? 2 : 1;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div className="max-w-lg w-full">
        {/* Check mark */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-8 mx-auto"
          style={{ backgroundColor: "#C89B3C1A", border: "1px solid #C89B3C33" }}
        >
          <span style={{ color: "#C89B3C", fontSize: "22px" }}>✓</span>
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{
            color: "#E8E8ED",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          Payment confirmed.
        </h1>

        <p
          className="text-base text-center mb-12 leading-relaxed"
          style={{ color: "#8A8A96" }}
        >
          Your{" "}
          <span style={{ color: "#E8E8ED" }}>
            {tier === 2 ? "Concept Pack" : "Concept Test"}
          </span>{" "}
          is ready to download. A receipt has been sent to your email.
        </p>

        {/* Download box */}
        <div
          className="p-8 rounded mb-8"
          style={{
            backgroundColor: "#12121A",
            border: "1px solid #1E1E2A",
          }}
        >
          <p
            className="mb-2 text-xs font-medium tracking-widest uppercase"
            style={{
              color: "#4A6274",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {tier === 2 ? "The Concept Pack" : "The Concept Test"}
          </p>

          <p className="text-sm mb-6" style={{ color: "#8A8A96" }}>
            {tier === 2
              ? "15 worksheets + 2 filled examples · PDF + Markdown"
              : "7 worksheets · PDF + Markdown"}
          </p>

          <a
            href={tier === 2 ? TIER2_ZIP_URL : TIER1_ZIP_URL}
            download
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded text-sm font-semibold transition-all"
            style={{
              backgroundColor: "#C89B3C",
              color: "#0A0A0F",
              fontFamily: "var(--font-heading), sans-serif",
            }}
          >
            <span>↓</span>
            Download ZIP
          </a>
        </div>

        {/* If tier 1, show upgrade nudge */}
        {tier === 1 && (
          <div
            className="p-6 rounded mb-8"
            style={{
              backgroundColor: "#12121A",
              border: "1px solid #C89B3C33",
            }}
          >
            <p
              className="text-xs font-medium tracking-widest uppercase mb-2"
              style={{
                color: "#C89B3C",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Want the full pack?
            </p>
            <p className="text-sm mb-4" style={{ color: "#8A8A96" }}>
              Upgrade to The Concept Pack to get 2 fully-annotated filled
              examples, 7 advanced frameworks, and the Scope Filter Matrix.
            </p>
            <a
              href={TIER2_CHECKOUT_URL}
              className="text-sm font-medium"
              style={{ color: "#C89B3C" }}
            >
              Upgrade for $20 more →
            </a>
          </div>
        )}

        {/* Next steps */}
        <div
          className="p-6 rounded"
          style={{
            backgroundColor: "#12121A",
            border: "1px solid #1E1E2A",
          }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{
              color: "#4A6274",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            Getting Started
          </p>
          <ol className="space-y-3">
            {[
              "Unzip the archive — you'll find PDF and Markdown versions of every worksheet.",
              "Start with Worksheet 01 (Seed & Mandate). Work through them in order.",
              "Use the PDFs for printing or annotation. Use the Markdown files if you prefer a text editor or Obsidian.",
              tier === 2
                ? "Read the filled examples first — they show what a complete concept package looks like."
                : "Consider upgrading to Tier 2 for filled examples that show the methodology in action.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 text-xs font-medium mt-0.5"
                  style={{
                    color: "#C89B3C",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#8A8A96" }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 text-xs text-center" style={{ color: "#4A6274" }}>
          Questions?{" "}
          <a
            href="mailto:hello@theconcepttest.com"
            className="hover:underline"
            style={{ color: "#8A8A96" }}
          >
            hello@theconcepttest.com
          </a>
        </p>
      </div>
    </main>
  );
}

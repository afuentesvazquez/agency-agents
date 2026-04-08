export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ backgroundColor: "#0A0A0F", borderTop: "1px solid #1E1E2A" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p
            className="text-xs font-medium tracking-widest uppercase mb-1"
            style={{
              color: "#E8E8ED",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            The Concept Test
          </p>
          <p className="text-xs" style={{ color: "#4A6274" }}>
            A structured design toolkit for game concept clarity.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs" style={{ color: "#4A6274" }}>
            One-time purchase · Instant delivery · 14-day refund
          </span>
        </div>
      </div>

      <div
        className="max-w-3xl mx-auto mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
        style={{ borderTop: "1px solid #1E1E2A" }}
      >
        <p className="text-xs" style={{ color: "#4A6274" }}>
          © {new Date().getFullYear()} The Concept Test
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@theconcepttest.com"
            className="text-xs hover:underline"
            style={{ color: "#4A6274" }}
          >
            Contact
          </a>
          <a
            href="/terms"
            className="text-xs hover:underline"
            style={{ color: "#4A6274" }}
          >
            Terms
          </a>
          <a
            href="/refund"
            className="text-xs hover:underline"
            style={{ color: "#4A6274" }}
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatYouGet from "@/components/WhatYouGet";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A0F" }}>
      <Hero />
      <Problem />
      <WhatYouGet />
      <WhoItsFor />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

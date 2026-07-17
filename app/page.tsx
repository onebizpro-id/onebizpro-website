import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemFraming } from "@/components/landing/problem-framing";
import { Modules } from "@/components/landing/modules";
import { Pillars } from "@/components/landing/pillars";
import { Differentiator } from "@/components/landing/differentiator";
import { ClosingCta } from "@/components/landing/closing-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemFraming />
        <Modules />
        <Pillars />
        <Differentiator />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

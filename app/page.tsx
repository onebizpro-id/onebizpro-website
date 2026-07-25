import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BusinessProblems } from "@/components/landing/business-problems";
import { BusinessSolutions } from "@/components/landing/business-solutions";
import { SocialProof } from "@/components/landing/social-proof";
import { BusinessCheckup } from "@/components/landing/business-checkup";
import { SolutionPackages } from "@/components/landing/solution-packages";
import { AiPositioning } from "@/components/landing/ai-positioning";
import { RoadmapTeaser } from "@/components/landing/roadmap-teaser";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BusinessProblems />
        <BusinessSolutions />
        <SocialProof />
        <BusinessCheckup />
        <SolutionPackages />
        <AiPositioning />
        <RoadmapTeaser />
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BusinessProblems } from "@/components/landing/business-problems";
import { BusinessSolutions } from "@/components/landing/business-solutions";
import { SocialProof } from "@/components/landing/social-proof";
import { AiPositioning } from "@/components/landing/ai-positioning";
import { ClosingCta } from "@/components/landing/closing-cta";
import { Footer } from "@/components/landing/footer";

// Business Checkup dan Solution Packages (Harga) sengaja TIDAK di-embed di homepage --
// masing-masing sudah punya halaman sendiri (/business-checkup, /harga), sesuai pola
// yang sudah pernah diputuskan sebelumnya (form dan harga dipisah dari homepage jadi
// halaman tersendiri). CTA di bawah cukup mengarahkan ke halaman itu.
//
// RoadmapTeaser sengaja tidak dipasang dulu -- arah AI roadmap (AI Forecast, AI Alert,
// dst.) dianggap Founder terlalu terbuka untuk dilihat kompetitor. Halaman /roadmap
// sendiri masih ada di kode (tidak dihapus), cuma tidak ditautkan dari mana pun.
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BusinessProblems />
        <BusinessSolutions />
        <SocialProof />
        <AiPositioning />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

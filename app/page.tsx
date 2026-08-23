import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BusinessProblems } from "@/components/landing/business-problems";
import { BusinessSolutions } from "@/components/landing/business-solutions";
import { Modules } from "@/components/landing/modules";
import { SocialProof } from "@/components/landing/social-proof";
import { AiPositioning } from "@/components/landing/ai-positioning";
import { WhyWeExistTeaser } from "@/components/landing/why-we-exist-teaser";
import { ClosingCta } from "@/components/landing/closing-cta";
import { Footer } from "@/components/landing/footer";

// Business Checkup dan Solution Packages (Harga) sengaja TIDAK di-embed di homepage --
// masing-masing sudah punya halaman sendiri (/business-checkup, /harga), sesuai pola
// yang sudah pernah diputuskan sebelumnya (form dan harga dipisah dari homepage jadi
// halaman tersendiri). CTA di bawah cukup mengarahkan ke halaman itu.
//
// Halaman /roadmap dihapus sepenuhnya (bukan cuma di-unlink) -- arah AI roadmap (AI
// Forecast, AI Alert, dst.) dianggap Founder terlalu terbuka untuk dilihat kompetitor,
// dan URL yang tidak ditautkan pun tetap bisa diakses langsung/ke-index mesin pencari.
//
// Modules dipasang lagi 2026-08 (sempat jadi dead code sejak pivot ICP sebelumnya) --
// grid-nya baru diperbarui supaya mencakup modul Pemasaran/Prospek/Manajemen Proyek
// yang belum pernah tercermin di homepage, bagian dari dorongan product branding B2B.
//
// WhyWeExistTeaser (sprint "Mengapa OneBizPro Ada" + Program Pertumbuhan Gratis,
// Control/plan.md item #16) sengaja diposisikan tepat sebelum ClosingCta, bukan di
// tempat lain -- keduanya sama-sama full-bleed navy tapi beda shade (lihat komponen).
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BusinessProblems />
        <BusinessSolutions />
        <Modules />
        <SocialProof />
        <AiPositioning />
        <WhyWeExistTeaser />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

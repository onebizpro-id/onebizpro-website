import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BusinessProblems } from "@/components/landing/business-problems";
import { BusinessSolutions } from "@/components/landing/business-solutions";
import { Modules } from "@/components/landing/modules";
import { SocialProof } from "@/components/landing/social-proof";
import { AiPositioning } from "@/components/landing/ai-positioning";
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
// WhyWeExistTeaser (section "Mengapa OneBizPro Ada", sprint Control/plan.md item #16)
// ditarik dulu dari homepage atas permintaan Founder 2026-08-23 -- komponennya &
// halaman /mengapa-onebizpro-ada TIDAK dihapus (beda dari /roadmap yang dihapus
// permanen), tinggal pasang lagi <WhyWeExistTeaser /> di sini kalau mau diaktifkan.
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
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

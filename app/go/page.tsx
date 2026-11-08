import { GoDemo, GoFaq, GoFinalCta, GoFooter, GoHero, GoModul, GoNav, GoPaket, GoPricing, GoSteps, GoTopi } from "@/components/go/go-sections";

// Landing page OneBizPro Go (Go Content dijual; Go Order dan Go Money berstatus "segera" sampai produk Lynk.id-nya siap). Konten dan tautan yang berubah ada di lib/go.ts.
// Halaman website utama dan B2B tidak diubah. Dokumentasi: docs/onebizpro-go-landingpage.md (di repo Social).
export default function GoPage() {
  return (
    <>
      <GoNav />
      <main>
        <GoHero />
        <GoTopi />
        <GoDemo />
        <GoSteps />
        <GoModul />
        <GoPaket />
        <GoPricing />
        <GoFaq />
        <GoFinalCta />
      </main>
      <GoFooter />
    </>
  );
}

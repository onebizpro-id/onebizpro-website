import { GoDemo, GoFaq, GoFeatures, GoFinalCta, GoFooter, GoHero, GoHowItWorks, GoNav, GoPricing, GoProblems, GoSegments } from "@/components/go/go-sections";

// Landing page OneBizPro Go (produk pertama: Go Content). Konten dan tautan yang berubah ada di lib/go.ts.
// Halaman website utama dan B2B tidak diubah. Dokumentasi: docs/onebizpro-go-landingpage.md (di repo Social).
export default function GoPage() {
  return (
    <>
      <GoNav />
      <main>
        <GoHero />
        <GoProblems />
        <GoFeatures />
        <GoHowItWorks />
        <GoSegments />
        <GoDemo />
        <GoPricing />
        <GoFaq />
        <GoFinalCta />
      </main>
      <GoFooter />
    </>
  );
}

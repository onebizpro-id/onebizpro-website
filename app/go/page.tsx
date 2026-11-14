import { GoDemo, GoFaq, GoFinalCta, GoFooter, GoHero, GoModul, GoNav, GoPricing, GoSteps, GoStickyCta } from "@/components/go/go-sections";

// Landing page OneBizPro Go versi ringkas: manfaat dan harga di layar pertama, detail di bawahnya.
// Konten dan tautan yang berubah ada di lib/go.ts. Halaman website utama dan B2B tidak diubah.
export default function GoPage() {
  return (
    <>
      <GoNav />
      <main>
        <GoHero />
        <GoPricing />
        <GoDemo />
        <GoModul />
        <GoSteps />
        <GoFaq />
        <GoFinalCta />
      </main>
      <GoFooter />
      <GoStickyCta />
    </>
  );
}

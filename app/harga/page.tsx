import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SolutionPackages } from "@/components/landing/solution-packages";

export const metadata: Metadata = {
  title: "Paket Solusi — OneBizPro",
  description:
    "Paket START, GROWTH, dan SCALE yang cocok untuk kondisi bisnis Anda — kumulatif, user tanpa batas di semua paket.",
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <SolutionPackages />
      </main>
      <Footer />
    </>
  );
}

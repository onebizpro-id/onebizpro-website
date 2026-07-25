import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Pricing } from "@/components/landing/pricing";

export const metadata: Metadata = {
  title: "Harga & Paket — OneBizPro",
  description:
    "Akunting lengkap sejak paket Starter, tambah CRM, Booking, HR, atau POS begitu bisnis kamu butuh. User tanpa batas di semua paket.",
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

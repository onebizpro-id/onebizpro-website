import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { LeadForm } from "@/components/landing/lead-form";

export const metadata: Metadata = {
  title: "Coba Gratis — OneBizPro",
  description:
    "Isi form singkat dan tim OneBizPro akan menghubungi kamu via WhatsApp dalam 1x24 jam untuk menunjukkan cara kerjanya pakai skenario bisnis kamu sendiri.",
};

export default function CobaGratisPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

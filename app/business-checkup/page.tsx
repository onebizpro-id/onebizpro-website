import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { BusinessCheckup } from "@/components/landing/business-checkup";

export const metadata: Metadata = {
  title: "Business Checkup — OneBizPro",
  description:
    "3 pertanyaan singkat, langsung dapat skor kondisi bisnis dan rekomendasi paket yang paling pas untuk bisnis Anda.",
};

export default function BusinessCheckupPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BusinessCheckup />
      </main>
      <Footer />
    </>
  );
}

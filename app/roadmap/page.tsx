import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { buttonVariants } from "@/components/ui/button";
import { TrendingUp, Bell, FileText, Lightbulb, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap — OneBizPro",
  description: "Arah pengembangan Asisten AI OneBizPro ke depan.",
};

const ROADMAP_ITEMS = [
  {
    icon: TrendingUp,
    title: "AI Forecast",
    description:
      "Prediksi kondisi bisnis ke depan — arus kas, permintaan, tren penjualan — berdasarkan data historis bisnis Anda sendiri.",
  },
  {
    icon: Bell,
    title: "AI Alert",
    description:
      "Notifikasi otomatis begitu ada hal yang perlu perhatian segera: pengeluaran tidak wajar, piutang jatuh tempo, stok menipis.",
  },
  {
    icon: FileText,
    title: "AI Executive Brief",
    description:
      "Ringkasan eksekutif otomatis untuk pemilik dan manajemen — bukan laporan mentah yang harus ditafsirkan sendiri.",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendation",
    description:
      "Rekomendasi tindakan spesifik berdasarkan kondisi bisnis Anda, bukan sekadar informasi tanpa arah.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Otomasi alur kerja lintas modul — approval, pengingat, tindak lanjut — tanpa perlu diatur manual setiap kali.",
  },
] as const;

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center sm:pt-28">
          <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Roadmap OneBizPro
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            Arah pengembangan Asisten AI OneBizPro ke depan — bukan fitur yang sudah aktif,
            dan belum termasuk dalam paket manapun saat ini.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {ROADMAP_ITEMS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/business-checkup" className={buttonVariants({ size: "lg" })}>
              Konsultasikan Bisnis Anda
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

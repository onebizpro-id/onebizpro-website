import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ProblemFraming } from "@/components/landing/problem-framing";
import { LeadForm } from "@/components/landing/lead-form";
import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame } from "@/components/landing/browser-frame";
import { HeroIllustration } from "@/components/landing/illustrations";

export const metadata: Metadata = {
  title: "OneBizPro untuk Bisnis Venue — Coba Gratis",
  description:
    "Booking tanpa bentrok, laporan otomatis, dan ringkasan bisnis tiap pagi via WhatsApp — untuk lapangan padel, bulu tangkis, futsal, mini soccer, coworking space, dan studio.",
};

const VENUE_BENEFITS = [
  {
    title: "Nol double-booking",
    body: "Slot yang sama tidak mungkin terjual dua kali — ditegakkan oleh sistem, bukan ketelitian admin. Slot batal otomatis terbuka lagi.",
  },
  {
    title: "Laporan jadi sendiri",
    body: "Laba-rugi bulanan tersusun otomatis dan dirangkum jadi 2–4 kalimat yang langsung bisa dipahami — bukan spreadsheet mentah.",
  },
  {
    title: "Kamu tahu duluan",
    body: "Tiap pagi ringkasan bisnis dikirim ke WhatsApp kamu: booking hari ini, piutang, hal yang perlu diperhatikan. Sebelum kamu sempat tanya.",
  },
];

export default function VenueLandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                Venue Kamu, Jalan Sendiri di Belakang Layar
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground lg:mx-0">
                Booking rapi tanpa bentrok, laporan jadi otomatis, dan ringkasan
                bisnis sampai duluan ke WhatsApp kamu tiap pagi.
              </p>
              <p className="mt-4 text-sm font-medium text-primary/80">
                Untuk lapangan padel · bulu tangkis · futsal · mini soccer ·
                coworking space · studio
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a href="#coba-gratis" className={buttonVariants({ size: "lg" })}>
                  Coba Gratis untuk Venue Kamu
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Mulai dari Rp500rb/bulan. Tanpa komitmen di awal.
              </p>
            </div>
            <BrowserFrame>
              <HeroIllustration />
            </BrowserFrame>
          </div>
        </section>

        <ProblemFraming />

        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Tiga Hal yang Berubah Sejak Hari Pertama
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VENUE_BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-input bg-white p-6">
                <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

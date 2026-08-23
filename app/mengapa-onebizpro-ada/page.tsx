import type { Metadata } from "next";
import Link from "next/link";
import { Store, HeartHandshake, GraduationCap, Users, Plus } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mengapa OneBizPro Ada — OneBizPro",
  description:
    "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki.",
};

const NARRATIVE = [
  "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki.",
  "Namun selama ini, teknologi terbaik hanya bisa diakses oleh segelintir organisasi yang bersumber daya besar—sementara jutaan usaha, yayasan, sekolah, komunitas, dan organisasi lainnya harus berjuang dengan sistem yang terbatas.",
  "OneBizPro dibangun untuk mengubah keadaan itu.",
  "Kami menghadirkan teknologi bisnis kelas dunia, agar usaha kecil, yayasan, sekolah, dan komunitas bisa mengakses kemampuan yang sama dengan organisasi besar.",
  "Karena ketika lebih banyak organisasi bertumbuh, lebih banyak masyarakat yang merasakan manfaatnya.",
  "Kami tidak hanya membangun software.",
  "Kami membangun masa depan di mana teknologi menjadi penggerak kemajuan yang dapat dinikmati oleh semua organisasi.",
] as const;

// Kalimat pendek/deklaratif (3 & 6) ditonjolkan sebagai "beat" -- selebihnya paragraf biasa.
const EMPHASIZED_INDEXES = new Set([2, 5]);

const CATEGORIES = [
  { icon: Store, label: "Usaha Kecil" },
  { icon: HeartHandshake, label: "Yayasan" },
  { icon: GraduationCap, label: "Sekolah" },
  { icon: Users, label: "Komunitas" },
] as const;

export default function MengapaOneBizProAdaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center sm:pt-28">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Mengapa OneBizPro Ada.
          </h1>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
          <div className="space-y-8">
            {NARRATIVE.map((sentence, i) => (
              <p
                key={sentence}
                className={
                  EMPHASIZED_INDEXES.has(i)
                    ? "text-balance text-center text-2xl font-semibold text-primary sm:text-3xl"
                    : "text-balance text-lg leading-relaxed text-foreground"
                }
              >
                {sentence}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Untuk Siapa
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {CATEGORIES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-border text-muted-foreground">
                  <Plus className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Organisasi Bertumbuh Lainnya
                </span>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
              Ini contoh, bukan daftar lengkap — terbuka untuk organisasi bertumbuh apa pun.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
          <p className="text-balance text-xl font-semibold text-primary sm:text-2xl">
            Itu sebabnya OneBizPro terbuka gratis untuk organisasi yang sedang bertumbuh.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Kami dampingi sampai Anda cukup kuat untuk melangkah sendiri — bukan amal tanpa
            ujung, tapi akselerasi yang berhasil.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/business-checkup" className={buttonVariants({ size: "lg" })}>
              Cek Kelayakan Anda
            </Link>
            <Link href="/" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Kembali ke Beranda
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

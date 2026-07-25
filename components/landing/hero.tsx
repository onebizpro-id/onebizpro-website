import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame } from "@/components/landing/browser-frame";
import { HeroIllustration } from "@/components/landing/illustrations";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Pembukuan Rapi & Terpercaya, Kerja Makin Ringan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl lg:mx-0">
            OneBizPro beresin akunting bisnis kamu secara otomatis — dari
            jurnal sampai laporan laba-rugi — supaya kamu selalu tahu kondisi
            keuangan tanpa harus jadi ahli akunting.
          </p>
          <p className="mt-4 text-sm font-medium text-primary/80">
            Untuk yayasan · retail &amp; fashion · jasa &amp; dagang ·
            penerbit · desain interior · UMKM lintas industri
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/coba-gratis" className={buttonVariants({ size: "lg" })}>
              Coba Gratis
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Mulai dari Rp349rb/bulan. User tanpa batas.{" "}
            <Link href="/harga" className="font-medium text-primary underline underline-offset-2">
              Lihat harga lengkap
            </Link>
          </p>
        </div>

        <BrowserFrame>
          <HeroIllustration />
        </BrowserFrame>
      </div>
    </section>
  );
}

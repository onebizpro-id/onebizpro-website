import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame } from "@/components/landing/browser-frame";
import { HeroIllustration } from "@/components/landing/illustrations";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Satu Platform untuk Memahami, Mengelola, dan Mengembangkan Bisnis Anda
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl lg:mx-0">
            Ditemani Asisten AI yang membaca kondisi bisnis Anda lebih dulu — supaya Anda
            kerja lebih tenang, keputusan lebih terkontrol, dan bisnis makin efisien.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a href="#business-checkup" className={buttonVariants({ size: "lg" })}>
              Mulai Business Checkup
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Gratis, hasil langsung terlihat — tanpa perlu isi data dulu.
          </p>
        </div>

        <BrowserFrame>
          <HeroIllustration />
        </BrowserFrame>
      </div>
    </section>
  );
}

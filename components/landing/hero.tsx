import { buttonVariants } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";
import { BrowserFrame } from "@/components/landing/browser-frame";
import { HeroIllustration } from "@/components/landing/illustrations";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Kerja Makin Ringan, Keputusan Makin Tajam
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl lg:mx-0">
            Asisten OneBizPro baca data bisnis kamu duluan — supaya kerja
            harian makin ringan, dan tiap keputusan diambil dengan lebih
            tajam.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href={waLink("Halo, saya ingin coba OneBizPro.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Coba Gratis
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Simple untuk dipakai, pintar di belakang layar.
          </p>
        </div>

        <BrowserFrame>
          <HeroIllustration />
        </BrowserFrame>
      </div>
    </section>
  );
}

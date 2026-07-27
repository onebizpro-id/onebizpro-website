import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame } from "@/components/landing/browser-frame";
import { HeroIllustration } from "@/components/landing/illustrations";

const CTA_NOTES = ["sekitar 2 menit", "hasil langsung", "gratis"];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Menjalankan Bisnis Seharusnya Lebih Mudah.
          </h1>
          <p className="mt-3 text-balance text-2xl font-semibold text-accent">
            OneBizPro Mewujudkannya.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl lg:mx-0">
            OneBizPro adalah <span className="font-medium text-foreground">Intelligent Business
            Operating Platform</span> yang membantu Anda mengelola operasional, memahami
            kondisi bisnis, dan mengambil keputusan dengan lebih percaya diri melalui
            dukungan AI.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/business-checkup" className={buttonVariants({ size: "lg" })}>
              Mulai Business Checkup Gratis
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5 lg:justify-start">
            {CTA_NOTES.map((note) => (
              <span key={note} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {note}
              </span>
            ))}
          </div>
        </div>

        <BrowserFrame>
          <HeroIllustration />
        </BrowserFrame>
      </div>
    </section>
  );
}

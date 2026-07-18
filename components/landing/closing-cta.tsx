import { buttonVariants } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-2xl px-6 py-20 text-center sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Mudah Dicoba, Dampaknya Langsung Terasa
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Tidak perlu pindah sistem sekaligus. Tidak perlu training panjang.
          Coba satu modul, rasakan bedanya.
        </p>
        <div className="mt-8">
          <a
            href={waLink("Halo, saya ingin coba OneBizPro gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Coba OneBizPro Gratis
          </a>
        </div>
      </div>
    </section>
  );
}

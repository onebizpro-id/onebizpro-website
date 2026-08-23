import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const CATEGORIES = ["Usaha Kecil", "Yayasan", "Sekolah", "Komunitas"];

// Beda shade dari ClosingCta (bg-primary flat) -- radial gradient navy lebih gelap
// dicampur dari token existing (--primary + --accent + black), bukan palet baru.
export function WhyWeExistTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 15% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%), color-mix(in srgb, var(--primary) 88%, black)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <p className="text-balance text-2xl font-semibold leading-snug text-primary-foreground sm:text-3xl">
          &ldquo;Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh
          besarnya anggaran teknologi yang dimiliki.&rdquo;
        </p>
        <p className="mt-4 text-lg text-primary-foreground/80">
          OneBizPro dibangun untuk mengubah keadaan itu.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full bg-white/10 px-3 py-1 text-sm text-primary-foreground"
            >
              {c}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-white/30 px-3 py-1 text-sm text-primary-foreground/70">
            + Organisasi Bertumbuh Lainnya
          </span>
        </div>
        <p className="mt-3 text-xs text-primary-foreground/60">
          Ini contoh, bukan daftar lengkap — terbuka untuk organisasi bertumbuh apa pun.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/business-checkup" className={buttonVariants({ size: "lg" })}>
            Cek Kelayakan Anda
          </Link>
          <Link
            href="/mengapa-onebizpro-ada"
            className="text-sm font-medium text-primary-foreground underline underline-offset-4 hover:text-white"
          >
            Pelajari Mengapa OneBizPro Ada
          </Link>
        </div>
      </div>
    </section>
  );
}

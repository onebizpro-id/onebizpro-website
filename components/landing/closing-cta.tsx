import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          Menjalankan Bisnis Seharusnya Lebih Mudah.
        </h2>
        <p className="mt-2 text-2xl font-semibold text-accent">OneBizPro Mewujudkannya.</p>
        <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/80">
          Mulai dengan Business Checkup gratis — kenali kondisi bisnis Anda dan dapatkan
          rekomendasi paket yang paling pas, dalam hitungan menit.
        </p>
        <div className="mt-8">
          <Link href="/business-checkup" className={buttonVariants({ size: "lg" })}>
            Mulai Business Checkup Gratis
          </Link>
        </div>
      </div>
    </section>
  );
}

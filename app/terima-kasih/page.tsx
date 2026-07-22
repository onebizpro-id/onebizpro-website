import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terima Kasih — OneBizPro",
  robots: { index: false },
};

export default function TerimaKasihPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-3xl">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Terima kasih! Data kamu sudah kami terima.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tim kami akan menghubungi kamu via WhatsApp dalam 1×24 jam untuk
            menunjukkan cara kerja OneBizPro pakai skenario bisnis kamu sendiri —
            gratis, tanpa komitmen.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Sambil menunggu, kamu bisa lihat kembali apa saja yang bisa dikerjakan
            OneBizPro untuk venue kamu.
          </p>
          <Link href="/" className={`${buttonVariants({ size: "lg" })} mt-8`}>
            Kembali ke Beranda
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

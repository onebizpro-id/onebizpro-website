import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Differentiator() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        Kenapa Tidak Seperti Sistem Bisnis Lain
      </h2>
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Kebanyakan sistem bisnis dibangun untuk perusahaan besar, lalu
          &ldquo;disederhanakan&rdquo; untuk bisnis kecil — hasilnya tetap terasa
          rumit, dan waktu yang habis untuk belajar sistemnya sendiri sudah
          lebih besar dari manfaatnya.
        </p>
        <p>
          OneBizPro dibangun dari arah sebaliknya: mulai dari Akunting yang
          rapi dan terpercaya sejak hari pertama, baru bertumbuh — tambahkan
          CRM, Booking, HR, atau POS begitu bisnis kamu butuh, tanpa harus
          pindah sistem atau belajar dari nol.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/coba-gratis" className={buttonVariants({ size: "lg" })}>
          Coba Gratis
        </Link>
        <Link
          href="/harga"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Lihat Harga
        </Link>
      </div>
    </section>
  );
}

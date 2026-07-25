import { Wallet, Users, CalendarCheck, Boxes } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Wallet,
    problem: "Tidak tahu kondisi keuangan",
    headline: "Pantau kondisi bisnis secara real-time",
    support: "Keuangan otomatis tercatat, Monitoring Kas, Asisten AI",
  },
  {
    icon: Users,
    problem: "Pelanggan sering hilang",
    headline: "Kelola seluruh pelanggan dalam satu tempat",
    support: "Riwayat Pelanggan, pengingat follow-up",
  },
  {
    icon: CalendarCheck,
    problem: "Booking masih manual",
    headline: "Terima reservasi lebih mudah, tanpa bentrok",
    support: "Booking Online",
  },
  {
    icon: Boxes,
    problem: "Operasional semakin kompleks",
    headline: "Satukan seluruh operasional bisnis",
    support: "Kasir, Stok, Pegawai",
  },
] as const;

export function BusinessSolutions() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Ada Solusinya, Bukan Cuma Fiturnya
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          OneBizPro membantu pemilik bisnis memahami kondisi bisnisnya dulu, baru
          merekomendasikan solusi yang pas.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {SOLUTIONS.map(({ icon: Icon, problem, headline, support }) => (
          <div key={problem} className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {problem}
            </p>
            <div className="mt-3 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{headline}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Didukung: {support}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

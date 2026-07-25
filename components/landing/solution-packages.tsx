import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const PACKAGES = [
  {
    name: "START",
    price: "399.000",
    audience: "Untuk bisnis yang ingin kontrol penuh atas kondisi bisnisnya",
    problem: "Keuangan tidak terpantau, pencatatan berantakan",
    solutions: [
      "Keuangan tercatat otomatis",
      "Monitoring bisnis real-time",
      "Asisten AI siap membantu",
      "Ringkasan harian ke WhatsApp",
    ],
    systems: "Akunting/Ledger, Dashboard, Asisten AI, Digest WA",
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "699.000",
    audience: "Untuk bisnis yang mulai berkembang",
    problem: "Pelanggan sering lupa di-follow-up, booking masih manual",
    solutions: [
      "Semua di paket START",
      "Kelola pelanggan & riwayat interaksi",
      "Pantau peluang penjualan",
      "Terima booking tanpa bentrok",
    ],
    systems: "CRM, Sales Pipeline, Booking",
    highlight: true,
  },
  {
    name: "SCALE",
    price: "1.199.000",
    audience: "Untuk bisnis dengan operasional kompleks",
    problem: "Stok tidak terpantau, tim sulit dipantau, approval berantakan",
    solutions: [
      "Semua di paket GROWTH",
      "Kasir tanpa perangkat khusus",
      "Kelola stok & pembelian",
      "Kelola tim (absensi, gaji, cuti)",
    ],
    systems: "Kasir, Inventory, Purchasing, HR",
    highlight: false,
  },
] as const;

export function SolutionPackages() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Paket Solusi
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Paket yang Cocok untuk Kondisi Bisnis Anda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tiap paket kumulatif — paket lebih tinggi mencakup semua di paket sebelumnya. User
            tanpa batas di semua paket, tidak ada biaya per kepala.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-lg border bg-card p-8 shadow-sm ${
                pkg.highlight ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.audience}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Masalah yang biasanya dihadapi
              </p>
              <p className="mt-1 text-sm text-foreground">{pkg.problem}</p>

              <ul className="mt-5 flex-1 space-y-3">
                {pkg.solutions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-muted-foreground">Sistem pendukung: {pkg.systems}</p>

              <p className="mt-5">
                <span className="text-3xl font-semibold text-primary">Rp{pkg.price}</span>
                <span className="text-sm text-muted-foreground">/bulan</span>
              </p>

              <Link
                href="/business-checkup"
                className={buttonVariants({
                  size: "lg",
                  variant: pkg.highlight ? "default" : "outline",
                  className: "mt-6 w-full",
                })}
              >
                Konsultasikan Bisnis Anda
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

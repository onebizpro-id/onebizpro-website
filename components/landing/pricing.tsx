import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const TIERS = [
  {
    name: "Starter",
    price: "349.000",
    description: "Akunting lengkap untuk mulai rapi sejak hari pertama.",
    included: [
      "Akunting/Ledger lengkap (Jurnal, Neraca, Laba Rugi, Rekonsiliasi Bank, Aset Tetap, Klaim & Reimbursement)",
      "Digest WA harian",
      "Insight AI",
      "User tanpa batas",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "499.000",
    description: "Semua di Starter, plus kelola pelanggan dan booking.",
    included: ["Semua fitur Starter", "CRM", "Booking", "User tanpa batas"],
    highlight: true,
  },
  {
    name: "Business",
    price: "899.000",
    description: "Semua di Pro, plus tim dan kasir ringan.",
    included: [
      "Semua fitur Pro",
      "HR",
      "POS (Kasir Ringan — cukup HP, tanpa perangkat kasir)",
      "User tanpa batas",
    ],
    highlight: false,
  },
] as const;

export function Pricing() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Harga &amp; Paket
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Satu Platform, Harga Transparan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mulai dari Akunting lengkap, tambah modul begitu bisnis kamu
            butuh. User tanpa batas di semua paket — tidak ada biaya per
            kepala.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg border bg-card p-8 shadow-sm ${
                tier.highlight ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <p className="mt-5">
                <span className="text-3xl font-semibold text-primary">Rp{tier.price}</span>
                <span className="text-sm text-muted-foreground">/bulan</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/coba-gratis"
                className={buttonVariants({
                  size: "lg",
                  variant: tier.highlight ? "default" : "outline",
                  className: "mt-8 w-full",
                })}
              >
                Coba Gratis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

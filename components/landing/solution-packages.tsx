import Link from "next/link";
import { Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PackageCard } from "@/components/landing/package-card";
import { PACKAGES } from "@/lib/packages";

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
            Tiap paket kumulatif — paket lebih tinggi mencakup semua di paket sebelumnya.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Users className="h-4 w-4 shrink-0" />
            User tanpa batas di semua paket — tidak ada biaya per kepala
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              cta={
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
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

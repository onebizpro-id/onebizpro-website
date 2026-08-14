import { Check } from "lucide-react";
import type { PackageInfo } from "@/lib/packages";

export function PackageCard({ pkg, cta }: { pkg: PackageInfo; cta: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col rounded-lg border bg-card p-8 shadow-sm ${
        pkg.highlight ? "border-primary ring-1 ring-primary" : "border-border"
      }`}
    >
      <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{pkg.audience}</p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Masalah yang Umum Dihadapi
      </p>
      <p className="mt-1 text-sm text-foreground">{pkg.problem}</p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Perubahan yang Akan Dirasakan
      </p>
      <p className="mt-1 text-sm text-foreground">{pkg.transformation}</p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Yang Akan Anda Dapatkan
      </p>
      {pkg.basedOn && (
        <p className="mt-1 text-xs text-muted-foreground">Termasuk semua di paket {pkg.basedOn}</p>
      )}
      <ul className="mt-2 flex-1 space-y-3">
        {pkg.solutions.map((item) => (
          <li key={item.benefit} className="flex items-start justify-between gap-2 text-sm text-foreground">
            <span className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {item.benefit}
            </span>
            <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {item.system}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <p className="text-sm font-medium text-foreground">
          Investasi disesuaikan dengan kebutuhan bisnis Anda
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Diskusikan langsung dengan tim kami</p>
      </div>

      {cta}
    </div>
  );
}

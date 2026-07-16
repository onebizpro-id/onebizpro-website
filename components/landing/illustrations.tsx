import { CheckCircle2, ArrowDown, ArrowUpRight, AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Booking", value: "12", badge: "▲ 18%", tone: "up" },
  { label: "Pengeluaran", value: "Rp12,4jt", badge: "Terkendali", tone: "neutral" },
  { label: "Tim Hadir", value: "5/5", badge: "Tepat waktu", tone: "up" },
] as const;

export function HeroIllustration() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Ringkasan Bisnis</p>
          <p className="text-xs text-muted-foreground">Semua modul, satu tempat</p>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Hari ini
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {heroStats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border px-3 py-3">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-base font-semibold text-foreground">{stat.value}</p>
            <span
              className={cn(
                "mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium",
                stat.tone === "up" && "bg-emerald-500/10 text-emerald-600",
                stat.tone === "neutral" && "bg-muted text-muted-foreground"
              )}
            >
              {stat.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
        <p className="text-xs leading-snug">
          Booking, keuangan, dan tim — semua otomatis terhubung, tanpa kerja
          dobel.
        </p>
      </div>
    </div>
  );
}

export function SlotAutomationIllustration() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Court B · Outdoor</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
          Hari ini
        </span>
      </div>

      <div className="flex items-center justify-between rounded-md border border-border px-3 py-2">
        <span className="text-xs text-muted-foreground line-through">
          14:00 — Dibatalkan pelanggan
        </span>
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          Batal
        </span>
      </div>
      <div className="flex justify-center">
        <ArrowDown className="h-4 w-4 text-accent" />
      </div>
      <div className="flex items-center justify-between rounded-md border border-emerald-500 bg-emerald-500/10 px-3 py-2">
        <span className="text-xs font-medium text-emerald-700">
          14:00 — Tersedia lagi
        </span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          Otomatis
        </span>
      </div>

      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        3 jadwal terbuka kembali otomatis minggu ini — tidak ada yang
        &ldquo;nyangkut&rdquo;.
      </div>
    </div>
  );
}

const expenseCategories = [
  { label: "Maintenance Lapangan", value: 100, tone: "accent" },
  { label: "Gaji Karyawan", value: 68, tone: "primary" },
  { label: "Listrik & Air", value: 42, tone: "muted" },
  { label: "Marketing", value: 24, tone: "muted" },
] as const;

export function ExpenseIllustration() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Pengeluaran · Bulan ini</span>
        <span className="font-semibold text-foreground">Rp 12,4 jt</span>
      </div>

      <div className="space-y-3">
        {expenseCategories.map((c) => (
          <div key={c.label} className="space-y-1.5">
            <span className="text-xs text-muted-foreground">{c.label}</span>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full",
                  c.tone === "accent" && "bg-accent",
                  c.tone === "primary" && "bg-primary",
                  c.tone === "muted" && "bg-border"
                )}
                style={{ width: `${c.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        Kategori tersusun otomatis dari tiap catatan pengeluaran.
      </div>
    </div>
  );
}

const summaryHighlights = [
  { dot: "bg-emerald-500", text: "Booking minggu ini naik 18%" },
  { dot: "bg-accent", text: "Pengeluaran terbesar: Maintenance Lapangan" },
  { dot: "bg-primary", text: "Semua jadwal tim berjalan tanpa bentrok" },
] as const;

export function SummaryIllustration() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Ringkasan Mingguan</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
          Otomatis
        </span>
      </div>

      <div className="space-y-2.5">
        {summaryHighlights.map((h) => (
          <div key={h.text} className="flex items-start gap-2">
            <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", h.dot)} />
            <span className="text-xs leading-snug text-foreground">{h.text}</span>
          </div>
        ))}
      </div>

      <div className="rounded-md bg-muted px-3 py-2 text-[11px] italic leading-snug text-muted-foreground">
        &ldquo;Minggu ini booking naik dan pengeluaran masih terkendali —
        kondisi bisnis sehat.&rdquo;
      </div>
    </div>
  );
}

export function InsightIllustration() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-start gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5">
        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
        <span className="text-xs leading-snug text-emerald-700">
          Booking naik <span className="font-semibold">18%</span> dari minggu
          lalu
        </span>
      </div>
      <div className="flex items-start gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-2.5">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
        <span className="text-xs leading-snug text-foreground">
          Pengeluaran Maintenance lebih besar dari biasanya
        </span>
      </div>
      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        Asisten baca angkanya duluan, kamu tinggal ambil keputusan.
      </div>
    </div>
  );
}

export function ReportIllustration() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          A
        </span>
        <span>Ringkasan Minggu Ini</span>
      </div>
      <div className="rounded-lg rounded-tl-none bg-muted px-3 py-2.5 text-xs leading-relaxed text-foreground">
        Booking naik, pengeluaran masih terkendali, dan semua staf hadir tepat
        waktu minggu ini.
      </div>
      <div className="rounded-lg rounded-tl-none bg-muted px-3 py-2.5 text-xs leading-relaxed text-foreground">
        Kategori pengeluaran terbesar: Maintenance Lapangan.
      </div>
    </div>
  );
}

export function AutomationIllustration() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-md border border-border px-3 py-2.5">
        <span className="text-xs text-muted-foreground">Jadwal dibatalkan pelanggan</span>
        <RefreshCw className="h-3.5 w-3.5 shrink-0 text-accent" />
      </div>
      <div className="flex justify-center">
        <ArrowDown className="h-4 w-4 text-accent" />
      </div>
      <div className="flex items-center justify-between rounded-md border border-emerald-500 bg-emerald-500/10 px-3 py-2.5">
        <span className="text-xs font-medium text-emerald-700">Otomatis tersedia lagi</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        Berlaku untuk jadwal booking, tagihan, sampai pengingat tim — semua
        jalan otomatis di belakang layar.
      </div>
    </div>
  );
}

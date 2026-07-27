import {
  CheckCircle2,
  ArrowDown,
  ArrowUpRight,
  AlertTriangle,
  RefreshCw,
  Users,
  Clock,
  Boxes,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const heroInsights = [
  { icon: ArrowUpRight, text: "Omzet hari ini naik 12%", tone: "up" },
  { icon: Clock, text: "Ada 4 invoice yang akan jatuh tempo", tone: "warn" },
  { icon: Users, text: "7 pelanggan belum ditindaklanjuti", tone: "warn" },
  { icon: Boxes, text: "Stok kopi hampir habis", tone: "warn" },
] as const;

export function HeroIllustration() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Asisten AI</p>
          <p className="text-xs text-muted-foreground">Insight bisnis hari ini</p>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Live
        </span>
      </div>

      <div className="space-y-2">
        {heroInsights.map(({ icon: Icon, text, tone }) => (
          <div
            key={text}
            className={cn(
              "flex items-center gap-2.5 rounded-lg border px-3 py-2.5",
              tone === "up" && "border-emerald-500/30 bg-emerald-500/10",
              tone === "warn" && "border-accent/30 bg-accent/10"
            )}
          >
            <Icon
              className={cn(
                "h-3.5 w-3.5 shrink-0",
                tone === "up" && "text-emerald-600",
                tone === "warn" && "text-accent"
              )}
            />
            <p className="text-xs leading-snug text-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground">
        <Sparkles className="h-4 w-4 shrink-0 text-accent" />
        <p className="text-xs leading-snug">
          Saya sarankan <span className="font-semibold">menghubungi pelanggan A hari ini</span>.
        </p>
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
          Kas masuk naik <span className="font-semibold">18%</span> dari
          minggu lalu
        </span>
      </div>
      <div className="flex items-start gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-2.5">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
        <span className="text-xs leading-snug text-foreground">
          Pengeluaran kategori Operasional lebih besar dari biasanya
        </span>
      </div>
      <div className="flex items-start gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2.5">
        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        <span className="text-xs leading-snug text-foreground">
          5 pelanggan baru masuk CRM minggu ini
        </span>
      </div>
      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        Asisten baca angkanya duluan →{" "}
        <span className="font-semibold text-foreground">keputusan Anda makin tajam</span>,
        tanpa buka laporan satu-satu.
      </div>
    </div>
  );
}

export function ReportIllustration() {
  return (
    <div className="-m-6 overflow-hidden rounded-lg sm:-m-8">
      <div className="flex items-center gap-2.5 bg-emerald-600 px-3 py-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">OneBizPro</p>
          <p className="text-[10px] text-emerald-50">Ringkasan Mingguan</p>
        </div>
      </div>
      <div className="space-y-2 bg-emerald-50/60 px-3 py-3">
        <div className="rounded-lg rounded-tl-none bg-white px-3 py-2.5 text-xs leading-relaxed text-foreground shadow-sm">
          Kas masuk stabil, pengeluaran masih terkendali, dan tidak ada piutang
          jatuh tempo minggu ini.
        </div>
        <div className="rounded-lg rounded-tl-none bg-white px-3 py-2.5 text-xs leading-relaxed text-foreground shadow-sm">
          Kategori pengeluaran terbesar: Operasional.
        </div>
        <div className="rounded-lg rounded-tl-none bg-white px-3 py-2.5 text-xs leading-relaxed text-foreground shadow-sm">
          Semua transaksi bulan ini tercatat rapi, siap untuk laporan pajak.
        </div>
      </div>
    </div>
  );
}

export function AutomationIllustration() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-md border border-border px-3 py-2.5">
        <span className="text-xs text-muted-foreground">Reimbursement karyawan diajukan</span>
        <RefreshCw className="h-3.5 w-3.5 shrink-0 text-accent" />
      </div>
      <div className="flex justify-center">
        <ArrowDown className="h-4 w-4 text-accent" />
      </div>
      <div className="flex items-center justify-between rounded-md border border-emerald-500 bg-emerald-500/10 px-3 py-2.5">
        <span className="text-xs font-medium text-emerald-700">Otomatis masuk approval</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <div className="rounded-md bg-muted px-3 py-2 text-[11px] leading-snug text-muted-foreground">
        Sekali atur →{" "}
        <span className="font-semibold text-foreground">jalan otomatis selamanya</span>,
        dari reimbursement sampai rekonsiliasi bank.
      </div>
    </div>
  );
}

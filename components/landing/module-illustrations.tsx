import {
  CalendarCheck,
  Users,
  Wallet,
  UserCog,
  Sparkles,
  Boxes,
  CreditCard,
  CheckCircle2,
  Compass,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const toneClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  rose: "bg-rose-500/10 text-rose-600",
  emerald: "bg-emerald-500/10 text-emerald-600",
  blue: "bg-blue-500/10 text-blue-600",
  amber: "bg-amber-500/10 text-amber-600",
  cyan: "bg-cyan-500/10 text-cyan-600",
  violet: "bg-violet-500/10 text-violet-600",
} as const;

function ModuleHeader({
  icon: Icon,
  name,
  badge,
  tone = "primary",
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  badge: string;
  tone?: keyof typeof toneClasses;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
            toneClasses[tone]
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
            OneBizPro
          </p>
          <span className="text-sm font-semibold text-foreground">{name}</span>
        </div>
      </div>
      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
        {badge}
      </span>
    </div>
  );
}

export function BookingModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={CalendarCheck} name="Booking" badge="▲ 18%" tone="primary" />
      <div className="flex items-center justify-between rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1.5">
        <span className="text-[11px] font-medium text-accent">09:00 — Dipesan</span>
      </div>
      <div className="flex items-center justify-between rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
        <span className="text-[11px] font-medium text-emerald-700">14:00 — Tersedia lagi</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Jadwal batal otomatis dibuka lagi →{" "}
        <span className="font-semibold text-foreground">booking naik 18%</span>.
      </p>
    </div>
  );
}

export function CrmModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Users} name="CRM" badge="+5 baru" tone="rose" />
      <div className="flex items-center gap-2 rounded-md bg-muted px-2.5 py-1.5">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[9px] font-semibold text-primary">
          AS
        </span>
        <span className="text-[11px] text-foreground">Ahmad S. — booking ke-3</span>
      </div>
      <div className="flex items-center gap-2 rounded-md bg-muted px-2.5 py-1.5">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[9px] font-semibold text-primary">
          RD
        </span>
        <span className="text-[11px] text-foreground">Rina D. — pelanggan baru</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Riwayat pelanggan tersimpan otomatis →{" "}
        <span className="font-semibold text-foreground">+5 pelanggan baru</span>{" "}
        minggu ini.
      </p>
    </div>
  );
}

const accountingBars = [
  { label: "Maintenance Lapangan", value: 100, tone: "accent" },
  { label: "Gaji Karyawan", value: 68, tone: "primary" },
] as const;

export function AccountingModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Wallet} name="Akunting" badge="Rp12,4jt" tone="emerald" />
      <div className="space-y-2">
        {accountingBars.map((b) => (
          <div key={b.label} className="space-y-1">
            <span className="text-[11px] text-muted-foreground">{b.label}</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full",
                  b.tone === "accent" && "bg-accent",
                  b.tone === "primary" && "bg-primary"
                )}
                style={{ width: `${b.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tanpa input manual →{" "}
        <span className="font-semibold text-foreground">kategori Rp12,4jt tersusun rapi</span>.
      </p>
    </div>
  );
}

export function HrModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={UserCog} name="HR" badge="5/5" tone="blue" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Budi — Hadir</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sari — Hadir</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Absensi otomatis tercatat →{" "}
        <span className="font-semibold text-foreground">5/5 staf tepat waktu</span>.
      </p>
    </div>
  );
}

export function AssistantModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Sparkles} name="Tanya Asisten" badge="Instan" tone="accent" />
      <div className="rounded-lg rounded-tr-none bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">&ldquo;Berapa omzet minggu ini?&rdquo;</span>
      </div>
      <div className="rounded-lg rounded-tl-none bg-primary px-2.5 py-1.5">
        <span className="text-[11px] text-primary-foreground">
          Rp18,2jt, naik 12% dari minggu lalu.
        </span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tinggal tanya →{" "}
        <span className="font-semibold text-foreground">jawaban instan dari data asli</span>.
      </p>
    </div>
  );
}

export function InventoryModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Boxes} name="Inventory" badge="Aman" tone="amber" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Bola Padel</span>
        <span className="text-[10px] font-medium text-emerald-600">Aman</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Grip Raket</span>
        <span className="text-[10px] font-medium text-accent">Stok Menipis</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Alert otomatis sebelum stok habis →{" "}
        <span className="font-semibold text-foreground">tidak pernah kehabisan mendadak</span>.
      </p>
    </div>
  );
}

export function PosModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={CreditCard} name="POS" badge="Real-time" tone="cyan" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sewa Lapangan A</span>
        <span className="text-[11px] font-medium text-foreground">Rp150rb</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sewa Raket</span>
        <span className="text-[11px] font-medium text-foreground">Rp25rb</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tercatat otomatis, tanpa input dobel →{" "}
        <span className="font-semibold text-foreground">langsung masuk ke Akunting</span>.
      </p>
    </div>
  );
}

export function StrategicInsightModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Compass} name="Insight Strategis" badge="Prediktif" tone="violet" />
      <div className="flex items-start gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5">
        <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
        <span className="text-[11px] leading-snug text-emerald-700">
          Prediksi omzet bulan depan: Rp62jt (▲9%)
        </span>
      </div>
      <div className="rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] leading-snug text-foreground">
          Rekomendasi: tambah jadwal Sabtu sore — permintaan tinggi
        </span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tanpa diminta →{" "}
        <span className="font-semibold text-foreground">rekomendasi siap pakai, bukan cuma laporan</span>.
      </p>
    </div>
  );
}

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

function ModuleHeader({
  icon: Icon,
  name,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  badge: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{name}</span>
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
      <ModuleHeader icon={CalendarCheck} name="Booking" badge="▲ 18%" />
      <div className="flex items-center justify-between rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1.5">
        <span className="text-[11px] font-medium text-accent">09:00 — Dipesan</span>
      </div>
      <div className="flex items-center justify-between rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5">
        <span className="text-[11px] font-medium text-emerald-700">14:00 — Tersedia lagi</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        12 booking hari ini, jadwal batal otomatis terbuka kembali.
      </p>
    </div>
  );
}

export function CrmModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Users} name="CRM" badge="+5 baru" />
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
        Riwayat dan preferensi tiap pelanggan tersimpan otomatis.
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
      <ModuleHeader icon={Wallet} name="Akunting" badge="Rp12,4jt" />
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
        Kategori pengeluaran tersusun otomatis, tanpa input manual.
      </p>
    </div>
  );
}

export function HrModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={UserCog} name="HR" badge="5/5" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Budi — Hadir</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sari — Hadir</span>
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Absensi, jadwal shift, dan slip gaji dalam satu tempat.
      </p>
    </div>
  );
}

export function AssistantModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Sparkles} name="Tanya Asisten" badge="Instan" />
      <div className="rounded-lg rounded-tr-none bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">&ldquo;Berapa omzet minggu ini?&rdquo;</span>
      </div>
      <div className="rounded-lg rounded-tl-none bg-primary px-2.5 py-1.5">
        <span className="text-[11px] text-primary-foreground">
          Rp18,2jt, naik 12% dari minggu lalu.
        </span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tanya apa saja soal bisnis kamu, dijawab dari data asli.
      </p>
    </div>
  );
}

export function InventoryModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Boxes} name="Inventory" badge="Aman" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Bola Padel</span>
        <span className="text-[10px] font-medium text-emerald-600">Aman</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Grip Raket</span>
        <span className="text-[10px] font-medium text-accent">Stok Menipis</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Alert otomatis sebelum stok benar-benar habis.
      </p>
    </div>
  );
}

export function PosModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={CreditCard} name="POS" badge="Real-time" />
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sewa Lapangan A</span>
        <span className="text-[11px] font-medium text-foreground">Rp150rb</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-muted px-2.5 py-1.5">
        <span className="text-[11px] text-foreground">Sewa Raket</span>
        <span className="text-[11px] font-medium text-foreground">Rp25rb</span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Tiap transaksi otomatis tercatat ke Akunting — tanpa input dobel.
      </p>
    </div>
  );
}

export function StrategicInsightModuleIllustration() {
  return (
    <div className="space-y-2.5">
      <ModuleHeader icon={Compass} name="Insight Strategis" badge="Prediktif" />
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
        Bukan cuma laporan masa lalu, tapi arah untuk langkah berikutnya.
      </p>
    </div>
  );
}

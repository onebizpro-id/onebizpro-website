import { BrowserFrame } from "@/components/landing/browser-frame";
import {
  BookingModuleIllustration,
  CrmModuleIllustration,
  AccountingModuleIllustration,
  HrModuleIllustration,
  AssistantModuleIllustration,
  InventoryModuleIllustration,
  PosModuleIllustration,
  StrategicInsightModuleIllustration,
  MarketingModuleIllustration,
  SalesModuleIllustration,
  ProjectModuleIllustration,
  CustomerPortalModuleIllustration,
} from "@/components/landing/module-illustrations";

export const MODULE_NAMES = [
  "Pemasaran",
  "Prospek",
  "Portal Pelanggan",
  "Pelanggan",
  "Booking Online",
  "Manajemen Proyek",
  "Keuangan",
  "Pegawai",
  "Asisten",
  "Stok & Produk",
  "Kasir",
  "Monitoring Bisnis",
] as const;

const modules = [
  { name: "Pemasaran", Illustration: MarketingModuleIllustration },
  { name: "Prospek", Illustration: SalesModuleIllustration },
  { name: "Portal Pelanggan", Illustration: CustomerPortalModuleIllustration },
  { name: "CRM", Illustration: CrmModuleIllustration },
  { name: "Booking", Illustration: BookingModuleIllustration },
  { name: "Manajemen Proyek", Illustration: ProjectModuleIllustration },
  { name: "Akunting", Illustration: AccountingModuleIllustration },
  { name: "HR", Illustration: HrModuleIllustration },
  { name: "Tanya Asisten", Illustration: AssistantModuleIllustration },
  { name: "Inventory", Illustration: InventoryModuleIllustration },
  { name: "POS", Illustration: PosModuleIllustration },
  { name: "Insight Strategis", Illustration: StrategicInsightModuleIllustration },
] as const;

export function Modules() {
  return (
    <section id="modul" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Satu Platform, Semua Modul Bisnis Kamu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dari lead pertama masuk sampai proyek selesai dan buku besar rapi —
            Pemasaran, Prospek, Portal Pelanggan, Booking, Manajemen Proyek, HR,
            dan POS tinggal dinyalakan begitu bisnis kamu butuh. Akunting lengkap
            ada di semua paket sejak awal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ name, Illustration }) => (
            <div
              key={name}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <BrowserFrame className="rounded-none border-0 shadow-none">
                <Illustration />
              </BrowserFrame>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

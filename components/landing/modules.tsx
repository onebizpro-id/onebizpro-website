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
} from "@/components/landing/module-illustrations";

const modules = [
  { name: "Booking", Illustration: BookingModuleIllustration },
  { name: "CRM", Illustration: CrmModuleIllustration },
  { name: "Akunting", Illustration: AccountingModuleIllustration },
  { name: "HR", Illustration: HrModuleIllustration },
  { name: "Tanya Asisten", Illustration: AssistantModuleIllustration },
  { name: "Inventory", Illustration: InventoryModuleIllustration },
  { name: "POS", Illustration: PosModuleIllustration },
  { name: "Insight Strategis", Illustration: StrategicInsightModuleIllustration },
] as const;

export function Modules() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Satu Platform, Semua Modul Bisnis Kamu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tidak perlu tools terpisah-pisah. Booking, pelanggan, keuangan,
            tim, sampai stok — semua terhubung dalam satu sistem.
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

import { BrowserFrame } from "@/components/landing/browser-frame";
import {
  SlotAutomationIllustration,
  ExpenseIllustration,
  SummaryIllustration,
} from "@/components/landing/illustrations";

const visualFeatures = [
  {
    title: "Jadwal Otomatis Terbuka Kembali",
    copy: "Booking yang tidak jadi, otomatis kembali tersedia. Tidak ada jadwal \"nyangkut\" yang bikin kehilangan pelanggan lain.",
    Illustration: SlotAutomationIllustration,
  },
  {
    title: "Pengeluaran Tersusun Sendiri",
    copy: "Catat pengeluaran apa adanya — kategori tersusun otomatis. Laporan keuangan rapi tanpa kerja dobel di akhir bulan.",
    Illustration: ExpenseIllustration,
  },
  {
    title: "Ringkasan Mingguan Otomatis",
    copy: "Setiap minggu, ringkasan bisnis sudah menunggu — tidak perlu diminta, tidak perlu disusun manual, seperti dibuatkan oleh analis sendiri.",
    Illustration: SummaryIllustration,
  },
];

export function Features() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Bentuk Nyatanya Seperti Ini
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {visualFeatures.map(({ title, copy, Illustration }, i) => (
            <div
              key={title}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <BrowserFrame className="rounded-none border-0 shadow-none">
                <Illustration />
              </BrowserFrame>
              <div className="p-8 pt-6">
                <span className="text-sm font-semibold text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

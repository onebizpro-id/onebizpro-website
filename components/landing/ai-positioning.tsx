import { LineChart, NotebookText, RefreshCw } from "lucide-react";
import { BrowserFrame } from "@/components/landing/browser-frame";
import {
  InsightIllustration,
  ReportIllustration,
  AutomationIllustration,
} from "@/components/landing/illustrations";

const capabilities = [
  {
    icon: LineChart,
    Illustration: InsightIllustration,
    title: "AI Beritahu Anda Duluan",
    paragraphs: [
      "Bukan cuma angka, tapi artinya. Piutang menumpuk, atau pengeluaran kategori tertentu tiba-tiba naik — Anda tahu duluan, tanpa buka laporan satu per satu.",
      "Seperti punya analis bisnis berpengalaman di tim — yang selalu baca angka sebelum Anda sempat tanya.",
    ],
    closing: "Mudah dilihat, mudah dipahami — dampaknya langsung terasa saat Anda ambil keputusan.",
  },
  {
    icon: NotebookText,
    Illustration: ReportIllustration,
    title: "Ringkasan Bisnis Langsung ke WhatsApp",
    paragraphs: [
      "Tiap minggu, asisten Anda rangkum semua yang terjadi di bisnis — pemasukan, pengeluaran, kas — jadi beberapa kalimat yang gampang dibaca, bukan spreadsheet yang perlu ditafsirkan sendiri.",
      "Bukan sekadar rekap, tapi ringkasan dengan cara pandang seorang analis — supaya Anda langsung paham apa yang perlu dilakukan berikutnya.",
    ],
    closing: "Mudah dibaca, efisien dipahami — keputusan jadi lebih cepat diambil.",
  },
  {
    icon: RefreshCw,
    Illustration: AutomationIllustration,
    title: "Kerjaan Berulang, Jalan Sendiri",
    paragraphs: [
      "Reimbursement, faktur berulang, dan rekonsiliasi — kerjaan kecil yang sering luput, sekarang berjalan sendiri di belakang layar, supaya tidak ada catatan yang bocor dari hal yang seharusnya sederhana.",
    ],
    closing: "Mudah diatur sekali, efisien berjalan seterusnya.",
  },
];

export function AiPositioning() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          Asisten Bisnis, Bukan Chatbot Biasa
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Selalu Siap Kapan Saja Anda Butuh
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tanyakan kondisi bisnis, lihat insight, dan terima ringkasan bisnis — tanpa perlu
          membuka laporan satu per satu.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {capabilities.map(({ icon: Icon, Illustration, title, paragraphs, closing }) => (
          <div
            key={title}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm"
          >
            <BrowserFrame className="rounded-none border-0 shadow-none">
              <Illustration />
            </BrowserFrame>
            <div className="p-8">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-primary">
                {closing}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

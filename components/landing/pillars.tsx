import { LineChart, NotebookText, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: LineChart,
    title: "Asisten yang Kasih Tahu Apa yang Penting",
    paragraphs: [
      "Bukan cuma angka, tapi artinya. Booking naik minggu ini, atau pengeluaran maintenance lebih besar dari biasanya — kamu tahu duluan, tanpa buka laporan satu per satu.",
      "Seperti punya analis bisnis berpengalaman di tim — yang selalu baca angka sebelum kamu sempat tanya.",
    ],
    closing: "Mudah dilihat, mudah dipahami — dampaknya langsung terasa saat kamu ambil keputusan.",
  },
  {
    icon: NotebookText,
    title: "Laporan yang Sudah Jadi, Bukan Data Mentah",
    paragraphs: [
      "Tiap minggu, asisten kamu rangkum semua yang terjadi di bisnis — pemasukan, booking, aktivitas tim — jadi beberapa kalimat yang gampang dibaca, bukan spreadsheet yang perlu ditafsirkan sendiri.",
      "Bukan sekadar rekap, tapi ringkasan dengan cara pandang seorang analis — supaya kamu langsung paham apa yang perlu dilakukan berikutnya.",
    ],
    closing: "Mudah dibaca, efisien dipahami — keputusan jadi lebih cepat diambil.",
  },
  {
    icon: RefreshCw,
    title: "Kerjaan Berulang, Biar Jalan Sendiri",
    paragraphs: [
      "Jadwal yang batal otomatis kembali tersedia. Kerjaan kecil yang sering luput, sekarang berjalan sendiri di belakang layar — supaya tidak ada pendapatan yang bocor dari hal yang seharusnya sederhana.",
    ],
    closing: "Mudah diatur sekali, efisien berjalan seterusnya.",
  },
];

export function Pillars() {
  return (
    <section id="cara-kerja" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Satu Asisten, Tiga Cara Kerja Lebih Ringan
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Masing-masing dibangun dengan alur yang sama — mudah dipakai, kerja
          jadi efisien, dampaknya terasa besar.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, paragraphs, closing }) => (
          <div
            key={title}
            className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-sm italic text-primary">{closing}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

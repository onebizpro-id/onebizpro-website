const features = [
  {
    title: "Jadwal Otomatis Terbuka Kembali",
    copy: "Booking yang tidak jadi, otomatis kembali tersedia. Tidak ada jadwal \"nyangkut\" yang bikin kehilangan pelanggan lain.",
  },
  {
    title: "Pengeluaran Tersusun Sendiri",
    copy: "Catat pengeluaran apa adanya — kategori tersusun otomatis. Laporan keuangan rapi tanpa kerja dobel di akhir bulan.",
  },
  {
    title: "Ringkasan Mingguan Otomatis",
    copy: "Setiap minggu, ringkasan bisnis sudah menunggu — tidak perlu diminta, tidak perlu disusun manual, seperti dibuatkan oleh analis sendiri.",
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
          {features.map(({ title, copy }, i) => (
            <div key={title} className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <span className="text-sm font-semibold text-accent">{`0${i + 1}`}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

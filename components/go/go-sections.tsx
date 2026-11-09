import Link from "next/link";
import { FAQ, GO, GO_PAKET, MONEY_FEATURES, ORDER_FEATURES, PRICING_FEATURES, STEPS } from "@/lib/go";
import { GoCta } from "./go-cta";
import { GhostButton, LogoGo, Phone, Photo, PrimaryButton, SectionHead } from "./go-ui";

/** Tujuan tombol beli: Lynk.id bila URL sudah diisi, selain itu menuju bagian akses. Harga sengaja tidak ditampilkan dulu. */
const buyHref = GO.lynkUrl || "#akses";

export function GoNav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#172d48] bg-[#fbf6ea]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/go" aria-label="OneBizPro Go">
          <LogoGo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#4f607a] md:flex" aria-label="Menu Go">
          <a href="#topi" className="hover:text-[#172d48]">Satu orang</a>
          <a href="#demo" className="hover:text-[#172d48]">Hasilnya</a>
          <a href="#akses" className="hover:text-[#172d48]">Akses</a>
          <a href="#faq" className="hover:text-[#172d48]">FAQ</a>
        </nav>
        <GoCta href={buyHref} location="nav" className="go-btn go-btn-sm shrink-0 whitespace-nowrap">
          <span className="sm:hidden">Coba</span>
          <span className="hidden sm:inline">Coba Go Content</span>
        </GoCta>
      </div>
    </header>
  );
}

export function GoHero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="go-hand text-2xl text-[#2563eb]">Kamu = CEO + admin + desainer + sales</p>
          <h1 className="mt-2 text-[2.7rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.2rem]">
            One Person.<br />
            One Business.<br />
            <span className="go-mark">One AI Team.</span>
          </h1>
          <p className="mt-5 text-xl font-bold">Bisnis sendiri, nggak harus ribet sendiri.</p>
          <p className="mt-3 max-w-lg text-lg text-[#4f607a]">
            OneBizPro Go adalah AI Assistant untuk one-person business: <b className="text-[#172d48]">bikin konten, catat jualan, dan lihat cuan</b>, dari HP. Mulai dari <b className="text-[#172d48]">Go Content</b>, lalu naik ke <b className="text-[#172d48]">Go Order</b> dan <b className="text-[#172d48]">Go Money</b> saat bisnismu butuh.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <PrimaryButton href={buyHref} location="hero-primary" className="!h-14 !px-8 !text-lg">Coba Go Content</PrimaryButton>
            <GhostButton href="#demo" location="hero-secondary" className="!h-14 !text-lg">Lihat hasilnya</GhostButton>
          </div>
          <p className="mt-4 text-[15px] text-[#4f607a]">Dipakai langsung dari browser HP. Kode aktivasi dikirim setelah pembayaran diverifikasi.</p>
        </div>

        <div className="relative mx-auto h-[440px] w-full max-w-[420px] sm:h-[500px]">
          <Photo src="/go/carousel-2.jpg" w={1080} h={1350} alt="Contoh slide Carousel buatan Go Content" rotate={-5} className="absolute left-0 top-4 w-[56%]" />
          <Photo src="/go/post-1.jpg" w={1080} h={1350} alt="Contoh Instagram Post buatan Go Content" rotate={4} className="absolute right-0 top-24 w-[54%]" />
          <div className="go-note absolute bottom-2 left-3 w-[58%] bg-[#fff1a8]" style={{ transform: "rotate(-2deg)" }}>
            <p className="go-note-text">semua ini dibuat dari HP, sama satu orang.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const TOPI = [
  { t: "Bikin konten", c: "#fff1a8", r: -2, tag: "Tersedia sekarang", ada: true },
  { t: "Catat penjualan dan tagihan", c: "#d6e4ff", r: 1.5, tag: "Go Order · Segera", ada: false },
  { t: "Catat pengeluaran, lihat cuan", c: "#cfeee0", r: -1, tag: "Go Money · Segera", ada: false },
  { t: "Follow-up calon pembeli", c: "#ffd9d2", r: 2, tag: "Go Order · Segera", ada: false },
] as const;

export function GoTopi() {
  return (
    <section id="topi" className="go-section mx-auto max-w-6xl px-5 py-14">
      <SectionHead hand="mau punya bisnis sendiri?" title="Satu orang, banyak topi." sub="Pagi jadi admin, siang jadi desainer, malam jadi tukang posting. Go Content mengambil topi pertama, lalu Go Order dan Go Money menyusul." />
      <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {TOPI.map((n) => (
          <li
            key={n.t}
            className={`go-note ${n.ada ? "ring-2 ring-[#172d48]" : "opacity-80"}`}
            style={{ background: n.c, transform: `rotate(${n.r}deg)` }}
          >
            <p className="go-note-text">{n.t}</p>
            <span className={`go-stamp ${n.ada ? "text-[#2563eb]" : "text-[#4f607a]"}`}>{n.tag}</span>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-xl text-center text-base text-[#4f607a]">
        <b className="text-[#172d48]">Go Content adalah asisten pertama OneBizPro Go dan sudah bisa dipakai.</b> Go Order dan Go Money masih dalam pengujian dan akan dijual bertahap. Kami kabari lewat Instagram {GO.instagramHandle}.
      </p>
      <div className="go-card mx-auto mt-8 max-w-2xl bg-[#fff1a8] p-6">
        <p className="go-hand text-2xl text-[#2563eb]">Langkah pertama menuju Personal AI Business Assistant</p>
        <p className="mt-2 text-base">
          Tujuan kami: asisten AI pribadi yang membantu satu orang menjalankan bisnisnya. Hari ini, Go Content membantu menyusun naskah dan membuat konten saat kamu memintanya. Kamu yang menentukan dan memposting. Belum ada AI Agent atau otomatisasi yang jalan sendiri.
        </p>
      </div>
    </section>
  );
}

export function GoDemo() {
  return (
    <section id="demo" className="go-section mx-auto max-w-6xl px-5 py-14">
      <SectionHead hand="hasil nyata, bukan mockup" title="Dibuat langsung dengan Go Content." sub="Post, Carousel, Story, Reels (MP4), dan Highlight Cover. Semua gambar di sini keluar dari aplikasinya." />
      <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
        <div className="w-[46%] max-w-[205px]" style={{ transform: "rotate(-2deg)" }}>
          <div className="go-phone">
            <div>
              <video className="block h-auto w-full" src="/go/reels-demo.mp4" poster="/go/reels-poster.jpg" controls playsInline preload="none" aria-label="Demo Reels buatan Go Content" />
            </div>
          </div>
          <p className="go-hand mt-2 text-center text-2xl">Reels (MP4)</p>
        </div>
        <div className="w-[46%] max-w-[205px]">
          <Photo src="/go/post-1.jpg" w={1080} h={1350} alt="Contoh Instagram Post buatan Go Content" rotate={2} />
          <p className="go-hand mt-3 text-center text-2xl">Post</p>
        </div>
        <div className="w-[46%] max-w-[205px]">
          <Photo src="/go/carousel-3.jpg" w={1080} h={1350} alt="Contoh slide Carousel buatan Go Content" rotate={-3} />
          <p className="go-hand mt-3 text-center text-2xl">Carousel</p>
        </div>
        <div className="w-[46%] max-w-[170px]">
          <Photo src="/go/story-2.jpg" w={1080} h={1920} alt="Contoh Story buatan Go Content" rotate={3} />
          <p className="go-hand mt-3 text-center text-2xl">Story</p>
        </div>
        <div className="w-[46%] max-w-[205px]">
          <Photo src="/go/carousel-1.jpg" w={1080} h={1350} alt="Contoh slide pembuka Carousel buatan Go Content" rotate={-2} />
          <p className="go-hand mt-3 text-center text-2xl">Slide pembuka</p>
        </div>
      </div>

      <h3 className="go-hand mt-16 text-center text-3xl text-[#2563eb]">Begini tampilan di dalam aplikasinya</h3>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
        {[
          ["/go/ui-isi.jpg", "Isi topik", "Layar mengisi topik konten"],
          ["/go/ui-tampil.jpg", "Pilih tampilan", "Layar memilih template dan pratinjau"],
          ["/go/ui-selesai.jpg", "Unduh atau kirim", "Layar selesai dengan tombol unduh dan kirim"],
        ].map(([src, label, alt]) => (
          <div key={src}>
            <Phone src={src} w={720} h={1548} alt={alt} />
            <p className="go-hand mt-3 text-center text-xl leading-tight sm:text-2xl">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-base text-[#4f607a]">Plus AI naskah, belasan template, dan pengaturan gaya akun supaya semua kontenmu seragam.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <PrimaryButton href={buyHref} location="after-demo" className="!h-14 !px-8 !text-lg">Coba Go Content</PrimaryButton>
        <GhostButton href={GO.instagramUrl} location="after-demo-ig" className="!h-14 !text-lg">Lihat contoh di Instagram</GhostButton>
      </div>
    </section>
  );
}

export function GoSteps() {
  return (
    <section className="go-section mx-auto max-w-5xl px-5 py-14">
      <SectionHead hand="caranya gampang" title="Tiga langkah, dari HP." />
      <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_240px]">
        <ol className="space-y-6">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="go-hand flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#172d48] bg-[#ffe45e] text-2xl">{s.n}</span>
              <div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-[#4f607a]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <Phone src="/go/ui-tampil.jpg" w={720} h={1548} alt="Layar Go Content: pratinjau Carousel dan pilihan template" className="max-w-[230px] rotate-2" />
      </div>
    </section>
  );
}

export function GoModul() {
  return (
    <section id="modul" className="go-section mx-auto max-w-6xl px-5 py-14">
      <SectionHead hand="setelah konten, lanjut jualan" title="Dari konten, ke jualan, ke cuan." sub="Dua asisten berikutnya terhubung dengan Go Content. Keduanya masih dalam pengujian dan belum dijual." />
      <ol className="mx-auto mt-10 grid max-w-3xl grid-cols-3 items-start gap-3 sm:gap-8">
        {[
          { n: "1", t: "Bikin konten", d: "Go Content", src: "/go/ui-tampil.jpg", w: 720, h: 1548, alt: "Layar Go Content: pratinjau Carousel dan pilihan template" },
          { n: "2", t: "Catat jualan", d: "Go Order", src: "/go/app-order-beranda.jpg", w: 780, h: 1688, alt: "Layar Go Order: penjualan bulan ini dan menu catat penjualan, prospek, pelanggan, dan tagihan" },
          { n: "3", t: "Lihat cuan", d: "Go Money", src: "/go/app-money-beranda.jpg", w: 780, h: 1688, alt: "Layar Go Money: cuan perkiraan bulan ini dan menu catat pengeluaran, foto struk, dan laporan" },
        ].map((x) => (
          <li key={x.n} className="text-center">
            <Phone src={x.src} w={x.w} h={x.h} alt={x.alt} className="max-w-[220px]" />
            <p className="go-hand mt-3 text-xl text-[#2563eb] sm:text-2xl">{x.n}. {x.t}</p>
            <p className="text-sm font-bold sm:text-base">{x.d}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[#4f607a]">Tangkapan layar asli aplikasi, memakai data contoh.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="go-card bg-[#d6e4ff] p-7">
          <p className="go-hand text-2xl text-[#2563eb]">Go Order</p>
          <p className="mt-1 text-lg font-bold">Catat jualan tanpa ribet.</p>
          <ul className="mt-4 space-y-2.5 text-base">
            {ORDER_FEATURES.map((f) => <li key={f} className="flex gap-2.5"><span className="font-extrabold text-[#2563eb]">&#10003;</span>{f}</li>)}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Phone src="/go/app-order-penjualan.jpg" w={780} h={1688} alt="Daftar penjualan Go Order dengan status Lunas, Dibayar sebagian, dan Belum dibayar" />
            <Phone src="/go/app-order-chat.jpg" w={780} h={1688} alt="Form prospek di Go Order yang terisi otomatis dari chat dan siap dicek" />
          </div>
          <p className="mt-3 text-[13px] text-[#4f607a]">Kiri: daftar penjualan dan tagihan. Kanan: data prospek diisi AI dari chat, kamu cek sebelum menyimpan.</p>
          <span className="go-stamp mt-5 inline-block text-[#4f607a]">Segera di Lynk.id</span>
        </div>
        <div className="go-card bg-[#cfeee0] p-7">
          <p className="go-hand text-2xl text-[#0f8a6b]">Go Money</p>
          <p className="mt-1 text-lg font-bold">Tahu untung atau rugi, dan kapan balik modal.</p>
          <ul className="mt-4 space-y-2.5 text-base">
            {MONEY_FEATURES.map((f) => <li key={f} className="flex gap-2.5"><span className="font-extrabold text-[#0f8a6b]">&#10003;</span>{f}</li>)}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Phone src="/go/app-money-laporan.jpg" w={780} h={1688} alt="Laporan Go Money: penjualan, HPP, biaya, dan cuan perkiraan bulan ini" />
            <Phone src="/go/app-money-insight.jpg" w={780} h={1688} alt="Insight Go Money: ringkasan dan temuan AI dari laporan bulan ini" />
          </div>
          <p className="mt-3 text-[13px] text-[#4f607a]">Kiri: laporan cuan dan balik modal. Kanan: Insight AI menjelaskan laporanmu dengan bahasa sehari-hari.</p>
          <p className="mt-4 text-[15px] text-[#4f607a]">Ini perkiraan dari catatanmu, bukan pembukuan resmi atau perhitungan pajak. Belum untuk stok barang atau banyak rekening.</p>
          <span className="go-stamp mt-4 inline-block text-[#4f607a]">Segera di Lynk.id</span>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-base text-[#4f607a]">
        AI di Go Order dan Go Money hanya <b className="text-[#172d48]">membaca dan menjelaskan</b>. Chat, foto, dan struk baru dibaca setelah kamu setuju, hasilnya selalu kamu cek sebelum disimpan, dan uang baru dicatat masuk setelah kamu memastikan.
      </p>
    </section>
  );
}

export function GoPaket() {
  const tingkat = [
    { n: "Go Content", d: "Bikin konten Instagram dengan AI", w: "#fff1a8", ada: true },
    { n: GO_PAKET.order.name, d: "Plus catat prospek, penjualan, dan tagihan", w: "#d6e4ff", ada: false },
    { n: GO_PAKET.money.name, d: "Plus catat pengeluaran dan lihat cuan", w: "#cfeee0", ada: false },
  ];
  return (
    <section id="paket" className="go-section mx-auto max-w-5xl px-5 py-14">
      <SectionHead hand="naik bertahap" title="Tiga paket, saling bertingkat." sub="Tiap tingkat sudah termasuk yang di bawahnya. Go Order dan Go Money tidak dijual terpisah." />
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {tingkat.map((t, i) => (
          <li key={t.n} className="go-card p-6" style={{ background: t.w }}>
            <span className="go-hand flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#172d48] bg-white text-xl">{i + 1}</span>
            <h3 className="mt-3 text-lg font-bold">{t.n}</h3>
            <p className="mt-1 text-[#4f607a]">{t.d}</p>
            <span className={`go-stamp mt-4 inline-block ${t.ada ? "text-[#2563eb]" : "text-[#4f607a]"}`}>{t.ada ? "Tersedia sekarang" : "Segera"}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function GoPricing() {
  return (
    <section id="akses" className="go-section mx-auto max-w-6xl px-5 py-14">
      <SectionHead hand="mau coba?" title="Yang kamu dapat di Go Content." />
      <div className="go-card mx-auto mt-10 max-w-md bg-white p-7">
        <p className="go-hand text-2xl text-[#2563eb]">Go Content &middot; {GO.plan}</p>
        {GO.price && GO.normalPrice && (
          <p className="mt-2 flex items-center gap-2 text-[#4f607a]">
            <span>Harga normal <s className="font-semibold">{GO.normalPrice}</s></span>
            <span className="rounded-full bg-[#fff1a8] px-2.5 py-0.5 text-sm font-extrabold text-[#172d48]">Hemat 50%</span>
          </p>
        )}
        {GO.price && (
          <p className="mt-1 flex items-end gap-1">
            <span className="go-display text-5xl font-extrabold">{GO.price}</span>
            <span className="pb-1.5 text-[#4f607a]">{GO.period}</span>
          </p>
        )}
        <ul className="mt-5 space-y-3 text-base">
          {PRICING_FEATURES.map((f) => (
            <li key={f} className="flex gap-2.5"><span className="font-extrabold text-[#2563eb]">&#10003;</span>{f}</li>
          ))}
          <li className="flex gap-2.5">
            <span className="font-extrabold text-[#2563eb]">&#10003;</span>
            {GO.credits ? `${GO.credits} kredit AI per bulan` : "Kredit AI bulanan untuk naskah. Jumlahnya diinformasikan saat berlangganan."}
          </li>
        </ul>
        <p className="mt-4 text-[15px] text-[#4f607a]">
          {GO.price ? "Akses berlaku 30 hari sejak pembelian diverifikasi. Perpanjangan dengan membeli lagi." : "Harga dan tanggal pembukaan akan diumumkan di Instagram dan di halaman ini."}
        </p>
        {GO.lynkUrl ? (
          <PrimaryButton href={GO.lynkUrl} location="pricing" className="mt-6 w-full !h-14 !text-lg">Langganan Go Content</PrimaryButton>
        ) : (
          <div className="mt-6 space-y-4">
            <span className="flex h-12 w-full items-center justify-center rounded-xl border-2 border-dashed border-[#172d48] bg-[#fff1a8] text-base font-bold">Segera hadir di Lynk.id</span>
            <PrimaryButton href={GO.instagramUrl} location="pricing-ig" className="w-full !h-14 !text-lg">Tanya lewat DM Instagram</PrimaryButton>
          </div>
        )}
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-2">
        {([[GO_PAKET.order, "#d6e4ff"], [GO_PAKET.money, "#cfeee0"]] as const).map(([p, warna]) => (
          <div key={p.name} className="go-card p-6" style={{ background: warna }}>
            <p className="go-hand text-xl">{p.name}</p>
            {p.price && <p className="mt-2 go-display text-3xl font-extrabold">{p.price}<span className="pl-1 text-base font-normal text-[#4f607a]">{GO.period}</span></p>}
            <p className="mt-2 text-[15px] text-[#4f607a]">Paket di atas Go Content, sudah termasuk Go Content. Masih dalam pengujian.</p>
            {p.lynkUrl
              ? <PrimaryButton href={p.lynkUrl} location={p.name === GO_PAKET.order.name ? "pricing-order" : "pricing-money"} className="mt-4 w-full !h-12">Langganan {p.name}</PrimaryButton>
              : <span className="mt-4 flex h-12 w-full items-center justify-center rounded-xl border-2 border-dashed border-[#172d48] bg-white text-base font-bold">Segera di Lynk.id</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function GoFaq() {
  return (
    <section id="faq" className="go-section mx-auto max-w-3xl px-5 py-14">
      <SectionHead title="Pertanyaan yang sering muncul" />
      <div className="go-faq mt-8">
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function GoFinalCta() {
  return (
    <section className="bg-[#172d48]">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center text-white">
        <p className="go-hand text-2xl text-[#ffe45e]">one person. one business. one AI team.</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Mulai dari satu konten hari ini.</h2>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <GoCta href={buyHref} location="final" className="go-btn !border-[#ffe45e] !bg-[#ffe45e] !text-[#172d48] !shadow-[4px_4px_0_#2563eb]">Mulai dengan Go Content</GoCta>
          <GoCta href={GO.instagramUrl} location="final-ig" className="go-btn go-btn-ghost !border-white !bg-transparent !text-white !shadow-[4px_4px_0_#2563eb]">Ikuti {GO.instagramHandle}</GoCta>
        </div>
      </div>
    </section>
  );
}

export function GoFooter() {
  return (
    <footer className="border-t-2 border-[#172d48] bg-[#fbf6ea]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <LogoGo />
          <p className="mt-3 text-sm text-[#4f607a]">{GO.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4f607a]">
          <li><a className="hover:text-[#172d48]" href={GO.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram {GO.instagramHandle}</a></li>
          <li><Link className="hover:text-[#172d48]" href="/">OneBizPro Team: untuk bisnis dengan karyawan</Link></li>
          <li><Link className="hover:text-[#172d48]" href="/terms">Syarat</Link></li>
          <li><Link className="hover:text-[#172d48]" href="/privacy">Privasi</Link></li>
        </ul>
      </div>
    </footer>
  );
}

// OneBizPro Go: satu sumber untuk semua angka, tautan, dan teks yang bisa berubah.
// Harga, tautan Lynk.id, aplikasi, Instagram, dan jumlah kredit diisi lewat environment variable (lihat docs/onebizpro-go-landingpage.md).
// Jangan menulis tautan atau angka karangan di sini: kalau belum diisi, halaman menampilkan keadaan "segera hadir", bukan tautan rusak.

export const GO = {
  name: "OneBizPro Go",
  product: "Go Content",
  tagline: "Bisnis Sendiri, Nggak Harus Ribet Sendiri.",
  siteUrl: "https://onebizpro.id/go",
  // Harga dan nama paket HARUS sama dengan produk di Lynk.id (lynk.id/onebizprogo). Diisi langsung di sini supaya tidak tertimpa variabel lama.
  price: "Rp39.000",
  normalPrice: "",
  period: "/30 hari",
  plan: "Go Content",
  appUrl: process.env.NEXT_PUBLIC_GO_APP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_GO_INSTAGRAM_URL ?? "https://www.instagram.com/onebizpro.go/",
  instagramHandle: "@onebizpro.go",
  // Jumlah kredit AI Go Content per bulan; harus sama dengan kuota bawaan di aplikasi.
  credits: "300",
} as const;

// Tiga paket di Lynk.id, saling bertingkat dan tidak dijual terpisah: Go Order butuh Go Content, Go Money butuh Go Order.
// Nama dan harga harus sama dengan produk di lynk.id/onebizprogo.
// Kredit AI per bulan = satu saldo gabungan sesuai paket (di aplikasi: jumlah kuota modul aktif, 300 + 100 + 100).
export const KREDIT = { content: 300, starter: 400, complete: 500 } as const;
// url = halaman produk masing-masing di Lynk.id (bukan beranda toko), tujuan tombol beli.
export const GO_PAKET = {
  content: { name: "Go Content", isi: "Go Content", price: "Rp39.000", url: "https://lynk.id/onebizprogo/590r3zggqq5e", kredit: `${KREDIT.content} kredit AI per bulan` },
  starter: { name: "Go Starter", isi: "Go Content + Go Order", price: "Rp49.000", url: "https://lynk.id/onebizprogo/xonw8wpnxxn8", kredit: `${KREDIT.starter} kredit AI per bulan, dipakai bersama Go Content dan Go Order` },
  complete: { name: "Go Complete", isi: "Go Content + Go Order + Go Money", price: "Rp59.000", url: "https://lynk.id/onebizprogo/28dxmxd3631k", kredit: `${KREDIT.complete} kredit AI per bulan, dipakai bersama Go Content, Go Order, dan Go Money` },
} as const;

export const ORDER_FEATURES = [
  "Catat prospek, ubah jadi pelanggan, dan catat penjualan dalam satu alur",
  "Produk dan harga diisi sekali, mencatat penjualan tinggal ketuk",
  "Pembayaran penuh atau sebagian, dan tagihan yang belum lunas tidak terlewat",
  "Baca chat atau foto bukti transfer dengan AI untuk mengisi data: kamu yang mengecek dan menyimpan",
  "Lihat konten mana yang membawa penjualan",
  "Rekap per periode dan ekspor CSV",
] as const;

export const MONEY_FEATURES = [
  "Catat pengeluaran rutin, operasional, dan sekali bayar, atau foto struknya",
  "Catat pemasukan di luar penjualan",
  "Cuan perkiraan bulan ini, balik modal, dan harga minimal supaya tidak rugi",
  "Isi modal per produk sekali, laporan menghitung HPP dan cuannya",
  "Insight AI yang menjelaskan laporanmu dengan bahasa sehari-hari",
  "Ekspor CSV untuk akuntan",
] as const;

// Tujuan konten Go Content; harus sama dengan pilihan "Mau bikin apa?" di aplikasi. Unggahnya manual oleh pengguna.
export const PLATFORMS = ["Instagram", "TikTok", "Status WA", "Facebook", "YouTube Shorts"] as const;
export const FORMATS = [
  { nama: "Video 9:16", tujuan: "Instagram Reels, TikTok, Status WA, Facebook, YouTube Shorts", label: "Paling serbaguna" },
  { nama: "Carousel", tujuan: "Instagram, TikTok (mode foto), Facebook" },
  { nama: "Gambar", tujuan: "Instagram, Status WA, Facebook" },
  { nama: "Story", tujuan: "Instagram, Status WA, Facebook" },
  { nama: "Video 4:5", tujuan: "Instagram, Facebook" },
  { nama: "Sampul Highlight", tujuan: "Instagram" },
] as const;

export const STEPS = [
  { n: 1, title: "Pilih ide atau tulis topikmu", desc: "Pilih Gambar, Carousel, Story, Video, atau Sampul Highlight, lalu pilih ide dari bank idemu atau ketik topik sendiri." },
  { n: 2, title: "AI menyusun, kamu yang menentukan", desc: "Naskah dan caption dibuat sesuai gaya akunmu. Pilih template, ubah teks, foto, atau urutan." },
  { n: 3, title: "Unduh, lalu kamu yang posting", desc: "Unduh PNG, ZIP, atau MP4, atau kirim lewat lembar bagikan HP. Kamu yang menekan unggah di Instagram, TikTok, WhatsApp, Facebook, atau YouTube." },
] as const;

export const PRICING_FEATURES = [
  "Gambar, Carousel, Story, video MP4 (9:16 dan 4:5), dan Sampul Highlight",
  "Untuk Instagram, TikTok, Status WA, Facebook, dan YouTube Shorts",
  "AI Script untuk naskah dan caption",
  "Bank ide dan kalender rencana 7 hari",
  "20 template berbeda, plus pilihan warna dan font",
  "Pengaturan gaya akun supaya hasil AI sesuai gayamu",
  "Akses lewat HP maupun komputer",
] as const;

const creditsText = `${GO_PAKET.content.name} ${KREDIT.content} kredit per bulan, ${GO_PAKET.starter.name} ${KREDIT.starter}, dan ${GO_PAKET.complete.name} ${KREDIT.complete}. Di Go Starter dan Go Complete, satu saldo itu dipakai bersama semua modul di paketmu.`;

const priceText = `${GO_PAKET.content.name} ${GO_PAKET.content.price}, ${GO_PAKET.starter.name} (${GO_PAKET.starter.isi}) ${GO_PAKET.starter.price}, dan ${GO_PAKET.complete.name} (${GO_PAKET.complete.isi}) ${GO_PAKET.complete.price}. Masing-masing untuk akses 30 hari.`;

export const FAQ = [
  { q: "Apa itu OneBizPro Go?", a: "OneBizPro Go adalah AI Assistant untuk one-person business: satu orang yang menjalankan bisnisnya sendiri. Ada tiga modul: Go Content (bikin konten), Go Order (catat jualan), dan Go Money (catat pengeluaran dan lihat cuan). Semuanya sudah bisa dipakai lewat tiga paket: Go Content, Go Starter, dan Go Complete." },
  { q: "Apa itu Go Content?", a: "Go Content adalah AI Content Studio untuk membuat konten promosi: Gambar, Carousel, Story, video, dan Sampul Highlight, dengan bantuan AI untuk naskah dan caption." },
  { q: "Bisa dipakai untuk media sosial apa saja?", a: `${FORMATS.map((f) => `${f.nama}: ${f.tujuan}`).join(". ")}. Hasilnya kamu unduh atau bagikan, lalu kamu sendiri yang mengunggah.` },
  { q: "Apa itu Go Order dan Go Money?", a: "Go Order membantu mencatat prospek, pelanggan, penjualan, pembayaran, dan tagihan. Go Money membantu mencatat pengeluaran dan pemasukan, lalu menghitung cuan perkiraan, balik modal, dan harga minimal. Keduanya terhubung ke Go Content: kamu bisa melihat konten mana yang membawa penjualan." },
  { q: "Apa bedanya ketiga paket?", a: "Paketnya bertingkat. Go Content (Rp39.000): membuat konten. Go Starter (Rp49.000): Go Content ditambah Go Order untuk mencatat jualan. Go Complete (Rp59.000): Go Starter ditambah Go Money untuk mencatat pengeluaran dan melihat cuan. Tiap tingkat sudah termasuk yang di bawahnya." },
  { q: "Bisakah membeli Go Order atau Go Money saja?", a: "Tidak. Paketnya saling bertingkat dan tidak berdiri sendiri: Go Order butuh Go Content, dan Go Money butuh Go Order. Penjualan di Go Order adalah dasar hitungan di Go Money, jadi keduanya tidak dijual terpisah." },
  { q: "Di mana membeli Go Order dan Go Money?", a: "Lewat Lynk.id: Go Starter sudah berisi Go Order, dan Go Complete berisi Go Order dan Go Money. Kabar terbaru ada di Instagram " + GO.instagramHandle + "." },
  { q: "Apakah kredit AI-nya terpisah?", a: `Tidak. Kredit AI berupa satu saldo per bulan yang dipakai bersama semua modul di paketmu: ${GO_PAKET.content.name} ${KREDIT.content}, ${GO_PAKET.starter.name} ${KREDIT.starter}, dan ${GO_PAKET.complete.name} ${KREDIT.complete}. Mengisi manual selalu gratis.` },
  { q: "Apa yang dikirim ke AI, dan apakah disimpan?", a: "Hanya yang kamu minta dibaca: teks chat, foto bukti transfer atau struk, atau angka laporan untuk Insight. Kamu menyetujuinya sebelum dikirim. AI hanya membaca dan menjelaskan; ia tidak menyimpan atau mengirim apa pun, dan fotonya tidak disimpan oleh aplikasi. Hasilnya selalu kamu cek sebelum disimpan." },
  { q: "Apakah Go Money pembukuan resmi?", a: "Bukan. Go Money memberi perkiraan dari catatanmu: cuan, balik modal, dan harga minimal. Ia tidak untuk laporan pajak, stok barang, resep, utang ke pemasok, atau banyak rekening. Hasilnya bisa diekspor ke CSV untuk dikirim ke akuntan." },
  { q: "Apakah Go Content sudah AI Agent yang bekerja otomatis?", a: "Belum. Go Content membantu menyusun naskah dan tampilan konten saat kamu memintanya. Kamu yang memutuskan, menyunting, dan mengunggah. Tidak ada posting otomatis ke media sosial mana pun." },
  { q: "Siapa yang cocok memakainya?", a: "Online seller, creatorpreneur, freelancer, penyedia jasa, dan pemilik usaha kecil yang mengelola media sosialnya sendiri. Go Order dan Go Money cocok untuk kreator, penjual online, dan bisnis jasa dengan biaya yang jelas. Tim kecil juga boleh memakainya." },
  { q: "Berapa harganya?", a: priceText },
  { q: "Berapa lama masa akses?", a: "Akses berlaku 30 hari sejak pembelianmu diverifikasi. Perpanjangan dilakukan dengan membeli lagi. Belum ada perpanjangan otomatis." },
  { q: "Bagaimana sistem kredit AI?", a: `Satu naskah AI atau satu kali "Buat ulang" memakai 1 kredit. Kredit dihitung per bulan. ${creditsText} Kalau kredit habis, kamu tetap bisa menulis sendiri dengan kerangka sesuai gaya yang dipilih, dan memakai ide yang sudah tersimpan di bank idemu.` },
  { q: "Bagaimana mendapatkan akun dan kode aktivasi?", a: "Beli lewat Lynk.id. Setelah pembayaran diverifikasi, kode aktivasi dikirim lewat WhatsApp atau email yang kamu pakai saat membeli. Di aplikasi, pilih Aktivasi akun, isi email dan kode itu, lalu buat kata sandimu sendiri. Kode hanya bisa dipakai sekali. Pengiriman kode dilakukan manual, jadi bisa butuh waktu." },
  { q: "Bagaimana cara menggunakannya?", a: "Buka aplikasi di browser HP atau komputer, isi gaya akunmu sekali (nama, warna, nada bicara), pilih jenis konten, tulis topik, tekan Buat dengan AI, pilih template, periksa hasilnya, lalu unduh atau kirim lewat lembar bagikan HP." },
  { q: "Apakah bisa membuat video Reels, TikTok, atau Shorts?", a: "Bisa, dalam bentuk video teks bergerak (9:16 atau 4:5) yang diunduh sebagai MP4. Ini bukan video dari klip kamu sendiri. Video direkam di browser selama durasinya, jadi biarkan halaman tetap terbuka. Pengujian kami baru di Chrome desktop, jadi hasil di HP tertentu bisa berbeda." },
  { q: "Apakah bisa dipakai lewat HP?", a: "Bisa, aplikasinya dirancang untuk HP dan juga jalan di komputer. Fitur kirim lewat lembar bagikan bergantung pada HP dan versi aplikasi tujuanmu." },
] as const;

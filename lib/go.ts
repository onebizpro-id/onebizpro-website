// OneBizPro Go: satu sumber untuk semua angka, tautan, dan teks yang bisa berubah.
// Harga, tautan Lynk.id, aplikasi, Instagram, dan jumlah kredit diisi lewat environment variable (lihat docs/onebizpro-go-landingpage.md).
// Jangan menulis tautan atau angka karangan di sini: kalau belum diisi, halaman menampilkan keadaan "segera hadir", bukan tautan rusak.

export const GO = {
  name: "OneBizPro Go",
  product: "Go Content",
  tagline: "Bisnis Sendiri, Nggak Harus Ribet Sendiri.",
  siteUrl: "https://onebizpro.id/go",
  // Harga dan nama paket HARUS sama dengan produk di Lynk.id (lynk.id/onebizprogo). Diisi langsung di sini supaya tidak tertimpa variabel lama.
  price: "Rp59.000",
  normalPrice: "",
  period: "/30 hari",
  plan: "Go Content",
  // Alamat toko di Lynk.id (memuat ketiga produk).
  lynkUrl: "https://lynk.id/onebizprogo",
  appUrl: process.env.NEXT_PUBLIC_GO_APP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_GO_INSTAGRAM_URL ?? "https://www.instagram.com/onebizpro.go/",
  instagramHandle: "@onebizpro.go",
  // Jumlah kredit AI Go Content per bulan; harus sama dengan kuota bawaan di aplikasi.
  credits: "120",
} as const;

// Tiga paket di Lynk.id, saling bertingkat dan tidak dijual terpisah: Go Order butuh Go Content, Go Money butuh Go Order.
// Nama dan harga harus sama dengan produk di lynk.id/onebizprogo.
export const KREDIT = { content: 120, order: 50, money: 30 } as const;
export const GO_PAKET = {
  content: { name: "Go Content", isi: "Go Content", price: "Rp59.000", kredit: `${KREDIT.content} kredit AI Go Content per bulan` },
  starter: { name: "Go Starter", isi: "Go Content + Go Order", price: "Rp79.000", kredit: `${KREDIT.content} kredit Go Content dan ${KREDIT.order} kredit Go Order per bulan` },
  complete: { name: "Go Complete", isi: "Go Content + Go Order + Go Money", price: "Rp89.000", kredit: `${KREDIT.content} kredit Go Content, ${KREDIT.order} Go Order, dan ${KREDIT.money} Go Money per bulan` },
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

export const STEPS = [
  { n: 1, title: "Pilih ide atau tulis topikmu", desc: "Pilih Post, Carousel, Story, Reels, atau Highlight Cover, lalu pilih ide dari bank idemu atau ketik topik sendiri." },
  { n: 2, title: "AI menyusun, kamu yang menentukan", desc: "Naskah dan caption dibuat sesuai gaya akunmu. Pilih template, ubah teks, foto, atau urutan." },
  { n: 3, title: "Unduh, lalu kamu yang posting", desc: "Unduh PNG, ZIP, atau MP4, atau kirim lewat lembar bagikan HP. Kamu yang menekan unggah di Instagram." },
] as const;

export const PRICING_FEATURES = [
  "Instagram Post, Carousel, Story, Reels (MP4), dan Highlight Cover",
  "AI Script untuk naskah dan caption",
  "Bank ide dan kalender rencana 7 hari",
  "20 template berbeda, plus pilihan warna dan font",
  "Pengaturan gaya akun supaya hasil AI sesuai gayamu",
  "Akses lewat HP maupun komputer",
] as const;

const creditsText = `Go Content ${KREDIT.content} kredit per bulan, Go Order ${KREDIT.order}, dan Go Money ${KREDIT.money}, sesuai modul yang ada di paketmu.`;

const priceText = `${GO_PAKET.content.name} ${GO_PAKET.content.price}, ${GO_PAKET.starter.name} (${GO_PAKET.starter.isi}) ${GO_PAKET.starter.price}, dan ${GO_PAKET.complete.name} (${GO_PAKET.complete.isi}) ${GO_PAKET.complete.price}. Masing-masing untuk akses 30 hari.`;

export const FAQ = [
  { q: "Apa itu OneBizPro Go?", a: "OneBizPro Go adalah AI Assistant untuk one-person business: satu orang yang menjalankan bisnisnya sendiri. Ada tiga modul: Go Content (bikin konten), Go Order (catat jualan), dan Go Money (catat pengeluaran dan lihat cuan). Semuanya sudah bisa dipakai lewat tiga paket: Go Content, Go Starter, dan Go Complete." },
  { q: "Apa itu Go Content?", a: "Go Content adalah AI Content Studio untuk membuat konten promosi Instagram: Post, Carousel, Story, Reels, dan Highlight Cover, dengan bantuan AI untuk naskah dan caption." },
  { q: "Apa itu Go Order dan Go Money?", a: "Go Order membantu mencatat prospek, pelanggan, penjualan, pembayaran, dan tagihan. Go Money membantu mencatat pengeluaran dan pemasukan, lalu menghitung cuan perkiraan, balik modal, dan harga minimal. Keduanya terhubung ke Go Content: kamu bisa melihat konten mana yang membawa penjualan." },
  { q: "Apa bedanya ketiga paket?", a: "Paketnya bertingkat. Go Content (Rp59.000): membuat konten. Go Starter (Rp79.000): Go Content ditambah Go Order untuk mencatat jualan. Go Complete (Rp89.000): Go Starter ditambah Go Money untuk mencatat pengeluaran dan melihat cuan. Tiap tingkat sudah termasuk yang di bawahnya." },
  { q: "Bisakah membeli Go Order atau Go Money saja?", a: "Tidak. Paketnya saling bertingkat dan tidak berdiri sendiri: Go Order butuh Go Content, dan Go Money butuh Go Order. Penjualan di Go Order adalah dasar hitungan di Go Money, jadi keduanya tidak dijual terpisah." },
  { q: "Di mana membeli Go Order dan Go Money?", a: "Lewat Lynk.id: Go Starter sudah berisi Go Order, dan Go Complete berisi Go Order dan Go Money. Kabar terbaru ada di Instagram " + GO.instagramHandle + "." },
  { q: "Apakah kredit AI-nya terpisah?", a: "Ya. Tiap modul punya kredit AI sendiri per bulan: Go Content 120, Go Order 50, dan Go Money 30. Memakai kredit Go Order atau Go Money tidak mengurangi kredit Go Content. Mengisi manual selalu gratis." },
  { q: "Apa yang dikirim ke AI, dan apakah disimpan?", a: "Hanya yang kamu minta dibaca: teks chat, foto bukti transfer atau struk, atau angka laporan untuk Insight. Kamu menyetujuinya sebelum dikirim. AI hanya membaca dan menjelaskan; ia tidak menyimpan atau mengirim apa pun, dan fotonya tidak disimpan oleh aplikasi. Hasilnya selalu kamu cek sebelum disimpan." },
  { q: "Apakah Go Money pembukuan resmi?", a: "Bukan. Go Money memberi perkiraan dari catatanmu: cuan, balik modal, dan harga minimal. Ia tidak untuk laporan pajak, stok barang, resep, utang ke pemasok, atau banyak rekening. Hasilnya bisa diekspor ke CSV untuk dikirim ke akuntan." },
  { q: "Apakah Go Content sudah AI Agent yang bekerja otomatis?", a: "Belum. Go Content membantu menyusun naskah dan tampilan konten saat kamu memintanya. Kamu yang memutuskan, menyunting, dan mengunggah. Tidak ada posting otomatis ke Instagram." },
  { q: "Siapa yang cocok memakainya?", a: "Online seller, creatorpreneur, freelancer, penyedia jasa, dan pemilik usaha kecil yang mengelola akun Instagram sendiri. Go Order dan Go Money cocok untuk kreator, penjual online, dan bisnis jasa dengan biaya yang jelas. Tim kecil juga boleh memakainya." },
  { q: "Berapa harganya?", a: priceText },
  { q: "Berapa lama masa akses?", a: "Akses berlaku 30 hari sejak pembelianmu diverifikasi. Perpanjangan dilakukan dengan membeli lagi. Belum ada perpanjangan otomatis." },
  { q: "Bagaimana sistem kredit AI?", a: `Satu naskah AI atau satu kali "Buat ulang" memakai 1 kredit. Kredit dihitung per bulan. ${creditsText} Kalau kredit habis, kamu tetap bisa menulis sendiri dengan kerangka sesuai gaya yang dipilih, dan memakai ide yang sudah tersimpan di bank idemu.` },
  { q: "Bagaimana mendapatkan akun dan kode aktivasi?", a: "Beli lewat Lynk.id. Setelah pembayaran diverifikasi, kode aktivasi dikirim lewat WhatsApp atau email yang kamu pakai saat membeli. Di aplikasi, pilih Aktivasi akun, isi email dan kode itu, lalu buat kata sandimu sendiri. Kode hanya bisa dipakai sekali. Pengiriman kode dilakukan manual, jadi bisa butuh waktu." },
  { q: "Bagaimana cara menggunakannya?", a: "Buka aplikasi di browser HP atau komputer, isi gaya akunmu sekali (nama, warna, nada bicara), pilih jenis konten, tulis topik, tekan Buat dengan AI, pilih template, periksa hasilnya, lalu unduh atau kirim lewat lembar bagikan HP." },
  { q: "Apakah bisa membuat Reels?", a: "Bisa, dalam bentuk video teks bergerak yang diunduh sebagai MP4. Ini bukan video dari klip kamu sendiri. Video direkam di browser selama durasinya, jadi biarkan halaman tetap terbuka. Pengujian kami baru di Chrome desktop, jadi hasil di HP tertentu bisa berbeda." },
  { q: "Apakah bisa dipakai lewat HP?", a: "Bisa, aplikasinya dirancang untuk HP dan juga jalan di komputer. Fitur kirim lewat lembar bagikan bergantung pada HP dan versi Instagram kamu." },
] as const;

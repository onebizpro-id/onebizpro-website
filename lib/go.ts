// OneBizPro Go: satu sumber untuk semua angka, tautan, dan teks yang bisa berubah.
// Harga, tautan Lynk.id, aplikasi, Instagram, dan jumlah kredit diisi lewat environment variable (lihat docs/onebizpro-go-landingpage.md).
// Jangan menulis tautan atau angka karangan di sini: kalau belum diisi, halaman menampilkan keadaan "segera hadir", bukan tautan rusak.

export const GO = {
  name: "OneBizPro Go",
  product: "Go Content",
  tagline: "Bisnis Sendiri, Nggak Harus Ribet Sendiri.",
  siteUrl: "https://onebizpro.id/go",
  // Paket Starter: harga spesial dan harga normal (dicoret). Harus sama dengan produk di Lynk.id. Env boleh menimpa.
  price: process.env.NEXT_PUBLIC_GO_PRICE || "Rp59.000",
  normalPrice: process.env.NEXT_PUBLIC_GO_NORMAL_PRICE ?? "Rp119.000",
  period: "/30 hari",
  plan: "Paket Starter",
  // Alamat produk di Lynk.id; env boleh menimpa (mis. untuk uji).
  lynkUrl: process.env.NEXT_PUBLIC_LYNK_GO_CONTENT_URL || "https://lynk.id/onebizprogo",
  appUrl: process.env.NEXT_PUBLIC_GO_APP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_GO_INSTAGRAM_URL ?? "https://www.instagram.com/onebizpro.go/",
  instagramHandle: "@onebizpro.go",
  // Jumlah kredit AI per bulan sesuai yang ditetapkan administrator. Kosong = teks umum tanpa angka.
  credits: process.env.NEXT_PUBLIC_GO_CREDITS || "100",
} as const;

// Paket di atas Go Content. Saling bertingkat dan tidak dijual terpisah: Go Order butuh Go Content, Go Money butuh Go Order.
// Tautan Lynk.id dan harga diisi lewat environment variable setelah produknya siap; kosong = kartu menampilkan "Segera di Lynk.id", tanpa tautan atau angka karangan.
export const GO_PAKET = {
  order: { name: "Go Content + Go Order", lynkUrl: process.env.NEXT_PUBLIC_LYNK_GO_ORDER_URL ?? "", price: process.env.NEXT_PUBLIC_GO_ORDER_PRICE ?? "" },
  money: { name: "Go Content + Go Order + Go Money", lynkUrl: process.env.NEXT_PUBLIC_LYNK_GO_MONEY_URL ?? "", price: process.env.NEXT_PUBLIC_GO_MONEY_PRICE ?? "" },
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
  "HPP per produk dihitung otomatis dari biaya yang naik tiap ada yang beli",
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

const creditsText = GO.credits
  ? `Akunmu mendapat ${GO.credits} kredit AI per bulan.`
  : "Jumlah kredit per bulan diinformasikan saat berlangganan.";

const priceText = GO.price
  ? `Paket Starter Go Content ${GO.price}${GO.period}${GO.normalPrice ? ` (harga normal ${GO.normalPrice})` : ""}, untuk akses 30 hari.`
  : "Harga Go Content akan diumumkan bersama pembukaan akses di Lynk.id dan Instagram @onebizpro.go. Belum ada harga resmi yang berlaku sebelum itu.";

export const FAQ = [
  { q: "Apa itu OneBizPro Go?", a: "OneBizPro Go adalah AI Assistant untuk one-person business: satu orang yang menjalankan bisnisnya sendiri. Asisten pertamanya, Go Content, sudah bisa dipakai. Go Order (catat jualan) dan Go Money (catat pengeluaran dan lihat cuan) menyusul sebagai paket yang naik bertahap dan belum dijual sekarang." },
  { q: "Apa itu Go Content?", a: "Go Content adalah AI Content Studio untuk membuat konten promosi Instagram: Post, Carousel, Story, Reels, dan Highlight Cover, dengan bantuan AI untuk naskah dan caption." },
  { q: "Apa itu Go Order dan Go Money?", a: "Go Order membantu mencatat prospek, pelanggan, penjualan, pembayaran, dan tagihan. Go Money membantu mencatat pengeluaran dan pemasukan, lalu menghitung cuan perkiraan, balik modal, dan harga minimal. Keduanya terhubung ke Go Content: kamu bisa melihat konten mana yang membawa penjualan." },
  { q: "Apa bedanya ketiga paket?", a: "Paketnya bertingkat. Go Content: membuat konten. Go Content + Go Order: ditambah mencatat jualan. Go Content + Go Order + Go Money: ditambah mencatat pengeluaran dan melihat cuan. Tiap tingkat sudah termasuk yang di bawahnya." },
  { q: "Bisakah membeli Go Order atau Go Money saja?", a: "Tidak. Paketnya saling bertingkat dan tidak berdiri sendiri: Go Order butuh Go Content, dan Go Money butuh Go Order. Penjualan di Go Order adalah dasar hitungan di Go Money, jadi keduanya tidak dijual terpisah." },
  { q: "Kapan Go Order dan Go Money bisa dibeli?", a: "Keduanya masih dalam pengujian dan belum dijual. Kami sedang menyiapkan produknya di Lynk.id. Pengumumannya ada di halaman ini dan di Instagram " + GO.instagramHandle + "." },
  { q: "Apakah kredit AI-nya terpisah?", a: "Ya. Tiap modul punya kredit AI sendiri per bulan, jadi memakai kredit Go Order atau Go Money tidak mengurangi kredit Go Content. Mengisi manual selalu gratis." },
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

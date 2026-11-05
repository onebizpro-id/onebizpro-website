// OneBizPro Go: satu sumber untuk semua angka, tautan, dan teks yang bisa berubah.
// Tautan Lynk.id, aplikasi, Instagram, dan jumlah kredit diisi lewat environment variable (lihat docs/onebizpro-go-landingpage.md).
// Jangan menulis tautan atau angka karangan di sini: kalau belum diisi, halaman menampilkan keadaan "segera hadir", bukan tautan rusak.

export const GO = {
  name: "OneBizPro Go",
  product: "Go Content",
  tagline: "Bisnis Sendiri, Nggak Harus Ribet Sendiri.",
  siteUrl: "https://onebizpro.id/go",
  price: "Rp69.000",
  period: "/bulan",
  lynkUrl: process.env.NEXT_PUBLIC_LYNK_GO_CONTENT_URL ?? "",
  appUrl: process.env.NEXT_PUBLIC_GO_APP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_GO_INSTAGRAM_URL ?? "https://www.instagram.com/onebizpro.go/",
  instagramHandle: "@onebizpro.go",
  // Jumlah kredit AI per bulan sesuai yang ditetapkan administrator. Kosong = teks umum tanpa angka.
  credits: process.env.NEXT_PUBLIC_GO_CREDITS ?? "",
} as const;

export const STEPS = [
  { n: 1, title: "Tulis topik atau produkmu", desc: "Pilih Post, Carousel, Story, Reels, atau Highlight Cover. Mau lebih tajam? Tambah masalah pembaca dan kata kunci DM." },
  { n: 2, title: "AI menyusun, kamu yang menentukan", desc: "Naskah dan caption dibuat sesuai gaya akunmu. Pilih template, ubah teks, foto, atau urutan." },
  { n: 3, title: "Unduh, lalu kamu yang posting", desc: "Unduh PNG, ZIP, atau MP4, atau kirim lewat lembar bagikan HP. Kamu yang menekan unggah di Instagram." },
] as const;

export const PRICING_FEATURES = [
  "Instagram Post, Carousel, Story, Reels (MP4), dan Highlight Cover",
  "AI Script untuk naskah dan caption",
  "Belasan template dan pengaturan gaya akun",
  "Akses lewat HP maupun komputer",
] as const;

export const FAQ = [
  { q: "Apa itu OneBizPro Go?", a: "OneBizPro Go adalah teman kerja digital dari OneBizPro untuk individu dan usaha kecil. Produk pertamanya adalah Go Content. Modul lain belum tersedia." },
  { q: "Apa itu Go Content?", a: "Go Content adalah AI Content Studio: alat untuk membuat konten promosi (Post, Carousel, Story, Reels, Highlight Cover) lebih praktis, tanpa harus mulai dari nol." },
  { q: "Siapa yang cocok memakai Go Content?", a: "Online seller, creatorpreneur, freelancer, penyedia jasa, dan pemilik usaha kecil yang mengelola akun Instagram sendiri." },
  { q: "Apakah bisa membuat Carousel?", a: "Bisa. Kamu memilih topik, AI menyusun slide-nya, lalu kamu menyunting teks dan memilih template." },
  { q: "Apakah bisa membuat Reels?", a: "Bisa, dalam bentuk video teks bergerak yang diunduh sebagai MP4. Ini bukan video dari klip kamu sendiri. Video direkam di browser selama durasinya, jadi biarkan halaman tetap terbuka." },
  { q: "Bagaimana cara berlangganan?", a: "Lewat produk Go Content di Lynk.id. Akses yang dibeli berlaku satu bulan, dan perpanjangan dilakukan dengan membeli lagi." },
  { q: "Bagaimana mendapatkan akun dan kode aktivasi?", a: "Setelah pembayaran diverifikasi, kode aktivasi dikirim lewat WhatsApp atau email yang kamu pakai saat membeli. Kode itu dipakai sekali untuk membuat kata sandimu sendiri." },
  { q: "Apakah bisa dipakai lewat HP?", a: "Bisa, aplikasinya dirancang untuk HP. Di komputer juga bisa. Fitur kirim lewat lembar bagikan bergantung pada HP dan versi Instagram kamu." },
  { q: "Bagaimana sistem kredit AI?", a: "Satu naskah AI atau satu kali \"Buat ulang\" memakai 1 kredit. Kredit direset tiap bulan. Kalau kredit habis, contoh siap pakai tetap bisa dipakai gratis." },
] as const;

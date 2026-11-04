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

export const FEATURES = [
  { key: "post", title: "Instagram Post", desc: "Satu gambar bertulisan yang rapi, ukuran 4:5 atau 1:1, siap diunggah.", img: "/go/post-1.jpg", w: 1080, h: 1350 },
  { key: "carousel", title: "Carousel", desc: "Geser-geser 4 sampai 6 slide dari satu topik. Hook di slide pertama, ajakan di slide terakhir.", img: "/go/carousel-1.jpg", w: 1080, h: 1350 },
  { key: "story", title: "Story", desc: "Frame layar penuh 9:16 dengan teks pendek yang mudah dibaca.", img: "/go/story-1.jpg", w: 1080, h: 1920 },
  { key: "reels", title: "Reels (MP4)", desc: "Video teks bergerak dari adegan yang kamu atur, diunduh sebagai MP4.", img: "/go/reels-poster.jpg", w: 1080, h: 1920 },
  { key: "highlight", title: "Highlight Cover", desc: "Sampul ikon bulat yang seragam dengan gaya akunmu.", img: "/go/highlight-1.jpg", w: 1080, h: 1080 },
  { key: "ai", title: "AI Script", desc: "Naskah dan caption dari AI sesuai gaya akunmu. Memakai kredit bulanan; contoh siap pakai tetap gratis.", img: "/go/ui-tampil.jpg", w: 720, h: 1548 },
  { key: "template", title: "Template konten", desc: "Belasan template, dari Scrapbook sampai Editorial. Tinggal pilih, tampilannya langsung berganti.", img: "/go/tpl-scrapbook-mint.jpg", w: 720, h: 900 },
  { key: "gaya", title: "Pengaturan gaya akun", desc: "Isi sekali: nama, warna, font, dan nada bicara. Semua konten baru otomatis mengikuti.", img: "/go/ui-gaya.jpg", w: 720, h: 1548 },
] as const;

export const STEPS = [
  { n: 1, title: "Pilih jenis konten", desc: "Post, Carousel, Story, Reels, atau Highlight Cover.", img: "/go/ui-beranda.jpg" },
  { n: 2, title: "Isi kebutuhanmu", desc: "Tulis topik atau produk. Mau lebih tajam? Tambah masalah pembaca dan kata kunci DM.", img: "/go/ui-isi.jpg" },
  { n: 3, title: "Pakai AI dan template", desc: "AI menyusun naskah, kamu memilih tampilan. Hasilnya langsung terlihat.", img: "/go/ui-tampil.jpg" },
  { n: 4, title: "Periksa hasilnya", desc: "Ubah teks, foto, atau urutan. Ada pengecekan kata janji yang berisiko.", img: "/go/ui-tampil.jpg" },
  { n: 5, title: "Unduh atau kirim", desc: "Unduh PNG, ZIP, atau MP4, atau kirim ke Instagram lewat lembar bagikan HP. Kamu yang menekan unggah.", img: "/go/ui-selesai.jpg" },
] as const;

export const SEGMENTS = [
  { title: "Online Seller", example: "Bikin carousel \"isi paket\" dan Story promo akhir pekan tanpa buka aplikasi desain." },
  { title: "Creatorpreneur", example: "Ubah satu ide jadi Post, Carousel, dan Reels dengan gaya akun yang sama." },
  { title: "Freelancer", example: "Tampilkan jasa dan cara kerja lewat konten edukasi yang rapi dan konsisten." },
  { title: "Small Business Owner", example: "Siapkan konten promosi sendiri di sela kerja, dari HP, tanpa harus mulai dari nol." },
] as const;

export const PROBLEMS = [
  "Bingung mau posting apa hari ini.",
  "Tidak punya waktu membuat desain.",
  "Susah menulis caption dan naskah.",
  "Harus jadi admin sekaligus marketing.",
  "Konten bisnis sering berhenti karena kehabisan ide.",
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

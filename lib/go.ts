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
  { q: "Apa itu OneBizPro Go?", a: "OneBizPro Go adalah AI Assistant untuk one-person business: satu orang yang menjalankan bisnisnya sendiri. Go Content adalah asisten pertamanya. Kemampuan lain akan hadir bertahap dan belum tersedia sekarang." },
  { q: "Apa itu Go Content?", a: "Go Content adalah AI Content Studio untuk membuat konten promosi Instagram: Post, Carousel, Story, Reels, dan Highlight Cover, dengan bantuan AI untuk naskah dan caption." },
  { q: "Apakah Go Content sudah AI Agent yang bekerja otomatis?", a: "Belum. Go Content membantu menyusun naskah dan tampilan konten saat kamu memintanya. Kamu yang memutuskan, menyunting, dan mengunggah. Tidak ada posting otomatis ke Instagram." },
  { q: "Siapa yang cocok memakainya?", a: "Online seller, creatorpreneur, freelancer, penyedia jasa, dan pemilik usaha kecil yang mengelola akun Instagram sendiri. Tim kecil juga boleh memakainya." },
  { q: "Berapa harganya?", a: priceText },
  { q: "Berapa lama masa akses?", a: "Akses berlaku 30 hari sejak pembelianmu diverifikasi. Perpanjangan dilakukan dengan membeli lagi. Belum ada perpanjangan otomatis." },
  { q: "Bagaimana sistem kredit AI?", a: `Satu naskah AI atau satu kali "Buat ulang" memakai 1 kredit. Kredit dihitung per bulan. ${creditsText} Kalau kredit habis, kamu tetap bisa menulis sendiri dengan kerangka sesuai gaya yang dipilih, dan memakai ide yang sudah tersimpan di bank idemu.` },
  { q: "Bagaimana mendapatkan akun dan kode aktivasi?", a: "Beli lewat Lynk.id. Setelah pembayaran diverifikasi, kode aktivasi dikirim lewat WhatsApp atau email yang kamu pakai saat membeli. Di aplikasi, pilih Aktivasi akun, isi email dan kode itu, lalu buat kata sandimu sendiri. Kode hanya bisa dipakai sekali. Pengiriman kode dilakukan manual, jadi bisa butuh waktu." },
  { q: "Bagaimana cara menggunakannya?", a: "Buka aplikasi di browser HP atau komputer, isi gaya akunmu sekali (nama, warna, nada bicara), pilih jenis konten, tulis topik, tekan Buat dengan AI, pilih template, periksa hasilnya, lalu unduh atau kirim lewat lembar bagikan HP." },
  { q: "Apakah bisa membuat Reels?", a: "Bisa, dalam bentuk video teks bergerak yang diunduh sebagai MP4. Ini bukan video dari klip kamu sendiri. Video direkam di browser selama durasinya, jadi biarkan halaman tetap terbuka. Pengujian kami baru di Chrome desktop, jadi hasil di HP tertentu bisa berbeda." },
  { q: "Apakah bisa dipakai lewat HP?", a: "Bisa, aplikasinya dirancang untuk HP dan juga jalan di komputer. Fitur kirim lewat lembar bagikan bergantung pada HP dan versi Instagram kamu." },
] as const;

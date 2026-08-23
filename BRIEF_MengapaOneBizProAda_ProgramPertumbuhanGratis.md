# Briefing — Website: Narasi "Mengapa OneBizPro Ada" + Program Pertumbuhan Gratis

Dari: Founder (via Cowork) · Untuk: Website Coworker (Claude Code)

Baca dulu: `BRIEF_Fase1_SembunyikanHarga_LengkapiModul.md` (status Fase 1 — harga disembunyikan, product branding; brief ini SATU INISIATIF TERPISAH, bukan bagian dari nomor Fase 1/2/3 di `Usulan-Update-Website-OneBizPro-Agustus2026.md`, jangan disatukan), `lib/packages.ts`, `lib/business-checkup/questions.ts`, `components/landing/business-checkup.tsx`.

---

## Konteks

Founder ingin OneBizPro punya narasi eksplisit soal *kenapa* produk ini ada — bukan cuma fitur, tapi juga peran sosial-ekonominya: bahwa akses ke teknologi bisnis kelas dunia tidak seharusnya ditentukan oleh besarnya modal, dan organisasi yang baru bertumbuh justru pantas dibantu, bukan ditinggalkan. Dari situ lahir dua hal yang saling terkait:

1. Narasi/halaman baru **"Mengapa OneBizPro Ada"** (BUKAN "Manifesto" — istilah itu sengaja dihindari di semua UI karena dianggap kurang umum/terlalu formal untuk audiens umum).
2. Mekanisme **"Program Pertumbuhan Gratis"** — akses gratis untuk organisasi yang masih tahap awal/kekurangan sumber daya, disalurkan lewat Business Checkup yang SUDAH ADA (bukan form/halaman baru terpisah).

Semua konten & alur di bawah ini **sudah difinalisasi lewat proses review bersama Founder** (termasuk mockup visual, lihat Referensi) — belum ada satu pun file kode nyata yang disentuh. Tugas kamu murni implementasi dari sini.

---

## Keputusan yang sudah final (jangan didesain ulang)

- **Istilah "Manifesto" tidak dipakai di UI mana pun.** Label yang dipakai: **"Mengapa OneBizPro Ada"** — dipakai sebagai eyebrow/link text di homepage DAN sebagai judul halaman baru.
- **Kategori organisasi (Usaha Kecil, Yayasan, Sekolah, Komunitas) HARUS selalu ditampilkan sebagai contoh, bukan daftar tertutup.** Setiap kali daftar ini muncul di UI (tag pill di homepage, ikon di halaman "Mengapa OneBizPro Ada"), wajib disertai elemen ke-5 yang menandakan keterbukaan (mis. tag putus-putus "+ Organisasi Bertumbuh Lainnya") DAN caption eksplisit seperti "Ini contoh, bukan daftar lengkap — terbuka untuk organisasi bertumbuh apa pun." Ini pernah jadi kesalahan di draf awal (Founder yang koreksi) — jangan diulang.
- **Program Pertumbuhan Gratis TIDAK membatasi jenis organisasi.** Tidak ada logic "yayasan = otomatis gratis" atau sejenisnya berdasarkan jenis badan hukum/misi (sosial, keagamaan, pendidikan, dll). Itu keputusan yang Founder sengaja TIDAK mau sistemkan — kasus seperti itu direview manual case-by-case oleh tim lewat percakapan WhatsApp di step "contact". **Jangan tambahkan pertanyaan/field baru soal jenis badan hukum atau misi organisasi ke Business Checkup.**
- **Eligibility Program Pertumbuhan Gratis pakai sinyal yang SUDAH ADA di Business Checkup** — `employeeCount` dan `software` (lihat `lib/business-checkup/questions.ts`) — TIDAK perlu pertanyaan baru untuk jalur ini.
- **Modul yang ditawarkan di Program Pertumbuhan Gratis = setara Paket START** (Akunting sederhana + Dashboard + Asisten AI), **BUKAN CRM/Booking**. Ini sudah dicek ulang terhadap `lib/packages.ts` — START memang cuma berisi 3 modul itu, CRM/Booking baru masuk GROWTH. Riset eksternal (kebutuhan UMKM/yayasan/sekolah tahap awal) juga konsisten menunjukkan kebutuhan pertama itu kejelasan keuangan, bukan manajemen pelanggan.
- **Harga tetap disembunyikan di semua UI baru ini** — konsisten dengan Fase 1 yang sedang berjalan. Jangan tampilkan angka apa pun.

---

## Yang perlu kamu kerjakan

### 1. Section baru di homepage
- [ ] Buat section baru (dark/navy full-bleed, beda shade dari `ClosingCta` yang sudah pakai `bg-primary` — jangan dua section gelap identik bersebelahan) berisi cuplikan narasi + tag kategori (dengan elemen "+Lainnya" & caption keterbukaan, lihat di atas) + 2 CTA: tombol utama ke pengecekan kelayakan (arahkan ke Business Checkup) dan link teks ke halaman "Mengapa OneBizPro Ada".
- [ ] Posisi: setelah `<AiPositioning />`, sebelum `<ClosingCta />` di `app/page.tsx` (urutan lengkap saat ini: Navbar → Hero → BusinessProblems → BusinessSolutions → Modules → SocialProof → AiPositioning → ClosingCta → Footer).
- [ ] Pakai token desain existing dari `app/globals.css` (`--primary`, `--accent`, `--radius`, font Geist) — jangan bikin palet baru.

### 2. Halaman baru "Mengapa OneBizPro Ada"
- [ ] Buat route baru (slug disarankan `/manifesto` untuk sementara, tapi ini murni slug teknis — boleh diganti kalau tim Website ada pertimbangan SEO/naming lain; yang tidak boleh berubah adalah LABEL yang tampil ke user, tetap "Mengapa OneBizPro Ada").
- [ ] Isi: 7 kalimat narasi inti secara berurutan (teks lengkap ada di bagian Referensi di bawah), proof section kategori organisasi (dengan aturan "+Lainnya" di atas), closing statement + 2 CTA (cek kelayakan / kembali ke beranda).

### 3. Business Checkup — cabang Program Pertumbuhan Gratis di step "result"
- [ ] Definisikan kondisi eligibility berbasis `employeeCount` + `software` yang sudah dijawab user (contoh ambang: tim kecil DAN belum pernah pakai software terintegrasi — **angka pasti/threshold BELUM ditentukan Founder**, taruh sebagai konstanta yang jelas ditandai `// TODO: konfirmasi threshold final dengan Founder` supaya gampang di-tweak, JANGAN hardcode angka final tanpa penanda ini).
- [ ] Kalau eligible: render kartu baru "Program Pertumbuhan Gratis" (bukan `PackageCard` biasa) — headline, 3 bullet modul (Keuangan otomatis, Dashboard real-time, Asisten AI — copy lengkap di Referensi), CTA "Ajukan Program Pertumbuhan Gratis", link sekunder "Lebih suka opsi berbayar? Lihat paket kami" (fallback ke jalur existing).
- [ ] Kalau TIDAK eligible (jalur existing/berbayar tetap seperti sekarang, TIDAK diubah): tambahkan HANYA 1 link kecil di bawah kartu paket existing: "Organisasi Anda baru bertumbuh & belum banyak sumber daya? Cek Program Pertumbuhan Gratis kami" — sebagai jalur penyelamat manual untuk kasus di pinggir ambang (self-declare, tidak perlu logic tambahan).

### 4. Business Checkup — step "contact"
- [ ] Copy conditional: kalau datang dari jalur Program Pertumbuhan Gratis, judul jadi "Tinggal satu langkah lagi..." dan tombol jadi "Ajukan Sekarang", badge eyebrow "PROGRAM PERTUMBUHAN GRATIS". Field (nama, nama organisasi, WhatsApp) dan submit logic **tetap sama persis** seperti sekarang — cuma copy yang berubah sesuai jalur.

### 5. QA & rilis
- [ ] `npx tsc --noEmit` dan `npx next build` sampai bersih.
- [ ] Cek regresi visual: homepage (section baru di posisi yang benar, tidak merusak spacing section lain), halaman "Mengapa OneBizPro Ada" di semua breakpoint, alur Business Checkup end-to-end untuk kasus eligible DAN tidak eligible.
- [ ] Commit dengan pesan jelas, mis.: `Add "Mengapa OneBizPro Ada" narrative page + homepage teaser, add Program Pertumbuhan Gratis branch to Business Checkup result/contact steps`.
- [ ] **Konfirmasi Founder dulu sebelum `vercel --prod`** — terutama karena ada 1 angka threshold yang masih placeholder (lihat poin 3).
- [ ] Catat hasilnya di `Control/review.md` mengikuti pola yang sudah berjalan.

---

## Referensi lanjutan

**Mockup visual (5 artboard, cocok dipakai sebagai referensi pixel-level):** https://claude.ai/code/artifact/52dd9651-fe86-4ea8-b8ae-3c5019484ba3

**Teks narasi "Mengapa OneBizPro Ada" (7 kalimat, urutan tetap):**
1. "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki."
2. "Namun selama ini, teknologi terbaik hanya bisa diakses oleh segelintir organisasi yang bersumber daya besar—sementara jutaan usaha, yayasan, sekolah, komunitas, dan organisasi lainnya harus berjuang dengan sistem yang terbatas."
3. "OneBizPro dibangun untuk mengubah keadaan itu."
4. "Kami menghadirkan teknologi bisnis kelas dunia, agar usaha kecil, yayasan, sekolah, dan komunitas bisa mengakses kemampuan yang sama dengan organisasi besar."
5. "Karena ketika lebih banyak organisasi bertumbuh, lebih banyak masyarakat yang merasakan manfaatnya."
6. "Kami tidak hanya membangun software."
7. "Kami membangun masa depan di mana teknologi menjadi penggerak kemajuan yang dapat dinikmati oleh semua organisasi."

Closing statement halaman: "Itu sebabnya OneBizPro terbuka gratis untuk organisasi yang sedang bertumbuh." + "Kami dampingi sampai Anda cukup kuat untuk melangkah sendiri — bukan amal tanpa ujung, tapi akselerasi yang berhasil."

**Catatan lintas-repo (FYI, bukan actionable di brief ini):** dari audit `Platform/app/(admin)/admin/accounting` & `.../ledger`, ditemukan bisnis sudah punya 2 tier akuntansi teknis (`akuntingEnabled` = sederhana tanpa jurnal, `ledgerEnabled` = double-entry penuh) plus `fundAccountingEnabled` (mode Dana Yayasan) yang tampaknya terikat ke `ledgerEnabled`, bukan `akuntingEnabled`. Kalau nanti ada yayasan yang butuh pelaporan dana tapi masuk Program Pertumbuhan Gratis (tier sederhana), ini titik yang perlu dicek ke tim Platform — apakah `fundAccountingEnabled` bisa dilepas dari dependency Ledger. Bukan pekerjaan untuk brief ini.

Usulan lengkap Fase 1/2/3 (topik berbeda, jangan disatukan) ada di `Usulan-Update-Website-OneBizPro-Agustus2026.md` dan `BRIEF_Fase1_SembunyikanHarga_LengkapiModul.md`.

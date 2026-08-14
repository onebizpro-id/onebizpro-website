# Briefing — Website Fase 1: Sembunyikan Harga + Lengkapi Grid Modul

Dari: Founder (via Cowork) · Untuk: Website Coworker (Claude Code)

Baca dulu: `Control/command.md`, `Control/plan.md` (untuk konteks modul Pemasaran/Prospek/Manajemen Proyek yang baru LIVE 2026-08-11), dan `Usulan-Update-Website-OneBizPro-Agustus2026.md` (usulan lengkap, dikirim terpisah — dokumen ini cuma cakup Fase 1 yang sudah disetujui Founder).

---

## Konteks

Arah baru dari Founder: untuk sementara **harga disembunyikan dari website**, penjualan diprioritaskan **B2B/canvassing** lewat tim Sales (bukan self-serve dari web), dan website fokus jadi **product branding**.

Fase 1 dari usulan itu sudah **dieksekusi langsung ke file** oleh Cowork (Claude, lewat device bridge) — tapi **BELUM di-commit ke git, BELUM di-`next build` penuh, BELUM di-deploy**. Cowork sengaja berhenti di titik itu (tidak menyentuh git dari sesi Cowork). Tugas kamu: **review, verifikasi penuh, commit, dan (setelah konfirmasi Founder) deploy**.

---

## Perubahan yang sudah diterapkan ke file (butuh review kamu)

1. **`components/landing/package-card.tsx`** — blok "Investasi mulai dari Rp{pkg.price}/bulan" dihapus, diganti CTA netral: "Investasi disesuaikan dengan kebutuhan bisnis Anda — diskusikan dengan tim kami." Field `price` di `lib/packages.ts` **sengaja dibiarkan** di data model (tidak dihapus) supaya gampang dikembalikan nanti — cuma tidak dirender lagi. Ini otomatis juga menghilangkan harga dari hasil Business Checkup, karena step "result" di `business-checkup.tsx` memakai komponen `PackageCard` yang sama.
2. **`app/venue/page.tsx`** — baris "Mulai dari Rp500rb/bulan. Tanpa komitmen di awal." diganti "Investasi disesuaikan dengan kebutuhan venue kamu. Tanpa komitmen di awal."
3. **`components/landing/modules.tsx`** + **`components/landing/module-illustrations.tsx`** — grid Modul (section "Satu Platform, Semua Modul Bisnis Kamu") ditambah 3 modul yang sebelumnya tidak pernah direpresentasikan: **Pemasaran**, **Prospek** (Sales), **Manajemen Proyek** — masing-masing dapat ilustrasi baru dengan gaya sama seperti 8 modul lama (pola `ModuleHeader` + mock data). Dua tone warna baru ditambahkan ke `toneClasses`: `indigo`, `teal`. Urutan grid disusun mengikuti alur bisnis: Pemasaran → Prospek → CRM → Booking → Manajemen Proyek → Akunting → HR → Tanya Asisten → Inventory → POS → Insight Strategis (11 modul, sebelumnya 8).
4. **`app/page.tsx`** — **TEMUAN PENTING, tolong dikonfirmasi**: komponen `<Modules />` ternyata **sudah tidak di-import/dirender di homepage sama sekali** sebelum perubahan ini (kemungkinan dead code sisa pivot ICP sebelumnya — tidak ada komentar yang menyatakan ini sengaja, beda dari Business Checkup/Harga/RoadmapTeaser yang memang eksplisit dicatat sengaja tidak di-embed). Cowork memasangnya lagi, posisi setelah `<BusinessSolutions />` sebelum `<SocialProof />`. **Cek riwayat/tanyakan Founder** apakah ini memang bukan keputusan sengaja — kalau ternyata sengaja disembunyikan untuk alasan tertentu, kembalikan ke keadaan semula dan tambahkan komentar penjelasan seperti pola yang sudah ada untuk Business Checkup/RoadmapTeaser di file yang sama.

---

## Yang perlu kamu kerjakan

- [ ] Review diff kelima file di atas satu per satu.
- [ ] Grep ulang seluruh `app/` + `components/` untuk `Rp` — pastikan tidak ada sisa angka/istilah harga di tempat lain yang belum ketemu Cowork (Cowork cuma audit 3 titik: `/harga`, hasil Business Checkup, `/venue` — mungkin ada yang kelewat, misalnya di `lead-form.tsx` atau copy lain).
- [ ] Jalankan `npx tsc --noEmit` (Cowork sudah jalankan versi ini di device kamu, hasilnya bersih) — jalankan ulang untuk pastikan.
- [ ] Jalankan `npx next build` penuh (**belum dijalankan Cowork** — sengaja dihindari karena kekhawatiran ada proses lain yang mungkin aktif di device; kamu yang jalankan sampai selesai).
- [ ] Cek regresi visual cepat via `next dev`: homepage (grid Modul 11 kartu — pastikan rapi di semua breakpoint, baris terakhir wajar tidak penuh), `/harga`, `/venue`, alur Business Checkup sampai step hasil.
- [ ] Commit ke git dengan pesan yang jelas, misalnya: `Hide pricing site-wide, add Pemasaran/Prospek/Manajemen Proyek to modules grid, re-enable Modules section on homepage`.
- [ ] **Konfirmasi Founder dulu sebelum `vercel --prod`** (aturan tetap, lihat `Control/command.md`).
- [ ] Setelah live, catat hasilnya di `Control/review.md` mengikuti pola sprint yang sudah berjalan (Dikerjakan / Verifikasi / Deploy).

---

## Referensi lanjutan (BELUM untuk dikerjakan sekarang)

Usulan lengkap ada di `Usulan-Update-Website-OneBizPro-Agustus2026.md`. Fase 2 (section proaktif Ringkasan/Pekerjaan berbasis Balanced Scorecard yang sudah LIVE di produk, perluasan copy Asisten AI ke 9 domain, refresh narasi ICP ke bisnis jasa berbasis proyek/janji-temu) dan Fase 3 (FAQ, data-trust blurb, nomor WA Sales terpisah, demo video) **belum disetujui Founder untuk dikerjakan** — tunggu instruksi lanjutan sebelum mulai.

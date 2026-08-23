# EXECUTION

Dokumen langkah EXECUTION dari Executive Loop (`Control/readme.md`: PLAN → COMMAND → EXECUTION → REVIEW → update PLAN), khusus folder Website. Nama file tetap `EXECUTION.md` tiap sprint — isinya **ditimpa** per sprint. Ringkasan & status sprint di `Control/COMMAND.md`. (Sprint Website PERTAMA yang lewat Control resmi — sprint sebelumnya, Fase 1 sembunyikan harga, dieksekusi lewat `BRIEF_Fase1_SembunyikanHarga_LengkapiModul.md` di luar Control.)

---

# Sprint: Narasi "Mengapa OneBizPro Ada" + Program Pertumbuhan Gratis

Detail keputusan lengkap: `Control/plan.md` item #16. PRINSIP WAJIB & backlog ringkas: `Control/COMMAND.md`. Teks narasi lengkap + mockup: `BRIEF_MengapaOneBizProAda_ProgramPertumbuhanGratis.md` dan https://claude.ai/code/artifact/52dd9651-fe86-4ea8-b8ae-3c5019484ba3.

## Langkah 0 — Inspeksi dulu (charter)

Sebelum menulis kode, baca implementasi existing yang akan disentuh:
- `app/page.tsx` — urutan section homepage saat ini: Navbar → Hero → BusinessProblems → BusinessSolutions → Modules → SocialProof → AiPositioning → ClosingCta → Footer. Section baru masuk PERSIS di antara AiPositioning dan ClosingCta.
- `components/landing/closing-cta.tsx` — sudah pakai `bg-primary` (navy) full-bleed. Section baru JANGAN pakai shade identik persis di sebelahnya (mockup pakai radial-gradient navy lebih gelap, lihat referensi mockup).
- `app/globals.css` — token desain (`--primary`, `--accent`, `--radius`, `--muted`, font Geist) — pakai token existing, jangan bikin palet baru.
- `components/landing/business-checkup.tsx` — state machine step `employeeCount → challenge → software → result → contact → done`. Titik sentuh: step `result` (render kartu rekomendasi) dan step `contact` (form + copy).
- `lib/business-checkup/questions.ts` — `EMPLOYEE_COUNT_OPTIONS`, `SOFTWARE_OPTIONS` sudah berisi sinyal yang dipakai untuk eligibility — TIDAK perlu pertanyaan baru.
- `lib/packages.ts` — Paket START (Akunting+Dashboard+Asisten AI) adalah referensi modul untuk kartu Program Pertumbuhan Gratis.
- `components/landing/package-card.tsx` + `components/ui/button.tsx` — pola styling untuk kartu & tombol baru (`rounded-lg border bg-card p-8 shadow-sm`, `buttonVariants({variant:"default", size:"lg"})` = `bg-accent text-accent-foreground h-12 px-7 rounded-lg text-base font-medium`).

## 1A — Section baru di homepage

1. Komponen baru (mis. `components/landing/why-we-exist-teaser.tsx`), dark/navy full-bleed, beda shade dari `ClosingCta`.
2. Isi: cuplikan narasi (2 kalimat dari 7 kalimat inti, lihat Referensi di bawah) + tag kategori Usaha Kecil/Yayasan/Sekolah/Komunitas + tag ke-5 bergaya putus-putus "+ Organisasi Bertumbuh Lainnya" + caption "Ini contoh, bukan daftar lengkap — terbuka untuk organisasi bertumbuh apa pun." + 2 CTA (tombol utama ke Business Checkup, link teks ke halaman "Mengapa OneBizPro Ada").
3. Sisipkan di `app/page.tsx` antara `<AiPositioning />` dan `<ClosingCta />`.

## 2A — Halaman baru "Mengapa OneBizPro Ada"

1. Route baru App Router (slug sementara `/manifesto`).
2. Hero: judul "Mengapa OneBizPro Ada." (TANPA eyebrow "Manifesto Kami" — dihapus dari desain final, lihat mockup artboard `ManifestoPage`).
3. 7 kalimat narasi inti berurutan (teks lengkap di bagian Referensi), gaya bertahap (boleh pakai layout timeline seperti mockup, atau versi lebih sederhana — bebas selama urutan & isi kalimat dipertahankan).
4. Proof section: ikon kategori Usaha Kecil/Yayasan/Sekolah/Komunitas + ikon ke-5 "Lainnya" (garis putus-putus) + caption keterbukaan.
5. Closing: statement penutup + 2 CTA (cek kelayakan → Business Checkup, kembali ke beranda).

## 3A/3B/3C — Business Checkup, step "result"

1. Definisikan fungsi/konstanta eligibility, mis. `isEligibleForGrowthProgram(employeeCount, software)` — kondisi TODO, taruh threshold sebagai konstanta bernama jelas dengan komentar `// TODO: konfirmasi threshold final dengan Founder`.
2. Kalau `true`: render kartu baru (bukan `PackageCard` biasa) — badge "PROGRAM PERTUMBUHAN GRATIS", headline "Organisasi Anda tampaknya memenuhi syarat.", 3 bullet: "Keuangan tercatat otomatis — termasuk mode Dana Yayasan bila relevan" / "Pantau kondisi organisasi real-time lewat Dashboard" / "Asisten AI siap membantu — tanpa perlu staf keuangan sendiri", CTA penuh "Ajukan Program Pertumbuhan Gratis" → step `contact` (bawa penanda jalur), link sekunder "Lebih suka opsi berbayar? Lihat paket kami" (fallback ke `PackageCard` existing).
3. Kalau `false`: render `PackageCard` existing TANPA perubahan, tambah HANYA 1 link kecil di bawahnya: "Organisasi Anda baru bertumbuh & belum banyak sumber daya? Cek Program Pertumbuhan Gratis kami" → set penanda jalur yang sama, lanjut ke step `contact`.

## 4A — Business Checkup, step "contact"

1. State/prop baru (mis. `isGrowthProgram: boolean`) dibawa dari step `result`.
2. Kalau `true`: badge eyebrow "PROGRAM PERTUMBUHAN GRATIS", judul "Tinggal satu langkah lagi...", tombol submit "Ajukan Sekarang".
3. Field (nama, nama organisasi, WhatsApp) dan logic submit ke API **TIDAK berubah** — cuma copy yang beda.

## DoD & langkah tes manual

- [ ] Homepage: section baru muncul di posisi benar, tidak merusak spacing `AiPositioning`/`ClosingCta`, kategori selalu tampil dengan "+Lainnya" & caption.
- [ ] Halaman "Mengapa OneBizPro Ada" render benar di semua breakpoint, tidak ada istilah "Manifesto" di mana pun.
- [ ] Business Checkup — isi dengan jawaban yang memicu eligible → kartu Program Pertumbuhan Gratis muncul, CTA jalan ke step contact dengan copy yang benar.
- [ ] Business Checkup — isi dengan jawaban yang TIDAK memicu eligible → jalur existing (PackageCard berbayar) identik seperti sekarang + 1 link kecil baru di bawahnya.
- [ ] Step contact: submit dari kedua jalur (Program Gratis vs biasa) sama-sama berhasil, data tersimpan benar (cek field/DB, bukan cuma tampilan).
- [ ] `tsc --noEmit` + `next build` bersih.
- [ ] Grep cepat pastikan tidak ada literal harga (`Rp`) di komponen baru — konsisten Fase 1.

---

## Referensi — Teks narasi "Mengapa OneBizPro Ada" (7 kalimat, urutan tetap)

1. "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki."
2. "Namun selama ini, teknologi terbaik hanya bisa diakses oleh segelintir organisasi yang bersumber daya besar—sementara jutaan usaha, yayasan, sekolah, komunitas, dan organisasi lainnya harus berjuang dengan sistem yang terbatas."
3. "OneBizPro dibangun untuk mengubah keadaan itu."
4. "Kami menghadirkan teknologi bisnis kelas dunia, agar usaha kecil, yayasan, sekolah, dan komunitas bisa mengakses kemampuan yang sama dengan organisasi besar."
5. "Karena ketika lebih banyak organisasi bertumbuh, lebih banyak masyarakat yang merasakan manfaatnya."
6. "Kami tidak hanya membangun software."
7. "Kami membangun masa depan di mana teknologi menjadi penggerak kemajuan yang dapat dinikmati oleh semua organisasi."

Closing halaman: "Itu sebabnya OneBizPro terbuka gratis untuk organisasi yang sedang bertumbuh." + "Kami dampingi sampai Anda cukup kuat untuk melangkah sendiri — bukan amal tanpa ujung, tapi akselerasi yang berhasil."

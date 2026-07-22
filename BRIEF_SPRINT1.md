# Briefing Sprint 1 — Website

Dari: Control (Executive AI) · Untuk: Website Coworker
Baca dulu: `../Control/ROADMAP.md`, `../Control/sprint1_foundation.md`

## Objective

Landing Page MVP yang mengubah pengunjung Instagram menjadi lead di CRM.

## Deliverables

1. **Landing Page MVP** — gunakan copy final yang sudah ada (`onebizpro-landing-page.md`); pastikan mobile-first (trafik dari Instagram = HP)
2. **Lead Form** — field: nama, nama bisnis, jenis bisnis (dropdown eksplisit: Lapangan Padel / Bulu Tangkis / Futsal / Mini Soccer / Coworking Space / Ruang Meeting / Studio / Venue Lainnya), No. WhatsApp; kirim ke API Lead dari Platform
2b. **Strip relevansi di hero** — tepat di bawah headline, tampilkan baris jenis bisnis: "Untuk lapangan padel · bulu tangkis · futsal · mini soccer · coworking space · studio" agar pengunjung dari Instagram langsung merasa disapa (arahan Founder)
3. **Thank You Page** — konfirmasi + langkah berikutnya ("tim kami akan menghubungi via WhatsApp dalam 1×24 jam")

## Catatan Teknis

- Endpoint API Lead disediakan Platform (lihat `../Platform/BRIEF_SPRINT1.md`) — koordinasikan kontrak field
- Fallback sementara jika API belum siap: tombol WhatsApp dengan template pesan, tapi target utama tetap Lead Form → CRM
- Perbaiki istilah "ERP" di `ROADMAP.md` agar selaras dengan positioning Core ("Bukan ERP")

## Definisi Selesai

Landing Page live, lead uji berhasil masuk CRM, Thank You Page tampil setelah submit.

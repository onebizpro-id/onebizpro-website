import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

// Sumber tunggal data legal untuk /terms dan /privacy. Isi HANYA data yang sudah
// terverifikasi -- null berarti belum ada, dan baris terkait tidak ditampilkan di halaman.
export const LEGAL = {
  companyName: "PT OneBizPro Inovasi Indonesia", // dari footer situs
  siteUrl: "https://onebizpro.id",
  platformUrl: "https://app.onebizpro.id",
  whatsappNumber: `+${WHATSAPP_NUMBER}`,

  // Diisi Founder 2026-10-13. Nomor rumah/gedung belum ada -- tambahkan bila perlu.
  contactEmail: "hello@onebizpro.id" as string | null,
  address: "Jalan Kemang, Sukatani, Depok 16454, Indonesia" as string | null,
  effectiveDate: "October 14, 2026" as string | null,
};

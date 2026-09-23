// Meta Pixel — single source of truth untuk Pixel ID dan event tracking.
// Base script + PageView dipasang di app/layout.tsx (RootLayout).
// Event "Lead" dipanggil dari BusinessCheckup begitu form kontak berhasil terkirim
// (bukan begitu hasil diagnosis muncul) -- itu momen yang benar-benar jadi lead di CRM,
// dan yang dioptimasi oleh campaign objective "Leads"/"Conversions" di Ads Manager.

export const META_PIXEL_ID = "1062444313060832";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

export function trackCustom(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
}

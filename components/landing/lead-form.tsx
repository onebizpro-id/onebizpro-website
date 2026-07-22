"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

const VENUE_TYPES = [
  "Lapangan Padel",
  "Lapangan Bulu Tangkis",
  "Lapangan Futsal",
  "Lapangan Mini Soccer",
  "Coworking Space",
  "Ruang Meeting",
  "Studio",
  "Venue Lainnya",
];

const LEAD_API_BASE = process.env.NEXT_PUBLIC_LEAD_API_URL ?? "";

export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      businessName: String(data.get("businessName") ?? "").trim(),
      venueType: String(data.get("venueType") ?? ""),
      whatsapp: String(data.get("whatsapp") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
      source: "landing_page",
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      utmContent: new URLSearchParams(window.location.search).get("utm_content"),
    };

    if (!payload.name || !payload.businessName || !payload.venueType || !payload.whatsapp) {
      setError("Mohon lengkapi semua kolom.");
      return;
    }

    // Fallback: jika API CRM belum dikonfigurasi, arahkan ke WhatsApp
    if (!LEAD_API_BASE) {
      window.open(
        waLink(
          `Halo, saya ${payload.name} dari ${payload.businessName} (${payload.venueType}). Saya ingin coba OneBizPro gratis.`
        ),
        "_blank"
      );
      router.push("/terima-kasih");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${LEAD_API_BASE}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Gagal mengirim. Coba lagi sebentar lagi.");
      }
      router.push("/terima-kasih");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengirim. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="coba-gratis" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-20 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Coba Gratis untuk Venue Kamu
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Isi form singkat ini — kami hubungi via WhatsApp dalam 1×24 jam dan tunjukkan
          cara kerjanya pakai skenario bisnis kamu sendiri. Tanpa komitmen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        {/* Honeypot anti-spam — disembunyikan dari manusia */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Nama kamu
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="cth. Rian"
            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="businessName" className="mb-1.5 block text-sm font-medium text-primary">
            Nama bisnis
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            maxLength={150}
            placeholder="cth. Arena Padel Kemang"
            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="venueType" className="mb-1.5 block text-sm font-medium text-primary">
            Jenis venue
          </label>
          <select
            id="venueType"
            name="venueType"
            required
            defaultValue=""
            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Pilih jenis venue kamu
            </option>
            {VENUE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-primary">
            No. WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            inputMode="tel"
            pattern="^(\+?62|0)8[0-9]{7,12}$"
            placeholder="cth. 081234567890"
            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className={`${buttonVariants({ size: "lg" })} w-full disabled:opacity-60`}
        >
          {submitting ? "Mengirim..." : "Kirim — Coba Gratis"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          Data kamu hanya dipakai untuk menghubungi kamu soal OneBizPro. Tidak ada spam.
        </p>
      </form>
    </section>
  );
}

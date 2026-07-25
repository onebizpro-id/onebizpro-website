"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  EMPLOYEE_COUNT_OPTIONS,
  CHALLENGE_OPTIONS,
  SOFTWARE_OPTIONS,
  type EmployeeCount,
  type Challenge,
  type CurrentSoftware,
} from "@/lib/business-checkup/questions";

type Step = "employeeCount" | "challenge" | "software" | "result" | "done";

type CheckupResult = {
  businessHealthScore: number;
  businessStage: string;
  recommendedPackage: string;
  narrative: string;
  priorities: string[];
};

const STEP_ORDER: Step[] = ["employeeCount", "challenge", "software", "result", "done"];

function StepDots({ step }: { step: Step }) {
  const activeIndex = Math.min(STEP_ORDER.indexOf(step), 3);
  return (
    <div className="flex items-center justify-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-6 rounded-full ${i <= activeIndex ? "bg-primary" : "bg-muted"}`}
        />
      ))}
    </div>
  );
}

export function BusinessCheckup() {
  const [step, setStep] = useState<Step>("employeeCount");
  const [employeeCount, setEmployeeCount] = useState<EmployeeCount | null>(null);
  const [biggestChallenge, setBiggestChallenge] = useState<Challenge | null>(null);
  const [currentSoftware, setCurrentSoftware] = useState<CurrentSoftware | null>(null);
  const [result, setResult] = useState<CheckupResult | null>(null);
  const [loadingResult, setLoadingResult] = useState(false);

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fallbackWaLink, setFallbackWaLink] = useState<string | null>(null);

  async function fetchResult(software: CurrentSoftware) {
    setLoadingResult(true);
    setError(null);
    try {
      const res = await fetch("/api/business-checkup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeCount,
          biggestChallenge,
          currentSoftware: software,
        }),
      });
      if (!res.ok) throw new Error("Gagal menghitung hasil. Coba lagi.");
      const data = await res.json();
      setResult(data.result);
      setStep("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menghitung hasil. Coba lagi.");
    } finally {
      setLoadingResult(false);
    }
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (website) {
      // Honeypot terisi = bot: anggap sukses tanpa kirim apa pun
      setStep("done");
      return;
    }

    if (!name.trim() || !businessName.trim() || !whatsapp.trim()) {
      setError("Mohon lengkapi semua kolom.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/business-checkup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeCount,
          biggestChallenge,
          currentSoftware,
          name: name.trim(),
          businessName: businessName.trim(),
          whatsapp: whatsapp.trim(),
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign"),
          utmContent: new URLSearchParams(window.location.search).get("utm_content"),
        }),
      });
      if (!res.ok) throw new Error("Gagal mengirim. Coba lagi sebentar lagi.");
      const data = await res.json();
      if (data.fallbackWaLink) {
        window.open(data.fallbackWaLink, "_blank");
        setFallbackWaLink(data.fallbackWaLink);
      }
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengirim. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="business-checkup" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-20 sm:py-24">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          Business Checkup
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Kenali Kondisi Bisnis Anda Dulu
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          3 pertanyaan singkat, langsung dapat skor kondisi bisnis dan rekomendasi paket
          yang paling pas — tanpa perlu isi data dulu.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
        {step !== "done" && (
          <div className="mb-6">
            <StepDots step={step} />
          </div>
        )}

        {step === "employeeCount" && (
          <fieldset>
            <legend className="text-base font-semibold text-foreground">
              Berapa jumlah pegawai di bisnis Anda?
            </legend>
            <div className="mt-4 space-y-2">
              {EMPLOYEE_COUNT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    setEmployeeCount(o.value);
                    setStep("challenge");
                  }}
                  className="w-full rounded-lg border border-input bg-white px-4 py-3 text-left text-sm hover:border-primary hover:bg-primary/5"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === "challenge" && (
          <fieldset>
            <legend className="text-base font-semibold text-foreground">
              Apa tantangan terbesar bisnis Anda saat ini?
            </legend>
            <div className="mt-4 space-y-2">
              {CHALLENGE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    setBiggestChallenge(o.value);
                    setStep("software");
                  }}
                  className="w-full rounded-lg border border-input bg-white px-4 py-3 text-left text-sm hover:border-primary hover:bg-primary/5"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === "software" && (
          <fieldset>
            <legend className="text-base font-semibold text-foreground">
              Software apa yang Anda pakai sekarang untuk mengelola bisnis?
            </legend>
            <div className="mt-4 space-y-2">
              {SOFTWARE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  disabled={loadingResult}
                  onClick={() => {
                    setCurrentSoftware(o.value);
                    fetchResult(o.value);
                  }}
                  className="w-full rounded-lg border border-input bg-white px-4 py-3 text-left text-sm hover:border-primary hover:bg-primary/5 disabled:opacity-60"
                >
                  {o.label}
                </button>
              ))}
            </div>
            {loadingResult && (
              <p className="mt-3 text-center text-sm text-muted-foreground">Menghitung hasil...</p>
            )}
          </fieldset>
        )}

        {step === "result" && result && (
          <div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-2xl font-semibold text-primary">{result.businessHealthScore}</p>
                <p className="text-xs text-muted-foreground">Skor Kondisi Bisnis</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-2xl font-semibold text-primary">{result.businessStage}</p>
                <p className="text-xs text-muted-foreground">Tahap Bisnis</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground">{result.narrative}</p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground">Prioritas Perbaikan</p>
              <ul className="mt-2 space-y-1.5">
                {result.priorities.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
              <p className="text-sm text-muted-foreground">Rekomendasi paket untuk Anda</p>
              <p className="text-xl font-semibold text-primary">{result.recommendedPackage}</p>
            </div>

            <form onSubmit={handleContactSubmit} className="mt-8 space-y-4 border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">
                Mau konsultasikan hasil ini lebih lanjut? Tinggalkan kontak Anda.
              </p>

              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <input
                type="text"
                required
                maxLength={100}
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="text"
                required
                maxLength={150}
                placeholder="Nama bisnis"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="tel"
                required
                inputMode="tel"
                pattern="^(\+?62|0)8[0-9]{7,12}$"
                placeholder="No. WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className={`${buttonVariants({ size: "lg" })} w-full disabled:opacity-60`}
              >
                {submitting ? "Mengirim..." : "Konsultasikan Bisnis Anda"}
              </button>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl">
              ✓
            </div>
            <p className="mt-4 text-lg font-semibold text-primary">Terima kasih!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam untuk membahas hasil
              Business Checkup Anda lebih lanjut.
            </p>
            {fallbackWaLink && (
              <a
                href={fallbackWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ size: "lg" })} mt-6`}
              >
                Buka WhatsApp
              </a>
            )}
          </div>
        )}

        {error && step !== "result" && (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        )}
      </div>
    </section>
  );
}

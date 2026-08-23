"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PackageCard } from "@/components/landing/package-card";
import { getPackage } from "@/lib/packages";
import {
  EMPLOYEE_COUNT_OPTIONS,
  CHALLENGE_OPTIONS,
  SOFTWARE_OPTIONS,
  type EmployeeCount,
  type Challenge,
  type CurrentSoftware,
} from "@/lib/business-checkup/questions";
import { isEligibleForGrowthProgram } from "@/lib/business-checkup/growthProgram";

// "result" (diagnosis) dan "contact" (form kontak) sengaja dipisah jadi dua step
// berbeda -- sebelumnya digabung satu layar dan itu keliru, sama seperti pelajaran
// awal soal Harga vs LeadForm yang juga harus dipisah jadi dua halaman berbeda.
type Step = "employeeCount" | "challenge" | "software" | "result" | "contact" | "done";

type CheckupResult = {
  recommendedPackage: string;
  diagnosis: string;
  recommendationReason: string;
  priorities: string[];
};

const STEP_ORDER: Step[] = ["employeeCount", "challenge", "software", "result", "contact", "done"];

const PREVIOUS_STEP: Partial<Record<Step, Step>> = {
  challenge: "employeeCount",
  software: "challenge",
  result: "software",
  contact: "result",
};

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

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 text-sm text-muted-foreground hover:text-primary"
    >
      ← Kembali
    </button>
  );
}

export function BusinessCheckup() {
  const [step, setStep] = useState<Step>("employeeCount");
  const [employeeCount, setEmployeeCount] = useState<EmployeeCount | null>(null);
  const [biggestChallenges, setBiggestChallenges] = useState<Challenge[]>([]);
  const [currentSoftware, setCurrentSoftware] = useState<CurrentSoftware | null>(null);
  const [result, setResult] = useState<CheckupResult | null>(null);
  const [loadingResult, setLoadingResult] = useState(false);
  const [isGrowthProgram, setIsGrowthProgram] = useState(false);

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fallbackWaLink, setFallbackWaLink] = useState<string | null>(null);

  function goBack() {
    const previous = PREVIOUS_STEP[step];
    if (previous) {
      setError(null);
      setStep(previous);
    }
  }

  function toggleChallenge(value: Challenge) {
    setBiggestChallenges((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  }

  async function fetchResult(software: CurrentSoftware) {
    setLoadingResult(true);
    setError(null);
    try {
      const res = await fetch("/api/business-checkup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeCount,
          biggestChallenges,
          currentSoftware: software,
        }),
      });
      if (!res.ok) throw new Error("Gagal menghitung hasil. Coba lagi.");
      const data = await res.json();
      setResult(data.result);
      if (employeeCount) {
        setIsGrowthProgram(isEligibleForGrowthProgram(employeeCount, software));
      }
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
          biggestChallenges,
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
          3 pertanyaan singkat, langsung dapat diagnosis bisnis dan rekomendasi paket
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
            <BackButton onClick={goBack} />
            <legend className="text-base font-semibold text-foreground">
              Apa tantangan terbesar bisnis Anda saat ini?
            </legend>
            <p className="mt-1 text-sm text-muted-foreground">Boleh pilih lebih dari satu.</p>
            <div className="mt-4 space-y-2">
              {CHALLENGE_OPTIONS.map((o) => (
                <label
                  key={o.value}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-input bg-white px-4 py-3 text-left text-sm hover:border-primary hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <input
                    type="checkbox"
                    checked={biggestChallenges.includes(o.value)}
                    onChange={() => toggleChallenge(o.value)}
                    className="h-4 w-4 shrink-0 accent-primary"
                  />
                  {o.label}
                </label>
              ))}
            </div>
            <button
              type="button"
              disabled={biggestChallenges.length === 0}
              onClick={() => setStep("software")}
              className={`${buttonVariants({ size: "lg" })} mt-6 w-full disabled:opacity-50`}
            >
              Lanjut
            </button>
          </fieldset>
        )}

        {step === "software" && (
          <fieldset>
            <BackButton onClick={goBack} />
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
            <BackButton onClick={goBack} />

            <div>
              <p className="text-sm font-semibold text-foreground">Diagnosis Bisnis</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {result.diagnosis}
              </p>
            </div>

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

            {isGrowthProgram ? (
              <div className="mt-8">
                <div className="rounded-lg border border-accent bg-accent/5 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Program Pertumbuhan Gratis
                  </span>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Organisasi Anda tampaknya memenuhi syarat.
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Keuangan tercatat otomatis — termasuk mode Dana Yayasan bila relevan",
                      "Pantau kondisi organisasi real-time lewat Dashboard",
                      "Asisten AI siap membantu — tanpa perlu staf keuangan sendiri",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setStep("contact")}
                    className={`${buttonVariants({ size: "lg" })} mt-6 w-full`}
                  >
                    Ajukan Program Pertumbuhan Gratis
                  </button>
                </div>
                <p className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setIsGrowthProgram(false)}
                    className="text-sm text-muted-foreground underline hover:text-primary"
                  >
                    Lebih suka opsi berbayar? Lihat paket kami
                  </button>
                </p>
              </div>
            ) : (
              <>
                {getPackage(result.recommendedPackage) && (
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-foreground">Paket yang Direkomendasikan</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {result.recommendationReason}
                    </p>
                    <div className="mt-4">
                      <PackageCard
                        pkg={getPackage(result.recommendedPackage)!}
                        cta={
                          <button
                            type="button"
                            onClick={() => setStep("contact")}
                            className={`${buttonVariants({ size: "lg" })} mt-6 w-full`}
                          >
                            Konsultasikan Bisnis Anda
                          </button>
                        }
                      />
                    </div>
                  </div>
                )}

                <p className="mt-4 text-center">
                  <Link
                    href="/harga"
                    className="text-sm text-muted-foreground underline hover:text-primary"
                  >
                    Lihat paket lain sebagai pembanding
                  </Link>
                </p>
                <p className="mt-2 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsGrowthProgram(true);
                      setStep("contact");
                    }}
                    className="text-sm text-muted-foreground underline hover:text-primary"
                  >
                    Organisasi Anda baru bertumbuh &amp; belum banyak sumber daya? Cek Program
                    Pertumbuhan Gratis kami
                  </button>
                </p>
              </>
            )}
          </div>
        )}

        {step === "contact" && (
          <div>
            <BackButton onClick={goBack} />
            {isGrowthProgram && (
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-accent">
                Program Pertumbuhan Gratis
              </span>
            )}
            <p className="text-sm font-medium text-foreground">
              {isGrowthProgram
                ? "Tinggal satu langkah lagi..."
                : "Mau konsultasikan hasil ini lebih lanjut? Tinggalkan kontak Anda."}
            </p>

            <form onSubmit={handleContactSubmit} className="mt-4 space-y-4">
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
                {submitting
                  ? "Mengirim..."
                  : isGrowthProgram
                    ? "Ajukan Sekarang"
                    : "Konsultasikan Bisnis Anda"}
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

        {error && step !== "result" && step !== "contact" && (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        )}
      </div>
    </section>
  );
}

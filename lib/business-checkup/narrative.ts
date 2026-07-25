import type { CheckupAnswers, CheckupResult, RecommendedPackage } from "@/lib/business-checkup/scoring";
import { labelFor, CHALLENGE_OPTIONS, SOFTWARE_OPTIONS } from "@/lib/business-checkup/questions";

// Narasi v1: template deterministik (bukan LLM) -- supaya setiap kalimat yang
// mungkin muncul bisa direview di awal, tidak ada risiko klaim yang tidak
// didukung skor. Upgrade ke LLM nanti tinggal ganti isi fungsi ini, logika skor
// di scoring.ts tidak perlu berubah.

const CHALLENGE_REASON: Record<CheckupAnswers["biggestChallenge"], string> = {
  keuangan: "kamu butuh gambaran keuangan yang jelas dan bisa diandalkan sejak awal",
  pelanggan: "kamu butuh cara yang lebih rapi untuk mengelola dan follow-up pelanggan",
  booking: "kamu butuh sistem reservasi yang tidak lagi manual dan rawan bentrok",
  operasional: "operasional kamu sudah cukup kompleks untuk butuh kontrol stok dan pembelian yang lebih ketat",
  tim: "tim kamu sudah butuh cara yang lebih rapi untuk dipantau",
};

const PACKAGE_BLURB: Record<RecommendedPackage, string> = {
  START: "Paket START fokus membenahi pencatatan keuangan dan monitoring bisnis dulu — fondasi sebelum menambah yang lain.",
  GROWTH:
    "Paket GROWTH mencakup keuangan yang rapi, ditambah alat untuk mengelola pelanggan dan reservasi.",
  SCALE:
    "Paket SCALE mencakup semua itu, ditambah alat untuk kasir, stok, dan tim — untuk operasional yang lebih kompleks.",
};

const CHALLENGE_PRIORITIES: Record<CheckupAnswers["biggestChallenge"], string[]> = {
  keuangan: [
    "Rapikan pencatatan keuangan (kas masuk, kas keluar, kategori pengeluaran)",
    "Pantau kondisi bisnis secara real-time, bukan cuma saat tutup buku",
  ],
  pelanggan: [
    "Kumpulkan data pelanggan dalam satu tempat",
    "Atur pengingat follow-up supaya tidak ada pelanggan yang terlewat",
  ],
  booking: [
    "Pindahkan jadwal/reservasi dari catatan manual ke sistem yang mencegah bentrok",
    "Pastikan slot yang batal otomatis terbuka lagi",
  ],
  operasional: [
    "Rapikan pencatatan stok dan pembelian",
    "Satukan operasional (kasir, stok) supaya tidak dicatat dobel",
  ],
  tim: [
    "Pantau kehadiran tim dari satu tempat",
    "Rapikan proses approval (reimbursement, cuti, dan sejenisnya)",
  ],
};

export function buildPriorities(answers: CheckupAnswers): string[] {
  const priorities = [...CHALLENGE_PRIORITIES[answers.biggestChallenge]];
  if (answers.currentSoftware === "none") {
    priorities.unshift("Mulai dari satu sistem terpusat, bukan campuran Excel/catatan manual");
  }
  return priorities;
}

export function buildNarrative(answers: CheckupAnswers, result: CheckupResult): string {
  const challengeLabel = labelFor(CHALLENGE_OPTIONS, answers.biggestChallenge);
  const softwareLabel = labelFor(SOFTWARE_OPTIONS, answers.currentSoftware);

  return [
    `Dari jawaban kamu, tantangan terbesar saat ini adalah "${challengeLabel.toLowerCase()}", dengan kondisi software sekarang: ${softwareLabel.toLowerCase()}.`,
    `Skor kondisi bisnis kamu ${result.businessHealthScore}/100, di tahap ${result.businessStage}.`,
    `Karena itu, ${CHALLENGE_REASON[answers.biggestChallenge]}, kami merekomendasikan paket ${result.recommendedPackage}.`,
    PACKAGE_BLURB[result.recommendedPackage],
  ].join(" ");
}

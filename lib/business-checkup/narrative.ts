import type { CheckupAnswers, CheckupResult, RecommendedPackage } from "@/lib/business-checkup/scoring";
import { CHALLENGE_PENALTY } from "@/lib/business-checkup/scoring";
import { labelFor, CHALLENGE_OPTIONS, SOFTWARE_OPTIONS, type Challenge } from "@/lib/business-checkup/questions";

// Narasi v1: template deterministik (bukan LLM) -- supaya setiap kalimat yang
// mungkin muncul bisa direview di awal, tidak ada risiko klaim yang tidak
// didukung skor. Upgrade ke LLM nanti tinggal ganti isi fungsi ini, logika skor
// di scoring.ts tidak perlu berubah. Diagnosis dan alasan rekomendasi sengaja
// TIDAK menyebut angka skor/tahap bisnis -- terkesan menilai/menge-judge,
// walau skor tetap dihitung & disimpan di lead untuk referensi internal Sales.

const CHALLENGE_REASON: Record<Challenge, string> = {
  keuangan: "Anda butuh gambaran keuangan yang jelas dan bisa diandalkan sejak awal",
  pelanggan: "Anda butuh cara yang lebih rapi untuk mengelola dan follow-up pelanggan",
  booking: "Anda butuh sistem reservasi yang tidak lagi manual dan rawan bentrok",
  operasional: "operasional Anda sudah cukup kompleks untuk butuh kontrol stok dan pembelian yang lebih ketat",
  tim: "tim Anda sudah butuh cara yang lebih rapi untuk dipantau",
};

const PACKAGE_BLURB: Record<RecommendedPackage, string> = {
  START: "Paket START fokus membenahi pencatatan keuangan dan monitoring bisnis dulu — fondasi sebelum menambah yang lain.",
  GROWTH:
    "Paket GROWTH mencakup keuangan yang rapi, ditambah alat untuk mengelola pelanggan dan reservasi.",
  SCALE:
    "Paket SCALE mencakup semua itu, ditambah alat untuk kasir, stok, dan tim — untuk operasional yang lebih kompleks.",
};

const CHALLENGE_PRIORITIES: Record<Challenge, string[]> = {
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

// Tantangan yang penalty-nya paling besar dianggap paling mendesak -- dipakai untuk
// kalimat "kenapa direkomendasikan" supaya tetap fokus satu alasan utama, bukan
// daftar panjang, walau usernya boleh centang lebih dari satu tantangan.
function mostUrgentChallenge(challenges: Challenge[]): Challenge {
  return challenges.reduce((worst, c) =>
    CHALLENGE_PENALTY[c] > CHALLENGE_PENALTY[worst] ? c : worst
  );
}

function joinLabels(labels: string[]): string {
  if (labels.length <= 1) return labels[0] ?? "";
  if (labels.length === 2) return `${labels[0]} dan ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, dan ${labels[labels.length - 1]}`;
}

export function buildPriorities(answers: CheckupAnswers): string[] {
  const seen = new Set<string>();
  const priorities: string[] = [];
  for (const challenge of answers.biggestChallenges) {
    for (const p of CHALLENGE_PRIORITIES[challenge]) {
      if (!seen.has(p)) {
        seen.add(p);
        priorities.push(p);
      }
    }
  }
  if (answers.currentSoftware === "none") {
    priorities.unshift("Mulai dari satu sistem terpusat, bukan campuran Excel/catatan manual");
  }
  return priorities.slice(0, 5);
}

export function buildDiagnosis(answers: CheckupAnswers): string {
  const challengeLabels = answers.biggestChallenges.map((c) => labelFor(CHALLENGE_OPTIONS, c).toLowerCase());
  const softwareLabel = labelFor(SOFTWARE_OPTIONS, answers.currentSoftware);

  return `Dari jawaban Anda, tantangan terbesar saat ini adalah ${joinLabels(challengeLabels)}, dengan kondisi software sekarang: ${softwareLabel.toLowerCase()}.`;
}

export function buildRecommendationReason(answers: CheckupAnswers, result: CheckupResult): string {
  const primaryChallenge = mostUrgentChallenge(answers.biggestChallenges);

  return [
    `Karena ${CHALLENGE_REASON[primaryChallenge]}, kami merekomendasikan paket ${result.recommendedPackage}.`,
    PACKAGE_BLURB[result.recommendedPackage],
  ].join(" ");
}

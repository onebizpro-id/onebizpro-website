import type { Challenge, CurrentSoftware, EmployeeCount } from "@/lib/business-checkup/questions";

export type RecommendedPackage = "START" | "GROWTH" | "SCALE";
export type BusinessStage = "Merintis" | "Berkembang" | "Scaling";

export type CheckupAnswers = {
  employeeCount: EmployeeCount;
  biggestChallenges: Challenge[];
  currentSoftware: CurrentSoftware;
};

export type CheckupResult = {
  businessHealthScore: number;
  businessStage: BusinessStage;
  recommendedPackage: RecommendedPackage;
};

// Skala 0-100: baseline dari kematangan software yang dipakai sekarang, dikurangi
// penalti sesuai seberapa mendasar masalah yang dipilih (keuangan tidak diketahui
// dianggap paling berisiko, karena itu jadi dasar dari semua modul lain).
const SOFTWARE_BASELINE: Record<CurrentSoftware, number> = {
  none: 20,
  generic: 50,
  good: 80,
};

export const CHALLENGE_PENALTY: Record<Challenge, number> = {
  keuangan: 20,
  tim: 10,
  operasional: 10,
  pelanggan: 5,
  booking: 5,
};

const STAGE_BY_EMPLOYEE_COUNT: Record<EmployeeCount, BusinessStage> = {
  solo: "Merintis",
  "2-5": "Merintis",
  "6-20": "Berkembang",
  "21-50": "Scaling",
  "50+": "Scaling",
};

const CHALLENGE_MIN_PACKAGE: Record<Challenge, RecommendedPackage> = {
  keuangan: "START",
  pelanggan: "GROWTH",
  booking: "GROWTH",
  operasional: "SCALE",
  tim: "SCALE",
};

const EMPLOYEE_MIN_PACKAGE: Record<EmployeeCount, RecommendedPackage> = {
  solo: "START",
  "2-5": "START",
  "6-20": "GROWTH",
  "21-50": "SCALE",
  "50+": "SCALE",
};

const PACKAGE_RANK: Record<RecommendedPackage, number> = { START: 0, GROWTH: 1, SCALE: 2 };

function higherPackage(a: RecommendedPackage, b: RecommendedPackage): RecommendedPackage {
  return PACKAGE_RANK[a] >= PACKAGE_RANK[b] ? a : b;
}

// Bisa pilih lebih dari satu tantangan -- ambil yang PALING berat (max penalty)
// sebagai dasar skor, bukan dijumlah, supaya makin banyak dicentang bukan berarti
// makin cepat nyentuh dasar (0) -- satu masalah paling parah sudah cukup mewakili.
function worstChallengePenalty(challenges: Challenge[]): number {
  return Math.max(...challenges.map((c) => CHALLENGE_PENALTY[c]));
}

export function runCheckup(answers: CheckupAnswers): CheckupResult {
  const rawScore = SOFTWARE_BASELINE[answers.currentSoftware] - worstChallengePenalty(answers.biggestChallenges);
  const businessHealthScore = Math.max(0, Math.min(100, rawScore));

  const businessStage = STAGE_BY_EMPLOYEE_COUNT[answers.employeeCount];

  const recommendedPackage = answers.biggestChallenges
    .map((c) => CHALLENGE_MIN_PACKAGE[c])
    .reduce(higherPackage, EMPLOYEE_MIN_PACKAGE[answers.employeeCount]);

  return { businessHealthScore, businessStage, recommendedPackage };
}

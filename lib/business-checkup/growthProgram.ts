import type { EmployeeCount, CurrentSoftware } from "@/lib/business-checkup/questions";

// TODO: konfirmasi threshold final dengan Founder. Kondisi sekarang: tim kecil
// (solo atau 2-5 orang) DAN belum pernah pakai software terintegrasi sama sekali
// -- sinyal paling jelas dari organisasi tahap awal yang kekurangan sumber daya,
// diambil dari jawaban Business Checkup yang sudah ada (tidak ada pertanyaan baru).
const ELIGIBLE_EMPLOYEE_COUNTS: readonly EmployeeCount[] = ["solo", "2-5"];
const ELIGIBLE_SOFTWARE: CurrentSoftware = "none";

export function isEligibleForGrowthProgram(
  employeeCount: EmployeeCount,
  currentSoftware: CurrentSoftware
): boolean {
  return ELIGIBLE_EMPLOYEE_COUNTS.includes(employeeCount) && currentSoftware === ELIGIBLE_SOFTWARE;
}

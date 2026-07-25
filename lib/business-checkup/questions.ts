export const EMPLOYEE_COUNT_OPTIONS = [
  { value: "solo", label: "Hanya saya sendiri" },
  { value: "2-5", label: "2–5 orang" },
  { value: "6-20", label: "6–20 orang" },
  { value: "21-50", label: "21–50 orang" },
  { value: "50+", label: "Lebih dari 50 orang" },
] as const;

export const CHALLENGE_OPTIONS = [
  { value: "keuangan", label: "Saya tidak tahu kondisi keuangan bisnis saya" },
  { value: "pelanggan", label: "Pelanggan sering lupa di-follow-up" },
  { value: "booking", label: "Booking/reservasi masih manual" },
  { value: "operasional", label: "Operasional semakin kompleks (stok, gudang, dll)" },
  { value: "tim", label: "Tim semakin sulit dipantau" },
] as const;

export const SOFTWARE_OPTIONS = [
  { value: "none", label: "Belum pakai software apa pun (manual/Excel)" },
  { value: "generic", label: "Pakai aplikasi, tapi kurang pas untuk bisnis saya" },
  { value: "good", label: "Sudah pakai software yang cukup pas" },
] as const;

export type EmployeeCount = (typeof EMPLOYEE_COUNT_OPTIONS)[number]["value"];
export type Challenge = (typeof CHALLENGE_OPTIONS)[number]["value"];
export type CurrentSoftware = (typeof SOFTWARE_OPTIONS)[number]["value"];

export function labelFor<T extends { value: string; label: string }>(
  options: readonly T[],
  value: string
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

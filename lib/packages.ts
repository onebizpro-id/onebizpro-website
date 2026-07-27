// Satu sumber data paket, dipakai oleh /harga (SolutionPackages) DAN hasil
// Business Checkup -- supaya detail paket (harga, fitur) tidak dobel-tulis dan
// bisa drift kalau salah satu lupa di-update.
export type PackageName = "START" | "GROWTH" | "SCALE";

export type PackageSolution = { benefit: string; system: string };

export type PackageInfo = {
  name: PackageName;
  price: string;
  audience: string;
  problem: string;
  transformation: string;
  basedOn?: PackageName;
  solutions: PackageSolution[];
  highlight: boolean;
};

export const PACKAGES: PackageInfo[] = [
  {
    name: "START",
    price: "399.000",
    audience: "Untuk bisnis yang ingin kontrol penuh atas kondisi bisnisnya",
    problem: "Keuangan tidak terpantau, pencatatan berantakan",
    transformation:
      "Anda tahu persis kondisi keuangan bisnis kapan saja — tanpa menunggu laporan bulanan.",
    solutions: [
      { benefit: "Keuangan tercatat otomatis", system: "Accounting" },
      { benefit: "Pantau kondisi bisnis real-time", system: "Dashboard" },
      { benefit: "Asisten AI siap membantu", system: "Asisten AI" },
      { benefit: "Ringkasan harian ke WhatsApp", system: "Digest WA" },
    ],
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "699.000",
    audience: "Untuk bisnis yang mulai berkembang",
    problem: "Pelanggan sering lupa di-follow-up, booking masih manual",
    transformation: "Pelanggan tidak lagi terlewat, dan reservasi masuk rapi tanpa bentrok.",
    basedOn: "START",
    solutions: [
      { benefit: "Kelola pelanggan & riwayat interaksi", system: "CRM" },
      { benefit: "Pantau peluang penjualan", system: "Sales Pipeline" },
      { benefit: "Terima booking tanpa bentrok", system: "Booking" },
    ],
    highlight: true,
  },
  {
    name: "SCALE",
    price: "1.199.000",
    audience: "Untuk bisnis dengan operasional kompleks",
    problem: "Stok tidak terpantau, tim sulit dipantau, approval berantakan",
    transformation:
      "Operasional harian — kasir, stok, tim — berjalan rapi dan saling terhubung, tanpa pencatatan ganda.",
    basedOn: "GROWTH",
    solutions: [
      { benefit: "Kasir tanpa perangkat khusus", system: "POS" },
      { benefit: "Kelola stok & pembelian", system: "Inventory" },
      { benefit: "Kelola tim (absensi, gaji, cuti)", system: "HR" },
    ],
    highlight: false,
  },
];

export function getPackage(name: string): PackageInfo | undefined {
  return PACKAGES.find((p) => p.name === name);
}

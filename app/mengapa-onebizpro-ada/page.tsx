import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mengapa OneBizPro Ada — OneBizPro",
  description:
    "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki.",
};

// Halaman ini sengaja TIDAK pakai <Navbar />/<Footer /> situs -- ini pengalaman
// naratif/brand berdiri sendiri (dark, editorial), bukan destinasi navigasi rutin.
// Header-nya cuma wordmark + link kembali, sesuai mockup yang sudah difinalisasi
// Founder (lihat BRIEF_MengapaOneBizProAda_ProgramPertumbuhanGratis.md).
type Beat = { node: ReactNode; style: CSSProperties; serif: boolean };

const NARRATIVE: Beat[] = [
  {
    serif: true,
    style: { fontSize: "clamp(20px, 2.6vw, 25px)", fontWeight: 400, lineHeight: 1.55, color: "#dbe6f2" },
    node: "Kami percaya kemampuan sebuah organisasi untuk bertumbuh tidak ditentukan oleh besarnya anggaran teknologi yang dimiliki.",
  },
  {
    serif: true,
    style: { fontSize: "clamp(23px, 3.2vw, 31px)", fontWeight: 400, lineHeight: 1.5, color: "#ffffff" },
    node: (
      <>
        Namun selama ini, teknologi terbaik hanya bisa diakses oleh segelintir organisasi yang
        bersumber daya besar—sementara jutaan{" "}
        <span style={{ color: "#f2cf94", fontStyle: "normal", fontWeight: 500 }}>
          usaha, yayasan, sekolah, komunitas
        </span>
        , dan organisasi lainnya harus berjuang dengan sistem yang terbatas.
      </>
    ),
  },
  {
    serif: false,
    style: {
      fontSize: "clamp(22px, 2.8vw, 27px)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
      color: "var(--accent)",
    },
    node: "OneBizPro dibangun untuk mengubah keadaan itu.",
  },
  {
    serif: true,
    style: { fontSize: "clamp(19px, 2.4vw, 23px)", fontWeight: 400, lineHeight: 1.55, color: "#dbe6f2" },
    node: "Kami menghadirkan teknologi bisnis kelas dunia, agar usaha kecil, yayasan, sekolah, dan komunitas bisa mengakses kemampuan yang sama dengan organisasi besar.",
  },
  {
    serif: true,
    style: { fontSize: "clamp(20px, 2.6vw, 25px)", fontWeight: 500, lineHeight: 1.5, color: "#ffffff" },
    node: "Karena ketika lebih banyak organisasi bertumbuh, lebih banyak masyarakat yang merasakan manfaatnya.",
  },
  {
    serif: false,
    style: {
      fontSize: "clamp(22px, 2.8vw, 27px)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
      color: "#ffffff",
    },
    node: "Kami tidak hanya membangun software.",
  },
  {
    serif: true,
    style: { fontSize: "clamp(23px, 3.2vw, 31px)", fontWeight: 400, lineHeight: 1.5, color: "#ffffff" },
    node: "Kami membangun masa depan di mana teknologi menjadi penggerak kemajuan yang dapat dinikmati oleh semua organisasi.",
  },
];

const CATEGORIES: { label: string; dashed?: boolean; icon: ReactNode }[] = [
  {
    label: "Usaha Kecil",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 10L5 4H19L20 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10C4 11.3807 5.11929 12.5 6.5 12.5C7.88071 12.5 9 11.3807 9 10C9 11.3807 10.1193 12.5 11.5 12.5C12.8807 12.5 14 11.3807 14 10C14 11.3807 15.1193 12.5 16.5 12.5C17.8807 12.5 19 11.3807 19 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Yayasan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20C12 20 4 15.5 4 9.8C4 7 6.2 5 8.8 5C10.2 5 11.3 5.7 12 6.8C12.7 5.7 13.8 5 15.2 5C17.8 5 20 7 20 9.8C20 15.5 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Sekolah",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5L22 9.5L12 14L2 9.5L12 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11.5V16C6 16 8.5 18 12 18C15.5 18 18 16 18 16V11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 9.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Komunitas",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 19C3 15.8 5.24 13.5 8 13.5C9.4 13.5 10.66 14.1 11.56 15.06"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M21 19C21 15.8 18.76 13.5 16 13.5C14.6 13.5 13.34 14.1 12.44 15.06"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 19C8.5 16.5 10 14.8 12 14.8C14 14.8 15.5 16.5 15.5 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Lainnya",
    dashed: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MengapaOneBizProAdaPage() {
  return (
    <div
      style={{
        background: "radial-gradient(140% 90% at 50% -10%, #16324f 0%, #0a1b2e 45%, #05101c 100%)",
        color: "#eef3f9",
      }}
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-6 pt-7">
        <Link href="/" className="text-[17px] font-bold tracking-tight text-white">
          OneBizPro
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm hover:text-white"
          style={{ color: "#9db3cc" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Kembali ke beranda
        </Link>
      </div>

      <div className="mx-auto max-w-[720px] px-6 pb-22 pt-24 text-center">
        <h1
          className={`${newsreader.className} text-pretty text-white`}
          style={{ fontSize: "clamp(30px, 4.4vw, 44px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.25 }}
        >
          Mengapa OneBizPro Ada.
        </h1>
      </div>

      <div className="relative mx-auto max-w-[760px] px-6">
        <div
          className="absolute bottom-2 top-2"
          style={{
            left: "31px",
            width: "1px",
            background: "linear-gradient(to bottom, rgba(239,159,39,0.5), rgba(255,255,255,0.06))",
          }}
        />
        <div className="flex flex-col gap-16">
          {NARRATIVE.map((beat, i) => (
            <div key={i} className="flex items-start gap-6">
              <span
                className="mt-1.5 h-[15px] w-[15px] flex-shrink-0 rounded-full"
                style={{ background: "var(--accent)", border: "1.5px solid var(--accent)" }}
              />
              <p
                className={`m-0 text-pretty ${beat.serif ? `${newsreader.className} italic` : ""}`}
                style={beat.style}
              >
                {beat.node}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-[760px] px-6 text-center sm:mt-32">
        <div
          className="mb-2.5 text-xs font-semibold uppercase"
          style={{ color: "#7f95ac", letterSpacing: "0.14em" }}
        >
          Untuk mereka yang paling membutuhkannya
        </div>
        <p className="mb-9 text-sm" style={{ color: "#6b8098" }}>
          Contoh, bukan daftar tertutup — terbuka untuk organisasi bertumbuh apa pun, dari sektor mana pun.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {CATEGORIES.map(({ label, dashed, icon }) => (
            <div key={label} className="flex w-[120px] flex-col items-center gap-3">
              <span
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: dashed ? "1px dashed rgba(255,255,255,0.22)" : "1px solid rgba(255,255,255,0.10)",
                  color: dashed ? "#93a8bf" : "#f2cf94",
                }}
              >
                {icon}
              </span>
              <span className="text-sm" style={{ color: dashed ? "#93a8bf" : "#c3d1e0" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[640px] px-6 pb-28 pt-28 text-center sm:pb-[110px] sm:pt-[120px]">
        <p
          className={`${newsreader.className} mb-[18px] text-pretty italic`}
          style={{ fontSize: "clamp(24px, 3.2vw, 30px)", fontWeight: 500, lineHeight: 1.5, color: "#ffffff" }}
        >
          Itu sebabnya OneBizPro terbuka{" "}
          <span style={{ color: "var(--accent)", fontStyle: "normal", fontWeight: 600 }}>gratis</span> untuk
          organisasi yang sedang bertumbuh.
        </p>
        <p className="mb-11 text-[15px]" style={{ color: "#93a8bf" }}>
          Kami dampingi sampai Anda cukup kuat untuk melangkah sendiri — bukan amal tanpa ujung, tapi akselerasi
          yang berhasil.
        </p>
        <div className="flex flex-col items-center gap-[18px]">
          <Link
            href="/business-checkup"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-[15px] text-base font-semibold"
            style={{ background: "var(--accent)", color: "#0a1b2e" }}
          >
            Cek kelayakan organisasi Anda
            <ArrowIcon />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-white"
            style={{ color: "#b9c8db" }}
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const CATEGORIES = ["Usaha Kecil", "Yayasan", "Sekolah", "Komunitas"];

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

// Beda shade & mood dari ClosingCta (bg-primary flat, sans-serif) -- radial
// gradient navy lebih gelap + tipografi serif italic, sesuai mockup Founder
// (Control/plan.md item #16, lihat BRIEF_MengapaOneBizProAda_ProgramPertumbuhanGratis.md).
export function WhyWeExistTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(130% 150% at 18% -15%, #16324f 0%, #0a1b2e 52%, #071220 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.5,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-32">
        <div
          className="mb-7 text-xs font-semibold uppercase"
          style={{ color: "var(--accent)", letterSpacing: "0.16em" }}
        >
          Mengapa OneBizPro Ada
        </div>

        <p
          className={`${newsreader.className} text-pretty italic`}
          style={{ fontSize: "clamp(23px, 3.2vw, 33px)", fontWeight: 400, lineHeight: 1.5, color: "#eef3f9" }}
        >
          &ldquo;Jutaan usaha, yayasan, sekolah, dan komunitas harus berjuang dengan sistem yang
          terbatas&mdash;karena teknologi terbaik selama ini hanya bisa diakses segelintir organisasi
          bersumber daya besar.&rdquo;
        </p>

        <p
          className={`${newsreader.className} mt-8 text-pretty`}
          style={{ fontSize: "clamp(19px, 2.4vw, 25px)", fontWeight: 500, lineHeight: 1.55, color: "#ffffff" }}
        >
          Ketika lebih banyak organisasi bertumbuh, lebih banyak masyarakat yang merasakan manfaatnya.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              style={{
                border: "1px solid rgba(239,159,39,0.32)",
                background: "rgba(239,159,39,0.06)",
                color: "#f2cf94",
              }}
            >
              {c}
            </span>
          ))}
          <span
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            style={{
              border: "1px dashed rgba(239,159,39,0.32)",
              background: "rgba(239,159,39,0.06)",
              color: "#93a8bf",
            }}
          >
            + Organisasi Bertumbuh Lainnya
          </span>
        </div>
        <p className="mt-3 text-xs" style={{ color: "#7f95ac" }}>
          Ini contoh, bukan daftar lengkap — terbuka untuk organisasi bertumbuh apa pun.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4">
          <Link
            href="/business-checkup"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-[15px] text-base font-semibold"
            style={{ background: "var(--accent)", color: "#0a1b2e" }}
          >
            Organisasi Anda memenuhi syarat untuk akses gratis?
            <ArrowIcon />
          </Link>
          <Link
            href="/mengapa-onebizpro-ada"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-white"
            style={{ color: "#b9c8db" }}
          >
            Mengapa OneBizPro Ada
            <ArrowIcon size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

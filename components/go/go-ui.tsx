import Image from "next/image";
import { GoCta } from "./go-cta";

/** Logo asli OneBizPro (tidak digambar ulang) ditambah penanda GO. */
export function LogoGo() {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/logo.png" alt="OneBizPro" width={167} height={32} priority />
      <span className="go-grad rounded-md px-2 py-0.5 text-[11px] font-extrabold tracking-widest text-white">GO</span>
    </span>
  );
}

/** Bingkai HP untuk tangkapan layar aplikasi yang sebenarnya. */
export function Phone({ src, w, h, alt, className = "" }: { src: string; w: number; h: number; alt: string; className?: string }) {
  return (
    <div className={`go-phone mx-auto w-full ${className}`}>
      <div>
        <Image src={src} alt={alt} width={w} height={h} className="block h-auto w-full" />
      </div>
    </div>
  );
}

/** Hasil konten (gambar yang benar-benar diekspor aplikasi) dalam kartu sederhana. */
export function Result({ src, w, h, alt, className = "" }: { src: string; w: number; h: number; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[#dfe6f5] bg-white shadow-[0_18px_40px_-20px_rgba(23,45,72,0.45)] ${className}`}>
      <Image src={src} alt={alt} width={w} height={h} className="block h-auto w-full" />
    </div>
  );
}

export function PrimaryButton({ href, location, children, className = "" }: { href: string; location: string; children: React.ReactNode; className?: string }) {
  return (
    <GoCta
      href={href}
      location={location}
      className={`go-grad inline-flex h-12 items-center justify-center rounded-xl px-7 text-base font-semibold text-white shadow-[0_12px_28px_-10px_rgba(37,99,235,0.65)] transition hover:opacity-95 ${className}`}
    >
      {children}
    </GoCta>
  );
}

export function GhostButton({ href, location, children, className = "" }: { href: string; location: string; children: React.ReactNode; className?: string }) {
  return (
    <GoCta
      href={href}
      location={location}
      className={`inline-flex h-12 items-center justify-center rounded-xl border border-[#c9d6f0] bg-white px-7 text-base font-semibold text-[#172d48] transition hover:bg-[#f1f5ff] ${className}`}
    >
      {children}
    </GoCta>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-[#54667f]">{sub}</p>}
    </div>
  );
}

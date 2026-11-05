import Image from "next/image";
import { GoCta } from "./go-cta";

/** Logo asli OneBizPro (tidak digambar ulang) ditambah penanda GO. */
export function LogoGo() {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/logo.png" alt="OneBizPro" width={167} height={32} priority />
      <span className="rounded-md border-2 border-[#172d48] bg-[#ffe45e] px-1.5 py-0.5 text-[11px] font-extrabold tracking-widest text-[#172d48]">GO</span>
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

/** Hasil konten asli dari aplikasi, ditempel seperti foto bertape. */
export function Photo({ src, w, h, alt, rotate = 0, className = "" }: { src: string; w: number; h: number; alt: string; rotate?: number; className?: string }) {
  return (
    <div className={`go-photo ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <Image src={src} alt={alt} width={w} height={h} className="block h-auto w-full" />
    </div>
  );
}

export function PrimaryButton({ href, location, children, className = "" }: { href: string; location: string; children: React.ReactNode; className?: string }) {
  return (
    <GoCta href={href} location={location} className={`go-btn ${className}`}>
      {children}
    </GoCta>
  );
}

export function GhostButton({ href, location, children, className = "" }: { href: string; location: string; children: React.ReactNode; className?: string }) {
  return (
    <GoCta href={href} location={location} className={`go-btn go-btn-ghost ${className}`}>
      {children}
    </GoCta>
  );
}

export function SectionHead({ title, sub, hand }: { title: React.ReactNode; sub?: string; hand?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {hand && <p className="go-hand text-2xl text-[#2563eb]">{hand}</p>}
      <h2 className="mt-1 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-[#4f607a]">{sub}</p>}
    </div>
  );
}

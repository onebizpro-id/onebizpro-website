import Image from "next/image";
import Link from "next/link";
import { Clock, Layers, Lightbulb, PenLine, PauseCircle } from "lucide-react";
import { FAQ, FEATURES, GO, PRICING_FEATURES, PROBLEMS, SEGMENTS, STEPS } from "@/lib/go";
import { GoCta } from "./go-cta";
import { GhostButton, LogoGo, Phone, PrimaryButton, Result, SectionHead } from "./go-ui";

/** Tujuan tombol beli: Lynk.id bila URL sudah diisi, selain itu menuju bagian harga. */
const buyHref = GO.lynkUrl || "#harga";

export function GoNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe6f5] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/go" aria-label="OneBizPro Go">
          <LogoGo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#54667f] md:flex" aria-label="Menu Go">
          <a href="#fitur" className="hover:text-[#172d48]">Fitur</a>
          <a href="#cara-kerja" className="hover:text-[#172d48]">Cara kerja</a>
          <a href="#harga" className="hover:text-[#172d48]">Harga</a>
          <a href="#faq" className="hover:text-[#172d48]">FAQ</a>
        </nav>
        <GoCta
          href={buyHref}
          location="nav"
          className="go-grad inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-white"
        >
          <span className="sm:hidden">Coba</span>
          <span className="hidden sm:inline">Coba Go Content</span>
        </GoCta>
      </div>
    </header>
  );
}

export function GoHero() {
  return (
    <section className="overflow-hidden bg-[#f1f5ff]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#2563eb] shadow-sm">
            <span className="go-grad h-2 w-2 rounded-full" /> Digital Business Assistant
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Bisnis Sendiri, <span className="go-grad-text">Nggak Harus Ribet Sendiri.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#54667f]">
            Kenalan dengan OneBizPro Go, teman kerja digital untuk membantu seller, creator, freelancer, dan pemilik usaha mengelola bisnis lebih praktis.
          </p>
          <div className="mt-6 rounded-2xl border border-[#dfe6f5] bg-white p-4 sm:max-w-md">
            <p className="text-sm font-bold">Go Content</p>
            <p className="mt-1 text-sm text-[#54667f]">Bikin konten jualan lebih mudah dengan bantuan AI.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href={buyHref} location="hero-primary">Coba Go Content</PrimaryButton>
            <GhostButton href="#cara-kerja" location="hero-secondary">Lihat Cara Kerjanya</GhostButton>
          </div>
          <p className="mt-4 text-sm text-[#54667f]">Mulai {GO.price}{GO.period}. Bisa dipakai dari HP.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="relative z-10 mx-auto w-[58%]">
            <Phone src="/go/ui-tampil.jpg" w={720} h={1548} alt="Layar Go Content: pratinjau Carousel dan pilihan template" />
          </div>
          <Result src="/go/carousel-2.jpg" w={1080} h={1350} alt="Contoh slide Carousel buatan Go Content" className="absolute -left-2 top-6 z-20 w-[40%] -rotate-6 sm:-left-6" />
          <Result src="/go/post-1.jpg" w={1080} h={1350} alt="Contoh Instagram Post buatan Go Content" className="absolute -right-2 bottom-4 z-20 w-[38%] rotate-6 sm:-right-6" />
        </div>
      </div>
    </section>
  );
}

const PROBLEM_ICONS = [Lightbulb, Clock, PenLine, Layers, PauseCircle];

export function GoProblems() {
  return (
    <section className="go-section mx-auto max-w-6xl px-5 py-16">
      <SectionHead title="Mau punya bisnis sendiri, tapi kok kerjaannya banyak banget?" sub="Kalau ini terdengar akrab, kamu nggak sendirian." />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROBLEMS.map((p, i) => {
          const Icon = PROBLEM_ICONS[i];
          return (
            <li key={p} className="go-card flex flex-col gap-3 p-5">
              <span className="go-grad flex h-10 w-10 items-center justify-center rounded-xl text-white"><Icon size={20} aria-hidden /></span>
              <span className="text-[15px] font-medium leading-snug">{p}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function GoFeatures() {
  return (
    <section id="fitur" className="go-section bg-[#f1f5ff] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Go Content" title="Sekarang bikin konten bisnis bisa lebih praktis." sub="Semua yang ada di bawah ini bisa kamu pakai hari ini." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article key={f.key} className="go-card flex flex-col overflow-hidden">
              <div className="relative bg-[#e8efff]">
                <Image src={f.img} alt={`${f.title}: contoh hasil dari Go Content`} width={f.w} height={f.h} className="aspect-[4/5] w-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-[#54667f]">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GoHowItWorks() {
  return (
    <section id="cara-kerja" className="go-section mx-auto max-w-6xl px-5 py-16">
      <SectionHead eyebrow="Cara kerja" title="Lima langkah, semuanya dari HP." />
      <ol className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
        {STEPS.map((s) => (
          <li key={s.n} className="go-card w-[78%] shrink-0 snap-center p-4 sm:w-[44%] lg:w-auto">
            <div className="flex items-center gap-3">
              <span className="go-grad flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">{s.n}</span>
              <h3 className="text-base font-bold">{s.title}</h3>
            </div>
            <p className="mt-2 text-sm text-[#54667f]">{s.desc}</p>
            <Phone src={s.img} w={720} h={1548} alt={`Langkah ${s.n}: ${s.title}`} className="mt-4 max-w-[190px]" />
          </li>
        ))}
      </ol>
    </section>
  );
}

export function GoSegments() {
  return (
    <section className="go-section bg-[#f1f5ff] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead title="Untuk siapa Go Content?" sub="One-Person Business: satu orang, banyak bisa. Tim kecil juga boleh." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((s) => (
            <article key={s.title} className="go-card p-5">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[#54667f]">{s.example}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GoDemo() {
  const templates = [
    ["tpl-scrapbook-mint", "Scrapbook mint"],
    ["tpl-scrapbook-hangat", "Scrapbook hangat"],
    ["tpl-editorial-gelap", "Editorial gelap"],
    ["tpl-kartu-bersih", "Kartu bersih"],
    ["tpl-catatan-tempel", "Catatan tempel"],
    ["tpl-tanya-jawab", "Tanya jawab"],
  ];
  return (
    <section id="demo" className="go-section mx-auto max-w-6xl px-5 py-16">
      <SectionHead eyebrow="Demo" title="Hasil nyata dari aplikasinya." sub="Semua gambar dan video di sini dibuat langsung dengan Go Content, tanpa diedit lagi." />
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="go-phone">
            <div>
              <video className="block h-auto w-full" src="/go/reels-demo.mp4" poster="/go/reels-poster.jpg" controls playsInline preload="none" aria-label="Demo Reels buatan Go Content" />
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-[#54667f]">Reels (MP4) langsung dari Go Content. Tekan putar untuk melihat.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div><Result src="/go/carousel-3.jpg" w={1080} h={1350} alt="Carousel slide 3" /><p className="mt-2 text-center text-xs font-semibold text-[#54667f]">Carousel</p></div>
          <div><Result src="/go/post-1.jpg" w={1080} h={1350} alt="Instagram Post" /><p className="mt-2 text-center text-xs font-semibold text-[#54667f]">Post</p></div>
          <div className="col-span-2 sm:col-span-1 sm:row-span-1"><Result src="/go/story-2.jpg" w={1080} h={1920} alt="Story" className="mx-auto max-w-[200px] sm:max-w-none" /><p className="mt-2 text-center text-xs font-semibold text-[#54667f]">Story</p></div>
          {templates.map(([k, label]) => (
            <div key={k}><Result src={`/go/${k}.jpg`} w={720} h={900} alt={`Template ${label}`} /><p className="mt-2 text-center text-xs font-semibold text-[#54667f]">Template {label}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GoPricing() {
  return (
    <section id="harga" className="go-section bg-[#f1f5ff] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Harga" title="Satu paket, jelas dari awal." />
        <div className="go-grad mx-auto mt-10 max-w-md rounded-[1.6rem] p-[2px] shadow-[0_24px_50px_-24px_rgba(37,99,235,0.7)]">
          <div className="rounded-[1.5rem] bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">GO CONTENT</p>
            <p className="mt-3 flex items-end gap-1">
              <span className="go-display text-5xl font-extrabold">{GO.price}</span>
              <span className="pb-1.5 text-[#54667f]">{GO.period}</span>
            </p>
            <p className="mt-3 text-[#54667f]">Bantu pekerjaan pembuatan konten bisnis dengan lebih praktis.</p>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {PRICING_FEATURES.map((f) => (
                <li key={f} className="flex gap-2.5"><span className="go-grad mt-1.5 h-2 w-2 shrink-0 rounded-full" />{f}</li>
              ))}
              <li className="flex gap-2.5">
                <span className="go-grad mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                {GO.credits ? `${GO.credits} kredit AI per bulan` : "Kredit AI bulanan untuk naskah. Jumlahnya diinformasikan saat berlangganan."}
              </li>
            </ul>
            <p className="mt-4 text-sm text-[#54667f]">Akses berlaku satu bulan. Perpanjangan dengan membeli lagi.</p>
            {GO.lynkUrl ? (
              <PrimaryButton href={GO.lynkUrl} location="pricing" className="mt-6 w-full">Langganan Go Content</PrimaryButton>
            ) : (
              <div className="mt-6 space-y-3">
                <span className="flex h-12 w-full items-center justify-center rounded-xl bg-[#e8efff] text-base font-semibold text-[#54667f]">Segera hadir di Lynk.id</span>
                <GhostButton href={GO.instagramUrl} location="pricing-ig" className="w-full">Tanya lewat DM Instagram</GhostButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GoFaq() {
  return (
    <section id="faq" className="go-section mx-auto max-w-3xl px-5 py-16">
      <SectionHead title="Pertanyaan yang sering muncul" />
      <div className="go-faq mt-8">
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function GoFinalCta() {
  return (
    <section className="go-grad">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Yuk, bikin bisnis lebih praktis mulai sekarang!</h2>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <GoCta href={buyHref} location="final" className="inline-flex h-12 items-center rounded-xl bg-white px-7 text-base font-semibold text-[#2563eb] shadow-lg">Mulai dengan Go Content</GoCta>
          <GoCta href={GO.instagramUrl} location="final-ig" className="inline-flex h-12 items-center rounded-xl border border-white/60 px-7 text-base font-semibold text-white">Ikuti {GO.instagramHandle}</GoCta>
        </div>
      </div>
    </section>
  );
}

export function GoFooter() {
  return (
    <footer className="border-t border-[#dfe6f5] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <LogoGo />
          <p className="mt-3 text-sm text-[#54667f]">{GO.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#54667f]">
          <li><a className="hover:text-[#172d48]" href={GO.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram {GO.instagramHandle}</a></li>
          <li><Link className="hover:text-[#172d48]" href="/">OneBizPro.id</Link></li>
          <li><Link className="hover:text-[#172d48]" href="/terms">Syarat</Link></li>
          <li><Link className="hover:text-[#172d48]" href="/privacy">Privasi</Link></li>
        </ul>
      </div>
    </footer>
  );
}

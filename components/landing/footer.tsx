import Image from "next/image";
import { waLink } from "@/lib/whatsapp";
import { MODULE_NAMES } from "@/components/landing/modules";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Image src="/logo.png" alt="OneBizPro" width={167} height={32} />
            <p className="mt-4 text-sm text-muted-foreground">
              Kerja Makin Ringan, Keputusan Makin Tajam.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Modul</p>
            <ul className="mt-4 space-y-2.5">
              {MODULE_NAMES.map((name) => (
                <li key={name}>
                  <a
                    href="#modul"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Kontak</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={waLink("Halo, saya ingin coba OneBizPro.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} OneBizPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

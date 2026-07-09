import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="OneBizPro" width={134} height={32} priority />
        </Link>
        <a
          href={waLink("Halo, saya ingin coba OneBizPro.")}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "sm" })}
        >
          Coba Gratis
        </a>
      </div>
    </header>
  );
}

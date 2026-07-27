import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BOOKING_APP_URL } from "@/lib/bookingApp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="OneBizPro" width={167} height={32} priority />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/harga"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Paket
          </Link>
          <a
            href={`${BOOKING_APP_URL}/login`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Masuk
          </a>
          <Link href="/business-checkup" className={buttonVariants({ size: "sm" })}>
            Mulai Business Checkup
          </Link>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <Image src="/logo.png" alt="OneBizPro" width={134} height={32} />
        <p className="text-sm text-muted-foreground">
          OneBizPro — Mudah Digunakan, Efisien, Berdampak Besar.
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} OneBizPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

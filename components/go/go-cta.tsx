"use client";

import type { ReactNode } from "react";
import { trackCustom } from "@/lib/meta-pixel";

/** Tautan dengan pelacakan Meta Pixel (event kustom "GoCtaClick"). Tautan eksternal dibuka di tab baru. */
export function GoCta({
  href,
  location,
  className,
  children,
}: {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackCustom("GoCtaClick", { location, target: external ? href : "anchor" })}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

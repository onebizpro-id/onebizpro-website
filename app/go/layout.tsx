import type { Metadata } from "next";
import { Caveat, Inter, Poppins } from "next/font/google";
import "./go.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-go-body" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-go-display" });

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-go-hand" });

const TITLE = "OneBizPro Go: AI Assistant for One-Person Business | Go Content, Go Order, Go Money";
const DESC =
  "One Person. One Business. One AI Team. Bikin konten dengan Go Content, lalu catat jualan (Go Order) dan lihat cuan (Go Money), semuanya dari HP.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://onebizpro.id/go" },
  openGraph: {
    type: "website",
    url: "https://onebizpro.id/go",
    siteName: "OneBizPro Go",
    locale: "id_ID",
    title: TITLE,
    description: DESC,
    images: [{ url: "https://onebizpro.id/go/og.png", width: 1200, height: 630, alt: "OneBizPro Go: Go Content" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["https://onebizpro.id/go/og.png"] },
};

export default function GoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`go-root ${inter.variable} ${poppins.variable} ${caveat.variable}`}>{children}</div>;
}

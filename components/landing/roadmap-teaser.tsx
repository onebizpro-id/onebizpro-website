import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const ROADMAP_ITEMS = ["AI Forecast", "AI Alert", "AI Executive Brief", "AI Recommendation", "Workflow Automation"];

export function RoadmapTeaser() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        Ke Mana Arah OneBizPro
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Asisten AI OneBizPro akan terus berkembang — dari sekadar menjawab pertanyaan, menjadi
        yang lebih dulu memberi tahu apa yang perlu Anda perhatikan.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {ROADMAP_ITEMS.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <Link href="/roadmap" className={`${buttonVariants({ size: "lg", variant: "outline" })} mt-8`}>
        Lihat Roadmap
      </Link>
    </section>
  );
}

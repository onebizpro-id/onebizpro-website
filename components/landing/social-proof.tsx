import { cn } from "@/lib/utils";

const toneClasses = {
  violet: "text-violet-600 bg-violet-500/10",
  rose: "text-rose-600 bg-rose-500/10",
  blue: "text-blue-600 bg-blue-500/10",
  emerald: "text-emerald-600 bg-emerald-500/10",
} as const;

const GROUPS = [
  {
    label: "Kreatif & Desain",
    tone: "violet",
    clients: ["Rumah Louie Project", "Konde.co"],
  },
  {
    label: "Ritel & Lifestyle",
    tone: "rose",
    clients: ["Lungi", "Safaraya"],
  },
  {
    label: "Teknologi & Penerbitan",
    tone: "blue",
    clients: ["SKN", "Bassam Publishing"],
  },
  {
    label: "Yayasan & Pendidikan",
    tone: "emerald",
    clients: ["Syameela"],
  },
] as const satisfies { label: string; tone: keyof typeof toneClasses; clients: string[] }[];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Dipercaya 10+ bisnis lintas industri
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <div key={g.label} className="rounded-lg border border-border bg-card px-5 py-5">
            <span
              className={cn(
                "inline-block rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide",
                toneClasses[g.tone]
              )}
            >
              {g.label}
            </span>
            <div className="mt-3.5 space-y-1.5">
              {g.clients.map((name) => (
                <p key={name} className="text-base font-bold tracking-tight text-foreground">
                  {name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        &amp; beberapa bisnis lainnya di berbagai industri.
      </p>
    </section>
  );
}

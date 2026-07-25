import { cn } from "@/lib/utils";

const toneClasses = {
  primary: "border-t-primary text-primary",
  accent: "border-t-accent text-accent",
  rose: "border-t-rose-500 text-rose-600",
  emerald: "border-t-emerald-500 text-emerald-600",
  blue: "border-t-blue-500 text-blue-600",
  amber: "border-t-amber-500 text-amber-600",
  violet: "border-t-violet-500 text-violet-600",
} as const;

const CLIENTS = [
  { name: "Rumah Louie Project", industry: "Desain Interior", tone: "primary" },
  { name: "Konde.co", industry: "Media & Komunitas", tone: "accent" },
  { name: "Lungi", industry: "Kafe & Resto", tone: "rose" },
  { name: "SKN", industry: "Teknologi & IT", tone: "blue" },
  { name: "Bassam Publishing", industry: "Penerbitan", tone: "violet" },
  { name: "Safaraya", industry: "Retail & Fashion", tone: "amber" },
  { name: "Syameela", industry: "Yayasan & Pendidikan", tone: "emerald" },
] as const satisfies { name: string; industry: string; tone: keyof typeof toneClasses }[];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Dipercaya 10+ bisnis lintas industri
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CLIENTS.map((c) => (
          <div
            key={c.name}
            className={cn(
              "rounded-lg border border-t-4 border-border bg-card px-4 py-3 text-center",
              toneClasses[c.tone].split(" ")[0]
            )}
          >
            <p className="text-sm font-semibold text-foreground">{c.name}</p>
            <p className={cn("mt-0.5 text-xs", toneClasses[c.tone].split(" ")[1])}>
              {c.industry}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        &amp; beberapa bisnis lainnya di berbagai industri.
      </p>
    </section>
  );
}

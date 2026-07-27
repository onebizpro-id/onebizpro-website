import {
  Palette,
  Megaphone,
  Coffee,
  Cpu,
  BookOpen,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

const CLIENTS = [
  { name: "Rumah Louie Project", industry: "Desain Interior", icon: Palette },
  { name: "Konde.co", industry: "Media & Komunitas", icon: Megaphone },
  { name: "Lungi", industry: "Kafe & Resto", icon: Coffee },
  { name: "SKN", industry: "Teknologi & IT", icon: Cpu },
  { name: "Bassam Publishing", industry: "Penerbitan", icon: BookOpen },
  { name: "Safaraya", industry: "Retail & Fashion", icon: ShoppingBag },
  { name: "Syameela", industry: "Yayasan & Pendidikan", icon: GraduationCap },
] as const;

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Dipercaya 10+ bisnis lintas industri
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        {CLIENTS.map(({ name, industry, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center rounded-lg border border-border bg-card px-3.5 py-4.5 text-center"
          >
            <span className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <p className="text-sm font-bold leading-snug text-foreground">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{industry}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        &amp; beberapa bisnis lainnya di berbagai industri.
      </p>
    </section>
  );
}

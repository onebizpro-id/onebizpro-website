import { Wallet, Users, CalendarCheck, Boxes, UserCog } from "lucide-react";

const PROBLEMS = [
  { icon: Wallet, text: "Saya tidak tahu kondisi keuangan bisnis saya" },
  { icon: Users, text: "Pelanggan sering lupa di-follow-up" },
  { icon: CalendarCheck, text: "Booking masih manual" },
  { icon: Boxes, text: "Operasional semakin kompleks" },
  { icon: UserCog, text: "Tim semakin sulit dipantau" },
] as const;

export function BusinessProblems() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Apakah Ini Terdengar Seperti Bisnis Anda?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kebanyakan pemilik bisnis yang kami temui mengalami setidaknya satu dari ini.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-foreground sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CLIENTS = [
  { name: "Rumah Louie Project", industry: "Desain Interior" },
  { name: "Konde.co", industry: "Media & Komunitas" },
  { name: "Lungi Aesthetic", industry: "Kafe & Resto" },
  { name: "SKN", industry: "Teknologi & IT" },
  { name: "Bassam Publishing", industry: "Penerbitan" },
  { name: "Safaraya", industry: "Retail & Fashion" },
  { name: "Syameela", industry: "Yayasan & Pendidikan" },
] as const;

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
            className="rounded-lg border border-border bg-card px-4 py-3 text-center"
          >
            <p className="text-sm font-semibold text-foreground">{c.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{c.industry}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        &amp; beberapa bisnis lainnya di berbagai industri.
      </p>
    </section>
  );
}

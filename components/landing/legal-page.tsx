import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { LEGAL } from "@/lib/legal";
import { waLink } from "@/lib/whatsapp";

export type LegalSectionData = { id: string; title: string; body: ReactNode };

const BODY_CLASS =
  "space-y-4 text-[15px] leading-7 text-foreground/85 " +
  "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 " +
  "[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 " +
  "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 " +
  "[&_strong]:font-semibold [&_strong]:text-foreground " +
  "[&_h3]:pt-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground";

export function LegalPage({
  title,
  intro,
  notice,
  sections,
  otherDoc,
}: {
  title: string;
  intro: ReactNode;
  notice?: ReactNode;
  sections: LegalSectionData[];
  otherDoc: { href: string; label: string };
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article lang="en" className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to OneBizPro
          </Link>

          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Legal</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {title}
            </h1>
            {LEGAL.effectiveDate && (
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {LEGAL.effectiveDate}
              </p>
            )}
            <div className={`mt-6 ${BODY_CLASS}`}>{intro}</div>
          </header>

          {notice && (
            <aside className="mt-8 rounded-xl border border-accent/40 bg-accent/10 p-5 text-sm leading-6 text-foreground/90">
              {notice}
            </aside>
          )}

          <nav aria-label="Contents" className="mt-10 rounded-xl border border-border bg-muted p-5">
            <p className="text-sm font-semibold text-foreground">Contents</p>
            <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
                <h2 id={`${s.id}-title`} className="text-xl font-semibold text-primary">
                  {i + 1}. {s.title}
                </h2>
                <div className={`mt-4 ${BODY_CLASS}`}>{s.body}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:justify-between">
            <Link href="/" className="font-medium text-muted-foreground hover:text-foreground">
              ← Back to OneBizPro
            </Link>
            <Link href={otherDoc.href} className="font-medium text-primary hover:underline">
              {otherDoc.label} →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalContact({ waMessage }: { waMessage: string }) {
  return (
    <ul>
      <li>
        <strong>Company:</strong> {LEGAL.companyName}
      </li>
      <li>
        <strong>Website:</strong> <a href={LEGAL.siteUrl}>onebizpro.id</a>
      </li>
      <li>
        <strong>WhatsApp:</strong>{" "}
        <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer">
          {LEGAL.whatsappNumber}
        </a>
      </li>
      {LEGAL.contactEmail && (
        <li>
          <strong>Email:</strong> <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
        </li>
      )}
      {LEGAL.address && (
        <li>
          <strong>Address:</strong> {LEGAL.address}
        </li>
      )}
    </ul>
  );
}

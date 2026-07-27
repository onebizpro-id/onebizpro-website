# OneBizPro Roadmap

This tracks planned modules for the OneBizPro platform. Per Core positioning
(`Control/Core/positioning.md`), OneBizPro is **not an ERP** — it is positioned
as an Intelligent Business Operating Platform for Indonesian businesses of any
scale (not limited to the "UMKM" category): low effort, high impact, not as a
single-purpose booking app. Booking is one module among several.

## Current modules

- **Booking** — scheduling, resource/slot management
- **CRM** — customer records, history, preferences
- **Akunting** — expense tracking, category breakdown, monthly reporting
- **HR** — attendance, staff scheduling, payroll slips
- **Inventory** — stock tracking, low-stock alerts
- **POS** — point of sale, transactions synced to Akunting
- **Tanya Asisten** — natural-language Q&A over the business's own data
- **Insight Strategis** — predictive/strategic recommendations, not just historical reports

## Planned: Smart Portal (website builder module)

**Status:** Roadmap item, not started. Sequenced **after** the modules above have
real client traction — a differentiator only matters once there's a core
product worth differentiating.

**Why it matters:** the website is a business's public entry point — where
leads arrive and where customer onboarding starts. Keeping it as a
disconnected, separately-built asset (e.g. a plain WordPress site) undercuts
OneBizPro's "one app for all your business needs" positioning.

**Shape of the feature** (not a full drag-drop CMS — kept deliberately lean):

- **Curated templates, not an open canvas.** A small set of polished template
  styles (e.g. "Elegan", "Ceria", "Korporat") to choose from, instead of
  a Wix/WordPress-style free-form editor. Keeps engineering scope small.
- **Copy generated from a short onboarding interview** (business name,
  category, key selling points) rather than written by the customer.
- **Data-connected content — the key differentiator.** Testimonials pull from
  the business's own CRM, portfolio/gallery photos pull from Booking/Inventory
  records, stat badges (e.g. "230+ proyek") pull from real transaction counts.
  Content stays fresh automatically; the owner never has to log in to
  maintain a separate website.
- **Photo-optional.** Falls back to illustrated/abstract visuals (same
  pattern used on OneBizPro's own marketing site) when the customer has no
  professional photos yet, so missing assets never block launch.
- **One-click publish** to a free subdomain (`namabisnis.onebizpro.id`) or a
  connected custom domain.

**Architecture note:** when built, this should be its own separate
app/codebase — the same pattern as `website` (marketing) and
`Platform/Booking` (product) already being separate Next.js projects under
the shared OneBizPro brand. It should read from the same backend/database as
the core platform, not be merged into either existing repo.

**What can happen now, cheaply:** when designing data models for the modules
above, keep in mind fields that would eventually feed a public website
(service photos, CRM testimonials/reviews, resource descriptions) so no large
migration is needed later.

## Marketing site roadmap (website conversion improvements)

Findings from benchmarking Xero, Mekari Jurnal, and Majoo (2026-07-25): none
of the current landing pages (`/`, `/harga`, `/coba-gratis`) have social proof,
an FAQ, a data-trust message, or a product demo — all of which appear on every
comparable competitor site. Sequenced roughly by impact vs. effort:

- **Portfolio/klien section (in progress).** Logo + name grid of real clients
  on the homepage, grouped/tagged by industry to reinforce the cross-industry
  Akunting positioning. Blocked on: client list with logos and confirmed
  consent to display publicly (sensitive since clients hand over financial
  data — needs explicit opt-in, not assumed). Testimonial quotes deferred to
  a later pass once collected; logos can ship first as a lighter-weight proof
  point.
- **Dedicated marketing/CS WhatsApp number.** Current WA number is used for
  the daily digest send and shouldn't double as the sales line. Once a
  separate number exists, surface it directly in the Navbar/header (not just
  behind the `/coba-gratis` form) so ready-to-buy visitors can skip the form.
- **FAQ section.** Answer likely objections before they block conversion:
  data security in the cloud, migrating from manual/Excel bookkeeping,
  minimum contract length, onboarding/training support. Place on the
  homepage or just above the form on `/coba-gratis`.
- **Data trust/security messaging.** Doesn't need a full dedicated page like
  Xero's — a short, specific blurb (encryption, backup, access control) near
  Pricing/LeadForm is enough at this stage. Matters most for institutional
  buyers (yayasan) who are more cautious with financial data.
- **Product demo (video or interactive walkthrough).** Static mockups
  currently stand in for this. A 60-90s demo video would let prospects see
  the real product before committing to a WhatsApp conversation.
- **Industry-specific solution pages** (e.g. `/solusi/yayasan`,
  `/solusi/retail`). Lower priority — larger scope, longer-term SEO/content
  play. Homepage stays cross-industry per the ICP pivot; these would be
  supplementary deep pages, not a homepage narrowing.

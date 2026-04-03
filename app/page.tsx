import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

const externalRel = "noopener noreferrer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-depth">
        <Section id="hero" className="py-24 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Rvdobuilds
          </p>
          <h1 className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            Useful software.
            <br className="hidden sm:block" /> Clear by design.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            A small software studio building intentional products and tools.
          </p>
          <div className="mt-9">
            <ButtonLink href="#products" variant="light">
              View products
            </ButtonLink>
          </div>
        </Section>
      </section>

      {/* ── Featured ─────────────────────────────────────────── */}
      {/* Disabled — uncomment to feature a product
      <section className="bg-section">
        <Section id="featured">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Featured
          </p>
          <article className="rounded-2xl border border-[var(--border-subtle)] bg-card p-8 md:p-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
              iOS App · Live
            </p>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Spend Meter
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
              Know what you can safely spend before payday. Built for people who
              want to stay on top of their money without the complexity.
            </p>
            <div className="mt-7">
              <ButtonLink
                href="https://spendmeter.app"
                target="_blank"
                rel={externalRel}
                variant="primary"
              >
                Visit product
              </ButtonLink>
            </div>
          </article>
        </Section>
      </section>
      */}

      {/* ── Products ─────────────────────────────────────────── */}
      <Section id="products">
        <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
          Products
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
            <h3 className="text-base font-semibold text-foreground">
              Spend Meter
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
              iPhone app for knowing what you can safely spend before payday.
            </p>
            <div className="mt-5">
              <ButtonLink
                href="https://spendmeter.app"
                target="_blank"
                rel={externalRel}
                variant="primary"
                className="h-9 min-w-0 rounded-lg px-4 text-xs"
              >
                Visit product
              </ButtonLink>
            </div>
          </article>

          <article className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
            <h3 className="text-base font-semibold text-foreground">
              TodoMode
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
              A calm, focused planning app for turning projects into clear
              weekly and daily execution.
            </p>
            <div className="mt-5">
              <ButtonLink
                href="https://todo-mode.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                variant="primary"
                className="h-9 min-w-0 rounded-lg px-4 text-xs"
              >
                Visit product
              </ButtonLink>
            </div>
          </article>

          <article className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
            <h3 className="text-base font-semibold text-foreground">
              HomeReps
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
              Minimal home workout logging for GTG sets and simple sessions.
            </p>
            <div className="mt-5">
              <p className="text-xs font-medium text-eyebrow">Coming soon</p>
            </div>
          </article>
        </div>
      </Section>

      {/* ── Tools ────────────────────────────────────────────── */}
      <section className="bg-section">
        <Section id="tools">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[var(--border-subtle)] bg-card-nested p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Launchframe
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A guided workbench for setting up a new app the same way every
                time.
              </p>
              <a
                href="https://launchframe.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                className="mt-4 inline-block text-xs font-medium text-accent transition-colors hover:text-accent-dim"
              >
                Open tool →
              </a>
            </article>

            <article className="rounded-xl border border-[var(--border-subtle)] bg-card-nested p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Mobile Dev Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Control your development workflow from your phone.
              </p>
              <a
                href="https://mobiledevworkflow.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                className="mt-4 inline-block text-xs font-medium text-accent transition-colors hover:text-accent-dim"
              >
                Open tool →
              </a>
            </article>

            <article className="rounded-xl border border-[var(--border-subtle)] bg-card-nested p-5">
              <h3 className="text-sm font-semibold text-foreground">
                Claude Code Kit
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A copy-first reference app for getting more out of Claude Code.
              </p>
              <a
                href="https://claudecodekit.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                className="mt-4 inline-block text-xs font-medium text-accent transition-colors hover:text-accent-dim"
              >
                Open tool →
              </a>
            </article>
          </div>
        </Section>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <Section id="about">
        <h2 className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
          About
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          A solo software studio. I build small, useful products and tools —
          designed to stay simple, clear, and practical.
        </p>
      </Section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border-subtle)] bg-section">
        <Section className="py-10 md:py-12">
          <p className="text-sm text-eyebrow">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

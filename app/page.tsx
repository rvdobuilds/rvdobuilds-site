import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

const externalRel = "noopener noreferrer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-depth">
        <Section id="hero" className="py-20 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            RVDOBUILDS
          </p>
          <h1 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.625rem]">
            Useful software. Clear by design.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
            Small products and tools built to stay simple.
          </p>
          <p className="mt-10">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card hover:border-white/12"
            >
              View products
            </a>
          </p>
        </Section>
      </section>

      <section className="bg-section">
        <Section id="featured">
          <h2 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Featured
          </h2>
          <article className="rounded-2xl border border-[var(--border-subtle)] bg-card p-8 md:p-12">
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">
              Spend Meter
            </h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
              Know what you can safely spend before payday.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="https://spendmeter.app"
                target="_blank"
                rel={externalRel}
                variant="ghost"
                className="min-w-0 px-8"
              >
                Visit product
              </ButtonLink>
            </div>
          </article>
        </Section>
      </section>

      <Section id="products">
        <h2 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
            <h3 className="text-lg font-semibold text-foreground">
              Spend Meter
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              iPhone app for knowing what you can safely spend before payday.
            </p>
            <a
              href="https://spendmeter.app"
              target="_blank"
              rel={externalRel}
              className="mt-5 inline-block text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Visit product
            </a>
          </article>
          <article className="rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
            <h3 className="text-lg font-semibold text-foreground">HomeReps</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Minimal home workout logging for GTG sets and simple sessions.
            </p>
            <p className="mt-5 text-sm font-medium text-muted">Coming soon</p>
          </article>
        </div>
      </Section>

      <section className="bg-section">
        <Section id="tools">
          <h2 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
              <h3 className="text-lg font-semibold text-foreground">
                Launchframe
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A guided workbench for setting up a new app the same way every
                time.
              </p>
              <a
                href="https://launchframe.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                className="mt-5 inline-block text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Open tool
              </a>
            </article>
            <article className="rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
              <h3 className="text-lg font-semibold text-foreground">
                Mobile Dev Workflow
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Control your development workflow from your phone.
              </p>
              <a
                href="https://mobiledevworkflow.rvdobuilds.com/"
                target="_blank"
                rel={externalRel}
                className="mt-5 inline-block text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Open tool
              </a>
            </article>
          </div>
        </Section>
      </section>

      <Section id="about">
        <h2 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          About
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          I build small, useful software products and internal tools. Some are
          consumer apps, some are builder tools. Everything is designed to be
          simple, practical, and calm.
        </p>
      </Section>

      <footer className="border-t border-[var(--border-subtle)] bg-[var(--section)]">
        <Section className="py-12 md:py-16">
          <p className="text-sm text-muted">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

const externalRel = "noopener noreferrer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-glow">
        <Section id="hero" className="py-20 md:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            Rvdobuilds
          </p>
          <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]">
            Small software products and practical tools.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
            Apps for money, training, and app-building workflows. Built to stay
            simple.
          </p>
          <p className="mt-10">
            <a
              href="#products"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              View products
            </a>
          </p>
        </Section>
      </section>

      <section className="bg-section">
        <Section id="featured">
          <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
            Featured
          </h2>
          <article className="rounded-xl border border-accent/25 bg-card p-8 shadow-[0_0_0_1px_rgba(31,122,92,0.12)] md:p-10">
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
                variant="primary"
                className="min-w-0 px-8"
              >
                Visit product
              </ButtonLink>
            </div>
          </article>
        </Section>
      </section>

      <Section id="products">
        <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
          Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
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
              className="mt-5 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Visit product
            </a>
          </article>
          <article className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
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
          <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
            Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
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
                className="mt-5 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Open tool
              </a>
            </article>
            <article className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
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
                className="mt-5 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Open tool
              </a>
            </article>
          </div>
        </Section>
      </section>

      <Section id="about">
        <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
          About
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          I build small, useful software products and internal tools. Some are
          consumer apps, some are builder tools. Everything is designed to be
          simple, practical, and calm.
        </p>
      </Section>

      <footer className="border-t border-[var(--border-subtle)] bg-background">
        <Section className="py-12 md:py-16">
          <p className="text-sm text-muted">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

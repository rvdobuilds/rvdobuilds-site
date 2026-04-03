import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import {
  HOME_GAMES,
  HOME_PRODUCTS,
  HOME_TOOLS,
} from "@/lib/homepage";

const externalRel = "noopener noreferrer";

const productCardButton =
  "inline-flex h-9 min-w-0 items-center justify-center rounded-lg px-4 text-xs font-medium transition-colors duration-200 bg-[var(--cta-dark-bg)] text-[var(--cta-dark-text)] hover:bg-[var(--cta-dark-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

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
            Useful digital products.
            <br className="hidden sm:block" /> Clear by design.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            A small studio building intentional apps, tools, and games.
          </p>
          <div className="mt-9">
            <ButtonLink href="#products" variant="light">
              View products
            </ButtonLink>
          </div>
        </Section>
      </section>

      {/* ── Products ─────────────────────────────────────────── */}
      <Section id="products">
        <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
          Products
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover"
            >
              <h3 className="text-base font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {product.shortDescription}
              </p>
              <div className="mt-5">
                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel={externalRel}
                    className={productCardButton}
                  >
                    {product.ctaLabel}
                  </a>
                ) : (
                  <p className="text-xs font-medium text-eyebrow">
                    {product.ctaLabel}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Games ────────────────────────────────────────────── */}
      <section className="bg-section">
        <Section id="games">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Games
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_GAMES.map((game) => (
              <article
                key={game.name}
                className="flex flex-col rounded-xl border border-[var(--border-strong)] bg-[var(--card-elevated)] p-6 transition-colors duration-200 hover:bg-card-hover"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {game.name}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {game.shortDescription}
                </p>
                <div className="mt-5">
                  <a
                    href={game.href}
                    target="_blank"
                    rel={externalRel}
                    className={productCardButton}
                  >
                    {game.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>

      {/* ── Tools ────────────────────────────────────────────── */}
      <Section id="tools">
        <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
          Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_TOOLS.map((tool) => (
            <article
              key={tool.name}
              className="rounded-xl border border-[var(--border-subtle)] bg-card-nested p-5"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tool.shortDescription}
              </p>
              <div className="mt-4">
                <a
                  href={tool.href}
                  target="_blank"
                  rel={externalRel}
                  className={productCardButton}
                >
                  {tool.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="bg-section">
        <Section id="about">
          <h2 className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            About
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            A solo studio focused on useful digital work — apps, tools, and
            games — designed to stay simple, clear, and practical.
          </p>
        </Section>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border-subtle)] bg-section">
        <Section className="py-10 md:py-12">
          <p className="text-sm text-eyebrow">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-glow">
        <Section id="hero" className="py-20 md:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            RvdoBuilds • A software studio building small, profitable products
          </p>
          <h1 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]">
            Building small
            <br />
              compounding software assets.
          </h1>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-muted">
            Focused tools.
            <br />
            Small bets. Built to compound.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/products" variant="primary">
              View products →
            </ButtonLink>
            <ButtonLink href="/thesis" variant="ghost">
              Read the thesis →
            </ButtonLink>
          </div>
          <p className="mt-5">
            <a
              href="https://x.com/rvdobuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Follow the build on X →
            </a>
          </p>
        </Section>
      </section>

      {/* Operating principles */}
      <Section id="operating-principles">
        <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
          Operating principles
        </h2>
        <div className="max-w-[48rem] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Small bets
            </h3>
            <p className="mt-1 max-w-prose text-sm text-muted">
              Start small. Ship fast. Let reality decide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Systems over noise
            </h3>
            <p className="mt-1 max-w-prose text-sm text-muted">
              Build durable workflows and product loops, not launch hype.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Cashflow validates focus
            </h3>
            <p className="mt-1 max-w-prose text-sm text-muted">
              Revenue is signal. Features are assumptions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Compounding over time
            </h3>
            <p className="mt-1 max-w-prose text-sm text-muted">
              Ship, learn, refine. Repeat until it's obvious.
            </p>
          </div>
        </div>
        <p className="mt-10">
          <Link
            href="/thesis"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read the thesis →
          </Link>
        </p>
      </Section>

      {/* Products */}
      <section className="bg-section">
        <Section id="products">
          <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
            Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.oneLiner}
                status={product.status}
                href={product.href}
              />
            ))}
          </div>
        </Section>
      </section>

      {/* Thesis preview */}
      <Section id="thesis-preview">
        <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-muted">
          Thesis
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          We believe in small, focused software - shipped fast and refined over
          time. No growth theater; real systems that compound. Read how we think
          about building and running products.
        </p>
        <p className="mt-6">
          <Link
            href="/thesis"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read the thesis →
          </Link>
        </p>
      </Section>

      <footer className="border-t border-[var(--border-subtle)] bg-background">
        <Section>
          <p className="text-sm text-muted">
            Building quietly. Compounding over time.
          </p>
        </Section>
      </footer>
    </main>
  );
}

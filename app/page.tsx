import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-depth">
        <Section id="hero" className="py-24 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Rvdobuilds
          </p>
          <h1 className="mt-5 max-w-2xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            I&rsquo;ve spent 10 years translating messy business problems into
            IT solutions.
            <br className="hidden sm:block" /> Now I build the products too.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            IT architect by day. Product builder by habit. I use AI-assisted
            development to go from problem to working product. Fast.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="primary">
              See my work
            </ButtonLink>
            <ButtonLink
              href="/about#what-im-looking-for"
              variant="ghost"
            >
              What I&rsquo;m looking for
            </ButtonLink>
          </div>
        </Section>
      </section>

      <footer className="border-t border-[var(--border-subtle)] bg-section">
        <Section className="py-10 md:py-12">
          <p className="text-sm text-eyebrow">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

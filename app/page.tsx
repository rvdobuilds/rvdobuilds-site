import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

const BUILT_SO_FAR = [
  {
    name: "Spend to Invoice",
    description: "B2B billing workflow",
    href: "/work#spendtoinvoice",
  },
  {
    name: "WorkCompass AI",
    description: "AI work assessment",
    href: "/work#workcompass",
  },
  {
    name: "SpendMeter",
    description: "iPhone finance app",
    href: "/work#spendmeter",
  },
  {
    name: "DayWell",
    description: "iPhone health timeline",
    href: "/work#daywell",
  },
  {
    name: "HomeReps",
    description: "iPhone workout logger",
    href: "/work#homereps",
  },
  {
    name: "TodoMode",
    description: "web planning app",
    href: "/work#todomode",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-depth">
        <Section id="hero" className="py-24 md:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
            Rvdobuilds
          </p>
          <h1 className="mt-5 max-w-2xl text-[2rem] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            I turn business problems into working products.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            IT architect with 10 years of experience at the intersection of business and technology. Now I use AI-assisted development to turn problem and product thinking into working web and mobile products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="primary">
              See my work
            </ButtonLink>
            <ButtonLink
              href="/about#work-with-me"
              variant="ghost"
            >
              Work with me
            </ButtonLink>
          </div>
        </Section>
      </section>

      <Section id="built-so-far" className="pt-0">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow">
          Built so far
        </h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed">
          {BUILT_SO_FAR.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {item.name}
              </a>
              <span className="text-muted"> - {item.description}</span>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-[var(--border-subtle)] bg-section">
        <Section className="py-10 md:py-12">
          <p className="text-sm text-eyebrow">Rvdobuilds</p>
        </Section>
      </footer>
    </main>
  );
}

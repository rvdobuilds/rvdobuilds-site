import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "About — Rvdobuilds",
  description:
    "IT architect by day. Product builder by habit. AI-assisted development closed the gap between seeing a solution and shipping it.",
};

const eyebrowClass =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow";

const externalLinkClass =
  "text-accent transition-colors hover:text-accent-hover";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          About
        </h1>
        <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            I&rsquo;ve spent most of my career in the space between business
            and IT. The place where requirements get lost in translation, where
            good ideas become complicated systems, and where someone has to ask
            the uncomfortable question: &ldquo;but what problem are we actually
            solving?&rdquo;
          </p>
          <p>That someone was usually me.</p>
          <p>
            I started out as a business application manager and requirements
            engineer, moved into business analysis, and eventually into IT
            architecture. For the last three years I&rsquo;ve worked as an IT
            architect: scoping solutions, making trade-offs explicit, and
            keeping technical decisions connected to what the business actually
            needs.
          </p>
          <p>
            I was always close to technology. I understood systems. I could
            describe exactly what needed to be built. But I didn&rsquo;t build
            it myself. That part belonged to someone else.
          </p>
          <p>
            Then AI-assisted development changed the equation. Suddenly the gap
            between &ldquo;I can see the solution clearly&rdquo; and &ldquo;I
            can ship the solution&rdquo; collapsed. I started building. Small
            tools at first, then more complete products. The architecture
            background turned out to be exactly as useful as I expected. I
            don&rsquo;t just build features, I think about how the pieces fit
            together.
          </p>
          <p>
            Now I ship products alongside a full-time job, a mortgage, and two
            young kids. The time is limited. The output is deliberate.
          </p>
        </div>
      </Section>

      <section className="bg-section">
        <Section id="what-im-looking-for">
          <h2 className={`mb-6 ${eyebrowClass}`}>What I&rsquo;m looking for</h2>
          <div className="max-w-2xl text-base leading-relaxed text-muted">
            <p>
              I&rsquo;m exploring what comes next. Whether that&rsquo;s a
              product that finds its own revenue, a role where I can think and
              build instead of just advise, or something I haven&rsquo;t found
              a name for yet. If you&rsquo;re building something and need
              someone who can go from messy problem to working product without
              a lot of hand-holding, I&rsquo;d be interested in talking.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://nl.linkedin.com/in/royvandenoosten"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/royinprogress"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              X: @RoyInProgress
            </a>
          </div>
        </Section>
      </section>
    </main>
  );
}

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import royPhoto from "@/assets/images/roy-photo.jpg";

export const metadata = {
  title: "About - Rvdobuilds",
  description:
    "IT architect turned AI-assisted product builder. I turn business problems into clear, usable products.",
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
        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-card w-40 sm:w-48">
          <Image
            src={royPhoto}
            alt="Roy van den Oosten"
            placeholder="blur"
            sizes="(min-width: 640px) 12rem, 10rem"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          IT architect turned AI-assisted product builder. I turn business
          problems into clear, usable products.
        </p>
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
        <Section id="work-with-me">
          <h2 className={`mb-6 ${eyebrowClass}`}>Work with me</h2>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&rsquo;m interested in product, UX, AI-assisted prototyping, and
              builder-style roles or projects where the hard part is turning
              business problems into something clear, usable, and shipped.
            </p>
            <p>
              Best fit: early product work, internal tools, workflow products,
              AI adoption tools, product discovery, UX structure, and fast
              prototyping.
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

      <Section className="pt-0">
        <div className="max-w-2xl">
          <p className="text-base leading-relaxed text-muted">
            If you&rsquo;re building something and need someone who can
            structure the problem, shape the product, and ship the first
            version, reach out.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
        </div>
      </Section>
    </main>
  );
}

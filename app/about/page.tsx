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
        <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>I&apos;m Roy, an IT architect turned AI-assisted product builder.</p>
          <p>
            I&apos;ve spent most of my career in the space between business and
            IT.
          </p>
          <p>The place where requirements get lost in translation.</p>
          <p>Where good ideas become complicated systems.</p>
          <p>Where someone eventually has to ask:</p>
          <p>&quot;But what problem are we actually solving?&quot;</p>
          <p>That someone was often me.</p>
          <p>
            For the last ten years I&apos;ve worked in the complex middle
            between business problems and technical solutions: requirements,
            workflows, trade-offs, architecture, and delivery.
          </p>
          <p>
            I learned how to see the shape of a problem before jumping into the
            solution.
          </p>
          <p>
            For a long time, that was where my role stopped. I could describe
            what needed to be built, but I wasn&apos;t the one building it.
          </p>
          <p>AI-assisted development changed that.</p>
          <p>
            Now when I see a problem, I can turn it into something real: a
            prototype, a small tool, a landing page, a mobile app, or a first
            working product.
          </p>
          <p>I&apos;m trying to build clearer, more useful things.</p>
          <p>
            I do this alongside a full-time job and life with two young kids.
          </p>
          <p>Time is limited. Everything I build is deliberate.</p>
        </div>
      </Section>

      <section className="bg-section">
        <Section id="work-with-me">
          <h2 className={`mb-6 ${eyebrowClass}`}>Work with me</h2>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              I help teams with product, UX, AI-assisted prototyping, and
              builder-style projects where the hard part is turning a messy
              business problem into something clear, usable, and shipped.
            </p>
            <p>
              Best fit: teams with messy internal workflows, unclear product
              ideas, or AI adoption problems that need a practical first version.
            </p>
            <p>
              Especially when the problem is too vague for a straight build
              brief, but too practical to stay in strategy decks.
            </p>
            <p>If that sounds useful, reach out.</p>
          </div>
        </Section>
      </section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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

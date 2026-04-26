import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Now - Rvdobuilds",
  description:
    "IT architect turned AI-assisted product builder. I turn business problems into clear, usable products.",
};

const eyebrowClass =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow";

const externalLinkClass =
  "text-accent transition-colors hover:text-accent-hover";

const sections = [
  {
    label: "Currently building",
    body: "Building in public for 90 days, validating Spend to Invoice, and using rvdobuilds.com as a public record of my shift from IT architect to AI-assisted product builder.",
  },
  {
    label: "Currently thinking about",
    body: "Whether the career pivot I want happens through a product finding revenue, or through someone hiring me to do this kind of thinking for them. Possibly both. Probably not at the same time.",
  },
  {
    label: "Currently reading",
    body: "Co-Intelligence by Ethan Mollick",
  },
  {
    label: "Consistency streak",
    body: "6 days of daily posts on X. Trying to make this the year I stop starting over.",
  },
];

export default function NowPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <p className={eyebrowClass}>Last updated: April 2026</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Now
        </h1>
        <div className="mt-10 max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.label}>
              <h2 className={`mb-3 ${eyebrowClass}`}>{section.label}</h2>
              <p className="text-base leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-2xl">
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
        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-eyebrow">
          This page is updated roughly monthly. The /now concept is borrowed
          from Derek Sivers.
        </p>
      </Section>
    </main>
  );
}

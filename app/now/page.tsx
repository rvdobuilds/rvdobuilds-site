import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Now — Rvdobuilds",
  description: "What I am building, thinking about, and reading right now.",
};

const eyebrowClass =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow";

const sections = [
  {
    label: "Currently building",
    body: "Validating Spend to Invoice with small PPC agencies. Building in public on X, sharing what works, what fails, and what I’m figuring out as I go.",
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
        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-eyebrow">
          This page is updated roughly monthly. The /now concept is borrowed
          from Derek Sivers.
        </p>
      </Section>
    </main>
  );
}

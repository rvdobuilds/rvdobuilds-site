import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Work — Rvdobuilds",
  description:
    "Products, personal tools, and small things I have built.",
};

const eyebrowClass =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-eyebrow";

const externalLinkClass =
  "text-accent transition-colors hover:text-accent-hover";

type WorkItem = {
  name: string;
  description: string;
  metaLabel: "Status" | "Platform";
  meta: ReactNode;
};

const PRODUCTS: WorkItem[] = [
  {
    name: "Spend to Invoice",
    description:
      "Agencies that manage Google Ads for multiple clients still invoice by hand: pulling spend, calculating fees, and copying numbers into templates every month. Spend to Invoice automates that loop.",
    metaLabel: "Status",
    meta: (
      <>
        In validation. Request beta access at{" "}
        <a
          href="https://spendtoinvoice.com"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          spendtoinvoice.com
        </a>
      </>
    ),
  },
  {
    name: "WorkCompass AI",
    description:
      "Most office workers know AI could help them, but don’t know where to start. WorkCompass asks a few focused questions and points you toward the two or three use cases most likely to actually stick.",
    metaLabel: "Status",
    meta: (
      <>
        Live at{" "}
        <a
          href="https://workcompass-ai.rvdobuilds.com"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          workcompass-ai.rvdobuilds.com
        </a>
      </>
    ),
  },
];

const PERSONAL: WorkItem[] = [
  {
    name: "SpendMeter",
    description:
      "I didn’t want a budgeting app. I wanted one number: what can I safely spend right now, before my next payday. So I built it. The gauge tells you at a glance: green, orange, or red.",
    metaLabel: "Platform",
    meta: (
      <>
        iPhone &mdash;{" "}
        <a
          href="https://spendmeter.app"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          spendmeter.app
        </a>
      </>
    ),
  },
  {
    name: "HomeReps",
    description:
      "A workout logger built around my actual training routine: bodyweight, home, limited time, young kids. No gym features, no bloat. Log a set in under five seconds.",
    metaLabel: "Platform",
    meta: <>iPhone</>,
  },
  {
    name: "Workframe",
    description:
      "I kept making the same decisions about which tool to use for what. So I wrote them down, turned them into flows and rules, and built a lightweight reference I actually open. It runs my personal operating system.",
    metaLabel: "Platform",
    meta: (
      <>
        Web &mdash;{" "}
        <a
          href="https://workframe.rvdobuilds.com"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          workframe.rvdobuilds.com
        </a>
      </>
    ),
  },
  {
    name: "DayWell",
    description:
      "A minimal daily health timeline for tracking the small habits that compound: weight, fasting, coffee, meals, creatine, cold showers.",
    metaLabel: "Platform",
    meta: <>iPhone</>,
  },
  {
    name: "TodoMode",
    description:
      "A calm, focused planning app for turning projects into clear weekly and daily actions. Built because most planning tools do too much.",
    metaLabel: "Platform",
    meta: <>Web</>,
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="flex flex-col rounded-xl border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover">
      <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
      <p className="mt-5 text-xs leading-relaxed text-eyebrow">
        <span className="font-medium uppercase tracking-[0.14em]">
          {item.metaLabel}:
        </span>{" "}
        <span className="normal-case tracking-normal text-muted">
          {item.meta}
        </span>
      </p>
    </article>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Work
        </h1>
      </Section>

      <Section id="products" className="pt-0">
        <h2 className={`mb-2 ${eyebrowClass}`}>Products</h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          These started as real problems I wanted to solve for others.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((item) => (
            <WorkCard key={item.name} item={item} />
          ))}
        </div>
      </Section>

      <section className="bg-section">
        <Section id="built-for-myself">
          <h2 className={`mb-2 ${eyebrowClass}`}>Built for myself</h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
            I ran into a problem. I built a thing. I still use it.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONAL.map((item) => (
              <WorkCard key={item.name} item={item} />
            ))}
          </div>
        </Section>
      </section>

      <Section id="also-made" className="py-10 md:py-12">
        <p className="text-xs leading-relaxed text-eyebrow">
          Also made: two browser games (GoldenAI, Voidrunner). Built for fun,
          not for portfolios.
        </p>
      </Section>
    </main>
  );
}

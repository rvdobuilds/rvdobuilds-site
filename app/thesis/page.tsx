import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Thesis — RvdoBuilds",
  description:
    "How we think about building small, profitable software. No growth theater; real systems that compound.",
};

export default function ThesisPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-section">
        <Section>
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            Thesis
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
            <p>
              We believe in small, focused software—shipped fast and refined
              over time. Each product is a small bet. Over time, those bets
              compound.
            </p>
            <p>
              No growth theater. No oversized launches. Real systems that solve
              specific problems and generate sustainable cashflow.
            </p>
            <p>
              We build tools we’d use ourselves. Less noise, more clarity.
            </p>
          </div>
          <p className="mt-10">
            <Link
              href="/"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              ← Back to home
            </Link>
          </p>
        </Section>
      </section>
    </main>
  );
}

import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

export const metadata = {
  title: "Products — RvdoBuilds",
  description:
    "Focused software tools from RvdoBuilds. Small products, shipped fast.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-section">
        <Section>
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            Products
          </h1>
          <p className="mb-12 text-muted">
            Focused tools, shipped fast, refined for long-term cashflow.
          </p>
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

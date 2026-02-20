// — Editable content (edit only these to update the page) —
const LINK_X = "https://x.com/rvdobuilds";
const EMAIL = "rvdobuilds@proton.me";
const PRODUCTS = [
  {
    name: "FocusLedger",
    oneLiner:
      "Simple focus and time tracking for deep work. Less noise, more clarity.",
    status: "Development",
    href: "#",
  },
] as const;

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:scroll-mt-28 md:py-28"
    >
      <h2 className="mb-10 text-xs font-medium uppercase tracking-widest text-white/70">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProductCard({
  name,
  oneLiner,
  status,
  href,
}: {
  name: string;
  oneLiner: string;
  status: string;
  href: string;
}) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.04]">
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
          {status}
        </span>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-white/80">{oneLiner}</p>
      <a
        href={href}
        className="inline-block text-sm font-medium text-white underline decoration-white/50 underline-offset-4 transition-colors duration-200 hover:decoration-white"
      >
        View →
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f0f14" }}
    >
      <div className="mx-auto max-w-2xl px-6 py-20 sm:px-8 md:py-28">
        <nav
          className="sticky top-0 z-10 -mx-6 -mt-6 flex justify-end gap-6 px-6 py-5 sm:-mx-8 sm:px-8 md:-mt-8 md:py-6"
          style={{ backgroundColor: "rgba(15, 15, 20, 0.85)" }}
          aria-label="Main"
        >
          <a
            href="#about"
            className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
          >
            About
          </a>
          <a
            href="#products"
            className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
          >
            Products
          </a>
          <a
            href="#exploring"
            className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
          >
            Exploring
          </a>
        </nav>
        {/* Hero */}
        <header className="pb-24 pt-10 md:pb-32 md:pt-14">
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.12]">
            I build small software assets designed to generate long-term
            leverage.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/85">
            Independent product builder focused on sustainable, profitable
            digital products. Small bets. Real systems. Built to compound.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex h-11 min-w-[10rem] items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#0f0f14] transition-colors duration-200 hover:bg-white/90"
            >
              View products
            </a>
            <a
              href={LINK_X}
              className="inline-flex h-11 min-w-[10rem] items-center justify-center rounded-md border border-white/20 px-6 text-sm font-medium text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.06]"
            >
              Follow on X
            </a>
          </div>
        </header>

        {/* About */}
<Section id="about" title="About">
  <div className="max-w-xl space-y-5 text-base leading-relaxed text-white/85">
    <p>
      I build focused digital products designed to be small, sustainable and useful.
    </p>

    <p>
      Instead of chasing big launches, I ship simple tools that solve specific problems, and then refine them into durable systems.
    </p>

    <p>
      Each product is a small bet. Over time, those bets compound.
    </p>

    <p>
      Based in the Netherlands. Husband. Dad of two. Builder.
    </p>
  </div>
</Section>

        {/* Products */}
        <Section id="products" title="Products">
          <div className="grid gap-8 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                oneLiner={product.oneLiner}
                status={product.status}
                href={product.href}
              />
            ))}
          </div>
        </Section>

        {/* Currently exploring */}
        <Section id="exploring" title="Currently exploring">
          <p className="max-w-xl text-base leading-relaxed text-white/85">
            Better sleep and circadian alignment.
            <br />
            Lightweight tools for focus and time.
            <br />
            Small, recurring revenue without growth theater.
            <br />
            Writing and sharing what I learn along the way.
          </p>
        </Section>

        {/* Footer */}
        <footer className="border-t border-white/15 py-14">
          <p className="text-sm text-white/75">
            Building quietly. Compounding over time.
          </p>
          <div className="mt-6 flex gap-8">
            <a
              href={LINK_X}
              className="text-sm text-white/80 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white/70"
            >
              X
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white/80 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white/70"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

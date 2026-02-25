import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[var(--max-width-content)] px-6 py-16 sm:px-8 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

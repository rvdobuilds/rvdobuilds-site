import type { ReactNode } from "react";

export type StatusKind = "Live" | "In progress" | "Research";

const statusStyles: Record<StatusKind, string> = {
  Live: "bg-accent/15 text-accent border border-accent/25",
  "In progress": "bg-card text-muted border border-[var(--border-subtle)]",
  Research: "bg-card text-muted border border-[var(--border-subtle)]",
};

function StatusPill({ status }: { status: StatusKind }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export function ProductCard({
  name,
  description,
  status,
  href,
  children,
}: {
  name: string;
  description: string;
  status: StatusKind;
  href: string;
  children?: ReactNode;
}) {
  return (
    <article
      className="rounded-lg border border-[var(--border-subtle)] bg-card p-6 transition-colors duration-200 hover:bg-card-hover"
    >
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <StatusPill status={status} />
      </div>
      <p className="mb-5 text-sm leading-relaxed text-muted">{description}</p>
      {children ?? (
        <a
          href={href}
          className="inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View →
        </a>
      )}
    </article>
  );
}

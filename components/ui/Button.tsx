import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex h-11 min-w-[10rem] items-center justify-center rounded-xl px-6 text-sm font-medium transition-colors duration-200";

const variants = {
  primary:
    "bg-[var(--cta-dark-bg)] text-[var(--cta-dark-text)] hover:bg-[var(--cta-dark-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
  light:
    "bg-[var(--cta-light-bg)] text-[var(--cta-light-text)] hover:bg-[var(--cta-light-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
  ghost:
    "border border-[var(--border-subtle)] text-foreground hover:bg-[var(--card)] hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "light" | "ghost";
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "light" | "ghost";
  href: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

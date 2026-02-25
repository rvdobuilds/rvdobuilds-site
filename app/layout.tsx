import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rvdo Builds",
  description:
    "A software studio building small, profitable products. Focused tools, shipped fast, refined for long-term cashflow.",
  openGraph: {
    title: "Rvdo Builds",
    description:
      "A software studio building small, profitable products. Focused tools, shipped fast, refined for long-term cashflow.",
    type: "website",
  },
};

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-10 border-b border-[var(--border-subtle)] bg-background/90 backdrop-blur-sm"
      aria-label="Main"
    >
      <div className="mx-auto flex h-14 max-w-[var(--max-width-content)] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          RvdoBuilds
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/products"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="/thesis"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Thesis
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

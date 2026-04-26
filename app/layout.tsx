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
  title: "Rvdobuilds",
  description: "Useful digital products. Clear by design.",
  openGraph: {
    title: "Rvdobuilds",
    description: "Useful digital products. Clear by design.",
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
          className="text-sm font-medium text-foreground transition-colors hover:text-muted"
        >
          Rvdobuilds
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-8">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/now"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Now
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

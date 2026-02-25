import type { StatusKind } from "@/components/ui/ProductCard";

export type Product = {
  name: string;
  oneLiner: string;
  status: StatusKind;
  href: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "FocusLedger",
    oneLiner:
      "Simple focus and time tracking for deep work. Less noise, more clarity.",
    status: "In progress",
    href: "#",
  },
  {
    name: "AppScope",
    oneLiner:
      "Turn an overwhelmed mobile app idea into a clear, build-ready v1 plan in ~3 minutes.",
    status: "In progress",
    href: "#",
  },
];

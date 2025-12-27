import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Tillet & Saunders",
  description: "Comprehensive building solutions including kitchen fitting, extensions, flooring, plastering, bathrooms, and more. Expert craftsmanship across London and the South East.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


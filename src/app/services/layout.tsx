import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive building solutions including kitchen fitting, extensions, flooring, plastering, bathrooms, and more. Expert craftsmanship across London and the South East.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Tillett & Saunders",
    description:
      "Kitchen fitting, extensions, flooring, plastering, bathrooms, roofing, and more across London and the South East.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

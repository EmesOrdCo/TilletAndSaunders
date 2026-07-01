import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tillett & Saunders - over 25 years of exceptional craftsmanship in building and construction across London and the South East.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Tillett & Saunders",
    description:
      "Over 25 years of exceptional craftsmanship in building and construction across London and the South East.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

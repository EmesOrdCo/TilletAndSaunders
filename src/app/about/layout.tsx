import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tillet & Saunders",
  description: "Learn about Tillet & Saunders - over 25 years of exceptional craftsmanship in building and construction across London and the South East.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


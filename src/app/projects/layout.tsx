import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Tillet & Saunders",
  description: "Explore our portfolio of completed projects showcasing exceptional craftsmanship in kitchen fitting, extensions, renovations, and more across London and the South East.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of completed projects showcasing exceptional craftsmanship in kitchen fitting, extensions, renovations, and more across London and the South East.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Tillett & Saunders",
    description:
      "Explore our portfolio of completed building and renovation projects across London and the South East.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

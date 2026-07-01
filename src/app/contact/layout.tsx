import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tillett & Saunders for a free, no-obligation quote. We're here to discuss your building project and bring your vision to life.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Tillett & Saunders",
    description:
      "Get in touch for a free, no-obligation quote. We're here to discuss your building project across London and the South East.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

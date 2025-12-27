import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tillet & Saunders",
  description: "Get in touch with Tillet & Saunders for a free, no-obligation quote. We're here to discuss your building project and bring your vision to life.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


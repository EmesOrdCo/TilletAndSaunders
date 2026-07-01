import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the Tillett & Saunders website and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

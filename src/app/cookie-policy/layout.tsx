import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn what cookies are and how Tillett & Saunders uses cookies on our website.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

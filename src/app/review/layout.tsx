import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review",
  description:
    "Share your experience with Tillett & Saunders. Your feedback helps us keep improving.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

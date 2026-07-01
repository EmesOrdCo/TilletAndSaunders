import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GhlChatWidget from "@/components/GhlChatWidget";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Building & Construction Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "building company London",
    "builders London",
    "kitchen fitting",
    "home extensions",
    "flooring",
    "plastering",
    "bathroom renovation",
    "roofing",
    "construction South East",
    "renovation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Building & Construction Services`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Building & Construction Services`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone.e164,
  email: siteConfig.email.address,
  slogan: siteConfig.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressRegion: "London",
    addressCountry: "GB",
  },
  areaServed: siteConfig.areaServed.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "££",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${instrumentSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-burgundy)] focus:text-white focus:rounded focus:font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <GhlChatWidget />
      </body>
    </html>
  );
}

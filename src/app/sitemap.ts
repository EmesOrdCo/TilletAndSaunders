import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "yearly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

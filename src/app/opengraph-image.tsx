import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = "Tillett & Saunders — Premium Building & Construction Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#7A0025",
          color: "white",
          fontFamily: "serif",
          padding: "0 80px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 10,
            color: "#C9A962",
            textTransform: "uppercase",
            marginTop: 24,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.85)",
            marginTop: 36,
          }}
        >
          Premium Building &amp; Construction · London &amp; the South East
        </div>
      </div>
    ),
    { ...size }
  );
}

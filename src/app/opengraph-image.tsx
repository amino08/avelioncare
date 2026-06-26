import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — The Future of Longevity`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #07101E 0%, #0A1628 50%, #07101E 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 40%, rgba(29, 95, 191, 0.3) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 70% 60%, rgba(184, 195, 209, 0.2) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: 18,
              letterSpacing: "0.3em",
              color: "#B8C3D1",
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            Powered by AgeWell
          </p>
          <h1
            style={{
              fontSize: 96,
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "0.15em",
              margin: 0,
            }}
          >
            AVELION
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#E8EDF2",
              marginTop: 24,
              fontWeight: 300,
            }}
          >
            The Future of Longevity
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}

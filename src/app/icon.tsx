import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07101E",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1D5FBF 0%, #B8C3D1 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

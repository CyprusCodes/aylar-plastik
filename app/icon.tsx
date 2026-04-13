import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

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
          background: "#D6B24A",
          color: "#0A1A2F",
          borderRadius: 8,
          fontFamily: "Arial, sans-serif",
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1,
          textTransform: "lowercase",
        }}
      >
        a
      </div>
    ),
    {
      ...size,
    },
  );
}

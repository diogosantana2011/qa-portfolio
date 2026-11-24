import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// "$_" prompt in --ok on --bg; apple-icon.tsx reuses this at 180px.
export function prompt(px: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0E11",
          borderRadius: px * 0.2,
          color: "#4ADE80",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: px * 0.55,
        }}
      >
        $_
      </div>
    ),
    { width: px, height: px },
  );
}

export default function Icon() {
  return prompt(size.width);
}

import { ImageResponse } from "next/og";
import { profile } from "./data";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#0E0E11", color: "#F2F2F3", fontFamily: "monospace" }}>
        <div style={{ fontSize: 32, color: "#A1A1AA" }}>$ whoami</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#C4C4CC", marginTop: 16 }}>{`${profile.role} — ${profile.tagline}`}</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 48, gap: 16 }}>
          <span style={{ color: "#A1A1AA" }}>XP</span>
          <span style={{ color: "#F87171", textDecoration: "line-through" }}>NaN</span>
          <span style={{ color: "#4ADE80" }}>{`${profile.yearsInQa} years`}</span>
        </div>
      </div>
    ),
    size,
  );
}

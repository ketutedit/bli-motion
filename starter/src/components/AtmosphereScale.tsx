import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface AtmosphereScaleProps {
  delay?: number;
}

export const AtmosphereScale: React.FC<AtmosphereScaleProps> = ({ delay = 10 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  if (frame < delay) return null;

  const markers = [
    { alt: "5.000 m", temp: "-15°C (Membeku)", color: "#38BDF8" },
    { alt: "3.500 m", temp: "-5°C", color: "#60A5FA" },
    { alt: "2.000 m", temp: "+8°C (Kondensasi)", color: "#93C5FD" },
    { alt: "500 m", temp: "+20°C", color: "#FBBF24" },
    { alt: "0 m (Laut)", temp: "+30°C (Panas)", color: "#F59E0B" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        left: "60px",
        top: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "42px",
        borderLeft: "2px dashed rgba(255, 255, 255, 0.2)",
        paddingLeft: "20px",
        transform: `translateX(${(1 - progress) * -40}px)`,
        opacity: progress,
        fontFamily: "system-ui, -apple-system, sans-serif",
        zIndex: 15,
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: "#94A3B8",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Ketinggian & Suhu
      </div>

      {markers.map((item, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#E2E8F0" }}>
            {item.alt}
          </span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: item.color }}>
            {item.temp}
          </span>
        </div>
      ))}
    </div>
  );
};

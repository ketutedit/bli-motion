import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface PregnancyTipCardProps {
  number: string;
  title: string;
  instruction: string;
  benefit: string;
  emoji: string;
  delay?: number;
  accentColor?: string;
}

export const PregnancyTipCard: React.FC<PregnancyTipCardProps> = ({
  number,
  title,
  instruction,
  benefit,
  emoji,
  delay = 5,
  accentColor = "#FB7185",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, mass: 0.55, stiffness: 120 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        width: "920px",
        borderRadius: "28px",
        backgroundColor: "rgba(30, 27, 46, 0.9)",
        border: `2px solid ${accentColor}`,
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px ${accentColor}25`,
        padding: "28px 36px",
        display: "flex",
        alignItems: "center",
        gap: "28px",
        transform: `scale(${progress}) translateY(${(1 - progress) * 24}px)`,
        opacity: progress,
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Big Emoji / Icon Circle */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: `${accentColor}22`,
          border: `2px solid ${accentColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
          flexShrink: 0,
        }}
      >
        {emoji}
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              backgroundColor: accentColor,
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 800,
              padding: "4px 14px",
              borderRadius: "9999px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {number}
          </span>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "#FFFFFF" }}>
            {title}
          </span>
        </div>

        <div style={{ fontSize: "22px", color: "#FDE2E4", fontWeight: 600, lineHeight: 1.3 }}>
          {instruction}
        </div>

        <div
          style={{
            fontSize: "18px",
            color: "#A78BFA",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "4px",
          }}
        >
          <span>✨ Manfaat:</span>
          <span>{benefit}</span>
        </div>
      </div>
    </div>
  );
};

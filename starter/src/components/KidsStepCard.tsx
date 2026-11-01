import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface KidsStepCardProps {
  stepNumber: string;
  title: string;
  subtitle?: string;
  emoji: string;
  delay?: number;
  color?: string;
  bgColor?: string;
}

export const KidsStepCard: React.FC<KidsStepCardProps> = ({
  stepNumber,
  title,
  subtitle,
  emoji,
  delay = 5,
  color = "#38BDF8",
  bgColor = "rgba(15, 23, 42, 0.85)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Bouncy overshoot spring for kids
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 9, mass: 0.5, stiffness: 130 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "20px 32px",
        borderRadius: "28px",
        backgroundColor: bgColor,
        border: `3px solid ${color}`,
        boxShadow: `0 16px 36px rgba(0, 0, 0, 0.35), 0 0 30px ${color}33`,
        transform: `scale(${progress}) translateY(${(1 - progress) * 30}px)`,
        opacity: progress,
        backdropFilter: "blur(12px)",
        maxWidth: "880px",
        width: "90%",
      }}
    >
      {/* Big Emoji Bubble */}
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          backgroundColor: `${color}22`,
          border: `2px solid ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "44px",
          flexShrink: 0,
        }}
      >
        {emoji}
      </div>

      {/* Text Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {stepNumber}
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: "#FFFFFF",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#CBD5E1",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface MotionCardProps {
  delay?: number;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  highlight?: boolean;
  style?: React.CSSProperties;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  delay = 0,
  icon,
  title,
  description,
  highlight = false,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 13, mass: 0.7 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 28px",
        borderRadius: "20px",
        background: highlight
          ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(30, 41, 59, 0.9))"
          : "rgba(30, 41, 59, 0.8)",
        border: highlight
          ? "2px solid #38BDF8"
          : "1.5px solid rgba(255, 255, 255, 0.1)",
        boxShadow: highlight
          ? "0 20px 40px rgba(56, 189, 248, 0.25)"
          : "0 10px 25px rgba(0, 0, 0, 0.4)",
        transform: `scale(${progress}) translateY(${(1 - progress) * 20}px)`,
        opacity: progress,
        backdropFilter: "blur(12px)",
        textAlign: "center",
        minWidth: "200px",
        ...style,
      }}
    >
      {icon && <div style={{ marginBottom: "14px" }}>{icon}</div>}
      <div
        style={{
          color: "#F8FAFC",
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: description ? "6px" : 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            color: "#94A3B8",
            fontSize: "16px",
            lineHeight: 1.4,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
};

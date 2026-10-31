import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface AnimatedBadgeProps {
  label: string;
  delay?: number;
  color?: string;
  bgColor?: string;
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  label,
  delay = 0,
  color = "#38BDF8",
  bgColor = "rgba(56, 189, 248, 0.15)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, mass: 0.6 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 18px",
        borderRadius: "9999px",
        backgroundColor: bgColor,
        border: `1.5px solid ${color}`,
        color,
        fontSize: "18px",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        transform: `scale(${progress}) translateY(${(1 - progress) * 10}px)`,
        opacity: progress,
      }}
    >
      {label}
    </div>
  );
};

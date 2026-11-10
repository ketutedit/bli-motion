import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type AnimatedBadgeVariant = "pill" | "outline" | "plain";

export interface AnimatedBadgeProps {
  label: string;
  delay?: number;
  entrance?: "spring" | "fade" | "none";
  variant?: AnimatedBadgeVariant;
  color?: string;
  bgColor?: string;
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  letterSpacing?: number | string;
  textTransform?: React.CSSProperties["textTransform"];
  padding?: number | string;
  radius?: number | string;
  style?: React.CSSProperties;
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  label,
  delay = 0,
  entrance = "spring",
  variant = "pill",
  color = "#38BDF8",
  bgColor = "rgba(56, 189, 248, 0.15)",
  fontSize = 18,
  fontFamily = "system-ui, -apple-system, sans-serif",
  fontWeight = 600,
  letterSpacing = "0.05em",
  textTransform = "uppercase",
  padding = "8px 18px",
  radius = "9999px",
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress =
    entrance === "spring"
      ? spring({
          frame: frame - delay,
          fps,
          config: { damping: 14, mass: 0.6 },
        })
      : entrance === "fade"
        ? interpolate(frame - delay, [0, 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        : 1;

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: variant === "plain" ? 0 : padding,
        borderRadius: radius,
        backgroundColor: variant === "pill" ? bgColor : "transparent",
        border: variant === "outline" ? `1.5px solid ${color}` : "none",
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textTransform,
        transform:
          entrance === "spring"
            ? `scale(${progress}) translateY(${(1 - progress) * 10}px)`
            : "none",
        opacity: progress,
        ...style,
      }}
    >
      {label}
    </div>
  );
};

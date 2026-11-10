import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export type MotionCardVariant = "glass" | "solid" | "outline" | "minimal";

export interface MotionCardProps {
  delay?: number;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  highlight?: boolean;
  variant?: MotionCardVariant;
  accentColor?: string;
  surfaceColor?: string;
  borderColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  radius?: number;
  padding?: number | string;
  titleSize?: number | string;
  descriptionSize?: number | string;
  style?: React.CSSProperties;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  delay = 0,
  icon,
  title,
  description,
  highlight = false,
  variant = "glass",
  accentColor = "#38BDF8",
  surfaceColor = "#1E293B",
  borderColor = "rgba(255, 255, 255, 0.12)",
  titleColor = "#F8FAFC",
  descriptionColor = "#94A3B8",
  radius = 20,
  padding = "24px 28px",
  titleSize = 24,
  descriptionSize = 16,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 13, mass: 0.7 },
  });

  const isMinimal = variant === "minimal";
  const background =
    variant === "glass"
      ? highlight
        ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(30, 41, 59, 0.9))"
        : "rgba(30, 41, 59, 0.8)"
      : variant === "solid"
        ? surfaceColor
        : "transparent";

  const border =
    variant === "minimal"
      ? "none"
      : highlight
        ? `2px solid ${accentColor}`
        : `1.5px solid ${borderColor}`;

  const shadow =
    variant === "glass"
      ? highlight
        ? "0 20px 40px rgba(56, 189, 248, 0.25)"
        : "0 10px 25px rgba(0, 0, 0, 0.4)"
      : variant === "solid" && highlight
        ? `0 12px 28px ${accentColor}33`
        : "none";

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMinimal ? 0 : padding,
        borderRadius: radius,
        background,
        border,
        boxShadow: shadow,
        transform: `scale(${progress}) translateY(${(1 - progress) * 20}px)`,
        opacity: progress,
        backdropFilter: variant === "glass" ? "blur(12px)" : "none",
        textAlign: "center",
        minWidth: isMinimal ? undefined : "200px",
        ...style,
      }}
    >
      {icon && <div style={{ marginBottom: description ? "14px" : 0 }}>{icon}</div>}
      <div
        style={{
          color: titleColor,
          fontSize: titleSize,
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
            color: descriptionColor,
            fontSize: descriptionSize,
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

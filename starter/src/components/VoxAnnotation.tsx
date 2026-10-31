import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface VoxAnnotationProps {
  label: string;
  value?: string;
  delay?: number;
  x: number;
  y: number;
  accentColor?: string;
  lineDirection?: "left" | "right" | "top" | "bottom";
}

export const VoxAnnotation: React.FC<VoxAnnotationProps> = ({
  label,
  value,
  delay = 0,
  x,
  y,
  accentColor = "#38BDF8",
  lineDirection = "right",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy spring with pleasant overshoot
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, mass: 0.45, stiffness: 140 },
  });

  if (frame < delay) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        transform: `scale(${progress}) translateY(${(1 - progress) * 12}px)`,
        opacity: progress,
        zIndex: 20,
      }}
    >
      {/* Target indicator dot */}
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: accentColor,
          boxShadow: `0 0 12px ${accentColor}`,
          border: "2px solid #FFFFFF",
          flexShrink: 0,
        }}
      />

      {/* Annotation Box */}
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.88)",
          backdropFilter: "blur(12px)",
          border: `1.5px solid ${accentColor}`,
          borderLeft: `4px solid ${accentColor}`,
          padding: "8px 16px",
          borderRadius: "6px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          fontFamily: "system-ui, -apple-system, sans-serif",
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
          {label}
        </div>
        {value && (
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#F8FAFC",
              marginTop: "2px",
            }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface ConnectorLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  color?: string;
  showPacket?: boolean;
}

export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  startX,
  startY,
  endX,
  endY,
  delay = 10,
  color = "#38BDF8",
  showPacket = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const drawProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  const clampedDraw = Math.min(Math.max(drawProgress, 0), 1);

  // Traveling packet animation starts after line finishes drawing
  const packetStartFrame = delay + 15;
  const packetProgress = interpolate(
    frame - packetStartFrame,
    [0, 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const currentX = startX + (endX - startX) * clampedDraw;
  const currentY = startY + (endY - startY) * clampedDraw;

  const packetX = startX + (endX - startX) * packetProgress;
  const packetY = startY + (endY - startY) * packetProgress;

  if (frame < delay) return null;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      {/* Dashed background path */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {/* Animated solid line */}
      <line
        x1={startX}
        y1={startY}
        x2={currentX}
        y2={currentY}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Traveling pulse / packet */}
      {showPacket && frame >= packetStartFrame && packetProgress < 1 && (
        <circle
          cx={packetX}
          cy={packetY}
          r="8"
          fill="#FFFFFF"
          filter="drop-shadow(0 0 8px #38BDF8)"
        />
      )}
    </svg>
  );
};

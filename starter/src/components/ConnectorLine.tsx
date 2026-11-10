import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface ConnectorLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  color?: string;
  strokeWidth?: number;
  track?: boolean;
  trackColor?: string;
  trackWidth?: number;
  trackDasharray?: string;
  showPacket?: boolean;
  packetCount?: 0 | 1 | 2;
  packetColor?: string;
  packetRadius?: number;
  packetPeriod?: number;
  packetDelay?: number;
  packetDirection?: "forward" | "reverse";
  glow?: boolean;
  reveal?: "spring" | "linear";
  revealDurationInFrames?: number;
  style?: React.CSSProperties;
}

const positiveModulo = (value: number, divisor: number) =>
  ((value % divisor) + divisor) % divisor;

/**
 * A configurable straight connector for diagrams and motion graphics.
 * Defaults preserve the legacy explainer look; turn off track, packets, or
 * glow when a quieter editorial treatment is more appropriate.
 */
export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  startX,
  startY,
  endX,
  endY,
  delay = 10,
  color = "#38BDF8",
  strokeWidth = 3.5,
  track = true,
  trackColor = "rgba(255, 255, 255, 0.12)",
  trackWidth = 3,
  trackDasharray = "6 6",
  showPacket = true,
  packetCount,
  packetColor = "#FFFFFF",
  packetRadius = 6,
  packetPeriod = 24,
  packetDelay = 10,
  packetDirection = "forward",
  glow = true,
  reveal = "spring",
  revealDurationInFrames = 18,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - delay;

  if (localFrame < 0) return null;

  const drawProgress =
    reveal === "spring"
      ? spring({
          frame: localFrame,
          fps,
          config: { damping: 15, mass: 0.8 },
        })
      : interpolate(localFrame, [0, Math.max(1, revealDurationInFrames)], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  const clampedDraw = Math.min(Math.max(drawProgress, 0), 1);
  const currentX = startX + (endX - startX) * clampedDraw;
  const currentY = startY + (endY - startY) * clampedDraw;
  const resolvedPacketCount = packetCount ?? (showPacket ? 2 : 0);
  const packetStartFrame = delay + packetDelay;
  const packetActive = frame >= packetStartFrame && clampedDraw >= 0.8;
  const period = Math.max(1, packetPeriod);
  const elapsed = frame - packetStartFrame;

  const getPacket = (index: number) => {
    const offset = index * (period / 2);
    const raw = positiveModulo(elapsed + offset, period) / period;
    const progress = packetDirection === "forward" ? raw : 1 - raw;
    return {
      x: startX + (endX - startX) * progress,
      y: startY + (endY - startY) * progress,
    };
  };

  const packetOne = getPacket(0);
  const packetTwo = getPacket(1);
  const lineFilter = glow ? `drop-shadow(0 0 6px ${color})` : undefined;

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 5,
        ...style,
      }}
    >
      {track && (
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={trackColor}
          strokeWidth={trackWidth}
          strokeDasharray={trackDasharray}
        />
      )}

      <line
        x1={startX}
        y1={startY}
        x2={currentX}
        y2={currentY}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={lineFilter ? { filter: lineFilter } : undefined}
      />

      {packetActive && resolvedPacketCount >= 1 && (
        <circle
          cx={packetOne.x}
          cy={packetOne.y}
          r={packetRadius}
          fill={packetColor}
          style={glow ? { filter: `drop-shadow(0 0 8px ${color})` } : undefined}
        />
      )}

      {packetActive && resolvedPacketCount >= 2 && (
        <circle
          cx={packetTwo.x}
          cy={packetTwo.y}
          r={packetRadius * 0.75}
          fill={color}
          style={glow ? { filter: "drop-shadow(0 0 6px #FFFFFF)" } : undefined}
        />
      )}
    </svg>
  );
};

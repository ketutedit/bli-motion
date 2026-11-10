import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

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

  // Looping continuous data packets
  const packetStartFrame = delay + 10;
  const loopPeriod = 24; // frames per packet loop (~0.8s)
  const loopFrame = (frame - packetStartFrame) % loopPeriod;
  const loopProgress = Math.max(0, loopFrame / loopPeriod);

  // Second packet staggered by 12 frames
  const loopFrame2 = (frame - packetStartFrame + 12) % loopPeriod;
  const loopProgress2 = Math.max(0, loopFrame2 / loopPeriod);

  const currentX = startX + (endX - startX) * clampedDraw;
  const currentY = startY + (endY - startY) * clampedDraw;

  const p1X = startX + (endX - startX) * loopProgress;
  const p1Y = startY + (endY - startY) * loopProgress;

  const p2X = startX + (endX - startX) * loopProgress2;
  const p2Y = startY + (endY - startY) * loopProgress2;

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
      <defs>
        <filter id={`glow-${color.replace('#', '')}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Subtle guide track */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {/* Main neon wire */}
      <line
        x1={startX}
        y1={startY}
        x2={currentX}
        y2={currentY}
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 6px ${color})`,
        }}
      />

      {/* Continuous streaming packet 1 */}
      {showPacket && frame >= packetStartFrame && clampedDraw >= 0.8 && (
        <circle
          cx={p1X}
          cy={p1Y}
          r="6"
          fill="#FFFFFF"
          style={{
            filter: `drop-shadow(0 0 10px ${color})`,
          }}
        />
      )}

      {/* Continuous streaming packet 2 */}
      {showPacket && frame >= packetStartFrame + 8 && clampedDraw >= 0.8 && (
        <circle
          cx={p2X}
          cy={p2Y}
          r="4.5"
          fill={color}
          style={{
            filter: `drop-shadow(0 0 8px #FFFFFF)`,
          }}
        />
      )}
    </svg>
  );
};

import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface StreamFlowLogoProps {
  size?: number;
  delay?: number;
}

export const StreamFlowLogo: React.FC<StreamFlowLogoProps> = ({
  size = 140,
  delay = 5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 130 },
  });

  const pulse = Math.sin((frame / fps) * Math.PI * 2) * 4;

  if (frame < delay) return null;

  return (
    <div
      style={{
        transform: `scale(${progress})`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        style={{
          filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))",
        }}
      >
        <defs>
          <linearGradient id="sfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon / Rounded Shield Container */}
        <rect
          x="10"
          y="10"
          width="120"
          height="120"
          rx="32"
          fill="#0F172A"
          stroke="url(#sfGradient)"
          strokeWidth="4"
        />

        {/* Flow Wave 1 */}
        <path
          d="M35 70 C45 45, 65 45, 75 70 C85 95, 105 95, 115 70"
          stroke="#06B6D4"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Flow Wave 2 */}
        <path
          d="M35 84 C45 59, 65 59, 75 84 C85 109, 105 109, 115 84"
          stroke="#6366F1"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.85"
          fill="none"
        />

        {/* Broadcast Live Dot */}
        <circle cx="75" cy="40" r={6 + (pulse > 0 ? pulse * 0.5 : 0)} fill="#EF4444" />
        <circle cx="75" cy="40" r="14" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.5" />
      </svg>
    </div>
  );
};

import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface SVGCharacterProps {
  expression?: "happy" | "thinking" | "surprised";
  scale?: number;
  color?: string;
  accentColor?: string;
}

export const SVGCharacter: React.FC<SVGCharacterProps> = ({
  expression = "happy",
  scale = 1,
  color = "#38BDF8",
  accentColor = "#F59E0B",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterProgress = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  // Subtle breathing / bobbing cycle (approx every 60 frames = 2 seconds)
  const bobbing = Math.sin((frame / fps) * Math.PI * 2) * 6;

  // Eye blinking cycle (blinks briefly every 75 frames)
  const blinkCycle = frame % 75;
  const isBlinking = blinkCycle > 70 && blinkCycle <= 75;

  return (
    <div
      style={{
        transform: `scale(${enterProgress * scale}) translateY(${bobbing}px)`,
        transformOrigin: "bottom center",
        display: "inline-block",
      }}
    >
      <svg width="220" height="240" viewBox="0 0 220 240" fill="none">
        {/* Soft shadow */}
        <ellipse
          cx="110"
          cy="230"
          rx={65 * enterProgress}
          ry="10"
          fill="#000000"
          opacity="0.25"
        />

        {/* Body / Torso */}
        <path
          d="M60 160 C60 140, 80 130, 110 130 C140 130, 160 140, 160 160 L170 220 L50 220 Z"
          fill={color}
          stroke="#0F172A"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Head */}
        <circle
          cx="110"
          cy="85"
          r="48"
          fill="#FDE68A"
          stroke="#0F172A"
          strokeWidth="4"
        />

        {/* Hair / Cap detail */}
        <path
          d="M65 75 C70 45, 150 45, 155 75 C145 60, 85 60, 65 75 Z"
          fill={accentColor}
          stroke="#0F172A"
          strokeWidth="3"
        />

        {/* Eyes */}
        {isBlinking ? (
          <>
            <line x1="90" y1="85" x2="102" y2="85" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            <line x1="118" y1="85" x2="130" y2="85" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          </>
        ) : expression === "thinking" ? (
          <>
            <circle cx="96" cy="82" r="5" fill="#0F172A" />
            <circle cx="124" cy="82" r="5" fill="#0F172A" />
            {/* Thinking eyebrows */}
            <line x1="88" y1="72" x2="102" y2="76" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <line x1="118" y1="76" x2="132" y2="72" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : expression === "surprised" ? (
          <>
            <circle cx="96" cy="85" r="7" fill="#0F172A" />
            <circle cx="124" cy="85" r="7" fill="#0F172A" />
          </>
        ) : (
          <>
            <circle cx="96" cy="85" r="5" fill="#0F172A" />
            <circle cx="124" cy="85" r="5" fill="#0F172A" />
          </>
        )}

        {/* Mouth */}
        {expression === "happy" && (
          <path
            d="M98 102 Q110 114 122 102"
            stroke="#0F172A"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        )}
        {expression === "thinking" && (
          <line
            x1="102"
            y1="104"
            x2="118"
            y2="104"
            stroke="#0F172A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        {expression === "surprised" && (
          <ellipse
            cx="110"
            cy="106"
            rx="6"
            ry="9"
            fill="#0F172A"
          />
        )}

        {/* Cheeks */}
        <ellipse cx="84" cy="94" rx="6" ry="4" fill="#F87171" opacity="0.6" />
        <ellipse cx="136" cy="94" rx="6" ry="4" fill="#F87171" opacity="0.6" />
      </svg>
    </div>
  );
};

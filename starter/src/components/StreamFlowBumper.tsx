import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { StreamFlowIcon } from "./StreamFlowIcon";
import { StreamFlowBrandLockup } from "./StreamFlowBrandLockup";

export interface StreamFlowBumperProps {
  delay?: number;
}

export const StreamFlowBumper: React.FC<StreamFlowBumperProps> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy spring entrance for icon
  const iconSpring = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 140 },
  });

  // Smooth slide-up spring for lockup text
  const textSpring = spring({
    frame: frame - delay - 10,
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 120 },
  });

  // Glowing shockwave expansion ring
  const shockwave = interpolate(frame - delay, [4, 42], [0, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveOpacity = interpolate(shockwave, [0, 0.4, 2.2], [0, 0.8, 0]);

  // Secondary shockwave
  const shockwave2 = interpolate(frame - delay, [10, 50], [0, 2.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwave2Opacity = interpolate(shockwave2, [0, 0.5, 2.8], [0, 0.5, 0]);

  // Subtle breathing pulse
  const pulse = Math.sin((frame / fps) * Math.PI * 2) * 3;

  if (frame < delay) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Expanding Primary Shockwave Ring */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "2.5px solid #38BDF8",
          boxShadow: "0 0 40px #0284C7, inset 0 0 20px #38BDF8",
          transform: `scale(${shockwave})`,
          opacity: shockwaveOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Expanding Secondary Outer Ring */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1.5px dashed rgba(59, 130, 246, 0.7)",
          transform: `scale(${shockwave2})`,
          opacity: shockwave2Opacity,
          pointerEvents: "none",
        }}
      />

      {/* Vibrant Ambient Glow behind Logo */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(56, 189, 248, 0.2) 45%, transparent 75%)",
          filter: "blur(40px)",
          transform: `scale(${iconSpring})`,
        }}
      />

      {/* Central Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          zIndex: 10,
        }}
      >
        {/* Large Iconic Vector Mark & Lockup */}
        <div
          style={{
            transform: `scale(${iconSpring * (1 + pulse * 0.004)})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StreamFlowBrandLockup width={520} glow />
        </div>

        {/* Tagline Badge */}
        <div
          style={{
            transform: `scale(${textSpring}) translateY(${interpolate(textSpring, [0, 1], [20, 0])}px)`,
            opacity: interpolate(textSpring, [0, 1], [0, 1]),
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(56, 189, 248, 0.5)",
            borderRadius: "9999px",
            padding: "8px 24px",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#38BDF8",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 10px #22C55E",
            }}
          />
          WEB-BASED MULTI-PLATFORM STREAMING
        </div>
      </div>
    </div>
  );
};

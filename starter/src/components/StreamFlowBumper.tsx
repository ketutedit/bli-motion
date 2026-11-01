import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export interface StreamFlowBumperProps {
  delay?: number;
}

export const StreamFlowBumper: React.FC<StreamFlowBumperProps> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy spring entrance
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 11, mass: 0.5, stiffness: 140 },
  });

  // Glowing shockwave expansion
  const shockwave = interpolate(frame - delay, [5, 40], [0, 1.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shockwaveOpacity = interpolate(shockwave, [0, 0.4, 1.8], [0, 0.6, 0]);

  // Subtle breathing pulse after entrance
  const pulse = Math.sin((frame / fps) * Math.PI * 2) * 4;

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
      {/* Expanding Shockwave Ring */}
      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "2px solid #38BDF8",
          boxShadow: "0 0 30px #06B6D4",
          transform: `scale(${shockwave})`,
          opacity: shockwaveOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Ambient Logo Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "220px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 80%)",
          filter: "blur(30px)",
          transform: `scale(${progress})`,
        }}
      />

      {/* Official StreamFlow Staggered Pill Bars (SVG Reconstructed + Image) */}
      <div
        style={{
          transform: `scale(${progress * (1 + pulse * 0.005)})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          zIndex: 10,
        }}
      >
        {/* Official StreamFlow Image Logo */}
        <Img
          src={staticFile("assets/streamflow-logo.png")}
          style={{
            height: "90px",
            objectFit: "contain",
            filter: "drop-shadow(0 0 25px rgba(56, 189, 248, 0.5))",
          }}
        />

        {/* Tagline Pill */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            border: "1.5px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "9999px",
            padding: "6px 20px",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#38BDF8",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            opacity: interpolate(frame - delay, [10, 25], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          WEB-BASED MULTI-PLATFORM STREAMING
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Lock, Radio, MousePointer2 } from "lucide-react";
import { StreamFlowIcon } from "./StreamFlowIcon";

export interface StreamFlowAppWindowProps {
  delay?: number;
  mode?: "dashboard" | "gallery";
  highlightSection?: "all" | "streams" | "telemetry" | "upload";
  scale?: number;
  tiltX?: number;
  tiltY?: number;
  showCursor?: boolean;
}

export const StreamFlowAppWindow: React.FC<StreamFlowAppWindowProps> = ({
  delay = 5,
  mode = "dashboard",
  highlightSection = "all",
  scale = 1,
  tiltX = 0,
  tiltY = 0,
  showCursor = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy 3D entrance spring
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, mass: 0.7, stiffness: 110 },
  });

  const floatY = Math.sin((frame / fps) * Math.PI * 1.5) * 5;

  // Animated cursor simulation
  const cursorProgress = spring({
    frame: frame - delay - 20,
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 100 },
  });

  // Cursor moves from bottom-right towards "+ New Stream" button
  const cursorX = interpolate(cursorProgress, [0, 1], [1100, 840]);
  const cursorY = interpolate(cursorProgress, [0, 1], [400, 195]);

  // Click ripple effect around frame 55
  const clickFrame = frame - delay - 50;
  const clickRipple = interpolate(clickFrame, [0, 20], [0, 2.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const clickOpacity = interpolate(clickRipple, [0, 0.4, 2.5], [0, 0.8, 0]);

  if (frame < delay) return null;

  const imageSrc =
    mode === "gallery"
      ? staticFile("streamflow_ui_gallery.png")
      : staticFile("streamflow_ui_dashboard.png");

  return (
    <div
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1540px",
          borderRadius: "18px",
          overflow: "hidden",
          backgroundColor: "#0B0F19",
          border: "2px solid rgba(56, 189, 248, 0.4)",
          boxShadow:
            "0 35px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2)",
          transform: `scale(${progress * scale}) translateY(${floatY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformOrigin: "center center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Browser Titlebar */}
        <div
          style={{
            height: "46px",
            backgroundColor: "#111827",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            justifyContent: "space-between",
          }}
        >
          {/* macOS Window Controls */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#10B981" }} />
          </div>

          {/* Browser URL Bar */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              borderRadius: "8px",
              padding: "5px 24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "#94A3B8",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              width: "460px",
              justifyContent: "center",
            }}
          >
            <Lock size={12} color="#10B981" />
            <span style={{ color: "#E2E8F0", fontWeight: 700 }}>http://localhost:7575</span>
            <span style={{ color: "#64748B" }}>
              {mode === "gallery" ? "/gallery — Media Gallery" : "/dashboard — Streaming Status"}
            </span>
          </div>

          {/* Server Status pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              fontWeight: 800,
              color: "#10B981",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              padding: "4px 12px",
              borderRadius: "9999px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 8px #10B981",
              }}
            />
            SERVER ONLINE • VPS
          </div>
        </div>

        {/* Real StreamFlow Web Screenshot */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <Img
            src={imageSrc}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* Dynamic Highlight Overlays */}
          {highlightSection === "telemetry" && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "70px",
                right: "20px",
                height: "170px",
                borderRadius: "14px",
                border: "3px solid #38BDF8",
                boxShadow: "0 0 35px rgba(56, 189, 248, 0.6), inset 0 0 20px rgba(56, 189, 248, 0.2)",
                pointerEvents: "none",
              }}
            />
          )}

          {highlightSection === "streams" && (
            <div
              style={{
                position: "absolute",
                top: "190px",
                left: "70px",
                right: "20px",
                bottom: "15px",
                borderRadius: "14px",
                border: "3px solid #10B981",
                boxShadow: "0 0 35px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(16, 185, 129, 0.15)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Interactive Mouse Cursor Simulation (Like Google Gemini Video) */}
          {showCursor && (
            <div
              style={{
                position: "absolute",
                left: `${cursorX}px`,
                top: `${cursorY}px`,
                pointerEvents: "none",
                zIndex: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <MousePointer2
                size={28}
                color="#FFFFFF"
                fill="#38BDF8"
                style={{
                  filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.7))",
                }}
              />
              {/* Expanding Click Ripple */}
              {clickFrame >= 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: "-12px",
                    top: "-12px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "3px solid #38BDF8",
                    boxShadow: "0 0 20px #38BDF8",
                    transform: `scale(${clickRipple})`,
                    opacity: clickOpacity,
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

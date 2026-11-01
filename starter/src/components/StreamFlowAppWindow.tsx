import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Globe, Lock, ShieldCheck } from "lucide-react";

export interface StreamFlowAppWindowProps {
  delay?: number;
  highlightSection?: "all" | "streams" | "gallery" | "stats";
  scale?: number;
}

export const StreamFlowAppWindow: React.FC<StreamFlowAppWindowProps> = ({
  delay = 5,
  highlightSection = "all",
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 3D perspective pop-up spring
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 13, mass: 0.6, stiffness: 120 },
  });

  const floatY = Math.sin((frame / fps) * Math.PI * 1.5) * 6;

  if (frame < delay) return null;

  return (
    <div
      style={{
        width: "1640px",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#0B0F19",
        border: "2px solid rgba(56, 189, 248, 0.35)",
        boxShadow:
          "0 30px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(56, 189, 248, 0.15)",
        transform: `scale(${progress * scale}) translateY(${floatY}px)`,
        transformOrigin: "center center",
        display: "flex",
        flexDirection: "column",
        zIndex: 10,
      }}
    >
      {/* Browser / App Titlebar */}
      <div
        style={{
          height: "48px",
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
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            borderRadius: "8px",
            padding: "4px 24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "13px",
            color: "#94A3B8",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            width: "480px",
            justifyContent: "center",
          }}
        >
          <Lock size={12} color="#10B981" />
          <span style={{ color: "#E2E8F0", fontWeight: 600 }}>http://localhost:7575</span>
          <span style={{ color: "#64748B" }}>— StreamFlow Dashboard</span>
        </div>

        {/* Live Status indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 800, color: "#10B981" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 8px #10B981" }} />
          SERVER ONLINE
        </div>
      </div>

      {/* Main App Content: Real StreamFlow Dashboard UI Screenshot */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <Img
          src={staticFile("assets/streamflow-dashboard.png")}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Dynamic Highlight Overlays matching the focus */}
        {highlightSection === "stats" && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "60px",
              width: "400px",
              height: "90px",
              borderRadius: "12px",
              border: "3px solid #38BDF8",
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)",
              pointerEvents: "none",
            }}
          />
        )}

        {highlightSection === "streams" && (
          <div
            style={{
              position: "absolute",
              top: "120px",
              left: "60px",
              width: "740px",
              height: "360px",
              borderRadius: "14px",
              border: "3px solid #06B6D4",
              boxShadow: "0 0 35px rgba(6, 182, 212, 0.6)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
};

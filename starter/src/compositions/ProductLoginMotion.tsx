import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

export const ProductLoginMotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroIn = spring({ frame: frame - 8, fps, config: { damping: 18, mass: 0.8 } });
  const panelIn = spring({ frame: frame - 15, fps, config: { damping: 17, mass: 0.8 } });
  const loginOut = interpolate(frame, [178, 205], [1, 0], clamp);
  const dashboardIn = interpolate(frame, [182, 212], [0, 1], clamp);
  const buttonPress = interpolate(frame, [112, 120, 132, 142], [1, 0.97, 0.97, 1], clamp);
  const loadingOpacity = interpolate(frame, [138, 145, 178, 188], [0, 1, 1, 0], clamp);
  const cursorX = interpolate(frame, [70, 110, 120, 150], [1040, 810, 810, 810], clamp);
  const cursorY = interpolate(frame, [70, 110, 120, 150], [780, 704, 704, 704], clamp);
  const dashboardCard = spring({ frame: frame - 220, fps, config: { damping: 18, mass: 0.7 } });

  return (
    <AbsoluteFill
      style={{
        background: "#E8ECE8",
        color: "#202B2A",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 58, left: 80, fontSize: 17, fontWeight: 800, letterSpacing: "0.16em", color: "#72807A" }}>
        NORTHSTAR / PRODUCT STUDY
      </div>

      <div
        style={{
          position: "absolute",
          top: 238,
          left: 105,
          width: 620,
          opacity: heroIn,
          transform: `translateY(${(1 - heroIn) * 28}px)`,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "0.18em", color: "#567E6D" }}>A CALMER WAY TO WORK</div>
        <div style={{ marginTop: 26, fontSize: 76, fontWeight: 800, lineHeight: 0.99, letterSpacing: "-0.055em" }}>
          Your workday,<br/>in better focus.
        </div>
        <div style={{ marginTop: 26, maxWidth: 470, fontSize: 23, lineHeight: 1.45, color: "#6E7974" }}>
          A fictional product interface study showing a clear path from sign-in to workspace.
        </div>
        <div style={{ marginTop: 42, width: 72, height: 6, borderRadius: 4, background: "#D47B58" }} />
      </div>

      {/* Login state */}
      <div
        style={{
          position: "absolute",
          top: 145,
          right: 125,
          width: 570,
          height: 790,
          borderRadius: 28,
          background: "#FBFCF8",
          border: "1px solid #D8E0DA",
          boxShadow: "0 30px 90px rgba(32, 43, 42, 0.13)",
          padding: "54px 56px",
          opacity: loginOut * panelIn,
          transform: `translateY(${(1 - panelIn) * 35}px) scale(${0.97 + panelIn * 0.03})`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "#315F50", display: "grid", placeItems: "center", color: "#FFFFFF", fontSize: 20, fontWeight: 900 }}>N</div>
          <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-0.03em" }}>northstar</div>
        </div>

        <div style={{ marginTop: 66, fontSize: 42, fontWeight: 800, letterSpacing: "-0.045em" }}>Welcome back</div>
        <div style={{ marginTop: 10, fontSize: 18, color: "#77817A" }}>Sign in to continue to your workspace.</div>

        <div style={{ marginTop: 42, fontSize: 15, fontWeight: 700, color: "#46534C" }}>Email address</div>
        <div style={{ marginTop: 10, height: 66, borderRadius: 12, border: "1.5px solid #CBD6CE", display: "flex", alignItems: "center", padding: "0 19px", fontSize: 18, color: "#293B32", background: "#FFFFFF" }}>
          alex@example.com
        </div>

        <div style={{ marginTop: 26, fontSize: 15, fontWeight: 700, color: "#46534C" }}>Password</div>
        <div style={{ marginTop: 10, height: 66, borderRadius: 12, border: "1.5px solid #CBD6CE", display: "flex", alignItems: "center", padding: "0 19px", fontSize: 21, letterSpacing: "0.18em", color: "#293B32", background: "#FFFFFF" }}>
          ••••••••••••
        </div>

        <div
          style={{
            marginTop: 34,
            height: 68,
            borderRadius: 13,
            background: "#315F50",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 19,
            fontWeight: 800,
            transform: `scale(${buttonPress})`,
            boxShadow: "0 10px 22px rgba(49, 95, 80, 0.18)",
          }}
        >
          Sign in
        </div>
        <div style={{ marginTop: 25, textAlign: "center", fontSize: 15, color: "#87918A" }}>A clean interface keeps the next action obvious.</div>
      </div>

      {/* Loading indicator */}
      <div style={{ position: "absolute", right: 125, top: 145, width: 570, height: 790, borderRadius: 28, background: "#FBFCF8", display: "grid", placeItems: "center", opacity: loadingOpacity }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 58, height: 58, margin: "0 auto", borderRadius: "50%", border: "5px solid #DDE7E0", borderTopColor: "#315F50", transform: `rotate(${frame * 12}deg)` }} />
          <div style={{ marginTop: 24, fontSize: 22, fontWeight: 700 }}>Preparing your workspace…</div>
          <div style={{ marginTop: 10, fontSize: 15, color: "#7B877F" }}>This is a visual loading-state demonstration.</div>
        </div>
      </div>

      {/* Successful dashboard state */}
      <div
        style={{
          position: "absolute",
          top: 145,
          right: 90,
          width: 720,
          height: 790,
          borderRadius: 28,
          background: "#FBFCF8",
          border: "1px solid #D8E0DA",
          boxShadow: "0 30px 90px rgba(32, 43, 42, 0.13)",
          padding: 38,
          opacity: dashboardIn,
          transform: `translateX(${(1 - dashboardIn) * 35}px) scale(${0.97 + dashboardIn * 0.03})`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "#315F50", color: "#FFF", display: "grid", placeItems: "center", fontWeight: 900 }}>N</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>northstar</div>
          </div>
          <div style={{ color: "#7C8880", fontSize: 14 }}>MONDAY, 9:41 AM</div>
        </div>
        <div style={{ marginTop: 62, fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em" }}>Good morning, Alex.</div>
        <div style={{ marginTop: 9, fontSize: 17, color: "#7A857E" }}>Here is your workspace at a glance.</div>

        <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
          {[
            { label: "IN PROGRESS", value: "04", color: "#D47B58" },
            { label: "COMPLETED", value: "12", color: "#5C8D70" },
            { label: "TEAM NOTES", value: "08", color: "#7892A1" },
          ].map((item, index) => (
            <div key={item.label} style={{ flex: 1, background: "#F0F4EF", borderRadius: 15, padding: "20px 17px", opacity: dashboardCard, transform: `translateY(${(1 - dashboardCard) * (index + 1) * 8}px)` }}>
              <div style={{ fontSize: 11, color: "#76837A", fontWeight: 800, letterSpacing: "0.08em" }}>{item.label}</div>
              <div style={{ marginTop: 13, fontSize: 36, color: item.color, fontWeight: 800 }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 35, fontSize: 15, fontWeight: 800, letterSpacing: "0.1em", color: "#68766D" }}>YOUR NEXT STEPS</div>
        <div style={{ marginTop: 15, borderTop: "1px solid #E2E8E1" }}>
          {["Review the launch checklist", "Share the project update", "Plan the next sprint"].map((item, index) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 15, padding: "17px 2px", borderBottom: "1px solid #E2E8E1", opacity: dashboardCard, transform: `translateX(${(1 - dashboardCard) * (index + 1) * 10}px)` }}>
              <div style={{ width: 18, height: 18, borderRadius: 6, border: "1.5px solid #AAB8AE" }} />
              <div style={{ fontSize: 17, color: "#34443B" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor is decorative evidence of the interaction path, not a real input. */}
      <div style={{ position: "absolute", left: cursorX, top: cursorY, width: 25, height: 25, borderRadius: "50%", background: "#D47B58", border: "3px solid #FFFFFF", boxShadow: "0 3px 13px rgba(0,0,0,0.22)", opacity: interpolate(frame, [65, 75, 150, 164], [0, 1, 1, 0], clamp), pointerEvents: "none" }} />

      <div style={{ position: "absolute", left: 80, bottom: 55, color: "#7A857E", fontSize: 14, fontWeight: 800, letterSpacing: "0.12em" }}>
        PRODUCT UI / STATE TRANSITION STUDY
      </div>
    </AbsoluteFill>
  );
};

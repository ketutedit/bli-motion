import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { ConnectorLine } from "../components/ConnectorLine";
import { MotionShape } from "../components/MotionShape";
import { Reveal } from "../components/Reveal";

export const MotionPrimitivesShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin((frame / 30) * Math.PI * 2) * 0.025;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F2F0EA",
        color: "#202B2A",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 88,
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "0.16em",
          color: "#718078",
        }}
      >
        BLI MOTION / COMPONENT STUDY
      </div>

      <Reveal effect="rise" delay={5} distance={22}>
        <div style={{ position: "absolute", top: 128, left: 88 }}>
          <div style={{ fontSize: 60, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.05em" }}>
            Primitives, not presets.
          </div>
          <div style={{ marginTop: 16, fontSize: 22, color: "#68766D" }}>
            Neutral building blocks that adapt to the visual idea.
          </div>
        </div>
      </Reveal>

      <div
        style={{
          position: "absolute",
          left: 100,
          right: 100,
          top: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Reveal effect="wipe-up" motion="linear" delay={16} durationInFrames={26}>
          <div style={{ width: 330, height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#FFFFFF", border: "1px solid #DDDCD3", borderRadius: 18 }}>
            <MotionShape shape="circle" width={128} height={128} fill="#D47B58" stroke="#202B2A" strokeWidth={1.5} entrance="none" />
            <div style={{ marginTop: 22, fontSize: 19, fontWeight: 800 }}>Geometry</div>
            <div style={{ marginTop: 6, color: "#7A857E", fontSize: 14 }}>SVG primitive</div>
          </div>
        </Reveal>

        <Reveal effect="slide-left" delay={26} distance={36}>
          <div style={{ width: 330, height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#E5EAE4", border: "1px solid #C9D2C9", borderRadius: 18 }}>
            <MotionShape shape="diamond" width={128} height={128} fill="#668A77" stroke="#314C41" strokeWidth={1.5} rotation={12} entrance="none" />
            <div style={{ marginTop: 22, fontSize: 19, fontWeight: 800 }}>Art direction</div>
            <div style={{ marginTop: 6, color: "#66766D", fontSize: 14 }}>User-defined color and form</div>
          </div>
        </Reveal>

        <Reveal effect="fade" delay={38}>
          <div style={{ width: 330, height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#293B3A", borderRadius: 18, color: "#F5F2EA" }}>
            <MotionShape shape="hexagon" width={128} height={128} fill="#E6C69F" stroke="#F8F3E8" strokeWidth={1.5} entrance="none" />
            <div style={{ marginTop: 22, fontSize: 19, fontWeight: 800 }}>Visual variety</div>
            <div style={{ marginTop: 6, color: "#C2CEC5", fontSize: 14 }}>No mandatory house style</div>
          </div>
        </Reveal>
      </div>

      <ConnectorLine
        startX={180}
        startY={735}
        endX={1740}
        endY={735}
        delay={18}
        color="#668A77"
        strokeWidth={3}
        track={false}
        packetCount={1}
        packetColor="#D47B58"
        packetRadius={7}
        packetPeriod={72}
        packetDelay={14}
        glow={false}
        reveal="linear"
        revealDurationInFrames={38}
      />

      <div style={{ position: "absolute", left: 100, top: 790, fontSize: 16, fontWeight: 700, letterSpacing: "0.08em", color: "#68766D" }}>
        REVEAL  /  SHAPE  /  CONNECT
      </div>
      <div style={{ position: "absolute", right: 100, top: 790, fontSize: 14, color: "#8A928A", transform: `scale(${pulse})`, transformOrigin: "right center" }}>
        1920 × 1080  ·  30 FPS
      </div>
    </AbsoluteFill>
  );
};

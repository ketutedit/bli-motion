import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { defaultTheme } from "../types";
import { SVGCharacter } from "../components/SVGCharacter";
import { KineticText } from "../components/KineticText";
import { MotionCard } from "../components/MotionCard";
import { ConnectorLine } from "../components/ConnectorLine";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { Globe, Server, Laptop } from "lucide-react";

export const MainExplainer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: defaultTheme.bg,
        color: defaultTheme.text,
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background ambient radial glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(11, 15, 25, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ============================================================== */}
      {/* SCENE 1: THE HOOK / QUESTION (Frames 0 - 90 = 3 detik @ 30fps) */}
      {/* ============================================================== */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          <AnimatedBadge label="Explainer Series" delay={5} />
          
          <KineticText
            text="Bagaimana Internet Mengirim Data?"
            highlightWord="Data?"
            highlightColor={defaultTheme.primary}
            fontSize={68}
            delay={10}
          />

          <div style={{ marginTop: "20px" }}>
            <SVGCharacter
              expression={frame > 40 ? "thinking" : "happy"}
              scale={1.2}
              color={defaultTheme.primary}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: THE MECHANISM / PROCESS (Frames 90 - 210 = 4 detik @ 30fps)    */}
      {/* ========================================================================= */}
      <Sequence from={90} durationInFrames={120}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: "70px" }}>
            <AnimatedBadge label="Proses Pengiriman" delay={0} color="#818CF8" bgColor="rgba(129, 140, 248, 0.15)" />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "180px",
              width: "100%",
              padding: "0 100px",
              marginTop: "40px",
            }}
          >
            {/* Left Node: Client / User */}
            <MotionCard
              delay={5}
              title="Perangkat Kamu"
              description="Mengirim request data"
              icon={<Laptop size={44} color="#38BDF8" />}
            />

            {/* Middle Node: Network / DNS */}
            <MotionCard
              delay={25}
              highlight
              title="Router & DNS"
              description="Menerjemahkan alamat IP"
              icon={<Globe size={44} color="#F59E0B" />}
            />

            {/* Right Node: Target Server */}
            <MotionCard
              delay={45}
              title="Server Web"
              description="Menyiapkan respon data"
              icon={<Server size={44} color="#10B981" />}
            />
          </div>

          {/* Animated Connecting Lines */}
          <ConnectorLine
            startX={550}
            startY={540}
            endX={850}
            endY={540}
            delay={20}
            color="#38BDF8"
            showPacket
          />
          <ConnectorLine
            startX={1070}
            startY={540}
            endX={1370}
            endY={540}
            delay={50}
            color="#F59E0B"
            showPacket
          />
        </AbsoluteFill>
      </Sequence>

      {/* ============================================================== */}
      {/* SCENE 3: THE TAKEAWAY / SUMMARY (Frames 210 - 300 = 3 detik)    */}
      {/* ============================================================== */}
      <Sequence from={210} durationInFrames={90}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <AnimatedBadge label="Kesimpulan Inti" delay={0} color="#10B981" bgColor="rgba(16, 185, 129, 0.15)" />

          <KineticText
            text="Semua terjadi dalam hitungan milidetik."
            highlightWord="milidetik."
            highlightColor="#10B981"
            fontSize={64}
            delay={8}
          />

          <div style={{ marginTop: "16px" }}>
            <SVGCharacter
              expression="surprised"
              scale={1.3}
              color="#10B981"
              accentColor="#38BDF8"
            />
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

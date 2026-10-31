import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { KineticText } from "../components/KineticText";
import { AppleStyleText } from "../components/AppleStyleText";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { VoxAnnotation } from "../components/VoxAnnotation";
import { AtmosphereScale } from "../components/AtmosphereScale";
import { RainParticles } from "../components/RainParticles";
import { Sun, CloudRain, Droplets, ArrowUp, ArrowDown } from "lucide-react";

export const HowRainForms: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous camera drift across the entire 45s composition
  const masterCameraZoom = interpolate(frame, [0, 1350], [1, 1.06], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0E17",
        color: "#F8FAFC",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        transform: `scale(${masterCameraZoom})`,
      }}
    >
      {/* Synchronized AI Neural Voiceover Audio */}
      <Audio src={staticFile("audio/voiceover.mp3")} />

      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(10, 14, 23, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ========================================================================= */}
      {/* SCENE 1: THE MYSTERY OF FLOATING CLOUDS (Frames 0 - 270 | 0s - 9.0s)       */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={270}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Category Pill */}
          <div style={{ position: "absolute", top: "70px" }}>
            <AnimatedBadge label="Sains Atmosfer • Vox Explainer" delay={5} color="#38BDF8" />
          </div>

          {/* Question Headline (Apple Keynote Style Mask Reveal & Motion Blur) */}
          <div style={{ position: "absolute", top: "135px", width: "100%", display: "flex", justifyContent: "center" }}>
            <AppleStyleText
              text="Kenapa Awan Seberat Ini Tidak Langsung Jatuh?"
              highlightWord="Seberat"
              highlightGradient="linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)"
              fontSize={56}
              delay={12}
              staggerFrames={4}
            />
          </div>

          {/* Central Flat Vector Cloud */}
          <div
            style={{
              position: "relative",
              marginTop: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* SVG Cloud Illustration */}
            <svg width="600" height="320" viewBox="0 0 600 320" fill="none">
              {/* Cloud Drop Shadow */}
              <ellipse cx="300" cy="300" rx="220" ry="20" fill="#000" opacity="0.35" />
              {/* Main Cloud Body */}
              <path
                d="M160 250 H460 C510 250, 540 210, 520 170 C530 110, 470 70, 410 90 C370 40, 270 40, 230 90 C180 80, 120 120, 130 180 C90 200, 110 250, 160 250 Z"
                fill="#1E293B"
                stroke="#38BDF8"
                strokeWidth="4"
              />
              {/* Internal moisture particles */}
              {[
                { cx: 220, cy: 160, r: 8 },
                { cx: 280, cy: 140, r: 12 },
                { cx: 340, cy: 170, r: 10 },
                { cx: 390, cy: 130, r: 14 },
                { cx: 440, cy: 180, r: 9 },
              ].map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill="#38BDF8"
                  opacity={0.6 + 0.4 * Math.sin((frame + i * 15) / 10)}
                  filter="drop-shadow(0 0 6px #38BDF8)"
                />
              ))}
            </svg>

            {/* Vox Technical Callout Annotations */}
            <VoxAnnotation
              label="Estimasi Massa"
              value="~500.000 KG AIR"
              x={640}
              y={-10}
              delay={25}
              accentColor="#F59E0B"
            />
            <VoxAnnotation
              label="Struktur"
              value="MILIARAN TETES MIKRO"
              x={-280}
              y={180}
              delay={55}
              accentColor="#38BDF8"
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: THE ENGINE — SOLAR EVAPORATION (Frames 270 - 600 | 9.0s - 20.0s)  */}
      {/* ========================================================================= */}
      <Sequence from={270} durationInFrames={330}>
        <AbsoluteFill>
          {/* Header Badge */}
          <div style={{ position: "absolute", top: "60px", left: "100px" }}>
            <AnimatedBadge label="Tahap 1 • Mesin Termal" delay={5} color="#F59E0B" bgColor="rgba(245, 158, 11, 0.15)" />
            <h2 style={{ fontSize: "44px", fontWeight: 800, marginTop: "12px", color: "#F8FAFC" }}>
              Panas Matahari Menggerakkan Evaporasi
            </h2>
          </div>

          {/* Sun Vector Element on top right */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #F59E0B 30%, #D97706 90%)",
                boxShadow: "0 0 60px rgba(245, 158, 11, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sun size={64} color="#FFF" />
            </div>
            <VoxAnnotation
              label="Energi Termal"
              value="+32°C Radiasi Aktif"
              x={-160}
              y={130}
              delay={15}
              accentColor="#F59E0B"
            />
          </div>

          {/* Rising Water Vapor Steam Particles */}
          <div style={{ position: "absolute", bottom: "240px", left: "20%", width: "60%" }}>
            {Array.from({ length: 8 }).map((_, i) => {
              const localFrame = frame - 270;
              const yOffset = ((localFrame * 4 + i * 45) % 360);
              const opacity = 1 - yOffset / 360;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${i * 13 + 5}%`,
                    bottom: `${yOffset}px`,
                    opacity,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <ArrowUp size={28} color="#38BDF8" />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#38BDF8",
                      backgroundColor: "rgba(15, 23, 42, 0.7)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    H₂O Uap
                  </span>
                </div>
              );
            })}
          </div>

          {/* Ocean Water Surface at Bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "220px",
              background: "linear-gradient(180deg, rgba(6, 182, 212, 0.6) 0%, #083344 100%)",
              borderTop: "3px solid #38BDF8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "100px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>
              Permukaan Air Laut & Danau
            </div>
            <div style={{ fontSize: "18px", color: "#A5F3FC", marginTop: "4px" }}>
              Molekul air menyerap panas dan memuai menjadi uap ringan tak kasat mata
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3: THE NUCLEUS — CONDENSATION & AEROSOLS (Frames 600 - 960)         */}
      {/* ========================================================================= */}
      <Sequence from={600} durationInFrames={360}>
        <AbsoluteFill>
          {/* Altitude & Temperature Scale Indicator */}
          <AtmosphereScale delay={5} />

          {/* Center Microscopic Cutaway Title */}
          <div style={{ position: "absolute", top: "70px", left: "400px" }}>
            <AnimatedBadge label="Tahap 2 • Kondensasi" delay={5} color="#818CF8" bgColor="rgba(129, 140, 248, 0.15)" />
            <h2 style={{ fontSize: "44px", fontWeight: 800, marginTop: "12px", color: "#F8FAFC" }}>
              Uap Air Butuh "Tempat Menempel"
            </h2>
          </div>

          {/* Microscopic Particle Zoom View */}
          <div
            style={{
              position: "absolute",
              top: "260px",
              left: "480px",
              display: "flex",
              alignItems: "center",
              gap: "60px",
            }}
          >
            {/* The Nucleus Core (Dust/Salt Particle) */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer Condensation Ring */}
              <div
                style={{
                  position: "absolute",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  border: "3px dashed #38BDF8",
                  animation: "spin 12s linear infinite",
                  opacity: 0.8,
                }}
              />
              {/* Water Layer */}
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(56, 189, 248, 0.4), rgba(14, 165, 233, 0.15))",
                  border: "2px solid #38BDF8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Aerosol Seed Core */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#E2E8F0",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "14px",
                    color: "#0F172A",
                    textAlign: "center",
                  }}
                >
                  DEBU / GARAM
                </div>
              </div>
            </div>

            {/* Explanation Details */}
            <div style={{ maxWidth: "480px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <VoxAnnotation
                label="Fenomena Fisika"
                value="INTI KONDENSASI"
                x={0}
                y={0}
                delay={20}
                accentColor="#818CF8"
              />
              <div style={{ fontSize: "20px", color: "#CBD5E1", lineHeight: 1.6, marginTop: "60px" }}>
                Di udara tipis dan dingin, uap air tidak bisa mengembun sendiri. Mereka menempel pada
                partikel mikro debu atau garam laut untuk berubah menjadi tetesan air cair.
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4: GRAVITY TAKES OVER & RAINFALL (Frames 960 - 1350 | 32s - 45s)    */}
      {/* ========================================================================= */}
      <Sequence from={960} durationInFrames={390}>
        <AbsoluteFill>
          {/* Rain Particle Engine Overlay */}
          <RainParticles density={50} speed={22} />

          {/* Top Headline & Summary */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 30,
            }}
          >
            <AnimatedBadge label="Tahap 3 • Presipitasi" delay={5} color="#10B981" bgColor="rgba(16, 185, 129, 0.15)" />
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 900,
                marginTop: "16px",
                color: "#F8FAFC",
                textAlign: "center",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
              }}
            >
              Ketika Gravitasi Mengambil Alih
            </h1>
          </div>

          {/* Balance of Forces Diagram (Updraft vs Gravity) */}
          <div
            style={{
              position: "absolute",
              top: "260px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "120px",
              alignItems: "center",
              zIndex: 30,
            }}
          >
            {/* Force 1: Updraft (Wind) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 32px",
                borderRadius: "16px",
                background: "rgba(30, 41, 59, 0.85)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <ArrowUp size={48} color="#F59E0B" />
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#94A3B8", marginTop: "12px" }}>
                Arus Udara Naik (Updraft)
              </div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#F59E0B", marginTop: "4px" }}>
                Kalah Tenaga
              </div>
            </div>

            {/* Force 2: Gravity (Winner) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "28px 36px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(15, 23, 42, 0.95))",
                border: "3px solid #10B981",
                boxShadow: "0 0 35px rgba(16, 185, 129, 0.35)",
                backdropFilter: "blur(10px)",
              }}
            >
              <ArrowDown size={56} color="#10B981" />
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#A7F3D0", marginTop: "12px" }}>
                Beban Tetesan Air
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#FFFFFF", marginTop: "4px" }}>
                Gravitasi Menang!
              </div>
            </div>
          </div>

          {/* Ground Splash & Final Conclusion */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1.5px solid #38BDF8",
                padding: "16px 36px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              }}
            >
              <CloudRain size={32} color="#38BDF8" />
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#F8FAFC" }}>
                Dan byurr... Hujan pun turun membasahi bumi.
              </span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

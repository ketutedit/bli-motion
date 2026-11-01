import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { StreamFlowBumper } from "../components/StreamFlowBumper";
import { StreamFlowAppWindow } from "../components/StreamFlowAppWindow";
import { AppleStyleText } from "../components/AppleStyleText";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { VoxAnnotation } from "../components/VoxAnnotation";
import { ConnectorLine } from "../components/ConnectorLine";
import {
  Laptop,
  AlertTriangle,
  Radio,
  Youtube,
  Facebook,
  Twitch,
  Share2,
  Calendar,
  Activity,
  Cpu,
  Github,
  CheckCircle2,
  Zap,
  Globe,
  Flame,
} from "lucide-react";

export const StreamFlowPromo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous master camera zoom across the 32s video
  const masterZoom = interpolate(frame, [0, 960], [1, 1.04], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B13",
        color: "#F8FAFC",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        transform: `scale(${masterZoom})`,
      }}
    >
      {/* Audio Voiceover */}
      <Audio src={staticFile("audio/streamflow-promo.mp3")} />

      {/* Cyber Grid Lines in Background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Dynamic Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1400px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, rgba(7, 11, 19, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ========================================================================= */}
      {/* SCENE 1A: OPENING BUMPER LOGO HOOK (Frames 0 - 90 | 0s - 3s)               */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StreamFlowBumper delay={5} />
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 1B: THE PROBLEM / PAIN POINT (Frames 90 - 210 | 3s - 7s)             */}
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
          {/* Warning Badge */}
          <div style={{ position: "absolute", top: "70px" }}>
            <AnimatedBadge
              label="Masalah Utama Streamer"
              delay={5}
              color="#EF4444"
              bgColor="rgba(239, 68, 68, 0.15)"
            />
          </div>

          {/* Question Headline (Apple In-Place Reveal) */}
          <div style={{ position: "absolute", top: "145px", width: "100%" }}>
            <AppleStyleText
              text="Mau Multi-Stream Tanpa Bikin Laptop Jebol?"
              highlightWord="Laptop"
              highlightGradient="linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)"
              fontSize={54}
              delay={10}
              staggerFrames={3}
            />
          </div>

          {/* Overheating PC / Laptop Illustration */}
          <div
            style={{
              position: "relative",
              marginTop: "120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Pulsing Red Warning Glow */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
                filter: "blur(25px)",
              }}
            />

            {/* Laptop Warning Card */}
            <div
              style={{
                width: "380px",
                height: "230px",
                backgroundColor: "#0F172A",
                border: "3px solid #EF4444",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 50px rgba(239, 68, 68, 0.35)",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Laptop size={72} color="#EF4444" />
                <Flame size={48} color="#F59E0B" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                  color: "#FCA5A5",
                  fontWeight: 900,
                  fontSize: "22px",
                  letterSpacing: "0.05em",
                }}
              >
                <AlertTriangle size={24} color="#EF4444" />
                CPU 99% • OVERHEAT
              </div>
            </div>

            {/* Vox Callout Annotations */}
            <VoxAnnotation
              label="Kondisi Laptop"
              value="KIPAS BISING & LAG"
              x={420}
              y={25}
              delay={25}
              accentColor="#EF4444"
            />
            <VoxAnnotation
              label="Koneksi Internet"
              value="BANDWIDTH JEBOL"
              x={-340}
              y={110}
              delay={45}
              accentColor="#F59E0B"
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: INTRODUCING STREAMFLOW WEB UI (Frames 210 - 410 | 7s - 13.5s)     */}
      {/* ========================================================================= */}
      <Sequence from={210} durationInFrames={200}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Header Title with Official Logo */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              zIndex: 30,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Img
                src={staticFile("assets/streamflow-logo.png")}
                style={{ height: "46px", objectFit: "contain" }}
              />
              <span
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.15)",
                  border: "1.5px solid #06B6D4",
                  padding: "4px 16px",
                  borderRadius: "9999px",
                  color: "#38BDF8",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                WEB-BASED PLATFORM
              </span>
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
              Live Streaming Modern Langsung dari Browser Web
            </h2>
          </div>

          {/* Real StreamFlow App Window Mockup */}
          <div style={{ marginTop: "25px" }}>
            <StreamFlowAppWindow delay={5} highlightSection="all" scale={0.96} />
          </div>

          {/* Floating Feature Pills filling lower space */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              gap: "24px",
              zIndex: 30,
            }}
          >
            {[
              "🌐 Buka Cukup dari Browser Tanpa Software Berat",
              "⚡ Hemat Listrik: Laptop Bebas Dimatikan",
              "🖥️ Spesifikasi Minimal: 1 Core CPU & 1GB RAM",
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(56, 189, 248, 0.4)",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#E2E8F0",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3: MULTI-PLATFORM STREAMING DISTRIBUTION (Frames 410 - 620)        */}
      {/* ========================================================================= */}
      <Sequence from={410} durationInFrames={210}>
        <AbsoluteFill>
          {/* Header */}
          <div style={{ position: "absolute", top: "50px", width: "100%", textAlign: "center", zIndex: 30 }}>
            <AnimatedBadge
              label="Fitur Utama #1 • Multi-Platform"
              delay={5}
              color="#38BDF8"
              bgColor="rgba(56, 189, 248, 0.15)"
            />
            <h2
              style={{
                fontSize: "46px",
                fontWeight: 900,
                color: "#FFFFFF",
                marginTop: "10px",
                letterSpacing: "-0.02em",
              }}
            >
              1 Sumber Video • Siar Serentak ke Semua Platform
            </h2>
          </div>

          {/* Source Hub Node (StreamFlow Server on Left) */}
          <div
            style={{
              position: "absolute",
              left: "180px",
              top: "410px",
              width: "360px",
              height: "260px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(15, 23, 42, 0.95))",
              border: "3px solid #06B6D4",
              boxShadow: "0 0 50px rgba(6, 182, 212, 0.35)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
            }}
          >
            <Img
              src={staticFile("assets/streamflow-logo.png")}
              style={{ width: "240px", objectFit: "contain", marginBottom: "12px" }}
            />
            <div style={{ fontSize: "16px", color: "#67E8F9", fontWeight: 700 }}>
              Server VPS • Web Dashboard
            </div>
            <div
              style={{
                marginTop: "14px",
                backgroundColor: "#0284C7",
                color: "#FFF",
                padding: "6px 18px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 800,
                boxShadow: "0 0 16px rgba(2, 132, 199, 0.5)",
              }}
            >
              1X UPLOAD SAJA
            </div>

            {/* Glowing Output Anchor Socket */}
            <div
              style={{
                position: "absolute",
                right: "-10px",
                top: "120px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#06B6D4",
                boxShadow: "0 0 20px #06B6D4",
                border: "3px solid #FFFFFF",
              }}
            />
          </div>

          {/* EXACT CONNECTING LINES FROM SOURCE (540, 540) INTO PLATFORM CARDS (1220, Y) */}
          {/* Line 1 -> YouTube Live (Y = 264) */}
          <ConnectorLine startX={540} startY={540} endX={1220} endY={264} delay={15} color="#EF4444" showPacket />
          {/* Line 2 -> Facebook Live (Y = 404) */}
          <ConnectorLine startX={540} startY={540} endX={1220} endY={404} delay={25} color="#3B82F6" showPacket />
          {/* Line 3 -> Twitch (Y = 544) */}
          <ConnectorLine startX={540} startY={540} endX={1220} endY={544} delay={35} color="#A855F7" showPacket />
          {/* Line 4 -> Custom RTMP / TikTok (Y = 684) */}
          <ConnectorLine startX={540} startY={540} endX={1220} endY={684} delay={45} color="#F59E0B" showPacket />

          {/* Destination Platform Cards on Right */}
          <div
            style={{
              position: "absolute",
              left: "1220px",
              top: "220px",
              display: "flex",
              flexDirection: "column",
              gap: "52px",
              width: "520px",
              zIndex: 20,
            }}
          >
            {/* Card 1: YouTube Live */}
            <div
              style={{
                position: "relative",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
                borderRadius: "18px",
                background: "rgba(30, 41, 59, 0.95)",
                border: "2.5px solid #EF4444",
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.25)",
              }}
            >
              {/* Input Docking Socket */}
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                  boxShadow: "0 0 16px #EF4444",
                  border: "2px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "10px" }}>
                <Youtube size={38} color="#EF4444" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>YouTube Live</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>1080p 60FPS • RTMP Auto</div>
                </div>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Card 2: Facebook Live */}
            <div
              style={{
                position: "relative",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
                borderRadius: "18px",
                background: "rgba(30, 41, 59, 0.95)",
                border: "2.5px solid #3B82F6",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#3B82F6",
                  boxShadow: "0 0 16px #3B82F6",
                  border: "2px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "10px" }}>
                <Facebook size={38} color="#3B82F6" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Facebook Live</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Stream Key Terintegrasi</div>
                </div>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Card 3: Twitch */}
            <div
              style={{
                position: "relative",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
                borderRadius: "18px",
                background: "rgba(30, 41, 59, 0.95)",
                border: "2.5px solid #A855F7",
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#A855F7",
                  boxShadow: "0 0 16px #A855F7",
                  border: "2px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "10px" }}>
                <Twitch size={38} color="#A855F7" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Twitch</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Ultra-Low Latency</div>
                </div>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Card 4: Custom RTMP / TikTok */}
            <div
              style={{
                position: "relative",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
                borderRadius: "18px",
                background: "rgba(30, 41, 59, 0.95)",
                border: "2.5px solid #F59E0B",
                boxShadow: "0 10px 30px rgba(245, 158, 11, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#F59E0B",
                  boxShadow: "0 0 16px #F59E0B",
                  border: "2px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "10px" }}>
                <Share2 size={38} color="#F59E0B" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Custom RTMP / TikTok</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Bebas Masukkan Server URL</div>
                </div>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4: 24/7 SCHEDULED STREAMING & TELEMETRY UI (Frames 620 - 810)       */}
      {/* ========================================================================= */}
      <Sequence from={620} durationInFrames={190}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Header */}
          <div style={{ marginTop: "40px", textAlign: "center", zIndex: 30 }}>
            <AnimatedBadge
              label="Fitur Unggulan #2 • Otomasi"
              delay={5}
              color="#10B981"
              bgColor="rgba(16, 185, 129, 0.15)"
            />
            <h2 style={{ fontSize: "42px", fontWeight: 900, color: "#FFFFFF", marginTop: "10px" }}>
              Penjadwalan 24 Jam Non-Stop & Dashboard Monitoring Real-Time
            </h2>
          </div>

          {/* 3 Floating Tech Highlights (Filling Space Gracefully) */}
          <div
            style={{
              display: "flex",
              gap: "28px",
              marginTop: "16px",
              width: "1640px",
              justifyContent: "space-between",
              zIndex: 30,
            }}
          >
            {/* Pill 1 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #10B981",
                borderRadius: "16px",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Calendar size={28} color="#10B981" />
              <div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFF" }}>Live 24/7 Otomatis</div>
                <div style={{ fontSize: "14px", color: "#A7F3D0" }}>Looping video & import Google Drive</div>
              </div>
            </div>

            {/* Pill 2 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "2px solid #38BDF8",
                borderRadius: "16px",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Cpu size={28} color="#38BDF8" />
              <div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFF" }}>Hemat Sumber Daya</div>
                <div style={{ fontSize: "14px", color: "#BAE6FD" }}>Cukup 1 Core CPU & 1GB RAM</div>
              </div>
            </div>

            {/* Pill 3 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "2px solid #F59E0B",
                borderRadius: "16px",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Activity size={28} color="#F59E0B" />
              <div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFF" }}>Telemetry Real-Time</div>
                <div style={{ fontSize: "14px", color: "#FDE68A" }}>Bitrate 6.000 Kbps & 60 FPS Stabil</div>
              </div>
            </div>
          </div>

          {/* Real App Window with Active Streams Highlight */}
          <div style={{ marginTop: "20px" }}>
            <StreamFlowAppWindow delay={10} highlightSection="streams" scale={0.92} />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 5: CALL TO ACTION & GITHUB (Frames 810 - 960 | 27s - 32s)            */}
      {/* ========================================================================= */}
      <Sequence from={810} durationInFrames={150}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* StreamFlow Bumper Logo */}
          <StreamFlowBumper delay={5} />

          <h1
            style={{
              fontSize: "58px",
              fontWeight: 900,
              marginTop: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Mulai Streaming Lebih Cerdas Hari Ini
          </h1>

          <p style={{ fontSize: "22px", color: "#94A3B8", marginTop: "8px", fontWeight: 600 }}>
            100% Gratis & Open-Source (MIT License) oleh Bang Tutorial
          </p>

          {/* GitHub CTA Button */}
          <div
            style={{
              marginTop: "24px",
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.4) 100%)",
              border: "3px solid #06B6D4",
              borderRadius: "24px",
              padding: "18px 52px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 10px 40px rgba(6, 182, 212, 0.4)",
            }}
          >
            <Github size={44} color="#FFFFFF" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#67E8F9", letterSpacing: "0.15em" }}>
                REPOSITORI RESMI GITHUB
              </div>
              <div style={{ fontSize: "30px", fontWeight: 900, color: "#FFFFFF" }}>
                github.com/bangtutorial/streamflow
              </div>
            </div>
          </div>

          {/* Quick Install 1-Command Hint */}
          <div
            style={{
              marginTop: "24px",
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              border: "1.5px dashed rgba(56, 189, 248, 0.4)",
              padding: "12px 32px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Zap size={20} color="#F59E0B" />
            <span style={{ color: "#E2E8F0", fontFamily: "monospace", fontSize: "17px", fontWeight: 600 }}>
              curl -o install.sh https://raw.githubusercontent.com/bangtutorial/streamflow/main/install.sh
            </span>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

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
import { StreamFlowLogo } from "../components/StreamFlowLogo";
import { AppleStyleText } from "../components/AppleStyleText";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { VoxAnnotation } from "../components/VoxAnnotation";
import { ConnectorLine } from "../components/ConnectorLine";
import {
  Laptop,
  AlertTriangle,
  Radio,
  Server,
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
} from "lucide-react";

export const StreamFlowPromo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle subtle master camera drift
  const masterZoom = interpolate(frame, [0, 960], [1, 1.05], {
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
      {/* Confident Tech Voiceover Audio */}
      <Audio src={staticFile("audio/streamflow-promo.mp3")} />

      {/* Cyber Grid Background lines */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Radial Lighting Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, rgba(7, 11, 19, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ========================================================================= */}
      {/* SCENE 1: THE PROBLEM / THE PAIN POINT (Frames 0 - 180 | 0s - 6s)           */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={180}>
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
              label="Masalah Umum Streamer"
              delay={5}
              color="#EF4444"
              bgColor="rgba(239, 68, 68, 0.15)"
            />
          </div>

          {/* Question Headline (Apple In-Place Reveal) */}
          <div style={{ position: "absolute", top: "140px", width: "100%" }}>
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
              marginTop: "110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Pulsing Red Warning Aura */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Laptop Box Container */}
            <div
              style={{
                width: "320px",
                height: "220px",
                backgroundColor: "#1E293B",
                border: "3px solid #EF4444",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.3)",
                zIndex: 10,
              }}
            >
              <Laptop size={68} color="#EF4444" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                  color: "#FCA5A5",
                  fontWeight: 800,
                  fontSize: "20px",
                }}
              >
                <AlertTriangle size={22} color="#EF4444" />
                CPU 99% • OVERHEAT
              </div>
            </div>

            {/* Annotations */}
            <VoxAnnotation
              label="Beban Sistem"
              value="KIPAS BISING & LAG"
              x={360}
              y={20}
              delay={35}
              accentColor="#EF4444"
            />
            <VoxAnnotation
              label="Kendala"
              value="BOROS KUOTA INTERNET"
              x={-280}
              y={100}
              delay={55}
              accentColor="#F59E0B"
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: INTRODUCING STREAMFLOW (Frames 180 - 390 | 6s - 13s)              */}
      {/* ========================================================================= */}
      <Sequence from={180} durationInFrames={210}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Solution Badge */}
          <div style={{ position: "absolute", top: "70px" }}>
            <AnimatedBadge
              label="Solusi Cerdas • Web-Based Streaming"
              delay={5}
              color="#06B6D4"
              bgColor="rgba(6, 182, 212, 0.15)"
            />
          </div>

          {/* Logo & Hero Title */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <StreamFlowLogo size={140} delay={8} />

            <h1
              style={{
                fontSize: "76px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}
            >
              StreamFlow
            </h1>

            <p style={{ fontSize: "26px", color: "#94A3B8", fontWeight: 600, margin: 0 }}>
              Web-Based Multi-Platform Streaming Platform by Bang Tutorial
            </p>

            {/* Feature Highlights Pills */}
            <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
              {[
                "🌐 Kontrol Penuh dari Browser",
                "⚡ Hemat Listrik & Kuota",
                "🖥️ Minimal 1 Core CPU & 1GB RAM",
              ].map((pill, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                    border: "1.5px solid rgba(6, 182, 212, 0.4)",
                    padding: "10px 24px",
                    borderRadius: "9999px",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#E2E8F0",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3: MULTI-PLATFORM RESTREAMING (Frames 390 - 600 | 13s - 20s)        */}
      {/* ========================================================================= */}
      <Sequence from={390} durationInFrames={210}>
        <AbsoluteFill>
          {/* Header Title */}
          <div style={{ position: "absolute", top: "60px", width: "100%", textAlign: "center" }}>
            <AnimatedBadge
              label="Fitur Utama #1"
              delay={5}
              color="#3B82F6"
              bgColor="rgba(59, 130, 246, 0.15)"
            />
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 900,
                color: "#FFFFFF",
                marginTop: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              1 Sumber Video • Siar Serentak ke Semua Platform
            </h2>
          </div>

          {/* Center Left: StreamFlow Source Node */}
          <div
            style={{
              position: "absolute",
              left: "140px",
              top: "430px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "32px 40px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(15, 23, 42, 0.95))",
              border: "3px solid #06B6D4",
              boxShadow: "0 0 50px rgba(6, 182, 212, 0.35)",
              zIndex: 20,
            }}
          >
            <Radio size={56} color="#06B6D4" />
            <div style={{ fontSize: "28px", fontWeight: 800, marginTop: "14px", color: "#FFF" }}>
              StreamFlow
            </div>
            <div style={{ fontSize: "16px", color: "#67E8F9", fontWeight: 600, marginTop: "4px" }}>
              VPS / Server Web
            </div>
            <div
              style={{
                marginTop: "12px",
                backgroundColor: "#0891B2",
                color: "#FFF",
                padding: "4px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              1X UPLOAD SAJA
            </div>
          </div>

          {/* Connecting Animated Beams */}
          <ConnectorLine startX={410} startY={540} endX={780} endY={270} delay={15} color="#EF4444" showPacket />
          <ConnectorLine startX={410} startY={540} endX={780} endY={450} delay={25} color="#3B82F6" showPacket />
          <ConnectorLine startX={410} startY={540} endX={780} endY={630} delay={35} color="#A855F7" showPacket />
          <ConnectorLine startX={410} startY={540} endX={780} endY={810} delay={45} color="#F59E0B" showPacket />

          {/* Right Destination Cards */}
          <div
            style={{
              position: "absolute",
              right: "140px",
              top: "220px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "480px",
              zIndex: 20,
            }}
          >
            {/* YouTube */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderRadius: "16px",
                background: "rgba(30, 41, 59, 0.9)",
                border: "2px solid #EF4444",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Youtube size={36} color="#EF4444" />
                <span style={{ fontSize: "22px", fontWeight: 800 }}>YouTube Live</span>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Facebook */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderRadius: "16px",
                background: "rgba(30, 41, 59, 0.9)",
                border: "2px solid #3B82F6",
                boxShadow: "0 8px 24px rgba(59, 130, 246, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Facebook size={36} color="#3B82F6" />
                <span style={{ fontSize: "22px", fontWeight: 800 }}>Facebook Live</span>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Twitch */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderRadius: "16px",
                background: "rgba(30, 41, 59, 0.9)",
                border: "2px solid #A855F7",
                boxShadow: "0 8px 24px rgba(168, 85, 247, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Twitch size={36} color="#A855F7" />
                <span style={{ fontSize: "22px", fontWeight: 800 }}>Twitch</span>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>

            {/* Custom RTMP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderRadius: "16px",
                background: "rgba(30, 41, 59, 0.9)",
                border: "2px solid #F59E0B",
                boxShadow: "0 8px 24px rgba(245, 158, 11, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Share2 size={36} color="#F59E0B" />
                <span style={{ fontSize: "22px", fontWeight: 800 }}>Custom RTMP / TikTok</span>
              </div>
              <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4: 24/7 SCHEDULED LIVE & MONITORING (Frames 600 - 810 | 20s - 27s)   */}
      {/* ========================================================================= */}
      <Sequence from={600} durationInFrames={210}>
        <AbsoluteFill>
          {/* Header */}
          <div style={{ position: "absolute", top: "60px", width: "100%", textAlign: "center" }}>
            <AnimatedBadge
              label="Fitur Unggulan #2"
              delay={5}
              color="#10B981"
              bgColor="rgba(16, 185, 129, 0.15)"
            />
            <h2 style={{ fontSize: "48px", fontWeight: 900, color: "#FFFFFF", marginTop: "12px" }}>
              Penjadwalan 24 Jam Non-Stop & Monitoring Real-Time
            </h2>
          </div>

          {/* 2 Split Feature Showcase Cards */}
          <div
            style={{
              position: "absolute",
              top: "230px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              padding: "0 100px",
            }}
          >
            {/* Card Left: Scheduled 24/7 Streaming */}
            <div
              style={{
                flex: 1,
                padding: "36px",
                borderRadius: "24px",
                background: "rgba(30, 41, 59, 0.8)",
                border: "2px solid #10B981",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Calendar size={42} color="#10B981" />
                <div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFF" }}>
                    Jadwal Live 24/7
                  </div>
                  <div style={{ fontSize: "16px", color: "#6EE7B7" }}>
                    Tinggalkan server bekerja otomatis
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#CBD5E1", fontSize: "18px" }}>
                  <CheckCircle2 size={20} color="#10B981" />
                  Playlist video berulang tanpa henti
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#CBD5E1", fontSize: "18px", marginTop: "10px" }}>
                  <CheckCircle2 size={20} color="#10B981" />
                  Import langsung dari Google Drive
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#CBD5E1", fontSize: "18px", marginTop: "10px" }}>
                  <CheckCircle2 size={20} color="#10B981" />
                  Laptop kamu bebas dimatikan kapan saja!
                </div>
              </div>
            </div>

            {/* Card Right: Real-Time Telemetry Dashboard */}
            <div
              style={{
                flex: 1,
                padding: "36px",
                borderRadius: "24px",
                background: "rgba(30, 41, 59, 0.8)",
                border: "2px solid #06B6D4",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Activity size={42} color="#06B6D4" />
                <div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFF" }}>
                    Dashboard Monitoring
                  </div>
                  <div style={{ fontSize: "16px", color: "#67E8F9" }}>
                    Pantau kesehatan stream real-time
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#E2E8F0", fontSize: "18px" }}>
                  <span>Status Stream:</span>
                  <span style={{ color: "#22C55E", fontWeight: 800 }}>ACTIVE • EXCELLENT</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#E2E8F0", fontSize: "18px", marginTop: "10px" }}>
                  <span>Resolusi & FPS:</span>
                  <span style={{ color: "#38BDF8", fontWeight: 700 }}>1080p @ 60 FPS</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#E2E8F0", fontSize: "18px", marginTop: "10px" }}>
                  <span>Bitrate:</span>
                  <span style={{ color: "#FBBF24", fontWeight: 700 }}>6.000 Kbps (Stabil)</span>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 5: CALL TO ACTION & GITHUB REPO (Frames 810 - 960 | 27s - 32s)       */}
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
          {/* StreamFlow Hero Logo */}
          <StreamFlowLogo size={120} delay={5} />

          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              marginTop: "16px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Mulai Streaming Lebih Cerdas
          </h1>

          <p style={{ fontSize: "24px", color: "#94A3B8", marginTop: "8px", fontWeight: 600 }}>
            100% Gratis & Open-Source (MIT License)
          </p>

          {/* GitHub CTA Button */}
          <div
            style={{
              marginTop: "24px",
              backgroundColor: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
              border: "3px solid #06B6D4",
              borderRadius: "20px",
              padding: "20px 48px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 10px 40px rgba(6, 182, 212, 0.4)",
            }}
          >
            <Github size={40} color="#FFFFFF" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#67E8F9", letterSpacing: "0.1em" }}>
                KUNJUNGI REPOSITORI GITHUB
              </div>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#FFFFFF" }}>
                github.com/bangtutorial/streamflow
              </div>
            </div>
          </div>

          {/* Quick Install Command Hint */}
          <div
            style={{
              marginTop: "24px",
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px dashed rgba(255, 255, 255, 0.2)",
              padding: "10px 24px",
              borderRadius: "12px",
              color: "#94A3B8",
              fontFamily: "monospace",
              fontSize: "16px",
            }}
          >
            Instalasi 1-Klik Otomatis via Terminal Server
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

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
import { StreamFlowBumper } from "../components/StreamFlowBumper";
import { StreamFlowBrandLockup } from "../components/StreamFlowBrandLockup";
import { StreamFlowIcon } from "../components/StreamFlowIcon";
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
  Flame,
  Cloud,
  Check,
  Server,
  HardDrive,
  Users,
  Gauge,
  Wind,
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
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
        transform: `scale(${masterZoom})`,
      }}
    >
      {/* Audio Voiceover */}
      <Audio src={staticFile("audio/streamflow-promo.mp3")} />

      {/* High-Tech Cyber Grid Lines in Background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Dynamic Ambient Radiant Glow */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1500px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(0, 102, 255, 0.16) 0%, rgba(56, 189, 248, 0.08) 40%, rgba(7, 11, 19, 0) 70%)",
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
          <StreamFlowBumper delay={4} />
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
              marginTop: "110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Pulsing Red Warning Glow */}
            <div
              style={{
                position: "absolute",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, transparent 70%)",
                filter: "blur(35px)",
              }}
            />

            {/* Laptop Warning Card with Realistic Telemetry */}
            <div
              style={{
                width: "480px",
                backgroundColor: "#0F172A",
                border: "3px solid #EF4444",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 0 60px rgba(239, 68, 68, 0.4)",
                zIndex: 10,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Laptop size={76} color="#EF4444" />
                <Flame size={50} color="#F59E0B" />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "16px",
                  color: "#FCA5A5",
                  fontWeight: 900,
                  fontSize: "24px",
                  letterSpacing: "0.05em",
                }}
              >
                <AlertTriangle size={26} color="#EF4444" />
                CPU 99% • OVERHEAT
              </div>

              {/* Progress bar maxed out */}
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  borderRadius: "9999px",
                  marginTop: "14px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "99%",
                    height: "100%",
                    backgroundColor: "#EF4444",
                    boxShadow: "0 0 10px #EF4444",
                  }}
                />
              </div>

              {/* Thermal & Fan details */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "16px",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                <span style={{ color: "#F59E0B", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Gauge size={16} /> SUHU: 98°C
                </span>
                <span style={{ color: "#EF4444", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Wind size={16} /> KIPAS: 6.500 RPM (MAX)
                </span>
              </div>
            </div>

            {/* Vox Callout Annotations */}
            <VoxAnnotation
              label="Hardware Laptop"
              value="KIPAS BISING & FRAME DROPS"
              x={480}
              y={25}
              delay={25}
              accentColor="#EF4444"
            />
            <VoxAnnotation
              label="Koneksi Internet"
              value="BANDWIDTH 4X JEBOL"
              x={-380}
              y={100}
              delay={45}
              accentColor="#F59E0B"
            />
          </div>

          {/* Bottom Warning Fact */}
          <div
            style={{
              position: "absolute",
              bottom: "70px",
              backgroundColor: "rgba(239, 68, 68, 0.12)",
              border: "1.5px solid rgba(239, 68, 68, 0.35)",
              borderRadius: "9999px",
              padding: "10px 32px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FCA5A5",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>❌</span>
            <span>Laptop biasa tidak kuat jika harus encode video ke 4 platform sekaligus!</span>
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
          {/* Header Title with Official Vector Lockup */}
          <div
            style={{
              marginTop: "45px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              zIndex: 30,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <StreamFlowBrandLockup width={340} glow />
              <span
                style={{
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  border: "1.5px solid #38BDF8",
                  padding: "5px 18px",
                  borderRadius: "9999px",
                  color: "#38BDF8",
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                }}
              >
                WEB-BASED PLATFORM
              </span>
            </div>
            <h2 style={{ fontSize: "38px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Live Streaming Modern Langsung dari Browser Web
            </h2>
          </div>

          {/* Real StreamFlow App Window Mockup */}
          <div style={{ marginTop: "24px" }}>
            <StreamFlowAppWindow
              delay={5}
              mode="dashboard"
              highlightSection="all"
              scale={0.88}
              tiltX={3}
              tiltY={-1}
            />
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
              "🖥️ Spesifikasi Minimal: Cukup 1 Core CPU & 1GB RAM",
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.92)",
                  border: "1.5px solid rgba(56, 189, 248, 0.45)",
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
          <div style={{ position: "absolute", top: "45px", width: "100%", textAlign: "center", zIndex: 30 }}>
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

          {/* Source Hub Node: Authentic StreamFlow Server Card on Left */}
          <div
            style={{
              position: "absolute",
              left: "140px",
              top: "210px",
              width: "420px",
              height: "500px",
              borderRadius: "24px",
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(7, 11, 19, 0.98))",
              border: "3px solid #0284C7",
              boxShadow: "0 0 60px rgba(2, 132, 199, 0.4), inset 0 0 30px rgba(56, 189, 248, 0.1)",
              display: "flex",
              flexDirection: "column",
              padding: "32px 28px",
              zIndex: 20,
              boxSizing: "border-box",
            }}
          >
            {/* Header: StreamFlow Vector Mark + Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <StreamFlowIcon size={56} glow />
              <div>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#FFFFFF" }}>StreamFlow Core</div>
                <div style={{ fontSize: "13px", color: "#67E8F9", fontWeight: 700 }}>
                  VPS / Ubuntu Server • Web Engine
                </div>
              </div>
            </div>

            {/* Server Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                border: "1.5px solid #22C55E",
                borderRadius: "9999px",
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: 800,
                color: "#4ADE80",
                width: "fit-content",
                marginBottom: "20px",
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
              ACTIVE STREAMING ENGINE
            </div>

            {/* Telemetry Metric Cards Inside Server */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
              <div
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.7)",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>SUMBER VIDEO INTI</div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#FFFFFF", marginTop: "2px" }}>
                  1X Stream (1080p @ 60 FPS)
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.7)",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>BANDWIDTH INTERNET KAMU</div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#38BDF8", marginTop: "2px" }}>
                  Hanya 8.45 Mbps (Hemat 75%)
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.7)",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>BEBAN HARDWARE (CPU)</div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#4ADE80", marginTop: "2px" }}>
                  2% CPU • Laptop Dingin Total
                </div>
              </div>
            </div>

            {/* Glowing Output Socket on Right Edge */}
            <div
              style={{
                position: "absolute",
                right: "-12px",
                top: "240px",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#0284C7",
                boxShadow: "0 0 25px #38BDF8, 0 0 10px #FFFFFF",
                border: "3.5px solid #FFFFFF",
              }}
            />
          </div>

          {/* EXACT CONNECTING LINES FROM SOURCE (560, 450) INTO DESTINATION CARDS (1180, Y) */}
          <ConnectorLine startX={560} startY={450} endX={1180} endY={234} delay={10} color="#EF4444" showPacket />
          <ConnectorLine startX={560} startY={450} endX={1180} endY={354} delay={18} color="#3B82F6" showPacket />
          <ConnectorLine startX={560} startY={450} endX={1180} endY={474} delay={26} color="#A855F7" showPacket />
          <ConnectorLine startX={560} startY={450} endX={1180} endY={594} delay={34} color="#F59E0B" showPacket />

          {/* Destination Platform Cards on Right */}
          <div
            style={{
              position: "absolute",
              left: "1180px",
              top: "190px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "580px",
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
                background: "rgba(15, 23, 42, 0.96)",
                border: "2.5px solid #EF4444",
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
              }}
            >
              {/* Input Docking Socket */}
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                  boxShadow: "0 0 16px #EF4444",
                  border: "2.5px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "12px" }}>
                <Youtube size={38} color="#EF4444" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>YouTube Live</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>1080p 60FPS • RTMP Auto Ingest</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>1.4k penonton</div>
              </div>
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
                background: "rgba(15, 23, 42, 0.96)",
                border: "2.5px solid #3B82F6",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#3B82F6",
                  boxShadow: "0 0 16px #3B82F6",
                  border: "2.5px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "12px" }}>
                <Facebook size={38} color="#3B82F6" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Facebook Live</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Stream Key Terintegrasi & Otomatis</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>850 penonton</div>
              </div>
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
                background: "rgba(15, 23, 42, 0.96)",
                border: "2.5px solid #A855F7",
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#A855F7",
                  boxShadow: "0 0 16px #A855F7",
                  border: "2.5px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "12px" }}>
                <Twitch size={38} color="#A855F7" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Twitch</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Low Latency Gaming Stream</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>2.1k penonton</div>
              </div>
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
                background: "rgba(15, 23, 42, 0.96)",
                border: "2.5px solid #F59E0B",
                boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "34px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#F59E0B",
                  boxShadow: "0 0 16px #F59E0B",
                  border: "2.5px solid #FFF",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: "12px" }}>
                <Share2 size={38} color="#F59E0B" />
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 800 }}>Custom RTMP / TikTok</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Bebas Masukkan Server URL Manapun</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#22C55E", fontWeight: 800, fontSize: "16px" }}>● LIVE</span>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>3.5k penonton</div>
              </div>
            </div>
          </div>

          {/* Bottom Value Proof Banner (Fills bottom space with high authority) */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1620px",
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              border: "2px solid rgba(56, 189, 248, 0.4)",
              borderRadius: "18px",
              padding: "14px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.7)",
              zIndex: 30,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Zap size={28} color="#38BDF8" />
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF" }}>
                1x Upload ke StreamFlow ➔ Otomatis disiarkan serentak ke 4 platform!
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                border: "1px solid #22C55E",
                padding: "6px 20px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 800,
                color: "#4ADE80",
              }}
            >
              HEMAT 75% KUOTA INTERNET & BEBAN LAPTOP 0%
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
          <div style={{ marginTop: "35px", textAlign: "center", zIndex: 30 }}>
            <AnimatedBadge
              label="Fitur Unggulan #2 • Otomasi & Telemetry"
              delay={5}
              color="#10B981"
              bgColor="rgba(16, 185, 129, 0.15)"
            />
            <h2 style={{ fontSize: "40px", fontWeight: 900, color: "#FFFFFF", marginTop: "8px" }}>
              Penjadwalan 24 Jam Non-Stop & Dashboard Monitoring Real-Time
            </h2>
          </div>

          {/* Central Interactive UI Workspace Mockup */}
          <div style={{ marginTop: "18px", position: "relative" }}>
            <StreamFlowAppWindow
              delay={8}
              mode="dashboard"
              highlightSection="all"
              scale={0.80}
              showCursor
            />

            {/* Left Floating Feature Card: 24/7 Automation */}
            <div
              style={{
                position: "absolute",
                left: "-160px",
                top: "120px",
                width: "350px",
                backgroundColor: "rgba(15, 23, 42, 0.96)",
                border: "2px solid #10B981",
                borderRadius: "20px",
                padding: "22px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.25)",
                zIndex: 40,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    padding: "10px",
                    borderRadius: "12px",
                  }}
                >
                  <Calendar size={28} color="#10B981" />
                </div>
                <div>
                  <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFF" }}>Live 24/7 Otomatis</div>
                  <div style={{ fontSize: "12px", color: "#6EE7B7" }}>Server Bekerja Tanpa Henti</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#10B981" />
                  <span>Looping playlist video otomatis</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#10B981" />
                  <span>Import dari Google Drive & Cloud</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#10B981" />
                  <span>Laptop bebas dimatikan kapan saja!</span>
                </div>
              </div>
            </div>

            {/* Right Floating Feature Card: Real-Time Telemetry */}
            <div
              style={{
                position: "absolute",
                right: "-160px",
                top: "120px",
                width: "350px",
                backgroundColor: "rgba(15, 23, 42, 0.96)",
                border: "2px solid #38BDF8",
                borderRadius: "20px",
                padding: "22px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.25)",
                zIndex: 40,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    padding: "10px",
                    borderRadius: "12px",
                  }}
                >
                  <Activity size={28} color="#38BDF8" />
                </div>
                <div>
                  <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFF" }}>Telemetry Real-Time</div>
                  <div style={{ fontSize: "12px", color: "#BAE6FD" }}>Live System Diagnostics</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#38BDF8" />
                  <span>CPU Usage: Cukup 2% (Super Ringan)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#38BDF8" />
                  <span>Memory RAM: 6GB Efisien & Stabil</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#38BDF8" />
                  <span>Bitrate 6.000 Kbps & 60 FPS Konsisten</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Badges */}
          <div
            style={{
              position: "absolute",
              bottom: "35px",
              display: "flex",
              gap: "20px",
              zIndex: 30,
            }}
          >
            {[
              "☁️ Google Drive & Cloud Import",
              "🔄 Looping Playlist Tanpa Henti",
              "🔋 Laptop Aman Bebas Dimatikan",
              "📊 Telemetry Real-Time",
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  padding: "8px 22px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#D1FAE5",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
                }}
              >
                {text}
              </div>
            ))}
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
          {/* Authentic Vector Brand Lockup with Ambient Glow */}
          <div style={{ transform: "scale(1.2)", marginBottom: "16px" }}>
            <StreamFlowBrandLockup width={440} glow />
          </div>

          <h1
            style={{
              fontSize: "54px",
              fontWeight: 900,
              marginTop: "20px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Mulai Streaming Lebih Cerdas Hari Ini
          </h1>

          <p style={{ fontSize: "22px", color: "#94A3B8", marginTop: "6px", fontWeight: 600 }}>
            100% Gratis & Open-Source (MIT License) oleh Bang Tutorial
          </p>

          {/* GitHub CTA Button with Stars & Badges */}
          <div
            style={{
              marginTop: "24px",
              background: "linear-gradient(135deg, rgba(2, 132, 199, 0.3) 0%, rgba(59, 130, 246, 0.35) 100%)",
              border: "3px solid #0284C7",
              borderRadius: "24px",
              padding: "16px 48px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              boxShadow: "0 10px 40px rgba(2, 132, 199, 0.45)",
            }}
          >
            <Github size={46} color="#FFFFFF" />
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "4px" }}>
                <span
                  style={{
                    backgroundColor: "#38BDF8",
                    color: "#070B13",
                    padding: "2px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: 900,
                  }}
                >
                  v2.2.2
                </span>
                <span style={{ fontSize: "14px", fontWeight: 800, color: "#FDE047" }}>⭐ 408+ STARS</span>
                <span style={{ fontSize: "14px", fontWeight: 800, color: "#94A3B8" }}>• 288 FORKS</span>
              </div>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#FFFFFF" }}>
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
              gap: "14px",
            }}
          >
            <Zap size={20} color="#F59E0B" />
            <span style={{ color: "#E2E8F0", fontFamily: "monospace", fontSize: "17px", fontWeight: 600 }}>
              curl -o install.sh https://raw.githubusercontent.com/bangtutorial/streamflow/main/install.sh
            </span>
            <span
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                color: "#38BDF8",
                fontSize: "12px",
                fontWeight: 800,
                padding: "3px 10px",
                borderRadius: "6px",
              }}
            >
              1-KLIK INSTALL
            </span>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

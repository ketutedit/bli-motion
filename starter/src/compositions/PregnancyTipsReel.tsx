import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AppleStyleText } from "../components/AppleStyleText";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { PregnancyAnatomyIllustration } from "../components/PregnancyAnatomyIllustration";
import { PregnantMomCharacter } from "../components/PregnantMomCharacter";
import {
  Heart,
  Baby,
  Activity,
  AlertTriangle,
  Stethoscope,
  Share2,
  CheckCircle2,
  ShieldAlert,
  Footprints,
  Sparkles,
  Check,
  Timer,
  Compass,
  Repeat,
  Wind,
  PhoneCall,
  Info,
  XCircle,
  Clock,
  ShieldCheck,
  HelpCircle,
  Award,
} from "lucide-react";

export const PregnancyTipsReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle vertical camera drift for reels format
  const cameraZoom = interpolate(frame, [0, 2400], [1, 1.03], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0A0C16 0%, #151324 50%, #0A0C16 100%)",
        color: "#FFFFFF",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* Soothing Female AI Voiceover */}
      <Audio src={staticFile("audio/tips-bumil-trimester3.mp3")} />

      {/* Ambient Floral & Pastel Glows in Background */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "980px",
          height: "980px",
          background:
            "radial-gradient(circle, rgba(251, 113, 133, 0.18) 0%, rgba(167, 139, 250, 0.09) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Channel Header Badge (Fixed across all scenes) */}
      <div
        style={{
          position: "absolute",
          top: "55px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(30, 27, 46, 0.92)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid #FB7185",
            borderRadius: "9999px",
            padding: "10px 28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
          }}
        >
          <Baby size={22} color="#FB7185" />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 800,
              color: "#FDE2E4",
              letterSpacing: "0.06em",
            }}
          >
            EDUKASI IBU & JANIN • TRIMESTER 3
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SCENE 1: HOOK & POSISI KEPALA BAYI (Frames 0 - 390 | 0s - 13s)             */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={390}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Headline (Apple In-Place Reveal) */}
          <div style={{ marginTop: "135px", width: "100%", padding: "0 40px" }}>
            <AppleStyleText
              text="Menjelang Lahir, Di Mana Posisi Kepala Bayi?"
              highlightWord="Kepala"
              highlightGradient="linear-gradient(135deg, #FB7185 0%, #F43F5E 100%)"
              fontSize={46}
              delay={10}
              staggerFrames={3}
            />
          </div>

          {/* Sub-beat 1 (Frames 0 - 180): Pregnant Mom Cradling Bump + Complete Info */}
          {frame < 180 && (
            <>
              {/* Rigged Mom Character */}
              <div style={{ position: "absolute", top: "250px" }}>
                <PregnantMomCharacter action="cradling" scale={1.42} />
              </div>

              {/* Status Banner */}
              <div
                style={{
                  position: "absolute",
                  top: "980px",
                  backgroundColor: "rgba(251, 113, 133, 0.16)",
                  border: "2px solid #FB7185",
                  padding: "10px 32px",
                  borderRadius: "9999px",
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#FDE2E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Clock size={20} color="#FB7185" />
                <span>Trimester 3 • Sekitar Minggu ke-36</span>
              </div>

              {/* Metric Stat Cards in Mid-Canvas */}
              <div
                style={{
                  position: "absolute",
                  top: "1070px",
                  width: "920px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(52, 211, 153, 0.12)",
                    border: "2px solid #34D399",
                    borderRadius: "22px",
                    padding: "20px 24px",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div style={{ fontSize: "14px", color: "#6EE7B7", fontWeight: 800 }}>SEBAGIAN BESAR</div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#34D399", marginTop: "4px" }}>
                    ~96% di Bawah
                  </div>
                  <div style={{ fontSize: "16px", color: "#E2E8F0", marginTop: "4px" }}>
                    Posisi kepala siap memasuki rongga panggul
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(244, 63, 94, 0.12)",
                    border: "2px solid #FB7185",
                    borderRadius: "22px",
                    padding: "20px 24px",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div style={{ fontSize: "14px", color: "#FDA4AF", fontWeight: 800 }}>HANYA SEDIKIT</div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#FB7185", marginTop: "4px" }}>
                    ~4% Sungsang
                  </div>
                  <div style={{ fontSize: "16px", color: "#E2E8F0", marginTop: "4px" }}>
                    Posisi bokong atau kaki menghadap jalan lahir
                  </div>
                </div>
              </div>

              {/* Comprehensive Overview Card filling lower canvas down to bottom */}
              <div
                style={{
                  position: "absolute",
                  top: "1310px",
                  bottom: "140px",
                  width: "920px",
                  backgroundColor: "rgba(30, 27, 46, 0.96)",
                  border: "2px solid #A78BFA",
                  borderRadius: "26px",
                  padding: "26px 34px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#C4B5FD" }}>
                  💡 Anatomi Alami Persalinan Normal:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Check size={22} color="#34D399" />
                    <span>Kepala janin umumnya mulai turun dan mengunci ke panggul (PAP) di minggu 36</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Check size={22} color="#34D399" />
                    <span>Ruang rahim semakin padat sehingga posisi ini biasanya bertahan hingga bersalin</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Check size={22} color="#34D399" />
                    <span>Bergerak aktif membantu menjaga kelonggaran sendi panggul secara alami</span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(167, 139, 250, 0.15)",
                    borderRadius: "14px",
                    padding: "10px 18px",
                    fontSize: "15px",
                    color: "#DDD6FE",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Sparkles size={18} color="#FBBF24" />
                  <span>Kabar baiknya: Sebagian besar janin sudah mapan di posisi normal tanpa perlu dipaksa!</span>
                </div>
              </div>
            </>
          )}

          {/* Sub-beat 2 (Frames 180 - 390): Anatomical Comparison Womb Illustration */}
          {frame >= 180 && (
            <>
              <div style={{ position: "absolute", top: "250px" }}>
                <PregnancyAnatomyIllustration positionType="cephalic" scale={1.35} />
              </div>

              {/* Medical Statistics Card filling lower canvas */}
              <div
                style={{
                  position: "absolute",
                  top: "1200px",
                  bottom: "140px",
                  width: "920px",
                  backgroundColor: "rgba(30, 27, 46, 0.96)",
                  border: "2px solid #34D399",
                  borderRadius: "26px",
                  padding: "30px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", color: "#A7F3D0", fontWeight: 700 }}>
                      SEKITAR MINGGU KE-36
                    </div>
                    <div style={{ fontSize: "36px", fontWeight: 900, color: "#34D399", marginTop: "4px" }}>
                      ~96% Kepala di Bawah
                    </div>
                    <div style={{ fontSize: "16px", color: "#E2E8F0", marginTop: "4px" }}>
                      Posisi Sefalik (Siap Lahir Normal)
                    </div>
                  </div>

                  <div style={{ width: "2px", height: "80px", backgroundColor: "rgba(255, 255, 255, 0.15)" }} />

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", color: "#FCA5A5", fontWeight: 700 }}>
                      SEBAGIAN KECIL
                    </div>
                    <div style={{ fontSize: "36px", fontWeight: 900, color: "#FB7185", marginTop: "4px" }}>
                      ~4% Tetap Sungsang
                    </div>
                    <div style={{ fontSize: "16px", color: "#E2E8F0", marginTop: "4px" }}>
                      Bokong / Kaki di Bawah
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(52, 211, 153, 0.1)",
                    border: "1.5px solid #34D399",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    fontSize: "17px",
                    color: "#D1FAE5",
                    textAlign: "center",
                  }}
                >
                  💡 <strong>Catatan Dokter:</strong> Posisi kepala di bawah adalah posisi teraman untuk memfasilitasi pembukaan jalan lahir secara bertahap.
                </div>
              </div>
            </>
          )}
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: FACT-CHECK & TUJUAN GERAKAN (Frames 390 - 660 | 13s - 22s)        */}
      {/* ========================================================================= */}
      <Sequence from={390} durationInFrames={270}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "135px", textAlign: "center", padding: "0 40px" }}>
            <div
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1.5px solid #F59E0B",
                color: "#FBBF24",
                fontSize: "18px",
                fontWeight: 800,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "10px",
              }}
            >
              FAKTA ILMIAH & MEDIS 💡
            </div>
            <h1
              style={{
                fontSize: "44px",
                fontWeight: 900,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Belum Ada Gerakan di Rumah yang
              <br />
              <span style={{ color: "#F59E0B" }}>Terbukti Memutar Bayi</span>
            </h1>
          </div>

          {/* Myth vs Fact Cards in upper center */}
          <div
            style={{
              marginTop: "24px",
              width: "920px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* Card 1: Myth */}
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "2px solid #EF4444",
                borderRadius: "20px",
                padding: "18px 26px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <XCircle size={38} color="#EF4444" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#FCA5A5" }}>MITOS POPULER</div>
                <div style={{ fontSize: "19px", fontWeight: 700, color: "#FFFFFF", marginTop: "2px" }}>
                  Ada senam ajaib yang langsung 100% memutar kepala bayi sungsang
                </div>
              </div>
            </div>

            {/* Card 2: Science Fact */}
            <div
              style={{
                backgroundColor: "rgba(52, 211, 153, 0.12)",
                border: "2px solid #34D399",
                borderRadius: "20px",
                padding: "18px 26px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <CheckCircle2 size={38} color="#34D399" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#6EE7B7" }}>FAKTA MEDIS</div>
                <div style={{ fontSize: "19px", fontWeight: 700, color: "#FFFFFF", marginTop: "2px" }}>
                  Bergerak aktif & aman melenturkan panggul agar tubuh siap normal
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Character in Center */}
          <div style={{ position: "absolute", top: "510px" }}>
            <PregnantMomCharacter action="cradling" scale={1.22} />
          </div>

          {/* 4 Scientific Benefits Card filling lower canvas down to bottom */}
          <div
            style={{
              position: "absolute",
              top: "1210px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2px solid #FB7185",
              borderRadius: "26px",
              padding: "26px 34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
            }}
          >
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#FB7185" }}>
              ✨ Mengapa Tetap Sangat Disarankan Aktif Bergerak?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Melonggarkan ligamen dan sendi panggul untuk memperluas ruang lahir</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Memanfaatkan gaya gravitasi alami agar kepala janin turun lebih stabil</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Meningkatkan kelenturan otot paha, pinggul, dan pernapasan persalinan</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Mengurangi keluhan pegal punggung dan nyeri pinggang bawah trimester 3</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(251, 113, 133, 0.12)",
                borderRadius: "14px",
                padding: "10px 18px",
                fontSize: "15px",
                color: "#FDE2E4",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Award size={18} color="#FB7185" />
              <span>Kuncinya adalah keamanan, kenyamanan ibu, dan konsistensi setiap hari.</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3A: GERAKAN 1 - JALAN KAKI (Frames 660 - 960 | 22s - 32s)            */}
      {/* ========================================================================= */}
      <Sequence from={660} durationInFrames={300}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "135px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(52, 211, 153, 0.15)",
                border: "2px solid #34D399",
                color: "#6EE7B7",
                fontSize: "18px",
                fontWeight: 900,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              TIPS GERAKAN #1 DARI 4
            </div>
            <h1 style={{ fontSize: "52px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Jalan Kaki Santai 🚶‍♀️
            </h1>
          </div>

          {/* Context Props: Pedometer & Pace Badges */}
          <div
            style={{
              position: "absolute",
              top: "265px",
              display: "flex",
              gap: "16px",
              zIndex: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #34D399",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#6EE7B7",
              }}
            >
              <Timer size={20} color="#34D399" />
              Target 30 Menit / Hari
            </div>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #34D399",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#6EE7B7",
              }}
            >
              <Footprints size={20} color="#34D399" />
              5 Hari Seminggu
            </div>
          </div>

          {/* Animated Rigged Mom Walking Character */}
          <div style={{ position: "absolute", top: "320px" }}>
            <PregnantMomCharacter action="walking" scale={1.46} />
          </div>

          {/* Key Pelvic Benefit Callout Banner */}
          <div
            style={{
              position: "absolute",
              top: "1020px",
              width: "920px",
              backgroundColor: "rgba(52, 211, 153, 0.15)",
              border: "1.5px solid #34D399",
              borderRadius: "18px",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Sparkles size={22} color="#34D399" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#E2E8F0" }}>
              <strong style={{ color: "#34D399" }}>Manfaat Panggul:</strong> Gravitasi ritmik membantu kepala
              janin masuk dan menetap stabil di pintu atas panggul (PAP).
            </span>
          </div>

          {/* Action Instruction & Checklist Card filling canvas down to bottom */}
          <div
            style={{
              position: "absolute",
              top: "1150px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2.5px solid #34D399",
              borderRadius: "26px",
              padding: "26px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(52, 211, 153, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#34D399" }}>
                Panduan Jalan Kaki yang Aman
              </div>
              <div
                style={{
                  backgroundColor: "rgba(52, 211, 153, 0.2)",
                  color: "#6EE7B7",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Rutin & Konsisten
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Gunakan sepatu kets empuk dengan bantalan tumit penyerap benturan</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Pilih jalur datar di pagi atau sore hari yang teduh dan sejuk</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Jalan santai saja ya Bun, jangan sampai terengah-engah atau ngos-ngosan</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#34D399" />
                <span>Bawa air minum untuk menjaga hidrasi dan istirahat bila terasa lelah</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(52, 211, 153, 0.1)",
                borderRadius: "14px",
                padding: "10px 18px",
                fontSize: "15px",
                color: "#A7F3D0",
              }}
            >
              ⏱️ Target: 30 menit per hari, dapat dibagi menjadi 2 sesi (15 menit pagi & 15 menit sore).
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3B: GERAKAN 2 - DUDUK DI GYMBALL (Frames 960 - 1260 | 32s - 42s)     */}
      {/* ========================================================================= */}
      <Sequence from={960} durationInFrames={300}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "135px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "2px solid #38BDF8",
                color: "#7DD3FC",
                fontSize: "18px",
                fontWeight: 900,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              TIPS GERAKAN #2 DARI 4
            </div>
            <h1 style={{ fontSize: "50px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Duduk di Bola Persalinan 🧘‍♀️
            </h1>
          </div>

          {/* Context Props: Figure 8 & Flexibility Badge */}
          <div
            style={{
              position: "absolute",
              top: "265px",
              display: "flex",
              gap: "16px",
              zIndex: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #38BDF8",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#7DD3FC",
              }}
            >
              <Compass size={20} color="#38BDF8" />
              Putaran Panggul Angka 8
            </div>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #38BDF8",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#7DD3FC",
              }}
            >
              <Sparkles size={20} color="#38BDF8" />
              Kendurkan Sendi Panggul
            </div>
          </div>

          {/* Animated Rigged Mom Gymball Character */}
          <div style={{ position: "absolute", top: "320px" }}>
            <PregnantMomCharacter action="gymball" scale={1.46} />
          </div>

          {/* Key Pelvic Benefit Callout Banner */}
          <div
            style={{
              position: "absolute",
              top: "1020px",
              width: "920px",
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "1.5px solid #38BDF8",
              borderRadius: "18px",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Sparkles size={22} color="#38BDF8" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#E2E8F0" }}>
              <strong style={{ color: "#38BDF8" }}>Manfaat Panggul:</strong> Goyangan melingkar membuka diameter
              panggul & meredakan tekanan berat di tulang ekor.
            </span>
          </div>

          {/* Action Instruction & Checklist Card filling canvas down to bottom */}
          <div
            style={{
              position: "absolute",
              top: "1150px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2.5px solid #38BDF8",
              borderRadius: "26px",
              padding: "26px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#38BDF8" }}>
                Panduan Menggunakan Gymball
              </div>
              <div
                style={{
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: "#7DD3FC",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Goyang Perlahan
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#38BDF8" />
                <span>Pijakkan kedua telapak kaki rata dan kokoh selebar panggul di lantai</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#38BDF8" />
                <span>Pastikan panggul sedikit lebih tinggi dari lutut membentuk sudut 90°</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#38BDF8" />
                <span>Putar panggul melingkar searah dan berlawanan jarum jam atau pola angka 8</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#38BDF8" />
                <span>Dapat dilakukan saat santai menonton TV atau mendengarkan musik selama 15-20 menit</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                borderRadius: "14px",
                padding: "10px 18px",
                fontSize: "15px",
                color: "#BAE6FD",
              }}
            >
              🛡️ Tips Aman: Letakkan gymball di atas karpet antiselip dan dekat dinding bila butuh pegangan.
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4A: GERAKAN 3 - SQUAT BERPEGANGAN (Frames 1260 - 1470 | 42s - 49s)   */}
      {/* ========================================================================= */}
      <Sequence from={1260} durationInFrames={210}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "135px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "2px solid #F59E0B",
                color: "#FCD34D",
                fontSize: "18px",
                fontWeight: 900,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              TIPS GERAKAN #3 DARI 4
            </div>
            <h1 style={{ fontSize: "50px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Squat Berpegangan 🧱
            </h1>
          </div>

          {/* Context Props: Repetition & Safety Badge */}
          <div
            style={{
              position: "absolute",
              top: "265px",
              display: "flex",
              gap: "16px",
              zIndex: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #F59E0B",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#FCD34D",
              }}
            >
              <Repeat size={20} color="#F59E0B" />
              8 - 12 Repetisi Perlahan
            </div>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #F59E0B",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#FCD34D",
              }}
            >
              <ShieldAlert size={20} color="#F59E0B" />
              Wajib Berpegangan Kuat
            </div>
          </div>

          {/* Animated Rigged Mom Squat Character */}
          <div style={{ position: "absolute", top: "320px" }}>
            <PregnantMomCharacter action="squatting" scale={1.44} />
          </div>

          {/* Key Pelvic Benefit Callout Banner */}
          <div
            style={{
              position: "absolute",
              top: "1020px",
              width: "920px",
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "1.5px solid #F59E0B",
              borderRadius: "18px",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Sparkles size={22} color="#F59E0B" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#E2E8F0" }}>
              <strong style={{ color: "#F59E0B" }}>Manfaat Panggul:</strong> Membuka diameter rongga panggul bawah
              hingga 20-30% lebih lapang & melatih kekuatan dasar panggul.
            </span>
          </div>

          {/* Action Instruction & Checklist Card filling canvas down to bottom */}
          <div
            style={{
              position: "absolute",
              top: "1150px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2.5px solid #F59E0B",
              borderRadius: "26px",
              padding: "26px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#F59E0B" }}>
                Panduan Squat Aman Trimester 3
              </div>
              <div
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                  color: "#FCD34D",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Buka Panggul Bawah
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#F59E0B" />
                <span>Sandarkan punggung ke tembok atau pegang kedua tangan pendamping / suami</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#F59E0B" />
                <span>Buka kaki sedikit lebih lebar dari bahu dengan ujung jari kaki mengarah keluar</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#F59E0B" />
                <span>Turunkan badan perlahan senyaman mungkin, jangan dipaksakan terlalu dalam</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#F59E0B" />
                <span>Tahan 3-5 detik di posisi bawah sambil menjaga napas teratur, lalu berdiri perlahan</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                borderRadius: "14px",
                padding: "10px 18px",
                fontSize: "15px",
                color: "#FEF3C7",
              }}
            >
              ⚠️ Perhatian: Hindari squat bebas tanpa pegangan untuk mencegah resiko kehilangan keseimbangan.
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4B: GERAKAN 4 - MIRING PANGGUL / CAT-COW (Frames 1470 - 1680)        */}
      {/* ========================================================================= */}
      <Sequence from={1470} durationInFrames={210}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "135px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(167, 139, 250, 0.15)",
                border: "2px solid #A78BFA",
                color: "#DDD6FE",
                fontSize: "18px",
                fontWeight: 900,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              TIPS GERAKAN #4 DARI 4
            </div>
            <h1 style={{ fontSize: "50px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Miring Panggul (Cat-Cow) 🐾
            </h1>
          </div>

          {/* Context Props: Breathing & Spine Badges */}
          <div
            style={{
              position: "absolute",
              top: "265px",
              display: "flex",
              gap: "16px",
              zIndex: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #A78BFA",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#DDD6FE",
              }}
            >
              <Wind size={20} color="#A78BFA" />
              Inhale & Exhale Teratur
            </div>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                border: "1.5px solid #A78BFA",
                borderRadius: "9999px",
                padding: "8px 22px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: 800,
                color: "#DDD6FE",
              }}
            >
              <Activity size={20} color="#A78BFA" />
              Rileksasi Tulang Belakang
            </div>
          </div>

          {/* Animated Rigged Mom Cat-Cow Character */}
          <div style={{ position: "absolute", top: "320px" }}>
            <PregnantMomCharacter action="cat_cow" scale={1.46} />
          </div>

          {/* Key Pelvic Benefit Callout Banner */}
          <div
            style={{
              position: "absolute",
              top: "1020px",
              width: "920px",
              backgroundColor: "rgba(167, 139, 250, 0.15)",
              border: "1.5px solid #A78BFA",
              borderRadius: "18px",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Sparkles size={22} color="#A78BFA" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#E2E8F0" }}>
              <strong style={{ color: "#A78BFA" }}>Manfaat Panggul:</strong> Posisi merangkak melepaskan beban berat
              rahim ke bawah sehingga janin leluasa mencari posisi terbaik.
            </span>
          </div>

          {/* Action Instruction & Checklist Card filling canvas down to bottom */}
          <div
            style={{
              position: "absolute",
              top: "1150px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2.5px solid #A78BFA",
              borderRadius: "26px",
              padding: "26px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(167, 139, 250, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#A78BFA" }}>
                Panduan Gerakan Cat-Cow di Matras
              </div>
              <div
                style={{
                  backgroundColor: "rgba(167, 139, 250, 0.2)",
                  color: "#DDD6FE",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Peregangan Punggung
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "18px", color: "#E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#A78BFA" />
                <span>Merangkak di matras empuk dengan tangan tegak lurus bahu dan lutut sejajar panggul</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#A78BFA" />
                <span>Lengkungkan punggung ke atas perlahan saat buang napas (posisi kucing melengkung)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#A78BFA" />
                <span>Kembalikan punggung mendatar rileks saat menarik napas, hindari menekan perut ke bawah</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Check size={22} color="#A78BFA" />
                <span>Ulangi 8-10 siklus secara tenang untuk meredakan kekakuan saraf tulang ekor</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(167, 139, 250, 0.1)",
                borderRadius: "14px",
                padding: "10px 18px",
                fontSize: "15px",
                color: "#E0E7FF",
              }}
            >
              🌿 Sangat ampuh meredakan sakit pinggang dan memberikan ruang bebas bagi rotasi alami bayi.
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 5: JANGAN DIPUTAR SENDIRI & TANYA DOKTER ECV (Frames 1680 - 1920)    */}
      {/* ========================================================================= */}
      <Sequence from={1680} durationInFrames={240}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header Warning */}
          <div style={{ marginTop: "120px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "2px solid #EF4444",
                color: "#FCA5A5",
                fontSize: "17px",
                fontWeight: 900,
                padding: "5px 22px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              PERINGATAN KESELAMATAN MEDIS ⚠️
            </div>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Kalau Bayi Sungsang,
              <br />
              <span style={{ color: "#EF4444" }}>Jangan Diputar Sendiri!</span>
            </h1>
          </div>

          {/* Danger Card: Pijat Urut */}
          <div
            style={{
              marginTop: "14px",
              width: "920px",
              backgroundColor: "rgba(239, 68, 68, 0.14)",
              border: "2px solid #EF4444",
              borderRadius: "20px",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              boxShadow: "0 8px 20px rgba(239, 68, 68, 0.2)",
            }}
          >
            <ShieldAlert size={38} color="#EF4444" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#FECACA" }}>
                Hindari Pijat Urut Perut yang Tidak Berizin
              </div>
              <div style={{ fontSize: "15px", color: "#E2E8F0", marginTop: "2px" }}>
                Beresiko sangat fatal memicu solusio plasenta, gawat janin, dan lilitan tali pusat erat.
              </div>
            </div>
          </div>

          {/* Medical Solution Card: ECV */}
          <div
            style={{
              marginTop: "12px",
              width: "920px",
              backgroundColor: "rgba(56, 189, 248, 0.14)",
              border: "2px solid #38BDF8",
              borderRadius: "20px",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              boxShadow: "0 8px 20px rgba(56, 189, 248, 0.2)",
            }}
          >
            <Stethoscope size={38} color="#38BDF8" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#BAE6FD" }}>
                Tanyakan Dokter Kandungan Soal Prosedur E C V
              </div>
              <div style={{ fontSize: "15px", color: "#E2E8F0", marginTop: "2px" }}>
                <strong>External Cephalic Version:</strong> Pemutaran posisi janin oleh dokter SpOG di RS dipandu USG & CTG.
              </div>
            </div>
          </div>

          {/* Medical Protocol & Safety Criteria Card starting seamlessly at top: 430px */}
          <div
            style={{
              position: "absolute",
              top: "430px",
              bottom: "140px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.96)",
              border: "2px solid #38BDF8",
              borderRadius: "26px",
              padding: "26px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15)",
            }}
          >
            {/* Header */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#38BDF8" }}>
                  📋 Standar Medis Tindakan ECV di Rumah Sakit:
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    color: "#BAE6FD",
                    padding: "4px 14px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  Prosedur Dokter SpOG
                </div>
              </div>

              {/* CTG Heartbeat Waveform Banner */}
              <div
                style={{
                  marginTop: "12px",
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1.5px solid rgba(56, 189, 248, 0.4)",
                  borderRadius: "16px",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Activity size={28} color="#38BDF8" />
                  <div>
                    <div style={{ fontSize: "17px", fontWeight: 800, color: "#BAE6FD" }}>
                      Pemantauan CTG (Cardiotocography) Real-Time
                    </div>
                    <div style={{ fontSize: "13px", color: "#CBD5E1", marginTop: "2px" }}>
                      Memastikan denyut jantung janin stabil normal (120-160 bpm) sepanjang prosedur
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(52, 211, 153, 0.25)",
                    color: "#6EE7B7",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  ● 100% Terpantau
                </div>
              </div>
            </div>

            {/* 2x2 Grid of Medical Requirements */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={20} color="#38BDF8" />
                  <strong style={{ color: "#BAE6FD", fontSize: "17px" }}>Waktu Tindakan</strong>
                </div>
                <div style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: 1.4 }}>
                  Dilakukan di minggu 36-37 di ruang persalinan dengan kesiapan operasi caesar darurat.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={20} color="#38BDF8" />
                  <strong style={{ color: "#BAE6FD", fontSize: "17px" }}>Pemanduan USG</strong>
                </div>
                <div style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: 1.4 }}>
                  Dipandu USG langsung untuk memantau posisi tali pusat, letak plasenta, dan air ketuban.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={20} color="#38BDF8" />
                  <strong style={{ color: "#BAE6FD", fontSize: "17px" }}>Obat Pelemas Rahim</strong>
                </div>
                <div style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: 1.4 }}>
                  Diberikan obat tokolitik agar rahim rileks sehingga pemutaran berlangsung halus dan aman.
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={20} color="#38BDF8" />
                  <strong style={{ color: "#BAE6FD", fontSize: "17px" }}>Tingkat Keberhasilan</strong>
                </div>
                <div style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: 1.4 }}>
                  Mencapai 50-60% sukses membantu persalinan normal dan mencegah operasi caesar cito.
                </div>
              </div>
            </div>

            {/* Doctor & Hospital Safety Protocol Box */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1.5px solid rgba(148, 163, 184, 0.3)",
                borderRadius: "18px",
                padding: "16px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: "16px", fontWeight: 800, color: "#93C5FD" }}>
                👨‍⚕️ Tahapan Aman Prosedur oleh Dokter Spesialis (SpOG):
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "14px", color: "#E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ backgroundColor: "#0284C7", color: "#FFF", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>1</span>
                  <span>Skrining USG awal memastikan tidak ada lilitan tali pusat gawat & volume ketuban cukup.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ backgroundColor: "#0284C7", color: "#FFF", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>2</span>
                  <span>Dokter memandu perputaran perlahan dari luar perut dengan teknik klinis tervalidasi.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ backgroundColor: "#0284C7", color: "#FFF", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>3</span>
                  <span>Observasi CTG pasca tindakan selama 1-2 jam memastikan denyut janin tetap prima.</span>
                </div>
              </div>
            </div>

            {/* Contraindications Warning Box */}
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "16px",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "14px",
                color: "#FECACA",
              }}
            >
              <AlertTriangle size={22} color="#EF4444" style={{ flexShrink: 0 }} />
              <div>
                <strong>Kapan ECV Tidak Boleh Dilakukan?</strong> Plasenta previa, kehamilan kembar, riwayat robekan rahim, atau perdarahan trimester 3 aktif.
              </div>
            </div>

            {/* Bottom Medical Advice Card */}
            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                borderRadius: "16px",
                padding: "14px 20px",
                fontSize: "15px",
                color: "#E0F2FE",
                textAlign: "center",
                lineHeight: 1.45,
              }}
            >
              💡 <strong>Ingat Bunda:</strong> Jika ECV tidak memungkinkan, persalinan caesar terencana adalah keputusan medis terbaik dan sangat mulia demi keselamatan ibu & buah hati tercinta.
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 6: TANDA BAHAYA & CALL TO ACTION (Frames 1920 - 2400 | 64s - 80s)    */}
      {/* ========================================================================= */}
      <Sequence from={1920} durationInFrames={480}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Sub-beat 1 (Frames 1920 - 2160): 5 Danger Signs */}
          {frame < 2160 && (
            <>
              <div style={{ marginTop: "120px", textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    border: "2px solid #EF4444",
                    color: "#FCA5A5",
                    fontSize: "17px",
                    fontWeight: 800,
                    padding: "5px 22px",
                    borderRadius: "9999px",
                    display: "inline-block",
                    marginBottom: "6px",
                  }}
                >
                  WASPADA TANDA BAHAYA TRIMESTER 3 🚨
                </div>
                <h1 style={{ fontSize: "40px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
                  Segera Hubungi Bidan / Dokter Jika:
                </h1>
              </div>

              {/* 5 Danger Signs Cards spread out comfortably */}
              <div
                style={{
                  marginTop: "12px",
                  width: "920px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  { icon: "🩸", title: "Perdarahan dari Jalan Lahir", desc: "Keluar darah segar atau flek merah tidak wajar dari jalan lahir." },
                  { icon: "💧", title: "Cairan Ketuban Merembes / Pecah", desc: "Cairan jernih mengalir terus menerus tanpa bisa ditahan." },
                  { icon: "⚡", title: "Kontraksi Perut Mulas Teratur", desc: "Perut mengencang berulang setiap 5-10 menit semakin intens." },
                  { icon: "💫", title: "Sakit Kepala Hebat & Mata Kabur", desc: "Disertai nyeri ulu hati hebat (waspada gejala preeklamsia)." },
                  { icon: "🦵", title: "Betis Kaki Bengkak Sebelah & Nyeri", desc: "Disertai rasa panas dan kemerahan (waspada gumpalan darah DVT)." },
                ].map((sign, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      backgroundColor: "rgba(30, 27, 46, 0.96)",
                      border: "1.5px solid rgba(251, 113, 133, 0.4)",
                      padding: "12px 24px",
                      borderRadius: "18px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <span style={{ fontSize: "30px", flexShrink: 0 }}>{sign.icon}</span>
                    <div>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "#FDE2E4" }}>{sign.title}</div>
                      <div style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "2px" }}>{sign.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card 1: Medical Urgency & Risk Breakdown (top: 595px, height: 535px) */}
              <div
                style={{
                  position: "absolute",
                  top: "595px",
                  height: "535px",
                  width: "920px",
                  backgroundColor: "rgba(30, 27, 46, 0.96)",
                  border: "2px solid #EF4444",
                  borderRadius: "24px",
                  padding: "20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(239, 68, 68, 0.2)",
                  boxSizing: "border-box",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "23px", fontWeight: 900, color: "#FCA5A5" }}>
                    🚨 Kenapa 5 Tanda Ini Tidak Boleh Ditunda?
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.25)",
                      color: "#FECACA",
                      padding: "4px 14px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: 800,
                    }}
                  >
                    Penanganan Cito / IGD
                  </div>
                </div>

                {/* Immediate Triage Guideline Banner */}
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1.5px solid rgba(239, 68, 68, 0.4)",
                    borderRadius: "16px",
                    padding: "10px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <AlertTriangle size={24} color="#EF4444" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: "14px", color: "#FECACA", lineHeight: 1.4 }}>
                    <strong>Triase Kegawatdaruratan Maternal:</strong> Jangan menunggu jadwal kontrol rutin. Evaluasi medis dalam 1-2 jam pertama krusial menyelamatkan janin.
                  </div>
                </div>

                {/* 2x2 Grid of Medical Emergency Explanations */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <AlertTriangle size={16} color="#EF4444" />
                      <strong style={{ color: "#FECACA", fontSize: "15px" }}>Perdarahan & Ketuban</strong>
                    </div>
                    <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.35 }}>
                      Resiko solusio plasenta lepas dini dan infeksi langsung ke kantung janin.
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <AlertTriangle size={16} color="#EF4444" />
                      <strong style={{ color: "#FECACA", fontSize: "15px" }}>Preeklamsia Berat</strong>
                    </div>
                    <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.35 }}>
                      Pusing hebat & tensi melonjak mendadak memicu kejang kehamilan (eklamsia).
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <AlertTriangle size={16} color="#EF4444" />
                      <strong style={{ color: "#FECACA", fontSize: "15px" }}>Kontraksi Mulas Teratur</strong>
                    </div>
                    <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.35 }}>
                      Mulas per 5-10 menit menandakan persalinan aktif, perlu evaluasi bukaan serviks.
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <AlertTriangle size={16} color="#EF4444" />
                      <strong style={{ color: "#FECACA", fontSize: "15px" }}>Betis Bengkak & Nyeri</strong>
                    </div>
                    <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.35 }}>
                      Waspada Deep Vein Thrombosis (DVT), jangan dipijat karena beresiko emboli paru.
                    </div>
                  </div>
                </div>

                {/* Footer Callout */}
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.12)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "12px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    color: "#FECACA",
                    textAlign: "center",
                  }}
                >
                  ⏱️ Segera beri tahu bidan atau dokter kandungan begitu salah satu gejala di atas dirasakan.
                </div>
              </div>

              {/* Card 2: Hospital Emergency Action Protocol (top: 1150px, bottom: 250px) */}
              <div
                style={{
                  position: "absolute",
                  top: "1150px",
                  bottom: "250px",
                  width: "920px",
                  backgroundColor: "rgba(30, 27, 46, 0.96)",
                  border: "2px solid #F59E0B",
                  borderRadius: "24px",
                  padding: "20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.2)",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "#FDE68A" }}>
                    🏥 Protokol Tindakan Cepat ke Rumah Sakit:
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      color: "#FDE68A",
                      padding: "4px 14px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: 800,
                    }}
                  >
                    Langkah Darurat
                  </div>
                </div>

                {/* 3 Step Action Guide */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#E2E8F0" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      padding: "10px 16px",
                      borderRadius: "14px",
                    }}
                  >
                    <span style={{ backgroundColor: "#F59E0B", color: "#000", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, flexShrink: 0 }}>1</span>
                    <span><strong>Posisi Miring Kiri:</strong> Segera berbaring miring ke kiri untuk memaksimalkan perfusi darah & oksigen ke plasenta janin.</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      padding: "10px 16px",
                      borderRadius: "14px",
                    }}
                  >
                    <span style={{ backgroundColor: "#F59E0B", color: "#000", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, flexShrink: 0 }}>2</span>
                    <span><strong>Dokumen Siaga:</strong> Bawa Buku KIA (Buku Pink), hasil USG terakhir, dan KTP/BPJS tanpa ditunda mencari perlengkapan lain.</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      padding: "10px 16px",
                      borderRadius: "14px",
                    }}
                  >
                    <span style={{ backgroundColor: "#F59E0B", color: "#000", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, flexShrink: 0 }}>3</span>
                    <span><strong>Transportasi Aman:</strong> Minta suami atau keluarga mengantar langsung ke IGD Rumah Sakit terdekat. Hindari menyetir sendiri!</span>
                  </div>
                </div>

                {/* Do Not Do Warning Banner */}
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "#FECACA",
                  }}
                >
                  <AlertTriangle size={20} color="#EF4444" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Dilarang Keras:</strong> Jangan mengurut/memijat perut, jangan minum ramuan peluntur, dan jangan menunggu perdarahan bertambah banyak!
                  </div>
                </div>
              </div>

              {/* Immediate Action Emergency Pill at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: "140px",
                  width: "920px",
                  backgroundColor: "rgba(239, 68, 68, 0.25)",
                  border: "2.5px solid #EF4444",
                  borderRadius: "22px",
                  padding: "20px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.35)",
                }}
              >
                <PhoneCall size={30} color="#FCA5A5" />
                <span style={{ fontSize: "21px", fontWeight: 900, color: "#FECACA" }}>
                  Jangan Menunda! Segera Datang ke IGD Rumah Sakit atau Bidan Terdekat
                </span>
              </div>
            </>
          )}

          {/* Sub-beat 2 (Frames 2160 - 2400): Cheerful Outro with Mom Character */}
          {frame >= 2160 && (
            <>
              {/* Smiling Cradling Mom Character */}
              <div style={{ position: "absolute", top: "180px" }}>
                <PregnantMomCharacter action="cradling" scale={1.46} />
              </div>

              {/* Floating Week Milestone */}
              <div
                style={{
                  position: "absolute",
                  top: "880px",
                  backgroundColor: "rgba(251, 113, 133, 0.16)",
                  border: "2px solid #FB7185",
                  padding: "10px 32px",
                  borderRadius: "9999px",
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#FDE2E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Sparkles size={20} color="#FBBF24" />
                <span>Menuju Hari Bahagia Kelahiran Buah Hati</span>
              </div>

              {/* Affirmation Card filling middle */}
              <div
                style={{
                  position: "absolute",
                  top: "950px",
                  bottom: "260px",
                  width: "920px",
                  backgroundColor: "rgba(30, 27, 46, 0.96)",
                  border: "2px solid #FB7185",
                  borderRadius: "26px",
                  padding: "26px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(251, 113, 133, 0.2)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h2 style={{ fontSize: "34px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
                    Setiap Kehamilan Itu Unik & Istimewa ✨
                  </h2>
                  <p style={{ fontSize: "16px", color: "#CBD5E1", margin: "6px 0 0 0" }}>
                    4 Pondasi Penting Menjelang Persalinan Normal yang Nyaman:
                  </p>
                </div>

                {/* 2x2 Rich Affirmation Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(251, 113, 133, 0.1)",
                      border: "1.5px solid rgba(251, 113, 133, 0.35)",
                      borderRadius: "18px",
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>🧘</div>
                    <div style={{ fontSize: "19px", fontWeight: 800, color: "#FDE2E4", marginTop: "4px" }}>
                      Ketenangan Pikiran
                    </div>
                    <div style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "4px", lineHeight: 1.4 }}>
                      Rileks memicu hormon oksitosin alami untuk melancarkan pembukaan jalan lahir.
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(167, 139, 250, 0.1)",
                      border: "1.5px solid rgba(167, 139, 250, 0.35)",
                      borderRadius: "18px",
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>🤝</div>
                    <div style={{ fontSize: "19px", fontWeight: 800, color: "#DDD6FE", marginTop: "4px" }}>
                      Dukungan Keluarga
                    </div>
                    <div style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "4px", lineHeight: 1.4 }}>
                      Support penuh dari suami dan keluarga memberi rasa aman dan energi positif bagi ibu.
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      border: "1.5px solid rgba(56, 189, 248, 0.35)",
                      borderRadius: "18px",
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>🩺</div>
                    <div style={{ fontSize: "19px", fontWeight: 800, color: "#BAE6FD", marginTop: "4px" }}>
                      Rutin Kontrol Medis
                    </div>
                    <div style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "4px", lineHeight: 1.4 }}>
                      Evaluasi klinis rutin memastikan detak jantung janin dan letak plasenta terpantau.
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(52, 211, 153, 0.1)",
                      border: "1.5px solid rgba(52, 211, 153, 0.35)",
                      borderRadius: "18px",
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>👶</div>
                    <div style={{ fontSize: "19px", fontWeight: 800, color: "#A7F3D0", marginTop: "4px" }}>
                      Percayai Tubuhmu
                    </div>
                    <div style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "4px", lineHeight: 1.4 }}>
                      Tubuh seorang ibu diciptakan secara alami luar biasa kuat untuk melahirkan buah hati.
                    </div>
                  </div>
                </div>

                {/* Partner Support Highlight Banner */}
                <div
                  style={{
                    backgroundColor: "rgba(251, 113, 133, 0.1)",
                    border: "1.5px solid rgba(251, 113, 133, 0.3)",
                    borderRadius: "16px",
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#FDE2E4",
                  }}
                >
                  <Sparkles size={22} color="#FB7185" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Tips Pendamping Persalinan:</strong> Pijatan lembut di area pinggang bawah (sacrum) serta afirmasi kasih sayang dari suami terbukti meredakan kecemasan dan mempercepat pembukaan alami.
                  </div>
                </div>

                {/* Affirmation Note */}
                <div
                  style={{
                    backgroundColor: "rgba(251, 113, 133, 0.12)",
                    border: "1px solid rgba(251, 113, 133, 0.3)",
                    borderRadius: "16px",
                    padding: "14px 20px",
                    fontSize: "15px",
                    color: "#FDE2E4",
                    textAlign: "center",
                    lineHeight: 1.45,
                  }}
                >
                  🌸 <em>"Tubuhmu tahu cara membuka jalan, dan si kecil tahu cara menemukan jalannya pulang."</em> Semangat menyambut persalinan dengan cinta!
                </div>
              </div>

              {/* Outro Call to Action Card at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: "140px",
                  width: "920px",
                  background:
                    "linear-gradient(135deg, rgba(251, 113, 133, 0.3) 0%, rgba(167, 139, 250, 0.35) 100%)",
                  border: "2.5px solid #FB7185",
                  borderRadius: "26px",
                  padding: "24px 34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 15px 40px rgba(251, 113, 133, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <Heart size={44} color="#FB7185" />
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "#FFFFFF" }}>
                      Semoga Persalinan Lancar & Sehat
                    </div>
                    <div style={{ fontSize: "15px", color: "#FDE2E4" }}>
                      Ibu dan buah hati sehat selamat sampai hari kelahiran
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#FB7185",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    fontSize: "17px",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 6px 18px rgba(251, 113, 133, 0.5)",
                  }}
                >
                  <Share2 size={20} color="#FFFFFF" />
                  Bagikan ke Bumil Lain!
                </div>
              </div>
            </>
          )}
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

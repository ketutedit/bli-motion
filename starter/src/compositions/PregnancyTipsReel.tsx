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
import { PregnancyTipCard } from "../components/PregnancyTipCard";
import {
  Heart,
  Baby,
  Activity,
  AlertTriangle,
  Stethoscope,
  Share2,
  CheckCircle2,
  ShieldAlert,
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
        background: "linear-gradient(180deg, #0F111A 0%, #1A162B 50%, #0F111A 100%)",
        color: "#FFFFFF",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* Soothing Female AI Voiceover */}
      <Audio src={staticFile("audio/tips-bumil-trimester3.mp3")} />

      {/* Ambient Floral & Pastel Glows */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, rgba(167, 139, 250, 0.08) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Channel Header Badge (Fixed across all scenes) */}
      <div
        style={{
          position: "absolute",
          top: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(30, 27, 46, 0.85)",
            border: "1.5px solid #FB7185",
            borderRadius: "9999px",
            padding: "10px 28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
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
          <div style={{ marginTop: "160px", width: "100%", padding: "0 40px" }}>
            <AppleStyleText
              text="Menjelang Lahir, Di Mana Posisi Kepala Bayi?"
              highlightWord="Kepala"
              highlightGradient="linear-gradient(135deg, #FB7185 0%, #F43F5E 100%)"
              fontSize={50}
              delay={10}
              staggerFrames={3}
            />
          </div>

          {/* Anatomical Womb Illustration */}
          <div style={{ position: "absolute", top: "340px" }}>
            <PregnancyAnatomyIllustration positionType="cephalic" scale={1.35} />
          </div>

          {/* Medical Statistics Card */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.95)",
              border: "2px solid #34D399",
              borderRadius: "24px",
              padding: "24px 32px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "16px", color: "#A7F3D0", fontWeight: 700 }}>
                SEKITAR MINGGU 36
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#34D399", marginTop: "4px" }}>
                ~96% Kepala di Bawah
              </div>
              <div style={{ fontSize: "14px", color: "#E2E8F0" }}>Posisi Siap Lahir Normal</div>
            </div>

            <div style={{ width: "2px", height: "60px", backgroundColor: "rgba(255, 255, 255, 0.15)" }} />

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "16px", color: "#FCA5A5", fontWeight: 700 }}>
                SEBAGIAN KECIL
              </div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#FB7185", marginTop: "4px" }}>
                ~4% Sungsang
              </div>
              <div style={{ fontSize: "14px", color: "#E2E8F0" }}>Bokong / Kaki di Bawah</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: FACT-CHECK & TUJUAN GERAKAN (Frames 390 - 660 | 13s - 22s)        */}
      {/* ========================================================================= */}
      <Sequence from={390} durationInFrames={270}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ marginTop: "170px", textAlign: "center", padding: "0 40px" }}>
            <div
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                border: "1.5px solid #F59E0B",
                color: "#FBBF24",
                fontSize: "18px",
                fontWeight: 800,
                padding: "6px 22px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              FAKTA MEDIS PENTING 💡
            </div>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              Belum Ada Gerakan Rumah
              <br />
              <span style={{ color: "#FB7185" }}>Yang Terbukti Memutar Bayi</span>
            </h1>
          </div>

          {/* Explanation Card */}
          <div
            style={{
              marginTop: "50px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.95)",
              border: "2px solid #818CF8",
              borderRadius: "28px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#E0E7FF" }}>
              Lalu, Apa Fungsi Gerakan Aman di Rumah?
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                {
                  title: "Membuka Ruang Rongga Panggul",
                  desc: "Membantu melonggarkan sendi panggul agar kepala janin leluasa mencari posisi terbaik.",
                },
                {
                  title: "Menyiapkan Otot & Fleksibilitas Tubuh",
                  desc: "Melatih stamina pernapasan dan otot dasar panggul menjelang proses persalinan.",
                },
                {
                  title: "Meredakan Nyeri Pinggang & Punggung",
                  desc: "Mengurangi beban tekanan saraf di area tulang ekor ibu hamil trimester 3.",
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={28} color="#34D399" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF" }}>{item.title}</div>
                    <div style={{ fontSize: "19px", color: "#CBD5E1", marginTop: "4px" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3: GERAKAN 1 & 2 (Frames 660 - 1260 | 22s - 42s)                    */}
      {/* ========================================================================= */}
      <Sequence from={660} durationInFrames={600}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "170px", textAlign: "center" }}>
            <h2 style={{ fontSize: "52px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Gerakan Aman di Rumah
            </h2>
            <div style={{ fontSize: "24px", color: "#FB7185", fontWeight: 700, marginTop: "8px" }}>
              Bagian 1 • Aktivitas Harian
            </div>
          </div>

          {/* 2 Step Cards Stack */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              alignItems: "center",
            }}
          >
            {/* Step 1: Jalan Kaki */}
            <PregnancyTipCard
              number="Langkah 1"
              title="Jalan Kaki Santai"
              instruction="Targetkan 30 menit sehari, 5 hari dalam seminggu dengan sepatu empuk."
              benefit="Gravitasi alami membantu kepala janin turun ke pintu panggul."
              emoji="🚶‍♀️"
              delay={5}
              accentColor="#34D399"
            />

            {/* Step 2: Duduk di Bola Persalinan */}
            <PregnancyTipCard
              number="Langkah 2"
              title="Duduk di Bola Persalinan (Gymball)"
              instruction="Goyang dan putar panggul perlahan melingkar atau membentuk angka 8."
              benefit="Mengendurkan otot panggul dan memperbaiki postur duduk."
              emoji="🧘‍♀️"
              delay={25}
              accentColor="#38BDF8"
            />
          </div>

          {/* Gentle Reminder Box */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "rgba(251, 113, 133, 0.15)",
              border: "1.5px solid #FB7185",
              borderRadius: "20px",
              padding: "16px 36px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#FDE2E4",
            }}
          >
            💡 Lakukan dengan santai, jangan sampai kehabisan napas ya Bun!
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4: GERAKAN 3 & 4 (Frames 1260 - 1680 | 42s - 56s)                   */}
      {/* ========================================================================= */}
      <Sequence from={1260} durationInFrames={420}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "170px", textAlign: "center" }}>
            <h2 style={{ fontSize: "52px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Gerakan Aman di Rumah
            </h2>
            <div style={{ fontSize: "24px", color: "#A78BFA", fontWeight: 700, marginTop: "8px" }}>
              Bagian 2 • Peregangan & Kelenturan Panggul
            </div>
          </div>

          {/* 2 Step Cards Stack */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              alignItems: "center",
            }}
          >
            {/* Step 3: Supported Squat */}
            <PregnancyTipCard
              number="Langkah 3"
              title="Squat Berpegangan"
              instruction="Sandarkan punggung ke tembok atau berpegangan kuat pada suami/pendamping."
              benefit="Membuka diameter outlet panggul bawah hingga 20-30%."
              emoji="🧱"
              delay={5}
              accentColor="#F59E0B"
            />

            {/* Step 4: Pelvic Tilt (Cat-Cow) */}
            <PregnancyTipCard
              number="Langkah 4"
              title="Miring Panggul (Cat-Cow Pose)"
              instruction="Posisi merangkak di matras, lengkungkan lalu luruskan punggung secara perlahan."
              benefit="Mengurangi tekanan di saraf tulang belakang & memberi ruang janin."
              emoji="🐾"
              delay={25}
              accentColor="#A78BFA"
            />
          </div>

          {/* Safety Tip */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "rgba(167, 139, 250, 0.15)",
              border: "1.5px solid #A78BFA",
              borderRadius: "20px",
              padding: "16px 36px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#EDE9FE",
            }}
          >
            🛡️ Pastikan ada pendamping atau pegangan yang kokoh saat squat!
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 5: JANGAN DIPUTAR SENDIRI & TANYA DOKTER ECV (Frames 1680 - 1920)    */}
      {/* ========================================================================= */}
      <Sequence from={1680} durationInFrames={240}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header Warning */}
          <div style={{ marginTop: "170px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "2px solid #EF4444",
                color: "#FCA5A5",
                fontSize: "18px",
                fontWeight: 900,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "14px",
              }}
            >
              PERINGATAN KESELAMATAN ⚠️
            </div>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              Kalau Bayi Sungsang,
              <br />
              <span style={{ color: "#EF4444" }}>Jangan Diputar Sendiri!</span>
            </h1>
          </div>

          {/* Dangers vs Safe Medical Solution */}
          <div
            style={{
              marginTop: "40px",
              width: "920px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Danger Card */}
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "2px solid #EF4444",
                borderRadius: "24px",
                padding: "28px 32px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <ShieldAlert size={48} color="#EF4444" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#FECACA" }}>
                  Hindari Pijat Urut Perut yang Tidak Berizin
                </div>
                <div style={{ fontSize: "18px", color: "#E2E8F0", marginTop: "4px" }}>
                  Beresiko tinggi memicu lepasnya plasenta (solusio) dan lilitan tali pusat berbahaya.
                </div>
              </div>
            </div>

            {/* Medical Solution: ECV Card */}
            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "2px solid #38BDF8",
                borderRadius: "24px",
                padding: "28px 32px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Stethoscope size={48} color="#38BDF8" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#BAE6FD" }}>
                  Tanyakan Dokter Soal Tindakan ECV
                </div>
                <div style={{ fontSize: "18px", color: "#E2E8F0", marginTop: "4px" }}>
                  <strong>External Cephalic Version:</strong> Prosedur medis pemutaran posisi oleh dokter
                  spesialis kandungan di rumah sakit dengan panduan monitor USG & CTG.
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 6: TANDA BAHAYA & CALL TO ACTION (Frames 1920 - 2400 | 64s - 80s)    */}
      {/* ========================================================================= */}
      <Sequence from={1920} durationInFrames={480}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Header */}
          <div style={{ marginTop: "160px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "2px solid #EF4444",
                color: "#FCA5A5",
                fontSize: "18px",
                fontWeight: 800,
                padding: "6px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              WASPADA TANDA BAHAYA 🚨
            </div>
            <h1 style={{ fontSize: "50px", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              Segera Hubungi Bidan / Dokter Jika:
            </h1>
          </div>

          {/* 5 Danger Signs Checklist */}
          <div
            style={{
              marginTop: "30px",
              width: "920px",
              backgroundColor: "rgba(30, 27, 46, 0.95)",
              border: "2px solid #FB7185",
              borderRadius: "28px",
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
            }}
          >
            {[
              "🩸 Keluar flek atau perdarahan dari jalan lahir",
              "💧 Cairan ketuban merembes atau pecah tiba-tiba",
              "⏱️ Kontraksi perut mulas teratur dan semakin sering",
              "🤕 Sakit kepala hebat, pandangan kabur, atau nyeri ulu hati",
              "🦵 Betis kaki bengkak parah disertai rasa nyeri sebelah",
            ].map((sign, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#FDE2E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span>{sign}</span>
              </div>
            ))}
          </div>

          {/* Outro Call to Action Card */}
          <div
            style={{
              position: "absolute",
              bottom: "140px",
              width: "920px",
              background: "linear-gradient(135deg, rgba(251, 113, 133, 0.25) 0%, rgba(167, 139, 250, 0.3) 100%)",
              border: "2.5px solid #FB7185",
              borderRadius: "28px",
              padding: "24px 36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(251, 113, 133, 0.2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Heart size={44} color="#FB7185" />
              <div>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#FFFFFF" }}>
                  Setiap Kehamilan Berbeda
                </div>
                <div style={{ fontSize: "16px", color: "#FDE2E4" }}>
                  Konsultasikan selalu rencana persalinanmu
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#FB7185",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Share2 size={20} color="#FFFFFF" />
              Bagikan ke Bumil Lain!
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

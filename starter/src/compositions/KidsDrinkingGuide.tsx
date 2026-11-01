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
import { CuteDrinkingCharacter } from "../components/CuteDrinkingCharacter";
import { KidsStepCard } from "../components/KidsStepCard";
import { Sparkles, Heart, Droplets } from "lucide-react";

export const KidsDrinkingGuide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gentle vertical camera drift for Reels format
  const cameraZoom = interpolate(frame, [0, 990], [1, 1.04], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #1E1B4B 45%, #0F172A 100%)",
        color: "#FFFFFF",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* Friendly Kids Neural Voiceover */}
      <Audio src={staticFile("audio/cara-minum-kids.mp3")} />

      {/* Floating Playful Background Bubbles */}
      <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
        {[
          { x: 120, y: 300, size: 40, delay: 0 },
          { x: 920, y: 450, size: 55, delay: 15 },
          { x: 180, y: 1100, size: 30, delay: 25 },
          { x: 880, y: 1300, size: 45, delay: 10 },
          { x: 500, y: 200, size: 60, delay: 5 },
        ].map((bubble, idx) => {
          const floatY = Math.sin((frame + bubble.delay * 8) / 20) * 18;
          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: `${bubble.x}px`,
                top: `${bubble.y + floatY}px`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0.05))",
                border: "2px solid rgba(56, 189, 248, 0.3)",
                boxShadow: "0 0 16px rgba(56, 189, 248, 0.2)",
              }}
            />
          );
        })}
      </div>

      {/* Top Floating Channel / Brand Badge */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.9)",
            border: "2px solid #38BDF8",
            borderRadius: "9999px",
            padding: "12px 32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Droplets size={26} color="#38BDF8" />
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#38BDF8", letterSpacing: "0.08em" }}>
            EDUKASI ANAK SEHAT
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SCENE 1: THE HOOK (Frames 0 - 165 | 0s - 5.5s)                             */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={165}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Main Title Heading */}
          <div style={{ marginTop: "220px", textAlign: "center", padding: "0 40px" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#FDE047", marginBottom: "12px" }}>
              SIAPA YANG HAUS? 🙋
            </div>
            <h1
              style={{
                fontSize: "62px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.2,
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              Cara Minum Air
              <br />
              <span style={{ color: "#38BDF8" }}>Yang Benar</span>
            </h1>
          </div>

          {/* Curious Character in Center */}
          <div style={{ position: "absolute", bottom: "340px" }}>
            <CuteDrinkingCharacter action="curious" scale={1.7} />
          </div>

          {/* Bottom Prompt */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "2px solid #38BDF8",
              padding: "16px 36px",
              borderRadius: "24px",
              fontSize: "24px",
              fontWeight: 800,
              color: "#E0F2FE",
            }}
          >
            Yuk ikuti 4 langkah ini! 👇
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 2: STEP 1 — DUDUK YANG RAPI (Frames 165 - 330 | 5.5s - 11.0s)        */}
      {/* ========================================================================= */}
      <Sequence
        from={165}
        durationInFrames={165}
        style={{
          scale: 0.26,
          backgroundColor: "rgba(255, 0, 0, 0)"
        }}
      >
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            scale: 0.75,
            fontWeight: 600
          }}
        >
          {/* Top Step Card */}
          <div style={{ marginTop: "210px", width: "100%", display: "flex", justifyContent: "center" }}>
            <KidsStepCard
              stepNumber="Langkah 1"
              title="Duduk yang Rapi"
              subtitle="Jangan minum sambil berdiri ya!"
              emoji="🪑"
              color="#818CF8"
              delay={5}
            />
          </div>

          {/* Character Sitting on Chair */}
          <div style={{ position: "absolute", bottom: "320px" }}>
            <CuteDrinkingCharacter action="sitting" scale={1.7} />
          </div>

          {/* Cute Bubble Tip */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "#4338CA",
              padding: "14px 28px",
              borderRadius: "20px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#EEF2FF",
            }}
          >
            ✨ Lambung lebih nyaman saat kita duduk!
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 3: STEP 2 — TANGAN KANAN (Frames 330 - 510 | 11.0s - 17.0s)          */}
      {/* ========================================================================= */}
      <Sequence from={330} durationInFrames={180}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Top Step Card */}
          <div style={{ marginTop: "210px", width: "100%", display: "flex", justifyContent: "center" }}>
            <KidsStepCard
              stepNumber="Langkah 2"
              title="Pegang Tangan Kanan"
              subtitle="Pegang gelas dengan sopan & kuat"
              emoji="✋"
              color="#F59E0B"
              delay={5}
            />
          </div>

          {/* Character Proudly Holding Glass */}
          <div style={{ position: "absolute", bottom: "320px" }}>
            <CuteDrinkingCharacter action="holding_right" scale={1.7} />
          </div>

          {/* Bottom Reminder */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "#D97706",
              padding: "14px 28px",
              borderRadius: "20px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#FFFBEB",
            }}
          >
            👍 Biasakan gunakan tangan kanan yang baik
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 4: STEP 3 — BERDOA SEBELUM MINUM (Frames 510 - 660 | 17.0s - 22.0s)  */}
      {/* ========================================================================= */}
      <Sequence from={510} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Top Step Card */}
          <div style={{ marginTop: "210px", width: "100%", display: "flex", justifyContent: "center" }}>
            <KidsStepCard
              stepNumber="Langkah 3"
              title="Baca Doa / Bismillah"
              subtitle="Mengucap syukur sebelum minum"
              emoji="🤲"
              color="#10B981"
              delay={5}
            />
          </div>

          {/* Character in Prayer Pose */}
          <div style={{ position: "absolute", bottom: "320px" }}>
            <CuteDrinkingCharacter action="praying" scale={1.7} />
          </div>

          {/* Bottom Blessing Card */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "#059669",
              padding: "14px 28px",
              borderRadius: "20px",
              fontSize: "24px",
              fontWeight: 800,
              color: "#ECFDF5",
            }}
          >
            🤲 "Bismillah..." agar air jadi berkah
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 5: STEP 4 — MINUM PELAN-PELAN (Frames 660 - 840 | 22.0s - 28.0s)     */}
      {/* ========================================================================= */}
      <Sequence from={660} durationInFrames={180}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Top Step Card */}
          <div style={{ marginTop: "210px", width: "100%", display: "flex", justifyContent: "center" }}>
            <KidsStepCard
              stepNumber="Langkah 4"
              title="Minum Pelan-Pelan"
              subtitle="Teguk perlahan, jangan tersedak!"
              emoji="🥤"
              color="#38BDF8"
              delay={5}
            />
          </div>

          {/* Character Drinking from Tilted Glass */}
          <div style={{ position: "absolute", bottom: "320px" }}>
            <CuteDrinkingCharacter action="drinking" scale={1.7} />
          </div>

          {/* Sound Effect Bubble */}
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              backgroundColor: "rgba(56, 189, 248, 0.2)",
              border: "2px dashed #38BDF8",
              padding: "14px 32px",
              borderRadius: "20px",
              fontSize: "24px",
              fontWeight: 800,
              color: "#E0F2FE",
            }}
          >
            Gluk... Gluk... Nikmat sekali! 💧
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================================= */}
      {/* SCENE 6: CELEBRATION & REFRESHED (Frames 840 - 990 | 28.0s - 33.0s)        */}
      {/* ========================================================================= */}
      <Sequence from={840} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Victory Header */}
          <div style={{ marginTop: "200px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#F59E0B",
                color: "#78350F",
                fontSize: "20px",
                fontWeight: 900,
                padding: "8px 24px",
                borderRadius: "9999px",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              SELESAI! ⭐
            </div>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.2,
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              Haaah... Segar!
              <br />
              <span style={{ color: "#34D399" }}>Badan Jadi Sehat</span>
            </h1>
          </div>

          {/* Cheering Refreshed Character */}
          <div style={{ position: "absolute", bottom: "310px" }}>
            <CuteDrinkingCharacter action="refreshed" scale={1.8} />
          </div>

          {/* Bottom Outro Box */}
          <div
            style={{
              position: "absolute",
              bottom: "140px",
              backgroundColor: "linear-gradient(135deg, #059669 0%, #047857 100%)",
              border: "3px solid #34D399",
              padding: "18px 40px",
              borderRadius: "32px",
              fontSize: "26px",
              fontWeight: 800,
              color: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(5, 150, 105, 0.4)",
            }}
          >
            Yuk dipraktikkan setiap hari ya! ❤️
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

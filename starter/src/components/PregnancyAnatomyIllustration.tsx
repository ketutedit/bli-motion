import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface PregnancyAnatomyIllustrationProps {
  positionType?: "cephalic" | "breech" | "comparison";
  scale?: number;
}

export const PregnancyAnatomyIllustration: React.FC<PregnancyAnatomyIllustrationProps> = ({
  positionType = "cephalic",
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 120 },
  });

  // Soft breathing movement
  const breathe = Math.sin((frame / fps) * Math.PI * 1.5) * 4;

  return (
    <div
      style={{
        transform: `scale(${progress * scale}) translateY(${breathe}px)`,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <svg width="460" height="520" viewBox="0 0 460 520" fill="none">
        <defs>
          <radialGradient id="wombGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#FB7185" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="motherOutline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="babyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
        </defs>

        {/* Soft Background Womb Glow */}
        <circle cx="230" cy="270" r="170" fill="url(#wombGlow)" />

        {/* Pelvic Bone Cradle at Bottom */}
        <path
          d="M130 420 C180 470, 280 470, 330 420 C290 440, 170 440, 130 420 Z"
          fill="#818CF8"
          stroke="#4F46E5"
          strokeWidth="4"
          opacity="0.85"
        />
        <text x="230" y="475" textAnchor="middle" fill="#A5B4FC" fontSize="16" fontWeight="700">
          Rongga Tulang Panggul (Pelvis)
        </text>

        {/* Pregnant Belly Translucent Contour */}
        <path
          d="M150 120 C110 180, 80 280, 140 410 C180 440, 280 440, 320 410 C380 280, 350 180, 310 120"
          stroke="url(#motherOutline)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="8 6"
        />

        {/* Uterus / Womb Boundary */}
        <ellipse
          cx="230"
          cy="275"
          rx="135"
          ry="150"
          fill="rgba(251, 113, 133, 0.08)"
          stroke="#FB7185"
          strokeWidth="3"
        />

        {/* Fetus Illustration (Cephalic: Head Down) */}
        {positionType === "cephalic" || positionType === "comparison" ? (
          <g transform="translate(230, 275)">
            {/* Baby Head (Downwards towards pelvis) */}
            <circle
              cx="0"
              cy="80"
              r="44"
              fill="url(#babyGrad)"
              stroke="#EA580C"
              strokeWidth="3.5"
            />
            {/* Peaceful Baby Face Expression */}
            <path d="M-12 85 Q0 94 12 85" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M-16 74 Q-10 68 -4 74" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M4 74 Q10 68 16 74" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="-18" cy="84" rx="5" ry="3" fill="#FB7185" opacity="0.6" />
            <ellipse cx="18" cy="84" rx="5" ry="3" fill="#FB7185" opacity="0.6" />

            {/* Baby Curved Body / Back */}
            <path
              d="M-36 60 C-75 10, -65 -60, 0 -75 C50 -65, 55 -20, 20 50"
              fill="url(#babyGrad)"
              stroke="#EA580C"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Little Legs & Feet curled up at top */}
            <ellipse cx="15" cy="-70" rx="20" ry="14" fill="#FED7AA" stroke="#EA580C" strokeWidth="3" />
            <ellipse cx="-5" cy="-80" rx="14" ry="10" fill="#FED7AA" stroke="#EA580C" strokeWidth="2.5" />

            {/* Cute Little Arms tucked at chest */}
            <path d="M-10 10 Q5 25 15 15" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        ) : (
          // Breech Position (Head Up, Buttocks Down)
          <g transform="translate(230, 275) rotate(180)">
            <circle cx="0" cy="80" r="44" fill="url(#babyGrad)" stroke="#EF4444" strokeWidth="3.5" />
            <path
              d="M-36 60 C-75 10, -65 -60, 0 -75 C50 -65, 55 -20, 20 50"
              fill="url(#babyGrad)"
              stroke="#EF4444"
              strokeWidth="3.5"
            />
          </g>
        )}

        {/* Directional Indicator Arrow (Optimal Gravitational Flow) */}
        <g transform="translate(70, 260)">
          <path d="M0 0 L0 50" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
          <polygon points="0,65 -8,45 8,45" fill="#34D399" />
          <text x="-12" y="85" fill="#34D399" fontSize="15" fontWeight="800">
            ARAH JALAN LAHIR
          </text>
        </g>
      </svg>
    </div>
  );
};

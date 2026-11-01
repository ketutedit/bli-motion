import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type CharacterAction =
  | "curious"      // Scene 1: Siapa yang haus?
  | "sitting"      // Scene 2: Duduk rapi
  | "holding_right"// Scene 3: Pegang tangan kanan
  | "praying"      // Scene 4: Berdoa sebelum minum
  | "drinking"     // Scene 5: Minum pelan-pelan (gelas miring, teguk)
  | "refreshed";   // Scene 6: Haaah segar! (bintang-bintang)

export interface CuteDrinkingCharacterProps {
  action: CharacterAction;
  scale?: number;
}

export const CuteDrinkingCharacter: React.FC<CuteDrinkingCharacterProps> = ({
  action = "curious",
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Natural breathing bobbing
  const bobbing = Math.sin((frame / fps) * Math.PI * 2.5) * 6;

  // Eye blinking cycle
  const blinkCycle = frame % 60;
  const isBlinking = blinkCycle > 55;

  // Glass drinking tilt animation
  const glassTilt = action === "drinking" ? Math.sin((frame / fps) * 4) * 8 - 32 : 0;
  const waterLevel = action === "drinking" ? interpolate(frame % 90, [0, 90], [70, 20]) : 70;

  // Drinking gulp throat pulse
  const gulpPulse = action === "drinking" ? Math.abs(Math.sin((frame / fps) * 8)) * 4 : 0;

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${bobbing}px)`,
        transformOrigin: "bottom center",
        display: "inline-block",
        position: "relative",
      }}
    >
      <svg width="420" height="460" viewBox="0 0 420 460" fill="none">
        <defs>
          <radialGradient id="cuteCheek" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>
        </defs>

        {/* Soft Ground Shadow */}
        <ellipse cx="210" cy="430" rx="130" ry="16" fill="#000000" opacity="0.2" />

        {/* Chair / Cushion if sitting */}
        {(action === "sitting" || action === "holding_right" || action === "praying" || action === "drinking") && (
          <g>
            <rect x="90" y="380" width="240" height="34" rx="17" fill="#6366F1" stroke="#312E81" strokeWidth="4" />
            <rect x="110" y="410" width="16" height="30" rx="4" fill="#4338CA" />
            <rect x="294" y="410" width="16" height="30" rx="4" fill="#4338CA" />
          </g>
        )}

        {/* Feet / Legs */}
        {action === "sitting" || action === "holding_right" || action === "praying" || action === "drinking" ? (
          // Sitting folded legs
          <g>
            <ellipse cx="160" cy="390" rx="36" ry="18" fill="#F59E0B" stroke="#0F172A" strokeWidth="4" />
            <ellipse cx="260" cy="390" rx="36" ry="18" fill="#F59E0B" stroke="#0F172A" strokeWidth="4" />
            {/* Cute Shoes */}
            <ellipse cx="140" cy="396" rx="20" ry="12" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
            <ellipse cx="280" cy="396" rx="20" ry="12" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
          </g>
        ) : (
          // Standing legs
          <g>
            <rect x="150" y="370" width="26" height="40" rx="12" fill="#F59E0B" stroke="#0F172A" strokeWidth="4" />
            <rect x="244" y="370" width="26" height="40" rx="12" fill="#F59E0B" stroke="#0F172A" strokeWidth="4" />
            <ellipse cx="160" cy="415" rx="24" ry="14" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
            <ellipse cx="260" cy="415" rx="24" ry="14" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
          </g>
        )}

        {/* Cute Chubby Body (Overalls / T-Shirt) */}
        <path
          d="M120 280 C120 230, 300 230, 300 280 L310 370 C310 390, 110 390, 110 370 Z"
          fill="url(#bodyGrad)"
          stroke="#0F172A"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* T-Shirt Pattern: Cute Water Drop Badge */}
        <circle cx="210" cy="320" r="24" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        <path
          d="M210 306 C210 306, 218 318, 218 324 C218 329, 214 332, 210 332 C206 332, 202 329, 202 324 C202 318, 210 306, 210 306 Z"
          fill="#38BDF8"
        />

        {/* Big Round Head */}
        <circle
          cx="210"
          cy="165"
          r="92"
          fill="#FEF08A"
          stroke="#0F172A"
          strokeWidth="5"
        />

        {/* Cute Bear / Animal Ears */}
        <circle cx="135" cy="90" r="32" fill="#FDE047" stroke="#0F172A" strokeWidth="5" />
        <circle cx="135" cy="90" r="18" fill="#F472B6" />
        <circle cx="285" cy="90" r="32" fill="#FDE047" stroke="#0F172A" strokeWidth="5" />
        <circle cx="285" cy="90" r="18" fill="#F472B6" />

        {/* Hair Tuft */}
        <path
          d="M196 74 C205 50, 215 50, 224 74 Z"
          fill="#F59E0B"
          stroke="#0F172A"
          strokeWidth="3"
        />

        {/* Cheeks (Blushing) */}
        <ellipse cx="152" cy="190" rx="18" ry="12" fill="url(#cuteCheek)" />
        <ellipse cx="268" cy="190" rx="18" ry="12" fill="url(#cuteCheek)" />

        {/* Throat pulse when drinking */}
        {action === "drinking" && (
          <ellipse cx="210" cy="245" rx={12 + gulpPulse} ry={8 + gulpPulse} fill="#FDE047" stroke="#0F172A" strokeWidth="3" />
        )}

        {/* Eyes */}
        {isBlinking || action === "praying" ? (
          // Sweet curved closed eyes
          <g>
            <path d="M160 165 Q175 178 190 165" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M230 165 Q245 178 260 165" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        ) : action === "refreshed" ? (
          // Happy arc anime eyes
          <g>
            <path d="M160 170 Q175 152 190 170" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M230 170 Q245 152 260 170" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" fill="none" />
          </g>
        ) : action === "drinking" ? (
          // Eyes looking down at glass content
          <g>
            <ellipse cx="176" cy="165" rx="14" ry="12" fill="#0F172A" />
            <circle cx="178" cy="168" r="4" fill="#FFFFFF" />
            <ellipse cx="244" cy="165" rx="14" ry="12" fill="#0F172A" />
            <circle cx="246" cy="168" r="4" fill="#FFFFFF" />
          </g>
        ) : (
          // Big sparkling curious eyes
          <g>
            <ellipse cx="174" cy="160" rx="16" ry="19" fill="#0F172A" />
            <circle cx="168" cy="152" r="6" fill="#FFFFFF" />
            <circle cx="178" cy="168" r="3" fill="#FFFFFF" />

            <ellipse cx="246" cy="160" rx="16" ry="19" fill="#0F172A" />
            <circle cx="240" cy="152" r="6" fill="#FFFFFF" />
            <circle cx="250" cy="168" r="3" fill="#FFFFFF" />
          </g>
        )}

        {/* Mouth */}
        {action === "drinking" ? (
          // O mouth sipping
          <ellipse cx="210" cy="205" rx="10" ry="12" fill="#EF4444" stroke="#0F172A" strokeWidth="4" />
        ) : action === "refreshed" ? (
          // Big joyous open mouth
          <path
            d="M190 195 Q210 228 230 195 Z"
            fill="#EF4444"
            stroke="#0F172A"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        ) : action === "praying" ? (
          // Gentle serene smile
          <path d="M198 200 Q210 210 222 200" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />
        ) : (
          // Cute friendly open smile
          <path
            d="M194 196 Q210 220 226 196"
            stroke="#0F172A"
            strokeWidth="5"
            strokeLinecap="round"
            fill="#EF4444"
          />
        )}

        {/* Arms and Hands based on Action */}
        {action === "curious" && (
          // Hands on hips / waving
          <g>
            <path d="M120 280 Q80 300 110 330" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="112" cy="332" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            <path d="M300 280 Q340 300 310 330" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="308" cy="332" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
          </g>
        )}

        {action === "sitting" && (
          // Hands resting politely on knees
          <g>
            <path d="M125 285 Q120 340 160 360" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="160" cy="360" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            <path d="M295 285 Q300 340 260 360" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="260" cy="360" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
          </g>
        )}

        {action === "holding_right" && (
          // Right hand proudly holding the glass of water forward
          <g>
            {/* Left resting hand */}
            <path d="M125 285 Q120 340 150 360" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="150" cy="360" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            {/* Right arm extended holding glass */}
            <path d="M295 285 Q330 300 300 330" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            
            {/* Glass with Water */}
            <g transform="translate(290, 270)">
              {/* Glass body */}
              <rect x="0" y="0" width="60" height="85" rx="8" fill="url(#glassGrad)" stroke="#0284C7" strokeWidth="3" />
              {/* Water level */}
              <rect x="4" y="25" width="52" height="56" rx="6" fill="url(#waterGrad)" />
              {/* Cute smiling face on glass */}
              <circle cx="24" cy="50" r="3" fill="#FFFFFF" />
              <circle cx="36" cy="50" r="3" fill="#FFFFFF" />
              <path d="M26 60 Q30 66 34 60" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>

            {/* Right hand gripping glass */}
            <circle cx="310" cy="325" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
          </g>
        )}

        {action === "praying" && (
          // Both hands together in front of chest in prayer/bismillah gesture
          <g>
            <path d="M130 290 Q170 310 195 305" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <path d="M290 290 Q250 310 225 305" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            {/* Joined hands */}
            <ellipse cx="200" cy="305" rx="14" ry="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
            <ellipse cx="220" cy="305" rx="14" ry="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
          </g>
        )}

        {action === "drinking" && (
          // Both hands holding glass tipped towards mouth
          <g>
            <g transform={`translate(210, 205) rotate(${glassTilt}) translate(-30, -50)`}>
              {/* Tilted Glass */}
              <rect x="0" y="0" width="60" height="90" rx="8" fill="url(#glassGrad)" stroke="#0284C7" strokeWidth="3" />
              <rect x="4" y={90 - waterLevel} width="52" height={waterLevel - 4} rx="6" fill="url(#waterGrad)" />
              {/* Bubbles in glass */}
              <circle cx="20" cy={90 - waterLevel + 15} r="4" fill="#FFFFFF" opacity="0.7" />
              <circle cx="38" cy={90 - waterLevel + 25} r="3" fill="#FFFFFF" opacity="0.7" />
            </g>

            {/* Arms holding the tilted glass */}
            <path d="M130 285 Q160 230 190 220" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="190" cy="220" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            <path d="M290 285 Q260 230 230 220" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="230" cy="220" r="16" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />
          </g>
        )}

        {action === "refreshed" && (
          // Both arms raised cheering in victory!
          <g>
            <path d="M125 270 Q80 200 90 160" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="90" cy="160" r="18" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            <path d="M295 270 Q340 200 330 160" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="330" cy="160" r="18" fill="#FEF08A" stroke="#0F172A" strokeWidth="4" />

            {/* Sparkles & Stars */}
            <g transform="translate(60, 90)">
              <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" fill="#FBBF24" />
            </g>
            <g transform="translate(330, 90)">
              <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" fill="#FBBF24" />
            </g>
            <g transform="translate(200, 20)">
              <polygon points="16,0 20,12 32,16 20,20 16,32 12,20 0,16 12,12" fill="#F43F5E" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

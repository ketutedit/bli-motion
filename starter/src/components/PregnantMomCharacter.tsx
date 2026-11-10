import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type MomAction =
  | "cradling"   // Standing holding/caressing baby bump lovingly
  | "walking"    // Walking stride movement
  | "gymball"    // Seated on birthing ball, rotating & gently bouncing pelvis
  | "squatting"  // Supported squat pose bending knees
  | "cat_cow";   // On all fours on yoga mat doing gentle pelvic tilts

export interface PregnantMomCharacterProps {
  action: MomAction;
  scale?: number;
}

export const PregnantMomCharacter: React.FC<PregnantMomCharacterProps> = ({
  action = "cradling",
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Natural breathing cycle
  const breathe = Math.sin((frame / fps) * Math.PI * 1.5) * 4;

  // Eye blinking cycle
  const blinkCycle = frame % 65;
  const isBlinking = blinkCycle > 60;

  // Walking cycle kinematics
  const walkPhase = (frame / fps) * 3.5;
  const walkLeg1 = Math.sin(walkPhase) * 22;
  const walkLeg2 = -Math.sin(walkPhase) * 22;
  const walkArm1 = -Math.sin(walkPhase) * 25;
  const walkArm2 = Math.sin(walkPhase) * 25;
  const walkBounce = Math.abs(Math.sin(walkPhase * 2)) * 6;

  // Gymball bouncing & pelvic rotation
  const ballPhase = (frame / fps) * 2.8;
  const ballBounceY = Math.sin(ballPhase) * 8;
  const ballSquash = 1 + Math.sin(ballPhase) * 0.04;
  const pelvicRoll = Math.sin((frame / fps) * 2.2) * 5;

  // Supported Squat knee bend cycle (approx 3 seconds per rep)
  const squatPhase = interpolate(frame % 90, [0, 45, 90], [0, 45, 0]);
  const squatKneeBend = interpolate(squatPhase, [0, 45], [0, 35]);

  // Cat-Cow spine arching cycle
  const catCowPhase = Math.sin((frame / fps) * 2);
  const spineArchY = catCowPhase * 14; // positive = arched up (cat), negative = lowered (cow)

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <svg width="480" height="560" viewBox="0 0 480 560" fill="none">
        <defs>
          <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#291102" />
          </linearGradient>
          <linearGradient id="maternityTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="leggingsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="gymballGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="matGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Soft Ground Shadow */}
        <ellipse cx="240" cy="530" rx={action === "cat_cow" ? 180 : 130} ry="14" fill="#000000" opacity="0.3" />

        {/* =================================================================== */}
        {/* POSE 1: CRADLING BELLY (Standing loving pose)                        */}
        {/* =================================================================== */}
        {action === "cradling" && (
          <g transform={`translate(0, ${breathe})`}>
            {/* Legs Standing */}
            <rect x="200" y="380" width="30" height="130" rx="15" fill="url(#leggingsGrad)" />
            <rect x="250" y="380" width="30" height="130" rx="15" fill="url(#leggingsGrad)" />
            {/* Shoes */}
            <ellipse cx="215" cy="515" rx="22" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            <ellipse cx="265" cy="515" rx="22" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />

            {/* Torso & Big Baby Bump */}
            <path
              d="M190 200 C180 270, 160 380, 240 380 C290 380, 310 320, 300 240 C290 200, 260 190, 220 190 Z"
              fill="url(#maternityTop)"
            />
            {/* Prominent Third-Trimester Rounded Belly */}
            <circle cx="210" cy="290" r="62" fill="url(#maternityTop)" />
            {/* Soft highlight curve on belly */}
            <path d="M175 270 A 50 50 0 0 1 230 330" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Loving Arms Cradling the Bump */}
            {/* Upper arm (holding top of belly) */}
            <path d="M235 210 Q280 250 250 275" stroke="#FDBA74" strokeWidth="22" strokeLinecap="round" fill="none" />
            <ellipse cx="245" cy="280" rx="14" ry="11" fill="#FDBA74" />
            {/* Lower arm (supporting bottom of belly) */}
            <path d="M190 230 Q160 300 210 335" stroke="#FDBA74" strokeWidth="22" strokeLinecap="round" fill="none" />
            <ellipse cx="215" cy="335" rx="14" ry="11" fill="#FDBA74" />

            {/* Head & Face */}
            <Head x={240} y={130} isBlinking={isBlinking} tilt={6} expression="gentle" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 2: WALKING CYCLE (Jalan Kaki Santai)                            */}
        {/* =================================================================== */}
        {action === "walking" && (
          <g transform={`translate(0, ${walkBounce})`}>
            {/* Back Leg */}
            <g transform={`translate(240, 370) rotate(${walkLeg2})`}>
              <rect x="-14" y="0" width="28" height="135" rx="14" fill="url(#leggingsGrad)" />
              <ellipse cx="0" cy="140" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            </g>

            {/* Torso & Belly in Walking Profile */}
            <path
              d="M200 200 C190 270, 180 370, 240 370 C280 370, 300 320, 290 240 C280 200, 250 190, 220 190 Z"
              fill="url(#maternityTop)"
            />
            <circle cx="210" cy="285" r="58" fill="url(#maternityTop)" />
            <path d="M180 265 A 46 46 0 0 1 228 322" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Front Leg */}
            <g transform={`translate(240, 370) rotate(${walkLeg1})`}>
              <rect x="-14" y="0" width="28" height="135" rx="14" fill="url(#leggingsGrad)" />
              <ellipse cx="0" cy="140" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            </g>

            {/* Back Arm Swinging */}
            <g transform={`translate(260, 215) rotate(${walkArm2})`}>
              <path d="M0 0 L15 70" stroke="#FDBA74" strokeWidth="20" strokeLinecap="round" />
              <circle cx="15" cy="75" r="12" fill="#FDBA74" />
            </g>

            {/* Front Arm Swinging */}
            <g transform={`translate(225, 215) rotate(${walkArm1})`}>
              <path d="M0 0 L-20 65" stroke="#FDBA74" strokeWidth="20" strokeLinecap="round" />
              <circle cx="-20" cy="70" r="12" fill="#FDBA74" />
            </g>

            {/* Head Looking Forward Happily */}
            <Head x={245} y={130} isBlinking={isBlinking} tilt={-2} expression="happy" />

            {/* Dynamic Step Wind Streaks */}
            <path d="M140 515 L110 515" stroke="rgba(52, 211, 153, 0.7)" strokeWidth="4" strokeLinecap="round" />
            <path d="M150 495 L125 495" stroke="rgba(52, 211, 153, 0.5)" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 3: SEATED ON GYMBALL (Duduk & Goyang Panggul)                   */}
        {/* =================================================================== */}
        {action === "gymball" && (
          <g>
            {/* Large Gymball with Squash and Stretch */}
            <g transform={`translate(240, 420) scale(1, ${ballSquash})`}>
              <circle cx="0" cy="0" r="110" fill="url(#gymballGrad)" />
              {/* Gymball Grip Ribs */}
              <ellipse cx="0" cy="-40" rx="85" ry="12" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
              <ellipse cx="0" cy="0" rx="105" ry="14" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
              <ellipse cx="0" cy="40" rx="90" ry="12" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
            </g>

            {/* Mom's Seated Body on the Ball with Pelvic Roll */}
            <g transform={`translate(0, ${ballBounceY}) rotate(${pelvicRoll}, 240, 360)`}>
              {/* Seated Legs Spread Comfortably */}
              <g>
                <path d="M190 350 Q130 380 140 470" stroke="url(#leggingsGrad)" strokeWidth="32" strokeLinecap="round" fill="none" />
                <ellipse cx="140" cy="485" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />

                <path d="M290 350 Q350 380 340 470" stroke="url(#leggingsGrad)" strokeWidth="32" strokeLinecap="round" fill="none" />
                <ellipse cx="340" cy="485" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
              </g>

              {/* Seated Torso & Big Bump */}
              <circle cx="240" cy="275" r="64" fill="url(#maternityTop)" />
              <rect x="205" y="190" width="70" height="90" rx="20" fill="url(#maternityTop)" />

              {/* Hands Resting on Knees */}
              <path d="M210 205 Q160 270 170 340" stroke="#FDBA74" strokeWidth="20" strokeLinecap="round" fill="none" />
              <circle cx="170" cy="345" r="12" fill="#FDBA74" />

              <path d="M270 205 Q320 270 310 340" stroke="#FDBA74" strokeWidth="20" strokeLinecap="round" fill="none" />
              <circle cx="310" cy="345" r="12" fill="#FDBA74" />

              {/* Head */}
              <Head x={240} y={130} isBlinking={isBlinking} tilt={pelvicRoll * 0.8} expression="happy" />

              {/* Pelvic Rotation Direction Arrow (Figure 8 guide) */}
              <path
                d="M170 320 C190 300, 230 340, 250 320 C270 300, 310 340, 310 320"
                stroke="#38BDF8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="6 6"
                fill="none"
              />
            </g>
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 4: SUPPORTED SQUAT (Squat Sandaran Dinding/Pegangan)            */}
        {/* =================================================================== */}
        {action === "squatting" && (
          <g transform={`translate(0, ${squatPhase * 0.9})`}>
            {/* Wall or Support Handrail on the left */}
            <line x1="80" y1="120" x2="80" y2="520" stroke="#94A3B8" strokeWidth="12" strokeLinecap="round" />
            <circle cx="80" cy="280" r="14" fill="#64748B" />

            {/* Squatting Bent Legs */}
            <g>
              {/* Back bent leg */}
              <path
                d={`M210 340 L${170 + squatKneeBend * 0.8} 420 L200 515`}
                stroke="url(#leggingsGrad)"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="205" cy="520" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />

              {/* Front bent leg */}
              <path
                d={`M250 340 L${210 + squatKneeBend * 0.8} 420 L240 515`}
                stroke="url(#leggingsGrad)"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="245" cy="520" rx="24" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            </g>

            {/* Torso & Bump (Lowering stably) */}
            <path
              d="M190 200 C180 270, 160 360, 230 360 C280 360, 300 310, 290 240 C280 200, 250 190, 220 190 Z"
              fill="url(#maternityTop)"
            />
            <circle cx="210" cy="280" r="60" fill="url(#maternityTop)" />

            {/* Arm Extending to Hold Support Wall */}
            <path d="M210 215 Q150 240 85 280" stroke="#FDBA74" strokeWidth="22" strokeLinecap="round" fill="none" />
            <circle cx="85" cy="280" r="14" fill="#FDBA74" />

            {/* Head looking forward calmly */}
            <Head x={240} y={130} isBlinking={isBlinking} tilt={0} expression="focused" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 5: PELVIC TILT / CAT-COW (Merangkak di Matras)                  */}
        {/* =================================================================== */}
        {action === "cat_cow" && (
          <g transform="translate(0, 40)">
            {/* Yoga / Exercise Mat */}
            <rect x="50" y="470" width="380" height="18" rx="9" fill="url(#matGrad)" />

            {/* Bent Knees on Mat */}
            <path d="M330 370 L345 470" stroke="url(#leggingsGrad)" strokeWidth="36" strokeLinecap="round" />
            <ellipse cx="360" cy="475" rx="20" ry="10" fill="#F8FAFC" />

            {/* Supporting Arms on Mat */}
            <path d="M140 370 L140 470" stroke="#FDBA74" strokeWidth="24" strokeLinecap="round" />
            <ellipse cx="140" cy="475" rx="16" ry="8" fill="#FDBA74" />

            {/* Arched Spine & Hanging Bump */}
            {/* The Spine Curve transforms up & down via spineArchY */}
            <path
              d={`M135 340 Q240 ${310 - spineArchY} 340 340 L340 370 Q240 ${410 - spineArchY} 135 370 Z`}
              fill="url(#maternityTop)"
            />

            {/* Pregnant Belly Hanging Comfortably between arms and legs */}
            <circle cx="240" cy={370 - spineArchY * 0.4} r="54" fill="url(#maternityTop)" />

            {/* Head in Tabletop Position (Nodding gently) */}
            <g transform={`translate(100, 310) rotate(${spineArchY * 0.8})`}>
              <Head x={0} y={0} isBlinking={isBlinking} tilt={0} expression="gentle" />
            </g>

            {/* Spine Flex Direction Arrows */}
            <path
              d={`M240 270 Q240 ${250 - spineArchY} 240 ${240 - spineArchY * 1.5}`}
              stroke="#A78BFA"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

// Reusable Detailed Rigged Head Component
const Head: React.FC<{
  x: number;
  y: number;
  isBlinking: boolean;
  tilt: number;
  expression: "gentle" | "happy" | "focused";
}> = ({ x, y, isBlinking, tilt, expression }) => {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${tilt})`}>
      {/* Hair Bun at Back */}
      <circle cx="-32" cy="-28" r="28" fill="url(#hairGrad)" />
      {/* Hair Scrunchie */}
      <circle cx="-16" cy="-24" r="10" fill="#FB7185" />

      {/* Head / Face */}
      <circle cx="0" cy="0" r="48" fill="#FED7AA" stroke="#EA580C" strokeWidth="2.5" />

      {/* Modern Hairstyle Covering Forehead & Side */}
      <path
        d="M-42 -10 C-45 -48, 40 -48, 44 -10 C30 -30, -20 -30, -42 -10 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M-35 -15 Q-10 -40 35 -10 Q10 -25 -25 -5"
        fill="url(#hairGrad)"
      />

      {/* Cute Ear */}
      <ellipse cx="-44" cy="5" rx="8" ry="12" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
      <circle cx="-44" cy="12" r="3" fill="#F43F5E" />

      {/* Cheeks Blushing */}
      <ellipse cx="-20" cy="15" rx="10" ry="6" fill="url(#cheekGlow)" />
      <ellipse cx="26" cy="15" rx="10" ry="6" fill="url(#cheekGlow)" />

      {/* Eyes */}
      {isBlinking ? (
        <path d="M-28 2 Q-16 12 -4 2" stroke="#431407" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : expression === "happy" ? (
        <path d="M-26 4 Q-16 -6 -6 4" stroke="#431407" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : (
        <g>
          <ellipse cx="-16" cy="2" rx="6" ry="8" fill="#431407" />
          <circle cx="-18" cy="-1" r="2.5" fill="#FFFFFF" />
        </g>
      )}

      {/* Right Eye */}
      {isBlinking ? (
        <path d="M12 2 Q24 12 36 2" stroke="#431407" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : expression === "happy" ? (
        <path d="M14 4 Q24 -6 34 4" stroke="#431407" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : (
        <g>
          <ellipse cx="24" cy="2" rx="6" ry="8" fill="#431407" />
          <circle cx="22" cy="-1" r="2.5" fill="#FFFFFF" />
        </g>
      )}

      {/* Soft Eyebrows */}
      <path d="M-26 -12 Q-16 -18 -6 -12" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M14 -12 Q24 -18 34 -12" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Gentle Smiling Mouth */}
      <path d="M-4 24 Q6 34 16 24" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
};

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
  const blinkCycle = frame % 70;
  const isBlinking = blinkCycle > 64;

  // Walking cycle kinematics (smooth fluid stride)
  const walkPhase = (frame / fps) * 3.6;
  const walkLeg1 = Math.sin(walkPhase) * 22;
  const walkLeg2 = -Math.sin(walkPhase) * 22;
  const walkArm1 = -Math.sin(walkPhase) * 25;
  const walkArm2 = Math.sin(walkPhase) * 25;
  const walkBounce = Math.abs(Math.sin(walkPhase * 2)) * 6;

  // Gymball bouncing & pelvic rotation
  const ballPhase = (frame / fps) * 3.0;
  const ballBounceY = Math.sin(ballPhase) * 8;
  const ballSquash = 1 + Math.sin(ballPhase) * 0.04;
  const pelvicRoll = Math.sin((frame / fps) * 2.2) * 5;

  // Supported Squat knee bend cycle (approx 3 seconds per rep)
  const squatPhase = interpolate(frame % 90, [0, 45, 90], [0, 48, 0]);
  const squatKneeBend = interpolate(squatPhase, [0, 48], [0, 36]);

  // Cat-Cow spine arching cycle
  const catCowPhase = Math.sin((frame / fps) * 2.2);
  const spineArchY = catCowPhase * 15; // positive = arched up (cat), negative = lowered (cow)

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
      <svg width="520" height="600" viewBox="0 0 520 600" fill="none">
        <defs>
          {/* Soft Blushing Cheeks */}
          <radialGradient id="momCheekGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>

          {/* Hair Gradient */}
          <linearGradient id="momHairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2810" />
            <stop offset="100%" stopColor="#2E1605" />
          </linearGradient>

          {/* Maternity Top: Rose & Coral */}
          <linearGradient id="momTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="60%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>

          {/* Maternity Leggings */}
          <linearGradient id="momLeggingsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Birthing Ball (Gymball) */}
          <linearGradient id="momGymballGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Yoga Mat */}
          <linearGradient id="momMatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>

          {/* Sneaker Accent */}
          <linearGradient id="momShoeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
        </defs>

        {/* Soft Floor Shadow */}
        <ellipse
          cx="260"
          cy="565"
          rx={action === "cat_cow" ? 210 : 145}
          ry="14"
          fill="#000000"
          opacity="0.32"
        />

        {/* =================================================================== */}
        {/* POSE 1: CRADLING BELLY (Standing loving caress)                     */}
        {/* =================================================================== */}
        {action === "cradling" && (
          <g transform={`translate(0, ${breathe})`}>
            {/* Legs Standing */}
            <rect x="228" y="390" width="28" height="160" rx="14" fill="url(#momLeggingsGrad)" />
            <rect x="268" y="390" width="28" height="160" rx="14" fill="url(#momLeggingsGrad)" />

            {/* Sneakers */}
            <ellipse cx="238" cy="552" rx="24" ry="12" fill="url(#momShoeGrad)" />
            <path d="M222 550 Q238 544 254 550" stroke="#FB7185" strokeWidth="3" fill="none" />
            <ellipse cx="280" cy="552" rx="24" ry="12" fill="url(#momShoeGrad)" />
            <path d="M264 550 Q280 544 296 550" stroke="#FB7185" strokeWidth="3" fill="none" />

            {/* Torso & Big 3rd Trimester Bump */}
            <path
              d="M220 220 C210 290, 185 395, 260 395 C305 395, 325 340, 315 250 C305 220, 275 210, 245 210 Z"
              fill="url(#momTopGrad)"
            />
            {/* Large Rounded Belly */}
            <circle cx="236" cy="315" r="66" fill="url(#momTopGrad)" />
            {/* Gentle shine on belly */}
            <path
              d="M200 290 A 54 54 0 0 1 258 355"
              stroke="rgba(255,255,255,0.32)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />

            {/* Sleeves on shoulders */}
            <circle cx="232" cy="235" r="16" fill="url(#momTopGrad)" />
            <circle cx="285" cy="235" r="16" fill="url(#momTopGrad)" />

            {/* Loving Arms Cradling the Bump */}
            {/* Upper arm (caressing top of belly) */}
            <path
              d="M285 235 Q305 280 270 305"
              stroke="#FED7AA"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="265" cy="308" rx="13" ry="10" fill="#FED7AA" />

            {/* Lower arm (supporting bottom of belly) */}
            <path
              d="M232 245 Q190 325 240 360"
              stroke="#FED7AA"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="245" cy="360" rx="13" ry="10" fill="#FED7AA" />

            {/* Neck connecting to torso */}
            <rect x="248" y="200" width="24" height="20" rx="8" fill="#FED7AA" />

            {/* Head & Face */}
            <Head x={260} y={160} isBlinking={isBlinking} tilt={5} expression="gentle" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 2: WALKING CYCLE (Jalan Kaki Santai)                            */}
        {/* =================================================================== */}
        {action === "walking" && (
          <g transform={`translate(0, ${walkBounce})`}>
            {/* Back Leg */}
            <g transform={`translate(245, 395) rotate(${walkLeg2})`}>
              <rect x="-14" y="0" width="28" height="155" rx="14" fill="url(#momLeggingsGrad)" />
              <ellipse cx="0" cy="155" rx="24" ry="12" fill="url(#momShoeGrad)" />
              <path d="M-14 153 Q0 148 14 153" stroke="#FB7185" strokeWidth="3" fill="none" />
            </g>

            {/* Back Arm (Swinging behind body) */}
            <g transform={`translate(228, 235) rotate(${walkArm2})`}>
              <circle cx="0" cy="0" r="15" fill="url(#momTopGrad)" />
              <path d="M0 0 L-20 75" stroke="#FED7AA" strokeWidth="18" strokeLinecap="round" />
              <circle cx="-20" cy="80" r="11" fill="#FED7AA" />
            </g>

            {/* Torso & Big Baby Bump Facing Forward/Right */}
            <path
              d="M210 220 C205 280, 210 395, 260 395 C295 395, 315 360, 310 270 C305 220, 275 210, 235 210 Z"
              fill="url(#momTopGrad)"
            />
            {/* Round Baby Bump bulging towards front/right */}
            <circle cx="280" cy="315" r="64" fill="url(#momTopGrad)" />
            <path
              d="M260 275 A 50 50 0 0 1 315 345"
              stroke="rgba(255,255,255,0.32)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />

            {/* Front Leg */}
            <g transform={`translate(255, 395) rotate(${walkLeg1})`}>
              <rect x="-14" y="0" width="28" height="155" rx="14" fill="url(#momLeggingsGrad)" />
              <ellipse cx="0" cy="155" rx="24" ry="12" fill="url(#momShoeGrad)" />
              <path d="M-14 153 Q0 148 14 153" stroke="#FB7185" strokeWidth="3" fill="none" />
            </g>

            {/* Front Arm (Swinging forward with sleeve) */}
            <g transform={`translate(255, 235) rotate(${walkArm1})`}>
              <circle cx="0" cy="0" r="16" fill="url(#momTopGrad)" />
              <path d="M0 0 L20 75" stroke="#FED7AA" strokeWidth="18" strokeLinecap="round" />
              <circle cx="20" cy="80" r="11" fill="#FED7AA" />
            </g>

            {/* Neck */}
            <rect x="250" y="200" width="24" height="20" rx="8" fill="#FED7AA" />

            {/* Head Looking Forward Happily */}
            <Head x={262} y={160} isBlinking={isBlinking} tilt={-2} expression="happy" />

            {/* Dynamic Step Wind Streaks behind footsteps */}
            <path d="M150 550 L115 550" stroke="rgba(52, 211, 153, 0.75)" strokeWidth="4" strokeLinecap="round" />
            <path d="M165 530 L135 530" stroke="rgba(52, 211, 153, 0.55)" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 3: SEATED ON GYMBALL (Duduk & Goyang Panggul)                   */}
        {/* =================================================================== */}
        {action === "gymball" && (
          <g>
            {/* Large Gymball with Squash and Stretch */}
            <g transform={`translate(260, 445) scale(1, ${ballSquash})`}>
              <circle cx="0" cy="0" r="115" fill="url(#momGymballGrad)" />
              {/* Gymball Grip Ribs */}
              <ellipse cx="0" cy="-45" rx="90" ry="14" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
              <ellipse cx="0" cy="0" rx="110" ry="16" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
              <ellipse cx="0" cy="45" rx="95" ry="14" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
            </g>

            {/* Mom's Seated Body on the Ball with Pelvic Roll */}
            <g transform={`translate(0, ${ballBounceY}) rotate(${pelvicRoll}, 260, 390)`}>
              {/* Seated Legs Spread Comfortably */}
              <g>
                <path
                  d="M210 375 Q150 410 160 505"
                  stroke="url(#momLeggingsGrad)"
                  strokeWidth="32"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse cx="160" cy="520" rx="24" ry="12" fill="url(#momShoeGrad)" />

                <path
                  d="M310 375 Q370 410 360 505"
                  stroke="url(#momLeggingsGrad)"
                  strokeWidth="32"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse cx="360" cy="520" rx="24" ry="12" fill="url(#momShoeGrad)" />
              </g>

              {/* Seated Torso & Big Bump */}
              <circle cx="260" cy="300" r="68" fill="url(#momTopGrad)" />
              <rect x="225" y="210" width="70" height="95" rx="20" fill="url(#momTopGrad)" />

              {/* Sleeves */}
              <circle cx="225" cy="225" r="16" fill="url(#momTopGrad)" />
              <circle cx="295" cy="225" r="16" fill="url(#momTopGrad)" />

              {/* Hands Resting on Thighs/Knees */}
              <path
                d="M225 225 Q180 295 190 370"
                stroke="#FED7AA"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="190" cy="375" r="11" fill="#FED7AA" />

              <path
                d="M295 225 Q340 295 330 370"
                stroke="#FED7AA"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="330" cy="375" r="11" fill="#FED7AA" />

              {/* Neck */}
              <rect x="248" y="195" width="24" height="20" rx="8" fill="#FED7AA" />

              {/* Head */}
              <Head x={260} y={155} isBlinking={isBlinking} tilt={pelvicRoll * 0.8} expression="happy" />

              {/* Pelvic Rotation Direction Arrow (Figure 8 guide) */}
              <path
                d="M190 345 C210 325, 250 365, 270 345 C290 325, 330 365, 330 345"
                stroke="#38BDF8"
                strokeWidth="4.5"
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
            <line x1="100" y1="120" x2="100" y2="550" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
            <circle cx="100" cy="295" r="16" fill="#64748B" />

            {/* Squatting Bent Legs */}
            <g>
              {/* Back bent leg */}
              <path
                d={`M230 370 L${190 + squatKneeBend * 0.8} 450 L220 545`}
                stroke="url(#momLeggingsGrad)"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="225" cy="550" rx="24" ry="12" fill="url(#momShoeGrad)" />

              {/* Front bent leg */}
              <path
                d={`M270 370 L${230 + squatKneeBend * 0.8} 450 L260 545`}
                stroke="url(#momLeggingsGrad)"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="265" cy="550" rx="24" ry="12" fill="url(#momShoeGrad)" />
            </g>

            {/* Torso & Bump (Lowering stably) */}
            <path
              d="M210 220 C200 290, 180 380, 250 380 C300 380, 320 330, 310 255 C300 220, 270 210, 240 210 Z"
              fill="url(#momTopGrad)"
            />
            <circle cx="230" cy="305" r="64" fill="url(#momTopGrad)" />

            {/* Sleeve */}
            <circle cx="230" cy="235" r="16" fill="url(#momTopGrad)" />

            {/* Arm Extending to Hold Support Handrail */}
            <path
              d="M230 235 Q170 260 105 295"
              stroke="#FED7AA"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="105" cy="295" r="13" fill="#FED7AA" />

            {/* Neck */}
            <rect x="248" y="200" width="24" height="20" rx="8" fill="#FED7AA" />

            {/* Head looking forward calmly */}
            <Head x={260} y={160} isBlinking={isBlinking} tilt={0} expression="focused" />
          </g>
        )}

        {/* =================================================================== */}
        {/* POSE 5: PELVIC TILT / CAT-COW (Merangkak di Matras)                  */}
        {/* =================================================================== */}
        {action === "cat_cow" && (
          <g transform="translate(0, 40)">
            {/* Yoga / Exercise Mat */}
            <rect x="50" y="490" width="420" height="20" rx="10" fill="url(#momMatGrad)" />
            {/* Mat rolled edges for realism */}
            <circle cx="50" cy="500" r="10" fill="#7C3AED" />
            <circle cx="470" cy="500" r="10" fill="#7C3AED" />

            {/* Back Bent Knees on Mat (Left side) */}
            <g>
              <path
                d="M175 350 L145 440 L165 490"
                stroke="url(#momLeggingsGrad)"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="165" cy="495" rx="18" ry="10" fill="url(#momShoeGrad)" />
            </g>

            {/* Arched Spine & Torso (Curving dynamically with spineArchY) */}
            <path
              d={`M165 340 Q250 ${305 - spineArchY} 335 340 L335 385 Q250 ${415 - spineArchY} 165 385 Z`}
              fill="url(#momTopGrad)"
            />

            {/* Pregnant Belly Hanging Comfortably */}
            <circle cx="250" cy={385 - spineArchY * 0.4} r="58" fill="url(#momTopGrad)" />
            <path
              d={`M215 ${380 - spineArchY * 0.4} A 44 44 0 0 0 275 ${400 - spineArchY * 0.4}`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Supporting Arms on Mat (Right side) */}
            <g>
              <circle cx="330" cy="360" r="16" fill="url(#momTopGrad)" />
              <path d="M330 360 L330 490" stroke="#FED7AA" strokeWidth="22" strokeLinecap="round" />
              <ellipse cx="330" cy="495" rx="16" ry="8" fill="#FED7AA" />
            </g>

            {/* Neck connecting to head */}
            <rect x="325" y="310" width="22" height="25" rx="8" fill="#FED7AA" />

            {/* Head in Tabletop Position (Facing right/forward calmly) */}
            <g transform={`translate(345, 275) rotate(${spineArchY * 0.3})`}>
              <Head x={0} y={0} isBlinking={isBlinking} tilt={5} expression="gentle" />
            </g>

            {/* Spine Flex Direction Indicator Arc */}
            <path
              d={`M200 ${290 - spineArchY} Q250 ${265 - spineArchY * 1.3} 300 ${290 - spineArchY}`}
              stroke="#C4B5FD"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="6 6"
              fill="none"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

// Reusable Clean Vector Head Component
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
      <circle cx="-32" cy="-28" r="28" fill="url(#momHairGrad)" />
      {/* Hair Scrunchie / Tie */}
      <circle cx="-16" cy="-24" r="10" fill="#FB7185" />

      {/* Head / Face: Soft Natural Skin Tone without harsh border */}
      <circle cx="0" cy="0" r="48" fill="#FED7AA" />

      {/* Modern Hair Covering Forehead & Side */}
      <path
        d="M-44 -10 C-47 -48, 40 -48, 44 -10 C30 -30, -20 -30, -44 -10 Z"
        fill="url(#momHairGrad)"
      />
      <path
        d="M-36 -16 Q-10 -40 36 -12 Q10 -26 -26 -6"
        fill="url(#momHairGrad)"
      />

      {/* Ear with Little Pearl Earring */}
      <ellipse cx="-44" cy="5" rx="8" ry="12" fill="#FED7AA" />
      <circle cx="-44" cy="12" r="3.5" fill="#F43F5E" />

      {/* Cheeks Blushing */}
      <ellipse cx="-20" cy="16" rx="11" ry="7" fill="url(#momCheekGlow)" />
      <ellipse cx="26" cy="16" rx="11" ry="7" fill="url(#momCheekGlow)" />

      {/* Left Eye */}
      {isBlinking ? (
        <path d="M-28 2 Q-16 12 -4 2" stroke="#3B1808" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : expression === "happy" ? (
        <path d="M-26 4 Q-16 -8 -6 4" stroke="#3B1808" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : (
        <g>
          <ellipse cx="-16" cy="2" rx="6" ry="8" fill="#3B1808" />
          <circle cx="-18" cy="-1" r="2.5" fill="#FFFFFF" />
        </g>
      )}

      {/* Right Eye */}
      {isBlinking ? (
        <path d="M12 2 Q24 12 36 2" stroke="#3B1808" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : expression === "happy" ? (
        <path d="M14 4 Q24 -8 34 4" stroke="#3B1808" strokeWidth="4" strokeLinecap="round" fill="none" />
      ) : (
        <g>
          <ellipse cx="24" cy="2" rx="6" ry="8" fill="#3B1808" />
          <circle cx="22" cy="-1" r="2.5" fill="#FFFFFF" />
        </g>
      )}

      {/* Soft Eyebrows */}
      <path d="M-26 -12 Q-16 -18 -6 -12" stroke="#4A2810" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M14 -12 Q24 -18 34 -12" stroke="#4A2810" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Gentle Smiling Mouth */}
      <path d="M-4 24 Q6 34 16 24" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
};

import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const TAU = Math.PI * 2;

export const AbstractOrbitLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const period = 180;
  const phase = (frame % period) / period;
  const angle = phase * 360;

  const particles = Array.from({ length: 12 }, (_, index) => {
    const theta = phase * TAU + (index / 12) * TAU;
    const radius = 250 + Math.sin(phase * TAU * 2 + index * 0.55) * 34;
    return {
      x: 540 + Math.cos(theta) * radius,
      y: 540 + Math.sin(theta) * radius * 0.72,
      size: 15 + (index % 3) * 7,
      rotation: angle + index * 30,
    };
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#17191F", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 50% 48%, #35313B 0%, #17191F 62%)" }} />

      <svg width="1080" height="1080" viewBox="0 0 1080 1080" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="orbit-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3B58C" />
            <stop offset="55%" stopColor="#B6C8BB" />
            <stop offset="100%" stopColor="#829AB1" />
          </linearGradient>
          <radialGradient id="orbit-core">
            <stop offset="0%" stopColor="#F3C5A6" />
            <stop offset="100%" stopColor="#D47D62" />
          </radialGradient>
        </defs>

        <ellipse cx="540" cy="540" rx="330" ry="238" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1.5" opacity="0.35" transform={`rotate(${angle} 540 540)`} />
        <ellipse cx="540" cy="540" rx="270" ry="340" fill="none" stroke="#BAC6C0" strokeWidth="1" opacity="0.22" transform={`rotate(${-angle * 0.7} 540 540)`} />
        <ellipse cx="540" cy="540" rx="190" ry="135" fill="none" stroke="#E8C5AF" strokeWidth="1.5" opacity="0.35" transform={`rotate(${angle * 0.5} 540 540)`} />

        <g transform={`rotate(${angle} 540 540)`}>
          <path d="M540 280 C690 300 785 405 760 540 C735 675 640 760 540 800 C420 760 330 670 320 540 C310 410 410 300 540 280 Z" fill="none" stroke="#D9B39A" strokeWidth="2" opacity="0.6" />
          <path d="M540 360 C630 390 690 455 675 540 C660 625 600 680 540 700 C460 665 400 610 405 530 C410 450 470 385 540 360 Z" fill="none" stroke="#A9C1B3" strokeWidth="2" opacity="0.75" />
        </g>

        {particles.map((particle, index) => (
          <g key={index} transform={`translate(${particle.x} ${particle.y}) rotate(${particle.rotation})`}>
            {index % 3 === 0 ? (
              <rect x={-particle.size} y={-particle.size} width={particle.size * 2} height={particle.size * 2} rx={particle.size * 0.45} fill="#E5AD8C" opacity="0.9" />
            ) : index % 3 === 1 ? (
              <circle r={particle.size} fill="#AFC5B6" opacity="0.88" />
            ) : (
              <path d={`M0 ${-particle.size * 1.25} L${particle.size} ${particle.size} L${-particle.size} ${particle.size} Z`} fill="#8EA6BA" opacity="0.9" />
            )}
          </g>
        ))}

        <circle cx="540" cy="540" r="82" fill="url(#orbit-core)" opacity="0.94" />
        <circle cx="540" cy="540" r="101" fill="none" stroke="#F3D2B8" strokeWidth="1.5" opacity="0.48" />
      </svg>
    </AbsoluteFill>
  );
};

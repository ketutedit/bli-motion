import React from "react";
import { useCurrentFrame } from "remotion";

export interface RainParticlesProps {
  density?: number;
  speed?: number;
}

export const RainParticles: React.FC<RainParticlesProps> = ({
  density = 40,
  speed = 18,
}) => {
  const frame = useCurrentFrame();

  const drops = React.useMemo(() => {
    return Array.from({ length: density }).map((_, i) => ({
      x: (i * 1920) / density + ((i * 37) % 50),
      delay: (i * 7) % 30,
      length: 25 + (i % 5) * 8,
      opacity: 0.3 + (i % 4) * 0.2,
      thickness: 2 + (i % 3) * 0.8,
    }));
  }, [density]);

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 25,
      }}
    >
      {drops.map((drop, i) => {
        // Continuous diagonal rainfall
        const progress = ((frame * speed + drop.delay * 20) % 1200) / 1200;
        const currentY = progress * 1150 - 50;
        const currentX = drop.x - progress * 150; // slight wind tilt

        return (
          <line
            key={i}
            x1={currentX}
            y1={currentY}
            x2={currentX - 6}
            y2={currentY + drop.length}
            stroke="#38BDF8"
            strokeWidth={drop.thickness}
            strokeOpacity={drop.opacity}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

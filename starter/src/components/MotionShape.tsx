import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type MotionShapeType =
  | "circle"
  | "ellipse"
  | "rectangle"
  | "rounded-rectangle"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "line";

export interface MotionShapeProps {
  shape?: MotionShapeType;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  radius?: number;
  rotation?: number;
  delay?: number;
  entrance?: "spring" | "fade" | "none";
  damping?: number;
  mass?: number;
  style?: React.CSSProperties;
}

/**
 * A geometric SVG primitive with optional frame-driven entrance.
 * It intentionally has no built-in palette, glow, texture, or background.
 */
export const MotionShape: React.FC<MotionShapeProps> = ({
  shape = "circle",
  width = 120,
  height = 120,
  fill = "currentColor",
  stroke = "none",
  strokeWidth = 0,
  radius = 12,
  rotation = 0,
  delay = 0,
  entrance = "spring",
  damping = 16,
  mass = 0.65,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - delay;

  if (entrance !== "none" && localFrame < 0) return null;

  const progress =
    entrance === "spring"
      ? spring({
          frame: localFrame,
          fps,
          config: { damping, mass },
        })
      : entrance === "fade"
        ? interpolate(localFrame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        : 1;

  const common = {
    fill,
    stroke,
    strokeWidth,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };

  let geometry: React.ReactNode;

  switch (shape) {
    case "circle":
      geometry = <circle cx="50" cy="50" r="46" {...common} />;
      break;
    case "ellipse":
      geometry = <ellipse cx="50" cy="50" rx="47" ry="32" {...common} />;
      break;
    case "rectangle":
      geometry = <rect x="4" y="4" width="92" height="92" {...common} />;
      break;
    case "rounded-rectangle":
      geometry = <rect x="4" y="4" width="92" height="92" rx={radius} {...common} />;
      break;
    case "triangle":
      geometry = <polygon points="50,5 96,94 4,94" {...common} />;
      break;
    case "diamond":
      geometry = <polygon points="50,3 97,50 50,97 3,50" {...common} />;
      break;
    case "hexagon":
      geometry = <polygon points="25,5 75,5 98,50 75,95 25,95 2,50" {...common} />;
      break;
    case "line":
      geometry = (
        <line
          x1="5"
          y1="50"
          x2="95"
          y2="50"
          stroke={stroke === "none" ? fill : stroke}
          strokeWidth={strokeWidth > 0 ? strokeWidth : 4}
          strokeLinecap="round"
        />
      );
      break;
  }

  const scale = entrance === "spring" ? progress : 1;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      role="presentation"
      aria-hidden="true"
      style={{
        display: "block",
        overflow: "visible",
        opacity: progress,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center center",
        ...style,
      }}
    >
      {geometry}
    </svg>
  );
};

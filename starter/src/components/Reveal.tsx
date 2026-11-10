import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type RevealEffect =
  | "fade"
  | "rise"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "wipe-up"
  | "wipe-left"
  | "wipe-right"
  | "none";

export type RevealMotion = "spring" | "linear";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  durationInFrames?: number;
  effect?: RevealEffect;
  motion?: RevealMotion;
  distance?: number;
  damping?: number;
  mass?: number;
  stiffness?: number;
  transformOrigin?: string;
  style?: React.CSSProperties;
}

/**
 * A neutral entrance wrapper. It animates presentation only; it does not
 * prescribe typography, color, surface, or art direction for its children.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  durationInFrames = 18,
  effect = "fade",
  motion = "spring",
  distance = 28,
  damping = 18,
  mass = 0.7,
  stiffness,
  transformOrigin = "center center",
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - delay;

  if (effect !== "none" && localFrame < 0) return null;

  const progress =
    effect === "none"
      ? 1
      : motion === "spring"
        ? spring({
            frame: localFrame,
            fps,
            config: {
              damping,
              mass,
              ...(stiffness === undefined ? {} : { stiffness }),
            },
          })
        : interpolate(localFrame, [0, Math.max(1, durationInFrames)], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

  let transform = "none";
  let clipPath: string | undefined;

  switch (effect) {
    case "rise":
      transform = `translateY(${(1 - progress) * distance}px)`;
      break;
    case "slide-left":
      transform = `translateX(${(1 - progress) * distance}px)`;
      break;
    case "slide-right":
      transform = `translateX(${(1 - progress) * -distance}px)`;
      break;
    case "scale":
      transform = `scale(${0.92 + progress * 0.08})`;
      break;
    case "wipe-up":
      clipPath = `inset(${(1 - progress) * 100}% 0 0 0)`;
      break;
    case "wipe-left":
      clipPath = `inset(0 0 0 ${(1 - progress) * 100}%)`;
      break;
    case "wipe-right":
      clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
      break;
    case "fade":
    case "none":
      break;
  }

  return (
    <div
      style={{
        opacity: effect === "fade" ? progress : 1,
        transform,
        transformOrigin,
        clipPath,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

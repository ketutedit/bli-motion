import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface KineticTextProps {
  text: string;
  delay?: number;
  staggerFrames?: number;
  entrance?: "spring" | "fade" | "none";
  highlightWord?: string;
  highlightColor?: string;
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  letterSpacing?: number | string;
  lineHeight?: number | string;
  textColor?: string;
  align?: "left" | "center" | "right";
  gap?: number | string;
  maxWidth?: number | string;
  highlightShadow?: boolean;
  style?: React.CSSProperties;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  delay = 0,
  staggerFrames = 4,
  entrance = "spring",
  highlightWord,
  highlightColor = "#38BDF8",
  fontSize = 64,
  fontFamily = "system-ui, -apple-system, sans-serif",
  fontWeight = 800,
  letterSpacing = "-0.02em",
  lineHeight = 1.1,
  textColor = "#F8FAFC",
  align = "center",
  gap = 14,
  maxWidth,
  highlightShadow = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");
  const justifyContent =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

  const normalize = (value: string) =>
    value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap,
        justifyContent,
        alignItems: "center",
        maxWidth,
        textAlign: align,
        ...style,
      }}
    >
      {words.map((word, index) => {
        const wordDelay = delay + (entrance === "none" ? 0 : index * staggerFrames);
        const localFrame = frame - wordDelay;

        const progress =
          entrance === "spring"
            ? spring({
                frame: localFrame,
                fps,
                config: { damping: 14, mass: 0.5 },
              })
            : entrance === "fade"
              ? interpolate(localFrame, [0, 8], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : frame >= wordDelay
                ? 1
                : 0;

        const isHighlight =
          Boolean(highlightWord) && normalize(word) === normalize(highlightWord ?? "");

        if (frame < wordDelay) {
          return null;
        }

        return (
          <span
            key={index}
            style={{
              fontFamily,
              fontSize,
              fontWeight,
              lineHeight,
              color: isHighlight ? highlightColor : textColor,
              transform:
                entrance === "spring"
                  ? `translateY(${(1 - progress) * 24}px) scale(${0.8 + 0.2 * progress})`
                  : "none",
              opacity: progress,
              display: "inline-block",
              letterSpacing,
              textShadow:
                isHighlight && highlightShadow
                  ? `0 0 30px ${highlightColor}66`
                  : "none",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface KineticTextProps {
  text: string;
  delay?: number;
  highlightWord?: string;
  highlightColor?: string;
  fontSize?: number;
  textColor?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  delay = 0,
  highlightWord,
  highlightColor = "#38BDF8",
  fontSize = 64,
  textColor = "#F8FAFC",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * 4;
        const progress = spring({
          frame: frame - wordDelay,
          fps,
          config: { damping: 14, mass: 0.5 },
        });

        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (frame < wordDelay) {
          return null;
        }

        return (
          <span
            key={index}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: `${fontSize}px`,
              fontWeight: 800,
              color: isHighlight ? highlightColor : textColor,
              transform: `translateY(${(1 - progress) * 24}px) scale(${0.8 + 0.2 * progress})`,
              opacity: progress,
              display: "inline-block",
              letterSpacing: "-0.02em",
              textShadow: isHighlight
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

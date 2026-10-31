import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface AppleStyleTextProps {
  text: string;
  delay?: number;
  highlightWord?: string;
  highlightGradient?: string;
  fontSize?: number;
  textColor?: string;
  staggerFrames?: number;
}

export const AppleStyleText: React.FC<AppleStyleTextProps> = ({
  text,
  delay = 10,
  highlightWord,
  highlightGradient = "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
  fontSize = 58,
  textColor = "#F8FAFC",
  staggerFrames = 4,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: `${fontSize * 0.26}px`,
        maxWidth: "1300px",
        padding: "0 20px",
      }}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * staggerFrames;
        const localFrame = frame - wordDelay;

        // Apple signature cubic-bezier ease out (fast acceleration, buttery prolonged deceleration)
        const progress = interpolate(
          localFrame,
          [0, 18],
          [0, 1],
          {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        // Motion blur simulation during rapid movement (from Premiere Pro / Apple ads)
        const blurAmount = interpolate(progress, [0, 0.6, 1], [14, 3, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        // Vertical slide up from behind mask line
        const translateY = interpolate(progress, [0, 1], [115, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        // Subtle scale settling
        const scale = interpolate(progress, [0, 1], [0.92, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (frame < wordDelay) {
          return (
            <span
              key={index}
              style={{
                display: "inline-block",
                overflow: "hidden",
                height: `${fontSize * 1.25}px`,
                visibility: "hidden",
              }}
            >
              {word}
            </span>
          );
        }

        return (
          // Mask container (overflow: hidden clips the word as it rises up)
          <span
            key={index}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              height: `${fontSize * 1.3}px`,
              lineHeight: `${fontSize * 1.25}px`,
              paddingBottom: `${fontSize * 0.08}px`,
            }}
          >
            {/* The rising word with motion blur, slide, and scale */}
            <span
              style={{
                display: "inline-block",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif",
                fontSize: `${fontSize}px`,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: isHighlight ? "transparent" : textColor,
                backgroundImage: isHighlight ? highlightGradient : undefined,
                WebkitBackgroundImage: isHighlight ? highlightGradient : undefined,
                WebkitBackgroundClip: isHighlight ? "text" : undefined,
                backgroundClip: isHighlight ? "text" : undefined,
                transform: `translateY(${translateY}%) scale(${scale})`,
                opacity: progress,
                filter: blurAmount > 0.3 ? `blur(${blurAmount}px)` : "none",
                willChange: "transform, opacity, filter",
                textShadow: isHighlight
                  ? "0 0 40px rgba(56, 189, 248, 0.4)"
                  : "0 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};

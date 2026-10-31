import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

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
  fontSize = 54,
  textColor = "#F8FAFC",
  staggerFrames = 3,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "1150px",
        margin: "0 auto",
        lineHeight: 1.25,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif",
        fontSize: `${fontSize}px`,
        fontWeight: 800,
        letterSpacing: "-0.03em",
      }}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * staggerFrames;
        const localFrame = frame - wordDelay;

        // Clean Apple ease-out in place
        const progress = interpolate(localFrame, [0, 14], [0, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        // Strictly vertical reveal: 100% to 0%
        const translateY = interpolate(progress, [0, 1], [100, 0]);
        // Subtle fade in parallel with the slide
        const opacity = interpolate(progress, [0, 0.3, 1], [0, 0.6, 1]);

        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, "");

        return (
          <React.Fragment key={index}>
            {/* Stable inline mask: keeps exact word width and position fixed at all times */}
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                paddingBottom: "4px",
              }}
            >
              {/* Inner word sliding up strictly on the Y-axis inside its fixed slot */}
              <span
                style={{
                  display: "inline-block",
                  color: isHighlight ? "transparent" : textColor,
                  backgroundImage: isHighlight ? highlightGradient : undefined,
                  WebkitBackgroundImage: isHighlight ? highlightGradient : undefined,
                  WebkitBackgroundClip: isHighlight ? "text" : undefined,
                  backgroundClip: isHighlight ? "text" : undefined,
                  transform: `translateY(${translateY}%)`,
                  opacity,
                  textShadow: isHighlight
                    ? "0 0 25px rgba(56, 189, 248, 0.35)"
                    : "0 2px 10px rgba(0, 0, 0, 0.4)",
                  willChange: "transform, opacity",
                }}
              >
                {word}
              </span>
            </span>
            {/* Standard spacing between words so paragraph wrapping is completely natural */}
            {index < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </div>
  );
};

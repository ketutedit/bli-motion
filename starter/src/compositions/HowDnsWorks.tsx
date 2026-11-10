import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

export const HowDnsWorks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const searchIn = spring({ frame: frame - 12, fps, config: { damping: 18, mass: 0.8 } });
  const directoryIn = spring({ frame: frame - 132, fps, config: { damping: 19, mass: 0.9 } });
  const lookupIn = spring({ frame: frame - 205, fps, config: { damping: 16, mass: 0.7 } });
  const serverIn = spring({ frame: frame - 330, fps, config: { damping: 18, mass: 0.8 } });
  const requestProgress = interpolate(frame, [128, 188], [0, 1], clamp);
  const connectionProgress = interpolate(frame, [320, 380], [0, 1], clamp);
  const titleOut = interpolate(frame, [112, 145], [1, 0], clamp);
  const resultOpacity = interpolate(frame, [205, 230], [0, 1], clamp);
  const finalOpacity = interpolate(frame, [365, 390], [0, 1], clamp);
  const pulse = 1 + Math.sin((frame / fps) * Math.PI * 2) * 0.018;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F3F0E8",
        color: "#1D2528",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 58,
          left: 92,
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "0.16em",
          color: "#687276",
        }}
      >
        INTERNET, MADE CLEAR / 01
      </div>

      <div
        style={{
          position: "absolute",
          top: 112,
          left: 92,
          right: 92,
          opacity: titleOut,
          transform: `translateY(${(1 - titleOut) * -18}px)`,
        }}
      >
        <div style={{ fontSize: 66, lineHeight: 1.02, fontWeight: 800, maxWidth: 1050 }}>
          How does a browser
          <br />
          find a website?
        </div>
        <div style={{ marginTop: 18, fontSize: 24, color: "#687276" }}>
          It starts with a name. The internet needs an address.
        </div>
      </div>

      {/* Browser request */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 430,
          width: 460,
          borderRadius: 22,
          backgroundColor: "#FFFFFF",
          border: "1px solid #D8D5CC",
          zIndex: 2,
          boxShadow: "0 22px 55px rgba(29, 37, 40, 0.10)",
          overflow: "hidden",
          opacity: searchIn,
          transform: `translateY(${(1 - searchIn) * 38}px) scale(${0.96 + 0.04 * searchIn})`,
        }}
      >
        <div style={{ height: 54, display: "flex", alignItems: "center", padding: "0 22px", gap: 9, borderBottom: "1px solid #EEECE5" }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E78A70" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E7C16F" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#89A98F" }} />
          <div style={{ marginLeft: 15, color: "#8B9394", fontSize: 15 }}>Browser address</div>
        </div>
        <div style={{ padding: "34px 36px 38px" }}>
          <div style={{ fontSize: 16, color: "#7C8585", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>YOU TYPE A DOMAIN</div>
          <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.04em" }}>example.com</div>
          <div style={{ height: 5, width: 110, background: "#E4775E", marginTop: 25, borderRadius: 8 }} />
        </div>
      </div>

      {/* DNS directory */}
      <div
        style={{
          position: "absolute",
          left: 640,
          top: 385,
          width: 590,
          opacity: directoryIn,
          transform: `translateY(${(1 - directoryIn) * 32}px) scale(${0.94 + directoryIn * 0.06})`,
          borderRadius: 24,
          background: "#E5E9E3",
          border: "1px solid #C8D2C9",
          padding: "28px 32px 30px",
          zIndex: 2,
          boxShadow: "0 24px 60px rgba(29, 37, 40, 0.09)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "0.13em", color: "#63766A" }}>DNS RESOLVER</div>
          <div style={{ background: "#C7D7C8", color: "#3F6950", borderRadius: 999, padding: "7px 12px", fontSize: 13, fontWeight: 700 }}>LOOKUP</div>
        </div>
        <div style={{ marginTop: 23, fontSize: 35, lineHeight: 1.08, fontWeight: 800 }}>The internet's<br/>contact directory.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 26, padding: "18px 20px", borderRadius: 15, background: "#F8FAF6", border: "1px solid #D7E0D6" }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#7D8B80", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>DOMAIN NAME</div>
            <div style={{ marginTop: 5, fontSize: 22, fontWeight: 800 }}>example.com</div>
          </div>
          <div style={{ color: "#91A097", fontSize: 25 }}>→</div>
          <div style={{ flex: 1, opacity: resultOpacity }}>
            <div style={{ color: "#7D8B80", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>IP ADDRESS</div>
            <div style={{ marginTop: 5, fontSize: 22, fontWeight: 800, color: "#D36F56" }}>203.0.113.42</div>
          </div>
        </div>
        <div style={{ marginTop: 14, color: "#718078", fontSize: 15 }}>A demonstration address from a reserved documentation range.</div>
      </div>

      {/* Motion connectors */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
      >
        <path
          d="M 560 520 C 590 520, 610 520, 640 520"
          fill="none"
          stroke="#D36F56"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1"
          pathLength="1"
          strokeDashoffset={1 - requestProgress}
        />
        <path
          d="M 1230 520 C 1260 520, 1285 520, 1325 520"
          fill="none"
          stroke="#5C8D70"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1"
          pathLength="1"
          strokeDashoffset={1 - connectionProgress}
        />
      </svg>

      {/* Destination server */}
      <div
        style={{
          position: "absolute",
          left: 1325,
          top: 423,
          width: 460,
          opacity: serverIn,
          transform: `translateY(${(1 - serverIn) * 35}px) scale(${0.95 + 0.05 * serverIn})`,
        }}
      >
        <div style={{ borderRadius: 22, background: "#25353A", color: "#F8F5ED", padding: "28px 30px 30px", boxShadow: "0 24px 60px rgba(29,37,40,0.18)", zIndex: 2 }}>
          <div style={{ color: "#B9C9BF", fontSize: 15, fontWeight: 700, letterSpacing: "0.13em" }}>DESTINATION SERVER</div>
          <div style={{ marginTop: 21, display: "flex", gap: 8, flexDirection: "column" }}>
            <div style={{ height: 10, width: "82%", borderRadius: 5, background: "#82958A" }} />
            <div style={{ height: 10, width: "62%", borderRadius: 5, background: "#82958A" }} />
            <div style={{ height: 10, width: "72%", borderRadius: 5, background: "#82958A" }} />
          </div>
          <div style={{ marginTop: 27, background: "#F3F0E8", color: "#25353A", borderRadius: 12, padding: "15px 17px", fontWeight: 800, fontSize: 21, transform: `scale(${finalOpacity > 0 ? pulse : 1})` }}>
            Website connected
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 92, bottom: 66, opacity: finalOpacity, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 44, height: 4, borderRadius: 3, background: "#E4775E" }} />
        <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: "-0.02em" }}>Name → DNS lookup → IP address → Website</div>
      </div>

      <div style={{ position: "absolute", right: 92, bottom: 72, color: "#7C8585", fontSize: 14, fontWeight: 700, letterSpacing: "0.12em" }}>BLI MOTION / EXPLAINER STUDY</div>
    </AbsoluteFill>
  );
};

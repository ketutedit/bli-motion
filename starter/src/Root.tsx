import React from "react";
import { Composition } from "remotion";
import { MainExplainer } from "./compositions/MainExplainer";
import { HowRainForms } from "./compositions/HowRainForms";
import { KidsDrinkingGuide } from "./compositions/KidsDrinkingGuide";
import { StreamFlowPromo } from "./compositions/StreamFlowPromo";
import { PregnancyTipsReel } from "./compositions/PregnancyTipsReel";

export const Root: React.FC = () => {
  return (
    <>
      {/* 80-Second Instagram Reels (9:16 Vertical): Tips Ibu Hamil Trimester 3 */}
      <Composition
        id="PregnancyTipsReel"
        component={PregnancyTipsReel}
        durationInFrames={2400} // 80 seconds @ 30fps
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 32-Second Promo Video: StreamFlow by Bang Tutorial */}
      <Composition
        id="StreamFlowPromo"
        component={StreamFlowPromo}
        durationInFrames={960} // 32 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 33-Second Instagram Reels (9:16 Vertical): Cara Minum Air untuk Anak-Anak */}
      <Composition
        id="KidsDrinkingGuide"
        component={KidsDrinkingGuide}
        durationInFrames={990} // 33 seconds @ 30fps
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 45-Second Vox Style Explainer: Bagaimana Hujan Terbentuk */}
      <Composition
        id="HowRainForms"
        component={HowRainForms}
        durationInFrames={1350} // 45 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 10-Second Starter Template */}
      <Composition
        id="MainExplainer"
        component={MainExplainer}
        durationInFrames={300} // 10 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

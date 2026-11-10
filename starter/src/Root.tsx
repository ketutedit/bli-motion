import React from "react";
import { Composition } from "remotion";
import { MainExplainer } from "./compositions/MainExplainer";
import { HowDnsWorks } from "./compositions/HowDnsWorks";
import { ProductLoginMotion } from "./compositions/ProductLoginMotion";
import { AbstractOrbitLoop } from "./compositions/AbstractOrbitLoop";
import { MotionPrimitivesShowcase } from "./compositions/MotionPrimitivesShowcase";
import { HowRainForms } from "./compositions/HowRainForms";
import { KidsDrinkingGuide } from "./compositions/KidsDrinkingGuide";
import { StreamFlowPromo } from "./compositions/StreamFlowPromo";
import { PregnancyTipsReel } from "./compositions/PregnancyTipsReel";

export const Root: React.FC = () => (
  <>
    <Composition
      id="PregnancyTipsReel"
      component={PregnancyTipsReel}
      durationInFrames={2400}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="StreamFlowPromo"
      component={StreamFlowPromo}
      durationInFrames={960}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="KidsDrinkingGuide"
      component={KidsDrinkingGuide}
      durationInFrames={990}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="HowRainForms"
      component={HowRainForms}
      durationInFrames={1350}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="HowDnsWorks"
      component={HowDnsWorks}
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="ProductLoginMotion"
      component={ProductLoginMotion}
      durationInFrames={360}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="AbstractOrbitLoop"
      component={AbstractOrbitLoop}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1080}
    />
    <Composition
      id="MotionPrimitivesShowcase"
      component={MotionPrimitivesShowcase}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="MainExplainer"
      component={MainExplainer}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);

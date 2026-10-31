import React from "react";
import { Composition } from "remotion";
import { MainExplainer } from "./compositions/MainExplainer";

export const Root: React.FC = () => {
  return (
    <>
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

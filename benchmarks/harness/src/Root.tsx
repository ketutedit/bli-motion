import React from "react";
import { Composition } from "remotion";
import { BenchmarkScene } from "./BenchmarkScene";

export const Root: React.FC = () => (
  <Composition
    id="Benchmark"
    component={BenchmarkScene}
    durationInFrames={450}
    fps={30}
    width={1920}
    height={1080}
  />
);

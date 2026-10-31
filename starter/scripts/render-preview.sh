#!/usr/bin/env bash
set -e

mkdir -p out/stills

echo "🎬 Rendering keyframe stills for visual QA..."

echo "📸 Rendering Frame 30 (Hook / Scene 1)..."
npx remotion still src/index.ts MainExplainer out/stills/frame-30.png --frame=30 --log=warn

echo "📸 Rendering Frame 60 (Scene 1 Hold & Expression)..."
npx remotion still src/index.ts MainExplainer out/stills/frame-60.png --frame=60 --log=warn

echo "📸 Rendering Frame 150 (Scene 2 Flow & Mechanism)..."
npx remotion still src/index.ts MainExplainer out/stills/frame-150.png --frame=150 --log=warn

echo "📸 Rendering Frame 260 (Scene 3 Conclusion)..."
npx remotion still src/index.ts MainExplainer out/stills/frame-260.png --frame=260 --log=warn

echo "✅ All preview stills rendered to out/stills/"

#!/usr/bin/env bash
set -euo pipefail

mkdir -p out/dns-stills

echo "Rendering DNS explainer keyframes..."
npx remotion still src/index.ts HowDnsWorks out/dns-stills/frame-045.png --frame=45 --log=warn
npx remotion still src/index.ts HowDnsWorks out/dns-stills/frame-180.png --frame=180 --log=warn
npx remotion still src/index.ts HowDnsWorks out/dns-stills/frame-260.png --frame=260 --log=warn
npx remotion still src/index.ts HowDnsWorks out/dns-stills/frame-410.png --frame=410 --log=warn

echo "Keyframes saved to out/dns-stills/"

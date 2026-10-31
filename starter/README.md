# BLI Motion — Remotion Starter Template

Template resmi untuk merender video motion graphic explainer edukatif menggunakan Remotion dan komponen ilustrasi vektor.

## Fitur Utama

- **Komponen Ilustrasi Vektor Built-in**:
  - `SVGCharacter`: Karakter vektor flat dengan ekspresi wajah (happy, thinking, surprised), kedipan mata otomatis, dan bobbing physics.
  - `ConnectorLine`: Garis alur sebab-akibat dengan animasi gambar path dan data packet yang bergerak.
  - `MotionCard`: Kartu konsep dengan ikon Lucide, depth, glow, dan animasi spring.
  - `KineticText`: Tipografi kinetik dinamis dengan highlight kata kunci berbasis beat audio/timeline.
  - `AnimatedBadge`: Label kategori/topik yang muncul dinamis.
- **Visual QA Pipeline**:
  - Script `render-preview.sh` untuk mengekstrak frame kunci (stills) dalam 1 detik untuk verifikasi visual cepat tanpa perlu render seluruh video MP4.

## Cara Menjalankan

### 1. Pratinjau Interaktif (Remotion Studio)
```bash
npm run dev
```
Buka browser di URL yang muncul untuk melihat timeline, play/pause, dan inspeksi frame per frame secara realtime.

### 2. Testing Render Preview Frame (Stills)
```bash
npm run test:stills
```
Frame kunci akan tersimpan di `out/stills/frame-*.png`.

### 3. Render Video MP4 Penuh
```bash
npm run build
```
Hasil video akan di-render ke `out/video.mp4`.

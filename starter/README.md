# BLI Motion — Remotion Explainer Starter

Ini adalah starter Remotion untuk contoh video explainer edukatif, bukan tema visual wajib atau starter universal untuk semua kategori BLI Motion.

Contoh bawaan menggunakan karakter vektor, kartu konsep, konektor, dan kinetic typography. Komponen tersebut adalah titik awal yang dapat dimodifikasi. Jangan memaksakannya ke proyek UI, brand, abstract, atau typography yang membutuhkan pendekatan berbeda.

## Komponen bawaan

- **SVGCharacter:** karakter vektor flat dengan ekspresi wajah dan gerakan idle sederhana.
- **ConnectorLine:** garis hubungan dengan reveal dan paket data yang bergerak.
- **MotionCard:** kartu konsep dengan ikon, depth, dan spring entrance.
- **KineticText:** tipografi dengan reveal per kata.
- **AnimatedBadge:** label kategori/topik.

Starter ini menunjukkan satu arah visual demonstratif. Warna, layout, komponen, dan efek dapat diganti sesuai art direction proyek.

## Cara menjalankan

Pastikan dependency telah dipasang menggunakan package manager yang sesuai, lalu:

### 1. Pratinjau interaktif (Remotion Studio)

```bash
npm run dev
```

### 2. Render still untuk pemeriksaan awal

```bash
npm run test:stills
```

Frame preview tersimpan di folder out/stills.

### 3. Render video MP4

```bash
npm run build
```

Hasil video ditulis ke out/video.mp4.

## Batasan

- Periksa versi Remotion dan API yang benar-benar terpasang sebelum menambahkan fitur.
- Periksa lisensi dependency, font, audio, gambar, dan aset pihak ketiga sebelum distribusi komersial.
- Build yang berhasil belum membuktikan kualitas visual. Putar hasil render dan periksa frame penting.
- Starter ini belum menjadi adapter produksi universal untuk semua mode BLI Motion.

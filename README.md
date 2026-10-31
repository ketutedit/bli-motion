# BLI Motion

**BLI Motion** adalah AI Motion Graphic Skill System untuk membantu AI merancang motion graphic edukatif yang jelas, menarik, sinematik, dan siap diproduksi.

BLI Motion bukan sekadar kumpulan prompt. Sistem ini menggabungkan creative direction, visual storytelling, motion design, storyboard, spesifikasi animasi, renderer, dan quality control.

## Tujuan

AI harus mampu:
1. memahami materi dan audiens,
2. menemukan konsep visual yang tepat,
3. merancang cerita dan storyboard yang tidak terasa seperti slide presentasi,
4. menentukan gerak yang punya fungsi komunikasi,
5. menerjemahkan desain ke engine animasi,
6. memeriksa frame hasil render dan memperbaikinya.

## Arsitektur

- **SKILL.md** — instruksi inti dan router untuk memilih panduan yang relevan.
- **skills/** — spesialis motion design, animation principles, visual storytelling, kinetic typography, infographic design, dan educational explainer.
- **references/** — creative direction, anti-slide quality gates, resep visual explainer, panduan Remotion, dan kebijakan adaptasi referensi.
- **templates/** — storyboard, struktur scene, dan style brief.

## Pipeline

**Brief → Subject understanding → Creative direction → Storyboard → Motion specification → Renderer → Visual QA → Delivery**

Prinsip penting: AI menentukan ide visual sebelum memilih efek atau menulis kode. Storyboard tetap independen dari renderer agar konsep yang sama dapat diproduksi melalui HTML/GSAP, SVG/Canvas, atau Remotion.

## Referensi yang dipelajari

BLI Motion mempelajari pola dan pendekatan dari:
- [Bang Motion](https://github.com/bangtutorial/bang-motion) — agent skill, style brief, anti-slide design checks, explainer modes, starter architecture, dan frame-based visual verification.
- [Remotion](https://github.com/remotion-dev/remotion) — React-based video composition, frame-driven animation, sequences, transitions, Studio preview, dan programmatic rendering.

Referensi tersebut menjadi bahan belajar, bukan template visual yang harus disalin. BLI Motion mempertahankan identitas sendiri dengan fokus pada educational visual storytelling, akurasi materi, dan kemampuan berpindah renderer.

Lihat references/reference-policy.md untuk sumber dan batasan penggunaan.

## Struktur repository

- [Core Skill](SKILL.md)
- [Starter Project (Remotion)](starter/README.md)
- [Example Benchmark: How DNS Works](examples/01-how-dns-works/brief.md)
- [Creative Direction](references/creative-direction.md)
- [Anti-Slide Quality Gates](references/anti-slide-quality.md)
- [Explainer Visual Recipes](references/explainer-visual-recipes.md)
- [Remotion Production Guide](references/remotion-production.md)
- [Style Brief Template](templates/style-brief.md)
- [Storyboard Template](templates/storyboard.md)
- [Scene Structure Template](templates/scene-structure.md)

## Prinsip utama

- Pemahaman sebelum dekorasi.
- Visual menjelaskan ide, bukan hanya mengulang narasi.
- Motion punya alasan.
- Ritme memberi waktu bagi penonton untuk memahami.
- Desain konsisten tetapi tidak monoton.
- Fakta dan data tidak boleh dikarang.
- Kualitas dinilai dari frame hasil render, bukan dari kode yang sekadar berhasil berjalan.

## Status

Fondasi awal BLI Motion sudah disusun. Tahap berikutnya adalah menambah contoh hasil, starter produksi original, validasi otomatis, dan renderer adapter yang bisa menghasilkan video secara konsisten.

## Bahasa

Instruksi internal menggunakan istilah teknis yang umum. Narasi, penjelasan, dan teks untuk audiens mengikuti bahasa yang diminta pengguna.

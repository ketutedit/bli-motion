# BLI Motion

**BLI Motion** adalah Universal AI Creative & Motion Design System untuk membantu AI menemukan ide visual, menentukan art direction, merancang gerakan, dan mewujudkan motion graphics melalui workflow produksi yang sesuai kebutuhan.

BLI Motion bukan template visual tetap dan bukan kumpulan prompt efek. Sistem ini mengarahkan model AI agar mengambil keputusan kreatif yang lebih spesifik, berani, dan terukur tanpa membatasi pengetahuan bawaan model.

## Arah BLI Motion 1.0

- **Universal:** mendukung explainer, product/UI motion, kinetic typography, brand motion, abstract motion, infographic, dan character/2D/3D work.
- **Creative-first:** kualitas ide, art direction, dan orisinalitas menjadi prioritas.
- **High autonomy:** AI mengambil keputusan kreatif dan teknis yang wajar tanpa meminta persetujuan untuk setiap detail kecil.
- **Renderer-independent:** konsep tidak dikunci pada Remotion atau satu teknologi.
- **Evidence-based quality:** kualitas dinilai dari output aktual sejauh lingkungan produksi memungkinkan, bukan hanya dari kode atau klaim.

## Arsitektur

- **SKILL.md** — router utama yang memahami tugas dan memuat pengetahuan relevan.
- **core/** — creative intelligence, autonomy, adaptive workflow, art direction, motion intelligence, dan quality verification.
- **modes/** — registry disiplin kreatif spesialis yang dikembangkan secara bertahap.
- **skills/** — panduan spesialis dari fondasi 0.2.0 yang masih relevan dan digunakan secara selektif.
- **references/** — creative direction, explainer recipes, Remotion production, reference policy, dan anti-slide guidance.
- **templates/** — creative brief, storyboard, dan struktur scene.
- **engines / starters** — target adapter dan starter lintas renderer yang akan dikembangkan pada tahap berikutnya.
- **benchmarks/** — metodologi perbandingan, task families, dan rubrik evaluasi.

## Prinsip kerja

**Intent → Creative idea → Art direction → Motion design → Implementation → Preview / render → Critique → Refinement**

Urutan ini adaptif. Aset kecil atau loop sederhana tidak perlu melewati proses produksi video lengkap. Proyek kompleks menggunakan perencanaan dan pemeriksaan yang lebih mendalam.

## Specialist scope

1. Explainer & visual storytelling
2. Product & UI motion
3. Kinetic typography & editorial
4. Abstract & experimental motion
5. Brand & logo motion
6. Infographic & data motion
7. Character & 2D/3D motion

Mode dapat digabung ketika proyek membutuhkannya. Tidak ada satu gaya visual yang wajib digunakan untuk semua mode.

## Benchmark program

BLI Motion menggunakan tiga kelompok pembanding:

- A — model tanpa BLI Motion;
- B — model dengan BLI Motion 0.2.0;
- C — model dengan versi pengembangan 1.0.

Perbandingan harus menggunakan model, prompt, aset, dan lingkungan sedekat mungkin. Hasil render perlu ditinjau; penambahan file atau instruksi saja bukan bukti peningkatan kualitas.

Lihat [benchmarks/README.md](benchmarks/README.md), [benchmark harness](benchmarks/harness/README.md), dan [scoring rubric](benchmarks/scoring-rubric.md).

## Runnable examples

The 1.0 development starter now includes:
- [DNS explainer](examples/01-how-dns-works/README.md)
- [Product UI motion](examples/02-product-ui-motion/README.md)
- [Abstract orbit loop](examples/03-abstract-orbit-loop/README.md)

These examples illustrate different art directions; none is a mandatory BLI Motion house style.

## Referensi dan atribusi

BLI Motion mempelajari pendekatan organisasi skill dan produksi dari proyek publik, termasuk [Bang Motion](https://github.com/bangtutorial/bang-motion) dan [Remotion](https://github.com/remotion-dev/remotion). Referensi tersebut bukan izin otomatis untuk menyalin atau mendistribusikan ulang kode, aset, atau dokumentasinya.

Periksa [references/reference-policy.md](references/reference-policy.md), lisensi proyek sumber, serta lisensi seluruh dependency dan aset sebelum mengemas versi komersial. Lihat juga [DISTRIBUTION-READINESS.md](DISTRIBUTION-READINESS.md).

## Status pengembangan

- **0.2.0:** fondasi awal yang berorientasi pada educational explainer.
- **0.3.0 development:** perombakan creative-first core, autonomous decision policy, adaptive workflow, art direction, motion intelligence, quality verification, dan benchmark methodology.
- **1.0.0:** direncanakan setelah specialist modes, renderer adapters, starter projects, serta benchmark dan validasi selesai.

Branch pengembangan 1.0 dibuat terpisah agar versi 0.2.0 pada branch utama tetap utuh.

## Bahasa

Instruksi internal menggunakan istilah teknis yang umum. Bahasa narasi, penjelasan, label, dan teks hasil mengikuti bahasa yang diminta pengguna.

# Visual QA Checklist: Test Case 01 (Anti-Slide Evaluation)

Gunakan checklist ini untuk menguji apakah output yang dibuat AI lolos standar kualitas BLI Motion:

## 1. Scene & Story Structure
- [x] **Dominant Goal**: Setiap scene hanya menyampaikan 1 gagasan inti (Scene 1 = Masalah, Scene 2 = Mekanisme DNS, Scene 3 = Kecepatan).
- [x] **Visual Event**: Penonton *melihat* transformasi nama domain menjadi IP address, bukan hanya membaca narasi.
- [x] **Continuity**: Paket data bergerak dari kiri ke kanan menghubungkan pemahaman antar komponen.

## 2. Anti-Slide Warning Signs Check
- [x] **No Template Repetition**: Scene 1 (Karakter tengah), Scene 2 (Diagram alur 3 node), Scene 3 (Karakter perayaan + takeaway hold). Tidak ada pengulangan layout judul-deskripsi membosankan.
- [x] **No Generic Fade-Ins**: Elemen masuk dengan physics spring natural dan aksi terarah.
- [x] **No Wall-of-Text**: Teks di layar hanya kata kunci penting (maksimal 7 kata per beat). Narasi panjang tetap berada di audio/voiceover.

## 3. Motion Purpose
- [x] **Reveal**: Kartu IP Address terungkap setelah DNS memproses request.
- [x] **Demonstrate**: Garis data bergerak memperlihatkan arah aliran komunikasi internet.
- [x] **Hold for Comprehension**: Scene 3 memiliki hold minimal 40 frame agar pesan terbaca jelas.

## 4. Technical Feasibility
- [x] Kode Remotion dapat di-render tanpa missing imports atau TypeScript error.
- [x] Komposisi 1920x1080 dengan margin aman minimal 80px dari tepi layar.

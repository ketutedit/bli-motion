# Storyboard: How DNS Works (15 Detik / 450 Frames @ 30 FPS)

---

### Scene 1: The Confusion (Frames 0 - 120 | Durasi 4.0s)
- **Communication Goal**: Menjelaskan bahwa manusia mengingat nama, tapi komputer cuma tahu nomor IP.
- **Voiceover**: "Pernah kepikiran nggak? Saat kamu mengetik nama website, komputer sebenarnya nggak paham nama itu."
- **On-Screen Copy**: "Komputer Tidak Paham Nama Website" (Kinetic Text)
- **Composition**: Karakter ilustrasi di tengah dengan tanda tanya mengambang, memegang laptop.
- **State Awal**: Layar kosong, badge kategori pop-up.
- **Aksi Gerak**: Karakter masuk dengan spring bouncing, teks judul meluncur ke atas per-kata. Balon teks nama website (`google.com`) muncul di atas laptop.
- **State Akhir**: Karakter berkedip dengan ekspresi bingung (`expression="thinking"`).
- **Transisi**: Balon teks nama website melayang ke kanan menjadi awal scene 2.

---

### Scene 2: The Translation Mechanism (Frames 120 - 330 | Durasi 7.0s)
- **Communication Goal**: Menunjukkan peran DNS sebagai penerjemah nama ke alamat IP.
- **Voiceover**: "Di sinilah DNS bekerja. Mirip buku kontak di HP kamu, DNS menerjemahkan nama website menjadi alamat IP angka."
- **On-Screen Copy**: "DNS: Buku Kontak Internet"
- **Composition**: 3 Node horizontal: `[Laptop Kamu]` ----> `[Server DNS]` ----> `[Web Server]`.
- **State Awal**: Laptop kamu di sebelah kiri, server DNS di tengah.
- **Aksi Gerak**:
  1. Garis konektor biru menyala dari Laptop menuju Server DNS.
  2. Data paket terkirim. Server DNS memancarkan pulsa kuning amber.
  3. Label `google.com` berubah menjadi angka IP `142.250.190.46`.
  4. Garis hijau menghubungkan ke Server Web tujuan.
- **State Akhir**: Jalur koneksi utuh, tanda centang hijau menyala.
- **Transisi**: Kamera zoom-in perlahan ke status terkoneksi.

---

### Scene 3: The Takeaway (Frames 330 - 450 | Durasi 4.0s)
- **Communication Goal**: Menegaskan kecepatan proses dan kesimpulan akhir.
- **Voiceover**: "Semua proses pencarian ini selesai hanya dalam beberapa milidetik saja!"
- **On-Screen Copy**: "Selesai dalam hitungan milidetik."
- **Composition**: Karakter ilustrasi kembali ke tengah dengan ekspresi senang (`expression="happy"`), memegang badge hijau centang.
- **State Awal**: Karakter masuk dengan spring ceria.
- **Aksi Gerak**: Teks kesimpulan muncul dengan efek bounce, confetti partikel meluncur lembut di latar belakang.
- **State Akhir**: Hold frame 1.5 detik agar penonton menyerap informasi sebelum video berakhir.

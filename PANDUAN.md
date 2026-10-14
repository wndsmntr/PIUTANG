# Memasang Laporan Piutang sebagai aplikasi di iPhone

Isi paket: index.html, manifest.webmanifest, sw.js, icon-180.png, icon-192.png, icon-512.png
(6 file ini harus berada dalam satu tempat yang sama).

## Cara 1: GitHub Pages (gratis, bisa dari iPhone saja)
1. Di app Files, ketuk file ZIP untuk mengekstraknya.
2. Buka github.com di Safari, lalu daftar atau masuk (gratis).
3. Buat repository baru: tombol + > New repository. Nama: `piutang`. Pilih Public. Create repository.
4. Di halaman repository, pilih "uploading an existing file" (atau Add file > Upload files).
   Pilih keenam file dari Files, lalu tekan Commit changes.
5. Buka Settings > Pages. Di bagian Source pilih "Deploy from a branch", branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu 1 sampai 2 menit. Alamat aplikasi Anda: `https://NAMA-GITHUB-ANDA.github.io/piutang/`
7. Buka alamat itu di **Safari** > tombol Bagikan > **Tambah ke Layar Utama**.

Jika tombol di GitHub tampak lain di iPhone, aktifkan "Minta Situs Desktop" di menu aA pada Safari.

## Cara 2: Netlify Drop (butuh komputer)
Buka app.netlify.com/drop, tarik folder berisi keenam file, lalu buka alamat yang diberikan di Safari iPhone
dan pilih Tambah ke Layar Utama.

## Yang perlu diketahui
- Data (invoice, pelanggan, bukti transfer) tersimpan di iPhone itu saja. Kode aplikasi di GitHub terbuka untuk umum, tetapi data Anda tidak ikut ke sana.
- Pasang lewat Safari, bukan Chrome, agar tampil layar penuh seperti aplikasi.
- Pertama kali dibuka butuh internet. Setelahnya aplikasi bisa dipakai offline. Fitur baca foto butuh internet sekali untuk mengunduh komponen OCR, lalu bisa offline.
- Setelah Anda mengganti file di GitHub, tutup aplikasi lalu buka dua kali agar versi baru terpasang.
- Menghapus data Safari atau aplikasi akan menghapus invoice. Belum ada cadangan otomatis.

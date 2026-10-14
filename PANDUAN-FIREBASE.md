# Menghubungkan Laporan Piutang agar dipakai bersama (Firebase)

Setelah ini semua orang yang masuk dengan kode tim melihat data yang sama, dan perubahan muncul langsung di semua HP.
Hak akses:
- **Admin** (kode admin): semuanya, termasuk ubah dan hapus invoice, pelanggan, dan pembayaran.
- **Petugas** (kode petugas): melihat semua data, menambah invoice, dan mencatat pembayaran atau cicilan. Tidak bisa ubah atau hapus.
Hak akses ini dijaga oleh server Firebase (file firestore.rules), bukan hanya oleh tampilan aplikasi.

Waktu: sekitar 15 menit, dikerjakan di komputer atau HP. Butuh akun Google.

## 1. Buat proyek Firebase
1. Buka console.firebase.google.com, masuk dengan akun Google.
2. Add project > nama `piutang` > Continue. Matikan Google Analytics > Create project.

## 2. Buat dua akun kode (admin dan petugas)
1. Menu Build > **Authentication** > Get started > tab Sign-in method > **Email/Password** > Enable > Save.
2. Tab **Users** > Add user:
   - Email: `admin@piutang.app`   Password: **kode admin** (minimal 6 karakter, sebaiknya 10 karakter atau lebih)
   - Email: `petugas@piutang.app` Password: **kode petugas**
   Email ini hanya nama akun, tidak perlu benar-benar ada. Kode itulah yang diketik di aplikasi.

## 3. Buat database
1. Build > **Firestore Database** > Create database.
2. Lokasi: `asia-southeast2` (Jakarta). Pilih **Production mode** > Create.
3. Tab **Rules**: hapus isinya, tempel seluruh isi file `firestore.rules`, lalu **Publish**.

## 4. Ambil kunci proyek
1. Ikon roda gigi > Project settings > General > bagian Your apps > ikon web `</>`.
2. Nama `piutang` > Register app. Salin nilai `apiKey`, `authDomain`, `projectId`, `appId`.
3. Buka file `config.js`, ganti tulisan `ISI_...` dengan nilai tadi. Simpan.
(Kunci ini memang terlihat oleh publik. Keamanan data dijaga oleh kode dan aturan di langkah 2 dan 3.)

## 5. Pasang ke internet
Unggah ulang **semua file** di folder ini (termasuk config.js) ke GitHub Pages atau Netlify, seperti panduan sebelumnya.
Lalu buka alamatnya di Safari, pilih Bagikan > Tambah ke Layar Utama.

## 6. Pertama kali dipakai
- Masukkan kode admin. Di tab Pelanggan > bagian "Masuk sebagai": jika Anda punya data lama di HP yang sama, tekan
  **Unggah data dari perangkat ini ke cloud**.
- Bagikan **kode petugas** ke tim. Kode admin jangan dibagikan.

## Hal penting
- Kode tim = kata sandi. Gunakan kode yang sulit ditebak. Jika bocor: Authentication > Users > ganti password akun terkait.
  Perangkat yang sudah masuk tetap masuk sampai Keluar atau sesi berakhir.
- Mau menambah atau mencabut orang? Cukup ganti kode. Tidak ada akun per orang, jadi tidak tercatat siapa yang mengubah apa.
- Berkas invoice dan bukti transfer disimpan di database, dibatasi sekitar 600 KB per berkas. Foto dikecilkan otomatis.
  PDF yang lebih besar akan ditolak.
- Paket gratis Firebase (Spark) cukup untuk tim kecil: sekitar 50 ribu pembacaan dan 20 ribu penulisan data per hari.
  Aplikasi menyimpan salinan di HP sehingga pembacaan hemat. Jika invoice mencapai ribuan, pantau pemakaian di Firebase console.
- Bisa dipakai offline: perubahan tersimpan di HP dan terkirim otomatis saat internet kembali.
  Login pertama kali butuh internet.
- Jika muncul "auth/unauthorized-domain": Authentication > Settings > Authorized domains > tambahkan alamat hosting Anda.

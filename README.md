# Web App dengan Laravel dan React TypeScript

Aplikasi web ini dibangun menggunakan **Laravel** untuk backend dan **React** dengan TypeScript (TSX) untuk frontend. Proyek ini memungkinkan pengelolaan konten melalui CMS berbasis Laravel dan interaksi pengguna melalui antarmuka frontend yang dibangun dengan React.

## Fitur Utama

- **Backend (CMS)**: Menggunakan Laravel untuk menangani manajemen data, otentikasi pengguna, dan API.
- **Frontend**: Dibangun dengan React TypeScript, memberikan pengalaman pengguna yang responsif dan dinamis.
- **Session Management**: Sistem login dan otentikasi menggunakan Laravel dengan sesi pengguna yang aman.
- **Video Playback**: Menyediakan fitur pemutaran video di frontend menggunakan tag `<video>`.

## Teknologi yang Digunakan

- **Backend**: Laravel 11 (PHP Framework)
- **Frontend**: React dengan TypeScript (TSX)
- **Database**: MySQL
- **Autentikasi**: Laravel Sanctum
- **Pengelolaan sesi**: Laravel Session

## Instalasi untuk Pengembang

### Persyaratan

- **PHP** (versi 8.x atau lebih baru)
- **Composer** untuk manajemen dependensi PHP
- **Node.js** dan **npm** untuk mengelola dependensi JavaScript
- **MySQL** atau database lain yang kompatibel
- **Laravel** dan **React** (termasuk TypeScript) yang terpasang

### Langkah 1: Menyiapkan Backend (Laravel)

1. **Clone repository ini**:

```bash
   git clone https://github.com/username/repository-name.git
   cd Be-Film
```

2. **Install dependensi PHP:**:
   Di dalam direktori proyek, jalankan perintah berikut untuk menginstal dependensi Laravel:

```bash
   composer install
```

3. **Buat file .env:**:
   Salin file .env.example menjadi .env:

```bash
cp .env.example .env
```

4. **Konfigurasi database:**:
   Edit file .env dan sesuaikan pengaturan database:

```bash
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=nama_database
   DB_USERNAME=root
   DB_PASSWORD=
```

5. **Generate key aplikasi:**:
   Jalankan perintah untuk menghasilkan key Laravel:

```bash
   php artisan key:generate
```

6. **Migrasi dan Seed database:**:
   Jalankan migrasi untuk membuat tabel yang diperlukan di database:

```bash
   php artisan migrate --seed
```

7. **Migrasi dan Seed database:**:
   Menjalankan server Laravel:

```bash
   php artisan serve
```

### Langkah 2: Menyiapkan Frontend (React)

1.  **Masuk ke direktori frontend:**:
    Arahkan ke direktori frontend di dalam proyek Anda.

```bash
    cd frontend
```

2.  **Instal dependensi JavaScript:**:
    Install dependensi yang diperlukan untuk React dan TypeScript:

```bash
npm install
```

3.  **Menjalankan server React:**:
    Jalankan aplikasi React dengan perintah berikut:

```bash
   npm start
```

### Penjelasan:

- **Instalasi Backend (Laravel)**: Menyediakan langkah-langkah untuk menyiapkan backend, termasuk konfigurasi database, migrasi, dan menjalankan server.
- **Instalasi Frontend (React)**: Langkah-langkah untuk menyiapkan frontend React dan menjalankannya.
- **Integrasi**: Cara menghubungkan frontend dengan backend, serta pengaturan autentikasi.
- **Penggunaan untuk End User**: Menjelaskan cara menggunakan aplikasi untuk pengguna akhir.

Pastikan untuk menyesuaikan dengan struktur dan nama-nama file di proyek Anda.

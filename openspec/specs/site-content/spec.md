# site-content Specification

## Purpose

Tempat dan bentuk data konten di `content/`, terpisah dari komponen dan siap dipindah ke CMS (Sanity) nanti.

## Requirements

### Requirement: Konten terpisah dari komponen
Teks konten tentang MSU MUST disimpan di `content/` sebagai data TypeScript bertipe. Halaman dan komponen MUST mengambil teks itu lewat props, bukan menulisnya langsung di JSX. Label antarmuka kecil seperti "Buka menu" boleh tetap di komponen.

#### Scenario: Alamat masjid berubah
- **WHEN** alamat masjid berubah
- **THEN** cukup `content/site.ts` yang diedit, dan semua tempat yang menampilkan alamat ikut berubah

### Requirement: Bentuk data siap CMS
Tipe konten MUST berbentuk datar seperti dokumen CMS: item yang punya halaman detail memiliki `slug`, gambar berupa `{ src, alt }`, dan tanggal berupa string ISO.

#### Scenario: Change halaman menambah tipe baru
- **WHEN** sebuah change halaman menambah tipe baru, misalnya `Kajian`
- **THEN** tipe itu ditulis di `content/` dengan field datar, `slug` kalau ada halaman detail, dan gambar berbentuk `{ src, alt }`

### Requirement: Daftar app MSU
Daftar app MSU MUST disimpan di `content/apps.ts` dengan nama, deskripsi singkat, dan URL. Entri awalnya adalah Peminjaman Fasilitas di `https://syamsululum.site`.

#### Scenario: App baru siap
- **WHEN** sebuah app baru, misalnya PRADA, siap dipakai
- **THEN** developer cukup menambah satu entri di `content/apps.ts` tanpa mengubah komponen

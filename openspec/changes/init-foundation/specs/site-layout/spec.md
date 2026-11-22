## ADDED Requirements

### Requirement: Header dengan navigasi
Setiap halaman MUST menampilkan header berisi logo yang mengarah ke beranda dan menu yang diambil dari `content/navigation.ts`.

#### Scenario: Header di desktop
- **WHEN** pengunjung membuka halaman mana pun di lebar 1280 px
- **THEN** logo dan semua item menu terlihat di header

#### Scenario: Item menu baru
- **WHEN** item baru ditambahkan ke `content/navigation.ts`
- **THEN** item itu muncul di header desktop dan menu mobile tanpa mengubah komponen header

### Requirement: Menu mobile
Di layar kecil, menu MUST disembunyikan di balik tombol yang bisa dibuka dan ditutup dengan sentuhan, mouse, maupun keyboard.

#### Scenario: Membuka menu
- **WHEN** pengunjung di lebar 375 px menekan tombol menu
- **THEN** daftar menu tampil dan tombol bernilai `aria-expanded="true"`

#### Scenario: Memilih item menu
- **WHEN** pengunjung memilih salah satu item menu
- **THEN** halaman tujuan terbuka dan menu tertutup

### Requirement: Footer
Setiap halaman MUST menampilkan footer berisi nama masjid, alamat, kontak admin, dan akun media sosial dari `content/site.ts`.

#### Scenario: Informasi kontak di footer
- **WHEN** pengunjung menggulir ke bagian bawah halaman mana pun
- **THEN** alamat, kontak admin, dan link media sosial MSU terlihat

### Requirement: Halaman placeholder
Setiap item menu MUST punya route yang bisa dibuka: `/`, `/tentang`, `/program`, `/kabar`, `/layanan`, dan `/infak`. Sebelum diisi oleh change halamannya, route MUST menampilkan judul halaman dan keterangan bahwa halaman sedang dibuat.

#### Scenario: Halaman belum selesai
- **WHEN** pengunjung membuka `/kabar` sebelum halaman Kabar dikerjakan
- **THEN** halaman tampil dengan header, judul "Kabar", keterangan sedang dibuat, dan footer, bukan 404

### Requirement: Metadata dasar
Setiap halaman MUST memakai `<html lang="id">`, judul berformat "<Judul Halaman> | Masjid Syamsul Ulum", dan deskripsi situs sebagai default.

#### Scenario: Judul tab browser
- **WHEN** pengunjung membuka `/tentang`
- **THEN** judul tab browser adalah "Tentang | Masjid Syamsul Ulum"

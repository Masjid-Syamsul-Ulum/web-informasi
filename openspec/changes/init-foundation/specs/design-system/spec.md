## ADDED Requirements

### Requirement: Design tokens terpusat
Warna, font, dan radius MUST didefinisikan sekali sebagai design tokens di `app/globals.css`. Komponen MUST memakai token itu lewat kelas Tailwind, bukan nilai hex atau angka acak. Token awal: `brand-900` (#005124), `brand-700` (#0F7C3F), `ink` (#202020), dan `surface` (#F4F4F4).

#### Scenario: Komponen memakai warna brand
- **WHEN** developer memberi warna hijau utama pada sebuah komponen
- **THEN** komponen memakai kelas token seperti `bg-brand-700`, bukan `bg-[#0F7C3F]`

#### Scenario: Warna brand diganti
- **WHEN** nilai token `brand-700` diubah di `app/globals.css`
- **THEN** semua komponen yang memakai token itu ikut berubah tanpa mengedit file komponen

### Requirement: Komponen dasar bersama
Repo MUST menyediakan komponen dasar di `components/ui/`: `Container`, `Section`, `SectionHeading`, `Button`, `Card`, dan `InfoRow`. Komponen MUST menerima isi lewat props dan tidak menyimpan teks konten sendiri.

#### Scenario: Halaman memakai komponen dasar
- **WHEN** developer membuat section baru di sebuah halaman
- **THEN** section itu dibangun dari `Section`, `SectionHeading`, dan `Card` yang sudah ada, bukan versi baru

### Requirement: Judul tebal dan tipis
`SectionHeading` MUST bisa menampilkan judul dengan bagian tebal dan bagian tipis dalam satu baris judul, mengikuti pola poster "**Kenali Bacaan** Al-Qur'an".

#### Scenario: Judul dua bobot
- **WHEN** `SectionHeading` diberi `title="Kenali Bacaan"` dan `titleLight="Al-Qur'an"`
- **THEN** "Kenali Bacaan" tampil tebal dan "Al-Qur'an" tampil tipis dalam satu judul

### Requirement: Tombol
`Button` MUST punya varian `primary` (pill hijau tua dengan teks putih) dan `secondary` (bergaris). `Button` MUST dirender sebagai link kalau diberi `href`.

#### Scenario: Tombol sebagai link
- **WHEN** `Button` diberi `href="/infak"`
- **THEN** yang dirender adalah link ke `/infak` dengan tampilan tombol

### Requirement: Baris info dengan ikon
`InfoRow` MUST menampilkan ikon di dalam kotak berwarna brand, diikuti teks. Komponen ini dipakai untuk informasi singkat seperti tanggal, jam, lokasi, atau kontak.

#### Scenario: Info tanggal kajian
- **WHEN** `InfoRow` diberi ikon kalender dan teks "20 Nov – 3 Des 2026"
- **THEN** ikon tampil di kotak hijau dan teksnya tampil di sebelah kanan

### Requirement: Halaman katalog komponen
Halaman `/komponen` MUST menampilkan setiap komponen dasar beserta variannya dengan contoh isi. Halaman ini MUST tidak muncul di menu dan MUST ditandai `noindex`.

#### Scenario: Review tampilan komponen
- **WHEN** tim membuka `/komponen` di link preview PR
- **THEN** semua komponen dasar dan variannya terlihat di satu halaman

#### Scenario: Tidak diindeks
- **WHEN** mesin pencari merayapi `/komponen`
- **THEN** halaman memiliki meta robots `noindex`

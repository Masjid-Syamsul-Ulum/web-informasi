## ADDED Requirements

### Requirement: Design tokens terpusat
Warna, font, dan radius MUST didefinisikan sekali sebagai design tokens di `app/globals.css`. Komponen MUST memakai token itu lewat kelas Tailwind, bukan nilai hex atau angka acak. Token warna: `brand-950`, `brand-900` (#005124), `brand-700` (#0F7C3F), `brand-100`, `gold-400`, `ink` (#202020), `surface` (#F4F4F4), dan `cream`.

#### Scenario: Komponen memakai warna brand
- **WHEN** developer memberi warna hijau utama pada sebuah komponen
- **THEN** komponen memakai kelas token seperti `bg-brand-700`, bukan `bg-[#0F7C3F]`

#### Scenario: Warna brand diganti
- **WHEN** nilai token `brand-700` diubah di `app/globals.css`
- **THEN** semua komponen yang memakai token itu ikut berubah tanpa mengedit file komponen

### Requirement: Komponen dasar bersama
Repo MUST menyediakan komponen dasar di `components/ui/`: `Container`, `Section`, `SectionHeading`, `Button`, `TextLink`, `Card`, `ArchFrame`, `ArchCard`, `ArchRings`, `Pill`, `InfoRow`, `StaggerGrid`, `LogoStrip`, `Pattern`, `WindowRow`, dan `BuildingLine`. Komponen MUST menerima isi lewat props dan tidak menyimpan teks konten sendiri.

#### Scenario: Halaman memakai komponen dasar
- **WHEN** developer membuat section baru di sebuah halaman
- **THEN** section itu dibangun dari `Section`, `SectionHeading`, dan `Card` yang sudah ada, bukan versi baru

### Requirement: Latar section tidak kosong
`Section` dan `Card` MUST mendukung nada latar `white`, `cream`, `mint`, `green`, dan `gold`, pola `star`, `roster`, dan `arches` lewat prop `pattern`, serta arah pudar lewat prop `fade`. Teks judul di latar hijau MUST otomatis berganti ke warna terang.

#### Scenario: Section hijau berpola
- **WHEN** developer memakai `<Section tone="green" pattern>` berisi `SectionHeading`
- **THEN** section tampil hijau dengan pola bintang samar, dan judulnya putih dengan bagian tipis berwarna emas

### Requirement: Judul tebal dan tipis
`SectionHeading` MUST bisa menampilkan judul dengan bagian tebal dan bagian tipis, mengikuti pola poster "**Kenali Bacaan** Al-Qur'an".

#### Scenario: Judul dua bobot
- **WHEN** `SectionHeading` diberi `title="Kenali Bacaan"` dan `titleLight="Al-Qur'an"`
- **THEN** "Kenali Bacaan" tampil tebal dan "Al-Qur'an" tampil tipis di baris berikutnya

### Requirement: Bentuk khas dari gedung MSU
Repo MUST menyediakan bentuk yang diturunkan dari gedung MSU: bingkai jendela beratap runcing dan bingkai kubah (`ArchFrame`), deret atap jendela (`WindowRow`), pola bintang delapan (`Pattern`), dan ilustrasi garis gedung (`BuildingLine`). Warna bentuk MUST mengikuti warna teks (`text-*`), sehingga bisa dipakai di latar terang maupun gelap.

#### Scenario: Gambar berbingkai jendela
- **WHEN** developer membungkus gambar dengan `<ArchFrame shape="window">`
- **THEN** gambar terpotong menjadi bentuk jendela gedung MSU di semua lebar layar

### Requirement: Ikon buatan sendiri
Ikon MUST diambil dari `components/icons`, tanpa library ikon. Setiap ikon memakai grid 24, garis 1,75, dan bagian aksen yang warnanya diatur lewat variabel `--icon-accent`.

#### Scenario: Aksen ikon di latar emas
- **WHEN** ikon ditaruh di dalam kotak emas dan `--icon-accent` diset putih
- **THEN** bagian aksen ikon tampil putih, sehingga tetap terlihat

### Requirement: Tombol dengan micro-interaction
`Button` MUST punya varian `primary`, `gold`, `outline`, dan `light`, dan MUST dirender sebagai link kalau diberi `href`. Panah di dalam lingkaran berganti saat hover, tombol mengecil sedikit saat ditekan, dan cincin emas muncul saat fokus keyboard. Gerak MUST dimatikan untuk pengguna yang memilih reduced motion.

#### Scenario: Tombol sebagai link
- **WHEN** `Button` diberi `href="/infak"`
- **THEN** yang dirender adalah link ke `/infak` dengan tampilan tombol

#### Scenario: Hover tombol
- **WHEN** kursor berada di atas tombol
- **THEN** warna tombol menggelap, lingkaran panah membesar, dan panah lama keluar ke kanan atas sementara panah baru masuk

#### Scenario: Reduced motion
- **WHEN** sistem pengunjung memakai pengaturan reduced motion
- **THEN** panah tidak bergeser, tetapi perubahan warna tetap terjadi

### Requirement: Baris info dengan ikon
`InfoRow` MUST menampilkan ikon di dalam kotak, diikuti teks, untuk informasi singkat seperti tanggal, jam, lokasi, atau kontak.

#### Scenario: Info tanggal kajian
- **WHEN** `InfoRow` diberi ikon kalender dan teks "20 Nov – 3 Des 2026"
- **THEN** ikon tampil di kotak hijau dan teksnya tampil di sebelah kanan

### Requirement: Card konten bersama
Repo MUST menyediakan card konten di `components/cards/`: `EventCard`, `NewsCard`, `PrayerTimesCard`, `DonationCard`, `ServiceCard`, `Steps`, dan `QuoteCard`. Setiap card MUST memakai minimal satu bentuk khas atau pola, menerima data lewat props yang bentuknya datar, dan punya keadaan hover serta fokus keyboard bila bisa diklik.

#### Scenario: Agenda di beranda
- **WHEN** change halaman beranda menampilkan agenda
- **THEN** agenda memakai `EventCard` dengan tanggal di dalam bingkai jendela, bukan card agenda versi baru

#### Scenario: App yang belum siap
- **WHEN** `ServiceCard` dipakai tanpa `url`
- **THEN** card tampil dengan label "Segera hadir" dan tidak bisa diklik

### Requirement: Halaman katalog komponen
Halaman `/komponen` MUST menampilkan warna, tipografi, latar, bentuk, ikon, tombol, card konten, dan contoh komposisi (dua hero, deretan card yang tidak seragam, dan bento). Halaman ini MUST tidak muncul di menu dan MUST ditandai `noindex`.

#### Scenario: Review tampilan komponen
- **WHEN** tim membuka `/komponen` di link preview PR
- **THEN** seluruh DNA desain dan contoh komposisinya terlihat di satu halaman

#### Scenario: Tidak diindeks
- **WHEN** mesin pencari merayapi `/komponen`
- **THEN** halaman memiliki meta robots `noindex`

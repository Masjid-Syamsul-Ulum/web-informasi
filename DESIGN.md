# DESIGN.md — DNA desain web MSU

Acuan visual untuk semua halaman. Contoh hidup setiap bagian ada di `/komponen`. Kalau ragu, buka halaman itu dulu.

## Karakter

Web brand untuk masjid kampus: bersih, hangat, dan berani di komposisi. Bersih bukan berarti kosong. Latar diberi pola atau warna, gambar diberi bentuk, dan teks dibuat pendek. Ceritakan lewat foto, bentuk, dan susunan, bukan lewat paragraf panjang.

Referensi gaya: landing page islamic center dengan latar pola geometris, bingkai gambar berbentuk lengkung, card yang tidak seragam, dan aksen hangat. Bentuk khasnya diambil dari gedung MSU sendiri.

## Warna

| Token | Pakai untuk |
|---|---|
| `brand-900` #005124 | Identitas, judul, latar section gelap |
| `brand-700` #0F7C3F | Bagian judul tipis, aksen hijau |
| `brand-950` #00381A | Hover dan kedalaman |
| `brand-100` #E4F1E8 | Latar lembut |
| `gold-400` #F2B441 | Sorotan: tombol di latar gelap, badge, aksen ikon |
| `cream` #F8F4EC | Latar halaman |
| `surface` #F4F4F4, `ink` #202020 | Netral dan teks isi |

- Hijau adalah warna utama. Emas dipakai seperlunya untuk hal yang ingin ditonjolkan.
- Jangan pakai emas untuk teks di atas putih karena kontrasnya kurang.
- Section berganti latar `white`, `cream`, dan `green` supaya halaman tidak terasa putih kosong.

## Tipografi

Plus Jakarta Sans (`next/font`). Judul memakai pasangan tebal 800 dan tipis 300 (komponen `SectionHeading`, props `title` + `titleLight`). Teks isi 18 px dengan jarak baris lega. Hindari judul yang diakhiri koma, karena koma Jakarta Sans tebal terlihat renggang.

## Bentuk khas

Semua diturunkan dari gedung MSU:

- **Jendela** (`shape-window`, `ArchFrame shape="window"`): badan tegak dengan atap runcing, meniru jendela gedung.
- **Kubah** (`ArchFrame shape="dome"`): atap setengah lingkaran.
- **Aksen** (`ArchFrame accent`): bayangan bentuk yang sama berwarna emas di belakang gambar.
- **Pola** (`Pattern`, prop `pattern` di `Section`/`Card`): `star` (bintang delapan), `roster` (dinding berlubang gedung MSU), `arches` (deret jendela kecil).
- **Garis jendela bertingkat** (`ArchRings`): dekorasi di belakang foto atau kutipan.
- **Deret jendela** (`WindowRow`): tepi atas section, dipakai di footer.
- **Garis gedung** (`BuildingLine`): ilustrasi fasad dari Figma, untuk footer atau hero.

Aset ada di `public/shapes/` dan `public/images/`. Foto diambil dari Figma Media-DKMSU. Foto malam masjid (`msu-night.jpg`) masih berupa render 560 px, jadi perlu diganti dengan ekspor resolusi penuh.

## Latar

Jangan memakai kombinasi latar yang sama berturut-turut. Pilih dari:

- Nada `Section`: `white`, `cream`, `mint`, `green`, `gold`.
- Pola: `star`, `roster`, `arches`, atau tanpa pola.
- Arah pudar (`fade`): `bottom`, `right`, `center`, atau penuh.

Contoh urutan halaman: hero `green` + `star` pudar tengah → `white` → `cream` + `roster` pudar kanan → `mint` + `arches` pudar bawah → `white` → footer. Untuk hero, pakai foto dalam `ArchFrame` atau foto penuh dengan gradasi hijau.

## Ikon

Pakai ikon dari `components/icons`. Jangan memasang library ikon. Ikon digambar di grid 24 dengan garis 1,75 dan memiliki bagian aksen yang warnanya diatur lewat `--icon-accent` (default emas). Beberapa ikon memuat bentuk jendela MSU. Ikon baru mengikuti aturan yang sama.

## Komponen

| Komponen | Kegunaan |
|---|---|
| `Section` | Pembungkus section: `tone` white/cream/green, `pattern` |
| `SectionHeading` | Judul tebal + tipis, otomatis menyesuaikan latar gelap |
| `Button` | Varian primary, gold, outline, light; panah di lingkaran |
| `TextLink` | Link teks dengan garis bawah yang tumbuh |
| `Card` | Card dasar: `tone` white/cream/green/gold, `pattern` |
| `ArchCard` | Card berbingkai jendela atau kubah, dengan badge |
| `Pill` | Badge berikon untuk label pendek atau label melayang |
| `InfoRow` | Baris ikon + teks untuk tanggal, jam, lokasi, dan kontak |
| `StaggerGrid` | Grid 4 kolom dengan item genap turun, supaya tidak kaku |
| `LogoStrip` | Deretan logo wajihah atau mitra, berwarna saat hover |

Card konten ada di `components/cards/`:

| Card | Kegunaan |
|---|---|
| `EventCard` | Agenda atau kajian. Tanggal di dalam jendela, jam dan lokasi |
| `NewsCard` | Kabar, dengan tab kategori berbentuk jendela. `featured` untuk kabar utama |
| `PrayerTimesCard` | Jadwal sholat dalam card beratap kubah, waktu berikutnya disorot emas |
| `DonationCard` | Program infak dengan progres dan penanda jendela |
| `ServiceCard` | App MSU di subdomain lain. Tanpa `url` tampil sebagai Segera hadir |
| `Steps` | Alur bernomor, misalnya alur peminjaman |
| `QuoteCard` | Hadis atau ayat dengan teks Arab (Amiri) |

## Layout

- Hindari deretan card yang semuanya berukuran sama. Pakai `StaggerGrid`, campur card bergambar dengan card warna, atau susun bento (satu foto besar, satu angka, satu card warna).
- Gambar boleh keluar dari grid. Badge atau label boleh melayang di atas gambar.
- Di HP semua kembali satu kolom. Cek di 375 px.

## Interaksi

| Elemen | Hover | Tekan | Fokus keyboard |
|---|---|---|---|
| `Button` | Warna menggelap, lingkaran membesar, panah berganti | Mengecil 3% | Cincin emas |
| `TextLink` | Garis bawah tumbuh dari kiri | | Garis bawah penuh |
| `ArchCard`, `NewsCard` | Gambar zoom 5%, judul berganti warna | | Cincin emas |
| `EventCard` | Card terangkat, jendela tanggal menjadi emas, panah berputar | | Cincin emas |
| `ServiceCard` | Latar hijau naik dari bawah, ikon menjadi emas | | Cincin emas |

Gerak memakai `transform` 200–500 ms dan dimatikan lewat `motion-safe:` untuk pengguna yang memilih reduced motion. Jangan menambah animasi fade-up di setiap section.

## Jangan

- Gradient ungu/biru, kartu kaca, blob, atau glow dekoratif.
- Teks panjang di landing page.
- Library ikon atau library UI baru tanpa change OpenSpec.
- Nilai hex di komponen. Tambah token di `app/globals.css` kalau benar-benar butuh warna baru.

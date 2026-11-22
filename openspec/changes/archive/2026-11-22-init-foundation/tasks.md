## 1. Proyek

- [x] 1.1 Jalankan `create-next-app` di root repo: TypeScript, Tailwind CSS, ESLint, App Router, tanpa `src/`, dengan npm
- [x] 1.2 Tambah `.nvmrc` berisi `24` dan `engines.node` di `package.json`
- [x] 1.3 Pasang `@fission-ai/openspec` sebagai devDependency
- [x] 1.4 Hapus file contoh bawaan `create-next-app` yang tidak dipakai

## 2. Design tokens

- [x] 2.1 Definisikan token warna (hijau, emas, krem) dan radius di `app/globals.css` dengan `@theme`
- [x] 2.2 Pasang Plus Jakarta Sans lewat `next/font` dan hubungkan ke token font
- [x] 2.3 Ekspor logo, foto gedung, dan ilustrasi garis gedung dari Figma ke `public/`
- [x] 2.4 Buat bentuk khas: `shape-window`, pola bintang delapan, deret jendela, dan garis gedung
- [x] 2.5 Gambar ikon sendiri di `components/icons` dan tulis `DESIGN.md`

## 3. Konten

- [x] 3.1 Buat `content/types.ts` berisi `SiteInfo`, `NavItem`, dan `AppLink`
- [x] 3.2 Isi `content/site.ts` dengan alamat, Instagram, YouTube, dan WhatsApp admin dari poster Figma, lalu minta konfirmasi tim media
- [x] 3.3 Isi `content/navigation.ts` dan `content/apps.ts`

## 4. Komponen dasar

- [x] 4.1 Buat `Container`, `Section`, dan `SectionHeading` (judul tebal dan tipis)
- [x] 4.2 Buat `Button` (primary, gold, outline, light) dengan micro-interaction panah, dan `TextLink`
- [x] 4.3 Buat `Card` bernada warna, `ArchFrame`, `ArchCard`, `Pill`, `InfoRow`, dan `StaggerGrid`
- [x] 4.4 Buat halaman `/komponen` (katalog DNA dan contoh komposisi) dengan `noindex`, tanpa link di menu
- [x] 4.5 Tambah variasi latar: pola roster dan deret jendela, arah pudar, nada mint dan emas, dan `ArchRings`
- [x] 4.6 Buat card konten di `components/cards/`: agenda, kabar, jadwal sholat, infak, layanan, alur, dan kutipan
- [x] 4.7 Ganti foto hero dengan foto malam masjid dari Figma dan tambah hero alternatif foto penuh

## 5. Layout

- [x] 5.1 Buat `SiteHeader` melayang dengan menu desktop dan menu mobile sebagai client component kecil
- [x] 5.2 Buat `SiteFooter` hijau berpola dengan deret jendela, ajakan Infak, kolom menu, layanan, kontak, dan garis gedung
- [x] 5.3 Pasang header, footer, `lang="id"`, dan metadata dasar di root layout
- [x] 5.4 Buat halaman placeholder untuk `/`, `/tentang`, `/program`, `/kabar`, `/layanan`, dan `/infak`

## 6. Alur kerja tim

- [x] 6.1 Buat `.github/workflows/ci.yml` yang menjalankan `npm ci`, `npm run lint`, dan `npm run build` di setiap PR
- [x] 6.2 Buat `.github/pull_request_template.md` (masalah, perubahan, screenshot HP dan desktop, cara tes)
- [x] 6.3 Tulis ulang `README.md`: cara menjalankan (Node 24, `npm install`, `npm run dev`) dan link ke `AGENTS.md`
- [ ] 6.4 Hubungkan repo ke Vercel lewat akun organisasi dan pastikan preview muncul di PR

## 7. Verifikasi

- [x] 7.1 `npm run lint` dan `npm run build` lolos
- [x] 7.2 Cek semua route di 375 px dan 1280/1440 px, termasuk menu mobile dengan keyboard dan hover tombol
- [x] 7.3 Pastikan tidak ada nilai hex di `components/` dan `app/` selain `app/globals.css`
- [x] 7.4 Pastikan judul tab setiap halaman sesuai format "<Judul> | Masjid Syamsul Ulum"

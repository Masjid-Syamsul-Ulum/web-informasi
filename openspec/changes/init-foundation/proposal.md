## Why

Repo ini masih kosong. Sebelum beberapa orang mengerjakan halaman secara paralel, kita butuh fondasi bersama: proyek Next.js, design tokens, komponen dasar, kerangka layout, dan tempat menyimpan konten. Tanpa fondasi ini, tiap orang akan membuat versi warna dan card sendiri, sehingga hasilnya tidak seragam dan sering bentrok saat merge.

## What Changes

- Init proyek Next.js (App Router, TypeScript, Tailwind CSS, ESLint) dengan npm dan Node 24.
- DNA desain di `DESIGN.md`: warna hijau dari poster Figma dengan aksen emas dan latar krem, font Plus Jakarta Sans, dan bentuk khas dari gedung MSU (jendela beratap runcing, kubah, pola bintang delapan, deret jendela, garis gedung).
- Design tokens di `app/globals.css` dan ikon buatan sendiri di `components/icons/`.
- Komponen dasar di `components/ui/`, termasuk tombol dengan micro-interaction, card bernada warna, card berbingkai jendela, dan grid yang tidak kaku.
- Halaman `/komponen` sebagai katalog DNA desain dan contoh komposisi. Halaman ini tidak masuk menu dan tidak diindeks mesin pencari.
- Header melayang (dengan menu mobile) dan footer hijau berpola di `components/layout/`.
- Folder `content/` berisi data situs, navigasi, dan daftar app, beserta tipenya.
- Halaman placeholder untuk setiap menu: `/`, `/tentang`, `/program`, `/kabar`, `/layanan`, `/infak`. Nama menu ini usulan awal dan boleh diubah saat review.
- Metadata dasar: judul per halaman, deskripsi situs, dan `lang="id"`.
- Alur kerja tim: CI GitHub Actions (lint dan build), template PR, README cara menjalankan, dan OpenSpec CLI sebagai devDependency.

Sengaja tidak dikerjakan di change ini: isi halaman, Sanity, auth, database, API, sitemap dan structured data, analytics, dark mode, dan multi-bahasa.

## Capabilities

### New Capabilities

- `design-system`: design tokens, bentuk khas, ikon, komponen dasar bersama, dan halaman `/komponen`.
- `site-layout`: header, menu mobile, footer, halaman placeholder, dan metadata dasar.
- `site-content`: data situs bertipe di `content/` sebagai sumber teks untuk komponen.

### Modified Capabilities

(tidak ada)

## Impact

- Change ini menyentuh seluruh repo karena proyeknya baru.
- Dependency: `next`, `react`, `tailwindcss`, dan `@fission-ai/openspec` (dev). Tanpa library ikon atau library UI.
- Satu orang mengerjakan change ini sampai merge. Setelah itu, change per halaman bisa dikerjakan paralel: `page-beranda`, `page-tentang`, `page-program`, `page-kabar`, `page-layanan`, dan `page-infak`.

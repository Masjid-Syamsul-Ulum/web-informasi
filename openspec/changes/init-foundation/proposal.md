## Why

Repo ini masih kosong. Sebelum beberapa orang mengerjakan halaman secara paralel, kita butuh fondasi bersama: proyek Next.js, design tokens, komponen dasar, kerangka layout, dan tempat menyimpan konten. Tanpa fondasi ini, tiap orang akan membuat versi warna dan card sendiri, sehingga hasilnya tidak seragam dan sering bentrok saat merge.

## What Changes

- Init proyek Next.js (App Router, TypeScript, Tailwind CSS, ESLint) dengan npm dan Node 24.
- Design tokens dari poster Figma (warna, font, radius) di `app/globals.css`.
- Komponen dasar di `components/ui/`: `Container`, `Section`, `SectionHeading`, `Button`, `Card`, `InfoRow`.
- Halaman `/komponen` untuk melihat semua komponen dasar. Halaman ini tidak masuk menu dan tidak diindeks mesin pencari.
- Header (dengan menu mobile) dan footer di `components/layout/`.
- Folder `content/` berisi data situs, navigasi, dan daftar app, beserta tipenya.
- Halaman placeholder untuk setiap menu: `/`, `/tentang`, `/program`, `/kabar`, `/layanan`, `/infak`. Nama menu ini usulan awal dan boleh diubah saat review.
- Metadata dasar: judul per halaman, deskripsi situs, dan `lang="id"`.
- Alur kerja tim: CI GitHub Actions (lint dan build), template PR, README cara menjalankan, dan OpenSpec CLI sebagai devDependency.

Sengaja tidak dikerjakan di change ini: isi halaman, Sanity, auth, database, API, sitemap dan structured data, analytics, dark mode, dan multi-bahasa.

## Capabilities

### New Capabilities

- `design-system`: design tokens, komponen dasar bersama, dan halaman `/komponen`.
- `site-layout`: header, menu mobile, footer, halaman placeholder, dan metadata dasar.
- `site-content`: data situs bertipe di `content/` sebagai sumber teks untuk komponen.

### Modified Capabilities

(tidak ada)

## Impact

- Change ini menyentuh seluruh repo karena proyeknya baru.
- Dependency: `next`, `react`, `tailwindcss`, `lucide-react`, dan `@fission-ai/openspec` (dev).
- Satu orang mengerjakan change ini sampai merge. Setelah itu, change per halaman bisa dikerjakan paralel: `page-beranda`, `page-tentang`, `page-program`, `page-kabar`, `page-layanan`, dan `page-infak`.

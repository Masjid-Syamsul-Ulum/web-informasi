## Context

Repo baru, tim kecil yang bergantian, dan semua orang memakai AI untuk coding. Fondasi ini harus cukup untuk membuat halaman secara paralel, tapi tidak lebih dari itu. Identitas visual diambil dari poster Figma "Media-DKMSU", bukan dari tema WordPress lama.

## Goals / Non-Goals

**Goals:**

- Setiap orang bisa mulai mengerjakan satu halaman tanpa menunggu atau mengubah file orang lain.
- Tampilan seragam karena semua halaman memakai token dan komponen dasar yang sama.
- Saat Sanity masuk nanti, komponen tidak perlu dibongkar; yang diganti hanya sumber data di `content/`.

**Non-Goals:**

- Isi halaman, CMS, auth, database, API, SEO lanjutan, analytics, dark mode, dan multi-bahasa.

## Decisions

**npm, bukan pnpm atau yarn.** npm sudah terpasang bersama Node, jadi developer baru tidak perlu setup tambahan.

**Tanpa folder `src/`.** Struktur folder lebih dangkal dan lebih mudah dipahami.

**Token lewat `@theme` Tailwind v4 di `app/globals.css`.** Semua nilai ada di satu tempat sebagai CSS variable. App lain bisa menyalin file yang sama kalau ingin tampil seragam. Alternatif `tailwind.config` terpisah ditolak karena Tailwind v4 tidak lagi memerlukannya.

Token awal:

| Token | Nilai | Sumber |
|---|---|---|
| `brand-900` | `#005124` | variable Figma |
| `brand-700` | `#0F7C3F` | variable Figma |
| `ink` | `#202020` | variable Figma |
| `surface` | `#F4F4F4` | variable Figma |

Token baru (misalnya warna hijau muda untuk latar) ditambahkan saat ada halaman yang benar-benar membutuhkannya.

**Font Inter lewat `next/font` sebagai awal.** Poster memakai sans tebal yang mirip Inter dan Poppins, tapi nama fontnya belum diverifikasi di Figma. Karena font hanya disetel di satu tempat, menggantinya nanti cukup satu perubahan kecil.

**`lucide-react` untuk ikon.** `InfoRow` dan footer butuh ikon. Satu dependency kecil lebih konsisten daripada menyalin SVG satu per satu.

**Tanpa shadcn/ui.** Ini situs konten dengan sedikit komponen. shadcn menambah banyak file dan dependency (Radix, cva, tailwind-merge) yang belum dibutuhkan. Bisa dipertimbangkan lewat change baru kalau nanti ada komponen interaktif yang rumit, seperti dialog atau dropdown.

**Konten sebagai file TypeScript di `content/`, bukan JSON atau Markdown.** Bertipe, ada autocomplete, dan bentuknya mudah disamakan dengan schema Sanity. Format untuk teks panjang (misalnya sejarah) diputuskan di change halaman masing-masing.

**Halaman placeholder untuk setiap menu.** Link menu tidak 404, dan setiap orang langsung punya folder `app/<route>/` sendiri untuk dikerjakan.

**Halaman `/komponen` sebagai pengganti Storybook.** Satu file yang menampilkan semua komponen dasar. Developer bisa melihat apa saja yang sudah ada, dan tim bisa mereview tampilan card atau tombol lewat preview PR. Storybook ditolak karena terlalu berat untuk enam komponen.

**Menu mobile berupa client component kecil.** Hanya bagian tombol dan daftar menu yang memakai `"use client"`. Header lainnya tetap Server Component.

**CI GitHub Actions selain build Vercel.** Build Vercel tidak menjalankan lint. Workflow kecil (`npm ci`, lint, build) menjadi pengaman yang tidak bergantung pada akun hosting.

## Risks / Trade-offs

- Font belum pasti → disetel di satu tempat, jadi mudah diganti.
- File logo asli belum ada → sementara pakai teks "Masjid Syamsul Ulum". Logo SVG diminta ke tim media.
- Nama menu masih usulan → bisa diubah saat review karena cukup mengedit `content/navigation.ts` dan nama folder route.
- Data kontak di footer diambil dari poster → perlu dikonfirmasi tim media sebelum situs dirilis.

## Open Questions

- Nama font resmi di Figma.
- File logo SVG atau PNG resolusi tinggi.
- Nama menu final.

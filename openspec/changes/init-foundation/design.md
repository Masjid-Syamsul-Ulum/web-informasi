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

**Palet: hijau identitas, emas sebagai sorotan, krem sebagai latar.** Hijau `#005124` dan `#0F7C3F` diambil dari variable Figma. Emas `gold-400` dan krem `cream` ditambahkan setelah review referensi Pinterest dari tim (landing page islamic center dengan aksen hangat). Hanya-hijau terasa datar, sedangkan putih polos terasa kosong. Emas tidak dipakai untuk teks di atas putih karena kontrasnya kurang.

**Plus Jakarta Sans, bukan Inter.** Inter terlalu generik untuk web brand. Plus Jakarta Sans punya karakter geometris yang dekat dengan headline poster, nyaman dibaca di bobot tipis maupun tebal, dan dirancang di Indonesia. Nama font resmi di Figma belum diverifikasi; menggantinya cukup di `app/layout.tsx`.

**Bentuk khas diturunkan dari gedung MSU.** Jendela beratap runcing, garis fasad, dan deret atap diambil dari foto dan ilustrasi garis gedung di Figma, ditambah kubah dan pola bintang delapan. Alasannya: bentuk generik (blob, kaca) bisa milik web mana saja, sedangkan bentuk ini hanya milik MSU. Jendela memakai `clip-path: polygon`, sehingga responsif tanpa SVG tambahan. Pola, deret jendela, dan garis gedung memakai `mask` SVG di `public/shapes/`, sehingga warnanya mengikuti `text-*` dan file SVG di-cache browser alih-alih di-inline di setiap halaman.

**Ikon buatan sendiri, tanpa library ikon.** Tim meminta ikon yang tidak generik. Lima belas ikon di `components/icons` memakai grid 24, garis 1,75, dan aksen emas lewat `--icon-accent`; beberapa memuat bentuk jendela MSU. `lucide-react` dihapus. Ikon baru digambar dengan aturan yang sama.

**Nada latar otomatis lewat `data-tone`.** `Section` dan `Card` memasang `data-tone`, lalu `SectionHeading`, `InfoRow`, dan `TextLink` menyesuaikan warna lewat varian Tailwind `in-data-[tone=green]`. Cara ini lebih sederhana daripada mengoper prop warna ke setiap komponen.

**Header melayang.** Header berbentuk pill dan `fixed`, sehingga section pertama (termasuk hero hijau) terlihat sampai ke atas layar. Jarak atas section pertama diatur sekali di `<main>`.

**Micro-interaction hanya dengan CSS transition.** Gerakannya kecil dan lokal (tombol, link, card), jadi tidak perlu library animasi. Semua pergeseran dibungkus `motion-safe:`.

**Tanpa shadcn/ui.** Ini situs konten dengan sedikit komponen. shadcn menambah banyak file dan dependency (Radix, cva, tailwind-merge) yang belum dibutuhkan. Bisa dipertimbangkan lewat change baru kalau nanti ada komponen interaktif yang rumit, seperti dialog atau dropdown.

**Konten sebagai file TypeScript di `content/`, bukan JSON atau Markdown.** Bertipe, ada autocomplete, dan bentuknya mudah disamakan dengan schema Sanity. Format untuk teks panjang (misalnya sejarah) diputuskan di change halaman masing-masing.

**Halaman placeholder untuk setiap menu.** Link menu tidak 404, dan setiap orang langsung punya folder `app/<route>/` sendiri untuk dikerjakan.

**Halaman `/komponen` sebagai pengganti Storybook.** Satu file yang menampilkan DNA desain dan contoh komposisi. Developer bisa melihat apa saja yang sudah ada, dan tim bisa mereview tampilan lewat preview PR. Storybook ditolak karena terlalu berat untuk kebutuhan sekarang. Aturan tertulisnya ada di `DESIGN.md`.

**Menu mobile berupa client component kecil.** Hanya bagian tombol dan daftar menu yang memakai `"use client"`. Header lainnya tetap Server Component.

**CI GitHub Actions selain build Vercel.** Build Vercel tidak menjalankan lint. Workflow kecil (`npm ci`, lint, build) menjadi pengaman yang tidak bergantung pada akun hosting.

## Risks / Trade-offs

- Font belum pasti → disetel di satu tempat, jadi mudah diganti.
- Logo masih PNG 445 px dari Figma → cukup untuk header dan footer, tapi versi SVG tetap perlu diminta ke tim media.
- Foto di `/komponen` hanya tiga (gedung, jendela, fasad) → dipotong dan dibingkai berbeda supaya tidak terasa berulang. Foto kegiatan ditambahkan oleh change halaman masing-masing.
- Nama menu masih usulan → bisa diubah saat review karena cukup mengedit `content/navigation.ts` dan nama folder route.
- Data kontak di footer diambil dari poster → perlu dikonfirmasi tim media sebelum situs dirilis.

## Open Questions

- Nama font resmi di Figma.
- File logo SVG atau PNG resolusi tinggi.
- Nama menu final.

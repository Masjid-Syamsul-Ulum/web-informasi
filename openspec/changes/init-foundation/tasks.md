## 1. Proyek

- [ ] 1.1 Jalankan `create-next-app` di root repo: TypeScript, Tailwind CSS, ESLint, App Router, tanpa `src/`, dengan npm
- [ ] 1.2 Tambah `.nvmrc` berisi `24` dan `engines.node` di `package.json`
- [ ] 1.3 Pasang `@fission-ai/openspec` sebagai devDependency
- [ ] 1.4 Hapus file contoh bawaan `create-next-app` yang tidak dipakai

## 2. Design tokens

- [ ] 2.1 Definisikan token warna dan radius di `app/globals.css` dengan `@theme`
- [ ] 2.2 Pasang font Inter lewat `next/font` dan hubungkan ke token font

## 3. Konten

- [ ] 3.1 Buat `content/types.ts` berisi `SiteInfo`, `NavItem`, dan `AppLink`
- [ ] 3.2 Isi `content/site.ts` dengan alamat, Instagram, YouTube, dan WhatsApp admin dari poster Figma, lalu minta konfirmasi tim media
- [ ] 3.3 Isi `content/navigation.ts` dan `content/apps.ts`

## 4. Komponen dasar

- [ ] 4.1 Buat `Container`, `Section`, dan `SectionHeading` (judul tebal dan tipis)
- [ ] 4.2 Buat `Button` dengan varian `primary` dan `secondary`, yang menjadi link kalau diberi `href`
- [ ] 4.3 Buat `Card` dan `InfoRow` dengan ikon dari `lucide-react`
- [ ] 4.4 Buat halaman `/komponen` dengan `noindex`, tanpa link di menu

## 5. Layout

- [ ] 5.1 Buat `SiteHeader` dengan menu desktop dan menu mobile sebagai client component kecil
- [ ] 5.2 Buat `SiteFooter`
- [ ] 5.3 Pasang header, footer, `lang="id"`, dan metadata dasar di root layout
- [ ] 5.4 Buat halaman placeholder untuk `/`, `/tentang`, `/program`, `/kabar`, `/layanan`, dan `/infak`

## 6. Alur kerja tim

- [ ] 6.1 Buat `.github/workflows/ci.yml` yang menjalankan `npm ci`, `npm run lint`, dan `npm run build` di setiap PR
- [ ] 6.2 Buat `.github/pull_request_template.md` (masalah, perubahan, screenshot HP dan desktop, cara tes)
- [ ] 6.3 Tulis ulang `README.md`: cara menjalankan (Node 24, `npm install`, `npm run dev`) dan link ke `AGENTS.md`
- [ ] 6.4 Hubungkan repo ke Vercel lewat akun organisasi dan pastikan preview muncul di PR

## 7. Verifikasi

- [ ] 7.1 `npm run lint` dan `npm run build` lolos
- [ ] 7.2 Cek semua route di 375 px dan 1280 px, termasuk membuka dan menutup menu mobile dengan keyboard
- [ ] 7.3 Pastikan tidak ada nilai hex di `components/` dan `app/` selain `app/globals.css`
- [ ] 7.4 Pastikan judul tab setiap halaman sesuai format "<Judul> | Masjid Syamsul Ulum"

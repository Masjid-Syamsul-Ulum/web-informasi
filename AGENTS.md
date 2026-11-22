# AGENTS.md — Web MSU

Panduan untuk developer dan AI agent (Claude Code, Codex, Cursor, dan lainnya) yang mengerjakan repo ini. Baca sampai habis sebelum coding.

## Ini repo apa

Web utama Masjid Syamsul Ulum (MSU) Telkom University: beranda, profil, program, kabar, layanan, dan infak. Web ini adalah **wadah**. App lain (peminjaman fasilitas, PRADA, manajemen kader, mentoring) berdiri sendiri di subdomain masing-masing dan hanya ditautkan dari sini.

Konteks proyek dan alasan keputusan ada di `openspec/config.yaml` dan folder `openspec/`. DNA desain (warna, bentuk, ikon, interaksi) ada di `DESIGN.md`, dengan contoh hidup di halaman `/komponen`.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS, npm, Node 24.
- Deploy di Vercel, dengan link preview otomatis di setiap PR.
- Belum ada CMS, database, auth, atau API. Sanity (CMS) menyusul lewat change OpenSpec tersendiri setelah desain matang.

## Struktur folder

```
app/<route>/                satu halaman = satu folder
app/<route>/_components/    komponen yang hanya dipakai halaman itu
components/ui/              komponen dasar bersama
components/cards/           card konten bersama (agenda, kabar, infak, layanan, dll.)
components/icons/           ikon buatan sendiri
components/layout/          header dan footer
content/                    teks dan data situs, bertipe
public/                     logo, foto, dan bentuk (shapes/)
openspec/                   konteks proyek, spec, dan change
```

## Aturan arsitektur

1. **Server Component adalah default.** Pakai `"use client"` hanya untuk bagian yang benar-benar interaktif (misalnya menu mobile), dan buat sekecil mungkin.
2. **Teks konten tidak ditulis di JSX.** Informasi tentang MSU disimpan di `content/`, lalu komponen menerimanya lewat props. Label antarmuka kecil seperti "Buka menu" boleh tetap di komponen.
3. **Bentuk data siap CMS.** Tipe di `content/` dibuat datar seperti dokumen Sanity: punya `slug` kalau ada halaman detail, gambar berupa `{ src, alt }`, tanggal berupa string ISO. Nanti yang diganti cukup sumber datanya.
4. **Warna, font, dan radius hanya dari design tokens** di `app/globals.css`. Jangan menulis hex atau nilai acak di komponen. Kalau butuh token baru, tambahkan lewat PR terpisah.
5. **Cek `components/ui/`, `components/cards/`, `components/icons/`, dan `/komponen` sebelum membuat komponen.** Jangan membuat versi Button, Card, atau ikon sendiri, dan jangan memasang library ikon.
6. **App lain cukup lewat link** di `content/apps.ts`. Tidak ada database bersama dan tidak ada panggilan API ke app lain.
7. **Butuh change OpenSpec yang disetujui** sebelum menambah API route, server action, database, auth, state library, atau library UI (shadcn, MUI, dan sejenisnya).
8. **Dependency baru** harus disebut alasannya di PR.

## Anti over-engineering

Solusi paling sederhana yang berfungsi selalu menang. AI cenderung menambah lapisan yang tidak diminta, jadi baca ulang diff sebelum membuka PR.

Checklist sebelum coding:

1. **Pola terdekatnya apa?** Tiru yang sudah ada di repo. Kalau solusimu tidak mirip pola itu, sederhanakan dulu.
2. **Apakah ini menambah lapisan baru** (abstraksi, hook, context, cache, retry, fallback, file config)? Harus ada kebutuhan pengunjung yang nyata. Kalau tidak ada, jangan tambahkan.
3. **Edge case-nya jarang terjadi?** Cukup tampilan sederhana atau pesan yang jelas. Jangan bangun mekanisme khusus.
4. **Hardcode dulu.** Daftar di file `content/` lebih baik daripada sistem dinamis yang belum dibutuhkan.
5. **Menghapus kode itu bagus.** Buang kode yang tidak dipakai.
6. **Jangan refactor kode yang tidak terkait tugasmu.**

Tanda hasil AI perlu dipangkas:

- Komentar yang hanya mengulang isi kode.
- Helper yang cuma dipakai sekali.
- Prop atau varian yang tidak dipakai.
- Penanganan error untuk hal yang tidak mungkin terjadi.
- README atau dokumen baru yang tidak diminta.

## Alur kerja (spec-driven, agile)

- **Perubahan berarti** dimulai dengan change OpenSpec: halaman baru, komponen dasar baru, tipe konten baru, dependency besar, atau perubahan aturan. Tim membaca change-nya dulu, baru coding.
- **Perubahan kecil langsung PR**: copy, styling, perbaikan bug, revisi tampilan card. Spec mengatur struktur dan perilaku, bukan detail piksel.
- **Satu change dipegang satu orang**, di satu branch, menjadi satu PR. Nama branch: `feat/...`, `fix/...`, `docs/...`, atau `chore/...`.
- **Kerja paralel:** tiap orang memegang folder `app/<route>/` miliknya. Kalau perlu mengubah `components/ui/`, `components/layout/`, token, atau `content/types.ts`, buat PR kecil terpisah supaya tidak bentrok.
- **Iterasi desain** lewat link preview Vercel di PR sampai tim setuju.

Perintah OpenSpec (CLI terpasang sebagai devDependency):

```bash
npx openspec list                                    # change yang sedang aktif
npx openspec new change <nama-kebab>                 # buat change baru
npx openspec instructions proposal --change <nama>   # panduan menulis proposal (lalu specs, design, tasks)
npx openspec validate <nama>                         # cek format
npx openspec archive <nama>                          # setelah PR di-merge
```

## Sebelum membuka PR

- `npm run lint` dan `npm run build` lolos.
- Cek tampilan di lebar 375 px (HP) dan 1280 px (desktop).
- Body PR berisi: masalahnya apa, apa yang diubah dan bagaimana caranya, screenshot HP dan desktop, cara mengetes, dan `Closes #N` kalau ada issue. Tulis ringkas dengan bahasa manusia.

## Dokumentasi

- `README.md` hanya berisi cara menjalankan dan deploy.
- Keputusan arsitektur dan alasannya disimpan di `openspec/`.
- Detail implementasi dan hasil tes masuk ke PR, bukan file baru di repo.

## Bahasa

Teks di UI dan dokumen tim memakai Bahasa Indonesia. Nama variabel, fungsi, dan file memakai bahasa Inggris.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

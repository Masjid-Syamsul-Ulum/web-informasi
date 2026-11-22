# Web MSU

Web utama Masjid Syamsul Ulum Telkom University.

## Menjalankan di lokal

Butuh Node 24 (lihat `.nvmrc`).

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Katalog komponen dasar ada di http://localhost:3000/komponen.

Sebelum membuka PR, jalankan:

```bash
npm run lint
npm run build
```

## Berkontribusi

Baca [AGENTS.md](AGENTS.md) dulu. Aturan kerja, struktur folder, dan alur spec-driven (OpenSpec) ada di sana.

## Deploy

Setiap PR mendapat link preview dari Vercel. Merge ke `main` men-deploy ke produksi.

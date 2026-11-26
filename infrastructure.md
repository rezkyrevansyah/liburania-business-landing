# Infrastruktur — Landing Page Liburania Business

Dokumen ini menetapkan stack untuk satu landing page promosi modul F&B, Retail, dan Jasa. Gunakan bersama `Brief_Landing_Page_Liburania.md` untuk desain/konten dan `Prompt_Gambar_Landing_Page_Liburania.md` untuk aset. Jika brief sebelumnya memberikan beberapa pilihan teknologi, ikuti keputusan di bawah.

## Stack

| Bagian | Teknologi / keputusan |
| --- | --- |
| Framework | Astro dengan output `static` |
| Bahasa | TypeScript |
| Styling | Tailwind CSS; CSS tambahan untuk kebutuhan desain khusus |
| Interaksi | JavaScript/TypeScript ringan untuk tab sektor, navigasi, dan FAQ |
| Animasi | CSS transition dan Intersection Observer; hormati `prefers-reduced-motion` |
| Gambar | Aset lokal; optimasi melalui `astro:assets` untuk gambar konten |
| Font | Inter, simpan lokal jika berkas tersedia |
| Package manager | npm; commit `package-lock.json` |
| Hosting | Vercel |
| Backend, database, autentikasi | Tidak diperlukan untuk cakupan saat ini |

Gunakan versi stabil yang saling kompatibel dan ikuti konfigurasi resmi versi yang dipasang. Pertahankan dependency secukupnya; interaksi halaman ini dapat dikerjakan tanpa framework frontend tambahan.

## Struktur proyek

- `src/pages/index.astro`: halaman utama.
- `src/layouts/`: layout dan metadata SEO.
- `src/components/`: komponen per section.
- `src/data/`: konten F&B/Retail/Jasa dan konfigurasi CTA.
- `src/assets/images/`: foto serta screenshot produk untuk dioptimalkan.
- `src/styles/`: stylesheet utama dan konfigurasi styling yang dibutuhkan.
- `public/`: logo, favicon, dan font yang disajikan langsung.

## Kontak dan demo

CTA **Jadwalkan Demo** dan **Hubungi Tim Sales** menuju:

`https://liburania.com/business/kontak`

Simpan URL dalam satu konfigurasi bersama. Tujuannya saat ini formulir sales; label WhatsApp langsung mengikuti perubahan tujuan yang disetujui. Landing page tidak memerlukan form pengumpulan lead atau kalender booking baru.

## Build dan deployment

- Development: `npm run dev`.
- Pemeriksaan TypeScript/Astro: siapkan dan jalankan `npm run check`.
- Build: `npm run build`.
- Preview hasil build: `npm run preview`.
- Vercel: preset Astro, build command `npm run build`, output directory `dist`.
- Gunakan hasil build statis; adapter server tidak diperlukan untuk cakupan ini.
- Environment variable belum diperlukan.

Siapkan proyek agar dapat dideploy ke Vercel. Publikasi dilakukan ketika diminta.

## Aturan implementasi

- Buat layout responsif, semantic HTML, focus keyboard yang jelas, dan navigasi tab yang aksesibel.
- Pertahankan konten ketiga sektor dalam HTML; JavaScript menyempurnakan tampilan interaktifnya.
- Gunakan tujuh foto sesuai panduan aset; logo dan screenshot aplikasi memakai berkas resmi.
- Tetapkan dimensi gambar, prioritaskan hero, dan lazy-load gambar di bawah fold.
- Buat teks, tombol, label, serta alur proses melalui kode agar tajam dan responsif.
- Jalankan check/build dan periksa tampilan ponsel/desktop, tab sektor, FAQ, serta tujuan seluruh CTA sebelum menyerahkan hasil.

# Yang Belum Selesai — Landing Page Liburania Business

Status per 26 November 2026. Halaman sudah bisa dijalankan dan di-build, tetapi beberapa aset dan keputusan klien masih dibutuhkan sebelum siap rilis.

## Cara menjalankan

Butuh Node.js 22.23 atau lebih baru.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build statis ke dist/
npm run preview   # lihat hasil build
```

---

## 1. Aset yang masih dibutuhkan

### Wajib (P0)

| ID | Aset | Spesifikasi | Dipakai di | Kondisi sekarang |
| --- | --- | --- | --- | --- |
| UI-01 | Screenshot aplikasi F&B (kasir atau Kitchen Display) | PNG, lebar minimal 1600 px, data dummy, status pesanan terbaca | Panel solusi F&B dan laporan pemilik F&B | Belum ada. Diganti alur "Ilustrasi alur" dan laporan "Data ilustrasi" |
| UI-02 | Screenshot aplikasi Retail (katalog atau stok) | PNG, lebar minimal 1600 px, SKU dan kuantitas terbaca | Panel solusi Retail dan laporan pemilik Retail | Belum ada, diganti ilustrasi |
| UI-03 | Screenshot aplikasi Jasa (kalender booking per staf) | PNG, lebar minimal 1600 px, nama staf dan layanan dummy | Panel solusi Jasa dan laporan pemilik Jasa | Belum ada, diganti ilustrasi |
| LOGO-01 | Logo resmi **Liburania Business** | SVG, atau PNG transparan versi terang dan gelap | Header dan footer | Memakai logo "Liburania" yang tersedia, lalu kata "Business" ditulis dengan HTML di sebelahnya |
| LOGO-02 | Logo **Poztix** | SVG atau PNG transparan | Belum dipakai (menunggu keputusan penamaan) | Belum ada |

Catatan screenshot:
- Jangan pakai data pelanggan asli.
- Jangan pakai foto layar atau UI hasil gambar generatif. Brief melarang screenshot palsu.
- Setelah tersedia, simpan di `src/assets/images/` lalu pasang di `src/components/SolutionExplorer.astro` dan `src/components/OwnerVisibility.astro`. Data per sektor ada di `src/data/sectors.ts`.

### Opsional (P1)

| Aset | Kegunaan |
| --- | --- |
| Crop laporan asli per sektor (penjualan/biaya bahan, stok/produk, komisi/performa staf) | Mengganti grafik "Data ilustrasi" di section laporan pemilik |
| Logo klien beserta izin pakai | Strip logo di bawah hero. Saat ini sengaja tidak ditampilkan |
| Studi kasus atau testimoni yang sah | Section "Bukti produk". Saat ini digabung ke solusi dan laporan pemilik karena belum ada bukti |
| Gambar Open Graph 1200×630 | Pratinjau saat link dibagikan di WhatsApp atau media sosial |

Tujuh foto (IMG-01 sampai IMG-07) sudah lengkap dan terpasang.

---

## 2. Keputusan klien yang masih terbuka

| Prioritas | Pertanyaan | Asumsi yang dipakai sekarang |
| --- | --- | --- |
| Tinggi | Identitas dominan: Liburania Business atau Poztix? | Liburania Business sebagai payung; Poztix disebut sebagai "powered by" (strip di bawah hero), nama produk modul, dan FAQ. Logo di `src/assets/images/poztix-logo.png` |
| Tinggi | CTA ke formulir kontak atau langsung ke WhatsApp? | Semua CTA ke `https://liburania.com/business/kontak`, label "Jadwalkan Demo" dan "Hubungi Tim Sales" |
| Tinggi | Bagaimana permintaan demo ditindaklanjuti? | Lewat tim sales, tanpa janji durasi, biaya, atau jadwal otomatis |
| Tinggi | Target: usaha mandiri, kawasan wisata, atau keduanya? | Keduanya |
| Tinggi | Seberapa dalam integrasi antar-modul (stok, pelanggan, laporan gabungan)? | Tidak diklaim. Setiap modul dijelaskan terpisah |
| Sedang | Nama badan usaha untuk copyright footer | "© 2026 Liburania Business" |
| Sedang | URL produksi final | Belum diisi, jadi canonical dan `og:url` belum aktif |
| Sedang | Harga, paket, dan perangkat | Tidak ditampilkan; diarahkan ke tim sales |
| Sedang | Halaman kontak belum punya kategori "Jasa" | Di luar cakupan landing page; disarankan ditambahkan di situs utama |

---

## 3. Pekerjaan teknis yang tersisa

- [ ] **URL produksi:** isi `site` di `astro.config.mjs`. Canonical dan `og:url` otomatis aktif setelahnya (lihat `src/layouts/Base.astro`). Tag `og:image` belum ada; tambahkan setelah gambar Open Graph tersedia.
- [ ] **Analytics:** pasang tag yang disetujui (misalnya GTM atau GA4). Event `demo_click`, `sales_click`, dan `sector_select` sudah dikirim ke `window.dataLayer` jika tersedia (`src/scripts/page.ts`).
- [ ] **Kontras link:** "Temukan solusi untuk usaha Anda" berwarna biru `#0B6CFF` di atas latar `#F8F7F3`, kontrasnya 4,26:1 (standar 4,5:1). Ganti teks link ke `text-blue-deep`.
- [ ] **Pengujian lebar 768 px (tablet):** baru diuji di 1440 px dan 390 px.
- [ ] **Performa:** ukur LCP dan CLS pada build produksi (sasaran LCP ≤ 2,5 detik, CLS ≤ 0,1). Belum diukur.
- [ ] **Deploy Vercel:** project siap (preset Astro, build `npm run build`, output `dist`), tetapi belum di-deploy.
- [ ] **Font:** klien menyukai Plus Jakarta Sans dan Montserrat. Saat ini hanya Plus Jakarta Sans. Jika Montserrat ingin dipakai untuk judul, ganti token `--font-sans` atau tambahkan token baru di `src/styles/global.css`.
- [ ] **Duplikasi foto:** foto asli ada di `assets/image/` dan salinannya di `src/assets/images/` (yang dipakai build). Folder `assets/` boleh dihapus jika master disimpan di tempat lain.

---

## 4. Desain di canvas Wonder

File **Marmoset** (Page 1) berisi salinan desain dari kode ini:

- Landing Desktop 1440 dan Landing Mobile 390
- State tab Retail dan Jasa untuk penjelajah solusi dan laporan pemilik
- Bar CTA bawah versi ponsel

Revisi visual sebaiknya direview di canvas dulu, lalu diterapkan ke kode.

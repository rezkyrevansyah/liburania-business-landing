# Brief Landing Page Liburania Business

## F&B System · Retail Management System · Service Management System

Versi 1.0 — 26 November 2026  
Status: konsep untuk ditinjau; belum merupakan persetujuan desain atau spesifikasi komersial produk.

Dokumen ini menyatukan hasil penelusuran situs resmi, strategi pesan, konsep visual, naskah awal, dan arahan implementasi. Fokus pekerjaan berikutnya adalah **satu landing page promosi**, bukan membangun aplikasi kasir atau sistem operasionalnya.

---

## 0. Ringkasan eksekusi untuk Claude

Bagian ini dapat digunakan sebagai konteks awal. Baca bagian detail hanya ketika diperlukan. Jangan mengulang seluruh riset atau menambahkan fitur produk berdasarkan kebiasaan kompetitor.

### Tujuan

Buat satu landing page berbahasa Indonesia untuk mengenalkan tiga solusi Liburania Business dan mendorong calon pelanggan menghubungi sales serta menjadwalkan demo. Pengunjung harus segera memahami produk, menemukan jenis usahanya, mengenali masalahnya, dan melihat bagaimana solusi bekerja.

### Arah konsep terpilih

**“Usaha berjalan. Anda pegang kendali.”**

Cerita visual mempertemukan dua sisi bisnis: pelayanan di depan pelanggan dan pengelolaan di belakangnya. Gunakan foto usaha yang kuat, cuplikan produk yang sah, dan satu penjelajah solusi interaktif. Kesan yang dicari: hangat, percaya diri, rapi, dan konkret.

### Fakta inti yang wajib dijaga

| Modul | Pembeda utama | Contoh pengguna |
| --- | --- | --- |
| F&B | POS/meja, alur dapur, resep/biaya bahan, inventori, pembelian, laporan, multi-outlet | Restoran dan kafe; outlet kuliner di destinasi wisata |
| Retail | POS, SKU/barcode, stok/opname/transfer, supplier/pembelian, promo, laporan, multi-outlet | Toko suvenir, merchandise, minimarket, retail hotel/resort |
| Jasa | Booking per staf, POS layanan dan produk, paket, komisi, riwayat pelanggan, membership, laporan, multi-outlet | Salon/barbershop, spa/wellness; jenis jasa lain sesuai kecocokan fitur |

Benang merah: transaksi yang tercatat, operasional yang teratur, dan laporan untuk pemilik usaha. **Kesamaan ini bukan bukti bahwa ketiga modul otomatis berbagi stok, pelanggan, satu keranjang pembayaran, atau laporan gabungan lintas jenis usaha.**

### Struktur halaman

1. Hero: proposisi nilai + tiga dunia usaha + CTA.
2. Problem: tiga situasi yang mudah dikenali melalui gambar.
3. Solusi: tab F&B / Retail / Jasa, masing-masing dengan pengguna, alur, dan fitur pembeda.
4. Kendali pemilik: ringkasan manfaat bersama dengan contoh laporan yang sesuai modul.
5. Bukti produk: cuplikan asli atau studi kasus sah; sesuaikan dengan aset yang tersedia.
6. Alur menuju demo: kebutuhan → demonstrasi → diskusi penerapan.
7. FAQ: mengatasi keraguan utama.
8. CTA penutup; footer ringkas.

### Aturan tampilan dan interaksi

- Foto dan tampilan produk menjadi pusat komposisi. Sasaran visual sekitar 60–70% pada hero/solusi, bukan aturan matematis seluruh halaman.
- Pertahankan keluarga visual Liburania: navy, biru, cyan, putih. Tambahkan latar putih hangat dan fotografi natural.
- Hanya satu interaksi utama: tab solusi. Tidak perlu carousel otomatis, WebGL, scroll hijacking, atau video berat.
- CTA utama selalu **Jadwalkan Demo**. CTA pendamping sementara **Hubungi Tim Sales**.
- URL wajib: `https://liburania.com/business/kontak`.
- Penting: URL tersebut saat diperiksa membuka formulir sales, bukan WhatsApp langsung. Jangan menulis “Chat WhatsApp” sebelum tujuan aktual diselaraskan.
- Jangan membuat harga, diskon, statistik hasil, testimoni, badge, atau screenshot produk palsu.
- Booking jasa dicatat oleh staf, termasuk permintaan lewat telepon/WhatsApp. Jangan mengubahnya menjadi klaim booking mandiri pelanggan atau integrasi WhatsApp otomatis.
- Gunakan stack yang sudah ada. Jika proyek baru dan tidak ada ketentuan lain, halaman statis dengan Astro + TypeScript + CSS merupakan opsi awal; React island hanya jika dibutuhkan. Tidak perlu database/backend baru.
- Semua konten harus terbaca pada ponsel; isi tiga modul tersedia dalam HTML meskipun JavaScript gagal.

### Definisi hasil yang baik

Dalam peninjauan singkat, orang dapat menjawab: “Ini untuk usaha apa?”, “Apa manfaat yang relevan?”, dan “Bagaimana saya meminta demo?”. Efek visual harus memperjelas jawaban tersebut.

---

## 1. Ruang lingkup dan kebutuhan wajib

| Kebutuhan klien | Cara dipenuhi |
| --- | --- |
| Satu halaman mempromosikan tiga modul | Satu cerita payung, tiga tab solusi dengan kedalaman setara |
| Ada problem | Tiga adegan operasional di bagian 2 halaman |
| Ada solusi | Alur visual dan fitur pembeda pada tab solusi |
| Jelas ditujukan kepada siapa | Kategori di hero dan contoh usaha dalam setiap tab |
| CTA ke URL kontak yang diberikan | Satu konfigurasi URL bersama untuk seluruh CTA |
| Jadwalkan demo tetap ada | Header, hero, solusi, dan penutup sesuai kebutuhan tampilan |
| Lebih visual daripada teks | Foto kontekstual, produk, alur bergambar; paragraf pendek |
| Terasa berbeda dan mendukung konversi | Satu pengalaman “depan usaha ↔ kendali operasional” dengan pilihan sektor yang relevan |

Termasuk dalam rancangan: struktur, copy, responsivitas, tab solusi, tautan CTA, metadata dasar, dan rencana pengukuran. Tidak termasuk otomatis: aplikasi demo interaktif sungguhan, login, backend lead baru, sistem jadwal, integrasi WhatsApp API, perubahan formulir situs utama, atau pembuatan aset berbayar.

Landing page berfokus pada tiga modul ini. Ticketing, event, akomodasi, accounting, HR/payroll, dan warehouse merupakan konteks ekosistem; bukan section produk tambahan yang harus dijual di halaman ini.

## 2. Dasar riset dan tingkat kepastian

Riset dilakukan pada 26 November 2026 melalui halaman publik resmi dan inspeksi tampilan desktop. Seluruh bagian utama ketiga halaman modul dibaca, beserta halaman induk dan kontak. Referensi majoo, Moka, dan ESB ditinjau dari struktur konten dan tampilan; pilihan sektor ESB juga dicoba. Tidak ada form dikirim, akun aplikasi diakses, atau fitur operasional diuji.

Gunakan tiga tingkat informasi berikut:

- **Fakta situs:** ditawarkan secara tertulis di sumber resmi; belum setara verifikasi aplikasi berfungsi atau termasuk dalam semua paket.
- **Usulan brief:** keputusan komunikasi/desain untuk landing page ini.
- **Perlu konfirmasi:** detail komersial, teknis, atau bukti yang belum cukup tersedia.

### Sumber resmi

| ID | Sumber | Kegunaan |
| --- | --- | --- |
| S1 | [Liburania Business / modul](https://liburania.com/business#modul) | Positioning induk, ekosistem, nama modul, logo klien |
| S2 | [F&B System](https://liburania.com/business/modul/fnb) | Alur kasir, dapur, resep, stok, pembelian, laporan |
| S3 | [Retail Management System](https://liburania.com/business/modul/tenant) | Katalog/SKU, persediaan, purchasing, kasir, analitik |
| S4 | [Service Management System](https://liburania.com/business/modul/visitor) | Booking staf, layanan, komisi, pelanggan, laporan |
| S5 | [Kontak sales](https://liburania.com/business/kontak) | Tujuan CTA dan hambatan alur konversi saat ini |
| S6 | [majoo](https://majoo.id/) | Referensi hierarki, foto manusia, pengelompokan sektor |
| S7 | [Moka](https://www.mokapos.com/) | Referensi produk sebagai visual utama, kejelasan CTA |
| S8 | [ESB](https://www.esb.id/id) | Referensi penjelajah sektor dan hubungan operasional |

Slug `tenant` berarti Retail pada situs sekarang; `visitor` berarti Jasa & Layanan. Jangan menafsirkan keduanya dari nama URL lama.

## 3. Pemahaman produk

### 3.1 F&B System — dari kasir ke dapur dan biaya bahan

**Fakta situs [S2]:** Poztix F&B menghubungkan transaksi, pesanan dapur, resep, inventori, pembelian, dan laporan. Masalah yang diangkat: transaksi sulit dikontrol; bahan tidak akurat; kasir-dapur tidak sinkron; omzet terlihat tetapi biaya dan margin sulit dianalisis.

| Kelompok fitur | Yang ditawarkan di situs | Implikasi pesan |
| --- | --- | --- |
| Smart POS & kasir | Penjualan, menu, pembayaran, diskon, sesi kasir | Pelayanan dan pencatatan lebih terorganisir |
| Meja & dine-in | Pengelolaan meja dan layanan makan di tempat | Konteks restoran jelas, bukan kasir generik |
| Kitchen Display & workflow | Status pesanan, stasiun dapur, laporan performa dapur | Kasir dan dapur memiliki alur koordinasi |
| Menu, resep & modifier | Varian, topping, bahan, komposisi resep | Kebutuhan menu sampai bahan dapat dikelola |
| Inventori | Opname, pergerakan, transfer; pengelolaan persediaan/produksi | Bahan baku lebih mudah ditelusuri |
| Purchasing & supplier | PO, penerimaan, retur, evaluasi pengadaan | Pengadaan tidak berhenti pada catatan stok |
| Analitik | Omzet, produk terlaris, nilai stok, performa penjualan | Pemilik mendapat dasar evaluasi usaha |
| Multi-outlet | Pengelolaan beberapa cabang melalui platform terpusat | Relevan untuk usaha dengan banyak outlet |

**Usulan pesan:** “Kasir dan dapur lebih selaras. Bahan dan biaya lebih terpantau.” Jangan menjanjikan profit otomatis, margin naik sekian persen, atau pengurangan stok berdasarkan resep secara otomatis tanpa konfirmasi mekanisme.

### 3.2 Retail Management System — dari barang terjual ke persediaan

**Fakta situs [S3]:** Poztix Retail mencakup penjualan, katalog, stok, pembelian, dan evaluasi performa. Masalah yang diangkat: transaksi tidak terpantau, stok meleset, pengadaan terpisah, dan performa produk sulit diketahui.

| Kelompok fitur | Yang ditawarkan di situs | Implikasi pesan |
| --- | --- | --- |
| POS & sesi kasir | Transaksi, pembayaran, diskon, pengawasan kasir | Penjualan lebih terstruktur |
| Katalog | Kategori, harga, SKU, barcode, informasi produk | Produk lebih mudah ditemukan dan dikelola |
| Inventori | Stok, pergerakan, opname, transfer antar-outlet | Pemilik mengetahui posisi persediaan |
| Purchasing & supplier | PO, penerimaan, retur | Pembelian dan penerimaan lebih tertata |
| Harga & promosi | Diskon, kode promo, bundling | Pengaturan penawaran lebih terorganisir |
| Multi-outlet | Produk, stok, dan transaksi cabang | Pengawasan beberapa toko |
| Laporan | Penjualan, produk/kategori terlaris, tren, nilai stok, performa outlet | Evaluasi melampaui omzet |
| Kontrol transaksi | Refund, rekonsiliasi, sesi kasir, deteksi anomali | Mendukung penelusuran aktivitas kasir |

Situs juga menyebut peringatan stok menipis. **Usulan pesan:** “Ketahui yang terjual, yang tersisa, dan yang perlu dipesan.” Jangan mengubah peringatan menjadi klaim pembelian ulang otomatis.

### 3.3 Service Management System — dari jadwal staf ke layanan pelanggan

**Fakta situs [S4]:** Nama tampilan produk adalah Poztix Jasa & Layanan. Modul memadukan booking per staf, transaksi layanan/produk, paket, komisi, riwayat pelanggan, serta laporan. Masalahnya: jadwal berbenturan, penjualan terpisah, komisi manual, dan informasi performa tersebar.

| Kelompok fitur | Yang ditawarkan di situs | Implikasi pesan |
| --- | --- | --- |
| Booking per staf | Kalender, ketersediaan, slot, jenis layanan | Jadwal lebih mudah ditata |
| POS layanan & produk | Layanan, produk, pembayaran dalam satu kasir | Relevan untuk salon yang juga menjual produk |
| Paket | Pengelolaan paket dan sisa penggunaan | Pemakaian paket dapat dipantau |
| Komisi & performa | Komisi berdasarkan layanan; rekap per staf | Perhitungan dan evaluasi lebih transparan |
| Pelanggan & CRM | Profil, riwayat layanan, preferensi | Tim memiliki konteks layanan pelanggan |
| Promo & membership | Diskon, voucher, program member | Mendukung pengelolaan hubungan pelanggan |
| Laporan | Omzet, layanan terlaris, transaksi staf, setoran kasir | Pemilik dapat menilai performa layanan |
| Multi-outlet | Beberapa cabang dalam satu platform | Relevan bagi usaha jasa bercabang |

**Batas penting:** situs menyebut staf mencatat booking dari telepon atau WhatsApp. Ini tidak membuktikan sinkronisasi chat, bot WhatsApp, pengingat otomatis, booking publik mandiri, pembayaran online, atau pencegahan bentrok secara mutlak.

**Usulan pesan:** “Jadwal lebih rapi. Layanan dan komisi lebih mudah dipantau.”

## 4. Keterkaitan ketiga modul

### 4.1 Hubungan yang paling relevan bagi pembeli

Ketiganya melayani usaha dengan transaksi harian dan kegiatan operasional yang perlu ditata. Titik awal berbeda, tetapi kebutuhan pemilik serupa: mengetahui apa yang terjadi, mengurangi pencatatan terpisah, dan mengambil keputusan berdasarkan laporan.

| Lapisan | F&B | Retail | Jasa |
| --- | --- | --- | --- |
| Yang dijual | Menu, varian, tambahan | Barang, SKU, kategori | Layanan, paket, produk |
| Proses khas | Meja, pesanan, dapur | Penjualan, pengadaan, persediaan | Booking, staf, pelayanan |
| Yang perlu dikendalikan | Bahan, resep, biaya | Stok, pembelian, kasir | Jadwal, penggunaan paket, komisi |
| Yang dievaluasi | Menu, biaya bahan, outlet | Produk, stok, outlet | Layanan, staf, outlet |
| Fondasi bersama | Transaksi dan laporan | Transaksi dan laporan | Transaksi dan laporan |

**Kesimpulan strategi:** jual kendali operasional melalui solusi yang sesuai jenis usaha. Jangan memosisikan tiga modul sebagai tiga produk yang wajib dibeli sekaligus.

### 4.2 Keterkaitan dalam satu kawasan

Contoh relevansi: sebuah destinasi memiliki restoran, toko suvenir, serta spa/layanan. Masing-masing dapat memiliki kebutuhan yang dijawab oleh modul berbeda. Ini merupakan **contoh konteks penggunaan**, bukan studi kasus klien atau bukti implementasi lintas modul.

S1 menyatakan modul terhubung dalam satu dashboard dan dapat ditambah kemudian. Landing page tetap perlu menahan klaim lebih rinci sampai dikonfirmasi:

- Apakah satu akun/tenant dapat mengaktifkan ketiganya?
- Apakah ada laporan gabungan F&B, retail, dan jasa?
- Apakah master pelanggan/produk, stok, dan pembayaran dibagikan?
- Apakah kombinasi modul memerlukan paket atau biaya tambahan?

Sebelum jawabannya tersedia, gunakan “pilih solusi sesuai kebutuhan usaha”, bukan “seluruh bisnis otomatis menyatu”.

## 5. Ditujukan kepada siapa

**Usulan prioritas:** pemilik dan pengelola usaha, dengan manajer outlet/operasional sebagai pengguna pendamping dalam evaluasi produk. Hindari mengunci skala UMKM atau enterprise karena batas kapasitas dan paket belum diperiksa.

| Segmen | Contoh yang ditampilkan | Kebutuhan utama | Penekanan visual |
| --- | --- | --- | --- |
| F&B | Restoran, kafe, outlet kuliner | Pesanan dan dapur selaras; bahan/biaya terpantau | Kasir, dapur, resep/bahan |
| Retail | Toko suvenir, merchandise, minimarket | Stok jelas, transaksi tertata, pengadaan terlacak | Barcode, rak, stok |
| Jasa | Salon/barbershop, spa/wellness | Booking staf, paket, komisi, riwayat | Kalender staf, pelayanan, rekap komisi |
| Pengelola kawasan | Destinasi wisata, hotel/resort dengan unit usaha relevan | Menentukan modul untuk setiap operasional | Tiga kegiatan usaha dalam satu konteks lokasi |

Restoran/kafe merupakan segmentasi yang disimpulkan dari fungsi dan bahasa S2. Contoh retail dan jasa disebut eksplisit pada S3/S4. S4 juga menyebut laundry, bengkel, rental, dan service center; tampilkan sebagai contoh sekunder. Jangan menyiratkan fitur khusus semua industri tersebut—misalnya tracking cucian, diagnosis teknisi, atau inventori aset rental—sudah terverifikasi.

**Keputusan asumsi untuk konsep:** jangkauan halaman mencakup usaha mandiri dan unit usaha di kawasan wisata. Klien perlu menegaskan apakah kampanye sebenarnya hanya ditujukan ke ekosistem wisata; struktur halaman tetap dapat dipakai dengan penggantian foto dan contoh.

## 6. Pembelajaran referensi UI

Observasi di bawah hanya dari halaman publik yang ditinjau, bukan penilaian hasil konversi aktual. Solusi akhir tetap memakai identitas Liburania dan aset yang boleh digunakan.

| Referensi | Pola yang diamati | Adaptasi untuk brief |
| --- | --- | --- |
| majoo [S6] | Foto manusia dan perangkat mendampingi pesan utama; pilihan sektor; manfaat dikelompokkan; demo dan kontak tersedia | Gabungkan kehidupan usaha dengan visual produk; kelompokkan penjelasan menurut kebutuhan pembeli |
| Moka [S7] | Produk/perangkat tampil besar; headline langsung; demo dan WhatsApp menonjol; foto berdampingan dengan antarmuka | Buat produk mudah dipahami dan CTA mudah ditemukan; gunakan komposisi foto + layar yang sah |
| ESB [S8] | Pilihan jenis usaha mengganti foto, penjelasan, dan tujuan solusi; hubungan proses dijelaskan; bukti pelanggan dekat dengan produk | Gunakan penjelajah sektor dan cerita alur kerja; tampilkan bukti hanya ketika relevan dan tersedia |

**Keputusan desain sendiri:** navigasi singkat; satu hero stabil; tab manual; tidak menyalin daftar produk, klaim “nomor satu”, angka pengguna, nama pelanggan, atau promosi kompetitor. Pola-pola tersebut inspirasi penyajian, bukan bukti fitur Liburania.

## 7. Konsep kreatif

### “Usaha berjalan. Anda pegang kendali.”

Di depan pelanggan ada kopi disajikan, barang dibayar, atau layanan diberikan. Di belakangnya ada pesanan, bahan, stok, jadwal, komisi, dan laporan. Landing page memperlihatkan dua sisi itu berdekatan agar manfaat terasa nyata.

**Momen visual utama:** hero dengan tiga potongan kegiatan usaha; kemudian satu adegan terpilih dibuka menjadi alur operasional pada penjelajah solusi. Pengunjung merasa halaman memahami bisnisnya tanpa harus membaca katalog panjang.

### Komposisi hero

- Kiri sekitar 40–45%: kategori produk, headline besar, penjelasan pendek, dua CTA.
- Kanan sekitar 55–60%: satu foto dominan F&B dan dua bidang pendamping retail/jasa, dengan crop editorial yang konsisten.
- Tambahkan satu perangkat atau cuplikan antarmuka yang jelas, bukan banyak kartu statistik mengambang.
- Label pendek “F&B”, “Retail”, “Jasa” memastikan tiga kategori terbaca meskipun foto belum sepenuhnya dikenali.
- Foto tidak perlu menjadi kartu dengan sudut dan ukuran yang semuanya sama. Gunakan hirarki foto dominan dan pendamping.
- Pada ponsel: headline → uraian → CTA → komposisi gambar ringkas → pintasan sektor.

### Alasan konsep ini layak

Tiga industri mendapat tempat yang setara, sementara cerita payung tetap sederhana. Daya tarik berasal dari pemilihan gambar, ukuran, ritme ruang, dan relevansi alur. Implementasi dapat diselesaikan dengan komponen web biasa.

### Arah visual

Nilai berikut adalah **usulan desain**, bukan panduan merek resmi. Warna biru utama mengikuti keluarga warna yang terlihat di situs; validasi dengan aset brand klien.

| Elemen | Usulan |
| --- | --- |
| Primary | Biru `#0B6CFF` untuk CTA dan penekanan |
| Teks gelap / penutup | Navy `#071C3D` |
| Aksen | Cyan `#22BCD6`, dipakai secukupnya |
| Latar utama | Putih hangat `#F8F7F3`; putih pada area produk |
| Batas / teks sekunder | `#DEE5EC` / `#526174` |
| Tipografi | Inter; satu keluarga dengan bobot 400/500/600/700, mengutamakan keterbacaan |
| Judul | Desktop sekitar 56–72 px; ponsel 36–44 px; sesuaikan panjang baris |
| Isi | 16–18 px, line-height sekitar 1.5–1.7 |
| Layout | Konten maksimum sekitar 1200 px; ruang antar-section desktop 80–112 px, ponsel 48–64 px |
| Bentuk | Radius sekitar 16–24 px untuk foto/panel; garis dan bayangan tipis |
| Fotografi | Usaha Indonesia/Asia Tenggara yang terasa masuk akal, pencahayaan natural, subjek sedang bekerja |

Kontras harus diperiksa; cyan bukan pilihan default untuk teks kecil di atas putih. Hindari gradien dekoratif besar, ikon sebagai pengganti gambar utama, terlalu banyak pill, dan perangkat 3D yang sulit dibaca.

## 8. Blueprint halaman dan naskah awal

Copy berikut merupakan usulan siap desain. Detail yang belum terkonfirmasi tidak boleh berubah menjadi janji pada halaman publik. Target total copy yang terlihat dalam satu pilihan sektor sekitar 450–650 kata, tidak termasuk FAQ yang tertutup.

### Header

Logo Liburania Business; hubungan Poztix dijelaskan sekali dengan penamaan yang disetujui klien. Menu cukup **Solusi · Cara Kerja · FAQ** dan CTA **Jadwalkan Demo**. Tautan masuk bukan tujuan utama kampanye. Header sticky dibuat tipis dan tidak menutupi anchor.

### 1 — Hero: kenali produk dan tindakan berikutnya

**Eyebrow:** Sistem operasional untuk F&B, retail, dan jasa

**H1:** Usaha berjalan. Anda pegang kendali.

**Uraian:** Dari transaksi hingga laporan, pilih solusi Liburania Business yang membantu operasional usaha Anda lebih tertata.

**CTA utama:** Jadwalkan Demo  
**CTA pendamping:** Hubungi Tim Sales  
**Tautan eksplorasi:** Temukan solusi untuk usaha Anda ↓

Visual mengikuti komposisi bagian 7. Pintasan F&B/Retail/Jasa mengaktifkan pilihan terkait dan mengarahkan ke `#solusi`; jangan membuat pengunjung melewati form untuk membaca produk.

Opsional di bawah hero: strip logo mitra/klien yang sah. Jika belum ada persetujuan penggunaan, hilangkan; layout tidak boleh menyisakan tempat kosong.

### 2 — Problem: tunjukkan situasi sehari-hari

**Judul:** Saat usaha ramai, apa yang paling sulit Anda pantau?

| Gambar | Headline | Keterangan |
| --- | --- | --- |
| Kasir dan dapur saat sibuk | Pesanan masuk. Dapur sudah tahu? | Koordinasi pesanan dan bahan perlu tetap rapi saat pelayanan padat. |
| Produk di rak dan catatan stok | Barang terjual. Stok masih sesuai? | Selisih stok dan pembelian yang terpisah menyulitkan pengawasan. |
| Kalender staf dan pelayanan | Booking bertambah. Jadwal tetap tertata? | Jadwal, transaksi layanan, dan komisi perlu mudah ditelusuri. |

Gunakan tiga panel foto dengan caption, bukan enam kartu masalah generik. Hindari foto yang mempermalukan pekerja atau melebih-lebihkan kekacauan.

**Kalimat penghubung:** Temukan solusi yang mengikuti cara usaha Anda bekerja.

### 3 — Solusi: penjelajah “Di balik pelayanan yang lancar”

**Judul:** Cara kerja berbeda. Pilih solusi yang sesuai.

Tab: **F&B · Retail · Jasa**. Tampilkan satu panel lengkap, bukan tiga daftar panjang sekaligus. Semua tab memiliki kedalaman setara: pengguna → manfaat → empat langkah visual → tiga fitur utama → demo.

#### Panel F&B

**Label:** F&B System  
**Untuk:** Restoran, kafe, dan outlet kuliner.  
**Headline:** Dari pesanan ke dapur, operasional lebih selaras.  
**Uraian:** Hubungkan kasir, meja, pesanan dapur, resep, dan persediaan untuk membantu tim bekerja lebih teratur.

Alur ilustratif: **Pesanan di kasir → Koordinasi dapur → Pengelolaan bahan & resep → Evaluasi penjualan**.

Sorotan: **POS & meja · Kitchen Display · Resep & biaya bahan**.  
Caption pendamping: Pembelian, supplier, inventori, dan multi-outlet melengkapi kebutuhan operasional.

**CTA:** Jadwalkan Demo; konteks internal `fnb`.

#### Panel Retail

**Label:** Retail Management System  
**Untuk:** Toko suvenir, merchandise, dan minimarket.  
**Headline:** Barang terjual, persediaan lebih mudah ditelusuri.  
**Uraian:** Kelola kasir, katalog produk, stok, dan pembelian agar aktivitas toko tercatat lebih terstruktur.

Alur ilustratif: **Pencarian produk/SKU → Transaksi kasir → Pemantauan stok → Evaluasi penjualan & pengadaan**.

Sorotan: **SKU & barcode · Stok & opname · Pembelian & supplier**.  
Caption pendamping: Kelola promo, pantau aktivitas kasir, dan evaluasi performa beberapa outlet.

**CTA:** Jadwalkan Demo; konteks internal `tenant`.

#### Panel Jasa

**Label:** Service Management System / Jasa & Layanan  
**Untuk:** Salon, barbershop, spa, dan wellness.  
**Headline:** Jadwal staf tertata, layanan lebih mudah dipantau.  
**Uraian:** Atur booking per staf, transaksi layanan dan produk, paket, komisi, serta riwayat pelanggan dalam satu sistem.

Alur ilustratif: **Staf mencatat booking → Jadwal pelayanan → Transaksi layanan/produk → Rekap komisi & laporan**.

Sorotan: **Booking per staf · Paket layanan · Komisi & riwayat pelanggan**.  
Caption pendamping: Promo, membership, dan laporan membantu pengelolaan layanan di beberapa cabang.

**CTA:** Jadwalkan Demo; konteks internal `visitor`.

**Arahan visual panel:** satu foto layanan besar dipasangkan dengan satu crop produk dan empat label proses. Alur menunjukkan cakupan kerja; panah tidak boleh digunakan untuk menyiratkan otomasi atau sinkronisasi yang belum diverifikasi. Jika memakai wireframe, beri label “Ilustrasi alur”, bukan screenshot aplikasi.

### 4 — Kendali pemilik: terjemahkan fitur menjadi manfaat

**Judul:** Lebih jelas melihat usaha Anda.

**Uraian:** Pantau transaksi dan performa operasional melalui laporan yang sesuai dengan kebutuhan usaha.

| Sektor | Fokus yang ditampilkan | Pertanyaan pemilik |
| --- | --- | --- |
| F&B | Penjualan menu, bahan/biaya, performa outlet | Menu apa yang perlu dievaluasi? |
| Retail | Produk terlaris, nilai/pergerakan stok, outlet | Produk mana yang perlu diperhatikan? |
| Jasa | Layanan terlaris, transaksi staf, komisi, outlet | Bagaimana performa layanan dan tim? |

Visual mengikuti sektor aktif dari penjelajah solusi, dengan label sektor yang tetap terlihat. Pada ponsel cukup satu gambar dan dua caption. Jangan menggambar satu dashboard gabungan tiga modul. Angka contoh wajib diberi label “Data ilustrasi” dan tidak dijadikan hasil pelanggan.

### 5 — Bukti: tunjukkan yang benar-benar ada

**Judul default:** Lihat alur yang relevan dengan usaha Anda.

Prioritas isi:

1. Cuplikan produk asli yang sudah disanitasi, dengan satu caption menjelaskan hal yang terlihat.
2. Studi kasus relevan jika tersedia: konteks usaha, masalah, modul yang digunakan, perubahan yang dapat dibuktikan.
3. Jika keduanya belum tersedia, tampilkan contoh alur yang jelas berlabel ilustrasi dan arahkan ke demo. Jangan memaksakan testimonial atau logo.

Bagian ini dapat digabung dengan section solusi/kendali pemilik jika aset terbatas. Hindari mengulang foto atau manfaat yang sama hanya untuk memperpanjang halaman.

Logo pariwisata pada S1 membuktikan bahwa situs menampilkan nama-nama tersebut. Itu belum membuktikan mereka memakai ketiga modul ini atau mengizinkan logo dipakai dalam kampanye baru. Jangan menulis “Dipercaya ribuan bisnis F&B, retail, dan jasa” dari bukti tersebut.

### 6 — Menuju demo: buat langkah berikutnya terasa jelas

**Judul:** Mulai dari kebutuhan usaha Anda.

- **Ceritakan operasional Anda.** Pilih jenis usaha dan bagian yang ingin dibenahi.
- **Lihat solusi yang relevan.** Diskusikan alur dan fitur melalui demo bersama tim.
- **Bahas kebutuhan penerapan.** Tanyakan perangkat, paket, dan penyiapan yang sesuai.

**CTA:** Jadwalkan Demo

Gunakan satu foto tim berdiskusi atau tiga crop kegiatan yang konsisten. Ini **usulan pengalaman sales** dan perlu diselaraskan dengan proses klien; jangan mencantumkan durasi demo, SLA, gratis, tanpa komitmen, atau waktu implementasi sebelum dikonfirmasi.

### 7 — FAQ: lima pertanyaan utama

**Apakah sistem ini hanya untuk usaha di tempat wisata?**  
Halaman modul menjelaskan kebutuhan F&B, retail, dan berbagai bisnis jasa. Ceritakan jenis usaha Anda kepada tim untuk memastikan kecocokan solusi dan penerapannya.

**Apakah saya harus memakai ketiga modul?**  
Solusi dapat dipilih berdasarkan kebutuhan operasional. Tim sales membantu memastikan modul dan paket yang sesuai. Detail ketersediaan paket perlu dikonfirmasi.

**Apakah mendukung beberapa outlet?**  
Ketiga halaman modul mencantumkan pengelolaan multi-outlet. Konfirmasikan kebutuhan cabang dan pengaturannya saat demo.

**Apakah pelanggan bisa booking sendiri lewat WhatsApp?**  
Modul jasa menjelaskan pencatatan booking oleh staf, termasuk permintaan melalui telepon atau WhatsApp. Booking mandiri dan integrasi WhatsApp otomatis perlu ditanyakan lebih lanjut.

**Bagaimana mengetahui biaya dan perangkat yang dibutuhkan?**  
Hubungi tim sales untuk membahas kebutuhan usaha, pilihan modul, perangkat, dan rincian biaya yang berlaku.

FAQ dapat menggunakan bahasa lebih ringkas saat final. Hindari publikasi detail paket yang belum disetujui klien.

### 8 — Penutup: satu keputusan yang jelas

**Judul:** Siap melihat cara kerjanya untuk usaha Anda?

**Uraian:** Ceritakan kebutuhan F&B, retail, atau bisnis jasa Anda. Temukan solusi yang paling relevan bersama tim Liburania Business.

**CTA utama:** Jadwalkan Demo  
**CTA pendamping:** Hubungi Tim Sales

Latar navy, foto usaha atau pemilik sebagai penyeimbang, teks putih, satu tombol biru yang kontras. Footer berisi identitas dan tautan resmi yang telah disediakan klien. Jangan membuat halaman legal fiktif.

## 9. Spesifikasi interaksi

### Tab solusi

- Default F&B; Retail/Jasa dapat dipilih sejak pintasan hero.
- Perubahan oleh pengunjung, tanpa pergantian otomatis.
- Satu state sektor digunakan oleh penjelajah solusi dan panel kendali pemilik; isi problem tetap memperlihatkan ketiganya.
- Gunakan identitas UI `fnb`, `retail`, `service`; pisahkan dari kode URL resmi `fnb`, `tenant`, `visitor`.
- Setiap panel memiliki judul, gambar, audiens, manfaat, alur, dan CTA. Pergantian menjaga tinggi layout sedapat mungkin.
- Navigasi keyboard mengikuti pola tab yang benar: fokus terlihat, arrow keys/Home/End, panel terhubung melalui ARIA. Klik pintasan hero juga memindahkan fokus secara wajar ke heading solusi.
- Di bawah 768 px: tiga tab tetap terlihat, panel satu kolom, alur empat langkah vertikal. Tidak membutuhkan hover, drag, atau swipe untuk menemukan isi.
- Tanpa JavaScript: tampilkan tiga panel berurutan dengan heading yang jelas. Enhancement boleh menyembunyikan panel lain setelah aktif.

### Gerak dan scroll

Transisi opacity/transform ringan sekitar 180–250 ms. Animasi masuk opsional; konten tidak boleh tertahan jika skrip gagal. Hormati `prefers-reduced-motion`. Hindari efek parallax berat dan section yang mengunci scroll.

### Navigasi dan CTA ponsel

Tombol minimum sekitar 44 × 44 px. Sticky CTA bawah boleh tampil setelah CTA hero keluar viewport: satu tombol Jadwalkan Demo dan satu tombol kontak. Sembunyikan saat penutup terlihat. Perhitungkan safe-area dan ruang bawah; tidak menutup isi, FAQ, atau widget CS.

## 10. Alur CTA, WhatsApp, dan demo

### Kondisi yang diamati [S5]

URL kontak membuka formulir berisi nama, email kerja, nomor HP/WhatsApp, nama bisnis, jenis bisnis, pertanyaan, dan kode referral opsional. Copy mengatakan tim menghubungi lewat email pada hari kerja. Pilihan usaha berfokus pada wisata; ada “F&B dan retail” tetapi belum ada kategori jasa.

Tautan dari modul memakai `?modul=fnb`, `?modul=tenant`, dan `?modul=visitor`. Saat halaman `?modul=visitor` diperiksa, kategori usaha tetap “Pilih jenis bisnis”; tidak ada penyesuaian konteks jasa yang terlihat. Tidak dilakukan pengiriman, sehingga penerusan parameter pada backend belum diketahui.

### Keputusan untuk rancangan sekarang

| Elemen | Label aman | Tujuan sementara |
| --- | --- | --- |
| CTA utama seluruh halaman | Jadwalkan Demo | URL kontak wajib |
| CTA pendamping | Hubungi Tim Sales | URL kontak wajib |
| Eksplorasi | Temukan solusi untuk usaha Anda | Anchor `#solusi` |

Label Jadwalkan Demo berarti memulai permintaan demo melalui sales; jangan menampilkan kalender atau status “demo berhasil dijadwalkan” jika prosesnya belum ada.

### Jika WhatsApp langsung menjadi keputusan final

Klien menyediakan nomor atau tautan resmi. Alternatifnya, pemilik situs menambahkan pilihan WhatsApp di halaman kontak. Perubahan tujuan harus disetujui karena berbeda dari URL wajib semula. Setelah benar-benar mengarah ke WhatsApp, label dapat menjadi **Konsultasi via WhatsApp**.

Usulan pesan terisi, hanya setelah alur disetujui:

> Halo tim Liburania Business, saya ingin mengetahui solusi [F&B/Retail/Jasa] untuk usaha saya dan menjadwalkan demo. Nama usaha: …

Pesan tetap dikirim oleh pengunjung sendiri. Jangan menambahkan nomor, integrasi API, jam respons, atau janji gratis dari asumsi.

**Perbaikan funnel yang direkomendasikan, di luar landing page:** tambahkan kategori F&B, retail, dan jasa secara terpisah; selaraskan copy kontak; pertahankan konteks modul dan kebutuhan demo; jelaskan tindak lanjut sebenarnya. Jangan membuat form baru di landing page yang akhirnya meminta data yang sama lagi.

## 11. Rencana gambar dan aset

### Aset minimum

| Prioritas | Aset | Kebutuhan |
| --- | --- | --- |
| P0 | Logo Liburania Business dan Poztix | Berkas resmi, versi terang/gelap bila tersedia |
| P0 | Tiga foto usaha | F&B, retail, jasa; masing-masing satu foto kuat dengan ruang crop |
| P0 | Tiga tampilan produk relevan | F&B: kasir/KDS; retail: katalog/stok; jasa: kalender/komisi |
| P1 | Foto proses/operasional | Bisa berasal dari crop alternatif tiga foto utama jika kualitas memadai |
| P1 | Foto konsultasi atau tim | Untuk alur demo; opsional jika belum tersedia |
| P1 | Bukti pelanggan | Logo, kutipan, kasus, dan izin penggunaan yang relevan |

Prioritaskan aset resmi yang tersedia. Simpan salinan yang disetujui sebagai aset lokal proyek; hindari hotlink sebagai ketergantungan produksi. Jangan mengambil gambar atau screenshot aplikasi milik kompetitor untuk dipasang pada halaman Liburania.

### Kandidat aset yang benar-benar teramati

URL di bawah adalah lokasi sumber untuk evaluasi, bukan berkas yang sudah diunduh atau izin pakai yang sudah diverifikasi.

| Kegunaan | URL |
| --- | --- |
| Logo induk | `https://liburania.com/lb/logo-liburania-business.png` |
| Logo Poztix pada modul | `https://liburania.com/lb/poztix/poztix-logo.png` |
| Hero F&B | `https://liburania.com/lb/poztix/fnb-hero.jpg?v=20261027` |
| Hero retail | `https://liburania.com/lb/poztix/tenant-hero.jpg?v=20261027` |
| Hero jasa | `https://liburania.com/lb/poztix/visitor-hero.jpg?v=20261027` |
| F&B: kasir / KDS | `https://liburania.com/lb/poztix/fnb-f1.jpg?v=20261027` / `https://liburania.com/lb/poztix/fnb-f3.jpg?v=20261027` |
| Retail: katalog / stok | `https://liburania.com/lb/poztix/tenant-f2.jpg?v=20261027` / `https://liburania.com/lb/poztix/tenant-f3.jpg?v=20261027` |
| Jasa: jadwal / performa staf | `https://liburania.com/lb/poztix/visitor-f1.jpg?v=20261027` / `https://liburania.com/lb/poztix/visitor-f4.jpg?v=20261027` |

Visual modul saat ini memasukkan layar aplikasi ke dalam adegan usaha. Beberapa tulisan kecil pada gambar yang diperiksa tampak tidak cukup jelas untuk dianggap bukti antarmuka asli. Keaslian screenshot dan sumber produksinya belum diverifikasi. Gunakan sebagai kandidat visual suasana; minta screen capture produk asli untuk pembuktian fitur.

### Brief produksi foto tambahan, jika diperlukan

- **F&B:** staf restoran/kafe melayani pesanan dengan kasir dan aktivitas dapur sebagai konteks; suasana hangat; ruang kosong untuk crop; perangkat tidak memuat tulisan fiktif.
- **Retail:** staf toko suvenir atau merchandise memindai barang, rak rapi, produk mudah dikenali; hindari merek pihak lain.
- **Jasa:** interaksi staf dengan pelanggan salon/spa, suasana profesional dan nyaman; kalender produk dipasang dari aset sah pada tahap desain.

Jika memakai gambar generatif, gunakan untuk suasana usaha, bukan sebagai bukti UI, klien, atau hasil bisnis. Jangan membuat teks antarmuka melalui gambar generatif. Untuk versi awal, tidak perlu memproduksi puluhan gambar.

### Kualitas teknis

Foto landscape sekitar 1600 px cukup sebagai sumber awal; buat turunan responsif. Hero diberi prioritas muat, gambar di bawah fold lazy load. Tetapkan dimensi untuk menghindari layout bergeser. Alt menjelaskan konteks penting; dekorasi memakai alt kosong. Jangan menaruh copy utama di dalam file gambar.

## 12. Implementasi yang hemat konteks

### Keputusan teknis

**Jika ada repository:** baca struktur dan aturan proyek; pertahankan framework, router, sistem styling, dan deployment yang sudah dipakai. Jangan migrasi demi satu halaman.

**Jika belum ada repository:** usulan awal Astro + TypeScript + CSS. Gunakan JavaScript kecil untuk tab; framework interaktif bukan keharusan. Next.js dapat dipakai jika itu standar proyek Revan/klien. Landing page ini tidak membutuhkan Neon, Prisma, Supabase, autentikasi, atau API baru.

Susunan komponen yang disarankan: `Header`, `Hero`, `ProblemScenes`, `SolutionExplorer`, `OwnerVisibility`, `ProductEvidence`, `DemoSteps`, `FAQ`, `FinalCTA`, `Footer`, `MobileCTA`.

Simpan konten sektor dalam satu data terstruktur agar gambar, audiens, fitur, alur, dan kode modul konsisten. Simpan CTA dalam satu konfigurasi:

```ts
const contactUrl = 'https://liburania.com/business/kontak';
const moduleCodes = { fnb: 'fnb', retail: 'tenant', service: 'visitor' };
```

Default tautan memakai URL kontak persis. Penambahan query module/UTM hanya setelah kebutuhan routing dan penerimaan parameter diselaraskan. Kode sektor dapat digunakan untuk analytics tanpa mengubah URL wajib.

### Urutan kerja

1. Pastikan stack, logo, aset tersedia, dan catat keputusan terbuka tanpa melakukan riset ulang.
2. Bangun layout lengkap dengan copy brief dan slot gambar berasio tetap.
3. Selesaikan hero dan satu panel solusi sebagai patokan kualitas; terapkan pola yang sama ke dua sektor lain.
4. Tambahkan tab, anchor, FAQ, CTA, dan enhancement ringan.
5. Periksa ponsel/desktop, tautan, gambar, build, dan klaim konten.
6. Laporkan perubahan serta keputusan yang masih perlu klien jawab secara singkat.

Tidak perlu meminta persetujuan untuk pilihan rutin seperti spacing atau nama komponen. Jangan memublikasikan halaman atau mengubah situs utama bila tugas implementasi hanya meminta preview/review.

### Prompt handoff siap salin

```text
Gunakan Brief_Landing_Page_Liburania.md sebagai sumber konteks proyek.
Tugas: implementasikan satu landing page promosi tiga modul Liburania
Business: F&B, Retail, dan Jasa. Mulai dari bagian 0, lalu bagian 8–12
untuk copy, interaksi, CTA, aset, dan implementasi. Bagian 2–6 adalah
rujukan fakta bila perlu; jangan melakukan eksplorasi web ulang kecuali
ada informasi yang benar-benar hilang.

Ikuti konsep “Usaha berjalan. Anda pegang kendali.” Buat foto usaha
dan visual produk dominan, dengan hirarki editorial, tab solusi manual,
dan tampilan ponsel yang rapi. Gunakan stack repository yang ada.
Seluruh CTA utama berlabel Jadwalkan Demo dan menuju URL kontak wajib.
Jangan menyebut WhatsApp langsung sebelum tujuan aktual disetujui.
Jangan menciptakan fitur, harga, statistik, klien, atau testimoni.
Gunakan aset yang tersedia; tandai ilustrasi sebagai ilustrasi.
Jangan membuat backend atau aplikasi operasional. Kerjakan sampai
preview lokal dapat ditinjau, jalankan pemeriksaan yang relevan, lalu
berikan laporan singkat. Jangan deploy tanpa instruksi terpisah.
```

Untuk menghemat token lanjutan: minta revisi per section dengan menyebut ID/nama section; jangan meminta Claude menulis ulang seluruh brief, menjelaskan setiap file, atau menghasilkan beberapa konsep sekaligus.

## 13. Konversi, SEO, dan pengukuran

### Strategi konversi

Hero menjawab produk dan audiens; problem membuat pengunjung mengenali situasi; solusi memperlihatkan kecocokan; bukti memperkuat kepercayaan; demo menjadi langkah lanjut. Struktur ini adalah hipotesis desain, bukan jaminan kenaikan penjualan.

CTA ditempatkan pada momen keputusan: hero, solusi, dan penutup; header/mobile membantu akses. Tidak perlu menempelkan tombol pada setiap kartu. Halaman kontak perlu selaras agar pengunjung tidak merasa pindah ke layanan yang berbeda.

### Pengukuran yang disarankan

| Event | Properti minimum | Makna |
| --- | --- | --- |
| `sector_select` | `sector`, `source_section` | Pilihan solusi yang diminati |
| `demo_click` | `sector`, `section` | Minat meminta demo |
| `sales_click` | `sector`, `section`, `destination_type` | Minat berkonsultasi |
| `contact_submit_success` | Sumber kampanye dan sektor jika tersedia | Form berhasil dikirim di halaman kontak |
| Demo terjadwal | Dicatat dari proses sales | Ukuran hasil setelah klik/form |

Event implementasi mengikuti analytics yang sudah disetujui. Jangan mengirim nama, nomor WhatsApp, atau isi pesan sebagai parameter analytics. Klik CTA bukan lead terkirim; lead terkirim bukan demo terjadwal. Tanpa akses ke halaman kontak/CRM, pengukuran berhenti pada klik dan harus dilaporkan demikian.

Belum ada baseline untuk menetapkan target conversion rate. Kumpulkan data awal, lalu evaluasi sumber trafik, pilihan sektor, klik, lead, dan demo. Eksperimen selanjutnya cukup satu perubahan, misalnya headline manfaat atau komposisi hero.

### SEO dasar

Usulan title: **Sistem F&B, Retail & Jasa | Liburania Business**.  
Usulan description: **Kelola transaksi, stok, jadwal staf, dan laporan sesuai kebutuhan usaha. Kenali solusi F&B, retail, dan jasa Liburania Business. Jadwalkan demo.**

Satu H1, H2 berurutan, konten sektor dalam HTML, gambar responsif, metadata berbagi, dan canonical sesuai URL produksi final. Gunakan data terstruktur hanya untuk fakta yang dapat dibuktikan. Jangan memasukkan rating, harga, atau ulasan fiktif.

## 14. Checklist review dan penerimaan

### Konten dan kecocokan

- [ ] F&B, retail, dan jasa langsung terbaca pada hero.
- [ ] Setiap sektor memiliki pengguna, masalah, solusi, dan CTA.
- [ ] Perbedaan dapur/resep, stok/SKU, dan booking/komisi tidak tertukar.
- [ ] Tidak ada klaim stok/pelanggan/laporan lintas modul tanpa verifikasi.
- [ ] Booking staf tidak disebut booking mandiri atau integrasi WhatsApp otomatis.
- [ ] Tidak ada harga, hasil bisnis, testimoni, logo, atau screenshot yang dibuat-buat.
- [ ] Akuntansi, HR/payroll, dan warehouse tidak disajikan sebagai fitur termasuk paket dasar.

### Visual dan kegunaan

- [ ] Hero memadukan suasana usaha dan produk, bukan hanya teks/ikon.
- [ ] Foto punya konteks; tulisan layar palsu tidak dijadikan bukti fitur.
- [ ] Paragraf pendek dan copy yang terlihat tidak menenggelamkan gambar.
- [ ] Ketiga tab mudah ditemukan; halaman tetap bermakna tanpa JavaScript.
- [ ] Uji lebar sekitar 360/390, 768, dan 1280/1440 px; tidak ada overflow horizontal.
- [ ] Tautan anchor, keyboard, focus, FAQ, dan reduced motion bekerja.
- [ ] Sticky header/mobile CTA tidak menutupi konten atau widget CS.
- [ ] Gambar memiliki dimensi, alt yang tepat, dan fallback yang rapi.

### CTA dan teknis

- [ ] Seluruh CTA memakai URL yang disepakati; label sesuai tujuan sebenarnya.
- [ ] Jadwalkan Demo tetap tersedia dan tidak berpura-pura mengonfirmasi jadwal.
- [ ] Alur kontak tidak memaksa pengunjung jasa memilih kategori wisata yang tidak sesuai.
- [ ] Tidak ada form baru atau backend yang tidak diperlukan.
- [ ] Build/lint yang relevan lulus; tab, FAQ, dan tautan diuji manual.
- [ ] Performa diukur pada build produksi; sasaran LCP ≤2,5 dtk dan CLS ≤0,1 dievaluasi dalam kondisi yang dicatat, bukan dijanjikan tanpa pengukuran.
- [ ] Analytics membedakan klik, lead terkirim, dan demo terjadwal.
- [ ] Tidak ada data pelanggan nyata pada aset atau contoh layar.

## 15. Keputusan klien sebelum finalisasi

Pertanyaan berikut tidak menghalangi pembuatan konsep/preview. Jawabannya diperlukan agar copy dan funnel produksi akurat.

| Prioritas | Keputusan | Asumsi kerja saat ini |
| --- | --- | --- |
| Tinggi | Fokus usaha mandiri, kawasan wisata, atau keduanya? | Keduanya, dengan contoh wisata sebagai konteks tambahan |
| Tinggi | Identitas dominan Liburania Business atau Poztix? | Liburania Business sebagai payung; Poztix sebagai identitas sistem sesuai persetujuan |
| Tinggi | CTA harus kontak-form atau WhatsApp langsung? | URL kontak wajib; label Hubungi Tim Sales |
| Tinggi | Bagaimana permintaan demo ditindaklanjuti? | Melalui sales; tanpa janji jadwal otomatis, durasi, biaya, atau SLA |
| Tinggi | Aset produk asli dan hak pakai tersedia? | Kandidat gambar resmi dievaluasi; ilustrasi diberi label |
| Tinggi | Integrasi lintas tiga modul sedalam apa? | Tidak mengklaim lebih dari kebutuhan masing-masing modul |
| Sedang | Harga, perangkat, paket, dan biaya penyiapan? | Dibahas melalui sales; tidak menampilkan angka |
| Sedang | Bukti pelanggan mana yang relevan untuk tiga modul? | Bagian bukti memakai produk/alur jika belum ada studi kasus sah |
| Sedang | Repo, URL final, akses analytics, dan penanggung jawab kontak? | Ikuti lingkungan yang diberikan saat implementasi |

**Arah review:** nilai terlebih dahulu kecocokan audiens, ketepatan produk, kekuatan komposisi visual, dan kelancaran alur menuju demo. Efek tambahan baru dipertimbangkan setelah empat hal tersebut beres.

# Prompt Gambar Landing Page Liburania Business

**F&B · Retail · Jasa**  
Versi 1.0 — 26 November 2026  
Pendamping: `Brief_Landing_Page_Liburania.md`

## 1. Keputusan jumlah gambar

Setelah meninjau ulang konsep hero, tiga panel problem, tab solusi, kendali pemilik, bukti produk, dan demo pada brief, rekomendasinya adalah **7 gambar generatif dengan 7 prompt produksi**.

Pembagiannya: **3 foto sektor usaha + 3 foto problem operasional + 1 foto konsultasi/demo**. Foto sektor digunakan kembali melalui crop pada hero dan tab solusi. Panel kendali pemilik serta bukti produk memakai tampilan aplikasi asli.

Ini pengembangan dari daftar minimum sebelumnya: tiga panel problem kini mendapat foto tersendiri agar situasinya lebih spesifik dan pengulangan foto tidak terasa dominan. Tidak perlu membuat satu gambar baru untuk setiap section atau setiap fitur.

| ID | Nama berkas tujuan | Isi | Penempatan | Rasio master |
| --- | --- | --- | --- | --- |
| IMG-01 | `fnb-business.jpg` | Pelayanan kafe/restoran | Hero dominan; tab solusi F&B | 4:3 landscape |
| IMG-02 | `retail-business.jpg` | Pelayanan toko suvenir/merchandise | Hero pendamping; tab solusi Retail | 4:3 landscape |
| IMG-03 | `service-business.jpg` | Penyambutan pelanggan salon | Hero pendamping; tab solusi Jasa | 4:3 landscape |
| IMG-04 | `problem-fnb-orders.jpg` | Koordinasi pesanan di area dapur | Panel problem F&B | 3:2 landscape |
| IMG-05 | `problem-retail-stock.jpg` | Pemeriksaan produk dan persediaan | Panel problem Retail | 3:2 landscape |
| IMG-06 | `problem-service-schedule.jpg` | Pencatatan janji temu melalui telepon | Panel problem Jasa | 3:2 landscape |
| IMG-07 | `business-demo-consultation.jpg` | Pemilik usaha berdiskusi dengan konsultan | Alur demo; crop alternatif CTA penutup | 3:2 landscape |

**Di luar 7 gambar generatif:** 3 screenshot aplikasi asli + 2 logo resmi. Jadi **12 aset utama** untuk versi lengkap yang disarankan. Logo pelanggan, testimoni, foto tim asli, dan laporan tambahan hanya ditambahkan jika tersedia dan relevan.

FAQ, header, dan footer tidak membutuhkan foto generatif tambahan. Hero dirangkai dari IMG-01/02/03 di kode website; jangan generate satu kolase tiga industri. Panah proses, label, ikon, copy, tombol, dan diagram dibuat di website agar tajam dan responsif.

## 2. Cara memakai dokumen ini

1. Mulai dari IMG-01 dan salin **seluruh blok prompt** di bagiannya ke ChatGPT.
2. Generate **satu gambar per permintaan**, pilih hasil yang paling natural, lalu lanjut ke gambar berikutnya.
3. Untuk menjaga seri tetap konsisten, lampirkan hasil IMG-01 yang disukai ketika membuat gambar selanjutnya. Ini opsional; tiap prompt sudah dapat berdiri sendiri.
4. Jika melampirkan referensi, tambahkan instruksi: **“Gunakan gambar terlampir hanya sebagai referensi cahaya, warna, dan kualitas fotografi. Ikuti adegan dan komposisi prompt baru; jangan menyalin orang, tempat, atau objeknya.”**
5. Periksa hasil pada ukuran penuh dan saat diperkecil menjadi kartu website. Revisi bagian yang kurang natural sebelum melanjutkan.
6. Simpan berkas asli dalam format yang benar-benar dihasilkan. Nama `.jpg` pada tabel adalah target penamaan aset, bukan perintah mengganti ekstensi PNG menjadi JPG.

Prompt ditulis dalam bahasa Inggris untuk menjaga istilah fotografi konsisten; instruksi dan penjelasannya dalam bahasa Indonesia. Tidak perlu mengirim seluruh brief ke ChatGPT saat membuat tiap gambar.

Rasio dan resolusi adalah target komposisi, bukan jaminan ukuran keluaran. Pilih rasio terdekat yang tersedia; buat crop akhir setelah gambar disetujui. Target berkas sumber sekitar 1600–2000 px pada sisi panjang jika memungkinkan.

## 3. Arah fotografi bersama

**Kesan:** foto editorial usaha yang tenang, bersih, hangat, dan masuk akal. Tempat terlihat terawat tetapi sedang dipakai bekerja. Estetik muncul dari komposisi, cahaya, material, dan kegiatan yang relevan.

| Unsur | Arah |
| --- | --- |
| Lokasi | Usaha Indonesia kontemporer; terasa lokal tanpa dekorasi stereotip |
| Cahaya | Cahaya jendela lembut; warna netral sedikit hangat; sorotan tidak berlebihan |
| Palet | Putih hangat, kayu oak, abu batu, arang; navy sebagai aksen pakaian/objek |
| Material | Kayu, kain katun, keramik, kaca dan logam dengan tekstur wajar |
| Orang | Dewasa; penampilan keseharian; fokus pada aktivitas, bukan berpose ke kamera |
| Framing | Kamera setinggi mata, perspektif 35–50 mm yang wajar, ruang crop di sekitar subjek |
| Detail | Kulit memiliki tekstur; lipatan pakaian alami; bayangan kontak dan refleksi masuk akal |
| Kebersihan | Rapi dan fungsional; masih ada sedikit tanda penggunaan sehari-hari |
| Perangkat | Bentuk biasa dan realistis; layar menghadap operator atau tidak terbaca |
| Teks | Tidak membuat headline, logo, label kategori, CTA, atau antarmuka fiktif di dalam foto |

Tampilan “tidak terasa AI” perlu dinilai dari hasilnya; tidak dapat dijamin hanya melalui prompt. Fokus pemeriksaan: anatomi, interaksi benda, perspektif, tekstur, dan pencahayaan. Gambar ini merupakan ilustrasi kegiatan usaha, bukan foto pelanggan atau implementasi Liburania yang benar-benar terjadi.

---

## 4. IMG-01 — Pelayanan F&B

**Fungsi:** foto dominan di hero; dipakai kembali pada tab F&B.  
**Pesan:** pelayanan pelanggan yang lancar, dengan konteks kasir dan operasional kafe.  
**Komposisi:** dua orang, interaksi utama di area tengah, wajah/perangkat tidak menempel tepi.  
**Crop:** master 4:3; aman dipotong ke persegi. Teks hero berada di luar foto.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for an Indonesian business software landing page. Generate the photograph itself, not a website layout, poster, collage, or device mockup.

Scene: a welcoming contemporary neighborhood cafe in Indonesia during a calm moment of service. An Indonesian woman cafe employee in her late twenties, wearing a plain cream shirt and a practical charcoal apron, is serving one adult customer across a light oak counter. A ceramic cup and saucer rest naturally on the counter. The employee looks toward the customer with a small, relaxed smile. The customer is seen in three-quarter profile. Neither person looks at the camera. Their hands rest naturally; avoid a complicated hand-to-hand exchange.

A modest dark POS terminal is placed beside the employee with its screen facing the operator and its back mostly toward the camera. Behind them, show a believable coffee preparation area and a subtle view toward the kitchen. Keep equipment practical and correctly scaled. Include just a few everyday objects, not an overcrowded display.

Art direction: clean, understated business editorial photography. Soft window daylight from camera-left, neutral warm-white balance, gentle natural shadows, restrained contrast. Warm off-white walls, oak, stone grey, charcoal, and one subtle navy accent. Preserve natural skin texture, ordinary facial features, soft fabric creases, and small signs of daily use. No beauty retouching or dramatic cinematic grading.

Use a natural eye-level 35mm photographic perspective with moderate depth of field. Keep the service interaction and terminal within the central 65 percent of the frame, with comfortable space around heads and hands for responsive cropping. Landscape composition, target aspect ratio 4:3. The interior should remain recognizable rather than dissolve into heavy blur.

Do not add readable text, brand logos, watermarks, glowing screens, floating interface cards, charts, excessive bokeh, plastic skin, unnaturally white teeth, distorted hands, duplicated objects, impossible reflections, artificial rim lighting, or an unrealistically luxurious showroom atmosphere.
```

**Pilih hasil yang:** langsung terbaca sebagai usaha F&B, wajah natural, cup/perangkat menapak pada meja, dan ruang kafe masih terasa nyata.

---

## 5. IMG-02 — Pelayanan retail

**Fungsi:** foto pendamping hero dan foto utama tab Retail.  
**Pesan:** produk, kasir, dan aktivitas toko dalam satu adegan.  
**Komposisi:** satu staf sebagai subjek utama; produk di area kasir, latar rak yang tertata.  
**Crop:** master 4:3; aman dipotong ke persegi. Tidak perlu pelanggan tambahan.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for an Indonesian business software landing page. Output a single photograph, not a web page, collage, advertisement, or rendered illustration.

Scene: a small contemporary souvenir and lifestyle shop in Indonesia. An Indonesian male shop employee in his early thirties, wearing a plain navy overshirt with sleeves naturally rolled, is checking out an unbranded packaged notebook on a light oak counter. He holds one ordinary black handheld barcode scanner with a simple, believable grip, aimed at the small label on the notebook. His other hand rests lightly on the counter. His attention is on the product, not on the camera. No customer needs to be visible.

Place a compact POS terminal nearby with its screen facing the employee and mostly away from the camera. The background contains modest, functional shelves with a small assortment of unbranded ceramic cups, folded tote bags, and notebooks. Use plausible product quantities and spacing, with a few small variations that suggest a working shop rather than a perfectly repeated showroom display. Any barcode should be tiny and incidental; it must not dominate the image.

Use clean, understated editorial business photography with soft daylight from camera-left. Natural warm-neutral colors, gentle shadows, restrained contrast, realistic skin texture and fabric detail. Palette: warm off-white, oak wood, stone grey, charcoal and muted navy. Include subtle everyday wear on the counter. Avoid an orange filter or excessive saturation.

Eye-level 35mm photographic perspective, moderate depth of field. Frame the person, scanner, and product within the central 65 percent with comfortable cropping space. Landscape composition, target aspect ratio 4:3. Keep the shop recognizable and the product handling anatomically plausible.

No readable signage, invented brand logos, watermark, visible software interface, laser beam, floating graphics, plastic skin, exaggerated smile, extra fingers, merged hands, duplicated products, warped shelving, impossible scanner geometry, glossy CGI surfaces, or hyper-luxury retail styling.
```

**Pilih hasil yang:** grip scanner wajar, perangkat mengarah ke barang, bentuk produk tidak berulang identik secara aneh, dan toko tetap terasa dekat dengan usaha Indonesia.

---

## 6. IMG-03 — Pelayanan jasa

**Fungsi:** foto pendamping hero dan foto utama tab Jasa.  
**Pesan:** layanan profesional yang hangat; fokus pada hubungan staf dan pelanggan.  
**Komposisi:** dua orang di resepsionis salon, tanpa tindakan perawatan yang rumit.  
**Crop:** master 4:3; aman dipotong ke persegi.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for an Indonesian business software landing page. Show a believable service business, not a website design, poster, collage, or stock-photo montage.

Scene: the reception area of a contemporary neighborhood hair salon in Indonesia. An Indonesian woman receptionist in her late twenties, wearing a plain navy blouse, is welcoming an adult woman customer in a simple light beige outfit. They are standing comfortably on opposite sides of a modest oak reception desk, making natural eye contact with quiet, friendly expressions. Their hands rest naturally and separately on the desk or at their sides. No handshake, pointing gesture, or hair treatment is needed.

A compact tablet on an ordinary desk stand faces the receptionist, with its back visible to the camera. A clean salon chair and a small product shelf in the background make the business type recognizable. Keep bottles unbranded and sparse. Do not introduce a large mirror behind the people; use a softly lit wall and a doorway into the salon instead.

Art direction: understated editorial business photography, clean and aesthetic but lived-in. Soft daylight from camera-left, warm-neutral white balance, gentle shadows, restrained contrast. Warm off-white plaster, oak, stone grey, charcoal and muted navy. Preserve realistic skin pores, individual facial features, fabric texture, and ordinary human proportions. The salon should feel approachable and professional, not like a luxury hotel lobby.

Use an eye-level 35mm photographic perspective and moderate depth of field. Keep both faces, the desk interaction, and the tablet inside the central 65 percent of the image with room for responsive cropping. Landscape composition, target aspect ratio 4:3.

No readable signs, brand logos, watermark, invented software UI, floating calendar, charts, spa candles, dramatic beauty lighting, skin airbrushing, model-like poses, exaggerated smiles, distorted anatomy, extra fingers, duplicated people, impossible reflections, or an overly perfect showroom finish.
```

**Pilih hasil yang:** bisnis jasa mudah dikenali, wajah tidak seperti model iklan kecantikan, dan posisi orang/meja/perangkat masuk akal.

---

## 7. IMG-04 — Problem F&B: koordinasi pesanan

**Fungsi:** panel “Pesanan masuk. Dapur sudah tahu?”  
**Pesan:** ada kebutuhan koordinasi di balik pelayanan; bukan gambaran kegagalan atau dapur kacau.  
**Komposisi:** dua staf dengan perhatian pada satu titik kerja.  
**Crop:** master 3:2; bagian tengah aman untuk kartu 4:3.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for the operational-challenges section of an Indonesian business software landing page. Deliver a photograph only, without text, collage, diagrams, or a website frame.

Scene: a believable cafe kitchen pass in Indonesia during a moderately busy service period. An Indonesian front-of-house employee in a charcoal apron is pausing beside the pass to check one order with an Indonesian cook in a plain cream work shirt. Both are adults. Their expressions are attentive and mildly concentrated, not angry, distressed, or theatrical. The cook glances toward a small ordinary paper order slip resting near the counter. Any printing is turned away or naturally too small to read. Their hands are relaxed and do not overlap.

Show only two plated dishes and a few practical preparation objects on a clean stainless-steel pass. A restrained glimpse of the working kitchen provides context. Keep the work area tidy with subtle signs of use; do not fill it with mountains of tickets, dirty dishes, flames, smoke, or crowds. There is no visible digital dashboard.

Photography direction: natural, understated editorial documentation, soft side daylight from camera-left mixed with very subtle ordinary room light. Neutral slightly warm colors, realistic shadows, moderate contrast. Materials include stainless steel, warm off-white tile, a small oak detail, cream fabric and charcoal. Retain real-looking skin texture and ordinary proportions; avoid a staged stock-photo performance.

Use an eye-level 50mm photographic perspective, moderate depth of field, and a medium shot. Keep the two people and the pass near the center, leaving breathing room around heads and hands. Landscape composition, target aspect ratio 3:2, suitable for a 4:3 card crop.

No captions, logos, watermarks, readable tickets, floating notifications, red warning graphics, artificial dramatic lighting, excessive bokeh, glossy CGI food, distorted utensils, impossible hands, duplicated plates, or exaggerated workplace chaos.
```

**Pilih hasil yang:** menunjukkan momen pengecekan pesanan tanpa ekspresi panik; makanan, alat dapur, dan tangan tampak wajar.

---

## 8. IMG-05 — Problem retail: pemeriksaan stok

**Fungsi:** panel “Barang terjual. Stok masih sesuai?”  
**Pesan:** pengecekan fisik dan catatan persediaan perlu selaras.  
**Komposisi:** satu staf, satu area rak, sedikit produk.  
**Crop:** master 3:2; bagian tengah aman untuk kartu 4:3.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for the operational-challenges section of an Indonesian business software landing page. Generate a natural photograph, not a poster, website layout, collage, or conceptual 3D image.

Scene: an Indonesian shop employee in their early thirties is checking a small merchandise shelf in a neighborhood souvenir and lifestyle store. The employee wears a plain muted navy cotton shirt and has a calm, focused expression. They hold an ordinary slim clipboard in one hand, angled so that the back is visible to the camera, while looking at a shelf containing unbranded ceramic mugs and folded tote bags. The other hand rests naturally on the edge of the shelf. Show a modest gap where a few products would normally sit, suggesting the need to check stock rather than an abandoned or failing store.

The setting is clean and practical with oak shelving, warm off-white walls, a few plain cardboard supply boxes below the shelf, and realistic differences between products. Include subtle everyday wear. Do not make the shelves perfectly symmetrical, endlessly repeated, or cluttered with identical objects. No other person or digital screen is needed.

Visual style: restrained editorial business photography with soft window daylight from camera-left, a warm-neutral white balance, gentle contact shadows and realistic material textures. Preserve natural skin texture and ordinary human proportions. Palette: oak, off-white, stone grey, charcoal and navy; avoid strong color casts and heavy retouching.

Use a natural eye-level 50mm perspective and moderate depth of field. Keep the employee's face, clipboard, and the stock-checking area in the central 70 percent. Landscape composition, target aspect ratio 3:2, with room for a 4:3 card crop.

No readable inventory sheets, signage, logos, watermark, fake app interface, floating numbers, red alert symbols, distressed acting, extra fingers, merged objects, warped shelves, repeated cloned products, artificial shine, or oversized warehouse scenery.
```

**Pilih hasil yang:** celah rak terlihat wajar, clipboard tidak menjadi lembar angka palsu, dan adegan terasa seperti pengecekan stok sehari-hari.

---

## 9. IMG-06 — Problem jasa: pencatatan jadwal

**Fungsi:** panel “Booking bertambah. Jadwal tetap tertata?”  
**Pesan:** staf perlu mencatat permintaan dan memeriksa ketersediaan. Ini tidak menggambarkan integrasi WhatsApp otomatis.  
**Komposisi:** satu staf di resepsionis; telepon dan buku jadwal menjadi konteks.  
**Crop:** master 3:2; bagian tengah aman untuk kartu 4:3.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for the operational-challenges section of an Indonesian business software landing page. Output one photograph, not a designed advertisement, website screenshot, collage, or illustration.

Scene: an Indonesian woman receptionist in her early thirties at the front desk of a modest contemporary hair salon. She wears a plain navy blouse and is taking an appointment request on an ordinary desk telephone. She holds the receiver naturally to one ear with one hand, while her other hand rests next to an open appointment notebook on the desk. Her attention is directed toward the notebook with a thoughtful, focused expression. Do not show her writing at the same time; keep the action simple and anatomically believable.

Angle the notebook away from the camera so that its contents are not readable. Place the telephone base in a physically plausible position with a natural cord connection. A softly visible salon chair and a small shelf of unbranded bottles identify the workplace. There should be no visible messaging app, software dashboard, or digital calendar. The scene suggests ordinary manual coordination, not a dramatic scheduling crisis.

Use clean editorial business photography with soft window daylight from camera-left, neutral slightly warm colors, gentle shadows and restrained contrast. Palette: warm off-white, oak, stone grey, charcoal and navy. Include believable skin texture, natural fabric creases, and a few subtle signs of everyday use. Keep the setting approachable, tidy, and realistic.

Eye-level 50mm photographic perspective, medium shot, moderate depth of field. Keep the face, telephone, and notebook within the central 70 percent with room around the subject. Landscape composition, target aspect ratio 3:2, suitable for cropping to a 4:3 website card.

No readable names, dates or phone numbers, logos, watermark, floating calendar tiles, chat bubbles, warning icons, exaggerated worry, plastic skin, distorted receiver, impossible cords, extra fingers, duplicated devices, cinematic rim light, or an excessively luxurious salon interior.
```

**Pilih hasil yang:** telepon dan kabel masuk akal, tidak ada gestur tangan berlebih, ekspresi fokus, dan buku tidak berisi teks mencolok yang rusak.

---

## 10. IMG-07 — Konsultasi dan demo

**Fungsi:** alur menuju demo; crop berbeda dapat dipakai sebagai penyeimbang CTA penutup.  
**Pesan:** diskusi kebutuhan usaha yang mudah dan profesional. Bukan foto tim atau pelanggan Liburania asli.  
**Komposisi:** dua orang di sisi kanan; kiri memiliki ruang yang lebih tenang.  
**Crop:** master 3:2; aman dipakai pada panel lebar. Untuk CTA, teks tetap dibuat di HTML.

### Prompt siap salin

```text
Create exactly one standalone photorealistic editorial photograph for the consultation and demo section of an Indonesian business software landing page. Produce the photograph only, without a website layout, headline, CTA, collage, or graphical overlay.

Scene: a small business owner and a software consultant, both Indonesian adults in their thirties, having a relaxed practical conversation at a light oak table in a quiet cafe corner. The owner wears a simple cream cotton shirt and the consultant wears a plain navy overshirt. They sit at a natural angle beside a single ordinary laptop, listening and discussing calmly. One person looks toward the other with a small, genuine expression of interest. Their hands rest naturally on the table. Avoid pointing at the screen, handshakes, or theatrical sales gestures.

The laptop screen faces the two people, with the back of the display toward the camera. Include only a plain notebook and two simple ceramic cups on the table. No visible contracts, charts, payment details, branded clothing, or software interface. Keep the cafe setting believable and modest with warm off-white walls, oak and stone-grey details, and subtle signs of use.

Art direction: clean, quiet editorial business photography. Soft window daylight from camera-left, neutral warm-white balance, gentle natural shadows, restrained saturation and contrast. Preserve real-looking skin texture, natural hair, fabric creases, ordinary facial features, and plausible reflections on the laptop. Avoid retouched corporate stock-photo styling.

Use a natural eye-level 35mm photographic perspective with moderate depth of field. Place the two people and laptop mainly in the right 65 percent of the frame. Leave the left 35 percent visually quiet with a softly lit wall or uncluttered part of the room, not a blank artificial gradient. Keep heads and hands away from image edges. Landscape composition, target aspect ratio 3:2.

No text, logos, watermark, floating graphs, holograms, glowing devices, exaggerated smiles, plastic skin, distorted hands, extra fingers, duplicated cups, impossible furniture geometry, heavy bokeh, dramatic teal-orange lighting, or a luxury boardroom setting.
```

**Pilih hasil yang:** diskusi terasa santai dan profesional, laptop hanya satu dengan bentuk normal, dan sisi kiri benar-benar tenang tanpa menjadi ruang kosong buatan.

---

## 11. Aset asli yang disiapkan terpisah

Lima aset berikut tetap dibutuhkan, tetapi **tidak termasuk tujuh prompt generatif**.

| ID | Nama berkas tujuan | Sumber | Isi yang diperlukan |
| --- | --- | --- | --- |
| UI-01 | `fnb-product.png` | Screenshot resmi aplikasi | Kasir atau KDS; status pesanan jelas |
| UI-02 | `retail-product.png` | Screenshot resmi aplikasi | Katalog/stok dengan SKU dan kuantitas yang terbaca |
| UI-03 | `service-product.png` | Screenshot resmi aplikasi | Kalender booking per staf dan layanan |
| LOGO-01 | `liburania-business.svg` | Klien / berkas brand resmi | Logo Liburania Business |
| LOGO-02 | `poztix.svg` | Klien / berkas brand resmi | Logo Poztix |

Nama `.svg` hanya berlaku jika berkas vektor tersedia; PNG transparan resmi juga dapat dipakai. Screenshot memakai data dummy, tanpa data pelanggan nyata. Minta pengambilan gambar pada ukuran yang membuat isi tetap terbaca; jangan mengandalkan foto layar generatif.

Jika tersedia, siapkan crop laporan asli tambahan untuk kendali pemilik: F&B penjualan/biaya bahan, Retail persediaan/performa produk, Jasa komisi/performa staf. Ini tambahan opsional, bukan alasan membuat dashboard fiktif.

Jika screenshot belum ada, desain tetap dapat memakai foto dan diagram alur sederhana yang diberi label ilustrasi. Section bukti menunggu aset sah; jangan menyebut ilustrasi sebagai screenshot aplikasi.

## 12. Peta penggunaan di halaman

| Section brief | Aset yang dipakai | Catatan penerapan |
| --- | --- | --- |
| Header/footer | LOGO-01 | Logo tetap tajam; tidak menyatu ke dalam foto |
| Hero | IMG-01, IMG-02, IMG-03; satu crop UI asli bila perlu | Susun tiga bidang foto di website; jangan menjahit kolase permanen |
| Problem F&B | IMG-04 | Caption dan judul dibuat dengan HTML |
| Problem Retail | IMG-05 | Foto menjelaskan kegiatan pengecekan, bukan bukti hasil bisnis |
| Problem Jasa | IMG-06 | Tidak menyiratkan chatbot atau booking otomatis |
| Solusi F&B | IMG-01 + UI-01 | Crop berbeda dari hero; keduanya elemen terpisah |
| Solusi Retail | IMG-02 + UI-02 | Layar produk diletakkan dalam panel HTML sederhana |
| Solusi Jasa | IMG-03 + UI-03 | Gambar memberi konteks; screenshot menjelaskan aplikasi |
| Kendali pemilik | Crop UI asli sesuai sektor, atau laporan asli opsional | Jangan menggabungkan tiga modul dalam satu dashboard fiktif |
| Bukti produk | UI-01/02/03 atau bukti klien yang sah | Dapat digabung ke solusi agar tidak mengulang section |
| Menuju demo | IMG-07 | Foto ilustrasi konsultasi, bukan anggota tim nyata |
| FAQ | Tanpa foto tambahan | Jaga ruang dan keterbacaan |
| CTA penutup | Crop kanan IMG-07 atau tanpa foto | Pilih satu pemakaian utama jika repetisinya terasa kuat |

Jangan menampilkan gambar identik dengan crop identik dalam dua section berurutan. Bila penempatan berulang terasa dipaksakan, hilangkan pemakaian kedua. Background navy, ornamen ringan, ikon, dan garis penghubung dibuat dengan CSS/SVG di proyek.

## 13. Memilih hasil yang natural

### Pemeriksaan sebelum disimpan

- [ ] Adegan terbaca dalam beberapa detik tanpa caption.
- [ ] Tempat tampak terawat dan sedang dipakai, bukan showroom steril.
- [ ] Wajah memiliki tekstur, variasi, dan ekspresi yang biasa.
- [ ] Jumlah serta posisi jari masuk akal; tangan tidak menyatu ke benda.
- [ ] Scanner, telepon, tablet, dan laptop memiliki bentuk serta skala wajar.
- [ ] Kaki benda menyentuh permukaan; ada bayangan kontak yang masuk akal.
- [ ] Refleksi dan arah cahaya tidak saling bertentangan.
- [ ] Produk, rak, botol, dan cangkir tidak terduplikasi secara aneh.
- [ ] Tidak ada teks rusak, watermark, logo palsu, atau grafik mengambang.
- [ ] Palet dan kualitas cahaya konsisten dengan gambar lain.
- [ ] Crop persegi/4:3 tidak memotong wajah, tangan penting, atau konteks usaha.
- [ ] Gambar tidak dipresentasikan sebagai bukti klien atau antarmuka produk nyata.

**Tolak hasil walaupun estetik** jika anatomi, interaksi benda, atau geometri ruangan tidak masuk akal. Jangan memakai tulisan “ultra realistic, 8K, masterpiece” sebagai pengganti arahan adegan dan pemeriksaan hasil.

### Cara meminta revisi

Lampirkan hasil yang ingin diperbaiki, kemudian sebutkan masalah spesifik, bagian yang dipertahankan, dan perubahan yang diminta. Contoh instruksi singkat:

> Edit gambar terlampir. Pertahankan komposisi, suasana toko, warna, dan arah cahaya. Perbaiki hanya tangan yang memegang scanner agar grip dan bentuk jarinya anatomis serta scanner tetap mengarah ke produk. Hasil akhir tetap satu foto natural, tanpa teks, logo, atau elemen baru.

Untuk hasil terlalu licin: minta tekstur kulit/material yang lebih wajar, pencahayaan jendela yang lebih sederhana, dan pengurangan retouching. Untuk hasil terlalu ramai: sebutkan objek yang dihapus. Untuk konsistensi: lampirkan foto seri yang sudah disetujui dan minta pencocokan warna/cahaya, bukan penyalinan identitas orang.

## 14. Handoff aset untuk implementasi

Gunakan ID dan nama berkas di tabel agar Claude dapat memasangkan gambar dengan section tanpa menebak. Simpan master asli; buat WebP/AVIF dan ukuran responsif saat implementasi. Tidak perlu meminta ChatGPT menaruh file gambar ke dalam layout website.

Hero tidak perlu membuat manusia memegang tablet dengan UI Liburania di dalam gambar. Tempatkan screenshot asli sebagai elemen HTML terpisah, dengan frame sederhana, sehingga isi terbaca dan bisa berubah mengikuti sektor aktif.

Semua teks pemasaran, tombol, label F&B/Retail/Jasa, nomor langkah, dan copy problem ditambahkan lewat kode. Foto berfungsi sebagai konteks dan daya tarik visual; UI asli dan penjelasan halaman yang membuktikan cakupan solusi.

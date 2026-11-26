// Sumber konten: Materi_Lengkap_Liburania_Business.md (divalidasi owner).
// Semua CTA ke WhatsApp tim Liburania Business, dengan pesan awal terisi.
const whatsappNumber = '6281291235801';
export const whatsappDisplay = '+62 812-9123-5801';

export const whatsappUrl = (text = 'Halo, saya ingin konsultasi kebutuhan bisnis dengan Liburania Business.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const contactUrl = whatsappUrl();
export const demoUrl = whatsappUrl('Halo, saya ingin menjadwalkan demo Liburania Business.');
export const demoUrlFor = (product: string) => whatsappUrl(`Halo, saya ingin menjadwalkan demo ${product}.`);
export const pricingUrlFor = (product: string) =>
  whatsappUrl(`Halo, saya ingin konsultasi paket ${product} yang tepat untuk usaha saya.`);

export const cta = {
  demo: 'Jadwalkan Demo',
  consult: 'Konsultasi via WhatsApp',
  solutions: 'Lihat Solusi',
  pricing: 'Lihat Harga',
} as const;

export const price = 'Rp149.000';

export const seo = {
  title: 'Sistem Kasir F&B, Retail & Jasa | Liburania Business',
  description:
    'Kelola penjualan, stok, jadwal staf, pelanggan, dan laporan bisnis untuk usaha F&B, retail, dan jasa. Mulai Rp149.000/bulan. Jadwalkan demo.',
};

export const nav = [
  { label: 'Solusi', href: '#solusi' },
  { label: 'Manfaat', href: '#manfaat' },
  { label: 'Harga', href: '#harga' },
  { label: 'FAQ', href: '#faq' },
];

// "Teknologi bisnis tidak harus mahal. Tapi harus bisa diandalkan."
export const reliability = [
  'Fitur disesuaikan dengan jenis bisnis',
  'Sistem terintegrasi untuk operasional',
  'Dashboard dan laporan bisnis',
  'Mendukung satu maupun banyak outlet',
  'Struktur biaya transparan',
  'Tim support yang dapat dihubungi',
  'Pengembangan dan maintenance berkelanjutan',
];

export const controls = [
  { title: 'Kontrol penjualan', text: 'Pantau omzet dan transaksi secara terstruktur.' },
  { title: 'Kontrol persediaan', text: 'Pantau stok barang, bahan baku, dan pergerakannya.' },
  { title: 'Kontrol operasional', text: 'Pantau kasir, staf, dapur, jadwal, dan pelayanan.' },
  { title: 'Kontrol keuangan bisnis', text: 'Gunakan informasi penjualan dan biaya operasional untuk mengambil keputusan.' },
  { title: 'Kontrol karyawan', text: 'Pantau aktivitas, performa, dan produktivitas.' },
  { title: 'Kontrol multi-cabang', text: 'Kelola dan evaluasi outlet dalam sistem terintegrasi.' },
];

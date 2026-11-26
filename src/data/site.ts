// Satu konfigurasi untuk seluruh CTA (brief §10, §12).
// URL kontak saat ini membuka formulir sales, bukan WhatsApp — jangan ubah label ke "WhatsApp"
// sebelum tujuan aktual disetujui klien.
export const contactUrl = 'https://liburania.com/business/kontak';

export const cta = {
  demo: 'Jadwalkan Demo',
  sales: 'Hubungi Tim Sales',
} as const;

export const seo = {
  title: 'Sistem F&B, Retail & Jasa | Liburania Business',
  description:
    'Kelola transaksi, stok, jadwal staf, dan laporan sesuai kebutuhan usaha. Kenali solusi F&B, retail, dan jasa Liburania Business. Jadwalkan demo.',
};

export const nav = [
  { label: 'Solusi', href: '#solusi' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'FAQ', href: '#faq' },
];

export const officialLinks = [
  { label: 'Liburania Business', href: 'https://liburania.com/business#modul' },
  { label: 'F&B System', href: 'https://liburania.com/business/modul/fnb' },
  { label: 'Retail Management System', href: 'https://liburania.com/business/modul/tenant' },
  { label: 'Service Management System', href: 'https://liburania.com/business/modul/visitor' },
  { label: 'Kontak sales', href: contactUrl },
];

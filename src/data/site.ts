// Satu konfigurasi untuk seluruh CTA (brief §10, §12).
// URL kontak saat ini membuka formulir sales, bukan WhatsApp — jangan ubah label ke "WhatsApp"
// sebelum tujuan aktual disetujui klien.
export const contactUrl = 'https://liburania.com/business/kontak';

// Formulir kontak mendukung parameter ?modul= (fnb | tenant | visitor) agar sales tahu modul yang diminati.
export const contactUrlFor = (moduleCode: 'fnb' | 'tenant' | 'visitor') => `${contactUrl}?modul=${moduleCode}`;

export const cta = {
  demo: 'Jadwalkan Demo',
  sales: 'Hubungi Tim Sales',
} as const;

export const seo = {
  title: 'Sistem POS F&B, Retail & Jasa | Liburania Business',
  description:
    'Sistem kasir (POS), stok, jadwal staf, dan laporan untuk usaha F&B, retail, dan jasa. Liburania System powered by Poztix. Jadwalkan demo.',
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

// Poin kepercayaan dan add-on: diambil dari halaman resmi Liburania Business (bukan klaim baru).
export const trustPoints = ['Tanpa biaya pendaftaran', 'Setup cepat', 'Dukungan tim profesional'];

export const addons = [
  { label: 'Accounting', href: 'https://liburania.com/business/modul/accounting' },
  { label: 'HR & Payroll', href: 'https://liburania.com/business/modul/hr' },
  { label: 'Warehouse', href: 'https://liburania.com/business/modul/gudang' },
];

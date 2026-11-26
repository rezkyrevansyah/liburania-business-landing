import type { ImageMetadata } from 'astro';
import fnbPhoto from '../assets/images/fnb-business.png';
import retailPhoto from '../assets/images/retail-business.png';
import servicePhoto from '../assets/images/service-business.png';
import fnbUi from '../assets/images/ui-fnb-kitchen.png';
import retailUi from '../assets/images/ui-retail-stock.png';
import serviceUi from '../assets/images/ui-service-calendar.png';

// Identitas UI dipisahkan dari kode modul URL resmi (brief §9): fnb/retail/service ↔ fnb/tenant/visitor.
export type SectorId = 'fnb' | 'retail' | 'service';

export interface Sector {
  id: SectorId;
  moduleCode: 'fnb' | 'tenant' | 'visitor';
  tab: string;
  product: string;
  audience: string;
  audienceShort: string;
  /** Nama produk resmi di halaman modul (Poztix ...). */
  poztixName: string;
  detailUrl: string;
  useCases: string[];
  features: string[];
  challenges: string[];
  headline: string;
  description: string;
  flow: [string, string, string, string];
  photo: ImageMetadata;
  photoAlt: string;
  /** Ilustrasi layar produk (berlabel 'Ilustrasi produk · Data contoh' di dalam gambar). */
  ui: ImageMetadata;
  uiLabel: string;
  uiAlt: string;
  /** object-position untuk crop di penjelajah solusi (berbeda dari hero). */
  panelCrop: string;
  owner: {
    focus: string;
    question: string;
    chartTitle: string;
    bars: { label: string; value: number }[];
    rows: { label: string; note: string }[];
  };
}

export const sectors: Sector[] = [
  {
    id: 'fnb',
    moduleCode: 'fnb',
    tab: 'F&B',
    product: 'F&B System',
    audience: 'Restoran, kafe, dan outlet kuliner.',
    audienceShort: 'Restoran & kafe',
    poztixName: "Poztix F&B",
    detailUrl: 'https://liburania.com/business/modul/fnb',
    useCases: ["Restoran", "Kafe", "Outlet kuliner", "Usaha multi-outlet"],
    features: ["Smart POS & kasir", "Meja & dine-in", "Kitchen Display", "Menu, resep & modifier", "Inventori & stock opname", "Pembelian & supplier", "Laporan penjualan", "Multi-outlet"],
    challenges: ["Transaksi, diskon, dan void sulit dipantau", "Stok bahan baku tidak akurat", "Pesanan dapur terlambat dan tidak sinkron", "Profit sebenarnya sulit diketahui"],
    headline: 'Dari pesanan ke dapur, operasional lebih selaras.',
    description:
      'Hubungkan kasir, meja, pesanan dapur, resep, dan persediaan untuk membantu tim bekerja lebih teratur.',
    flow: ['Pesanan di kasir', 'Koordinasi dapur', 'Pengelolaan bahan & resep', 'Evaluasi penjualan'],
    photo: fnbPhoto,
    ui: fnbUi,
    uiLabel: 'Kitchen Display',
    uiAlt: 'Layar Pesanan Dapur Poztix F&B dengan kolom Baru, Diproses, dan Siap berisi pesanan per meja.',
    photoAlt: 'Staf kafe melayani pelanggan di meja kasir, dengan mesin kopi dan dapur di belakangnya.',
    panelCrop: '62% 50%',
    owner: {
      focus: 'Penjualan menu, bahan dan biaya, performa outlet',
      question: 'Menu apa yang perlu dievaluasi?',
      chartTitle: 'Penjualan menu',
      bars: [
        { label: 'Kopi susu', value: 92 },
        { label: 'Nasi goreng', value: 74 },
        { label: 'Roti bakar', value: 51 },
        { label: 'Teh tarik', value: 33 },
      ],
      rows: [
        { label: 'Biaya bahan', note: 'Per menu dan resep' },
        { label: 'Performa outlet', note: 'Bandingkan antar-cabang' },
      ],
    },
  },
  {
    id: 'retail',
    moduleCode: 'tenant',
    tab: 'Retail',
    product: 'Retail Management System',
    audience: 'Toko suvenir, merchandise, minimarket, dan retail destinasi wisata.',
    audienceShort: 'Toko & suvenir',
    poztixName: "Poztix Retail",
    detailUrl: 'https://liburania.com/business/modul/tenant',
    useCases: ["Souvenir & gift shop", "Fashion & merchandise", "Minimarket", "Retail hotel & resort", "Retail theme park, waterpark & museum"],
    features: ["Smart POS & kasir", "Katalog, SKU & barcode", "Stok, opname & peringatan stok menipis", "Pembelian & supplier", "Promo, diskon & bundling", "Multi-outlet", "Laporan & produk terlaris", "Kontrol kasir & refund"],
    challenges: ["Transaksi dan aktivitas kasir tidak terpantau", "Stok selisih atau produk kehabisan", "Pengadaan dan penerimaan barang tidak terstruktur", "Produk terlaris dan nilai persediaan sulit diketahui"],
    headline: 'Barang terjual, persediaan lebih mudah ditelusuri.',
    description:
      'Kelola kasir, katalog produk, stok, dan pembelian agar aktivitas toko tercatat lebih terstruktur.',
    flow: [
      'Pencarian produk/SKU',
      'Transaksi kasir',
      'Pemantauan stok',
      'Evaluasi penjualan & pengadaan',
    ],
    photo: retailPhoto,
    ui: retailUi,
    uiLabel: 'Produk & stok',
    uiAlt: 'Layar Produk & Stok Poztix Retail berisi daftar produk dengan SKU, harga, jumlah stok, dan status menipis atau habis.',
    photoAlt: 'Staf toko suvenir memindai barcode buku catatan di meja kasir, dengan rak mug dan tas kanvas di belakangnya.',
    panelCrop: '50% 40%',
    owner: {
      focus: 'Produk terlaris, nilai dan pergerakan stok, outlet',
      question: 'Produk mana yang perlu diperhatikan?',
      chartTitle: 'Produk terlaris',
      bars: [
        { label: 'Tas kanvas', value: 88 },
        { label: 'Mug keramik', value: 69 },
        { label: 'Buku catatan', value: 47 },
        { label: 'Kain motif', value: 28 },
      ],
      rows: [
        { label: 'Pergerakan stok', note: 'Masuk, keluar, dan selisih opname' },
        { label: 'Performa outlet', note: 'Bandingkan antar-toko' },
      ],
    },
  },
  {
    id: 'service',
    moduleCode: 'visitor',
    tab: 'Jasa',
    product: 'Service Management System',
    audience: 'Salon, barbershop, spa, laundry, bengkel, dan bisnis jasa lain.',
    audienceShort: 'Salon & spa',
    poztixName: "Poztix Jasa & Layanan",
    detailUrl: 'https://liburania.com/business/modul/visitor',
    useCases: ["Salon & barbershop", "Spa & wellness", "Laundry", "Bengkel", "Rental", "Service center"],
    features: ["Booking & jadwal per staf", "POS layanan & produk", "Paket layanan", "Komisi & performa staf", "Riwayat pelanggan", "Promo, voucher & membership", "Laporan & setoran kasir", "Multi-outlet"],
    challenges: ["Jadwal staf bertabrakan", "Layanan, produk, dan paket dicatat terpisah", "Komisi staf dihitung manual", "Data pelanggan dan tren penjualan sulit dianalisis"],
    headline: 'Jadwal staf tertata, layanan lebih mudah dipantau.',
    description:
      'Atur booking per staf, transaksi layanan dan produk, paket, komisi, serta riwayat pelanggan dalam satu sistem.',
    flow: [
      'Staf mencatat booking',
      'Jadwal pelayanan',
      'Transaksi layanan/produk',
      'Rekap komisi & laporan',
    ],
    photo: servicePhoto,
    ui: serviceUi,
    uiLabel: 'Jadwal per staf',
    uiAlt: 'Layar Jadwal Staf Poztix Jasa & Layanan berisi kalender harian dengan booking pelanggan untuk tiap staf.',
    photoAlt: 'Resepsionis salon menyambut pelanggan di meja resepsionis, dengan kursi salon terlihat di ruangan belakang.',
    panelCrop: '30% 50%',
    owner: {
      focus: 'Layanan terlaris, transaksi staf, komisi, outlet',
      question: 'Bagaimana performa layanan dan tim?',
      chartTitle: 'Layanan terlaris',
      bars: [
        { label: 'Potong rambut', value: 90 },
        { label: 'Creambath', value: 63 },
        { label: 'Pewarnaan', value: 45 },
        { label: 'Manikur', value: 30 },
      ],
      rows: [
        { label: 'Transaksi & komisi staf', note: 'Rekap per staf dan layanan' },
        { label: 'Performa outlet', note: 'Bandingkan antar-cabang' },
      ],
    },
  },
];

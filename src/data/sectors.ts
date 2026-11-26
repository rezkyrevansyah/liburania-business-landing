import type { ImageMetadata } from 'astro';
import fnbPhoto from '../assets/images/fnb-business.png';
import retailPhoto from '../assets/images/retail-business.png';
import servicePhoto from '../assets/images/service-business.png';
import fnbUi from '../assets/images/ui-fnb-kitchen.png';
import retailUi from '../assets/images/ui-retail-stock.png';
import serviceUi from '../assets/images/ui-service-calendar.png';

// Nama produk, fitur, manfaat, dan jenis usaha mengikuti materi owner (Materi_Lengkap_Liburania_Business.md).
export type SectorId = 'fnb' | 'retail' | 'service';

export interface Sector {
  id: SectorId;
  tab: string;
  product: string;
  audience: string;
  audienceShort: string;
  useCases: string[];
  features: string[];
  challenges: string[];
  headline: string;
  /** Manfaat menurut owner. */
  description: string;
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
    /** Perbandingan antar-outlet, contoh ilustrasi. */
    outlets: { label: string; value: number }[];
  };
}

export const sectors: Sector[] = [
  {
    id: 'fnb',
    tab: 'F&B',
    product: 'Liburania Business F&B',
    audience: 'Restoran, cafe, coffee shop, food court, dan bisnis kuliner.',
    audienceShort: 'Restoran & kafe',
    useCases: ["Restoran", "Cafe", "Coffee shop", "Bakery", "Food court"],
    features: ["Smart POS & Cashier", "Manajemen meja & dine-in", "Kitchen Display System", "Menu, resep & modifier", "Inventory", "Purchasing & supplier", "Food cost", "Sales analytics", "Multi-outlet"],
    challenges: ["Transaksi, diskon, dan void sulit dipantau", "Stok bahan baku tidak akurat", "Pesanan dapur terlambat dan tidak sinkron", "Profit sebenarnya sulit diketahui"],
    headline: 'Bisnis kuliner lebih terkontrol, dari kasir hingga dapur.',
    description:
      'Transaksi lebih cepat, pesanan dapur terpantau, dan stok bahan terkendali. Margin mudah dievaluasi dan pemilik bisa memantau performa bisnis.',
    photo: fnbPhoto,
    ui: fnbUi,
    uiLabel: 'Kitchen Display',
    uiAlt: 'Layar Pesanan Dapur dengan kolom Baru, Diproses, dan Siap berisi pesanan per meja.',
    photoAlt: 'Staf kafe melayani pelanggan di meja kasir, dengan mesin kopi dan dapur di belakangnya.',
    panelCrop: '62% 50%',
    owner: {
      focus: 'Penjualan menu, bahan dan biaya, performa outlet',
      question: 'Menu apa yang perlu dievaluasi?',
      chartTitle: 'Penjualan menu',
      outlets: [{ label: 'Outlet 1', value: 88 }, { label: 'Outlet 2', value: 64 }, { label: 'Outlet 3', value: 47 }],
      bars: [
        { label: 'Kopi susu', value: 92 },
        { label: 'Nasi goreng', value: 74 },
        { label: 'Roti bakar', value: 51 },
        { label: 'Teh tarik', value: 33 },
      ],
    },
  },
  {
    id: 'retail',
    tab: 'Retail',
    product: 'Liburania Business Retail',
    audience: 'Toko retail, minimarket, toko oleh-oleh, merchandise, dan fashion.',
    audienceShort: 'Toko & retail',
    useCases: ["Minimarket", "Toko oleh-oleh", "Fashion store", "Merchandise", "Toko retail"],
    features: ["Smart POS", "Produk & katalog", "Barcode & SKU", "Promo & harga", "Inventory", "Stock opname & transfer barang", "Purchasing & supplier", "Multi-outlet", "Laporan penjualan", "Kontrol kasir"],
    challenges: ["Transaksi dan aktivitas kasir tidak terpantau", "Stok selisih atau produk kehabisan", "Pengadaan dan penerimaan barang tidak terstruktur", "Produk terlaris dan nilai persediaan sulit diketahui"],
    headline: 'Penjualan, produk, dan stok dalam satu kendali.',
    description:
      'Penjualan terpantau, stok akurat, produk terlaris jelas, dan pembelian terorganisir. Kasir mudah diawasi dan performa cabang bisa dievaluasi.',
    photo: retailPhoto,
    ui: retailUi,
    uiLabel: 'Produk & stok',
    uiAlt: 'Layar Produk & Stok berisi daftar produk dengan SKU, harga, jumlah stok, dan status menipis atau habis.',
    photoAlt: 'Staf toko suvenir memindai barcode buku catatan di meja kasir, dengan rak mug dan tas kanvas di belakangnya.',
    panelCrop: '50% 40%',
    owner: {
      focus: 'Produk terlaris, nilai dan pergerakan stok, outlet',
      question: 'Produk mana yang perlu diperhatikan?',
      chartTitle: 'Produk terlaris',
      outlets: [{ label: 'Outlet 1', value: 81 }, { label: 'Outlet 2', value: 58 }, { label: 'Outlet 3', value: 36 }],
      bars: [
        { label: 'Tas kanvas', value: 88 },
        { label: 'Mug keramik', value: 69 },
        { label: 'Buku catatan', value: 47 },
        { label: 'Kain motif', value: 28 },
      ],
    },
  },
  {
    id: 'service',
    tab: 'Jasa & Layanan',
    product: 'Liburania Business Jasa',
    audience: 'Salon, barbershop, spa, laundry, bengkel, rental, dan bisnis jasa lainnya.',
    audienceShort: 'Salon & spa',
    useCases: ["Salon & barbershop", "Spa & wellness", "Laundry", "Bengkel", "Rental", "Service center"],
    features: ["Booking & jadwal staf", "POS layanan & produk", "Paket layanan", "Komisi staf", "Riwayat pelanggan & CRM", "Promo, voucher & membership", "Laporan", "Multi-outlet"],
    challenges: ["Jadwal staf bertabrakan", "Layanan, produk, dan paket dicatat terpisah", "Komisi staf dihitung manual", "Data pelanggan dan tren penjualan sulit dianalisis"],
    headline: 'Jadwal, pelanggan, layanan, dan komisi lebih teratur.',
    description:
      'Jadwal lebih teratur, benturan jadwal staf berkurang, dan komisi transparan. Riwayat pelanggan tersimpan dan produktivitas staf bisa dievaluasi.',
    photo: servicePhoto,
    ui: serviceUi,
    uiLabel: 'Jadwal per staf',
    uiAlt: 'Layar Jadwal Staf berisi kalender harian dengan booking pelanggan untuk tiap staf.',
    photoAlt: 'Resepsionis salon menyambut pelanggan di meja resepsionis, dengan kursi salon terlihat di ruangan belakang.',
    panelCrop: '30% 50%',
    owner: {
      focus: 'Layanan terlaris, transaksi staf, komisi, outlet',
      question: 'Bagaimana performa layanan dan tim?',
      chartTitle: 'Layanan terlaris',
      outlets: [{ label: 'Outlet 1', value: 92 }, { label: 'Outlet 2', value: 61 }, { label: 'Outlet 3', value: 42 }],
      bars: [
        { label: 'Potong rambut', value: 90 },
        { label: 'Creambath', value: 63 },
        { label: 'Pewarnaan', value: 45 },
        { label: 'Manikur', value: 30 },
      ],
    },
  },
];

import type { ImageMetadata } from 'astro';
import fnbPhoto from '../assets/images/fnb-business.png';
import retailPhoto from '../assets/images/retail-business.png';
import servicePhoto from '../assets/images/service-business.png';

// Identitas UI dipisahkan dari kode modul URL resmi (brief §9): fnb/retail/service ↔ fnb/tenant/visitor.
export type SectorId = 'fnb' | 'retail' | 'service';

export interface Sector {
  id: SectorId;
  moduleCode: 'fnb' | 'tenant' | 'visitor';
  tab: string;
  product: string;
  audience: string;
  audienceShort: string;
  headline: string;
  description: string;
  flow: [string, string, string, string];
  highlights: { title: string; text: string }[];
  caption: string;
  photo: ImageMetadata;
  photoAlt: string;
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
    headline: 'Dari pesanan ke dapur, operasional lebih selaras.',
    description:
      'Hubungkan kasir, meja, pesanan dapur, resep, dan persediaan untuk membantu tim bekerja lebih teratur.',
    flow: ['Pesanan di kasir', 'Koordinasi dapur', 'Pengelolaan bahan & resep', 'Evaluasi penjualan'],
    highlights: [
      { title: 'POS & meja', text: 'Penjualan, menu, pembayaran, dan layanan makan di tempat.' },
      { title: 'Kitchen Display', text: 'Status pesanan dan stasiun dapur dalam satu alur kerja.' },
      { title: 'Resep & biaya bahan', text: 'Varian, modifier, bahan, dan komposisi resep tiap menu.' },
    ],
    caption: 'Pembelian, supplier, inventori, dan multi-outlet melengkapi kebutuhan operasional.',
    photo: fnbPhoto,
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
    audience: 'Toko suvenir, merchandise, dan minimarket.',
    audienceShort: 'Toko & suvenir',
    headline: 'Barang terjual, persediaan lebih mudah ditelusuri.',
    description:
      'Kelola kasir, katalog produk, stok, dan pembelian agar aktivitas toko tercatat lebih terstruktur.',
    flow: [
      'Pencarian produk/SKU',
      'Transaksi kasir',
      'Pemantauan stok',
      'Evaluasi penjualan & pengadaan',
    ],
    highlights: [
      { title: 'SKU & barcode', text: 'Kategori, harga, SKU, dan barcode setiap produk.' },
      { title: 'Stok & opname', text: 'Pergerakan stok, opname, dan transfer antar-outlet.' },
      { title: 'Pembelian & supplier', text: 'Purchase order, penerimaan barang, dan retur.' },
    ],
    caption: 'Kelola promo, pantau aktivitas kasir, dan evaluasi performa beberapa outlet.',
    photo: retailPhoto,
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
    audience: 'Salon, barbershop, spa, dan wellness.',
    audienceShort: 'Salon & spa',
    headline: 'Jadwal staf tertata, layanan lebih mudah dipantau.',
    description:
      'Atur booking per staf, transaksi layanan dan produk, paket, komisi, serta riwayat pelanggan dalam satu sistem.',
    flow: [
      'Staf mencatat booking',
      'Jadwal pelayanan',
      'Transaksi layanan/produk',
      'Rekap komisi & laporan',
    ],
    highlights: [
      { title: 'Booking per staf', text: 'Kalender, ketersediaan, dan slot untuk tiap jenis layanan.' },
      { title: 'Paket layanan', text: 'Pengelolaan paket beserta sisa penggunaannya.' },
      { title: 'Komisi & riwayat pelanggan', text: 'Komisi per layanan, profil, dan riwayat kunjungan.' },
    ],
    caption: 'Promo, membership, dan laporan membantu pengelolaan layanan di beberapa cabang.',
    photo: servicePhoto,
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

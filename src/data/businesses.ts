import type { SectorId } from './sectors';

export type BusinessIconId =
  | 'utensils' | 'coffee' | 'croissant' | 'flame' | 'building'
  | 'gift' | 'shirt' | 'store' | 'bag' | 'compass'
  | 'scissors' | 'sparkles' | 'laundry' | 'wrench' | 'clock' | 'laptop';

export interface BusinessType {
  name: string;
  need: string;
  icon: BusinessIconId;
}

// Jenis usaha mengikuti halaman resmi modul. Tidak ada klaim integrasi antarmodul.
export const businessGroups: Record<SectorId, BusinessType[]> = {
  fnb: [
    { name: 'Restoran & rumah makan', need: 'Kasir, meja, dan pesanan dapur', icon: 'utensils' },
    { name: 'Kafe & kedai kopi', need: 'Transaksi cepat, resep, dan bahan baku', icon: 'coffee' },
    { name: 'Bakery & kedai minuman', need: 'Komposisi resep dan stok bahan', icon: 'croissant' },
    { name: 'Outlet kuliner hotel & wisata', need: 'Layanan meja dan koordinasi dapur', icon: 'flame' },
    { name: 'Kuliner multi-outlet', need: 'Pantau banyak cabang dalam satu platform', icon: 'building' },
  ],
  retail: [
    { name: 'Souvenir & oleh-oleh', need: 'Katalog produk, stok, dan laporan', icon: 'gift' },
    { name: 'Fashion & merchandise', need: 'Katalog SKU dan penjualan merchandise', icon: 'shirt' },
    { name: 'Minimarket & toko kelontong', need: 'Barcode, stock opname, dan promo', icon: 'store' },
    { name: 'Retail hotel & resort', need: 'Toko suvenir dan produk di hotel', icon: 'bag' },
    { name: 'Retail destinasi wisata', need: 'Theme park, waterpark, dan museum', icon: 'compass' },
  ],
  service: [
    { name: 'Salon & barbershop', need: 'Booking per staf dan komisi karyawan', icon: 'scissors' },
    { name: 'Spa & wellness', need: 'Jadwal terapis dan paket perawatan', icon: 'sparkles' },
    { name: 'Laundry', need: 'Pencatatan layanan dan pekerjaan', icon: 'laundry' },
    { name: 'Bengkel', need: 'Transaksi jasa dan suku cadang', icon: 'wrench' },
    { name: 'Rental', need: 'Layanan sewa berbasis durasi', icon: 'clock' },
    { name: 'Service center', need: 'Transaksi dan pengelolaan pelanggan', icon: 'laptop' },
  ],
};

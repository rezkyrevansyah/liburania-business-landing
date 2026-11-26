import type { SectorId } from './sectors';

export type BusinessIconId =
  | 'utensils' | 'coffee' | 'croissant' | 'flame'
  | 'gift' | 'shirt' | 'store' | 'bag'
  | 'scissors' | 'sparkles' | 'laundry' | 'wrench';

export interface BusinessType {
  name: string;
  icon: BusinessIconId;
}

// Jenis usaha mengikuti materi owner. Tidak ada klaim integrasi antarmodul.
export const businessGroups: Record<SectorId, BusinessType[]> = {
  fnb: [
    { name: 'Restoran', icon: 'utensils' },
    { name: 'Cafe & coffee shop', icon: 'coffee' },
    { name: 'Bakery', icon: 'croissant' },
    { name: 'Food court', icon: 'flame' },
  ],
  retail: [
    { name: 'Minimarket & toko retail', icon: 'store' },
    { name: 'Toko oleh-oleh', icon: 'gift' },
    { name: 'Fashion store', icon: 'shirt' },
    { name: 'Merchandise', icon: 'bag' },
  ],
  service: [
    { name: 'Salon & barbershop', icon: 'scissors' },
    { name: 'Spa & wellness', icon: 'sparkles' },
    { name: 'Laundry & service center', icon: 'laundry' },
    { name: 'Bengkel & rental', icon: 'wrench' },
  ],
};

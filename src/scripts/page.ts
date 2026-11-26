// Enhancement ringan. Semua konten sudah ada di HTML; tanpa skrip ini ketiga panel tampil berurutan.
type SectorId = 'fnb' | 'retail' | 'service';

const $$ = <T extends HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Analytics: hanya dikirim jika dataLayer sudah disiapkan oleh tag yang disetujui. Tanpa data pribadi.
function track(event: string, props: Record<string, string | undefined>) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event, ...props });
}

/* ---------- Sektor aktif: dipakai penjelajah solusi dan laporan pemilik ---------- */
const tabs = $$<HTMLButtonElement>('[data-tab]');
const switches = $$<HTMLButtonElement>('[data-switch]');
const panels = $$<HTMLElement>('[data-panel]');
const ownerPanels = $$<HTMLElement>('[data-owner-panel]');
let current: SectorId = 'fnb';

panels.forEach((p) => p.setAttribute('role', 'tabpanel'));

function showOnly(list: HTMLElement[], key: string, id: SectorId, animate: boolean) {
  for (const el of list) {
    const active = el.dataset[key] === id;
    el.toggleAttribute('data-inactive', !active);
    if (active && animate) {
      el.classList.remove('is-entering');
      void el.offsetWidth; // restart animasi
      el.classList.add('is-entering');
      window.setTimeout(() => el.classList.remove('is-entering'), 800);
    }
  }
}

function setSector(id: SectorId, source: string) {
  if (id === current) return;
  current = id;
  for (const tab of tabs) {
    const selected = tab.dataset.tab === id;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  for (const btn of switches) btn.setAttribute('aria-pressed', String(btn.dataset.switch === id));
  showOnly(panels, 'panel', id, true);
  showOnly(ownerPanels, 'ownerPanel', id, true);
  track('sector_select', { sector: id, source_section: source });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => setSector(tab.dataset.tab as SectorId, 'solusi'));
  tab.addEventListener('keydown', (e) => {
    const last = tabs.length - 1;
    const next =
      e.key === 'ArrowRight' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    tabs[next].focus();
    setSector(tabs[next].dataset.tab as SectorId, 'solusi');
  });
});

switches.forEach((btn) => btn.addEventListener('click', () => setSector(btn.dataset.switch as SectorId, 'kendali')));

// Pintasan hero: pilih sektor, gulir ke solusi, pindahkan fokus ke judulnya.
$$<HTMLAnchorElement>('[data-sector-link]').forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setSector(link.dataset.sectorLink as SectorId, 'hero');
    const title = document.getElementById('solusi-title');
    title?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    title?.focus({ preventScroll: true });
  }),
);

// Tautan langsung, mis. #solusi-retail.
const fromHash = location.hash.match(/^#solusi-(fnb|retail|service)$/)?.[1] as SectorId | undefined;
if (fromHash) setSector(fromHash, 'url');

/* ---------- Header: garis bawah setelah halaman digulir ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.toggleAttribute('data-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- CTA bawah ponsel ---------- */
const bar = document.querySelector<HTMLElement>('[data-mobile-cta]');
const heroCta = document.querySelector<HTMLElement>('[data-hero-cta]');
const enders = $$<HTMLElement>('[data-final-cta], [data-footer]');
if (bar && heroCta) {
  let heroPassed = false;
  const endVisible = new Set<Element>();
  const update = () => {
    const show = heroPassed && endVisible.size === 0;
    bar.toggleAttribute('data-visible', show);
    bar.toggleAttribute('inert', !show);
    bar.setAttribute('aria-hidden', String(!show));
  };
  new IntersectionObserver(([entry]) => {
    heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    update();
  }).observe(heroCta);
  const endObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.isIntersecting ? endVisible.add(entry.target) : endVisible.delete(entry.target);
    update();
  });
  enders.forEach((el) => endObserver.observe(el));
}

/* ---------- Klik CTA ---------- */
document.addEventListener('click', (e) => {
  const el = (e.target as Element).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const event = el.dataset.track!;
  track(event, {
    sector: el.dataset.sector ?? current,
    section: el.dataset.section,
    destination_type: event === 'sales_click' ? 'contact_form' : undefined,
  });
});

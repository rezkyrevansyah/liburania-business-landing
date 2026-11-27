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
const panels = $$<HTMLElement>('[data-panel]');
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
  showOnly(panels, 'panel', id, true);
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

// Pintasan hero & daftar jenis usaha: pilih sektor, gulir ke solusi, pindahkan fokus ke judulnya.
$$<HTMLAnchorElement>('[data-sector-link]').forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setSector(link.dataset.sectorLink as SectorId, link.dataset.source ?? 'hero');
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
// Scrollspy: menu aktif = section navigasi terakhir yang sudah melewati 40% tinggi layar. Di hero: tidak ada.
const navLinks = $$<HTMLAnchorElement>('[data-nav-link]');
const navTargets = navLinks.map((a) => document.querySelector<HTMLElement>(a.hash));
let activeNav = -1;
const onScroll = () => {
  header?.toggleAttribute('data-scrolled', window.scrollY > 8);
  const line = window.innerHeight * 0.4;
  let next = -1;
  navTargets.forEach((el, i) => {
    if (el && el.getBoundingClientRect().top <= line) next = i;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) next = navLinks.length - 1;
  if (next === activeNav) return;
  activeNav = next;
  navLinks.forEach((a, i) => (i === next ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current')));
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
onScroll();

/* ---------- Reveal: tiap kelompok section muncul sekali saat terlihat ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -10% 0px' },
);
$$<HTMLElement>('[data-reveal]').forEach((el) => revealObserver.observe(el));

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
    destination_type: event.endsWith('_click') && el.getAttribute('href')?.startsWith('https://wa.me') ? 'whatsapp' : undefined,
  });
});

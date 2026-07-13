import { MetadataRoute } from 'next';

const base = 'https://hispanic.financial';
const locales = ['es', 'en'] as const;

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  lastModified?: Date,
): MetadataRoute.Sitemap[number][] {
  return locales.map((locale) => ({
    url: `${base}/${locale}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}${path}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ──────────────────────────────────────────────
    ...entry('', 1.0, 'weekly'),

    // ── Service pages ────────────────────────────────────────
    ...entry('/servicios/impuestos',             0.9, 'monthly'),
    ...entry('/servicios/creacion-de-llc',       0.9, 'monthly'),
    ...entry('/servicios/contabilidad',          0.9, 'monthly'),
    ...entry('/servicios/real-estate',           0.9, 'monthly'),
    ...entry('/servicios/proteccion-patrimonial',0.9, 'monthly'),

    // ── Blog index ───────────────────────────────────────────
    ...entry('/blog', 0.8, 'weekly'),

    // ── Blog articles ────────────────────────────────────────
    ...entry('/blog/como-crear-llc-florida',      0.7, 'monthly', new Date('2026-01-15')),
    ...entry('/blog/impuestos-inmigrantes-usa',   0.7, 'monthly', new Date('2026-02-10')),

    // ── Other pages ──────────────────────────────────────────
    ...entry('/brochure', 0.6, 'monthly'),
  ];
}

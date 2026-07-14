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
    ...entry('/servicios',                       0.85, 'monthly'),
    ...entry('/servicios/impuestos',             0.9, 'monthly'),
    ...entry('/servicios/creacion-de-llc',       0.9, 'monthly'),
    ...entry('/servicios/contabilidad',          0.9, 'monthly'),
    ...entry('/servicios/real-estate',           0.9, 'monthly'),
    ...entry('/servicios/proteccion-patrimonial',0.9, 'monthly'),
    ...entry('/servicios/payroll',               0.85, 'monthly'),
    ...entry('/servicios/itin',                  0.85, 'monthly'),

    // ── Blog index ───────────────────────────────────────────
    ...entry('/blog', 0.8, 'weekly'),

    // ── Blog articles ────────────────────────────────────────
    ...entry('/blog/como-obtener-itin-2026',       0.7, 'monthly', new Date('2026-03-01')),
    ...entry('/blog/impuestos-inmigrantes-usa',   0.7, 'monthly', new Date('2026-02-10')),
    ...entry('/blog/como-crear-llc-florida',      0.7, 'monthly', new Date('2026-01-15')),

    // ── City pages ────────────────────────────────────────────
    ...entry('/ciudades/fort-lauderdale',  0.75, 'monthly'),
    ...entry('/ciudades/boca-raton',       0.75, 'monthly'),
    ...entry('/ciudades/pompano-beach',    0.75, 'monthly'),
    ...entry('/ciudades/miami',            0.75, 'monthly'),
    ...entry('/ciudades/deerfield-beach',  0.75, 'monthly'),

    // ── International hub ────────────────────────────────────
    ...entry('/internacional',             0.8, 'monthly'),

    // ── Country pages ────────────────────────────────────────
    ...entry('/internacional/colombia',    0.75, 'monthly'),
    ...entry('/internacional/mexico',      0.75, 'monthly'),
    ...entry('/internacional/venezuela',   0.75, 'monthly'),
    ...entry('/internacional/argentina',   0.75, 'monthly'),
    ...entry('/internacional/peru',        0.75, 'monthly'),
    ...entry('/internacional/chile',       0.75, 'monthly'),
    ...entry('/internacional/ecuador',     0.75, 'monthly'),
    ...entry('/internacional/espana',      0.75, 'monthly'),

    // ── Other pages ────────────────────────────────────────────
    ...entry('/brochure', 0.6, 'monthly'),
    ...entry('/privacy',  0.3, 'yearly'),
    ...entry('/terms',    0.3, 'yearly'),
  ];
}

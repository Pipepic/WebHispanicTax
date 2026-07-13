# Guía de Integración SEO — Fase 1
**Hispanic Financial · Coral Springs, FL**  
Generado: Junio 2026

---

## Resumen de archivos creados/modificados

| Archivo | Estado | Descripción |
|---|---|---|
| `src/app/[locale]/layout.tsx` | **Modificado** | Meta titles con ciudad + teléfono |
| `src/components/StructuredData.tsx` | **Modificado** | Schema AccountingService + aggregateRating + areaServed |
| `messages/es.json` | **Modificado** | H1 hero con "Coral Springs, Florida" |
| `messages/en.json` | **Modificado** | H1 hero con "Coral Springs, Florida" |
| `src/components/ServicePageLayout.tsx` | **Nuevo** | Layout reutilizable para páginas de servicios |
| `src/app/[locale]/servicios/impuestos/page.tsx` | **Nuevo** | Página de preparación de impuestos |
| `src/app/[locale]/servicios/creacion-de-llc/page.tsx` | **Nuevo** | Página de creación de LLC |
| `src/app/[locale]/servicios/contabilidad/page.tsx` | **Nuevo** | Página de contabilidad QuickBooks |
| `src/app/[locale]/servicios/real-estate/page.tsx` | **Nuevo** | Página de asesoría Real Estate y FIRPTA |
| `src/app/[locale]/servicios/proteccion-patrimonial/page.tsx` | **Nuevo** | Página de protección patrimonial |
| `src/app/[locale]/blog/como-crear-llc-florida/page.tsx` | **Nuevo** | Artículo blog: Cómo crear una LLC en Florida |

---

## Paso 1 — Agregar links en las tarjetas de servicios (`Services.tsx`)

El componente `src/components/Services.tsx` muestra 5 tarjetas expandibles. Cada tarjeta tiene un botón "Ver detalles / View details" que actualmente solo expande la tarjeta en la misma página. Debemos agregar un link "Ver página completa →" que lleve a las páginas de servicios creadas.

### 1a. Agrega `useLocale` y `Link` al componente

Al inicio de `Services.tsx`, los imports ya incluyen `useTranslations` de `next-intl`. Agrega `useLocale` y `Link`:

```tsx
// ANTES:
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// DESPUÉS (ya tienes Link importado, solo agrega useLocale):
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
```

### 1b. Define el mapa de rutas

En la función `Services()`, agrega el mapa de slug por servicio antes del `return`:

```tsx
export default function Services() {
    const t = useTranslations('Services');
    const locale = useLocale();            // ← AGREGA ESTO
    const serviceKeys = ['incorporation', 'taxes', 'real_estate', 'protection', 'accounting'];

    // ← AGREGA ESTE MAPA:
    const serviceRoutes: Record<string, string> = {
        incorporation: 'creacion-de-llc',
        taxes: 'impuestos',
        real_estate: 'real-estate',
        protection: 'proteccion-patrimonial',
        accounting: 'contabilidad',
    };

    return ( /* ... sin cambios ... */ );
}
```

### 1c. Pasa la ruta a `ServiceCard`

En el bloque `serviceKeys.map(...)` dentro del `return`, agrega la prop `pageUrl`:

```tsx
{serviceKeys.map((key, index) => (
    <ServiceCard
        key={key}
        id={key}
        title={t(`items.${key}.title`)}
        desc={t(`items.${key}.desc`)}
        details={t.raw(`items.${key}.details`)}
        index={index}
        viewLabel={t('view_details')}
        closeLabel={t('close')}
        pageUrl={`/${locale}/servicios/${serviceRoutes[key]}`}   // ← AGREGA ESTO
        image={
            key === 'incorporation' ? '/images/services/incorporation.webp' :
            key === 'taxes' ? '/images/services/taxes.webp' :
            key === 'real_estate' ? '/images/services/real_estate.webp' :
            key === 'protection' ? '/images/services/protection.webp' :
            key === 'accounting' ? '/images/services/accounting.webp' :
            undefined
        }
    />
))}
```

### 1d. Actualiza la interfaz y el render de `ServiceCard`

Agrega `pageUrl` a los props de `ServiceCard` y agrega el botón en el footer de la tarjeta:

```tsx
// En la definición de props de ServiceCard, agrega:
{
    id: string;
    title: string;
    desc: string;
    details: string[];
    index: number;
    viewLabel: string;
    closeLabel: string;
    image?: string;
    pageUrl: string;   // ← AGREGA ESTA LÍNEA
}
```

En el "Footer Section" de `ServiceCard` (donde está el botón de ver/cerrar), agrega un link debajo:

```tsx
{/* Footer Section */}
<div className="mt-auto pt-4 flex items-center justify-between">
    <motion.div /* ... botón existente ... */ />

    {/* AGREGA ESTE LINK: */}
    {isOpen && (
        <Link
            href={pageUrl}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-brand-blue hover:underline px-3 py-2"
        >
            Ver página completa
            <ArrowRight className="w-3.5 h-3.5" />
        </Link>
    )}

    <div className={`text-[11px] font-black px-3 py-1.5 rounded-lg ...`}>
        {details.length} ITEMS
    </div>
</div>
```

> **Nota:** El `e.stopPropagation()` es importante para que el click en el Link no active el `toggleOpen` de la tarjeta.

---

## Paso 2 — Agregar dropdown de Servicios en el Navbar (`Navbar.tsx`)

El Navbar actual usa links a secciones de la homepage (`#services`, `#calendar`, etc.). Para las páginas de servicios, podemos:

**Opción A (recomendada — mínima fricción):** El link de "Servicios" en el navbar sigue yendo a `#services`, y el usuario descubre las páginas desde las tarjetas expandibles. No hay que tocar el Navbar.

**Opción B (más SEO juice):** Convertir el link "Servicios" en un dropdown con links directos a cada página de servicio.

### Opción B — Implementación del dropdown

En `Navbar.tsx`, localiza el `navLinks` array y agrega la propiedad opcional `children`:

```tsx
const navLinks = useMemo(() => [
    {
        name: t('services'),
        href: isHomePage ? '#services' : `/${locale}#services`,
        children: [
            { name: locale === 'es' ? 'Preparación de Impuestos' : 'Tax Preparation', href: `/${locale}/servicios/impuestos` },
            { name: locale === 'es' ? 'Creación de LLC' : 'LLC Formation', href: `/${locale}/servicios/creacion-de-llc` },
            { name: locale === 'es' ? 'Contabilidad' : 'Accounting', href: `/${locale}/servicios/contabilidad` },
            { name: locale === 'es' ? 'Real Estate / FIRPTA' : 'Real Estate / FIRPTA', href: `/${locale}/servicios/real-estate` },
            { name: locale === 'es' ? 'Protección Patrimonial' : 'Wealth Protection', href: `/${locale}/servicios/proteccion-patrimonial` },
        ],
    },
    { name: t('calendar'), href: isHomePage ? '#calendar' : `/${locale}#calendar` },
    // ... resto sin cambios
], [t, isHomePage, locale]);
```

Luego actualiza el render del desktop para mostrar el dropdown al hacer hover sobre "Servicios". Este cambio es más complejo y opcional — el equipo puede implementarlo en Fase 2.

---

## Paso 3 — Agregar link al Blog en el Navbar (opcional)

Para hacer visible el blog, agrega un link "Blog" al `navLinks`:

```tsx
const navLinks = useMemo(() => [
    // ... links existentes ...
    { name: locale === 'es' ? 'Blog' : 'Blog', href: `/${locale}/blog` },
], [t, isHomePage, locale]);
```

> **Nota:** Debes crear también `src/app/[locale]/blog/page.tsx` como índice del blog antes de agregar este link.

---

## Paso 4 — Agregar las páginas al sitemap

Si el proyecto usa un `sitemap.ts` generado por Next.js, agrégalo en `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hispanic.financial'
    const locales = ['es', 'en']

    const servicePages = [
        'impuestos',
        'creacion-de-llc',
        'contabilidad',
        'real-estate',
        'proteccion-patrimonial',
    ]

    const blogPages = [
        'como-crear-llc-florida',
    ]

    const entries: MetadataRoute.Sitemap = []

    // Homepage
    for (const locale of locales) {
        entries.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        })
    }

    // Service pages
    for (const locale of locales) {
        for (const slug of servicePages) {
            entries.push({
                url: `${baseUrl}/${locale}/servicios/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.9,
            })
        }
    }

    // Blog pages
    for (const locale of locales) {
        for (const slug of blogPages) {
            entries.push({
                url: `${baseUrl}/${locale}/blog/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        }
    }

    return entries
}
```

Si el proyecto no tiene `sitemap.ts`, crea este archivo en `src/app/sitemap.ts`.

---

## Paso 5 — Agregar links internos desde la homepage

Para que Google rastree las páginas de servicios desde la homepage, necesitas agregar por lo menos un link `<a href>` en el HTML renderizado (no solo hash links). La forma más simple es agregar links en el footer.

Busca el componente `Footer` (probablemente en `src/components/Footer.tsx`) y agrega una columna "Servicios":

```tsx
<div>
    <h4 className="font-black text-white mb-4 uppercase tracking-widest text-xs">Servicios</h4>
    <ul className="space-y-2">
        <li><Link href={`/${locale}/servicios/impuestos`} className="text-white/60 hover:text-white text-sm transition-colors">Preparación de Impuestos</Link></li>
        <li><Link href={`/${locale}/servicios/creacion-de-llc`} className="text-white/60 hover:text-white text-sm transition-colors">Creación de LLC</Link></li>
        <li><Link href={`/${locale}/servicios/contabilidad`} className="text-white/60 hover:text-white text-sm transition-colors">Contabilidad QuickBooks</Link></li>
        <li><Link href={`/${locale}/servicios/real-estate`} className="text-white/60 hover:text-white text-sm transition-colors">Real Estate / FIRPTA</Link></li>
        <li><Link href={`/${locale}/servicios/proteccion-patrimonial`} className="text-white/60 hover:text-white text-sm transition-colors">Protección Patrimonial</Link></li>
    </ul>
</div>
```

---

## Paso 6 — Verificar en local

Después de los cambios, verifica que:

```bash
# Las rutas nuevas responden con 200
curl -I http://localhost:3000/es/servicios/impuestos
curl -I http://localhost:3000/en/servicios/impuestos
curl -I http://localhost:3000/es/servicios/creacion-de-llc
curl -I http://localhost:3000/es/blog/como-crear-llc-florida

# Revisa el sitemap
curl http://localhost:3000/sitemap.xml
```

En el browser, verifica que:
- Las páginas cargan sin errores
- El JSON-LD aparece en el `<head>` (inspeccionar elemento → buscar `application/ld+json`)
- Los meta titles incluyen "Coral Springs, FL"
- El hreflang apunta a la URL alternativa correcta

---

## Paso 7 — Acciones post-deploy

Una vez desplegado, realiza estas acciones en 24-48 horas:

1. **Google Search Console** → URL Inspection → pega cada URL nueva → "Solicitar indexación"
2. **Google Search Console** → Sitemaps → agrega `https://hispanic.financial/sitemap.xml`
3. **Schema Markup Validator** → prueba cada URL en https://validator.schema.org
4. **Rich Results Test** → https://search.google.com/test/rich-results

---

## URLs creadas por la Fase 1

| URL (ES) | URL (EN) | Keyword objetivo |
|---|---|---|
| `/es/servicios/impuestos` | `/en/servicios/impuestos` | preparación de impuestos Coral Springs |
| `/es/servicios/creacion-de-llc` | `/en/servicios/creacion-de-llc` | crear LLC Florida hispanos |
| `/es/servicios/contabilidad` | `/en/servicios/contabilidad` | contabilidad QuickBooks Coral Springs |
| `/es/servicios/real-estate` | `/en/servicios/real-estate` | FIRPTA Florida inversionistas hispanos |
| `/es/servicios/proteccion-patrimonial` | `/en/servicios/proteccion-patrimonial` | protección patrimonial LLC Trust Florida |
| `/es/blog/como-crear-llc-florida` | `/en/blog/como-crear-llc-florida` | cómo crear una LLC en Florida |

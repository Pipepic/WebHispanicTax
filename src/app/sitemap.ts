import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hispanictaxinc.com';

    return [
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            alternates: {
                languages: {
                    es: `${baseUrl}/es`,
                    en: `${baseUrl}/en`,
                },
            },
        },
        {
            url: `${baseUrl}/es`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            alternates: {
                languages: {
                    es: `${baseUrl}/es`,
                    en: `${baseUrl}/en`,
                },
            },
        },
        {
            url: `${baseUrl}/en/brochure`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: `${baseUrl}/es/brochure`,
                    en: `${baseUrl}/en/brochure`,
                },
            },
        },
        {
            url: `${baseUrl}/es/brochure`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: `${baseUrl}/es/brochure`,
                    en: `${baseUrl}/en/brochure`,
                },
            },
        },
    ];
}

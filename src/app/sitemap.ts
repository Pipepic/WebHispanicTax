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
    ];
}

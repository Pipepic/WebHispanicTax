import { NextResponse } from 'next/server';

// Real RSS Feeds for Financial/Tax News
const RSS_FEEDS = [
    'https://www.irs.gov/newsroom/news-releases-rss-feed',
    'https://finance.yahoo.com/news/rssindex',
];

interface NewsItem {
    id: string;
    title: string;
    source: string;
    date: string;
    summary: string;
    link: string;
    image?: string;
}

// Fallback Mock data with high-quality imagery
const MOCK_NEWS: NewsItem[] = [
    {
        id: 'm1',
        title: 'IRS Announces New Tax Incentives for Small Businesses',
        source: 'Internal Revenue Service',
        date: 'Recent',
        summary: 'New tax credits available for companies investing in green energy and local community development.',
        link: 'https://www.irs.gov',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'm2',
        title: 'Market Trends: Finance for the Hispanic Community',
        source: 'Hispanic Financial',
        date: 'Today',
        summary: 'Detailed analysis of how current interest rates are affecting home ownership for Hispanic families.',
        link: '#',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'm3',
        title: 'Essential Steps for New Corporation Filing',
        source: 'SBA.gov',
        date: 'Weekly Update',
        summary: 'A step-by-step guide to everything you need to know before registering your next LLC or Corp.',
        link: 'https://www.sba.gov',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'm4',
        title: 'Electronic Filing Mandatory for More Taxpayers',
        source: 'Tax Policy Center',
        date: 'Feb 2026',
        summary: 'The IRS expands the number of forms that must be filed electronically this tax season.',
        link: '#',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop'
    }
];

function shuffleArray<T>(array: T[]): T[] {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

const getFallbackImage = (source: string) => {
    if (source.includes('IRS')) return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800';
    if (source.includes('Hispanic')) return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800';
    return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800'; // General finance
};

async function fetchAndParseRSS(url: string): Promise<NewsItem[]> {
    try {
        const response = await fetch(url, { next: { revalidate: 3600 } });
        const xml = await response.text();

        const items: NewsItem[] = [];
        const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

        const sourceName = url.includes('irs.gov') ? 'IRS News' : 'Global Finance';

        for (const match of itemMatches) {
            const content = match[1];
            const title = content.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1] || '';
            const link = content.match(/<link>([\s\S]*?)<\/link>/)?.[1] || '#';
            const pubDate = content.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || '';
            const description = content.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/)?.[1] || '';

            // Try to extract image from media:content or description img tag
            let image = content.match(/<media:content[^>]*url="([^"]*)"/)?.[1]
                || content.match(/<enclosure[^>]*url="([^"]*)"/)?.[1]
                || description.match(/<img[^>]*src="([^"]*)"/)?.[1];

            if (title && items.length < 10) {
                items.push({
                    id: Math.random().toString(36).substr(2, 9),
                    title: title.trim(),
                    source: sourceName,
                    date: new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    summary: description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
                    link: link.trim(),
                    image: image || getFallbackImage(sourceName)
                });
            }
        }
        return items;
    } catch (error) {
        console.error(`Error fetching RSS from ${url}:`, error);
        return [];
    }
}

export async function GET() {
    try {
        const feedsResults = await Promise.all(RSS_FEEDS.map(url => fetchAndParseRSS(url)));
        let allNews = feedsResults.flat();

        if (allNews.length < 2) {
            allNews = [...allNews, ...MOCK_NEWS];
        }

        // Shuffle and limit
        const randomizedNews = shuffleArray(allNews).slice(0, 4);

        return NextResponse.json(randomizedNews, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
            }
        });
    } catch (err) {
        return NextResponse.json(shuffleArray(MOCK_NEWS).slice(0, 4));
    }
}

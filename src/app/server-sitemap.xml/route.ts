// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { getMDFiles, getTags } from '../../utils/markdown';

export async function GET(request: Request) {
    const metaDatas = getMDFiles();
    const tags = getTags();

    return getServerSideSitemap([
        {
            loc: 'https://dmson1218.com',
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.7,
        },
        ...metaDatas.map(metaData => ({
            loc: `https://dmson1218.com/posts/${metaData.title.replace(/ /g, '%20')}`,
            lastmod: metaData.date.toISOString(),
            priority: 0.7,
        })),
        ...tags.map(tag => ({
            loc: `https://dmson1218.com/tags/${tag.replace(/ /g, '%20')}`,
            lastmod: new Date().toISOString(),
            priority: 0.7,
        })),
    ]);
}

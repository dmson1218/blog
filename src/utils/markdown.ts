import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MetaData {
    title: string;
    tags: string[];
    date: Date;
}

const RECENT_POSTS = 3;
const POST_PER_PAGE = 5;
const markdownDir = path.join(process.cwd(), '/src/content');

export function getMDFiles(): MetaData[] {
    const files = fs.readdirSync(markdownDir);
    const metaDatas = files.map(file => {
        const filePath = path.join(markdownDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        return data as MetaData;
    });

    metaDatas.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    return metaDatas;
}

export function getMDFileBySlug(file: string): {
    data: MetaData;
    content: string;
} {
    const filePath = path.join(markdownDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return { data: data as MetaData, content };
}

export function getMDFilesByPage(): MetaData[][] {
    const metaDatas = getMDFiles();

    const pages = [];
    for (let i = 0; i < metaDatas.length; i += POST_PER_PAGE) {
        pages.push(metaDatas.slice(i, i + POST_PER_PAGE));
    }

    return pages;
}

export function getRecentMDFiles(): MetaData[] {
    return getMDFiles().slice(0, RECENT_POSTS);
}

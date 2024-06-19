import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDir = path.join(process.cwd(), '/src/content');

export function getMDFiles() {
    const files = fs.readdirSync(markdownDir);
    const metaDatas = files.map(file => {
        const filePath = path.join(markdownDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        return data;
    });

    metaDatas.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    return metaDatas;
}

export function getMDFileBySlug(file: string) {
    const filePath = path.join(markdownDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return { data, content };
}

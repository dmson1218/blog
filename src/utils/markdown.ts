import fs from 'fs';
import path from 'path';

const markdownDir = path.join(process.cwd(), '/src/content');

export function getMDFiles() {
    return fs.readdirSync(markdownDir);
}

export function getMDFileBySlug(file: string) {
    const filePath = path.join(markdownDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent;
}

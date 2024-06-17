import fs from 'fs';
import path from 'path';

const markdownDir = path.join(process.cwd(), 'content');

export function getMDFiles() {
    return fs.readdirSync(markdownDir);
}

export function getMDFileBySlug(filename: string) {
    const realPath = path.join(markdownDir, filename);
    const fileContents = fs.readFileSync(realPath, 'utf-8');
    return fileContents;
}

export function getAllMDFiles() {
    const files = getMDFiles();
    return files.map(file => {
        return getMDFileBySlug(file);
    });
}

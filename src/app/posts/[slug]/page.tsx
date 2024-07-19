import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { getMDFiles, getMDFileBySlug } from '#utils/markdown';
import Head from '#components/Head';

type PostBySlugPageParams = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = () => {
    const files = getMDFiles();
    const paths = files.map(file => ({
        params: {
            slug: file.title.replace(/\.md$/, '').replaceAll(' ', '%20'),
        },
    }));

    return paths;
};

const PostBySlugPage = ({ params }: PostBySlugPageParams) => {
    const filename = decodeURIComponent(params.slug);
    const file = filename + '.md';
    const { data, content } = getMDFileBySlug(file);

    return (
        <>
            <div className="pb-6 border-b my-border flex flex-col gap-2">
                <div className="text-2xl sm:text-3xl font-bold">
                    {data.title}
                </div>
            </div>
            <ReactMarkDown
                key={content}
                className="prose-base prose-headings:mt-6 prose-headings:mb-1 prose-headings:font-bold prose-img:mx-auto prose-img:my-2 prose-pre:my-0 prose-pre:p-0 prose-pre:text-base prose-a:text-blue-500 prose-a:underline prose-p:my-1.5"
                children={content}
                rehypePlugins={[rehypeHighlight]}
            />
            <div className="mt-8 text-sm text-right">
                Updated: {data.date.getFullYear()}.{' '}
                {(data.date.getMonth() + 1).toString().padStart(2, '0')}.{' '}
                {data.date.getDate().toString().padStart(2, '0')}.
            </div>
        </>
    );
};

export default PostBySlugPage;

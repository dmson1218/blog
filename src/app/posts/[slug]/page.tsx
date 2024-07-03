import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { getMDFileBySlug } from '#utils/markdown';

interface PostBySlugPageParams {
    params: {
        slug: string;
    };
}

const PostBySlugPage = ({ params }: PostBySlugPageParams) => {
    const filename = decodeURIComponent(params.slug);
    const file = filename + '.md';
    const { data, content } = getMDFileBySlug(file);

    return (
        <>
            <div className="pb-6 border-b border-black flex flex-col gap-2">
                <div className="text-2xl sm:text-3xl font-bold">
                    {data.title}
                </div>
            </div>
            <ReactMarkDown
                key={content}
                className="prose-base prose-headings:mt-6 prose-headings:mb-0 prose-headings:font-bold prose-img:mx-auto prose-img:my-4 prose-pre:my-0 prose-pre:p-0 prose-pre:text-base prose-a:text-blue-500 prose-a:underline prose-p:my-2"
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

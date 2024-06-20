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
            <div className="mb-4 pb-4 border-b flex flex-col gap-3">
                <div className="text-3xl font-bold">{data.title}</div>
                <div className="text-sm text-gray-500 content-end">
                    {data.date.getFullYear()}년{' '}
                    {(data.date.getMonth() + 1).toString().padStart(2, '0')}월{' '}
                    {data.date.getDate().toString().padStart(2, '0')}일
                </div>
            </div>
            <ReactMarkDown
                key={content}
                className="prose-base prose-headings:font-bold prose-img:m-0 prose-pre:m-0 prose-pre:p-0 prose-pre:text-base"
                children={content}
                rehypePlugins={[rehypeHighlight]}
            />
        </>
    );
};

export default PostBySlugPage;

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
            <div className="mb-6 pb-6 border-b flex justify-between">
                <div className="text-3xl font-bold">{data.title}</div>
                <div className="text-sm text-gray-500 content-end">
                    {data.date.getFullYear()}-{data.date.getMonth() + 1}-
                    {data.date.getDate()}
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

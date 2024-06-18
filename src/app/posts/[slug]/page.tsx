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
    const content = getMDFileBySlug(file);

    return (
        <div className="px-6 py-8 mx-4 rounded-xl bg-white">
            <div className="mb-6 text-3xl font-bold">{filename}</div>
            <ReactMarkDown
                key={content}
                className="prose-base prose-headings:font-bold prose-img:m-0 prose-pre:m-0 prose-pre:p-0 prose-pre:text-base"
                children={content}
                rehypePlugins={[rehypeHighlight]}
            />
        </div>
    );
};

export default PostBySlugPage;

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
    const file = decodeURIComponent(params.slug) + '.md';
    const content = getMDFileBySlug(file);

    return (
        <ReactMarkDown
            key={content}
            className="prose-base prose-headings:font-bold prose-img:m-0 prose-pre:m-0 prose-pre:p-0 prose-pre:text-base"
            children={content}
            rehypePlugins={[rehypeHighlight]}
        />
    );
};

export default PostBySlugPage;

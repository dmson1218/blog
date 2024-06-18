import { getMDFiles } from '#utils/markdown';
import PreviewLink from '#components/PreviewLink';

const PostsPage = () => {
    const filenames = getMDFiles().map(file => file.replace('.md', ''));

    return filenames.map(filename => (
        <PreviewLink key={filename} filename={filename} />
    ));
};

export default PostsPage;

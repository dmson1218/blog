import { getMDFiles } from '#utils/markdown';
import PreviewLink from '#components/PreviewLink';

const PostsPage = () => {
    const filenames = getMDFiles().map(file => file.replace('.md', ''));

    return (
        <div className="mx-4 flex flex-col gap-2">
            {filenames.map(filename => (
                <PreviewLink key={filename} filename={filename} />
            ))}
        </div>
    );
};

export default PostsPage;

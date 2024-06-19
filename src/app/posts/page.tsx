import { getMDFiles } from '#utils/markdown';
import PreviewLink from '#components/PreviewLink';

const PostsPage = () => {
    const metaDatas = getMDFiles();

    return (
        <div className="mx-4 flex flex-col gap-2">
            {metaDatas.map(({ title, date }) => (
                <PreviewLink key={title} title={title} date={date} />
            ))}
        </div>
    );
};

export default PostsPage;

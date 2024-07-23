import { getTags, getMDFilesByTag } from '#utils/markdown';
import PreviewLink from '#components/PreviewLink';

type PostByTagPageParams = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = () => {
    const tags = getTags();
    const paths = tags.map(tag => ({
        params: {
            slug: tag.replace(/\.md$/, '').replaceAll(' ', '%20'),
        },
    }));

    return paths;
};

const PostByTagPage = ({ params }: PostByTagPageParams) => {
    const tag = decodeURIComponent(params.slug);
    const metaDatas = getMDFilesByTag(tag);

    return (
        <>
            <div className="pb-4 border-b my-border flex flex-col gap-2">
                <div className="text-xl sm:text-3xl font-bold italic">
                    #{tag}
                </div>
                <div className="text-base sm:text-lg font-semibold">
                    총 {metaDatas.length}개의 기록이 있습니다.
                </div>
            </div>
            <div className="grow mt-5 flex flex-col gap-6 sm:gap-8">
                {metaDatas.map(({ title, tags, date }) => (
                    <PreviewLink
                        key={title}
                        title={title}
                        tags={tags}
                        date={date}
                    />
                ))}
            </div>
        </>
    );
};

export default PostByTagPage;

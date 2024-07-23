import Link from 'next/link';
import { getTags } from '#utils/markdown';

const TagsPage: React.FC = () => {
    const tags = getTags();

    return (
        <div className="flex flex-col gap-5">
            <div className="pb-4 border-b my-border flex flex-col gap-2">
                <div className="text-xl sm:text-3xl font-bold">Tags</div>
                <div className="text-base sm:text-lg font-semibold">
                    태그별로 정리된 성장 기록입니다.
                </div>
            </div>
            <div className="text-base sm:text-lg flex flex-wrap gap-6 font-semibold">
                {tags.map(tag => (
                    <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="text-base sm:text-lg font-semibold italic hover:underline"
                    >
                        #{tag}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TagsPage;

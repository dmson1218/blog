import Link from 'next/link';
import { MetaData } from '#utils/markdown';

const PreviewLink = ({ title, category, date }: MetaData) => {
    return (
        <div className="flex gap-1">
            <div className="flex flex-col">
                <Link
                    href={`/posts/${title}`}
                    className="text-base sm:text-xl font-bold content-center hover:underline"
                >
                    {title}
                </Link>
                <div className="flex gap-2 content-center">
                    <div className="text-xs sm:text-sm">
                        {date.getFullYear().toString().slice(2, 4)}.
                        {(date.getMonth() + 1).toString().padStart(2, '0')}.
                        {date.getDate().toString().padStart(2, '0')}
                    </div>
                    <div className="flex gap-1.5">
                        {category.map(cat => (
                            <div
                                key={cat}
                                className="text-xs sm:text-sm italic"
                            >
                                #{cat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewLink;

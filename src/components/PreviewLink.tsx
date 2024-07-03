import Link from 'next/link';
import { MetaData } from '#utils/markdown';

const PreviewLink = ({ title, category, date }: MetaData) => {
    return (
        <div>
            <div className="flex flex-col gap-1">
                <Link
                    href={`/posts/${title}`}
                    className="text-base sm:text-xl font-bold content-center hover:underline"
                >
                    {title}
                </Link>
                <div className="text-xs sm:text-sm italic content-center">
                    {date.getFullYear().toString().slice(2, 4)}.
                    {(date.getMonth() + 1).toString().padStart(2, '0')}.
                    {date.getDate().toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    );
};

export default PreviewLink;

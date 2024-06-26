import Link from 'next/link';
import { MetaData } from '#utils/markdown';

const PreviewLink = ({ title, category, date }: MetaData) => {
    return (
        <div>
            <Link href={`/posts/${title}`}>
                <div className="h-16 px-4 rounded-xl border border-blue-200 flex justify-between">
                    <div className="text-sm md:text-base font-bold content-center">
                        {title}
                    </div>
                    <div className="text-sm content-center">
                        {date.getFullYear().toString().slice(2, 4)}.
                        {(date.getMonth() + 1).toString().padStart(2, '0')}.
                        {date.getDate().toString().padStart(2, '0')}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PreviewLink;

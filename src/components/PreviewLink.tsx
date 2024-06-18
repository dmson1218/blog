import Link from 'next/link';

interface PreviewProps {
    filename: string;
}

const PreviewLink = ({ filename }: PreviewProps) => {
    return (
        <div>
            <Link href={`/posts/${filename}`}>
                <div className="h-20 px-4 bg-white rounded-xl border border-gray-200 content-center">
                    {filename}
                </div>
            </Link>
        </div>
    );
};

export default PreviewLink;

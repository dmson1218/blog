import Link from 'next/link';

interface PreviewProps {
    filename: string;
}

const PreviewLink = ({ filename }: PreviewProps) => {
    return (
        <div>
            <Link href={`/posts/${filename}`}>{filename}</Link>
        </div>
    );
};

export default PreviewLink;

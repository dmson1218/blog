import Link from 'next/link';

const navigationItem = [
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
];

const Navigation = () => (
    <nav className="py-5 border-black border-b">
        <div className="my-width px-8 mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold italic">
                Son.
            </Link>
            <div className="flex gap-4 text-lg">
                {navigationItem.map(item => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="font-semibold hover:underline"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </nav>
);

export default Navigation;

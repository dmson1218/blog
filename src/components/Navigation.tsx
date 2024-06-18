import Link from 'next/link';

const navigationItem = [
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
];

const Navigation = () => (
    <nav className="py-5 bg-cyan-100">
        <div className="max-w-4xl px-4 mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl">
                ForFree
            </Link>
            <div className="flex gap-4 text-lg">
                {navigationItem.map(item => (
                    <Link key={item.href} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </nav>
);

export default Navigation;

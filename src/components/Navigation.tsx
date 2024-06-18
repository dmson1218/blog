import Link from 'next/link';

const navigationItem = [
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
];

const Navigation = () => (
    <nav className="flex justify-between p-4 bg-cyan-100">
        <Link className="px-2" href="/">
            ForFree
        </Link>
        <div>
            {navigationItem.map(item => (
                <Link key={item.href} className="px-2" href={item.href}>
                    {item.name}
                </Link>
            ))}
        </div>
    </nav>
);

export default Navigation;

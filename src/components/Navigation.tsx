'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeButton';

const navigationItems = [
    { name: 'Posts', href: '/posts' },
    { name: 'Tags', href: '/tags' },
    { name: 'About', href: '/about' },
];

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="py-5 border-b my-border">
            <div className="my-width px-6 sm:px-8 mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl sm:text-2xl font-semibold italic"
                >
                    Son.
                </Link>
                <div className="flex gap-4 sm:text-lg">
                    <DarkModeToggle />
                    <Link
                        key="/search"
                        href="/search"
                        className="w-4 h-4 mx-0.5 sm:mx-1 my-auto cursor-pointer dark:invert transition duration-500 hover:scale-125 transition-transform"
                    >
                        <img src="/image/search.png" alt="search" />
                    </Link>
                    {navigationItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-semibold hover:underline ${pathname === item.href ? 'underline' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

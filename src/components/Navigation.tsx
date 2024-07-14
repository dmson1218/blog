'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeButton';

const navigationItems = [
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
];

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="py-5 border-b my-border">
            <div className="my-width px-8 mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-semibold italic">
                    Son.
                </Link>
                <div className="flex gap-4 text-lg">
                    <DarkModeToggle />
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

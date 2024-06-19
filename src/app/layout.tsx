import type { Metadata } from 'next';
import './globals.css';
import Navigation from '#components/Navigation';

export const metadata: Metadata = {
    title: 'ForFree Blog',
    description: '포프리 블로그입니다.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="relative bg-gray-100">
                <Navigation />
                <div className="max-w-4xl mx-auto my-6 justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}

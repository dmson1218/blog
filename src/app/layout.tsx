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
            <body className="h-screen relative bg-gray-100 flex flex-col">
                <Navigation />
                <div className="grow my-6 flex justify-center">{children}</div>
            </body>
        </html>
    );
}

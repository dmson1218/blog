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
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

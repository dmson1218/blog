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
            <body className="min-h-screen relative bg-slate-100 border-b border-black flex flex-col">
                <Navigation />
                <div className="grow flex justify-center">
                    <div className="my-width p-8 border-x border-black">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}

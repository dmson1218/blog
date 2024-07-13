import type { Metadata } from 'next';
import './globals.css';
import Navigation from '#components/Navigation';
import Footer from '#components/Footer';

export const metadata: Metadata = {
    title: '손동민 기술 블로그',
    description: '손동민 기술 블로그입니다.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="min-h-screen relative bg-slate-100 dark:bg-zinc-900 dark:text-white flex flex-col transition duration-500">
                <Navigation />
                <div className="grow flex justify-center">
                    <div className="my-width p-4 sm:p-8 border-x my-border">
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

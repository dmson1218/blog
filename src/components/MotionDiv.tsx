'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <motion.div
            className="h-full grow"
            key={pathname}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Layout;

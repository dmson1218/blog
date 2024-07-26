'use client';

import { useEffect, useState } from 'react';

const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <img
            src="/image/dark.png"
            alt="dark mode"
            className="w-5 h-5 my-auto cursor-pointer dark:invert transition duration-500 hover:scale-125 transition-transform"
            onClick={toggleDarkMode}
        />
    );
};

export default DarkModeButton;

// components/DarkModeToggle.js
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
            className="w-6 h-6 mx-1.5 my-auto cursor-pointer dark:invert transition duration-500"
            onClick={toggleDarkMode}
        />
    );
};

export default DarkModeButton;

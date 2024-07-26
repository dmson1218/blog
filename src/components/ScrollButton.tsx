'use client';

import { useState, useEffect } from 'react';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-gray-300 text-white p-2 rounded-full shadow-lg duration-500 hover:scale-125 transition-transform"
                >
                    <img
                        src="/image/arrow.png"
                        alt="Scroll to top"
                        className="w-4 h-4 sm:w-6 sm:h-6 transform -rotate-90"
                    />
                </button>
            )}
        </div>
    );
};

export default ScrollButton;

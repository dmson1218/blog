'use client';

import { useState, useEffect } from 'react';
import { MetaData } from '#utils/markdown';
import PreviewLink from './PreviewLink';

type PostPaginationProps = {
    metaDatas: MetaData[][];
};

const PostPagination = ({ metaDatas }: PostPaginationProps) => {
    const [isClient, setIsClient] = useState(false);
    const [currentPage, setCurrentPage] = useState(() => {
        if (typeof window === 'undefined') {
            return 1;
        }
        const storedPage = sessionStorage.getItem('currentPage');
        return storedPage ? Number(storedPage) : 1;
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('currentPage', currentPage.toString());
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < metaDatas.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="min-h-full flex flex-col">
            <div className="pb-4 border-b my-border flex flex-col gap-2">
                <div className="text-xl sm:text-3xl font-bold">Posts</div>
                <div className="text-base sm:text-lg font-semibold">
                    차곡차곡 모아가는 성장 기록입니다.
                </div>
            </div>
            <div className="grow mt-5 flex flex-col gap-6 sm:gap-8">
                {metaDatas[currentPage - 1].map(({ title, tags, date }) => (
                    <PreviewLink
                        key={title}
                        title={title}
                        tags={tags}
                        date={date}
                    />
                ))}
            </div>
            <div className="mx-4 flex justify-center gap-8">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 border my-border rounded-md text-sm sm:text-base font-semibold hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                    Prev
                </button>
                <span className="w-10 my-auto text-center">
                    {currentPage} / {metaDatas.length}
                </span>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 border my-border rounded-md text-sm sm:text-base font-semibold hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostPagination;

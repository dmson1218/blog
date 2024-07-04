'use client';

import { useState } from 'react';
import { MetaData } from '#utils/markdown';
import PreviewLink from './PreviewLink';

type PostPaginationProps = {
    metaDatas: MetaData[][];
};

const PostPagination = ({ metaDatas }: PostPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < metaDatas.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-full flex flex-col">
            <div className="pb-4 border-b border-black flex flex-col gap-2">
                <div className="text-xl sm:text-3xl font-bold">Posts</div>
                <div className="text-base sm:text-lg font-semibold">
                    차곡차곡 모아가는 성장 기록입니다.
                </div>
            </div>
            <div className="grow mt-5 flex flex-col gap-6 sm:gap-8">
                {metaDatas[currentPage].map(({ title, category, date }) => (
                    <PreviewLink
                        key={title}
                        title={title}
                        category={category}
                        date={date}
                    />
                ))}
            </div>
            <div className="mx-4 flex justify-center gap-8">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 border border-black rounded-md text-sm sm:text-base"
                >
                    Prev
                </button>
                <span className="w-10 my-auto text-center">
                    {currentPage + 1} / {metaDatas.length}
                </span>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 border border-black rounded-md text-sm sm:text-base"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostPagination;

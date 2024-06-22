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
        <div className="h-full flex flex-col justify-between">
            <div>
                {metaDatas[currentPage].map(({ title, category, date }) => (
                    <PreviewLink
                        key={title}
                        title={title}
                        category={category}
                        date={date}
                    />
                ))}
            </div>
            <div className="mx-4 flex justify-between gap-4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    Prev
                </button>
                <span>
                    {currentPage + 1} / {metaDatas.length}
                </span>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostPagination;

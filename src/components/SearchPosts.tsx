'use client';

import { useState } from 'react';
import { MetaData } from '#utils/markdown';
import PreviewLink from './PreviewLink';

const SearchPosts = ({ metaDatas }: { metaDatas: MetaData[] }) => {
    const [search, setSearch] = useState('');

    const filteredMetaDatas = metaDatas.filter(
        ({ title, category }) =>
            title.toLowerCase().includes(search.toLowerCase()) ||
            category.some(cat =>
                cat.toLowerCase().includes(search.toLowerCase()),
            ),
    );

    return (
        <>
            <div className="pb-6 border-b my-border flex flex-col gap-2">
                <div className="text-2xl sm:text-3xl font-bold pb-2">
                    Search
                </div>
                <div className="relative flex items-center">
                    <img
                        src="/image/search.png"
                        alt="search"
                        className="w-4 h-4 absolute left-3 dark:invert transition duration-500"
                    />
                    <input
                        type="text"
                        className="w-full pl-9 p-1.5 border my-border bg-transparent rounded-lg text-black dark:text-white transition duration-500 focus:bg-slate-200 dark:focus:bg-zinc-700 focus:outline-none"
                        placeholder="포스트를 검색하세요."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="grow mt-5 flex flex-col gap-6 sm:gap-8">
                {search
                    ? filteredMetaDatas.map(({ title, category, date }) => (
                          <PreviewLink
                              key={title}
                              title={title}
                              category={category}
                              date={date}
                          />
                      ))
                    : null}
            </div>
        </>
    );
};

export default SearchPosts;

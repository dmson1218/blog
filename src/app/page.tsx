import Link from 'next/link';
import { MetaData, getRecentMDFiles } from '#utils/markdown';
import PreviewLink from '#components/PreviewLink';
import { SmallCheckImage } from '#components/CheckImage';

const FeaturedList: MetaData[] = [
    {
        title: '부스트캠프 웹·모바일 8기 회고',
        tags: ['부스트캠프', '회고'],
        date: new Date('2024-01-02T00:00:00.000Z'),
    },
];

const HomePage: React.FC = () => {
    const recentMetaDatas = getRecentMDFiles();

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="pb-5 border-b my-border flex flex-col gap-1 sm:gap-2">
                    <div className="text-xl sm:text-3xl font-bold">
                        Hello, World!
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-base sm:text-lg flex gap-1 font-semibold">
                            <SmallCheckImage />
                            안녕하세요, 손동민 기술 블로그입니다.
                        </div>
                        <div className="text-base sm:text-lg flex gap-1 font-semibold">
                            <SmallCheckImage />
                            프론트엔드 개발과 클라이밍을 가장 좋아합니다.
                        </div>
                    </div>
                </div>
                <div className="pb-5 border-b my-border flex flex-col">
                    <div className="text-xl sm:text-3xl font-bold">
                        Featured
                    </div>
                    <div className="grow mt-2 sm:mt-3 flex flex-col gap-3 sm:gap-5">
                        {FeaturedList.map(({ title, tags, date }) => (
                            <PreviewLink
                                key={title}
                                title={title}
                                tags={tags}
                                date={date}
                            />
                        ))}
                    </div>
                </div>
                <div className="pb-5 border-b my-border flex flex-col">
                    <div className="text-xl sm:text-3xl font-bold">
                        Recent Posts
                    </div>
                    <div className="grow mt-2 sm:mt-3 flex flex-col gap-3 sm:gap-5">
                        {recentMetaDatas.map(({ title, tags, date }) => (
                            <PreviewLink
                                key={title}
                                title={title}
                                tags={tags}
                                date={date}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Link
                href="/posts"
                className="mt-2 sm:mt-3 flex gap-1 text-base sm:text-lg font-semibold justify-end hover:underline"
            >
                More Posts
                <img
                    src="/image/arrow.png"
                    alt="arrow"
                    className="w-4 h-4 my-auto dark:invert transition duration-500"
                />
            </Link>
        </>
    );
};

export default HomePage;

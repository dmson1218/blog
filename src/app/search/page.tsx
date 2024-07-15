import { getMDFiles } from '#utils/markdown';
import SearchPosts from '#components/SearchPosts';

const SearchPage = () => {
    const metaDatas = getMDFiles();

    return <SearchPosts metaDatas={metaDatas} />;
};

export default SearchPage;

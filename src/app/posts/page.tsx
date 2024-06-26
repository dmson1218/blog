import { MetaData, getMDFilesByPage } from '#utils/markdown';
import PostPagination from '#components/PostPagination';

const PostsPage = () => {
    const metaDatas = getMDFilesByPage();

    return <PostPagination metaDatas={metaDatas} />;
};

export default PostsPage;

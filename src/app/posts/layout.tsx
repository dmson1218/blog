const PostsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="px-6 py-8 mx-4 rounded-xl bg-white">{children}</div>;
};

export default PostsLayout;

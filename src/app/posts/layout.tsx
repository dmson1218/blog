const PostsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="p-12 mx-4 rounded-xl bg-white">{children}</div>;
};

export default PostsLayout;

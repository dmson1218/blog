const PostsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="my-width h-full p-8 rounded-xl bg-white">
            {children}
        </div>
    );
};

export default PostsLayout;

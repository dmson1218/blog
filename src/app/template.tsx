import MotionDiv from '#components/MotionDiv';

export default function Template({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <MotionDiv>{children}</MotionDiv>;
}

const CheckImage = ({ size }: { size: number }, ...props: any[]) => {
    return (
        <img
            src="/image/check.png"
            alt="check"
            className={`w-${size} h-${size} sm:w-${size + 1} sm:h-${size + 1} mt-1.5 ${size === 4 ? 'sm:mt-1' : ''} dark:invert transition duration-500`}
        />
    );
};

export default CheckImage;

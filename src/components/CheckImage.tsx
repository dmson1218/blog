const BigCheckImage = () => {
    return (
        <img
            src="/image/check.png"
            alt="check"
            className="w-4 h-4 sm:w-5 sm:h-5 mt-1.5 sm:mt-1 dark:invert transition duration-500"
        />
    );
};

const SmallCheckImage = () => {
    return (
        <img
            src="/image/check.png"
            alt="check"
            className="w-3 h-3 sm:w-4 sm:h-4 mt-1.5 dark:invert transition duration-500"
        />
    );
};

export { BigCheckImage, SmallCheckImage };

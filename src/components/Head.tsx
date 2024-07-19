import { MetaData } from '#utils/markdown';

const Head = ({ title, category, date }: MetaData) => {
    return (
        <head>
            <title>{title}</title>
            <meta name="description" content={category} />
            <meta name="date" content={date.toISOString()} />
        </head>
    );
};
export default Head;

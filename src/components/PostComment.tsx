'use client';

import { useEffect, useRef } from 'react';

const scriptConfig = {
    src: 'https://utteranc.es/client.js',
    repo: 'dmson1218/blog',
    'issue-term': 'pathname',
    label: 'Comment',
    theme: 'github-light',
    crossorigin: 'anonymous',
    async: true,
};

const PostComment = () => {
    const utterances = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');

        Object.entries(scriptConfig).forEach(([key, value]) => {
            script.setAttribute(key, String(value));
        });

        if (utterances.current && utterances.current.childNodes.length === 0) {
            utterances.current.appendChild(script);
        }
    }, []);

    return <div ref={utterances} />;
};

export default PostComment;

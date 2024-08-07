'use client';

import { useEffect, useRef } from 'react';

const PostComment = () => {
    const utterancesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptParentNode = utterancesRef.current;
        if (!scriptParentNode) return;

        while (scriptParentNode.firstChild) {
            scriptParentNode.removeChild(scriptParentNode.firstChild);
        }

        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', 'dmson1218/blog');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', 'Comment');
        script.setAttribute('theme', 'github-light');
        script.setAttribute('crossorigin', 'anonymous');

        if (utterancesRef.current) utterancesRef.current.appendChild(script);
    }, []);

    return <div ref={utterancesRef} />;
};

export default PostComment;

import React from 'react';

export const useInfinityScroll = (onFetch) => {
    const [page, setPage] = React.useState(1);
    const handleScroll = React.useCallback((e) => {
        const element = e.target;
        if (element.scrollHeight - element.scrollTop - 1 <= element.clientHeight) {
            setPage((p) => p + 1);
        }
    }, []);
    React.useEffect(() => {
        onFetch(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return handleScroll;
};
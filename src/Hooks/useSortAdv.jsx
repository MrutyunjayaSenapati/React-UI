import { useState } from 'react';

function useSortAdv(collection, reverse = false) {
    const [sortedCollection, setSortedCollection] = useState([]);

    useState(() => {
        const sorted = [...collection].sort((a, b) => {
            if (reverse) {
                return b - a; // Sort in descending order if reverse is true
            } else {
                return a - b; // Sort in ascending order
            }
        });
        setSortedCollection(sorted);
    }, [collection, reverse]); // Re-run sort when collection or reverse flag changes

    return sortedCollection;
}

export default useSortAdv;

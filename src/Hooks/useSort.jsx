import { useEffect, useState } from 'react';

export default function useSort(val) {
    const [sortArr, setSortArr] = useState([]);

    useEffect(() => {
        
            const sorted = val.sort();
            setSortArr(sorted);
        
    }, [val]);

    return sortArr;
}

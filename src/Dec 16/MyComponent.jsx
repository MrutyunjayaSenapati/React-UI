import React from 'react';
import useSort from './useSort';

function MyComponent() {
    const data = [5, 3, 8, 1, 2];
    const sortedData = useSort(data, true); // Sort in reverse order

    return (
        <div>
            <h1>Sorted Data</h1>
            <ul>
                {sortedData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default MyComponent;

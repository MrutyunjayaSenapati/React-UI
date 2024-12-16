import React from 'react'
import useSort from '../Hooks/useSort';

export default function SortingArr() {
    const arr=[1,4,2,3];
    const sortArr=useSort(arr);
  return (
    <div>
        <h2>Sorted Array</h2>
       <p>Original: {arr.join(',')}</p>
       <p>Sorted:{sortArr.join(',')}</p>
    </div>
  )
}

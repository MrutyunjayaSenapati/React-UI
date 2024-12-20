import React, { useMemo } from 'react'
import { useState } from 'react'

export default function MemoDemo() {
  const [count, setCount] = useState(0);
 
  function expensiveTask(num){
    // console.log('expensive task');
    let result = 0;
    for(let i = 1; i < 1000000000; i++){
      result =num * 5;
    }
    return result;
  }
  function handleClick() {
    console.log('clicked');
    setCount(count + 1);
  }
  let double = useMemo(()=>expensiveTask(9),[]);
  // let double = expensiveTask(9);
  return (
    <>
      <div className='container-fluid text-center'>
        <div>count:{count}</div>
        <button onClick={handleClick}>Increment</button>

        <div>Double: {double}</div>
        
      </div>

    </>
  )
}

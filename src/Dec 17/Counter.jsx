import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        if(count===0)return;
        setCount(count-1);
    }

  return (
    <div className='container-fluid text-center mt-4'>
        <h1>{count}</h1>
        <button className='btn btn-primary m-2' onClick={handleIncrement}>Add</button>
        <button className='btn btn-danger m-2' onClick={handleDecrement}>Deleter</button>
    </div>
  )
}

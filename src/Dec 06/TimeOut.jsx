import React, { useEffect, useRef, useState } from 'react'

export default function TimeOut() {
  
  const [data,setData]=useState(null);
const m=useRef(null);
  
 
  function m1(){
    setData("wellcome React");
  }

  function m3(){
    setData("Here we Go");
  }

  function m2(){
    setData("React");
  }
 
  function handleClick(){
    setTimeout(m1,1000);
    m.current=setTimeout(m2,2000);
    setTimeout(m3,3000);
  }
  function handleCancelClick(){
    clearTimeout(m.current)
  }
  return (
    <div>
      <button onClick={handleClick} >click me</button>
      <button onClick={handleCancelClick}>cancel msg</button>
      <p>{data}</p>
        
    </div>
  )
}

import React, { useCallback,useState } from 'react'

export default function CallbackDemo() {
    const [count, setCount] = useState(0);
    const [text,setText]=useState("");

    const increment=useCallback(()=>{
      setCount((prevCount)=>prevCount+1);
    },[]);

    const decrement=useCallback(()=>{
      setCount((prevCount)=>prevCount-1);
    },[]);

    const updateText=(e)=>{
      setText(e.target.value);
    }


    
    return (
    <div className='container-fluid text-center'>
        <h1>CallbackDemo</h1>
        <h2>Count: {count}</h2>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <div>
        <input type="text" value={text}  
        onChange={updateText}
        placeholder='Type something...'/>
        
       </div>
       <p>{text}</p>

    </div>
  )
}

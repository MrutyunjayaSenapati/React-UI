import React, { useState } from 'react'

export default function ClipbordDemo() {
    const [status,setStatus]=useState('');
    function handleBlur(){
        setStatus('');
    }
    function handleCopy(){
        setStatus('Copied to Clipbord')
    }
    function handlePaste(){
        document.onpaste=()=>false;
    }
    function handleContext(){
        alert('Right Click Disabled');
        document.onContextMenu=()=>false;
    }
    function handleDoubleClick(){
        window.open('m1.jpg','Mobile','width=400 height=500')
    }
  return (
    <div className='container-fluid' style={{height:'100vh'}} onContextMenu={handleContext} >
        <img src="/Image/m1.png" width="100"height="100"onDoubleClick={handleDoubleClick}/>
        <dl>
            <dt>Your Account Number</dt>
            <dd><input type='text' onBlur={handleBlur} onCopy={handleCopy} ></input></dd>
            <dd></dd>
            <dt>Verify Account Number</dt>
            <dd><input type="text" onPaste={handlePaste} /></dd>
        </dl> 

    </div>
  )
}

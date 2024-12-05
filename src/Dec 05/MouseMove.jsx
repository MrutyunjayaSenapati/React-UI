import React, { useState } from 'react'

export default function MouseMove() {
    const [imgStyle,setImgStyle]=useState({position:'',left:'',top:''});
    function handleMouseMove(e){
        setImgStyle({position:'fixed',left:e.clientX+'px',top:e.clientY+'px'});
    }
  return (
    <div onMouseMove={handleMouseMove}>
        <div style={{height:'1000px'}}>
            please move mouse pointer to test

        </div>
        <img src="/Image/fire.gif" style={imgStyle} width="50" height="50" alt="" />

    </div>
  )
}

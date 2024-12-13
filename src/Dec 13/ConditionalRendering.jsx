import React, { Component, useState } from 'react'
import Register from './Register';
import Login from './Login';

export default function ConditionalRendering() {
    const [component,setComponent]=useState();

    function LoadComponent(e){
        if(e.target.id==="Register"){
            setComponent(<Register/>);
        }
        else{
            setComponent(<Login/>);
        }
    }
  return (
    <div className='container-fluid text-center'>
        <nav>
            <button id='Signin' onClick={LoadComponent} className='btn btn-primary'>Sign In</button>
            <button id='Register' onClick={LoadComponent} className='btn btn-dark'>Register</button>

        </nav>
        <section>
            {
                component
            }
        </section>
        

    </div>
  )
}

import React, { useEffect, useState } from 'react'
export function UserLogin(){
    useEffect(()=>{
        console.log("Login Component Mounted");
        return()=>{
            console.log("Login Component Unmounted");
        }
    },[])
    return(
        <div>
            <h2>User Login</h2>
        </div>
    )
}

export function UserRegister(){
    useEffect(()=>{
        console.log('Register Component Mounted');
        return()=>{
            console.log("Register component Umounted");
        }
    },[])
    return(
        <div>
            <h2>Register New User</h2>
        </div>
    )
}



export default function HookComponent() {
    const [view,setView]=useState("");

    function handleLogin(){
        setView(<UserLogin/>);
    }
    function handleRegister(){
        setView(<UserRegister/>);
    }
    
  return (
    <div className='container-fluid'>

       <h2>Shoping Home</h2>
       <button onClick={handleLogin}>Login</button><button onClick={handleRegister}>Register</button> 

       <hr/>
       <div className='mt-4'>
        {view}
       </div>
    </div>
  )
}
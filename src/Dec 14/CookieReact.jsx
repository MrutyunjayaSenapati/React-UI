import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function CookieReact() {
  const[cookies,setCookie,removeCookie]=useCookies(['username']);
  const[userName,setUserName]=useState("");
  function handleNameChange(e){
    setUserName(e.target.value);
  }
  function handleSigninClick(){
    setCookie('username',userName,{expires:new Date('2024-12-17')});
  }
  function handleSignout(){
    removeCookie('username');
  }
  return (
    <div>
        <header>
          {
            (cookies['username'])?<span>Hello! {cookies['username']} <span><img src="/public/Image/fire.gif" width="20" height="20" alt="" /></span><button onClick={handleSignout}>SignOut</button></span>:<span>Hello! Guest<input type='text' onChange={handleNameChange}/><button onClick={handleSigninClick}>SignIn</button></span>
          }
        </header>
    </div>
  )
}

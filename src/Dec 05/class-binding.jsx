import React, { useState } from 'react'

function ClassBinding() {
    const [theme,setTheme]=useState('border-dark');
    const [btnTheme,setbtnTheme]=useState('btn-dark');
    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border-secondary bg-dark text-light');
            setbtnTheme('btn-light');
        }else{
            setTheme('border-dark');
            setbtnTheme('btn-dark');
        }

    }


  return (
    <div className='conatainer-fluid d-flex justify-content-center align-items-center'style={{height:'100vh'}}>
        <form className={`border border-2 p-4 rounded ${theme}`}>
            <div className='form-switch'>
                <input type='checkbox' onChange={handleThemeChange} className='form-check-input'/>
                <label className='form-check-lable'>Dark Mode</label>
            </div>
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type='text'/></dd>
                <dt>Password</dt>
                <dd><input type='password'/></dd>
            </dl>

        </form>

    </div>
  )
}

export default ClassBinding
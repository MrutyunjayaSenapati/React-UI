import React from 'react'
import { useCaptcha } from '../Hooks/useCaptcha'

export function Login() {
    let code=useCaptcha();
  return (
    <div className='container-fluid'>
        <h3>User Login</h3>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="text" /></dd>
            <dt>Verify Code</dt>
            <dd>
                {code}
            </dd>
        </dl>

    </div>
  )
}

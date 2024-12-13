import React from 'react'

export default function Register() {
  return (
    <div>
        <dl>
            <dt>First Name</dt>
            <dd><input type="text" /></dd>
            <dt>Last name</dt>
            <dd><input type="text" /></dd>
            <dt>Mobile</dt>
            <dd><input type="number" /></dd>

        </dl>
        <button type='submit'>Submit</button>
    </div>
  )
}

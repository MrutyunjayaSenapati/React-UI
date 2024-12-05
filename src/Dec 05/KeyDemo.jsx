import axios from 'axios';
import React, { useState, useEffect } from 'react';

function KeyDemo() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState('');
  const [errorClass, setErrorClass] = useState('');
  const [capsWarning, setCapsWarning] = useState(false);

  useEffect(() => {
    axios
      .get('/JSON/users.json')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
      });
  }, []);

  function VerifyUser(e) {
    const userId = e.target.value;
    for (let user of users) {
      if (user.UserId === userId) {
        setMsg('User ID Taken - Try Another');
        setErrorClass('text-danger');
        return;
      }
    }
    setMsg('User ID Available');
    setErrorClass('text-success');
  }

  function checkCapsLock(e) {
    setCapsWarning(e.getModifierState('CapsLock'));
  }

  return (
    <>
      <div className="container-fluid">
        <center>
          <h2>Register User</h2>
          <dl>
            <dt>User ID</dt>
            <dd>
              <input type="text" onKeyUp={VerifyUser} />
              </dd>
              <span className={errorClass}>{msg}</span>
           
            <dt>Password</dt>
            <dd>
              <input type="password" onKeyUp={checkCapsLock} />
              {capsWarning && (
                <span className="bi bi-exclamation-triangle text-warning">
                  Warning: Caps ON
                </span>
              )}
            </dd>
          </dl>
        </center>
      </div>
    </>
  );
}

export default KeyDemo;

import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleData = async () => {
    console.warn("email, password", email, password);
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.warn(result);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login'>
      <h1 >Login Page</h1>
      <input type='email' placeholder='Enter your email' className='inputBox' value={email} onChange={handleEmailChange}/>
      <input type='password' placeholder='Enter your password' className='inputBox' value={password} onChange={handlePasswordChange} />
      <button className="btn" onClick={handleData}>Login</button>
    </div>
  );
};

import React, { useEffect, useState } from 'react'
import './../App.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const[name,setName]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  },)

const collectData = async () => {
  console.warn(name,email,password)
  let  result= await fetch('http://localhost:8000/register',{
    method:'post',
    body: JSON.stringify({name,email,password}),
    headers: {
      'Content-type':'application/json'
    },
  })
  result= await result.json()
  console.warn(await result)
  localStorage.setItem("user",JSON.stringify(result));
  navigate('/');
  }

  return (
   <>
   <h1 className='signup'>Sign Up here</h1>
   <input className='inputBox'  value={name}  onChange={(e) => setName(e.target.value)}  type='text' placeholder='Enter your Name'/>
   <input className='inputBox' value={email}  onChange={(e) => setEmail(e.target.value)}  type='text' placeholder='Enter your Email'/>
   <input className='inputBox' value={password} onChange={(e) => setPassword(e.target.value)}   type='password' placeholder='Enter your Password'/>
   <button className='btn' onClick={collectData}  type='submit'>Submit</button>
   </>
  )
}
export default Signup;
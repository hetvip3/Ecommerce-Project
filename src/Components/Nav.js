import React from 'react'
import {Link} from 'react-router-dom'
import './Addproduct'
import './Login'
import './Products'
import './Signup'
import './Updateproduct'
import { useNavigate } from 'react-router-dom'
import '../App.css'


const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logout = () =>{
    console.warn("logout")
    localStorage.clear('user')
    navigate('/')
  }
  return (
    <div className = "Nav">
        <ul>
            <li><Link to='/' >Products </Link></li>
            <li><Link to='/Addproduct' >Add Products </Link></li>
            <li><Link to='/Updateproduct' >Update Products </Link></li>
            <li><Link to='/Login' >Login</Link></li>
            <li>{auth ? <Link className='link' onClick={logout} to="/logout">Logout</Link>:
            <Link className='link'to="/signup">sign up</Link> }</li>

        </ul>
    </div>
  )
}

export default Nav
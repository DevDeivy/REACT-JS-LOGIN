import React, { useState } from 'react'
import './Login.css'
import { FaUser, FaTwitter, FaLinkedin, FaGithub, FaLock, FaGoogle, FaEnvelope} from 'react-icons/fa';

const Login = () => {

    const [action, action_register] = useState('');

    const Register = () => {
        action_register(' active')
    }

    const Login = () =>{
        action_register('')
    }
    
  return (
    <div className={`box-login${action}`}>
        <div className="container login">
            <h1>Login</h1>
            <div className="social-icons">
                <a href="#"><FaGithub className='btn-icon1'/></a>
                <a href="#"><FaLinkedin className='btn-icon1'/></a>
                <a href="#"><FaTwitter className='btn-icon1'/></a>
                <a href="#"><FaGoogle className='btn-icon1'/></a>
            </div>

            <div className="add-information">
                <input type="email" placeholder='Email' required/>
                <FaEnvelope className='btn-icon2'/>
            </div>

            <div className="add-information">
                <input type="password" placeholder='Password' />
                <FaLock className='btn-icon2'/>
            </div>

            <div className="forgot-password-selecction">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className='btn-login'>Login</button>

            <div className="user-register">
                <p>Don't have a count?<a href="#" onClick={Register}>register here</a></p>
            </div>        
        </div>

        <div className="container register">
            <h1>Register</h1>
            <div className="social-icons">
                <a href="#"><FaGithub className='btn-icon1'/></a>
                <a href="#"><FaLinkedin className='btn-icon1'/></a>
                <a href="#"><FaTwitter className='btn-icon1'/></a>
                <a href="#"><FaGoogle className='btn-icon1'/></a>
            </div>

            <div className="add-information">
                <input type="text" placeholder='User Name' required/>
                <FaUser className='btn-icon2'/>
            </div>

            <div className="add-information">
                <input type="email" placeholder='Email' required/>
                <FaEnvelope className='btn-icon2'/>
            </div>

            <div className="add-information">
                <input type="password" placeholder='Password' />
                <FaLock className='btn-icon2'/>
            </div>

            <button type="submit" className='btn-login'>Register</button>

            <div className="user-register">
                <p>you have a count?<a href="#" onClick={Login}>Login here</a></p>
            </div>        
        </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

   const [userInfo,setUserInfo]=useState({
       email:"",
       pass:""
   })
   const [errors,setErrors]=useState({
       email:'',
       pass:'',
       others:""
   })
  
   const handleEmailChange = e =>{

   }

   const handlePasswordChange = e =>{

   }

   const handleLogin = e =>{
       e.preventDefault()
   }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} />
               
                <input type="password" placeholder="password" onChange={handlePasswordChange} />
               
                <button>Login</button>

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button >Google</button>
        </div>
    );
};

export default Login;
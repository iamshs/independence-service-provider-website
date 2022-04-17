import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Login.css'
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        pass: ""
    })
    const [errors, setErrors] = useState({
        email: '',
        pass: '',
        others: ""
    })

    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ errors, email: "Your Email is Invalid" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }

    const handlePassword = e => {
        const passRegex = /.{8,}/;
        const validPass = passRegex.test(e.target.value)
        if (validPass) {
            setUserInfo({ ...userInfo, pass: e.target.value })
            setErrors({ ...errors, pass: '' })
        }
        else {
            setErrors({ ...errors, pass: 'Your password must be at least 8 character' })
            setUserInfo({ ...userInfo, pass: '' })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.pass)
    }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmail} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePassword} />
                {errors?.pass && <p className="error-message">{errors.pass}</p>}
                <button>Login</button>

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button >Google</button>
            <ToastContainer/>
        </div>
    );
};

export default Login;
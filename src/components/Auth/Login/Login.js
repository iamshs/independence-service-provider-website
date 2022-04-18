import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,

        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle,googleUser,googleError] = useSignInWithGoogle(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        pass: ""
    })
    const [errors, setErrors] = useState({
        email: '',
        pass: '',

    })
    //handling Email
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
    //handling password
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
    //handling login
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.pass)
    }
    //handling private route navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    //google user navigate

    if (googleUser){
        navigate('/')
    }

    //hook and google error handling
    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                   toast("Please provide a valid email");
                    break;
                case "auth/popup-closed-by-user":
                   toast("Pop-up Closed By User");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmail} required/>
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePassword} required />
                {errors?.pass && <p className="error-message">{errors.pass}</p>}
                <button>Login</button>
                <ToastContainer />
                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button type='submit' onClick={() => signInWithGoogle()} >Google</button>
            
        </div>
    );
};

export default Login;
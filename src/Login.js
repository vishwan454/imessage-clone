import React from 'react';
import './Login.css'
import images from './images.jpg'
import {auth, provider } from './firebase'
import { Button } from '@material-ui/core';

const Login = () => {
    const signIn= ()=>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return ( 
        <div className="login">
            <div className="login__logo">
                 <img src={images} alt="imessage logo"/>
                 <h1>iMessage</h1>  
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
     );
}
 
export default Login;
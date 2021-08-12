import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from './firebase';
import './Login.css'



function Login() {

    const history= useHistory();

    const[email, setEMail]= useState("");
    const[password, setpassword]= useState("");
    
    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error=> alert(error.message))
    }
    const register= e =>{
        e.preventDefault();
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {console.log(auth);
        if(auth){
            history.push('/')
        }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src ="https://miro.medium.com/max/700/0*c1o1-n4LhZEJirvq.png"/>
            </Link>
            <div className="login__container">
                <h1> Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}  onChange={e => setEMail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password}  onChange={e=> setpassword(e.target.value)} />
                    <button type="submit" onClick={signIn} class="login__signInButton">Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} class="login__registerButton">Create an Amazon account</button>


            </div>

            
        </div>
    )
}

export default Login

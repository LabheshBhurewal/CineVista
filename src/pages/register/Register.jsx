import React, { useRef, useState } from 'react'
import './register.scss'

const Register = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart =()=>{
       setEmail(emailRef.current.value);
    }

    const handleFinish =()=>{
       setPassword(passwordRef.current.value);
    }

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
            <button className="logInButton">SignIn</button>
        </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies ,TV Shows, and more</h1>
            <h2>watch anymore , cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {!email ? 
            (<div className="input">
                <input type="email" placeholder="enter address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>
                    GetStarted
                    </button>
            </div>):
            (
            <form className="input">
            <input type="password" placeholder="enter address" ref={passwordRef}/>
            <button className="registerButton" onClick={handleFinish}>
                GetStarted
                </button>
            </form>
        )}
        </div>
    </div>
  )
}

export default Register
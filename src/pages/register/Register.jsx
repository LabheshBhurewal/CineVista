import React from 'react'
import './register.scss'

const Register = () => {
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
            <div className="input">
                <input type="email" placeholder="enter address"/>
                <div className="registerButton">GetStarted</div>
            </div>
        </div>
    </div>
  )
}

export default Register
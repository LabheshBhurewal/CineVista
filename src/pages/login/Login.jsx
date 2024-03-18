import React, { useRef, useState } from 'react'
import './login.scss'

const login = () => {

  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
     
        </div>
        </div>
        <div className="container">
            <form>
            <h1>SignIN</h1>
            <input type='email' placeholder='email or phone Number'></input>
            <input type='password' placeholder='password'></input>
            <button className='signIn'>SignIn</button>
            <span>
            New to Netflix? <b>Sign up now.</b>
           </span>
           <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
           </small>
           </form>
        </div>
    </div>
  )
}

export default login
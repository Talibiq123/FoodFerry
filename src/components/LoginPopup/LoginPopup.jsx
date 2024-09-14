import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign up")

  return (
    <div className='login-popup'>
      <form class="login-popup-container">
        <div class="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="login" />
        </div>
        <div class="login-popup-inputs">
            {currState === "Login"? <></>: <input type="text" placeholder='Your Name' required /> }
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign up"? "Create Account": "Login"}</button>
        <div class="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
        ? <p>Create a new account?<span onClick={() => setCurrState("Sign Up")}>Click Here.</span></p>
        :<p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here!</span></p> }  
      </form>
    </div>
  )
}

export default LoginPopup

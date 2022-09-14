import React from 'react'
import './signin.css';

const SignIn = () => {
  return (
    <div className="sign-in">
    <h1>Have an account Already</h1>
    <h3>Sign in here!</h3>
    <form>
     
        <label for="email">Email</label>
        <input name="email" type="email" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <label for="text">Project Name</label>
        <input name="text" type="text" />


        <button>SIGN IN</button>
        <p>Don't Have an account? Sign Up</p>
    </form>
</div>
  )
}

export default SignIn
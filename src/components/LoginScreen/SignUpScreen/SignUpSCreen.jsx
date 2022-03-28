import React from "react";
import './SignUpScreen.css'

const SignUpScreen = () => {
    return(
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type='email'/>
                <input placeholder="Password" type='password' />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="signUpScreen-gray">New to Netflix?</span>
                    <span className="signUpScreen-link">Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
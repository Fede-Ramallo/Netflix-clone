import React from "react";
import { useNavigate } from 'react-router-dom';
import './SignUpScreen.css'

const SignUpScreen = ({setIsLoggedIn }) => {

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        navigate('/browse')
      }

    return(
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type='email' required />
                <input placeholder="Password" type='password' required/>
                <button type="submit" onClick={onSubmitHandler}>Sign In</button>
                <h4>
                    <span className="signUpScreen-gray">New to Netflix?</span>
                    <span className="signUpScreen-link">Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;